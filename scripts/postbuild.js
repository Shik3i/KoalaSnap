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

  /* External locale JS file (avoids CSP 'script-src' blocking inline scripts) */
  const localeScript = `window.__LOCALE__=${localeJson}`;
  const localeFileName = `locale.${lang}.js`;
  writeFileSync(join(DIST, localeFileName), localeScript);

  const outHtml = html
    .replace('<html lang="de"', `<html lang="${lang}"`)
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
