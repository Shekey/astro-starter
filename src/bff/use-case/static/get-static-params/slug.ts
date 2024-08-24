import { StaticRepository } from '@root/src/bff/data-access/static';
import type { ContentEntryMap } from 'astro:content';

const execute = async (collection: keyof ContentEntryMap) => {
  const rawData = await StaticRepository.GetCollectionRequest(collection);

  if (!rawData.length) {
    return {
      error: 'Blog not found'
    };
  }

  return rawData?.flat().map((page) => ({
    params: {
      slug: page?.slug,
      lang: page?.data?.language
    },
    props: { page }
  }));
};

export const GetSlugStaticParams = {
  execute
};
