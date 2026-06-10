const STATUS_SVG = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <circle cx="8" cy="8" r="7" stroke="#ffffffcc" stroke-width="1.2"/>
  <circle cx="8" cy="8" r="4.5" stroke="#ffffffcc" stroke-width="1.2"/>
  <path d="M5.5 8L7.5 10L10.5 5.5" stroke="#ffffffcc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export function render(state) {
  return `
    <div id="mockup-card"
      class="bg-[#121212] rounded-2xl shadow-2xl shadow-black/25 max-w-sm w-full mx-auto overflow-hidden ring-1 ring-white/[4%]"
      style="padding: ${state.padding}px">
      <div class="flex justify-end">
        <div class="max-w-[75%] rounded-[18px] px-3.5 py-2.5 bg-[#2c6bed]">
          <p id="sg-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${state.message}</p>
          <div class="flex items-center justify-end gap-1 mt-0.5">
            <span id="sg-time" class="text-[11px] text-[#ffffffcc]">${state.timestamp}</span>
            <span id="sg-status" class="inline-flex">${STATUS_SVG}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function sync(state) {
  byId('sg-message', (el) => { el.textContent = state.message; });
  byId('sg-time', (el) => { el.textContent = state.timestamp; });
  const card = document.getElementById('mockup-card');
  if (card) card.style.padding = `${state.padding}px`;
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
