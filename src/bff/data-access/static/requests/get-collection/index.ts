import { type ContentEntryMap, getCollection } from 'astro:content';

export const GetCollectionRequest = async (collection: keyof ContentEntryMap) =>
  getCollection(collection);
