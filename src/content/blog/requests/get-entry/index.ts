import { COLLECTION_NAME } from '@root/src/content/config';
import { getEntry } from 'astro:content';

export const GetBlogRequest = async (slug: string) => {
  return await getEntry(COLLECTION_NAME, slug);
};
