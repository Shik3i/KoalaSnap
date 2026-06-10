import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function devLocalePlugin() {
  let isDev = false;
  return {
    name: 'dev-locale',
    config(_, env) {
      isDev = env.command === 'serve';
    },
    transformIndexHtml() {
      if (!isDev) return;
      const raw = JSON.parse(readFileSync(join(__dirname, 'locales', 'en.json'), 'utf-8'));
      return [
        {
          tag: 'script',
          children: `window.__LOCALE__=${JSON.stringify(raw).replace(/</g, '\\u003C')}`,
          injectTo: 'head',
        },
      ];
    },
  };
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    ViteImageOptimizer({
      include: ['src/assets/**'],
      formats: [
        { format: 'webp', quality: 80 },
        { format: 'avif', quality: 60 },
      ],
    }),
    devLocalePlugin(),
  ],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
});
