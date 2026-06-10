import { escapeHtml } from '../i18n.js';

const BACK_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`;

const DOWN_ARROW_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

const SIGNAL_SVG = `<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>`;

const WIFI_SVG = `<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>`;

const BATTERY_SVG = `<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`;

const L = {
  barBg: '#f8f8f8',
  chatBg: '#ffffff',
  sentBg: '#34c759',
  timeText: '#8e8e93',
  inputBg: '#f8f8f8',
  fieldBg: '#e5e5ea',
  fieldText: '#000000',
  statusColor: '#000000',
  navColor: '#007aff',
};

const D = {
  barBg: '#1c1c1e',
  chatBg: '#000000',
  sentBg: '#34c759',
  timeText: '#8e8e93',
  inputBg: '#1c1c1e',
  fieldBg: '#2c2c2e',
  fieldText: '#ffffff',
  statusColor: '#ffffff',
  navColor: '#ffffff',
};

function mode(state) {
  return state.mockupTheme === 'light' ? L : D;
}

export function render(state) {
  const m = mode(state);
  const phoneBorder = state.mockupTheme === 'light' ? '#e5e5ea' : '#1c1c1e';
  return `
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${phoneBorder};background:${phoneBorder}">
        ${renderStatusBar(m)}
        ${renderNavBar(state, m)}
        ${renderChat(state, m)}
        ${renderInputBar(m)}
      </div>
    </div>
  `;
}

function renderStatusBar(m) {
  return `
    <div class="flex items-center justify-between px-7 h-[44px] shrink-0" style="background:${m.barBg};color:${m.statusColor}">
      <div class="w-[72px]"></div>
      <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">9:41</span>
      <div class="flex items-center gap-1.5 w-[72px] justify-end">
        <span class="text-[11px]">${SIGNAL_SVG}</span>
        <span class="text-[11px]">${WIFI_SVG}</span>
        <span class="text-[11px]">${BATTERY_SVG}</span>
      </div>
    </div>
  `;
}

function renderNavBar(state, m) {
  return `
    <div class="flex items-center gap-1 px-2 py-1.5 shrink-0" style="background:${m.barBg};color:${m.navColor}">
      <span class="shrink-0 px-1">${BACK_SVG}</span>
      <div class="w-[34px] h-[34px] rounded-full overflow-hidden shrink-0 ml-1">
        ${state.avatar
          ? `<img id="im-avatar" src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
          : `<div id="im-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="#8e8e93"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>`
        }
      </div>
      <div class="flex-1 min-w-0">
        <div id="im-contact-name" class="text-[15px] font-semibold leading-tight truncate" style="color:${m.statusColor}">${escapeHtml(state.username)}</div>
      </div>
      <div class="flex items-center gap-2 shrink-0 px-1">
        <span style="color:${m.navColor}">${DOWN_ARROW_SVG}</span>
      </div>
    </div>
  `;
}

function renderChat(state, m) {
  return `
    <div class="flex-1 p-3 flex flex-col" style="background:${m.chatBg}">
      <div class="flex justify-end">
        <div class="relative max-w-[80%]">
          <div class="rounded-2xl px-3.5 py-2" style="background:${m.sentBg}">
            <p id="im-message" class="text-[#ffffff] text-[16px]/[1.4] whitespace-pre-wrap break-words">${escapeHtml(state.message)}</p>
          </div>
          <div class="flex items-center justify-end gap-1 mt-1 pr-1">
            <span id="im-timestamp" class="text-[11px] leading-none" style="color:${m.timeText}">${escapeHtml(state.timestamp)}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderInputBar(m) {
  return `
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${m.inputBg}">
      <div class="flex-1 rounded-2xl px-4 py-2 text-[16px] leading-none" style="background:${m.fieldBg};color:${m.fieldText}">iMessage</div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#007aff"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    </div>
  `;
}

export function sync(state) {
  byId('im-message', (el) => { el.textContent = state.message; });
  byId('im-timestamp', (el) => { el.textContent = state.timestamp; });
  byId('im-contact-name', (el) => { el.textContent = state.username; });

  const slot = document.getElementById('im-avatar');
  if (slot) {
    if (state.avatar) {
      const img = document.createElement('img');
      img.id = 'im-avatar';
      img.src = state.avatar;
      img.className = 'w-full h-full rounded-full object-cover';
      img.alt = '';
      slot.replaceWith(img);
    } else {
      const div = document.createElement('div');
      div.id = 'im-avatar';
      div.className = 'w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center';
      div.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="#8e8e93"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;
      slot.replaceWith(div);
    }
  }
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
