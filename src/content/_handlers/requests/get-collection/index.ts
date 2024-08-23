import { type ContentEntryMap, getCollection } from 'astro:content';

export const GetNetlifyCollectionRequest = async (collection: keyof ContentEntryMap) => {
  return await getCollection(collection);
};
