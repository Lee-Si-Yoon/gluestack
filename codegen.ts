import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: {
    'https://api-internal-dev.friendli.ai/api/graphql': {},
  },
  documents: ['graphql/*.graphql', '!generated/client/'],
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    'generated/client/': {
      preset: 'client',
      plugins: [],
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
