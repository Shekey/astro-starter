// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

import { NetlifyCollectionSchema } from './_handlers/__schema__';

export const AVAILABLE_LANGUAGES = ['en', 'de'];

// 2. Define a `type` and `schema` for each collection
const netlifyCollection = defineCollection({
  type: 'content',
  schema: NetlifyCollectionSchema
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  netlify: netlifyCollection
};

export const COLLECTION_NAME = 'netlify';
