import { z } from 'astro:content';

export const BlogCollectionSchema = z.object({
  title: z.string(),
  date: z.date(),
  thumbnail: z.string().optional(),
  rating: z.number().optional(),
  language: z.string()
});

export type BlogSchemaType = z.infer<typeof BlogCollectionSchema>;
