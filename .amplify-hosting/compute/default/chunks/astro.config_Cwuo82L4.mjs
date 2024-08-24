import react from '@vitejs/plugin-react';
import { version } from 'react-dom';
import { fileURLToPath } from 'node:url';
import autoprefixerPlugin from 'autoprefixer';
import tailwindPlugin from 'tailwindcss';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import 'kleur/colors';

function getReactMajorVersion() {
  const matches = /\d+\./.exec(version);
  if (!matches) {
    return NaN;
  }
  return Number(matches[0]);
}
function isUnsupportedVersion(majorVersion) {
  return majorVersion < 17 || majorVersion > 19 || Number.isNaN(majorVersion);
}
const versionsConfig = {
  17: {
    server: "@astrojs/react/server-v17.js",
    client: "@astrojs/react/client-v17.js",
    externals: ["react-dom/server.js", "react-dom/client.js"]
  },
  18: {
    server: "@astrojs/react/server.js",
    client: "@astrojs/react/client.js",
    externals: ["react-dom/server", "react-dom/client"]
  },
  19: {
    server: "@astrojs/react/server.js",
    client: "@astrojs/react/client.js",
    externals: ["react-dom/server", "react-dom/client"]
  }
};

const FAST_REFRESH_PREAMBLE = react.preambleCode;
function getRenderer(reactConfig) {
  return {
    name: "@astrojs/react",
    clientEntrypoint: reactConfig.client,
    serverEntrypoint: reactConfig.server
  };
}
function optionsPlugin(experimentalReactChildren) {
  const virtualModule = "astro:react:opts";
  const virtualModuleId = "\0" + virtualModule;
  return {
    name: "@astrojs/react:opts",
    resolveId(id) {
      if (id === virtualModule) {
        return virtualModuleId;
      }
    },
    load(id) {
      if (id === virtualModuleId) {
        return {
          code: `export default {
						experimentalReactChildren: ${JSON.stringify(experimentalReactChildren)}
					}`
        };
      }
    }
  };
}
function getViteConfiguration$1({ include, exclude, babel, experimentalReactChildren } = {}, reactConfig) {
  return {
    optimizeDeps: {
      include: [
        reactConfig.client,
        "react",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "react-dom"
      ],
      exclude: [reactConfig.server]
    },
    plugins: [react({ include, exclude, babel }), optionsPlugin(!!experimentalReactChildren)],
    resolve: {
      dedupe: ["react", "react-dom", "react-dom/server"]
    },
    ssr: {
      external: reactConfig.externals,
      noExternal: [
        // These are all needed to get mui to work.
        "@mui/material",
        "@mui/base",
        "@babel/runtime",
        "use-immer",
        "@material-tailwind/react"
      ]
    }
  };
}
function src_default({
  include,
  exclude,
  babel,
  experimentalReactChildren
} = {}) {
  const majorVersion = getReactMajorVersion();
  if (isUnsupportedVersion(majorVersion)) {
    throw new Error(`Unsupported React version: ${majorVersion}.`);
  }
  const versionConfig = versionsConfig[majorVersion];
  return {
    name: "@astrojs/react",
    hooks: {
      "astro:config:setup": ({ command, addRenderer, updateConfig, injectScript }) => {
        addRenderer(getRenderer(versionConfig));
        updateConfig({
          vite: getViteConfiguration$1(
            { include, exclude, babel, experimentalReactChildren },
            versionConfig
          )
        });
        if (command === "dev") {
          const preamble = FAST_REFRESH_PREAMBLE.replace(`__BASE__`, "/");
          injectScript("before-hydration", preamble);
        }
      }
    }
  };
}

async function getPostCssConfig(root, postcssInlineOptions) {
  let postcssConfigResult;
  if (!(typeof postcssInlineOptions === "object" && postcssInlineOptions !== null)) {
    let { default: postcssrc } = await import('postcss-load-config');
    const searchPath = typeof postcssInlineOptions === "string" ? postcssInlineOptions : root;
    try {
      postcssConfigResult = await postcssrc({}, searchPath);
    } catch (e) {
      postcssConfigResult = null;
    }
  }
  return postcssConfigResult;
}
async function getViteConfiguration(tailwindConfigPath, nesting, root, postcssInlineOptions) {
  const postcssConfigResult = await getPostCssConfig(root, postcssInlineOptions);
  const postcssOptions = postcssConfigResult?.options ?? {};
  const postcssPlugins = postcssConfigResult?.plugins?.slice() ?? [];
  postcssPlugins.push(tailwindPlugin(tailwindConfigPath));
  postcssPlugins.push(autoprefixerPlugin());
  return {
    css: {
      postcss: {
        ...postcssOptions,
        plugins: postcssPlugins
      }
    }
  };
}
function tailwindIntegration(options) {
  const customConfigPath = options?.configFile;
  const nesting = false;
  return {
    name: "@astrojs/tailwind",
    hooks: {
      "astro:config:setup": async ({ config, updateConfig, injectScript }) => {
        updateConfig({
          vite: await getViteConfiguration(
            customConfigPath,
            nesting,
            fileURLToPath(config.root),
            config.vite.css?.postcss
          )
        });
        {
          injectScript("page-ssr", `import '@astrojs/tailwind/base.css';`);
        }
      }
    }
  };
}

function awsAmplify() {
  let _config;
  return {
    name: "astro-aws-amplify",
    hooks: {
      "astro:config:setup": ({ config, updateConfig }) => {
        updateConfig({
          build: {
            client: new URL(
              `./.amplify-hosting/static${config.base}`,
              config.root
            ),
            server: new URL("./.amplify-hosting/compute/default/", config.root)
          }
        });
      },
      "astro:config:done": ({ config, setAdapter }) => {
        setAdapter({
          name: "astro-aws-amplify",
          serverEntrypoint: "astro-aws-amplify/server",
          supportedAstroFeatures: {
            serverOutput: "stable",
            hybridOutput: "stable",
            staticOutput: "unsupported",
            assets: {
              supportKind: "stable",
              isSharpCompatible: true,
              isSquooshCompatible: true
            }
          },
          args: {
            client: config.build.client?.toString(),
            server: config.build.server?.toString(),
            host: config.server.host,
            port: 3e3,
            assets: config.build.assets
          }
        });
        _config = config;
      },
      "astro:build:done": async () => {
        const deployManifestConfig = {
          version: 1,
          routes: [
            {
              path: `${_config.base}assets/*`,
              target: {
                kind: "Static"
              }
            },
            {
              path: `${_config.base}*.*`,
              target: {
                kind: "Static"
              },
              fallback: {
                kind: "Compute",
                src: "default"
              }
            },
            {
              path: "/*",
              target: {
                kind: "Compute",
                src: "default"
              }
            }
          ],
          computeResources: [
            {
              name: "default",
              entrypoint: "entry.mjs",
              runtime: "nodejs18.x"
            }
          ],
          framework: {
            name: "astro",
            version: "4.0.0"
          }
        };
        const functionsConfigPath = join(
          fileURLToPath(_config.root),
          "/.amplify-hosting/deploy-manifest.json"
        );
        await writeFile(
          functionsConfigPath,
          JSON.stringify(deployManifestConfig)
        );
      }
    }
  };
}

function defineConfig(config) {
  return config;
}

const DEFAULT_LOCALE = 'en';
const AVAILABLE_LOCALES = ['en', 'de'];

// https://astro.build/config
defineConfig({
  output: 'hybrid',
  adapter: awsAmplify(),
  integrations: [
    tailwindIntegration(),
    src_default({
      experimentalReactChildren: true
    })
  ],
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: AVAILABLE_LOCALES,
    routing: {
      redirectToDefaultLocale: true
    }
  }
});

export { AVAILABLE_LOCALES as A, DEFAULT_LOCALE as D };
