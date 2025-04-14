import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import icon from 'astro-icon';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  site: 'https://emmanuelplougoulm.github.io/components_library/',
  base: '/components_library/',
  integrations: [react(), vue(), icon(), svgLoader()],
  vite: {
    plugins: [
      svgr({
        define: {
          __VUE_PROD_DEVTOOLS__: JSON.stringify(true)
        },
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            plugins: [
              'preset-default',
              { name: 'removeViewBox', active: false },
              'removeTitle',
              'removeDesc'
            ]
          }
        }
      })
    ]
  }
});
