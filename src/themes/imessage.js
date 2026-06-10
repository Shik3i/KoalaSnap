export function render(state) {
  return `
    <div id="mockup-card"
      class="bg-[#000000] rounded-2xl shadow-2xl shadow-black/30 max-w-sm w-full mx-auto overflow-hidden ring-1 ring-white/[4%]"
      style="padding: ${state.padding}px">
      <div class="flex justify-end">
        <div class="max-w-[78%]">
          <p id="im-time" class="text-[11px] text-[#8e8e93] text-right mb-1">${state.timestamp}</p>
          <div class="relative">
            <div class="rounded-3xl px-4 py-2.5 bg-gradient-to-br from-[#007aff] to-[#0a84ff]">
              <p id="im-message" class="text-[#ffffff] text-[16px]/[1.4] whitespace-pre-wrap break-words">${state.message}</p>
            </div>
            <div class="absolute -bottom-[6px] -right-[6px] w-3 h-3 bg-[#0a84ff] rounded-full"></div>
          </div>
          <p class="text-[11px] text-[#8e8e93] mt-1.5 text-right">Delivered</p>
        </div>
      </div>
    </div>
  `;
}

export function sync(state) {
  byId('im-message', (el) => { el.textContent = state.message; });
  byId('im-time', (el) => { el.textContent = state.timestamp; });
  const card = document.getElementById('mockup-card');
  if (card) card.style.padding = `${state.padding}px`;
}

function byId(id, fn) {
  const el = document.getElementById(id);
  if (el) fn(el);
}
