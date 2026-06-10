import { store } from './store.js';
import { t, currentLocale } from './i18n.js';
import { compressAvatar, releaseAvatar } from './avatar.js';
import { startTutorial, isCompleted, isTutorialActive, reapplyStep } from './tutorial.js';
import { render as renderSocialPost, sync as syncSocialPost } from './themes/social-post.js';
import { render as renderDiscord, sync as syncDiscord } from './themes/discord.js';
import { render as renderWhatsApp, sync as syncWhatsApp } from './themes/whatsapp.js';
import { render as renderTelegram, sync as syncTelegram } from './themes/telegram.js';
import { render as renderSignal, sync as syncSignal } from './themes/signal.js';
import { render as renderIMessage, sync as syncIMessage } from './themes/imessage.js';

/* ------------------------------------------------------------------ */
/*  Theme registry                                                     */
/* ------------------------------------------------------------------ */
const themes = {
  'social-post': { render: renderSocialPost, sync: syncSocialPost },
  'discord': { render: renderDiscord, sync: syncDiscord },
  'whatsapp': { render: renderWhatsApp, sync: syncWhatsApp },
  'telegram': { render: renderTelegram, sync: syncTelegram },
  'signal': { render: renderSignal, sync: syncSignal },
  'imessage': { render: renderIMessage, sync: syncIMessage },
};
let currentTheme = store.get('theme');

/* ------------------------------------------------------------------ */
/*  App-liste für die Library                                          */
/* ------------------------------------------------------------------ */

function themeLabel() {
  const map = {
    'social-post': t('sidebar.socialPost'),
    'discord': t('sidebar.discord'),
    'whatsapp': 'WhatsApp',
    'telegram': 'Telegram',
    'signal': 'Signal',
    'imessage': 'iMessage',
  };
  return map[currentTheme] || currentTheme;
}

const GRADIENT_PRESETS = [
  { label: 'Sky',      value: 'from-sky-400 to-indigo-600' },
  { label: 'Rose',     value: 'from-rose-400 to-orange-600' },
  { label: 'Emerald',  value: 'from-emerald-400 to-cyan-600' },
  { label: 'Amber',    value: 'from-amber-400 to-red-600' },
  { label: 'Violet',   value: 'from-violet-400 to-fuchsia-600' },
  { label: 'Charcoal', value: 'from-zinc-800 to-zinc-950' },
];
const GRADIENT_COLORS = {
  'from-sky-400 to-indigo-600':     ['#38bdf8', '#4f46e5'],
  'from-rose-400 to-orange-600':    ['#fb7185', '#ea580c'],
  'from-emerald-400 to-cyan-600':   ['#34d399', '#0891b2'],
  'from-amber-400 to-red-600':      ['#fbbf24', '#dc2626'],
  'from-violet-400 to-fuchsia-600': ['#a78bfa', '#c026d3'],
  'from-zinc-800 to-zinc-950':      ['#27272a', '#09090b'],
};

/* ------------------------------------------------------------------ */
/*  Brand SVG-Icons                                                    */
/* ------------------------------------------------------------------ */
const APPS = [
  { id: 'whatsapp',  theme: 'whatsapp',  domain: 'whatsapp.com',    name: 'WhatsApp',  tag: 'chat' },
  { id: 'telegram',  theme: 'telegram',  domain: 'telegram.org',    name: 'Telegram',  tag: 'chat' },
  { id: 'signal',    theme: 'signal',    domain: 'signal.org',      name: 'Signal',    tag: 'chat' },
  { id: 'messenger', theme: 'social-post', domain: 'messenger.com',   name: 'Messenger', tag: 'chat' },
  { id: 'imessage',  theme: 'imessage',  domain: 'apple.com',       name: 'iMessage',  tag: 'chat' },
  { id: 'instagram', theme: 'social-post', domain: 'instagram.com',   name: 'Instagram', tag: 'social' },
  { id: 'twitter',   theme: 'social-post', domain: 'x.com',           name: 'X',         tag: 'social' },
  { id: 'tiktok',    theme: 'social-post', domain: 'tiktok.com',      name: 'TikTok',    tag: 'social' },
  { id: 'discord',   theme: 'discord',   domain: 'discord.com',     name: 'Discord',   tag: 'chat' },
];

/* ------------------------------------------------------------------ */
/*  SVG-Icons                                                          */
/* ------------------------------------------------------------------ */
const SVG = {
  koala: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="8" ry="7.5"/><circle cx="7" cy="5" r="4"/><circle cx="17" cy="5" r="4"/><circle cx="9" cy="11" r="1.2" fill="#0d0a07"/><circle cx="15" cy="11" r="1.2" fill="#0d0a07"/><ellipse cx="12" cy="16" rx="2.5" ry="1.2"/></svg>`,

  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  spinner: `<svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,

  chevronDown: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
};

const LANG = currentLocale();

/* ------------------------------------------------------------------ */
/*  Layout-Komponenten                                                 */
/* ------------------------------------------------------------------ */
function renderTopbar(state) {
  const filters = [
    { id: 'all', label: t('topbar.filters.all') },
    { id: 'free', label: t('topbar.filters.free') },
    { id: 'favorites', label: t('topbar.filters.favorites') },
  ];
  return `
    <header class="h-14 shrink-0 flex items-center justify-between px-5 border-b border-white/[5%] bg-[#0d0a07]/80 backdrop-blur-xl">
      <div class="flex items-center gap-3">
        <div class="text-zinc-100">${SVG.koala}</div>
        <span class="text-sm font-bold tracking-tight">${t('app.name')}</span>
      </div>
      <div class="flex items-center gap-1.5">
        ${filters.map((f) => `
          <button class="filter-pill px-3.5 py-1.5 rounded-full text-xs font-medium transition-all
            ${state.activeFilter === f.id
              ? 'bg-white text-zinc-900'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'}"
            data-filter="${f.id}" aria-label="${f.label}">${f.label}</button>
        `).join('')}
      </div>
      <div class="flex items-center gap-2">
        <button id="btn-topbar-export" aria-label="${t('topbar.export')}"
          class="flex items-center gap-1.5 rounded-full bg-[#f97316] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#ea580c] active:scale-[0.97] transition-all disabled:opacity-60 disabled:pointer-events-none">
          <span id="btn-export-icon">${SVG.download}</span>
          <span id="btn-export-label">${t('topbar.export')}</span>
        </button>
        <button id="btn-start-tour" aria-label="${t('tutorial.restart')}"
          class="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-all mr-1">${t('tutorial.restart')}</button>
        <div class="relative flex">
          <select id="lang-select" aria-label="Language"
            class="appearance-none bg-white/5 border border-white/10 rounded-full pl-2.5 pr-6 py-1.5 text-xs
                   text-zinc-400 hover:text-zinc-200 hover:border-white/20 outline-0 transition-all cursor-pointer">
            <option value="de" ${LANG === 'de' ? 'selected' : ''}>DE</option>
            <option value="en" ${LANG === 'en' ? 'selected' : ''}>EN</option>
          </select>
          <span class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">${SVG.chevronDown}</span>
        </div>
      </div>
    </header>
  `;
}

function renderSidebar(state) {
  return `
    <aside id="sidebar" class="w-[340px] shrink-0 h-full overflow-y-auto p-4 flex flex-col gap-4">
      <div id="app-library" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
        <div class="flex items-center justify-between cursor-pointer select-none" id="app-library-toggle">
          <span class="text-xs font-semibold text-zinc-300 tracking-wide">${t('sidebar.appLibrary')}</span>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-zinc-600">${APPS.length} ${t('sidebar.apps')}</span>
            <span id="app-library-chevron" class="text-zinc-500 transition-transform">${SVG.chevronDown}</span>
          </div>
        </div>
        <div id="app-library-body">
          <div class="relative mb-2">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">${SVG.search}</span>
            <input type="text" placeholder="${t('sidebar.search')}"
              class="w-full rounded-xl border border-white/[6%] bg-white/[4%] pl-9 pr-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
          </div>
          <div class="flex flex-col gap-1.5">
            ${APPS.map((app) => {
              const active = app.theme === currentTheme;
              return `
                <button data-app="${app.id}" aria-label="${app.id}"
                  class="flex items-center gap-3 rounded-xl border p-2.5 transition-all text-left
                    ${active
                      ? 'border-white/15 bg-white/[8%]'
                      : 'border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]'}">
                  <img src="https://www.google.com/s2/favicons?domain=${app.domain}&sz=128"
                    alt="${app.name}" class="w-7 h-7 rounded-lg shrink-0" loading="lazy" />
                  <span class="flex-1 text-xs font-medium text-white">${app.name}</span>
                  <span class="text-[9px] text-zinc-600 uppercase tracking-wider">${app.tag === 'chat' ? t('canvas.chat') : t('canvas.social')}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <div id="settings-panel" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-4">
        <span class="text-xs font-semibold text-zinc-300 tracking-wide">${t('sidebar.settings')} · <span class="text-zinc-500 font-normal normal-case">${themeLabel()}</span></span>
        ${renderSettingsFields(state)}
      </div>
    </aside>
  `;
}

function renderSettingsFields(state) {
  const isMessenger = ['whatsapp', 'telegram', 'signal', 'imessage'].includes(currentTheme);

  let fields = '';

  if (currentTheme === 'discord') {
    fields = `
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.username')}</span>
        <input id="input-username" type="text" value="${state.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.roleColor')}</span>
        <div class="flex items-center gap-3">
          <input id="input-rolecolor" type="color" value="${state.roleColor}"
            class="w-9 h-9 rounded-xl border border-white/[6%] bg-white/[4%] p-0.5 cursor-pointer" />
          <span class="text-xs text-zinc-500 font-mono">${state.roleColor}</span>
        </div>
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.timestamp')}</span>
        <input id="input-timestamp" type="text" value="${state.timestamp}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`;
  } else if (isMessenger) {
    fields = `
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.username')}</span>
        <input id="input-username" type="text" value="${state.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`;

    /* WhatsApp: message list + type toggle */
    if (currentTheme === 'whatsapp') {
      fields += `
      <div class="flex flex-col gap-2 mt-2">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.message')}</span>
        <div id="wa-message-list" class="flex flex-col gap-2">
          ${state.messages.map((msg, idx) => renderMessageRow(msg, idx)).join('')}
        </div>
        <button id="btn-add-message"
          class="w-full rounded-xl border border-dashed border-white/[8%] py-2 text-xs text-zinc-500 hover:text-zinc-300 hover:border-white/20 transition-all">+ ${t('sidebar.addMessage')}</button>
      </div>`;
    } else {
      fields += `
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.timestamp')}</span>
        <input id="input-timestamp" type="text" value="${state.timestamp}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`;
    }
  } else {
    /* Social Post (default) */
    fields = `
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.author')}</span>
        <input id="input-author" type="text" value="${state.author}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.handle')}</span>
        <input id="input-handle" type="text" value="${state.handle}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`;
  }

  return `
    <div id="settings-fields">
      ${fields}

      ${currentTheme !== 'whatsapp' ? `
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.message')}</span>
        <textarea id="input-message" rows="3"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none">${state.message}</textarea>
      </label>` : ''}

      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.avatar')}</span>
        <input id="input-avatar" type="file" accept="image/*"
          class="text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:text-zinc-200 file:font-medium hover:file:bg-white/15 transition-colors" />
      </label>
    </div>
    <div class="mt-4 pt-4 border-t border-white/[6%] space-y-4">
      ${renderSharedSettings(state)}
    </div>
  `;
}

const MSG_STATUS = [
  { id: 'read', title: 'Read', svg: `<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>` },
  { id: 'delivered', title: 'Delivered', svg: `<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>` },
  { id: 'sent', title: 'Sent', svg: `<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { id: 'unread', title: 'Unread', svg: `<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>` },
];

function renderMessageRow(msg, idx) {
  const isSent = msg.type === 'sent';
  const sentActive = isSent ? 'bg-white text-zinc-900' : 'bg-white/[4%] text-zinc-500 hover:text-zinc-300';
  const recvActive = !isSent ? 'bg-white text-zinc-900' : 'bg-white/[4%] text-zinc-500 hover:text-zinc-300';
  const status = msg.status || 'read';
  return `
    <div class="rounded-xl border border-white/[6%] bg-white/[3%] p-2.5 flex flex-col gap-1.5" data-msg-idx="${idx}">
      <textarea data-msg-idx="${idx}" rows="2"
        class="w-full rounded-lg border border-white/[6%] bg-white/[4%] px-2.5 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none" placeholder="${t('sidebar.messagePlaceholder')}">${msg.text}</textarea>
      <div class="flex items-center gap-1.5">
        <button data-msg-idx="${idx}" data-msg-type="sent"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${sentActive}">${t('sidebar.sent')}</button>
        <button data-msg-idx="${idx}" data-msg-type="received"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${recvActive}">${t('sidebar.received')}</button>
        <div class="flex gap-0.5 ml-1">
          ${MSG_STATUS.map(s => `
            <button data-msg-idx="${idx}" data-msg-status="${s.id}"
              class="p-1 rounded-md transition-all ${status === s.id ? 'bg-white/15 ring-1 ring-white/20' : 'text-zinc-600 hover:text-zinc-300 hover:bg-white/5'}"
              title="${s.title}">${s.svg}</button>
          `).join('')}
        </div>
        <input type="text" data-msg-idx="${idx}" data-msg-field="time" value="${msg.time}"
          class="w-14 rounded-lg border border-white/[6%] bg-white/[4%] px-2 py-1 text-[10px] text-zinc-200 text-center outline-0 focus:border-zinc-600 transition-colors" placeholder="${t('sidebar.timePlaceholder')}" />
        <button data-msg-idx="${idx}" data-msg-action="delete"
          class="p-1 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all" title="${t('sidebar.deleteMessage')}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `;
}

function renderSharedSettings(state) {
  return `
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.padding')}</span>
      <div class="flex items-center gap-3">
        <input id="input-padding" type="range" min="16" max="96" value="${state.padding}"
          class="flex-1 accent-zinc-400 h-1 cursor-pointer" />
        <span id="padding-value" class="text-xs text-zinc-500 w-8 text-right">${state.padding}</span>
      </div>
    </label>
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.background')}</span>
      <div class="flex flex-wrap gap-1.5">
        ${GRADIENT_PRESETS.map((g) => `
          <button data-gradient="${g.value}" aria-label="${g.label}"
            class="w-7 h-7 rounded-lg ${g.value} ring-1 ring-white/[8%] hover:ring-white/30 transition-all
              ${state.bgGradient === g.value ? 'ring-2 ring-white scale-110' : ''}"></button>
        `).join('')}
      </div>
    </label>
  `;
}

function renderBottomBar(state) {
  return `
    <div id="bottom-bar" class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
                flex items-center gap-1 rounded-full bg-white/[6%] backdrop-blur-2xl
                border border-white/[8%] px-2 py-1.5 shadow-2xl shadow-black/30">
      <button id="btn-mockup-theme" aria-label="${t('bottom.toggleTheme')}" class="rounded-full p-2 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${t('bottom.toggleTheme')}">
        ${state.mockupTheme === 'light' ? SVG.sun : SVG.moon}
      </button>
    </div>
  `;
}

/* ------------------------------------------------------------------ */
/*  App-Renderer                                                       */
/* ------------------------------------------------------------------ */
function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;
  const state = store.getState();
  app.innerHTML = `
    ${renderTopbar(state)}
    <div id="main-area" class="flex-1 flex overflow-hidden">
      ${renderSidebar(state)}
      <main id="canvas" class="flex-1 relative overflow-hidden">
        <div id="canvas-area" class="absolute inset-0 flex items-center justify-center overflow-hidden z-10">
          <div id="mockup"></div>
        </div>
        ${renderBottomBar(state)}
      </main>
    </div>
  `;
  bindEvents();
  renderCurrentTheme();
}

function updateSettingsPanel(state) {
  const panel = document.getElementById('settings-panel');
  if (!panel) return;
  panel.innerHTML = `
    <span class="text-xs font-semibold text-zinc-300 tracking-wide">${t('sidebar.settings')} · <span class="text-zinc-500 font-normal normal-case">${themeLabel()}</span></span>
    ${renderSettingsFields(state)}
  `;
  bindSettingsEvents();
}

/* ------------------------------------------------------------------ */
/*  Event-Binding                                                      */
/* ------------------------------------------------------------------ */
function bindEvents() {
  bind('btn-topbar-export', 'click', downloadPng);
  bind('btn-mockup-theme', 'click', () => {
    const next = store.get('mockupTheme') === 'light' ? 'dark' : 'light';
    store.set('mockupTheme', next);
  });
  bind('lang-select', 'change', (e) => {
    window.location.href = `/${e.target.value}/`;
  });
  bind('btn-start-tour', 'click', () => startTutorial());

  document.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.addEventListener('click', () => store.set('activeFilter', btn.dataset.filter));
  });

  document.querySelectorAll('[data-gradient]').forEach((btn) => {
    btn.addEventListener('click', () => store.set('bgGradient', btn.dataset.gradient));
  });

  document.querySelectorAll('[data-app]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const app = APPS.find((a) => a.id === btn.dataset.app);
      if (app) store.set('theme', app.theme);
      _collapseAppLibrary();
    });
  });

  const toggleBtn = document.getElementById('app-library-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const body = document.getElementById('app-library-body');
      const chevron = document.getElementById('app-library-chevron');
      if (!body) return;
      const isHidden = body.style.display === 'none';
      body.style.display = isHidden ? '' : 'none';
      if (chevron) chevron.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  }

  bindSettingsEvents();
}

function bindSettingsEvents() {
  bind('input-padding', 'input', (e) => {
    store.set('padding', Number(e.target.value));
    const val = document.getElementById('padding-value');
    if (val) val.textContent = e.target.value;
  });

  bind('input-message', 'input', (e) => store.set('message', e.target.value));

  bind('input-avatar', 'change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const oldUrl = store.get('avatar');
      const newUrl = await compressAvatar(file);
      if (oldUrl && oldUrl.startsWith('blob:')) URL.revokeObjectURL(oldUrl);
      store.set('avatar', newUrl);
    } catch {
      store.set('avatar', null);
    }
  });

  if (currentTheme === 'social-post') {
    bind('input-author', 'input', (e) => store.set('author', e.target.value));
    bind('input-handle', 'input', (e) => store.set('handle', e.target.value));
  } else if (currentTheme === 'discord') {
    bind('input-username', 'input', (e) => store.set('username', e.target.value));
    bind('input-rolecolor', 'input', (e) => store.set('roleColor', e.target.value));
    bind('input-timestamp', 'input', (e) => store.set('timestamp', e.target.value));
  } else if (['whatsapp', 'telegram', 'signal', 'imessage'].includes(currentTheme)) {
    bind('input-username', 'input', (e) => store.set('username', e.target.value));

    if (currentTheme === 'whatsapp') {
      bindMessageEvents();
    } else {
      bind('input-timestamp', 'input', (e) => store.set('timestamp', e.target.value));
    }
  }

  /* waMode toggle (default type for new messages) */
  if (currentTheme === 'whatsapp') {
    const rows = document.querySelectorAll('[data-msg-type]');
    rows.forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.msgIdx);
        const type = btn.dataset.msgType;
        const msgs = [...store.get('messages')];
        msgs[idx].type = type;
        store.set('messages', msgs);
      });
    });
  }
}

function bindMessageEvents() {
  bind('btn-add-message', 'click', () => {
    const msgs = [...store.get('messages')];
    msgs.push({ id: Date.now(), text: '', type: store.get('waMode') || 'sent', time: '' });
    store.set('messages', msgs);
  });

  /* Text edits */
  document.querySelectorAll('#wa-message-list textarea[data-msg-idx]').forEach((el) => {
    el.addEventListener('input', () => {
      const idx = parseInt(el.dataset.msgIdx);
      const msgs = [...store.get('messages')];
      msgs[idx].text = el.value;
      store.set('messages', msgs);
    });
  });

  /* Time edits */
  document.querySelectorAll('[data-msg-field="time"]').forEach((el) => {
    el.addEventListener('input', () => {
      const idx = parseInt(el.dataset.msgIdx);
      const msgs = [...store.get('messages')];
      msgs[idx].time = el.value;
      store.set('messages', msgs);
    });
  });

  /* Delete */
  document.querySelectorAll('[data-msg-action="delete"]').forEach((el) => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.msgIdx);
      const msgs = store.get('messages').filter((_, i) => i !== idx);
      store.set('messages', msgs);
    });
  });

  /* Status */
  document.querySelectorAll('[data-msg-status]').forEach((el) => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.msgIdx);
      const status = el.dataset.msgStatus;
      const msgs = [...store.get('messages')];
      msgs[idx].status = status;
      store.set('messages', msgs);
    });
  });
}

/* ------------------------------------------------------------------ */
/*  Theme: Rendering & Sync                                            */
/* ------------------------------------------------------------------ */
function renderCurrentTheme() {
  const theme = themes[currentTheme];
  if (!theme) return;
  const state = store.getState();
  const container = document.getElementById('mockup');
  if (container) container.innerHTML = theme.render(state);
  updateBackground(state);
  requestAnimationFrame(fitMockupToScreen);
}

function syncMockup(key, value, state) {
  const theme = themes[currentTheme];
  if (!theme) return;

  if (key === 'theme') {
    currentTheme = value;

    const set = getRandomDummySet();
    if (set) {
      store.mutate({
        author: set.author || '',
        handle: set.handle || '',
        username: set.username || set.author || '',
        message: set.message || '',
        timestamp: set.time || '',
        roleColor: set.roleColor || '#5865F2',
        messages: set.messages || [
          { id: 1, text: set.message || '', type: store.get('waMode') || 'sent', time: set.time || '', status: 'read' },
        ],
      });
    }

    renderCurrentTheme();
    updateSettingsPanel(store.getState());
    updateAppLibrary(value);
    if (isTutorialActive()) {
      requestAnimationFrame(() => reapplyStep());
    }
    return;
  }

  if (key === 'bgGradient') {
    updateBackground(state);
  }

  if (key === 'mockupTheme') {
    const btn = document.getElementById('btn-mockup-theme');
    if (btn) btn.innerHTML = value === 'light' ? SVG.sun : SVG.moon;
    renderCurrentTheme();
    return;
  }

  if (key === 'waMode') {
    return;
  }

  if (key === 'activeFilter') {
    document.querySelectorAll('.filter-pill').forEach((el) => {
      const isActive = el.dataset.filter === value;
      el.className = `filter-pill px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
        isActive ? 'bg-white text-zinc-900' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
      }`;
    });
    return;
  }

  /* Avatar-Update: altes Image vorher freigeben */
  if (key === 'avatar') {
    const avatarId = currentTheme === 'discord' ? 'discord-avatar'
      : currentTheme === 'whatsapp' ? 'wa-avatar'
      : 'mockup-avatar';
    releaseAvatar(avatarId);
  }

  theme.sync(state);
}

function updateAppLibrary(activeTheme) {
  document.querySelectorAll('[data-app]').forEach((btn) => {
    const app = APPS.find((a) => a.id === btn.dataset.app);
    const isActive = app && app.theme === activeTheme;
    btn.className = `flex flex-col items-center gap-1.5 rounded-xl border p-2.5 transition-all text-center ${
      isActive
        ? 'border-white/15 bg-white/[8%]'
        : 'border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]'
    }`;
  });
}

/* ------------------------------------------------------------------ */
/*  Canvas-Hintergrund                                                 */
/* ------------------------------------------------------------------ */
function updateBackground(state) {
  const canvas = document.getElementById('canvas');
  if (!canvas) return;
  const colors = GRADIENT_COLORS[state.bgGradient] || ['#38bdf8', '#4f46e5'];
  canvas.style.background = `
    radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(135deg, ${colors[0]}, ${colors[1]})
  `;
  canvas.style.backgroundSize = '40px 40px, 100% 100%';
}

/* ------------------------------------------------------------------ */
/*  Auto-Scale (Figma-Trick)                                          */
/* ------------------------------------------------------------------ */
function fitMockupToScreen() {
  const canvas = document.getElementById('canvas');
  const card = document.getElementById('mockup-card');
  if (!canvas || !card) return;
  const rect = canvas.getBoundingClientRect();
  const scale = Math.min(rect.width / 390, rect.height / 844) * 0.9;
  card.style.transform = `scale(${scale})`;
  card.style.transformOrigin = 'center center';
}

window.addEventListener('resize', fitMockupToScreen);

/* ------------------------------------------------------------------ */
/*  Export                                                             */
/* ------------------------------------------------------------------ */
async function downloadPng() {
  const btn = document.getElementById('btn-topbar-export');
  const icon = document.getElementById('btn-export-icon');
  const label = document.getElementById('btn-export-label');
  if (!btn || btn.disabled) return;

  btn.disabled = true;
  if (icon) icon.innerHTML = SVG.spinner;
  if (label) label.textContent = t('topbar.rendering');

  const el = document.querySelector('#mockup > div');
  if (!el) { resetButton(); return; }

  try {
    const { toPng } = await import('html-to-image');
    const dataUrl = await toPng(el, { quality: 1, pixelRatio: 2, cacheBust: true });

    const now = new Date();
    const ts = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;
    const filename = `koalasnap-${currentTheme}-${ts}.png`;

    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();

    if (icon) icon.innerHTML = SVG.check;
    if (label) label.textContent = t('topbar.exported');
    btn.classList.remove('bg-[#f97316]', 'hover:bg-[#ea580c]');
    btn.classList.add('bg-emerald-500', 'hover:bg-emerald-600');
    setTimeout(resetButton, 2000);
  } catch {
    if (icon) icon.innerHTML = SVG.download;
    if (label) label.textContent = t('topbar.exportFailed');
    btn.disabled = false;
    setTimeout(() => {
      if (label) label.textContent = t('topbar.export');
      if (icon) icon.innerHTML = SVG.download;
    }, 2000);
  }

  function resetButton() {
    btn.disabled = false;
    btn.classList.remove('bg-emerald-500', 'hover:bg-emerald-600');
    btn.classList.add('bg-[#f97316]', 'hover:bg-[#ea580c]');
    if (icon) icon.innerHTML = SVG.download;
    if (label) label.textContent = t('topbar.export');
  }
}

/* ------------------------------------------------------------------ */
/*  Helfer                                                             */
/* ------------------------------------------------------------------ */
function bind(id, event, fn) {
  document.getElementById(id)?.addEventListener(event, fn);
}

function _collapseAppLibrary() {
  const body = document.getElementById('app-library-body');
  const chevron = document.getElementById('app-library-chevron');
  if (body) body.style.display = 'none';
  if (chevron) chevron.style.transform = 'rotate(180deg)';
}

function getRandomDummySet() {
  const locale = window.__LOCALE__;
  const sets = locale?.dummySets;
  if (!sets || sets.length === 0) return null;
  const set = sets[Math.floor(Math.random() * sets.length)];
  const messages = (set.messages && set.messages.length > 0)
    ? set.messages.map((m, i) => ({ id: i + 1, text: m.text, type: m.type, time: m.time, status: m.status || 'read' }))
    : [{ id: 1, text: set.message || '', type: store.get('waMode') || 'sent', time: set.time || '', status: 'read' }];
  return {
    author: set.author || '',
    handle: set.handle || '',
    username: set.username || set.author || '',
    message: set.message || messages[0]?.text || '',
    time: set.time || messages[0]?.time || '',
    roleColor: set.roleColor || '#5865F2',
    messages,
  };
}

/* ------------------------------------------------------------------ */
/*  Boot                                                               */
/* ------------------------------------------------------------------ */
store.subscribe(syncMockup);
renderApp();

if (!isCompleted()) {
  setTimeout(() => startTutorial(), 800);
}
