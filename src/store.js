const STORAGE_KEY = 'koalasnap_state';

const AVATAR_FALLBACK_DATA_URL = 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="50" fill="#2c2c2c"/><circle cx="50" cy="46" r="26" fill="#999"/><circle cx="32" cy="28" r="15" fill="#999"/><circle cx="68" cy="28" r="15" fill="#999"/><circle cx="41" cy="41" r="3.5" fill="#1a1a1a"/><circle cx="59" cy="41" r="3.5" fill="#1a1a1a"/><ellipse cx="50" cy="54" rx="8" ry="5.5" fill="#1a1a1a"/></svg>`);

function loadPersisted(defaults) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaults, ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return { ...defaults };
}

function savePersisted(state) {
  try {
    const { avatar: _, ...rest } = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rest));
  } catch { /* ignore */ }
}

function createStore(defaults) {
  const state = loadPersisted(defaults);
  const listeners = new Set();

  return {
    get(key) {
      return state[key];
    },
    getState() {
      return { ...state };
    },
    set(key, value) {
      state[key] = value;
      savePersisted(state);
      listeners.forEach((fn) => fn(key, value, state));
    },
    setAll(patch) {
      Object.assign(state, patch);
      savePersisted(state);
      listeners.forEach((fn) => fn(null, null, state));
    },
    mutate(patch) {
      Object.assign(state, patch);
      savePersisted(state);
      listeners.forEach((fn) => fn(null, null, state));
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    reset() {
      Object.assign(state, defaults);
      savePersisted(state);
      listeners.forEach((fn) => fn(null, null, state));
    },
  };
}

const defaults = {
  theme: 'whatsapp',
  author: 'Maya',
  handle: '@maya_99',
  username: 'Maya',
  roleColor: '#e81224',
  timestamp: '7:18 PM',
  message: 'Hey, are you coming online tonight?',
  avatar: AVATAR_FALLBACK_DATA_URL,
  bgGradient: 'from-sky-400 to-indigo-600',
  padding: 48,
  mockupTheme: 'light',
  waMode: 'sent',
  locale: 'en',
  messages: [
    { id: 1, text: 'Hey, are you coming online tonight?', type: 'sent', time: '7:18 PM', status: 'read' },
    { id: 2, text: 'Yeah, give me 5!', type: 'received', time: '7:20 PM', status: 'read' },
    { id: 3, text: 'Sure, take your time 🐨', type: 'sent', time: '7:21 PM', status: 'delivered' },
  ],
};

export const store = createStore(defaults);
