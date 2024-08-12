import { type ContentEntryMap, getCollection } from 'astro:content';

export const GetBlogsRequest = async (collection: keyof ContentEntryMap) => {
  return await getCollection(collection);
};
