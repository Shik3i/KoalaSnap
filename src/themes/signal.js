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

const CHECK_READ = `<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffd0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#ffffffd0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/></svg>`;

const CHECK_SENT = `<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffb3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const L = {
  barBg: '#3b82f6',
  chatBg: '#f0f2f5',
  sentBg: '#3b82f6',
  recvBg: '#ffffff',
  sentText: '#ffffff',
  recvText: '#111b21',
  timeText: '#00000080',
  sentTimeText: '#ffffffb3',
  inputBg: '#f0f2f5',
  fieldBg: '#ffffff',
  fieldText: '#111b21',
  placeholder: '#8696a0',
};

const D = {
  barBg: '#1e1f22',
  chatBg: '#101214',
  sentBg: '#3b82f6',
  recvBg: '#2b2d30',
  sentText: '#ffffff',
  recvText: '#e9edef',
  timeText: '#ffffff8c',
  sentTimeText: '#ffffffb3',
  inputBg: '#1e1f22',
  fieldBg: '#2b2d30',
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
  const sidebarBg = isDark ? '#1e1e21' : '#ffffff';
  const headerBg = isDark ? '#2e2f33' : '#f8f9fa';
  const activeChatBg = isDark ? '#3d3e42' : '#f0f2f5';
  const borderCol = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const secondaryText = isDark ? '#9e9ea2' : '#5c636a';
  const primaryText = isDark ? '#f8f9fa' : '#1a1a1a';

  const lastMsg = state.messages[state.messages.length - 1] || { text: '', time: '' };
  const lastMsgText = lastMsg.text || (lastMsg.image ? '📷 Photo' : '');
  const lastMsgTime = lastMsg.time || '';

  const targetAvatarHtml = state.avatar
    ? `<img id="sg-avatar" src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
    : `<div id="sg-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center text-white text-[13px] font-bold">${escapeHtml(state.username.slice(0, 2))}</div>`;

  return `
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1000px; height:700px; font-family:${state.fontFamily}; border-color:${borderCol}; background:${sidebarBg}; color:${primaryText};">
      <!-- Sidebar -->
      <div class="w-[300px] flex flex-col shrink-0 border-r" style="border-color:${borderCol}; background:${sidebarBg};">
        <div class="p-3 shrink-0 flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-zinc-600 flex items-center justify-center cursor-pointer select-none">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </div>
          <div class="flex-1 flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs" style="background:${isDark ? '#2e2f33' : '#f0f2f5'}; color:${secondaryText};">
            <span class="opacity-70">Search</span>
          </div>
        </div>
        <div class="flex-1 overflow-y-auto flex flex-col">
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none" style="background:${activeChatBg};">
            <div class="w-11 h-11 rounded-full overflow-hidden shrink-0">
              ${targetAvatarHtml}
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span id="sg-contact-name" class="font-medium text-[15px] truncate" style="color:${primaryText};">${escapeHtml(state.username)}</span>
                <span id="sg-chat-time" class="text-[12px] shrink-0" style="color:${secondaryText};">${escapeHtml(lastMsgTime)}</span>
              </div>
              <div class="flex items-center gap-1 mt-0.5">
                <span id="sg-chat-last-message" class="text-[13px] truncate flex-1" style="color:${secondaryText};">${escapeHtml(lastMsgText)}</span>
              </div>
            </div>
          </div>
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none opacity-40 hover:opacity-60 transition-opacity">
            <div class="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-white font-semibold text-[13px]">J</div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span class="font-medium text-[15px]" style="color:${primaryText};">Julia</span>
                <span class="text-[12px]" style="color:${secondaryText};">12:30</span>
              </div>
              <span class="text-[13px] truncate" style="color:${secondaryText};">See you later!</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Chat Pane -->
      <div class="flex-1 flex flex-col min-w-0">
        <!-- Header -->
        <div class="h-[56px] shrink-0 flex items-center justify-between px-5 border-l" style="background:${headerBg}; border-color:${borderCol};">
          <div class="min-w-0">
            <div id="sg-contact-name-header" class="font-medium text-[15.5px] truncate" style="color:${primaryText};">${escapeHtml(state.username)}</div>
            <div id="sg-status-text" class="text-[12px] truncate" style="color:${secondaryText};">${escapeHtml(state.statusText || 'online')}</div>
          </div>
          <div class="flex items-center gap-5" style="color:${secondaryText};">
            ${VIDEO_SVG}
            ${PHONE_SVG}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </div>
        </div>
        <!-- Messages -->
        <div id="sg-chat-container" class="flex-1 p-6 overflow-y-auto" style="background:var(--chat-bg, ${m.chatBg})${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : ''}">
          <div id="sg-messages" class="flex flex-col gap-0.5 max-w-[720px] mx-auto">
            ${state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('')}
          </div>
        </div>
        <!-- Input Footer -->
        <div class="p-3 shrink-0 flex items-center gap-3 border-l" style="background:${headerBg}; border-color:${borderCol}; text-align: left;">
          <span style="color:${secondaryText};">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </span>
          <div class="flex-1 rounded-xl px-4 py-2.5 text-[14.5px] flex items-center" style="background:${m.fieldBg}; color:${m.fieldText};">
            <span class="opacity-50">New Message</span>
          </div>
          <span style="color:${secondaryText};">${EMOJI_SVG}</span>
          <span style="color:${secondaryText};">${MIC_SVG}</span>
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
    <div id="sg-statusbar" class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${m.barBg}">
      <span id="sg-statusbar-time" class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">${escapeHtml(state.statusBarTime || '09:41')}</span>
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
            ? `<img id="sg-avatar" src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
            : `<div id="sg-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>`
        }
      </div>
      <div class="flex-1 min-w-0">
        <div id="sg-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${escapeHtml(state.username)}</div>
        <div id="sg-status-text" class="text-[#ffffffcc] text-[11px] leading-tight">${escapeHtml(state.statusText || 'online')}</div>
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
    <div id="sg-chat-container" class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${m.chatBg})${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : ''}">
      <div id="sg-messages" class="flex flex-col gap-0.5">
        ${state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('')}
      </div>
    </div>
  `;
}

function renderBubble(msg, idx, state, m) {
  const isSent = msg.type === 'sent';
  const prevMsg = idx > 0 ? state.messages[idx - 1] : null;
  const nextMsg = idx < state.messages.length - 1 ? state.messages[idx + 1] : null;
  const isFirstInBlock = !prevMsg || prevMsg.type !== msg.type;
  const isLastInBlock = !nextMsg || nextMsg.type !== msg.type;

  const bg = isSent ? m.sentBg : m.recvBg;
  const textColor = isSent ? m.sentText : m.recvText;
  const timeColor = isSent ? m.sentTimeText : m.timeText;
  const align = isSent ? 'justify-end' : 'justify-start';
  const status = msg.status || 'read';

  let borderRadiusClass = 'rounded-[16px]';
  let marginTopClass = isFirstInBlock ? 'mt-2.5' : 'mt-[2px]';

  if (isSent) {
    if (isFirstInBlock && isLastInBlock) {
      borderRadiusClass = 'rounded-[16px] rounded-br-[4px]';
    } else if (isFirstInBlock) {
      borderRadiusClass = 'rounded-[16px] rounded-tr-[16px] rounded-br-[4px]';
    } else if (isLastInBlock) {
      borderRadiusClass = 'rounded-[16px] rounded-br-[4px]';
    } else {
      borderRadiusClass = 'rounded-[16px] rounded-tr-[16px] rounded-br-[4px]';
    }
  } else {
    if (isFirstInBlock && isLastInBlock) {
      borderRadiusClass = 'rounded-[16px] rounded-bl-[4px]';
    } else if (isFirstInBlock) {
      borderRadiusClass = 'rounded-[16px] rounded-tl-[16px] rounded-bl-[4px]';
    } else if (isLastInBlock) {
      borderRadiusClass = 'rounded-[16px] rounded-bl-[4px]';
    } else {
      borderRadiusClass = 'rounded-[16px] rounded-tl-[16px] rounded-bl-[4px]';
    }
  }

  // Deterministic name coloring
  const nameColors = ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#3b82f6'];
  const colorIndex = (msg.senderName || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % nameColors.length;
  const nameColor = nameColors[colorIndex];

  const senderNameHtml =
    state.isGroup && !isSent && isFirstInBlock && msg.senderName
      ? `
    <div class="text-[12px] font-semibold mb-0.5 leading-tight select-none" style="color:${nameColor}">
      ${escapeHtml(msg.senderName)}
    </div>
  `
      : '';

  // Reactions badge
  const reactionBadge = msg.reactions?.[0]
    ? `
    <div class="absolute -bottom-[8px] right-[10px] flex items-center justify-center bg-white dark:bg-[#2b2d30] border border-[#e9edef] dark:border-[#3b4a54] rounded-full px-1.5 py-[2px] shadow-[0_1.5px_2px_rgba(0,0,0,0.15)] select-none z-10 scale-[0.88] origin-bottom-right">
      <span class="text-[11px] leading-none">${msg.reactions[0]}</span>
    </div>
  `
    : '';

  let paddingClass = 'px-3.5 py-1.5';
  if (msg.reactions?.[0]) {
    paddingClass = 'px-3.5 pt-1.5 pb-[10px]';
  }

  // Image attachment
  const imageElement = msg.image
    ? `<img src="${msg.image}" class="w-full max-w-[280px] rounded-lg mb-1 object-cover shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" style="max-height: 200px" />`
    : '';

  let checkIcon = '';
  if (isSent) {
    if (status === 'read' || status === 'delivered') checkIcon = CHECK_READ;
    else if (status === 'sent') checkIcon = CHECK_SENT;
  }

  return `
    <div class="flex ${align} ${marginTopClass} relative">
      <div class="relative max-w-[80%]">
        <div class="${borderRadiusClass} ${paddingClass} shadow-[0_1px_1px_rgba(0,0,0,0.08)]" style="background:${bg}">
          ${senderNameHtml}
          ${imageElement}
          ${msg.text ? `<p class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words" style="color:${textColor}">${escapeHtml(msg.text)}</p>` : ''}
          <div class="flex items-center justify-end gap-1 mt-0.5 select-none">
            <span class="text-[10px] leading-none" style="color:${timeColor}">${escapeHtml(msg.time)}</span>
            ${checkIcon ? `<span class="inline-flex -mb-0.5">${checkIcon}</span>` : ''}
          </div>
        </div>
        ${reactionBadge}
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
  if (state.viewMode === 'desktop') {
    syncDesktop(state);
    return;
  }
  const m = mode(state);
  const statusBar = document.getElementById('sg-statusbar');
  if (statusBar) {
    statusBar.outerHTML = renderStatusBar(state, m);
  }
  byId('sg-contact-name', (el) => {
    el.textContent = state.username;
  });
  byId('sg-status-text', (el) => {
    el.textContent = state.statusText || 'online';
  });

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

  const msgContainer = document.getElementById('sg-messages');
  if (msgContainer) {
    const m = mode(state);
    msgContainer.innerHTML = state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('');
  }

  const chatContainer = document.getElementById('sg-chat-container');
  if (chatContainer) {
    chatContainer.style.background = `var(--chat-bg, ${m.chatBg})`;
    if (state.chatBg) {
      chatContainer.style.backgroundImage = `url(${state.chatBg})`;
      chatContainer.style.backgroundSize = 'cover';
    } else {
      chatContainer.style.backgroundImage = '';
    }
  }
}

function syncDesktop(state) {
  const m = mode(state);

  byId('sg-contact-name', (el) => {
    el.textContent = state.username;
  });
  byId('sg-contact-name-header', (el) => {
    el.textContent = state.username;
  });
  byId('sg-status-text', (el) => {
    el.textContent = state.statusText || 'online';
  });

  const lastMsg = state.messages[state.messages.length - 1] || { text: '', time: '' };
  const lastMsgText = lastMsg.text || (lastMsg.image ? '📷 Photo' : '');
  byId('sg-chat-time', (el) => {
    el.textContent = lastMsg.time || '';
  });
  byId('sg-chat-last-message', (el) => {
    el.textContent = lastMsgText;
  });

  const slots = document.querySelectorAll('#sg-avatar');
  slots.forEach((slot) => {
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
      div.className =
        'w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center text-white text-[13px] font-bold';
      div.textContent = state.username.slice(0, 2);
      slot.replaceWith(div);
    }
  });

  const msgContainer = document.getElementById('sg-messages');
  if (msgContainer) {
    msgContainer.innerHTML = state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('');
  }

  const chatContainer = document.getElementById('sg-chat-container');
  if (chatContainer) {
    chatContainer.style.background = `var(--chat-bg, ${m.chatBg})`;
    if (state.chatBg) {
      chatContainer.style.backgroundImage = `url(${state.chatBg})`;
      chatContainer.style.backgroundSize = 'cover';
    } else {
      chatContainer.style.backgroundImage = '';
    }
  }
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
