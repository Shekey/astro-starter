import { HygraphRepository } from '@root/src/bff/data-access/hygraph';

import { PageModel } from '../model/page';

const execute = async ({ slug, locale }: { slug?: string | string[]; locale?: string }) => {
  const slugTransformed = Array.isArray(slug) ? slug?.join('/') : slug || 'index';

  const { data: rawData, error: infrastructureError } = await HygraphRepository.getPageRequest(
    slugTransformed,
    locale
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
