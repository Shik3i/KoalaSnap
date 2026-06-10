import { escapeHtml } from '../i18n.js';

const BACK_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`;

const VIDEO_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`;

const PHONE_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;

const SIGNAL_SVG = `<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>`;

const WIFI_SVG = `<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>`;

const BATTERY_SVG = `<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`;

const EMOJI_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`;

const ATTACH_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`;

const MIC_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`;

const CHECK_SENT = `<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffcc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const L = {
  barBg: '#3b82f6',
  chatBg: '#f0f2f5',
  sentBg: '#3b82f6',
  sentText: '#ffffff',
  timeText: '#00000080',
  inputBg: '#f0f2f5',
  fieldBg: '#ffffff',
  fieldText: '#111b21',
  placeholder: '#8696a0',
};

const D = {
  barBg: '#1e1f22',
  chatBg: '#101214',
  sentBg: '#3b82f6',
  sentText: '#ffffff',
  timeText: '#ffffffcc',
  inputBg: '#1e1f22',
  fieldBg: '#2b2d30',
  fieldText: '#e9edef',
  placeholder: '#8696a0',
};

function mode(state) {
  return state.mockupTheme === 'light' ? L : D;
}

export function render(state) {
  const m = mode(state);
  const phoneBorder = state.mockupTheme === 'light' ? '#ffffff' : '#121212';
  return `
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${state.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${phoneBorder};background:${phoneBorder}">
        ${renderStatusBar(m)}
        ${renderHeader(state, m)}
        ${renderChat(state, m)}
        ${renderFooter(m)}
      </div>
    </div>
  `;
}

function renderStatusBar(m) {
  return `
    <div class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${m.barBg}">
      <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">09:41</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${SIGNAL_SVG}</span>
        <span class="text-[11px]">${WIFI_SVG}</span>
        <span class="text-[11px]">${BATTERY_SVG}</span>
      </div>
    </div>
  `;
}

function renderHeader(state, m) {
  return `
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${m.barBg}">
      <span class="shrink-0">${BACK_SVG}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${state.avatar
          ? `<img id="sg-avatar" src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
          : `<div id="sg-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>`
        }
      </div>
      <div class="flex-1 min-w-0">
        <div id="sg-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${escapeHtml(state.username)}</div>
        <div class="text-[#ffffffcc] text-[11px] leading-tight">online</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${VIDEO_SVG}
        ${PHONE_SVG}
      </div>
    </div>
  `;
}

function renderChat(state, m) {
  return `
    <div class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${m.chatBg})${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : ''}">
      <div class="flex flex-col items-end gap-3">
        <div class="flex justify-end">
          <div class="relative max-w-[80%]">
            <div class="rounded-2xl px-3.5 py-2" style="background:${m.sentBg}">
              <p id="sg-message" class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words" style="color:${m.sentText}">${escapeHtml(state.message)}</p>
              <div class="flex items-center justify-end gap-1 mt-0.5">
                <span id="sg-time" class="text-[11px] leading-none" style="color:${m.timeText}">${escapeHtml(state.timestamp)}</span>
                <span class="inline-flex -mb-0.5">${CHECK_SENT}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFooter(m) {
  return `
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${m.inputBg}">
      <span>${EMOJI_SVG}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${m.fieldBg};color:${m.placeholder}">Message</div>
      <span>${ATTACH_SVG}</span>
      <span>${MIC_SVG}</span>
    </div>
  `;
}

export function sync(state) {
  byId('sg-contact-name', (el) => { el.textContent = state.username; });
  byId('sg-message', (el) => { el.textContent = state.message; });
  byId('sg-time', (el) => { el.textContent = state.timestamp; });

  const slot = document.getElementById('sg-avatar');
  if (slot) {
    if (state.avatar) {
      const img = document.createElement('img');
      img.id = 'sg-avatar';
      img.src = state.avatar;
      img.className = 'w-full h-full rounded-full object-cover';
      img.alt = '';
      slot.replaceWith(img);
    } else {
      const div = document.createElement('div');
      div.id = 'sg-avatar';
      div.className = 'w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center';
      div.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;
      slot.replaceWith(div);
    }
  }
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
