import { getCollection } from 'astro:content';

export const GetNetlifyCollectionRequest = async (lang: string, slug: string) => {
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
