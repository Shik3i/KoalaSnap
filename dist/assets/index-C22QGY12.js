(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const X="modulepreload",Y=function(e){return"/"+e},I={},Q=function(t,n,i){let a=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(p=>Promise.resolve(p).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),m=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=o(n.map(c=>{if(c=Y(c),c in I)return;I[c]=!0;const p=c.endsWith(".css"),b=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${b}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":X,p||(v.as="script"),v.crossOrigin="",v.href=c,m&&v.setAttribute("nonce",m),document.head.appendChild(v),p)return new Promise((W,K)=>{v.addEventListener("load",W),v.addEventListener("error",()=>K(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return a.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})},J="/assets/avatar-fallback-CwXzhE11.svg";function Z(e){const t={...e},n=new Set;return{get(i){return t[i]},getState(){return{...t}},set(i,a){t[i]=a,n.forEach(r=>r(i,a,t))},setAll(i){Object.assign(t,i),n.forEach(a=>a(null,null,t))},mutate(i){Object.assign(t,i)},subscribe(i){return n.add(i),()=>n.delete(i)}}}const d=Z({theme:"whatsapp",author:"Maya",handle:"@maya_99",username:"Maya",roleColor:"#e81224",timestamp:"7:18 PM",message:"Hey! Das sieht richtig gut aus! 🔥",avatar:J,bgGradient:"from-sky-400 to-indigo-600",padding:48,mockupTheme:"light",activeFilter:"all",waMode:"sent",messages:[{id:1,text:"Hey, kommst du heute Abend online?",type:"sent",time:"19:18",status:"read"},{id:2,text:"Ja, bin in 5 Minuten da!",type:"received",time:"19:20",status:"read"},{id:3,text:"Lass uns raiden gehen 🎮",type:"sent",time:"19:22",status:"delivered"}]}),ee=window.__LOCALE__||{};function s(e){return e.split(".").reduce((n,i)=>n!=null?n[i]:void 0,ee)??e}function te(){const e=window.location.pathname;return e.startsWith("/de/")||e==="/de"?"de":"en"}const $=500,ne=.8;function ie(e){return new Promise((t,n)=>{const i=new FileReader;i.onerror=()=>n(new Error("File read failed")),i.onload=a=>{const r=new Image;r.onerror=()=>n(new Error("Image decode failed")),r.onload=()=>{let{width:o,height:l}=r;if(o>$||l>$){const p=Math.min($/o,$/l);o=Math.round(o*p),l=Math.round(l*p)}const m=document.createElement("canvas");m.width=o,m.height=l;const c=m.getContext("2d");if(!c){n(new Error("Canvas 2D not supported"));return}c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(r,0,0,o,l),m.toBlob(p=>{if(!p){n(new Error("WebP encoding failed"));return}t(URL.createObjectURL(p))},"image/webp",ne)},r.src=a.target.result},i.readAsDataURL(e)})}function ae(e){const t=document.getElementById(e);t instanceof HTMLImageElement&&(t.src="")}const _="koalasnap_tutorial_completed",w=[{target:"app-library",key:"tutorial.step1"},{target:"settings-panel",key:"tutorial.step2"},{target:"canvas-area",key:"tutorial.step3"},{target:"bottom-bar",key:"tutorial.step4"},{target:"btn-topbar-export",key:"tutorial.step5"}];let x=0,y=!1,h=null;function se(){return localStorage.getItem(_)==="true"}function re(){return y}function P(){y&&k(),x=0,y=!0;const e=ce();e.classList.remove("hidden"),e.style.pointerEvents="auto",z(0),document.addEventListener("keydown",D)}function D(e){e.key==="Escape"&&k()}function k(){y=!1,h&&(clearTimeout(h),h=null),B(x);const e=document.getElementById("tutorial-overlay");e&&(e.classList.add("hidden"),e.style.pointerEvents=""),localStorage.setItem(_,"true"),document.removeEventListener("keydown",D)}function oe(){if(B(x),x++,x>=w.length){k();return}z(x)}function le(){B(x),x=Math.max(0,x-1),z(x)}function de(){y&&(B(x),z(x))}function ce(){let e=document.getElementById("tutorial-overlay");return e||(e=document.createElement("div"),e.id="tutorial-overlay",e.className="fixed inset-0 bg-black/60 z-40 hidden",document.body.appendChild(e)),e}function z(e){h&&(clearTimeout(h),h=null);const t=w[e];if(!t)return;const n=document.getElementById(t.target);if(!n)return;n.classList.add("tutorial-highlight"),n.style.zIndex="50",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.scrollIntoView({behavior:"smooth",block:"center"});const i=n.getBoundingClientRect();h=setTimeout(()=>{pe(e,i),h=null},400)}function B(e){h&&(clearTimeout(h),h=null);const t=w[e];if(!t)return;const n=document.getElementById(t.target);n&&(n.classList.remove("tutorial-highlight"),n.style.zIndex="",n.style.position="");const i=document.getElementById("tutorial-tooltip");i&&i.remove()}function pe(e,t){const n=document.getElementById("tutorial-tooltip");n&&n.remove();const i=w.length,a=e===0,r=e===i-1,o=document.createElement("div");o.id="tutorial-tooltip",o.className="fixed z-50 w-[320px] rounded-2xl border border-white/[10%] bg-[#1a1714]/95 backdrop-blur-2xl p-4 shadow-2xl shadow-black/50 opacity-0 transition-opacity duration-200",o.innerHTML=`
    <p class="text-sm text-zinc-200 leading-relaxed mb-4">${s(ue(e))}</p>
    <div class="flex items-center justify-between">
      <span class="text-xs text-zinc-500">${e+1} ${s("tutorial.of")} ${i}</span>
      <div class="flex items-center gap-2">
        ${a?"":`<button id="tut-prev" class="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all">${s("tutorial.back")}</button>`}
        <button id="tut-next" class="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#f97316] hover:bg-[#ea580c] active:scale-[0.97] transition-all">${s(r?"tutorial.done":"tutorial.next")}</button>
      </div>
    </div>
    <button id="tut-skip" class="mt-2 text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors">${s("tutorial.skip")}</button>
  `,document.body.appendChild(o),me(o,t),requestAnimationFrame(()=>{o.classList.remove("opacity-0")}),ge(e)}function ue(e){var t;return((t=w[e])==null?void 0:t.key)||""}function me(e,t){const a=e.offsetWidth||320,r=e.offsetHeight||160,o=window.innerWidth-a-16,l=window.innerHeight-r-16,m=t.left+t.width/2;let c=Math.max(16,Math.min(m-a/2,o)),p=t.bottom+12;p+r>window.innerHeight-16&&(p=t.top-r-12),p<16&&(p=16,c=Math.min(t.right+12,o),c=Math.max(16,c)),c=Math.max(16,Math.min(c,o)),p=Math.max(16,Math.min(p,l)),e.style.left=`${c}px`,e.style.top=`${p}px`}function ge(e){const t=document.getElementById("tut-next");t&&(t.onclick=()=>e===w.length-1?k():oe());const n=document.getElementById("tut-prev");n&&(n.onclick=()=>le());const i=document.getElementById("tut-skip");i&&(i.onclick=()=>k())}const H="?";function fe(e,t){const n=t==="dark";return e?`<img id="mockup-avatar" src="${e}" class="w-full h-full rounded-full object-cover" />`:`<div id="mockup-avatar" class="w-full h-full rounded-full bg-gradient-to-br ${n?"from-zinc-600 to-zinc-800":"from-sky-400 to-indigo-500"} flex items-center justify-center text-white text-sm font-bold">${H}</div>`}function xe(e){const t=e.mockupTheme==="dark",n=t?"bg-zinc-900":"bg-white",i=t?"text-zinc-100":"text-zinc-900",a=t?"text-zinc-400":"text-zinc-500",r=t?"text-zinc-300":"text-zinc-800",o=t?"bg-zinc-800":"bg-zinc-100",l=t?"text-zinc-600":"text-zinc-400",m=new Intl.DateTimeFormat("de-DE",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short",year:"numeric"}).format(new Date);return`
    <div id="mockup-card"
      class="${n} rounded-2xl shadow-2xl shadow-black/20 max-w-md w-full mx-auto overflow-hidden ring-1 ring-white/[6%]"
      style="padding: ${e.padding}px">
      <div class="flex items-start gap-3">
        <div class="w-12 h-12 rounded-full shrink-0 overflow-hidden">
          ${fe(e.avatar,e.mockupTheme)}
        </div>
        <div class="flex-1 min-w-0">
          <p id="mockup-author" class="text-[15px] font-bold ${i} leading-tight truncate">${e.author}</p>
          <p class="flex items-center gap-1 text-sm ${a} leading-tight">
            <span id="mockup-handle" class="truncate">@${e.handle}</span>
            <span class="shrink-0">· 1h</span>
          </p>
        </div>
      </div>
      <p id="mockup-message" class="mt-3 text-[15px] ${r} leading-relaxed whitespace-pre-wrap break-words">${e.message}</p>
      <div class="mt-3 h-48 rounded-xl ${o} flex items-center justify-center ${l} text-sm">
        📷 Media placeholder
      </div>
      <div class="mt-3 flex items-center gap-6 text-sm ${a}">
        <span>♥ <span id="mockup-likes">12</span></span>
        <span>↻ <span id="mockup-retweets">3</span></span>
        <span>✎ <span id="mockup-replies">1</span></span>
      </div>
      <p class="mt-2 text-[13px] ${a}">${m}</p>
    </div>
  `}function he(e){const t=e.mockupTheme==="dark";C("mockup-author",a=>{a.textContent=e.author}),C("mockup-handle",a=>{a.textContent=`@${e.handle}`}),C("mockup-message",a=>{a.textContent=e.message});const n=document.getElementById("mockup-avatar");if(n)if(n.parentElement,e.avatar){const a=document.createElement("img");a.id="mockup-avatar",a.src=e.avatar,a.className="w-full h-full rounded-full object-cover",n.replaceWith(a)}else{const a=document.createElement("div");a.id="mockup-avatar";const r=t?"from-zinc-600 to-zinc-800":"from-sky-400 to-indigo-500";a.className=`w-full h-full rounded-full bg-gradient-to-br ${r} flex items-center justify-center text-white text-sm font-bold`,a.textContent=H,n.replaceWith(a)}const i=document.getElementById("mockup-card");i&&(i.style.padding=`${e.padding}px`)}function C(e,t){const n=document.getElementById(e);n&&t(n)}function ve(e){const t=e.avatar?`<img id="discord-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="discord-avatar" class="w-full h-full rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold">?</div>';return`
    <div id="mockup-card"
      class="bg-[#313338] rounded-2xl shadow-2xl shadow-black/25 max-w-xl w-full mx-auto overflow-hidden ring-1 ring-white/[4%]"
      style="padding: ${e.padding}px">
      <div class="flex items-start gap-4 px-4 py-[3px] rounded-lg -mx-4 -my-[3px] bg-white/[1%]">
        <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-0.5">
          ${t}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline gap-2">
            <span id="discord-username"
              class="font-medium text-[16px] leading-tight truncate max-w-[280px]"
              style="color: ${e.roleColor}">${e.username}</span>
            <span id="discord-timestamp" class="text-[#949ba4] text-xs leading-tight shrink-0">${e.timestamp}</span>
          </div>
          <div id="discord-message"
            class="text-[#dbdee1] text-[16px]/[1.4] mt-0.5 whitespace-pre-wrap break-words">${e.message}</div>
        </div>
      </div>
    </div>
  `}function be(e){L("discord-username",i=>{i.textContent=e.username,i.style.color=e.roleColor}),L("discord-timestamp",i=>{i.textContent=e.timestamp}),L("discord-message",i=>{i.textContent=e.message});const t=document.getElementById("discord-avatar");if(t)if(e.avatar){const i=document.createElement("img");i.id="discord-avatar",i.src=e.avatar,i.className="w-full h-full rounded-full object-cover",t.replaceWith(i)}else{const i=document.createElement("div");i.id="discord-avatar",i.className="w-full h-full rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold",i.textContent="?",t.replaceWith(i)}const n=document.getElementById("mockup-card");n&&(n.style.padding=`${e.padding}px`)}function L(e,t){const n=document.getElementById(e);n&&t(n)}const we='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',ye='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',ke='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',$e='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>',Ee='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',ze='<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>',Be='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',Ce='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',Le='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',Se=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='white' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='white' opacity='0.03'/%3E%3C/svg%3E")`,Ie=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='black' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='black' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='black' opacity='0.03'/%3E%3C/svg%3E")`,Me='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>',Te='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>',je='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',Ae='<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>',_e={barBg:"#008069",chatBg:"#efeae2",sentBg:"#d9fdd3",recvBg:"#ffffff",sentText:"#111b21",recvText:"#111b21",timeText:"#667781",inputBg:"#f0f2f5",fieldBg:"#ffffff",fieldText:"#111b21",placeholder:"#8696a0",dotPattern:Ie},Pe={barBg:"#202c33",chatBg:"#0b141a",sentBg:"#005c4b",recvBg:"#202c33",sentText:"#e9edef",recvText:"#e9edef",timeText:"#ffffffcc",inputBg:"#202c33",fieldBg:"#2a3942",fieldText:"#e9edef",placeholder:"#8696a0",dotPattern:Se};function G(e){return e.mockupTheme==="light"?_e:Pe}function De(e){const t=G(e),n=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${n};background:${n}">
        ${He(t)}
        ${Ge(e,t)}
        ${Oe(e,t)}
        ${Re(t)}
      </div>
    </div>
  `}function He(e){return`
    <div class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${e.barBg}">
      <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">09:41</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${$e}</span>
        <span class="text-[11px]">${Ee}</span>
        <span class="text-[11px]">${ze}</span>
      </div>
    </div>
  `}function Ge(e,t){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${t.barBg}">
      <span class="shrink-0">${we}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="wa-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="wa-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="wa-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${e.username}</div>
        <div id="wa-status-text" class="text-[#8696a0] text-[11px] leading-tight">online</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${ye}
        ${ke}
      </div>
    </div>
  `}function Oe(e,t){return`
    <div class="flex-1 p-4 overflow-y-auto" style="background:${t.chatBg};background-image:${t.dotPattern}">
      <div id="wa-messages" class="flex flex-col gap-3">
        ${e.messages.map(n=>O(n,t)).join("")}
      </div>
    </div>
  `}function O(e,t){const n=e.type==="sent",i=n?t.sentBg:t.recvBg,a=n?t.sentText:t.recvText,r=i,o=n?"justify-end":"justify-start",l=e.status||"read",m=n?`<div class="absolute -right-[7px] bottom-[6px] w-0 h-0 border-l-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-left-color:${r}"></div>`:`<div class="absolute -left-[7px] bottom-[6px] w-0 h-0 border-r-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-right-color:${r}"></div>`;let c="";n&&(l==="read"?c=Me:l==="delivered"?c=Te:l==="sent"&&(c=je));const p=l==="unread",b=p?"font-semibold":"",v=p?`<span class="inline-flex ml-1 -mb-0.5">${Ae}</span>`:"";return`
    <div class="flex ${o}">
      ${n?"":'<div class="w-[34px] shrink-0"></div>'}
      <div class="relative max-w-[80%]">
        <div class="rounded-2xl px-3.5 py-2" style="background:${i}">
          <p class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words ${b}" style="color:${a}">${e.text}</p>
          <div class="flex items-center justify-end gap-1 mt-0.5">
            <span class="text-[11px] leading-none" style="color:${t.timeText}">${e.time}</span>
            ${c?`<span class="inline-flex -mb-0.5">${c}</span>`:""}
            ${v}
          </div>
        </div>
        ${m}
      </div>
    </div>
  `}function Re(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${Be}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.placeholder}">Message</div>
      <span>${Ce}</span>
      <span>${Le}</span>
    </div>
  `}function Fe(e){Ne("wa-contact-name",i=>{i.textContent=e.username});const t=document.getElementById("wa-avatar");if(t)if(e.avatar){const i=document.createElement("img");i.id="wa-avatar",i.src=e.avatar,i.className="w-full h-full rounded-full object-cover",i.alt="",t.replaceWith(i)}else{const i=document.createElement("div");i.id="wa-avatar",i.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",i.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',t.replaceWith(i)}const n=document.getElementById("wa-messages");if(n){const i=G(e);n.innerHTML=e.messages.map(a=>O(a,i)).join("")}}function Ne(e,t){const n=document.getElementById(e);n&&t(n)}const Ve='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffcc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#ffffffcc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/></svg>';function qe(e){return`
    <div id="mockup-card"
      class="bg-[#0f0f0f] rounded-2xl shadow-2xl shadow-black/25 max-w-sm w-full mx-auto overflow-hidden ring-1 ring-white/[4%]"
      style="padding: ${e.padding}px">
      <div class="flex justify-end">
        <div class="max-w-[75%] rounded-2xl px-3.5 py-2 bg-[#8774e1]">
          <p id="tg-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${e.message}</p>
          <div class="flex items-center justify-end gap-1 mt-0.5">
            <span id="tg-time" class="text-[11px] text-[#ffffffcc]">${e.timestamp}</span>
            <span id="tg-status" class="inline-flex">${Ve}</span>
          </div>
        </div>
      </div>
    </div>
  `}function Ue(e){M("tg-message",n=>{n.textContent=e.message}),M("tg-time",n=>{n.textContent=e.timestamp});const t=document.getElementById("mockup-card");t&&(t.style.padding=`${e.padding}px`)}function M(e,t){const n=document.getElementById(e);n&&t(n)}const We=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <circle cx="8" cy="8" r="7" stroke="#ffffffcc" stroke-width="1.2"/>
  <circle cx="8" cy="8" r="4.5" stroke="#ffffffcc" stroke-width="1.2"/>
  <path d="M5.5 8L7.5 10L10.5 5.5" stroke="#ffffffcc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;function Ke(e){return`
    <div id="mockup-card"
      class="bg-[#121212] rounded-2xl shadow-2xl shadow-black/25 max-w-sm w-full mx-auto overflow-hidden ring-1 ring-white/[4%]"
      style="padding: ${e.padding}px">
      <div class="flex justify-end">
        <div class="max-w-[75%] rounded-[18px] px-3.5 py-2.5 bg-[#2c6bed]">
          <p id="sg-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${e.message}</p>
          <div class="flex items-center justify-end gap-1 mt-0.5">
            <span id="sg-time" class="text-[11px] text-[#ffffffcc]">${e.timestamp}</span>
            <span id="sg-status" class="inline-flex">${We}</span>
          </div>
        </div>
      </div>
    </div>
  `}function Xe(e){T("sg-message",n=>{n.textContent=e.message}),T("sg-time",n=>{n.textContent=e.timestamp});const t=document.getElementById("mockup-card");t&&(t.style.padding=`${e.padding}px`)}function T(e,t){const n=document.getElementById(e);n&&t(n)}function Ye(e){return`
    <div id="mockup-card"
      class="bg-[#000000] rounded-2xl shadow-2xl shadow-black/30 max-w-sm w-full mx-auto overflow-hidden ring-1 ring-white/[4%]"
      style="padding: ${e.padding}px">
      <div class="flex justify-end">
        <div class="max-w-[78%]">
          <p id="im-time" class="text-[11px] text-[#8e8e93] text-right mb-1">${e.timestamp}</p>
          <div class="relative">
            <div class="rounded-3xl px-4 py-2.5 bg-gradient-to-br from-[#007aff] to-[#0a84ff]">
              <p id="im-message" class="text-[#ffffff] text-[16px]/[1.4] whitespace-pre-wrap break-words">${e.message}</p>
            </div>
            <div class="absolute -bottom-[6px] -right-[6px] w-3 h-3 bg-[#0a84ff] rounded-full"></div>
          </div>
          <p class="text-[11px] text-[#8e8e93] mt-1.5 text-right">Delivered</p>
        </div>
      </div>
    </div>
  `}function Qe(e){j("im-message",n=>{n.textContent=e.message}),j("im-time",n=>{n.textContent=e.timestamp});const t=document.getElementById("mockup-card");t&&(t.style.padding=`${e.padding}px`)}function j(e,t){const n=document.getElementById(e);n&&t(n)}const R={"social-post":{render:xe,sync:he},discord:{render:ve,sync:be},whatsapp:{render:De,sync:Fe},telegram:{render:qe,sync:Ue},signal:{render:Ke,sync:Xe},imessage:{render:Ye,sync:Qe}};let u=d.get("theme");function F(){return{"social-post":s("sidebar.socialPost"),discord:s("sidebar.discord"),whatsapp:"WhatsApp",telegram:"Telegram",signal:"Signal",imessage:"iMessage"}[u]||u}const Je=[{label:"Sky",value:"from-sky-400 to-indigo-600"},{label:"Rose",value:"from-rose-400 to-orange-600"},{label:"Emerald",value:"from-emerald-400 to-cyan-600"},{label:"Amber",value:"from-amber-400 to-red-600"},{label:"Violet",value:"from-violet-400 to-fuchsia-600"},{label:"Charcoal",value:"from-zinc-800 to-zinc-950"}],Ze={"from-sky-400 to-indigo-600":["#38bdf8","#4f46e5"],"from-rose-400 to-orange-600":["#fb7185","#ea580c"],"from-emerald-400 to-cyan-600":["#34d399","#0891b2"],"from-amber-400 to-red-600":["#fbbf24","#dc2626"],"from-violet-400 to-fuchsia-600":["#a78bfa","#c026d3"],"from-zinc-800 to-zinc-950":["#27272a","#09090b"]},E=[{id:"whatsapp",theme:"whatsapp",domain:"whatsapp.com",name:"WhatsApp",tag:"chat"},{id:"telegram",theme:"telegram",domain:"telegram.org",name:"Telegram",tag:"chat"},{id:"signal",theme:"signal",domain:"signal.org",name:"Signal",tag:"chat"},{id:"messenger",theme:"social-post",domain:"messenger.com",name:"Messenger",tag:"chat"},{id:"imessage",theme:"imessage",domain:"apple.com",name:"iMessage",tag:"chat"},{id:"instagram",theme:"social-post",domain:"instagram.com",name:"Instagram",tag:"social"},{id:"twitter",theme:"social-post",domain:"x.com",name:"X",tag:"social"},{id:"tiktok",theme:"social-post",domain:"tiktok.com",name:"TikTok",tag:"social"},{id:"discord",theme:"discord",domain:"discord.com",name:"Discord",tag:"chat"}],f={koala:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="8" ry="7.5"/><circle cx="7" cy="5" r="4"/><circle cx="17" cy="5" r="4"/><circle cx="9" cy="11" r="1.2" fill="#0d0a07"/><circle cx="15" cy="11" r="1.2" fill="#0d0a07"/><ellipse cx="12" cy="16" rx="2.5" ry="1.2"/></svg>',sun:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',moon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',download:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',spinner:'<svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10"/></svg>',check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',chevronDown:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>'},A=te();function et(e){const t=[{id:"all",label:s("topbar.filters.all")},{id:"free",label:s("topbar.filters.free")},{id:"favorites",label:s("topbar.filters.favorites")}];return`
    <header class="h-14 shrink-0 flex items-center justify-between px-5 border-b border-white/[5%] bg-[#0d0a07]/80 backdrop-blur-xl">
      <div class="flex items-center gap-3">
        <div class="text-zinc-100">${f.koala}</div>
        <span class="text-sm font-bold tracking-tight">${s("app.name")}</span>
      </div>
      <div class="flex items-center gap-1.5">
        ${t.map(n=>`
          <button class="filter-pill px-3.5 py-1.5 rounded-full text-xs font-medium transition-all
            ${e.activeFilter===n.id?"bg-white text-zinc-900":"text-zinc-400 hover:text-zinc-200 hover:bg-white/5"}"
            data-filter="${n.id}" aria-label="${n.label}">${n.label}</button>
        `).join("")}
      </div>
      <div class="flex items-center gap-2">
        <button id="btn-topbar-export" aria-label="${s("topbar.export")}"
          class="flex items-center gap-1.5 rounded-full bg-[#f97316] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#ea580c] active:scale-[0.97] transition-all disabled:opacity-60 disabled:pointer-events-none">
          <span id="btn-export-icon">${f.download}</span>
          <span id="btn-export-label">${s("topbar.export")}</span>
        </button>
        <button id="btn-start-tour" aria-label="${s("tutorial.restart")}"
          class="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-all mr-1">${s("tutorial.restart")}</button>
        <div class="relative flex">
          <select id="lang-select" aria-label="Language"
            class="appearance-none bg-white/5 border border-white/10 rounded-full pl-2.5 pr-6 py-1.5 text-xs
                   text-zinc-400 hover:text-zinc-200 hover:border-white/20 outline-0 transition-all cursor-pointer">
            <option value="de" ${A==="de"?"selected":""}>DE</option>
            <option value="en" ${A==="en"?"selected":""}>EN</option>
          </select>
          <span class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">${f.chevronDown}</span>
        </div>
      </div>
    </header>
  `}function tt(e){return`
    <aside id="sidebar" class="w-[340px] shrink-0 h-full overflow-y-auto p-4 flex flex-col gap-4">
      <div id="app-library" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
        <div class="flex items-center justify-between cursor-pointer select-none" id="app-library-toggle">
          <span class="text-xs font-semibold text-zinc-300 tracking-wide">${s("sidebar.appLibrary")}</span>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-zinc-600">${E.length} ${s("sidebar.apps")}</span>
            <span id="app-library-chevron" class="text-zinc-500 transition-transform">${f.chevronDown}</span>
          </div>
        </div>
        <div id="app-library-body">
          <div class="relative mb-2">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">${f.search}</span>
            <input type="text" placeholder="${s("sidebar.search")}"
              class="w-full rounded-xl border border-white/[6%] bg-white/[4%] pl-9 pr-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
          </div>
          <div class="flex flex-col gap-1.5">
            ${E.map(t=>{const n=t.theme===u;return`
                <button data-app="${t.id}" aria-label="${t.id}"
                  class="flex items-center gap-3 rounded-xl border p-2.5 transition-all text-left
                    ${n?"border-white/15 bg-white/[8%]":"border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]"}">
                  <img src="https://www.google.com/s2/favicons?domain=${t.domain}&sz=128"
                    alt="${t.name}" class="w-7 h-7 rounded-lg shrink-0" loading="lazy" />
                  <span class="flex-1 text-xs font-medium text-white">${t.name}</span>
                  <span class="text-[9px] text-zinc-600 uppercase tracking-wider">${t.tag==="chat"?s("canvas.chat"):s("canvas.social")}</span>
                </button>
              `}).join("")}
          </div>
        </div>
      </div>

      <div id="settings-panel" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-4">
        <span class="text-xs font-semibold text-zinc-300 tracking-wide">${s("sidebar.settings")} · <span class="text-zinc-500 font-normal normal-case">${F()}</span></span>
        ${N(e)}
      </div>
    </aside>
  `}function N(e){const t=["whatsapp","telegram","signal","imessage"].includes(u);let n="";return u==="discord"?n=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${s("sidebar.labels.username")}</span>
        <input id="input-username" type="text" value="${e.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${s("sidebar.labels.roleColor")}</span>
        <div class="flex items-center gap-3">
          <input id="input-rolecolor" type="color" value="${e.roleColor}"
            class="w-9 h-9 rounded-xl border border-white/[6%] bg-white/[4%] p-0.5 cursor-pointer" />
          <span class="text-xs text-zinc-500 font-mono">${e.roleColor}</span>
        </div>
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${s("sidebar.labels.timestamp")}</span>
        <input id="input-timestamp" type="text" value="${e.timestamp}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`:t?(n=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${s("sidebar.labels.username")}</span>
        <input id="input-username" type="text" value="${e.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`,u==="whatsapp"?n+=`
      <div class="flex flex-col gap-2 mt-2">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${s("sidebar.labels.message")}</span>
        <div id="wa-message-list" class="flex flex-col gap-2">
          ${e.messages.map((i,a)=>it(i,a)).join("")}
        </div>
        <button id="btn-add-message"
          class="w-full rounded-xl border border-dashed border-white/[8%] py-2 text-xs text-zinc-500 hover:text-zinc-300 hover:border-white/20 transition-all">+ ${s("sidebar.addMessage")}</button>
      </div>`:n+=`
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${s("sidebar.labels.timestamp")}</span>
        <input id="input-timestamp" type="text" value="${e.timestamp}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`):n=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${s("sidebar.labels.author")}</span>
        <input id="input-author" type="text" value="${e.author}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${s("sidebar.labels.handle")}</span>
        <input id="input-handle" type="text" value="${e.handle}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`,`
    <div id="settings-fields">
      ${n}

      ${u!=="whatsapp"?`
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${s("sidebar.labels.message")}</span>
        <textarea id="input-message" rows="3"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none">${e.message}</textarea>
      </label>`:""}

      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${s("sidebar.labels.avatar")}</span>
        <input id="input-avatar" type="file" accept="image/*"
          class="text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:text-zinc-200 file:font-medium hover:file:bg-white/15 transition-colors" />
      </label>
    </div>
    <div class="mt-4 pt-4 border-t border-white/[6%] space-y-4">
      ${at(e)}
    </div>
  `}const nt=[{id:"read",title:"Read",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>'},{id:"delivered",title:"Delivered",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>'},{id:"sent",title:"Sent",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'},{id:"unread",title:"Unread",svg:'<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>'}];function it(e,t){const n=e.type==="sent",i=n?"bg-white text-zinc-900":"bg-white/[4%] text-zinc-500 hover:text-zinc-300",a=n?"bg-white/[4%] text-zinc-500 hover:text-zinc-300":"bg-white text-zinc-900",r=e.status||"read";return`
    <div class="rounded-xl border border-white/[6%] bg-white/[3%] p-2.5 flex flex-col gap-1.5" data-msg-idx="${t}">
      <textarea data-msg-idx="${t}" rows="2"
        class="w-full rounded-lg border border-white/[6%] bg-white/[4%] px-2.5 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none" placeholder="${s("sidebar.messagePlaceholder")}">${e.text}</textarea>
      <div class="flex items-center gap-1.5">
        <button data-msg-idx="${t}" data-msg-type="sent"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${i}">${s("sidebar.sent")}</button>
        <button data-msg-idx="${t}" data-msg-type="received"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${a}">${s("sidebar.received")}</button>
        <div class="flex gap-0.5 ml-1">
          ${nt.map(o=>`
            <button data-msg-idx="${t}" data-msg-status="${o.id}"
              class="p-1 rounded-md transition-all ${r===o.id?"bg-white/15 ring-1 ring-white/20":"text-zinc-600 hover:text-zinc-300 hover:bg-white/5"}"
              title="${o.title}">${o.svg}</button>
          `).join("")}
        </div>
        <input type="text" data-msg-idx="${t}" data-msg-field="time" value="${e.time}"
          class="w-14 rounded-lg border border-white/[6%] bg-white/[4%] px-2 py-1 text-[10px] text-zinc-200 text-center outline-0 focus:border-zinc-600 transition-colors" placeholder="${s("sidebar.timePlaceholder")}" />
        <button data-msg-idx="${t}" data-msg-action="delete"
          class="p-1 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all" title="${s("sidebar.deleteMessage")}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `}function at(e){return`
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${s("sidebar.labels.padding")}</span>
      <div class="flex items-center gap-3">
        <input id="input-padding" type="range" min="16" max="96" value="${e.padding}"
          class="flex-1 accent-zinc-400 h-1 cursor-pointer" />
        <span id="padding-value" class="text-xs text-zinc-500 w-8 text-right">${e.padding}</span>
      </div>
    </label>
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${s("sidebar.labels.background")}</span>
      <div class="flex flex-wrap gap-1.5">
        ${Je.map(t=>`
          <button data-gradient="${t.value}" aria-label="${t.label}"
            class="w-7 h-7 rounded-lg ${t.value} ring-1 ring-white/[8%] hover:ring-white/30 transition-all
              ${e.bgGradient===t.value?"ring-2 ring-white scale-110":""}"></button>
        `).join("")}
      </div>
    </label>
  `}function st(e){return`
    <div id="bottom-bar" class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
                flex items-center gap-1 rounded-full bg-white/[6%] backdrop-blur-2xl
                border border-white/[8%] px-2 py-1.5 shadow-2xl shadow-black/30">
      <button id="btn-mockup-theme" aria-label="${s("bottom.toggleTheme")}" class="rounded-full p-2 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${s("bottom.toggleTheme")}">
        ${e.mockupTheme==="light"?f.sun:f.moon}
      </button>
    </div>
  `}function rt(){const e=document.getElementById("app");if(!e)return;const t=d.getState();e.innerHTML=`
    ${et(t)}
    <div id="main-area" class="flex-1 flex overflow-hidden">
      ${tt(t)}
      <main id="canvas" class="flex-1 relative overflow-hidden">
        <div id="canvas-area" class="absolute inset-0 flex items-center justify-center overflow-hidden z-10">
          <div id="mockup"></div>
        </div>
        ${st(t)}
      </main>
    </div>
  `,lt(),S()}function ot(e){const t=document.getElementById("settings-panel");t&&(t.innerHTML=`
    <span class="text-xs font-semibold text-zinc-300 tracking-wide">${s("sidebar.settings")} · <span class="text-zinc-500 font-normal normal-case">${F()}</span></span>
    ${N(e)}
  `,V())}function lt(){g("btn-topbar-export","click",ut),g("btn-mockup-theme","click",()=>{const t=d.get("mockupTheme")==="light"?"dark":"light";d.set("mockupTheme",t)}),g("lang-select","change",t=>{const n=t.target.value;window.location.href=n==="en"?"/":`/${n}/`}),g("btn-start-tour","click",()=>P()),document.querySelectorAll(".filter-pill").forEach(t=>{t.addEventListener("click",()=>d.set("activeFilter",t.dataset.filter))}),document.querySelectorAll("[data-gradient]").forEach(t=>{t.addEventListener("click",()=>d.set("bgGradient",t.dataset.gradient))}),document.querySelectorAll("[data-app]").forEach(t=>{t.addEventListener("click",()=>{const n=E.find(i=>i.id===t.dataset.app);n&&d.set("theme",n.theme),mt()})});const e=document.getElementById("app-library-toggle");e&&e.addEventListener("click",()=>{const t=document.getElementById("app-library-body"),n=document.getElementById("app-library-chevron");if(!t)return;const i=t.style.display==="none";t.style.display=i?"":"none",n&&(n.style.transform=i?"rotate(0deg)":"rotate(180deg)")}),V()}function V(){g("input-padding","input",e=>{d.set("padding",Number(e.target.value));const t=document.getElementById("padding-value");t&&(t.textContent=e.target.value)}),g("input-message","input",e=>d.set("message",e.target.value)),g("input-avatar","change",async e=>{var n;const t=(n=e.target.files)==null?void 0:n[0];if(t)try{const i=d.get("avatar"),a=await ie(t);i&&i.startsWith("blob:")&&URL.revokeObjectURL(i),d.set("avatar",a)}catch{d.set("avatar",null)}}),u==="social-post"?(g("input-author","input",e=>d.set("author",e.target.value)),g("input-handle","input",e=>d.set("handle",e.target.value))):u==="discord"?(g("input-username","input",e=>d.set("username",e.target.value)),g("input-rolecolor","input",e=>d.set("roleColor",e.target.value)),g("input-timestamp","input",e=>d.set("timestamp",e.target.value))):["whatsapp","telegram","signal","imessage"].includes(u)&&(g("input-username","input",e=>d.set("username",e.target.value)),u==="whatsapp"?dt():g("input-timestamp","input",e=>d.set("timestamp",e.target.value))),u==="whatsapp"&&document.querySelectorAll("[data-msg-type]").forEach(t=>{t.addEventListener("click",()=>{const n=parseInt(t.dataset.msgIdx),i=t.dataset.msgType,a=[...d.get("messages")];a[n].type=i,d.set("messages",a)})})}function dt(){g("btn-add-message","click",()=>{const e=[...d.get("messages")];e.push({id:Date.now(),text:"",type:d.get("waMode")||"sent",time:""}),d.set("messages",e)}),document.querySelectorAll("#wa-message-list textarea[data-msg-idx]").forEach(e=>{e.addEventListener("input",()=>{const t=parseInt(e.dataset.msgIdx),n=[...d.get("messages")];n[t].text=e.value,d.set("messages",n)})}),document.querySelectorAll('[data-msg-field="time"]').forEach(e=>{e.addEventListener("input",()=>{const t=parseInt(e.dataset.msgIdx),n=[...d.get("messages")];n[t].time=e.value,d.set("messages",n)})}),document.querySelectorAll('[data-msg-action="delete"]').forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.dataset.msgIdx),n=d.get("messages").filter((i,a)=>a!==t);d.set("messages",n)})}),document.querySelectorAll("[data-msg-status]").forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.dataset.msgIdx),n=e.dataset.msgStatus,i=[...d.get("messages")];i[t].status=n,d.set("messages",i)})})}function S(){const e=R[u];if(!e)return;const t=d.getState(),n=document.getElementById("mockup");n&&(n.innerHTML=e.render(t)),q(t),requestAnimationFrame(U)}function ct(e,t,n){const i=R[u];if(i){if(e==="theme"){u=t;const a=gt();a&&d.mutate({author:a.author||"",handle:a.handle||"",username:a.username||a.author||"",message:a.message||"",timestamp:a.time||"",roleColor:a.roleColor||"#5865F2",messages:a.messages||[{id:1,text:a.message||"",type:d.get("waMode")||"sent",time:a.time||"",status:"read"}]}),S(),ot(d.getState()),pt(t),re()&&requestAnimationFrame(()=>de());return}if(e==="bgGradient"&&q(n),e==="mockupTheme"){const a=document.getElementById("btn-mockup-theme");a&&(a.innerHTML=t==="light"?f.sun:f.moon),S();return}if(e!=="waMode"){if(e==="activeFilter"){document.querySelectorAll(".filter-pill").forEach(a=>{const r=a.dataset.filter===t;a.className=`filter-pill px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${r?"bg-white text-zinc-900":"text-zinc-400 hover:text-zinc-200 hover:bg-white/5"}`});return}e==="avatar"&&ae(u==="discord"?"discord-avatar":u==="whatsapp"?"wa-avatar":"mockup-avatar"),i.sync(n)}}}function pt(e){document.querySelectorAll("[data-app]").forEach(t=>{const n=E.find(a=>a.id===t.dataset.app),i=n&&n.theme===e;t.className=`flex flex-col items-center gap-1.5 rounded-xl border p-2.5 transition-all text-center ${i?"border-white/15 bg-white/[8%]":"border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]"}`})}function q(e){const t=document.getElementById("canvas");if(!t)return;const n=Ze[e.bgGradient]||["#38bdf8","#4f46e5"];t.style.background=`
    radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(135deg, ${n[0]}, ${n[1]})
  `,t.style.backgroundSize="40px 40px, 100% 100%"}function U(){const e=document.getElementById("canvas"),t=document.getElementById("mockup-card");if(!e||!t)return;const n=e.getBoundingClientRect(),i=Math.min(n.width/390,n.height/844)*.9;t.style.transform=`scale(${i})`,t.style.transformOrigin="center center"}window.addEventListener("resize",U);async function ut(){const e=document.getElementById("btn-topbar-export"),t=document.getElementById("btn-export-icon"),n=document.getElementById("btn-export-label");if(!e||e.disabled)return;e.disabled=!0,t&&(t.innerHTML=f.spinner),n&&(n.textContent=s("topbar.rendering"));const i=document.querySelector("#mockup > div");if(!i){a();return}try{const{toPng:r}=await Q(async()=>{const{toPng:b}=await import("./index-CgJtiJsK.js");return{toPng:b}},[]),o=await r(i,{quality:1,pixelRatio:2,cacheBust:!0}),l=new Date,m=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}_${String(l.getHours()).padStart(2,"0")}-${String(l.getMinutes()).padStart(2,"0")}-${String(l.getSeconds()).padStart(2,"0")}`,c=`koalasnap-${u}-${m}.png`,p=document.createElement("a");p.download=c,p.href=o,p.click(),t&&(t.innerHTML=f.check),n&&(n.textContent=s("topbar.exported")),e.classList.remove("bg-[#f97316]","hover:bg-[#ea580c]"),e.classList.add("bg-emerald-500","hover:bg-emerald-600"),setTimeout(a,2e3)}catch{t&&(t.innerHTML=f.download),n&&(n.textContent=s("topbar.exportFailed")),e.disabled=!1,setTimeout(()=>{n&&(n.textContent=s("topbar.export")),t&&(t.innerHTML=f.download)},2e3)}function a(){e.disabled=!1,e.classList.remove("bg-emerald-500","hover:bg-emerald-600"),e.classList.add("bg-[#f97316]","hover:bg-[#ea580c]"),t&&(t.innerHTML=f.download),n&&(n.textContent=s("topbar.export"))}}function g(e,t,n){var i;(i=document.getElementById(e))==null||i.addEventListener(t,n)}function mt(){const e=document.getElementById("app-library-body"),t=document.getElementById("app-library-chevron");e&&(e.style.display="none"),t&&(t.style.transform="rotate(180deg)")}function gt(){var a,r;const e=window.__LOCALE__,t=e==null?void 0:e.dummySets;if(!t||t.length===0)return null;const n=t[Math.floor(Math.random()*t.length)],i=n.messages&&n.messages.length>0?n.messages.map((o,l)=>({id:l+1,text:o.text,type:o.type,time:o.time,status:o.status||"read"})):[{id:1,text:n.message||"",type:d.get("waMode")||"sent",time:n.time||"",status:"read"}];return{author:n.author||"",handle:n.handle||"",username:n.username||n.author||"",message:n.message||((a=i[0])==null?void 0:a.text)||"",time:n.time||((r=i[0])==null?void 0:r.time)||"",roleColor:n.roleColor||"#5865F2",messages:i}}d.subscribe(ct);rt();se()||setTimeout(()=>P(),800);
