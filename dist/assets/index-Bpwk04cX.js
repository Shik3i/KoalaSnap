(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const Ct="modulepreload",Mt=function(e){return"/"+e},He={},qe=function(t,s,n){let i=Promise.resolve();if(s&&s.length>0){let o=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=o(s.map(c=>{if(c=Mt(c),c in He)return;He[c]=!0;const f=c.endsWith(".css"),x=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${x}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":Ct,f||(g.as="script"),g.crossOrigin="",g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((h,m)=>{g.addEventListener("load",h),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},ke="koalasnap_state",F="koalasnap_templates",Pe="koalasnap_sidebar",le=3,Ne={bgGradient:"from-sky-400 to-indigo-600"},Oe={1:e=>(e.bgGradient===Ne.bgGradient&&(e.bgGradient="from-slate-900 to-indigo-950"),e),2:e=>(e.bgGradient===Ne.bgGradient&&(e.bgGradient="from-slate-900 to-indigo-950"),e)};function Tt(e){try{const t=localStorage.getItem(ke);if(t){const s=JSON.parse(t);s.bgGradient==="from-sky-400 to-indigo-600"&&(s.bgGradient="from-slate-900 to-indigo-950");const n=s._version||1;if(n<le){for(let o=n;o<le;o++)Oe[o]&&Oe[o](s);s._version=le;const{avatar:i,...r}=s;localStorage.setItem(ke,JSON.stringify(r))}return{...e,...s}}}catch{}return{...e}}function V(e){try{const{avatar:t,...s}=e;localStorage.setItem(ke,JSON.stringify(s))}catch{}}function Et(){try{const t=new URLSearchParams(window.location.search).get("state");if(!t)return null;const s=atob(t),n=Uint8Array.from(s,o=>o.charCodeAt(0)),i=new TextDecoder().decode(n),r=JSON.parse(i);if(r&&typeof r=="object")return r}catch{}return null}function St(e){const t=Et(),s=t?{...e,...t}:Tt(e),n=new Set,i=[],r=[],o=50;let a=!1;function l(){a||(i.push(JSON.parse(JSON.stringify(s))),i.length>o&&i.shift(),r.length=0)}return{get(c){return s[c]},getState(){return{...s}},set(c,f){l(),s[c]=f,V(s),n.forEach(x=>x(c,f,s))},setAll(c){l(),Object.assign(s,c),V(s),n.forEach(f=>f(null,null,s))},mutate(c){l(),Object.assign(s,c),V(s),n.forEach(f=>f(null,null,s))},subscribe(c){return n.add(c),()=>n.delete(c)},reset(){l(),Object.assign(s,e),V(s),n.forEach(c=>c(null,null,s))},undo(){if(i.length===0)return;r.push(JSON.parse(JSON.stringify(s)));const c=i.pop();Object.assign(s,c),V(s),n.forEach(f=>f("_undo",null,s))},redo(){if(r.length===0)return;i.push(JSON.parse(JSON.stringify(s)));const c=r.pop();Object.assign(s,c),V(s),n.forEach(f=>f("_redo",null,s))},canUndo(){return i.length>0},canRedo(){return r.length>0},pauseHistory(){a=!0},resumeHistory(){a=!1},saveTemplate(c){try{const f=JSON.parse(localStorage.getItem(F)||"{}"),{avatar:x,...g}=s;return f[c]=g,localStorage.setItem(F,JSON.stringify(f)),!0}catch{return!1}},deleteTemplate(c){try{const f=JSON.parse(localStorage.getItem(F)||"{}");return delete f[c],localStorage.setItem(F,JSON.stringify(f)),!0}catch{return!1}},loadTemplate(c){try{const x=JSON.parse(localStorage.getItem(F)||"{}")[c];return x?(this.mutate(x),!0):!1}catch{return!1}},listTemplates(){try{return Object.keys(JSON.parse(localStorage.getItem(F)||"{}"))}catch{return[]}},getSidebarOpen(){return localStorage.getItem(Pe)!=="false"},setSidebarOpen(c){localStorage.setItem(Pe,String(c))},getShareUrl(){try{const{avatar:c,...f}=s,x=JSON.stringify(f),g=new TextEncoder().encode(x),h=String.fromCharCode(...g),m=btoa(h),y=new URL(window.location.href.split("?")[0].split("#")[0]);return y.searchParams.set("state",m),y.toString()}catch{return null}}}}const jt={_version:le,theme:"whatsapp",viewMode:"mobile",author:"Maya",handle:"@maya_99",username:"Maya",roleColor:"#e81224",timestamp:"7:18 PM",statusBarTime:"09:41",statusText:"online",imessageMode:"imessage",statusBarBattery:100,statusBarSignal:4,statusBarWifi:!0,isGroup:!1,message:"Hey, are you coming online tonight?",avatar:null,bgGradient:"from-slate-900 to-indigo-950",padding:48,mockupTheme:"light",waMode:"sent",locale:"en",fontFamily:"system-ui",_toolbarPos:"right",chatBg:null,chatBgGradient:"",messages:[{id:1,text:"Hey, are you coming online tonight?",type:"sent",time:"7:18 PM",status:"read"},{id:2,text:"Yeah, give me 5!",type:"received",time:"7:20 PM",status:"read"},{id:3,text:"Sure, take your time 🐨",type:"sent",time:"7:21 PM",status:"delivered"}]},d=St(jt),Lt=window.__LOCALE__||{};function u(e){return e.split(".").reduce((s,n)=>s!=null?s[n]:void 0,Lt)??e}function Te(){const e=window.location.pathname.match(/^\/([a-z]{2})\//);return e?e[1]:"en"}function p(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}const re=500,It=.8;function At(e){return new Promise((t,s)=>{const n=new FileReader;n.onerror=()=>s(new Error("File read failed")),n.onload=i=>{const r=new Image;r.onerror=()=>s(new Error("Image decode failed")),r.onload=()=>{let{width:o,height:a}=r;if(o>re||a>re){const f=Math.min(re/o,re/a);o=Math.round(o*f),a=Math.round(a*f)}const l=document.createElement("canvas");l.width=o,l.height=a;const c=l.getContext("2d");if(!c){s(new Error("Canvas 2D not supported"));return}c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(r,0,0,o,a),l.toBlob(f=>{if(!f){s(new Error("WebP encoding failed"));return}t(URL.createObjectURL(f))},"image/webp",It)},r.src=i.target.result},n.readAsDataURL(e)})}function _t(e){const t=document.getElementById(e);t instanceof HTMLImageElement&&(t.src="")}const De="koalasnap_tutorial_completed",K=[{target:"app-library",key:"tutorial.step1"},{target:"settings-panel",key:"tutorial.step2"},{target:"canvas-area",key:"tutorial.step3"},{target:"bottom-bar",key:"tutorial.step4"},{target:"btn-topbar-export",key:"tutorial.step5"}];let $=0,ne=!1,z=null;function Ht(){return localStorage.getItem(De)==="true"}function Pt(){return ne}function Je(){ne&&ie(),$=0,ne=!0;const e=Rt();e.classList.remove("hidden"),e.style.pointerEvents="auto",ue(0),document.addEventListener("keydown",Ye)}function Ye(e){e.key==="Escape"&&ie()}function ie(){ne=!1,z&&(clearTimeout(z),z=null),fe($);const e=document.getElementById("tutorial-overlay");e&&(e.classList.add("hidden"),e.style.pointerEvents=""),localStorage.setItem(De,"true"),document.removeEventListener("keydown",Ye)}function Nt(){if(fe($),$++,$>=K.length){ie();return}ue($)}function Ot(){fe($),$=Math.max(0,$-1),ue($)}function Gt(){ne&&(fe($),ue($))}function Rt(){let e=document.getElementById("tutorial-overlay");return e||(e=document.createElement("div"),e.id="tutorial-overlay",e.className="fixed inset-0 bg-black/60 z-40 hidden",document.body.appendChild(e)),e}function ue(e){z&&(clearTimeout(z),z=null);const t=K[e];if(!t)return;const s=document.getElementById(t.target);if(!s)return;s.classList.add("tutorial-highlight"),s.style.zIndex="50",getComputedStyle(s).position==="static"&&(s.style.position="relative"),s.scrollIntoView({behavior:"smooth",block:"center"});const n=s.getBoundingClientRect();z=setTimeout(()=>{Ft(e,n),z=null},400)}function fe(e){z&&(clearTimeout(z),z=null);const t=K[e];if(!t)return;const s=document.getElementById(t.target);s&&(s.classList.remove("tutorial-highlight"),s.style.zIndex="",s.style.position="");const n=document.getElementById("tutorial-tooltip");n&&n.remove()}function Ft(e,t){const s=document.getElementById("tutorial-tooltip");s&&s.remove();const n=K.length,i=e===0,r=e===n-1,o=document.createElement("div");o.id="tutorial-tooltip",o.className="fixed z-50 w-[320px] rounded-2xl border border-white/[10%] bg-[#1a1714]/95 backdrop-blur-2xl p-4 shadow-2xl shadow-black/50 opacity-0 transition-opacity duration-200",o.innerHTML=`
    <p class="text-sm text-zinc-200 leading-relaxed mb-4">${u(Vt(e))}</p>
    <div class="flex items-center justify-between">
      <span class="text-xs text-zinc-500">${e+1} ${u("tutorial.of")} ${n}</span>
      <div class="flex items-center gap-2">
        ${i?"":`<button id="tut-prev" class="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all">${u("tutorial.back")}</button>`}
        <button id="tut-next" class="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#f97316] hover:bg-[#ea580c] active:scale-[0.97] transition-all">${u(r?"tutorial.done":"tutorial.next")}</button>
      </div>
    </div>
    <button id="tut-skip" class="mt-2 text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors">${u("tutorial.skip")}</button>
  `,document.body.appendChild(o),Wt(o,t),requestAnimationFrame(()=>{o.classList.remove("opacity-0")}),Ut(e)}function Vt(e){var t;return((t=K[e])==null?void 0:t.key)||""}function Wt(e,t){const i=e.offsetWidth||320,r=e.offsetHeight||160,o=window.innerWidth-i-16,a=window.innerHeight-r-16,l=t.left+t.width/2;let c=Math.max(16,Math.min(l-i/2,o)),f=t.bottom+12;f+r>window.innerHeight-16&&(f=t.top-r-12),f<16&&(f=16,c=Math.min(t.right+12,o),c=Math.max(16,c)),c=Math.max(16,Math.min(c,o)),f=Math.max(16,Math.min(f,a)),e.style.left=`${c}px`,e.style.top=`${f}px`}function Ut(e){const t=document.getElementById("tut-next");t&&(t.onclick=()=>e===K.length-1?ie():Nt());const s=document.getElementById("tut-prev");s&&(s.onclick=()=>Ot());const n=document.getElementById("tut-skip");n&&(n.onclick=()=>ie())}const Xe="?",q='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',Ze='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',D='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',J='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',Kt='<svg width="32" height="32" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>',qt='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>';function G(e,t){return e?`<img id="mockup-avatar" src="${e}" class="w-full h-full rounded-full object-cover" />`:`<div id="mockup-avatar" class="w-full h-full rounded-full bg-gradient-to-br ${t?"from-zinc-600 to-zinc-800":"from-sky-400 to-indigo-500"} flex items-center justify-center text-white text-sm font-bold">${Xe}</div>`}function Dt(e,t){const s=t?"#18181b":"#ffffff",n=t?"text-zinc-100":"text-zinc-900",i=t?"text-zinc-400":"text-zinc-500",r=t?"text-zinc-300":"text-zinc-800",o=t?"border-zinc-700":"border-zinc-200";return`
    <div id="mockup-card" class="rounded-2xl shadow-2xl shadow-black/20 mx-auto overflow-hidden ring-1 ring-white/[6%] p-3" style="width:400px; height:520px;font-family:${e.fontFamily};background:var(--chat-bg, ${s})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
      <div class="flex items-start gap-3">
        <div class="w-11 h-11 rounded-full shrink-0 overflow-hidden">
          ${G(e.avatar,t)}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1">
            <span id="mockup-author" class="text-[15px] font-bold ${n} leading-tight truncate">${p(e.author)}</span>
            <span class="text-[13px] ${i}">@${p(e.handle)}</span>
            <span class="text-[13px] ${i}">· 1h</span>
          </div>
        </div>
      </div>
      <p id="mockup-message" class="mt-2 text-[15px] ${r} leading-relaxed whitespace-pre-wrap break-words">${p(e.message)}</p>
      <div class="mt-2 h-48 rounded-xl ${t?"bg-zinc-800":"bg-zinc-100"} flex items-center justify-center ${i} text-sm">📷</div>
      <div class="flex items-center justify-between mt-2 pt-2 ${o} border-t text-sm ${i}">
        <div class="flex items-center gap-5">
          <span class="flex items-center gap-1">${D} <span id="mockup-replies">1</span></span>
          <span class="flex items-center gap-1">${Ze} <span id="mockup-retweets">3</span></span>
          <span class="flex items-center gap-1">${q} <span id="mockup-likes">12</span></span>
        </div>
        <span>${J}</span>
      </div>
    </div>
  `}function Jt(e,t){const s=t?"#000000":"#ffffff",n=t?"text-white":"text-zinc-900",i=t?"text-zinc-400":"text-zinc-500";return`
    <div id="mockup-card" class="rounded-2xl shadow-2xl shadow-black/20 mx-auto overflow-hidden ring-1 ring-white/[6%]" style="width:400px; height:600px;font-family:${e.fontFamily};background:var(--chat-bg, ${s})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
      <div class="flex items-center gap-3 px-3 py-2.5">
        <div class="w-8 h-8 rounded-full shrink-0 overflow-hidden">
          ${G(e.avatar,t)}
        </div>
        <div class="flex-1 min-w-0">
          <span id="mockup-author" class="text-[13px] font-semibold ${n} leading-tight truncate">${p(e.author)}</span>
        </div>
        <span class="${i}">${qt}</span>
      </div>
      <div class="w-full h-72 ${t?"bg-zinc-800":"bg-zinc-100"} flex items-center justify-center ${i} text-sm">📷</div>
      <div class="px-3 pt-2 pb-3">
        <div class="flex items-center gap-3 text-xl ${n}">
          <span>${q}</span>
          <span>${D}</span>
          <span class="ml-auto">${J}</span>
        </div>
        <p class="mt-1 text-[13px] font-semibold ${n}"><span id="mockup-likes">142</span> likes</p>
        <p class="mt-1 text-[13px] ${n}"><span class="font-semibold">${p(e.author)}</span> <span id="mockup-message" class="${n}">${p(e.message)}</span></p>
        <p class="mt-1 text-[13px] ${i}">View all 3 comments</p>
        <p class="mt-0.5 text-[11px] ${i} uppercase tracking-wider">1 hour ago</p>
      </div>
    </div>
  `}function Yt(e,t){const s=t?"#1a1a2e":"#f0f2f5",n=t?"#1c1c2e":"#007aff";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
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
          <span id="mockup-author" class="text-[15px] font-medium">${p(e.author)}</span>
        </div>
        <div class="flex-1 p-3 overflow-y-auto flex flex-col gap-3" style="background:var(--chat-bg, ${s})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
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
  `}function Xt(e,t){const s="text-white",n="text-zinc-300",i="linear-gradient(transparent 60%, rgba(0,0,0,0.7))",r=t?"#111111":"#161616";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col relative" style="border-color:#111;background:var(--chat-bg, ${r})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
        <div class="absolute inset-0 ${t?"bg-zinc-900":"bg-zinc-800"} flex items-center justify-center text-6xl">🎵</div>
        <div class="absolute inset-0" style="background:${i}"></div>
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
                <p class="text-[14px] font-bold ${s}"><span id="mockup-author">${p(e.author)}</span> <span class="font-normal ${n}">@${p(e.handle)}</span></p>
                <p id="mockup-message" class="mt-1 text-[13px] ${s} leading-relaxed whitespace-pre-wrap">${p(e.message)}</p>
              </div>
              <div class="flex flex-col items-center gap-3 shrink-0">
                <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50">
                  ${G(e.avatar,!1)}
                </div>
                <div class="flex flex-col items-center gap-4 text-white text-xs">
                  <div class="flex flex-col items-center gap-0.5">${q}<span id="mockup-likes" class="text-[10px]">12.4k</span></div>
                  <div class="flex flex-col items-center gap-0.5">${D}<span id="mockup-replies" class="text-[10px]">241</span></div>
                  <div class="flex flex-col items-center gap-0.5">${J}<span class="text-[10px]">Share</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function X(e){const t=e.mockupTheme==="dark",s=e.theme||"twitter";if(e.viewMode==="desktop")switch(s){case"instagram":return es(e,t);case"messenger":return ss(e,t);case"tiktok":return ts(e,t);case"twitter":default:return Qt(e,t)}switch(s){case"instagram":return Jt(e,t);case"messenger":return Yt(e,t);case"tiktok":return Xt(e,t);case"twitter":default:return Dt(e,t)}}function Z(e){if(e.viewMode==="desktop"){Zt(e);return}const t=e.theme||"twitter";B("mockup-author",s=>{s&&(s.textContent=e.author)}),B("mockup-message",s=>{s&&(s.textContent=e.message)}),B("mockup-likes",s=>{s&&(s.textContent="142")}),B("mockup-replies",s=>{s&&(s.textContent="1")}),B("mockup-retweets",s=>{s&&(s.textContent="3")}),t==="messenger"?B("mockup-avatar",s=>{s&&Be(s,e,!1)}):B("mockup-avatar",s=>{s&&Be(s,e,e.mockupTheme==="dark")})}function Zt(e){const t=e.mockupTheme==="dark";B("mockup-author",n=>{n&&(n.textContent=e.author)}),B("mockup-author-header",n=>{n&&(n.textContent=e.author)}),B("mockup-message",n=>{n&&(n.textContent=e.message)}),B("mockup-message-preview",n=>{n&&(n.textContent=e.message)}),document.querySelectorAll("#mockup-avatar").forEach(n=>{Be(n,e,t)})}function Qt(e,t){const s=t?"#000000":"#ffffff",n=t?"#000000":"#ffffff",i=t?"text-zinc-100":"text-zinc-900",r="text-zinc-500",o=t?"border-zinc-800":"border-zinc-200",a=G(e.avatar,t);return`
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1100px; height:750px; font-family:${e.fontFamily}; border-color:${t?"#2f3336":"#eff3f4"}; background:${s};">
      <div class="w-[250px] shrink-0 border-r flex flex-col justify-between p-4" style="border-color:${t?"#2f3336":"#eff3f4"}; background:${n};">
        <div class="flex flex-col gap-6">
          <div class="px-2 cursor-pointer text-white">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </div>
          <div class="flex flex-col gap-1 text-left">
            <div class="flex items-center gap-4 px-3 py-2.5 rounded-full hover:bg-white/10 font-bold text-lg cursor-pointer ${i}">
              <span>🏠</span> <span>Home</span>
            </div>
            <div class="flex items-center gap-4 px-3 py-2.5 rounded-full hover:bg-white/10 font-medium text-lg cursor-pointer ${r}">
              <span>🔍</span> <span>Explore</span>
            </div>
            <div class="flex items-center gap-4 px-3 py-2.5 rounded-full hover:bg-white/10 font-medium text-lg cursor-pointer ${r}">
              <span>🔔</span> <span>Notifications</span>
            </div>
            <div class="flex items-center gap-4 px-3 py-2.5 rounded-full hover:bg-white/10 font-medium text-lg cursor-pointer ${r}">
              <span>✉️</span> <span>Messages</span>
            </div>
            <div class="flex items-center gap-4 px-3 py-2.5 rounded-full hover:bg-white/10 font-medium text-lg cursor-pointer ${r}">
              <span>👤</span> <span>Profile</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3 p-2 rounded-full hover:bg-white/10 cursor-pointer text-left">
          <div class="w-10 h-10 rounded-full overflow-hidden shrink-0">
            ${a}
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-bold text-sm truncate ${i}">${p(e.author)}</div>
            <div class="text-xs truncate ${r}">@${p(e.handle)}</div>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col min-w-0 text-left">
        <div class="h-14 shrink-0 flex items-center px-4 border-b font-bold text-lg select-none" style="border-color:${t?"#2f3336":"#eff3f4"}; background:${s}; color:${t?"#fff":"#000"};">
          Post
        </div>
        <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full overflow-hidden shrink-0">
              ${a}
            </div>
            <div>
              <div id="mockup-author" class="font-bold text-[16px] leading-tight ${i}">${p(e.author)}</div>
              <div class="text-[14px] ${r}">@${p(e.handle)}</div>
            </div>
          </div>
          <div id="mockup-message" class="text-[20px]/[1.4] whitespace-pre-wrap break-words ${i}">${p(e.message)}</div>
          <div class="w-full h-[320px] rounded-xl ${t?"bg-zinc-800":"bg-zinc-100"} flex items-center justify-center ${r} text-sm" style="${e.chatBg?`background-image:url(${e.chatBg});background-size:cover;background-position:center;`:""}">
            ${e.chatBg?"":"📷"}
          </div>
          <div class="text-[14.5px] py-1 border-y ${o} ${r} select-none">
            7:18 PM · Jun 10, 2026 · <span class="font-semibold ${i}">142.5K</span> Views
          </div>
          <div class="flex gap-6 py-1 border-b ${o} text-[14px] ${r} select-none">
            <span><strong class="font-semibold ${i}">3</strong> Reposts</span>
            <span><strong class="font-semibold ${i}">12</strong> Likes</span>
            <span><strong class="font-semibold ${i}">1</strong> Bookmark</span>
          </div>
          <div class="flex items-center justify-around py-1 border-b ${o} ${r} select-none">
            <span class="cursor-pointer hover:text-sky-500">${D}</span>
            <span class="cursor-pointer hover:text-emerald-500">${Ze}</span>
            <span class="cursor-pointer hover:text-rose-500">${q}</span>
            <span class="cursor-pointer hover:text-sky-500">${J}</span>
          </div>
        </div>
      </div>
      <div class="w-[350px] shrink-0 border-l p-4 flex flex-col gap-4 text-left" style="border-color:${t?"#2f3336":"#eff3f4"}; background:${n};">
        <div class="flex items-center gap-3 px-4 py-2.5 rounded-full text-sm" style="background:${t?"#202327":"#eff3f4"}; color:${r};">
          <span>🔍</span> <span>Search X</span>
        </div>
        <div class="rounded-2xl p-4 flex flex-col gap-3" style="background:${t?"#16181c":"#f7f9f9"};">
          <h3 class="font-bold text-lg ${i}">What's happening</h3>
          <div class="flex flex-col gap-0.5">
            <span class="text-xs ${r}">Technology · Trending</span>
            <span class="font-bold text-sm ${i}">KoalaSnap v3.0</span>
            <span class="text-xs ${r}">10.2K posts</span>
          </div>
        </div>
      </div>
    </div>
  `}function es(e,t){const s=t?"#000000":"#ffffff",n=t?"text-white":"text-zinc-900",i="text-zinc-500",r=G(e.avatar,t);return`
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:900px; height:600px; font-family:${e.fontFamily}; border-color:${t?"#262626":"#dbdbdb"}; background:${s};">
      <div class="flex-1 h-full flex items-center justify-center shrink-0" style="background:${t?"#050505":"#fafafa"}; border-right:1px solid ${t?"#262626":"#dbdbdb"};">
        <div class="w-full h-full flex items-center justify-center" style="${e.chatBg?`background-image:url(${e.chatBg});background-size:cover;background-position:center;`:""}">
          ${e.chatBg?"":'<span class="text-3xl text-zinc-500">📷 Photo</span>'}
        </div>
      </div>
      <div class="w-[360px] shrink-0 flex flex-col h-full text-left" style="background:${s};">
        <div class="flex items-center gap-3 px-4 py-3 border-b shrink-0" style="border-color:${t?"#262626":"#dbdbdb"};">
          <div class="w-8 h-8 rounded-full overflow-hidden shrink-0">
            ${r}
          </div>
          <div class="flex-1 min-w-0">
            <span id="mockup-author" class="text-[14px] font-semibold truncate ${n}">${p(e.author)}</span>
          </div>
          <span class="text-xs font-semibold text-[#0095f6] cursor-pointer hover:text-white select-none">Follow</span>
        </div>
        <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full overflow-hidden shrink-0">
              ${r}
            </div>
            <div>
              <span class="text-[14px] font-semibold mr-1.5 ${n}">${p(e.author)}</span>
              <span id="mockup-message" class="text-[14px] whitespace-pre-wrap break-words ${n}">${p(e.message)}</span>
            </div>
          </div>
          <div class="flex items-start gap-3 opacity-60">
            <div class="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white text-xs font-bold shrink-0">U</div>
            <div>
              <span class="text-[14px] font-semibold mr-1.5 ${n}">user_99</span>
              <span class="text-[14px] ${n}">This looks incredible! 🐨🚀</span>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 border-t shrink-0 flex flex-col gap-2" style="border-color:${t?"#262626":"#dbdbdb"};">
          <div class="flex items-center justify-between text-xl ${n} select-none">
            <div class="flex items-center gap-4">
              <span class="cursor-pointer">${q}</span>
              <span class="cursor-pointer">${D}</span>
              <span class="cursor-pointer">${J}</span>
            </div>
            <span class="cursor-pointer">🔖</span>
          </div>
          <div id="mockup-likes" class="text-[14px] font-semibold ${n}">142 likes</div>
          <div class="text-[10px] uppercase tracking-wider ${i}">1 hour ago</div>
        </div>
        <div class="px-4 py-3 border-t shrink-0 flex items-center gap-3" style="border-color:${t?"#262626":"#dbdbdb"};">
          <span class="text-lg">😊</span>
          <div class="flex-1 text-[14px] opacity-40">Add a comment...</div>
          <span class="text-xs font-semibold text-[#0095f6] opacity-50 cursor-pointer select-none">Post</span>
        </div>
      </div>
    </div>
  `}function ts(e,t){const s=t?"#121212":"#ffffff",n=t?"#121212":"#ffffff",i=t?"text-zinc-100":"text-zinc-900",r="text-zinc-500",o=t?"border-zinc-800":"border-zinc-200",a=G(e.avatar,t);return`
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1100px; height:750px; font-family:${e.fontFamily}; border-color:${t?"#2f2f2f":"#e3e3e3"}; background:${s};">
      <div class="w-[240px] shrink-0 border-r flex flex-col p-4 gap-6 text-left" style="border-color:${t?"#2f2f2f":"#e3e3e3"}; background:${n};">
        <div class="flex items-center gap-1.5 px-2 select-none cursor-pointer">
          <span class="text-xl">🎵</span> <span class="font-black text-xl tracking-tighter ${i}">TikTok</span>
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-white/5 font-bold text-lg cursor-pointer text-[#fe2c55]">
            <span>🏠</span> <span>For You</span>
          </div>
          <div class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-white/5 font-semibold text-lg cursor-pointer ${i}">
            <span>👥</span> <span>Following</span>
          </div>
          <div class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-white/5 font-semibold text-lg cursor-pointer ${i}">
            <span>👀</span> <span>Friends</span>
          </div>
          <div class="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-white/5 font-semibold text-lg cursor-pointer ${i}">
            <span>👤</span> <span>Profile</span>
          </div>
        </div>
      </div>
      <div class="flex-1 flex items-center justify-center shrink-0" style="background:#000000; position:relative;">
        <div class="w-full h-full flex items-center justify-center" style="${e.chatBg?`background-image:url(${e.chatBg});background-size:cover;background-position:center;`:""}">
          ${e.chatBg?"":`<span class="text-4xl text-white opacity-40">${Kt}</span>`}
        </div>
      </div>
      <div class="w-[360px] shrink-0 flex flex-col h-full text-left" style="background:${s}; border-left:1px solid ${t?"#2f2f2f":"#e3e3e3"};">
        <div class="p-4 border-b flex flex-col gap-3 shrink-0" style="border-color:${t?"#2f2f2f":"#e3e3e3"};">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full overflow-hidden shrink-0">
              ${a}
            </div>
            <div class="flex-1 min-w-0">
              <span id="mockup-author" class="font-bold text-[15px] truncate block ${i}">${p(e.author)}</span>
              <span class="text-[13px] truncate block ${r}">@${p(e.handle)}</span>
            </div>
            <button class="bg-[#fe2c55] text-white px-4 py-1.5 rounded font-semibold text-xs hover:bg-[#ef234c] transition-all select-none">Follow</button>
          </div>
          <div id="mockup-message" class="text-[14.5px] leading-relaxed whitespace-pre-wrap break-words ${i}">${p(e.message)}</div>
          <div class="text-xs ${r}">🎵 original sound - ${p(e.author)}</div>
        </div>
        <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <div class="flex items-center justify-around py-2 border-b ${o} select-none">
            <div class="flex flex-col items-center gap-0.5">
              <div class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer text-white">${q}</div>
              <span id="mockup-likes" class="text-xs ${r}">12.4k</span>
            </div>
            <div class="flex flex-col items-center gap-0.5">
              <div class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer text-white">${D}</div>
              <span id="mockup-replies" class="text-xs ${r}">241</span>
            </div>
            <div class="flex flex-col items-center gap-0.5">
              <div class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer text-white">${J}</div>
              <span class="text-xs ${r}">Share</span>
            </div>
          </div>
          <div class="flex-1 flex flex-col gap-3">
            <h4 class="text-xs font-bold uppercase tracking-wider ${r}">Comments</h4>
            <div class="flex items-start gap-3 opacity-60">
              <div class="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white text-xs font-bold shrink-0">U</div>
              <div>
                <span class="text-xs font-semibold mr-1.5 ${i}">user_one</span>
                <p class="text-[13px] ${i}">Awesome video! 🐨🐨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function ss(e,t){const s=t?"#181818":"#ffffff",n=t?"#1c1c1e":"#ffffff",i=t?"#2e2e2e":"#f0f2f5",r=t?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)",o=t?"#aebac1":"#65676b",a=t?"#ffffff":"#050505",l=G(e.avatar,t);return`
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1000px; height:700px; font-family:${e.fontFamily}; border-color:${r}; background:${s}; color:${a};">
      <div class="w-[320px] flex flex-col shrink-0 border-r" style="border-color:${r}; background:${s};">
        <div class="h-[60px] shrink-0 flex items-center justify-between px-4 text-left" style="background:${n};">
          <span class="text-xl font-bold ${a}">Chats</span>
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center cursor-pointer select-none">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </div>
          </div>
        </div>
        <div class="p-2 shrink-0">
          <div class="flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs" style="background:${t?"#2e2e2e":"#f0f2f5"}; color:${o};">
            <span>🔍</span> <span class="opacity-70">Search Messenger</span>
          </div>
        </div>
        <div class="flex-1 overflow-y-auto flex flex-col text-left">
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none" style="background:${i};">
            <div class="w-11 h-11 rounded-full overflow-hidden shrink-0">
              ${l}
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span id="mockup-author" class="font-semibold text-[15px] truncate" style="color:${a};">${p(e.author)}</span>
                <span class="text-[12px] shrink-0" style="color:${o};">${p(e.timestamp)}</span>
              </div>
              <div class="flex items-center gap-1 mt-0.5">
                <span id="mockup-message-preview" class="text-[13px] truncate flex-1" style="color:${o};">${p(e.message)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col min-w-0 text-left">
        <div class="h-[60px] shrink-0 flex items-center justify-between px-4 border-b" style="border-color:${r}; background:${n};">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-full overflow-hidden shrink-0">
              ${l}
            </div>
            <div class="min-w-0">
              <div id="mockup-author-header" class="font-bold text-[15.5px] truncate" style="color:${a};">${p(e.author)}</div>
              <div class="text-[12px] truncate" style="color:${o};">Active 1m ago</div>
            </div>
          </div>
          <div class="flex items-center gap-5" style="color:#0084ff;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </div>
        </div>
        <div id="messenger-chat-container" class="flex-1 p-6 overflow-y-auto flex flex-col justify-end" style="background:var(--chat-bg, ${t?"#1a1a2e":"#f0f2f5"}); ${e.chatBg?`background-image:url(${e.chatBg});background-size:cover`:""}">
          <div class="flex justify-end">
            <div class="max-w-[70%] rounded-2xl px-4 py-2" style="background:#0084ff;">
              <p id="mockup-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${p(e.message)}</p>
              <div class="flex items-center justify-end gap-1 mt-0.5">
                <span class="text-[11px] text-[#ffffffcc]">${p(e.timestamp)}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="h-[60px] shrink-0 flex items-center gap-3 px-4 py-2 border-t" style="border-color:${r}; background:${n};">
          <div class="flex-1 rounded-full px-4 py-2.5 text-[15px] bg-[#f0f2f5] text-zinc-400" style="background:${t?"#2e2e2e":"#f0f2f5"}; color:${t?"#ffffff":"#000000"};">
            <span class="opacity-50">Aa</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0084ff" stroke-width="2.5" stroke-linecap="round"><polygon points="22 2 11 13 22 2"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </div>
      </div>
    </div>
  `}function Be(e,t,s){if(t.avatar){const n=document.createElement("img");n.id="mockup-avatar",n.src=t.avatar,n.className="w-full h-full rounded-full object-cover",n.alt="",e.replaceWith(n)}else{const n=document.createElement("div");n.id="mockup-avatar";const i=s?"from-zinc-600 to-zinc-800":"from-sky-400 to-indigo-500";n.className=`w-full h-full rounded-full bg-gradient-to-br ${i} flex items-center justify-center text-white text-sm font-bold`,n.textContent=Xe,e.replaceWith(n)}}function B(e,t){const s=document.getElementById(e);s&&t(s)}const Q='<svg width="20" height="20" viewBox="0 0 24 24" fill="#949ba4"><path d="M5 9h14M5 15h14M11 3L9 21M15 3l-2 18"/></svg>',Qe='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#949ba4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/></svg>',et='<svg width="16" height="16" viewBox="0 0 24 24" fill="#949ba4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',ns='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#949ba4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',tt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5bac1" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',st='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5bac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',is=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.02'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.015'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.02'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.015'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.02'/%3E%3C/svg%3E")`,os={guildsBg:"#e3e5e8",sidebarBg:"#f2f3f5",chatBg:"#ffffff",inputBg:"#ebedef",sidebarText:"#4e5058",chatText:"#2e3035",inputText:"#2e3035",userAreaBg:"#ebedef",userTagText:"#313338",placeholder:"#5c5e66",divider:"#e3e5e8",borderCol:"rgba(0,0,0,0.06)",dotPattern:"none"},rs={guildsBg:"#1e1f22",sidebarBg:"#2b2d31",chatBg:"#313338",inputBg:"#383a40",sidebarText:"#949ba4",chatText:"#dbdee1",inputText:"#dbdee1",userAreaBg:"#232428",userTagText:"#f2f3f5",placeholder:"#949ba4",divider:"#3f4147",borderCol:"rgba(255,255,255,0.04)",dotPattern:is};function as(e){return e.mockupTheme==="light"?os:rs}function ls(e){const t=as(e);if(e.viewMode==="desktop")return ds(e,t);const s=e.avatar?`<img id="discord-avatar" src="${e.avatar}" class="w-10 h-10 rounded-full object-cover" />`:'<div id="discord-avatar" class="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold">?</div>';return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:#1e1f22;background:#1e1f22">
        <div class="flex items-center gap-0 h-12 shrink-0 px-4" style="background:${t.sidebarBg}">
          <div class="flex items-center gap-2 flex-1 min-w-0">
            ${Q}
            <span class="text-white text-[15px] font-semibold leading-tight truncate">general</span>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${Qe}
            <span>${et}</span>
          </div>
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto" style="background:var(--chat-bg, ${t.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:`;background-image:${t.dotPattern}`}">
          <div class="p-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-0.5">
                ${s}
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
        <div class="shrink-0 px-4 py-3" style="background:var(--chat-bg, ${t.chatBg})">
          <div class="flex items-center gap-2 rounded-lg px-4 py-2.5" style="background:${t.inputBg}">
            <span>${tt}</span>
            <span class="flex-1 text-[15px]" style="color:${t.placeholder}">Message #general</span>
            <span>${st}</span>
          </div>
        </div>
      </div>
    </div>
  `}function cs(e){if(e.viewMode==="desktop"){ps(e);return}W("discord-username",s=>{s.textContent=e.username,s.style.color=e.roleColor}),W("discord-timestamp",s=>{s.textContent=e.timestamp}),W("discord-message",s=>{s.textContent=e.message});const t=document.getElementById("discord-avatar");if(t)if(e.avatar){const s=document.createElement("img");s.id="discord-avatar",s.src=e.avatar,s.className="w-10 h-10 rounded-full object-cover",s.alt="",t.replaceWith(s)}else{const s=document.createElement("div");s.id="discord-avatar",s.className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold",s.textContent="?",t.replaceWith(s)}}function ds(e,t){const s=e.mockupTheme==="dark",n=s?"#949ba4":"#5c5e66",i=s?"#ffffff":"#313338",r=e.avatar?`<img id="discord-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="discord-avatar" class="w-full h-full rounded-full bg-[#5865F2] flex items-center justify-center text-white text-[11px] font-bold">?</div>',o=e.avatar?`<img src="${e.avatar}" class="w-full h-full rounded-[15px] object-cover" />`:'<div class="w-full h-full rounded-[15px] bg-[#5865F2] flex items-center justify-center text-white font-bold text-sm">KS</div>';return`
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1000px; height:700px; font-family:${e.fontFamily}; border-color:${t.borderCol}; background:${t.chatBg};">
      <div class="w-[72px] shrink-0 flex flex-col items-center py-3 gap-2" style="background:${t.guildsBg};">
        <div class="w-12 h-12 rounded-[24px] bg-[#5865F2] hover:rounded-[16px] transition-all flex items-center justify-center text-white cursor-pointer select-none">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="currentColor">
            <path d="M23.02 2.24c-1.72-.77-3.56-1.34-5.48-1.68-.24.4-.5.87-.68 1.34a20.5 20.5 0 0 0-5.72 0 12.3 12.3 0 0 0-.7-1.34C8.5 1 6.68 1.57 4.96 2.4 1.5 7.4.56 12.28 1.02 17.1c2.3 1.65 4.5 2.65 6.7 3.3.52-.7 1-1.47 1.4-2.3-1.45-.53-2.82-1.2-4.1-2 .16-.1.32-.23.47-.35 4.3 2 9 2 13.3 0 .15.12.3.24.46.35-1.28.8-2.65 1.48-4.1 2 .4.8.88 1.57 1.4 2.3 2.2-.66 4.4-1.65 6.7-3.3.56-5.63-.38-10.45-3.84-14.86zM9.7 13c-1.3 0-2.37-1.16-2.37-2.6S8.4 7.8 9.7 7.8c1.3 0 2.37 1.16 2.37 2.6S11 13 9.7 13zm8.6 0c-1.3 0-2.37-1.16-2.37-2.6s1.07-2.6 2.37-2.6 2.37 1.16 2.37 2.6-1.06 2.6-2.37 2.6z"/>
          </svg>
        </div>
        <div class="w-8 h-[2px] rounded bg-white/10 my-1"></div>
        <div class="w-12 h-12 rounded-[16px] overflow-hidden cursor-pointer select-none ring-2 ring-[#5865F2]">
          ${o}
        </div>
        <div class="w-12 h-12 rounded-[24px] hover:rounded-[16px] transition-all bg-white/5 hover:bg-[#23a55a] flex items-center justify-center text-white font-bold cursor-pointer select-none text-sm">A</div>
        <div class="w-12 h-12 rounded-[24px] hover:rounded-[16px] transition-all bg-white/5 hover:bg-[#f43f5e] flex items-center justify-center text-white font-bold cursor-pointer select-none text-sm">B</div>
        <div class="w-12 h-12 rounded-[24px] hover:rounded-[16px] transition-all bg-white/5 hover:bg-[#eab308] flex items-center justify-center text-white font-bold cursor-pointer select-none text-sm">+</div>
      </div>
      <div class="w-[240px] shrink-0 flex flex-col" style="background:${t.sidebarBg};">
        <div class="h-12 border-b flex items-center justify-between px-4 font-semibold select-none cursor-pointer" style="border-color:${t.borderCol}; color:${i};">
          <span class="truncate">KoalaSnap Server</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="flex-1 overflow-y-auto px-2 py-3 flex flex-col gap-0.5">
          <div class="flex items-center justify-between px-2 py-1 text-[12px] font-bold uppercase tracking-wider mb-1" style="color:${n};">
            <span>Text Channels</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
          <div class="flex items-center gap-1.5 px-2 py-1.5 rounded font-medium text-[15px] select-none cursor-pointer text-white bg-white/10">
            ${Q}
            <span class="truncate">general</span>
          </div>
          <div class="flex items-center gap-1.5 px-2 py-1.5 rounded font-medium text-[15px] select-none cursor-pointer hover:bg-white/5" style="color:${n};">
            ${Q}
            <span class="truncate">announcements</span>
          </div>
          <div class="flex items-center gap-1.5 px-2 py-1.5 rounded font-medium text-[15px] select-none cursor-pointer hover:bg-white/5" style="color:${n};">
            ${Q}
            <span class="truncate">feedback</span>
          </div>
          <div class="flex items-center gap-1.5 px-2 py-1.5 rounded font-medium text-[15px] select-none cursor-pointer hover:bg-white/5 mt-4" style="color:${n};">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
            <span class="truncate">Voice Chat</span>
          </div>
        </div>
        <div class="h-[52px] px-2 flex items-center justify-between shrink-0" style="background:${t.userAreaBg};">
          <div class="flex items-center gap-2 min-w-0 flex-1">
            <div class="w-8 h-8 rounded-full overflow-hidden shrink-0 relative">
              ${r}
              <div class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[#232428] bg-[#23a55a]"></div>
            </div>
            <div class="min-w-0 flex flex-col justify-center">
              <span class="text-xs font-semibold truncate" style="color:${t.userTagText};">${p(e.username)}</span>
              <span class="text-[10px] truncate" style="color:${n};">online</span>
            </div>
          </div>
          <div class="flex items-center gap-1 shrink-0" style="color:${n};">
            <button class="p-1 rounded hover:bg-white/5"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.42 2.72 6.2 6 6.6V21h2v-3.4c3.28-.4 6-3.18 6-6.6h-1.7z"/></svg></button>
            <button class="p-1 rounded hover:bg-white/5"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.25z"/></svg></button>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col min-w-0">
        <div class="h-12 border-b flex items-center justify-between px-4 shrink-0" style="border-color:${t.borderCol}; background:${t.chatBg};">
          <div class="flex items-center gap-2 min-w-0">
            ${Q}
            <span class="font-bold text-[15.5px] truncate" style="color:${i};">general</span>
          </div>
          <div class="flex items-center gap-4.5" style="color:${n};">
            ${Qe}
            ${et}
            <div class="relative flex items-center rounded bg-black/20 px-2 py-0.5 text-xs">
              <input type="text" placeholder="Search" class="bg-transparent outline-0 w-24 text-white" />
              ${ns}
            </div>
          </div>
        </div>
        <div class="flex-1 p-4 overflow-y-auto" style="background:${t.chatBg}${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:`;background-image:${t.dotPattern}`}">
          <div id="discord-chat-container" class="flex flex-col gap-4">
            <div class="mb-4">
              <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white mb-2">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 9h14M5 15h14M11 3L9 21M15 3l-2 18"/></svg>
              </div>
              <h2 class="text-2xl font-bold text-white leading-tight">Welcome to #general!</h2>
              <p class="text-[14px]" style="color:${n};">This is the start of the #general channel.</p>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-0.5">
                ${r}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-baseline gap-2">
                  <span id="discord-username" class="font-medium text-[16px] leading-tight truncate max-w-[280px]" style="color: ${e.roleColor}">${p(e.username)}</span>
                  <span id="discord-timestamp" class="text-xs leading-tight shrink-0" style="color:${n};">${p(e.timestamp)}</span>
                </div>
                <div id="discord-message" class="text-[16px]/[1.4] mt-0.5 whitespace-pre-wrap break-words" style="color:${t.chatText};">${p(e.message)}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="shrink-0 px-4 py-3" style="background:${t.chatBg};">
          <div class="flex items-center gap-3 rounded-lg px-4 py-2.5" style="background:${t.inputBg};">
            <span>${tt}</span>
            <span class="flex-1 text-[15px]" style="color:${t.placeholder};">Message #general</span>
            <span>${st}</span>
          </div>
        </div>
      </div>
      <div class="w-[240px] shrink-0 border-l flex flex-col p-4 gap-4" style="border-color:${t.borderCol}; background:${t.sidebarBg};">
        <div>
          <h3 class="text-[12px] font-bold uppercase tracking-wider mb-2" style="color:${n};">Online — 1</h3>
          <div class="flex items-center gap-2.5 py-1.5 cursor-pointer">
            <div class="w-8 h-8 rounded-full overflow-hidden relative">
              ${r}
              <div class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[#2b2d31] bg-[#23a55a]"></div>
            </div>
            <span class="text-[14.5px] font-medium truncate" style="color:${e.roleColor}">${p(e.username)}</span>
          </div>
        </div>
        <div>
          <h3 class="text-[12px] font-bold uppercase tracking-wider mb-2" style="color:${n};">Offline — 2</h3>
          <div class="flex items-center gap-2.5 py-1.5 opacity-40">
            <div class="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white text-xs">K</div>
            <span class="text-[14.5px] font-medium truncate" style="color:${n};">KoalaBot</span>
          </div>
          <div class="flex items-center gap-2.5 py-1.5 opacity-40">
            <div class="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white text-xs">M</div>
            <span class="text-[14.5px] font-medium truncate" style="color:${n};">MemberOne</span>
          </div>
        </div>
      </div>
    </div>
  `}function ps(e){W("discord-username",s=>{s.textContent=e.username,s.style.color=e.roleColor}),W("discord-timestamp",s=>{s.textContent=e.timestamp}),W("discord-message",s=>{s.textContent=e.message}),document.querySelectorAll("#discord-avatar").forEach(s=>{if(e.avatar){const n=document.createElement("img");n.id="discord-avatar",n.src=e.avatar,n.className="w-full h-full rounded-full object-cover",n.alt="",s.replaceWith(n)}else{const n=document.createElement("div");n.id="discord-avatar",n.className="w-full h-full rounded-full bg-[#5865F2] flex items-center justify-center text-white text-[11px] font-bold",n.textContent="?",s.replaceWith(n)}})}function W(e,t){const s=document.getElementById(e);s&&t(s)}const us='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',fs='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',gs='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',xs='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',hs='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',ms='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',nt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',Ee='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>',Se='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>',je='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',vs='<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>',bs='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9" stroke-dasharray="10 4 6 4"/></svg>',ys='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',Ge='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>',ws='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',$s='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',Re='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',ks={barBg:"#008069",chatBg:"#efeae2",sentBg:"#d9fdd3",recvBg:"#ffffff",sentText:"#111b21",recvText:"#111b21",timeText:"#667781",inputBg:"#f0f2f5",fieldBg:"#ffffff",fieldText:"#111b21",placeholder:"#8696a0"},Bs={barBg:"#202c33",chatBg:"#0b141a",sentBg:"#005c4b",recvBg:"#202c33",sentText:"#e9edef",recvText:"#e9edef",timeText:"#ffffff8c",inputBg:"#202c33",fieldBg:"#2a3942",fieldText:"#e9edef",placeholder:"#8696a0"};function te(e){return e.mockupTheme==="light"?ks:Bs}function zs(e){return`<svg width="24" height="12" viewBox="0 0 26 12" fill="none" class="opacity-90"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="${Math.max(1,Math.min(19.5,e/100*19.5))}" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`}function Cs(e){const t=e>=1?"1":"0.3",s=e>=2?"1":"0.3",n=e>=3?"1":"0.3",i=e>=4?"1":"0.3";return`<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor" opacity="${t}"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor" opacity="${s}"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor" opacity="${n}"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor" opacity="${i}"/></svg>`}function Ms(e){const t=te(e);if(e.viewMode==="desktop")return Ts(e,t);const s=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${s};background:${s}">
        ${it(e,t)}
        ${Es(e,t)}
        ${Ss(e,t)}
        ${js(t)}
      </div>
    </div>
  `}function Ts(e,t){const s=e.mockupTheme==="dark",n=s?"#111b21":"#ffffff",i=s?"#202c33":"#f0f2f5",r=s?"#2a3942":"#f0f2f5",o=s?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)",a=s?"#8696a0":"#667781",l=s?"#e9edef":"#111b21",c=e.messages[e.messages.length-1]||{text:"",time:""},f=c.text||(c.image?"📷 Photo":""),x=c.time||"";let g="";c.type==="sent"&&(c.status==="read"?g=Ee:c.status==="delivered"?g=Se:c.status==="sent"&&(g=je));const h=e.avatar?`<img src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>',m=e.avatar?`<img id="wa-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="wa-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>',y=e.chatBg?`url(${e.chatBg})`:e.mockupTheme==="light"?"url(/whatsapp-bg-light.png)":"linear-gradient(rgba(11, 20, 26, 0.94), rgba(11, 20, 26, 0.94)), url(/whatsapp-bg-dark.png)",k=e.chatBg?"cover":"360px",E=e.chatBg?"no-repeat":"repeat";return`
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1000px; height:700px; font-family:${e.fontFamily}; border-color:${o}; background:${n}; color:${l};">
      <div class="w-[320px] flex flex-col shrink-0 border-r" style="border-color:${o}; background:${n};">
        <div class="h-[59px] shrink-0 flex items-center justify-between px-4" style="background:${i};">
          <div class="w-10 h-10 rounded-full overflow-hidden">
            ${h}
          </div>
          <div class="flex items-center gap-4.5" style="color:${a};">
            ${bs}
            ${ys}
            ${Ge}
          </div>
        </div>
        <div class="p-2 shrink-0 border-b flex items-center" style="border-color:${o}; background:${n};">
          <div class="w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-xs" style="background:${s?"#202c33":"#f0f2f5"}; color:${a};">
            <span>${Re}</span>
            <span class="flex-1 text-left opacity-70">Search or start new chat</span>
          </div>
        </div>
        <div class="flex-1 overflow-y-auto flex flex-col">
          <div class="flex gap-3 px-3 py-3 cursor-pointer select-none" style="background:${r};">
            <div class="w-12 h-12 rounded-full overflow-hidden shrink-0">
              ${m}
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span id="wa-contact-name" class="font-medium text-[15.5px] truncate" style="color:${l};">${p(e.username)}</span>
                <span id="wa-chat-time" class="text-[11.5px] shrink-0" style="color:${a};">${p(x)}</span>
              </div>
              <div class="flex items-center gap-1 mt-0.5">
                ${g?`<span class="inline-flex">${g}</span>`:""}
                <span id="wa-chat-last-message" class="text-[13px] truncate flex-1" style="color:${a};">${p(f)}</span>
              </div>
            </div>
          </div>
          <div class="flex gap-3 px-3 py-3 border-t cursor-pointer select-none opacity-40 hover:opacity-60 transition-opacity" style="border-color:${o};">
            <div class="w-12 h-12 rounded-full bg-zinc-600 flex items-center justify-center shrink-0 text-white font-semibold">W</div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span class="font-medium text-[15.5px]" style="color:${l};">Work Group</span>
                <span class="text-[11.5px]" style="color:${a};">16:45</span>
              </div>
              <span class="text-[13px] truncate" style="color:${a};">John: Let's schedule a meeting</span>
            </div>
          </div>
          <div class="flex gap-3 px-3 py-3 border-t cursor-pointer select-none opacity-40 hover:opacity-60 transition-opacity" style="border-color:${o};">
            <div class="w-12 h-12 rounded-full bg-zinc-600 flex items-center justify-center shrink-0 text-white font-semibold">M</div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span class="font-medium text-[15.5px]" style="color:${l};">Mom</span>
                <span class="text-[11.5px]" style="color:${a};">Yesterday</span>
              </div>
              <span class="text-[13px] truncate" style="color:${a};">Love you! ❤️</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col min-w-0">
        <div class="h-[59px] shrink-0 flex items-center justify-between px-4 border-l" style="background:${i}; border-color:${o};">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-full overflow-hidden shrink-0">
              ${m}
            </div>
            <div class="min-w-0">
              <div id="wa-contact-name-header" class="font-medium text-[15.5px] truncate" style="color:${l};">${p(e.username)}</div>
              <div id="wa-status-text" class="text-[12px] truncate" style="color:${a};">${p(e.statusText||"online")}</div>
            </div>
          </div>
          <div class="flex items-center gap-5" style="color:${a};">
            ${Re}
            ${Ge}
          </div>
        </div>
        <div id="wa-chat-container" class="flex-1 p-6 overflow-y-auto" style="background:var(--chat-bg, ${t.chatBg});background-image:${y};background-size:${k};background-repeat:${E}">
          <div id="wa-messages" class="flex flex-col gap-0.5 relative max-w-[800px] mx-auto">
            ${e.messages.map((C,M)=>ge(C,M,e,t)).join("")}
          </div>
        </div>
        <div class="h-[62px] shrink-0 flex items-center gap-3 px-4 py-2 border-l" style="background:${i}; border-color:${o}; color:${a};">
          <div class="flex items-center gap-4">
            ${ws}
            ${$s}
          </div>
          <div class="flex-1 rounded-lg px-4 py-2.5 text-[14.5px] flex items-center" style="background:${t.fieldBg}; color:${s?"#e9edef":"#111b21"};">
            <span class="opacity-50">Type a message</span>
          </div>
          <div>
            ${nt}
          </div>
        </div>
      </div>
    </div>
  `}function it(e,t){const s=e.statusBarWifi!==!1?`<span class="text-[11px]">${xs}</span>`:"",n=Cs(e.statusBarSignal||4),i=zs(e.statusBarBattery!==void 0?e.statusBarBattery:100);return`
    <div id="wa-statusbar" class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${t.barBg}">
      <span id="wa-statusbar-time" class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">${p(e.statusBarTime||"09:41")}</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${n}</span>
        ${s}
        <span class="text-[11px]">${i}</span>
      </div>
    </div>
  `}function Es(e,t){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${t.barBg}">
      <span class="shrink-0">${us}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="wa-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="wa-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="wa-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${p(e.username)}</div>
        <div id="wa-status-text" class="text-[#aebac1] text-[11px] leading-tight">${p(e.statusText||"online")}</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${fs}
        ${gs}
      </div>
    </div>
  `}function Ss(e,t){const s=e.chatBg?`url(${e.chatBg})`:e.mockupTheme==="light"?"url(/whatsapp-bg-light.png)":"linear-gradient(rgba(11, 20, 26, 0.94), rgba(11, 20, 26, 0.94)), url(/whatsapp-bg-dark.png)",n=e.chatBg?"cover":"360px",i=e.chatBg?"no-repeat":"repeat";return`
    <div id="wa-chat-container" class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${t.chatBg});background-image:${s};background-size:${n};background-repeat:${i}">
      <div id="wa-messages" class="flex flex-col gap-0.5 relative">
        ${e.messages.map((r,o)=>ge(r,o,e,t)).join("")}
      </div>
    </div>
  `}function ge(e,t,s,n){var A,N;const i=e.type==="sent",r=t>0?s.messages[t-1]:null,o=!r||r.type!==e.type,a=i?n.sentBg:n.recvBg,l=i?n.sentText:n.recvText,c=i?"justify-end":"justify-start",f=e.status||"read";let x="",g="rounded-[7.5px]",h="pl-[9px] pr-[9px] py-[6px]",m=o?"mt-2.5":"mt-[2px]";const y=["#007acc","#00bfa5","#ff9f00","#d32f2f","#7b1fa2","#388e3c"],k=(e.senderName||"").split("").reduce((Y,ve)=>Y+ve.charCodeAt(0),0)%y.length,E=y[k],C=s.isGroup&&!i&&o&&e.senderName?`
    <div class="text-[11.5px] font-semibold mb-0.5 leading-tight select-none" style="color:${E}">
      ${p(e.senderName)}
    </div>
  `:"";o&&(i?(g="rounded-[7.5px] rounded-tr-none",h="pl-[9px] pr-[12px] py-[6px]",x=`<span class="absolute top-0 -right-[8px] w-[8px] h-[13px]" style="color:${a}">
        <svg viewBox="0 0 8 13" width="8" height="13">
          <path fill="currentColor" d="M6.467 3.568L0 12.193V1h5.188c1.77 0 2.338 1.156 1.279 2.568z"/>
        </svg>
      </span>`):(g="rounded-[7.5px] rounded-tl-none",h="pl-[12px] pr-[9px] py-[6px]",x=`<span class="absolute top-0 -left-[8px] w-[8px] h-[13px]" style="color:${a}">
        <svg viewBox="0 0 8 13" width="8" height="13">
          <path fill="currentColor" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"/>
        </svg>
      </span>`));const M=(A=e.reactions)!=null&&A[0]?`
    <div class="absolute -bottom-[8px] right-[12px] flex items-center justify-center bg-white dark:bg-[#202c33] border border-[#e9edef] dark:border-[#3b4a54] rounded-full px-1.5 py-[2px] shadow-[0_1.5px_2px_rgba(0,0,0,0.15)] select-none z-10 scale-[0.88] origin-bottom-right">
      <span class="text-[11px] leading-none">${e.reactions[0]}</span>
    </div>
  `:"";(N=e.reactions)!=null&&N[0]&&(h+=" pb-[11px]");const L=e.image?`<img src="${e.image}" class="w-full max-w-[280px] rounded-lg mb-1 object-cover shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" style="max-height: 200px" />`:"";let T="";i&&(f==="read"?T=Ee:f==="delivered"?T=Se:f==="sent"&&(T=je));const R=f==="unread",I=R?"font-semibold":"",S=R?`<span class="inline-flex ml-1 -mb-0.5">${vs}</span>`:"";return`
    <div class="flex ${c} ${m} relative">
      <div class="relative max-w-[85%]">
        <div class="${g} ${h} shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]" style="background:${a}">
          ${C}
          ${L}
          ${e.text?`<p class="text-[14.2px]/[1.4] whitespace-pre-wrap break-words ${I}" style="color:${l}">${p(e.text)}</p>`:""}
          <div class="flex items-center justify-end gap-1 mt-0.5 select-none">
            <span class="text-[10px] leading-none" style="color:${n.timeText}">${p(e.time)}</span>
            ${T?`<span class="inline-flex -mb-0.5">${T}</span>`:""}
            ${S}
          </div>
        </div>
        ${x}
        ${M}
      </div>
    </div>
  `}function js(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${hs}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.placeholder}">Message</div>
      <span>${ms}</span>
      <span>${nt}</span>
    </div>
  `}function Ls(e){if(e.viewMode==="desktop"){Is(e);return}const t=te(e),s=document.getElementById("wa-statusbar");s&&(s.outerHTML=it(e,t)),_("wa-contact-name",o=>{o.textContent=e.username}),_("wa-status-text",o=>{o.textContent=e.statusText||"online"}),_("wa-statusbar-time",o=>{o.textContent=e.statusBarTime||"09:41"});const n=document.getElementById("wa-avatar");if(n)if(e.avatar){const o=document.createElement("img");o.id="wa-avatar",o.src=e.avatar,o.className="w-full h-full rounded-full object-cover",o.alt="",n.replaceWith(o)}else{const o=document.createElement("div");o.id="wa-avatar",o.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",o.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',n.replaceWith(o)}const i=document.getElementById("wa-messages");if(i){const o=te(e);i.innerHTML=e.messages.map((a,l)=>ge(a,l,e,o)).join("")}const r=document.getElementById("wa-chat-container");if(r){const o=te(e),a=e.chatBg?`url(${e.chatBg})`:e.mockupTheme==="light"?"url(/whatsapp-bg-light.png)":"linear-gradient(rgba(11, 20, 26, 0.94), rgba(11, 20, 26, 0.94)), url(/whatsapp-bg-dark.png)",l=e.chatBg?"cover":"360px",c=e.chatBg?"no-repeat":"repeat";r.style.background=`var(--chat-bg, ${o.chatBg})`,r.style.backgroundImage=a,r.style.backgroundSize=l,r.style.backgroundRepeat=c}}function Is(e){const t=te(e);_("wa-contact-name",l=>{l.textContent=e.username}),_("wa-contact-name-header",l=>{l.textContent=e.username}),_("wa-status-text",l=>{l.textContent=e.statusText||"online"});const s=e.messages[e.messages.length-1]||{text:"",time:""},n=s.text||(s.image?"📷 Photo":"");_("wa-chat-time",l=>{l.textContent=s.time||""});let i="";s.type==="sent"&&(s.status==="read"?i=Ee:s.status==="delivered"?i=Se:s.status==="sent"&&(i=je)),_("wa-chat-last-message",l=>{l.innerHTML=`${i?`<span class="inline-flex mr-1">${i}</span>`:""}${p(n)}`}),document.querySelectorAll("#wa-avatar").forEach(l=>{if(e.avatar){const c=document.createElement("img");c.id="wa-avatar",c.src=e.avatar,c.className="w-full h-full rounded-full object-cover",c.alt="",l.replaceWith(c)}else{const c=document.createElement("div");c.id="wa-avatar",c.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",c.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',l.replaceWith(c)}});const o=document.getElementById("wa-messages");o&&(o.innerHTML=e.messages.map((l,c)=>ge(l,c,e,t)).join(""));const a=document.getElementById("wa-chat-container");if(a){const l=e.chatBg?`url(${e.chatBg})`:e.mockupTheme==="light"?"url(/whatsapp-bg-light.png)":"linear-gradient(rgba(11, 20, 26, 0.94), rgba(11, 20, 26, 0.94)), url(/whatsapp-bg-dark.png)",c=e.chatBg?"cover":"360px",f=e.chatBg?"no-repeat":"repeat";a.style.background=`var(--chat-bg, ${t.chatBg})`,a.style.backgroundImage=l,a.style.backgroundSize=c,a.style.backgroundRepeat=f}}function _(e,t){const s=document.getElementById(e);s&&t(s)}const As='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',ze='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',ot='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',rt='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',at='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',_s='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',Le='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffd0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#ffffffd0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/></svg>',Ie='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffd0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',Hs=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='white' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='white' opacity='0.03'/%3E%3C/svg%3E")`,Ps=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='black' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='black' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='black' opacity='0.03'/%3E%3C/svg%3E")`,Ns={barBg:"#4e8ad4",chatBg:"#eef2f6",sentBg:"#8774e1",recvBg:"#ffffff",sentText:"#ffffff",recvText:"#000000",timeText:"#00000080",sentTimeText:"#ffffffb3",inputBg:"#ffffff",fieldBg:"#eef2f6",dotPattern:Ps},Os={barBg:"#2f6ea5",chatBg:"#0f0f0f",sentBg:"#8774e1",recvBg:"#181818",sentText:"#ffffff",recvText:"#ffffff",timeText:"#ffffff8c",sentTimeText:"#ffffffb3",inputBg:"#1c1c1e",fieldBg:"#2a2a2e",dotPattern:Hs};function se(e){return e.mockupTheme==="light"?Ns:Os}function Gs(e){return`<svg width="24" height="12" viewBox="0 0 26 12" fill="none" class="opacity-90"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="${Math.max(1,Math.min(19.5,e/100*19.5))}" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`}function Rs(e){const t=e>=1?"1":"0.3",s=e>=2?"1":"0.3",n=e>=3?"1":"0.3",i=e>=4?"1":"0.3";return`<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor" opacity="${t}"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor" opacity="${s}"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor" opacity="${n}"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor" opacity="${i}"/></svg>`}function Fs(e){const t=se(e);if(e.viewMode==="desktop")return Vs(e,t);const s=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${s};background:${s}">
        ${lt(e,t)}
        ${Ws(e,t)}
        ${Us(e,t)}
        ${Ks(t)}
      </div>
    </div>
  `}function Vs(e,t){const s=e.mockupTheme==="dark",n=s?"#181818":"#ffffff",i=s?"#212121":"#ffffff",r=s?"#2c2c2c":"#f1f5f9",o=s?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)",a=s?"#aaaaaa":"#707579",l=s?"#ffffff":"#000000",c=e.messages[e.messages.length-1]||{text:"",time:""},f=c.text||(c.image?"📷 Photo":""),x=c.time||"";let g="";c.type==="sent"&&(c.status==="read"||c.status==="delivered"?g=Le:c.status==="sent"&&(g=Ie));const h=e.avatar?`<img id="tg-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:`<div id="tg-avatar" class="w-full h-full rounded-full bg-[#527da3] flex items-center justify-center text-white text-[13px] font-bold">${p(e.username.slice(0,2))}</div>`;return`
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1000px; height:700px; font-family:${e.fontFamily}; border-color:${o}; background:${n}; color:${l};">
      <div class="w-[320px] flex flex-col shrink-0 border-r" style="border-color:${o}; background:${n};">
        <div class="p-3 shrink-0 flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-zinc-600 flex items-center justify-center cursor-pointer select-none">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </div>
          <div class="flex-1 flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs" style="background:${s?"#212121":"#f1f5f9"}; color:${a};">
            <span>${ze}</span>
            <span class="opacity-70">Search</span>
          </div>
        </div>
        <div class="flex-1 overflow-y-auto flex flex-col">
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none" style="background:${r};">
            <div class="w-11 h-11 rounded-full overflow-hidden shrink-0">
              ${h}
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span id="tg-contact-name" class="font-medium text-[15px] truncate" style="color:${l};">${p(e.username)}</span>
                <span id="tg-chat-time" class="text-[12px] shrink-0" style="color:${a};">${p(x)}</span>
              </div>
              <div class="flex items-center gap-1 mt-0.5">
                ${g?`<span class="inline-flex">${g}</span>`:""}
                <span id="tg-chat-last-message" class="text-[13px] truncate flex-1" style="color:${a};">${p(f)}</span>
              </div>
            </div>
          </div>
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none opacity-40 hover:opacity-60 transition-opacity">
            <div class="w-11 h-11 rounded-full bg-[#4e8ad4] flex items-center justify-center shrink-0 text-white font-semibold text-[13px]">W</div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span class="font-medium text-[15px]" style="color:${l};">Work channel</span>
                <span class="text-[12px]" style="color:${a};">16:45</span>
              </div>
              <span class="text-[13px] truncate" style="color:${a};">Announcement post...</span>
            </div>
          </div>
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none opacity-40 hover:opacity-60 transition-opacity">
            <div class="w-11 h-11 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 text-white font-semibold text-[13px]">M</div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span class="font-medium text-[15px]" style="color:${l};">Mom</span>
                <span class="text-[12px]" style="color:${a};">Yesterday</span>
              </div>
              <span class="text-[13px] truncate" style="color:${a};">Take care!</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col min-w-0">
        <div class="h-[56px] shrink-0 flex items-center justify-between px-5 border-l" style="background:${i}; border-color:${o};">
          <div class="min-w-0">
            <div id="tg-contact-name-header" class="font-medium text-[15.5px] truncate" style="color:${l};">${p(e.username)}</div>
            <div id="tg-status-text" class="text-[12px] truncate" style="color:${a};">${p(e.statusText||"online")}</div>
          </div>
          <div class="flex items-center gap-5" style="color:${a};">
            ${ze}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </div>
        </div>
        <div id="tg-chat-container" class="flex-1 p-6 overflow-y-auto" style="background:var(--chat-bg, ${t.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:`;background-image:${t.dotPattern}`}">
          <div id="tg-messages" class="flex flex-col gap-0.5 max-w-[720px] mx-auto">
            ${e.messages.map((m,y)=>xe(m,y,e,t)).join("")}
          </div>
        </div>
        <div class="p-3 shrink-0 flex items-center gap-3 border-l" style="background:${i}; border-color:${o}; text-align: left;">
          <span style="color:${a};">${ot}</span>
          <div class="flex-1 rounded-xl px-4 py-2.5 text-[14.5px] flex items-center" style="background:${s?"#1c1c1e":"#f1f5f9"}; color:${s?"#ffffff":"#000000"};">
            <span class="opacity-50">Write a message...</span>
          </div>
          <span style="color:${a};">${rt}</span>
          <span style="color:${a};">${at}</span>
        </div>
      </div>
    </div>
  `}function lt(e,t){const s=e.statusBarWifi!==!1?`<span class="text-[11px]">${_s}</span>`:"",n=Rs(e.statusBarSignal||4),i=Gs(e.statusBarBattery!==void 0?e.statusBarBattery:100);return`
    <div id="tg-statusbar" class="flex items-center justify-between px-6 h-[44px] shrink-0" style="background:${t.barBg};color:#e9edef">
      <span id="tg-statusbar-time" class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">${p(e.statusBarTime||"09:41")}</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${n}</span>
        ${s}
        <span class="text-[11px]">${i}</span>
      </div>
    </div>
  `}function Ws(e,t){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${t.barBg}">
      <span class="shrink-0">${As}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="tg-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="tg-avatar" class="w-full h-full rounded-full bg-[#527da3] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#e9edef"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="tg-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${p(e.username)}</div>
        <div id="tg-status-text" class="text-[#ffffffcc] text-[11px] leading-tight">${p(e.statusText||"online")}</div>
      </div>
      <div class="shrink-0">${ze}</div>
    </div>
  `}function Us(e,t){return`
    <div id="tg-chat-container" class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${t.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:`;background-image:${t.dotPattern}`}">
      <div id="tg-messages" class="flex flex-col gap-0.5">
        ${e.messages.map((s,n)=>xe(s,n,e,t)).join("")}
      </div>
    </div>
  `}function xe(e,t,s,n){var A,N;const i=e.type==="sent",r=t<s.messages.length-1?s.messages[t+1]:null,o=t>0?s.messages[t-1]:null,a=!o||o.type!==e.type,l=!r||r.type!==e.type,c=i?n.sentBg:n.recvBg,f=i?n.sentText:n.recvText,x=i?n.sentTimeText:n.timeText,g=i?"justify-end":"justify-start",h=e.status||"read";let m="",y="rounded-[12px]",k="px-3.5 py-1.5",E=a?"mt-2.5":"mt-[2px]";const C=["#2cb3c9","#57d363","#ffa500","#f44336","#9c27b0","#4caf50"],M=(e.senderName||"").split("").reduce((Y,ve)=>Y+ve.charCodeAt(0),0)%C.length,L=C[M],T=s.isGroup&&!i&&a&&e.senderName?`
    <div class="text-[12px] font-semibold mb-0.5 leading-tight select-none" style="color:${L}">
      ${p(e.senderName)}
    </div>
  `:"";l&&(i?(y="rounded-[12px] rounded-br-none",m=`<div class="absolute -right-[7px] bottom-[5px] w-0 h-0 border-l-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-left-color:${c}"></div>`):(y="rounded-[12px] rounded-bl-none",m=`<div class="absolute -left-[7px] bottom-[5px] w-0 h-0 border-r-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-right-color:${c}"></div>`));const R=(A=e.reactions)!=null&&A[0]?`
    <div class="absolute -bottom-[8px] right-[10px] flex items-center justify-center bg-[#efefef] dark:bg-[#181818] border border-black/10 dark:border-white/10 rounded-full px-1.5 py-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.15)] select-none z-10 scale-[0.88] origin-bottom-right">
      <span class="text-[11px] leading-none">${e.reactions[0]}</span>
    </div>
  `:"";(N=e.reactions)!=null&&N[0]&&(k+=" pb-[10px]");const I=e.image?`<img src="${e.image}" class="w-full max-w-[280px] rounded-lg mb-1 object-cover shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" style="max-height: 200px" />`:"";let S="";return i&&(h==="read"||h==="delivered"?S=Le:h==="sent"&&(S=Ie)),`
    <div class="flex ${g} ${E} relative">
      <div class="relative max-w-[80%]">
        <div class="${y} ${k} shadow-[0_1px_1px_rgba(0,0,0,0.1)]" style="background:${c}">
          ${T}
          ${I}
          ${e.text?`<p class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words" style="color:${f}">${p(e.text)}</p>`:""}
          <div class="flex items-center justify-end gap-1 mt-0.5 select-none">
            <span class="text-[10px] leading-none" style="color:${x}">${p(e.time)}</span>
            ${S?`<span class="inline-flex -mb-0.5">${S}</span>`:""}
          </div>
        </div>
        ${m}
        ${R}
      </div>
    </div>
  `}function Ks(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${ot}</span>
      <span>${rt}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.timeText}">Message</div>
      <span>${at}</span>
    </div>
  `}function qs(e){if(e.viewMode==="desktop"){Ds(e);return}const t=se(e),s=document.getElementById("tg-statusbar");s&&(s.outerHTML=lt(e,t)),H("tg-contact-name",o=>{o.textContent=e.username}),H("tg-status-text",o=>{o.textContent=e.statusText||"online"}),H("tg-statusbar-time",o=>{o.textContent=e.statusBarTime||"09:41"});const n=document.getElementById("tg-avatar");if(n)if(e.avatar){const o=document.createElement("img");o.id="tg-avatar",o.src=e.avatar,o.className="w-full h-full rounded-full object-cover",o.alt="",n.replaceWith(o)}else{const o=document.createElement("div");o.id="tg-avatar",o.className="w-full h-full rounded-full bg-[#527da3] flex items-center justify-center",o.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#e9edef"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',n.replaceWith(o)}const i=document.getElementById("tg-messages");if(i){const o=se(e);i.innerHTML=e.messages.map((a,l)=>xe(a,l,e,o)).join("")}const r=document.getElementById("tg-chat-container");if(r){const o=se(e);r.style.background=`var(--chat-bg, ${o.chatBg})`,e.chatBg?(r.style.backgroundImage=`url(${e.chatBg})`,r.style.backgroundSize="cover"):(r.style.backgroundImage=o.dotPattern,r.style.backgroundSize="")}}function Ds(e){const t=se(e);H("tg-contact-name",l=>{l.textContent=e.username}),H("tg-contact-name-header",l=>{l.textContent=e.username}),H("tg-status-text",l=>{l.textContent=e.statusText||"online"});const s=e.messages[e.messages.length-1]||{text:"",time:""},n=s.text||(s.image?"📷 Photo":"");H("tg-chat-time",l=>{l.textContent=s.time||""});let i="";s.type==="sent"&&(s.status==="read"||s.status==="delivered"?i=Le:s.status==="sent"&&(i=Ie)),H("tg-chat-last-message",l=>{l.innerHTML=`${i?`<span class="inline-flex mr-1">${i}</span>`:""}${p(n)}`}),document.querySelectorAll("#tg-avatar").forEach(l=>{if(e.avatar){const c=document.createElement("img");c.id="tg-avatar",c.src=e.avatar,c.className="w-full h-full rounded-full object-cover",c.alt="",l.replaceWith(c)}else{const c=document.createElement("div");c.id="tg-avatar",c.className="w-full h-full rounded-full bg-[#527da3] flex items-center justify-center text-white text-[13px] font-bold",c.textContent=e.username.slice(0,2),l.replaceWith(c)}});const o=document.getElementById("tg-messages");o&&(o.innerHTML=e.messages.map((l,c)=>xe(l,c,e,t)).join(""));const a=document.getElementById("tg-chat-container");a&&(a.style.background=`var(--chat-bg, ${t.chatBg})`,e.chatBg?(a.style.backgroundImage=`url(${e.chatBg})`,a.style.backgroundSize="cover"):(a.style.backgroundImage=t.dotPattern,a.style.backgroundSize=""))}function H(e,t){const s=document.getElementById(e);s&&t(s)}const Js='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',ct='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',dt='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',Ys='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',pt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',Xs='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',ut='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',Zs='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffd0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#ffffffd0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/></svg>',Qs='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffb3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',en={barBg:"#3b82f6",chatBg:"#f0f2f5",sentBg:"#3b82f6",recvBg:"#ffffff",sentText:"#ffffff",recvText:"#111b21",timeText:"#00000080",sentTimeText:"#ffffffb3",inputBg:"#f0f2f5",fieldBg:"#ffffff",fieldText:"#111b21",placeholder:"#8696a0"},tn={barBg:"#1e1f22",chatBg:"#101214",sentBg:"#3b82f6",recvBg:"#2b2d30",sentText:"#ffffff",recvText:"#e9edef",timeText:"#ffffff8c",sentTimeText:"#ffffffb3",inputBg:"#1e1f22",fieldBg:"#2b2d30",fieldText:"#e9edef",placeholder:"#8696a0"};function ce(e){return e.mockupTheme==="light"?en:tn}function sn(e){return`<svg width="24" height="12" viewBox="0 0 26 12" fill="none" class="opacity-90"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="${Math.max(1,Math.min(19.5,e/100*19.5))}" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`}function nn(e){const t=e>=1?"1":"0.3",s=e>=2?"1":"0.3",n=e>=3?"1":"0.3",i=e>=4?"1":"0.3";return`<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor" opacity="${t}"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor" opacity="${s}"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor" opacity="${n}"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor" opacity="${i}"/></svg>`}function on(e){const t=ce(e);if(e.viewMode==="desktop")return rn(e,t);const s=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${s};background:${s}">
        ${ft(e,t)}
        ${an(e,t)}
        ${ln(e,t)}
        ${cn(t)}
      </div>
    </div>
  `}function rn(e,t){const s=e.mockupTheme==="dark",n=s?"#1e1e21":"#ffffff",i=s?"#2e2f33":"#f8f9fa",r=s?"#3d3e42":"#f0f2f5",o=s?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)",a=s?"#9e9ea2":"#5c636a",l=s?"#f8f9fa":"#1a1a1a",c=e.messages[e.messages.length-1]||{text:"",time:""},f=c.text||(c.image?"📷 Photo":""),x=c.time||"",g=e.avatar?`<img id="sg-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:`<div id="sg-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center text-white text-[13px] font-bold">${p(e.username.slice(0,2))}</div>`;return`
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1000px; height:700px; font-family:${e.fontFamily}; border-color:${o}; background:${n}; color:${l};">
      <!-- Sidebar -->
      <div class="w-[300px] flex flex-col shrink-0 border-r" style="border-color:${o}; background:${n};">
        <div class="p-3 shrink-0 flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-zinc-600 flex items-center justify-center cursor-pointer select-none">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </div>
          <div class="flex-1 flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs" style="background:${s?"#2e2f33":"#f0f2f5"}; color:${a};">
            <span class="opacity-70">Search</span>
          </div>
        </div>
        <div class="flex-1 overflow-y-auto flex flex-col">
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none" style="background:${r};">
            <div class="w-11 h-11 rounded-full overflow-hidden shrink-0">
              ${g}
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span id="sg-contact-name" class="font-medium text-[15px] truncate" style="color:${l};">${p(e.username)}</span>
                <span id="sg-chat-time" class="text-[12px] shrink-0" style="color:${a};">${p(x)}</span>
              </div>
              <div class="flex items-center gap-1 mt-0.5">
                <span id="sg-chat-last-message" class="text-[13px] truncate flex-1" style="color:${a};">${p(f)}</span>
              </div>
            </div>
          </div>
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none opacity-40 hover:opacity-60 transition-opacity">
            <div class="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-white font-semibold text-[13px]">J</div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span class="font-medium text-[15px]" style="color:${l};">Julia</span>
                <span class="text-[12px]" style="color:${a};">12:30</span>
              </div>
              <span class="text-[13px] truncate" style="color:${a};">See you later!</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Chat Pane -->
      <div class="flex-1 flex flex-col min-w-0">
        <!-- Header -->
        <div class="h-[56px] shrink-0 flex items-center justify-between px-5 border-l" style="background:${i}; border-color:${o};">
          <div class="min-w-0">
            <div id="sg-contact-name-header" class="font-medium text-[15.5px] truncate" style="color:${l};">${p(e.username)}</div>
            <div id="sg-status-text" class="text-[12px] truncate" style="color:${a};">${p(e.statusText||"online")}</div>
          </div>
          <div class="flex items-center gap-5" style="color:${a};">
            ${ct}
            ${dt}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </div>
        </div>
        <!-- Messages -->
        <div id="sg-chat-container" class="flex-1 p-6 overflow-y-auto" style="background:var(--chat-bg, ${t.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
          <div id="sg-messages" class="flex flex-col gap-0.5 max-w-[720px] mx-auto">
            ${e.messages.map((h,m)=>he(h,m,e,t)).join("")}
          </div>
        </div>
        <!-- Input Footer -->
        <div class="p-3 shrink-0 flex items-center gap-3 border-l" style="background:${i}; border-color:${o}; text-align: left;">
          <span style="color:${a};">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </span>
          <div class="flex-1 rounded-xl px-4 py-2.5 text-[14.5px] flex items-center" style="background:${t.fieldBg}; color:${t.fieldText};">
            <span class="opacity-50">New Message</span>
          </div>
          <span style="color:${a};">${pt}</span>
          <span style="color:${a};">${ut}</span>
        </div>
      </div>
    </div>
  `}function ft(e,t){const s=e.statusBarWifi!==!1?`<span class="text-[11px]">${Ys}</span>`:"",n=nn(e.statusBarSignal||4),i=sn(e.statusBarBattery!==void 0?e.statusBarBattery:100);return`
    <div id="sg-statusbar" class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${t.barBg}">
      <span id="sg-statusbar-time" class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">${p(e.statusBarTime||"09:41")}</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${n}</span>
        ${s}
        <span class="text-[11px]">${i}</span>
      </div>
    </div>
  `}function an(e,t){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${t.barBg}">
      <span class="shrink-0">${Js}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="sg-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="sg-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="sg-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${p(e.username)}</div>
        <div id="sg-status-text" class="text-[#ffffffcc] text-[11px] leading-tight">${p(e.statusText||"online")}</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${ct}
        ${dt}
      </div>
    </div>
  `}function ln(e,t){return`
    <div id="sg-chat-container" class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${t.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
      <div id="sg-messages" class="flex flex-col gap-0.5">
        ${e.messages.map((s,n)=>he(s,n,e,t)).join("")}
      </div>
    </div>
  `}function he(e,t,s,n){var S,A;const i=e.type==="sent",r=t>0?s.messages[t-1]:null,o=t<s.messages.length-1?s.messages[t+1]:null,a=!r||r.type!==e.type,l=!o||o.type!==e.type,c=i?n.sentBg:n.recvBg,f=i?n.sentText:n.recvText,x=i?n.sentTimeText:n.timeText,g=i?"justify-end":"justify-start",h=e.status||"read";let m="rounded-[16px]",y=a?"mt-2.5":"mt-[2px]";i?a&&l?m="rounded-[16px] rounded-br-[4px]":a?m="rounded-[16px] rounded-tr-[16px] rounded-br-[4px]":l?m="rounded-[16px] rounded-br-[4px]":m="rounded-[16px] rounded-tr-[16px] rounded-br-[4px]":a&&l?m="rounded-[16px] rounded-bl-[4px]":a?m="rounded-[16px] rounded-tl-[16px] rounded-bl-[4px]":l?m="rounded-[16px] rounded-bl-[4px]":m="rounded-[16px] rounded-tl-[16px] rounded-bl-[4px]";const k=["#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#3b82f6"],E=(e.senderName||"").split("").reduce((N,Y)=>N+Y.charCodeAt(0),0)%k.length,C=k[E],M=s.isGroup&&!i&&a&&e.senderName?`
    <div class="text-[12px] font-semibold mb-0.5 leading-tight select-none" style="color:${C}">
      ${p(e.senderName)}
    </div>
  `:"",L=(S=e.reactions)!=null&&S[0]?`
    <div class="absolute -bottom-[8px] right-[10px] flex items-center justify-center bg-white dark:bg-[#2b2d30] border border-[#e9edef] dark:border-[#3b4a54] rounded-full px-1.5 py-[2px] shadow-[0_1.5px_2px_rgba(0,0,0,0.15)] select-none z-10 scale-[0.88] origin-bottom-right">
      <span class="text-[11px] leading-none">${e.reactions[0]}</span>
    </div>
  `:"";let T="px-3.5 py-1.5";(A=e.reactions)!=null&&A[0]&&(T="px-3.5 pt-1.5 pb-[10px]");const R=e.image?`<img src="${e.image}" class="w-full max-w-[280px] rounded-lg mb-1 object-cover shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" style="max-height: 200px" />`:"";let I="";return i&&(h==="read"||h==="delivered"?I=Zs:h==="sent"&&(I=Qs)),`
    <div class="flex ${g} ${y} relative">
      <div class="relative max-w-[80%]">
        <div class="${m} ${T} shadow-[0_1px_1px_rgba(0,0,0,0.08)]" style="background:${c}">
          ${M}
          ${R}
          ${e.text?`<p class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words" style="color:${f}">${p(e.text)}</p>`:""}
          <div class="flex items-center justify-end gap-1 mt-0.5 select-none">
            <span class="text-[10px] leading-none" style="color:${x}">${p(e.time)}</span>
            ${I?`<span class="inline-flex -mb-0.5">${I}</span>`:""}
          </div>
        </div>
        ${L}
      </div>
    </div>
  `}function cn(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${pt}</span>
              <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.placeholder}">Message</div>
              <span>${Xs}</span>
              <span>${ut}</span>
            </div>
          `}function dn(e){if(e.viewMode==="desktop"){pn(e);return}const t=ce(e),s=document.getElementById("sg-statusbar");s&&(s.outerHTML=ft(e,t)),O("sg-contact-name",o=>{o.textContent=e.username}),O("sg-status-text",o=>{o.textContent=e.statusText||"online"});const n=document.getElementById("sg-avatar");if(n)if(e.avatar){const o=document.createElement("img");o.id="sg-avatar",o.src=e.avatar,o.className="w-full h-full rounded-full object-cover",o.alt="",n.replaceWith(o)}else{const o=document.createElement("div");o.id="sg-avatar",o.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",o.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',n.replaceWith(o)}const i=document.getElementById("sg-messages");if(i){const o=ce(e);i.innerHTML=e.messages.map((a,l)=>he(a,l,e,o)).join("")}const r=document.getElementById("sg-chat-container");r&&(r.style.background=`var(--chat-bg, ${t.chatBg})`,e.chatBg?(r.style.backgroundImage=`url(${e.chatBg})`,r.style.backgroundSize="cover"):r.style.backgroundImage="")}function pn(e){const t=ce(e);O("sg-contact-name",a=>{a.textContent=e.username}),O("sg-contact-name-header",a=>{a.textContent=e.username}),O("sg-status-text",a=>{a.textContent=e.statusText||"online"});const s=e.messages[e.messages.length-1]||{text:"",time:""},n=s.text||(s.image?"📷 Photo":"");O("sg-chat-time",a=>{a.textContent=s.time||""}),O("sg-chat-last-message",a=>{a.textContent=n}),document.querySelectorAll("#sg-avatar").forEach(a=>{if(e.avatar){const l=document.createElement("img");l.id="sg-avatar",l.src=e.avatar,l.className="w-full h-full rounded-full object-cover",l.alt="",a.replaceWith(l)}else{const l=document.createElement("div");l.id="sg-avatar",l.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center text-white text-[13px] font-bold",l.textContent=e.username.slice(0,2),a.replaceWith(l)}});const r=document.getElementById("sg-messages");r&&(r.innerHTML=e.messages.map((a,l)=>he(a,l,e,t)).join(""));const o=document.getElementById("sg-chat-container");o&&(o.style.background=`var(--chat-bg, ${t.chatBg})`,e.chatBg?(o.style.backgroundImage=`url(${e.chatBg})`,o.style.backgroundSize="cover"):o.style.backgroundImage="")}function O(e,t){const s=document.getElementById(e);s&&t(s)}const un='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',fn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',gn='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',xn={barBg:"#f8f8f8",chatBg:"#ffffff",sentBg:"#007aff",recvBg:"#e5e5ea",sentText:"#ffffff",recvText:"#000000",timeText:"#8e8e93",inputBg:"#f8f8f8",fieldBg:"#e5e5ea",fieldText:"#000000",statusColor:"#000000",navColor:"#007aff"},hn={barBg:"#1c1c1e",chatBg:"#000000",sentBg:"#0a84ff",recvBg:"#262629",sentText:"#ffffff",recvText:"#ffffff",timeText:"#8e8e93",inputBg:"#1c1c1e",fieldBg:"#2c2c2e",fieldText:"#ffffff",statusColor:"#ffffff",navColor:"#ffffff"};function de(e){const t=e.imessageMode==="sms",s=e.mockupTheme==="light"?{...xn}:{...hn};return t&&(s.sentBg=e.mockupTheme==="light"?"#34c759":"#30d158",s.navColor=e.mockupTheme==="light"?"#34c759":"#ffffff"),s}function mn(e){return`<svg width="24" height="12" viewBox="0 0 26 12" fill="none" class="opacity-90"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="${Math.max(1,Math.min(19.5,e/100*19.5))}" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`}function vn(e){const t=e>=1?"1":"0.3",s=e>=2?"1":"0.3",n=e>=3?"1":"0.3",i=e>=4?"1":"0.3";return`<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor" opacity="${t}"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor" opacity="${s}"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor" opacity="${n}"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor" opacity="${i}"/></svg>`}function bn(e){const t=de(e);if(e.viewMode==="desktop")return yn(e,t);const s=e.mockupTheme==="light"?"#e5e5ea":"#1c1c1e";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${s};background:${s}">
        ${gt(e,t)}
        ${xt(e,t)}
        ${wn(e,t)}
        ${ht(e,t)}
      </div>
    </div>
  `}function yn(e,t){const s=e.mockupTheme==="dark",n=s?"#1e1e22":"#f5f5f7",i=s?"#262629":"#ffffff",r="#007aff",o=s?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)",a="#8e8e93",l=s?"#ffffff":"#000000",c=e.messages[e.messages.length-1]||{text:"",time:""},f=c.text||(c.image?"📷 Photo":""),x=c.time||"",g=e.avatar?`<img id="im-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:`<div id="im-avatar" class="w-full h-full rounded-full bg-[#8e8e93] flex items-center justify-center text-white text-[13px] font-bold">${p(e.username.slice(0,2))}</div>`;return`
    <div id="mockup-card" class="mx-auto flex rounded-xl overflow-hidden shadow-2xl border" style="width:1000px; height:700px; font-family:${e.fontFamily}; border-color:${o}; background:${t.chatBg}; color:${l};">
      <!-- Sidebar -->
      <div class="w-[300px] flex flex-col shrink-0 border-r" style="border-color:${o}; background:${n};">
        <div class="p-3 shrink-0 flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold" style="color:${a};">Messages</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs" style="background:${s?"#2c2c2e":"#e3e3e7"}; color:${a};">
            <span class="opacity-70">Search</span>
          </div>
        </div>
        <div class="flex-1 overflow-y-auto flex flex-col">
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none" style="background:${r}; color:#ffffff;">
            <div class="w-11 h-11 rounded-full overflow-hidden shrink-0">
              ${g}
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span id="im-contact-name" class="font-semibold text-[15px] truncate">${p(e.username)}</span>
                <span id="im-chat-time" class="text-[12px] shrink-0 opacity-80">${p(x)}</span>
              </div>
              <div class="flex items-center gap-1 mt-0.5">
                <span id="im-chat-last-message" class="text-[13px] truncate flex-1 opacity-90">${p(f)}</span>
              </div>
            </div>
          </div>
          <div class="flex gap-3 px-3 py-2.5 cursor-pointer select-none opacity-40 hover:opacity-60 transition-opacity">
            <div class="w-11 h-11 rounded-full bg-[#34c759] flex items-center justify-center shrink-0 text-white font-semibold text-[13px]">J</div>
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <div class="flex items-center justify-between">
                <span class="font-semibold text-[15px]" style="color:${l};">Julia</span>
                <span class="text-[12px]" style="color:${a};">12:30</span>
              </div>
              <span class="text-[13px] truncate" style="color:${a};">Let's meet tomorrow!</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Chat Pane -->
      <div class="flex-1 flex flex-col min-w-0" style="background:${t.chatBg};">
        <!-- Header -->
        <div class="h-[56px] shrink-0 flex items-center justify-between px-5 border-b" style="background:${i}; border-color:${o};">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-8 h-8 rounded-full overflow-hidden shrink-0">
              ${g}
            </div>
            <span id="im-contact-name-header" class="font-semibold text-[15px] truncate" style="color:${l};">${p(e.username)}</span>
          </div>
          <span class="text-xs font-semibold px-3 py-1 rounded bg-white/10 hover:bg-white/15 cursor-pointer select-none" style="color:${t.sentBg};">Details</span>
        </div>
        <!-- Messages -->
        <div id="im-chat-container" class="flex-1 p-6 overflow-y-auto" style="background:var(--chat-bg, ${t.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
          <div id="im-messages" class="flex flex-col gap-0.5 max-w-[720px] mx-auto">
            ${e.messages.map((h,m)=>me(h,m,e,t)).join("")}
          </div>
        </div>
        <!-- Input Footer -->
        <div class="p-3 shrink-0 flex items-center gap-3 border-t" style="background:${i}; border-color:${o}; text-align: left;">
          <div class="w-7 h-7 rounded-full bg-[#007aff] flex items-center justify-center text-white text-[12px] font-bold cursor-pointer select-none shrink-0">A</div>
          <div class="flex-1 rounded-full px-4 py-2 text-[14.5px] flex items-center" style="background:${t.fieldBg}; color:${t.fieldText};">
            <span class="opacity-50">${e.imessageMode==="sms"?"Text Message":"iMessage"}</span>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" style="fill:${t.sentBg};" class="shrink-0"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </div>
      </div>
    </div>
  `}function gt(e,t){const s=e.statusBarWifi!==!1?`<span class="text-[11px]">${gn}</span>`:"",n=vn(e.statusBarSignal||4),i=mn(e.statusBarBattery!==void 0?e.statusBarBattery:100);return`
    <div id="im-statusbar" class="flex items-center justify-between px-7 h-[44px] shrink-0" style="background:${t.barBg};color:${t.statusColor}">
      <div class="w-[72px]"></div>
      <span id="im-statusbar-time" class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">${p(e.statusBarTime||"09:41")}</span>
      <div class="flex items-center gap-1.5 w-[72px] justify-end">
        <span class="text-[11px]">${n}</span>
        ${s}
        <span class="text-[11px]">${i}</span>
      </div>
    </div>
  `}function xt(e,t){return`
    <div id="im-navbar" class="flex items-center gap-1 px-2 py-1.5 shrink-0 border-b border-black/[5%] relative z-10" style="background:${t.barBg};color:${t.navColor}">
      <span class="shrink-0 px-1">${un}</span>
      <div class="w-[34px] h-[34px] rounded-full overflow-hidden shrink-0 ml-1">
        ${e.avatar?`<img id="im-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="im-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="#8e8e93"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="im-contact-name" class="text-[15px] font-semibold leading-tight truncate ml-2" style="color:${t.statusColor}">${p(e.username)}</div>
      </div>
      <div class="flex items-center gap-2 shrink-0 px-1">
        <span style="color:${t.navColor}">${fn}</span>
      </div>
    </div>
  `}function wn(e,t){return`
    <div id="im-chat-container" class="flex-1 p-3 overflow-y-auto" style="background:var(--chat-bg, ${t.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
      <div id="im-messages" class="flex flex-col gap-0.5">
        ${e.messages.map((s,n)=>me(s,n,e,t)).join("")}
      </div>
    </div>
  `}function me(e,t,s,n){var M,L;const i=e.type==="sent",r=t>0?s.messages[t-1]:null,o=t<s.messages.length-1?s.messages[t+1]:null,a=!r||r.type!==e.type,l=!o||o.type!==e.type,c=i?n.sentBg:n.recvBg,f=i?n.sentText:n.recvText,x=i?"justify-end":"justify-start";let g="",h="rounded-[18px]",m=a?"mt-2.5":"mt-[2px]";l&&(i?(h="rounded-[18px] rounded-br-[4px]",g=`<span class="absolute bottom-0 -right-[5px] w-[10px] h-[15px]" style="color:${c}">
        <svg viewBox="0 0 10 15" width="10" height="15" fill="none">
          <path fill="currentColor" d="M0 15h10V0C10 6 7 11 0 15z"/>
        </svg>
      </span>`):(h="rounded-[18px] rounded-bl-[4px]",g=`<span class="absolute bottom-0 -left-[5px] w-[10px] h-[15px]" style="color:${c}">
        <svg viewBox="0 0 10 15" width="10" height="15" fill="none">
          <path fill="currentColor" d="M10 15H0V0C0 6 3 11 10 15z"/>
        </svg>
      </span>`));let y="";l&&i&&e.time?y=`
      <div class="text-[10px] text-right text-zinc-400 mt-1 select-none pr-1.5">
        ${p(e.time)}
      </div>
    `:l&&!i&&e.time&&(y=`
      <div class="text-[10px] text-left text-zinc-400 mt-1 select-none pl-1.5">
        ${p(e.time)}
      </div>
    `);const k=s.isGroup&&!i&&a&&e.senderName?`
    <div class="text-[10px] text-zinc-400 dark:text-zinc-500 mb-0.5 leading-tight select-none pl-2.5">
      ${p(e.senderName)}
    </div>
  `:"",E=(M=e.reactions)!=null&&M[0]?`
    <div class="absolute -top-[10px] ${i?"-left-[6px]":"-right-[6px]"} flex items-center justify-center bg-[#e5e5ea] dark:bg-[#2c2c2e] border border-black/10 dark:border-white/10 rounded-full px-1.5 py-[2px] shadow-[0_1.5px_2px_rgba(0,0,0,0.15)] select-none z-10 scale-[0.88] ${i?"origin-top-left":"origin-top-right"}">
      <span class="text-[11px] leading-none">${e.reactions[0]}</span>
    </div>
  `:"";(L=e.reactions)!=null&&L[0]&&(a?m="mt-4":m="mt-3.5");const C=e.image?`<img src="${e.image}" class="w-full max-w-[280px] rounded-lg mb-1 object-cover shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" style="max-height: 200px" />`:"";return`
    <div class="flex flex-col ${x} ${m}">
      ${k}
      <div class="relative max-w-[75%]">
        ${E}
        <div class="${h} px-3.5 py-2" style="background:${c}">
          ${C}
          ${e.text?`<p class="text-[15.5px]/[1.35] whitespace-pre-wrap break-words" style="color:${f}">${p(e.text)}</p>`:""}
        </div>
        ${g}
      </div>
      ${y}
    </div>
  `}function ht(e,t){const s=e.imessageMode==="sms"?"Text Message":"iMessage";return`
    <div id="im-inputbar" class="flex items-center gap-2 px-3 py-2 shrink-0 border-t border-black/[5%]" style="background:${t.inputBg}">
      <div class="flex-1 rounded-2xl px-4 py-2 text-[15px] leading-none" style="background:${t.fieldBg};color:${t.fieldText}">${s}</div>
      <svg width="24" height="24" viewBox="0 0 24 24" style="fill:${t.sentBg}"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    </div>
  `}function $n(e){if(e.viewMode==="desktop"){kn(e);return}const t=de(e),s=document.getElementById("im-statusbar");s&&(s.outerHTML=gt(e,t));const n=document.getElementById("im-navbar");n&&(n.outerHTML=xt(e,t));const i=document.getElementById("im-inputbar");i&&(i.outerHTML=ht(e,t)),ee("im-contact-name",l=>{l.textContent=e.username});const r=document.getElementById("im-avatar");if(r)if(e.avatar){const l=document.createElement("img");l.id="im-avatar",l.src=e.avatar,l.className="w-full h-full rounded-full object-cover",l.alt="",r.replaceWith(l)}else{const l=document.createElement("div");l.id="im-avatar",l.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",l.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="#8e8e93"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',r.replaceWith(l)}const o=document.getElementById("im-messages");if(o){const l=de(e);o.innerHTML=e.messages.map((c,f)=>me(c,f,e,l)).join("")}const a=document.getElementById("im-chat-container");a&&(a.style.background=`var(--chat-bg, ${t.chatBg})`,e.chatBg?(a.style.backgroundImage=`url(${e.chatBg})`,a.style.backgroundSize="cover"):a.style.backgroundImage="")}function kn(e){const t=de(e);ee("im-contact-name",a=>{a.textContent=e.username}),ee("im-contact-name-header",a=>{a.textContent=e.username});const s=e.messages[e.messages.length-1]||{text:"",time:""},n=s.text||(s.image?"📷 Photo":"");ee("im-chat-time",a=>{a.textContent=s.time||""}),ee("im-chat-last-message",a=>{a.textContent=n}),document.querySelectorAll("#im-avatar").forEach(a=>{if(e.avatar){const l=document.createElement("img");l.id="im-avatar",l.src=e.avatar,l.className="w-full h-full rounded-full object-cover",l.alt="",a.replaceWith(l)}else{const l=document.createElement("div");l.id="im-avatar",l.className="w-full h-full rounded-full bg-[#8e8e93] flex items-center justify-center text-white text-[13px] font-bold",l.textContent=e.username.slice(0,2),a.replaceWith(l)}});const r=document.getElementById("im-messages");r&&(r.innerHTML=e.messages.map((a,l)=>me(a,l,e,t)).join(""));const o=document.getElementById("im-chat-container");o&&(o.style.background=`var(--chat-bg, ${t.chatBg})`,e.chatBg?(o.style.backgroundImage=`url(${e.chatBg})`,o.style.backgroundSize="cover"):o.style.backgroundImage="")}function ee(e,t){const s=document.getElementById(e);s&&t(s)}const mt={"social-post":{render:X,sync:Z},messenger:{render:X,sync:Z},instagram:{render:X,sync:Z},twitter:{render:X,sync:Z},tiktok:{render:X,sync:Z},discord:{render:ls,sync:cs},whatsapp:{render:Ms,sync:Ls},telegram:{render:Fs,sync:qs},signal:{render:on,sync:dn},imessage:{render:bn,sync:$n}};let w=d.get("theme"),be=!1,Ce=!1;function vt(){return{"social-post":u("sidebar.socialPost"),messenger:u("sidebar.socialPost"),instagram:u("sidebar.socialPost"),twitter:u("sidebar.socialPost"),tiktok:u("sidebar.socialPost"),discord:u("sidebar.discord"),whatsapp:"WhatsApp",telegram:"Telegram",signal:"Signal",imessage:"iMessage"}[w]||w}const Bn={"from-slate-900 to-indigo-950":["#050508","#121020"],"from-sky-400 to-indigo-600":["#38bdf8","#4f46e5"],"from-rose-400 to-orange-600":["#fb7185","#ea580c"],"from-emerald-400 to-cyan-600":["#34d399","#0891b2"],"from-amber-400 to-red-600":["#fbbf24","#dc2626"],"from-violet-400 to-fuchsia-600":["#a78bfa","#c026d3"],"from-zinc-800 to-zinc-950":["#27272a","#09090b"]},Fe=[{label:"Default",value:"",colors:null},{label:"Warm",value:"#efeae2",colors:null},{label:"Cool",value:"#eef2f6",colors:null},{label:"Dark",value:"#0b141a",colors:null},{label:"Deep",value:"#101214",colors:null},{label:"Rose",value:"linear-gradient(135deg,#fce4ec,#f8bbd0)",colors:null},{label:"Sky",value:"linear-gradient(135deg,#e3f2fd,#bbdefb)",colors:null},{label:"Mint",value:"linear-gradient(135deg,#e8f5e9,#c8e6c9)",colors:null},{label:"Lavender",value:"linear-gradient(135deg,#f3e5f5,#e1bee7)",colors:null}],pe=[{id:"whatsapp",theme:"whatsapp",name:"WhatsApp",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>'},{id:"telegram",theme:"telegram",name:"Telegram",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0m4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635"/></svg>'},{id:"signal",theme:"signal",name:"Signal",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0l-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0l-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0l-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002l-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213l-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24l-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125"/></svg>'},{id:"messenger",theme:"messenger",name:"Messenger",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13"/></svg>'},{id:"imessage",theme:"imessage",name:"iMessage",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.285 0A5.273 5.273 0 0 0 0 5.285v13.43A5.273 5.273 0 0 0 5.285 24h13.43A5.273 5.273 0 0 0 24 18.715V5.285A5.273 5.273 0 0 0 18.715 0ZM12 4.154a8.809 7.337 0 0 1 8.809 7.338A8.809 7.337 0 0 1 12 18.828a8.809 7.337 0 0 1-2.492-.303A8.656 7.337 0 0 1 5.93 19.93a9.929 7.337 0 0 0 1.54-2.155 8.809 7.337 0 0 1-4.279-6.283A8.809 7.337 0 0 1 12 4.154"/></svg>'},{id:"instagram",theme:"instagram",name:"Instagram",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>'},{id:"twitter",theme:"twitter",name:"X",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'},{id:"tiktok",theme:"tiktok",name:"TikTok",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07"/></svg>'},{id:"discord",theme:"discord",name:"Discord",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189"/></svg>'}],b={koala:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="8" ry="7.5"/><circle cx="7" cy="5" r="4"/><circle cx="17" cy="5" r="4"/><circle cx="9" cy="11" r="1.2" fill="#0d0a07"/><circle cx="15" cy="11" r="1.2" fill="#0d0a07"/><ellipse cx="12" cy="16" rx="2.5" ry="1.2"/></svg>',sun:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',moon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',download:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',spinner:'<svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10"/></svg>',check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',chevronDown:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',github:'<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',sidebarToggle:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>',undo:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',redo:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',clipboard:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',link:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',folder:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',zoomIn:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',zoomOut:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',dockRight:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',dockBottom:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',mobile:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',desktop:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'},Ve=Te(),zn={de:"Deutsch",en:"English",es:"Español"};function We(e){return e==="de"?"🇩🇪":e==="en"?"🇬🇧":e==="es"?"🇪🇸":""}function Cn(e){return d.getSidebarOpen(),`
    <header class="h-14 shrink-0 flex items-center justify-between px-5 border-b border-white/[5%] bg-[#0d0a07]/80 backdrop-blur-xl relative z-50">
      <div class="flex items-center gap-3">
        <div class="text-zinc-100">${b.koala}</div>
        <span class="text-sm font-bold tracking-tight hidden sm:inline">${u("app.name")}</span>
        <button id="btn-sidebar-toggle" aria-label="${u("topbar.toggleSidebar")}"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all ml-2">
          ${b.sidebarToggle}
        </button>
      </div>
      <div class="flex items-center gap-1.5">
        <button id="btn-undo" aria-label="${u("topbar.undo")}"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all disabled:opacity-30 disabled:pointer-events-none"
          ${d.canUndo()?"":"disabled"}>
          ${b.undo}
        </button>
        <button id="btn-redo" aria-label="${u("topbar.redo")}"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all disabled:opacity-30 disabled:pointer-events-none"
          ${d.canRedo()?"":"disabled"}>
          ${b.redo}
        </button>
        <div class="relative flex" id="export-dropdown-container">
          <button id="btn-topbar-export" aria-label="${u("topbar.export")}"
            class="flex items-center gap-1.5 bg-[#f97316] pl-3 pr-1.5 h-7 text-xs font-semibold text-white hover:bg-[#ea580c] active:scale-[0.97] transition-all disabled:opacity-60 disabled:pointer-events-none rounded-l-full">
            <span id="btn-export-icon">${b.download}</span>
            <span id="btn-export-label">${u("topbar.export")}</span>
          </button>
          <button id="btn-export-chevron" aria-label="${u("topbar.more")}"
            class="flex items-center bg-[#f97316] pl-1.5 pr-2.5 h-7 text-white hover:bg-[#ea580c] active:scale-[0.97] transition-all rounded-r-full border-l border-orange-500/30">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div id="export-dropdown" class="absolute right-0 top-full mt-1 z-50 hidden min-w-[200px] rounded-xl border border-white/10 bg-[#1a1714]/95 backdrop-blur-2xl py-1 shadow-2xl shadow-black/50">
            <button data-export-action="png" class="flex items-center gap-2.5 w-full px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-all text-left">
              ${b.download} <span>${u("topbar.exportPng")}</span>
            </button>
            <button data-export-action="clipboard" class="flex items-center gap-2.5 w-full px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-all text-left">
              ${b.clipboard} <span>${u("topbar.exportClipboard")}</span>
            </button>
            <button data-export-action="share" class="flex items-center gap-2.5 w-full px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-all text-left">
              ${b.link} <span>${u("topbar.exportShare")}</span>
            </button>
          </div>
        </div>
        <button id="btn-start-tour" aria-label="${u("tutorial.restart")}"
          class="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-all mr-1">${u("tutorial.restart")}</button>
        <a href="https://github.com/Shik3i/KoalaSnap" target="_blank" rel="noopener noreferrer"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all"
          aria-label="GitHub">
          ${b.github}
        </a>
        <div class="relative flex" id="lang-switcher">
          <button id="lang-btn"
            class="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-2.5 py-1.5 text-xs
                   text-zinc-400 hover:text-zinc-200 hover:border-white/20 outline-0 transition-all cursor-pointer">
            <span class="font-flags text-sm shrink-0 leading-none">${We(Ve)}</span>
            <span class="text-[10px] font-semibold leading-none">${Ve.toUpperCase()}</span>
            <span class="text-zinc-500">${b.chevronDown}</span>
          </button>
          <div id="lang-dropdown" class="hidden absolute right-0 top-full mt-1.5 z-50 min-w-[130px] rounded-xl border border-white/10 bg-[#1a1714]/95 backdrop-blur-2xl py-1 shadow-2xl shadow-black/50">
            ${["de","en","es"].map(t=>`
              <button data-lang="${t}"
                class="flex items-center gap-2 w-full px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-white/5 transition-all text-left">
                <span class="font-flags text-sm shrink-0 leading-none">${We(t)}</span>
                ${zn[t]}
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    </header>
  `}function Mn(e){const t=d.getSidebarOpen(),n=Te()==="de"?"/de":"";return`
    <aside id="sidebar" class="shrink-0 h-full overflow-y-auto flex flex-col gap-4 transition-all duration-300 bg-[#0d0a07] border-white/[6%] z-40 fixed left-0 top-14 bottom-0 border-r md:relative md:top-0 md:translate-x-0
      ${t?"w-[340px] p-4 opacity-100 translate-x-0":"w-[340px] p-4 -translate-x-full md:w-0 md:p-0 md:border-r-0 md:opacity-0 md:overflow-hidden md:gap-0"}">
      <div id="app-library" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
        <div class="flex items-center justify-between cursor-pointer select-none" id="app-library-toggle">
          <span class="text-xs font-semibold text-zinc-300 tracking-wide">${u("sidebar.appLibrary")}</span>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-zinc-600">${pe.length} ${u("sidebar.apps")}</span>
            <span id="app-library-chevron" class="text-zinc-500 transition-transform">${b.chevronDown}</span>
          </div>
        </div>
        <div id="app-library-body">
          <div class="relative mb-2">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">${b.search}</span>
            <input type="text" placeholder="${u("sidebar.search")}"
              class="w-full rounded-xl border border-white/[6%] bg-white/[4%] pl-9 pr-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
          </div>
          <div class="flex flex-col gap-1.5">
            ${pe.map(i=>{const r=i.theme===w;return`
                <button data-app="${i.id}" aria-label="${i.id}"
                  class="flex items-center gap-3 rounded-xl border p-2.5 transition-all text-left
                    ${r?"border-white/15 bg-white/[8%]":"border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]"}">
                <div class="w-7 h-7 rounded-lg bg-white/[8%] flex items-center justify-center shrink-0 text-zinc-300">${i.svg}</div>
                  <span class="flex-1 text-xs font-medium text-white">${i.name}</span>
                  <span class="text-[9px] text-zinc-600 uppercase tracking-wider">${i.tag==="chat"?u("canvas.chat"):u("canvas.social")}</span>
                </button>
              `}).join("")}
          </div>
        </div>
      </div>

      <div id="settings-panel" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-4">
        <span class="text-xs font-semibold text-zinc-300 tracking-wide">${u("sidebar.settings")} · <span class="text-zinc-500 font-normal normal-case">${vt()}</span></span>
        ${yt(e)}
      </div>

      ${bt()}

      <div class="flex items-center gap-4 mt-auto pt-4 border-t border-white/[6%]">
        <a href="${n}/imprint" class="text-[10px] text-zinc-600 hover:text-zinc-200 transition-colors">${u("bottom.imprint")}</a>
        <a href="${n}/privacy" class="text-[10px] text-zinc-600 hover:text-zinc-200 transition-colors">${u("bottom.privacy")}</a>
      </div>
    </aside>
  `}function bt(){const e=d.listTemplates();return`
    <div id="templates-section" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-zinc-300 tracking-wide">${u("templates.title")}</span>
        <span class="text-[10px] text-zinc-600">${e.length}</span>
      </div>
      <div class="flex items-center gap-2">
        <input id="input-template-name" type="text" placeholder="${u("templates.namePlaceholder")}"
          class="flex-1 rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
        <button id="btn-template-save"
          class="rounded-xl bg-[#f97316] px-3 py-2 text-xs font-semibold text-white hover:bg-[#ea580c] transition-all shrink-0">${u("templates.save")}</button>
      </div>
      <div id="template-list" class="flex flex-col gap-1 max-h-[140px] overflow-y-auto">
        ${e.length===0?`<span class="text-[10px] text-zinc-600 text-center py-2">${u("templates.empty")}</span>`:e.map(t=>`
            <div class="flex items-center gap-1 group" data-tmpl-name="${t}">
              <span class="flex-1 text-xs text-zinc-400 truncate">${t}</span>
              <button data-tmpl-action="load" class="hidden group-hover:inline-flex px-2 py-0.5 rounded-lg text-[10px] text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all">${u("templates.load")}</button>
              <button data-tmpl-action="delete" class="hidden group-hover:inline-flex px-2 py-0.5 rounded-lg text-[10px] text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all">${u("templates.delete")}</button>
            </div>
          `).join("")}
      </div>
    </div>
  `}function yt(e){const t=["whatsapp","telegram","signal","imessage"].includes(w);let s="";return w==="discord"?s=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.username")}</span>
        <input id="input-username" type="text" value="${e.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.roleColor")}</span>
        <div class="flex items-center gap-3">
          <input id="input-rolecolor" type="color" value="${e.roleColor}"
            class="w-9 h-9 rounded-xl border border-white/[6%] bg-white/[4%] p-0.5 cursor-pointer" />
          <span class="text-xs text-zinc-500 font-mono">${e.roleColor}</span>
        </div>
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.timestamp")}</span>
        <input id="input-timestamp" type="text" value="${e.timestamp}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`:t?s=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.username")}</span>
        <input id="input-username" type="text" value="${e.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.statusText")}</span>
        <input id="input-statusText" type="text" value="${e.statusText||"online"}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.statusBarTime")}</span>
        <input id="input-statusBarTime" type="text" value="${e.statusBarTime||"09:41"}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      
      ${w==="imessage"?`
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">iMessage Type</span>
        <select id="input-imessageMode" class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 outline-0 focus:border-zinc-600 transition-colors">
          <option value="imessage" ${e.imessageMode==="imessage"?"selected":""}>iMessage (Blue)</option>
          <option value="sms" ${e.imessageMode==="sms"?"selected":""}>SMS (Green)</option>
        </select>
      </label>`:""}

      <div class="mt-4 pt-4 border-t border-white/[6%] space-y-4">
        <label class="flex flex-col gap-1.5">
          <span class="text-[10px] uppercase tracking-wider text-zinc-500">Battery Level (${e.statusBarBattery||100}%)</span>
          <input id="input-statusBarBattery" type="range" min="0" max="100" value="${e.statusBarBattery||100}" class="accent-zinc-400 h-1 cursor-pointer" />
        </label>
        <label class="flex flex-col gap-1.5">
          <span class="text-[10px] uppercase tracking-wider text-zinc-500">Signal Strength (${e.statusBarSignal||4} Bars)</span>
          <input id="input-statusBarSignal" type="range" min="1" max="4" value="${e.statusBarSignal||4}" class="accent-zinc-400 h-1 cursor-pointer" />
        </label>
        <label class="flex items-center justify-between mt-2">
          <span class="text-xs text-zinc-300">Show WiFi</span>
          <input id="input-statusBarWifi" type="checkbox" ${e.statusBarWifi!==!1?"checked":""} class="w-4 h-4 rounded border-white/[10%] bg-white/[5%]" />
        </label>
        <label class="flex items-center justify-between mt-2">
          <span class="text-xs text-zinc-300">Group Chat Mode</span>
          <input id="input-isGroup" type="checkbox" ${e.isGroup?"checked":""} class="w-4 h-4 rounded border-white/[10%] bg-white/[5%]" />
        </label>
      </div>

      <div class="flex flex-col gap-2 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.message")}</span>
        <div id="wa-message-list" class="flex flex-col gap-2">
          ${e.messages.map((n,i)=>wt(n,i)).join("")}
        </div>
        <button id="btn-add-message"
          class="w-full rounded-xl border border-dashed border-white/[8%] py-2 text-xs text-zinc-500 hover:text-zinc-300 hover:border-white/20 transition-all">+ ${u("sidebar.addMessage")}</button>
      </div>`:s=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.author")}</span>
        <input id="input-author" type="text" value="${e.author}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.handle")}</span>
        <input id="input-handle" type="text" value="${e.handle}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`,`
    <div id="settings-fields">
      ${s}

      ${!t&&w!=="discord"?`
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.message")}</span>
        <textarea id="input-message" rows="3"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none">${e.message}</textarea>
      </label>`:""}

      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.avatar")}</span>
        <input id="input-avatar" type="file" accept="image/*"
          class="text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:text-zinc-200 file:font-medium hover:file:bg-white/15 transition-colors" />
      </label>
    </div>
    <div class="mt-4 pt-4 border-t border-white/[6%] space-y-4">
      ${En(e)}
    </div>
  `}const Tn=[{id:"read",title:"Read",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>'},{id:"delivered",title:"Delivered",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>'},{id:"sent",title:"Sent",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'},{id:"unread",title:"Unread",svg:'<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>'}];function wt(e,t){var g;const s=d.getState(),n=e.type==="sent",i=n?"bg-white text-zinc-900":"bg-white/[4%] text-zinc-500 hover:text-zinc-300",r=n?"bg-white/[4%] text-zinc-500 hover:text-zinc-300":"bg-white text-zinc-900",o=e.status||"read",a=s.isGroup&&!n?`
    <input type="text" data-msg-idx="${t}" data-msg-field="senderName" value="${p(e.senderName||"")}"
      class="w-full rounded-lg border border-white/[6%] bg-white/[4%] px-2.5 py-1.5 text-xs text-zinc-200 outline-0 focus:border-zinc-600 transition-colors mt-1.5" placeholder="Sender Name" />
  `:"",l=((g=e.reactions)==null?void 0:g[0])||"",f=`
    <div class="flex gap-1 items-center mt-1.5 select-none">
      <span class="text-[9px] text-zinc-500 uppercase tracking-wider">React:</span>
      <div class="flex flex-wrap gap-0.5">
        ${["👍","❤️","😂","😮","😢","🙏"].map(h=>`
          <button data-msg-idx="${t}" data-msg-reaction="${h}"
            class="w-5.5 h-5.5 flex items-center justify-center rounded-md text-xs transition-all ${l===h?"bg-white/20 ring-1 ring-white/30 text-white":"text-zinc-500 hover:text-zinc-200 hover:bg-white/5"}">${h}</button>
        `).join("")}
      </div>
      ${l?`
        <button data-msg-idx="${t}" data-msg-reaction-clear="true"
          class="text-[9px] text-red-400 hover:text-red-300 ml-1 px-1 rounded hover:bg-red-500/10 transition-all">Clear</button>
      `:""}
    </div>
  `,x=`
    <div class="flex items-center justify-between mt-2 pt-2 border-t border-white/[4%]">
      <span class="text-[9px] text-zinc-500 uppercase tracking-wider">Image Bubble:</span>
      <div class="flex items-center gap-2">
        ${e.image?`
          <span class="text-[10px] text-emerald-400 font-medium">Image attached</span>
          <button data-msg-idx="${t}" data-msg-image-clear="true"
            class="text-[9px] text-red-400 hover:text-red-300 px-1.5 py-0.5 rounded bg-red-500/10 hover:bg-red-500/20 transition-all">Remove</button>
        `:`
          <input type="file" accept="image/*" data-msg-idx="${t}" data-msg-field="imageUpload" class="hidden" id="msg-img-upload-${t}" />
          <label for="msg-img-upload-${t}" class="text-[9.5px] text-zinc-300 hover:text-zinc-100 bg-white/5 border border-white/10 px-2 py-1 rounded-lg cursor-pointer transition-all">Upload Photo</label>
        `}
      </div>
    </div>
  `;return`
    <div draggable="true" data-msg-idx="${t}"
      class="rounded-xl border border-white/[6%] bg-white/[3%] p-2.5 flex flex-col gap-1 cursor-grab active:cursor-grabbing">
      <textarea data-msg-idx="${t}" rows="2"
        class="w-full rounded-lg border border-white/[6%] bg-white/[4%] px-2.5 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none" placeholder="${u("sidebar.messagePlaceholder")}">${p(e.text)}</textarea>
      ${a}
      ${f}
      ${x}
      <div class="flex items-center gap-1.5 mt-1.5">
        <button data-msg-idx="${t}" data-msg-type="sent"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${i}">${u("sidebar.sent")}</button>
        <button data-msg-idx="${t}" data-msg-type="received"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${r}">${u("sidebar.received")}</button>
        ${n?`
        <div class="flex gap-0.5 ml-1">
          ${Tn.map(h=>`
            <button data-msg-idx="${t}" data-msg-status="${h.id}"
              class="p-1 rounded-md transition-all ${o===h.id?"bg-white/15 ring-1 ring-white/20":"text-zinc-600 hover:text-zinc-300 hover:bg-white/5"}"
              title="${h.title}">${h.svg}</button>
          `).join("")}
        </div>
        `:""}
        <input type="text" data-msg-idx="${t}" data-msg-field="time" value="${p(e.time)}"
          class="w-14 rounded-lg border border-white/[6%] bg-white/[4%] px-2 py-1 text-[10px] text-zinc-200 text-center outline-0 focus:border-zinc-600 transition-colors" placeholder="${u("sidebar.timePlaceholder")}" />
        <button data-msg-idx="${t}" data-msg-action="delete"
          class="p-1 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all" title="${u("sidebar.deleteMessage")}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `}function En(e){return`
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.padding")}</span>
      <div class="flex items-center gap-3">
        <input id="input-padding" type="range" min="16" max="96" value="${e.padding}"
          class="flex-1 accent-zinc-400 h-1 cursor-pointer" />
        <span id="padding-value" class="text-xs text-zinc-500 w-8 text-right">${e.padding}</span>
      </div>
    </label>
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.background")}</span>
      <div class="flex flex-wrap gap-1.5">
        ${Fe.map(t=>`
          <button data-chat-bg="${t.value}" aria-label="${t.label}"
            class="w-7 h-7 rounded-lg ring-1 ring-white/[8%] hover:ring-white/30 transition-all
              ${e.chatBgGradient===t.value?"ring-2 ring-white scale-110":""}"
            style="background:${t.value||Fe[1].value}"></button>
        `).join("")}
      </div>
    </label>
    <label class="flex flex-col gap-1.5 mt-4">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.font")}</span>
      <select id="input-font"
        class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 outline-0 focus:border-zinc-600 transition-colors">
        <option value="system-ui" ${e.fontFamily==="system-ui"?"selected":""}>System UI</option>
        <option value="Inter" ${e.fontFamily==="Inter"?"selected":""}>Inter</option>
      </select>
    </label>
    <label class="flex flex-col gap-1.5 mt-4">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${u("sidebar.labels.uploadBg")}</span>
      <input id="input-chatbg" type="file" accept="image/*"
        class="text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:text-zinc-200 file:font-medium hover:file:bg-white/15 transition-colors" />
    </label>
  `}function Sn(e){const t=d.get("_zoom")||0,s=d.get("_toolbarPos")||"right";return jn(e,s,t)}function jn(e,t,s){const n=t==="right"?b.dockBottom:b.dockRight,r=(e.viewMode||"mobile")==="desktop"?b.mobile:b.desktop;return`
    <div id="bottom-bar" class="absolute z-20 transition-all duration-300
                flex items-center gap-1 rounded-2xl bg-white/[6%] backdrop-blur-2xl
                border border-white/[8%] px-2 py-1.5 shadow-2xl shadow-black/30
                ${t==="right"?"right-4 top-1/2 -translate-y-1/2 flex-col":"bottom-8 left-1/2 -translate-x-1/2 flex-row"}">
      <button id="btn-toolbar-pos" aria-label="Toggle toolbar position"
        class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all" title="Toolbar position">
        ${n}
      </button>
      <span class="w-px h-4 bg-white/[6%] mx-1 ${t==="right"?"hidden":""}"></span>
      <span class="h-px w-4 bg-white/[6%] my-1 ${t!=="right"?"hidden":""}"></span>
      <button id="btn-view-mode" aria-label="Toggle view mode" class="rounded-full p-2 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 transition-all" title="Toggle Desktop/Mobile View">
        ${r}
      </button>
      <span class="w-px h-4 bg-white/[6%] mx-1 ${t==="right"?"hidden":""}"></span>
      <span class="h-px w-4 bg-white/[6%] my-1 ${t!=="right"?"hidden":""}"></span>
      <button id="btn-mockup-theme" aria-label="${u("bottom.toggleTheme")}" class="rounded-full p-2 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${u("bottom.toggleTheme")}">
        ${e.mockupTheme==="light"?b.sun:b.moon}
      </button>
      <span class="w-px h-4 bg-white/[6%] mx-1 ${t==="right"?"hidden":""}"></span>
      <span class="h-px w-4 bg-white/[6%] my-1 ${t!=="right"?"hidden":""}"></span>
      <button id="btn-zoom-out" aria-label="${u("bottom.zoomOut")}" class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${u("bottom.zoomOut")}">
        ${b.zoomOut}
      </button>
      <input id="zoom-slider" type="range" min="-50" max="100" value="${s}"
        class="w-20 h-1 accent-[#f97316] cursor-pointer ${t==="right"?"hidden":""}" />
      <button id="btn-zoom-in" aria-label="${u("bottom.zoomIn")}" class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${u("bottom.zoomIn")}">
        ${b.zoomIn}
      </button>
      <span id="zoom-label" class="text-[10px] text-zinc-500 w-8 text-center ${t==="right"?"hidden":""}">${s>0?"+":""}${s}%</span>
    </div>
  `}function Ln(e){var i,r;const t=document.getElementById("bottom-bar");if(!t)return;t.classList.remove("right-4","top-1/2","-translate-y-1/2","flex-col","bottom-8","left-1/2","-translate-x-1/2","flex-row"),e==="right"?t.classList.add("right-4","top-1/2","-translate-y-1/2","flex-col"):t.classList.add("bottom-8","left-1/2","-translate-x-1/2","flex-row");const s=document.getElementById("btn-toolbar-pos");s&&(s.innerHTML=e==="right"?b.dockBottom:b.dockRight);const n=e==="right";(i=document.getElementById("zoom-slider"))==null||i.classList.toggle("hidden",n),(r=document.getElementById("zoom-label"))==null||r.classList.toggle("hidden",n),t.querySelectorAll(".mx-1").forEach(o=>o.classList.toggle("hidden",n)),t.querySelectorAll(".my-1").forEach(o=>o.classList.toggle("hidden",!n))}function Ae(){const e=document.getElementById("app");if(!e)return;const t=d.getState(),s=d.getSidebarOpen();e.innerHTML=`
    ${Cn()}
    <div id="main-area" class="flex-1 flex overflow-hidden relative">
      <div id="sidebar-overlay" class="${s&&window.innerWidth<768?"block":"hidden"} fixed inset-0 z-30 bg-black/40"></div>
      ${Mn(t)}
      <button id="btn-sidebar-open"
        class="${s?"hidden":""} absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-5 h-20 bg-[#1a1714] hover:bg-[#25211e] border border-white/10 border-l-0 rounded-r-lg transition-all cursor-pointer group">
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
        ${Sn(t)}
      </main>
    </div>
  `,An(),P(),Nn();const n=d.get("_zoom")||0;Bt(n)}function In(){const e=document.getElementById("btn-undo"),t=document.getElementById("btn-redo");e&&(e.disabled=!d.canUndo()),t&&(t.disabled=!d.canRedo())}function Ue(e){const t=document.getElementById("settings-panel");t&&(t.innerHTML=`
    <span class="text-xs font-semibold text-zinc-300 tracking-wide">${u("sidebar.settings")} · <span class="text-zinc-500 font-normal normal-case">${vt()}</span></span>
    ${yt(e)}
  `,$t())}function An(){v("btn-topbar-export","click",()=>ye()),v("btn-export-chevron","click",On),v("btn-sidebar-toggle","click",we),v("btn-sidebar-open","click",we),v("sidebar-overlay","click",we),v("btn-undo","click",()=>d.undo()),v("btn-redo","click",()=>d.redo()),v("btn-mockup-theme","click",()=>{const s=d.get("mockupTheme")==="light"?"dark":"light";d.set("mockupTheme",s)}),v("btn-view-mode","click",()=>{const s=d.get("viewMode")==="desktop"?"mobile":"desktop";d.set("viewMode",s)}),v("lang-btn","click",s=>{s.stopPropagation(),document.getElementById("lang-dropdown").classList.toggle("hidden")}),document.addEventListener("click",()=>{const s=document.getElementById("lang-dropdown");s&&!s.classList.contains("hidden")&&s.classList.add("hidden")}),document.querySelectorAll("[data-lang]").forEach(s=>{s.addEventListener("click",()=>{const n=s.dataset.lang;window.location.href=n==="en"?"/":`/${n}/`})}),v("btn-start-tour","click",()=>Je()),v("btn-template-save","click",Vn),v("zoom-slider","input",Fn),v("btn-zoom-in","click",()=>$e(10)),v("btn-zoom-out","click",()=>$e(-10)),v("btn-toolbar-pos","click",()=>{const s=d.get("_toolbarPos")==="right"?"bottom":"right";d.set("_toolbarPos",s)}),document.querySelectorAll("[data-chat-bg]").forEach(s=>{s.addEventListener("click",()=>d.set("chatBgGradient",s.dataset.chatBg))}),document.querySelectorAll("[data-app]").forEach(s=>{s.addEventListener("click",()=>{const n=pe.find(i=>i.id===s.dataset.app);n&&d.set("theme",n.theme)})}),document.querySelectorAll("[data-export-action]").forEach(s=>{s.addEventListener("click",n=>{const i=s.dataset.exportAction;Ke(),i==="png"?ye():i==="clipboard"?Gn():i==="share"&&Rn()})}),document.querySelectorAll("[data-tmpl-action]").forEach(s=>{s.addEventListener("click",n=>{var o;const i=s.dataset.tmplAction,r=(o=s.closest("[data-tmpl-name]"))==null?void 0:o.dataset.tmplName;r&&(i==="load"?d.loadTemplate(r):i==="delete"&&(d.deleteTemplate(r),_e()))})});const e=document.getElementById("app-library-toggle");e&&e.addEventListener("click",()=>{const s=document.getElementById("app-library-body"),n=document.getElementById("app-library-chevron");if(!s)return;const i=s.style.display==="none";s.style.display=i?"":"none",n&&(n.style.transform=i?"rotate(0deg)":"rotate(180deg)")}),document.addEventListener("click",s=>{const n=document.getElementById("export-dropdown-container");n&&!n.contains(s.target)&&Ke()}),document.addEventListener("keydown",s=>{const n=s.metaKey||s.ctrlKey;n&&s.key==="z"&&!s.shiftKey&&(s.preventDefault(),d.undo()),n&&s.key==="z"&&s.shiftKey&&(s.preventDefault(),d.redo()),n&&s.key==="e"&&(s.preventDefault(),ye())});const t=document.getElementById("canvas");t&&t.addEventListener("wheel",s=>{(s.ctrlKey||s.metaKey)&&(s.preventDefault(),$e(s.deltaY>0?-5:5))},{passive:!1}),$t()}function $t(){v("input-padding","input",e=>{d.set("padding",Number(e.target.value));const t=document.getElementById("padding-value");t&&(t.textContent=e.target.value)}),v("input-font","change",e=>d.set("fontFamily",e.target.value)),v("input-chatbg","change",async e=>{var s;const t=(s=e.target.files)==null?void 0:s[0];if(t&&t.type.startsWith("image/")&&!(t.size>5*1024*1024))try{const n=await new Promise((i,r)=>{const o=new FileReader;o.onload=()=>i(o.result),o.onerror=r,o.readAsDataURL(t)});d.set("chatBg",n)}catch{}}),v("input-message","input",e=>d.set("message",e.target.value)),v("input-avatar","change",async e=>{var s;const t=(s=e.target.files)==null?void 0:s[0];if(t&&t.type.startsWith("image/")&&!(t.size>5*1024*1024))try{const n=d.get("avatar"),i=await At(t);n&&n.startsWith("blob:")&&URL.revokeObjectURL(n),d.set("avatar",i)}catch{d.set("avatar",null)}}),["messenger","instagram","twitter","tiktok","social-post"].includes(w)?(v("input-author","input",e=>d.set("author",e.target.value)),v("input-handle","input",e=>d.set("handle",e.target.value))):w==="discord"?(v("input-username","input",e=>d.set("username",e.target.value)),v("input-rolecolor","input",e=>d.set("roleColor",e.target.value)),v("input-timestamp","input",e=>d.set("timestamp",e.target.value))):["whatsapp","telegram","signal","imessage"].includes(w)&&(v("input-username","input",e=>d.set("username",e.target.value)),v("input-statusText","input",e=>d.set("statusText",e.target.value)),v("input-statusBarTime","input",e=>d.set("statusBarTime",e.target.value)),v("input-imessageMode","change",e=>d.set("imessageMode",e.target.value)),v("input-statusBarBattery","input",e=>{d.set("statusBarBattery",Number(e.target.value)),P()}),v("input-statusBarSignal","input",e=>{d.set("statusBarSignal",Number(e.target.value)),P()}),v("input-statusBarWifi","change",e=>d.set("statusBarWifi",e.target.checked)),v("input-isGroup","change",e=>{d.set("isGroup",e.target.checked),Ae()}),_n())}function _n(){const e=document.getElementById("btn-add-message");e&&(e.onclick=()=>{const n=[...d.get("messages")];n.push({id:Date.now(),text:"",type:d.get("waMode")||"sent",time:""}),d.set("messages",n),j(d.getState())});const t=document.getElementById("wa-message-list");if(!t)return;t.addEventListener("input",n=>{const i=n.target,r=parseInt(i.dataset.msgIdx);if(!isNaN(r)){if(i.tagName==="TEXTAREA"){const o=[...d.get("messages")];o[r]&&(o[r]={...o[r],text:i.value}),d.set("messages",o)}else if(i.dataset.msgField==="time"){const o=[...d.get("messages")];o[r]&&(o[r]={...o[r],time:i.value}),d.set("messages",o)}else if(i.dataset.msgField==="senderName"){const o=[...d.get("messages")];o[r]&&(o[r]={...o[r],senderName:i.value}),d.set("messages",o)}}}),t.addEventListener("change",async n=>{var r;const i=n.target;if(i.dataset.msgField==="imageUpload"){const o=parseInt(i.dataset.msgIdx);if(isNaN(o))return;const a=(r=i.files)==null?void 0:r[0];if(!a)return;try{const l=await new Promise((f,x)=>{const g=new FileReader;g.onload=()=>f(g.result),g.onerror=x,g.readAsDataURL(a)}),c=[...d.get("messages")];c[o]&&(c[o]={...c[o],image:l}),d.set("messages",c),j(d.getState())}catch{}}}),t.addEventListener("click",n=>{const i=n.target.closest("[data-msg-type], [data-msg-status], [data-msg-action], [data-msg-reaction], [data-msg-reaction-clear], [data-msg-image-clear]");if(!i)return;const r=parseInt(i.dataset.msgIdx);if(!isNaN(r)){if(i.dataset.msgType){const o=[...d.get("messages")];o[r]&&(o[r]={...o[r],type:i.dataset.msgType}),d.set("messages",o),j(d.getState())}else if(i.dataset.msgStatus){const o=[...d.get("messages")];o[r]&&(o[r]={...o[r],status:i.dataset.msgStatus}),d.set("messages",o),j(d.getState())}else if(i.dataset.msgReaction){const o=[...d.get("messages")];o[r]&&(o[r]={...o[r],reactions:[i.dataset.msgReaction]}),d.set("messages",o),j(d.getState())}else if(i.dataset.msgReactionClear){const o=[...d.get("messages")];o[r]&&(o[r]={...o[r],reactions:[]}),d.set("messages",o),j(d.getState())}else if(i.dataset.msgImageClear){const o=[...d.get("messages")];o[r]&&(o[r]={...o[r],image:null}),d.set("messages",o),j(d.getState())}else if(i.dataset.msgAction==="delete"){const o=d.get("messages").filter((a,l)=>l!==r);d.set("messages",o),j(d.getState())}}});let s=null;t.addEventListener("dragstart",n=>{const i=n.target.closest("[draggable]");i&&(s=parseInt(i.dataset.msgIdx),i.style.opacity="0.4")}),t.addEventListener("dragend",n=>{const i=n.target.closest("[draggable]");i&&(i.style.opacity=""),s=null}),t.addEventListener("dragover",n=>{n.preventDefault();const i=n.target.closest("[draggable]");i&&(i.style.borderColor="rgba(255,255,255,0.3)")}),t.addEventListener("dragleave",n=>{const i=n.target.closest("[draggable]");i&&(i.style.borderColor="")}),t.addEventListener("drop",n=>{n.preventDefault();const i=n.target.closest("[draggable]");if(!i)return;i.style.borderColor="";const r=parseInt(i.dataset.msgIdx);if(s===null||s===r)return;const o=[...d.get("messages")],[a]=o.splice(s,1);o.splice(r,0,a),d.set("messages",o),j(d.getState())})}function j(e){const t=document.getElementById("wa-message-list");t&&(t.innerHTML=e.messages.map((s,n)=>wt(s,n)).join(""))}function P(){const e=mt[w];if(!e)return;const t=d.getState(),s=document.getElementById("mockup");s&&(s.innerHTML=e.render(t)),Me(t),requestAnimationFrame(oe)}function Hn(e,t,s){if(!be){be=!0;try{const n=mt[w];if(!n)return;if(e==="theme"){w=t;const i=zt();i&&d.mutate({author:i.author||"",handle:i.handle||"",username:i.username||i.author||"",message:i.message||"",timestamp:i.time||"",roleColor:i.roleColor||"#5865F2",messages:i.messages||[{id:1,text:i.message||"",type:d.get("waMode")||"sent",time:i.time||"",status:"read"}]}),P(),Ue(d.getState()),Pn(t),Pt()&&requestAnimationFrame(()=>Gt());return}if(e==="bgGradient"&&Me(s),e==="chatBgGradient"){Me(s);return}if(e==="viewMode"){const i=document.getElementById("btn-view-mode");i&&(i.innerHTML=t==="desktop"?b.mobile:b.desktop),P(),oe();return}if(e==="mockupTheme"){const i=document.getElementById("btn-mockup-theme");i&&(i.innerHTML=t==="light"?b.sun:b.moon),P();return}if(e==="fontFamily"||e==="chatBg"){P();return}if(e==="waMode")return;if(e==="_zoom"){Bt(t);return}if(e==="_toolbarPos"){Ln(t);return}if(e==="_undo"||e==="_redo"){P(),Ue(d.getState()),In();return}e==="avatar"&&_t(w==="discord"?"discord-avatar":w==="whatsapp"?"wa-avatar":"mockup-avatar"),n.sync(s)}finally{be=!1}}}function Pn(e){document.querySelectorAll("[data-app]").forEach(t=>{const s=pe.find(i=>i.id===t.dataset.app),n=s&&s.theme===e;t.className=`flex items-center gap-3 rounded-xl border p-2.5 transition-all text-left ${n?"border-white/15 bg-white/[8%]":"border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]"}`})}function Me(e){const t=document.getElementById("canvas");if(t){const n=Bn[e.bgGradient]||["#0f172a","#1e1b4b"],i="radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",r=`linear-gradient(135deg, ${n[0]}, ${n[1]})`;t.style.background=`${i}, ${r}`,t.style.backgroundSize="40px 40px, 100% 100%"}e.chatBgGradient?document.documentElement.style.setProperty("--chat-bg",e.chatBgGradient):document.documentElement.style.removeProperty("--chat-bg");const s=document.getElementById("mockup-card");s&&(e.chatBgGradient?s.style.setProperty("--chat-bg",e.chatBgGradient):s.style.removeProperty("--chat-bg"))}let ae=null;function Nn(){ae&&ae.disconnect();const e=document.getElementById("canvas");e&&(ae=new ResizeObserver(()=>{oe()}),ae.observe(e))}function oe(){if(Ce)return;const e=document.getElementById("canvas"),t=document.getElementById("mockup");if(!e||!t)return;const s=e.getBoundingClientRect(),n=document.getElementById("mockup-card");let i=390,r=844;n&&(i=parseInt(n.style.width)||n.offsetWidth||390,r=parseInt(n.style.height)||n.offsetHeight||844);const o=Math.min(s.width/i,s.height/r)*.8,l=1+(d.get("_zoom")||0)/100,c=o*l;t.style.transform=`translate(-50%, -50%) scale(${c})`}window.addEventListener("resize",oe);async function kt(e){const t=e.querySelectorAll("img"),s=[];for(const n of t)if(n.src&&n.src.startsWith("blob:")){s.push({img:n,src:n.src});try{const i=await new Promise((r,o)=>{const a=new Image;a.onload=()=>{const l=document.createElement("canvas");l.width=a.naturalWidth,l.height=a.naturalHeight;const c=l.getContext("2d");if(!c){o(new Error("Canvas 2D not supported"));return}c.drawImage(a,0,0),r(l.toDataURL("image/png"))},a.onerror=o,a.src=n.src});n.src=i}catch{n.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}}return()=>{s.forEach(({img:n,src:i})=>{n.src=i})}}async function ye(){const e=document.getElementById("btn-topbar-export"),t=document.getElementById("btn-export-icon"),s=document.getElementById("btn-export-label");if(!e||e.disabled)return;Ce=!0,e.disabled=!0,t&&(t.innerHTML=b.spinner),s&&(s.textContent=u("topbar.rendering"));const n=document.getElementById("mockup-card");if(!n){a();return}const i=n.style.transform,r=n.style.transformOrigin;n.style.transform="",n.style.transformOrigin="",await new Promise(l=>requestAnimationFrame(l));let o;try{o=await kt(n);const{toPng:l}=await qe(async()=>{const{toPng:m}=await import("./index-CgJtiJsK.js");return{toPng:m}},[]),c=await l(n,{pixelRatio:2});n.style.transform=i,n.style.transformOrigin=r;const f=new Date,x=`${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}_${String(f.getHours()).padStart(2,"0")}-${String(f.getMinutes()).padStart(2,"0")}-${String(f.getSeconds()).padStart(2,"0")}`,g=`koalasnap-${w}-${x}.png`,h=document.createElement("a");h.download=g,h.href=c,h.click(),t&&(t.innerHTML=b.check),s&&(s.textContent=u("topbar.exported")),e.classList.remove("bg-[#f97316]","hover:bg-[#ea580c]"),e.classList.add("bg-emerald-500","hover:bg-emerald-600"),setTimeout(a,2e3)}catch(l){n.style.transform=i,n.style.transformOrigin=r,console.error("Export failed:",(l==null?void 0:l.message)||l,(l==null?void 0:l.stack)||""),t&&(t.innerHTML=b.download),s&&(s.textContent=u("topbar.exportFailed")),e.disabled=!1,setTimeout(()=>{s&&(s.textContent=u("topbar.export")),t&&(t.innerHTML=b.download)},2e3)}finally{o&&o()}function a(){Ce=!1,e.disabled=!1,e.classList.remove("bg-emerald-500","hover:bg-emerald-600"),e.classList.add("bg-[#f97316]","hover:bg-[#ea580c]"),t&&(t.innerHTML=b.download),s&&(s.textContent=u("topbar.export"))}}function On(){const e=document.getElementById("export-dropdown");if(!e)return;const t=!e.classList.contains("hidden");e.classList.toggle("hidden",t)}function Ke(){const e=document.getElementById("export-dropdown");e&&e.classList.add("hidden")}async function Gn(){const e=document.getElementById("mockup-card");if(!e)return;const t=document.getElementById("btn-topbar-export"),s=document.getElementById("btn-export-icon"),n=document.getElementById("btn-export-label");t&&(t.disabled=!0),s&&(s.innerHTML=b.spinner),n&&(n.textContent=u("topbar.rendering"));const i=e.style.transform,r=e.style.transformOrigin;e.style.transform="",e.style.transformOrigin="";let o;try{o=await kt(e);const a=e.querySelectorAll('[style*="background-image"]'),l=[];a.forEach((x,g)=>{l[g]=x.style.backgroundImage,x.style.backgroundImage="none"}),await new Promise(x=>requestAnimationFrame(x));const{toBlob:c}=await qe(async()=>{const{toBlob:x}=await import("./index-CgJtiJsK.js");return{toBlob:x}},[]),f=await c(e,{pixelRatio:2});e.style.transform=i,e.style.transformOrigin=r,a.forEach((x,g)=>{x.style.backgroundImage=l[g]}),f&&(await navigator.clipboard.write([new ClipboardItem({"image/png":f})]),U(u("topbar.copied")))}catch(a){console.error("Clipboard copy failed:",a),U(u("topbar.exportFailed"))}finally{o&&o()}t&&(t.disabled=!1),s&&(s.innerHTML=b.download),n&&(n.textContent=u("topbar.export"))}function Rn(){const e=d.getShareUrl();if(!e){U(u("topbar.exportFailed"));return}try{navigator.clipboard.writeText(e),U(u("topbar.linkCopied"))}catch{U(u("topbar.exportFailed"))}}function U(e){const t=document.getElementById("toast");t&&t.remove();const s=document.createElement("div");s.id="toast",s.className="fixed bottom-28 left-1/2 -translate-x-1/2 z-50 rounded-full bg-zinc-800/90 backdrop-blur-xl border border-white/10 px-5 py-2.5 text-sm text-zinc-200 shadow-2xl shadow-black/30 animate-fade-in",s.textContent=e,document.body.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transition="opacity 0.3s",setTimeout(()=>s.remove(),300)},2e3)}function we(){const t=!d.getSidebarOpen();d.setSidebarOpen(t),Ae()}function $e(e){const t=d.get("_zoom")||0,s=Math.max(-50,Math.min(100,t+e));d.set("_zoom",s)}function Fn(e){const t=parseInt(e.target.value);d.set("_zoom",t)}function Bt(e){const t=document.getElementById("zoom-slider");t&&(t.value=e);const s=document.getElementById("zoom-label");s&&(s.textContent=e>0?`+${e}%`:`${e}%`),oe()}function _e(){const e=document.getElementById("templates-section");if(!e||!document.getElementById("sidebar"))return;const s=document.createElement("div");s.innerHTML=bt(),e.replaceWith(s.firstElementChild),document.querySelectorAll("[data-tmpl-action]").forEach(n=>{n.addEventListener("click",i=>{var a;const r=n.dataset.tmplAction,o=(a=n.closest("[data-tmpl-name]"))==null?void 0:a.dataset.tmplName;o&&(r==="load"?d.loadTemplate(o):r==="delete"&&(d.deleteTemplate(o),_e()))})})}function Vn(){const e=document.getElementById("input-template-name");if(!e||!e.value.trim())return;const t=e.value.trim();d.saveTemplate(t),e.value="",_e(),U(u("templates.saved"))}function v(e,t,s){var n;(n=document.getElementById(e))==null||n.addEventListener(t,s)}function zt(){var r,o;const e=[{author:"Maya",handle:"@maya_99",username:"Maya",message:"Hey, are you coming online tonight?",time:"7:18 PM",roleColor:"#e81224",messages:[{text:"Hey, are you coming online tonight?",type:"sent",time:"7:18 PM"},{text:"Yeah, give me 5!",type:"received",time:"7:20 PM"},{text:"Sure, take your time 🐨",type:"sent",time:"7:21 PM"}]}],t=window.__LOCALE__,s=t!=null&&t.dummySets&&t.dummySets.length>0?t.dummySets:e,n=s[Math.floor(Math.random()*s.length)],i=n.messages&&n.messages.length>0?n.messages.map((a,l)=>({id:l+1,text:a.text,type:a.type,time:a.time,status:a.status||"read"})):[{id:1,text:n.message||"",type:d.get("waMode")||"sent",time:n.time||"",status:"read"}];return{author:n.author||"",handle:n.handle||"",username:n.username||n.author||"",message:n.message||((r=i[0])==null?void 0:r.text)||"",time:n.time||((o=i[0])==null?void 0:o.time)||"",roleColor:n.roleColor||"#5865F2",messages:i}}d.subscribe(Hn);try{const e=localStorage.getItem("koalasnap_state"),t=Te();let s=!e;if(e)try{const n=JSON.parse(e);(!n.locale||n.locale!==t)&&(s=!0)}catch{s=!0}if(s){const n=zt();n&&d.mutate({...n,locale:t})}}catch{}Ae();"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).catch(()=>{});Ht()||setTimeout(()=>Je(),800);
