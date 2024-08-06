import { z } from 'astro:content';

export const BlogCollectionSchema = z.object({
  layout: z.string().default('blog'),
  title: z.string(),
  date: z.date(),
  thumbnail: z.string().optional(),
  rating: z.number().optional(),
  body: z.string().optional()
});

export type BlogSchemaType = z.infer<typeof BlogCollectionSchema>;
