const CHECK_SVG = `<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffcc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#ffffffcc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/></svg>`;

import { escapeHtml } from '../i18n.js';

export function render(state) {
  return `
    <div id="mockup-card"
      class="bg-[#0f0f0f] rounded-2xl shadow-2xl shadow-black/25 max-w-sm w-full mx-auto overflow-hidden ring-1 ring-white/[4%]"
      style="padding: ${state.padding}px">
      <div class="flex justify-end">
        <div class="max-w-[75%] rounded-2xl px-3.5 py-2 bg-[#8774e1]">
          <p id="tg-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${escapeHtml(state.message)}</p>
          <div class="flex items-center justify-end gap-1 mt-0.5">
            <span id="tg-time" class="text-[11px] text-[#ffffffcc]">${escapeHtml(state.timestamp)}</span>
            <span id="tg-status" class="inline-flex">${CHECK_SVG}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function sync(state) {
  byId('tg-message', (el) => { el.textContent = state.message; });
  byId('tg-time', (el) => { el.textContent = state.timestamp; });
  const card = document.getElementById('mockup-card');
  if (card) card.style.padding = `${state.padding}px`;
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
