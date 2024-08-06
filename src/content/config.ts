// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

import { BlogCollectionSchema } from './blog/__schema__';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content',
  schema: BlogCollectionSchema
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection
};

export const COLLECTION_NAME = 'blog';
