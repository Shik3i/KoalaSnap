/**
 * Post-Build-Script:  SSG Multi-Locale
 *
 * Root = Englisch  (dist/index.html)          → https://koalasnap.net/
 * /de/ = Deutsch   (dist/de/index.html)       → https://koalasnap.net/de/
 *
 * Jede Datei erhält hreflang-Tags + window.__LOCALE__.
 * Assets unter dist/assets/ werden geteilt (root-relativ).
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const LOCALES_DIR = join(ROOT, 'locales');

const SITE_URL = 'https://koalasnap.net';

/* ---- Locales ermitteln ---- */
const LOCALE_FILES = readdirSync(LOCALES_DIR)
  .filter((f) => f.endsWith('.json'))
  .sort();
const LOCALES = LOCALE_FILES.map((f) => f.replace('.json', ''));

if (!existsSync(DIST)) {
  console.error('❌ dist/ nicht gefunden. Bitte zuerst `npm run build` ausführen.');
  process.exit(1);
}

const htmlPath = join(DIST, 'index.html');
if (!existsSync(htmlPath)) {
  console.error('❌ dist/index.html nicht gefunden.');
  process.exit(1);
}
const html = readFileSync(htmlPath, 'utf-8');

/* ---- hreflang: englische Version lebt auf Root ---- */
const allLocales = LOCALES.map((lang) => ({
  lang,
  href: lang === 'en' ? `${SITE_URL}/` : `${SITE_URL}/${lang}/`,
}));

/* ---- Pro Locale generieren ---- */
for (const lang of LOCALES) {
  const localePath = join(LOCALES_DIR, `${lang}.json`);
  if (!existsSync(localePath)) {
    console.warn(`⚠ locales/${lang}.json nicht gefunden – überspringe.`);
    continue;
  }

  const localeData = JSON.parse(readFileSync(localePath, 'utf-8'));
  const localeJson = JSON.stringify(localeData).replace(/</g, '\\u003C');

  /* hreflang-Links für ALLE Sprachen (jede Datei bekommt alle) */
  const hreflangLinks = allLocales
    .map((l) => `    <link rel="alternate" hreflang="${l.lang}" href="${l.href}" />`)
    .join('\n') +
    `\n    <link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`;

  const canonicalUrl = lang === 'en' ? `${SITE_URL}/` : `${SITE_URL}/${lang}/`;

  /* Dynamic SEO / GEO / AEO meta tags */
  const metaTagsHtml = `
    <meta name="description" content="${localeData.seo.description}" />
    <meta name="keywords" content="${localeData.seo.keywords}" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${localeData.seo.title}" />
    <meta property="og:description" content="${localeData.seo.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${SITE_URL}/koalasnap-192.png" />
    <meta property="og:site_name" content="KoalaSnap" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${localeData.seo.title}" />
    <meta name="twitter:description" content="${localeData.seo.description}" />
    <meta name="twitter:image" content="${SITE_URL}/koalasnap-192.png" />

    <!-- Schema.org JSON-LD (GEO / AEO) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "KoalaSnap",
      "alternateName": "KoalaSnap Mockup Editor",
      "url": "${canonicalUrl}",
      "image": "${SITE_URL}/koalasnap-192.png",
      "description": "${localeData.seo.description}",
      "applicationCategory": "DesignApplication, UtilitiesApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Organization",
        "name": "KoalaSnap",
        "url": "https://koalasnap.net"
      }
    }
    </script>
  `;

  /* Localized static fallback content (GEO / AEO / crawlers) */
  const fallbackHtml = `
    <main style="position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); border:0;">
      <h1>${localeData.seo.headerTitle}</h1>
      <p>${localeData.seo.headerSubtitle}</p>
      
      <section>
        <h2>${localeData.seo.featuresTitle}</h2>
        <ul>
          <li><strong>WhatsApp Simulator:</strong> ${localeData.seo.features.whatsapp}</li>
          <li><strong>Discord Simulator:</strong> ${localeData.seo.features.discord}</li>
          <li><strong>Telegram & iMessage:</strong> ${localeData.seo.features.others}</li>
          <li><strong>Social Media Post Mockups:</strong> ${localeData.seo.features.social}</li>
          <li><strong>Instant Export:</strong> ${localeData.seo.features.export}</li>
          <li><strong>Privacy First:</strong> ${localeData.seo.features.privacy}</li>
        </ul>
      </section>

      <section id="faq">
        <h2>${localeData.seo.faqTitle}</h2>
        <article>
          <h3>${localeData.seo.faq.q1}</h3>
          <p>${localeData.seo.faq.a1}</p>
        </article>
        <article>
          <h3>${localeData.seo.faq.q2}</h3>
          <p>${localeData.seo.faq.a2}</p>
        </article>
        <article>
          <h3>${localeData.seo.faq.q3}</h3>
          <p>${localeData.seo.faq.a3}</p>
        </article>
      </section>
    </main>
  `;

  /* External locale JS file (avoids CSP 'script-src' blocking inline scripts) */
  const localeScript = `window.__LOCALE__=${localeJson}`;
  const localeFileName = `locale.${lang}.js`;
  writeFileSync(join(DIST, localeFileName), localeScript);

  const outHtml = html
    .replace('<html lang="de"', `<html lang="${lang}"`)
    .replace('<title>KoalaSnap — Mockup Editor</title>', `<title>${localeData.seo.title}</title>`)
    .replace('<!-- SEO_META_TAGS -->', metaTagsHtml)
    .replace('<!-- SEO_FALLBACK_CONTENT -->', fallbackHtml)
    .replace(
      '</head>',
      `  ${hreflangLinks}\n    <script src="/${localeFileName}"></script>\n  </head>`,
    );

  if (lang === 'en') {
    /* Englisch auf Root */
    writeFileSync(join(DIST, 'index.html'), outHtml);
    console.log(`✓ dist/index.html  (en, hreflang ×${allLocales.length + 1})`);
  } else {
    /* Andere Sprachen in Unterverzeichnisse */
    const outDir = join(DIST, lang);
    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), outHtml);
    console.log(`✓ dist/${lang}/index.html  (${lang}, hreflang ×${allLocales.length + 1})`);
  }
}

console.log('✓ SSG Multi-Locale abgeschlossen');
