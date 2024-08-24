import { type ContentEntryMap, getCollection } from 'astro:content';

export const GetSlugEntryRequest = async (
  lang: string,
  slug: string,
  collection: keyof ContentEntryMap
) => {
  const [page] = await getCollection(
    collection,
    (record) => record.slug === slug && record.data?.language == lang
  );

  if (!page) {
    return undefined;
  }

  return {
    ...page,
    lang
  };
};
