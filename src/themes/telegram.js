import { escapeHtml } from '../i18n.js';

const BACK_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`;

const SEARCH_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;

const EMOJI_SVG = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`;

const ATTACH_SVG = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`;

const MIC_SVG = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`;

const WIFI_SVG = `<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>`;

const CHECK_READ = `<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffd0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#ffffffd0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/></svg>`;

const CHECK_SENT = `<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffd0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const DARK_DOT = `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='white' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='white' opacity='0.03'/%3E%3C/svg%3E")`;

const LIGHT_DOT = `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='black' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='black' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='black' opacity='0.03'/%3E%3C/svg%3E")`;

const L = {
  barBg: '#4e8ad4',
  chatBg: '#eef2f6',
  sentBg: '#8774e1',
  recvBg: '#ffffff',
  sentText: '#ffffff',
  recvText: '#000000',
  timeText: '#00000080',
  sentTimeText: '#ffffffb3',
  inputBg: '#ffffff',
  fieldBg: '#eef2f6',
  dotPattern: LIGHT_DOT,
};

const D = {
  barBg: '#2f6ea5',
  chatBg: '#0f0f0f',
  sentBg: '#8774e1',
  recvBg: '#181818',
  sentText: '#ffffff',
  recvText: '#ffffff',
  timeText: '#ffffff8c',
  sentTimeText: '#ffffffb3',
  inputBg: '#1c1c1e',
  fieldBg: '#2a2a2e',
  dotPattern: DARK_DOT,
};

function mode(state) {
  return state.mockupTheme === 'light' ? L : D;
}

function renderBattery(level) {
  const width = Math.max(1, Math.min(19.5, (level / 100) * 19.5));
  return `<svg width="24" height="12" viewBox="0 0 26 12" fill="none" class="opacity-90"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="${width}" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`;
}

function renderSignal(bars) {
  const op1 = bars >= 1 ? '1' : '0.3';
  const op2 = bars >= 2 ? '1' : '0.3';
  const op3 = bars >= 3 ? '1' : '0.3';
  const op4 = bars >= 4 ? '1' : '0.3';
  return `<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor" opacity="${op1}"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor" opacity="${op2}"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor" opacity="${op3}"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor" opacity="${op4}"/></svg>`;
}

export function render(state) {
  const m = mode(state);
  const phoneBorder = state.mockupTheme === 'light' ? '#ffffff' : '#121212';
  return `
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${state.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${phoneBorder};background:${phoneBorder}">
        ${renderStatusBar(state, m)}
        ${renderHeader(state, m)}
        ${renderChat(state, m)}
        ${renderFooter(m)}
      </div>
    </div>
  `;
}

function renderStatusBar(state, m) {
  const wifiHtml = state.statusBarWifi !== false ? `<span class="text-[11px]">${WIFI_SVG}</span>` : '';
  const signalHtml = renderSignal(state.statusBarSignal || 4);
  const batteryHtml = renderBattery(state.statusBarBattery !== undefined ? state.statusBarBattery : 100);

  return `
    <div id="tg-statusbar" class="flex items-center justify-between px-6 h-[44px] shrink-0" style="background:${m.barBg};color:#e9edef">
      <span id="tg-statusbar-time" class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">${escapeHtml(state.statusBarTime || '09:41')}</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${signalHtml}</span>
        ${wifiHtml}
        <span class="text-[11px]">${batteryHtml}</span>
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
          ? `<img id="tg-avatar" src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
          : `<div id="tg-avatar" class="w-full h-full rounded-full bg-[#527da3] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#e9edef"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>`
        }
      </div>
      <div class="flex-1 min-w-0">
        <div id="tg-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${escapeHtml(state.username)}</div>
        <div id="tg-status-text" class="text-[#ffffffcc] text-[11px] leading-tight">${escapeHtml(state.statusText || 'online')}</div>
      </div>
      <div class="shrink-0">${SEARCH_SVG}</div>
    </div>
  `;
}

function renderChat(state, m) {
  return `
    <div id="tg-chat-container" class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${m.chatBg})${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : `;background-image:${m.dotPattern}`}">
      <div id="tg-messages" class="flex flex-col gap-0.5">
        ${state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('')}
      </div>
    </div>
  `;
}

function renderBubble(msg, idx, state, m) {
  const isSent = msg.type === 'sent';
  const nextMsg = idx < state.messages.length - 1 ? state.messages[idx + 1] : null;
  const prevMsg = idx > 0 ? state.messages[idx - 1] : null;
  const isFirstInBlock = !prevMsg || prevMsg.type !== msg.type;
  const isLastInBlock = !nextMsg || nextMsg.type !== msg.type;

  const bg = isSent ? m.sentBg : m.recvBg;
  const textColor = isSent ? m.sentText : m.recvText;
  const timeColor = isSent ? m.sentTimeText : m.timeText;
  const align = isSent ? 'justify-end' : 'justify-start';
  const status = msg.status || 'read';

  let tail = '';
  let borderRadiusClass = 'rounded-[12px]';
  let paddingClass = 'px-3.5 py-1.5';
  let marginTopClass = isFirstInBlock ? 'mt-2.5' : 'mt-[2px]';

  // Group chat name deterministic color
  const nameColors = ['#2cb3c9', '#57d363', '#ffa500', '#f44336', '#9c27b0', '#4caf50'];
  const colorIndex = (msg.senderName || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % nameColors.length;
  const nameColor = nameColors[colorIndex];

  const senderNameHtml = state.isGroup && !isSent && isFirstInBlock && msg.senderName ? `
    <div class="text-[12px] font-semibold mb-0.5 leading-tight select-none" style="color:${nameColor}">
      ${escapeHtml(msg.senderName)}
    </div>
  ` : '';

  if (isLastInBlock) {
    if (isSent) {
      borderRadiusClass = 'rounded-[12px] rounded-br-none';
      tail = `<div class="absolute -right-[7px] bottom-[5px] w-0 h-0 border-l-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-left-color:${bg}"></div>`;
    } else {
      borderRadiusClass = 'rounded-[12px] rounded-bl-none';
      tail = `<div class="absolute -left-[7px] bottom-[5px] w-0 h-0 border-r-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-right-color:${bg}"></div>`;
    }
  }

  // Reactions badge
  const reactionBadge = msg.reactions?.[0] ? `
    <div class="absolute -bottom-[8px] right-[10px] flex items-center justify-center bg-[#efefef] dark:bg-[#181818] border border-black/10 dark:border-white/10 rounded-full px-1.5 py-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.15)] select-none z-10 scale-[0.88] origin-bottom-right">
      <span class="text-[11px] leading-none">${msg.reactions[0]}</span>
    </div>
  ` : '';

  if (msg.reactions?.[0]) {
    paddingClass += ' pb-[10px]';
  }

  // Image attachment
  const imageElement = msg.image ? `<img src="${msg.image}" class="w-full max-w-[280px] rounded-lg mb-1 object-cover shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" style="max-height: 200px" />` : '';

  let checkIcon = '';
  if (isSent) {
    if (status === 'read' || status === 'delivered') checkIcon = CHECK_READ;
    else if (status === 'sent') checkIcon = CHECK_SENT;
  }

  return `
    <div class="flex ${align} ${marginTopClass} relative">
      <div class="relative max-w-[80%]">
        <div class="${borderRadiusClass} ${paddingClass} shadow-[0_1px_1px_rgba(0,0,0,0.1)]" style="background:${bg}">
          ${senderNameHtml}
          ${imageElement}
          ${msg.text ? `<p class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words" style="color:${textColor}">${escapeHtml(msg.text)}</p>` : ''}
          <div class="flex items-center justify-end gap-1 mt-0.5 select-none">
            <span class="text-[10px] leading-none" style="color:${timeColor}">${escapeHtml(msg.time)}</span>
            ${checkIcon ? `<span class="inline-flex -mb-0.5">${checkIcon}</span>` : ''}
          </div>
        </div>
        ${tail}
        ${reactionBadge}
      </div>
    </div>
  `;
}

function renderFooter(m) {
  return `
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${m.inputBg}">
      <span>${EMOJI_SVG}</span>
      <span>${ATTACH_SVG}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${m.fieldBg};color:${m.timeText}">Message</div>
      <span>${MIC_SVG}</span>
    </div>
  `;
}

export function sync(state) {
  const m = mode(state);
  const statusBar = document.getElementById('tg-statusbar');
  if (statusBar) {
    statusBar.outerHTML = renderStatusBar(state, m);
  }
  byId('tg-contact-name', (el) => { el.textContent = state.username; });
  byId('tg-status-text', (el) => { el.textContent = state.statusText || 'online'; });
  byId('tg-statusbar-time', (el) => { el.textContent = state.statusBarTime || '09:41'; });

  const slot = document.getElementById('tg-avatar');
  if (slot) {
    if (state.avatar) {
      const img = document.createElement('img');
      img.id = 'tg-avatar';
      img.src = state.avatar;
      img.className = 'w-full h-full rounded-full object-cover';
      img.alt = '';
      slot.replaceWith(img);
    } else {
      const div = document.createElement('div');
      div.id = 'tg-avatar';
      div.className = 'w-full h-full rounded-full bg-[#527da3] flex items-center justify-center';
      div.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="#e9edef"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;
      slot.replaceWith(div);
    }
  }

  const msgContainer = document.getElementById('tg-messages');
  if (msgContainer) {
    const m = mode(state);
    msgContainer.innerHTML = state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('');
  }

  const chatContainer = document.getElementById('tg-chat-container');
  if (chatContainer) {
    const m = mode(state);
    chatContainer.style.background = `var(--chat-bg, ${m.chatBg})`;
    if (state.chatBg) {
      chatContainer.style.backgroundImage = `url(${state.chatBg})`;
      chatContainer.style.backgroundSize = 'cover';
    } else {
      chatContainer.style.backgroundImage = m.dotPattern;
      chatContainer.style.backgroundSize = '';
    }
  }
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
