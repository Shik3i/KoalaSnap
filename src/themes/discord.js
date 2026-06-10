export function render(state) {
  const avatarHtml = state.avatar
    ? `<img id="discord-avatar" src="${state.avatar}" class="w-full h-full rounded-full object-cover" />`
    : `<div id="discord-avatar" class="w-full h-full rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold">?</div>`;

  return `
    <div id="mockup-card"
      class="bg-[#313338] rounded-2xl shadow-2xl shadow-black/25 max-w-xl w-full mx-auto overflow-hidden ring-1 ring-white/[4%]"
      style="padding: ${state.padding}px">
      <div class="flex items-start gap-4 px-4 py-[3px] rounded-lg -mx-4 -my-[3px] bg-white/[1%]">
        <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-0.5">
          ${avatarHtml}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline gap-2">
            <span id="discord-username"
              class="font-medium text-[16px] leading-tight truncate max-w-[280px]"
              style="color: ${state.roleColor}">${state.username}</span>
            <span id="discord-timestamp" class="text-[#949ba4] text-xs leading-tight shrink-0">${state.timestamp}</span>
          </div>
          <div id="discord-message"
            class="text-[#dbdee1] text-[16px]/[1.4] mt-0.5 whitespace-pre-wrap break-words">${state.message}</div>
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
      img.className = 'w-full h-full rounded-full object-cover';
      slot.replaceWith(img);
    } else {
      const div = document.createElement('div');
      div.id = 'discord-avatar';
      div.className = 'w-full h-full rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold';
      div.textContent = '?';
      slot.replaceWith(div);
    }
  }

  const card = document.getElementById('mockup-card');
  if (card) card.style.padding = `${state.padding}px`;
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
