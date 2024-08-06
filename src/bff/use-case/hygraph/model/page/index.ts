import type { PageEntity, TODO } from '@infrastructure/hygraph/entity/Page/Page';
import type { z } from 'zod';

import { PageSchema } from './schema';

export type PageType = z.infer<typeof PageSchema>;

export class PageModel {
  id: string;
  slug: string;
  title: string;
  description: string;
  templates: Array<TODO>;
  ogImage?: {
    url: string;
    width: number;
    height: number;
    mimeType?: string;
    alt?: string;
  };

  constructor(record: PageEntity) {
    this.id = record.id;
    this.description = record.description;
    this.slug = record.slug || 'index';
    this.title = record.title;
    this.ogImage = record.ogImage || {};
    this.templates = record.templates;
  }

  validate() {
    const results = PageSchema.safeParse(this);

    if (!results.success) {
      console.log(results.error);
      return { error: results.error.flatten().fieldErrors };
    }

    return { data: results.data };
  }
}
