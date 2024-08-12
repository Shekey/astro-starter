import type { GetPageSlugsForLocalesQuery } from '../../codegen/generated/types';

type Page = {
  [x: string]: any;
  locale: string;
  slug: string;
};

export class SlugEntity {
  public readonly pages?: Page[];

  constructor(record: GetPageSlugsForLocalesQuery) {
    this.pages =
      record.pages
        ?.map((page) => {
          return page?.localizations?.map((localization) => {
            return {
              locale: localization?.locale,
              slug: localization?.slug || ''
            };
          });
        })
        ?.flat() || [];
  }

  static from(record: GetPageSlugsForLocalesQuery) {
    const entity = new SlugEntity(record);

    return Object.assign({}, entity);
  }
}
