# KoalaSnap

A production-ready, multi-lingual static-site mockup editor. Create pixel-perfect WhatsApp, Telegram, Discord, Signal, iMessage and social media mockups with a live preview – all client-side, no backend required.

## Features

- **7 Mockup Themes** – WhatsApp (full iPhone 14 frame), Telegram, Signal, Discord, iMessage, Messenger, Social Post
- **Full WhatsApp Phone Frame** – 390×844px iPhone 14 format with iOS status bar, chat bubbles, read/delivered/sent/unread status per message
- **Multi-Message Editor** – Add, edit, delete, reorder messages; toggle sent/received; set time and read status per bubble
- **Light / Dark Mode** – Per-theme light and dark colour schemes (WhatsApp uses real WA green/beige colours)
- **Auto-Scaling** – Mockup always fits the viewport (Figma-style scale-to-fit)
- **Random Dummy Data** – 5 coherent conversation sets per locale, auto-loaded on theme switch
- **Avatar Upload** – Client-side canvas resize to 500×500 WebP, stored as Object URL
- **Export PNG** – High-resolution Retina export via `html-to-image` (2× pixel ratio)
- **i18n** – English (root `/`) and German (`/de/`), SSG-built with hreflang tags
- **Onboarding Tutorial** – 5-step walkthrough overlay with localStorage persistence
- **Premium UI** – Glassmorphism, bento-box layout, dark warm `#0d0a07` background
- **Security** – Strict CSP headers, Mozilla Observatory A+ target (via Caddyfile)

## Tech Stack

- **Build:** Vite 6
- **CSS:** Tailwind CSS 4 (via PostCSS)
- **JS:** Vanilla JS (no framework)
- **Images:** `vite-plugin-image-optimizer` + sharp (WebP/AVIF)
- **Export:** `html-to-image` (client-side)
- **Hosting:** Caddy (static files, SSG routing)

## Development

```bash
npm install
npm run dev      # Vite dev server
```

## Build

```bash
npm run build    # Locale test → Vite build → SSG post-build
```

Output lands in `dist/`. English at `/`, German at `/de/`.

## Deployment

The included `Caddyfile` serves the static site with security headers and automatic locale routing:

```bash
caddy run
```

## License

MIT
