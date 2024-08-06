import { NetlifyRepository } from '@root/src/content';

import { BlogModel } from '../model/blog';

const execute = async () => {
  const rawData = await NetlifyRepository.GetBlogsRequest();

  if (!rawData?.length) {
    return { error: 'Blog not found' };
  }

  const validatedData = rawData.map(({ data }) => {
    const { data: validatedData, error: validationErrors } = new BlogModel(data).validate();

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
