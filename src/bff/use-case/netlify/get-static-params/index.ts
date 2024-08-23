import { AVAILABLE_LOCALES } from '@root/astro.config.mjs';
import { NetlifyRepository } from '@root/src/content/_handlers';

import { BlogModel } from '../model/blog';

const execute = async () => {
  const COLLECTION = 'netlify';
  return await Promise.all(
    AVAILABLE_LOCALES?.map(async (language) => {
      const rawData = await NetlifyRepository.GetNetlifyCollectionRequest(COLLECTION);

      if (!rawData.length) {
        return {
          params: {
            lang: language
          },
          props: {
            error: 'No blogs found'
          }
        };
      }

      const languageSpecificData = rawData?.filter((record) => record?.data?.language === language);

      const validatedData = languageSpecificData?.map((record) => {
        const data = record?.data;
        const { data: validatedData, error: validationErrors } = new BlogModel({
          slug: `${COLLECTION}/${record?.slug}`,
          title: data?.title || '',
          date: data?.date,
          language: data?.language,
          thumbnail: data?.thumbnail || 'https://placehold.co/600x400'
        }).validate();

        if (validationErrors) {
          return { error: validationErrors };
        }

        return { data: validatedData };
      });
      const isAllDataValid = validatedData.every((data) => !data.error);
      if (!isAllDataValid) {
        return { error: 'Invalid blog list data' };
      }

      return {
        params: {
          lang: language
        },
        props: {
          data: validatedData.map(({ data }) => data)
        }
      };
    })
  );
};

export const GetNetlifyIndexStaticParams = {
  execute
};
