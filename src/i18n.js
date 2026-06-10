const data = window.__LOCALE__ || {};

export function t(key) {
  const val = key.split('.').reduce((o, k) => (o != null ? o[k] : undefined), data);
  return val ?? key;
}

export function currentLocale() {
  const m = window.location.pathname.match(/^\/([a-z]{2})\//);
  return m ? m[1] : 'en';
}

export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
