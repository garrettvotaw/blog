import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().max(70, 'Keep titles under ~60–70 chars so Google does not truncate them'),
    description: z
      .string()
      .min(50, 'Meta descriptions under 50 chars waste the snippet')
      .max(160, 'Meta descriptions over 160 chars get truncated'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Path under /public, e.g. /og/my-post.png (1200×630). Falls back to the site default.
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
