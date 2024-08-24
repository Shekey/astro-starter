import { InMemoryCache } from '@apollo/client/cache/index.js';
import {
  ApolloClient,
  ApolloLink,
  type ApolloQueryResult,
  from,
  type OperationVariables,
  type QueryOptions} from '@apollo/client/core/index.js';
import { HttpLink } from '@apollo/client/link/http/index.js';
import { cloneDeep } from '@apollo/client/utilities';
import { GLOBAL_ENVS } from '@root/src/globalEnvs';
import fetch from 'cross-fetch';

import { ApolloCacheOptions } from '../cache/apollo_cache';
import { errorLoggerLink } from '../log/apollo_logger';

const httpLink = new HttpLink({
  uri: GLOBAL_ENVS.HYGRAPH_ENDPOINT,
  fetch
});

const hygraphCacheHeadersMiddleware = new ApolloLink((operation, forward) => {
  const HYGRAPH_TOKEN = GLOBAL_ENVS.HYGRAPH_SECURE_TOKEN_PUBLISHED;

  const hygraphStaleHeaders = {
    'hyg-stale-if-error': GLOBAL_ENVS.HYGRAPH_STALE_IF_ERROR_DURATION,
    'hyg-stale-while-revalidate': GLOBAL_ENVS.HYGRAPH_STALE_WHILE_REVALIDATE_DURATION
  };

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      ...hygraphStaleHeaders,
      Authorization: `Bearer ${HYGRAPH_TOKEN}`
    }
  }));

  return forward(operation);
});

const cache = new InMemoryCache();
console.log(GLOBAL_ENVS.HYGRAPH_ENDPOINT);

const client = new ApolloClient({
  uri: GLOBAL_ENVS.HYGRAPH_ENDPOINT,
  cache,
  defaultOptions: ApolloCacheOptions,
  link: from([hygraphCacheHeadersMiddleware, errorLoggerLink, httpLink]),
  connectToDevTools: !GLOBAL_ENVS.isProd
});

const clientProxy = {
  query: async <T = unknown, TVariables extends OperationVariables = OperationVariables>(
    options: QueryOptions<TVariables, T>
  ): Promise<ApolloQueryResult<T>> => {
    const original = await client.query<T, TVariables>(options);
    const replica = cloneDeep(original);
    return replica;
  }
};

export default clientProxy;
