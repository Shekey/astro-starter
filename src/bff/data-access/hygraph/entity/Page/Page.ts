import type { GetPageQuery } from '../../codegen/generated/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TODO = any;

export interface Image {
  url: string;
  width: number;
  height: number;
  mimeType: string;
  alt: string;
}

export class PageEntity {
  public readonly slug?: string;
  public readonly id: string;
  public readonly description: string;
  public readonly title: string;
  public readonly ogImage: Image;
  public readonly templates: TODO[];

  constructor(record: GetPageQuery) {
    const page = record.pages[0];
    this.id = page.id;
    this.slug = Array.isArray(page?.slug) ? page.slug?.join('/') : page?.slug || 'index';
    this.title = page?.title ?? '';
    this.description = page?.description ?? '';
    this.templates = page?.templates;
    this.ogImage = {
      url: page.ogImage.url,
      mimeType: page.ogImage.mimeType || '',
      alt: page.ogImage.alt || '',
      width: page?.ogImage?.width || 0,
      height: page?.ogImage?.height || 0
    };
  }

  static from(record: GetPageQuery) {
    const entity = new PageEntity(record);
    return { ...entity };
  }
}
