import { escapeHtml } from '../i18n.js';

const HASH_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#949ba4"><path d="M5 9h14M5 15h14M11 3L9 21M15 3l-2 18"/></svg>`;
const PIN_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#949ba4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/></svg>`;
const MEMBER_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="#949ba4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const SEARCH_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#949ba4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
const PLUS_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5bac1" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
const GIFT_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5bac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`;

const DARK_DOT = `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.02'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.015'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.02'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.015'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.02'/%3E%3C/svg%3E")`;

const L = {
  guildsBg: '#e3e5e8',
  sidebarBg: '#f2f3f5',
  chatBg: '#ffffff',
  inputBg: '#ebedef',
  sidebarText: '#4e5058',
  chatText: '#2e3035',
  inputText: '#2e3035',
  userAreaBg: '#ebedef',
  userTagText: '#313338',
  placeholder: '#5c5e66',
  divider: '#e3e5e8',
  borderCol: 'rgba(0,0,0,0.06)',
  dotPattern: 'none',
};

const D = {
  guildsBg: '#1e1f22',
  sidebarBg: '#2b2d31',
  chatBg: '#313338',
  inputBg: '#383a40',
  sidebarText: '#949ba4',
  chatText: '#dbdee1',
  inputText: '#dbdee1',
  userAreaBg: '#232428',
  userTagText: '#f2f3f5',
  placeholder: '#949ba4',
  divider: '#3f4147',
  borderCol: 'rgba(255,255,255,0.04)',
  dotPattern: DARK_DOT,
};

function mode(state) {
  return state.mockupTheme === 'light' ? L : D;
}

export function render(state) {
  const m = mode(state);
  if (state.viewMode === 'desktop') {
    return renderDesktop(state, m);
  }
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
        <div class="flex-1 flex flex-col overflow-y-auto" style="background:var(--chat-bg, ${m.chatBg})${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : `;background-image:${m.dotPattern}`}">
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
        <div class="shrink-0 px-4 py-3" style="background:var(--chat-bg, ${m.chatBg})">
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
  if (state.viewMode === 'desktop') {
    syncDesktop(state);
    return;
  }
  byId('discord-username', (el) => {
    el.textContent = state.username;
    el.style.color = state.roleColor;
  });
  byId('discord-timestamp', (el) => {
    el.textContent = state.timestamp;
  });
  byId('discord-message', (el) => {
    el.textContent = state.message;
  });

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
      div.className =
        'w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold';
      div.textContent = '?';
      slot.replaceWith(div);
    }
  }
}

function renderDesktop(state, m) {
  const isDark = state.mockupTheme === 'dark';
  const textPrimary = isDark ? '#dbdee1' : '#2e3035';
  const textSecondary = isDark ? '#949ba4' : '#5c5e66';
  const headerText = isDark ? '#ffffff' : '#313338';

  const avatarHtml = state.avatar
    ? `<img id="discord-avatar" src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
    : `<div id="discord-avatar" class="w-full h-full rounded-full bg-[#5865F2] flex items-center justify-center text-white text-[11px] font-bold">?</div>`;

  const guildAvatarHtml = state.avatar
    ? `<img src="${state.avatar}" class="w-full h-full rounded-[15px] object-cover" />`
    : `<div class="w-full h-full rounded-[15px] bg-[#5865F2] flex items-center justify-center text-white font-bold text-sm">KS</div>`;

  return `
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1000px; height:700px; font-family:${state.fontFamily}; border-color:${m.borderCol}; background:${m.chatBg};">
      <div class="w-[72px] shrink-0 flex flex-col items-center py-3 gap-2" style="background:${m.guildsBg};">
        <div class="w-12 h-12 rounded-[24px] bg-[#5865F2] hover:rounded-[16px] transition-all flex items-center justify-center text-white cursor-pointer select-none">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="currentColor">
            <path d="M23.02 2.24c-1.72-.77-3.56-1.34-5.48-1.68-.24.4-.5.87-.68 1.34a20.5 20.5 0 0 0-5.72 0 12.3 12.3 0 0 0-.7-1.34C8.5 1 6.68 1.57 4.96 2.4 1.5 7.4.56 12.28 1.02 17.1c2.3 1.65 4.5 2.65 6.7 3.3.52-.7 1-1.47 1.4-2.3-1.45-.53-2.82-1.2-4.1-2 .16-.1.32-.23.47-.35 4.3 2 9 2 13.3 0 .15.12.3.24.46.35-1.28.8-2.65 1.48-4.1 2 .4.8.88 1.57 1.4 2.3 2.2-.66 4.4-1.65 6.7-3.3.56-5.63-.38-10.45-3.84-14.86zM9.7 13c-1.3 0-2.37-1.16-2.37-2.6S8.4 7.8 9.7 7.8c1.3 0 2.37 1.16 2.37 2.6S11 13 9.7 13zm8.6 0c-1.3 0-2.37-1.16-2.37-2.6s1.07-2.6 2.37-2.6 2.37 1.16 2.37 2.6-1.06 2.6-2.37 2.6z"/>
          </svg>
        </div>
        <div class="w-8 h-[2px] rounded bg-white/10 my-1"></div>
        <div class="w-12 h-12 rounded-[16px] overflow-hidden cursor-pointer select-none ring-2 ring-[#5865F2]">
          ${guildAvatarHtml}
        </div>
        <div class="w-12 h-12 rounded-[24px] hover:rounded-[16px] transition-all bg-white/5 hover:bg-[#23a55a] flex items-center justify-center text-white font-bold cursor-pointer select-none text-sm">A</div>
        <div class="w-12 h-12 rounded-[24px] hover:rounded-[16px] transition-all bg-white/5 hover:bg-[#f43f5e] flex items-center justify-center text-white font-bold cursor-pointer select-none text-sm">B</div>
        <div class="w-12 h-12 rounded-[24px] hover:rounded-[16px] transition-all bg-white/5 hover:bg-[#eab308] flex items-center justify-center text-white font-bold cursor-pointer select-none text-sm">+</div>
      </div>
      <div class="w-[240px] shrink-0 flex flex-col" style="background:${m.sidebarBg};">
        <div class="h-12 border-b flex items-center justify-between px-4 font-semibold select-none cursor-pointer" style="border-color:${m.borderCol}; color:${headerText};">
          <span class="truncate">KoalaSnap Server</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="flex-1 overflow-y-auto px-2 py-3 flex flex-col gap-0.5">
          <div class="flex items-center justify-between px-2 py-1 text-[12px] font-bold uppercase tracking-wider mb-1" style="color:${textSecondary};">
            <span>Text Channels</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
          <div class="flex items-center gap-1.5 px-2 py-1.5 rounded font-medium text-[15px] select-none cursor-pointer text-white bg-white/10">
            ${HASH_SVG}
            <span class="truncate">general</span>
          </div>
          <div class="flex items-center gap-1.5 px-2 py-1.5 rounded font-medium text-[15px] select-none cursor-pointer hover:bg-white/5" style="color:${textSecondary};">
            ${HASH_SVG}
            <span class="truncate">announcements</span>
          </div>
          <div class="flex items-center gap-1.5 px-2 py-1.5 rounded font-medium text-[15px] select-none cursor-pointer hover:bg-white/5" style="color:${textSecondary};">
            ${HASH_SVG}
            <span class="truncate">feedback</span>
          </div>
          <div class="flex items-center gap-1.5 px-2 py-1.5 rounded font-medium text-[15px] select-none cursor-pointer hover:bg-white/5 mt-4" style="color:${textSecondary};">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
            <span class="truncate">Voice Chat</span>
          </div>
        </div>
        <div class="h-[52px] px-2 flex items-center justify-between shrink-0" style="background:${m.userAreaBg};">
          <div class="flex items-center gap-2 min-w-0 flex-1">
            <div class="w-8 h-8 rounded-full overflow-hidden shrink-0 relative">
              ${avatarHtml}
              <div class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[#232428] bg-[#23a55a]"></div>
            </div>
            <div class="min-w-0 flex flex-col justify-center">
              <span class="text-xs font-semibold truncate" style="color:${m.userTagText};">${escapeHtml(state.username)}</span>
              <span class="text-[10px] truncate" style="color:${textSecondary};">online</span>
            </div>
          </div>
          <div class="flex items-center gap-1 shrink-0" style="color:${textSecondary};">
            <button class="p-1 rounded hover:bg-white/5"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.42 2.72 6.2 6 6.6V21h2v-3.4c3.28-.4 6-3.18 6-6.6h-1.7z"/></svg></button>
            <button class="p-1 rounded hover:bg-white/5"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.25z"/></svg></button>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col min-w-0">
        <div class="h-12 border-b flex items-center justify-between px-4 shrink-0" style="border-color:${m.borderCol}; background:${m.chatBg};">
          <div class="flex items-center gap-2 min-w-0">
            ${HASH_SVG}
            <span class="font-bold text-[15.5px] truncate" style="color:${headerText};">general</span>
          </div>
          <div class="flex items-center gap-4.5" style="color:${textSecondary};">
            ${PIN_SVG}
            ${MEMBER_SVG}
            <div class="relative flex items-center rounded bg-black/20 px-2 py-0.5 text-xs">
              <input type="text" placeholder="Search" class="bg-transparent outline-0 w-24 text-white" />
              ${SEARCH_SVG}
            </div>
          </div>
        </div>
        <div class="flex-1 p-4 overflow-y-auto" style="background:${m.chatBg}${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : `;background-image:${m.dotPattern}`}">
          <div id="discord-chat-container" class="flex flex-col gap-4">
            <div class="mb-4">
              <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white mb-2">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 9h14M5 15h14M11 3L9 21M15 3l-2 18"/></svg>
              </div>
              <h2 class="text-2xl font-bold text-white leading-tight">Welcome to #general!</h2>
              <p class="text-[14px]" style="color:${textSecondary};">This is the start of the #general channel.</p>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-0.5">
                ${avatarHtml}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-baseline gap-2">
                  <span id="discord-username" class="font-medium text-[16px] leading-tight truncate max-w-[280px]" style="color: ${state.roleColor}">${escapeHtml(state.username)}</span>
                  <span id="discord-timestamp" class="text-xs leading-tight shrink-0" style="color:${textSecondary};">${escapeHtml(state.timestamp)}</span>
                </div>
                <div id="discord-message" class="text-[16px]/[1.4] mt-0.5 whitespace-pre-wrap break-words" style="color:${m.chatText};">${escapeHtml(state.message)}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="shrink-0 px-4 py-3" style="background:${m.chatBg};">
          <div class="flex items-center gap-3 rounded-lg px-4 py-2.5" style="background:${m.inputBg};">
            <span>${PLUS_SVG}</span>
            <span class="flex-1 text-[15px]" style="color:${m.placeholder};">Message #general</span>
            <span>${GIFT_SVG}</span>
          </div>
        </div>
      </div>
      <div class="w-[240px] shrink-0 border-l flex flex-col p-4 gap-4" style="border-color:${m.borderCol}; background:${m.sidebarBg};">
        <div>
          <h3 class="text-[12px] font-bold uppercase tracking-wider mb-2" style="color:${textSecondary};">Online — 1</h3>
          <div class="flex items-center gap-2.5 py-1.5 cursor-pointer">
            <div class="w-8 h-8 rounded-full overflow-hidden relative">
              ${avatarHtml}
              <div class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[#2b2d31] bg-[#23a55a]"></div>
            </div>
            <span class="text-[14.5px] font-medium truncate" style="color:${state.roleColor}">${escapeHtml(state.username)}</span>
          </div>
        </div>
        <div>
          <h3 class="text-[12px] font-bold uppercase tracking-wider mb-2" style="color:${textSecondary};">Offline — 2</h3>
          <div class="flex items-center gap-2.5 py-1.5 opacity-40">
            <div class="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white text-xs">K</div>
            <span class="text-[14.5px] font-medium truncate" style="color:${textSecondary};">KoalaBot</span>
          </div>
          <div class="flex items-center gap-2.5 py-1.5 opacity-40">
            <div class="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white text-xs">M</div>
            <span class="text-[14.5px] font-medium truncate" style="color:${textSecondary};">MemberOne</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function syncDesktop(state) {
  byId('discord-username', (el) => {
    el.textContent = state.username;
    el.style.color = state.roleColor;
  });
  byId('discord-timestamp', (el) => {
    el.textContent = state.timestamp;
  });
  byId('discord-message', (el) => {
    el.textContent = state.message;
  });

  const slots = document.querySelectorAll('#discord-avatar');
  slots.forEach((slot) => {
    if (state.avatar) {
      const img = document.createElement('img');
      img.id = 'discord-avatar';
      img.src = state.avatar;
      img.className = 'w-full h-full rounded-full object-cover';
      img.alt = '';
      slot.replaceWith(img);
    } else {
      const div = document.createElement('div');
      div.id = 'discord-avatar';
      div.className =
        'w-full h-full rounded-full bg-[#5865F2] flex items-center justify-center text-white text-[11px] font-bold';
      div.textContent = '?';
      slot.replaceWith(div);
    }
  });
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
