import { GetBlogList } from './get-list';
import { GetBlog } from './get-single';
import { GetNetlifyStaticParams } from './get-static-params';

export const NetlifyUseCase = {
  GetBlogList,
  GetBlog,
  GetBlogStaticParams: GetNetlifyStaticParams
};
