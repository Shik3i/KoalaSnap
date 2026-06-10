(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const nt="modulepreload",it=function(e){return"/"+e},be={},Me=function(n,t,i){let s=Promise.resolve();if(t&&t.length>0){let a=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),p=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(t.map(c=>{if(c=it(c),c in be)return;be[c]=!0;const u=c.endsWith(".css"),x=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${x}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":nt,u||(g.as="script"),g.crossOrigin="",g.href=c,p&&g.setAttribute("nonce",p),document.head.appendChild(g),u)return new Promise((h,b)=>{g.addEventListener("load",h),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return n().catch(r)})},de="koalasnap_state",N="koalasnap_templates",we="koalasnap_sidebar",J=3,ye={bgGradient:"from-sky-400 to-indigo-600"},ke={1:e=>(e.bgGradient===ye.bgGradient&&(e.bgGradient="from-slate-900 to-indigo-950"),e),2:e=>(e.bgGradient===ye.bgGradient&&(e.bgGradient="from-slate-900 to-indigo-950"),e)};function st(e){try{const n=localStorage.getItem(de);if(n){const t=JSON.parse(n);t.bgGradient==="from-sky-400 to-indigo-600"&&(t.bgGradient="from-slate-900 to-indigo-950");const i=t._version||1;if(i<J){for(let a=i;a<J;a++)ke[a]&&ke[a](t);t._version=J;const{avatar:s,...r}=t;localStorage.setItem(de,JSON.stringify(r))}return{...e,...t}}}catch{}return{...e}}function P(e){try{const{avatar:n,...t}=e;localStorage.setItem(de,JSON.stringify(t))}catch{}}function at(){try{const n=new URLSearchParams(window.location.search).get("state");if(!n)return null;const t=atob(n),i=Uint8Array.from(t,a=>a.charCodeAt(0)),s=new TextDecoder().decode(i),r=JSON.parse(s);if(r&&typeof r=="object")return r}catch{}return null}function rt(e){const n=at(),t=n?{...e,...n}:st(e),i=new Set,s=[],r=[],a=50;let l=!1;function p(){l||(s.push(JSON.parse(JSON.stringify(t))),s.length>a&&s.shift(),r.length=0)}return{get(c){return t[c]},getState(){return{...t}},set(c,u){p(),t[c]=u,P(t),i.forEach(x=>x(c,u,t))},setAll(c){p(),Object.assign(t,c),P(t),i.forEach(u=>u(null,null,t))},mutate(c){p(),Object.assign(t,c),P(t),i.forEach(u=>u(null,null,t))},subscribe(c){return i.add(c),()=>i.delete(c)},reset(){p(),Object.assign(t,e),P(t),i.forEach(c=>c(null,null,t))},undo(){if(s.length===0)return;r.push(JSON.parse(JSON.stringify(t)));const c=s.pop();Object.assign(t,c),P(t),i.forEach(u=>u("_undo",null,t))},redo(){if(r.length===0)return;s.push(JSON.parse(JSON.stringify(t)));const c=r.pop();Object.assign(t,c),P(t),i.forEach(u=>u("_redo",null,t))},canUndo(){return s.length>0},canRedo(){return r.length>0},pauseHistory(){l=!0},resumeHistory(){l=!1},saveTemplate(c){try{const u=JSON.parse(localStorage.getItem(N)||"{}"),{avatar:x,...g}=t;return u[c]=g,localStorage.setItem(N,JSON.stringify(u)),!0}catch{return!1}},deleteTemplate(c){try{const u=JSON.parse(localStorage.getItem(N)||"{}");return delete u[c],localStorage.setItem(N,JSON.stringify(u)),!0}catch{return!1}},loadTemplate(c){try{const x=JSON.parse(localStorage.getItem(N)||"{}")[c];return x?(this.mutate(x),!0):!1}catch{return!1}},listTemplates(){try{return Object.keys(JSON.parse(localStorage.getItem(N)||"{}"))}catch{return[]}},getSidebarOpen(){return localStorage.getItem(we)!=="false"},setSidebarOpen(c){localStorage.setItem(we,String(c))},getShareUrl(){try{const{avatar:c,...u}=t,x=JSON.stringify(u),g=new TextEncoder().encode(x),h=String.fromCharCode(...g),b=btoa(h),y=new URL(window.location.href.split("?")[0].split("#")[0]);return y.searchParams.set("state",b),y.toString()}catch{return null}}}}const ot={_version:J,theme:"whatsapp",author:"Maya",handle:"@maya_99",username:"Maya",roleColor:"#e81224",timestamp:"7:18 PM",statusBarTime:"09:41",statusText:"online",imessageMode:"imessage",statusBarBattery:100,statusBarSignal:4,statusBarWifi:!0,isGroup:!1,message:"Hey, are you coming online tonight?",avatar:null,bgGradient:"from-slate-900 to-indigo-950",padding:48,mockupTheme:"light",waMode:"sent",locale:"en",fontFamily:"system-ui",chatBg:null,chatBgGradient:"",messages:[{id:1,text:"Hey, are you coming online tonight?",type:"sent",time:"7:18 PM",status:"read"},{id:2,text:"Yeah, give me 5!",type:"received",time:"7:20 PM",status:"read"},{id:3,text:"Sure, take your time 🐨",type:"sent",time:"7:21 PM",status:"delivered"}]},o=rt(ot),lt=window.__LOCALE__||{};function d(e){return e.split(".").reduce((t,i)=>t!=null?t[i]:void 0,lt)??e}function ue(){const e=window.location.pathname.match(/^\/([a-z]{2})\//);return e?e[1]:"en"}function f(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}const K=500,ct=.8;function dt(e){return new Promise((n,t)=>{const i=new FileReader;i.onerror=()=>t(new Error("File read failed")),i.onload=s=>{const r=new Image;r.onerror=()=>t(new Error("Image decode failed")),r.onload=()=>{let{width:a,height:l}=r;if(a>K||l>K){const u=Math.min(K/a,K/l);a=Math.round(a*u),l=Math.round(l*u)}const p=document.createElement("canvas");p.width=a,p.height=l;const c=p.getContext("2d");if(!c){t(new Error("Canvas 2D not supported"));return}c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(r,0,0,a,l),p.toBlob(u=>{if(!u){t(new Error("WebP encoding failed"));return}n(URL.createObjectURL(u))},"image/webp",ct)},r.src=s.target.result},i.readAsDataURL(e)})}function pt(e){const n=document.getElementById(e);n instanceof HTMLImageElement&&(n.src="")}const Le="koalasnap_tutorial_completed",R=[{target:"app-library",key:"tutorial.step1"},{target:"settings-panel",key:"tutorial.step2"},{target:"canvas-area",key:"tutorial.step3"},{target:"bottom-bar",key:"tutorial.step4"},{target:"btn-topbar-export",key:"tutorial.step5"}];let k=0,D=!1,$=null;function ut(){return localStorage.getItem(Le)==="true"}function gt(){return D}function Ie(){D&&U(),k=0,D=!0;const e=mt();e.classList.remove("hidden"),e.style.pointerEvents="auto",Q(0),document.addEventListener("keydown",je)}function je(e){e.key==="Escape"&&U()}function U(){D=!1,$&&(clearTimeout($),$=null),ee(k);const e=document.getElementById("tutorial-overlay");e&&(e.classList.add("hidden"),e.style.pointerEvents=""),localStorage.setItem(Le,"true"),document.removeEventListener("keydown",je)}function ft(){if(ee(k),k++,k>=R.length){U();return}Q(k)}function ht(){ee(k),k=Math.max(0,k-1),Q(k)}function xt(){D&&(ee(k),Q(k))}function mt(){let e=document.getElementById("tutorial-overlay");return e||(e=document.createElement("div"),e.id="tutorial-overlay",e.className="fixed inset-0 bg-black/60 z-40 hidden",document.body.appendChild(e)),e}function Q(e){$&&(clearTimeout($),$=null);const n=R[e];if(!n)return;const t=document.getElementById(n.target);if(!t)return;t.classList.add("tutorial-highlight"),t.style.zIndex="50",getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.scrollIntoView({behavior:"smooth",block:"center"});const i=t.getBoundingClientRect();$=setTimeout(()=>{vt(e,i),$=null},400)}function ee(e){$&&(clearTimeout($),$=null);const n=R[e];if(!n)return;const t=document.getElementById(n.target);t&&(t.classList.remove("tutorial-highlight"),t.style.zIndex="",t.style.position="");const i=document.getElementById("tutorial-tooltip");i&&i.remove()}function vt(e,n){const t=document.getElementById("tutorial-tooltip");t&&t.remove();const i=R.length,s=e===0,r=e===i-1,a=document.createElement("div");a.id="tutorial-tooltip",a.className="fixed z-50 w-[320px] rounded-2xl border border-white/[10%] bg-[#1a1714]/95 backdrop-blur-2xl p-4 shadow-2xl shadow-black/50 opacity-0 transition-opacity duration-200",a.innerHTML=`
    <p class="text-sm text-zinc-200 leading-relaxed mb-4">${d(bt(e))}</p>
    <div class="flex items-center justify-between">
      <span class="text-xs text-zinc-500">${e+1} ${d("tutorial.of")} ${i}</span>
      <div class="flex items-center gap-2">
        ${s?"":`<button id="tut-prev" class="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all">${d("tutorial.back")}</button>`}
        <button id="tut-next" class="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#f97316] hover:bg-[#ea580c] active:scale-[0.97] transition-all">${d(r?"tutorial.done":"tutorial.next")}</button>
      </div>
    </div>
    <button id="tut-skip" class="mt-2 text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors">${d("tutorial.skip")}</button>
  `,document.body.appendChild(a),wt(a,n),requestAnimationFrame(()=>{a.classList.remove("opacity-0")}),yt(e)}function bt(e){var n;return((n=R[e])==null?void 0:n.key)||""}function wt(e,n){const s=e.offsetWidth||320,r=e.offsetHeight||160,a=window.innerWidth-s-16,l=window.innerHeight-r-16,p=n.left+n.width/2;let c=Math.max(16,Math.min(p-s/2,a)),u=n.bottom+12;u+r>window.innerHeight-16&&(u=n.top-r-12),u<16&&(u=16,c=Math.min(n.right+12,a),c=Math.max(16,c)),c=Math.max(16,Math.min(c,a)),u=Math.max(16,Math.min(u,l)),e.style.left=`${c}px`,e.style.top=`${u}px`}function yt(e){const n=document.getElementById("tut-next");n&&(n.onclick=()=>e===R.length-1?U():ft());const t=document.getElementById("tut-prev");t&&(t.onclick=()=>ht());const i=document.getElementById("tut-skip");i&&(i.onclick=()=>U())}const _e="?",ge='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',kt='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',fe='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',he='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',$t='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>';function xe(e,n){return e?`<img id="mockup-avatar" src="${e}" class="w-full h-full rounded-full object-cover" />`:`<div id="mockup-avatar" class="w-full h-full rounded-full bg-gradient-to-br ${n?"from-zinc-600 to-zinc-800":"from-sky-400 to-indigo-500"} flex items-center justify-center text-white text-sm font-bold">${_e}</div>`}function Bt(e,n){const t=n?"bg-zinc-900":"bg-white",i=n?"text-zinc-100":"text-zinc-900",s=n?"text-zinc-400":"text-zinc-500",r=n?"text-zinc-300":"text-zinc-800",a=n?"border-zinc-700":"border-zinc-200";return`
    <div id="mockup-card" class="${t} rounded-2xl shadow-2xl shadow-black/20 mx-auto overflow-hidden ring-1 ring-white/[6%] p-3" style="width:400px; height:520px;font-family:${e.fontFamily};">
      <div class="flex items-start gap-3">
        <div class="w-11 h-11 rounded-full shrink-0 overflow-hidden">
          ${xe(e.avatar,n)}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1">
            <span id="mockup-author" class="text-[15px] font-bold ${i} leading-tight truncate">${f(e.author)}</span>
            <span class="text-[13px] ${s}">@${f(e.handle)}</span>
            <span class="text-[13px] ${s}">· 1h</span>
          </div>
        </div>
      </div>
      <p id="mockup-message" class="mt-2 text-[15px] ${r} leading-relaxed whitespace-pre-wrap break-words">${f(e.message)}</p>
      <div class="mt-2 h-48 rounded-xl ${n?"bg-zinc-800":"bg-zinc-100"} flex items-center justify-center ${s} text-sm">📷</div>
      <div class="flex items-center justify-between mt-2 pt-2 ${a} border-t text-sm ${s}">
        <div class="flex items-center gap-5">
          <span class="flex items-center gap-1">${fe} <span id="mockup-replies">1</span></span>
          <span class="flex items-center gap-1">${kt} <span id="mockup-retweets">3</span></span>
          <span class="flex items-center gap-1">${ge} <span id="mockup-likes">12</span></span>
        </div>
        <span>${he}</span>
      </div>
    </div>
  `}function zt(e,n){const t=n?"bg-black":"bg-white",i=n?"text-white":"text-zinc-900",s=n?"text-zinc-400":"text-zinc-500";return`
    <div id="mockup-card" class="${t} rounded-2xl shadow-2xl shadow-black/20 mx-auto overflow-hidden ring-1 ring-white/[6%]" style="width:400px; height:600px;font-family:${e.fontFamily};">
      <div class="flex items-center gap-3 px-3 py-2.5">
        <div class="w-8 h-8 rounded-full shrink-0 overflow-hidden">
          ${xe(e.avatar,n)}
        </div>
        <div class="flex-1 min-w-0">
          <span id="mockup-author" class="text-[13px] font-semibold ${i} leading-tight truncate">${f(e.author)}</span>
        </div>
        <span class="${s}">${$t}</span>
      </div>
      <div class="w-full h-72 ${n?"bg-zinc-800":"bg-zinc-100"} flex items-center justify-center ${s} text-sm">📷</div>
      <div class="px-3 pt-2 pb-3">
        <div class="flex items-center gap-3 text-xl ${i}">
          <span>${ge}</span>
          <span>${fe}</span>
          <span class="ml-auto">${he}</span>
        </div>
        <p class="mt-1 text-[13px] font-semibold ${i}"><span id="mockup-likes">142</span> likes</p>
        <p class="mt-1 text-[13px] ${i}"><span class="font-semibold">${f(e.author)}</span> <span id="mockup-message" class="${i}">${f(e.message)}</span></p>
        <p class="mt-1 text-[13px] ${s}">View all 3 comments</p>
        <p class="mt-0.5 text-[11px] ${s} uppercase tracking-wider">1 hour ago</p>
      </div>
    </div>
  `}function Ct(e,n){const t=n?"#1a1a2e":"#f0f2f5",i=n?"#1c1c2e":"#007aff";return`
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
          <span id="mockup-author" class="text-[15px] font-medium">${f(e.author)}</span>
        </div>
        <div class="flex-1 p-3 overflow-y-auto flex flex-col gap-3" style="background:var(--chat-bg, ${t})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
          <div class="flex justify-end">
            <div class="max-w-[75%] rounded-2xl px-3.5 py-2" style="background:#007aff">
              <p id="mockup-message" class="text-white text-[15px]/[1.4] whitespace-pre-wrap break-words">${f(e.message)}</p>
              <div class="flex items-center justify-end gap-1 mt-0.5">
                <span class="text-[11px] text-[#ffffffcc]">${f(e.timestamp)}</span>
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
  `}function Et(e,n){const t="text-white";return`
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
                <p class="text-[14px] font-bold ${t}"><span id="mockup-author">${f(e.author)}</span> <span class="font-normal text-zinc-300">@${f(e.handle)}</span></p>
                <p id="mockup-message" class="mt-1 text-[13px] ${t} leading-relaxed whitespace-pre-wrap">${f(e.message)}</p>
              </div>
              <div class="flex flex-col items-center gap-3 shrink-0">
                <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50">
                  ${xe(e.avatar,!1)}
                </div>
                <div class="flex flex-col items-center gap-4 text-white text-xs">
                  <div class="flex flex-col items-center gap-0.5">${ge}<span id="mockup-likes" class="text-[10px]">12.4k</span></div>
                  <div class="flex flex-col items-center gap-0.5">${fe}<span id="mockup-replies" class="text-[10px]">241</span></div>
                  <div class="flex flex-col items-center gap-0.5">${he}<span class="text-[10px]">Share</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function V(e){const n=e.mockupTheme==="dark";switch(e.theme||"twitter"){case"instagram":return zt(e,n);case"messenger":return Ct(e,n);case"tiktok":return Et(e,n);case"twitter":default:return Bt(e,n)}}function W(e){const n=e.theme||"twitter";A("mockup-author",t=>{t&&(t.textContent=e.author)}),A("mockup-message",t=>{t&&(t.textContent=e.message)}),A("mockup-likes",t=>{t&&(t.textContent="142")}),A("mockup-replies",t=>{t&&(t.textContent="1")}),A("mockup-retweets",t=>{t&&(t.textContent="3")}),n==="messenger"?A("mockup-avatar",t=>{t&&$e(t,e,!1)}):A("mockup-avatar",t=>{t&&$e(t,e,e.mockupTheme==="dark")})}function $e(e,n,t){if(n.avatar){const i=document.createElement("img");i.id="mockup-avatar",i.src=n.avatar,i.className="w-full h-full rounded-full object-cover",i.alt="",e.replaceWith(i)}else{const i=document.createElement("div");i.id="mockup-avatar";const s=t?"from-zinc-600 to-zinc-800":"from-sky-400 to-indigo-500";i.className=`w-full h-full rounded-full bg-gradient-to-br ${s} flex items-center justify-center text-white text-sm font-bold`,i.textContent=_e,e.replaceWith(i)}}function A(e,n){const t=document.getElementById(e);t&&n(t)}const St='<svg width="20" height="20" viewBox="0 0 24 24" fill="#949ba4"><path d="M5 9h14M5 15h14M11 3L9 21M15 3l-2 18"/></svg>',Tt='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#949ba4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/></svg>',Mt='<svg width="16" height="16" viewBox="0 0 24 24" fill="#949ba4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',Lt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5bac1" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',It='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5bac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',jt=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.02'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.015'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.02'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.015'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.02'/%3E%3C/svg%3E")`,_t={sidebarBg:"#2b2d31",chatBg:"#313338",inputBg:"#383a40",inputText:"#dbdee1",placeholder:"#949ba4",divider:"#3f4147",dotPattern:"none"},At={sidebarBg:"#1e1f22",chatBg:"#313338",inputBg:"#383a40",inputText:"#dbdee1",placeholder:"#949ba4",divider:"#3f4147",dotPattern:jt};function Ht(e){return e.mockupTheme==="light"?_t:At}function Ot(e){const n=Ht(e),t=e.avatar?`<img id="discord-avatar" src="${e.avatar}" class="w-10 h-10 rounded-full object-cover" />`:'<div id="discord-avatar" class="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold">?</div>';return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:#1e1f22;background:#1e1f22">
        <div class="flex items-center gap-0 h-12 shrink-0 px-4" style="background:${n.sidebarBg}">
          <div class="flex items-center gap-2 flex-1 min-w-0">
            ${St}
            <span class="text-white text-[15px] font-semibold leading-tight truncate">general</span>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${Tt}
            <span>${Mt}</span>
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
                    style="color: ${e.roleColor}">${f(e.username)}</span>
                  <span id="discord-timestamp" class="text-[#949ba4] text-xs leading-tight shrink-0">${f(e.timestamp)}</span>
                </div>
                <div id="discord-message"
                  class="text-[#dbdee1] text-[16px]/[1.4] mt-0.5 whitespace-pre-wrap break-words">${f(e.message)}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="shrink-0 px-4 py-3" style="background:var(--chat-bg, ${n.chatBg})">
          <div class="flex items-center gap-2 rounded-lg px-4 py-2.5" style="background:${n.inputBg}">
            <span>${Lt}</span>
            <span class="flex-1 text-[15px]" style="color:${n.placeholder}">Message #general</span>
            <span>${It}</span>
          </div>
        </div>
      </div>
    </div>
  `}function Nt(e){ie("discord-username",t=>{t.textContent=e.username,t.style.color=e.roleColor}),ie("discord-timestamp",t=>{t.textContent=e.timestamp}),ie("discord-message",t=>{t.textContent=e.message});const n=document.getElementById("discord-avatar");if(n)if(e.avatar){const t=document.createElement("img");t.id="discord-avatar",t.src=e.avatar,t.className="w-10 h-10 rounded-full object-cover",t.alt="",n.replaceWith(t)}else{const t=document.createElement("div");t.id="discord-avatar",t.className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold",t.textContent="?",n.replaceWith(t)}}function ie(e,n){const t=document.getElementById(e);t&&n(t)}const Pt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',Gt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',Rt='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',Ft='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',Vt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',Wt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',Dt='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',Ut='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>',Kt='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>',qt='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',Jt='<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>',Yt={barBg:"#008069",chatBg:"#efeae2",sentBg:"#d9fdd3",recvBg:"#ffffff",sentText:"#111b21",recvText:"#111b21",timeText:"#667781",inputBg:"#f0f2f5",fieldBg:"#ffffff",fieldText:"#111b21",placeholder:"#8696a0"},Xt={barBg:"#202c33",chatBg:"#0b141a",sentBg:"#005c4b",recvBg:"#202c33",sentText:"#e9edef",recvText:"#e9edef",timeText:"#ffffff8c",inputBg:"#202c33",fieldBg:"#2a3942",fieldText:"#e9edef",placeholder:"#8696a0"};function Y(e){return e.mockupTheme==="light"?Yt:Xt}function Zt(e){return`<svg width="24" height="12" viewBox="0 0 26 12" fill="none" class="opacity-90"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="${Math.max(1,Math.min(19.5,e/100*19.5))}" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`}function Qt(e){const n=e>=1?"1":"0.3",t=e>=2?"1":"0.3",i=e>=3?"1":"0.3",s=e>=4?"1":"0.3";return`<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor" opacity="${n}"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor" opacity="${t}"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor" opacity="${i}"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor" opacity="${s}"/></svg>`}function en(e){const n=Y(e),t=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${t};background:${t}">
        ${Ae(e,n)}
        ${tn(e,n)}
        ${nn(e,n)}
        ${sn(n)}
      </div>
    </div>
  `}function Ae(e,n){const t=e.statusBarWifi!==!1?`<span class="text-[11px]">${Ft}</span>`:"",i=Qt(e.statusBarSignal||4),s=Zt(e.statusBarBattery!==void 0?e.statusBarBattery:100);return`
    <div id="wa-statusbar" class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${n.barBg}">
      <span id="wa-statusbar-time" class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">${f(e.statusBarTime||"09:41")}</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${i}</span>
        ${t}
        <span class="text-[11px]">${s}</span>
      </div>
    </div>
  `}function tn(e,n){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${n.barBg}">
      <span class="shrink-0">${Pt}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="wa-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="wa-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="wa-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${f(e.username)}</div>
        <div id="wa-status-text" class="text-[#aebac1] text-[11px] leading-tight">${f(e.statusText||"online")}</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${Gt}
        ${Rt}
      </div>
    </div>
  `}function nn(e,n){const t=e.chatBg?`url(${e.chatBg})`:e.mockupTheme==="light"?"url(/whatsapp-bg-light.png)":"linear-gradient(rgba(11, 20, 26, 0.94), rgba(11, 20, 26, 0.94)), url(/whatsapp-bg-dark.png)",i=e.chatBg?"cover":"360px",s=e.chatBg?"no-repeat":"repeat";return`
    <div id="wa-chat-container" class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${n.chatBg});background-image:${t};background-size:${i};background-repeat:${s}">
      <div id="wa-messages" class="flex flex-col gap-0.5 relative">
        ${e.messages.map((r,a)=>He(r,a,e,n)).join("")}
      </div>
    </div>
  `}function He(e,n,t,i){var I,_;const s=e.type==="sent",r=n>0?t.messages[n-1]:null,a=!r||r.type!==e.type,l=s?i.sentBg:i.recvBg,p=s?i.sentText:i.recvText,c=s?"justify-end":"justify-start",u=e.status||"read";let x="",g="rounded-[7.5px]",h="pl-[9px] pr-[9px] py-[6px]",b=a?"mt-2.5":"mt-[2px]";const y=["#007acc","#00bfa5","#ff9f00","#d32f2f","#7b1fa2","#388e3c"],z=(e.senderName||"").split("").reduce((F,ne)=>F+ne.charCodeAt(0),0)%y.length,j=y[z],S=t.isGroup&&!s&&a&&e.senderName?`
    <div class="text-[11.5px] font-semibold mb-0.5 leading-tight select-none" style="color:${j}">
      ${f(e.senderName)}
    </div>
  `:"";a&&(s?(g="rounded-[7.5px] rounded-tr-none",h="pl-[9px] pr-[12px] py-[6px]",x=`<span class="absolute top-0 -right-[8px] w-[8px] h-[13px]" style="color:${l}">
        <svg viewBox="0 0 8 13" width="8" height="13">
          <path fill="currentColor" d="M6.467 3.568L0 12.193V1h5.188c1.77 0 2.338 1.156 1.279 2.568z"/>
        </svg>
      </span>`):(g="rounded-[7.5px] rounded-tl-none",h="pl-[12px] pr-[9px] py-[6px]",x=`<span class="absolute top-0 -left-[8px] w-[8px] h-[13px]" style="color:${l}">
        <svg viewBox="0 0 8 13" width="8" height="13">
          <path fill="currentColor" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"/>
        </svg>
      </span>`));const T=(I=e.reactions)!=null&&I[0]?`
    <div class="absolute -bottom-[8px] right-[12px] flex items-center justify-center bg-white dark:bg-[#202c33] border border-[#e9edef] dark:border-[#3b4a54] rounded-full px-1.5 py-[2px] shadow-[0_1.5px_2px_rgba(0,0,0,0.15)] select-none z-10 scale-[0.88] origin-bottom-right">
      <span class="text-[11px] leading-none">${e.reactions[0]}</span>
    </div>
  `:"";(_=e.reactions)!=null&&_[0]&&(h+=" pb-[11px]");const M=e.image?`<img src="${e.image}" class="w-full max-w-[280px] rounded-lg mb-1 object-cover shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" style="max-height: 200px" />`:"";let B="";s&&(u==="read"?B=Ut:u==="delivered"?B=Kt:u==="sent"&&(B=qt));const O=u==="unread",L=O?"font-semibold":"",C=O?`<span class="inline-flex ml-1 -mb-0.5">${Jt}</span>`:"";return`
    <div class="flex ${c} ${b} relative">
      <div class="relative max-w-[85%]">
        <div class="${g} ${h} shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]" style="background:${l}">
          ${S}
          ${M}
          ${e.text?`<p class="text-[14.2px]/[1.4] whitespace-pre-wrap break-words ${L}" style="color:${p}">${f(e.text)}</p>`:""}
          <div class="flex items-center justify-end gap-1 mt-0.5 select-none">
            <span class="text-[10px] leading-none" style="color:${i.timeText}">${f(e.time)}</span>
            ${B?`<span class="inline-flex -mb-0.5">${B}</span>`:""}
            ${C}
          </div>
        </div>
        ${x}
        ${T}
      </div>
    </div>
  `}function sn(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${Vt}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.placeholder}">Message</div>
      <span>${Wt}</span>
      <span>${Dt}</span>
    </div>
  `}function an(e){const n=Y(e),t=document.getElementById("wa-statusbar");t&&(t.outerHTML=Ae(e,n)),se("wa-contact-name",a=>{a.textContent=e.username}),se("wa-status-text",a=>{a.textContent=e.statusText||"online"}),se("wa-statusbar-time",a=>{a.textContent=e.statusBarTime||"09:41"});const i=document.getElementById("wa-avatar");if(i)if(e.avatar){const a=document.createElement("img");a.id="wa-avatar",a.src=e.avatar,a.className="w-full h-full rounded-full object-cover",a.alt="",i.replaceWith(a)}else{const a=document.createElement("div");a.id="wa-avatar",a.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",a.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',i.replaceWith(a)}const s=document.getElementById("wa-messages");if(s){const a=Y(e);s.innerHTML=e.messages.map((l,p)=>He(l,p,e,a)).join("")}const r=document.getElementById("wa-chat-container");if(r){const a=Y(e),l=e.chatBg?`url(${e.chatBg})`:e.mockupTheme==="light"?"url(/whatsapp-bg-light.png)":"linear-gradient(rgba(11, 20, 26, 0.94), rgba(11, 20, 26, 0.94)), url(/whatsapp-bg-dark.png)",p=e.chatBg?"cover":"360px",c=e.chatBg?"no-repeat":"repeat";r.style.background=`var(--chat-bg, ${a.chatBg})`,r.style.backgroundImage=l,r.style.backgroundSize=p,r.style.backgroundRepeat=c}}function se(e,n){const t=document.getElementById(e);t&&n(t)}const rn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',on='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',ln='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',cn='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',dn='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',pn='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',un='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffd0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#ffffffd0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/></svg>',gn='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffd0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',fn=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='white' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='white' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='white' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='white' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='white' opacity='0.03'/%3E%3C/svg%3E")`,hn=`url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='100' cy='60' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='170' cy='30' r='1' fill='black' opacity='0.04'/%3E%3Ccircle cx='50' cy='120' r='1.5' fill='black' opacity='0.03'/%3E%3Ccircle cx='150' cy='150' r='2' fill='black' opacity='0.04'/%3E%3Ccircle cx='80' cy='180' r='1' fill='black' opacity='0.03'/%3E%3Ccircle cx='20' cy='170' r='1.5' fill='black' opacity='0.03'/%3E%3C/svg%3E")`,xn={barBg:"#4e8ad4",chatBg:"#eef2f6",sentBg:"#8774e1",recvBg:"#ffffff",sentText:"#ffffff",recvText:"#000000",timeText:"#00000080",sentTimeText:"#ffffffb3",inputBg:"#ffffff",fieldBg:"#eef2f6",dotPattern:hn},mn={barBg:"#2f6ea5",chatBg:"#0f0f0f",sentBg:"#8774e1",recvBg:"#181818",sentText:"#ffffff",recvText:"#ffffff",timeText:"#ffffff8c",sentTimeText:"#ffffffb3",inputBg:"#1c1c1e",fieldBg:"#2a2a2e",dotPattern:fn};function X(e){return e.mockupTheme==="light"?xn:mn}function vn(e){return`<svg width="24" height="12" viewBox="0 0 26 12" fill="none" class="opacity-90"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="${Math.max(1,Math.min(19.5,e/100*19.5))}" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`}function bn(e){const n=e>=1?"1":"0.3",t=e>=2?"1":"0.3",i=e>=3?"1":"0.3",s=e>=4?"1":"0.3";return`<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor" opacity="${n}"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor" opacity="${t}"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor" opacity="${i}"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor" opacity="${s}"/></svg>`}function wn(e){const n=X(e),t=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${t};background:${t}">
        ${Oe(e,n)}
        ${yn(e,n)}
        ${kn(e,n)}
        ${$n(n)}
      </div>
    </div>
  `}function Oe(e,n){const t=e.statusBarWifi!==!1?`<span class="text-[11px]">${pn}</span>`:"",i=bn(e.statusBarSignal||4),s=vn(e.statusBarBattery!==void 0?e.statusBarBattery:100);return`
    <div id="tg-statusbar" class="flex items-center justify-between px-6 h-[44px] shrink-0" style="background:${n.barBg};color:#e9edef">
      <span id="tg-statusbar-time" class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">${f(e.statusBarTime||"09:41")}</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${i}</span>
        ${t}
        <span class="text-[11px]">${s}</span>
      </div>
    </div>
  `}function yn(e,n){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${n.barBg}">
      <span class="shrink-0">${rn}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="tg-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="tg-avatar" class="w-full h-full rounded-full bg-[#527da3] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#e9edef"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="tg-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${f(e.username)}</div>
        <div id="tg-status-text" class="text-[#ffffffcc] text-[11px] leading-tight">${f(e.statusText||"online")}</div>
      </div>
      <div class="shrink-0">${on}</div>
    </div>
  `}function kn(e,n){return`
    <div id="tg-chat-container" class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${n.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:`;background-image:${n.dotPattern}`}">
      <div id="tg-messages" class="flex flex-col gap-0.5">
        ${e.messages.map((t,i)=>Ne(t,i,e,n)).join("")}
      </div>
    </div>
  `}function Ne(e,n,t,i){var I,_;const s=e.type==="sent",r=n<t.messages.length-1?t.messages[n+1]:null,a=n>0?t.messages[n-1]:null,l=!a||a.type!==e.type,p=!r||r.type!==e.type,c=s?i.sentBg:i.recvBg,u=s?i.sentText:i.recvText,x=s?i.sentTimeText:i.timeText,g=s?"justify-end":"justify-start",h=e.status||"read";let b="",y="rounded-[12px]",z="px-3.5 py-1.5",j=l?"mt-2.5":"mt-[2px]";const S=["#2cb3c9","#57d363","#ffa500","#f44336","#9c27b0","#4caf50"],T=(e.senderName||"").split("").reduce((F,ne)=>F+ne.charCodeAt(0),0)%S.length,M=S[T],B=t.isGroup&&!s&&l&&e.senderName?`
    <div class="text-[12px] font-semibold mb-0.5 leading-tight select-none" style="color:${M}">
      ${f(e.senderName)}
    </div>
  `:"";p&&(s?(y="rounded-[12px] rounded-br-none",b=`<div class="absolute -right-[7px] bottom-[5px] w-0 h-0 border-l-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-left-color:${c}"></div>`):(y="rounded-[12px] rounded-bl-none",b=`<div class="absolute -left-[7px] bottom-[5px] w-0 h-0 border-r-[8px] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" style="border-right-color:${c}"></div>`));const O=(I=e.reactions)!=null&&I[0]?`
    <div class="absolute -bottom-[8px] right-[10px] flex items-center justify-center bg-[#efefef] dark:bg-[#181818] border border-black/10 dark:border-white/10 rounded-full px-1.5 py-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.15)] select-none z-10 scale-[0.88] origin-bottom-right">
      <span class="text-[11px] leading-none">${e.reactions[0]}</span>
    </div>
  `:"";(_=e.reactions)!=null&&_[0]&&(z+=" pb-[10px]");const L=e.image?`<img src="${e.image}" class="w-full max-w-[280px] rounded-lg mb-1 object-cover shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" style="max-height: 200px" />`:"";let C="";return s&&(h==="read"||h==="delivered"?C=un:h==="sent"&&(C=gn)),`
    <div class="flex ${g} ${j} relative">
      <div class="relative max-w-[80%]">
        <div class="${y} ${z} shadow-[0_1px_1px_rgba(0,0,0,0.1)]" style="background:${c}">
          ${B}
          ${L}
          ${e.text?`<p class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words" style="color:${u}">${f(e.text)}</p>`:""}
          <div class="flex items-center justify-end gap-1 mt-0.5 select-none">
            <span class="text-[10px] leading-none" style="color:${x}">${f(e.time)}</span>
            ${C?`<span class="inline-flex -mb-0.5">${C}</span>`:""}
          </div>
        </div>
        ${b}
        ${O}
      </div>
    </div>
  `}function $n(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${ln}</span>
      <span>${cn}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.timeText}">Message</div>
      <span>${dn}</span>
    </div>
  `}function Bn(e){const n=X(e),t=document.getElementById("tg-statusbar");t&&(t.outerHTML=Oe(e,n)),ae("tg-contact-name",a=>{a.textContent=e.username}),ae("tg-status-text",a=>{a.textContent=e.statusText||"online"}),ae("tg-statusbar-time",a=>{a.textContent=e.statusBarTime||"09:41"});const i=document.getElementById("tg-avatar");if(i)if(e.avatar){const a=document.createElement("img");a.id="tg-avatar",a.src=e.avatar,a.className="w-full h-full rounded-full object-cover",a.alt="",i.replaceWith(a)}else{const a=document.createElement("div");a.id="tg-avatar",a.className="w-full h-full rounded-full bg-[#527da3] flex items-center justify-center",a.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#e9edef"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',i.replaceWith(a)}const s=document.getElementById("tg-messages");if(s){const a=X(e);s.innerHTML=e.messages.map((l,p)=>Ne(l,p,e,a)).join("")}const r=document.getElementById("tg-chat-container");if(r){const a=X(e);r.style.background=`var(--chat-bg, ${a.chatBg})`,e.chatBg?(r.style.backgroundImage=`url(${e.chatBg})`,r.style.backgroundSize="cover"):(r.style.backgroundImage=a.dotPattern,r.style.backgroundSize="")}}function ae(e,n){const t=document.getElementById(e);t&&n(t)}const zn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9edef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',Cn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',En='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aebac1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',Sn='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',Tn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',Mn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',Ln='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',In='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffd0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#ffffffd0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/></svg>',jn='<svg width="14" height="14" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#ffffffb3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',_n={barBg:"#3b82f6",chatBg:"#f0f2f5",sentBg:"#3b82f6",recvBg:"#ffffff",sentText:"#ffffff",recvText:"#111b21",timeText:"#00000080",sentTimeText:"#ffffffb3",inputBg:"#f0f2f5",fieldBg:"#ffffff",fieldText:"#111b21",placeholder:"#8696a0"},An={barBg:"#1e1f22",chatBg:"#101214",sentBg:"#3b82f6",recvBg:"#2b2d30",sentText:"#ffffff",recvText:"#e9edef",timeText:"#ffffff8c",sentTimeText:"#ffffffb3",inputBg:"#1e1f22",fieldBg:"#2b2d30",fieldText:"#e9edef",placeholder:"#8696a0"};function Pe(e){return e.mockupTheme==="light"?_n:An}function Hn(e){return`<svg width="24" height="12" viewBox="0 0 26 12" fill="none" class="opacity-90"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="${Math.max(1,Math.min(19.5,e/100*19.5))}" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`}function On(e){const n=e>=1?"1":"0.3",t=e>=2?"1":"0.3",i=e>=3?"1":"0.3",s=e>=4?"1":"0.3";return`<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor" opacity="${n}"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor" opacity="${t}"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor" opacity="${i}"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor" opacity="${s}"/></svg>`}function Nn(e){const n=Pe(e),t=e.mockupTheme==="light"?"#ffffff":"#121212";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${t};background:${t}">
        ${Ge(e,n)}
        ${Pn(e,n)}
        ${Gn(e,n)}
        ${Rn(n)}
      </div>
    </div>
  `}function Ge(e,n){const t=e.statusBarWifi!==!1?`<span class="text-[11px]">${Sn}</span>`:"",i=On(e.statusBarSignal||4),s=Hn(e.statusBarBattery!==void 0?e.statusBarBattery:100);return`
    <div id="sg-statusbar" class="flex items-center justify-between px-6 h-[44px] shrink-0 text-white" style="background:${n.barBg}">
      <span id="sg-statusbar-time" class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">${f(e.statusBarTime||"09:41")}</span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px]">${i}</span>
        ${t}
        <span class="text-[11px]">${s}</span>
      </div>
    </div>
  `}function Pn(e,n){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${n.barBg}">
      <span class="shrink-0">${zn}</span>
      <div class="w-9 h-9 rounded-full overflow-hidden shrink-0">
        ${e.avatar?`<img id="sg-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="sg-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="sg-contact-name" class="text-white text-[15px] font-medium leading-tight truncate">${f(e.username)}</div>
        <div id="sg-status-text" class="text-[#ffffffcc] text-[11px] leading-tight">${f(e.statusText||"online")}</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        ${Cn}
        ${En}
      </div>
    </div>
  `}function Gn(e,n){return`
    <div id="sg-chat-container" class="flex-1 p-4 overflow-y-auto" style="background:var(--chat-bg, ${n.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
      <div id="sg-messages" class="flex flex-col gap-0.5">
        ${e.messages.map((t,i)=>Re(t,i,e,n)).join("")}
      </div>
    </div>
  `}function Re(e,n,t,i){var C,I;const s=e.type==="sent",r=n>0?t.messages[n-1]:null,a=n<t.messages.length-1?t.messages[n+1]:null,l=!r||r.type!==e.type,p=!a||a.type!==e.type,c=s?i.sentBg:i.recvBg,u=s?i.sentText:i.recvText,x=s?i.sentTimeText:i.timeText,g=s?"justify-end":"justify-start",h=e.status||"read";let b="rounded-[16px]",y=l?"mt-2.5":"mt-[2px]";s?l&&p?b="rounded-[16px] rounded-br-[4px]":l?b="rounded-[16px] rounded-tr-[16px] rounded-br-[4px]":p?b="rounded-[16px] rounded-br-[4px]":b="rounded-[16px] rounded-tr-[16px] rounded-br-[4px]":l&&p?b="rounded-[16px] rounded-bl-[4px]":l?b="rounded-[16px] rounded-tl-[16px] rounded-bl-[4px]":p?b="rounded-[16px] rounded-bl-[4px]":b="rounded-[16px] rounded-tl-[16px] rounded-bl-[4px]";const z=["#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#3b82f6"],j=(e.senderName||"").split("").reduce((_,F)=>_+F.charCodeAt(0),0)%z.length,S=z[j],T=t.isGroup&&!s&&l&&e.senderName?`
    <div class="text-[12px] font-semibold mb-0.5 leading-tight select-none" style="color:${S}">
      ${f(e.senderName)}
    </div>
  `:"",M=(C=e.reactions)!=null&&C[0]?`
    <div class="absolute -bottom-[8px] right-[10px] flex items-center justify-center bg-white dark:bg-[#2b2d30] border border-[#e9edef] dark:border-[#3b4a54] rounded-full px-1.5 py-[2px] shadow-[0_1.5px_2px_rgba(0,0,0,0.15)] select-none z-10 scale-[0.88] origin-bottom-right">
      <span class="text-[11px] leading-none">${e.reactions[0]}</span>
    </div>
  `:"";let B="px-3.5 py-1.5";(I=e.reactions)!=null&&I[0]&&(B="px-3.5 pt-1.5 pb-[10px]");const O=e.image?`<img src="${e.image}" class="w-full max-w-[280px] rounded-lg mb-1 object-cover shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" style="max-height: 200px" />`:"";let L="";return s&&(h==="read"||h==="delivered"?L=In:h==="sent"&&(L=jn)),`
    <div class="flex ${g} ${y} relative">
      <div class="relative max-w-[80%]">
        <div class="${b} ${B} shadow-[0_1px_1px_rgba(0,0,0,0.08)]" style="background:${c}">
          ${T}
          ${O}
          ${e.text?`<p class="text-[14.5px]/[1.4] whitespace-pre-wrap break-words" style="color:${u}">${f(e.text)}</p>`:""}
          <div class="flex items-center justify-end gap-1 mt-0.5 select-none">
            <span class="text-[10px] leading-none" style="color:${x}">${f(e.time)}</span>
            ${L?`<span class="inline-flex -mb-0.5">${L}</span>`:""}
          </div>
        </div>
        ${M}
      </div>
    </div>
  `}function Rn(e){return`
    <div class="flex items-center gap-2 px-3 py-2 shrink-0" style="background:${e.inputBg}">
      <span>${Tn}</span>
      <div class="flex-1 rounded-xl px-4 py-1.5 text-[15px]" style="background:${e.fieldBg};color:${e.placeholder}">Message</div>
      <span>${Mn}</span>
      <span>${Ln}</span>
    </div>
  `}function Fn(e){const n=Pe(e),t=document.getElementById("sg-statusbar");t&&(t.outerHTML=Ge(e,n)),Be("sg-contact-name",a=>{a.textContent=e.username}),Be("sg-status-text",a=>{a.textContent=e.statusText||"online"});const i=document.getElementById("sg-avatar");if(i)if(e.avatar){const a=document.createElement("img");a.id="sg-avatar",a.src=e.avatar,a.className="w-full h-full rounded-full object-cover",a.alt="",i.replaceWith(a)}else{const a=document.createElement("div");a.id="sg-avatar",a.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",a.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="#8696a0"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',i.replaceWith(a)}const s=document.getElementById("sg-messages");s&&(s.innerHTML=e.messages.map((a,l)=>Re(a,l,e,n)).join(""));const r=document.getElementById("sg-chat-container");r&&(r.style.background=`var(--chat-bg, ${n.chatBg})`,e.chatBg?(r.style.backgroundImage=`url(${e.chatBg})`,r.style.backgroundSize="cover"):r.style.backgroundImage="")}function Be(e,n){const t=document.getElementById(e);t&&n(t)}const Vn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',Wn='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',Dn='<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><path d="M9 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.3-3.3a4.5 4.5 0 0 1 6.6 0l-1.1 1.1a3 3 0 0 0-4.4 0L5.7 8.2zM2.9 5.1a8 8 0 0 1 12.2 0l-1.1 1.1a6.5 6.5 0 0 0-10 0L2.9 5.1z" fill="currentColor"/></svg>',Un={barBg:"#f8f8f8",chatBg:"#ffffff",sentBg:"#007aff",recvBg:"#e5e5ea",sentText:"#ffffff",recvText:"#000000",timeText:"#8e8e93",inputBg:"#f8f8f8",fieldBg:"#e5e5ea",fieldText:"#000000",statusColor:"#000000",navColor:"#007aff"},Kn={barBg:"#1c1c1e",chatBg:"#000000",sentBg:"#0a84ff",recvBg:"#262629",sentText:"#ffffff",recvText:"#ffffff",timeText:"#8e8e93",inputBg:"#1c1c1e",fieldBg:"#2c2c2e",fieldText:"#ffffff",statusColor:"#ffffff",navColor:"#ffffff"};function Fe(e){const n=e.imessageMode==="sms",t=e.mockupTheme==="light"?{...Un}:{...Kn};return n&&(t.sentBg=e.mockupTheme==="light"?"#34c759":"#30d158",t.navColor=e.mockupTheme==="light"?"#34c759":"#ffffff"),t}function qn(e){return`<svg width="24" height="12" viewBox="0 0 26 12" fill="none" class="opacity-90"><rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2" width="${Math.max(1,Math.min(19.5,e/100*19.5))}" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="3.5" width="2" height="5" rx="0.75" fill="currentColor"/></svg>`}function Jn(e){const n=e>=1?"1":"0.3",t=e>=2?"1":"0.3",i=e>=3?"1":"0.3",s=e>=4?"1":"0.3";return`<svg width="16" height="12" viewBox="0 0 18 12" fill="none"><rect x="1" y="8" width="2" height="3" rx="0.4" fill="currentColor" opacity="${n}"/><rect x="5" y="5" width="2" height="6" rx="0.4" fill="currentColor" opacity="${t}"/><rect x="9" y="2.5" width="2" height="8.5" rx="0.4" fill="currentColor" opacity="${i}"/><rect x="13" y="0.5" width="2" height="10.5" rx="0.4" fill="currentColor" opacity="${s}"/></svg>`}function Yn(e){const n=Fe(e),t=e.mockupTheme==="light"?"#e5e5ea":"#1c1c1e";return`
    <div id="mockup-card" class="mx-auto" style="width:390px; height:844px;font-family:${e.fontFamily};">
      <div class="w-full h-full overflow-hidden rounded-[2.5rem] border-8 flex flex-col" style="border-color:${t};background:${t}">
        ${Ve(e,n)}
        ${We(e,n)}
        ${Xn(e,n)}
        ${Ue(e,n)}
      </div>
    </div>
  `}function Ve(e,n){const t=e.statusBarWifi!==!1?`<span class="text-[11px]">${Dn}</span>`:"",i=Jn(e.statusBarSignal||4),s=qn(e.statusBarBattery!==void 0?e.statusBarBattery:100);return`
    <div id="im-statusbar" class="flex items-center justify-between px-7 h-[44px] shrink-0" style="background:${n.barBg};color:${n.statusColor}">
      <div class="w-[72px]"></div>
      <span id="im-statusbar-time" class="text-[14px] font-semibold tracking-tight" style="font-family:-apple-system,system-ui,sans-serif">${f(e.statusBarTime||"09:41")}</span>
      <div class="flex items-center gap-1.5 w-[72px] justify-end">
        <span class="text-[11px]">${i}</span>
        ${t}
        <span class="text-[11px]">${s}</span>
      </div>
    </div>
  `}function We(e,n){return`
    <div id="im-navbar" class="flex items-center gap-1 px-2 py-1.5 shrink-0 border-b border-black/[5%] relative z-10" style="background:${n.barBg};color:${n.navColor}">
      <span class="shrink-0 px-1">${Vn}</span>
      <div class="w-[34px] h-[34px] rounded-full overflow-hidden shrink-0 ml-1">
        ${e.avatar?`<img id="im-avatar" src="${e.avatar}" class="w-full h-full rounded-full object-cover" />`:'<div id="im-avatar" class="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="#8e8e93"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>'}
      </div>
      <div class="flex-1 min-w-0">
        <div id="im-contact-name" class="text-[15px] font-semibold leading-tight truncate ml-2" style="color:${n.statusColor}">${f(e.username)}</div>
      </div>
      <div class="flex items-center gap-2 shrink-0 px-1">
        <span style="color:${n.navColor}">${Wn}</span>
      </div>
    </div>
  `}function Xn(e,n){return`
    <div id="im-chat-container" class="flex-1 p-3 overflow-y-auto" style="background:var(--chat-bg, ${n.chatBg})${e.chatBg?`;background-image:url(${e.chatBg});background-size:cover`:""}">
      <div id="im-messages" class="flex flex-col gap-0.5">
        ${e.messages.map((t,i)=>De(t,i,e,n)).join("")}
      </div>
    </div>
  `}function De(e,n,t,i){var T,M;const s=e.type==="sent",r=n>0?t.messages[n-1]:null,a=n<t.messages.length-1?t.messages[n+1]:null,l=!r||r.type!==e.type,p=!a||a.type!==e.type,c=s?i.sentBg:i.recvBg,u=s?i.sentText:i.recvText,x=s?"justify-end":"justify-start";let g="",h="rounded-[18px]",b=l?"mt-2.5":"mt-[2px]";p&&(s?(h="rounded-[18px] rounded-br-[4px]",g=`<span class="absolute bottom-0 -right-[5px] w-[10px] h-[15px]" style="color:${c}">
        <svg viewBox="0 0 10 15" width="10" height="15" fill="none">
          <path fill="currentColor" d="M0 15h10V0C10 6 7 11 0 15z"/>
        </svg>
      </span>`):(h="rounded-[18px] rounded-bl-[4px]",g=`<span class="absolute bottom-0 -left-[5px] w-[10px] h-[15px]" style="color:${c}">
        <svg viewBox="0 0 10 15" width="10" height="15" fill="none">
          <path fill="currentColor" d="M10 15H0V0C0 6 3 11 10 15z"/>
        </svg>
      </span>`));let y="";p&&s&&e.time?y=`
      <div class="text-[10px] text-right text-zinc-400 mt-1 select-none pr-1.5">
        ${f(e.time)}
      </div>
    `:p&&!s&&e.time&&(y=`
      <div class="text-[10px] text-left text-zinc-400 mt-1 select-none pl-1.5">
        ${f(e.time)}
      </div>
    `);const z=t.isGroup&&!s&&l&&e.senderName?`
    <div class="text-[10px] text-zinc-400 dark:text-zinc-500 mb-0.5 leading-tight select-none pl-2.5">
      ${f(e.senderName)}
    </div>
  `:"",j=(T=e.reactions)!=null&&T[0]?`
    <div class="absolute -top-[10px] ${s?"-left-[6px]":"-right-[6px]"} flex items-center justify-center bg-[#e5e5ea] dark:bg-[#2c2c2e] border border-black/10 dark:border-white/10 rounded-full px-1.5 py-[2px] shadow-[0_1.5px_2px_rgba(0,0,0,0.15)] select-none z-10 scale-[0.88] ${s?"origin-top-left":"origin-top-right"}">
      <span class="text-[11px] leading-none">${e.reactions[0]}</span>
    </div>
  `:"";(M=e.reactions)!=null&&M[0]&&(l?b="mt-4":b="mt-3.5");const S=e.image?`<img src="${e.image}" class="w-full max-w-[280px] rounded-lg mb-1 object-cover shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" style="max-height: 200px" />`:"";return`
    <div class="flex flex-col ${x} ${b}">
      ${z}
      <div class="relative max-w-[75%]">
        ${j}
        <div class="${h} px-3.5 py-2" style="background:${c}">
          ${S}
          ${e.text?`<p class="text-[15.5px]/[1.35] whitespace-pre-wrap break-words" style="color:${u}">${f(e.text)}</p>`:""}
        </div>
        ${g}
      </div>
      ${y}
    </div>
  `}function Ue(e,n){const t=e.imessageMode==="sms"?"Text Message":"iMessage";return`
    <div id="im-inputbar" class="flex items-center gap-2 px-3 py-2 shrink-0 border-t border-black/[5%]" style="background:${n.inputBg}">
      <div class="flex-1 rounded-2xl px-4 py-2 text-[15px] leading-none" style="background:${n.fieldBg};color:${n.fieldText}">${t}</div>
      <svg width="24" height="24" viewBox="0 0 24 24" style="fill:${n.sentBg}"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    </div>
  `}function Zn(e){const n=Fe(e),t=document.getElementById("im-statusbar");t&&(t.outerHTML=Ve(e,n));const i=document.getElementById("im-navbar");i&&(i.outerHTML=We(e,n));const s=document.getElementById("im-inputbar");s&&(s.outerHTML=Ue(e,n)),Qn("im-contact-name",p=>{p.textContent=e.username});const r=document.getElementById("im-avatar");if(r)if(e.avatar){const p=document.createElement("img");p.id="im-avatar",p.src=e.avatar,p.className="w-full h-full rounded-full object-cover",p.alt="",r.replaceWith(p)}else{const p=document.createElement("div");p.id="im-avatar",p.className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center justify-center",p.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="#8e8e93"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',r.replaceWith(p)}const a=document.getElementById("im-messages");a&&(a.innerHTML=e.messages.map((p,c)=>De(p,c,e,n)).join(""));const l=document.getElementById("im-chat-container");l&&(l.style.background=`var(--chat-bg, ${n.chatBg})`,e.chatBg?(l.style.backgroundImage=`url(${e.chatBg})`,l.style.backgroundSize="cover"):l.style.backgroundImage="")}function Qn(e,n){const t=document.getElementById(e);t&&n(t)}const Ke={"social-post":{render:V,sync:W},messenger:{render:V,sync:W},instagram:{render:V,sync:W},twitter:{render:V,sync:W},tiktok:{render:V,sync:W},discord:{render:Ot,sync:Nt},whatsapp:{render:en,sync:an},telegram:{render:wn,sync:Bn},signal:{render:Nn,sync:Fn},imessage:{render:Yn,sync:Zn}};let w=o.get("theme"),re=!1,pe=!1;function qe(){return{"social-post":d("sidebar.socialPost"),messenger:d("sidebar.socialPost"),instagram:d("sidebar.socialPost"),twitter:d("sidebar.socialPost"),tiktok:d("sidebar.socialPost"),discord:d("sidebar.discord"),whatsapp:"WhatsApp",telegram:"Telegram",signal:"Signal",imessage:"iMessage"}[w]||w}const ei={"from-slate-900 to-indigo-950":["#050508","#121020"],"from-sky-400 to-indigo-600":["#38bdf8","#4f46e5"],"from-rose-400 to-orange-600":["#fb7185","#ea580c"],"from-emerald-400 to-cyan-600":["#34d399","#0891b2"],"from-amber-400 to-red-600":["#fbbf24","#dc2626"],"from-violet-400 to-fuchsia-600":["#a78bfa","#c026d3"],"from-zinc-800 to-zinc-950":["#27272a","#09090b"]},ze=[{label:"Default",value:"",colors:null},{label:"Warm",value:"#efeae2",colors:null},{label:"Cool",value:"#eef2f6",colors:null},{label:"Dark",value:"#0b141a",colors:null},{label:"Deep",value:"#101214",colors:null},{label:"Rose",value:"linear-gradient(135deg,#fce4ec,#f8bbd0)",colors:null},{label:"Sky",value:"linear-gradient(135deg,#e3f2fd,#bbdefb)",colors:null},{label:"Mint",value:"linear-gradient(135deg,#e8f5e9,#c8e6c9)",colors:null},{label:"Lavender",value:"linear-gradient(135deg,#f3e5f5,#e1bee7)",colors:null}],Z=[{id:"whatsapp",theme:"whatsapp",name:"WhatsApp",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>'},{id:"telegram",theme:"telegram",name:"Telegram",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0m4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635"/></svg>'},{id:"signal",theme:"signal",name:"Signal",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0l-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0l-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0l-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002l-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213l-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24l-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125"/></svg>'},{id:"messenger",theme:"messenger",name:"Messenger",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13"/></svg>'},{id:"imessage",theme:"imessage",name:"iMessage",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.285 0A5.273 5.273 0 0 0 0 5.285v13.43A5.273 5.273 0 0 0 5.285 24h13.43A5.273 5.273 0 0 0 24 18.715V5.285A5.273 5.273 0 0 0 18.715 0ZM12 4.154a8.809 7.337 0 0 1 8.809 7.338A8.809 7.337 0 0 1 12 18.828a8.809 7.337 0 0 1-2.492-.303A8.656 7.337 0 0 1 5.93 19.93a9.929 7.337 0 0 0 1.54-2.155 8.809 7.337 0 0 1-4.279-6.283A8.809 7.337 0 0 1 12 4.154"/></svg>'},{id:"instagram",theme:"instagram",name:"Instagram",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>'},{id:"twitter",theme:"twitter",name:"X",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'},{id:"tiktok",theme:"tiktok",name:"TikTok",tag:"social",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07"/></svg>'},{id:"discord",theme:"discord",name:"Discord",tag:"chat",svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189"/></svg>'}],v={koala:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="8" ry="7.5"/><circle cx="7" cy="5" r="4"/><circle cx="17" cy="5" r="4"/><circle cx="9" cy="11" r="1.2" fill="#0d0a07"/><circle cx="15" cy="11" r="1.2" fill="#0d0a07"/><ellipse cx="12" cy="16" rx="2.5" ry="1.2"/></svg>',sun:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',moon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',download:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',spinner:'<svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10"/></svg>',check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',chevronDown:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',github:'<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',sidebarToggle:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>',undo:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',redo:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',clipboard:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',link:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',folder:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',zoomIn:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',zoomOut:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>'},Ce=ue(),ti={de:"Deutsch",en:"English",es:"Español"};function Ee(e){return e==="de"?"🇩🇪":e==="en"?"🇬🇧":e==="es"?"🇪🇸":""}function ni(e){return o.getSidebarOpen(),`
    <header class="h-14 shrink-0 flex items-center justify-between px-5 border-b border-white/[5%] bg-[#0d0a07]/80 backdrop-blur-xl relative z-50">
      <div class="flex items-center gap-3">
        <div class="text-zinc-100">${v.koala}</div>
        <span class="text-sm font-bold tracking-tight hidden sm:inline">${d("app.name")}</span>
        <button id="btn-sidebar-toggle" aria-label="${d("topbar.toggleSidebar")}"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all ml-2">
          ${v.sidebarToggle}
        </button>
      </div>
      <div class="flex items-center gap-1.5">
        <button id="btn-undo" aria-label="${d("topbar.undo")}"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all disabled:opacity-30 disabled:pointer-events-none"
          ${o.canUndo()?"":"disabled"}>
          ${v.undo}
        </button>
        <button id="btn-redo" aria-label="${d("topbar.redo")}"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all disabled:opacity-30 disabled:pointer-events-none"
          ${o.canRedo()?"":"disabled"}>
          ${v.redo}
        </button>
        <div class="relative flex" id="export-dropdown-container">
          <button id="btn-topbar-export" aria-label="${d("topbar.export")}"
            class="flex items-center gap-1.5 bg-[#f97316] pl-3 pr-1.5 h-7 text-xs font-semibold text-white hover:bg-[#ea580c] active:scale-[0.97] transition-all disabled:opacity-60 disabled:pointer-events-none rounded-l-full">
            <span id="btn-export-icon">${v.download}</span>
            <span id="btn-export-label">${d("topbar.export")}</span>
          </button>
          <button id="btn-export-chevron" aria-label="${d("topbar.more")}"
            class="flex items-center bg-[#f97316] pl-1.5 pr-2.5 h-7 text-white hover:bg-[#ea580c] active:scale-[0.97] transition-all rounded-r-full border-l border-orange-500/30">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div id="export-dropdown" class="absolute right-0 top-full mt-1 z-50 hidden min-w-[200px] rounded-xl border border-white/10 bg-[#1a1714]/95 backdrop-blur-2xl py-1 shadow-2xl shadow-black/50">
            <button data-export-action="png" class="flex items-center gap-2.5 w-full px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-all text-left">
              ${v.download} <span>${d("topbar.exportPng")}</span>
            </button>
            <button data-export-action="clipboard" class="flex items-center gap-2.5 w-full px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-all text-left">
              ${v.clipboard} <span>${d("topbar.exportClipboard")}</span>
            </button>
            <button data-export-action="share" class="flex items-center gap-2.5 w-full px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-all text-left">
              ${v.link} <span>${d("topbar.exportShare")}</span>
            </button>
          </div>
        </div>
        <button id="btn-start-tour" aria-label="${d("tutorial.restart")}"
          class="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-all mr-1">${d("tutorial.restart")}</button>
        <a href="https://github.com/Shik3i/KoalaSnap" target="_blank" rel="noopener noreferrer"
          class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all"
          aria-label="GitHub">
          ${v.github}
        </a>
        <div class="relative flex" id="lang-switcher">
          <button id="lang-btn"
            class="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-2.5 py-1.5 text-xs
                   text-zinc-400 hover:text-zinc-200 hover:border-white/20 outline-0 transition-all cursor-pointer">
            <span class="font-flags text-sm shrink-0 leading-none">${Ee(Ce)}</span>
            <span class="text-[10px] font-semibold leading-none">${Ce.toUpperCase()}</span>
            <span class="text-zinc-500">${v.chevronDown}</span>
          </button>
          <div id="lang-dropdown" class="hidden absolute right-0 top-full mt-1.5 z-50 min-w-[130px] rounded-xl border border-white/10 bg-[#1a1714]/95 backdrop-blur-2xl py-1 shadow-2xl shadow-black/50">
            ${["de","en","es"].map(n=>`
              <button data-lang="${n}"
                class="flex items-center gap-2 w-full px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-white/5 transition-all text-left">
                <span class="font-flags text-sm shrink-0 leading-none">${Ee(n)}</span>
                ${ti[n]}
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    </header>
  `}function ii(e){const n=o.getSidebarOpen(),i=ue()==="de"?"/de":"";return`
    <aside id="sidebar" class="shrink-0 h-full overflow-y-auto flex flex-col gap-4 transition-all duration-300 bg-[#0d0a07] border-white/[6%] z-40 fixed left-0 top-14 bottom-0 border-r md:relative md:top-0 md:translate-x-0
      ${n?"w-[340px] p-4 opacity-100 translate-x-0":"w-[340px] p-4 -translate-x-full md:w-0 md:p-0 md:border-r-0 md:opacity-0 md:overflow-hidden md:gap-0"}">
      <div id="app-library" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
        <div class="flex items-center justify-between cursor-pointer select-none" id="app-library-toggle">
          <span class="text-xs font-semibold text-zinc-300 tracking-wide">${d("sidebar.appLibrary")}</span>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-zinc-600">${Z.length} ${d("sidebar.apps")}</span>
            <span id="app-library-chevron" class="text-zinc-500 transition-transform">${v.chevronDown}</span>
          </div>
        </div>
        <div id="app-library-body">
          <div class="relative mb-2">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">${v.search}</span>
            <input type="text" placeholder="${d("sidebar.search")}"
              class="w-full rounded-xl border border-white/[6%] bg-white/[4%] pl-9 pr-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
          </div>
          <div class="flex flex-col gap-1.5">
            ${Z.map(s=>{const r=s.theme===w;return`
                <button data-app="${s.id}" aria-label="${s.id}"
                  class="flex items-center gap-3 rounded-xl border p-2.5 transition-all text-left
                    ${r?"border-white/15 bg-white/[8%]":"border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]"}">
                <div class="w-7 h-7 rounded-lg bg-white/[8%] flex items-center justify-center shrink-0 text-zinc-300">${s.svg}</div>
                  <span class="flex-1 text-xs font-medium text-white">${s.name}</span>
                  <span class="text-[9px] text-zinc-600 uppercase tracking-wider">${s.tag==="chat"?d("canvas.chat"):d("canvas.social")}</span>
                </button>
              `}).join("")}
          </div>
        </div>
      </div>

      <div id="settings-panel" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-4">
        <span class="text-xs font-semibold text-zinc-300 tracking-wide">${d("sidebar.settings")} · <span class="text-zinc-500 font-normal normal-case">${qe()}</span></span>
        ${Ye(e)}
      </div>

      ${Je()}

      <div class="flex items-center gap-4 mt-auto pt-4 border-t border-white/[6%]">
        <a href="${i}/imprint" class="text-[10px] text-zinc-600 hover:text-zinc-200 transition-colors">${d("bottom.imprint")}</a>
        <a href="${i}/privacy" class="text-[10px] text-zinc-600 hover:text-zinc-200 transition-colors">${d("bottom.privacy")}</a>
      </div>
    </aside>
  `}function Je(){const e=o.listTemplates();return`
    <div id="templates-section" class="rounded-2xl border border-white/[6%] bg-[#1a1714] p-4 flex flex-col gap-3">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-zinc-300 tracking-wide">${d("templates.title")}</span>
        <span class="text-[10px] text-zinc-600">${e.length}</span>
      </div>
      <div class="flex items-center gap-2">
        <input id="input-template-name" type="text" placeholder="${d("templates.namePlaceholder")}"
          class="flex-1 rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
        <button id="btn-template-save"
          class="rounded-xl bg-[#f97316] px-3 py-2 text-xs font-semibold text-white hover:bg-[#ea580c] transition-all shrink-0">${d("templates.save")}</button>
      </div>
      <div id="template-list" class="flex flex-col gap-1 max-h-[140px] overflow-y-auto">
        ${e.length===0?`<span class="text-[10px] text-zinc-600 text-center py-2">${d("templates.empty")}</span>`:e.map(n=>`
            <div class="flex items-center gap-1 group" data-tmpl-name="${n}">
              <span class="flex-1 text-xs text-zinc-400 truncate">${n}</span>
              <button data-tmpl-action="load" class="hidden group-hover:inline-flex px-2 py-0.5 rounded-lg text-[10px] text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all">${d("templates.load")}</button>
              <button data-tmpl-action="delete" class="hidden group-hover:inline-flex px-2 py-0.5 rounded-lg text-[10px] text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all">${d("templates.delete")}</button>
            </div>
          `).join("")}
      </div>
    </div>
  `}function Ye(e){const n=["whatsapp","telegram","signal","imessage"].includes(w);let t="";return w==="discord"?t=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.username")}</span>
        <input id="input-username" type="text" value="${e.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.roleColor")}</span>
        <div class="flex items-center gap-3">
          <input id="input-rolecolor" type="color" value="${e.roleColor}"
            class="w-9 h-9 rounded-xl border border-white/[6%] bg-white/[4%] p-0.5 cursor-pointer" />
          <span class="text-xs text-zinc-500 font-mono">${e.roleColor}</span>
        </div>
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.timestamp")}</span>
        <input id="input-timestamp" type="text" value="${e.timestamp}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`:n?t=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.username")}</span>
        <input id="input-username" type="text" value="${e.username}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.statusText")}</span>
        <input id="input-statusText" type="text" value="${e.statusText||"online"}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.statusBarTime")}</span>
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
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.message")}</span>
        <div id="wa-message-list" class="flex flex-col gap-2">
          ${e.messages.map((i,s)=>Xe(i,s)).join("")}
        </div>
        <button id="btn-add-message"
          class="w-full rounded-xl border border-dashed border-white/[8%] py-2 text-xs text-zinc-500 hover:text-zinc-300 hover:border-white/20 transition-all">+ ${d("sidebar.addMessage")}</button>
      </div>`:t=`
      <label class="flex flex-col gap-1.5">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.author")}</span>
        <input id="input-author" type="text" value="${e.author}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.handle")}</span>
        <input id="input-handle" type="text" value="${e.handle}"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors" />
      </label>`,`
    <div id="settings-fields">
      ${t}

      ${!n&&w!=="discord"?`
      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.message")}</span>
        <textarea id="input-message" rows="3"
          class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none">${e.message}</textarea>
      </label>`:""}

      <label class="flex flex-col gap-1.5 mt-4">
        <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.avatar")}</span>
        <input id="input-avatar" type="file" accept="image/*"
          class="text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:text-zinc-200 file:font-medium hover:file:bg-white/15 transition-colors" />
      </label>
    </div>
    <div class="mt-4 pt-4 border-t border-white/[6%] space-y-4">
      ${ai(e)}
    </div>
  `}const si=[{id:"read",title:"Read",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#53bdeb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#53bdeb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>'},{id:"delivered",title:"Delivered",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5.5L9.5 9L16 1" stroke="#8696a0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>'},{id:"sent",title:"Sent",svg:'<svg width="13" height="13" viewBox="0 0 16 11" fill="none"><path d="M1 5.5L4.5 9L11 1" stroke="#8696a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'},{id:"unread",title:"Unread",svg:'<svg width="8" height="8" viewBox="0 0 8 8" fill="#53bdeb"><circle cx="4" cy="4" r="4"/></svg>'}];function Xe(e,n){var g;const t=o.getState(),i=e.type==="sent",s=i?"bg-white text-zinc-900":"bg-white/[4%] text-zinc-500 hover:text-zinc-300",r=i?"bg-white/[4%] text-zinc-500 hover:text-zinc-300":"bg-white text-zinc-900",a=e.status||"read",l=t.isGroup&&!i?`
    <input type="text" data-msg-idx="${n}" data-msg-field="senderName" value="${f(e.senderName||"")}"
      class="w-full rounded-lg border border-white/[6%] bg-white/[4%] px-2.5 py-1.5 text-xs text-zinc-200 outline-0 focus:border-zinc-600 transition-colors mt-1.5" placeholder="Sender Name" />
  `:"",p=((g=e.reactions)==null?void 0:g[0])||"",u=`
    <div class="flex gap-1 items-center mt-1.5 select-none">
      <span class="text-[9px] text-zinc-500 uppercase tracking-wider">React:</span>
      <div class="flex flex-wrap gap-0.5">
        ${["👍","❤️","😂","😮","😢","🙏"].map(h=>`
          <button data-msg-idx="${n}" data-msg-reaction="${h}"
            class="w-5.5 h-5.5 flex items-center justify-center rounded-md text-xs transition-all ${p===h?"bg-white/20 ring-1 ring-white/30 text-white":"text-zinc-500 hover:text-zinc-200 hover:bg-white/5"}">${h}</button>
        `).join("")}
      </div>
      ${p?`
        <button data-msg-idx="${n}" data-msg-reaction-clear="true"
          class="text-[9px] text-red-400 hover:text-red-300 ml-1 px-1 rounded hover:bg-red-500/10 transition-all">Clear</button>
      `:""}
    </div>
  `,x=`
    <div class="flex items-center justify-between mt-2 pt-2 border-t border-white/[4%]">
      <span class="text-[9px] text-zinc-500 uppercase tracking-wider">Image Bubble:</span>
      <div class="flex items-center gap-2">
        ${e.image?`
          <span class="text-[10px] text-emerald-400 font-medium">Image attached</span>
          <button data-msg-idx="${n}" data-msg-image-clear="true"
            class="text-[9px] text-red-400 hover:text-red-300 px-1.5 py-0.5 rounded bg-red-500/10 hover:bg-red-500/20 transition-all">Remove</button>
        `:`
          <input type="file" accept="image/*" data-msg-idx="${n}" data-msg-field="imageUpload" class="hidden" id="msg-img-upload-${n}" />
          <label for="msg-img-upload-${n}" class="text-[9.5px] text-zinc-300 hover:text-zinc-100 bg-white/5 border border-white/10 px-2 py-1 rounded-lg cursor-pointer transition-all">Upload Photo</label>
        `}
      </div>
    </div>
  `;return`
    <div draggable="true" data-msg-idx="${n}"
      class="rounded-xl border border-white/[6%] bg-white/[3%] p-2.5 flex flex-col gap-1 cursor-grab active:cursor-grabbing">
      <textarea data-msg-idx="${n}" rows="2"
        class="w-full rounded-lg border border-white/[6%] bg-white/[4%] px-2.5 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-600 outline-0 focus:border-zinc-600 transition-colors resize-none" placeholder="${d("sidebar.messagePlaceholder")}">${f(e.text)}</textarea>
      ${l}
      ${u}
      ${x}
      <div class="flex items-center gap-1.5 mt-1.5">
        <button data-msg-idx="${n}" data-msg-type="sent"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${s}">${d("sidebar.sent")}</button>
        <button data-msg-idx="${n}" data-msg-type="received"
          class="flex-1 py-1 rounded-lg text-[10px] font-medium transition-all ${r}">${d("sidebar.received")}</button>
        ${i?`
        <div class="flex gap-0.5 ml-1">
          ${si.map(h=>`
            <button data-msg-idx="${n}" data-msg-status="${h.id}"
              class="p-1 rounded-md transition-all ${a===h.id?"bg-white/15 ring-1 ring-white/20":"text-zinc-600 hover:text-zinc-300 hover:bg-white/5"}"
              title="${h.title}">${h.svg}</button>
          `).join("")}
        </div>
        `:""}
        <input type="text" data-msg-idx="${n}" data-msg-field="time" value="${f(e.time)}"
          class="w-14 rounded-lg border border-white/[6%] bg-white/[4%] px-2 py-1 text-[10px] text-zinc-200 text-center outline-0 focus:border-zinc-600 transition-colors" placeholder="${d("sidebar.timePlaceholder")}" />
        <button data-msg-idx="${n}" data-msg-action="delete"
          class="p-1 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all" title="${d("sidebar.deleteMessage")}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `}function ai(e){return`
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.padding")}</span>
      <div class="flex items-center gap-3">
        <input id="input-padding" type="range" min="16" max="96" value="${e.padding}"
          class="flex-1 accent-zinc-400 h-1 cursor-pointer" />
        <span id="padding-value" class="text-xs text-zinc-500 w-8 text-right">${e.padding}</span>
      </div>
    </label>
    <label class="flex flex-col gap-1.5">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.background")}</span>
      <div class="flex flex-wrap gap-1.5">
        ${ze.map(n=>`
          <button data-chat-bg="${n.value}" aria-label="${n.label}"
            class="w-7 h-7 rounded-lg ring-1 ring-white/[8%] hover:ring-white/30 transition-all
              ${e.chatBgGradient===n.value?"ring-2 ring-white scale-110":""}"
            style="background:${n.value||ze[1].value}"></button>
        `).join("")}
      </div>
    </label>
    <label class="flex flex-col gap-1.5 mt-4">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.font")}</span>
      <select id="input-font"
        class="rounded-xl border border-white/[6%] bg-white/[4%] px-3 py-2 text-sm text-zinc-200 outline-0 focus:border-zinc-600 transition-colors">
        <option value="system-ui" ${e.fontFamily==="system-ui"?"selected":""}>System UI</option>
        <option value="Inter" ${e.fontFamily==="Inter"?"selected":""}>Inter</option>
      </select>
    </label>
    ${w!=="social-post"&&!["messenger","instagram","twitter","tiktok"].includes(w)?`
    <label class="flex flex-col gap-1.5 mt-4">
      <span class="text-[10px] uppercase tracking-wider text-zinc-500">${d("sidebar.labels.uploadBg")}</span>
      <input id="input-chatbg" type="file" accept="image/*"
        class="text-xs text-zinc-500 file:mr-3 file:rounded-xl file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:text-zinc-200 file:font-medium hover:file:bg-white/15 transition-colors" />
    </label>`:""}
  `}function ri(e){const n=o.get("_zoom")||0;return`
    <div id="bottom-bar" class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
                flex items-center gap-1 rounded-full bg-white/[6%] backdrop-blur-2xl
                border border-white/[8%] px-2 py-1.5 shadow-2xl shadow-black/30">
      <button id="btn-mockup-theme" aria-label="${d("bottom.toggleTheme")}" class="rounded-full p-2 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${d("bottom.toggleTheme")}">
        ${e.mockupTheme==="light"?v.sun:v.moon}
      </button>
      <span class="w-px h-4 bg-white/[6%] mx-1"></span>
      <button id="btn-zoom-out" aria-label="${d("bottom.zoomOut")}" class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${d("bottom.zoomOut")}">
        ${v.zoomOut}
      </button>
      <input id="zoom-slider" type="range" min="-50" max="100" value="${n}"
        class="w-20 h-1 accent-[#f97316] cursor-pointer" />
      <button id="btn-zoom-in" aria-label="${d("bottom.zoomIn")}" class="rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all" title="${d("bottom.zoomIn")}">
        ${v.zoomIn}
      </button>
      <span id="zoom-label" class="text-[10px] text-zinc-500 w-8 text-center">${n>0?"+":""}${n}%</span>
    </div>
  `}function me(){const e=document.getElementById("app");if(!e)return;const n=o.getState(),t=o.getSidebarOpen();e.innerHTML=`
    ${ni()}
    <div id="main-area" class="flex-1 flex overflow-hidden relative">
      <div id="sidebar-overlay" class="${t&&window.innerWidth<768?"block":"hidden"} fixed inset-0 z-30 bg-black/40"></div>
      ${ii(n)}
      <button id="btn-sidebar-open"
        class="${t?"hidden":""} absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-5 h-20 bg-[#1a1714] hover:bg-[#25211e] border border-white/10 border-l-0 rounded-r-lg transition-all cursor-pointer group">
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
        ${ri(n)}
      </main>
    </div>
  `,li(),H(),ui();const i=o.get("_zoom")||0;et(i)}function oi(){const e=document.getElementById("btn-undo"),n=document.getElementById("btn-redo");e&&(e.disabled=!o.canUndo()),n&&(n.disabled=!o.canRedo())}function Se(e){const n=document.getElementById("settings-panel");n&&(n.innerHTML=`
    <span class="text-xs font-semibold text-zinc-300 tracking-wide">${d("sidebar.settings")} · <span class="text-zinc-500 font-normal normal-case">${qe()}</span></span>
    ${Ye(e)}
  `,Ze())}function li(){m("btn-topbar-export","click",()=>oe()),m("btn-export-chevron","click",gi),m("btn-sidebar-toggle","click",le),m("btn-sidebar-open","click",le),m("sidebar-overlay","click",le),m("btn-undo","click",()=>o.undo()),m("btn-redo","click",()=>o.redo()),m("btn-mockup-theme","click",()=>{const t=o.get("mockupTheme")==="light"?"dark":"light";o.set("mockupTheme",t)}),m("lang-btn","click",t=>{t.stopPropagation(),document.getElementById("lang-dropdown").classList.toggle("hidden")}),document.addEventListener("click",()=>{const t=document.getElementById("lang-dropdown");t&&!t.classList.contains("hidden")&&t.classList.add("hidden")}),document.querySelectorAll("[data-lang]").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.lang;window.location.href=i==="en"?"/":`/${i}/`})}),m("btn-start-tour","click",()=>Ie()),m("btn-template-save","click",mi),m("zoom-slider","input",xi),m("btn-zoom-in","click",()=>ce(10)),m("btn-zoom-out","click",()=>ce(-10)),document.querySelectorAll("[data-chat-bg]").forEach(t=>{t.addEventListener("click",()=>o.set("chatBgGradient",t.dataset.chatBg))}),document.querySelectorAll("[data-app]").forEach(t=>{t.addEventListener("click",()=>{const i=Z.find(s=>s.id===t.dataset.app);i&&o.set("theme",i.theme)})}),document.querySelectorAll("[data-export-action]").forEach(t=>{t.addEventListener("click",i=>{const s=t.dataset.exportAction;Te(),s==="png"?oe():s==="clipboard"?fi():s==="share"&&hi()})}),document.querySelectorAll("[data-tmpl-action]").forEach(t=>{t.addEventListener("click",i=>{var a;const s=t.dataset.tmplAction,r=(a=t.closest("[data-tmpl-name]"))==null?void 0:a.dataset.tmplName;r&&(s==="load"?o.loadTemplate(r):s==="delete"&&(o.deleteTemplate(r),ve()))})});const e=document.getElementById("app-library-toggle");e&&e.addEventListener("click",()=>{const t=document.getElementById("app-library-body"),i=document.getElementById("app-library-chevron");if(!t)return;const s=t.style.display==="none";t.style.display=s?"":"none",i&&(i.style.transform=s?"rotate(0deg)":"rotate(180deg)")}),document.addEventListener("click",t=>{const i=document.getElementById("export-dropdown-container");i&&!i.contains(t.target)&&Te()}),document.addEventListener("keydown",t=>{const i=t.metaKey||t.ctrlKey;i&&t.key==="z"&&!t.shiftKey&&(t.preventDefault(),o.undo()),i&&t.key==="z"&&t.shiftKey&&(t.preventDefault(),o.redo()),i&&t.key==="e"&&(t.preventDefault(),oe())});const n=document.getElementById("canvas");n&&n.addEventListener("wheel",t=>{(t.ctrlKey||t.metaKey)&&(t.preventDefault(),ce(t.deltaY>0?-5:5))},{passive:!1}),Ze()}function Ze(){m("input-padding","input",e=>{o.set("padding",Number(e.target.value));const n=document.getElementById("padding-value");n&&(n.textContent=e.target.value)}),m("input-font","change",e=>o.set("fontFamily",e.target.value)),m("input-chatbg","change",async e=>{var t;const n=(t=e.target.files)==null?void 0:t[0];if(n&&n.type.startsWith("image/")&&!(n.size>5*1024*1024))try{const i=await new Promise((s,r)=>{const a=new FileReader;a.onload=()=>s(a.result),a.onerror=r,a.readAsDataURL(n)});o.set("chatBg",i)}catch{}}),m("input-message","input",e=>o.set("message",e.target.value)),m("input-avatar","change",async e=>{var t;const n=(t=e.target.files)==null?void 0:t[0];if(n&&n.type.startsWith("image/")&&!(n.size>5*1024*1024))try{const i=o.get("avatar"),s=await dt(n);i&&i.startsWith("blob:")&&URL.revokeObjectURL(i),o.set("avatar",s)}catch{o.set("avatar",null)}}),["messenger","instagram","twitter","tiktok","social-post"].includes(w)?(m("input-author","input",e=>o.set("author",e.target.value)),m("input-handle","input",e=>o.set("handle",e.target.value))):w==="discord"?(m("input-username","input",e=>o.set("username",e.target.value)),m("input-rolecolor","input",e=>o.set("roleColor",e.target.value)),m("input-timestamp","input",e=>o.set("timestamp",e.target.value))):["whatsapp","telegram","signal","imessage"].includes(w)&&(m("input-username","input",e=>o.set("username",e.target.value)),m("input-statusText","input",e=>o.set("statusText",e.target.value)),m("input-statusBarTime","input",e=>o.set("statusBarTime",e.target.value)),m("input-imessageMode","change",e=>o.set("imessageMode",e.target.value)),m("input-statusBarBattery","input",e=>{o.set("statusBarBattery",Number(e.target.value)),H()}),m("input-statusBarSignal","input",e=>{o.set("statusBarSignal",Number(e.target.value)),H()}),m("input-statusBarWifi","change",e=>o.set("statusBarWifi",e.target.checked)),m("input-isGroup","change",e=>{o.set("isGroup",e.target.checked),me()}),ci())}function ci(){const e=document.getElementById("btn-add-message");e&&(e.onclick=()=>{const i=[...o.get("messages")];i.push({id:Date.now(),text:"",type:o.get("waMode")||"sent",time:""}),o.set("messages",i),E(o.getState())});const n=document.getElementById("wa-message-list");if(!n)return;n.addEventListener("input",i=>{const s=i.target,r=parseInt(s.dataset.msgIdx);if(!isNaN(r)){if(s.tagName==="TEXTAREA"){const a=[...o.get("messages")];a[r]&&(a[r]={...a[r],text:s.value}),o.set("messages",a)}else if(s.dataset.msgField==="time"){const a=[...o.get("messages")];a[r]&&(a[r]={...a[r],time:s.value}),o.set("messages",a)}else if(s.dataset.msgField==="senderName"){const a=[...o.get("messages")];a[r]&&(a[r]={...a[r],senderName:s.value}),o.set("messages",a)}}}),n.addEventListener("change",async i=>{var r;const s=i.target;if(s.dataset.msgField==="imageUpload"){const a=parseInt(s.dataset.msgIdx);if(isNaN(a))return;const l=(r=s.files)==null?void 0:r[0];if(!l)return;try{const p=await new Promise((u,x)=>{const g=new FileReader;g.onload=()=>u(g.result),g.onerror=x,g.readAsDataURL(l)}),c=[...o.get("messages")];c[a]&&(c[a]={...c[a],image:p}),o.set("messages",c),E(o.getState())}catch{}}}),n.addEventListener("click",i=>{const s=i.target.closest("[data-msg-type], [data-msg-status], [data-msg-action], [data-msg-reaction], [data-msg-reaction-clear], [data-msg-image-clear]");if(!s)return;const r=parseInt(s.dataset.msgIdx);if(!isNaN(r)){if(s.dataset.msgType){const a=[...o.get("messages")];a[r]&&(a[r]={...a[r],type:s.dataset.msgType}),o.set("messages",a),E(o.getState())}else if(s.dataset.msgStatus){const a=[...o.get("messages")];a[r]&&(a[r]={...a[r],status:s.dataset.msgStatus}),o.set("messages",a),E(o.getState())}else if(s.dataset.msgReaction){const a=[...o.get("messages")];a[r]&&(a[r]={...a[r],reactions:[s.dataset.msgReaction]}),o.set("messages",a),E(o.getState())}else if(s.dataset.msgReactionClear){const a=[...o.get("messages")];a[r]&&(a[r]={...a[r],reactions:[]}),o.set("messages",a),E(o.getState())}else if(s.dataset.msgImageClear){const a=[...o.get("messages")];a[r]&&(a[r]={...a[r],image:null}),o.set("messages",a),E(o.getState())}else if(s.dataset.msgAction==="delete"){const a=o.get("messages").filter((l,p)=>p!==r);o.set("messages",a),E(o.getState())}}});let t=null;n.addEventListener("dragstart",i=>{const s=i.target.closest("[draggable]");s&&(t=parseInt(s.dataset.msgIdx),s.style.opacity="0.4")}),n.addEventListener("dragend",i=>{const s=i.target.closest("[draggable]");s&&(s.style.opacity=""),t=null}),n.addEventListener("dragover",i=>{i.preventDefault();const s=i.target.closest("[draggable]");s&&(s.style.borderColor="rgba(255,255,255,0.3)")}),n.addEventListener("dragleave",i=>{const s=i.target.closest("[draggable]");s&&(s.style.borderColor="")}),n.addEventListener("drop",i=>{i.preventDefault();const s=i.target.closest("[draggable]");if(!s)return;s.style.borderColor="";const r=parseInt(s.dataset.msgIdx);if(t===null||t===r)return;const a=[...o.get("messages")],[l]=a.splice(t,1);a.splice(r,0,l),o.set("messages",a),E(o.getState())})}function E(e){const n=document.getElementById("wa-message-list");n&&(n.innerHTML=e.messages.map((t,i)=>Xe(t,i)).join(""))}function H(){const e=Ke[w];if(!e)return;const n=o.getState(),t=document.getElementById("mockup");t&&(t.innerHTML=e.render(n)),Qe(n),requestAnimationFrame(te)}function di(e,n,t){if(!re){re=!0;try{const i=Ke[w];if(!i)return;if(e==="theme"){w=n;const s=tt();s&&o.mutate({author:s.author||"",handle:s.handle||"",username:s.username||s.author||"",message:s.message||"",timestamp:s.time||"",roleColor:s.roleColor||"#5865F2",messages:s.messages||[{id:1,text:s.message||"",type:o.get("waMode")||"sent",time:s.time||"",status:"read"}]}),H(),Se(o.getState()),pi(n),gt()&&requestAnimationFrame(()=>xt());return}if(e==="bgGradient"&&Qe(t),e==="mockupTheme"){const s=document.getElementById("btn-mockup-theme");s&&(s.innerHTML=n==="light"?v.sun:v.moon),H();return}if(e==="fontFamily"||e==="chatBg"){H();return}if(e==="waMode")return;if(e==="_zoom"){et(n);return}if(e==="_undo"||e==="_redo"){H(),Se(o.getState()),oi();return}e==="avatar"&&pt(w==="discord"?"discord-avatar":w==="whatsapp"?"wa-avatar":"mockup-avatar"),i.sync(t)}finally{re=!1}}}function pi(e){document.querySelectorAll("[data-app]").forEach(n=>{const t=Z.find(s=>s.id===n.dataset.app),i=t&&t.theme===e;n.className=`flex items-center gap-3 rounded-xl border p-2.5 transition-all text-left ${i?"border-white/15 bg-white/[8%]":"border-white/[4%] bg-white/[3%] hover:bg-white/[7%] hover:border-white/[8%]"}`})}function Qe(e){const n=document.getElementById("canvas");if(n){const t=ei[e.bgGradient]||["#0f172a","#1e1b4b"],i="radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",s=`linear-gradient(135deg, ${t[0]}, ${t[1]})`;n.style.background=`${i}, ${s}`,n.style.backgroundSize="40px 40px, 100% 100%"}e.chatBgGradient?document.documentElement.style.setProperty("--chat-bg",e.chatBgGradient):document.documentElement.style.removeProperty("--chat-bg")}let q=null;function ui(){q&&q.disconnect();const e=document.getElementById("canvas");e&&(q=new ResizeObserver(()=>{te()}),q.observe(e))}function te(){if(pe)return;const e=document.getElementById("canvas"),n=document.getElementById("mockup");if(!e||!n)return;const t=e.getBoundingClientRect(),i=Math.min(t.width/390,t.height/844)*.8,r=1+(o.get("_zoom")||0)/100,a=i*r;n.style.transform=`translate(-50%, -50%) scale(${a})`}window.addEventListener("resize",te);async function oe(){const e=document.getElementById("btn-topbar-export"),n=document.getElementById("btn-export-icon"),t=document.getElementById("btn-export-label");if(!e||e.disabled)return;pe=!0,e.disabled=!0,n&&(n.innerHTML=v.spinner),t&&(t.textContent=d("topbar.rendering"));const i=document.getElementById("mockup-card");if(!i){a();return}const s=i.style.transform,r=i.style.transformOrigin;i.style.transform="",i.style.transformOrigin="",await new Promise(l=>requestAnimationFrame(l));try{const{toPng:l}=await Me(async()=>{const{toPng:h}=await import("./index-CgJtiJsK.js");return{toPng:h}},[]),p=await l(i,{pixelRatio:2});i.style.transform=s,i.style.transformOrigin=r;const c=new Date,u=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}_${String(c.getHours()).padStart(2,"0")}-${String(c.getMinutes()).padStart(2,"0")}-${String(c.getSeconds()).padStart(2,"0")}`,x=`koalasnap-${w}-${u}.png`,g=document.createElement("a");g.download=x,g.href=p,g.click(),n&&(n.innerHTML=v.check),t&&(t.textContent=d("topbar.exported")),e.classList.remove("bg-[#f97316]","hover:bg-[#ea580c]"),e.classList.add("bg-emerald-500","hover:bg-emerald-600"),setTimeout(a,2e3)}catch(l){i.style.transform=s,i.style.transformOrigin=r,console.error("Export failed:",(l==null?void 0:l.message)||l,(l==null?void 0:l.stack)||""),n&&(n.innerHTML=v.download),t&&(t.textContent=d("topbar.exportFailed")),e.disabled=!1,setTimeout(()=>{t&&(t.textContent=d("topbar.export")),n&&(n.innerHTML=v.download)},2e3)}function a(){pe=!1,e.disabled=!1,e.classList.remove("bg-emerald-500","hover:bg-emerald-600"),e.classList.add("bg-[#f97316]","hover:bg-[#ea580c]"),n&&(n.innerHTML=v.download),t&&(t.textContent=d("topbar.export"))}}function gi(){const e=document.getElementById("export-dropdown");if(!e)return;const n=!e.classList.contains("hidden");e.classList.toggle("hidden",n)}function Te(){const e=document.getElementById("export-dropdown");e&&e.classList.add("hidden")}async function fi(){const e=document.getElementById("mockup-card");if(!e)return;const n=document.getElementById("btn-topbar-export"),t=document.getElementById("btn-export-icon"),i=document.getElementById("btn-export-label");n&&(n.disabled=!0),t&&(t.innerHTML=v.spinner),i&&(i.textContent=d("topbar.rendering"));try{const s=e.style.transform,r=e.style.transformOrigin;e.style.transform="",e.style.transformOrigin="";const a=e.querySelectorAll('[style*="background-image"]'),l=[];a.forEach((g,h)=>{l[h]=g.style.backgroundImage,g.style.backgroundImage="none"});const p=e.querySelectorAll("img"),c=[];p.forEach((g,h)=>{c[h]=g.src,g.src.startsWith("blob:")&&(g.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}),await new Promise(g=>requestAnimationFrame(g));const{toBlob:u}=await Me(async()=>{const{toBlob:g}=await import("./index-CgJtiJsK.js");return{toBlob:g}},[]),x=await u(e,{pixelRatio:2});e.style.transform=s,e.style.transformOrigin=r,a.forEach((g,h)=>{g.style.backgroundImage=l[h]}),p.forEach((g,h)=>{c[h]&&(g.src=c[h])}),x&&(await navigator.clipboard.write([new ClipboardItem({"image/png":x})]),G(d("topbar.copied")))}catch(s){console.error("Clipboard copy failed:",s),G(d("topbar.exportFailed"))}n&&(n.disabled=!1),t&&(t.innerHTML=v.download),i&&(i.textContent=d("topbar.export"))}function hi(){const e=o.getShareUrl();if(!e){G(d("topbar.exportFailed"));return}try{navigator.clipboard.writeText(e),G(d("topbar.linkCopied"))}catch{G(d("topbar.exportFailed"))}}function G(e){const n=document.getElementById("toast");n&&n.remove();const t=document.createElement("div");t.id="toast",t.className="fixed bottom-28 left-1/2 -translate-x-1/2 z-50 rounded-full bg-zinc-800/90 backdrop-blur-xl border border-white/10 px-5 py-2.5 text-sm text-zinc-200 shadow-2xl shadow-black/30 animate-fade-in",t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transition="opacity 0.3s",setTimeout(()=>t.remove(),300)},2e3)}function le(){const n=!o.getSidebarOpen();o.setSidebarOpen(n),me()}function ce(e){const n=o.get("_zoom")||0,t=Math.max(-50,Math.min(100,n+e));o.set("_zoom",t)}function xi(e){const n=parseInt(e.target.value);o.set("_zoom",n)}function et(e){const n=document.getElementById("zoom-slider");n&&(n.value=e);const t=document.getElementById("zoom-label");t&&(t.textContent=e>0?`+${e}%`:`${e}%`),te()}function ve(){const e=document.getElementById("templates-section");if(!e||!document.getElementById("sidebar"))return;const t=document.createElement("div");t.innerHTML=Je(),e.replaceWith(t.firstElementChild),document.querySelectorAll("[data-tmpl-action]").forEach(i=>{i.addEventListener("click",s=>{var l;const r=i.dataset.tmplAction,a=(l=i.closest("[data-tmpl-name]"))==null?void 0:l.dataset.tmplName;a&&(r==="load"?o.loadTemplate(a):r==="delete"&&(o.deleteTemplate(a),ve()))})})}function mi(){const e=document.getElementById("input-template-name");if(!e||!e.value.trim())return;const n=e.value.trim();o.saveTemplate(n),e.value="",ve(),G(d("templates.saved"))}function m(e,n,t){var i;(i=document.getElementById(e))==null||i.addEventListener(n,t)}function tt(){var r,a;const e=[{author:"Maya",handle:"@maya_99",username:"Maya",message:"Hey, are you coming online tonight?",time:"7:18 PM",roleColor:"#e81224",messages:[{text:"Hey, are you coming online tonight?",type:"sent",time:"7:18 PM"},{text:"Yeah, give me 5!",type:"received",time:"7:20 PM"},{text:"Sure, take your time 🐨",type:"sent",time:"7:21 PM"}]}],n=window.__LOCALE__,t=n!=null&&n.dummySets&&n.dummySets.length>0?n.dummySets:e,i=t[Math.floor(Math.random()*t.length)],s=i.messages&&i.messages.length>0?i.messages.map((l,p)=>({id:p+1,text:l.text,type:l.type,time:l.time,status:l.status||"read"})):[{id:1,text:i.message||"",type:o.get("waMode")||"sent",time:i.time||"",status:"read"}];return{author:i.author||"",handle:i.handle||"",username:i.username||i.author||"",message:i.message||((r=s[0])==null?void 0:r.text)||"",time:i.time||((a=s[0])==null?void 0:a.time)||"",roleColor:i.roleColor||"#5865F2",messages:s}}o.subscribe(di);try{const e=localStorage.getItem("koalasnap_state"),n=ue();let t=!e;if(e)try{const i=JSON.parse(e);(!i.locale||i.locale!==n)&&(t=!0)}catch{t=!0}if(t){const i=tt();i&&o.mutate({...i,locale:n})}}catch{}me();"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").catch(()=>{});ut()||setTimeout(()=>Ie(),800);
