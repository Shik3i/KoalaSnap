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
  const cardBg = isDark ? '#18181b' : '#ffffff';
  const textPrimary = isDark ? 'text-zinc-100' : 'text-zinc-900';
  const textSecondary = isDark ? 'text-zinc-400' : 'text-zinc-500';
  const textBody = isDark ? 'text-zinc-300' : 'text-zinc-800';
  const border = isDark ? 'border-zinc-700' : 'border-zinc-200';
  return `
    <div id="mockup-card" class="rounded-2xl shadow-2xl shadow-black/20 mx-auto overflow-hidden ring-1 ring-white/[6%] p-3" style="width:400px; height:520px;font-family:${state.fontFamily};background:var(--chat-bg, ${cardBg})${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : ''}">
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
  const cardBg = isDark ? '#000000' : '#ffffff';
  const textPrimary = isDark ? 'text-white' : 'text-zinc-900';
  const textSecondary = isDark ? 'text-zinc-400' : 'text-zinc-500';
  const border = isDark ? 'border-zinc-800' : 'border-zinc-200';
  return `
    <div id="mockup-card" class="rounded-2xl shadow-2xl shadow-black/20 mx-auto overflow-hidden ring-1 ring-white/[6%]" style="width:400px; height:600px;font-family:${state.fontFamily};background:var(--chat-bg, ${cardBg})${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : ''}">
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
          <span id="mockup-author" class="text-[15px] font-medium">${escapeHtml(state.author)}</span>
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
  const cardBg = isDark ? '#111111' : '#161616';
  return `
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${state.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col relative" style="border-color:#111;background:var(--chat-bg, ${cardBg})${state.chatBg ? `;background-image:url(${state.chatBg});background-size:cover` : ''}">
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

  if (state.viewMode === 'desktop') {
    switch (platform) {
      case 'instagram':
        return renderInstagramDesktop(state, isDark);
      case 'messenger':
        return renderMessengerDesktop(state, isDark);
      case 'tiktok':
        return renderTiktokDesktop(state, isDark);
      case 'twitter':
      default:
        return renderTwitterDesktop(state, isDark);
    }
  }

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
  if (state.viewMode === 'desktop') {
    syncDesktop(state);
    return;
  }
  const platform = state.theme || 'twitter';

  /* fields used by multiple layouts */
  byId('mockup-author', (el) => {
    if (el) el.textContent = state.author;
  });
  byId('mockup-message', (el) => {
    if (el) el.textContent = state.message;
  });
  byId('mockup-likes', (el) => {
    if (el) el.textContent = '142';
  });
  byId('mockup-replies', (el) => {
    if (el) el.textContent = '1';
  });
  byId('mockup-retweets', (el) => {
    if (el) el.textContent = '3';
  });

  if (platform === 'messenger') {
    byId('mockup-avatar', (el) => {
      if (el) avatarToggle(el, state, false);
    });
  } else {
    byId('mockup-avatar', (el) => {
      if (el) avatarToggle(el, state, state.mockupTheme === 'dark');
    });
  }
}

function syncDesktop(state) {
  const isDark = state.mockupTheme === 'dark';
  byId('mockup-author', (el) => {
    if (el) el.textContent = state.author;
  });
  byId('mockup-author-header', (el) => {
    if (el) el.textContent = state.author;
  });
  byId('mockup-message', (el) => {
    if (el) el.textContent = state.message;
  });
  byId('mockup-message-preview', (el) => {
    if (el) el.textContent = state.message;
  });

  const slots = document.querySelectorAll('#mockup-avatar');
  slots.forEach((slot) => {
    avatarToggle(slot, state, isDark);
  });
}

function renderTwitterDesktop(state, isDark) {
  const cardBg = isDark ? '#000000' : '#ffffff';
  const sidebarBg = isDark ? '#000000' : '#ffffff';
  const textPrimary = isDark ? 'text-zinc-100' : 'text-zinc-900';
  const textSecondary = 'text-zinc-500';
  const border = isDark ? 'border-zinc-800' : 'border-zinc-200';

  const avatarHtml = avatarMarkup(state.avatar, isDark);

  return `
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1100px; height:750px; font-family:${state.fontFamily}; border-color:${isDark ? '#2f3336' : '#eff3f4'}; background:${cardBg};">
      <div class="w-[250px] shrink-0 border-r flex flex-col justify-between p-4" style="border-color:${isDark ? '#2f3336' : '#eff3f4'}; background:${sidebarBg};">
        <div class="flex flex-col gap-6">
          <div class="px-2 cursor-pointer text-white">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </div>
          <div class="flex flex-col gap-1 text-left">
            <div class="flex items-center gap-4 px-3 py-2.5 rounded-full hover:bg-white/10 font-bold text-lg cursor-pointer ${textPrimary}">
              <span>🏠</span> <span>Home</span>
            </div>
            <div class="flex items-center gap-4 px-3 py-2.5 rounded-full hover:bg-white/10 font-medium text-lg cursor-pointer ${textSecondary}">
              <span>🔍</span> <span>Explore</span>
            </div>
            <div class="flex items-center gap-4 px-3 py-2.5 rounded-full hover:bg-white/10 font-medium text-lg cursor-pointer ${textSecondary}">
              <span>🔔</span> <span>Notifications</span>
            </div>
            <div class="flex items-center gap-4 px-3 py-2.5 rounded-full hover:bg-white/10 font-medium text-lg cursor-pointer ${textSecondary}">
              <span>✉️</span> <span>Messages</span>
            </div>
            <div class="flex items-center gap-4 px-3 py-2.5 rounded-full hover:bg-white/10 font-medium text-lg cursor-pointer ${textSecondary}">
              <span>👤</span> <span>Profile</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3 p-2 rounded-full hover:bg-white/10 cursor-pointer text-left">
          <div class="w-10 h-10 rounded-full overflow-hidden shrink-0">
            ${avatarHtml}
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-bold text-sm truncate ${textPrimary}">${escapeHtml(state.author)}</div>
            <div class="text-xs truncate ${textSecondary}">@${escapeHtml(state.handle)}</div>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col min-w-0 text-left">
        <div class="h-14 shrink-0 flex items-center px-4 border-b font-bold text-lg select-none" style="border-color:${isDark ? '#2f3336' : '#eff3f4'}; background:${cardBg}; color:${isDark ? '#fff' : '#000'};">
          Post
        </div>
        <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full overflow-hidden shrink-0">
              ${avatarHtml}
            </div>
            <div>
              <div id="mockup-author" class="font-bold text-[16px] leading-tight ${textPrimary}">${escapeHtml(state.author)}</div>
              <div class="text-[14px] ${textSecondary}">@${escapeHtml(state.handle)}</div>
            </div>
          </div>
          <div id="mockup-message" class="text-[20px]/[1.4] whitespace-pre-wrap break-words ${textPrimary}">${escapeHtml(state.message)}</div>
          <div class="w-full h-[320px] rounded-xl ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'} flex items-center justify-center ${textSecondary} text-sm" style="${state.chatBg ? `background-image:url(${state.chatBg});background-size:cover;background-position:center;` : ''}">
            ${state.chatBg ? '' : '📷'}
          </div>
          <div class="text-[14.5px] py-1 border-y ${border} ${textSecondary} select-none">
            7:18 PM · Jun 10, 2026 · <span class="font-semibold ${textPrimary}">142.5K</span> Views
          </div>
          <div class="flex gap-6 py-1 border-b ${border} text-[14px] ${textSecondary} select-none">
            <span><strong class="font-semibold ${textPrimary}">3</strong> Reposts</span>
            <span><strong class="font-semibold ${textPrimary}">12</strong> Likes</span>
            <span><strong class="font-semibold ${textPrimary}">1</strong> Bookmark</span>
          </div>
          <div class="flex items-center justify-around py-1 border-b ${border} ${textSecondary} select-none">
            <span class="cursor-pointer hover:text-sky-500">${REPLY_SVG}</span>
            <span class="cursor-pointer hover:text-emerald-500">${RETWEET_SVG}</span>
            <span class="cursor-pointer hover:text-rose-500">${HEART_SVG}</span>
            <span class="cursor-pointer hover:text-sky-500">${SHARE_SVG}</span>
          </div>
        </div>
      </div>
      <div class="w-[350px] shrink-0 border-l p-4 flex flex-col gap-4 text-left" style="border-color:${isDark ? '#2f3336' : '#eff3f4'}; background:${sidebarBg};">
        <div class="flex items-center gap-3 px-4 py-2.5 rounded-full text-sm" style="background:${isDark ? '#202327' : '#eff3f4'}; color:${textSecondary};">
          <span>🔍</span> <span>Search X</span>
        </div>
        <div class="rounded-2xl p-4 flex flex-col gap-3" style="background:${isDark ? '#16181c' : '#f7f9f9'};">
          <h3 class="font-bold text-lg ${textPrimary}">What's happening</h3>
          <div class="flex flex-col gap-0.5">
            <span class="text-xs ${textSecondary}">Technology · Trending</span>
            <span class="font-bold text-sm ${textPrimary}">KoalaSnap v3.0</span>
            <span class="text-xs ${textSecondary}">10.2K posts</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderInstagramDesktop(state, isDark) {
  const cardBg = isDark ? '#000000' : '#ffffff';
  const textPrimary = isDark ? 'text-white' : 'text-zinc-900';
  const textSecondary = 'text-zinc-500';
  const border = isDark ? 'border-zinc-800' : 'border-zinc-200';

  const avatarHtml = avatarMarkup(state.avatar, isDark);

  return `
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:900px; height:600px; font-family:${state.fontFamily}; border-color:${isDark ? '#262626' : '#dbdbdb'}; background:${cardBg};">
      <div class="flex-1 h-full flex items-center justify-center shrink-0" style="background:${isDark ? '#050505' : '#fafafa'}; border-right:1px solid ${isDark ? '#262626' : '#dbdbdb'};">
        <div class="w-full h-full flex items-center justify-center" style="${state.chatBg ? `background-image:url(${state.chatBg});background-size:cover;background-position:center;` : ''}">
          ${state.chatBg ? '' : `<span class="text-3xl text-zinc-500">📷 Photo</span>`}
        </div>
      </div>
      <div class="w-[360px] shrink-0 flex flex-col h-full text-left" style="background:${cardBg};">
        <div class="flex items-center gap-3 px-4 py-3 border-b shrink-0" style="border-color:${isDark ? '#262626' : '#dbdbdb'};">
          <div class="w-8 h-8 rounded-full overflow-hidden shrink-0">
            ${avatarHtml}
          </div>
          <div class="flex-1 min-w-0">
            <span id="mockup-author" class="text-[14px] font-semibold truncate ${textPrimary}">${escapeHtml(state.author)}</span>
          </div>
          <span class="text-xs font-semibold text-[#0095f6] cursor-pointer hover:text-white select-none">Follow</span>
        </div>
        <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full overflow-hidden shrink-0">
              ${avatarHtml}
            </div>
            <div>
              <span class="text-[14px] font-semibold mr-1.5 ${textPrimary}">${escapeHtml(state.author)}</span>
              <span id="mockup-message" class="text-[14px] whitespace-pre-wrap break-words ${textPrimary}">${escapeHtml(state.message)}</span>
            </div>
          </div>
          <div class="flex items-start gap-3 opacity-60">
            <div class="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white text-xs font-bold shrink-0">U</div>
            <div>
              <span class="text-[14px] font-semibold mr-1.5 ${textPrimary}">user_99</span>
              <span class="text-[14px] ${textPrimary}">This looks incredible! 🐨🚀</span>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 border-t shrink-0 flex flex-col gap-2" style="border-color:${isDark ? '#262626' : '#dbdbdb'};">
          <div class="flex items-center justify-between text-xl ${textPrimary} select-none">
            <div class="flex items-center gap-4">
              <span class="cursor-pointer">${HEART_SVG}</span>
              <span class="cursor-pointer">${REPLY_SVG}</span>
              <span class="cursor-pointer">${SHARE_SVG}</span>
            </div>
            <span class="cursor-pointer">🔖</span>
          </div>
          <div id="mockup-likes" class="text-[14px] font-semibold ${textPrimary}">142 likes</div>
          <div class="text-[10px] uppercase tracking-wider ${textSecondary}">1 hour ago</div>
        </div>
        <div class="px-4 py-3 border-t shrink-0 flex items-center gap-3" style="border-color:${isDark ? '#262626' : '#dbdbdb'};">
          <span class="text-lg">😊</span>
          <div class="flex-1 text-[14px] opacity-40">Add a comment...</div>
          <span class="text-xs font-semibold text-[#0095f6] opacity-50 cursor-pointer select-none">Post</span>
        </div>
      </div>
    </div>
  `;
}

function renderTiktokDesktop(state, isDark) {
  const cardBg = isDark ? '#121212' : '#ffffff';
  const sidebarBg = isDark ? '#121212' : '#ffffff';
  const textPrimary = isDark ? 'text-zinc-100' : 'text-zinc-900';
  const textSecondary = 'text-zinc-500';
  const border = isDark ? 'border-zinc-800' : 'border-zinc-200';

  const avatarHtml = avatarMarkup(state.avatar, isDark);

  return `
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1100px; height:750px; font-family:${state.fontFamily}; border-color:${isDark ? '#2f2f2f' : '#e3e3e3'}; background:${cardBg};">
      <div class="w-[240px] shrink-0 border-r flex flex-col p-4 gap-6 text-left" style="border-color:${isDark ? '#2f2f2f' : '#e3e3e3'}; background:${sidebarBg};">
        <div class="flex items-center gap-1.5 px-2 select-none cursor-pointer">
          <span class="text-xl">🎵</span> <span class="font-black text-xl tracking-tighter ${textPrimary}">TikTok</span>
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-white/5 font-bold text-lg cursor-pointer text-[#fe2c55]">
            <span>🏠</span> <span>For You</span>
          </div>
          <div class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-white/5 font-semibold text-lg cursor-pointer ${textPrimary}">
            <span>👥</span> <span>Following</span>
          </div>
          <div class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-white/5 font-semibold text-lg cursor-pointer ${textPrimary}">
            <span>👀</span> <span>Friends</span>
          </div>
          <div class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-white/5 font-semibold text-lg cursor-pointer ${textPrimary}">
            <span>👤</span> <span>Profile</span>
          </div>
        </div>
      </div>
      <div class="flex-1 flex items-center justify-center shrink-0" style="background:#000000; position:relative;">
        <div class="w-full h-full flex items-center justify-center" style="${state.chatBg ? `background-image:url(${state.chatBg});background-size:cover;background-position:center;` : ''}">
          ${state.chatBg ? '' : `<span class="text-4xl text-white opacity-40">${PLAY_SVG}</span>`}
        </div>
      </div>
      <div class="w-[360px] shrink-0 flex flex-col h-full text-left" style="background:${cardBg}; border-left:1px solid ${isDark ? '#2f2f2f' : '#e3e3e3'};">
        <div class="p-4 border-b flex flex-col gap-3 shrink-0" style="border-color:${isDark ? '#2f2f2f' : '#e3e3e3'};">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full overflow-hidden shrink-0">
              ${avatarHtml}
            </div>
            <div class="flex-1 min-w-0">
              <span id="mockup-author" class="font-bold text-[15px] truncate block ${textPrimary}">${escapeHtml(state.author)}</span>
              <span class="text-[13px] truncate block ${textSecondary}">@${escapeHtml(state.handle)}</span>
            </div>
            <button class="bg-[#fe2c55] text-white px-4 py-1.5 rounded font-semibold text-xs hover:bg-[#ef234c] transition-all select-none">Follow</button>
          </div>
          <div id="mockup-message" class="text-[14.5px] leading-relaxed whitespace-pre-wrap break-words ${textPrimary}">${escapeHtml(state.message)}</div>
          <div class="text-xs ${textSecondary}">🎵 original sound - ${escapeHtml(state.author)}</div>
        </div>
        <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <div class="flex items-center justify-around py-2 border-b ${border} select-none">
            <div class="flex flex-col items-center gap-0.5">
              <div class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer text-white">${HEART_SVG}</div>
              <span id="mockup-likes" class="text-xs ${textSecondary}">12.4k</span>
            </div>
            <div class="flex flex-col items-center gap-0.5">
              <div class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer text-white">${REPLY_SVG}</div>
              <span id="mockup-replies" class="text-xs ${textSecondary}">241</span>
            </div>
            <div class="flex flex-col items-center gap-0.5">
              <div class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer text-white">${SHARE_SVG}</div>
              <span class="text-xs ${textSecondary}">Share</span>
            </div>
          </div>
          <div class="flex-1 flex flex-col gap-3">
            <h4 class="text-xs font-bold uppercase tracking-wider ${textSecondary}">Comments</h4>
            <div class="flex items-start gap-3 opacity-60">
              <div class="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white text-xs font-bold shrink-0">U</div>
              <div>
                <span class="text-xs font-semibold mr-1.5 ${textPrimary}">user_one</span>
                <p class="text-[13px] ${textPrimary}">Awesome video! 🐨🐨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMessengerDesktop(state, isDark) {
  const cardBg = isDark ? '#181818' : '#ffffff';
  const sidebarHeaderBg = isDark ? '#1c1c1e' : '#ffffff';
  const chatListActiveBg = isDark ? '#2e2e2e' : '#f0f2f5';
  const borderCol = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const secondaryText = isDark ? '#aebac1' : '#65676b';
  const primaryText = isDark ? '#ffffff' : '#050505';

  const avatarHtml = avatarMarkup(state.avatar, isDark);

  return `
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1000px; height:700px; font-family:${state.fontFamily}; border-color:${borderCol}; background:${cardBg}; color:${primaryText};">
      <div class="w-[320px] flex flex-col shrink-0 border-r" style="border-color:${borderCol}; background:${cardBg};">
        <div class="h-[60px] shrink-0 flex items-center justify-between px-4 text-left" style="background:${sidebarHeaderBg};">
          <span class="text-xl font-bold ${primaryText}">Chats</span>
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center cursor-pointer select-none">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </div>
          </div>
        </div>
        <div class="p-2 shrink-0">
          <div class="flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs" style="background:${isDark ? '#2e2e2e' : '#f0f2f5'}; color:${secondaryText};">
            <span>🔍</span> <span class="opacity-70">Search Messenger</span>
          </div>
        </div>
        <div class="flex-1 overflow-y-auto flex flex-col text-left">
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none" style="background:${chatListActiveBg};">
            <div class="w-11 h-11 rounded-full overflow-hidden shrink-0">
              ${avatarHtml}
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span id="mockup-author" class="font-semibold text-[15px] truncate" style="color:${primaryText};">${escapeHtml(state.author)}</span>
                <span class="text-[12px] shrink-0" style="color:${secondaryText};">${escapeHtml(state.timestamp)}</span>
              </div>
              <div class="flex items-center gap-1 mt-0.5">
                <span id="mockup-message-preview" class="text-[13px] truncate flex-1" style="color:${secondaryText};">${escapeHtml(state.message)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col min-w-0 text-left">
        <div class="h-[60px] shrink-0 flex items-center justify-between px-4 border-b" style="border-color:${borderCol}; background:${sidebarHeaderBg};">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-full overflow-hidden shrink-0">
              ${avatarHtml}
            </div>
            <div class="min-w-0">
              <div id="mockup-author-header" class="font-bold text-[15.5px] truncate" style="color:${primaryText};">${escapeHtml(state.author)}</div>
              <div class="text-[12px] truncate" style="color:${secondaryText};">Active 1m ago</div>
            </div>
          </div>
          <div class="flex items-center gap-5" style="color:#0084ff;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </div>
        </div>
        <div id="messenger-chat-container" class="flex-1 p-6 overflow-y-auto flex flex-col justify-end" style="background:var(--chat-bg, ${isDark ? '#1a1a2e' : '#f0f2f5'}); ${state.chatBg ? `background-image:url(${state.chatBg});background-size:cover` : ''}">
          <div class="flex justify-end">
            <div class="max-w-[70%] rounded-2xl px-4 py-2" style="background:#0084ff;">
              <p id="mockup-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${escapeHtml(state.message)}</p>
              <div class="flex items-center justify-end gap-1 mt-0.5">
                <span class="text-[11px] text-[#ffffffcc]">${escapeHtml(state.timestamp)}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="h-[60px] shrink-0 flex items-center gap-3 px-4 py-2 border-t" style="border-color:${borderCol}; background:${sidebarHeaderBg};">
          <div class="flex-1 rounded-full px-4 py-2.5 text-[15px] bg-[#f0f2f5] text-zinc-400" style="background:${isDark ? '#2e2e2e' : '#f0f2f5'}; color:${isDark ? '#ffffff' : '#000000'};">
            <span class="opacity-50">Aa</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0084ff" stroke-width="2.5" stroke-linecap="round"><polygon points="22 2 11 13 22 2"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </div>
      </div>
    </div>
  `;
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
