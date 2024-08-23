import pluginJs from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ['**/*.d.ts', '**/generated/', 'tsconfig.json', '.astro']
  },
  {
    files: ['**/*.{js,mjs,ts,jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
    ignores: [
      'node_modules/**/*',
      'dist/**/*',
      '*.js',
      '*.json',
      '*.md',
      '*.yaml',
      '.pnpm-store/',
      'vite.config.ts',
      '.astro'
    ],
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
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
