import { NetlifyRepository } from '@root/src/content/_handlers';
import type { ContentEntryMap } from 'astro:content';

const execute = async (collection: keyof ContentEntryMap) => {
  const rawData = await NetlifyRepository.GetBlogsRequest(collection);

  if (!rawData.length) {
    return {
      error: 'No blogs found'
    };
  }

  return rawData?.flat().map((page) => {
    return {
      params: {
        slug: page?.slug,
        lang: page?.data?.language
      },
      props: { page }
    };
  });
};

export const GetNetlifyStaticParams = {
  execute
};
