import { NetlifyRepository } from '@root/src/content';

import { BlogModel } from '../model/blog';

const execute = async (slug: string) => {
  const rawData = await NetlifyRepository.GetBlogRequest(slug);
  if (!rawData?.data) {
    return { error: 'Blog not found' };
  }

  const { data, error } = new BlogModel(rawData.data).validate();
  return { data, error };
};

export const GetBlog = {
  execute
};
