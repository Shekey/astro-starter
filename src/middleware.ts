import { DEFAULT_LOCALE } from '@root/astro.config.mjs';
import { defineMiddleware } from 'astro/middleware';

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  if (pathname === '/') {
    return context.redirect(`/${DEFAULT_LOCALE}`, 308);
  }

  return next();
});
