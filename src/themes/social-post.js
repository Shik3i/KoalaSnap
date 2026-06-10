import { currentLocale, escapeHtml } from '../i18n.js';

const PLACEHOLDER_INITIALS = '?';
const HEART_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
const RETWEET_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`;
const REPLY_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
const SHARE_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`;
const PLAY_SVG = `<svg width="32" height="32" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
const THREE_DOTS = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>`;

function avatarMarkup(src, isDark) {
  if (src) {
    return `<img id="mockup-avatar" src="${src}" class="w-full h-full rounded-full object-cover" />`;
  }
  const bg = isDark ? 'from-zinc-600 to-zinc-800' : 'from-sky-400 to-indigo-500';
  return `<div id="mockup-avatar" class="w-full h-full rounded-full bg-gradient-to-br ${bg} flex items-center justify-center text-white text-sm font-bold">${PLACEHOLDER_INITIALS}</div>`;
}

function renderTwitter(state, isDark) {
  const cardBg = isDark ? 'bg-zinc-900' : 'bg-white';
  const textPrimary = isDark ? 'text-zinc-100' : 'text-zinc-900';
  const textSecondary = isDark ? 'text-zinc-400' : 'text-zinc-500';
  const textBody = isDark ? 'text-zinc-300' : 'text-zinc-800';
  const border = isDark ? 'border-zinc-700' : 'border-zinc-200';
  return `
    <div id="mockup-card" class="${cardBg} rounded-2xl shadow-2xl shadow-black/20 mx-auto overflow-hidden ring-1 ring-white/[6%] p-3" style="width:400px; height:520px;font-family:${state.fontFamily};">
      <div class="flex items-start gap-3">
        <div class="w-11 h-11 rounded-full shrink-0 overflow-hidden">
          ${avatarMarkup(state.avatar, isDark)}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1">
            <span id="mockup-author" class="text-[15px] font-bold ${textPrimary} leading-tight truncate">${escapeHtml(state.author)}</span>
            <span class="text-[13px] ${textSecondary}">@${escapeHtml(state.handle)}</span>
            <span class="text-[13px] ${textSecondary}">· 1h</span>
          </div>
        </div>
      </div>
      <p id="mockup-message" class="mt-2 text-[15px] ${textBody} leading-relaxed whitespace-pre-wrap break-words">${escapeHtml(state.message)}</p>
      <div class="mt-2 h-48 rounded-xl ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'} flex items-center justify-center ${textSecondary} text-sm">📷</div>
      <div class="flex items-center justify-between mt-2 pt-2 ${border} border-t text-sm ${textSecondary}">
        <div class="flex items-center gap-5">
          <span class="flex items-center gap-1">${REPLY_SVG} <span id="mockup-replies">1</span></span>
          <span class="flex items-center gap-1">${RETWEET_SVG} <span id="mockup-retweets">3</span></span>
          <span class="flex items-center gap-1">${HEART_SVG} <span id="mockup-likes">12</span></span>
        </div>
        <span>${SHARE_SVG}</span>
      </div>
    </div>
  `;
}

function renderInstagram(state, isDark) {
  const cardBg = isDark ? 'bg-black' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-zinc-900';
  const textSecondary = isDark ? 'text-zinc-400' : 'text-zinc-500';
  const border = isDark ? 'border-zinc-800' : 'border-zinc-200';
  return `
    <div id="mockup-card" class="${cardBg} rounded-2xl shadow-2xl shadow-black/20 mx-auto overflow-hidden ring-1 ring-white/[6%]" style="width:400px; height:600px;font-family:${state.fontFamily};">
      <div class="flex items-center gap-3 px-3 py-2.5">
        <div class="w-8 h-8 rounded-full shrink-0 overflow-hidden">
          ${avatarMarkup(state.avatar, isDark)}
        </div>
        <div class="flex-1 min-w-0">
          <span id="mockup-author" class="text-[13px] font-semibold ${textPrimary} leading-tight truncate">${escapeHtml(state.author)}</span>
        </div>
        <span class="${textSecondary}">${THREE_DOTS}</span>
      </div>
      <div class="w-full h-72 ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'} flex items-center justify-center ${textSecondary} text-sm">📷</div>
      <div class="px-3 pt-2 pb-3">
        <div class="flex items-center gap-3 text-xl ${textPrimary}">
          <span>${HEART_SVG}</span>
          <span>${REPLY_SVG}</span>
          <span class="ml-auto">${SHARE_SVG}</span>
        </div>
        <p class="mt-1 text-[13px] font-semibold ${textPrimary}"><span id="mockup-likes">142</span> likes</p>
        <p class="mt-1 text-[13px] ${textPrimary}"><span class="font-semibold">${escapeHtml(state.author)}</span> <span id="mockup-message" class="${textPrimary}">${escapeHtml(state.message)}</span></p>
        <p class="mt-1 text-[13px] ${textSecondary}">View all 3 comments</p>
        <p class="mt-0.5 text-[11px] ${textSecondary} uppercase tracking-wider">1 hour ago</p>
      </div>
    </div>
  `;
}

function renderMessenger(state, isDark) {
  const cardBg = isDark ? 'bg-zinc-900' : 'bg-white';
  const chatBg = isDark ? '#1a1a2e' : '#f0f2f5';
  const barBg = isDark ? '#1c1c2e' : '#007aff';
  const sentBg = isDark ? '#007aff' : '#007aff';
  const textSecondary = isDark ? 'text-zinc-400' : 'text-zinc-500';
  return `
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${state.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${isDark ? '#121212' : '#ffffff'};background:${isDark ? '#121212' : '#ffffff'}">
        <div class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${barBg}">
          <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">09:41</span>
          <div class="flex items-center gap-1.5">
            <span class="text-[11px]"><svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg></span>
            <span class="text-[11px]"><svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg></span>
            <span class="text-[11px]"><svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg></span>
          </div>
        </div>
        <div class="flex items-center gap-2 px-3 py-1.5 shrink-0 text-white" style="background:${barBg}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          <span class="text-[15px] font-medium">${escapeHtml(state.username)}</span>
        </div>
        <div class="flex-1 p-3 overflow-y-auto flex flex-col gap-3" style="background:var(--chat-bg, ${chatBg})${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : ''}">
          <div class="flex justify-end">
            <div class="max-w-[75%] rounded-2xl px-3.5 py-2" style="background:${sentBg}">
              <p id="mockup-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${escapeHtml(state.message)}</p>
              <div class="flex items-center justify-end gap-1 mt-0.5">
                <span class="text-[11px] text-[#ffffffcc]">${escapeHtml(state.timestamp)}</span>
                <svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${isDark ? '#1a1a2e' : '#f0f2f5'}">
          <div class="flex-1 rounded-2xl px-4 py-2 text-[15px] bg-white text-zinc-400">Aa</div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007aff" stroke-width="2.5" stroke-linecap="round"><polygon points="22 2 11 13 22 2"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </div>
      </div>
    </div>
  `;
}

function renderTiktok(state, isDark) {
  const textPrimary = 'text-white';
  const textSecondary = 'text-zinc-300';
  const barBg = isDark ? '#111111' : '#161616';
  const OVERLAY = 'linear-gradient(transparent 60%, rgba(0,0,0,0.7))';
  return `
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${state.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col relative" style="border-color:#111;background:#111">
        <div class="absolute inset-0 ${isDark ? 'bg-zinc-900' : 'bg-zinc-800'} flex items-center justify-center text-6xl">🎵</div>
        <div class="absolute inset-0" style="background:${OVERLAY}"></div>
        <div class="relative z-10 flex flex-col h-full">
          <div class="flex items-center justify-between px-5 pt-12 pb-2">
            <span class="text-white text-[10px] font-semibold tracking-wider uppercase">Following</span>
            <span class="text-white text-[10px] font-semibold tracking-wider uppercase border-b-2 border-white pb-0.5">For You</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <div class="flex-1"></div>
          <div class="relative z-10 px-4 pb-4">
            <div class="flex items-start gap-3">
              <div class="flex-1 min-w-0">
                <p class="text-[14px] font-bold ${textPrimary}"><span id="mockup-author">${escapeHtml(state.author)}</span> <span class="font-normal ${textSecondary}">@${escapeHtml(state.handle)}</span></p>
                <p id="mockup-message" class="mt-1 text-[13px] ${textPrimary} leading-relaxed whitespace-pre-wrap">${escapeHtml(state.message)}</p>
              </div>
              <div class="flex flex-col items-center gap-3 shrink-0">
                <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50">
                  ${avatarMarkup(state.avatar, false)}
                </div>
                <div class="flex flex-col items-center gap-4 text-white text-xs">
                  <div class="flex flex-col items-center gap-0.5">${HEART_SVG}<span id="mockup-likes" class="text-[10px]">12.4k</span></div>
                  <div class="flex flex-col items-center gap-0.5">${REPLY_SVG}<span id="mockup-replies" class="text-[10px]">241</span></div>
                  <div class="flex flex-col items-center gap-0.5">${SHARE_SVG}<span class="text-[10px]">Share</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function render(state) {
  const isDark = state.mockupTheme === 'dark';
  const platform = state.theme || 'twitter';

  switch (platform) {
    case 'instagram':
      return renderInstagram(state, isDark);
    case 'messenger':
      return renderMessenger(state, isDark);
    case 'tiktok':
      return renderTiktok(state, isDark);
    case 'twitter':
    default:
      return renderTwitter(state, isDark);
  }
}

export function sync(state) {
  const platform = state.theme || 'twitter';

  /* fields used by multiple layouts */
  byId('mockup-author', (el) => { if (el) el.textContent = state.author; });
  byId('mockup-message', (el) => { if (el) el.textContent = state.message; });
  byId('mockup-likes', (el) => { if (el) el.textContent = '142'; });
  byId('mockup-replies', (el) => { if (el) el.textContent = '1'; });
  byId('mockup-retweets', (el) => { if (el) el.textContent = '3'; });

  if (platform === 'messenger') {
    byId('mockup-avatar', (el) => { if (el) avatarToggle(el, state, false); });
  } else {
    byId('mockup-avatar', (el) => { if (el) avatarToggle(el, state, state.mockupTheme === 'dark'); });
  }
}

function avatarToggle(slot, state, isDark) {
  if (state.avatar) {
    const img = document.createElement('img');
    img.id = 'mockup-avatar';
    img.src = state.avatar;
    img.className = 'w-full h-full rounded-full object-cover';
    img.alt = '';
    slot.replaceWith(img);
  } else {
    const div = document.createElement('div');
    div.id = 'mockup-avatar';
    const bg = isDark ? 'from-zinc-600 to-zinc-800' : 'from-sky-400 to-indigo-500';
    div.className = `w-full h-full rounded-full bg-gradient-to-br ${bg} flex items-center justify-center text-white text-sm font-bold`;
    div.textContent = PLACEHOLDER_INITIALS;
    slot.replaceWith(div);
  }
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
