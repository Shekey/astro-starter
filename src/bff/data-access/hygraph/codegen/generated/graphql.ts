import * as Types from './types';

import { gql } from '@apollo/client/core/index.js';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const ImageFragmentDoc = gql`
    fragment image on Asset {
  url
  width
  height
  mimeType
  alt
}
    `;
export const AssetvwFragmentDoc = gql`
    fragment assetvw on AssetVw {
  variant
  alt
  image {
    ...image
  }
}
    ${ImageFragmentDoc}`;
export const BannerFragmentDoc = gql`
    fragment banner on Banner {
  text
  description
  image {
    ...assetvw
  }
}
    ${AssetvwFragmentDoc}`;
export const HeroFragmentDoc = gql`
    fragment hero on Hero {
  title
  image {
    ...assetvw
  }
}
    ${AssetvwFragmentDoc}`;
export const GetPageDocument = gql`
    query GetPage($where: PageWhereInput!, $locales: [Locale!]!) {
  pages(where: $where, locales: $locales) {
    id
    title
    description
    slug
    ogImage {
      ...image
    }
    templates {
      ...banner
      ...hero
    }
  }
}
    ${ImageFragmentDoc}
${BannerFragmentDoc}
${HeroFragmentDoc}`;

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      where: // value for 'where'
 *      locales: // value for 'locales'
 *   },
 * });
 */
export function useGetPageQuery(baseOptions: Apollo.QueryHookOptions<Types.GetPageQuery, Types.GetPageQueryVariables> & ({ variables: Types.GetPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetPageQuery, Types.GetPageQueryVariables>(GetPageDocument, options);
      }
export function useGetPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetPageQuery, Types.GetPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetPageQuery, Types.GetPageQueryVariables>(GetPageDocument, options);
        }
export function useGetPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Types.GetPageQuery, Types.GetPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Types.GetPageQuery, Types.GetPageQueryVariables>(GetPageDocument, options);
        }
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageSuspenseQueryHookResult = ReturnType<typeof useGetPageSuspenseQuery>;
export type GetPageQueryResult = Apollo.QueryResult<Types.GetPageQuery, Types.GetPageQueryVariables>;