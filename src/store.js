import avatarFallback from './assets/avatar-fallback.svg';

function createStore(initial) {
  const state = { ...initial };
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
      listeners.forEach((fn) => fn(key, value, state));
    },
    setAll(patch) {
      Object.assign(state, patch);
      listeners.forEach((fn) => fn(null, null, state));
    },
    mutate(patch) {
      Object.assign(state, patch);
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
}

export const store = createStore({
  theme: 'whatsapp',
  author: 'Maya',
  handle: '@maya_99',
  username: 'Maya',
  roleColor: '#e81224',
  timestamp: '7:18 PM',
  message: 'Hey! Das sieht richtig gut aus! 🔥',
  avatar: avatarFallback,
  bgGradient: 'from-sky-400 to-indigo-600',
  padding: 48,
  mockupTheme: 'light',
  activeFilter: 'all',
  waMode: 'sent',
  messages: [
    { id: 1, text: 'Hey, kommst du heute Abend online?', type: 'sent', time: '19:18', status: 'read' },
    { id: 2, text: 'Ja, bin in 5 Minuten da!', type: 'received', time: '19:20', status: 'read' },
    { id: 3, text: 'Lass uns raiden gehen 🎮', type: 'sent', time: '19:22', status: 'delivered' },
  ],
});
