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
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const match = req.url.match(/^\/locale\.([a-z]{2})\.js$/);
        if (match) {
          try {
            const raw = JSON.parse(readFileSync(join(__dirname, 'locales', `${match[1]}.json`), 'utf-8'));
            res.setHeader('Content-Type', 'application/javascript');
            res.setHeader('Cache-Control', 'no-cache');
            res.end(`window.__LOCALE__=${JSON.stringify(raw).replace(/</g, '\\u003C')}`);
          } catch {
            res.statusCode = 404;
            res.end();
          }
          return;
        }
        next();
      });
    },
    transformIndexHtml(_, ctx) {
      if (!isDev) return;
      const m = ctx?.originalUrl?.match(/^\/([a-z]{2})\//);
      const lang = m ? m[1] : 'en';
      return [
        {
          tag: 'script',
          attrs: { src: `/locale.${lang}.js` },
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
  test: {
    environment: 'jsdom',
  },
});
