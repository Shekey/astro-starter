import { LogService } from '@root/src/bff/service/Log/logService';

import client from '../client';
import { GetPageSlugsForLocalesDocument } from '../codegen/generated/graphql';
import type {
  GetPageSlugsForLocalesQuery,
  GetPageSlugsForLocalesQueryVariables
} from '../codegen/generated/types';
import { SlugEntity } from '../entity/Slug/Slug';

export async function getPageSlugsForLocalesRequest() {
  const result = await LogService.logDuration(
    'HyGraphClient',
    `GetPageSlugsForLocales`,
    client.query<GetPageSlugsForLocalesQuery, GetPageSlugsForLocalesQueryVariables>({
      query: GetPageSlugsForLocalesDocument
    })
  );

  const pageData = result.data;
  if (!pageData?.pages?.at(0)) {
    return { error: 'Page not found' };
  }

  const data = SlugEntity.from(pageData);

  return { data };
}
