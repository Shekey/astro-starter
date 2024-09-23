import type { GetPageSlugsForLocalesQuery } from '../../codegen/generated/types';

interface Page {
  [x: string]: unknown;
  locale: string;
  slug: string;
}

export class SlugEntity {
  public readonly pages?: Page[];

  constructor(record: GetPageSlugsForLocalesQuery) {
    this.pages =
      record.pages
        ?.map((page) =>
          page?.localizations?.map((localization) => ({
            locale: localization?.locale,
            slug: localization?.slug || ''
          }))
        )
        ?.flat() || [];
  }

  static from(record: GetPageSlugsForLocalesQuery) {
    const entity = new SlugEntity(record);
    return { ...entity };
  }
}
