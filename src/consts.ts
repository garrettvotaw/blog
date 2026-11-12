// Site-wide identity. Used in the header, footer, meta tags and
// structured data (JSON-LD) so search engines tie every post to you.

export const SITE = {
  name: 'Garrett Votaw',
  title: 'Garrett Votaw — AI-native software development',
  description:
    'Practical writing on agentic AI workflows, multi-agent architecture, and shipping production software fast with AI. From Lawton, Oklahoma.',
  locale: 'en_US',
  defaultOgImage: '/og-default.png',
  themeColor: '#fcfcfc',
};

// The business. The site is your personal blog; the business is
// what you offer on the Work with me page.
export const BUSINESS = {
  name: 'Sunrise Development',
};

export const AUTHOR = {
  name: 'Garrett Votaw',
  jobTitle: 'Software Developer & Founder, Sunrise Development',
  location: 'Lawton, Oklahoma',
  // Fill these in — they become `sameAs` links in structured data,
  // which helps Google connect this site to your other profiles.
  github: 'https://github.com/garrettvotaw',
  linkedin: '', // e.g. https://www.linkedin.com/in/your-handle
  x: '', // e.g. https://x.com/your-handle
  xHandle: '', // e.g. @your-handle (for Twitter card attribution)
};

// Areas you serve, for local search ("software developer Lawton OK").
export const SERVICE_AREA = ['Lawton, OK', 'Southwest Oklahoma', 'Remote (US)'];

// Newsletter: paste the form action URL from your newsletter
// provider's embed code. Leave empty to hide the signup box.
export const NEWSLETTER = {
  action: '',
  emailFieldName: 'email',
};

// Comments via giscus (https://giscus.app) — free, backed by GitHub
// Discussions. Fill all four from the giscus config page, or leave
// repo empty to hide comments.
export const GISCUS = {
  repo: '', // e.g. garrettvotaw/blog
  repoId: '',
  category: 'Comments',
  categoryId: '',
};
