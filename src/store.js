const STORAGE_KEY = 'koalasnap_state';
const TEMPLATES_KEY = 'koalasnap_templates';
const SIDEBAR_KEY = 'koalasnap_sidebar';

const STATE_VERSION = 3;

const OLD_DEFAULTS = {
  bgGradient: 'from-sky-400 to-indigo-600',
};

const MIGRATIONS = {
  1: (state) => {
    if (state.bgGradient === OLD_DEFAULTS.bgGradient) {
      state.bgGradient = 'from-slate-900 to-indigo-950';
    }
    return state;
  },
  2: (state) => {
    if (state.bgGradient === OLD_DEFAULTS.bgGradient) {
      state.bgGradient = 'from-slate-900 to-indigo-950';
    }
    return state;
  },
};

function loadPersisted(defaults) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const stored = JSON.parse(raw);
      if (stored.bgGradient === 'from-sky-400 to-indigo-600') {
        stored.bgGradient = 'from-slate-900 to-indigo-950';
      }
      const ver = stored._version || 1;
      if (ver < STATE_VERSION) {
        for (let v = ver; v < STATE_VERSION; v++) {
          if (MIGRATIONS[v]) MIGRATIONS[v](stored);
        }
        stored._version = STATE_VERSION;
        const { avatar: _, ...rest } = stored;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(rest));
      }
      return { ...defaults, ...stored };
    }
  } catch { /* ignore */ }
  return { ...defaults };
}

function savePersisted(state) {
  try {
    const { avatar: _, ...rest } = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rest));
  } catch { /* ignore */ }
}

function loadStateFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get('state');
    if (!encoded) return null;
    const binary = atob(encoded);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    const json = new TextDecoder().decode(bytes);
    const parsed = JSON.parse(json);
    if (parsed && typeof parsed === 'object') return parsed;
  } catch { /* ignore */ }
  return null;
}

function createStore(defaults) {
  const urlState = loadStateFromUrl();
  const state = urlState ? { ...defaults, ...urlState } : loadPersisted(defaults);
  const listeners = new Set();
  const history = [];
  const redoStack = [];
  const MAX_HISTORY = 50;
  let _historyPaused = false;

  function snapshot() {
    if (_historyPaused) return;
    history.push(JSON.parse(JSON.stringify(state)));
    if (history.length > MAX_HISTORY) history.shift();
    redoStack.length = 0;
  }

  return {
    get(key) {
      return state[key];
    },
    getState() {
      return { ...state };
    },
    set(key, value) {
      snapshot();
      state[key] = value;
      savePersisted(state);
      listeners.forEach((fn) => fn(key, value, state));
    },
    setAll(patch) {
      snapshot();
      Object.assign(state, patch);
      savePersisted(state);
      listeners.forEach((fn) => fn(null, null, state));
    },
    mutate(patch) {
      snapshot();
      Object.assign(state, patch);
      savePersisted(state);
      listeners.forEach((fn) => fn(null, null, state));
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    reset() {
      snapshot();
      Object.assign(state, defaults);
      savePersisted(state);
      listeners.forEach((fn) => fn(null, null, state));
    },
    undo() {
      if (history.length === 0) return;
      redoStack.push(JSON.parse(JSON.stringify(state)));
      const prev = history.pop();
      Object.assign(state, prev);
      savePersisted(state);
      listeners.forEach((fn) => fn('_undo', null, state));
    },
    redo() {
      if (redoStack.length === 0) return;
      history.push(JSON.parse(JSON.stringify(state)));
      const next = redoStack.pop();
      Object.assign(state, next);
      savePersisted(state);
      listeners.forEach((fn) => fn('_redo', null, state));
    },
    canUndo() {
      return history.length > 0;
    },
    canRedo() {
      return redoStack.length > 0;
    },
    pauseHistory() {
      _historyPaused = true;
    },
    resumeHistory() {
      _historyPaused = false;
    },
    /* Templates */
    saveTemplate(name) {
      try {
        const templates = JSON.parse(localStorage.getItem(TEMPLATES_KEY) || '{}');
        const { avatar: _, ...rest } = state;
        templates[name] = rest;
        localStorage.setItem(TEMPLATES_KEY, JSON.stringify(templates));
        return true;
      } catch { return false; }
    },
    deleteTemplate(name) {
      try {
        const templates = JSON.parse(localStorage.getItem(TEMPLATES_KEY) || '{}');
        delete templates[name];
        localStorage.setItem(TEMPLATES_KEY, JSON.stringify(templates));
        return true;
      } catch { return false; }
    },
    loadTemplate(name) {
      try {
        const templates = JSON.parse(localStorage.getItem(TEMPLATES_KEY) || '{}');
        const tmpl = templates[name];
        if (!tmpl) return false;
        this.mutate(tmpl);
        return true;
      } catch { return false; }
    },
    listTemplates() {
      try {
        return Object.keys(JSON.parse(localStorage.getItem(TEMPLATES_KEY) || '{}'));
      } catch { return []; }
    },
    /* Sidebar state */
    getSidebarOpen() {
      return localStorage.getItem(SIDEBAR_KEY) !== 'false';
    },
    setSidebarOpen(open) {
      localStorage.setItem(SIDEBAR_KEY, String(open));
    },
    /* Encode current state as shareable base64 URL */
    getShareUrl() {
      try {
        const { avatar: _, ...rest } = state;
        const json = JSON.stringify(rest);
        const bytes = new TextEncoder().encode(json);
        const binary = String.fromCharCode(...bytes);
        const encoded = btoa(binary);
        const url = new URL(window.location.href.split('?')[0].split('#')[0]);
        url.searchParams.set('state', encoded);
        return url.toString();
      } catch { return null; }
    },
  };
}

const defaults = {
  _version: STATE_VERSION,
  theme: 'whatsapp',
  author: 'Maya',
  handle: '@maya_99',
  username: 'Maya',
  roleColor: '#e81224',
  timestamp: '7:18 PM',
  statusBarTime: '09:41',
  statusText: 'online',
  imessageMode: 'imessage',
  statusBarBattery: 100,
  statusBarSignal: 4,
  statusBarWifi: true,
  isGroup: false,
  message: 'Hey, are you coming online tonight?',
  avatar: null,
  bgGradient: 'from-slate-900 to-indigo-950',
  padding: 48,
  mockupTheme: 'light',
  waMode: 'sent',
  locale: 'en',
  fontFamily: 'system-ui',
  chatBg: null,
  chatBgGradient: '',
  messages: [
    { id: 1, text: 'Hey, are you coming online tonight?', type: 'sent', time: '7:18 PM', status: 'read' },
    { id: 2, text: 'Yeah, give me 5!', type: 'received', time: '7:20 PM', status: 'read' },
    { id: 3, text: 'Sure, take your time 🐨', type: 'sent', time: '7:21 PM', status: 'delivered' },
  ],
};

export const store = createStore(defaults);
