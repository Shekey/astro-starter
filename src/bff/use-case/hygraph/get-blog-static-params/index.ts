import { AVAILABLE_LANGUAGES } from '@root/src/content/config';

const execute = async () => {
  return AVAILABLE_LANGUAGES.map((lang) => {
    return {
      params: {
        lang
      }
    };
  });
};

export const GetBlogStaticParams = {
  execute
};
