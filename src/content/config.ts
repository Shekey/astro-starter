// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

import { BlogCollectionSchema } from './_handlers/__schema__';

export const AVAILABLE_LANGUAGES = ['en', 'de'];

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content',
  schema: BlogCollectionSchema
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection
};

export type CollectionTypes = keyof typeof collections;

export const COLLECTION_NAME = 'blog';
