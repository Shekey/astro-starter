import type { CodegenConfig } from '@graphql-codegen/cli';

import { GLOBAL_ENVS } from '../../../../globalEnvs';

// here you can't use ts path aliases

/* this would merge your base schema in our case master with staging in our case  */
const config: CodegenConfig = {
  overwrite: true,
  documents: ['src/**/*.graphql'],
  verbose: true,
  debug: true,
  schema: GLOBAL_ENVS.HYGRAPH_ENDPOINT,
  generates: {
    'src/bff/data-access/hygraph/codegen/generated/graphql.ts': {
      preset: 'import-types',
      presetConfig: {
        typesPath: './types'
      },
      plugins: ['typescript-react-apollo']
    },
    'src/bff/data-access/hygraph/codegen/generated/types.ts': {
      plugins: ['typescript', 'typescript-operations']
    }
  }
};
export default config;
