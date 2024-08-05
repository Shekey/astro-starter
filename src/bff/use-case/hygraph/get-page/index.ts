import { HygraphRepository } from '@root/src/bff/data-access/hygraph';

import { PageModel } from '../model/page';

const execute = async ({
  slug,
  locale,
  locales,
  brandId,
  draftMode
}: {
  slug?: string | string[];
  locale?: string;
  locales: string[];
  brandId: string;
  draftMode?: boolean;
}) => {
  const slugTransformed = Array.isArray(slug) ? slug?.join('/') : slug || 'index';

  const { data: rawData, error: infrastructureError } = await HygraphRepository.getPageRequest(
    brandId,
    slugTransformed,
    locales,
    locale,
    draftMode
  );

  if (infrastructureError) {
    return { error: "Couldn't fetch page" };
  }

  if (!rawData) {
    return { error: 'Page not found' };
  }

  const { data, error } = new PageModel(rawData).validate();
  return { data, error };
};

export const GetPage = {
  execute
};
