import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.hyeonggeun.com',
  integrations: [react(), mdx()],
  redirects: {
    '/blog/post-4': 'https://www.companoidlabs.com/spotlight/cooperation-and-interaction-of-agents-in-neurips',
    '/blog/post-6': 'https://www.companoidlabs.com/spotlight/how-to-deal-with-ai-generated-content-flood-and-meaningful-interaction',
    '/blog/post-7': 'https://www.companoidlabs.com/spotlight/future-of-ai-interaction-in-chi-2025',
  },
});
