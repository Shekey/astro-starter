import { GetIndexStaticParams } from './blog/get-static-params';
import { GetSlugStaticParams } from './blog/get-static-params/slug';

export const StaticUseCase = {
  Blog: {
    GetSlugStaticParams,
    GetIndexStaticParams
  }
};
