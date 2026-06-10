import { escapeHtml } from '../i18n.js';

const BACK_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`;

const VIDEO_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`;

const PHONE_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;

const SIGNAL_SVG = `<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>`;

const WIFI_SVG = `<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>`;

const BATTERY_SVG = `<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`;

const PLUS_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;

const CAMERA_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`;

const MIC_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`;

const DARK_DOT = `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='white' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='white' opacity='0.03'/%3E%3C/svg%3E")`;

const LIGHT_DOT = `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='black' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='black' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='black' opacity='0.03'/%3E%3C/svg%3E")`;

const CHECK_READ = `<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>`;

const CHECK_DELIVERED = `<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>`;

const CHECK_SENT = `<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const UNREAD_BADGE = `<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>`;

/* Light-mode colours */
const L = {
  barBg: '#008069',
  chatBg: '#efeae2',
  sentBg: '#d9fdd3',
  recvBg: '#ffffff',
  sentText: '#111b21',
  recvText: '#111b21',
  timeText: '#667781',
  inputBg: '#f0f2f5',
  fieldBg: '#ffffff',
  fieldText: '#111b21',
  placeholder: '#8696a0',
  dotPattern: LIGHT_DOT,
};

/* Dark-mode colours */
const D = {
  barBg: '#202c33',
  chatBg: '#0b141a',
  sentBg: '#005c4b',
  recvBg: '#202c33',
  sentText: '#e9edef',
  recvText: '#e9edef',
  timeText: '#ffffffcc',
  inputBg: '#202c33',
  fieldBg: '#2a3942',
  fieldText: '#e9edef',
  placeholder: '#8696a0',
  dotPattern: DARK_DOT,
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
          ? `<img id="wa-avatar" src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
          : `<div id="wa-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>`
        }
      </div>
      <div class="flex-1 min-w-0">
        <div id="wa-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${escapeHtml(state.username)}</div>
        <div id="wa-status-text" class="text-[#8696a0] text-[11px] leading-tight">online</div>
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
    <div class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${m.chatBg})${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : `;background-image:${m.dotPattern}`}">
      <div id="wa-messages" class="flex flex-col gap-3">
        ${state.messages.map(msg => renderBubble(msg, m)).join('')}
      </div>
    </div>
  `;
}

function renderBubble(msg, m) {
  const isSent = msg.type === 'sent';
  const bg = isSent ? m.sentBg : m.recvBg;
  const textColor = isSent ? m.sentText : m.recvText;
  const tailColor = bg;
  const align = isSent ? 'justify-end' : 'justify-start';
  const status = msg.status || 'read';

  const tail = isSent
    ? `<div class="absolute -right-[7px] bottom-[6px] w-0 h-0 border-l-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-left-color:${tailColor}"></div>`
    : `<div class="absolute -left-[7px] bottom-[6px] w-0 h-0 border-r-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-right-color:${tailColor}"></div>`;

  let checkIcon = '';
  if (isSent) {
    if (status === 'read') checkIcon = CHECK_READ;
    else if (status === 'delivered') checkIcon = CHECK_DELIVERED;
    else if (status === 'sent') checkIcon = CHECK_SENT;
  }

  const isUnread = status === 'unread';
  const boldClass = isUnread ? 'font-semibold' : '';
  const unreadDot = isUnread ? `<span class="inline-flex ml-1 -mb-0.5">${UNREAD_BADGE}</span>` : '';

  return `
    <div class="flex ${align}">
      ${isSent ? '' : '<div class="w-[34px] shrink-0"></div>'}
      <div class="relative max-w-[80%]">
        <div class="rounded-2xl px-3.5 py-2" style="background:${bg}">
          <p class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words ${boldClass}" style="color:${textColor}">${escapeHtml(msg.text)}</p>
          <div class="flex items-center justify-end gap-1 mt-0.5">
            <span class="text-[11px] leading-none" style="color:${m.timeText}">${escapeHtml(msg.time)}</span>
            ${checkIcon ? `<span class="inline-flex -mb-0.5">${checkIcon}</span>` : ''}
            ${unreadDot}
          </div>
        </div>
        ${tail}
      </div>
    </div>
  `;
}

function renderFooter(m) {
  return `
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${m.inputBg}">
      <span>${PLUS_SVG}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${m.fieldBg};color:${m.placeholder}">Message</div>
      <span>${CAMERA_SVG}</span>
      <span>${MIC_SVG}</span>
    </div>
  `;
}

export function sync(state) {
  byId('wa-contact-name', (el) => { el.textContent = state.username; });

  const slot = document.getElementById('wa-avatar');
  if (slot) {
    if (state.avatar) {
      const img = document.createElement('img');
      img.id = 'wa-avatar';
      img.src = state.avatar;
      img.className = 'w-full h-full rounded-full object-cover';
      img.alt = '';
      slot.replaceWith(img);
    } else {
      const div = document.createElement('div');
      div.id = 'wa-avatar';
      div.className = 'w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center';
      div.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;
      slot.replaceWith(div);
    }
  }

  const msgContainer = document.getElementById('wa-messages');
  if (msgContainer) {
    const m = mode(state);
    msgContainer.innerHTML = state.messages.map(msg => renderBubble(msg, m)).join('');
  }
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
