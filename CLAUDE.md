# Sunrise Development blog

Personal dev blog for Garrett Votaw (Sunrise Development, Lawton, Oklahoma). Goal: be found and known as a leading voice on agentic AI development. SEO is a top priority. Minimal cost: static Astro site on GitHub Pages plus a custom domain (~$12/yr). No paid services.

## Stack and commands

- Astro 5, TypeScript strict, Markdown/MDX content collections, system fonts, no client JS unless needed.
- Author background: Angular, NestJS, Nx. Explain Astro-specific concepts in those terms when useful.
- `npm run dev`: local server; drafts visible in dev only.
- `npm run build`: `astro check` + build. Run it after any change and fix all errors before calling something done.
- `npm run new -- "Title"`: new draft post in `src/content/blog/`.
- Deploy: push to `main`; `.github/workflows/deploy.yml` publishes to GitHub Pages.

## Where things live

- URL: `SITE` and `BASE` in `astro.config.mjs`. No domain yet, so the site is served at https://garrettvotaw.github.io/blog/ (`BASE = '/blog'`). When a domain is bought: set `SITE` to it, `BASE` to `'/'`, and add `public/CNAME` with the bare domain.
- Internal links and absolute URLs: always use `url()` / `absUrl()` from `src/utils/url.ts`, never a hardcoded `/path/`, so they work under any base.
- Identity, socials, newsletter, giscus: `src/consts.ts`. Empty values hide those features.
- All SEO tags and JSON-LD: `src/components/BaseHead.astro`; post schema in `src/layouts/BlogPost.astro`.
- Post frontmatter schema with SEO length limits: `src/content.config.ts`.
- Design ("First Light"): home hero is `src/components/Horizon.astro`, a CSS sky that mirrors the real sky over Lawton (night/dawn/day/dusk from a tiny inline sunrise calc). Styles at the bottom of `src/styles/global.css`. Headings use a system serif stack; keep motion behind `prefers-reduced-motion`.

## SEO rules (keep these intact)

- Every page needs a unique title and a 50–160 character description.
- Keep canonical URLs, sitemap, robots.txt, RSS, Open Graph/X tags, and JSON-LD working on every page.
- Trailing slashes everywhere (`trailingSlash: 'always'`); internal links end in `/`.
- Posts target specific long-tail searches and answer the question in the first paragraph.
- Keep performance near-perfect: no web fonts, no heavy client-side frameworks.

## Content rules (important)

- Never include code, screenshots, internal metrics, or identifying details from Love's Travel Stops or Fleetzero. Both have strict non-competes and confidentiality expectations; describe methods, not employer work.
- Do not write about Orbit (github.com/garrettvotaw/orbit) until Garrett confirms ownership is cleared with his employer. General multi-agent concepts are fine.
- Drafts are written for Garrett to rewrite in his own voice. Keep bracketed prompts where he must supply facts; never invent numbers or results.

## Open TODOs

- Choose and set a domain (see URL above), then set it in the repo's Settings → Pages.
- Fill LinkedIn/X links, newsletter form action, and giscus IDs in `src/consts.ts`.
- Replace `hello@example.com` on `src/pages/work-with-me.astro` with a real contact method.
- Confirm the About page wording about the day job.
- Later: auto-generated per-post Open Graph images (currently one default image).

## Planned first posts

1. My AI development workflow, end to end (draft exists)
2. How I built an enterprise app in 2 months (anonymized, method-focused, needs approval)
3. Where AI coding fails, and how I catch it
4. Building and shipping an iOS app in a weekend
5. Why I'm starting a dev business in Lawton, Oklahoma
