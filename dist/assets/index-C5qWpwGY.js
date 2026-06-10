(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const he="modulepreload",xe=function(e){return"/"+e},J={},me=function(t,i,n){let s=Promise.resolve();if(i&&i.length>0){let o=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),h=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(i.map(d=>{if(d=xe(d),d in J)return;J[d]=!0;const u=d.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":he,u||(f.as="script"),f.crossOrigin="",f.href=d,h&&f.setAttribute("nonce",h),document.head.appendChild(f),u)return new Promise((w,P)=>{f.addEventListener("load",w),f.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return t().catch(r)})},Z="koalasnap_state";function ve(e){try{const t=localStorage.getItem(Z);if(t)return{...e,...JSON.parse(t)}}catch{}return{...e}}function L(e){try{const{avatar:t,...i}=e;localStorage.setItem(Z,JSON.stringify(i))}catch{}}function we(e){const t=ve(e),i=new Set;return{get(n){return t[n]},getState(){return{...t}},set(n,s){t[n]=s,L(t),i.forEach(r=>r(n,s,t))},setAll(n){Object.assign(t,n),L(t),i.forEach(s=>s(null,null,t))},mutate(n){Object.assign(t,n),L(t),i.forEach(s=>s(null,null,t))},subscribe(n){return i.add(n),()=>i.delete(n)},reset(){Object.assign(t,e),L(t),i.forEach(n=>n(null,null,t))}}}const be={theme:"whatsapp",author:"Maya",handle:"@maya_99",username:"Maya",roleColor:"#e81224",timestamp:"7:18 PM",message:"Hey, are you coming online tonight?",avatar:null,bgGradient:"from-sky-400 to-indigo-600",padding:48,mockupTheme:"light",waMode:"sent",locale:"en",messages:[{id:1,text:"Hey, are you coming online tonight?",type:"sent",time:"7:18 PM",status:"read"},{id:2,text:"Yeah, give me 5!",type:"received",time:"7:20 PM",status:"read"},{id:3,text:"Sure, take your time 🐨",type:"sent",time:"7:21 PM",status:"delivered"}]},l=we(be),ye=window.__LOCALE__||{};function a(e){return e.split(".").reduce((i,n)=>i!=null?i[n]:void 0,ye)??e}function F(){const e=window.location.pathname;return e.startsWith("/de/")||e==="/de"?"de":"en"}function p(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}const T=500,ke=.8;function $e(e){return new Promise((t,i)=>{const n=new FileReader;n.onerror=()=>i(new Error("File read failed")),n.onload=s=>{const r=new Image;r.onerror=()=>i(new Error("Image decode failed")),r.onload=()=>{let{width:o,height:c}=r;if(o>T||c>T){const u=Math.min(T/o,T/c);o=Math.round(o*u),c=Math.round(c*u)}const h=document.createElement("canvas");h.width=o,h.height=c;const d=h.getContext("2d");if(!d){i(new Error("Canvas 2D not supported"));return}d.imageSmoothingEnabled=!0,d.imageSmoothingQuality="high",d.drawImage(r,0,0,o,c),h.toBlob(u=>{if(!u){i(new Error("WebP encoding failed"));return}t(URL.createObjectURL(u))},"image/webp",ke)},r.src=s.target.result},n.readAsDataURL(e)})}function Be(e){const t=document.getElementById(e);t instanceof HTMLImageElement&&(t.src="")}const ee="koalasnap_tutorial_completed",$=[{target:"app-library",key:"tutorial.step1"},{target:"settings-panel",key:"tutorial.step2"},{target:"canvas-area",key:"tutorial.step3"},{target:"bottom-bar",key:"tutorial.step4"},{target:"btn-topbar-export",key:"tutorial.step5"}];let b=0,z=!1,y=null;function Ce(){return localStorage.getItem(ee)==="true"}function Ee(){return z}function te(){z&&M(),b=0,z=!0;const e=Le();e.classList.remove("hidden"),e.style.pointerEvents="auto",j(0),document.addEventListener("keydown",ie)}function ie(e){e.key==="Escape"&&M()}function M(){z=!1,y&&(clearTimeout(y),y=null),_(b);const e=document.getElementById("tutorial-overlay");e&&(e.classList.add("hidden"),e.style.pointerEvents=""),localStorage.setItem(ee,"true"),document.removeEventListener("keydown",ie)}function ze(){if(_(b),b++,b>=$.length){M();return}j(b)}function Me(){_(b),b=Math.max(0,b-1),j(b)}function Se(){z&&(_(b),j(b))}function Le(){let e=document.getElementById("tutorial-overlay");return e||(e=document.createElement("div"),e.id="tutorial-overlay",e.className="fixed inset-0 bg-black/60 z-40 hidden",document.body.appendChild(e)),e}function j(e){y&&(clearTimeout(y),y=null);const t=$[e];if(!t)return;const i=document.getElementById(t.target);if(!i)return;i.classList.add("tutorial-highlight"),i.style.zIndex="50",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.scrollIntoView({behavior:"smooth",block:"center"});const n=i.getBoundingClientRect();y=setTimeout(()=>{Te(e,n),y=null},400)}function _(e){y&&(clearTimeout(y),y=null);const t=$[e];if(!t)return;const i=document.getElementById(t.target);i&&(i.classList.remove("tutorial-highlight"),i.style.zIndex="",i.style.position="");const n=document.getElementById("tutorial-tooltip");n&&n.remove()}function Te(e,t){const i=document.getElementById("tutorial-tooltip");i&&i.remove();const n=$.length,s=e===0,r=e===n-1,o=document.createElement("div");o.id="tutorial-tooltip",o.className="fixed z-50 w-[320px] rounded-2xl border border-white/[10%] bg-[#1a1714]/95 backdrop-blur-2xl p-4 shadow-2xl shadow-black/50 opacity-0 transition-opacity duration-200",o.innerHTML=`
    <p class="text-sm text-zinc-200 leading-relaxed mb-4">${a(Ae(e))}</p>
    <div class="flex items-center justify-between">
      <span class="text-xs text-zinc-500">${e+1} ${a("tutorial.of")} ${n}</span>
      <div class="flex items-center gap-2">
        ${s?"":`<button id="tut-prev" class="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all">${a("tutorial.back")}</button>`}
        <button id="tut-next" class="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#f97316] hover:bg-[#ea580c] active:scale-[0.97] transition-all">${a(r?"tutorial.done":"tutorial.next")}</button>
      </div>
    </div>
    <button id="tut-skip" class="mt-2 text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors">${a("tutorial.skip")}</button>
  `,document.body.appendChild(o),Ie(o,t),requestAnimationFrame(()=>{o.classList.remove("opacity-0")}),je(e)}function Ae(e){var t;return((t=$[e])==null?void 0:t.key)||""}function Ie(e,t){const s=e.offsetWidth||320,r=e.offsetHeight||160,o=window.innerWidth-s-16,c=window.innerHeight-r-16,h=t.left+t.width/2;let d=Math.max(16,Math.min(h-s/2,o)),u=t.bottom+12;u+r>window.innerHeight-16&&(u=t.top-r-12),u<16&&(u=16,d=Math.min(t.right+12,o),d=Math.max(16,d)),d=Math.max(16,Math.min(d,o)),u=Math.max(16,Math.min(u,c)),e.style.left=`${d}px`,e.style.top=`${u}px`}function je(e){const t=document.getElementById("tut-next");t&&(t.onclick=()=>e===$.length-1?M():ze());const i=document.getElementById("tut-prev");i&&(i.onclick=()=>Me());const n=document.getElementById("tut-skip");n&&(n.onclick=()=>M())}const ne="?",K='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',_e='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',q='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',U='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',Pe='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>';function Y(e,t){return e?`<img id="mockup-avatar" src="${e}" class="w-full h-full rounded-full object-cover" />`:`<div id="mockup-avatar" class="w-full h-full rounded-full bg-gradient-to-br ${t?"from-zinc-600 to-zinc-800":"from-sky-400 to-indigo-500"} flex items-center justify-center text-white text-sm font-bold">${ne}</div>`}function Ge(e,t){const i=t?"bg-zinc-900":"bg-white",n=t?"text-zinc-100":"text-zinc-900",s=t?"text-zinc-400":"text-zinc-500",r=t?"text-zinc-300":"text-zinc-800",o=t?"border-zinc-700":"border-zinc-200";return`
    <div id="mockup-card" class="${i} rounded-2xl shadow-2xl shadow-black/20 mx-auto overflow-hidden ring-1 ring-white/[6%] p-3" style="width:400px; height:520px;">
      <div class="flex items-start gap-3">
        <div class="w-11 h-11 rounded-full shrink-0 overflow-hidden">
          ${Y(e.avatar,t)}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1">
            <span id="mockup-author" class="text-[15px] font-bold ${n} leading-tight truncate">${p(e.author)}</span>
            <span class="text-[13px] ${s}">@${p(e.handle)}</span>
            <span class="text-[13px] ${s}">· 1h</span>
          </div>
        </div>
      </div>
      <p id="mockup-message" class="mt-2 text-[15px] ${r} leading-relaxed whitespace-pre-wrap break-words">${p(e.message)}</p>
      <div class="mt-2 h-48 rounded-xl ${t?"bg-zinc-800":"bg-zinc-100"} flex items-center justify-center ${s} text-sm">📷</div>
      <div class="flex items-center justify-between mt-2 pt-2 ${o} border-t text-sm ${s}">
        <div class="flex items-center gap-5">
          <span class="flex items-center gap-1">${q} <span id="mockup-replies">1</span></span>
          <span class="flex items-center gap-1">${_e} <span id="mockup-retweets">3</span></span>
          <span class="flex items-center gap-1">${K} <span id="mockup-likes">12</span></span>
        </div>
        <span>${U}</span>
      </div>
    </div>
  `}function He(e,t){const i=t?"bg-black":"bg-white",n=t?"text-white":"text-zinc-900",s=t?"text-zinc-400":"text-zinc-500";return`
    <div id="mockup-card" class="${i} rounded-2xl shadow-2xl shadow-black/20 mx-auto overflow-hidden ring-1 ring-white/[6%]" style="width:400px; height:600px;">
      <div class="flex items-center gap-3 px-3 py-2.5">
        <div class="w-8 h-8 rounded-full shrink-0 overflow-hidden">
          ${Y(e.avatar,t)}
        </div>
        <div class="flex-1 min-w-0">
          <span id="mockup-author" class="text-[13px] font-semibold ${n} leading-tight truncate">${p(e.author)}</span>
        </div>
        <span class="${s}">${Pe}</span>
      </div>
      <div class="w-full h-72 ${t?"bg-zinc-800":"bg-zinc-100"} flex items-center justify-center ${s} text-sm">📷</div>
      <div class="px-3 pt-2 pb-3">
        <div class="flex items-center gap-3 text-xl ${n}">
          <span>${K}</span>
          <span>${q}</span>
          <span class="ml-auto">${U}</span>
        </div>
        <p class="mt-1 text-[13px] font-semibold ${n}"><span id="mockup-likes">142</span> likes</p>
        <p class="mt-1 text-[13px] ${n}"><span class="font-semibold">${p(e.author)}</span> <span id="mockup-message" class="${n}">${p(e.message)}</span></p>
        <p class="mt-1 text-[13px] ${s}">View all 3 comments</p>
        <p class="mt-0.5 text-[11px] ${s} uppercase tracking-wider">1 hour ago</p>
      </div>
    </div>
  `}function Ve(e,t){const i=t?"#1a1a2e":"#f0f2f5",n=t?"#1c1c2e":"#007aff";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${t?"#121212":"#ffffff"};background:${t?"#121212":"#ffffff"}">
        <div class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${n}">
          <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">09:41</span>
          <div class="flex items-center gap-1.5">
            <span class="text-[11px]"><svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg></span>
            <span class="text-[11px]"><svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg></span>
            <span class="text-[11px]"><svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg></span>
          </div>
        </div>
        <div class="flex items-center gap-2 px-3 py-1.5 shrink-0 text-white" style="background:${n}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          <span class="text-[15px] font-medium">${p(e.username)}</span>
        </div>
        <div class="flex-1 p-3 overflow-y-auto flex flex-col gap-3" style="background:${i}">
          <div class="flex justify-end">
            <div class="max-w-[75%] rounded-2xl px-3.5 py-2" style="background:#007aff">
              <p id="mockup-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${p(e.message)}</p>
              <div class="flex items-center justify-end gap-1 mt-0.5">
                <span class="text-[11px] text-[#ffffffcc]">${p(e.timestamp)}</span>
                <svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${t?"#1a1a2e":"#f0f2f5"}">
          <div class="flex-1 rounded-2xl px-4 py-2 text-[15px] bg-white text-zinc-400">Aa</div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007aff" stroke-width="2.5" stroke-linecap="round"><polygon points="22 2 11 13 22 2"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </div>
      </div>
    </div>
  `}function Oe(e,t){const i="text-white";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col relative" style="border-color:#111;background:#111">
        <div class="absolute inset-0 ${t?"bg-zinc-900":"bg-zinc-800"} flex items-center justify-center text-6xl">🎵</div>
        <div class="absolute inset-0" style="background:linear-gradient(transparent 60%, rgba(0,0,0,0.7))"></div>
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
                <p class="text-[14px] font-bold ${i}"><span id="mockup-author">${p(e.author)}</span> <span class="font-normal text-zinc-300">@${p(e.handle)}</span></p>
                <p id="mockup-message" class="mt-1 text-[13px] ${i} leading-relaxed whitespace-pre-wrap">${p(e.message)}</p>
              </div>
              <div class="flex flex-col items-center gap-3 shrink-0">
                <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50">
                  ${Y(e.avatar,!1)}
                </div>
                <div class="flex flex-col items-center gap-4 text-white text-xs">
                  <div class="flex flex-col items-center gap-0.5">${K}<span id="mockup-likes" class="text-[10px]">12.4k</span></div>
                  <div class="flex flex-col items-center gap-0.5">${q}<span id="mockup-replies" class="text-[10px]">241</span></div>
                  <div class="flex flex-col items-center gap-0.5">${U}<span class="text-[10px]">Share</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function C(e){const t=e.mockupTheme==="dark";switch(e.theme||"twitter"){case"instagram":return He(e,t);case"messenger":return Ve(e,t);case"tiktok":return Oe(e,t);case"twitter":default:return Ge(e,t)}}function E(e){const t=e.theme||"twitter";k("mockup-author",i=>{i&&(i.textContent=e.author)}),k("mockup-message",i=>{i&&(i.textContent=e.message)}),k("mockup-likes",i=>{i&&(i.textContent="142")}),k("mockup-replies",i=>{i&&(i.textContent="1")}),k("mockup-retweets",i=>{i&&(i.textContent="3")}),t==="messenger"?k("mockup-avatar",i=>{i&&X(i,e,!1)}):k("mockup-avatar",i=>{i&&X(i,e,e.mockupTheme==="dark")})}function X(e,t,i){if(t.avatar){const n=document.createElement("img");n.id="mockup-avatar",n.src=t.avatar,n.className="w-full h-full rounded-full object-cover",n.alt="",e.replaceWith(n)}else{const n=document.createElement("div");n.id="mockup-avatar";const s=i?"from-zinc-600 to-zinc-800":"from-sky-400 to-indigo-500";n.className=`w-full h-full rounded-full bg-gradient-to-br ${s} flex items-center justify-center text-white text-sm font-bold`,n.textContent=ne,e.replaceWith(n)}}function k(e,t){const i=document.getElementById(e);i&&t(i)}const Ne='<svg width="20" height="20" viewBox="0 0 24 24" fill="#949ba4"><path d="M5 9h14M5 15h14M11 3L9 21M15 3l-2 18"/></svg>',Re='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#949ba4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/></svg>',We='<svg width="16" height="16" viewBox="0 0 24 24" fill="#949ba4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',De='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5bac1" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',Fe='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5bac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',Ke=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.02'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.015'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.02'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.015'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.02'/%3E%3C/svg%3E")`,qe={sidebarBg:"#2b2d31",chatBg:"#313338",inputBg:"#383a40",inputText:"#dbdee1",placeholder:"#949ba4",divider:"#3f4147",dotPattern:"none"},Ue={sidebarBg:"#1e1f22",chatBg:"#313338",inputBg:"#383a40",inputText:"#dbdee1",placeholder:"#949ba4",divider:"#3f4147",dotPattern:Ke};function Ye(e){return e.mockupTheme==="light"?qe:Ue}function Je(e){const t=Ye(e),i=e.avatar?`<img id="discord-avatar" src="${e.avatar}" class="w-10 h-10 rounded-full object-cover" />`:'<div id="discord-avatar" class="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold">?</div>';return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:#1e1f22;background:#1e1f22">
        <div class="flex items-center gap-0 h-12 shrink-0 px-4" style="background:${t.sidebarBg}">
          <div class="flex items-center gap-2 flex-1 min-w-0">
            ${Ne}
            <span class="text-white text-[15px] font-semibold leading-tight truncate">general</span>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${Re}
            <span>${We}</span>
          </div>
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto" style="background:${t.chatBg};background-image:${t.dotPattern}">
          <div class="p-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-0.5">
                ${i}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-baseline gap-2">
                  <span id="discord-username"
                    class="font-medium text-[16px] leading-tight truncate max-w-[280px]"
                    style="color: ${e.roleColor}">${p(e.username)}</span>
                  <span id="discord-timestamp" class="text-[#949ba4] text-xs leading-tight shrink-0">${p(e.timestamp)}</span>
                </div>
                <div id="discord-message"
                  class="text-[#dbdee1] text-[16px]/[1.4] mt-0.5 whitespace-pre-wrap break-words">${p(e.message)}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="shrink-0 px-4 py-3" style="background:${t.chatBg}">
          <div class="flex items-center gap-2 rounded-lg px-4 py-2.5" style="background:${t.inputBg}">
            <span>${De}</span>
            <span class="flex-1 text-[15px]" style="color:${t.placeholder}">Message #general</span>
            <span>${Fe}</span>
          </div>
        </div>
      </div>
    </div>
  `}function Xe(e){H("discord-username",i=>{i.textContent=e.username,i.style.color=e.roleColor}),H("discord-timestamp",i=>{i.textContent=e.timestamp}),H("discord-message",i=>{i.textContent=e.message});const t=document.getElementById("discord-avatar");if(t)if(e.avatar){const i=document.createElement("img");i.id="discord-avatar",i.src=e.avatar,i.className="w-10 h-10 rounded-full object-cover",i.alt="",t.replaceWith(i)}else{const i=document.createElement("div");i.id="discord-avatar",i.className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold",i.textContent="?",t.replaceWith(i)}}function H(e,t){const i=document.getElementById(e);i&&t(i)}const Qe='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',Ze='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',et='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',tt='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>',it='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',nt='<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>',st='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',rt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',at='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',ot=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='white' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='white' opacity='0.03'/%3E%3C/svg%3E")`,lt=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='black' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='black' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='black' opacity='0.03'/%3E%3C/svg%3E")`,ct='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>',dt='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>',pt='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',ut='<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>',gt={barBg:"#008069",chatBg:"#efeae2",sentBg:"#d9fdd3",recvBg:"#ffffff",sentText:"#111b21",recvText:"#111b21",timeText:"#667781",inputBg:"#f0f2f5",fieldBg:"#ffffff",fieldText:"#111b21",placeholder:"#8696a0",dotPattern:lt},ft={barBg:"#202c33",chatBg:"#0b141a",sentBg:"#005c4b",recvBg:"#202c33",sentText:"#e9edef",recvText:"#e9edef",timeText:"#ffffffcc",inputBg:"#202c33",fieldBg:"#2a3942",fieldText:"#e9edef",placeholder:"#8696a0",dotPattern:ot};function se(e){return e.mockupTheme==="light"?gt:ft}function ht(e){const t=se(e),i=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${i};background:${i}">
        ${xt(t)}
        ${mt(e,t)}
        ${vt(e,t)}
        ${wt(t)}
      </div>
    </div>
  `}function xt(e){return`
    <div class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${e.barBg}">
      <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">09:41</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${tt}</span>
        <span class="text-[11px]">${it}</span>
        <span class="text-[11px]">${nt}</span>
      </div>
    </div>
  `}function mt(e,t){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${t.barBg}">
      <span class="shrink-0">${Qe}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="wa-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="wa-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="wa-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${p(e.username)}</div>
        <div id="wa-status-text" class="text-[#8696a0] text-[11px] leading-tight">online</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${Ze}
        ${et}
      </div>
    </div>
  `}function vt(e,t){return`
    <div class="flex-1 p-4 overflow-y-auto" style="background:${t.chatBg};background-image:${t.dotPattern}">
      <div id="wa-messages" class="flex flex-col gap-3">
        ${e.messages.map(i=>re(i,t)).join("")}
      </div>
    </div>
  `}function re(e,t){const i=e.type==="sent",n=i?t.sentBg:t.recvBg,s=i?t.sentText:t.recvText,r=n,o=i?"justify-end":"justify-start",c=e.status||"read",h=i?`<div class="absolute -right-[7px] bottom-[6px] w-0 h-0 border-l-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-left-color:${r}"></div>`:`<div class="absolute -left-[7px] bottom-[6px] w-0 h-0 border-r-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-right-color:${r}"></div>`;let d="";i&&(c==="read"?d=ct:c==="delivered"?d=dt:c==="sent"&&(d=pt));const u=c==="unread",g=u?"font-semibold":"",f=u?`<span class="inline-flex ml-1 -mb-0.5">${ut}</span>`:"";return`
    <div class="flex ${o}">
      ${i?"":'<div class="w-[34px] shrink-0"></div>'}
      <div class="relative max-w-[80%]">
        <div class="rounded-2xl px-3.5 py-2" style="background:${n}">
          <p class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words ${g}" style="color:${s}">${p(e.text)}</p>
          <div class="flex items-center justify-end gap-1 mt-0.5">
            <span class="text-[11px] leading-none" style="color:${t.timeText}">${p(e.time)}</span>
            ${d?`<span class="inline-flex -mb-0.5">${d}</span>`:""}
            ${f}
          </div>
        </div>
        ${h}
      </div>
    </div>
  `}function wt(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${st}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.placeholder}">Message</div>
      <span>${rt}</span>
      <span>${at}</span>
    </div>
  `}function bt(e){yt("wa-contact-name",n=>{n.textContent=e.username});const t=document.getElementById("wa-avatar");if(t)if(e.avatar){const n=document.createElement("img");n.id="wa-avatar",n.src=e.avatar,n.className="w-full h-full rounded-full object-cover",n.alt="",t.replaceWith(n)}else{const n=document.createElement("div");n.id="wa-avatar",n.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",n.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',t.replaceWith(n)}const i=document.getElementById("wa-messages");if(i){const n=se(e);i.innerHTML=e.messages.map(s=>re(s,n)).join("")}}function yt(e,t){const i=document.getElementById(e);i&&t(i)}const kt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',$t='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',Bt='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',Ct='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',Et='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',zt='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>',Mt='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',St='<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>',Lt='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffcc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',Tt=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='white' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='white' opacity='0.03'/%3E%3C/svg%3E")`,At=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='black' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='black' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='black' opacity='0.03'/%3E%3C/svg%3E")`,It={barBg:"#4e8ad4",chatBg:"#eef2f6",sentBg:"#8774e1",timeText:"#00000080",inputBg:"#ffffff",fieldBg:"#eef2f6",dotPattern:At},jt={barBg:"#2f6ea5",chatBg:"#0f0f0f",sentBg:"#8774e1",timeText:"#ffffffcc",inputBg:"#1c1c1e",fieldBg:"#2a2a2e",dotPattern:Tt};function _t(e){return e.mockupTheme==="light"?It:jt}function Pt(e){return`
    <div class="flex items-center justify-between px-6 h-[44px] shrink-0" style="background:${e.barBg};color:#e9edef">
      <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">09:41</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${zt}</span>
        <span class="text-[11px]">${Mt}</span>
        <span class="text-[11px]">${St}</span>
      </div>
    </div>
  `}function Gt(e,t){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${t.barBg}">
      <span class="shrink-0">${kt}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="tg-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="tg-avatar" class="w-full h-full rounded-full bg-[#527da3] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#e9edef"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="tg-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${p(e.username)}</div>
        <div class="text-[#ffffffcc] text-[11px] leading-tight">online</div>
      </div>
      <div class="shrink-0">${$t}</div>
    </div>
  `}function Ht(e,t){return`
    <div class="flex-1 p-4 overflow-y-auto" style="background:${t.chatBg};background-image:${t.dotPattern}">
      <div class="flex justify-end">
        <div class="relative max-w-[80%]">
          <div class="rounded-2xl px-3.5 py-2" style="background:${t.sentBg}">
            <p id="tg-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${p(e.message)}</p>
            <div class="flex items-center justify-end gap-1 mt-0.5">
              <span id="tg-time" class="text-[11px] leading-none" style="color:${t.timeText}">${p(e.timestamp)}</span>
              <span class="inline-flex -mb-0.5">${Lt}</span>
            </div>
          </div>
          <div class="absolute -right-[7px] bottom-[6px] w-0 h-0 border-l-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-left-color:${t.sentBg}"></div>
        </div>
      </div>
    </div>
  `}function Vt(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${Bt}</span>
      <span>${Ct}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.timeText}">Message</div>
      <span>${Et}</span>
    </div>
  `}function Ot(e){const t=_t(e),i=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${i};background:${i}">
        ${Pt(t)}
        ${Gt(e,t)}
        ${Ht(e,t)}
        ${Vt(t)}
      </div>
    </div>
  `}function Nt(e){V("tg-contact-name",i=>{i.textContent=e.username}),V("tg-message",i=>{i.textContent=e.message}),V("tg-time",i=>{i.textContent=e.timestamp});const t=document.getElementById("tg-avatar");if(t)if(e.avatar){const i=document.createElement("img");i.id="tg-avatar",i.src=e.avatar,i.className="w-full h-full rounded-full object-cover",i.alt="",t.replaceWith(i)}else{const i=document.createElement("div");i.id="tg-avatar",i.className="w-full h-full rounded-full bg-[#527da3] flex items-center justify-center",i.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#e9edef"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',t.replaceWith(i)}}function V(e,t){const i=document.getElementById(e);i&&t(i)}const Rt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',Wt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',Dt='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',Ft='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>',Kt='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',qt='<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>',Ut='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',Yt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',Jt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',Xt='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffcc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',Qt={barBg:"#3b82f6",chatBg:"#f0f2f5",sentBg:"#3b82f6",sentText:"#ffffff",timeText:"#00000080",inputBg:"#f0f2f5",fieldBg:"#ffffff",fieldText:"#111b21",placeholder:"#8696a0"},Zt={barBg:"#1e1f22",chatBg:"#101214",sentBg:"#3b82f6",sentText:"#ffffff",timeText:"#ffffffcc",inputBg:"#1e1f22",fieldBg:"#2b2d30",fieldText:"#e9edef",placeholder:"#8696a0"};function ei(e){return e.mockupTheme==="light"?Qt:Zt}function ti(e){const t=ei(e),i=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${i};background:${i}">
        ${ii(t)}
        ${ni(e,t)}
        ${si(e,t)}
        ${ri(t)}
      </div>
    </div>
  `}function ii(e){return`
    <div class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${e.barBg}">
      <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">09:41</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${Ft}</span>
        <span class="text-[11px]">${Kt}</span>
        <span class="text-[11px]">${qt}</span>
      </div>
    </div>
  `}function ni(e,t){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${t.barBg}">
      <span class="shrink-0">${Rt}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="sg-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="sg-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="sg-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${p(e.username)}</div>
        <div class="text-[#ffffffcc] text-[11px] leading-tight">online</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${Wt}
        ${Dt}
      </div>
    </div>
  `}function si(e,t){return`
    <div class="flex-1 p-4 overflow-y-auto" style="background:${t.chatBg}">
      <div class="flex flex-col items-end gap-3">
        <div class="flex justify-end">
          <div class="relative max-w-[80%]">
            <div class="rounded-2xl px-3.5 py-2" style="background:${t.sentBg}">
              <p id="sg-message" class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words" style="color:${t.sentText}">${p(e.message)}</p>
              <div class="flex items-center justify-end gap-1 mt-0.5">
                <span id="sg-time" class="text-[11px] leading-none" style="color:${t.timeText}">${p(e.timestamp)}</span>
                <span class="inline-flex -mb-0.5">${Xt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function ri(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${Ut}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.placeholder}">Message</div>
      <span>${Yt}</span>
      <span>${Jt}</span>
    </div>
  `}function ai(e){O("sg-contact-name",i=>{i.textContent=e.username}),O("sg-message",i=>{i.textContent=e.message}),O("sg-time",i=>{i.textContent=e.timestamp});const t=document.getElementById("sg-avatar");if(t)if(e.avatar){const i=document.createElement("img");i.id="sg-avatar",i.src=e.avatar,i.className="w-full h-full rounded-full object-cover",i.alt="",t.replaceWith(i)}else{const i=document.createElement("div");i.id="sg-avatar",i.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",i.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',t.replaceWith(i)}}function O(e,t){const i=document.getElementById(e);i&&t(i)}const oi='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',li='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',ci='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>',di='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',pi='<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>',ui={barBg:"#f8f8f8",chatBg:"#ffffff",sentBg:"#34c759",timeText:"#8e8e93",inputBg:"#f8f8f8",fieldBg:"#e5e5ea",fieldText:"#000000",statusColor:"#000000",navColor:"#007aff"},gi={barBg:"#1c1c1e",chatBg:"#000000",sentBg:"#34c759",timeText:"#8e8e93",inputBg:"#1c1c1e",fieldBg:"#2c2c2e",fieldText:"#ffffff",statusColor:"#ffffff",navColor:"#ffffff"};function fi(e){return e.mockupTheme==="light"?ui:gi}function hi(e){const t=fi(e),i=e.mockupTheme==="light"?"#e5e5ea":"#1c1c1e";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${i};background:${i}">
        ${xi(t)}
        ${mi(e,t)}
        ${vi(e,t)}
        ${wi(t)}
      </div>
    </div>
  `}function xi(e){return`
    <div class="flex items-center justify-between px-7 h-[44px] shrink-0" style="background:${e.barBg};color:${e.statusColor}">
      <div class="w-[72px]"></div>
      <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">9:41</span>
      <div class="flex items-center gap-1.5 w-[72px] justify-end">
        <span class="text-[11px]">${ci}</span>
        <span class="text-[11px]">${di}</span>
        <span class="text-[11px]">${pi}</span>
      </div>
    </div>
  `}function mi(e,t){return`
    <div class="flex items-center gap-1 px-2 py-1.5 shrink-0" style="background:${t.barBg};color:${t.navColor}">
      <span class="shrink-0 px-1">${oi}</span>
      <div class="w-[34px] h-[34px] rounded-full overflow-hidden shrink-0 ml-1">
        ${e.avatar?`<img id="im-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="im-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="#8e8e93"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="im-contact-name" class="text-[15px] font-semibold leading-tight truncate" style="color:${t.statusColor}">${p(e.username)}</div>
      </div>
      <div class="flex items-center gap-2 shrink-0 px-1">
        <span style="color:${t.navColor}">${li}</span>
      </div>
    </div>
  `}function vi(e,t){return`
    <div class="flex-1 p-3 flex flex-col" style="background:${t.chatBg}">
      <div class="flex justify-end">
        <div class="relative max-w-[80%]">
          <div class="rounded-2xl px-3.5 py-2" style="background:${t.sentBg}">
            <p id="im-message" class="text-[#ffffff] text-[16px]/[1.4] whitespace-pre-wrap break-words">${p(e.message)}</p>
          </div>
          <div class="flex items-center justify-end gap-1 mt-1 pr-1">
            <span id="im-timestamp" class="text-[11px] leading-none" style="color:${t.timeText}">${p(e.timestamp)}</span>
          </div>
        </div>
      </div>
    </div>
  `}function wi(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <div class="flex-1 rounded-2xl px-4 py-2 text-[16px] leading-none" style="background:${e.fieldBg};color:${e.fieldText}">iMessage</div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#007aff"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    </div>
  `}function bi(e){N("im-message",i=>{i.textContent=e.message}),N("im-timestamp",i=>{i.textContent=e.timestamp}),N("im-contact-name",i=>{i.textContent=e.username});const t=document.getElementById("im-avatar");if(t)if(e.avatar){const i=document.createElement("img");i.id="im-avatar",i.src=e.avatar,i.className="w-full h-full rounded-full object-cover",i.alt="",t.replaceWith(i)}else{const i=document.createElement("div");i.id="im-avatar",i.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",i.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="#8e8e93"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',t.replaceWith(i)}}function N(e,t){const i=document.getElementById(e);i&&t(i)}const ae={"social-post":{render:C,sync:E},messenger:{render:C,sync:E},instagram:{render:C,sync:E},twitter:{render:C,sync:E},tiktok:{render:C,sync:E},discord:{render:Je,sync:Xe},whatsapp:{render:ht,sync:bt},telegram:{render:Ot,sync:Nt},signal:{render:ti,sync:ai},imessage:{render:hi,sync:bi}};let x=l.get("theme"),R=!1,W=!1;function oe(){return{"social-post":a("sidebar.socialPost"),messenger:a("sidebar.socialPost"),instagram:a("sidebar.socialPost"),twitter:a("sidebar.socialPost"),tiktok:a("sidebar.socialPost"),discord:a("sidebar.discord"),whatsapp:"WhatsApp",telegram:"Telegram",signal:"Signal",imessage:"iMessage"}[x]||x}const yi=[{label:"Sky",value:"from-sky-400 to-indigo-600"},{label:"Rose",value:"from-rose-400 to-orange-600"},{label:"Emerald",value:"from-emerald-400 to-cyan-600"},{label:"Amber",value:"from-amber-400 to-red-600"},{label:"Violet",value:"from-violet-400 to-fuchsia-600"},{label:"Charcoal",value:"from-zinc-800 to-zinc-950"}],ki={"from-sky-400 to-indigo-600":["#38bdf8","#4f46e5"],"from-rose-400 to-orange-600":["#fb7185","#ea580c"],"from-emerald-400 to-cyan-600":["#34d399","#0891b2"],"from-amber-400 to-red-600":["#fbbf24","#dc2626"],"from-violet-400 to-fuchsia-600":["#a78bfa","#c026d3"],"from-zinc-800 to-zinc-950":["#27272a","#09090b"]},I=[{id:"whatsapp",theme:"whatsapp",name:"WhatsApp",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>'},{id:"telegram",theme:"telegram",name:"Telegram",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0m4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635"/></svg>'},{id:"signal",theme:"signal",name:"Signal",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0l-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0l-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0l-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002l-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213l-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24l-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125"/></svg>'},{id:"messenger",theme:"messenger",name:"Messenger",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13"/></svg>'},{id:"imessage",theme:"imessage",name:"iMessage",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.285 0A5.273 5.273 0 0 0 0 5.285v13.43A5.273 5.273 0 0 0 5.285 24h13.43A5.273 5.273 0 0 0 24 18.715V5.285A5.273 5.273 0 0 0 18.715 0ZM12 4.154a8.809 7.337 0 0 1 8.809 7.338A8.809 7.337 0 0 1 12 18.828a8.809 7.337 0 0 1-2.492-.303A8.656 7.337 0 0 1 5.93 19.93a9.929 7.337 0 0 0 1.54-2.155 8.809 7.337 0 0 1-4.279-6.283A8.809 7.337 0 0 1 12 4.154"/></svg>'},{id:"instagram",theme:"instagram",name:"Instagram",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>'},{id:"twitter",theme:"twitter",name:"X",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'},{id:"tiktok",theme:"tiktok",name:"TikTok",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07"/></svg>'},{id:"discord",theme:"discord",name:"Discord",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189"/></svg>'}],m={koala:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="8" ry="7.5"/><circle cx="7" cy="5" r="4"/><circle cx="17" cy="5" r="4"/><circle cx="9" cy="11" r="1.2" fill="#0d0a07"/><circle cx="15" cy="11" r="1.2" fill="#0d0a07"/><ellipse cx="12" cy="16" rx="2.5" ry="1.2"/></svg>',sun:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',moon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',download:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',spinner:'<svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10"/></svg>',check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',chevronDown:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',github:'<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>'},Q=F();function $i(e){return`
    <header class="h-14 shrink-0 flex items-center justify-between px-5 border-b border-white/[5%] bg-[#0d0a07]/80 backdrop-blur-xl">
      <div class="flex items-center gap-3">
        <div class="text-zinc-100">${m.koala}</div>
        <span class="text-sm font-bold tracking-tight">${a("app.name")}</span>
      </div>
      <div class="flex items-center gap-2">
        <button id="btn-topbar-export" aria-label="${a("topbar.export")}"
          class="flex items-center gap-1.5 rounded-full bg-[#f97316] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#ea580c] active:scale-[0.97] transition-all disabled:opacity-60 disabled:pointer-events-none">
          <span id="btn-export-icon">${m.download}</span>
          <span id="btn-export-label">${a("topbar.export")}</span>
        </button>
        <button id="btn-start-tour" aria-label="${a("tutorial.restart")}"
          class="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-all mr-1">${a("tutorial.restart")}</button>
        <a href="https://github.com/Shik3i/KoalaSnap" target="_blank" rel="noopener noreferrer"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all"
          aria-label="GitHub">
          ${m.github}
        </a>
        <div class="relative flex">
          <select id="lang-select" aria-label="Language"
            class="appearance-none bg-white/5 border border-white/10 rounded-full pl-2.5 pr-6 py-1.5 text-xs
                   text-zinc-400 hover:text-zinc-200 hover:border-white/20 outline-0 transition-all cursor-pointer">
            <option value="de" ${Q==="de"?"selected":""}>DE</option>
            <option value="en" ${Q==="en"?"selected":""}>EN</option>
          </select>
          <span class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">${m.chevronDown}</span>
        </div>
      </div>
    </header>
  `}function Bi(e){return`
    <aside id="sidebar" class="w-[340px] shrink-0 h-full overflow-y-auto p-4 flex flex-col gap-4">
      <div id="app-library" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
        <div class="flex items-center justify-between cursor-pointer select-none" id="app-library-toggle">
          <span class="text-xs font-semibold text-zinc-300 tracking-wide">${a("sidebar.appLibrary")}</span>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-zinc-600">${I.length} ${a("sidebar.apps")}</span>
            <span id="app-library-chevron" class="text-zinc-500 transition-transform">${m.chevronDown}</span>
          </div>
        </div>
        <div id="app-library-body">
          <div class="relative mb-2">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">${m.search}</span>
            <input type="text" placeholder="${a("sidebar.search")}"
              class="w-full rounded-xl border border-white/[6%] bg-white/[4%] pl-9 pr-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
          </div>
          <div class="flex flex-col gap-1.5">
            ${I.map(t=>{const i=t.theme===x;return`
                <button data-app="${t.id}" aria-label="${t.id}"
                  class="flex items-center gap-3 rounded-xl border p-2.5 transition-all text-left
                    ${i?"border-white/15 bg-white/[8%]":"border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]"}">
                <div class="w-7 h-7 rounded-lg bg-white/[8%] flex items-center justify-center shrink-0 text-zinc-300">${t.svg}</div>
                  <span class="flex-1 text-xs font-medium text-white">${t.name}</span>
                  <span class="text-[9px] text-zinc-600 uppercase tracking-wider">${t.tag==="chat"?a("canvas.chat"):a("canvas.social")}</span>
                </button>
              `}).join("")}
          </div>
        </div>
      </div>

      <div id="settings-panel" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-4">
        <span class="text-xs font-semibold text-zinc-300 tracking-wide">${a("sidebar.settings")} · <span class="text-zinc-500 font-normal normal-case">${oe()}</span></span>
        ${le(e)}
      </div>
    </aside>
  `}function le(e){const t=["whatsapp","telegram","signal","imessage"].includes(x);let i="";return x==="discord"?i=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.username")}</span>
        <input id="input-username" type="text" value="${e.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.roleColor")}</span>
        <div class="flex items-center gap-3">
          <input id="input-rolecolor" type="color" value="${e.roleColor}"
            class="w-9 h-9 rounded-xl border border-white/[6%] bg-white/[4%] p-0.5 cursor-pointer" />
          <span class="text-xs text-zinc-500 font-mono">${e.roleColor}</span>
        </div>
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.timestamp")}</span>
        <input id="input-timestamp" type="text" value="${e.timestamp}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`:t?(i=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.username")}</span>
        <input id="input-username" type="text" value="${e.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`,x==="whatsapp"?i+=`
      <div class="flex flex-col gap-2 mt-2">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.message")}</span>
        <div id="wa-message-list" class="flex flex-col gap-2">
          ${e.messages.map((n,s)=>ce(n,s)).join("")}
        </div>
        <button id="btn-add-message"
          class="w-full rounded-xl border border-dashed border-white/[8%] py-2 text-xs text-zinc-500 hover:text-zinc-300 hover:border-white/20 transition-all">+ ${a("sidebar.addMessage")}</button>
      </div>`:i+=`
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.timestamp")}</span>
        <input id="input-timestamp" type="text" value="${e.timestamp}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`):i=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.author")}</span>
        <input id="input-author" type="text" value="${e.author}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.handle")}</span>
        <input id="input-handle" type="text" value="${e.handle}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`,`
    <div id="settings-fields">
      ${i}

      ${x!=="whatsapp"?`
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.message")}</span>
        <textarea id="input-message" rows="3"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none">${e.message}</textarea>
      </label>`:""}

      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.avatar")}</span>
        <input id="input-avatar" type="file" accept="image/*"
          class="text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:text-zinc-200 file:font-medium hover:file:bg-white/15 transition-colors" />
      </label>
    </div>
    <div class="mt-4 pt-4 border-t border-white/[6%] space-y-4">
      ${Ei(e)}
    </div>
  `}const Ci=[{id:"read",title:"Read",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>'},{id:"delivered",title:"Delivered",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>'},{id:"sent",title:"Sent",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'},{id:"unread",title:"Unread",svg:'<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>'}];function ce(e,t){const i=e.type==="sent",n=i?"bg-white text-zinc-900":"bg-white/[4%] text-zinc-500 hover:text-zinc-300",s=i?"bg-white/[4%] text-zinc-500 hover:text-zinc-300":"bg-white text-zinc-900",r=e.status||"read";return`
    <div class="rounded-xl border border-white/[6%] bg-white/[3%] p-2.5 flex flex-col gap-1.5" data-msg-idx="${t}">
      <textarea data-msg-idx="${t}" rows="2"
        class="w-full rounded-lg border border-white/[6%] bg-white/[4%] px-2.5 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none" placeholder="${a("sidebar.messagePlaceholder")}">${p(e.text)}</textarea>
      <div class="flex items-center gap-1.5">
        <button data-msg-idx="${t}" data-msg-type="sent"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${n}">${a("sidebar.sent")}</button>
        <button data-msg-idx="${t}" data-msg-type="received"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${s}">${a("sidebar.received")}</button>
        <div class="flex gap-0.5 ml-1">
          ${Ci.map(o=>`
            <button data-msg-idx="${t}" data-msg-status="${o.id}"
              class="p-1 rounded-md transition-all ${r===o.id?"bg-white/15 ring-1 ring-white/20":"text-zinc-600 hover:text-zinc-300 hover:bg-white/5"}"
              title="${o.title}">${o.svg}</button>
          `).join("")}
        </div>
        <input type="text" data-msg-idx="${t}" data-msg-field="time" value="${p(e.time)}"
          class="w-14 rounded-lg border border-white/[6%] bg-white/[4%] px-2 py-1 text-[10px] text-zinc-200 text-center outline-0 focus:border-zinc-600 transition-colors" placeholder="${a("sidebar.timePlaceholder")}" />
        <button data-msg-idx="${t}" data-msg-action="delete"
          class="p-1 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all" title="${a("sidebar.deleteMessage")}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `}function Ei(e){return`
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.padding")}</span>
      <div class="flex items-center gap-3">
        <input id="input-padding" type="range" min="16" max="96" value="${e.padding}"
          class="flex-1 accent-zinc-400 h-1 cursor-pointer" />
        <span id="padding-value" class="text-xs text-zinc-500 w-8 text-right">${e.padding}</span>
      </div>
    </label>
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.background")}</span>
      <div class="flex flex-wrap gap-1.5">
        ${yi.map(t=>`
          <button data-gradient="${t.value}" aria-label="${t.label}"
            class="w-7 h-7 rounded-lg ${t.value} ring-1 ring-white/[8%] hover:ring-white/30 transition-all
              ${e.bgGradient===t.value?"ring-2 ring-white scale-110":""}"></button>
        `).join("")}
      </div>
    </label>
  `}function zi(e){const i=F()==="de"?"/de":"";return`
    <div id="bottom-bar" class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
                flex items-center gap-1 rounded-full bg-white/[6%] backdrop-blur-2xl
                border border-white/[8%] px-2 py-1.5 shadow-2xl shadow-black/30">
      <button id="btn-mockup-theme" aria-label="${a("bottom.toggleTheme")}" class="rounded-full p-2 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${a("bottom.toggleTheme")}">
        ${e.mockupTheme==="light"?m.sun:m.moon}
      </button>
      <span class="ml-2 flex items-center gap-2 pl-2 border-l border-white/[6%] text-[10px] text-zinc-600">
        <a href="${i}/imprint" class="hover:text-zinc-400 transition-colors">${a("bottom.imprint")}</a>
        <a href="${i}/privacy" class="hover:text-zinc-400 transition-colors">${a("bottom.privacy")}</a>
      </span>
    </div>
  `}function Mi(){const e=document.getElementById("app");if(!e)return;const t=l.getState();e.innerHTML=`
    ${$i()}
    <div id="main-area" class="flex-1 flex overflow-hidden">
      ${Bi(t)}
      <main id="canvas" class="flex-1 relative overflow-hidden">
        <div id="canvas-area" class="absolute inset-0 flex items-center justify-center overflow-hidden z-10">
          <div id="mockup"></div>
        </div>
        ${zi(t)}
      </main>
    </div>
  `,Li(),D()}function Si(e){const t=document.getElementById("settings-panel");t&&(t.innerHTML=`
    <span class="text-xs font-semibold text-zinc-300 tracking-wide">${a("sidebar.settings")} · <span class="text-zinc-500 font-normal normal-case">${oe()}</span></span>
    ${le(e)}
  `,de())}function Li(){v("btn-topbar-export","click",ji),v("btn-mockup-theme","click",()=>{const t=l.get("mockupTheme")==="light"?"dark":"light";l.set("mockupTheme",t)}),v("lang-select","change",t=>{const i=t.target.value;window.location.href=i==="en"?"/":`/${i}/`}),v("btn-start-tour","click",()=>te()),document.querySelectorAll("[data-gradient]").forEach(t=>{t.addEventListener("click",()=>l.set("bgGradient",t.dataset.gradient))}),document.querySelectorAll("[data-app]").forEach(t=>{t.addEventListener("click",()=>{const i=I.find(n=>n.id===t.dataset.app);i&&l.set("theme",i.theme),_i()})});const e=document.getElementById("app-library-toggle");e&&e.addEventListener("click",()=>{const t=document.getElementById("app-library-body"),i=document.getElementById("app-library-chevron");if(!t)return;const n=t.style.display==="none";t.style.display=n?"":"none",i&&(i.style.transform=n?"rotate(0deg)":"rotate(180deg)")}),de()}function de(){v("input-padding","input",e=>{l.set("padding",Number(e.target.value));const t=document.getElementById("padding-value");t&&(t.textContent=e.target.value)}),v("input-message","input",e=>l.set("message",e.target.value)),v("input-avatar","change",async e=>{var i;const t=(i=e.target.files)==null?void 0:i[0];if(t&&t.type.startsWith("image/")&&!(t.size>5*1024*1024))try{const n=l.get("avatar"),s=await $e(t);n&&n.startsWith("blob:")&&URL.revokeObjectURL(n),l.set("avatar",s)}catch{l.set("avatar",null)}}),["messenger","instagram","twitter","tiktok","social-post"].includes(x)?(v("input-author","input",e=>l.set("author",e.target.value)),v("input-handle","input",e=>l.set("handle",e.target.value))):x==="discord"?(v("input-username","input",e=>l.set("username",e.target.value)),v("input-rolecolor","input",e=>l.set("roleColor",e.target.value)),v("input-timestamp","input",e=>l.set("timestamp",e.target.value))):["whatsapp","telegram","signal","imessage"].includes(x)&&(v("input-username","input",e=>l.set("username",e.target.value)),x==="whatsapp"?Ti():v("input-timestamp","input",e=>l.set("timestamp",e.target.value)))}function Ti(){const e=document.getElementById("btn-add-message");e&&(e.onclick=()=>{const i=[...l.get("messages")];i.push({id:Date.now(),text:"",type:l.get("waMode")||"sent",time:""}),l.set("messages",i),A(l.getState())});const t=document.getElementById("wa-message-list");t&&(t.addEventListener("input",i=>{const n=i.target,s=parseInt(n.dataset.msgIdx);if(!isNaN(s)){if(n.tagName==="TEXTAREA"){const r=[...l.get("messages")];r[s]&&(r[s]={...r[s],text:n.value}),l.set("messages",r)}else if(n.dataset.msgField==="time"){const r=[...l.get("messages")];r[s]&&(r[s]={...r[s],time:n.value}),l.set("messages",r)}}}),t.addEventListener("click",i=>{const n=i.target.closest("[data-msg-type], [data-msg-status], [data-msg-action]");if(!n)return;const s=parseInt(n.dataset.msgIdx);if(!isNaN(s)){if(n.dataset.msgType){const r=[...l.get("messages")];r[s]&&(r[s]={...r[s],type:n.dataset.msgType}),l.set("messages",r),A(l.getState())}else if(n.dataset.msgStatus){const r=[...l.get("messages")];r[s]&&(r[s]={...r[s],status:n.dataset.msgStatus}),l.set("messages",r),A(l.getState())}else if(n.dataset.msgAction==="delete"){const r=l.get("messages").filter((o,c)=>c!==s);l.set("messages",r),A(l.getState())}}}))}function A(e){const t=document.getElementById("wa-message-list");t&&(t.innerHTML=e.messages.map((i,n)=>ce(i,n)).join(""))}function D(){const e=ae[x];if(!e)return;const t=l.getState(),i=document.getElementById("mockup");i&&(i.innerHTML=e.render(t)),pe(t),requestAnimationFrame(ue)}function Ai(e,t,i){if(!R){R=!0;try{const n=ae[x];if(!n)return;if(e==="theme"){x=t;const s=ge();s&&l.mutate({author:s.author||"",handle:s.handle||"",username:s.username||s.author||"",message:s.message||"",timestamp:s.time||"",roleColor:s.roleColor||"#5865F2",messages:s.messages||[{id:1,text:s.message||"",type:l.get("waMode")||"sent",time:s.time||"",status:"read"}]}),D(),Si(l.getState()),Ii(t),Ee()&&requestAnimationFrame(()=>Se());return}if(e==="bgGradient"&&pe(i),e==="mockupTheme"){const s=document.getElementById("btn-mockup-theme");s&&(s.innerHTML=t==="light"?m.sun:m.moon),D();return}if(e==="waMode")return;e==="avatar"&&Be(x==="discord"?"discord-avatar":x==="whatsapp"?"wa-avatar":"mockup-avatar"),n.sync(i)}finally{R=!1}}}function Ii(e){document.querySelectorAll("[data-app]").forEach(t=>{const i=I.find(s=>s.id===t.dataset.app),n=i&&i.theme===e;t.className=`flex flex-col items-center gap-1.5 rounded-xl border p-2.5 transition-all text-center ${n?"border-white/15 bg-white/[8%]":"border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]"}`})}function pe(e){const t=document.getElementById("canvas");if(!t)return;const i=ki[e.bgGradient]||["#38bdf8","#4f46e5"];t.style.background=`
    radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(135deg, ${i[0]}, ${i[1]})
  `,t.style.backgroundSize="40px 40px, 100% 100%"}function ue(){if(W)return;const e=document.getElementById("canvas"),t=document.getElementById("mockup-card");if(!e||!t)return;const i=e.getBoundingClientRect(),n=Math.min(i.width/390,i.height/844)*.9;t.style.transform=`scale(${n})`,t.style.transformOrigin="center center"}window.addEventListener("resize",ue);async function ji(){const e=document.getElementById("btn-topbar-export"),t=document.getElementById("btn-export-icon"),i=document.getElementById("btn-export-label");if(!e||e.disabled)return;W=!0,e.disabled=!0,t&&(t.innerHTML=m.spinner),i&&(i.textContent=a("topbar.rendering"));const n=document.getElementById("mockup-card");if(!n){u();return}const s=n.style.transform,r=n.style.transformOrigin;n.style.transform="",n.style.transformOrigin="";const o=n.querySelectorAll('[style*="background-image"]'),c=[];o.forEach((g,f)=>{c[f]=g.style.backgroundImage,g.style.backgroundImage="none"});const h=n.querySelectorAll("img"),d=[];h.forEach((g,f)=>{d[f]=g.src,g.src.startsWith("blob:")&&(g.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}),await new Promise(g=>requestAnimationFrame(g));try{const{toPng:g}=await me(async()=>{const{toPng:B}=await import("./index-CgJtiJsK.js");return{toPng:B}},[]),f=await g(n,{pixelRatio:2});n.style.transform=s,n.style.transformOrigin=r,o.forEach((B,S)=>{B.style.backgroundImage=c[S]}),h.forEach((B,S)=>{d[S]&&(B.src=d[S])});const w=new Date,P=`${w.getFullYear()}-${String(w.getMonth()+1).padStart(2,"0")}-${String(w.getDate()).padStart(2,"0")}_${String(w.getHours()).padStart(2,"0")}-${String(w.getMinutes()).padStart(2,"0")}-${String(w.getSeconds()).padStart(2,"0")}`,fe=`koalasnap-${x}-${P}.png`,G=document.createElement("a");G.download=fe,G.href=f,G.click(),t&&(t.innerHTML=m.check),i&&(i.textContent=a("topbar.exported")),e.classList.remove("bg-[#f97316]","hover:bg-[#ea580c]"),e.classList.add("bg-emerald-500","hover:bg-emerald-600"),setTimeout(u,2e3)}catch(g){n.style.transform=s,n.style.transformOrigin=r,o.forEach((f,w)=>{f.style.backgroundImage=c[w]}),h.forEach((f,w)=>{d[w]&&(f.src=d[w])}),console.error("Export failed:",g),t&&(t.innerHTML=m.download),i&&(i.textContent=a("topbar.exportFailed")),e.disabled=!1,setTimeout(()=>{i&&(i.textContent=a("topbar.export")),t&&(t.innerHTML=m.download)},2e3)}function u(){W=!1,e.disabled=!1,e.classList.remove("bg-emerald-500","hover:bg-emerald-600"),e.classList.add("bg-[#f97316]","hover:bg-[#ea580c]"),t&&(t.innerHTML=m.download),i&&(i.textContent=a("topbar.export"))}}function v(e,t,i){var n;(n=document.getElementById(e))==null||n.addEventListener(t,i)}function _i(){const e=document.getElementById("app-library-body"),t=document.getElementById("app-library-chevron");e&&(e.style.display="none"),t&&(t.style.transform="rotate(180deg)")}function ge(){var r,o;const e=[{author:"Maya",handle:"@maya_99",username:"Maya",message:"Hey, are you coming online tonight?",time:"7:18 PM",roleColor:"#e81224",messages:[{text:"Hey, are you coming online tonight?",type:"sent",time:"7:18 PM"},{text:"Yeah, give me 5!",type:"received",time:"7:20 PM"},{text:"Sure, take your time 🐨",type:"sent",time:"7:21 PM"}]}],t=window.__LOCALE__,i=t!=null&&t.dummySets&&t.dummySets.length>0?t.dummySets:e,n=i[Math.floor(Math.random()*i.length)],s=n.messages&&n.messages.length>0?n.messages.map((c,h)=>({id:h+1,text:c.text,type:c.type,time:c.time,status:c.status||"read"})):[{id:1,text:n.message||"",type:l.get("waMode")||"sent",time:n.time||"",status:"read"}];return{author:n.author||"",handle:n.handle||"",username:n.username||n.author||"",message:n.message||((r=s[0])==null?void 0:r.text)||"",time:n.time||((o=s[0])==null?void 0:o.time)||"",roleColor:n.roleColor||"#5865F2",messages:s}}l.subscribe(Ai);try{const e=localStorage.getItem("koalasnap_state"),t=F();let i=!e;if(e)try{const n=JSON.parse(e);(!n.locale||n.locale!==t)&&(i=!0)}catch{i=!0}if(i){const n=ge();n&&l.mutate({...n,locale:t})}}catch{}Mi();Ce()||setTimeout(()=>te(),800);
