#!/usr/bin/env node
// Usage: npm run new -- "My post title"
// Creates src/content/blog/<slug>.md as a draft with valid frontmatter.
import { existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Usage: npm run new -- "My post title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');
const file = join('src', 'content', 'blog', `${slug}.md`);

if (existsSync(file)) {
  console.error(`Already exists: ${file}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  file,
  `---
title: ${JSON.stringify(title)}
description: 'Write a 120–160 character summary that includes the search phrase you want this post to rank for.'
pubDate: ${today}
tags: []
draft: true
---

Answer the reader's question in the first paragraph.
`,
);
console.log(`Created ${file}`);
