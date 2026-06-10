/**
 * Test: locale-Validierung
 *
 * Prüft, ob alle locales/*.json exakt dieselben Keys enthalten.
 * Exit-Code 1 bei Fehlern → bricht den Build ab.
 */

import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = join(__dirname, '..', 'locales');

/* ---- Keys rekursiv flatten ---- */
function flattenKeys(obj, prefix = '') {
  const keys = new Set();
  for (const [key, value] of Object.entries(obj)) {
    const full = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenKeys(value, full).forEach((k) => keys.add(k));
    } else {
      keys.add(full);
    }
  }
  return keys;
}

/* ---- Alle Locales einlesen ---- */
const files = readdirSync(LOCALES_DIR).filter((f) => f.endsWith('.json'));
if (files.length < 2) {
  console.error('❌ Mindestens 2 Sprachdateien in locales/ erforderlich');
  process.exit(1);
}

const locales = {};
for (const f of files) {
  const lang = f.replace('.json', '');
  const raw = JSON.parse(readFileSync(join(LOCALES_DIR, f), 'utf-8'));
  locales[lang] = flattenKeys(raw);
}

/* ---- Keys vergleichen ---- */
const allKeys = [...new Set(Object.values(locales).flatMap((s) => [...s]))].sort();
let hasError = false;

for (const [lang, keys] of Object.entries(locales)) {
  const missing = allKeys.filter((k) => !keys.has(k));
  if (missing.length > 0) {
    console.error(`❌ ${lang}.json fehlt: ${missing.join(', ')}`);
    hasError = true;
  }
  const extra = [...keys].filter((k) => !allKeys.includes(k));
  if (extra.length > 0) {
    console.error(`❌ ${lang}.json hat zusätzliche Keys: ${extra.join(', ')}`);
    hasError = true;
  }
}

if (hasError) {
  console.error('❌ i18n-Test fehlgeschlagen');
  process.exit(1);
}

console.log(`✓ i18n-Test bestanden (${files.length} Dateien, ${allKeys.length} Keys)`);
