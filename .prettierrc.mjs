// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', '@trivago/prettier-plugin-sort-imports'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 100,
  importOrder: [
    '^@?\\w',
    '^\\u0000',
    '^.+\\.s?css$',
    '^@/lib',
    '^@/hooks',
    '^@/bff',
    '^@/components',
    '^@/store',
    '^@/',
    '^\\./?$',
    '^\\.(?!/?$)',
    '^@/types',
    '^'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['importAssertions', 'typescript', 'jsx']
};
