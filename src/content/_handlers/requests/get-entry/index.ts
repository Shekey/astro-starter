import { getCollection } from 'astro:content';

export const GetNetlifyCollectionSlugEntryRequest = async (lang: string, slug: string) => {
  const [page] = await getCollection('netlify', (collection) => {
    return collection.slug == slug && collection.data?.language == lang;
  });

  if (!page) {
    return undefined;
  }

  return {
    ...page,
    lang
  };
};
