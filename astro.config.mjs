import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://astro-modern-personal-website.netlify.app',
  integrations: [sitemap(), tailwind()]
});