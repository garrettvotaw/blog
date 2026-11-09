import { absUrl } from '../utils/url';
import type { APIRoute } from 'astro';

// Generated so the sitemap URL always matches `site` in astro.config.mjs.
// AI crawlers are allowed on purpose: being cited by AI search is part of being found.
export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${absUrl('/sitemap-index.xml')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
