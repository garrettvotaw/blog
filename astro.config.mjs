// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────
// SITE + BASE decide every URL (canonical, sitemap, RSS, robots.txt,
// structured data, internal links via src/utils/url.ts).
//
// Now (no custom domain): GitHub Pages project site at
//   https://garrettvotaw.github.io/blog/
// When you buy a domain: set SITE to 'https://yourdomain.com', set
// BASE to '/', and add public/CNAME containing the bare domain.
// ─────────────────────────────────────────────────────────────
const SITE = 'https://garrettvotaw.github.io';
const BASE = '/blog';

export default defineConfig({
  site: SITE,
  base: BASE,
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
