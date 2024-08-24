import eslintPluginAstro from 'eslint-plugin-astro';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  {
    ignores: ['**/*.d.ts', '**/generated/', 'tsconfig.json', '.astro/', 'dist/', 'node_modules/']
  },
  {
    files: ['**/*.{js,mjs,ts,jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
    ignores: ['.astro/', '*.md', '*.yaml', '.pnpm-store/', 'vite.config.ts'],
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.react
      }
    }
  },
  {
    settings: {
      react: {
        pragma: 'React', // Pragma to use, default to "React"
        fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
        version: 'detect', // React version. "detect" automatically picks the version you have installed.
        defaultVersion: '18.3.1' // Default React version to use when the version you have installed cannot be detected.
      }
    }
  },
  {
    files: ['*.astro'],
    languageOptions: {
      parser: 'eslint-plugin-astro'
    },
    plugins: {
      astro: eslintPluginAstro
    },
    rules: {
      ...eslintPluginAstro.configs.recommended.rules
    }
  }
];
