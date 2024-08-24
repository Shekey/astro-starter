import { DEFAULT_LOCALE } from '@root/astro.config.mjs';
import { defineMiddleware } from 'astro/middleware';

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  const {pathname} = context.url;

  const { currentLocale } = context;
  if (!currentLocale) {
    return context.redirect(`/${DEFAULT_LOCALE}${pathname}`, 308);
  }

  return next();
});
