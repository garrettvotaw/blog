// Base-path-aware URL helpers. Always use these for internal links and
// absolute URLs instead of hardcoding "/..." so the site works both at a
// domain root (base "/") and under a sub-path such as /blog/ on GitHub Pages.
// Paths passed in should start with "/" (e.g. "/about/").

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const SITE = import.meta.env.SITE;

/** Root-relative path including the base, e.g. url('/about/') -> '/blog/about/'. */
export function url(path: string): string {
  return `${BASE}${path}`;
}

/** Fully qualified URL including the base, e.g. 'https://example.com/blog/about/'. */
export function absUrl(path: string): string {
  return new URL(url(path), SITE).href;
}
