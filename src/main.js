import { store } from './store.js';
import { t, currentLocale, escapeHtml } from './i18n.js';
import { compressAvatar, releaseAvatar } from './avatar.js';
import { startTutorial, isCompleted, isTutorialActive, reapplyStep } from './tutorial.js';
import { render as renderSocialPost, sync as syncSocialPost } from './themes/social-post.js';
import { render as renderDiscord, sync as syncDiscord } from './themes/discord.js';
import { render as renderWhatsApp, sync as syncWhatsApp } from './themes/whatsapp.js';
import { render as renderTelegram, sync as syncTelegram } from './themes/telegram.js';
import { render as renderSignal, sync as syncSignal } from './themes/signal.js';
import { render as renderIMessage, sync as syncIMessage } from './themes/imessage.js';

/* ------------------------------------------------------------------ */
/*  Theme registry                                                     */
/* ------------------------------------------------------------------ */
const themes = {
  'social-post': { render: renderSocialPost, sync: syncSocialPost },
  'messenger':   { render: renderSocialPost, sync: syncSocialPost },
  'instagram':   { render: renderSocialPost, sync: syncSocialPost },
  'twitter':     { render: renderSocialPost, sync: syncSocialPost },
  'tiktok':      { render: renderSocialPost, sync: syncSocialPost },
  'discord':     { render: renderDiscord, sync: syncDiscord },
  'whatsapp':    { render: renderWhatsApp, sync: syncWhatsApp },
  'telegram':    { render: renderTelegram, sync: syncTelegram },
  'signal':      { render: renderSignal, sync: syncSignal },
  'imessage':    { render: renderIMessage, sync: syncIMessage },
};
let currentTheme = store.get('theme');
let _syncing = false;
let _isExporting = false;

/* ------------------------------------------------------------------ */
/*  App-liste für die Library                                          */
/* ------------------------------------------------------------------ */

function themeLabel() {
  const map = {
    'social-post': t('sidebar.socialPost'),
    'messenger': t('sidebar.socialPost'),
    'instagram': t('sidebar.socialPost'),
    'twitter': t('sidebar.socialPost'),
    'tiktok': t('sidebar.socialPost'),
    'discord': t('sidebar.discord'),
    'whatsapp': 'WhatsApp',
    'telegram': 'Telegram',
    'signal': 'Signal',
    'imessage': 'iMessage',
  };
  return map[currentTheme] || currentTheme;
}

const GRADIENT_PRESETS = [
  { label: 'Midnight', value: 'from-slate-900 to-indigo-950' },
  { label: 'Sky',      value: 'from-sky-400 to-indigo-600' },
  { label: 'Rose',     value: 'from-rose-400 to-orange-600' },
  { label: 'Emerald',  value: 'from-emerald-400 to-cyan-600' },
  { label: 'Amber',    value: 'from-amber-400 to-red-600' },
  { label: 'Violet',   value: 'from-violet-400 to-fuchsia-600' },
  { label: 'Charcoal', value: 'from-zinc-800 to-zinc-950' },
];
const GRADIENT_COLORS = {
  'from-slate-900 to-indigo-950':   ['#050508', '#121020'],
  'from-sky-400 to-indigo-600':     ['#38bdf8', '#4f46e5'],
  'from-rose-400 to-orange-600':    ['#fb7185', '#ea580c'],
  'from-emerald-400 to-cyan-600':   ['#34d399', '#0891b2'],
  'from-amber-400 to-red-600':      ['#fbbf24', '#dc2626'],
  'from-violet-400 to-fuchsia-600': ['#a78bfa', '#c026d3'],
  'from-zinc-800 to-zinc-950':      ['#27272a', '#09090b'],
};

const CHAT_BG_PRESETS = [
  { label: 'Default',  value: '',                    colors: null },
  { label: 'Warm',     value: '#efeae2',              colors: null },
  { label: 'Cool',     value: '#eef2f6',              colors: null },
  { label: 'Dark',     value: '#0b141a',              colors: null },
  { label: 'Deep',     value: '#101214',              colors: null },
  { label: 'Rose',     value: 'linear-gradient(135deg,#fce4ec,#f8bbd0)', colors: null },
  { label: 'Sky',      value: 'linear-gradient(135deg,#e3f2fd,#bbdefb)', colors: null },
  { label: 'Mint',     value: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)', colors: null },
  { label: 'Lavender', value: 'linear-gradient(135deg,#f3e5f5,#e1bee7)', colors: null },
];

/* ------------------------------------------------------------------ */
/*  Brand SVG-Icons                                                    */
/* ------------------------------------------------------------------ */
const APPS = [
  { id: 'whatsapp',  theme: 'whatsapp',  name: 'WhatsApp',  tag: 'chat',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>` },
  { id: 'telegram',  theme: 'telegram',  name: 'Telegram',  tag: 'chat',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0m4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635"/></svg>` },
  { id: 'signal',    theme: 'signal',    name: 'Signal',    tag: 'chat',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0l-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0l-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0l-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002l-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213l-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24l-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125"/></svg>` },
  { id: 'messenger', theme: 'messenger', name: 'Messenger', tag: 'chat',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13"/></svg>` },
  { id: 'imessage',  theme: 'imessage',  name: 'iMessage',  tag: 'chat',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.285 0A5.273 5.273 0 0 0 0 5.285v13.43A5.273 5.273 0 0 0 5.285 24h13.43A5.273 5.273 0 0 0 24 18.715V5.285A5.273 5.273 0 0 0 18.715 0ZM12 4.154a8.809 7.337 0 0 1 8.809 7.338A8.809 7.337 0 0 1 12 18.828a8.809 7.337 0 0 1-2.492-.303A8.656 7.337 0 0 1 5.93 19.93a9.929 7.337 0 0 0 1.54-2.155 8.809 7.337 0 0 1-4.279-6.283A8.809 7.337 0 0 1 12 4.154"/></svg>` },
  { id: 'instagram', theme: 'instagram', name: 'Instagram', tag: 'social',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>` },
  { id: 'twitter',   theme: 'twitter',   name: 'X',         tag: 'social',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>` },
  { id: 'tiktok',    theme: 'tiktok',    name: 'TikTok',    tag: 'social',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07"/></svg>` },
  { id: 'discord',   theme: 'discord',   name: 'Discord',   tag: 'chat',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189"/></svg>` },
];

/* ------------------------------------------------------------------ */
/*  SVG-Icons                                                          */
/* ------------------------------------------------------------------ */
const SVG = {
  koala: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="8" ry="7.5"/><circle cx="7" cy="5" r="4"/><circle cx="17" cy="5" r="4"/><circle cx="9" cy="11" r="1.2" fill="#0d0a07"/><circle cx="15" cy="11" r="1.2" fill="#0d0a07"/><ellipse cx="12" cy="16" rx="2.5" ry="1.2"/></svg>`,

  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  spinner: `<svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,

  chevronDown: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  github: `<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`,

  sidebarToggle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>`,
  undo: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>`,
  redo: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
  clipboard: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
  link: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  folder: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  zoomIn: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  zoomOut: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  dockRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,
  dockBottom: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="15" x2="21" y2="15"/></svg>`,
  mobile: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  desktop: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
};

const LANG = currentLocale();
const LANG_LABELS = { de: 'Deutsch', en: 'English', es: 'Español' };

function flagEmoji(locale) {
  if (locale === 'de') return '🇩🇪';
  if (locale === 'en') return '🇬🇧';
  if (locale === 'es') return '🇪🇸';
  return '';
}

/* ------------------------------------------------------------------ */
/*  Layout-Komponenten                                                 */
/* ------------------------------------------------------------------ */
function renderTopbar(state) {
  const sidebarOpen = store.getSidebarOpen();
  return `
    <header class="h-14 shrink-0 flex items-center justify-between px-5 border-b border-white/[5%] bg-[#0d0a07]/80 backdrop-blur-xl relative z-50">
      <div class="flex items-center gap-3">
        <div class="text-zinc-100">${SVG.koala}</div>
        <span class="text-sm font-bold tracking-tight hidden sm:inline">${t('app.name')}</span>
        <button id="btn-sidebar-toggle" aria-label="${t('topbar.toggleSidebar')}"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all ml-2">
          ${SVG.sidebarToggle}
        </button>
      </div>
      <div class="flex items-center gap-1.5">
        <button id="btn-undo" aria-label="${t('topbar.undo')}"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all disabled:opacity-30 disabled:pointer-events-none"
          ${store.canUndo() ? '' : 'disabled'}>
          ${SVG.undo}
        </button>
        <button id="btn-redo" aria-label="${t('topbar.redo')}"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all disabled:opacity-30 disabled:pointer-events-none"
          ${store.canRedo() ? '' : 'disabled'}>
          ${SVG.redo}
        </button>
        <div class="relative flex" id="export-dropdown-container">
          <button id="btn-topbar-export" aria-label="${t('topbar.export')}"
            class="flex items-center gap-1.5 bg-[#f97316] pl-3 pr-1.5 h-7 text-xs font-semibold text-white hover:bg-[#ea580c] active:scale-[0.97] transition-all disabled:opacity-60 disabled:pointer-events-none rounded-l-full">
            <span id="btn-export-icon">${SVG.download}</span>
            <span id="btn-export-label">${t('topbar.export')}</span>
          </button>
          <button id="btn-export-chevron" aria-label="${t('topbar.more')}"
            class="flex items-center bg-[#f97316] pl-1.5 pr-2.5 h-7 text-white hover:bg-[#ea580c] active:scale-[0.97] transition-all rounded-r-full border-l border-orange-500/30">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div id="export-dropdown" class="absolute right-0 top-full mt-1 z-50 hidden min-w-[200px] rounded-xl border border-white/10 bg-[#1a1714]/95 backdrop-blur-2xl py-1 shadow-2xl shadow-black/50">
            <button data-export-action="png" class="flex items-center gap-2.5 w-full px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-all text-left">
              ${SVG.download} <span>${t('topbar.exportPng')}</span>
            </button>
            <button data-export-action="clipboard" class="flex items-center gap-2.5 w-full px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-all text-left">
              ${SVG.clipboard} <span>${t('topbar.exportClipboard')}</span>
            </button>
            <button data-export-action="share" class="flex items-center gap-2.5 w-full px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-all text-left">
              ${SVG.link} <span>${t('topbar.exportShare')}</span>
            </button>
          </div>
        </div>
        <button id="btn-start-tour" aria-label="${t('tutorial.restart')}"
          class="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-all mr-1">${t('tutorial.restart')}</button>
        <a href="https://github.com/Shik3i/KoalaSnap" target="_blank" rel="noopener noreferrer"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all"
          aria-label="GitHub">
          ${SVG.github}
        </a>
        <div class="relative flex" id="lang-switcher">
          <button id="lang-btn"
            class="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-2.5 py-1.5 text-xs
                   text-zinc-400 hover:text-zinc-200 hover:border-white/20 outline-0 transition-all cursor-pointer">
            <span class="font-flags text-sm shrink-0 leading-none">${flagEmoji(LANG)}</span>
            <span class="text-[10px] font-semibold leading-none">${LANG.toUpperCase()}</span>
            <span class="text-zinc-500">${SVG.chevronDown}</span>
          </button>
          <div id="lang-dropdown" class="hidden absolute right-0 top-full mt-1.5 z-50 min-w-[130px] rounded-xl border border-white/10 bg-[#1a1714]/95 backdrop-blur-2xl py-1 shadow-2xl shadow-black/50">
            ${['de', 'en', 'es'].map(code => `
              <button data-lang="${code}"
                class="flex items-center gap-2 w-full px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-white/5 transition-all text-left">
                <span class="font-flags text-sm shrink-0 leading-none">${flagEmoji(code)}</span>
                ${LANG_LABELS[code]}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderSidebar(state) {
  const sidebarOpen = store.getSidebarOpen();
  const locale = currentLocale();
  const prefix = locale === 'de' ? '/de' : '';
  return `
    <aside id="sidebar" class="shrink-0 h-full overflow-y-auto flex flex-col gap-4 transition-all duration-300 bg-[#0d0a07] border-white/[6%] z-40 fixed left-0 top-14 bottom-0 border-r md:relative md:top-0 md:translate-x-0
      ${sidebarOpen 
        ? 'w-[340px] p-4 opacity-100 translate-x-0' 
        : 'w-[340px] p-4 -translate-x-full md:w-0 md:p-0 md:border-r-0 md:opacity-0 md:overflow-hidden md:gap-0'
      }">
      <div id="app-library" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
        <div class="flex items-center justify-between cursor-pointer select-none" id="app-library-toggle">
          <span class="text-xs font-semibold text-zinc-300 tracking-wide">${t('sidebar.appLibrary')}</span>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-zinc-600">${APPS.length} ${t('sidebar.apps')}</span>
            <span id="app-library-chevron" class="text-zinc-500 transition-transform">${SVG.chevronDown}</span>
          </div>
        </div>
        <div id="app-library-body">
          <div class="relative mb-2">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">${SVG.search}</span>
            <input type="text" placeholder="${t('sidebar.search')}"
              class="w-full rounded-xl border border-white/[6%] bg-white/[4%] pl-9 pr-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
          </div>
          <div class="flex flex-col gap-1.5">
            ${APPS.map((app) => {
              const active = app.theme === currentTheme;
              return `
                <button data-app="${app.id}" aria-label="${app.id}"
                  class="flex items-center gap-3 rounded-xl border p-2.5 transition-all text-left
                    ${active
                      ? 'border-white/15 bg-white/[8%]'
                      : 'border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]'}">
                <div class="w-7 h-7 rounded-lg bg-white/[8%] flex items-center justify-center shrink-0 text-zinc-300">${app.svg}</div>
                  <span class="flex-1 text-xs font-medium text-white">${app.name}</span>
                  <span class="text-[9px] text-zinc-600 uppercase tracking-wider">${app.tag === 'chat' ? t('canvas.chat') : t('canvas.social')}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <div id="settings-panel" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-4">
        <span class="text-xs font-semibold text-zinc-300 tracking-wide">${t('sidebar.settings')} · <span class="text-zinc-500 font-normal normal-case">${themeLabel()}</span></span>
        ${renderSettingsFields(state)}
      </div>

      ${renderTemplateSection()}

      <div class="flex items-center gap-4 mt-auto pt-4 border-t border-white/[6%]">
        <a href="${prefix}/imprint" class="text-[10px] text-zinc-600 hover:text-zinc-200 transition-colors">${t('bottom.imprint')}</a>
        <a href="${prefix}/privacy" class="text-[10px] text-zinc-600 hover:text-zinc-200 transition-colors">${t('bottom.privacy')}</a>
      </div>
    </aside>
  `;
}

function renderTemplateSection() {
  const templates = store.listTemplates();
  return `
    <div id="templates-section" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-zinc-300 tracking-wide">${t('templates.title')}</span>
        <span class="text-[10px] text-zinc-600">${templates.length}</span>
      </div>
      <div class="flex items-center gap-2">
        <input id="input-template-name" type="text" placeholder="${t('templates.namePlaceholder')}"
          class="flex-1 rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
        <button id="btn-template-save"
          class="rounded-xl bg-[#f97316] px-3 py-2 text-xs font-semibold text-white hover:bg-[#ea580c] transition-all shrink-0">${t('templates.save')}</button>
      </div>
      <div id="template-list" class="flex flex-col gap-1 max-h-[140px] overflow-y-auto">
        ${templates.length === 0 ? `<span class="text-[10px] text-zinc-600 text-center py-2">${t('templates.empty')}</span>` :
          templates.map(name => `
            <div class="flex items-center gap-1 group" data-tmpl-name="${name}">
              <span class="flex-1 text-xs text-zinc-400 truncate">${name}</span>
              <button data-tmpl-action="load" class="hidden group-hover:inline-flex px-2 py-0.5 rounded-lg text-[10px] text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all">${t('templates.load')}</button>
              <button data-tmpl-action="delete" class="hidden group-hover:inline-flex px-2 py-0.5 rounded-lg text-[10px] text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all">${t('templates.delete')}</button>
            </div>
          `).join('')
        }
      </div>
    </div>
  `;
}

function renderSettingsFields(state) {
  const isMessenger = ['whatsapp', 'telegram', 'signal', 'imessage'].includes(currentTheme);

  let fields = '';

  if (currentTheme === 'discord') {
    fields = `
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.username')}</span>
        <input id="input-username" type="text" value="${state.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.roleColor')}</span>
        <div class="flex items-center gap-3">
          <input id="input-rolecolor" type="color" value="${state.roleColor}"
            class="w-9 h-9 rounded-xl border border-white/[6%] bg-white/[4%] p-0.5 cursor-pointer" />
          <span class="text-xs text-zinc-500 font-mono">${state.roleColor}</span>
        </div>
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.timestamp')}</span>
        <input id="input-timestamp" type="text" value="${state.timestamp}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`;
  } else if (isMessenger) {
    fields = `
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.username')}</span>
        <input id="input-username" type="text" value="${state.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.statusText')}</span>
        <input id="input-statusText" type="text" value="${state.statusText || 'online'}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.statusBarTime')}</span>
        <input id="input-statusBarTime" type="text" value="${state.statusBarTime || '09:41'}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      
      ${currentTheme === 'imessage' ? `
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">iMessage Type</span>
        <select id="input-imessageMode" class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 outline-0 focus:border-zinc-600 transition-colors">
          <option value="imessage" ${state.imessageMode === 'imessage' ? 'selected' : ''}>iMessage (Blue)</option>
          <option value="sms" ${state.imessageMode === 'sms' ? 'selected' : ''}>SMS (Green)</option>
        </select>
      </label>` : ''}

      <div class="mt-4 pt-4 border-t border-white/[6%] space-y-4">
        <label class="flex flex-col gap-1.5">
          <span class="text-[10px] uppercase tracking-wider text-zinc-500">Battery Level (${state.statusBarBattery || 100}%)</span>
          <input id="input-statusBarBattery" type="range" min="0" max="100" value="${state.statusBarBattery || 100}" class="accent-zinc-400 h-1 cursor-pointer" />
        </label>
        <label class="flex flex-col gap-1.5">
          <span class="text-[10px] uppercase tracking-wider text-zinc-500">Signal Strength (${state.statusBarSignal || 4} Bars)</span>
          <input id="input-statusBarSignal" type="range" min="1" max="4" value="${state.statusBarSignal || 4}" class="accent-zinc-400 h-1 cursor-pointer" />
        </label>
        <label class="flex items-center justify-between mt-2">
          <span class="text-xs text-zinc-300">Show WiFi</span>
          <input id="input-statusBarWifi" type="checkbox" ${state.statusBarWifi !== false ? 'checked' : ''} class="w-4 h-4 rounded border-white/[10%] bg-white/[5%]" />
        </label>
        <label class="flex items-center justify-between mt-2">
          <span class="text-xs text-zinc-300">Group Chat Mode</span>
          <input id="input-isGroup" type="checkbox" ${state.isGroup ? 'checked' : ''} class="w-4 h-4 rounded border-white/[10%] bg-white/[5%]" />
        </label>
      </div>

      <div class="flex flex-col gap-2 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.message')}</span>
        <div id="wa-message-list" class="flex flex-col gap-2">
          ${state.messages.map((msg, idx) => renderMessageRow(msg, idx)).join('')}
        </div>
        <button id="btn-add-message"
          class="w-full rounded-xl border border-dashed border-white/[8%] py-2 text-xs text-zinc-500 hover:text-zinc-300 hover:border-white/20 transition-all">+ ${t('sidebar.addMessage')}</button>
      </div>`;
  } else {
    /* Social Post (default) */
    fields = `
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.author')}</span>
        <input id="input-author" type="text" value="${state.author}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.handle')}</span>
        <input id="input-handle" type="text" value="${state.handle}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`;
  }

  return `
    <div id="settings-fields">
      ${fields}

      ${!isMessenger && currentTheme !== 'discord' ? `
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.message')}</span>
        <textarea id="input-message" rows="3"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none">${state.message}</textarea>
      </label>` : ''}

      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.avatar')}</span>
        <input id="input-avatar" type="file" accept="image/*"
          class="text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:text-zinc-200 file:font-medium hover:file:bg-white/15 transition-colors" />
      </label>
    </div>
    <div class="mt-4 pt-4 border-t border-white/[6%] space-y-4">
      ${renderSharedSettings(state)}
    </div>
  `;
}

const MSG_STATUS = [
  { id: 'read', title: 'Read', svg: `<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>` },
  { id: 'delivered', title: 'Delivered', svg: `<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>` },
  { id: 'sent', title: 'Sent', svg: `<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { id: 'unread', title: 'Unread', svg: `<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>` },
];

function renderMessageRow(msg, idx) {
  const state = store.getState();
  const isSent = msg.type === 'sent';
  const sentActive = isSent ? 'bg-white text-zinc-900' : 'bg-white/[4%] text-zinc-500 hover:text-zinc-300';
  const recvActive = !isSent ? 'bg-white text-zinc-900' : 'bg-white/[4%] text-zinc-500 hover:text-zinc-300';
  const status = msg.status || 'read';

  // Group chat sender name
  const groupSenderField = state.isGroup && !isSent ? `
    <input type="text" data-msg-idx="${idx}" data-msg-field="senderName" value="${escapeHtml(msg.senderName || '')}"
      class="w-full rounded-lg border border-white/[6%] bg-white/[4%] px-2.5 py-1.5 text-xs text-zinc-200 outline-0 focus:border-zinc-600 transition-colors mt-1.5" placeholder="Sender Name" />
  ` : '';

  // Emoji reactions
  const currentReaction = msg.reactions?.[0] || '';
  const emojis = ['👍', '❤️', '😂', '😮', '😢', '🙏'];
  const reactionsHtml = `
    <div class="flex gap-1 items-center mt-1.5 select-none">
      <span class="text-[9px] text-zinc-500 uppercase tracking-wider">React:</span>
      <div class="flex flex-wrap gap-0.5">
        ${emojis.map(e => `
          <button data-msg-idx="${idx}" data-msg-reaction="${e}"
            class="w-5.5 h-5.5 flex items-center justify-center rounded-md text-xs transition-all ${currentReaction === e ? 'bg-white/20 ring-1 ring-white/30 text-white' : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/5'}">${e}</button>
        `).join('')}
      </div>
      ${currentReaction ? `
        <button data-msg-idx="${idx}" data-msg-reaction-clear="true"
          class="text-[9px] text-red-400 hover:text-red-300 ml-1 px-1 rounded hover:bg-red-500/10 transition-all">Clear</button>
      ` : ''}
    </div>
  `;

  // Image upload
  const imageHtml = `
    <div class="flex items-center justify-between mt-2 pt-2 border-t border-white/[4%]">
      <span class="text-[9px] text-zinc-500 uppercase tracking-wider">Image Bubble:</span>
      <div class="flex items-center gap-2">
        ${msg.image ? `
          <span class="text-[10px] text-emerald-400 font-medium">Image attached</span>
          <button data-msg-idx="${idx}" data-msg-image-clear="true"
            class="text-[9px] text-red-400 hover:text-red-300 px-1.5 py-0.5 rounded bg-red-500/10 hover:bg-red-500/20 transition-all">Remove</button>
        ` : `
          <input type="file" accept="image/*" data-msg-idx="${idx}" data-msg-field="imageUpload" class="hidden" id="msg-img-upload-${idx}" />
          <label for="msg-img-upload-${idx}" class="text-[9.5px] text-zinc-300 hover:text-zinc-100 bg-white/5 border border-white/10 px-2 py-1 rounded-lg cursor-pointer transition-all">Upload Photo</label>
        `}
      </div>
    </div>
  `;

  return `
    <div draggable="true" data-msg-idx="${idx}"
      class="rounded-xl border border-white/[6%] bg-white/[3%] p-2.5 flex flex-col gap-1 cursor-grab active:cursor-grabbing">
      <textarea data-msg-idx="${idx}" rows="2"
        class="w-full rounded-lg border border-white/[6%] bg-white/[4%] px-2.5 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none" placeholder="${t('sidebar.messagePlaceholder')}">${escapeHtml(msg.text)}</textarea>
      ${groupSenderField}
      ${reactionsHtml}
      ${imageHtml}
      <div class="flex items-center gap-1.5 mt-1.5">
        <button data-msg-idx="${idx}" data-msg-type="sent"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${sentActive}">${t('sidebar.sent')}</button>
        <button data-msg-idx="${idx}" data-msg-type="received"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${recvActive}">${t('sidebar.received')}</button>
        ${isSent ? `
        <div class="flex gap-0.5 ml-1">
          ${MSG_STATUS.map(s => `
            <button data-msg-idx="${idx}" data-msg-status="${s.id}"
              class="p-1 rounded-md transition-all ${status === s.id ? 'bg-white/15 ring-1 ring-white/20' : 'text-zinc-600 hover:text-zinc-300 hover:bg-white/5'}"
              title="${s.title}">${s.svg}</button>
          `).join('')}
        </div>
        ` : ''}
        <input type="text" data-msg-idx="${idx}" data-msg-field="time" value="${escapeHtml(msg.time)}"
          class="w-14 rounded-lg border border-white/[6%] bg-white/[4%] px-2 py-1 text-[10px] text-zinc-200 text-center outline-0 focus:border-zinc-600 transition-colors" placeholder="${t('sidebar.timePlaceholder')}" />
        <button data-msg-idx="${idx}" data-msg-action="delete"
          class="p-1 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all" title="${t('sidebar.deleteMessage')}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `;
}

function renderSharedSettings(state) {
  return `
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.padding')}</span>
      <div class="flex items-center gap-3">
        <input id="input-padding" type="range" min="16" max="96" value="${state.padding}"
          class="flex-1 accent-zinc-400 h-1 cursor-pointer" />
        <span id="padding-value" class="text-xs text-zinc-500 w-8 text-right">${state.padding}</span>
      </div>
    </label>
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.background')}</span>
      <div class="flex flex-wrap gap-1.5">
        ${CHAT_BG_PRESETS.map((g) => `
          <button data-chat-bg="${g.value}" aria-label="${g.label}"
            class="w-7 h-7 rounded-lg ring-1 ring-white/[8%] hover:ring-white/30 transition-all
              ${state.chatBgGradient === g.value ? 'ring-2 ring-white scale-110' : ''}"
            style="background:${g.value || CHAT_BG_PRESETS[1].value}"></button>
        `).join('')}
      </div>
    </label>
    <label class="flex flex-col gap-1.5 mt-4">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.font')}</span>
      <select id="input-font"
        class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 outline-0 focus:border-zinc-600 transition-colors">
        <option value="system-ui" ${state.fontFamily === 'system-ui' ? 'selected' : ''}>System UI</option>
        <option value="Inter" ${state.fontFamily === 'Inter' ? 'selected' : ''}>Inter</option>
      </select>
    </label>
    <label class="flex flex-col gap-1.5 mt-4">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${t('sidebar.labels.uploadBg')}</span>
      <input id="input-chatbg" type="file" accept="image/*"
        class="text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:text-zinc-200 file:font-medium hover:file:bg-white/15 transition-colors" />
    </label>
  `;
}

function renderBottomBar(state) {
  const zoom = store.get('_zoom') || 0;
  const pos = store.get('_toolbarPos') || 'right';
  return bottomBarHtml(state, pos, zoom);
}

function bottomBarHtml(state, pos, zoom) {
  const dockIcon = pos === 'right' ? SVG.dockBottom : SVG.dockRight;
  const viewMode = state.viewMode || 'mobile';
  const viewIcon = viewMode === 'desktop' ? SVG.mobile : SVG.desktop;
  return `
    <div id="bottom-bar" class="absolute z-20 transition-all duration-300
                flex items-center gap-1 rounded-2xl bg-white/[6%] backdrop-blur-2xl
                border border-white/[8%] px-2 py-1.5 shadow-2xl shadow-black/30
                ${pos === 'right' ? 'right-4 top-1/2 -translate-y-1/2 flex-col' : 'bottom-8 left-1/2 -translate-x-1/2 flex-row'}">
      <button id="btn-toolbar-pos" aria-label="Toggle toolbar position"
        class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all" title="Toolbar position">
        ${dockIcon}
      </button>
      <span class="w-px h-4 bg-white/[6%] mx-1 ${pos === 'right' ? 'hidden' : ''}"></span>
      <span class="h-px w-4 bg-white/[6%] my-1 ${pos !== 'right' ? 'hidden' : ''}"></span>
      <button id="btn-view-mode" aria-label="Toggle view mode" class="rounded-full p-2 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 transition-all" title="Toggle Desktop/Mobile View">
        ${viewIcon}
      </button>
      <span class="w-px h-4 bg-white/[6%] mx-1 ${pos === 'right' ? 'hidden' : ''}"></span>
      <span class="h-px w-4 bg-white/[6%] my-1 ${pos !== 'right' ? 'hidden' : ''}"></span>
      <button id="btn-mockup-theme" aria-label="${t('bottom.toggleTheme')}" class="rounded-full p-2 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${t('bottom.toggleTheme')}">
        ${state.mockupTheme === 'light' ? SVG.sun : SVG.moon}
      </button>
      <span class="w-px h-4 bg-white/[6%] mx-1 ${pos === 'right' ? 'hidden' : ''}"></span>
      <span class="h-px w-4 bg-white/[6%] my-1 ${pos !== 'right' ? 'hidden' : ''}"></span>
      <button id="btn-zoom-out" aria-label="${t('bottom.zoomOut')}" class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${t('bottom.zoomOut')}">
        ${SVG.zoomOut}
      </button>
      <input id="zoom-slider" type="range" min="-50" max="100" value="${zoom}"
        class="w-20 h-1 accent-[#f97316] cursor-pointer ${pos === 'right' ? 'hidden' : ''}" />
      <button id="btn-zoom-in" aria-label="${t('bottom.zoomIn')}" class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${t('bottom.zoomIn')}">
        ${SVG.zoomIn}
      </button>
      <span id="zoom-label" class="text-[10px] text-zinc-500 w-8 text-center ${pos === 'right' ? 'hidden' : ''}">${zoom > 0 ? '+' : ''}${zoom}%</span>
    </div>
  `;
}

function updateToolbarPos(pos) {
  const bar = document.getElementById('bottom-bar');
  if (!bar) return;
  bar.classList.remove('right-4', 'top-1/2', '-translate-y-1/2', 'flex-col', 'bottom-8', 'left-1/2', '-translate-x-1/2', 'flex-row');
  if (pos === 'right') {
    bar.classList.add('right-4', 'top-1/2', '-translate-y-1/2', 'flex-col');
  } else {
    bar.classList.add('bottom-8', 'left-1/2', '-translate-x-1/2', 'flex-row');
  }
  const dockBtn = document.getElementById('btn-toolbar-pos');
  if (dockBtn) dockBtn.innerHTML = pos === 'right' ? SVG.dockBottom : SVG.dockRight;
  const isRight = pos === 'right';
  document.getElementById('zoom-slider')?.classList.toggle('hidden', isRight);
  document.getElementById('zoom-label')?.classList.toggle('hidden', isRight);
  bar.querySelectorAll('.mx-1').forEach(el => el.classList.toggle('hidden', isRight));
  bar.querySelectorAll('.my-1').forEach(el => el.classList.toggle('hidden', !isRight));
}

/* ------------------------------------------------------------------ */
/*  App-Renderer                                                       */
/* ------------------------------------------------------------------ */
function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;
  const state = store.getState();
  const sidebarOpen = store.getSidebarOpen();
  app.innerHTML = `
    ${renderTopbar(state)}
    <div id="main-area" class="flex-1 flex overflow-hidden relative">
      <div id="sidebar-overlay" class="${sidebarOpen && window.innerWidth < 768 ? 'block' : 'hidden'} fixed inset-0 z-30 bg-black/40"></div>
      ${renderSidebar(state)}
      <button id="btn-sidebar-open"
        class="${sidebarOpen ? 'hidden' : ''} absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-5 h-20 bg-[#1a1714] hover:bg-[#25211e] border border-white/10 border-l-0 rounded-r-lg transition-all cursor-pointer group">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-400 group-hover:text-zinc-200 transition-colors"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <main id="canvas" class="flex-1 relative overflow-hidden bg-[#050508]">
        <!-- Ambient animated blobs -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
          <div class="absolute -top-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-indigo-950/20 blur-[120px] animate-blob-1"></div>
          <div class="absolute -bottom-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-purple-950/15 blur-[120px] animate-blob-2"></div>
        </div>
        <div id="canvas-area" class="absolute inset-0 overflow-hidden z-10">
          <div id="mockup" class="absolute top-1/2 left-1/2 origin-center"></div>
        </div>
        ${renderBottomBar(state)}
      </main>
    </div>
  `;
  bindEvents();
  renderCurrentTheme();
  setupResizeObserver();
  const zoom = store.get('_zoom') || 0;
  applyZoom(zoom);
}

function updateUndoRedoButtons() {
  const undoBtn = document.getElementById('btn-undo');
  const redoBtn = document.getElementById('btn-redo');
  if (undoBtn) undoBtn.disabled = !store.canUndo();
  if (redoBtn) redoBtn.disabled = !store.canRedo();
}

function updateSettingsPanel(state) {
  const panel = document.getElementById('settings-panel');
  if (!panel) return;
  panel.innerHTML = `
    <span class="text-xs font-semibold text-zinc-300 tracking-wide">${t('sidebar.settings')} · <span class="text-zinc-500 font-normal normal-case">${themeLabel()}</span></span>
    ${renderSettingsFields(state)}
  `;
  bindSettingsEvents();
}

/* ------------------------------------------------------------------ */
/*  Event-Binding                                                      */
/* ------------------------------------------------------------------ */
function bindEvents() {
  bind('btn-topbar-export', 'click', () => downloadPng());
  bind('btn-export-chevron', 'click', toggleExportDropdown);
  bind('btn-sidebar-toggle', 'click', toggleSidebar);
  bind('btn-sidebar-open', 'click', toggleSidebar);
  bind('sidebar-overlay', 'click', toggleSidebar);
  bind('btn-undo', 'click', () => store.undo());
  bind('btn-redo', 'click', () => store.redo());
  bind('btn-mockup-theme', 'click', () => {
    const next = store.get('mockupTheme') === 'light' ? 'dark' : 'light';
    store.set('mockupTheme', next);
  });
  bind('btn-view-mode', 'click', () => {
    const next = store.get('viewMode') === 'desktop' ? 'mobile' : 'desktop';
    store.set('viewMode', next);
  });
  bind('lang-btn', 'click', (e) => {
    e.stopPropagation();
    document.getElementById('lang-dropdown').classList.toggle('hidden');
  });
  document.addEventListener('click', () => {
    const dd = document.getElementById('lang-dropdown');
    if (dd && !dd.classList.contains('hidden')) dd.classList.add('hidden');
  });
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.lang;
      window.location.href = val === 'en' ? '/' : `/${val}/`;
    });
  });
  bind('btn-start-tour', 'click', () => startTutorial());
  bind('btn-template-save', 'click', saveTemplate);
  bind('zoom-slider', 'input', onZoomChange);
  bind('btn-zoom-in', 'click', () => changeZoom(10));
  bind('btn-zoom-out', 'click', () => changeZoom(-10));
  bind('btn-toolbar-pos', 'click', () => {
    const next = store.get('_toolbarPos') === 'right' ? 'bottom' : 'right';
    store.set('_toolbarPos', next);
  });

  document.querySelectorAll('[data-chat-bg]').forEach((btn) => {
    btn.addEventListener('click', () => store.set('chatBgGradient', btn.dataset.chatBg));
  });

  document.querySelectorAll('[data-app]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const app = APPS.find((a) => a.id === btn.dataset.app);
      if (app) store.set('theme', app.theme);
    });
  });

  document.querySelectorAll('[data-export-action]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const action = btn.dataset.exportAction;
      closeExportDropdown();
      if (action === 'png') downloadPng();
      else if (action === 'clipboard') copyToClipboard();
      else if (action === 'share') copyShareLink();
    });
  });

  document.querySelectorAll('[data-tmpl-action]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const action = btn.dataset.tmplAction;
      const name = btn.closest('[data-tmpl-name]')?.dataset.tmplName;
      if (!name) return;
      if (action === 'load') store.loadTemplate(name);
      else if (action === 'delete') { store.deleteTemplate(name); reRenderTemplates(); }
    });
  });

  const toggleBtn = document.getElementById('app-library-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const body = document.getElementById('app-library-body');
      const chevron = document.getElementById('app-library-chevron');
      if (!body) return;
      const isHidden = body.style.display === 'none';
      body.style.display = isHidden ? '' : 'none';
      if (chevron) chevron.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  }

  /* Close export dropdown on outside click */
  document.addEventListener('click', (e) => {
    const container = document.getElementById('export-dropdown-container');
    if (container && !container.contains(e.target)) {
      closeExportDropdown();
    }
  });

  /* Keyboard shortcuts */
  document.addEventListener('keydown', (e) => {
    const isCmd = e.metaKey || e.ctrlKey;
    if (isCmd && e.key === 'z' && !e.shiftKey) {
      e.preventDefault();
      store.undo();
    }
    if (isCmd && e.key === 'z' && e.shiftKey) {
      e.preventDefault();
      store.redo();
    }
    if (isCmd && e.key === 'e') {
      e.preventDefault();
      downloadPng();
    }
  });

  /* Mouse wheel zoom on canvas */
  const canvas = document.getElementById('canvas');
  if (canvas) {
    canvas.addEventListener('wheel', (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        changeZoom(e.deltaY > 0 ? -5 : 5);
      }
    }, { passive: false });
  }

  bindSettingsEvents();
}

function bindSettingsEvents() {
  bind('input-padding', 'input', (e) => {
    store.set('padding', Number(e.target.value));
    const val = document.getElementById('padding-value');
    if (val) val.textContent = e.target.value;
  });

  bind('input-font', 'change', (e) => store.set('fontFamily', e.target.value));

  bind('input-chatbg', 'change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    if (file.size > 5 * 1024 * 1024) return;
    try {
      const url = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      store.set('chatBg', url);
    } catch { /* ignore */ }
  });

  bind('input-message', 'input', (e) => store.set('message', e.target.value));

  bind('input-avatar', 'change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    if (file.size > 5 * 1024 * 1024) return;
    try {
      const oldUrl = store.get('avatar');
      const newUrl = await compressAvatar(file);
      if (oldUrl && oldUrl.startsWith('blob:')) URL.revokeObjectURL(oldUrl);
      store.set('avatar', newUrl);
    } catch {
      store.set('avatar', null);
    }
  });

  if (['messenger', 'instagram', 'twitter', 'tiktok', 'social-post'].includes(currentTheme)) {
    bind('input-author', 'input', (e) => store.set('author', e.target.value));
    bind('input-handle', 'input', (e) => store.set('handle', e.target.value));
  } else if (currentTheme === 'discord') {
    bind('input-username', 'input', (e) => store.set('username', e.target.value));
    bind('input-rolecolor', 'input', (e) => store.set('roleColor', e.target.value));
    bind('input-timestamp', 'input', (e) => store.set('timestamp', e.target.value));
  } else if (['whatsapp', 'telegram', 'signal', 'imessage'].includes(currentTheme)) {
    bind('input-username', 'input', (e) => store.set('username', e.target.value));
    bind('input-statusText', 'input', (e) => store.set('statusText', e.target.value));
    bind('input-statusBarTime', 'input', (e) => store.set('statusBarTime', e.target.value));
    bind('input-imessageMode', 'change', (e) => store.set('imessageMode', e.target.value));
    bind('input-statusBarBattery', 'input', (e) => {
      store.set('statusBarBattery', Number(e.target.value));
      renderCurrentTheme();
    });
    bind('input-statusBarSignal', 'input', (e) => {
      store.set('statusBarSignal', Number(e.target.value));
      renderCurrentTheme();
    });
    bind('input-statusBarWifi', 'change', (e) => store.set('statusBarWifi', e.target.checked));
    bind('input-isGroup', 'change', (e) => {
      store.set('isGroup', e.target.checked);
      renderApp();
    });
    bindMessageEvents();
  }

}

function bindMessageEvents() {
  const addBtn = document.getElementById('btn-add-message');
  if (addBtn) {
    addBtn.onclick = () => {
      const msgs = [...store.get('messages')];
      msgs.push({ id: Date.now(), text: '', type: store.get('waMode') || 'sent', time: '' });
      store.set('messages', msgs);
      updateMessageList(store.getState());
    };
  }

  const list = document.getElementById('wa-message-list');
  if (!list) return;

  list.addEventListener('input', (e) => {
    const el = e.target;
    const idx = parseInt(el.dataset.msgIdx);
    if (isNaN(idx)) return;

    if (el.tagName === 'TEXTAREA') {
      const msgs = [...store.get('messages')];
      if (msgs[idx]) msgs[idx] = { ...msgs[idx], text: el.value };
      store.set('messages', msgs);
    } else if (el.dataset.msgField === 'time') {
      const msgs = [...store.get('messages')];
      if (msgs[idx]) msgs[idx] = { ...msgs[idx], time: el.value };
      store.set('messages', msgs);
    } else if (el.dataset.msgField === 'senderName') {
      const msgs = [...store.get('messages')];
      if (msgs[idx]) msgs[idx] = { ...msgs[idx], senderName: el.value };
      store.set('messages', msgs);
    }
  });

  list.addEventListener('change', async (e) => {
    const el = e.target;
    if (el.dataset.msgField === 'imageUpload') {
      const idx = parseInt(el.dataset.msgIdx);
      if (isNaN(idx)) return;
      const file = el.files?.[0];
      if (!file) return;
      try {
        const url = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        const msgs = [...store.get('messages')];
        if (msgs[idx]) msgs[idx] = { ...msgs[idx], image: url };
        store.set('messages', msgs);
        updateMessageList(store.getState());
      } catch { /* ignore */ }
    }
  });

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-msg-type], [data-msg-status], [data-msg-action], [data-msg-reaction], [data-msg-reaction-clear], [data-msg-image-clear]');
    if (!btn) return;
    const idx = parseInt(btn.dataset.msgIdx);
    if (isNaN(idx)) return;

    if (btn.dataset.msgType) {
      const msgs = [...store.get('messages')];
      if (msgs[idx]) msgs[idx] = { ...msgs[idx], type: btn.dataset.msgType };
      store.set('messages', msgs);
      updateMessageList(store.getState());
    } else if (btn.dataset.msgStatus) {
      const msgs = [...store.get('messages')];
      if (msgs[idx]) msgs[idx] = { ...msgs[idx], status: btn.dataset.msgStatus };
      store.set('messages', msgs);
      updateMessageList(store.getState());
    } else if (btn.dataset.msgReaction) {
      const msgs = [...store.get('messages')];
      if (msgs[idx]) msgs[idx] = { ...msgs[idx], reactions: [btn.dataset.msgReaction] };
      store.set('messages', msgs);
      updateMessageList(store.getState());
    } else if (btn.dataset.msgReactionClear) {
      const msgs = [...store.get('messages')];
      if (msgs[idx]) msgs[idx] = { ...msgs[idx], reactions: [] };
      store.set('messages', msgs);
      updateMessageList(store.getState());
    } else if (btn.dataset.msgImageClear) {
      const msgs = [...store.get('messages')];
      if (msgs[idx]) msgs[idx] = { ...msgs[idx], image: null };
      store.set('messages', msgs);
      updateMessageList(store.getState());
    } else if (btn.dataset.msgAction === 'delete') {
      const msgs = store.get('messages').filter((_, i) => i !== idx);
      store.set('messages', msgs);
      updateMessageList(store.getState());
    }
  });

  let dragSrcIdx = null;
  list.addEventListener('dragstart', (e) => {
    const el = e.target.closest('[draggable]');
    if (!el) return;
    dragSrcIdx = parseInt(el.dataset.msgIdx);
    el.style.opacity = '0.4';
  });
  list.addEventListener('dragend', (e) => {
    const el = e.target.closest('[draggable]');
    if (el) el.style.opacity = '';
    dragSrcIdx = null;
  });
  list.addEventListener('dragover', (e) => {
    e.preventDefault();
    const el = e.target.closest('[draggable]');
    if (el) el.style.borderColor = 'rgba(255,255,255,0.3)';
  });
  list.addEventListener('dragleave', (e) => {
    const el = e.target.closest('[draggable]');
    if (el) el.style.borderColor = '';
  });
  list.addEventListener('drop', (e) => {
    e.preventDefault();
    const el = e.target.closest('[draggable]');
    if (!el) return;
    el.style.borderColor = '';
    const dropIdx = parseInt(el.dataset.msgIdx);
    if (dragSrcIdx === null || dragSrcIdx === dropIdx) return;
    const msgs = [...store.get('messages')];
    const [moved] = msgs.splice(dragSrcIdx, 1);
    msgs.splice(dropIdx, 0, moved);
    store.set('messages', msgs);
    updateMessageList(store.getState());
  });
}

function updateMessageList(state) {
  const container = document.getElementById('wa-message-list');
  if (!container) return;
  container.innerHTML = state.messages.map((msg, idx) => renderMessageRow(msg, idx)).join('');
}

/* ------------------------------------------------------------------ */
/*  Theme: Rendering & Sync                                            */
/* ------------------------------------------------------------------ */
function renderCurrentTheme() {
  const theme = themes[currentTheme];
  if (!theme) return;
  const state = store.getState();
  const container = document.getElementById('mockup');
  if (container) container.innerHTML = theme.render(state);
  updateBackground(state);
  requestAnimationFrame(fitMockupToScreen);
}

function syncMockup(key, value, state) {
  if (_syncing) return;
  _syncing = true;
  try {
  const theme = themes[currentTheme];
  if (!theme) return;

  if (key === 'theme') {
    currentTheme = value;

    const set = getRandomDummySet();
    if (set) {
      store.mutate({
        author: set.author || '',
        handle: set.handle || '',
        username: set.username || set.author || '',
        message: set.message || '',
        timestamp: set.time || '',
        roleColor: set.roleColor || '#5865F2',
        messages: set.messages || [
          { id: 1, text: set.message || '', type: store.get('waMode') || 'sent', time: set.time || '', status: 'read' },
        ],
      });
    }

    renderCurrentTheme();
    updateSettingsPanel(store.getState());
    updateAppLibrary(value);
    if (isTutorialActive()) {
      requestAnimationFrame(() => reapplyStep());
    }
    return;
  }

  if (key === 'bgGradient') {
    updateBackground(state);
  }

  if (key === 'chatBgGradient') {
    updateBackground(state);
    return;
  }

  if (key === 'viewMode') {
    const btn = document.getElementById('btn-view-mode');
    if (btn) btn.innerHTML = value === 'desktop' ? SVG.mobile : SVG.desktop;
    renderCurrentTheme();
    fitMockupToScreen();
    return;
  }

  if (key === 'mockupTheme') {
    const btn = document.getElementById('btn-mockup-theme');
    if (btn) btn.innerHTML = value === 'light' ? SVG.sun : SVG.moon;
    renderCurrentTheme();
    return;
  }

  if (key === 'fontFamily' || key === 'chatBg') {
    renderCurrentTheme();
    return;
  }

  if (key === 'waMode') {
    return;
  }

  if (key === '_zoom') {
    applyZoom(value);
    return;
  }

  if (key === '_toolbarPos') {
    updateToolbarPos(value);
    return;
  }

  if (key === '_undo' || key === '_redo') {
    renderCurrentTheme();
    updateSettingsPanel(store.getState());
    updateUndoRedoButtons();
    return;
  }

  /* Avatar-Update: altes Image vorher freigeben */
  if (key === 'avatar') {
    const avatarId = currentTheme === 'discord' ? 'discord-avatar'
      : currentTheme === 'whatsapp' ? 'wa-avatar'
      : 'mockup-avatar';
    releaseAvatar(avatarId);
  }

  theme.sync(state);
  } finally {
    _syncing = false;
  }
}

function updateAppLibrary(activeTheme) {
  document.querySelectorAll('[data-app]').forEach((btn) => {
    const app = APPS.find((a) => a.id === btn.dataset.app);
    const isActive = app && app.theme === activeTheme;
    btn.className = `flex items-center gap-3 rounded-xl border p-2.5 transition-all text-left ${
      isActive
        ? 'border-white/15 bg-white/[8%]'
        : 'border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]'
    }`;
  });
}

/* ------------------------------------------------------------------ */
/*  Canvas-Hintergrund (Design) + Chat-Hintergrund (Settings)         */
/* ------------------------------------------------------------------ */

function updateBackground(state) {
  const canvas = document.getElementById('canvas');
  if (canvas) {
    const colors = GRADIENT_COLORS[state.bgGradient] || ['#0f172a', '#1e1b4b'];
    const dots = `radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)`;
    const grad = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
    canvas.style.background = `${dots}, ${grad}`;
    canvas.style.backgroundSize = '40px 40px, 100% 100%';
  }
  if (state.chatBgGradient) {
    document.documentElement.style.setProperty('--chat-bg', state.chatBgGradient);
  } else {
    document.documentElement.style.removeProperty('--chat-bg');
  }

  // Fix: Inline --chat-bg on the mockup card itself so that html-to-image
  // clones the CSS variable correctly inside its export iframe.
  const card = document.getElementById('mockup-card');
  if (card) {
    if (state.chatBgGradient) {
      card.style.setProperty('--chat-bg', state.chatBgGradient);
    } else {
      card.style.removeProperty('--chat-bg');
    }
  }
}

let resizeObserver = null;
function setupResizeObserver() {
  if (resizeObserver) resizeObserver.disconnect();
  const canvas = document.getElementById('canvas');
  if (canvas) {
    resizeObserver = new ResizeObserver(() => {
      fitMockupToScreen();
    });
    resizeObserver.observe(canvas);
  }
}

/* ------------------------------------------------------------------ */
/*  Auto-Scale (Figma-Trick)                                          */
/* ------------------------------------------------------------------ */
function fitMockupToScreen() {
  if (_isExporting) return;
  const canvas = document.getElementById('canvas');
  const mockup = document.getElementById('mockup');
  if (!canvas || !mockup) return;
  const rect = canvas.getBoundingClientRect();
  const card = document.getElementById('mockup-card');
  let cardWidth = 390;
  let cardHeight = 844;
  if (card) {
    cardWidth = parseInt(card.style.width) || card.offsetWidth || 390;
    cardHeight = parseInt(card.style.height) || card.offsetHeight || 844;
  }
  const baseScale = Math.min(rect.width / cardWidth, rect.height / cardHeight) * 0.8;
  const zoom = store.get('_zoom') || 0;
  const zoomScale = 1 + (zoom / 100);
  const combinedScale = baseScale * zoomScale;
  mockup.style.transform = `translate(-50%, -50%) scale(${combinedScale})`;
}

window.addEventListener('resize', fitMockupToScreen);

/* ------------------------------------------------------------------ */
/*  Export                                                             */
/* ------------------------------------------------------------------ */

/**
 * Convert blob: URLs in <img> elements to data: URLs using a canvas,
 * so html-to-image doesn't attempt a fetch() that CSP connect-src blocks.
 * Returns a restore function to put back the original src values.
 */
async function replaceBlobUrlsWithDataUrls(el) {
  const imgs = el.querySelectorAll('img');
  const saved = [];
  for (const img of imgs) {
    if (img.src && img.src.startsWith('blob:')) {
      saved.push({ img, src: img.src });
      try {
        const dataUrl = await new Promise((resolve, reject) => {
          const i = new Image();
          i.onload = () => {
            const c = document.createElement('canvas');
            c.width = i.naturalWidth;
            c.height = i.naturalHeight;
            const ctx = c.getContext('2d');
            if (!ctx) { reject(new Error('Canvas 2D not supported')); return; }
            ctx.drawImage(i, 0, 0);
            resolve(c.toDataURL('image/png'));
          };
          i.onerror = reject;
          i.src = img.src;
        });
        img.src = dataUrl;
      } catch {
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      }
    }
  }
  return () => {
    saved.forEach(({ img, src }) => { img.src = src; });
  };
}

async function downloadPng() {
  const btn = document.getElementById('btn-topbar-export');
  const icon = document.getElementById('btn-export-icon');
  const label = document.getElementById('btn-export-label');
  if (!btn || btn.disabled) return;

  _isExporting = true;
  btn.disabled = true;
  if (icon) icon.innerHTML = SVG.spinner;
  if (label) label.textContent = t('topbar.rendering');

  const el = document.getElementById('mockup-card');
  if (!el) { resetExportButton(); return; }

  const origTransform = el.style.transform;
  const origOrigin = el.style.transformOrigin;
  el.style.transform = '';
  el.style.transformOrigin = '';

  await new Promise(r => requestAnimationFrame(r));

  let restoreBlobUrls;
  try {
    restoreBlobUrls = await replaceBlobUrlsWithDataUrls(el);
    const { toPng } = await import('html-to-image');
    const dataUrl = await toPng(el, { pixelRatio: 2 });

    el.style.transform = origTransform;
    el.style.transformOrigin = origOrigin;

    const now = new Date();
    const ts = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;
    const filename = `koalasnap-${currentTheme}-${ts}.png`;

    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();

    if (icon) icon.innerHTML = SVG.check;
    if (label) label.textContent = t('topbar.exported');
    btn.classList.remove('bg-[#f97316]', 'hover:bg-[#ea580c]');
    btn.classList.add('bg-emerald-500', 'hover:bg-emerald-600');
    setTimeout(resetExportButton, 2000);
  } catch (err) {
    el.style.transform = origTransform;
    el.style.transformOrigin = origOrigin;
    console.error('Export failed:', err?.message || err, err?.stack || '');
    if (icon) icon.innerHTML = SVG.download;
    if (label) label.textContent = t('topbar.exportFailed');
    btn.disabled = false;
    setTimeout(() => {
      if (label) label.textContent = t('topbar.export');
      if (icon) icon.innerHTML = SVG.download;
    }, 2000);
  } finally {
    if (restoreBlobUrls) restoreBlobUrls();
  }

  function resetExportButton() {
    _isExporting = false;
    btn.disabled = false;
    btn.classList.remove('bg-emerald-500', 'hover:bg-emerald-600');
    btn.classList.add('bg-[#f97316]', 'hover:bg-[#ea580c]');
    if (icon) icon.innerHTML = SVG.download;
    if (label) label.textContent = t('topbar.export');
  }
}

/* ------------------------------------------------------------------ */
/*  Export Dropdown                                                    */
/* ------------------------------------------------------------------ */
function toggleExportDropdown() {
  const dd = document.getElementById('export-dropdown');
  if (!dd) return;
  const isOpen = !dd.classList.contains('hidden');
  dd.classList.toggle('hidden', isOpen);
}

function closeExportDropdown() {
  const dd = document.getElementById('export-dropdown');
  if (dd) dd.classList.add('hidden');
}

async function copyToClipboard() {
  const el = document.getElementById('mockup-card');
  if (!el) return;
  const btn = document.getElementById('btn-topbar-export');
  const icon = document.getElementById('btn-export-icon');
  const label = document.getElementById('btn-export-label');
  if (btn) btn.disabled = true;
  if (icon) icon.innerHTML = SVG.spinner;
  if (label) label.textContent = t('topbar.rendering');
  const origTransform = el.style.transform;
  const origOrigin = el.style.transformOrigin;
  el.style.transform = '';
  el.style.transformOrigin = '';
  let restoreBlobUrls;
  try {
    restoreBlobUrls = await replaceBlobUrlsWithDataUrls(el);
    const bgEls = el.querySelectorAll('[style*="background-image"]');
    const savedBg = [];
    bgEls.forEach((bgEl, i) => { savedBg[i] = bgEl.style.backgroundImage; bgEl.style.backgroundImage = 'none'; });
    await new Promise(r => requestAnimationFrame(r));
    const { toBlob } = await import('html-to-image');
    const blob = await toBlob(el, { pixelRatio: 2 });
    el.style.transform = origTransform;
    el.style.transformOrigin = origOrigin;
    bgEls.forEach((bgEl, i) => { bgEl.style.backgroundImage = savedBg[i]; });
    if (blob) {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      showToast(t('topbar.copied'));
    }
  } catch (err) {
    console.error('Clipboard copy failed:', err);
    showToast(t('topbar.exportFailed'));
  } finally {
    if (restoreBlobUrls) restoreBlobUrls();
  }
  if (btn) btn.disabled = false;
  if (icon) icon.innerHTML = SVG.download;
  if (label) label.textContent = t('topbar.export');
}

function copyShareLink() {
  const url = store.getShareUrl();
  if (!url) { showToast(t('topbar.exportFailed')); return; }
  try {
    navigator.clipboard.writeText(url);
    showToast(t('topbar.linkCopied'));
  } catch {
    showToast(t('topbar.exportFailed'));
  }
}

/* ------------------------------------------------------------------ */
/*  Toast Notification                                                 */
/* ------------------------------------------------------------------ */
function showToast(msg) {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.className = 'fixed bottom-28 left-1/2 -translate-x-1/2 z-50 rounded-full bg-zinc-800/90 backdrop-blur-xl border border-white/10 px-5 py-2.5 text-sm text-zinc-200 shadow-2xl shadow-black/30 animate-fade-in';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

/* ------------------------------------------------------------------ */
/*  Sidebar Toggle                                                     */
/* ------------------------------------------------------------------ */
function toggleSidebar() {
  const current = store.getSidebarOpen();
  const next = !current;
  store.setSidebarOpen(next);
  renderApp();
}

/* ------------------------------------------------------------------ */
/*  Zoom                                                               */
/* ------------------------------------------------------------------ */
function changeZoom(delta) {
  const current = store.get('_zoom') || 0;
  const next = Math.max(-50, Math.min(100, current + delta));
  store.set('_zoom', next);
}

function onZoomChange(e) {
  const val = parseInt(e.target.value);
  store.set('_zoom', val);
}

function applyZoom(zoom) {
  const slider = document.getElementById('zoom-slider');
  if (slider) slider.value = zoom;
  const label = document.getElementById('zoom-label');
  if (label) label.textContent = zoom > 0 ? `+${zoom}%` : `${zoom}%`;
  fitMockupToScreen();
}

function reRenderTemplates() {
  const section = document.getElementById('templates-section');
  if (!section) return;
  const parent = document.getElementById('sidebar');
  if (!parent) return;
  const newSection = document.createElement('div');
  newSection.innerHTML = renderTemplateSection();
  section.replaceWith(newSection.firstElementChild);
  /* Re-bind template buttons */
  document.querySelectorAll('[data-tmpl-action]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const action = btn.dataset.tmplAction;
      const name = btn.closest('[data-tmpl-name]')?.dataset.tmplName;
      if (!name) return;
      if (action === 'load') store.loadTemplate(name);
      else if (action === 'delete') { store.deleteTemplate(name); reRenderTemplates(); }
    });
  });
}

function saveTemplate() {
  const input = document.getElementById('input-template-name');
  if (!input || !input.value.trim()) return;
  const name = input.value.trim();
  store.saveTemplate(name);
  input.value = '';
  reRenderTemplates();
  showToast(t('templates.saved'));
}

/* ------------------------------------------------------------------ */
/*  Helfer                                                             */
/* ------------------------------------------------------------------ */
function bind(id, event, fn) {
  document.getElementById(id)?.addEventListener(event, fn);
}

function _collapseAppLibrary() {
  const body = document.getElementById('app-library-body');
  const chevron = document.getElementById('app-library-chevron');
  if (body) body.style.display = 'none';
  if (chevron) chevron.style.transform = 'rotate(180deg)';
}

function getRandomDummySet() {
  const FALLBACK_SETS = [
    { author: 'Maya', handle: '@maya_99', username: 'Maya', message: 'Hey, are you coming online tonight?', time: '7:18 PM', roleColor: '#e81224', messages: [{ text: 'Hey, are you coming online tonight?', type: 'sent', time: '7:18 PM' }, { text: 'Yeah, give me 5!', type: 'received', time: '7:20 PM' }, { text: 'Sure, take your time 🐨', type: 'sent', time: '7:21 PM' }] },
  ];
  const locale = window.__LOCALE__;
  const sets = locale?.dummySets && locale.dummySets.length > 0 ? locale.dummySets : FALLBACK_SETS;
  const set = sets[Math.floor(Math.random() * sets.length)];
  const messages = (set.messages && set.messages.length > 0)
    ? set.messages.map((m, i) => ({ id: i + 1, text: m.text, type: m.type, time: m.time, status: m.status || 'read' }))
    : [{ id: 1, text: set.message || '', type: store.get('waMode') || 'sent', time: set.time || '', status: 'read' }];
  return {
    author: set.author || '',
    handle: set.handle || '',
    username: set.username || set.author || '',
    message: set.message || messages[0]?.text || '',
    time: set.time || messages[0]?.time || '',
    roleColor: set.roleColor || '#5865F2',
    messages,
  };
}

/* ------------------------------------------------------------------ */
/*  Boot                                                               */
/* ------------------------------------------------------------------ */
store.subscribe(syncMockup);

/* Seed locale-appropriate dummy data on first visit, or when locale changed */
try {
  const raw = localStorage.getItem('koalasnap_state');
  const currentLang = currentLocale();
  let needsSeed = !raw;
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (!parsed.locale || parsed.locale !== currentLang) needsSeed = true;
    } catch { needsSeed = true; }
  }
  if (needsSeed) {
    const set = getRandomDummySet();
    if (set) store.mutate({ ...set, locale: currentLang });
  }
} catch {}

renderApp();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' }).catch(() => {});
}

if (!isCompleted()) {
  setTimeout(() => startTutorial(), 800);
}
