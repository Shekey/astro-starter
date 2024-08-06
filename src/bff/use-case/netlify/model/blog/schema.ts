import { z } from 'zod';

export const BlogSchema = z.object({
  layout: z.string(),
  title: z.string(),
  date: z.date(),
  thumbnail: z.string().optional(),
  rating: z.number().optional(),
  body: z.string()
});
