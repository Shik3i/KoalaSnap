(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const de="modulepreload",pe=function(e){return"/"+e},V={},ue=function(t,n,i){let a=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),m=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));a=o(n.map(d=>{if(d=pe(d),d in V)return;V[d]=!0;const p=d.endsWith(".css"),u=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":de,p||(g.as="script"),g.crossOrigin="",g.href=d,m&&g.setAttribute("nonce",m),document.head.appendChild(g),p)return new Promise((b,_)=>{g.addEventListener("load",b),g.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return a.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})},K="koalasnap_state";function ge(e){try{const t=localStorage.getItem(K);if(t)return{...e,...JSON.parse(t)}}catch{}return{...e}}function M(e){try{const{avatar:t,...n}=e;localStorage.setItem(K,JSON.stringify(n))}catch{}}function me(e){const t=ge(e),n=new Set;return{get(i){return t[i]},getState(){return{...t}},set(i,a){t[i]=a,M(t),n.forEach(s=>s(i,a,t))},setAll(i){Object.assign(t,i),M(t),n.forEach(a=>a(null,null,t))},mutate(i){Object.assign(t,i),M(t),n.forEach(a=>a(null,null,t))},subscribe(i){return n.add(i),()=>n.delete(i)},reset(){Object.assign(t,e),M(t),n.forEach(i=>i(null,null,t))}}}const fe={theme:"whatsapp",author:"Maya",handle:"@maya_99",username:"Maya",roleColor:"#e81224",timestamp:"7:18 PM",message:"Hey, are you coming online tonight?",avatar:null,bgGradient:"from-sky-400 to-indigo-600",padding:48,mockupTheme:"light",waMode:"sent",locale:"en",messages:[{id:1,text:"Hey, are you coming online tonight?",type:"sent",time:"7:18 PM",status:"read"},{id:2,text:"Yeah, give me 5!",type:"received",time:"7:20 PM",status:"read"},{id:3,text:"Sure, take your time 🐨",type:"sent",time:"7:21 PM",status:"delivered"}]},l=me(fe),he=window.__LOCALE__||{};function r(e){return e.split(".").reduce((n,i)=>n!=null?n[i]:void 0,he)??e}function T(){const e=window.location.pathname;return e.startsWith("/de/")||e==="/de"?"de":"en"}function h(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}const L=500,xe=.8;function ve(e){return new Promise((t,n)=>{const i=new FileReader;i.onerror=()=>n(new Error("File read failed")),i.onload=a=>{const s=new Image;s.onerror=()=>n(new Error("Image decode failed")),s.onload=()=>{let{width:o,height:c}=s;if(o>L||c>L){const p=Math.min(L/o,L/c);o=Math.round(o*p),c=Math.round(c*p)}const m=document.createElement("canvas");m.width=o,m.height=c;const d=m.getContext("2d");if(!d){n(new Error("Canvas 2D not supported"));return}d.imageSmoothingEnabled=!0,d.imageSmoothingQuality="high",d.drawImage(s,0,0,o,c),m.toBlob(p=>{if(!p){n(new Error("WebP encoding failed"));return}t(URL.createObjectURL(p))},"image/webp",xe)},s.src=a.target.result},i.readAsDataURL(e)})}function be(e){const t=document.getElementById(e);t instanceof HTMLImageElement&&(t.src="")}const Y="koalasnap_tutorial_completed",k=[{target:"app-library",key:"tutorial.step1"},{target:"settings-panel",key:"tutorial.step2"},{target:"canvas-area",key:"tutorial.step3"},{target:"bottom-bar",key:"tutorial.step4"},{target:"btn-topbar-export",key:"tutorial.step5"}];let w=0,B=!1,y=null;function we(){return localStorage.getItem(Y)==="true"}function ye(){return B}function X(){B&&C(),w=0,B=!0;const e=ze();e.classList.remove("hidden"),e.style.pointerEvents="auto",j(0),document.addEventListener("keydown",J)}function J(e){e.key==="Escape"&&C()}function C(){B=!1,y&&(clearTimeout(y),y=null),P(w);const e=document.getElementById("tutorial-overlay");e&&(e.classList.add("hidden"),e.style.pointerEvents=""),localStorage.setItem(Y,"true"),document.removeEventListener("keydown",J)}function ke(){if(P(w),w++,w>=k.length){C();return}j(w)}function $e(){P(w),w=Math.max(0,w-1),j(w)}function Ee(){B&&(P(w),j(w))}function ze(){let e=document.getElementById("tutorial-overlay");return e||(e=document.createElement("div"),e.id="tutorial-overlay",e.className="fixed inset-0 bg-black/60 z-40 hidden",document.body.appendChild(e)),e}function j(e){y&&(clearTimeout(y),y=null);const t=k[e];if(!t)return;const n=document.getElementById(t.target);if(!n)return;n.classList.add("tutorial-highlight"),n.style.zIndex="50",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.scrollIntoView({behavior:"smooth",block:"center"});const i=n.getBoundingClientRect();y=setTimeout(()=>{Be(e,i),y=null},400)}function P(e){y&&(clearTimeout(y),y=null);const t=k[e];if(!t)return;const n=document.getElementById(t.target);n&&(n.classList.remove("tutorial-highlight"),n.style.zIndex="",n.style.position="");const i=document.getElementById("tutorial-tooltip");i&&i.remove()}function Be(e,t){const n=document.getElementById("tutorial-tooltip");n&&n.remove();const i=k.length,a=e===0,s=e===i-1,o=document.createElement("div");o.id="tutorial-tooltip",o.className="fixed z-50 w-[320px] rounded-2xl border border-white/[10%] bg-[#1a1714]/95 backdrop-blur-2xl p-4 shadow-2xl shadow-black/50 opacity-0 transition-opacity duration-200",o.innerHTML=`
    <p class="text-sm text-zinc-200 leading-relaxed mb-4">${r(Ce(e))}</p>
    <div class="flex items-center justify-between">
      <span class="text-xs text-zinc-500">${e+1} ${r("tutorial.of")} ${i}</span>
      <div class="flex items-center gap-2">
        ${a?"":`<button id="tut-prev" class="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all">${r("tutorial.back")}</button>`}
        <button id="tut-next" class="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#f97316] hover:bg-[#ea580c] active:scale-[0.97] transition-all">${r(s?"tutorial.done":"tutorial.next")}</button>
      </div>
    </div>
    <button id="tut-skip" class="mt-2 text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors">${r("tutorial.skip")}</button>
  `,document.body.appendChild(o),Se(o,t),requestAnimationFrame(()=>{o.classList.remove("opacity-0")}),Me(e)}function Ce(e){var t;return((t=k[e])==null?void 0:t.key)||""}function Se(e,t){const a=e.offsetWidth||320,s=e.offsetHeight||160,o=window.innerWidth-a-16,c=window.innerHeight-s-16,m=t.left+t.width/2;let d=Math.max(16,Math.min(m-a/2,o)),p=t.bottom+12;p+s>window.innerHeight-16&&(p=t.top-s-12),p<16&&(p=16,d=Math.min(t.right+12,o),d=Math.max(16,d)),d=Math.max(16,Math.min(d,o)),p=Math.max(16,Math.min(p,c)),e.style.left=`${d}px`,e.style.top=`${p}px`}function Me(e){const t=document.getElementById("tut-next");t&&(t.onclick=()=>e===k.length-1?C():ke());const n=document.getElementById("tut-prev");n&&(n.onclick=()=>$e());const i=document.getElementById("tut-skip");i&&(i.onclick=()=>C())}const Q="?";function Le(e,t){const n=t==="dark";return e?`<img id="mockup-avatar" src="${e}" class="w-full h-full rounded-full object-cover" />`:`<div id="mockup-avatar" class="w-full h-full rounded-full bg-gradient-to-br ${n?"from-zinc-600 to-zinc-800":"from-sky-400 to-indigo-500"} flex items-center justify-center text-white text-sm font-bold">${Q}</div>`}function E(e){const t=e.mockupTheme==="dark",n=t?"bg-zinc-900":"bg-white",i=t?"text-zinc-100":"text-zinc-900",a=t?"text-zinc-400":"text-zinc-500",s=t?"text-zinc-300":"text-zinc-800",o=t?"bg-zinc-800":"bg-zinc-100",c=t?"text-zinc-600":"text-zinc-400",m=new Intl.DateTimeFormat(T()==="de"?"de-DE":"en-US",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short",year:"numeric"}).format(new Date);return`
    <div id="mockup-card"
      class="${n} rounded-2xl shadow-2xl shadow-black/20 max-w-md w-full mx-auto overflow-hidden ring-1 ring-white/[6%]"
      style="padding: ${e.padding}px">
      <div class="flex items-start gap-3">
        <div class="w-12 h-12 rounded-full shrink-0 overflow-hidden">
          ${Le(e.avatar,e.mockupTheme)}
        </div>
        <div class="flex-1 min-w-0">
          <p id="mockup-author" class="text-[15px] font-bold ${i} leading-tight truncate">${h(e.author)}</p>
          <p class="flex items-center gap-1 text-sm ${a} leading-tight">
            <span id="mockup-handle" class="truncate">@${h(e.handle)}</span>
            <span class="shrink-0">· 1h</span>
          </p>
        </div>
      </div>
      <p id="mockup-message" class="mt-3 text-[15px] ${s} leading-relaxed whitespace-pre-wrap break-words">${h(e.message)}</p>
      <div class="mt-3 h-48 rounded-xl ${o} flex items-center justify-center ${c} text-sm">
        📷 Media placeholder
      </div>
      <div class="mt-3 flex items-center gap-6 text-sm ${a}">
        <span>♥ <span id="mockup-likes">12</span></span>
        <span>↻ <span id="mockup-retweets">3</span></span>
        <span>✎ <span id="mockup-replies">1</span></span>
      </div>
      <p class="mt-2 text-[13px] ${a}">${m}</p>
    </div>
  `}function z(e){const t=e.mockupTheme==="dark";D("mockup-author",a=>{a.textContent=e.author}),D("mockup-handle",a=>{a.textContent=`@${e.handle}`}),D("mockup-message",a=>{a.textContent=e.message});const n=document.getElementById("mockup-avatar");if(n)if(n.parentElement,e.avatar){const a=document.createElement("img");a.id="mockup-avatar",a.src=e.avatar,a.className="w-full h-full rounded-full object-cover",n.replaceWith(a)}else{const a=document.createElement("div");a.id="mockup-avatar";const s=t?"from-zinc-600 to-zinc-800":"from-sky-400 to-indigo-500";a.className=`w-full h-full rounded-full bg-gradient-to-br ${s} flex items-center justify-center text-white text-sm font-bold`,a.textContent=Q,n.replaceWith(a)}const i=document.getElementById("mockup-card");i&&(i.style.padding=`${e.padding}px`)}function D(e,t){const n=document.getElementById(e);n&&t(n)}function Ae(e){const t=e.avatar?`<img id="discord-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="discord-avatar" class="w-full h-full rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold">?</div>';return`
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
              style="color: ${e.roleColor}">${h(e.username)}</span>
            <span id="discord-timestamp" class="text-[#949ba4] text-xs leading-tight shrink-0">${h(e.timestamp)}</span>
          </div>
          <div id="discord-message"
            class="text-[#dbdee1] text-[16px]/[1.4] mt-0.5 whitespace-pre-wrap break-words">${h(e.message)}</div>
        </div>
      </div>
    </div>
  `}function Ie(e){O("discord-username",i=>{i.textContent=e.username,i.style.color=e.roleColor}),O("discord-timestamp",i=>{i.textContent=e.timestamp}),O("discord-message",i=>{i.textContent=e.message});const t=document.getElementById("discord-avatar");if(t)if(e.avatar){const i=document.createElement("img");i.id="discord-avatar",i.src=e.avatar,i.className="w-full h-full rounded-full object-cover",t.replaceWith(i)}else{const i=document.createElement("div");i.id="discord-avatar",i.className="w-full h-full rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold",i.textContent="?",t.replaceWith(i)}const n=document.getElementById("mockup-card");n&&(n.style.padding=`${e.padding}px`)}function O(e,t){const n=document.getElementById(e);n&&t(n)}const Te='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',je='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',Pe='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',_e='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>',He='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',De='<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>',Oe='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',Ne='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',Ge='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',Re=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='white' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='white' opacity='0.03'/%3E%3C/svg%3E")`,Ve=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='black' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='black' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='black' opacity='0.03'/%3E%3C/svg%3E")`,Fe='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>',Ue='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>',qe='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',We='<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>',Ke={barBg:"#008069",chatBg:"#efeae2",sentBg:"#d9fdd3",recvBg:"#ffffff",sentText:"#111b21",recvText:"#111b21",timeText:"#667781",inputBg:"#f0f2f5",fieldBg:"#ffffff",fieldText:"#111b21",placeholder:"#8696a0",dotPattern:Ve},Ye={barBg:"#202c33",chatBg:"#0b141a",sentBg:"#005c4b",recvBg:"#202c33",sentText:"#e9edef",recvText:"#e9edef",timeText:"#ffffffcc",inputBg:"#202c33",fieldBg:"#2a3942",fieldText:"#e9edef",placeholder:"#8696a0",dotPattern:Re};function Z(e){return e.mockupTheme==="light"?Ke:Ye}function Xe(e){const t=Z(e),n=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${n};background:${n}">
        ${Je(t)}
        ${Qe(e,t)}
        ${Ze(e,t)}
        ${et(t)}
      </div>
    </div>
  `}function Je(e){return`
    <div class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${e.barBg}">
      <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">09:41</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${_e}</span>
        <span class="text-[11px]">${He}</span>
        <span class="text-[11px]">${De}</span>
      </div>
    </div>
  `}function Qe(e,t){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${t.barBg}">
      <span class="shrink-0">${Te}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="wa-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="wa-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="wa-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${h(e.username)}</div>
        <div id="wa-status-text" class="text-[#8696a0] text-[11px] leading-tight">online</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${je}
        ${Pe}
      </div>
    </div>
  `}function Ze(e,t){return`
    <div class="flex-1 p-4 overflow-y-auto" style="background:${t.chatBg};background-image:${t.dotPattern}">
      <div id="wa-messages" class="flex flex-col gap-3">
        ${e.messages.map(n=>ee(n,t)).join("")}
      </div>
    </div>
  `}function ee(e,t){const n=e.type==="sent",i=n?t.sentBg:t.recvBg,a=n?t.sentText:t.recvText,s=i,o=n?"justify-end":"justify-start",c=e.status||"read",m=n?`<div class="absolute -right-[7px] bottom-[6px] w-0 h-0 border-l-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-left-color:${s}"></div>`:`<div class="absolute -left-[7px] bottom-[6px] w-0 h-0 border-r-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-right-color:${s}"></div>`;let d="";n&&(c==="read"?d=Fe:c==="delivered"?d=Ue:c==="sent"&&(d=qe));const p=c==="unread",u=p?"font-semibold":"",g=p?`<span class="inline-flex ml-1 -mb-0.5">${We}</span>`:"";return`
    <div class="flex ${o}">
      ${n?"":'<div class="w-[34px] shrink-0"></div>'}
      <div class="relative max-w-[80%]">
        <div class="rounded-2xl px-3.5 py-2" style="background:${i}">
          <p class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words ${u}" style="color:${a}">${h(e.text)}</p>
          <div class="flex items-center justify-end gap-1 mt-0.5">
            <span class="text-[11px] leading-none" style="color:${t.timeText}">${h(e.time)}</span>
            ${d?`<span class="inline-flex -mb-0.5">${d}</span>`:""}
            ${g}
          </div>
        </div>
        ${m}
      </div>
    </div>
  `}function et(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${Oe}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.placeholder}">Message</div>
      <span>${Ne}</span>
      <span>${Ge}</span>
    </div>
  `}function tt(e){nt("wa-contact-name",i=>{i.textContent=e.username});const t=document.getElementById("wa-avatar");if(t)if(e.avatar){const i=document.createElement("img");i.id="wa-avatar",i.src=e.avatar,i.className="w-full h-full rounded-full object-cover",i.alt="",t.replaceWith(i)}else{const i=document.createElement("div");i.id="wa-avatar",i.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",i.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',t.replaceWith(i)}const n=document.getElementById("wa-messages");if(n){const i=Z(e);n.innerHTML=e.messages.map(a=>ee(a,i)).join("")}}function nt(e,t){const n=document.getElementById(e);n&&t(n)}const it='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffcc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#ffffffcc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/></svg>';function at(e){return`
    <div id="mockup-card"
      class="bg-[#0f0f0f] rounded-2xl shadow-2xl shadow-black/25 max-w-sm w-full mx-auto overflow-hidden ring-1 ring-white/[4%]"
      style="padding: ${e.padding}px">
      <div class="flex justify-end">
        <div class="max-w-[75%] rounded-2xl px-3.5 py-2 bg-[#8774e1]">
          <p id="tg-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${h(e.message)}</p>
          <div class="flex items-center justify-end gap-1 mt-0.5">
            <span id="tg-time" class="text-[11px] text-[#ffffffcc]">${h(e.timestamp)}</span>
            <span id="tg-status" class="inline-flex">${it}</span>
          </div>
        </div>
      </div>
    </div>
  `}function st(e){F("tg-message",n=>{n.textContent=e.message}),F("tg-time",n=>{n.textContent=e.timestamp});const t=document.getElementById("mockup-card");t&&(t.style.padding=`${e.padding}px`)}function F(e,t){const n=document.getElementById(e);n&&t(n)}const rt=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <circle cx="8" cy="8" r="7" stroke="#ffffffcc" stroke-width="1.2"/>
  <circle cx="8" cy="8" r="4.5" stroke="#ffffffcc" stroke-width="1.2"/>
  <path d="M5.5 8L7.5 10L10.5 5.5" stroke="#ffffffcc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;function ot(e){return`
    <div id="mockup-card"
      class="bg-[#121212] rounded-2xl shadow-2xl shadow-black/25 max-w-sm w-full mx-auto overflow-hidden ring-1 ring-white/[4%]"
      style="padding: ${e.padding}px">
      <div class="flex justify-end">
        <div class="max-w-[75%] rounded-[18px] px-3.5 py-2.5 bg-[#2c6bed]">
          <p id="sg-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${h(e.message)}</p>
          <div class="flex items-center justify-end gap-1 mt-0.5">
            <span id="sg-time" class="text-[11px] text-[#ffffffcc]">${h(e.timestamp)}</span>
            <span id="sg-status" class="inline-flex">${rt}</span>
          </div>
        </div>
      </div>
    </div>
  `}function lt(e){U("sg-message",n=>{n.textContent=e.message}),U("sg-time",n=>{n.textContent=e.timestamp});const t=document.getElementById("mockup-card");t&&(t.style.padding=`${e.padding}px`)}function U(e,t){const n=document.getElementById(e);n&&t(n)}function ct(e){return`
    <div id="mockup-card"
      class="bg-[#000000] rounded-2xl shadow-2xl shadow-black/30 max-w-sm w-full mx-auto overflow-hidden ring-1 ring-white/[4%]"
      style="padding: ${e.padding}px">
      <div class="flex justify-end">
        <div class="max-w-[78%]">
          <p id="im-time" class="text-[11px] text-[#8e8e93] text-right mb-1">${h(e.timestamp)}</p>
          <div class="relative">
            <div class="rounded-3xl px-4 py-2.5 bg-gradient-to-br from-[#007aff] to-[#0a84ff]">
              <p id="im-message" class="text-[#ffffff] text-[16px]/[1.4] whitespace-pre-wrap break-words">${h(e.message)}</p>
            </div>
            <div class="absolute -bottom-[6px] -right-[6px] w-3 h-3 bg-[#0a84ff] rounded-full"></div>
          </div>
          <p class="text-[11px] text-[#8e8e93] mt-1.5 text-right">Delivered</p>
        </div>
      </div>
    </div>
  `}function dt(e){q("im-message",n=>{n.textContent=e.message}),q("im-time",n=>{n.textContent=e.timestamp});const t=document.getElementById("mockup-card");t&&(t.style.padding=`${e.padding}px`)}function q(e,t){const n=document.getElementById(e);n&&t(n)}const te={"social-post":{render:E,sync:z},messenger:{render:E,sync:z},instagram:{render:E,sync:z},twitter:{render:E,sync:z},tiktok:{render:E,sync:z},discord:{render:Ae,sync:Ie},whatsapp:{render:Xe,sync:tt},telegram:{render:at,sync:st},signal:{render:ot,sync:lt},imessage:{render:ct,sync:dt}};let f=l.get("theme"),N=!1,G=!1;function ne(){return{"social-post":r("sidebar.socialPost"),messenger:r("sidebar.socialPost"),instagram:r("sidebar.socialPost"),twitter:r("sidebar.socialPost"),tiktok:r("sidebar.socialPost"),discord:r("sidebar.discord"),whatsapp:"WhatsApp",telegram:"Telegram",signal:"Signal",imessage:"iMessage"}[f]||f}const pt=[{label:"Sky",value:"from-sky-400 to-indigo-600"},{label:"Rose",value:"from-rose-400 to-orange-600"},{label:"Emerald",value:"from-emerald-400 to-cyan-600"},{label:"Amber",value:"from-amber-400 to-red-600"},{label:"Violet",value:"from-violet-400 to-fuchsia-600"},{label:"Charcoal",value:"from-zinc-800 to-zinc-950"}],ut={"from-sky-400 to-indigo-600":["#38bdf8","#4f46e5"],"from-rose-400 to-orange-600":["#fb7185","#ea580c"],"from-emerald-400 to-cyan-600":["#34d399","#0891b2"],"from-amber-400 to-red-600":["#fbbf24","#dc2626"],"from-violet-400 to-fuchsia-600":["#a78bfa","#c026d3"],"from-zinc-800 to-zinc-950":["#27272a","#09090b"]},I=[{id:"whatsapp",theme:"whatsapp",name:"WhatsApp",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>'},{id:"telegram",theme:"telegram",name:"Telegram",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0m4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635"/></svg>'},{id:"signal",theme:"signal",name:"Signal",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0l-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0l-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0l-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002l-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213l-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24l-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125"/></svg>'},{id:"messenger",theme:"messenger",name:"Messenger",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13"/></svg>'},{id:"imessage",theme:"imessage",name:"iMessage",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.285 0A5.273 5.273 0 0 0 0 5.285v13.43A5.273 5.273 0 0 0 5.285 24h13.43A5.273 5.273 0 0 0 24 18.715V5.285A5.273 5.273 0 0 0 18.715 0ZM12 4.154a8.809 7.337 0 0 1 8.809 7.338A8.809 7.337 0 0 1 12 18.828a8.809 7.337 0 0 1-2.492-.303A8.656 7.337 0 0 1 5.93 19.93a9.929 7.337 0 0 0 1.54-2.155 8.809 7.337 0 0 1-4.279-6.283A8.809 7.337 0 0 1 12 4.154"/></svg>'},{id:"instagram",theme:"instagram",name:"Instagram",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>'},{id:"twitter",theme:"twitter",name:"X",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'},{id:"tiktok",theme:"tiktok",name:"TikTok",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07"/></svg>'},{id:"discord",theme:"discord",name:"Discord",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189"/></svg>'}],x={koala:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="8" ry="7.5"/><circle cx="7" cy="5" r="4"/><circle cx="17" cy="5" r="4"/><circle cx="9" cy="11" r="1.2" fill="#0d0a07"/><circle cx="15" cy="11" r="1.2" fill="#0d0a07"/><ellipse cx="12" cy="16" rx="2.5" ry="1.2"/></svg>',sun:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',moon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',download:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',spinner:'<svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10"/></svg>',check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',chevronDown:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',github:'<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>'},W=T();function gt(e){return`
    <header class="h-14 shrink-0 flex items-center justify-between px-5 border-b border-white/[5%] bg-[#0d0a07]/80 backdrop-blur-xl">
      <div class="flex items-center gap-3">
        <div class="text-zinc-100">${x.koala}</div>
        <span class="text-sm font-bold tracking-tight">${r("app.name")}</span>
      </div>
      <div class="flex items-center gap-2">
        <button id="btn-topbar-export" aria-label="${r("topbar.export")}"
          class="flex items-center gap-1.5 rounded-full bg-[#f97316] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#ea580c] active:scale-[0.97] transition-all disabled:opacity-60 disabled:pointer-events-none">
          <span id="btn-export-icon">${x.download}</span>
          <span id="btn-export-label">${r("topbar.export")}</span>
        </button>
        <button id="btn-start-tour" aria-label="${r("tutorial.restart")}"
          class="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-all mr-1">${r("tutorial.restart")}</button>
        <a href="https://github.com/Shik3i/KoalaSnap" target="_blank" rel="noopener noreferrer"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all"
          aria-label="GitHub">
          ${x.github}
        </a>
        <div class="relative flex">
          <select id="lang-select" aria-label="Language"
            class="appearance-none bg-white/5 border border-white/10 rounded-full pl-2.5 pr-6 py-1.5 text-xs
                   text-zinc-400 hover:text-zinc-200 hover:border-white/20 outline-0 transition-all cursor-pointer">
            <option value="de" ${W==="de"?"selected":""}>DE</option>
            <option value="en" ${W==="en"?"selected":""}>EN</option>
          </select>
          <span class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">${x.chevronDown}</span>
        </div>
      </div>
    </header>
  `}function mt(e){return`
    <aside id="sidebar" class="w-[340px] shrink-0 h-full overflow-y-auto p-4 flex flex-col gap-4">
      <div id="app-library" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
        <div class="flex items-center justify-between cursor-pointer select-none" id="app-library-toggle">
          <span class="text-xs font-semibold text-zinc-300 tracking-wide">${r("sidebar.appLibrary")}</span>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-zinc-600">${I.length} ${r("sidebar.apps")}</span>
            <span id="app-library-chevron" class="text-zinc-500 transition-transform">${x.chevronDown}</span>
          </div>
        </div>
        <div id="app-library-body">
          <div class="relative mb-2">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">${x.search}</span>
            <input type="text" placeholder="${r("sidebar.search")}"
              class="w-full rounded-xl border border-white/[6%] bg-white/[4%] pl-9 pr-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
          </div>
          <div class="flex flex-col gap-1.5">
            ${I.map(t=>{const n=t.theme===f;return`
                <button data-app="${t.id}" aria-label="${t.id}"
                  class="flex items-center gap-3 rounded-xl border p-2.5 transition-all text-left
                    ${n?"border-white/15 bg-white/[8%]":"border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]"}">
                <div class="w-7 h-7 rounded-lg bg-white/[8%] flex items-center justify-center shrink-0 text-zinc-300">${t.svg}</div>
                  <span class="flex-1 text-xs font-medium text-white">${t.name}</span>
                  <span class="text-[9px] text-zinc-600 uppercase tracking-wider">${t.tag==="chat"?r("canvas.chat"):r("canvas.social")}</span>
                </button>
              `}).join("")}
          </div>
        </div>
      </div>

      <div id="settings-panel" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-4">
        <span class="text-xs font-semibold text-zinc-300 tracking-wide">${r("sidebar.settings")} · <span class="text-zinc-500 font-normal normal-case">${ne()}</span></span>
        ${ie(e)}
      </div>
    </aside>
  `}function ie(e){const t=["whatsapp","telegram","signal","imessage"].includes(f);let n="";return f==="discord"?n=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${r("sidebar.labels.username")}</span>
        <input id="input-username" type="text" value="${e.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${r("sidebar.labels.roleColor")}</span>
        <div class="flex items-center gap-3">
          <input id="input-rolecolor" type="color" value="${e.roleColor}"
            class="w-9 h-9 rounded-xl border border-white/[6%] bg-white/[4%] p-0.5 cursor-pointer" />
          <span class="text-xs text-zinc-500 font-mono">${e.roleColor}</span>
        </div>
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${r("sidebar.labels.timestamp")}</span>
        <input id="input-timestamp" type="text" value="${e.timestamp}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`:t?(n=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${r("sidebar.labels.username")}</span>
        <input id="input-username" type="text" value="${e.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`,f==="whatsapp"?n+=`
      <div class="flex flex-col gap-2 mt-2">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${r("sidebar.labels.message")}</span>
        <div id="wa-message-list" class="flex flex-col gap-2">
          ${e.messages.map((i,a)=>ae(i,a)).join("")}
        </div>
        <button id="btn-add-message"
          class="w-full rounded-xl border border-dashed border-white/[8%] py-2 text-xs text-zinc-500 hover:text-zinc-300 hover:border-white/20 transition-all">+ ${r("sidebar.addMessage")}</button>
      </div>`:n+=`
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${r("sidebar.labels.timestamp")}</span>
        <input id="input-timestamp" type="text" value="${e.timestamp}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`):n=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${r("sidebar.labels.author")}</span>
        <input id="input-author" type="text" value="${e.author}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${r("sidebar.labels.handle")}</span>
        <input id="input-handle" type="text" value="${e.handle}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`,`
    <div id="settings-fields">
      ${n}

      ${f!=="whatsapp"?`
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${r("sidebar.labels.message")}</span>
        <textarea id="input-message" rows="3"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none">${e.message}</textarea>
      </label>`:""}

      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${r("sidebar.labels.avatar")}</span>
        <input id="input-avatar" type="file" accept="image/*"
          class="text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:text-zinc-200 file:font-medium hover:file:bg-white/15 transition-colors" />
      </label>
    </div>
    <div class="mt-4 pt-4 border-t border-white/[6%] space-y-4">
      ${ht(e)}
    </div>
  `}const ft=[{id:"read",title:"Read",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>'},{id:"delivered",title:"Delivered",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>'},{id:"sent",title:"Sent",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'},{id:"unread",title:"Unread",svg:'<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>'}];function ae(e,t){const n=e.type==="sent",i=n?"bg-white text-zinc-900":"bg-white/[4%] text-zinc-500 hover:text-zinc-300",a=n?"bg-white/[4%] text-zinc-500 hover:text-zinc-300":"bg-white text-zinc-900",s=e.status||"read";return`
    <div class="rounded-xl border border-white/[6%] bg-white/[3%] p-2.5 flex flex-col gap-1.5" data-msg-idx="${t}">
      <textarea data-msg-idx="${t}" rows="2"
        class="w-full rounded-lg border border-white/[6%] bg-white/[4%] px-2.5 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none" placeholder="${r("sidebar.messagePlaceholder")}">${h(e.text)}</textarea>
      <div class="flex items-center gap-1.5">
        <button data-msg-idx="${t}" data-msg-type="sent"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${i}">${r("sidebar.sent")}</button>
        <button data-msg-idx="${t}" data-msg-type="received"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${a}">${r("sidebar.received")}</button>
        <div class="flex gap-0.5 ml-1">
          ${ft.map(o=>`
            <button data-msg-idx="${t}" data-msg-status="${o.id}"
              class="p-1 rounded-md transition-all ${s===o.id?"bg-white/15 ring-1 ring-white/20":"text-zinc-600 hover:text-zinc-300 hover:bg-white/5"}"
              title="${o.title}">${o.svg}</button>
          `).join("")}
        </div>
        <input type="text" data-msg-idx="${t}" data-msg-field="time" value="${h(e.time)}"
          class="w-14 rounded-lg border border-white/[6%] bg-white/[4%] px-2 py-1 text-[10px] text-zinc-200 text-center outline-0 focus:border-zinc-600 transition-colors" placeholder="${r("sidebar.timePlaceholder")}" />
        <button data-msg-idx="${t}" data-msg-action="delete"
          class="p-1 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all" title="${r("sidebar.deleteMessage")}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `}function ht(e){return`
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${r("sidebar.labels.padding")}</span>
      <div class="flex items-center gap-3">
        <input id="input-padding" type="range" min="16" max="96" value="${e.padding}"
          class="flex-1 accent-zinc-400 h-1 cursor-pointer" />
        <span id="padding-value" class="text-xs text-zinc-500 w-8 text-right">${e.padding}</span>
      </div>
    </label>
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${r("sidebar.labels.background")}</span>
      <div class="flex flex-wrap gap-1.5">
        ${pt.map(t=>`
          <button data-gradient="${t.value}" aria-label="${t.label}"
            class="w-7 h-7 rounded-lg ${t.value} ring-1 ring-white/[8%] hover:ring-white/30 transition-all
              ${e.bgGradient===t.value?"ring-2 ring-white scale-110":""}"></button>
        `).join("")}
      </div>
    </label>
  `}function xt(e){const n=T()==="de"?"/de":"";return`
    <div id="bottom-bar" class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
                flex items-center gap-1 rounded-full bg-white/[6%] backdrop-blur-2xl
                border border-white/[8%] px-2 py-1.5 shadow-2xl shadow-black/30">
      <button id="btn-mockup-theme" aria-label="${r("bottom.toggleTheme")}" class="rounded-full p-2 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${r("bottom.toggleTheme")}">
        ${e.mockupTheme==="light"?x.sun:x.moon}
      </button>
      <span class="ml-2 flex items-center gap-2 pl-2 border-l border-white/[6%] text-[10px] text-zinc-600">
        <a href="${n}/imprint" class="hover:text-zinc-400 transition-colors">${r("bottom.imprint")}</a>
        <a href="${n}/privacy" class="hover:text-zinc-400 transition-colors">${r("bottom.privacy")}</a>
      </span>
    </div>
  `}function vt(){const e=document.getElementById("app");if(!e)return;const t=l.getState();e.innerHTML=`
    ${gt()}
    <div id="main-area" class="flex-1 flex overflow-hidden">
      ${mt(t)}
      <main id="canvas" class="flex-1 relative overflow-hidden">
        <div id="canvas-area" class="absolute inset-0 flex items-center justify-center overflow-hidden z-10">
          <div id="mockup"></div>
        </div>
        ${xt(t)}
      </main>
    </div>
  `,wt(),R()}function bt(e){const t=document.getElementById("settings-panel");t&&(t.innerHTML=`
    <span class="text-xs font-semibold text-zinc-300 tracking-wide">${r("sidebar.settings")} · <span class="text-zinc-500 font-normal normal-case">${ne()}</span></span>
    ${ie(e)}
  `,se())}function wt(){v("btn-topbar-export","click",Et),v("btn-mockup-theme","click",()=>{const t=l.get("mockupTheme")==="light"?"dark":"light";l.set("mockupTheme",t)}),v("lang-select","change",t=>{const n=t.target.value;window.location.href=n==="en"?"/":`/${n}/`}),v("btn-start-tour","click",()=>X()),document.querySelectorAll("[data-gradient]").forEach(t=>{t.addEventListener("click",()=>l.set("bgGradient",t.dataset.gradient))}),document.querySelectorAll("[data-app]").forEach(t=>{t.addEventListener("click",()=>{const n=I.find(i=>i.id===t.dataset.app);n&&l.set("theme",n.theme),zt()})});const e=document.getElementById("app-library-toggle");e&&e.addEventListener("click",()=>{const t=document.getElementById("app-library-body"),n=document.getElementById("app-library-chevron");if(!t)return;const i=t.style.display==="none";t.style.display=i?"":"none",n&&(n.style.transform=i?"rotate(0deg)":"rotate(180deg)")}),se()}function se(){v("input-padding","input",e=>{l.set("padding",Number(e.target.value));const t=document.getElementById("padding-value");t&&(t.textContent=e.target.value)}),v("input-message","input",e=>l.set("message",e.target.value)),v("input-avatar","change",async e=>{var n;const t=(n=e.target.files)==null?void 0:n[0];if(t&&t.type.startsWith("image/")&&!(t.size>5*1024*1024))try{const i=l.get("avatar"),a=await ve(t);i&&i.startsWith("blob:")&&URL.revokeObjectURL(i),l.set("avatar",a)}catch{l.set("avatar",null)}}),["messenger","instagram","twitter","tiktok","social-post"].includes(f)?(v("input-author","input",e=>l.set("author",e.target.value)),v("input-handle","input",e=>l.set("handle",e.target.value))):f==="discord"?(v("input-username","input",e=>l.set("username",e.target.value)),v("input-rolecolor","input",e=>l.set("roleColor",e.target.value)),v("input-timestamp","input",e=>l.set("timestamp",e.target.value))):["whatsapp","telegram","signal","imessage"].includes(f)&&(v("input-username","input",e=>l.set("username",e.target.value)),f==="whatsapp"?yt():v("input-timestamp","input",e=>l.set("timestamp",e.target.value)))}function yt(){const e=document.getElementById("btn-add-message");e&&(e.onclick=()=>{const n=[...l.get("messages")];n.push({id:Date.now(),text:"",type:l.get("waMode")||"sent",time:""}),l.set("messages",n),A(l.getState())});const t=document.getElementById("wa-message-list");t&&(t.addEventListener("input",n=>{const i=n.target,a=parseInt(i.dataset.msgIdx);if(!isNaN(a)){if(i.tagName==="TEXTAREA"){const s=[...l.get("messages")];s[a]&&(s[a]={...s[a],text:i.value}),l.set("messages",s)}else if(i.dataset.msgField==="time"){const s=[...l.get("messages")];s[a]&&(s[a]={...s[a],time:i.value}),l.set("messages",s)}}}),t.addEventListener("click",n=>{const i=n.target.closest("[data-msg-type], [data-msg-status], [data-msg-action]");if(!i)return;const a=parseInt(i.dataset.msgIdx);if(!isNaN(a)){if(i.dataset.msgType){const s=[...l.get("messages")];s[a]&&(s[a]={...s[a],type:i.dataset.msgType}),l.set("messages",s),A(l.getState())}else if(i.dataset.msgStatus){const s=[...l.get("messages")];s[a]&&(s[a]={...s[a],status:i.dataset.msgStatus}),l.set("messages",s),A(l.getState())}else if(i.dataset.msgAction==="delete"){const s=l.get("messages").filter((o,c)=>c!==a);l.set("messages",s),A(l.getState())}}}))}function A(e){const t=document.getElementById("wa-message-list");t&&(t.innerHTML=e.messages.map((n,i)=>ae(n,i)).join(""))}function R(){const e=te[f];if(!e)return;const t=l.getState(),n=document.getElementById("mockup");n&&(n.innerHTML=e.render(t)),re(t),requestAnimationFrame(oe)}function kt(e,t,n){if(!N){N=!0;try{const i=te[f];if(!i)return;if(e==="theme"){f=t;const a=le();a&&l.mutate({author:a.author||"",handle:a.handle||"",username:a.username||a.author||"",message:a.message||"",timestamp:a.time||"",roleColor:a.roleColor||"#5865F2",messages:a.messages||[{id:1,text:a.message||"",type:l.get("waMode")||"sent",time:a.time||"",status:"read"}]}),R(),bt(l.getState()),$t(t),ye()&&requestAnimationFrame(()=>Ee());return}if(e==="bgGradient"&&re(n),e==="mockupTheme"){const a=document.getElementById("btn-mockup-theme");a&&(a.innerHTML=t==="light"?x.sun:x.moon),R();return}if(e==="waMode")return;e==="avatar"&&be(f==="discord"?"discord-avatar":f==="whatsapp"?"wa-avatar":"mockup-avatar"),i.sync(n)}finally{N=!1}}}function $t(e){document.querySelectorAll("[data-app]").forEach(t=>{const n=I.find(a=>a.id===t.dataset.app),i=n&&n.theme===e;t.className=`flex flex-col items-center gap-1.5 rounded-xl border p-2.5 transition-all text-center ${i?"border-white/15 bg-white/[8%]":"border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]"}`})}function re(e){const t=document.getElementById("canvas");if(!t)return;const n=ut[e.bgGradient]||["#38bdf8","#4f46e5"];t.style.background=`
    radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(135deg, ${n[0]}, ${n[1]})
  `,t.style.backgroundSize="40px 40px, 100% 100%"}function oe(){if(G)return;const e=document.getElementById("canvas"),t=document.getElementById("mockup-card");if(!e||!t)return;const n=e.getBoundingClientRect(),i=Math.min(n.width/390,n.height/844)*.9;t.style.transform=`scale(${i})`,t.style.transformOrigin="center center"}window.addEventListener("resize",oe);async function Et(){const e=document.getElementById("btn-topbar-export"),t=document.getElementById("btn-export-icon"),n=document.getElementById("btn-export-label");if(!e||e.disabled)return;G=!0,e.disabled=!0,t&&(t.innerHTML=x.spinner),n&&(n.textContent=r("topbar.rendering"));const i=document.getElementById("mockup-card");if(!i){p();return}const a=i.style.transform,s=i.style.transformOrigin;i.style.transform="",i.style.transformOrigin="";const o=i.querySelectorAll('[style*="background-image"]'),c=[];o.forEach((u,g)=>{c[g]=u.style.backgroundImage,u.style.backgroundImage="none"});const m=i.querySelectorAll("img"),d=[];m.forEach((u,g)=>{d[g]=u.src,u.src.startsWith("blob:")&&(u.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}),await new Promise(u=>requestAnimationFrame(u));try{const{toPng:u}=await ue(async()=>{const{toPng:$}=await import("./index-CgJtiJsK.js");return{toPng:$}},[]),g=await u(i,{pixelRatio:2});i.style.transform=a,i.style.transformOrigin=s,o.forEach(($,S)=>{$.style.backgroundImage=c[S]}),m.forEach(($,S)=>{d[S]&&($.src=d[S])});const b=new Date,_=`${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,"0")}-${String(b.getDate()).padStart(2,"0")}_${String(b.getHours()).padStart(2,"0")}-${String(b.getMinutes()).padStart(2,"0")}-${String(b.getSeconds()).padStart(2,"0")}`,ce=`koalasnap-${f}-${_}.png`,H=document.createElement("a");H.download=ce,H.href=g,H.click(),t&&(t.innerHTML=x.check),n&&(n.textContent=r("topbar.exported")),e.classList.remove("bg-[#f97316]","hover:bg-[#ea580c]"),e.classList.add("bg-emerald-500","hover:bg-emerald-600"),setTimeout(p,2e3)}catch(u){i.style.transform=a,i.style.transformOrigin=s,o.forEach((g,b)=>{g.style.backgroundImage=c[b]}),m.forEach((g,b)=>{d[b]&&(g.src=d[b])}),console.error("Export failed:",u),t&&(t.innerHTML=x.download),n&&(n.textContent=r("topbar.exportFailed")),e.disabled=!1,setTimeout(()=>{n&&(n.textContent=r("topbar.export")),t&&(t.innerHTML=x.download)},2e3)}function p(){G=!1,e.disabled=!1,e.classList.remove("bg-emerald-500","hover:bg-emerald-600"),e.classList.add("bg-[#f97316]","hover:bg-[#ea580c]"),t&&(t.innerHTML=x.download),n&&(n.textContent=r("topbar.export"))}}function v(e,t,n){var i;(i=document.getElementById(e))==null||i.addEventListener(t,n)}function zt(){const e=document.getElementById("app-library-body"),t=document.getElementById("app-library-chevron");e&&(e.style.display="none"),t&&(t.style.transform="rotate(180deg)")}function le(){var s,o;const e=[{author:"Maya",handle:"@maya_99",username:"Maya",message:"Hey, are you coming online tonight?",time:"7:18 PM",roleColor:"#e81224",messages:[{text:"Hey, are you coming online tonight?",type:"sent",time:"7:18 PM"},{text:"Yeah, give me 5!",type:"received",time:"7:20 PM"},{text:"Sure, take your time 🐨",type:"sent",time:"7:21 PM"}]}],t=window.__LOCALE__,n=t!=null&&t.dummySets&&t.dummySets.length>0?t.dummySets:e,i=n[Math.floor(Math.random()*n.length)],a=i.messages&&i.messages.length>0?i.messages.map((c,m)=>({id:m+1,text:c.text,type:c.type,time:c.time,status:c.status||"read"})):[{id:1,text:i.message||"",type:l.get("waMode")||"sent",time:i.time||"",status:"read"}];return{author:i.author||"",handle:i.handle||"",username:i.username||i.author||"",message:i.message||((s=a[0])==null?void 0:s.text)||"",time:i.time||((o=a[0])==null?void 0:o.time)||"",roleColor:i.roleColor||"#5865F2",messages:a}}l.subscribe(kt);try{const e=localStorage.getItem("koalasnap_state"),t=T();let n=!e;if(e)try{const i=JSON.parse(e);(!i.locale||i.locale!==t)&&(n=!0)}catch{n=!0}if(n){const i=le();i&&l.mutate({...i,locale:t})}}catch{}vt();we()||setTimeout(()=>X(),800);
