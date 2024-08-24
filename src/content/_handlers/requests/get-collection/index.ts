import { type ContentEntryMap, getCollection } from 'astro:content';

export const GetCollectionRequest = async (collection: keyof ContentEntryMap) => {
  return await getCollection(collection);
};
