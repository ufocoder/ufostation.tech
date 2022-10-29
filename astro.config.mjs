import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";
import { defineConfig } from 'astro/config';
import { SITE_URL, SITE_BASE } from './src/config';


export default defineConfig({
  site: SITE_URL,
  base: SITE_BASE,
  integrations: [mdx(), sitemap(), compress()],
});
