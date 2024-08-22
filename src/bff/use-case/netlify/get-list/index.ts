import { NetlifyRepository } from '@root/src/content/_handlers';
import type { ContentEntryMap } from 'astro:content';

import { BlogModel } from '../model/blog';

const execute = async (language: string, collection: string) => {
  const rawData = await NetlifyRepository.GetBlogsRequest(collection as keyof ContentEntryMap);

  if (!rawData.length) {
    return {
      error: 'No blogs found'
    };
  }

  const languageSpecificData = rawData?.filter((record) => record?.data?.language === language);

  const validatedData = languageSpecificData?.map((record) => {
    const data = record?.data;
    const { data: validatedData, error: validationErrors } = new BlogModel({
      slug: `${collection}/${record?.slug}` || 'index',
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

  return { data: validatedData.map(({ data }) => data) };
};

export const GetBlogList = {
  execute
};
