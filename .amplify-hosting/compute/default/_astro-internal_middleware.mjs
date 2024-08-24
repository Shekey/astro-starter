import { D as DEFAULT_LOCALE } from './chunks/astro.config_Cwuo82L4.mjs';
import { d as defineMiddleware, s as sequence } from './chunks/index_DiRcftaY.mjs';
import './chunks/shared_Cy5wBaJ2.mjs';
import '@astrojs/internal-helpers/path';
import 'cookie';

const onRequest$1 = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  const { currentLocale } = context;
  if (!currentLocale) {
    return context.redirect(`/${DEFAULT_LOCALE}${pathname}`, 308);
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
