// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────
// SET YOUR DOMAIN HERE. Everything else (canonical URLs, sitemap,
// RSS, robots.txt, structured data) reads from this one value.
// Also update public/CNAME to the same domain (no https://).
// ─────────────────────────────────────────────────────────────
const SITE = 'https://example.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      // Keep thin pages out of the sitemap so crawl budget goes to posts.
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
