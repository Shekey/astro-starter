import type { BlogSchemaType } from '@root/src/content/blog/__schema__';
import type { z } from 'zod';

import { BlogSchema } from './schema';

export type PageType = z.infer<typeof BlogSchema>;

export class BlogModel {
  layout: string;
  title: string;
  date: Date;
  thumbnail: string;
  rating: number;
  body: string;

  constructor(record: BlogSchemaType) {
    this.title = record.title;
    this.layout = record.layout;
    this.date = record.date;
    this.thumbnail = record.thumbnail || '';
    this.rating = record.rating || 0;
    this.body = record.body || '';
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
