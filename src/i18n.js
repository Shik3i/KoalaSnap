const data = window.__LOCALE__ || {};

export function t(key) {
  const val = key.split('.').reduce((o, k) => (o != null ? o[k] : undefined), data);
  return val ?? key;
}

export function currentLocale() {
  const path = window.location.pathname;
  if (path.startsWith('/de/') || path === '/de') return 'de';
  return 'en';
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
