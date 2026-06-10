const PLACEHOLDER_INITIALS = '?';

function avatarMarkup(src, theme) {
  const isDark = theme === 'dark';
  if (src) {
    return `<img id="mockup-avatar" src="${src}" class="w-full h-full rounded-full object-cover" />`;
  }
  const bg = isDark ? 'from-zinc-600 to-zinc-800' : 'from-sky-400 to-indigo-500';
  return `<div id="mockup-avatar" class="w-full h-full rounded-full bg-gradient-to-br ${bg} flex items-center justify-center text-white text-sm font-bold">${PLACEHOLDER_INITIALS}</div>`;
}

export function render(state) {
  const isDark = state.mockupTheme === 'dark';
  const cardBg = isDark ? 'bg-zinc-900' : 'bg-white';
  const textPrimary = isDark ? 'text-zinc-100' : 'text-zinc-900';
  const textSecondary = isDark ? 'text-zinc-400' : 'text-zinc-500';
  const textBody = isDark ? 'text-zinc-300' : 'text-zinc-800';
  const mediaBg = isDark ? 'bg-zinc-800' : 'bg-zinc-100';
  const mediaText = isDark ? 'text-zinc-600' : 'text-zinc-400';

  const time = new Intl.DateTimeFormat('de-DE', {
    hour: '2-digit', minute: '2-digit',
    day: '2-digit', month: 'short', year: 'numeric',
  }).format(new Date());

  return `
    <div id="mockup-card"
      class="${cardBg} rounded-2xl shadow-2xl shadow-black/20 max-w-md w-full mx-auto overflow-hidden ring-1 ring-white/[6%]"
      style="padding: ${state.padding}px">
      <div class="flex items-start gap-3">
        <div class="w-12 h-12 rounded-full shrink-0 overflow-hidden">
          ${avatarMarkup(state.avatar, state.mockupTheme)}
        </div>
        <div class="flex-1 min-w-0">
          <p id="mockup-author" class="text-[15px] font-bold ${textPrimary} leading-tight truncate">${state.author}</p>
          <p class="flex items-center gap-1 text-sm ${textSecondary} leading-tight">
            <span id="mockup-handle" class="truncate">@${state.handle}</span>
            <span class="shrink-0">· 1h</span>
          </p>
        </div>
      </div>
      <p id="mockup-message" class="mt-3 text-[15px] ${textBody} leading-relaxed whitespace-pre-wrap break-words">${state.message}</p>
      <div class="mt-3 h-48 rounded-xl ${mediaBg} flex items-center justify-center ${mediaText} text-sm">
        📷 Media placeholder
      </div>
      <div class="mt-3 flex items-center gap-6 text-sm ${textSecondary}">
        <span>♥ <span id="mockup-likes">12</span></span>
        <span>↻ <span id="mockup-retweets">3</span></span>
        <span>✎ <span id="mockup-replies">1</span></span>
      </div>
      <p class="mt-2 text-[13px] ${textSecondary}">${time}</p>
    </div>
  `;
}

export function sync(state) {
  const isDark = state.mockupTheme === 'dark';

  byId('mockup-author', (el) => { el.textContent = state.author; });
  byId('mockup-handle', (el) => { el.textContent = `@${state.handle}`; });
  byId('mockup-message', (el) => { el.textContent = state.message; });

  const avatarSlot = document.getElementById('mockup-avatar');
  if (avatarSlot) {
    const parent = avatarSlot.parentElement;
    if (state.avatar) {
      const img = document.createElement('img');
      img.id = 'mockup-avatar';
      img.src = state.avatar;
      img.className = 'w-full h-full rounded-full object-cover';
      avatarSlot.replaceWith(img);
    } else {
      const div = document.createElement('div');
      div.id = 'mockup-avatar';
      const bg = isDark ? 'from-zinc-600 to-zinc-800' : 'from-sky-400 to-indigo-500';
      div.className = `w-full h-full rounded-full bg-gradient-to-br ${bg} flex items-center justify-center text-white text-sm font-bold`;
      div.textContent = PLACEHOLDER_INITIALS;
      avatarSlot.replaceWith(div);
    }
  }

  const card = document.getElementById('mockup-card');
  if (card) {
    card.style.padding = `${state.padding}px`;
  }
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
