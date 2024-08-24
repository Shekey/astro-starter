import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export const DEFAULT_LOCALE = 'en';
export const AVAILABLE_LOCALES = ['en', 'de'];

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react({
      experimentalReactChildren: true
    })
  ],
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: AVAILABLE_LOCALES,
    routing: {
      redirectToDefaultLocale: true
    }
  }
});
