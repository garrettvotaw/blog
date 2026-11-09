import { absUrl, url } from '../utils/url';
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../utils/posts';
import { SITE } from '../consts';

export async function GET(_context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: absUrl('/'),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: url(`/blog/${post.id}/`),
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
