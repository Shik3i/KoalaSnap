const CACHE = 'koalasnap-v1';

const PRECACHE = [
  '/',
  '/src/style.css',
  '/src/main.js',
  '/src/store.js',
  '/src/i18n.js',
  '/src/avatar.js',
  '/src/tutorial.js',
  '/src/themes/social-post.js',
  '/src/themes/discord.js',
  '/src/themes/whatsapp.js',
  '/src/themes/telegram.js',
  '/src/themes/signal.js',
  '/src/themes/imessage.js',
  '/manifest.json',
  '/fonts/Inter-Variable.woff2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request)),
  );
});
