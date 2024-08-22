import { z } from 'astro:content';

export const NetlifyCollectionSchema = z.object({
  title: z.string(),
  date: z.date(),
  thumbnail: z.string().optional(),
  rating: z.number().optional(),
  language: z.string()
});

export type NetlifySchemaType = z.infer<typeof NetlifyCollectionSchema>;
