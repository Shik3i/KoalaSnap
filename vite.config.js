import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

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
  ],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
});
