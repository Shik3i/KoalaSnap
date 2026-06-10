import { escapeHtml } from '../i18n.js';

const HASH_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#949ba4"><path d="M5 9h14M5 15h14M11 3L9 21M15 3l-2 18"/></svg>`;
const PIN_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#949ba4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/></svg>`;
const MEMBER_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="#949ba4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const SEARCH_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#949ba4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
const PLUS_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5bac1" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
const GIFT_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5bac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`;

const DARK_DOT = `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.02'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.015'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.02'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.015'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.02'/%3E%3C/svg%3E")`;

const L = {
  sidebarBg: '#2b2d31',
  chatBg: '#313338',
  inputBg: '#383a40',
  inputText: '#dbdee1',
  placeholder: '#949ba4',
  divider: '#3f4147',
  dotPattern: 'none',
};

const D = {
  sidebarBg: '#1e1f22',
  chatBg: '#313338',
  inputBg: '#383a40',
  inputText: '#dbdee1',
  placeholder: '#949ba4',
  divider: '#3f4147',
  dotPattern: DARK_DOT,
};

function mode(state) {
  return state.mockupTheme === 'light' ? L : D;
}

export function render(state) {
  const m = mode(state);
  const avatarHtml = state.avatar
    ? `<img id="discord-avatar" src="${state.avatar}" class="w-10 h-10 rounded-full object-cover" />`
    : `<div id="discord-avatar" class="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold">?</div>`;

  return `
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${state.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:#1e1f22;background:#1e1f22">
        <div class="flex items-center gap-0 h-12 shrink-0 px-4" style="background:${m.sidebarBg}">
          <div class="flex items-center gap-2 flex-1 min-w-0">
            ${HASH_SVG}
            <span class="text-white text-[15px] font-semibold leading-tight truncate">general</span>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${PIN_SVG}
            <span>${MEMBER_SVG}</span>
          </div>
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto" style="background:${m.chatBg}${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : `;background-image:${m.dotPattern}`}">
          <div class="p-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-0.5">
                ${avatarHtml}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-baseline gap-2">
                  <span id="discord-username"
                    class="font-medium text-[16px] leading-tight truncate max-w-[280px]"
                    style="color: ${state.roleColor}">${escapeHtml(state.username)}</span>
                  <span id="discord-timestamp" class="text-[#949ba4] text-xs leading-tight shrink-0">${escapeHtml(state.timestamp)}</span>
                </div>
                <div id="discord-message"
                  class="text-[#dbdee1] text-[16px]/[1.4] mt-0.5 whitespace-pre-wrap break-words">${escapeHtml(state.message)}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="shrink-0 px-4 py-3" style="background:${m.chatBg}">
          <div class="flex items-center gap-2 rounded-lg px-4 py-2.5" style="background:${m.inputBg}">
            <span>${PLUS_SVG}</span>
            <span class="flex-1 text-[15px]" style="color:${m.placeholder}">Message #general</span>
            <span>${GIFT_SVG}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function sync(state) {
  byId('discord-username', (el) => {
    el.textContent = state.username;
    el.style.color = state.roleColor;
  });
  byId('discord-timestamp', (el) => { el.textContent = state.timestamp; });
  byId('discord-message', (el) => { el.textContent = state.message; });

  const slot = document.getElementById('discord-avatar');
  if (slot) {
    if (state.avatar) {
      const img = document.createElement('img');
      img.id = 'discord-avatar';
      img.src = state.avatar;
      img.className = 'w-10 h-10 rounded-full object-cover';
      img.alt = '';
      slot.replaceWith(img);
    } else {
      const div = document.createElement('div');
      div.id = 'discord-avatar';
      div.className = 'w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold';
      div.textContent = '?';
      slot.replaceWith(div);
    }
  }
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
