import { t } from './i18n.js';

const LS_KEY = 'koalasnap_tutorial_completed';

const STEPS = [
  { target: 'app-library', key: 'tutorial.step1' },
  { target: 'settings-panel', key: 'tutorial.step2' },
  { target: 'canvas-area', key: 'tutorial.step3' },
  { target: 'bottom-bar', key: 'tutorial.step4' },
  { target: 'btn-topbar-export', key: 'tutorial.step5' },
];

let _step = 0;
let _active = false;
let _timeoutId = null;

/* ------------------------------------------------------------------ */
/*  Public API                                                         */
/* ------------------------------------------------------------------ */

export function isCompleted() {
  return localStorage.getItem(LS_KEY) === 'true';
}

export function isTutorialActive() {
  return _active;
}

export function startTutorial() {
  if (_active) endTutorial();
  _step = 0;
  _active = true;
  const overlay = getOrCreateOverlay();
  overlay.classList.remove('hidden');
  overlay.style.pointerEvents = 'auto';
  highlightStep(0);
  document.addEventListener('keydown', _onKeydown);
}

function _onKeydown(e) {
  if (e.key === 'Escape') endTutorial();
}

export function endTutorial() {
  _active = false;
  if (_timeoutId) {
    clearTimeout(_timeoutId);
    _timeoutId = null;
  }
  removeHighlight(_step);
  const overlay = document.getElementById('tutorial-overlay');
  if (overlay) {
    overlay.classList.add('hidden');
    overlay.style.pointerEvents = '';
  }
  localStorage.setItem(LS_KEY, 'true');
  document.removeEventListener('keydown', _onKeydown);
}

export function nextStep() {
  removeHighlight(_step);
  _step++;
  if (_step >= STEPS.length) {
    endTutorial();
    return;
  }
  highlightStep(_step);
}

export function prevStep() {
  removeHighlight(_step);
  _step = Math.max(0, _step - 1);
  highlightStep(_step);
}

export function reapplyStep() {
  if (!_active) return;
  removeHighlight(_step);
  highlightStep(_step);
}

/* ------------------------------------------------------------------ */
/*  Overlay                                                            */
/* ------------------------------------------------------------------ */

function getOrCreateOverlay() {
  let el = document.getElementById('tutorial-overlay');
  if (!el) {
    el = document.createElement('div');
    el.id = 'tutorial-overlay';
    el.className = 'fixed inset-0 bg-black/60 z-40 hidden';
    document.body.appendChild(el);
  }
  return el;
}

/* ------------------------------------------------------------------ */
/*  Step Highlight                                                     */
/* ------------------------------------------------------------------ */

function highlightStep(index) {
  if (_timeoutId) {
    clearTimeout(_timeoutId);
    _timeoutId = null;
  }

  const step = STEPS[index];
  if (!step) return;

  const el = document.getElementById(step.target);
  if (!el) return;

  el.classList.add('tutorial-highlight');
  el.style.zIndex = '50';

  el.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const rect = el.getBoundingClientRect();
  _timeoutId = setTimeout(() => {
    showTooltip(index, rect);
    _timeoutId = null;
  }, 400);
}

function removeHighlight(index) {
  if (_timeoutId) {
    clearTimeout(_timeoutId);
    _timeoutId = null;
  }

  const step = STEPS[index];
  if (!step) return;

  const el = document.getElementById(step.target);
  if (el) {
    el.classList.remove('tutorial-highlight');
    el.style.zIndex = '';
  }

  const tooltip = document.getElementById('tutorial-tooltip');
  if (tooltip) tooltip.remove();
}

/* ------------------------------------------------------------------ */
/*  Tooltip                                                            */
/* ------------------------------------------------------------------ */

function showTooltip(index, targetRect) {
  const old = document.getElementById('tutorial-tooltip');
  if (old) old.remove();

  const total = STEPS.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const tooltip = document.createElement('div');
  tooltip.id = 'tutorial-tooltip';
  tooltip.className =
    'fixed z-50 w-[320px] rounded-2xl border border-white/[10%] bg-[#1a1714]/95 backdrop-blur-2xl p-4 shadow-2xl shadow-black/50 opacity-0 transition-opacity duration-200';

  tooltip.innerHTML = `
    <p class="text-sm text-zinc-200 leading-relaxed mb-4">${t(stepKey(index))}</p>
    <div class="flex items-center justify-between">
      <span class="text-xs text-zinc-500">${index + 1} ${t('tutorial.of')} ${total}</span>
      <div class="flex items-center gap-2">
        ${isFirst ? '' : `<button id="tut-prev" class="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all">${t('tutorial.back')}</button>`}
        <button id="tut-next" class="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#f97316] hover:bg-[#ea580c] active:scale-[0.97] transition-all">${isLast ? t('tutorial.done') : t('tutorial.next')}</button>
      </div>
    </div>
    <button id="tut-skip" class="mt-2 text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors">${t('tutorial.skip')}</button>
  `;

  document.body.appendChild(tooltip);

  positionTooltip(tooltip, targetRect);

  requestAnimationFrame(() => {
    tooltip.classList.remove('opacity-0');
  });

  bindTooltipEvents(index);
}

function stepKey(index) {
  return STEPS[index]?.key || '';
}

function positionTooltip(tooltip, targetRect) {
  const gap = 12;
  const viewportPad = 16;
  const tw = tooltip.offsetWidth || 320;
  const th = tooltip.offsetHeight || 160;

  const maxX = window.innerWidth - tw - viewportPad;
  const maxY = window.innerHeight - th - viewportPad;

  const centerX = targetRect.left + targetRect.width / 2;
  let left = Math.max(viewportPad, Math.min(centerX - tw / 2, maxX));

  let top = targetRect.bottom + gap;

  if (top + th > window.innerHeight - viewportPad) {
    top = targetRect.top - th - gap;
  }

  if (top < viewportPad) {
    top = viewportPad;
    left = Math.min(targetRect.right + gap, maxX);
    left = Math.max(viewportPad, left);
  }

  /* Finale Safety-Clamp */
  left = Math.max(viewportPad, Math.min(left, maxX));
  top = Math.max(viewportPad, Math.min(top, maxY));

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

/* ------------------------------------------------------------------ */
/*  Event Binding                                                      */
/* ------------------------------------------------------------------ */

function bindTooltipEvents(index) {
  const nextBtn = document.getElementById('tut-next');
  if (nextBtn) nextBtn.onclick = () => (index === STEPS.length - 1 ? endTutorial() : nextStep());

  const prevBtn = document.getElementById('tut-prev');
  if (prevBtn) prevBtn.onclick = () => prevStep();

  const skipBtn = document.getElementById('tut-skip');
  if (skipBtn) skipBtn.onclick = () => endTutorial();
}
