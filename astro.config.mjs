import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import icon from 'astro-icon';
import svgLoader from 'vite-svg-loader';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  site: 'https://emmanuelplougoulm.github.io/components_library/',
  base: '/components_library/',
  integrations: [react(), vue({ devtools: true }), icon(), svgLoader()],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'component'
      }),
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
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@custom-types': path.resolve(__dirname, 'src/types')
    }
  }
});
