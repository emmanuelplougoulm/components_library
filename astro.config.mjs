import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://emmanuelplougoulm.github.io/components_library/',
  base: '/components_library/',
  integrations: [react()]
});