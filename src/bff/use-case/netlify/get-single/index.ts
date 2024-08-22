import { NetlifyRepository } from '@root/src/content/_handlers';

import { BlogModel } from '../model/blog';

const execute = async (lang: string, slug: string) => {
  const rawData = await NetlifyRepository.GetNetlifyCollectionRequest(lang, slug);

  if (!rawData?.data) {
    return { error: 'Blog not found' };
  }

  const { data, error } = new BlogModel({ slug, ...rawData?.data }).validate();
  return { data, error };
};

export const GetBlog = {
  execute
};
