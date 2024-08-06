import { z } from 'zod';

export const PageSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  templates: z.array(z.any()),
  ogImage: z.object({
    url: z.string(),
    width: z.number(),
    height: z.number(),
    mimeType: z.string(),
    alt: z.string()
  })
});
