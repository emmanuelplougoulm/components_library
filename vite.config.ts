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
      '@custom-types': path.resolve(__dirname, 'src/custom-types'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@icons': path.resolve(__dirname, 'src/icons')
    }
  }
});
