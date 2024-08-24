import type { BlogSchemaType } from '@root/src/content/_handlers/__schema__';
import type { z } from 'astro:content';

import { BlogSchema } from './schema';

export type PageType = z.infer<typeof BlogSchema>;

export class BlogModel {
  title: string;
  date: string;
  thumbnail: string;
  rating: string;
  slug: string;

  mapRating(rating: number) {
    return (
      {
        0: '☆☆☆☆☆',
        1: '★☆☆☆☆',
        2: '★★☆☆☆',
        3: '★★★☆☆',
        4: '★★★★☆',
        5: '★★★★★'
      }[rating] || '☆☆☆☆☆'
    );
  }

  constructor(record: BlogSchemaType & { slug: string }) {
    this.title = record.title;
    this.date = record.date?.toLocaleString() || Date.now().toLocaleString();
    this.thumbnail = record.thumbnail || '';
    this.rating = this.mapRating(record.rating || 0);
    this.slug = record.slug;
  }

  validate() {
    const results = BlogSchema.safeParse(this);

    if (!results.success) {
      console.log(results.error);
      return { error: results.error.flatten().fieldErrors };
    }

    return { data: results.data };
  }
}
