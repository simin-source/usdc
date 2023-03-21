import path, { resolve } from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';
/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  root: './src/pages/',
  publicDir: '../../public',
  base: './',
  plugins: [vue(), vueJSX(),
  {
    name: 'Multi-Page-AssetsPath',
    transformIndexHtml: {
      enforce: 'post',
      transform(HTMLStr: string, ctx) {
        if (!ctx.filename.includes('pages/index.html')) {
          return HTMLStr.replace(/=".\/assets/g, '="../assets').replace(/<link rel="icon" href=".\//, '<link rel="icon" href="/');
        } else {
          return HTMLStr.replace(/<link rel="icon" href=".\//, '<link rel="icon" href="/');
        }
      },
    },
  },
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: 'import { h } from "vue"',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      input: {
        main: './src/pages/index.html',
        investment: './src/pages/investment/index.html',
        use: './src/pages/use/index.html',
        intoout: './src/pages/intoout/index.html',
        advantage: './src/pages/advantage/index.html'
      },
    },
    emptyOutDir: true,
    outDir: resolve(__dirname, 'dist/'),
  },
});
