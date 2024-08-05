import { LogService } from '@service/Log/logService';

import client from '../client';
import { GetPageDocument } from '../codegen/generated/graphql';
import type { GetPageQuery, GetPageQueryVariables, Locale } from '../codegen/generated/types';
import { PageEntity } from '../entity/Page/Page';

export async function getPageRequest(slug: string, locales: string[], locale?: string) {
  const result = await LogService.logDuration(
    'HyGraphClient',
    `GetPageRequest`,
    client.query<GetPageQuery, GetPageQueryVariables>({
      query: GetPageDocument,
      variables: {
        locales: [locale as Locale, ...(locales as Locale[])],
        where: {
          slug
        }
      }
    })
  );

  const pageData = result.data;
  if (!pageData?.pages?.at(0)) {
    return { error: 'Page not found' };
  }

  const data = PageEntity.from(pageData);

  return { data };
}
