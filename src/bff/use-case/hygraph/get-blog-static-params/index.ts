import { HygraphRepository } from '@infrastructure/hygraph';
import { AVAILABLE_LANGUAGES } from '@root/src/content/config';

const execute = async (slug: string) => Promise.all(
    AVAILABLE_LANGUAGES.map(async (lang) => {
      const { data, error } = await HygraphRepository.getPageRequest(slug, lang);

      console.log(data);

      return {
        params: {
          lang
        },
        props: {
          data,
          error
        }
      };
    })
  );

export const GetBlogStaticParams = {
  execute
};
