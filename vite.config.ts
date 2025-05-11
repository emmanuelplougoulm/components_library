import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      defaultImport: 'component'
    })
  ],
  resolve: {
    alias: {
      '@custom-types': path.resolve(__dirname, 'src/custom-types')
    }
  }
});
