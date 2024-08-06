import { NetlifyRepository } from '@root/src/content';

const execute = async () => {
  const rawData = await NetlifyRepository.GetAllSlugsRequest();

  if (!rawData.length) {
    return [];
  }
  return rawData?.map((slug) => ({
    params: {
      slug
    }
  }));
};

export const GetBlogStaticParams = {
  execute
};
