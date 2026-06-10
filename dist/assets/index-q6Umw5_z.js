(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const Me="modulepreload",Le=function(e){return"/"+e},ie={},ue=function(n,t,i){let r=Promise.resolve();if(t&&t.length>0){let s=function(c){return Promise.all(c.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),x=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));r=s(t.map(c=>{if(c=Le(c),c in ie)return;ie[c]=!0;const p=c.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const u=document.createElement("link");if(u.rel=p?"stylesheet":Me,p||(u.as="script"),u.crossOrigin="",u.href=c,x&&u.setAttribute("nonce",x),document.head.appendChild(u),p)return new Promise((b,H)=>{u.addEventListener("load",b),u.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(s){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s}return r.then(s=>{for(const d of s||[])d.status==="rejected"&&o(d.reason);return n().catch(o)})},K="koalasnap_state",$="koalasnap_templates",re="koalasnap_sidebar",j=2,Te={bgGradient:"from-sky-400 to-indigo-600"},oe={1:e=>(e.bgGradient===Te.bgGradient&&(e.bgGradient="from-slate-900 to-indigo-950"),e)};function Ie(e){try{const n=localStorage.getItem(K);if(n){const t=JSON.parse(n),i=t._version||1;if(i<j){for(let s=i;s<j;s++)oe[s]&&oe[s](t);t._version=j;const{avatar:r,...o}=t;localStorage.setItem(K,JSON.stringify(o))}return{...e,...t}}}catch{}return{...e}}function B(e){try{const{avatar:n,...t}=e;localStorage.setItem(K,JSON.stringify(t))}catch{}}function Ae(){try{const n=new URLSearchParams(window.location.search).get("state");if(!n)return null;const t=atob(n),i=Uint8Array.from(t,s=>s.charCodeAt(0)),r=new TextDecoder().decode(i),o=JSON.parse(r);if(o&&typeof o=="object")return o}catch{}return null}function je(e){const n=Ae(),t=n?{...e,...n}:Ie(e),i=new Set,r=[],o=[],s=50;let d=!1;function x(){d||(r.push(JSON.parse(JSON.stringify(t))),r.length>s&&r.shift(),o.length=0)}return{get(c){return t[c]},getState(){return{...t}},set(c,p){x(),t[c]=p,B(t),i.forEach(m=>m(c,p,t))},setAll(c){x(),Object.assign(t,c),B(t),i.forEach(p=>p(null,null,t))},mutate(c){x(),Object.assign(t,c),B(t),i.forEach(p=>p(null,null,t))},subscribe(c){return i.add(c),()=>i.delete(c)},reset(){x(),Object.assign(t,e),B(t),i.forEach(c=>c(null,null,t))},undo(){if(r.length===0)return;o.push(JSON.parse(JSON.stringify(t)));const c=r.pop();Object.assign(t,c),B(t),i.forEach(p=>p("_undo",null,t))},redo(){if(o.length===0)return;r.push(JSON.parse(JSON.stringify(t)));const c=o.pop();Object.assign(t,c),B(t),i.forEach(p=>p("_redo",null,t))},canUndo(){return r.length>0},canRedo(){return o.length>0},pauseHistory(){d=!0},resumeHistory(){d=!1},saveTemplate(c){try{const p=JSON.parse(localStorage.getItem($)||"{}"),{avatar:m,...u}=t;return p[c]=u,localStorage.setItem($,JSON.stringify(p)),!0}catch{return!1}},deleteTemplate(c){try{const p=JSON.parse(localStorage.getItem($)||"{}");return delete p[c],localStorage.setItem($,JSON.stringify(p)),!0}catch{return!1}},loadTemplate(c){try{const m=JSON.parse(localStorage.getItem($)||"{}")[c];return m?(this.mutate(m),!0):!1}catch{return!1}},listTemplates(){try{return Object.keys(JSON.parse(localStorage.getItem($)||"{}"))}catch{return[]}},getSidebarOpen(){return localStorage.getItem(re)!=="false"},setSidebarOpen(c){localStorage.setItem(re,String(c))},getShareUrl(){try{const{avatar:c,...p}=t,m=JSON.stringify(p),u=new TextEncoder().encode(m),b=String.fromCharCode(...u),H=btoa(b),ne=new URL(window.location.href.split("?")[0].split("#")[0]);return ne.searchParams.set("state",H),ne.toString()}catch{return null}}}}const _e={_version:j,theme:"whatsapp",author:"Maya",handle:"@maya_99",username:"Maya",roleColor:"#e81224",timestamp:"7:18 PM",message:"Hey, are you coming online tonight?",avatar:null,bgGradient:"from-slate-900 to-indigo-950",padding:48,mockupTheme:"light",waMode:"sent",locale:"en",fontFamily:"system-ui",chatBg:null,chatBgGradient:"",messages:[{id:1,text:"Hey, are you coming online tonight?",type:"sent",time:"7:18 PM",status:"read"},{id:2,text:"Yeah, give me 5!",type:"received",time:"7:20 PM",status:"read"},{id:3,text:"Sure, take your time 🐨",type:"sent",time:"7:21 PM",status:"delivered"}]},l=je(_e),Oe=window.__LOCALE__||{};function a(e){return e.split(".").reduce((t,i)=>t!=null?t[i]:void 0,Oe)??e}function J(){const e=window.location.pathname.match(/^\/([a-z]{2})\//);return e?e[1]:"en"}function g(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}const A=500,Pe=.8;function He(e){return new Promise((n,t)=>{const i=new FileReader;i.onerror=()=>t(new Error("File read failed")),i.onload=r=>{const o=new Image;o.onerror=()=>t(new Error("Image decode failed")),o.onload=()=>{let{width:s,height:d}=o;if(s>A||d>A){const p=Math.min(A/s,A/d);s=Math.round(s*p),d=Math.round(d*p)}const x=document.createElement("canvas");x.width=s,x.height=d;const c=x.getContext("2d");if(!c){t(new Error("Canvas 2D not supported"));return}c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(o,0,0,s,d),x.toBlob(p=>{if(!p){t(new Error("WebP encoding failed"));return}n(URL.createObjectURL(p))},"image/webp",Pe)},o.src=r.target.result},i.readAsDataURL(e)})}function Ge(e){const n=document.getElementById(e);n instanceof HTMLImageElement&&(n.src="")}const ge="koalasnap_tutorial_completed",E=[{target:"app-library",key:"tutorial.step1"},{target:"settings-panel",key:"tutorial.step2"},{target:"canvas-area",key:"tutorial.step3"},{target:"bottom-bar",key:"tutorial.step4"},{target:"btn-topbar-export",key:"tutorial.step5"}];let w=0,T=!1,y=null;function Ne(){return localStorage.getItem(ge)==="true"}function Ve(){return T}function fe(){T&&I(),w=0,T=!0;const e=We();e.classList.remove("hidden"),e.style.pointerEvents="auto",O(0),document.addEventListener("keydown",he)}function he(e){e.key==="Escape"&&I()}function I(){T=!1,y&&(clearTimeout(y),y=null),P(w);const e=document.getElementById("tutorial-overlay");e&&(e.classList.add("hidden"),e.style.pointerEvents=""),localStorage.setItem(ge,"true"),document.removeEventListener("keydown",he)}function Re(){if(P(w),w++,w>=E.length){I();return}O(w)}function Fe(){P(w),w=Math.max(0,w-1),O(w)}function De(){T&&(P(w),O(w))}function We(){let e=document.getElementById("tutorial-overlay");return e||(e=document.createElement("div"),e.id="tutorial-overlay",e.className="fixed inset-0 bg-black/60 z-40 hidden",document.body.appendChild(e)),e}function O(e){y&&(clearTimeout(y),y=null);const n=E[e];if(!n)return;const t=document.getElementById(n.target);if(!t)return;t.classList.add("tutorial-highlight"),t.style.zIndex="50",getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.scrollIntoView({behavior:"smooth",block:"center"});const i=t.getBoundingClientRect();y=setTimeout(()=>{Ue(e,i),y=null},400)}function P(e){y&&(clearTimeout(y),y=null);const n=E[e];if(!n)return;const t=document.getElementById(n.target);t&&(t.classList.remove("tutorial-highlight"),t.style.zIndex="",t.style.position="");const i=document.getElementById("tutorial-tooltip");i&&i.remove()}function Ue(e,n){const t=document.getElementById("tutorial-tooltip");t&&t.remove();const i=E.length,r=e===0,o=e===i-1,s=document.createElement("div");s.id="tutorial-tooltip",s.className="fixed z-50 w-[320px] rounded-2xl border border-white/[10%] bg-[#1a1714]/95 backdrop-blur-2xl p-4 shadow-2xl shadow-black/50 opacity-0 transition-opacity duration-200",s.innerHTML=`
    <p class="text-sm text-zinc-200 leading-relaxed mb-4">${a(Ke(e))}</p>
    <div class="flex items-center justify-between">
      <span class="text-xs text-zinc-500">${e+1} ${a("tutorial.of")} ${i}</span>
      <div class="flex items-center gap-2">
        ${r?"":`<button id="tut-prev" class="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all">${a("tutorial.back")}</button>`}
        <button id="tut-next" class="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#f97316] hover:bg-[#ea580c] active:scale-[0.97] transition-all">${a(o?"tutorial.done":"tutorial.next")}</button>
      </div>
    </div>
    <button id="tut-skip" class="mt-2 text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors">${a("tutorial.skip")}</button>
  `,document.body.appendChild(s),qe(s,n),requestAnimationFrame(()=>{s.classList.remove("opacity-0")}),Je(e)}function Ke(e){var n;return((n=E[e])==null?void 0:n.key)||""}function qe(e,n){const r=e.offsetWidth||320,o=e.offsetHeight||160,s=window.innerWidth-r-16,d=window.innerHeight-o-16,x=n.left+n.width/2;let c=Math.max(16,Math.min(x-r/2,s)),p=n.bottom+12;p+o>window.innerHeight-16&&(p=n.top-o-12),p<16&&(p=16,c=Math.min(n.right+12,s),c=Math.max(16,c)),c=Math.max(16,Math.min(c,s)),p=Math.max(16,Math.min(p,d)),e.style.left=`${c}px`,e.style.top=`${p}px`}function Je(e){const n=document.getElementById("tut-next");n&&(n.onclick=()=>e===E.length-1?I():Re());const t=document.getElementById("tut-prev");t&&(t.onclick=()=>Fe());const i=document.getElementById("tut-skip");i&&(i.onclick=()=>I())}const xe="?",Y='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',Ye='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',X='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',Z='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',Xe='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>';function Q(e,n){return e?`<img id="mockup-avatar" src="${e}" class="w-full h-full rounded-full object-cover" />`:`<div id="mockup-avatar" class="w-full h-full rounded-full bg-gradient-to-br ${n?"from-zinc-600 to-zinc-800":"from-sky-400 to-indigo-500"} flex items-center justify-center text-white text-sm font-bold">${xe}</div>`}function Ze(e,n){const t=n?"bg-zinc-900":"bg-white",i=n?"text-zinc-100":"text-zinc-900",r=n?"text-zinc-400":"text-zinc-500",o=n?"text-zinc-300":"text-zinc-800",s=n?"border-zinc-700":"border-zinc-200";return`
    <div id="mockup-card" class="${t} rounded-2xl shadow-2xl shadow-black/20 mx-auto overflow-hidden ring-1 ring-white/[6%] p-3" style="width:400px; height:520px;font-family:${e.fontFamily};">
      <div class="flex items-start gap-3">
        <div class="w-11 h-11 rounded-full shrink-0 overflow-hidden">
          ${Q(e.avatar,n)}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1">
            <span id="mockup-author" class="text-[15px] font-bold ${i} leading-tight truncate">${g(e.author)}</span>
            <span class="text-[13px] ${r}">@${g(e.handle)}</span>
            <span class="text-[13px] ${r}">· 1h</span>
          </div>
        </div>
      </div>
      <p id="mockup-message" class="mt-2 text-[15px] ${o} leading-relaxed whitespace-pre-wrap break-words">${g(e.message)}</p>
      <div class="mt-2 h-48 rounded-xl ${n?"bg-zinc-800":"bg-zinc-100"} flex items-center justify-center ${r} text-sm">📷</div>
      <div class="flex items-center justify-between mt-2 pt-2 ${s} border-t text-sm ${r}">
        <div class="flex items-center gap-5">
          <span class="flex items-center gap-1">${X} <span id="mockup-replies">1</span></span>
          <span class="flex items-center gap-1">${Ye} <span id="mockup-retweets">3</span></span>
          <span class="flex items-center gap-1">${Y} <span id="mockup-likes">12</span></span>
        </div>
        <span>${Z}</span>
      </div>
    </div>
  `}function Qe(e,n){const t=n?"bg-black":"bg-white",i=n?"text-white":"text-zinc-900",r=n?"text-zinc-400":"text-zinc-500";return`
    <div id="mockup-card" class="${t} rounded-2xl shadow-2xl shadow-black/20 mx-auto overflow-hidden ring-1 ring-white/[6%]" style="width:400px; height:600px;font-family:${e.fontFamily};">
      <div class="flex items-center gap-3 px-3 py-2.5">
        <div class="w-8 h-8 rounded-full shrink-0 overflow-hidden">
          ${Q(e.avatar,n)}
        </div>
        <div class="flex-1 min-w-0">
          <span id="mockup-author" class="text-[13px] font-semibold ${i} leading-tight truncate">${g(e.author)}</span>
        </div>
        <span class="${r}">${Xe}</span>
      </div>
      <div class="w-full h-72 ${n?"bg-zinc-800":"bg-zinc-100"} flex items-center justify-center ${r} text-sm">📷</div>
      <div class="px-3 pt-2 pb-3">
        <div class="flex items-center gap-3 text-xl ${i}">
          <span>${Y}</span>
          <span>${X}</span>
          <span class="ml-auto">${Z}</span>
        </div>
        <p class="mt-1 text-[13px] font-semibold ${i}"><span id="mockup-likes">142</span> likes</p>
        <p class="mt-1 text-[13px] ${i}"><span class="font-semibold">${g(e.author)}</span> <span id="mockup-message" class="${i}">${g(e.message)}</span></p>
        <p class="mt-1 text-[13px] ${r}">View all 3 comments</p>
        <p class="mt-0.5 text-[11px] ${r} uppercase tracking-wider">1 hour ago</p>
      </div>
    </div>
  `}function et(e,n){const t=n?"#1a1a2e":"#f0f2f5",i=n?"#1c1c2e":"#007aff";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${n?"#121212":"#ffffff"};background:${n?"#121212":"#ffffff"}">
        <div class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${i}">
          <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">09:41</span>
          <div class="flex items-center gap-1.5">
            <span class="text-[11px]"><svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg></span>
            <span class="text-[11px]"><svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg></span>
            <span class="text-[11px]"><svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg></span>
          </div>
        </div>
        <div class="flex items-center gap-2 px-3 py-1.5 shrink-0 text-white" style="background:${i}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          <span id="mockup-author" class="text-[15px] font-medium">${g(e.author)}</span>
        </div>
        <div class="flex-1 p-3 overflow-y-auto flex flex-col gap-3" style="background:var(--chat-bg, ${t})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
          <div class="flex justify-end">
            <div class="max-w-[75%] rounded-2xl px-3.5 py-2" style="background:#007aff">
              <p id="mockup-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${g(e.message)}</p>
              <div class="flex items-center justify-end gap-1 mt-0.5">
                <span class="text-[11px] text-[#ffffffcc]">${g(e.timestamp)}</span>
                <svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${n?"#1a1a2e":"#f0f2f5"}">
          <div class="flex-1 rounded-2xl px-4 py-2 text-[15px] bg-white text-zinc-400">Aa</div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007aff" stroke-width="2.5" stroke-linecap="round"><polygon points="22 2 11 13 22 2"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </div>
      </div>
    </div>
  `}function tt(e,n){const t="text-white";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col relative" style="border-color:#111;background:#111">
        <div class="absolute inset-0 ${n?"bg-zinc-900":"bg-zinc-800"} flex items-center justify-center text-6xl">🎵</div>
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
                <p class="text-[14px] font-bold ${t}"><span id="mockup-author">${g(e.author)}</span> <span class="font-normal text-zinc-300">@${g(e.handle)}</span></p>
                <p id="mockup-message" class="mt-1 text-[13px] ${t} leading-relaxed whitespace-pre-wrap">${g(e.message)}</p>
              </div>
              <div class="flex flex-col items-center gap-3 shrink-0">
                <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50">
                  ${Q(e.avatar,!1)}
                </div>
                <div class="flex flex-col items-center gap-4 text-white text-xs">
                  <div class="flex flex-col items-center gap-0.5">${Y}<span id="mockup-likes" class="text-[10px]">12.4k</span></div>
                  <div class="flex flex-col items-center gap-0.5">${X}<span id="mockup-replies" class="text-[10px]">241</span></div>
                  <div class="flex flex-col items-center gap-0.5">${Z}<span class="text-[10px]">Share</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function C(e){const n=e.mockupTheme==="dark";switch(e.theme||"twitter"){case"instagram":return Qe(e,n);case"messenger":return et(e,n);case"tiktok":return tt(e,n);case"twitter":default:return Ze(e,n)}}function S(e){const n=e.theme||"twitter";k("mockup-author",t=>{t&&(t.textContent=e.author)}),k("mockup-message",t=>{t&&(t.textContent=e.message)}),k("mockup-likes",t=>{t&&(t.textContent="142")}),k("mockup-replies",t=>{t&&(t.textContent="1")}),k("mockup-retweets",t=>{t&&(t.textContent="3")}),n==="messenger"?k("mockup-avatar",t=>{t&&se(t,e,!1)}):k("mockup-avatar",t=>{t&&se(t,e,e.mockupTheme==="dark")})}function se(e,n,t){if(n.avatar){const i=document.createElement("img");i.id="mockup-avatar",i.src=n.avatar,i.className="w-full h-full rounded-full object-cover",i.alt="",e.replaceWith(i)}else{const i=document.createElement("div");i.id="mockup-avatar";const r=t?"from-zinc-600 to-zinc-800":"from-sky-400 to-indigo-500";i.className=`w-full h-full rounded-full bg-gradient-to-br ${r} flex items-center justify-center text-white text-sm font-bold`,i.textContent=xe,e.replaceWith(i)}}function k(e,n){const t=document.getElementById(e);t&&n(t)}const nt='<svg width="20" height="20" viewBox="0 0 24 24" fill="#949ba4"><path d="M5 9h14M5 15h14M11 3L9 21M15 3l-2 18"/></svg>',it='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#949ba4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/></svg>',rt='<svg width="16" height="16" viewBox="0 0 24 24" fill="#949ba4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',ot='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5bac1" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',st='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5bac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',at=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.02'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.015'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.02'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.015'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.02'/%3E%3C/svg%3E")`,lt={sidebarBg:"#2b2d31",chatBg:"#313338",inputBg:"#383a40",inputText:"#dbdee1",placeholder:"#949ba4",divider:"#3f4147",dotPattern:"none"},ct={sidebarBg:"#1e1f22",chatBg:"#313338",inputBg:"#383a40",inputText:"#dbdee1",placeholder:"#949ba4",divider:"#3f4147",dotPattern:at};function dt(e){return e.mockupTheme==="light"?lt:ct}function pt(e){const n=dt(e),t=e.avatar?`<img id="discord-avatar" src="${e.avatar}" class="w-10 h-10 rounded-full object-cover" />`:'<div id="discord-avatar" class="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold">?</div>';return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:#1e1f22;background:#1e1f22">
        <div class="flex items-center gap-0 h-12 shrink-0 px-4" style="background:${n.sidebarBg}">
          <div class="flex items-center gap-2 flex-1 min-w-0">
            ${nt}
            <span class="text-white text-[15px] font-semibold leading-tight truncate">general</span>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${it}
            <span>${rt}</span>
          </div>
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto" style="background:var(--chat-bg, ${n.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:`;background-image:${n.dotPattern}`}">
          <div class="p-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-0.5">
                ${t}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-baseline gap-2">
                  <span id="discord-username"
                    class="font-medium text-[16px] leading-tight truncate max-w-[280px]"
                    style="color: ${e.roleColor}">${g(e.username)}</span>
                  <span id="discord-timestamp" class="text-[#949ba4] text-xs leading-tight shrink-0">${g(e.timestamp)}</span>
                </div>
                <div id="discord-message"
                  class="text-[#dbdee1] text-[16px]/[1.4] mt-0.5 whitespace-pre-wrap break-words">${g(e.message)}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="shrink-0 px-4 py-3" style="background:var(--chat-bg, ${n.chatBg})">
          <div class="flex items-center gap-2 rounded-lg px-4 py-2.5" style="background:${n.inputBg}">
            <span>${ot}</span>
            <span class="flex-1 text-[15px]" style="color:${n.placeholder}">Message #general</span>
            <span>${st}</span>
          </div>
        </div>
      </div>
    </div>
  `}function ut(e){G("discord-username",t=>{t.textContent=e.username,t.style.color=e.roleColor}),G("discord-timestamp",t=>{t.textContent=e.timestamp}),G("discord-message",t=>{t.textContent=e.message});const n=document.getElementById("discord-avatar");if(n)if(e.avatar){const t=document.createElement("img");t.id="discord-avatar",t.src=e.avatar,t.className="w-10 h-10 rounded-full object-cover",t.alt="",n.replaceWith(t)}else{const t=document.createElement("div");t.id="discord-avatar",t.className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold",t.textContent="?",n.replaceWith(t)}}function G(e,n){const t=document.getElementById(e);t&&n(t)}const gt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',ft='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',ht='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',xt='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>',mt='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',vt='<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>',bt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',wt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',yt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',kt=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='white' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='white' opacity='0.03'/%3E%3C/svg%3E")`,$t=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='black' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='black' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='black' opacity='0.03'/%3E%3C/svg%3E")`,Bt='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>',zt='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>',Et='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',Ct='<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>',St={barBg:"#008069",chatBg:"#efeae2",sentBg:"#d9fdd3",recvBg:"#ffffff",sentText:"#111b21",recvText:"#111b21",timeText:"#667781",inputBg:"#f0f2f5",fieldBg:"#ffffff",fieldText:"#111b21",placeholder:"#8696a0",dotPattern:$t},Mt={barBg:"#202c33",chatBg:"#0b141a",sentBg:"#005c4b",recvBg:"#202c33",sentText:"#e9edef",recvText:"#e9edef",timeText:"#ffffffcc",inputBg:"#202c33",fieldBg:"#2a3942",fieldText:"#e9edef",placeholder:"#8696a0",dotPattern:kt};function me(e){return e.mockupTheme==="light"?St:Mt}function Lt(e){const n=me(e),t=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${t};background:${t}">
        ${Tt(n)}
        ${It(e,n)}
        ${At(e,n)}
        ${jt(n)}
      </div>
    </div>
  `}function Tt(e){return`
    <div class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${e.barBg}">
      <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">09:41</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${xt}</span>
        <span class="text-[11px]">${mt}</span>
        <span class="text-[11px]">${vt}</span>
      </div>
    </div>
  `}function It(e,n){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${n.barBg}">
      <span class="shrink-0">${gt}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="wa-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="wa-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="wa-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${g(e.username)}</div>
        <div id="wa-status-text" class="text-[#8696a0] text-[11px] leading-tight">online</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${ft}
        ${ht}
      </div>
    </div>
  `}function At(e,n){return`
    <div class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${n.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:`;background-image:${n.dotPattern}`}">
      <div id="wa-messages" class="flex flex-col gap-3">
        ${e.messages.map(t=>ve(t,n)).join("")}
      </div>
    </div>
  `}function ve(e,n){const t=e.type==="sent",i=t?n.sentBg:n.recvBg,r=t?n.sentText:n.recvText,o=i,s=t?"justify-end":"justify-start",d=e.status||"read",x=t?`<div class="absolute -right-[7px] bottom-[6px] w-0 h-0 border-l-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-left-color:${o}"></div>`:`<div class="absolute -left-[7px] bottom-[6px] w-0 h-0 border-r-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-right-color:${o}"></div>`;let c="";t&&(d==="read"?c=Bt:d==="delivered"?c=zt:d==="sent"&&(c=Et));const p=d==="unread",m=p?"font-semibold":"",u=p?`<span class="inline-flex ml-1 -mb-0.5">${Ct}</span>`:"";return`
    <div class="flex ${s}">
      ${t?"":'<div class="w-[34px] shrink-0"></div>'}
      <div class="relative max-w-[80%]">
        <div class="rounded-2xl px-3.5 py-2" style="background:${i}">
          <p class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words ${m}" style="color:${r}">${g(e.text)}</p>
          <div class="flex items-center justify-end gap-1 mt-0.5">
            <span class="text-[11px] leading-none" style="color:${n.timeText}">${g(e.time)}</span>
            ${c?`<span class="inline-flex -mb-0.5">${c}</span>`:""}
            ${u}
          </div>
        </div>
        ${x}
      </div>
    </div>
  `}function jt(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${bt}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.placeholder}">Message</div>
      <span>${wt}</span>
      <span>${yt}</span>
    </div>
  `}function _t(e){Ot("wa-contact-name",i=>{i.textContent=e.username});const n=document.getElementById("wa-avatar");if(n)if(e.avatar){const i=document.createElement("img");i.id="wa-avatar",i.src=e.avatar,i.className="w-full h-full rounded-full object-cover",i.alt="",n.replaceWith(i)}else{const i=document.createElement("div");i.id="wa-avatar",i.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",i.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',n.replaceWith(i)}const t=document.getElementById("wa-messages");if(t){const i=me(e);t.innerHTML=e.messages.map(r=>ve(r,i)).join("")}}function Ot(e,n){const t=document.getElementById(e);t&&n(t)}const Pt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',Ht='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',Gt='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',Nt='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',Vt='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',Rt='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>',Ft='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',Dt='<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>',Wt='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffcc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',Ut=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='white' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='white' opacity='0.03'/%3E%3C/svg%3E")`,Kt=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='black' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='black' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='black' opacity='0.03'/%3E%3C/svg%3E")`,qt={barBg:"#4e8ad4",chatBg:"#eef2f6",sentBg:"#8774e1",timeText:"#00000080",inputBg:"#ffffff",fieldBg:"#eef2f6",dotPattern:Kt},Jt={barBg:"#2f6ea5",chatBg:"#0f0f0f",sentBg:"#8774e1",timeText:"#ffffffcc",inputBg:"#1c1c1e",fieldBg:"#2a2a2e",dotPattern:Ut};function Yt(e){return e.mockupTheme==="light"?qt:Jt}function Xt(e){return`
    <div class="flex items-center justify-between px-6 h-[44px] shrink-0" style="background:${e.barBg};color:#e9edef">
      <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">09:41</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${Rt}</span>
        <span class="text-[11px]">${Ft}</span>
        <span class="text-[11px]">${Dt}</span>
      </div>
    </div>
  `}function Zt(e,n){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${n.barBg}">
      <span class="shrink-0">${Pt}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="tg-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="tg-avatar" class="w-full h-full rounded-full bg-[#527da3] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#e9edef"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="tg-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${g(e.username)}</div>
        <div class="text-[#ffffffcc] text-[11px] leading-tight">online</div>
      </div>
      <div class="shrink-0">${Ht}</div>
    </div>
  `}function Qt(e,n){return`
    <div class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${n.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:`;background-image:${n.dotPattern}`}">
      <div class="flex justify-end">
        <div class="relative max-w-[80%]">
          <div class="rounded-2xl px-3.5 py-2" style="background:${n.sentBg}">
            <p id="tg-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${g(e.message)}</p>
            <div class="flex items-center justify-end gap-1 mt-0.5">
              <span id="tg-time" class="text-[11px] leading-none" style="color:${n.timeText}">${g(e.timestamp)}</span>
              <span class="inline-flex -mb-0.5">${Wt}</span>
            </div>
          </div>
          <div class="absolute -right-[7px] bottom-[6px] w-0 h-0 border-l-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-left-color:${n.sentBg}"></div>
        </div>
      </div>
    </div>
  `}function en(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${Gt}</span>
      <span>${Nt}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.timeText}">Message</div>
      <span>${Vt}</span>
    </div>
  `}function tn(e){const n=Yt(e),t=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${t};background:${t}">
        ${Xt(n)}
        ${Zt(e,n)}
        ${Qt(e,n)}
        ${en(n)}
      </div>
    </div>
  `}function nn(e){N("tg-contact-name",t=>{t.textContent=e.username}),N("tg-message",t=>{t.textContent=e.message}),N("tg-time",t=>{t.textContent=e.timestamp});const n=document.getElementById("tg-avatar");if(n)if(e.avatar){const t=document.createElement("img");t.id="tg-avatar",t.src=e.avatar,t.className="w-full h-full rounded-full object-cover",t.alt="",n.replaceWith(t)}else{const t=document.createElement("div");t.id="tg-avatar",t.className="w-full h-full rounded-full bg-[#527da3] flex items-center justify-center",t.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#e9edef"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',n.replaceWith(t)}}function N(e,n){const t=document.getElementById(e);t&&n(t)}const rn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',on='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',sn='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',an='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>',ln='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',cn='<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>',dn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',pn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',un='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',gn='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffcc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',fn={barBg:"#3b82f6",chatBg:"#f0f2f5",sentBg:"#3b82f6",sentText:"#ffffff",timeText:"#00000080",inputBg:"#f0f2f5",fieldBg:"#ffffff",fieldText:"#111b21",placeholder:"#8696a0"},hn={barBg:"#1e1f22",chatBg:"#101214",sentBg:"#3b82f6",sentText:"#ffffff",timeText:"#ffffffcc",inputBg:"#1e1f22",fieldBg:"#2b2d30",fieldText:"#e9edef",placeholder:"#8696a0"};function xn(e){return e.mockupTheme==="light"?fn:hn}function mn(e){const n=xn(e),t=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${t};background:${t}">
        ${vn(n)}
        ${bn(e,n)}
        ${wn(e,n)}
        ${yn(n)}
      </div>
    </div>
  `}function vn(e){return`
    <div class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${e.barBg}">
      <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">09:41</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${an}</span>
        <span class="text-[11px]">${ln}</span>
        <span class="text-[11px]">${cn}</span>
      </div>
    </div>
  `}function bn(e,n){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${n.barBg}">
      <span class="shrink-0">${rn}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="sg-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="sg-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="sg-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${g(e.username)}</div>
        <div class="text-[#ffffffcc] text-[11px] leading-tight">online</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${on}
        ${sn}
      </div>
    </div>
  `}function wn(e,n){return`
    <div class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${n.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
      <div class="flex flex-col items-end gap-3">
        <div class="flex justify-end">
          <div class="relative max-w-[80%]">
            <div class="rounded-2xl px-3.5 py-2" style="background:${n.sentBg}">
              <p id="sg-message" class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words" style="color:${n.sentText}">${g(e.message)}</p>
              <div class="flex items-center justify-end gap-1 mt-0.5">
                <span id="sg-time" class="text-[11px] leading-none" style="color:${n.timeText}">${g(e.timestamp)}</span>
                <span class="inline-flex -mb-0.5">${gn}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function yn(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${dn}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.placeholder}">Message</div>
      <span>${pn}</span>
      <span>${un}</span>
    </div>
  `}function kn(e){V("sg-contact-name",t=>{t.textContent=e.username}),V("sg-message",t=>{t.textContent=e.message}),V("sg-time",t=>{t.textContent=e.timestamp});const n=document.getElementById("sg-avatar");if(n)if(e.avatar){const t=document.createElement("img");t.id="sg-avatar",t.src=e.avatar,t.className="w-full h-full rounded-full object-cover",t.alt="",n.replaceWith(t)}else{const t=document.createElement("div");t.id="sg-avatar",t.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",t.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',n.replaceWith(t)}}function V(e,n){const t=document.getElementById(e);t&&n(t)}const $n='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',Bn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',zn='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor"/></svg>',En='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',Cn='<svg width="24" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="19.5" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>',Sn={barBg:"#f8f8f8",chatBg:"#ffffff",sentBg:"#34c759",timeText:"#8e8e93",inputBg:"#f8f8f8",fieldBg:"#e5e5ea",fieldText:"#000000",statusColor:"#000000",navColor:"#007aff"},Mn={barBg:"#1c1c1e",chatBg:"#000000",sentBg:"#34c759",timeText:"#8e8e93",inputBg:"#1c1c1e",fieldBg:"#2c2c2e",fieldText:"#ffffff",statusColor:"#ffffff",navColor:"#ffffff"};function Ln(e){return e.mockupTheme==="light"?Sn:Mn}function Tn(e){const n=Ln(e),t=e.mockupTheme==="light"?"#e5e5ea":"#1c1c1e";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${t};background:${t}">
        ${In(n)}
        ${An(e,n)}
        ${jn(e,n)}
        ${_n(n)}
      </div>
    </div>
  `}function In(e){return`
    <div class="flex items-center justify-between px-7 h-[44px] shrink-0" style="background:${e.barBg};color:${e.statusColor}">
      <div class="w-[72px]"></div>
      <span class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">9:41</span>
      <div class="flex items-center gap-1.5 w-[72px] justify-end">
        <span class="text-[11px]">${zn}</span>
        <span class="text-[11px]">${En}</span>
        <span class="text-[11px]">${Cn}</span>
      </div>
    </div>
  `}function An(e,n){return`
    <div class="flex items-center gap-1 px-2 py-1.5 shrink-0" style="background:${n.barBg};color:${n.navColor}">
      <span class="shrink-0 px-1">${$n}</span>
      <div class="w-[34px] h-[34px] rounded-full overflow-hidden shrink-0 ml-1">
        ${e.avatar?`<img id="im-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="im-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="#8e8e93"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="im-contact-name" class="text-[15px] font-semibold leading-tight truncate" style="color:${n.statusColor}">${g(e.username)}</div>
      </div>
      <div class="flex items-center gap-2 shrink-0 px-1">
        <span style="color:${n.navColor}">${Bn}</span>
      </div>
    </div>
  `}function jn(e,n){return`
    <div class="flex-1 p-3 flex flex-col" style="background:var(--chat-bg, ${n.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
      <div class="flex justify-end">
        <div class="relative max-w-[80%]">
          <div class="rounded-2xl px-3.5 py-2" style="background:${n.sentBg}">
            <p id="im-message" class="text-[#ffffff] text-[16px]/[1.4] whitespace-pre-wrap break-words">${g(e.message)}</p>
          </div>
          <div class="flex items-center justify-end gap-1 mt-1 pr-1">
            <span id="im-timestamp" class="text-[11px] leading-none" style="color:${n.timeText}">${g(e.timestamp)}</span>
          </div>
        </div>
      </div>
    </div>
  `}function _n(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <div class="flex-1 rounded-2xl px-4 py-2 text-[16px] leading-none" style="background:${e.fieldBg};color:${e.fieldText}">iMessage</div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#007aff"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    </div>
  `}function On(e){R("im-message",t=>{t.textContent=e.message}),R("im-timestamp",t=>{t.textContent=e.timestamp}),R("im-contact-name",t=>{t.textContent=e.username});const n=document.getElementById("im-avatar");if(n)if(e.avatar){const t=document.createElement("img");t.id="im-avatar",t.src=e.avatar,t.className="w-full h-full rounded-full object-cover",t.alt="",n.replaceWith(t)}else{const t=document.createElement("div");t.id="im-avatar",t.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",t.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="#8e8e93"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',n.replaceWith(t)}}function R(e,n){const t=document.getElementById(e);t&&n(t)}const be={"social-post":{render:C,sync:S},messenger:{render:C,sync:S},instagram:{render:C,sync:S},twitter:{render:C,sync:S},tiktok:{render:C,sync:S},discord:{render:pt,sync:ut},whatsapp:{render:Lt,sync:_t},telegram:{render:tn,sync:nn},signal:{render:mn,sync:kn},imessage:{render:Tn,sync:On}};let v=l.get("theme"),F=!1,q=!1;function we(){return{"social-post":a("sidebar.socialPost"),messenger:a("sidebar.socialPost"),instagram:a("sidebar.socialPost"),twitter:a("sidebar.socialPost"),tiktok:a("sidebar.socialPost"),discord:a("sidebar.discord"),whatsapp:"WhatsApp",telegram:"Telegram",signal:"Signal",imessage:"iMessage"}[v]||v}const Pn=[{label:"Midnight",value:"from-slate-900 to-indigo-950"},{label:"Sky",value:"from-sky-400 to-indigo-600"},{label:"Rose",value:"from-rose-400 to-orange-600"},{label:"Emerald",value:"from-emerald-400 to-cyan-600"},{label:"Amber",value:"from-amber-400 to-red-600"},{label:"Violet",value:"from-violet-400 to-fuchsia-600"},{label:"Charcoal",value:"from-zinc-800 to-zinc-950"}],Hn={"from-slate-900 to-indigo-950":["#0f172a","#1e1b4b"],"from-sky-400 to-indigo-600":["#38bdf8","#4f46e5"],"from-rose-400 to-orange-600":["#fb7185","#ea580c"],"from-emerald-400 to-cyan-600":["#34d399","#0891b2"],"from-amber-400 to-red-600":["#fbbf24","#dc2626"],"from-violet-400 to-fuchsia-600":["#a78bfa","#c026d3"],"from-zinc-800 to-zinc-950":["#27272a","#09090b"]},ae=[{label:"Default",value:"",colors:null},{label:"Warm",value:"#efeae2",colors:null},{label:"Cool",value:"#eef2f6",colors:null},{label:"Dark",value:"#0b141a",colors:null},{label:"Deep",value:"#101214",colors:null},{label:"Rose",value:"linear-gradient(135deg,#fce4ec,#f8bbd0)",colors:null},{label:"Sky",value:"linear-gradient(135deg,#e3f2fd,#bbdefb)",colors:null},{label:"Mint",value:"linear-gradient(135deg,#e8f5e9,#c8e6c9)",colors:null},{label:"Lavender",value:"linear-gradient(135deg,#f3e5f5,#e1bee7)",colors:null}],_=[{id:"whatsapp",theme:"whatsapp",name:"WhatsApp",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>'},{id:"telegram",theme:"telegram",name:"Telegram",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0m4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635"/></svg>'},{id:"signal",theme:"signal",name:"Signal",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0l-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0l-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0l-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002l-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213l-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24l-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125"/></svg>'},{id:"messenger",theme:"messenger",name:"Messenger",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13"/></svg>'},{id:"imessage",theme:"imessage",name:"iMessage",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.285 0A5.273 5.273 0 0 0 0 5.285v13.43A5.273 5.273 0 0 0 5.285 24h13.43A5.273 5.273 0 0 0 24 18.715V5.285A5.273 5.273 0 0 0 18.715 0ZM12 4.154a8.809 7.337 0 0 1 8.809 7.338A8.809 7.337 0 0 1 12 18.828a8.809 7.337 0 0 1-2.492-.303A8.656 7.337 0 0 1 5.93 19.93a9.929 7.337 0 0 0 1.54-2.155 8.809 7.337 0 0 1-4.279-6.283A8.809 7.337 0 0 1 12 4.154"/></svg>'},{id:"instagram",theme:"instagram",name:"Instagram",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>'},{id:"twitter",theme:"twitter",name:"X",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'},{id:"tiktok",theme:"tiktok",name:"TikTok",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07"/></svg>'},{id:"discord",theme:"discord",name:"Discord",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189"/></svg>'}],h={koala:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="8" ry="7.5"/><circle cx="7" cy="5" r="4"/><circle cx="17" cy="5" r="4"/><circle cx="9" cy="11" r="1.2" fill="#0d0a07"/><circle cx="15" cy="11" r="1.2" fill="#0d0a07"/><ellipse cx="12" cy="16" rx="2.5" ry="1.2"/></svg>',sun:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',moon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',download:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',spinner:'<svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10"/></svg>',check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',chevronDown:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',github:'<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',sidebarToggle:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>',undo:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',redo:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',clipboard:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',link:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',folder:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',zoomIn:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',zoomOut:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>'},le=J(),Gn={de:"Deutsch",en:"English",es:"Español"};function ce(e){return e==="de"?'<svg viewBox="0 0 640 480"><path fill="#FFCC00" d="M0 320h640v160H0z"/><path fill="#000001" d="M0 0h640v160H0z"/><path fill="red" d="M0 160h640v160H0z"/></svg>':e==="en"?'<svg viewBox="0 0 640 480"><path fill="#bd3d44" d="M0 0h640v480H0"/><path fill="#fff" d="M0 55.3h640m0 73.7H0m0 74h640m0 73.7H0m0 74h640"/><path fill="#192f5d" d="M0 0h364.8v258.5H0"/></svg>':e==="es"?'<svg viewBox="0 0 640 480"><path fill="#AD1519" d="M0 0h640v480H0"/><path fill="#F1BF00" d="M0 120h640v240H0z"/></svg>':""}function Nn(e){return l.getSidebarOpen(),`
    <header class="h-14 shrink-0 flex items-center justify-between px-5 border-b border-white/[5%] bg-[#0d0a07]/80 backdrop-blur-xl relative z-50">
      <div class="flex items-center gap-3">
        <div class="text-zinc-100">${h.koala}</div>
        <span class="text-sm font-bold tracking-tight hidden sm:inline">${a("app.name")}</span>
        <button id="btn-sidebar-toggle" aria-label="${a("topbar.toggleSidebar")}"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all ml-2">
          ${h.sidebarToggle}
        </button>
      </div>
      <div class="flex items-center gap-1.5">
        <button id="btn-undo" aria-label="${a("topbar.undo")}"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all disabled:opacity-30 disabled:pointer-events-none"
          ${l.canUndo()?"":"disabled"}>
          ${h.undo}
        </button>
        <button id="btn-redo" aria-label="${a("topbar.redo")}"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all disabled:opacity-30 disabled:pointer-events-none"
          ${l.canRedo()?"":"disabled"}>
          ${h.redo}
        </button>
        <div class="relative flex" id="export-dropdown-container">
          <button id="btn-topbar-export" aria-label="${a("topbar.export")}"
            class="flex items-center gap-1.5 bg-[#f97316] pl-3 pr-1.5 h-7 text-xs font-semibold text-white hover:bg-[#ea580c] active:scale-[0.97] transition-all disabled:opacity-60 disabled:pointer-events-none rounded-l-full">
            <span id="btn-export-icon">${h.download}</span>
            <span id="btn-export-label">${a("topbar.export")}</span>
          </button>
          <button id="btn-export-chevron" aria-label="${a("topbar.more")}"
            class="flex items-center bg-[#f97316] pl-1.5 pr-2.5 h-7 text-white hover:bg-[#ea580c] active:scale-[0.97] transition-all rounded-r-full border-l border-orange-500/30">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div id="export-dropdown" class="absolute right-0 top-full mt-1 z-50 hidden min-w-[200px] rounded-xl border border-white/10 bg-[#1a1714]/95 backdrop-blur-2xl py-1 shadow-2xl shadow-black/50">
            <button data-export-action="png" class="flex items-center gap-2.5 w-full px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-all text-left">
              ${h.download} <span>${a("topbar.exportPng")}</span>
            </button>
            <button data-export-action="clipboard" class="flex items-center gap-2.5 w-full px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-all text-left">
              ${h.clipboard} <span>${a("topbar.exportClipboard")}</span>
            </button>
            <button data-export-action="share" class="flex items-center gap-2.5 w-full px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-all text-left">
              ${h.link} <span>${a("topbar.exportShare")}</span>
            </button>
          </div>
        </div>
        <button id="btn-start-tour" aria-label="${a("tutorial.restart")}"
          class="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-all mr-1">${a("tutorial.restart")}</button>
        <a href="https://github.com/Shik3i/KoalaSnap" target="_blank" rel="noopener noreferrer"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all"
          aria-label="GitHub">
          ${h.github}
        </a>
        <div class="relative flex" id="lang-switcher">
          <button id="lang-btn"
            class="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-2.5 py-1.5 text-xs
                   text-zinc-400 hover:text-zinc-200 hover:border-white/20 outline-0 transition-all cursor-pointer">
            <span class="w-4 h-3 shrink-0 rounded-[2px] overflow-hidden">${ce(le)}</span>
            <span class="text-[10px] font-semibold leading-none">${le.toUpperCase()}</span>
            <span class="text-zinc-500">${h.chevronDown}</span>
          </button>
          <div id="lang-dropdown" class="hidden absolute right-0 top-full mt-1.5 z-50 min-w-[130px] rounded-xl border border-white/10 bg-[#1a1714]/95 backdrop-blur-2xl py-1 shadow-2xl shadow-black/50">
            ${["de","en","es"].map(n=>`
              <button data-lang="${n}"
                class="flex items-center gap-2 w-full px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-white/5 transition-all text-left">
                <span class="w-5 h-4 shrink-0 rounded-[2px] overflow-hidden">${ce(n)}</span>
                ${Gn[n]}
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    </header>
  `}function Vn(e){const n=l.getSidebarOpen(),i=J()==="de"?"/de":"";return`
    <aside id="sidebar" class="w-[340px] shrink-0 h-full overflow-y-auto p-4 flex flex-col gap-4 transition-all duration-300 bg-[#0d0a07] fixed left-0 top-14 bottom-0 z-40 border-r border-white/[6%]
      ${n?"translate-x-0":"-translate-x-full"}">
      <div id="app-library" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
        <div class="flex items-center justify-between cursor-pointer select-none" id="app-library-toggle">
          <span class="text-xs font-semibold text-zinc-300 tracking-wide">${a("sidebar.appLibrary")}</span>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-zinc-600">${_.length} ${a("sidebar.apps")}</span>
            <span id="app-library-chevron" class="text-zinc-500 transition-transform">${h.chevronDown}</span>
          </div>
        </div>
        <div id="app-library-body">
          <div class="relative mb-2">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">${h.search}</span>
            <input type="text" placeholder="${a("sidebar.search")}"
              class="w-full rounded-xl border border-white/[6%] bg-white/[4%] pl-9 pr-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
          </div>
          <div class="flex flex-col gap-1.5">
            ${_.map(r=>{const o=r.theme===v;return`
                <button data-app="${r.id}" aria-label="${r.id}"
                  class="flex items-center gap-3 rounded-xl border p-2.5 transition-all text-left
                    ${o?"border-white/15 bg-white/[8%]":"border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]"}">
                <div class="w-7 h-7 rounded-lg bg-white/[8%] flex items-center justify-center shrink-0 text-zinc-300">${r.svg}</div>
                  <span class="flex-1 text-xs font-medium text-white">${r.name}</span>
                  <span class="text-[9px] text-zinc-600 uppercase tracking-wider">${r.tag==="chat"?a("canvas.chat"):a("canvas.social")}</span>
                </button>
              `}).join("")}
          </div>
        </div>
      </div>

      <div id="design-panel" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
        <div class="flex items-center justify-between cursor-pointer select-none" id="design-toggle">
          <span class="text-xs font-semibold text-zinc-300 tracking-wide">Design</span>
          <span id="design-chevron" class="text-zinc-500 transition-transform">${h.chevronDown}</span>
        </div>
        <div id="design-body">
          <div class="flex flex-wrap gap-1.5">
            ${Pn.map(r=>`
              <button data-gradient="${r.value}" aria-label="${r.label}"
                class="w-7 h-7 rounded-lg ${r.value} ring-1 ring-white/[8%] hover:ring-white/30 transition-all
                  ${e.bgGradient===r.value?"ring-2 ring-white scale-110":""}"></button>
            `).join("")}
          </div>
        </div>
      </div>

      <div id="settings-panel" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-4">
        <span class="text-xs font-semibold text-zinc-300 tracking-wide">${a("sidebar.settings")} · <span class="text-zinc-500 font-normal normal-case">${we()}</span></span>
        ${ke(e)}
      </div>

      ${ye()}

      <div class="flex items-center gap-4 mt-auto pt-4 border-t border-white/[6%]">
        <a href="${i}/imprint" class="text-[10px] text-zinc-600 hover:text-zinc-200 transition-colors">${a("bottom.imprint")}</a>
        <a href="${i}/privacy" class="text-[10px] text-zinc-600 hover:text-zinc-200 transition-colors">${a("bottom.privacy")}</a>
      </div>
    </aside>
  `}function ye(){const e=l.listTemplates();return`
    <div id="templates-section" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-zinc-300 tracking-wide">${a("templates.title")}</span>
        <span class="text-[10px] text-zinc-600">${e.length}</span>
      </div>
      <div class="flex items-center gap-2">
        <input id="input-template-name" type="text" placeholder="${a("templates.namePlaceholder")}"
          class="flex-1 rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
        <button id="btn-template-save"
          class="rounded-xl bg-[#f97316] px-3 py-2 text-xs font-semibold text-white hover:bg-[#ea580c] transition-all shrink-0">${a("templates.save")}</button>
      </div>
      <div id="template-list" class="flex flex-col gap-1 max-h-[140px] overflow-y-auto">
        ${e.length===0?`<span class="text-[10px] text-zinc-600 text-center py-2">${a("templates.empty")}</span>`:e.map(n=>`
            <div class="flex items-center gap-1 group" data-tmpl-name="${n}">
              <span class="flex-1 text-xs text-zinc-400 truncate">${n}</span>
              <button data-tmpl-action="load" class="hidden group-hover:inline-flex px-2 py-0.5 rounded-lg text-[10px] text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all">${a("templates.load")}</button>
              <button data-tmpl-action="delete" class="hidden group-hover:inline-flex px-2 py-0.5 rounded-lg text-[10px] text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all">${a("templates.delete")}</button>
            </div>
          `).join("")}
      </div>
    </div>
  `}function ke(e){const n=["whatsapp","telegram","signal","imessage"].includes(v);let t="";return v==="discord"?t=`
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
      </label>`:n?(t=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.username")}</span>
        <input id="input-username" type="text" value="${e.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`,v==="whatsapp"?t+=`
      <div class="flex flex-col gap-2 mt-2">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.message")}</span>
        <div id="wa-message-list" class="flex flex-col gap-2">
          ${e.messages.map((i,r)=>$e(i,r)).join("")}
        </div>
        <button id="btn-add-message"
          class="w-full rounded-xl border border-dashed border-white/[8%] py-2 text-xs text-zinc-500 hover:text-zinc-300 hover:border-white/20 transition-all">+ ${a("sidebar.addMessage")}</button>
      </div>`:t+=`
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.timestamp")}</span>
        <input id="input-timestamp" type="text" value="${e.timestamp}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`):t=`
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
      ${t}

      ${v!=="whatsapp"?`
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
      ${Fn(e)}
    </div>
  `}const Rn=[{id:"read",title:"Read",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>'},{id:"delivered",title:"Delivered",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>'},{id:"sent",title:"Sent",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'},{id:"unread",title:"Unread",svg:'<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>'}];function $e(e,n){const t=e.type==="sent",i=t?"bg-white text-zinc-900":"bg-white/[4%] text-zinc-500 hover:text-zinc-300",r=t?"bg-white/[4%] text-zinc-500 hover:text-zinc-300":"bg-white text-zinc-900",o=e.status||"read";return`
    <div draggable="true" data-msg-idx="${n}"
      class="rounded-xl border border-white/[6%] bg-white/[3%] p-2.5 flex flex-col gap-1.5 cursor-grab active:cursor-grabbing">
      <textarea data-msg-idx="${n}" rows="2"
        class="w-full rounded-lg border border-white/[6%] bg-white/[4%] px-2.5 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none" placeholder="${a("sidebar.messagePlaceholder")}">${g(e.text)}</textarea>
      <div class="flex items-center gap-1.5">
        <button data-msg-idx="${n}" data-msg-type="sent"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${i}">${a("sidebar.sent")}</button>
        <button data-msg-idx="${n}" data-msg-type="received"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${r}">${a("sidebar.received")}</button>
        <div class="flex gap-0.5 ml-1">
          ${Rn.map(s=>`
            <button data-msg-idx="${n}" data-msg-status="${s.id}"
              class="p-1 rounded-md transition-all ${o===s.id?"bg-white/15 ring-1 ring-white/20":"text-zinc-600 hover:text-zinc-300 hover:bg-white/5"}"
              title="${s.title}">${s.svg}</button>
          `).join("")}
        </div>
        <input type="text" data-msg-idx="${n}" data-msg-field="time" value="${g(e.time)}"
          class="w-14 rounded-lg border border-white/[6%] bg-white/[4%] px-2 py-1 text-[10px] text-zinc-200 text-center outline-0 focus:border-zinc-600 transition-colors" placeholder="${a("sidebar.timePlaceholder")}" />
        <button data-msg-idx="${n}" data-msg-action="delete"
          class="p-1 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all" title="${a("sidebar.deleteMessage")}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `}function Fn(e){return`
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
        ${ae.map(n=>`
          <button data-chat-bg="${n.value}" aria-label="${n.label}"
            class="w-7 h-7 rounded-lg ring-1 ring-white/[8%] hover:ring-white/30 transition-all
              ${e.chatBgGradient===n.value?"ring-2 ring-white scale-110":""}"
            style="background:${n.value||ae[1].value}"></button>
        `).join("")}
      </div>
    </label>
    <label class="flex flex-col gap-1.5 mt-4">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.font")}</span>
      <select id="input-font"
        class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 outline-0 focus:border-zinc-600 transition-colors">
        <option value="system-ui" ${e.fontFamily==="system-ui"?"selected":""}>System UI</option>
        <option value="Inter" ${e.fontFamily==="Inter"?"selected":""}>Inter</option>
      </select>
    </label>
    ${v!=="social-post"&&!["messenger","instagram","twitter","tiktok"].includes(v)?`
    <label class="flex flex-col gap-1.5 mt-4">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${a("sidebar.labels.uploadBg")}</span>
      <input id="input-chatbg" type="file" accept="image/*"
        class="text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:text-zinc-200 file:font-medium hover:file:bg-white/15 transition-colors" />
    </label>`:""}
  `}function Dn(e){const n=l.get("_zoom")||0;return`
    <div id="bottom-bar" class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
                flex items-center gap-1 rounded-full bg-white/[6%] backdrop-blur-2xl
                border border-white/[8%] px-2 py-1.5 shadow-2xl shadow-black/30">
      <button id="btn-mockup-theme" aria-label="${a("bottom.toggleTheme")}" class="rounded-full p-2 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${a("bottom.toggleTheme")}">
        ${e.mockupTheme==="light"?h.sun:h.moon}
      </button>
      <span class="w-px h-4 bg-white/[6%] mx-1"></span>
      <button id="btn-zoom-out" aria-label="${a("bottom.zoomOut")}" class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${a("bottom.zoomOut")}">
        ${h.zoomOut}
      </button>
      <input id="zoom-slider" type="range" min="-50" max="100" value="${n}"
        class="w-20 h-1 accent-[#f97316] cursor-pointer" />
      <button id="btn-zoom-in" aria-label="${a("bottom.zoomIn")}" class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${a("bottom.zoomIn")}">
        ${h.zoomIn}
      </button>
      <span id="zoom-label" class="text-[10px] text-zinc-500 w-8 text-center">${n>0?"+":""}${n}%</span>
    </div>
  `}function Be(){const e=document.getElementById("app");if(!e)return;const n=l.getState(),t=l.getSidebarOpen();e.innerHTML=`
    ${Nn()}
    <div id="main-area" class="flex-1 flex overflow-hidden relative">
      <div id="sidebar-overlay" class="${t&&window.innerWidth<768?"block":"hidden"} fixed inset-0 z-30 bg-black/40"></div>
      ${Vn(n)}
      <button id="btn-sidebar-open"
        class="${t?"hidden":""} absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-5 h-20 bg-[#1a1714] hover:bg-[#25211e] border border-white/10 border-l-0 rounded-r-lg transition-all cursor-pointer group">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-400 group-hover:text-zinc-200 transition-colors"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <main id="canvas" class="flex-1 relative overflow-hidden">
        <div id="canvas-area" class="absolute inset-0 flex items-center justify-center overflow-hidden z-10">
          <div id="mockup"></div>
        </div>
        ${Dn(n)}
      </main>
    </div>
  `,Un(),L();const i=l.get("_zoom")||0;Ce(i)}function Wn(){const e=document.getElementById("btn-undo"),n=document.getElementById("btn-redo");e&&(e.disabled=!l.canUndo()),n&&(n.disabled=!l.canRedo())}function de(e){const n=document.getElementById("settings-panel");n&&(n.innerHTML=`
    <span class="text-xs font-semibold text-zinc-300 tracking-wide">${a("sidebar.settings")} · <span class="text-zinc-500 font-normal normal-case">${we()}</span></span>
    ${ke(e)}
  `,ze())}function Un(){f("btn-topbar-export","click",()=>D()),f("btn-export-chevron","click",Yn),f("btn-sidebar-toggle","click",W),f("btn-sidebar-open","click",W),f("sidebar-overlay","click",W),f("btn-undo","click",()=>l.undo()),f("btn-redo","click",()=>l.redo()),f("btn-mockup-theme","click",()=>{const i=l.get("mockupTheme")==="light"?"dark":"light";l.set("mockupTheme",i)}),f("lang-btn","click",i=>{i.stopPropagation(),document.getElementById("lang-dropdown").classList.toggle("hidden")}),document.addEventListener("click",()=>{const i=document.getElementById("lang-dropdown");i&&!i.classList.contains("hidden")&&i.classList.add("hidden")}),document.querySelectorAll("[data-lang]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.lang;window.location.href=r==="en"?"/":`/${r}/`})}),f("btn-start-tour","click",()=>fe()),f("btn-template-save","click",ei),f("zoom-slider","input",Qn),f("btn-zoom-in","click",()=>U(10)),f("btn-zoom-out","click",()=>U(-10)),document.querySelectorAll("[data-gradient]").forEach(i=>{i.addEventListener("click",()=>l.set("bgGradient",i.dataset.gradient))}),document.querySelectorAll("[data-chat-bg]").forEach(i=>{i.addEventListener("click",()=>l.set("chatBgGradient",i.dataset.chatBg))}),document.querySelectorAll("[data-app]").forEach(i=>{i.addEventListener("click",()=>{const r=_.find(o=>o.id===i.dataset.app);r&&l.set("theme",r.theme)})}),document.querySelectorAll("[data-export-action]").forEach(i=>{i.addEventListener("click",r=>{const o=i.dataset.exportAction;pe(),o==="png"?D():o==="clipboard"?Xn():o==="share"&&Zn()})}),document.querySelectorAll("[data-tmpl-action]").forEach(i=>{i.addEventListener("click",r=>{var d;const o=i.dataset.tmplAction,s=(d=i.closest("[data-tmpl-name]"))==null?void 0:d.dataset.tmplName;s&&(o==="load"?l.loadTemplate(s):o==="delete"&&(l.deleteTemplate(s),te()))})});const e=document.getElementById("app-library-toggle");e&&e.addEventListener("click",()=>{const i=document.getElementById("app-library-body"),r=document.getElementById("app-library-chevron");if(!i)return;const o=i.style.display==="none";i.style.display=o?"":"none",r&&(r.style.transform=o?"rotate(0deg)":"rotate(180deg)")});const n=document.getElementById("design-toggle");n&&n.addEventListener("click",()=>{const i=document.getElementById("design-body"),r=document.getElementById("design-chevron");if(!i)return;const o=i.style.display==="none";i.style.display=o?"":"none",r&&(r.style.transform=o?"rotate(0deg)":"rotate(180deg)")}),document.addEventListener("click",i=>{const r=document.getElementById("export-dropdown-container");r&&!r.contains(i.target)&&pe()}),document.addEventListener("keydown",i=>{const r=i.metaKey||i.ctrlKey;r&&i.key==="z"&&!i.shiftKey&&(i.preventDefault(),l.undo()),r&&i.key==="z"&&i.shiftKey&&(i.preventDefault(),l.redo()),r&&i.key==="e"&&(i.preventDefault(),D())});const t=document.getElementById("canvas");t&&t.addEventListener("wheel",i=>{(i.ctrlKey||i.metaKey)&&(i.preventDefault(),U(i.deltaY>0?-5:5))},{passive:!1}),ze()}function ze(){f("input-padding","input",e=>{l.set("padding",Number(e.target.value));const n=document.getElementById("padding-value");n&&(n.textContent=e.target.value)}),f("input-font","change",e=>l.set("fontFamily",e.target.value)),f("input-chatbg","change",async e=>{var t;const n=(t=e.target.files)==null?void 0:t[0];if(n&&n.type.startsWith("image/")&&!(n.size>5*1024*1024))try{const i=await new Promise((r,o)=>{const s=new FileReader;s.onload=()=>r(s.result),s.onerror=o,s.readAsDataURL(n)});l.set("chatBg",i)}catch{}}),f("input-message","input",e=>l.set("message",e.target.value)),f("input-avatar","change",async e=>{var t;const n=(t=e.target.files)==null?void 0:t[0];if(n&&n.type.startsWith("image/")&&!(n.size>5*1024*1024))try{const i=l.get("avatar"),r=await He(n);i&&i.startsWith("blob:")&&URL.revokeObjectURL(i),l.set("avatar",r)}catch{l.set("avatar",null)}}),["messenger","instagram","twitter","tiktok","social-post"].includes(v)?(f("input-author","input",e=>l.set("author",e.target.value)),f("input-handle","input",e=>l.set("handle",e.target.value))):v==="discord"?(f("input-username","input",e=>l.set("username",e.target.value)),f("input-rolecolor","input",e=>l.set("roleColor",e.target.value)),f("input-timestamp","input",e=>l.set("timestamp",e.target.value))):["whatsapp","telegram","signal","imessage"].includes(v)&&(f("input-username","input",e=>l.set("username",e.target.value)),v==="whatsapp"?Kn():f("input-timestamp","input",e=>l.set("timestamp",e.target.value)))}function Kn(){const e=document.getElementById("btn-add-message");e&&(e.onclick=()=>{const i=[...l.get("messages")];i.push({id:Date.now(),text:"",type:l.get("waMode")||"sent",time:""}),l.set("messages",i),M(l.getState())});const n=document.getElementById("wa-message-list");if(!n)return;n.addEventListener("input",i=>{const r=i.target,o=parseInt(r.dataset.msgIdx);if(!isNaN(o)){if(r.tagName==="TEXTAREA"){const s=[...l.get("messages")];s[o]&&(s[o]={...s[o],text:r.value}),l.set("messages",s)}else if(r.dataset.msgField==="time"){const s=[...l.get("messages")];s[o]&&(s[o]={...s[o],time:r.value}),l.set("messages",s)}}}),n.addEventListener("click",i=>{const r=i.target.closest("[data-msg-type], [data-msg-status], [data-msg-action]");if(!r)return;const o=parseInt(r.dataset.msgIdx);if(!isNaN(o)){if(r.dataset.msgType){const s=[...l.get("messages")];s[o]&&(s[o]={...s[o],type:r.dataset.msgType}),l.set("messages",s),M(l.getState())}else if(r.dataset.msgStatus){const s=[...l.get("messages")];s[o]&&(s[o]={...s[o],status:r.dataset.msgStatus}),l.set("messages",s),M(l.getState())}else if(r.dataset.msgAction==="delete"){const s=l.get("messages").filter((d,x)=>x!==o);l.set("messages",s),M(l.getState())}}});let t=null;n.addEventListener("dragstart",i=>{const r=i.target.closest("[draggable]");r&&(t=parseInt(r.dataset.msgIdx),r.style.opacity="0.4")}),n.addEventListener("dragend",i=>{const r=i.target.closest("[draggable]");r&&(r.style.opacity=""),t=null}),n.addEventListener("dragover",i=>{i.preventDefault();const r=i.target.closest("[draggable]");r&&(r.style.borderColor="rgba(255,255,255,0.3)")}),n.addEventListener("dragleave",i=>{const r=i.target.closest("[draggable]");r&&(r.style.borderColor="")}),n.addEventListener("drop",i=>{i.preventDefault();const r=i.target.closest("[draggable]");if(!r)return;r.style.borderColor="";const o=parseInt(r.dataset.msgIdx);if(t===null||t===o)return;const s=[...l.get("messages")],[d]=s.splice(t,1);s.splice(o,0,d),l.set("messages",s),M(l.getState())})}function M(e){const n=document.getElementById("wa-message-list");n&&(n.innerHTML=e.messages.map((t,i)=>$e(t,i)).join(""))}function L(){const e=be[v];if(!e)return;const n=l.getState(),t=document.getElementById("mockup");t&&(t.innerHTML=e.render(n)),Ee(n),requestAnimationFrame(ee)}function qn(e,n,t){if(!F){F=!0;try{const i=be[v];if(!i)return;if(e==="theme"){v=n;const r=Se();r&&l.mutate({author:r.author||"",handle:r.handle||"",username:r.username||r.author||"",message:r.message||"",timestamp:r.time||"",roleColor:r.roleColor||"#5865F2",messages:r.messages||[{id:1,text:r.message||"",type:l.get("waMode")||"sent",time:r.time||"",status:"read"}]}),L(),de(l.getState()),Jn(n),Ve()&&requestAnimationFrame(()=>De());return}if(e==="bgGradient"&&Ee(t),e==="mockupTheme"){const r=document.getElementById("btn-mockup-theme");r&&(r.innerHTML=n==="light"?h.sun:h.moon),L();return}if(e==="fontFamily"||e==="chatBg"){L();return}if(e==="waMode")return;if(e==="_zoom"){Ce(n);return}if(e==="_undo"||e==="_redo"){L(),de(l.getState()),Wn();return}e==="avatar"&&Ge(v==="discord"?"discord-avatar":v==="whatsapp"?"wa-avatar":"mockup-avatar"),i.sync(t)}finally{F=!1}}}function Jn(e){document.querySelectorAll("[data-app]").forEach(n=>{const t=_.find(r=>r.id===n.dataset.app),i=t&&t.theme===e;n.className=`flex items-center gap-3 rounded-xl border p-2.5 transition-all text-left ${i?"border-white/15 bg-white/[8%]":"border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]"}`})}function Ee(e){const n=document.getElementById("canvas");if(n){const t=Hn[e.bgGradient]||["#0f172a","#1e1b4b"],i="radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",r=`linear-gradient(135deg, ${t[0]}, ${t[1]})`;n.style.background=`${i}, ${r}`,n.style.backgroundSize="40px 40px, 100% 100%"}e.chatBgGradient?document.documentElement.style.setProperty("--chat-bg",e.chatBgGradient):document.documentElement.style.removeProperty("--chat-bg")}function ee(){if(q)return;const e=document.getElementById("canvas"),n=document.getElementById("mockup-card");if(!e||!n)return;const t=e.getBoundingClientRect(),i=Math.min(t.width/390,t.height/844)*.9,o=1+(l.get("_zoom")||0)/100,s=i*o;n.style.transform=`scale(${s})`,n.style.transformOrigin="center center"}window.addEventListener("resize",ee);async function D(){const e=document.getElementById("btn-topbar-export"),n=document.getElementById("btn-export-icon"),t=document.getElementById("btn-export-label");if(!e||e.disabled)return;q=!0,e.disabled=!0,n&&(n.innerHTML=h.spinner),t&&(t.textContent=a("topbar.rendering"));const i=document.getElementById("mockup-card");if(!i){s();return}const r=i.style.transform,o=i.style.transformOrigin;i.style.transform="",i.style.transformOrigin="",await new Promise(d=>requestAnimationFrame(d));try{const{toPng:d}=await ue(async()=>{const{toPng:b}=await import("./index-CgJtiJsK.js");return{toPng:b}},[]),x=await d(i,{pixelRatio:2});i.style.transform=r,i.style.transformOrigin=o;const c=new Date,p=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}_${String(c.getHours()).padStart(2,"0")}-${String(c.getMinutes()).padStart(2,"0")}-${String(c.getSeconds()).padStart(2,"0")}`,m=`koalasnap-${v}-${p}.png`,u=document.createElement("a");u.download=m,u.href=x,u.click(),n&&(n.innerHTML=h.check),t&&(t.textContent=a("topbar.exported")),e.classList.remove("bg-[#f97316]","hover:bg-[#ea580c]"),e.classList.add("bg-emerald-500","hover:bg-emerald-600"),setTimeout(s,2e3)}catch(d){i.style.transform=r,i.style.transformOrigin=o,console.error("Export failed:",(d==null?void 0:d.message)||d,(d==null?void 0:d.stack)||""),n&&(n.innerHTML=h.download),t&&(t.textContent=a("topbar.exportFailed")),e.disabled=!1,setTimeout(()=>{t&&(t.textContent=a("topbar.export")),n&&(n.innerHTML=h.download)},2e3)}function s(){q=!1,e.disabled=!1,e.classList.remove("bg-emerald-500","hover:bg-emerald-600"),e.classList.add("bg-[#f97316]","hover:bg-[#ea580c]"),n&&(n.innerHTML=h.download),t&&(t.textContent=a("topbar.export"))}}function Yn(){const e=document.getElementById("export-dropdown");if(!e)return;const n=!e.classList.contains("hidden");e.classList.toggle("hidden",n)}function pe(){const e=document.getElementById("export-dropdown");e&&e.classList.add("hidden")}async function Xn(){const e=document.getElementById("mockup-card");if(!e)return;const n=document.getElementById("btn-topbar-export"),t=document.getElementById("btn-export-icon"),i=document.getElementById("btn-export-label");n&&(n.disabled=!0),t&&(t.innerHTML=h.spinner),i&&(i.textContent=a("topbar.rendering"));try{const r=e.style.transform,o=e.style.transformOrigin;e.style.transform="",e.style.transformOrigin="";const s=e.querySelectorAll('[style*="background-image"]'),d=[];s.forEach((u,b)=>{d[b]=u.style.backgroundImage,u.style.backgroundImage="none"});const x=e.querySelectorAll("img"),c=[];x.forEach((u,b)=>{c[b]=u.src,u.src.startsWith("blob:")&&(u.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}),await new Promise(u=>requestAnimationFrame(u));const{toBlob:p}=await ue(async()=>{const{toBlob:u}=await import("./index-CgJtiJsK.js");return{toBlob:u}},[]),m=await p(e,{pixelRatio:2});e.style.transform=r,e.style.transformOrigin=o,s.forEach((u,b)=>{u.style.backgroundImage=d[b]}),x.forEach((u,b)=>{c[b]&&(u.src=c[b])}),m&&(await navigator.clipboard.write([new ClipboardItem({"image/png":m})]),z(a("topbar.copied")))}catch(r){console.error("Clipboard copy failed:",r),z(a("topbar.exportFailed"))}n&&(n.disabled=!1),t&&(t.innerHTML=h.download),i&&(i.textContent=a("topbar.export"))}function Zn(){const e=l.getShareUrl();if(!e){z(a("topbar.exportFailed"));return}try{navigator.clipboard.writeText(e),z(a("topbar.linkCopied"))}catch{z(a("topbar.exportFailed"))}}function z(e){const n=document.getElementById("toast");n&&n.remove();const t=document.createElement("div");t.id="toast",t.className="fixed bottom-28 left-1/2 -translate-x-1/2 z-50 rounded-full bg-zinc-800/90 backdrop-blur-xl border border-white/10 px-5 py-2.5 text-sm text-zinc-200 shadow-2xl shadow-black/30 animate-fade-in",t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transition="opacity 0.3s",setTimeout(()=>t.remove(),300)},2e3)}function W(){const n=!l.getSidebarOpen();l.setSidebarOpen(n),Be()}function U(e){const n=l.get("_zoom")||0,t=Math.max(-50,Math.min(100,n+e));l.set("_zoom",t)}function Qn(e){const n=parseInt(e.target.value);l.set("_zoom",n)}function Ce(e){const n=document.getElementById("zoom-slider");n&&(n.value=e);const t=document.getElementById("zoom-label");t&&(t.textContent=e>0?`+${e}%`:`${e}%`),ee()}function te(){const e=document.getElementById("templates-section");if(!e||!document.getElementById("sidebar"))return;const t=document.createElement("div");t.innerHTML=ye(),e.replaceWith(t.firstElementChild),document.querySelectorAll("[data-tmpl-action]").forEach(i=>{i.addEventListener("click",r=>{var d;const o=i.dataset.tmplAction,s=(d=i.closest("[data-tmpl-name]"))==null?void 0:d.dataset.tmplName;s&&(o==="load"?l.loadTemplate(s):o==="delete"&&(l.deleteTemplate(s),te()))})})}function ei(){const e=document.getElementById("input-template-name");if(!e||!e.value.trim())return;const n=e.value.trim();l.saveTemplate(n),e.value="",te(),z(a("templates.saved"))}function f(e,n,t){var i;(i=document.getElementById(e))==null||i.addEventListener(n,t)}function Se(){var o,s;const e=[{author:"Maya",handle:"@maya_99",username:"Maya",message:"Hey, are you coming online tonight?",time:"7:18 PM",roleColor:"#e81224",messages:[{text:"Hey, are you coming online tonight?",type:"sent",time:"7:18 PM"},{text:"Yeah, give me 5!",type:"received",time:"7:20 PM"},{text:"Sure, take your time 🐨",type:"sent",time:"7:21 PM"}]}],n=window.__LOCALE__,t=n!=null&&n.dummySets&&n.dummySets.length>0?n.dummySets:e,i=t[Math.floor(Math.random()*t.length)],r=i.messages&&i.messages.length>0?i.messages.map((d,x)=>({id:x+1,text:d.text,type:d.type,time:d.time,status:d.status||"read"})):[{id:1,text:i.message||"",type:l.get("waMode")||"sent",time:i.time||"",status:"read"}];return{author:i.author||"",handle:i.handle||"",username:i.username||i.author||"",message:i.message||((o=r[0])==null?void 0:o.text)||"",time:i.time||((s=r[0])==null?void 0:s.time)||"",roleColor:i.roleColor||"#5865F2",messages:r}}l.subscribe(qn);try{const e=localStorage.getItem("koalasnap_state"),n=J();let t=!e;if(e)try{const i=JSON.parse(e);(!i.locale||i.locale!==n)&&(t=!0)}catch{t=!0}if(t){const i=Se();i&&l.mutate({...i,locale:n})}}catch{}Be();"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").catch(()=>{});Ne()||setTimeout(()=>fe(),800);
