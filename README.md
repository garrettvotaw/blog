# Garrett Votaw's blog

Astro static site, deployed free to GitHub Pages. Built for search from day one: canonical URLs, sitemap, generated robots.txt, RSS, Open Graph and X cards, and JSON-LD structured data (Person, Organization, WebSite, BlogPosting, BreadcrumbList, ProfessionalService).

## First-time setup

1. `npm install`, then commit the generated `package-lock.json` (the deploy workflow needs it).
2. `npm run dev` and open http://localhost:4321. Drafts are visible in dev only.
3. The site currently lives at https://garrettvotaw.github.io/blog/. When you buy a domain:
   - `astro.config.mjs` → set `SITE` to `https://yourdomain.com` and `BASE` to `'/'`
   - add `public/CNAME` containing the bare domain, e.g. `garrettvotaw.com`
   - always link internally with `url()` / `absUrl()` from `src/utils/url.ts` so links follow the base
4. Fill in `src/consts.ts`: LinkedIn and X links, newsletter form action, giscus settings. Empty values hide those features.
5. Replace `hello@example.com` on `src/pages/work-with-me.astro` with a real contact method.

## Deploy

1. Push to a GitHub repo on the `main` branch.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. At your domain registrar, point DNS to GitHub Pages (apex `A` records, or a `CNAME` for `www`). GitHub's Pages docs list the current IPs.
4. Back in **Settings → Pages**, enter the custom domain and tick **Enforce HTTPS** once the certificate is issued.

Every push to `main` rebuilds and deploys.

## Writing

```
npm run new -- "Building a multi-agent PR reviewer"
```

Creates a draft in `src/content/blog/`. Set `draft: false` to publish. The content schema enforces SEO limits: titles up to 70 characters, descriptions 50–160. A build fails if a post breaks them.

Optional per-post social image: put a 1200×630 PNG in `public/og/` and set `ogImage: /og/your-post.png`.

## After launch: SEO checklist

- [ ] Add the domain to Google Search Console and Bing Webmaster Tools; submit `/sitemap-index.xml` to both.
- [ ] Check a post with Google's Rich Results Test to confirm the structured data parses.
- [ ] Put the blog URL in your GitHub profile, LinkedIn, and any public repo READMEs (these are your first backlinks).
- [ ] Cross-post to dev.to, Medium, or Hashnode with the canonical URL set to your post here.
- [ ] Publish on a steady schedule; update older posts and set `updatedDate` when you do.

## Structure

```
src/
  consts.ts            site identity, author, newsletter, comments
  content.config.ts    post frontmatter schema
  content/blog/        posts (.md / .mdx)
  components/          BaseHead (all SEO tags), Header, Footer, Newsletter, Comments
  layouts/             BaseLayout, BlogPost
  pages/               home, about, work-with-me, blog, tags, rss.xml, robots.txt, 404
public/                favicon.svg, og-default.png, CNAME
.github/workflows/     GitHub Pages deploy
```
