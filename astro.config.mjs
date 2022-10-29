import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/config';

export default defineConfig({
  site: SITE_URL,
  base: '/',
  integrations: [mdx(), sitemap()],
});
