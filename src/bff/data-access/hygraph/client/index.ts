import {
  ApolloClient,
  ApolloLink,
  type ApolloQueryResult,
  HttpLink,
  InMemoryCache,
  type OperationVariables,
  type QueryOptions,
  from
} from '@apollo/client';
import { cloneDeep } from '@apollo/client/utilities';
import { GLOBAL_ENVS } from '@root/src/globalEnvs';
import fetch from 'cross-fetch';

import { ApolloCacheOptions } from '../cache/apollo_cache';
import { errorLoggerLink } from '../log/apollo_logger';

const httpLink = new HttpLink({
  uri: process.env.GRAPHCMS_ENDPOINT,
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

const client = new ApolloClient({
  uri: process.env.GRAPHCMS_ENDPOINT,
  cache,
  defaultOptions: ApolloCacheOptions,
  link: from([hygraphCacheHeadersMiddleware, errorLoggerLink, httpLink]),
  connectToDevTools: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
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
