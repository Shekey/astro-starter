import pluginJs from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    overrides: [
      {
        files: ['*.astro'],
        parser: 'eslint-plugin-astror'
      }
    ]
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off'
    }
  }
];
