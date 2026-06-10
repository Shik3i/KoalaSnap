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
