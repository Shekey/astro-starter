import { z } from 'astro:content';

export const BlogSchema = z.object({
  title: z.string(),
  date: z.string(),
  thumbnail: z.string(),
  rating: z.string(),
  slug: z.string()
});
