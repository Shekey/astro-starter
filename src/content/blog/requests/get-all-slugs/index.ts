import { COLLECTION_NAME } from '@root/src/content/config';
import { getCollection, getEntry } from 'astro:content';

export const GetAllSlugsRequest = async () => {
  const collection = await getCollection(COLLECTION_NAME);

  if (!collection) {
    return [];
  }

  return collection?.map(({ slug }) => slug);
};
