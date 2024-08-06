import { COLLECTION_NAME } from '@root/src/content/config';
import { getCollection } from 'astro:content';

export const GetBlogsRequest = async () => {
  return await getCollection(COLLECTION_NAME);
};
