import { escapeHtml } from '../i18n.js';

const BACK_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`;

const DOWN_ARROW_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

const SIGNAL_SVG = `<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>`;

const WIFI_SVG = `<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>`;

const BATTERY_SVG = `<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`;

const L = {
  barBg: '#f8f8f8',
  chatBg: '#ffffff',
  sentBg: '#007aff', // Signature iOS blue
  recvBg: '#e5e5ea',
  sentText: '#ffffff',
  recvText: '#000000',
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
  sentBg: '#0a84ff',
  recvBg: '#262629',
  sentText: '#ffffff',
  recvText: '#ffffff',
  timeText: '#8e8e93',
  inputBg: '#1c1c1e',
  fieldBg: '#2c2c2e',
  fieldText: '#ffffff',
  statusColor: '#ffffff',
  navColor: '#ffffff',
};

function mode(state) {
  const isSms = state.imessageMode === 'sms';
  const m = state.mockupTheme === 'light' ? { ...L } : { ...D };
  if (isSms) {
    m.sentBg = state.mockupTheme === 'light' ? '#34c759' : '#30d158';
    m.navColor = state.mockupTheme === 'light' ? '#34c759' : '#ffffff';
  }
  return m;
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
  const phoneBorder = state.mockupTheme === 'light' ? '#e5e5ea' : '#1c1c1e';
  return `
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${state.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${phoneBorder};background:${phoneBorder}">
        ${renderStatusBar(state, m)}
        ${renderNavBar(state, m)}
        ${renderChat(state, m)}
        ${renderInputBar(state, m)}
      </div>
    </div>
  `;
}

function renderDesktop(state, m) {
  const isDark = state.mockupTheme === 'dark';
  const sidebarBg = isDark ? '#1e1e22' : '#f5f5f7';
  const headerBg = isDark ? '#262629' : '#ffffff';
  const activeChatBg = '#007aff';
  const borderCol = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const secondaryText = isDark ? '#8e8e93' : '#8e8e93';
  const primaryText = isDark ? '#ffffff' : '#000000';

  const lastMsg = state.messages[state.messages.length - 1] || { text: '', time: '' };
  const lastMsgText = lastMsg.text || (lastMsg.image ? '📷 Photo' : '');
  const lastMsgTime = lastMsg.time || '';

  const targetAvatarHtml = state.avatar
    ? `<img id="im-avatar" src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
    : `<div id="im-avatar" class="w-full h-full rounded-full bg-[#8e8e93] flex items-center justify-center text-white text-[13px] font-bold">${escapeHtml(state.username.slice(0, 2))}</div>`;

  return `
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1000px; height:700px; font-family:${state.fontFamily}; border-color:${borderCol}; background:${m.chatBg}; color:${primaryText};">
      <!-- Sidebar -->
      <div class="w-[300px] flex flex-col shrink-0 border-r" style="border-color:${borderCol}; background:${sidebarBg};">
        <div class="p-3 shrink-0 flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold" style="color:${secondaryText};">Messages</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs" style="background:${isDark ? '#2c2c2e' : '#e3e3e7'}; color:${secondaryText};">
            <span class="opacity-70">Search</span>
          </div>
        </div>
        <div class="flex-1 overflow-y-auto flex flex-col">
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none" style="background:${activeChatBg}; color:#ffffff;">
            <div class="w-11 h-11 rounded-full overflow-hidden shrink-0">
              ${targetAvatarHtml}
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span id="im-contact-name" class="font-semibold text-[15px] truncate">${escapeHtml(state.username)}</span>
                <span id="im-chat-time" class="text-[12px] shrink-0 opacity-80">${escapeHtml(lastMsgTime)}</span>
              </div>
              <div class="flex items-center gap-1 mt-0.5">
                <span id="im-chat-last-message" class="text-[13px] truncate flex-1 opacity-90">${escapeHtml(lastMsgText)}</span>
              </div>
            </div>
          </div>
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none opacity-40 hover:opacity-60 transition-opacity">
            <div class="w-11 h-11 rounded-full bg-[#34c759] flex items-center justify-center shrink-0 text-white font-semibold text-[13px]">J</div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span class="font-semibold text-[15px]" style="color:${primaryText};">Julia</span>
                <span class="text-[12px]" style="color:${secondaryText};">12:30</span>
              </div>
              <span class="text-[13px] truncate" style="color:${secondaryText};">Let's meet tomorrow!</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Chat Pane -->
      <div class="flex-1 flex flex-col min-w-0" style="background:${m.chatBg};">
        <!-- Header -->
        <div class="h-[56px] shrink-0 flex items-center justify-between px-5 border-b" style="background:${headerBg}; border-color:${borderCol};">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-8 h-8 rounded-full overflow-hidden shrink-0">
              ${targetAvatarHtml}
            </div>
            <span id="im-contact-name-header" class="font-semibold text-[15px] truncate" style="color:${primaryText};">${escapeHtml(state.username)}</span>
          </div>
          <span class="text-xs font-semibold px-3 py-1 rounded bg-white/10 hover:bg-white/15 cursor-pointer select-none" style="color:${m.sentBg};">Details</span>
        </div>
        <!-- Messages -->
        <div id="im-chat-container" class="flex-1 p-6 overflow-y-auto" style="background:var(--chat-bg, ${m.chatBg})${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : ''}">
          <div id="im-messages" class="flex flex-col gap-0.5 max-w-[720px] mx-auto">
            ${state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('')}
          </div>
        </div>
        <!-- Input Footer -->
        <div class="p-3 shrink-0 flex items-center gap-3 border-t" style="background:${headerBg}; border-color:${borderCol}; text-align: left;">
          <div class="w-7 h-7 rounded-full bg-[#007aff] flex items-center justify-center text-white text-[12px] font-bold cursor-pointer select-none shrink-0">A</div>
          <div class="flex-1 rounded-full px-4 py-2 text-[14.5px] flex items-center" style="background:${m.fieldBg}; color:${m.fieldText};">
            <span class="opacity-50">${state.imessageMode === 'sms' ? 'Text Message' : 'iMessage'}</span>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" style="fill:${m.sentBg};" class="shrink-0"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
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
    <div id="im-statusbar" class="flex items-center justify-between px-7 h-[44px] shrink-0" style="background:${m.barBg};color:${m.statusColor}">
      <div class="w-[72px]"></div>
      <span id="im-statusbar-time" class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">${escapeHtml(state.statusBarTime || '09:41')}</span>
      <div class="flex items-center gap-1.5 w-[72px] justify-end">
        <span class="text-[11px]">${signalHtml}</span>
        ${wifiHtml}
        <span class="text-[11px]">${batteryHtml}</span>
      </div>
    </div>
  `;
}

function renderNavBar(state, m) {
  return `
    <div id="im-navbar" class="flex items-center gap-1 px-2 py-1.5 shrink-0 border-b border-black/[5%] relative z-10" style="background:${m.barBg};color:${m.navColor}">
      <span class="shrink-0 px-1">${BACK_SVG}</span>
      <div class="w-[34px] h-[34px] rounded-full overflow-hidden shrink-0 ml-1">
        ${state.avatar
          ? `<img id="im-avatar" src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
          : `<div id="im-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="#8e8e93"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>`
        }
      </div>
      <div class="flex-1 min-w-0">
        <div id="im-contact-name" class="text-[15px] font-semibold leading-tight truncate ml-2" style="color:${m.statusColor}">${escapeHtml(state.username)}</div>
      </div>
      <div class="flex items-center gap-2 shrink-0 px-1">
        <span style="color:${m.navColor}">${DOWN_ARROW_SVG}</span>
      </div>
    </div>
  `;
}

function renderChat(state, m) {
  return `
    <div id="im-chat-container" class="flex-1 p-3 overflow-y-auto" style="background:var(--chat-bg, ${m.chatBg})${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : ''}">
      <div id="im-messages" class="flex flex-col gap-0.5">
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
  const align = isSent ? 'justify-end' : 'justify-start';

  let tail = '';
  let borderRadiusClass = 'rounded-[18px]';
  let marginTopClass = isFirstInBlock ? 'mt-2.5' : 'mt-[2px]';

  if (isLastInBlock) {
    if (isSent) {
      borderRadiusClass = 'rounded-[18px] rounded-br-[4px]';
      tail = `<span class="absolute bottom-0 -right-[5px] w-[10px] h-[15px]" style="color:${bg}">
        <svg viewBox="0 0 10 15" width="10" height="15" fill="none">
          <path fill="currentColor" d="M0 15h10V0C10 6 7 11 0 15z"/>
        </svg>
      </span>`;
    } else {
      borderRadiusClass = 'rounded-[18px] rounded-bl-[4px]';
      tail = `<span class="absolute bottom-0 -left-[5px] w-[10px] h-[15px]" style="color:${bg}">
        <svg viewBox="0 0 10 15" width="10" height="15" fill="none">
          <path fill="currentColor" d="M10 15H0V0C0 6 3 11 10 15z"/>
        </svg>
      </span>`;
    }
  }

  // Under iMessage bubbles, the status/time displays as text under the last bubble of the block
  let statusTextElement = '';
  if (isLastInBlock && isSent && msg.time) {
    statusTextElement = `
      <div class="text-[10px] text-right text-zinc-400 mt-1 select-none pr-1.5">
        ${escapeHtml(msg.time)}
      </div>
    `;
  } else if (isLastInBlock && !isSent && msg.time) {
    statusTextElement = `
      <div class="text-[10px] text-left text-zinc-400 mt-1 select-none pl-1.5">
        ${escapeHtml(msg.time)}
      </div>
    `;
  }

  const senderNameHtml = state.isGroup && !isSent && isFirstInBlock && msg.senderName ? `
    <div class="text-[10px] text-zinc-400 dark:text-zinc-500 mb-0.5 leading-tight select-none pl-2.5">
      ${escapeHtml(msg.senderName)}
    </div>
  ` : '';

  // Reactions badge
  const reactionBadge = msg.reactions?.[0] ? `
    <div class="absolute -top-[10px] ${isSent ? '-left-[6px]' : '-right-[6px]'} flex items-center justify-center bg-[#e5e5ea] dark:bg-[#2c2c2e] border border-black/10 dark:border-white/10 rounded-full px-1.5 py-[2px] shadow-[0_1.5px_2px_rgba(0,0,0,0.15)] select-none z-10 scale-[0.88] ${isSent ? 'origin-top-left' : 'origin-top-right'}">
      <span class="text-[11px] leading-none">${msg.reactions[0]}</span>
    </div>
  ` : '';

  if (msg.reactions?.[0]) {
    if (!isFirstInBlock) {
      marginTopClass = 'mt-3.5';
    } else {
      marginTopClass = 'mt-4';
    }
  }

  // Image attachment
  const imageElement = msg.image ? `<img src="${msg.image}" class="w-full max-w-[280px] rounded-lg mb-1 object-cover shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" style="max-height: 200px" />` : '';

  return `
    <div class="flex flex-col ${align} ${marginTopClass}">
      ${senderNameHtml}
      <div class="relative max-w-[75%]">
        ${reactionBadge}
        <div class="${borderRadiusClass} px-3.5 py-2" style="background:${bg}">
          ${imageElement}
          ${msg.text ? `<p class="text-[15.5px]/[1.35] whitespace-pre-wrap break-words" style="color:${textColor}">${escapeHtml(msg.text)}</p>` : ''}
        </div>
        ${tail}
      </div>
      ${statusTextElement}
    </div>
  `;
}

function renderInputBar(state, m) {
  const placeholder = state.imessageMode === 'sms' ? 'Text Message' : 'iMessage';
  return `
    <div id="im-inputbar" class="flex items-center gap-2 px-3 py-2 shrink-0 border-t border-black/[5%]" style="background:${m.inputBg}">
      <div class="flex-1 rounded-2xl px-4 py-2 text-[15px] leading-none" style="background:${m.fieldBg};color:${m.fieldText}">${placeholder}</div>
      <svg width="24" height="24" viewBox="0 0 24 24" style="fill:${m.sentBg}"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    </div>
  `;
}

export function sync(state) {
  if (state.viewMode === 'desktop') {
    syncDesktop(state);
    return;
  }
  const m = mode(state);
  const statusBar = document.getElementById('im-statusbar');
  if (statusBar) {
    statusBar.outerHTML = renderStatusBar(state, m);
  }
  const navBar = document.getElementById('im-navbar');
  if (navBar) {
    navBar.outerHTML = renderNavBar(state, m);
  }
  const inputBar = document.getElementById('im-inputbar');
  if (inputBar) {
    inputBar.outerHTML = renderInputBar(state, m);
  }

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

  const msgContainer = document.getElementById('im-messages');
  if (msgContainer) {
    const m = mode(state);
    msgContainer.innerHTML = state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('');
  }

  const chatContainer = document.getElementById('im-chat-container');
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
  
  byId('im-contact-name', (el) => { el.textContent = state.username; });
  byId('im-contact-name-header', (el) => { el.textContent = state.username; });
  
  const lastMsg = state.messages[state.messages.length - 1] || { text: '', time: '' };
  const lastMsgText = lastMsg.text || (lastMsg.image ? '📷 Photo' : '');
  byId('im-chat-time', (el) => { el.textContent = lastMsg.time || ''; });
  byId('im-chat-last-message', (el) => { el.textContent = lastMsgText; });

  const slots = document.querySelectorAll('#im-avatar');
  slots.forEach(slot => {
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
      div.className = 'w-full h-full rounded-full bg-[#8e8e93] flex items-center justify-center text-white text-[13px] font-bold';
      div.textContent = state.username.slice(0, 2);
      slot.replaceWith(div);
    }
  });

  const msgContainer = document.getElementById('im-messages');
  if (msgContainer) {
    msgContainer.innerHTML = state.messages.map((msg, idx) => renderBubble(msg, idx, state, m)).join('');
  }

  const chatContainer = document.getElementById('im-chat-container');
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
