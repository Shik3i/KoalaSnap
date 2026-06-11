import { escapeHtml } from '../i18n.js';

const BACK_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`;

const VIDEO_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`;

const PHONE_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;

const WIFI_SVG = `<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>`;

const PLUS_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;

const CAMERA_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`;

const MIC_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`;

const CHECK_READ = `<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>`;

const CHECK_DELIVERED = `<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>`;

const CHECK_SENT = `<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const UNREAD_BADGE = `<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>`;

const STATUS_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9" stroke-dasharray="10 4 6 4"/></svg>`;
const NEW_CHAT_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
const MENU_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>`;
const SMILEY_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`;
const CLIP_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`;
const SEARCH_DESKTOP_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;

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
};

/* Dark-mode colours */
const D = {
  barBg: '#202c33',
  chatBg: '#0b141a',
  sentBg: '#005c4b',
  recvBg: '#202c33',
  sentText: '#e9edef',
  recvText: '#e9edef',
  timeText: '#ffffff8c',
  inputBg: '#202c33',
  fieldBg: '#2a3942',
  fieldText: '#e9edef',
  placeholder: '#8696a0',
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
  if (state.viewMode === 'desktop') {
    return renderDesktop(state, m);
  }
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

function renderDesktop(state, m) {
  const isDark = state.mockupTheme === 'dark';
  const sidebarBg = isDark ? '#111b21' : '#ffffff';
  const sidebarHeaderBg = isDark ? '#202c33' : '#f0f2f5';
  const chatListActiveBg = isDark ? '#2a3942' : '#f0f2f5';
  const borderCol = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const secondaryText = isDark ? '#8696a0' : '#667781';
  const primaryText = isDark ? '#e9edef' : '#111b21';

  const lastMsg = state.messages[state.messages.length - 1] || { text: '', time: '' };
  const lastMsgText = lastMsg.text || (lastMsg.image ? '📷 Photo' : '');
  const lastMsgTime = lastMsg.time || '';

  let checkIcon = '';
  if (lastMsg.type === 'sent') {
    if (lastMsg.status === 'read') checkIcon = CHECK_READ;
    else if (lastMsg.status === 'delivered') checkIcon = CHECK_DELIVERED;
    else if (lastMsg.status === 'sent') checkIcon = CHECK_SENT;
  }

  const userAvatarHtml = state.avatar
    ? `<img src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
    : `<div class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>`;

  const targetAvatarHtml = state.avatar
    ? `<img id="wa-avatar" src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
    : `<div id="wa-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>`;

  const bgImg = state.chatBg
    ? `url(${state.chatBg})`
    : state.mockupTheme === 'light'
      ? 'url(/whatsapp-bg-light.png)'
      : 'linear-gradient(rgba(11, 20, 26, 0.94), rgba(11, 20, 26, 0.94)), url(/whatsapp-bg-dark.png)';
  const bgSize = state.chatBg ? 'cover' : '360px';
  const bgRepeat = state.chatBg ? 'no-repeat' : 'repeat';

  return `
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1000px; height:700px; font-family:${state.fontFamily}; border-color:${borderCol}; background:${sidebarBg}; color:${primaryText};">
      <div class="w-[320px] flex flex-col shrink-0 border-r" style="border-color:${borderCol}; background:${sidebarBg};">
        <div class="h-[59px] shrink-0 flex items-center justify-between px-4" style="background:${sidebarHeaderBg};">
          <div class="w-10 h-10 rounded-full overflow-hidden">
            ${userAvatarHtml}
          </div>
          <div class="flex items-center gap-4.5" style="color:${secondaryText};">
            ${STATUS_SVG}
            ${NEW_CHAT_SVG}
            ${MENU_SVG}
          </div>
        </div>
        <div class="p-2 shrink-0 border-b flex items-center" style="border-color:${borderCol}; background:${sidebarBg};">
          <div class="w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-xs" style="background:${isDark ? '#202c33' : '#f0f2f5'}; color:${secondaryText};">
            <span>${SEARCH_DESKTOP_SVG}</span>
            <span class="flex-1 text-left opacity-70">Search or start new chat</span>
          </div>
        </div>
        <div class="flex-1 overflow-y-auto flex flex-col">
          <div class="flex gap-3 px-3 py-3 cursor-pointer select-none" style="background:${chatListActiveBg};">
            <div class="w-12 h-12 rounded-full overflow-hidden shrink-0">
              ${targetAvatarHtml}
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span id="wa-contact-name" class="font-medium text-[15.5px] truncate" style="color:${primaryText};">${escapeHtml(state.username)}</span>
                <span id="wa-chat-time" class="text-[11.5px] shrink-0" style="color:${secondaryText};">${escapeHtml(lastMsgTime)}</span>
              </div>
              <div class="flex items-center gap-1 mt-0.5">
                ${checkIcon ? `<span class="inline-flex">${checkIcon}</span>` : ''}
                <span id="wa-chat-last-message" class="text-[13px] truncate flex-1" style="color:${secondaryText};">${escapeHtml(lastMsgText)}</span>
              </div>
            </div>
          </div>
          <div class="flex gap-3 px-3 py-3 border-t cursor-pointer select-none opacity-40 hover:opacity-60 transition-opacity" style="border-color:${borderCol};">
            <div class="w-12 h-12 rounded-full bg-zinc-600 flex items-center justify-center shrink-0 text-white font-semibold">W</div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span class="font-medium text-[15.5px]" style="color:${primaryText};">Work Group</span>
                <span class="text-[11.5px]" style="color:${secondaryText};">16:45</span>
              </div>
              <span class="text-[13px] truncate" style="color:${secondaryText};">John: Let's schedule a meeting</span>
            </div>
          </div>
          <div class="flex gap-3 px-3 py-3 border-t cursor-pointer select-none opacity-40 hover:opacity-60 transition-opacity" style="border-color:${borderCol};">
            <div class="w-12 h-12 rounded-full bg-zinc-600 flex items-center justify-center shrink-0 text-white font-semibold">M</div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span class="font-medium text-[15.5px]" style="color:${primaryText};">Mom</span>
                <span class="text-[11.5px]" style="color:${secondaryText};">Yesterday</span>
              </div>
              <span class="text-[13px] truncate" style="color:${secondaryText};">Love you! ❤️</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col min-w-0">
        <div class="h-[59px] shrink-0 flex items-center justify-between px-4 border-l" style="background:${sidebarHeaderBg}; border-color:${borderCol};">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-full overflow-hidden shrink-0">
              ${targetAvatarHtml}
            </div>
            <div class="min-w-0">
              <div id="wa-contact-name-header" class="font-medium text-[15.5px] truncate" style="color:${primaryText};">${escapeHtml(state.username)}</div>
              <div id="wa-status-text" class="text-[12px] truncate" style="color:${secondaryText};">${escapeHtml(state.statusText || 'online')}</div>
            </div>
          </div>
          <div class="flex items-center gap-5" style="color:${secondaryText};">
            ${SEARCH_DESKTOP_SVG}
            ${MENU_SVG}
          </div>
        </div>
        <div id="wa-chat-container" class="flex-1 p-6 overflow-y-auto" style="background:var(--chat-bg, ${m.chatBg});background-image:${bgImg};background-size:${bgSize};background-repeat:${bgRepeat}">
          <div id="wa-messages" class="flex flex-col gap-0.5 relative max-w-[800px] mx-auto">
            ${state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('')}
          </div>
        </div>
        <div class="h-[62px] shrink-0 flex items-center gap-3 px-4 py-2 border-l" style="background:${sidebarHeaderBg}; border-color:${borderCol}; color:${secondaryText};">
          <div class="flex items-center gap-4">
            ${SMILEY_SVG}
            ${CLIP_SVG}
          </div>
          <div class="flex-1 rounded-lg px-4 py-2.5 text-[14.5px] flex items-center" style="background:${m.fieldBg}; color:${isDark ? '#e9edef' : '#111b21'};">
            <span class="opacity-50">Type a message</span>
          </div>
          <div>
            ${MIC_SVG}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderStatusBar(state, m) {
  const wifiHtml = state.statusBarWifi !== false ? `<span class="text-[11px]">${WIFI_SVG}</span>` : '';
  const signalHtml = renderSignal(state.statusBarSignal || 4);
  const batteryHtml = renderBattery(state.statusBarBattery !== undefined ? state.statusBarBattery : 100);

  return `
    <div id="wa-statusbar" class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${m.barBg}">
      <span id="wa-statusbar-time" class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">${escapeHtml(state.statusBarTime || '09:41')}</span>
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
        ${
          state.avatar
            ? `<img id="wa-avatar" src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
            : `<div id="wa-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>`
        }
      </div>
      <div class="flex-1 min-w-0">
        <div id="wa-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${escapeHtml(state.username)}</div>
        <div id="wa-status-text" class="text-[#aebac1] text-[11px] leading-tight">${escapeHtml(state.statusText || 'online')}</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${VIDEO_SVG}
        ${PHONE_SVG}
      </div>
    </div>
  `;
}

function renderChat(state, m) {
  const bgImg = state.chatBg
    ? `url(${state.chatBg})`
    : state.mockupTheme === 'light'
      ? 'url(/whatsapp-bg-light.png)'
      : 'linear-gradient(rgba(11, 20, 26, 0.94), rgba(11, 20, 26, 0.94)), url(/whatsapp-bg-dark.png)';
  const bgSize = state.chatBg ? 'cover' : '360px';
  const bgRepeat = state.chatBg ? 'no-repeat' : 'repeat';

  return `
    <div id="wa-chat-container" class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${m.chatBg});background-image:${bgImg};background-size:${bgSize};background-repeat:${bgRepeat}">
      <div id="wa-messages" class="flex flex-col gap-0.5 relative">
        ${state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('')}
      </div>
    </div>
  `;
}

function renderBubble(msg, idx, state, m) {
  const isSent = msg.type === 'sent';
  const prevMsg = idx > 0 ? state.messages[idx - 1] : null;
  const isFirstInBlock = !prevMsg || prevMsg.type !== msg.type;

  const bg = isSent ? m.sentBg : m.recvBg;
  const textColor = isSent ? m.sentText : m.recvText;
  const align = isSent ? 'justify-end' : 'justify-start';
  const status = msg.status || 'read';

  let tail = '';
  let borderRadiusClass = 'rounded-[7.5px]';
  let paddingClass = 'pl-[9px] pr-[9px] py-[6px]';
  let marginTopClass = isFirstInBlock ? 'mt-2.5' : 'mt-[2px]';

  // Deterministic name coloring
  const nameColors = ['#007acc', '#00bfa5', '#ff9f00', '#d32f2f', '#7b1fa2', '#388e3c'];
  const colorIndex = (msg.senderName || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % nameColors.length;
  const nameColor = nameColors[colorIndex];

  const senderNameHtml =
    state.isGroup && !isSent && isFirstInBlock && msg.senderName
      ? `
    <div class="text-[11.5px] font-semibold mb-0.5 leading-tight select-none" style="color:${nameColor}">
      ${escapeHtml(msg.senderName)}
    </div>
  `
      : '';

  if (isFirstInBlock) {
    if (isSent) {
      borderRadiusClass = 'rounded-[7.5px] rounded-tr-none';
      paddingClass = 'pl-[9px] pr-[12px] py-[6px]';
      tail = `<span class="absolute top-0 -right-[8px] w-[8px] h-[13px]" style="color:${bg}">
        <svg viewBox="0 0 8 13" width="8" height="13">
          <path fill="currentColor" d="M6.467 3.568L0 12.193V1h5.188c1.77 0 2.338 1.156 1.279 2.568z"/>
        </svg>
      </span>`;
    } else {
      borderRadiusClass = 'rounded-[7.5px] rounded-tl-none';
      paddingClass = 'pl-[12px] pr-[9px] py-[6px]';
      tail = `<span class="absolute top-0 -left-[8px] w-[8px] h-[13px]" style="color:${bg}">
        <svg viewBox="0 0 8 13" width="8" height="13">
          <path fill="currentColor" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"/>
        </svg>
      </span>`;
    }
  }

  // Reactions badge
  const reactionBadge = msg.reactions?.[0]
    ? `
    <div class="absolute -bottom-[8px] right-[12px] flex items-center justify-center bg-white dark:bg-[#202c33] border border-[#e9edef] dark:border-[#3b4a54] rounded-full px-1.5 py-[2px] shadow-[0_1.5px_2px_rgba(0,0,0,0.15)] select-none z-10 scale-[0.88] origin-bottom-right">
      <span class="text-[11px] leading-none">${msg.reactions[0]}</span>
    </div>
  `
    : '';

  if (msg.reactions?.[0]) {
    // add extra padding bottom to accommodate the overlapping badge
    paddingClass += ' pb-[11px]';
  }

  // Image attachment
  const imageElement = msg.image
    ? `<img src="${msg.image}" class="w-full max-w-[280px] rounded-lg mb-1 object-cover shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" style="max-height: 200px" />`
    : '';

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
    <div class="flex ${align} ${marginTopClass} relative">
      <div class="relative max-w-[85%]">
        <div class="${borderRadiusClass} ${paddingClass} shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]" style="background:${bg}">
          ${senderNameHtml}
          ${imageElement}
          ${msg.text ? `<p class="text-[14.2px]/[1.4] whitespace-pre-wrap break-words ${boldClass}" style="color:${textColor}">${escapeHtml(msg.text)}</p>` : ''}
          <div class="flex items-center justify-end gap-1 mt-0.5 select-none">
            <span class="text-[10px] leading-none" style="color:${m.timeText}">${escapeHtml(msg.time)}</span>
            ${checkIcon ? `<span class="inline-flex -mb-0.5">${checkIcon}</span>` : ''}
            ${unreadDot}
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
      <span>${PLUS_SVG}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${m.fieldBg};color:${m.placeholder}">Message</div>
      <span>${CAMERA_SVG}</span>
      <span>${MIC_SVG}</span>
    </div>
  `;
}

export function sync(state) {
  if (state.viewMode === 'desktop') {
    syncDesktop(state);
    return;
  }
  const m = mode(state);
  const statusBar = document.getElementById('wa-statusbar');
  if (statusBar) {
    statusBar.outerHTML = renderStatusBar(state, m);
  }
  byId('wa-contact-name', (el) => {
    el.textContent = state.username;
  });
  byId('wa-status-text', (el) => {
    el.textContent = state.statusText || 'online';
  });
  byId('wa-statusbar-time', (el) => {
    el.textContent = state.statusBarTime || '09:41';
  });

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
    msgContainer.innerHTML = state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('');
  }

  const chatContainer = document.getElementById('wa-chat-container');
  if (chatContainer) {
    const m = mode(state);
    const bgImg = state.chatBg
      ? `url(${state.chatBg})`
      : state.mockupTheme === 'light'
        ? 'url(/whatsapp-bg-light.png)'
        : 'linear-gradient(rgba(11, 20, 26, 0.94), rgba(11, 20, 26, 0.94)), url(/whatsapp-bg-dark.png)';
    const bgSize = state.chatBg ? 'cover' : '360px';
    const bgRepeat = state.chatBg ? 'no-repeat' : 'repeat';
    chatContainer.style.background = `var(--chat-bg, ${m.chatBg})`;
    chatContainer.style.backgroundImage = bgImg;
    chatContainer.style.backgroundSize = bgSize;
    chatContainer.style.backgroundRepeat = bgRepeat;
  }
}

function syncDesktop(state) {
  const m = mode(state);

  byId('wa-contact-name', (el) => {
    el.textContent = state.username;
  });
  byId('wa-contact-name-header', (el) => {
    el.textContent = state.username;
  });
  byId('wa-status-text', (el) => {
    el.textContent = state.statusText || 'online';
  });

  const lastMsg = state.messages[state.messages.length - 1] || { text: '', time: '' };
  const lastMsgText = lastMsg.text || (lastMsg.image ? '📷 Photo' : '');
  byId('wa-chat-time', (el) => {
    el.textContent = lastMsg.time || '';
  });

  let checkIcon = '';
  if (lastMsg.type === 'sent') {
    if (lastMsg.status === 'read') checkIcon = CHECK_READ;
    else if (lastMsg.status === 'delivered') checkIcon = CHECK_DELIVERED;
    else if (lastMsg.status === 'sent') checkIcon = CHECK_SENT;
  }
  byId('wa-chat-last-message', (el) => {
    el.innerHTML = `${checkIcon ? `<span class="inline-flex mr-1">${checkIcon}</span>` : ''}${escapeHtml(lastMsgText)}`;
  });

  const slots = document.querySelectorAll('#wa-avatar');
  slots.forEach((slot) => {
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
  });

  const msgContainer = document.getElementById('wa-messages');
  if (msgContainer) {
    msgContainer.innerHTML = state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('');
  }

  const chatContainer = document.getElementById('wa-chat-container');
  if (chatContainer) {
    const bgImg = state.chatBg
      ? `url(${state.chatBg})`
      : state.mockupTheme === 'light'
        ? 'url(/whatsapp-bg-light.png)'
        : 'linear-gradient(rgba(11, 20, 26, 0.94), rgba(11, 20, 26, 0.94)), url(/whatsapp-bg-dark.png)';
    const bgSize = state.chatBg ? 'cover' : '360px';
    const bgRepeat = state.chatBg ? 'no-repeat' : 'repeat';
    chatContainer.style.background = `var(--chat-bg, ${m.chatBg})`;
    chatContainer.style.backgroundImage = bgImg;
    chatContainer.style.backgroundSize = bgSize;
    chatContainer.style.backgroundRepeat = bgRepeat;
  }
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
