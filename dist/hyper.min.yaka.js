/*!
 * Yaka.js - Next-Gen JavaScript Library
 * Version: 1.0.0
 * More powerful than jQuery, simpler to write
 * 
 * Copyright (c) 2026
 * Released under the MIT license
 */
!function(e){function t(e,n){if(!(this instanceof t))return new t(e,n)
if(this.elements=[],"function"==typeof e)return"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e),this
if(!e)return this
if("string"==typeof e){if("<"===e[0]){const t=document.createElement("div")
t.innerHTML=e,this.elements=[...t.children]}else this.elements=[...(n||document).querySelectorAll(e)]
return this}return e.nodeType?(this.elements=[e],this):Array.isArray(e)?(this.elements=e,this):(void 0!==e.length&&(this.elements=[...e]),this)}const n=new WeakMap
if(t.prototype={constructor:t,each(e){return this.elements.forEach((t,n)=>{e.call(t,n,t)}),this},get(e){return void 0===e?this.elements:this.elements[e]},first(){return new t(this.elements[0]??[])},last(){return new t(this.elements[this.elements.length-1]??[])},eq(e){const n=this.elements[e]
return new t(void 0!==n?n:[])},text(e){return void 0===e?this.elements[0]?.textContent||"":this.each((t,n)=>n.textContent=e)},html(e,n=!1){return void 0===e?this.elements[0]?.innerHTML||"":this.each((o,r)=>{n&&t.security&&"function"==typeof t.security.sanitizeHtml?r.innerHTML=t.security.sanitizeHtml(e):n?r.textContent=e:r.innerHTML=e})},val(e){return void 0===e?this.elements[0]?.value||"":this.each((t,n)=>n.value=e)},attr(e,t){if("object"==typeof e){const t=Object.keys(e)
return this.each((n,o)=>{t.forEach(t=>o.setAttribute(t,e[t]))})}return void 0===t?this.elements[0]?.getAttribute(e):this.each((n,o)=>o.setAttribute(e,t))},removeAttr(e){return this.each((t,n)=>n.removeAttribute(e))},data(e,t){return void 0===t?this.elements[0]?.dataset[e]:this.each((n,o)=>o.dataset[e]=t)},addClass(e,t){if(!t)return this.each((t,n)=>{e.split(" ").forEach(e=>n.classList.add(e))})
const n=[]
return this.elements.forEach(t=>{const o=e.split(" "),r={},a=getComputedStyle(t);["opacity","height","width","margin","padding"].forEach(e=>{r[e]=a[e]}),n.push({elem:t,classes:o,before:r})}),n.forEach(({elem:e,classes:t})=>{t.forEach(t=>e.classList.add(t))}),n.forEach(({elem:e,before:n})=>{const o=getComputedStyle(e),r=[]
Object.keys(n).forEach(e=>{n[e]!==o[e]&&r.push(`${e} ${t}ms ease`)}),r.length>0&&(e.style.transition=r.join(", "),setTimeout(()=>e.style.transition="",t))}),this},removeClass(e,t){if(!e)return console.warn("removeClass() with no arguments is deprecated. Use detach() to remove element from DOM."),this.each((e,t)=>t.remove())
if(!t)return this.each((t,n)=>{e.split(" ").forEach(e=>n.classList.remove(e))})
const n=[]
return this.elements.forEach(t=>{const o=e.split(" "),r={},a=getComputedStyle(t);["opacity","height","width","margin","padding"].forEach(e=>{r[e]=a[e]}),n.push({elem:t,classes:o,before:r})}),n.forEach(({elem:e,classes:t})=>{t.forEach(t=>e.classList.remove(t))}),n.forEach(({elem:e,before:n})=>{const o=getComputedStyle(e),r=[]
Object.keys(n).forEach(e=>{n[e]!==o[e]&&r.push(`${e} ${t}ms ease`)}),r.length>0&&(e.style.transition=r.join(", "),setTimeout(()=>e.style.transition="",t))}),this},toggleClass(e,n){return this.each(n?(o,r)=>{const a=r.classList.contains(e),s=new t(r)
a?s.removeClass(e,n):s.addClass(e,n)}:(t,n)=>{e.split(" ").forEach(e=>n.classList.toggle(e))})},hasClass(e){return this.elements[0]?.classList.contains(e)||!1},detach(){return this.each((e,t)=>t.remove())},css(e,t){if("object"==typeof e)return this.each((t,n)=>{Object.assign(n.style,e)})
if(void 0===t){const t=this.elements[0]
return t?getComputedStyle(t)[e]:""}return this.each((n,o)=>o.style[e]=t)},show(){return this.each((e,t)=>t.style.display="")},hide(){return this.each((e,t)=>t.style.display="none")},fadeIn(e=300){return this.each((t,n)=>{n.style.opacity="0",n.style.display="",n.style.transition=`opacity ${e}ms`,setTimeout(()=>n.style.opacity="1",10)})},fadeOut(e=300){return this.each((t,n)=>{n.style.transition=`opacity ${e}ms`,n.style.opacity="0",setTimeout(()=>n.style.display="none",e)})},slideDown(e=300){return this.each((t,n)=>{n.style.overflow="hidden",n.style.height="0",n.style.display=""
const o=n.scrollHeight
n.style.transition=`height ${e}ms`,setTimeout(()=>n.style.height=o+"px",10),setTimeout(()=>{n.style.height="",n.style.overflow=""},e)})},slideUp(e=300){return this.each((t,n)=>{n.style.overflow="hidden",n.style.height=n.scrollHeight+"px",n.style.transition=`height ${e}ms`,setTimeout(()=>n.style.height="0",10),setTimeout(()=>n.style.display="none",e)})},animate(e,t=400,n="ease"){return this.each((o,r)=>{const a=e=>{if(!e)return null
if(e.startsWith("#")){const t=e.substring(1)
return 3===t.length?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:1}:{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16),a:1}}if(e.startsWith("rgb")){const t=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+(?:\.\d+)?))?\s*\)/)
return t?{r:+t[1],g:+t[2],b:+t[3],a:void 0!==t[4]?+t[4]:1}:null}return null},s=["color","backgroundColor","borderColor"]
if(Object.keys(e).some(e=>s.includes(e))){const o={},i={}
Object.keys(e).forEach(t=>{if(s.includes(t)){const n=getComputedStyle(r)[t]
o[t]=a(n),i[t]=a(e[t])}})
const l=Date.now(),c=()=>{const e=Date.now()-l,n=Math.min(e/t,1)
Object.keys(o).forEach(e=>{if(o[e]&&i[e]){const t=Math.round(o[e].r+(i[e].r-o[e].r)*n),a=Math.round(o[e].g+(i[e].g-o[e].g)*n),s=Math.round(o[e].b+(i[e].b-o[e].b)*n),l=o[e].a+(i[e].a-o[e].a)*n
r.style[e]=1>l?`rgba(${t}, ${a}, ${s}, ${l})`:`rgb(${t}, ${a}, ${s})`}}),1>n&&requestAnimationFrame(c)}
c()
const d={}
if(Object.keys(e).forEach(t=>{s.includes(t)||(d[t]=e[t])}),Object.keys(d).length>0){const e=Object.keys(d).map(e=>`${e} ${t}ms ${n}`).join(", ")
r.style.transition=e,Object.assign(r.style,d),setTimeout(()=>r.style.transition="",t)}}else{const o=Object.keys(e).map(e=>`${e} ${t}ms ${n}`).join(", ")
r.style.transition=o,Object.assign(r.style,e),setTimeout(()=>r.style.transition="",t)}})},pulse(e=3){return this.each((t,n)=>{let o=0
const r=setInterval(()=>{n.style.transform=o%2==0?"scale(1.1)":"scale(1)",n.style.transition="transform 150ms",o++,2*e>o||(clearInterval(r),n.style.transform="")},150)})},shake(){return this.each((e,t)=>{t.style.animation="shake 0.5s",setTimeout(()=>t.style.animation="",500)})},bounce(e=3){return this.each((t,n)=>{n.style.animation="bounce 0.5s "+e,setTimeout(()=>n.style.animation="",500*e)})},flip(e="Y",t=600){return this.each((n,o)=>{o.style.transition=`transform ${t}ms`,o.style.transformStyle="preserve-3d"
const r="Y"===e.toUpperCase()?"rotateY(180deg)":"rotateX(180deg)"
o.style.transform=r,setTimeout(()=>o.style.transform="",t)})},zoomIn(e=400){return this.each((t,n)=>{n.style.transform="scale(0)",n.style.opacity="0",n.style.display="",n.style.transition=`transform ${e}ms, opacity ${e}ms`,setTimeout(()=>{n.style.transform="scale(1)",n.style.opacity="1"},10)})},zoomOut(e=400){return this.each((t,n)=>{n.style.transition=`transform ${e}ms, opacity ${e}ms`,n.style.transform="scale(0)",n.style.opacity="0",setTimeout(()=>n.style.display="none",e)})},swing(){return this.each((e,t)=>{t.style.animation="swing 0.8s",t.style.transformOrigin="top center",setTimeout(()=>t.style.animation="",800)})},rotateIn(e=600){return this.each((t,n)=>{n.style.transform="rotate(-360deg) scale(0)",n.style.opacity="0",n.style.display="",n.style.transition=`transform ${e}ms, opacity ${e}ms`,setTimeout(()=>{n.style.transform="rotate(0deg) scale(1)",n.style.opacity="1"},10)})},rotateOut(e=600){return this.each((t,n)=>{n.style.transition=`transform ${e}ms, opacity ${e}ms`,n.style.transform="rotate(360deg) scale(0)",n.style.opacity="0",setTimeout(()=>n.style.display="none",e)})},blurIn(e=400){return this.each((t,n)=>{n.style.filter="blur(20px)",n.style.opacity="0",n.style.display="",n.style.transition=`filter ${e}ms, opacity ${e}ms`,setTimeout(()=>{n.style.filter="blur(0px)",n.style.opacity="1"},10)})},blurOut(e=400){return this.each((t,n)=>{n.style.transition=`filter ${e}ms, opacity ${e}ms`,n.style.filter="blur(20px)",n.style.opacity="0",setTimeout(()=>n.style.display="none",e)})},slideInLeft(e=400){return this.each((t,n)=>{n.style.transform="translateX(-100%)",n.style.opacity="0",n.style.display="",n.style.transition=`transform ${e}ms, opacity ${e}ms`,setTimeout(()=>{n.style.transform="translateX(0)",n.style.opacity="1"},10)})},slideInRight(e=400){return this.each((t,n)=>{n.style.transform="translateX(100%)",n.style.opacity="0",n.style.display="",n.style.transition=`transform ${e}ms, opacity ${e}ms`,setTimeout(()=>{n.style.transform="translateX(0)",n.style.opacity="1"},10)})},slideInUp(e=400){return this.each((t,n)=>{n.style.transform="translateY(100%)",n.style.opacity="0",n.style.display="",n.style.transition=`transform ${e}ms, opacity ${e}ms`,setTimeout(()=>{n.style.transform="translateY(0)",n.style.opacity="1"},10)})},slideOutLeft(e=400){return this.each((t,n)=>{n.style.transition=`transform ${e}ms, opacity ${e}ms`,n.style.transform="translateX(-100%)",n.style.opacity="0",setTimeout(()=>n.style.display="none",e)})},slideOutRight(e=400){return this.each((t,n)=>{n.style.transition=`transform ${e}ms, opacity ${e}ms`,n.style.transform="translateX(100%)",n.style.opacity="0",setTimeout(()=>n.style.display="none",e)})},rubberBand(){return this.each((e,t)=>{t.style.animation="rubberBand 0.8s",setTimeout(()=>t.style.animation="",800)})},append(e){return this.each((t,n)=>{"string"==typeof e?n.insertAdjacentHTML("beforeend",e):e.elements?e.elements.forEach(e=>n.appendChild(e.cloneNode(!0))):e.nodeType&&n.appendChild(e)})},prepend(e){return this.each((t,n)=>{"string"==typeof e?n.insertAdjacentHTML("afterbegin",e):e.elements?e.elements.forEach(e=>n.insertBefore(e.cloneNode(!0),n.firstChild)):e.nodeType&&n.insertBefore(e,n.firstChild)})},after(e){return this.each((t,n)=>{"string"==typeof e?n.insertAdjacentHTML("afterend",e):e.nodeType&&n.parentNode&&n.parentNode.insertBefore(e,n.nextSibling)})},before(e){return this.each((t,n)=>{"string"==typeof e?n.insertAdjacentHTML("beforebegin",e):e.nodeType&&n.parentNode&&n.parentNode.insertBefore(e,n)})},empty(){return this.each((e,t)=>t.innerHTML="")},clone(){return new t(this.elements.map(e=>e.cloneNode(!0)))},replace(e){return this.each((t,n)=>{n.parentNode?"string"==typeof e?n.outerHTML=e:e.nodeType&&n.parentNode.replaceChild(e,n):console.warn("Yaka.replace: Cannot replace element without parent")})},wrap(e){return this.each((t,n)=>{if(!n.parentNode)return void console.warn("Yaka.wrap: Cannot wrap element without parent")
const o="string"==typeof e?document.createElement(e):e.cloneNode(!0)
n.parentNode.insertBefore(o,n),o.appendChild(n)})},parent(){return new t([...new Set(this.elements.map(e=>e.parentNode).filter(Boolean))])},children(e){const n=[]
this.each((e,t)=>n.push(...Array.from(t.children)))
const o=new t(n)
return e?o.filter(e):o},siblings(){const e=[]
return this.each((t,n)=>{const o=n.parentNode
o&&Array.from(o.children).forEach(t=>{t===n||e.includes(t)||e.push(t)})}),new t(e)},next(){return new t(this.elements.map(e=>e.nextElementSibling).filter(Boolean))},prev(){return new t(this.elements.map(e=>e.previousElementSibling).filter(Boolean))},find(e){const n=[]
return this.each((t,o)=>{n.push(...o.querySelectorAll(e))}),new t(n)},filter(e){return new t(this.elements.filter(t=>t.matches(e)))},closest(e){return new t(this.elements.map(t=>t.closest(e)).filter(Boolean))},is(e){return this.elements[0]?.matches(e)||!1},on(e,t,o){return"function"==typeof t&&(o=t,t=null),this.each((r,a)=>{if(t){const r=e=>{const n=e.target.closest(t)
n&&a.contains(n)&&o.call(n,e)}
n.has(o)||n.set(o,new WeakMap)
const s=n.get(o)
s.has(a)||s.set(a,new Map),s.get(a).set(`${e}:${t}`,r),a.addEventListener(e,r)}else a.addEventListener(e,o)})},off(e,t,o){return"function"==typeof t&&(o=t,t=null),this.each((r,a)=>{if(t&&n.has(o)){const r=n.get(o)
if(r.has(a)){const n=r.get(a),o=`${e}:${t}`,s=n.get(o)
s&&(a.removeEventListener(e,s),n.delete(o))}}else a.removeEventListener(e,o)})},once(e,t){return this.each((n,o)=>{o.addEventListener(e,t,{once:!0})})},trigger(e,t){return this.each((n,o)=>{const r=void 0!==t?new CustomEvent(e,{bubbles:!0,detail:t}):new Event(e,{bubbles:!0})
o.dispatchEvent(r)})},click(e){return e?this.on("click",e):(this.elements[0]?.click(),this)},submit(e){return e?this.on("submit",e):(this.elements[0]?.submit(),this)},change(e){return this.on("change",e)},input(e){return this.on("input",e)},focus(e){return e?this.on("focus",e):(this.elements[0]?.focus(),this)},blur(e){return this.on("blur",e)},hover(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},scroll(e){return this.on("scroll",e)},resize(e){return this.on("resize",e)},debounce(e,t,n=300){return this.each((o,r)=>{let a
r.addEventListener(e,e=>{clearTimeout(a),a=setTimeout(()=>t.call(r,e),n)})})},throttle(e,t,n=300){return this.each((o,r)=>{let a=0
r.addEventListener(e,e=>{const o=Date.now()
n>o-a||(t.call(r,e),a=o)})})},onVisible(e,t={}){const n=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&e.call(t.target,t)})},t)
return this.each((e,t)=>n.observe(t)),this},lazyLoad(){return this.onVisible(function(){const e=this,t=e.dataset.src
t&&(e.src=t,e.removeAttribute("data-src"))})},copy(){const e=this.text()
return navigator.clipboard.writeText(e).catch(e=>console.warn("Yaka copy: clipboard write failed",e)),this},serialize(){const e=this.elements[0]
if(!e||"FORM"!==e.tagName)return{}
const t=new FormData(e),n={}
for(let[e,o]of t.entries())n[e]=o
return n},autoSave(e,n=1e3){return this.debounce("input",function(){try{const n=new t(this).serialize()
localStorage.setItem(e,JSON.stringify(n))}catch(e){console.warn("Yaka autoSave: localStorage unavailable",e)}},n)},restore(e){try{const t=JSON.parse(localStorage.getItem(e)||"{}")
return this.each((e,n)=>{"FORM"===n.tagName&&Object.keys(t).forEach(e=>{const o=n.querySelector(`[name="${e}"]`)
o&&(o.value=t[e])})})}catch(e){return console.warn("Yaka restore: localStorage unavailable",e),this}},validate(e){const t=this.elements[0]
if(!t)return{valid:!0,errors:{}}
const n={}
let o=!0
return Object.keys(e).forEach(r=>{const a=t.querySelector(`[name="${r}"]`)
if(!a)return
const s=e[r],i=a.value,l=[]
s.required&&!i&&l.push(s.requiredMessage||s.message||"This field is required"),i&&s.pattern&&!s.pattern.test(i)&&l.push(s.patternMessage||s.message||"Invalid format"),i&&s.min&&s.min>i.length&&l.push(s.minMessage||s.message||`Minimum ${s.min} characters`),i&&s.max&&i.length>s.max&&l.push(s.maxMessage||s.message||`Maximum ${s.max} characters`),l.length>0&&(n[r]=1!==l.length||!s.message||s.requiredMessage||s.patternMessage||s.minMessage||s.maxMessage?l:l[0],o=!1)}),{valid:o,errors:n}},scrollTo(e=500){return this.elements[0]&&this.elements[0].scrollIntoView({behavior:"smooth",block:"start"}),this},countUp(e,t=2e3){return this.each((n,o)=>{if("number"!=typeof e||isNaN(e))return void console.error("countUp target must be a valid number")
const r=parseInt(o.textContent)||0,a=e-r,s=performance.now(),i=e=>{const n=Math.min((e-s)/t,1)
o.textContent=Math.round(r+a*n),1>n&&requestAnimationFrame(i)}
requestAnimationFrame(i)})},typeWriter(e,t=50){return this.each((n,o)=>{if("string"!=typeof e)return void console.error("typeWriter requires a string")
o.textContent=""
let r=0
const a=setInterval(()=>{e.length>r?(o.textContent+=e.charAt(r),r++):clearInterval(a)},t)})},confetti(){return this.each((e,t)=>{t._yaka_confetti_timeouts||(t._yaka_confetti_timeouts=[])
const n=["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff"]
for(let e=0;50>e;e++){const e=document.createElement("div")
e.style.cssText=`\n                        position: absolute;\n                        width: 10px;\n                        height: 10px;\n                        background: ${n[Math.floor(6*Math.random())]};\n                        left: ${100*Math.random()}%;\n                        top: -10px;\n                        animation: fall ${2+3*Math.random()}s linear;\n                    `,t.style.position="relative",t.appendChild(e)
const o=setTimeout(()=>e.remove(),5e3)
t._yaka_confetti_timeouts.push(o)}t._yaka_confetti_cleanup||(t._yaka_confetti_cleanup=()=>{t._yaka_confetti_timeouts&&(t._yaka_confetti_timeouts.forEach(e=>clearTimeout(e)),t._yaka_confetti_timeouts=[]),delete t._yaka_confetti_cleanup})})}},t.get=async(e,t)=>{const n=t?"?"+new URLSearchParams(t):"",o=await fetch(e+n)
if(!o.ok)throw Error("HTTP error! status: "+o.status)
const r=o.headers.get("content-type")
return r&&r.includes("application/json")?o.json():o.text()},t.post=async(e,t)=>{const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})
if(!n.ok)throw Error("HTTP error! status: "+n.status)
return n.json()},t.put=async(e,t)=>{const n=await fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})
if(!n.ok)throw Error("HTTP error! status: "+n.status)
return n.json()},t.delete=async e=>{const t=await fetch(e,{method:"DELETE"})
if(!t.ok)throw Error("HTTP error! status: "+t.status)
return 204===t.status||"0"===t.headers.get("content-length")?null:t.json()},t.ajax=async e=>{const{url:t,method:n="GET",data:o,headers:r={}}=e,a={method:n,headers:{"Content-Type":"application/json",...r}}
"GET"!==n&&o&&(a.body=JSON.stringify(o))
const s="GET"===n&&o?t+"?"+new URLSearchParams(o):t,i=await fetch(s,a)
if(!i.ok)throw Error("HTTP error! status: "+i.status)
return i.json()},t.each=(e,t)=>{Array.isArray(e)?e.forEach(t):Object.keys(e).forEach(n=>t(n,e[n]))},t.map=(e,t)=>e.map(t),t.filter=(e,t)=>e.filter(t),t.ready=e=>{"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)},t.debounce=function(e,t=300){let n
return function(...o){clearTimeout(n),n=setTimeout(()=>e.apply(this,o),t)}},t.throttle=function(e,t=300){let n=0
return function(...o){const r=Date.now()
t>r-n||(e.apply(this,o),n=r)}},t.randomId=(e="id")=>`${e}_${Math.random().toString(36).substr(2,9)}`,t.formatNumber=e=>(""+e).replace(/\B(?=(\d{3})+(?!\d))/g,","),t.formatCurrency=(e,n="$")=>`${n}${t.formatNumber(e.toFixed(2))}`,t.parseQuery=(t=e.location.search)=>{const n=new URLSearchParams(t),o={}
for(let[e,t]of n)o[e]=t
return o},t.deepClone=(e,n=new WeakMap)=>{if(null===e||"object"!=typeof e)return e
if(n.has(e))return n.get(e)
if(e instanceof Date)return new Date(e)
if(e instanceof RegExp)return RegExp(e)
if(Array.isArray(e)){const o=[]
return n.set(e,o),e.forEach((e,r)=>{o[r]=t.deepClone(e,n)}),o}const o=Object.create(Object.getPrototypeOf(e))
return n.set(e,o),Object.keys(e).forEach(r=>{o[r]=t.deepClone(e[r],n)}),o},t.merge=(...e)=>{const n={}
return e.forEach(e=>{e&&"object"==typeof e&&Object.keys(e).forEach(o=>{const r=e[o],a=n[o]
n[o]=Array.isArray(r)?t.deepClone(r):r&&"object"==typeof r&&!Array.isArray(r)?a&&"object"==typeof a?t.merge(a,r):t.deepClone(r):r})}),n},t.isEqual=(e,n)=>{if(e===n)return!0
if(null==e||null==n)return!1
if(typeof e!=typeof n)return!1
if(e instanceof Date&&n instanceof Date)return e.getTime()===n.getTime()
if(Array.isArray(e)&&Array.isArray(n))return e.length===n.length&&e.every((e,o)=>t.isEqual(e,n[o]))
if("object"==typeof e&&"object"==typeof n){const o=Object.keys(e)
return o.length===Object.keys(n).length&&o.every(o=>t.isEqual(e[o],n[o]))}return!1},t.getProperty=(e,t,n)=>{if(!e||"string"!=typeof t)return n
const o=t.split(".")
let r=e
for(const e of o){if(null==r)return n
r=r[e]}return void 0!==r?r:n},t.set=(e,t,n)=>{if(!e||"string"!=typeof t)return e
const o=t.split("."),r=o.pop()
let a=e
for(const e of o)e in a&&"object"==typeof a[e]||(a[e]={}),a=a[e]
return a[r]=n,e},t.pick=(e,t)=>{const n={}
return t.forEach(t=>{t in e&&(n[t]=e[t])}),n},t.omit=(e,t)=>{const n={...e}
return t.forEach(e=>delete n[e]),n},t.chunk=(e,t=1)=>{const n=[]
for(let o=0;e.length>o;o+=t)n.push(e.slice(o,o+t))
return n},t.flatten=(e,n=1)=>0===n?e.slice():e.reduce((e,o)=>(Array.isArray(o)?e.push(...t.flatten(o,n-1)):e.push(o),e),[]),t.flattenDeep=e=>t.flatten(e,1/0),t.uniq=e=>[...new Set(e)],t.uniqBy=(e,t)=>{const n=new Set
return e.filter(e=>{const o="function"==typeof t?t(e):e[t]
return!n.has(o)&&(n.add(o),!0)})},t.range=(e,t,n=1)=>{void 0===t&&(t=e,e=0)
const o=[]
if(n>0)for(let r=e;t>r;r+=n)o.push(r)
else for(let r=e;r>t;r+=n)o.push(r)
return o},t.shuffle=e=>{const t=[...e]
for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t},t.sample=(e,n=1)=>{if(1===n)return e[Math.floor(Math.random()*e.length)]
const o=t.shuffle(e)
return o.slice(0,Math.min(n,o.length))},t.groupBy=(e,t)=>e.reduce((e,n)=>{const o="function"==typeof t?t(n):n[t]
return e[o]||(e[o]=[]),e[o].push(n),e},{}),t.sortBy=(e,t)=>[...e].sort((e,n)=>{const o="function"==typeof t?t(e):e[t],r="function"==typeof t?t(n):n[t]
return r>o?-1:o>r?1:0}),t.partition=(e,t)=>{const n=[],o=[]
return e.forEach((r,a)=>{t(r,a,e)?n.push(r):o.push(r)}),[n,o]},t.intersection=(...e)=>{if(0===e.length)return[]
const[t,...n]=e
return t.filter(e=>n.every(t=>t.includes(e)))},t.union=(...e)=>t.uniq(e.flat()),t.difference=(e,...t)=>{const n=t.flat()
return e.filter(e=>!n.includes(e))},t.camelCase=e=>e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(e,t)=>t.toUpperCase()),t.kebabCase=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),t.snakeCase=e=>e.replace(/([a-z])([A-Z])/g,"$1_$2").replace(/[\s-]+/g,"_").toLowerCase(),t.capitalize=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),t.capitalizeWords=e=>e.replace(/\b\w/g,e=>e.toUpperCase()),t.truncate=(e,t=50,n="...")=>e.length>t?e.substring(0,t-n.length)+n:e,t.slugify=e=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,""),t.escape=e=>{const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}
return e.replace(/[&<>"'/]/g,e=>t[e])},t.unescape=e=>{const t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'","&#x2F;":"/"}
return e.replace(/&(?:amp|lt|gt|quot|#x27|#x2F);/g,e=>t[e])},t.formatDate=(e,t="YYYY-MM-DD")=>{const n=new Date(e),o={YYYY:n.getFullYear(),MM:(n.getMonth()+1+"").padStart(2,"0"),DD:(n.getDate()+"").padStart(2,"0"),HH:(n.getHours()+"").padStart(2,"0"),mm:(n.getMinutes()+"").padStart(2,"0"),ss:(n.getSeconds()+"").padStart(2,"0")}
return t.replace(/YYYY|MM|DD|HH|mm|ss/g,e=>o[e])},t.fromNow=e=>{const t=Date.now()-new Date(e).getTime(),n=Math.floor(t/1e3),o=Math.floor(n/60),r=Math.floor(o/60),a=Math.floor(r/24),s=Math.floor(a/30),i=Math.floor(a/365)
return 60>n?"just now":60>o?`${o} minute${o>1?"s":""} ago`:24>r?`${r} hour${r>1?"s":""} ago`:30>a?`${a} day${a>1?"s":""} ago`:12>s?`${s} month${s>1?"s":""} ago`:`${i} year${i>1?"s":""} ago`},t.diffDates=(e,t,n="days")=>Math.floor((new Date(t)-new Date(e))/({milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:2592e6,years:31536e6}[n]||864e5)),t.addDays=(e,t)=>{const n=new Date(e)
return n.setDate(n.getDate()+t),n},t.addHours=(e,t)=>{const n=new Date(e)
return n.setHours(n.getHours()+t),n},t.addMinutes=(e,t)=>{const n=new Date(e)
return n.setMinutes(n.getMinutes()+t),n},t.isArray=Array.isArray,t.isObject=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),t.isFunction=e=>"function"==typeof e,t.isString=e=>"string"==typeof e,t.isNumber=e=>"number"==typeof e&&!isNaN(e),t.isBoolean=e=>"boolean"==typeof e,t.isNull=e=>null===e,t.isUndefined=e=>void 0===e,t.isNil=e=>null==e,t.isEmpty=e=>null==e||(Array.isArray(e)||"string"==typeof e?0===e.length:"object"==typeof e&&0===Object.keys(e).length),t.isDate=e=>e instanceof Date&&!isNaN(e),t.isRegExp=e=>e instanceof RegExp,t.isError=e=>e instanceof Error,t.sleep=e=>new Promise(t=>setTimeout(t,e)),t.retry=async(e,n={})=>{const{times:o=3,delay:r=1e3,backoff:a=2}=n
let s
for(let n=0;o>n;n++)try{return await e()}catch(e){s=e,o-1>n&&await t.sleep(r*Math.pow(a,n))}throw s},t.timeout=(e,t,n="Timeout")=>Promise.race([e,new Promise((e,o)=>setTimeout(()=>o(Error(n)),t))]),t.all=Promise.all.bind(Promise),t.race=Promise.race.bind(Promise),t.allSettled=e=>Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e})).catch(e=>({status:"rejected",reason:e})))),t.clamp=(e,t,n)=>Math.min(Math.max(e,t),n),t.random=(e=0,t=1,n=!1)=>(e>t&&([e,t]=[t,e]),n||e%1!=0||t%1!=0?Math.random()*(t-e)+e:Math.floor(Math.random()*(t-e+1))+e),t.sum=e=>e&&0!==e.length?e.reduce((e,t)=>e+t,0):0,t.mean=e=>e&&0!==e.length?t.sum(e)/e.length:0,t.median=e=>{if(!e||0===e.length)return 0
const t=[...e].sort((e,t)=>e-t),n=Math.floor(t.length/2)
return t.length%2?t[n]:(t[n-1]+t[n])/2},t.min=e=>e&&0!==e.length?Math.min(...e):1/0,t.max=e=>e&&0!==e.length?Math.max(...e):-1/0,t.cookie={set(e,t,n=7){const o=new Date
o.setTime(o.getTime()+864e5*n),document.cookie=`${e}=${t};expires=${o.toUTCString()};path=/`},get(e){const t=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),n=document.cookie.match(RegExp("(^| )"+t+"=([^;]+)"))
return n?n[2]:null},remove(e){this.set(e,"",-1)}},t.storage={set(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.warn("Yaka.storage.set: localStorage unavailable or quota exceeded",e)}},get(e){const t=localStorage.getItem(e)
if(!t)return null
try{return JSON.parse(t)}catch{return t}},remove(e){try{localStorage.removeItem(e)}catch(e){console.warn("Yaka.storage.remove: localStorage unavailable",e)}},clear(){try{localStorage.clear()}catch(e){console.warn("Yaka.storage.clear: localStorage unavailable",e)}}},t.prototype.draggable=function(e={}){return this.each((t,n)=>{if(n._yaka_draggable)return
n._yaka_draggable=!0
let o,r,a,s,i=!1
n.style.cursor="move",n.style.userSelect="none","static"===getComputedStyle(n).position&&(n.style.position=e.position||"absolute")
const l=t=>{t.preventDefault(),i=!0,o=t.clientX,r=t.clientY
const l=n.getBoundingClientRect(),c=n.offsetParent?n.offsetParent.getBoundingClientRect():{left:0,top:0}
a=l.left-c.left,s=l.top-c.top,n.style.zIndex=1e3,e.onStart&&e.onStart.call(n,t)},c=t=>{if(!i)return
t.preventDefault()
let l=a+(t.clientX-o),c=s+(t.clientY-r)
if(e.containment){const t=n.getBoundingClientRect()
let o
if("parent"===e.containment?o=n.offsetParent||document.body:"string"==typeof e.containment?(o=document.querySelector(e.containment),o||console.warn(`Draggable: containment selector "${e.containment}" not found`)):e.containment instanceof Element&&(o=e.containment),o){const e=o.getBoundingClientRect(),r=n.offsetParent?n.offsetParent.getBoundingClientRect():{left:0,top:0},a=e.left-r.left,s=e.top-r.top,i=s+e.height-t.height
l=Math.max(a,Math.min(a+e.width-t.width,l)),c=Math.max(s,Math.min(i,c))}}n.style.left=l+"px",n.style.top=c+"px",e.onDrag&&e.onDrag.call(n,t)},d=t=>{i&&(i=!1,n.style.zIndex="",e.onEnd&&e.onEnd.call(n,t))}
n.addEventListener("mousedown",l),document.addEventListener("mousemove",c),document.addEventListener("mouseup",d),n._yaka_draggable_cleanup=()=>{n.removeEventListener("mousedown",l),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",d),delete n._yaka_draggable,delete n._yaka_draggable_cleanup}})},t.prototype.sortable=function(e={}){return this.each((t,n)=>{if(n._yaka_sortable)return
n._yaka_sortable=!0
let o=null
const r=[]
Array.from(n.children).forEach(t=>{t.draggable=!0,t.style.cursor="move"
const a=e=>{o=t,t.style.opacity="0.5"},s=()=>{t.style.opacity="",e.onChange&&e.onChange.call(n)},i=e=>{e.preventDefault()
const t=((e,t)=>[...e.querySelectorAll('[draggable="true"]:not(.dragging)')].reduce((e,n)=>{const o=n.getBoundingClientRect(),r=t-o.top-o.height/2
return 0>r&&r>e.offset?{offset:r,element:n}:e},{offset:-1/0}).element)(n,e.clientY)
null===t?n.appendChild(o):n.insertBefore(o,t)}
t.addEventListener("dragstart",a),t.addEventListener("dragend",s),t.addEventListener("dragover",i),r.push({element:t,events:[{type:"dragstart",handler:a},{type:"dragend",handler:s},{type:"dragover",handler:i}]})}),n._yaka_sortable_cleanup=()=>{r.forEach(({element:e,events:t})=>{t.forEach(({type:t,handler:n})=>{e.removeEventListener(t,n)})}),delete n._yaka_sortable,delete n._yaka_sortable_cleanup}})},t.prototype.resizable=function(e={}){return this.each((t,n)=>{if(n._yaka_resizable)return
n._yaka_resizable=!0
const o=e.handles||["se","e","s","sw","ne","nw","n","w"],r=e.minWidth||50,a=e.minHeight||50,s=e.maxWidth||1/0,i=e.maxHeight||1/0,l=e.aspectRatio||!1
"static"===getComputedStyle(n).position&&(n.style.position=e.position||"absolute"),n.style.width||(n.style.width=n.offsetWidth+"px"),n.style.height||(n.style.height=n.offsetHeight+"px")
const c=e.handleOffset||"-4px",d={se:{cursor:"nwse-resize",right:c,bottom:c},e:{cursor:"ew-resize",right:c,top:"50%",transform:"translateY(-50%)"},s:{cursor:"ns-resize",bottom:c,left:"50%",transform:"translateX(-50%)"},sw:{cursor:"nesw-resize",left:c,bottom:c},ne:{cursor:"nesw-resize",right:c,top:c},nw:{cursor:"nwse-resize",left:c,top:c},n:{cursor:"ns-resize",top:c,left:"50%",transform:"translateX(-50%)"},w:{cursor:"ew-resize",left:c,top:"50%",transform:"translateY(-50%)"}},p=[]
o.forEach(t=>{const o=document.createElement("div")
o.className="yaka-resize-handle yaka-resize-"+t,o.style.cssText="\n                    position: absolute;\n                    width: 10px;\n                    height: 10px;\n                    background: #4285f4;\n                    border: 2px solid white;\n                    border-radius: 50%;\n                    box-sizing: border-box;\n                    z-index: 1000;\n                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);\n                ",Object.assign(o.style,d[t]),n.appendChild(o),p.push(o)
let c,u,h,m,y,f,g=!1
o.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation(),g=!0,c=o.clientX,u=o.clientY,h=n.offsetWidth,m=n.offsetHeight,y=parseFloat(n.style.left)||n.offsetLeft,f=parseFloat(n.style.top)||n.offsetTop,document.body.style.userSelect="none",e.onStart&&e.onStart.call(n,o)
const d=o=>{if(!g)return
o.preventDefault()
const d=o.clientX-c,p=o.clientY-u
let b=h,v=m,x=y,k=f
t.includes("e")&&(b=h+d),t.includes("w")&&(b=h-d),t.includes("s")&&(v=m+p),t.includes("n")&&(v=m-p)
const _=Math.max(r,Math.min(s,b)),w=Math.max(a,Math.min(i,v))
if(l){const e=h/m
t.includes("e")||t.includes("w")?(v=_/e,b=_):t.includes("n")||t.includes("s")?(b=w*e,v=w):Math.abs(d)>Math.abs(p)?(v=_/e,b=_):(b=w*e,v=w),b=Math.max(r,Math.min(s,b)),v=Math.max(a,Math.min(i,v))}else b=_,v=w
t.includes("w")&&(x=y-(b-h)),t.includes("n")&&(k=f-(v-m)),n.style.width=b+"px",n.style.height=v+"px",t.includes("w")&&(n.style.left=x+"px"),t.includes("n")&&(n.style.top=k+"px"),e.onResize&&e.onResize.call(n,o,{width:b,height:v})},p=t=>{g&&(g=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",p),e.onStop&&e.onStop.call(n,t))}
document.addEventListener("mousemove",d),document.addEventListener("mouseup",p)})}),n._yaka_resizable_cleanup=()=>{p.forEach(e=>e.remove()),delete n._yaka_resizable,delete n._yaka_resizable_cleanup}})},t.prototype.droppable=function(e={}){return this.each((t,n)=>{if(n._yaka_droppable)return
n._yaka_droppable=!0
const o=e.accept||"*",r=e.hoverClass||"yaka-drop-hover",a=e.activeClass||"yaka-drop-active"
let s=!1
const i=t=>{t.preventDefault(),("*"===o||t.target.matches&&t.target.matches(o))&&(s=!0,n.classList.add(r),e.onDragEnter&&e.onDragEnter.call(n,t))},l=t=>{t.preventDefault(),t.dataTransfer.dropEffect="move",e.onDragOver&&e.onDragOver.call(n,t)},c=t=>{t.preventDefault(),t.target===n&&(s=!1,n.classList.remove(r),e.onDragLeave&&e.onDragLeave.call(n,t))},d=t=>{t.preventDefault(),t.stopPropagation(),s=!1,n.classList.remove(r),n.classList.remove(a)
const o=t.dataTransfer.getData("text/html")||t.dataTransfer.getData("text/plain")
e.onDrop&&e.onDrop.call(n,t,{data:o})}
n.addEventListener("dragenter",i),n.addEventListener("dragover",l),n.addEventListener("dragleave",c),n.addEventListener("drop",d)
const p=()=>{n.classList.add(a)},u=()=>{n.classList.remove(a),n.classList.remove(r)}
document.addEventListener("dragstart",p),document.addEventListener("dragend",u),n._yaka_droppable_cleanup=()=>{n.removeEventListener("dragenter",i),n.removeEventListener("dragover",l),n.removeEventListener("dragleave",c),n.removeEventListener("drop",d),document.removeEventListener("dragstart",p),document.removeEventListener("dragend",u),delete n._yaka_droppable,delete n._yaka_droppable_cleanup}})},t.prototype.selectable=function(e={}){return this.each((t,n)=>{if(n._yaka_selectable)return
n._yaka_selectable=!0
const o=e.filter||"*",r=e.cancel||"input,textarea,button,select,option",a=e.tolerance||"touch"
let s,i,l=!1,c=null,d=new Set
const p=(e,t)=>{const n=Math.min(s,e),o=Math.min(i,t),r=Math.abs(e-s),a=Math.abs(t-i)
c.style.left=n+"px",c.style.top=o+"px",c.style.width=r+"px",c.style.height=a+"px"},u=t=>{t.target.matches(r)||(t.ctrlKey||t.metaKey||(d.forEach(e=>{e.classList.remove("ui-selected")}),d.clear()),l=!0,s=t.clientX,i=t.clientY,c&&c.parentNode||(c=document.createElement("div"),c.style.cssText="\n                    position: fixed;\n                    border: 1px dashed #4285f4;\n                    background: rgba(66, 133, 244, 0.1);\n                    z-index: 9999;\n                    pointer-events: none;\n                ",document.body.appendChild(c)),p(t.clientX,t.clientY),e.onStart&&e.onStart.call(n,t))},h=t=>{l&&(p(t.clientX,t.clientY),(()=>{const t=c.getBoundingClientRect()
n.querySelectorAll(o).forEach(n=>{n.matches(r)||(((e,t)=>{const n=e.getBoundingClientRect()
return"fit"===a?!(t.left>n.left||n.right>t.right||t.top>n.top||n.bottom>t.bottom):!(t.left>n.right||n.left>t.right||t.top>n.bottom||n.top>t.bottom)})(n,t)?d.has(n)||(d.add(n),n.classList.add("ui-selected"),e.onSelect&&e.onSelect.call(n)):d.has(n)&&(d.delete(n),n.classList.remove("ui-selected"),e.onUnselect&&e.onUnselect.call(n)))})})())},m=t=>{l&&(l=!1,c&&c.parentNode&&c.remove(),c=null,e.onStop&&e.onStop.call(n,t,Array.from(d)))}
n.addEventListener("mousedown",u),document.addEventListener("mousemove",h),document.addEventListener("mouseup",m),n._yaka_selectable_cleanup=()=>{n.removeEventListener("mousedown",u),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",m),c&&c.parentNode&&c.remove(),d.forEach(e=>e.classList.remove("ui-selected")),delete n._yaka_selectable,delete n._yaka_selectable_cleanup}})},t.prototype.swipe=function(e){return this.each((t,n)=>{let o,r,a
n.addEventListener("touchstart",e=>{o=e.touches[0].clientX,r=e.touches[0].clientY,a=Date.now()}),n.addEventListener("touchend",t=>{const s=t.changedTouches[0].clientX-o,i=t.changedTouches[0].clientY-r
300>Date.now()-a&&(Math.abs(s)>Math.abs(i)?(s>50&&e.right&&e.right.call(n,t),-50>s&&e.left&&e.left.call(n,t)):(i>50&&e.down&&e.down.call(n,t),-50>i&&e.up&&e.up.call(n,t)))})})},t.state=(e={})=>{let t={...e}
const n=[]
return{get:e=>e?t[e]:t,set(e,o){"object"==typeof e?t={...t,...e}:t[e]=o,n.forEach(e=>e(t))},subscribe:e=>(n.push(e),()=>{const t=n.indexOf(e)
t>-1&&n.splice(t,1)}),reset(){t={...e},n.forEach(e=>e(t))}}},t.notify=(e,t="info",n=3e3)=>{const o=document.createElement("div"),r={info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}
o.style.cssText=`\n            position: fixed;\n            top: 20px;\n            right: 20px;\n            background: ${r[t]||r.info};\n            color: white;\n            padding: 16px 24px;\n            border-radius: 8px;\n            box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n            z-index: 10000;\n            animation: slideIn 0.3s ease;\n            max-width: 300px;\n            font-family: system-ui, -apple-system, sans-serif;\n        `,o.textContent=e,document.body.appendChild(o),setTimeout(()=>{o.style.animation="slideOut 0.3s ease",setTimeout(()=>o.remove(),300)},n)},t.toast=(e,t={})=>{const n=t.position||"top-right",o=t.duration||5e3,r=!1!==t.progressBar,a=!1!==t.closeButton,s={success:{bg:"#51A351",icon:"✓"},error:{bg:"#BD362F",icon:"✕"},warning:{bg:"#F89406",icon:"⚠"},info:{bg:"#2F96B4",icon:"ℹ"}},i=s[t.type||"info"]||s.info,l={"top-right":"top: 20px; right: 20px;","top-left":"top: 20px; left: 20px;","top-center":"top: 20px; left: 50%; transform: translateX(-50%);","bottom-right":"bottom: 20px; right: 20px;","bottom-left":"bottom: 20px; left: 20px;","bottom-center":"bottom: 20px; left: 50%; transform: translateX(-50%);"},c=document.createElement("div")
c.className="yaka-toast",c.style.cssText=`\n            position: fixed;\n            ${l[n]||l["top-right"]}\n            background: ${i.bg};\n            color: white;\n            padding: 16px 20px;\n            border-radius: 6px;\n            box-shadow: 0 4px 12px rgba(0,0,0,0.3);\n            z-index: 10001;\n            min-width: 250px;\n            max-width: 350px;\n            font-family: system-ui, -apple-system, sans-serif;\n            animation: toastSlideIn 0.3s ease;\n            cursor: pointer;\n        `
const d=document.createElement("div")
d.style.cssText="display: flex; align-items: center; gap: 12px;"
const p=document.createElement("span")
p.textContent=i.icon,p.style.cssText="font-size: 20px; font-weight: bold;"
const u=document.createElement("span")
if(u.textContent=e,u.style.cssText="flex: 1;",d.appendChild(p),d.appendChild(u),a){const e=document.createElement("span")
e.innerHTML="×",e.style.cssText="font-size: 24px; margin-left: 10px; cursor: pointer; opacity: 0.8;",e.onclick=()=>h(),d.appendChild(e)}if(c.appendChild(d),r){const e=document.createElement("div")
e.style.cssText=`\n                position: absolute;\n                bottom: 0;\n                left: 0;\n                height: 4px;\n                background: rgba(255,255,255,0.7);\n                width: 100%;\n                animation: toastProgress ${o}ms linear;\n            `,c.appendChild(e)}document.body.appendChild(c)
const h=()=>{c.style.animation="toastSlideOut 0.3s ease",setTimeout(()=>c.remove(),300)}
return c.onclick=()=>{t.onClick&&t.onClick(),h()},o>0&&setTimeout(h,o),{close:h}},t.alert=(e={})=>{const t=e.title||"",n=e.text||"",o=e.confirmButtonText||"OK",r=e.cancelButtonText||"Cancel",a=e.showCancelButton||!1,s=e.input||null,i={success:{icon:"✓",color:"#4CAF50"},error:{icon:"✕",color:"#F44336"},warning:{icon:"⚠",color:"#FF9800"},info:{icon:"ℹ",color:"#2196F3"},question:{icon:"?",color:"#9C27B0"}},l=i[e.type||"info"]||i.info
return new Promise((i,c)=>{const d=document.createElement("div")
d.style.cssText="\n                position: fixed;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background: rgba(0,0,0,0.6);\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                z-index: 10002;\n                animation: fadeIn 0.2s ease;\n            "
const p=document.createElement("div")
if(p.style.cssText="\n                background: white;\n                padding: 30px;\n                border-radius: 12px;\n                max-width: 500px;\n                min-width: 300px;\n                box-shadow: 0 10px 40px rgba(0,0,0,0.3);\n                animation: scaleIn 0.3s ease;\n                text-align: center;\n            ",l){const e=document.createElement("div")
e.style.cssText=`\n                    width: 80px;\n                    height: 80px;\n                    border-radius: 50%;\n                    border: 4px solid ${l.color};\n                    margin: 0 auto 20px;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    font-size: 48px;\n                    color: ${l.color};\n                    animation: iconPulse 0.5s ease;\n                `,e.textContent=l.icon,p.appendChild(e)}if(t){const e=document.createElement("h2")
e.textContent=t,e.style.cssText="margin: 0 0 15px 0; color: #333; font-size: 24px;",p.appendChild(e)}if(n){const e=document.createElement("p")
e.textContent=n,e.style.cssText="margin: 0 0 25px 0; color: #666; font-size: 16px; line-height: 1.5;",p.appendChild(e)}let u=null
s&&(u=document.createElement("input"),u.type="password"===s?"password":"text",u.placeholder=e.inputPlaceholder||"",u.value=e.inputValue||"",u.style.cssText="\n                    width: 100%;\n                    padding: 10px;\n                    border: 2px solid #ddd;\n                    border-radius: 6px;\n                    font-size: 14px;\n                    margin-bottom: 20px;\n                    box-sizing: border-box;\n                ",p.appendChild(u))
const h=document.createElement("div")
if(h.style.cssText="display: flex; gap: 10px; justify-content: center;",a){const e=document.createElement("button")
e.textContent=r,e.style.cssText="\n                    padding: 12px 30px;\n                    border: 2px solid #ddd;\n                    background: white;\n                    color: #666;\n                    border-radius: 6px;\n                    cursor: pointer;\n                    font-size: 14px;\n                    font-weight: 600;\n                    transition: all 0.2s;\n                ",e.onmouseover=()=>e.style.background="#f5f5f5",e.onmouseout=()=>e.style.background="white",e.onclick=()=>{d.remove(),i({isConfirmed:!1,isDismissed:!0})},h.appendChild(e)}const m=document.createElement("button")
m.textContent=o,m.style.cssText=`\n                padding: 12px 30px;\n                border: none;\n                background: ${l.color};\n                color: white;\n                border-radius: 6px;\n                cursor: pointer;\n                font-size: 14px;\n                font-weight: 600;\n                transition: all 0.2s;\n            `,m.onmouseover=()=>m.style.opacity="0.9",m.onmouseout=()=>m.style.opacity="1",m.onclick=()=>{const e=u?u.value:null
d.remove(),i({isConfirmed:!0,value:e})},h.appendChild(m),p.appendChild(h),d.appendChild(p),document.body.appendChild(d),u&&setTimeout(()=>u.focus(),100)})},t.modal=(e,t={})=>{const n=document.createElement("div")
n.style.cssText="\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0,0,0,0.5);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            z-index: 9999;\n            animation: fadeIn 0.3s ease;\n        "
const o=document.createElement("div")
return o.style.cssText=`\n            background: white;\n            padding: 30px;\n            border-radius: 12px;\n            max-width: ${t.width||"500px"};\n            max-height: 80vh;\n            overflow-y: auto;\n            box-shadow: 0 10px 40px rgba(0,0,0,0.3);\n            animation: scaleIn 0.3s ease;\n        `,o.innerHTML=e,n.appendChild(o),document.body.appendChild(n),n.addEventListener("click",e=>{e.target===n&&(n.style.animation="fadeOut 0.3s ease",setTimeout(()=>n.remove(),300))}),{close(){n.style.animation="fadeOut 0.3s ease",setTimeout(()=>n.remove(),300)}}},t.prototype.tooltip=function(e,t="top"){return this.each((n,o)=>{if(o._yaka_tooltip)return
o._yaka_tooltip=!0
const r=document.createElement("div")
r.textContent=e,r.style.cssText="\n                position: absolute;\n                background: #333;\n                color: white;\n                padding: 8px 12px;\n                border-radius: 6px;\n                font-size: 14px;\n                white-space: nowrap;\n                z-index: 10000;\n                pointer-events: none;\n                opacity: 0;\n                transition: opacity 0.2s;\n            "
const a=()=>{document.body.appendChild(r)
const e=o.getBoundingClientRect()
"top"===t?(r.style.left=e.left+e.width/2-r.offsetWidth/2+"px",r.style.top=e.top-r.offsetHeight-8+"px"):"bottom"===t&&(r.style.left=e.left+e.width/2-r.offsetWidth/2+"px",r.style.top=e.bottom+8+"px"),r.style.opacity="1"},s=()=>{r.style.opacity="0",setTimeout(()=>{r.parentNode&&r.remove()},200)}
o.addEventListener("mouseenter",a),o.addEventListener("mouseleave",s),o._yaka_tooltip_cleanup=()=>{o.removeEventListener("mouseenter",a),o.removeEventListener("mouseleave",s),r.parentNode&&r.remove(),delete o._yaka_tooltip,delete o._yaka_tooltip_cleanup}})},t.prototype.button=function(e={}){return this.each((t,n)=>{if(n._yaka_button)return
n._yaka_button=!0
const o=e.label||n.textContent||n.value,r=e.icon||null,a=e.iconPosition||"left",s=e.disabled||!1
if(n.classList.add("ui-button","ui-widget"),"INPUT"===n.tagName&&["button","submit","reset"].includes(n.type)?n.value=o:"A"===n.tagName?(n.setAttribute("role","button"),n.style.cssText+="\n                    display: inline-flex;\n                    align-items: center;\n                    gap: 6px;\n                    padding: 8px 16px;\n                    background: #4285f4;\n                    color: white;\n                    text-decoration: none;\n                    border-radius: 4px;\n                    cursor: pointer;\n                    border: none;\n                    font-size: 14px;\n                    transition: all 0.2s ease;\n                "):n.style.cssText+="\n                    display: inline-flex;\n                    align-items: center;\n                    gap: 6px;\n                    padding: 8px 16px;\n                    background: #4285f4;\n                    color: white;\n                    border-radius: 4px;\n                    cursor: pointer;\n                    border: none;\n                    font-size: 14px;\n                    transition: all 0.2s ease;\n                ",r){const e=document.createElement("span")
e.className="ui-button-icon",e.innerHTML=r,e.style.display="inline-flex","left"===a?n.insertBefore(e,n.firstChild):n.appendChild(e)}const i=()=>{n.disabled||n.classList.contains("ui-state-disabled")||(n.style.background="#357ae8")},l=()=>{n.disabled||n.classList.contains("ui-state-disabled")||(n.style.background="#4285f4")}
n.addEventListener("mouseenter",i),n.addEventListener("mouseleave",l),s&&(n.classList.add("ui-state-disabled"),n.disabled=!0,n.style.opacity="0.6",n.style.cursor="not-allowed"),n._yaka_button_api={enable(){n.classList.remove("ui-state-disabled"),n.disabled=!1,n.style.opacity="1",n.style.cursor="pointer"},disable(){n.classList.add("ui-state-disabled"),n.disabled=!0,n.style.opacity="0.6",n.style.cursor="not-allowed"}},n._yaka_button_cleanup=()=>{n.removeEventListener("mouseenter",i),n.removeEventListener("mouseleave",l),n.classList.remove("ui-button","ui-widget","ui-state-disabled"),delete n._yaka_button,delete n._yaka_button_api,delete n._yaka_button_cleanup}})},t.prototype.checkboxradio=function(e={}){return this.each((t,n)=>{if(n._yaka_checkboxradio)return
if("checkbox"!==n.type&&"radio"!==n.type)return
n._yaka_checkboxradio=!0
const o=document.createElement("label")
o.className="ui-checkboxradio-label",o.style.cssText="\n                display: inline-flex;\n                align-items: center;\n                gap: 8px;\n                cursor: pointer;\n                user-select: none;\n            "
const r=document.createElement("span")
r.className="ui-checkboxradio-icon",r.style.cssText=`\n                display: inline-block;\n                width: 18px;\n                height: 18px;\n                border: 2px solid #4285f4;\n                ${"checkbox"===n.type?"border-radius: 3px;":"border-radius: 50%;"}\n                background: white;\n                position: relative;\n                transition: all 0.2s ease;\n            `,n.parentNode.insertBefore(o,n),o.appendChild(n),o.appendChild(r)
const a=e.label||n.getAttribute("data-label")
if(a){const e=document.createElement("span")
e.textContent=a,o.appendChild(e)}n.style.cssText="\n                position: absolute;\n                opacity: 0;\n                pointer-events: none;\n            "
const s=()=>{n.checked?(r.style.background="#4285f4",r.innerHTML="checkbox"===n.type?'<span style="color: white; font-size: 14px; line-height: 14px;">✓</span>':'<span style="position: absolute; top: 3px; left: 3px; width: 8px; height: 8px; border-radius: 50%; background: white;"></span>'):(r.style.background="white",r.innerHTML="")}
n.addEventListener("change",s),s(),n._yaka_checkboxradio_cleanup=()=>{n.removeEventListener("change",s),o.parentNode&&(o.parentNode.insertBefore(n,o),o.remove()),n.style.cssText="",delete n._yaka_checkboxradio,delete n._yaka_checkboxradio_cleanup}})},t.prototype.controlgroup=function(e={}){return this.each((t,n)=>{if(n._yaka_controlgroup)return
n._yaka_controlgroup=!0
const o=e.direction||"horizontal"
n.classList.add("ui-controlgroup"),n.style.cssText=`\n                display: inline-flex;\n                ${"horizontal"===o?"flex-direction: row;":"flex-direction: column;"}\n                gap: 0;\n            `
const r=Array.from(n.children)
r.forEach((e,t)=>{e.classList.add("ui-controlgroup-item"),"horizontal"===o?(t>0&&(e.style.borderTopLeftRadius="0",e.style.borderBottomLeftRadius="0",e.style.marginLeft="-1px"),r.length-1>t&&(e.style.borderTopRightRadius="0",e.style.borderBottomRightRadius="0")):(t>0&&(e.style.borderTopLeftRadius="0",e.style.borderTopRightRadius="0",e.style.marginTop="-1px"),r.length-1>t&&(e.style.borderBottomLeftRadius="0",e.style.borderBottomRightRadius="0"))}),n._yaka_controlgroup_cleanup=()=>{n.classList.remove("ui-controlgroup"),r.forEach(e=>{e.classList.remove("ui-controlgroup-item")}),delete n._yaka_controlgroup,delete n._yaka_controlgroup_cleanup}})},t.prototype.menu=function(e={}){return this.each((t,n)=>{if(n._yaka_menu)return
n._yaka_menu=!0,n.classList.add("ui-menu","ui-widget"),n.setAttribute("role","menu"),n.style.cssText="\n                list-style: none;\n                padding: 8px 0;\n                margin: 0;\n                background: white;\n                border: 1px solid #ddd;\n                border-radius: 4px;\n                box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n                min-width: 150px;\n            "
const o=n.querySelectorAll("li")
o.forEach((t,n)=>{t.classList.add("ui-menu-item"),t.setAttribute("role","menuitem"),t.setAttribute("tabindex",0===n?"0":"-1"),t.style.cssText="\n                    padding: 10px 16px;\n                    cursor: pointer;\n                    transition: background 0.2s ease;\n                "
const o=()=>{t.style.background="#f5f5f5"},r=()=>{t.style.background="white"},a=()=>{e.onSelect&&e.onSelect.call(t,t.textContent,n)}
t.addEventListener("mouseenter",o),t.addEventListener("mouseleave",r),t.addEventListener("click",a),t._yaka_menu_item_cleanup||(t._yaka_menu_item_cleanup=()=>{t.removeEventListener("mouseenter",o),t.removeEventListener("mouseleave",r),t.removeEventListener("click",a)})})
const r=e=>{const t=document.activeElement,n=Array.from(o),r=n.indexOf(t)
"ArrowDown"===e.key?(e.preventDefault(),n[(r+1)%n.length].focus()):"ArrowUp"===e.key?(e.preventDefault(),n[(r-1+n.length)%n.length].focus()):"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t.click())}
n.addEventListener("keydown",r),n._yaka_menu_cleanup=()=>{n.removeEventListener("keydown",r),o.forEach(e=>{e._yaka_menu_item_cleanup&&(e._yaka_menu_item_cleanup(),delete e._yaka_menu_item_cleanup)}),n.classList.remove("ui-menu","ui-widget"),delete n._yaka_menu,delete n._yaka_menu_cleanup}})},t.prototype.selectbox=function(e={}){return this.each((t,n)=>{if(n._yaka_selectbox)return
if("SELECT"!==n.tagName)return
n._yaka_selectbox=!0
const o=n.multiple||e.multiple||!1,r=!1!==e.searchable,a=e.placeholder||"Select...",s=e.data||null
n.style.display="none"
const i=document.createElement("div")
i.className="yaka-selectbox",i.style.cssText=`\n                position: relative;\n                display: inline-block;\n                width: ${e.width||"100%"};\n            `
const l=document.createElement("div")
l.className="yaka-selectbox-display",l.style.cssText="\n                border: 2px solid #ddd;\n                border-radius: 6px;\n                padding: 10px 35px 10px 12px;\n                cursor: pointer;\n                background: white;\n                position: relative;\n                transition: border-color 0.2s;\n            "
const c=document.createElement("span")
c.innerHTML="▼",c.style.cssText="\n                position: absolute;\n                right: 12px;\n                top: 50%;\n                transform: translateY(-50%);\n                font-size: 12px;\n                color: #666;\n                transition: transform 0.2s;\n            ",l.appendChild(c)
const d=document.createElement("span")
d.textContent=a,d.style.color="#999",l.insertBefore(d,c)
const p=document.createElement("div")
if(p.className="yaka-selectbox-dropdown",p.style.cssText="\n                position: absolute;\n                top: 100%;\n                left: 0;\n                right: 0;\n                margin-top: 4px;\n                background: white;\n                border: 2px solid #ddd;\n                border-radius: 6px;\n                box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n                max-height: 250px;\n                overflow-y: auto;\n                z-index: 1000;\n                display: none;\n            ",r){const e=document.createElement("input")
e.type="text",e.placeholder="Search...",e.style.cssText="\n                    width: 100%;\n                    padding: 8px 12px;\n                    border: none;\n                    border-bottom: 2px solid #f0f0f0;\n                    outline: none;\n                    box-sizing: border-box;\n                ",p.appendChild(e),e.addEventListener("input",e=>{const t=e.target.value.toLowerCase()
p.querySelectorAll(".yaka-selectbox-item").forEach(e=>{const n=e.textContent.toLowerCase()
e.style.display=n.includes(t)?"block":"none"})})}const u=document.createElement("div")
p.appendChild(u),l.addEventListener("click",e=>{e.stopPropagation()
const t="block"===p.style.display
p.style.display=t?"none":"block",c.style.transform=t?"translateY(-50%)":"translateY(-50%) rotate(180deg)",l.style.borderColor=t?"#ddd":"#4285f4"}),document.addEventListener("click",()=>{p.style.display="none",c.style.transform="translateY(-50%)",l.style.borderColor="#ddd"}),i.appendChild(l),i.appendChild(p),n.parentNode.insertBefore(i,n),(()=>{u.innerHTML=""
const e=s||Array.from(n.options)
e.forEach((t,r)=>{const s=document.createElement("div")
s.className="yaka-selectbox-item",s.textContent=t.text||t.label||t,s.setAttribute("data-value",t.value||t),s.style.cssText="\n                        padding: 10px 12px;\n                        cursor: pointer;\n                        transition: background 0.2s;\n                    ",s.addEventListener("mouseenter",()=>{s.style.background="#f5f5f5"}),s.addEventListener("mouseleave",()=>{s.style.background="white"}),s.addEventListener("click",()=>{o?(n.options[r].selected=!n.options[r].selected,(()=>{if(o){const e=Array.from(n.options).filter(e=>e.selected)
d.textContent=e.length>0?e.map(e=>e.text).join(", "):a,d.style.color=e.length>0?"#333":"#999"}})()):(n.selectedIndex=r,d.textContent=s.textContent,d.style.color="#333",p.style.display="none",c.style.transform="translateY(-50%)"),e.onChange&&e.onChange(n.value)}),u.appendChild(s)})})(),n._yaka_selectbox_cleanup=()=>{i.parentNode&&i.remove(),n.style.display="",delete n._yaka_selectbox,delete n._yaka_selectbox_cleanup}})},t.prototype.timepicker=function(e={}){return this.each((t,n)=>{if(n._yaka_timepicker)return
n._yaka_timepicker=!0
const o=e.format24||!1,r=e.minuteInterval||1
n.setAttribute("readonly","true"),n.style.cursor="pointer"
const a=document.createElement("div")
a.className="yaka-timepicker",a.style.cssText="\n                position: absolute;\n                background: white;\n                border: 2px solid #ddd;\n                border-radius: 8px;\n                padding: 15px;\n                box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n                z-index: 1000;\n                display: none;\n            "
const s=document.createElement("div")
s.style.cssText="display: flex; gap: 10px;"
const i=document.createElement("select")
i.style.cssText="padding: 8px; border-radius: 4px; border: 2px solid #ddd; font-size: 16px;"
const l=o?23:12
for(let e=0;l>=e;e++){const t=document.createElement("option")
t.value=e,t.textContent=(""+e).padStart(2,"0"),i.appendChild(t)}const c=document.createElement("select")
c.style.cssText="padding: 8px; border-radius: 4px; border: 2px solid #ddd; font-size: 16px;"
for(let e=0;60>e;e+=r){const t=document.createElement("option")
t.value=e,t.textContent=(""+e).padStart(2,"0"),c.appendChild(t)}s.appendChild(i),s.appendChild(c)
let d=null
o||(d=document.createElement("select"),d.style.cssText="padding: 8px; border-radius: 4px; border: 2px solid #ddd; font-size: 16px;",["AM","PM"].forEach(e=>{const t=document.createElement("option")
t.value=e,t.textContent=e,d.appendChild(t)}),s.appendChild(d)),a.appendChild(s)
const p=document.createElement("button")
p.textContent="OK",p.style.cssText="\n                margin-top: 10px;\n                width: 100%;\n                padding: 8px;\n                background: #4285f4;\n                color: white;\n                border: none;\n                border-radius: 4px;\n                cursor: pointer;\n                font-size: 14px;\n            ",p.onclick=()=>{let t=parseInt(i.value)
const r=parseInt(c.value)
!o&&d&&("PM"===d.value&&12>t&&(t+=12),"AM"===d.value&&12===t&&(t=0)),n.value=`${(""+t).padStart(2,"0")}:${(""+r).padStart(2,"0")}`,a.style.display="none",e.onChange&&e.onChange(n.value)},a.appendChild(p),document.body.appendChild(a),n.addEventListener("click",()=>{const e=n.getBoundingClientRect()
a.style.left=e.left+"px",a.style.top=e.bottom+4+"px",a.style.display="block"}),document.addEventListener("click",e=>{a.contains(e.target)||e.target===n||(a.style.display="none")}),n._yaka_timepicker_cleanup=()=>{a.parentNode&&a.remove(),n.removeAttribute("readonly"),delete n._yaka_timepicker,delete n._yaka_timepicker_cleanup}})},t.prototype.fullpage=function(e={}){return this.each((t,n)=>{if(n._yaka_fullpage)return
n._yaka_fullpage=!0
const o=Array.from(n.children),r=!1!==e.navigation,a=e.scrollingSpeed||700,s=e.easing||"ease-in-out"
let i=0,l=!1
if(o.forEach((e,t)=>{e.style.cssText=`\n                    height: 100vh;\n                    width: 100%;\n                    scroll-snap-align: start;\n                    transition: opacity ${a}ms ${s};\n                `}),n.style.cssText="\n                height: 100vh;\n                overflow-y: scroll;\n                scroll-snap-type: y mandatory;\n                scroll-behavior: smooth;\n            ",r){const e=document.createElement("div")
e.style.cssText="\n                    position: fixed;\n                    right: 20px;\n                    top: 50%;\n                    transform: translateY(-50%);\n                    z-index: 100;\n                    display: flex;\n                    flex-direction: column;\n                    gap: 12px;\n                ",o.forEach((t,n)=>{const o=document.createElement("div")
o.style.cssText=`\n                        width: 12px;\n                        height: 12px;\n                        border-radius: 50%;\n                        border: 2px solid #333;\n                        background: ${0===n?"#333":"white"};\n                        cursor: pointer;\n                        transition: all 0.3s;\n                    `,o.onclick=()=>c(n),e.appendChild(o)}),document.body.appendChild(e),n._yaka_fullpage_nav=e}const c=e=>{l||0>e||e>=o.length||(l=!0,i=e,o[e].scrollIntoView({behavior:"smooth"}),r&&n._yaka_fullpage_nav&&Array.from(n._yaka_fullpage_nav.children).forEach((t,n)=>{t.style.background=n===e?"#333":"white"}),setTimeout(()=>{l=!1},a))},d=e=>{"ArrowDown"===e.key?(e.preventDefault(),c(i+1)):"ArrowUp"===e.key&&(e.preventDefault(),c(i-1))}
document.addEventListener("keydown",d),n._yaka_fullpage_cleanup=()=>{document.removeEventListener("keydown",d),n._yaka_fullpage_nav&&n._yaka_fullpage_nav.parentNode&&n._yaka_fullpage_nav.remove(),delete n._yaka_fullpage,delete n._yaka_fullpage_nav,delete n._yaka_fullpage_cleanup}})},t.prototype.imageUpload=function(e){return this.each((t,n)=>{n.addEventListener("change",t=>{const o=t.target.files[0]
if(o&&o.type.startsWith("image/")){const t=new FileReader
t.onload=t=>{e.call(n,t.target.result,o)},t.readAsDataURL(o)}})})},t.download=(e,t,n="text/plain")=>{const o=new Blob([e],{type:n}),r=URL.createObjectURL(o),a=document.createElement("a")
a.href=r,a.download=t,a.click(),URL.revokeObjectURL(r)},t.prototype.print=function(){const t=this.elements[0]?.innerHTML
if(!t)return this
const n=e.open("","","width=800,height=600")
return n&&(n.document.write(`\n                <html>\n                    <head><title>Print</title></head>\n                    <body>${t}</body>\n                </html>\n            `),n.document.close(),n.print()),this},t.prototype.fullscreen=function(){const e=this.elements[0]
return e?(e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this):this},t.exitFullscreen=()=>{document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},t.speak=(e,t={})=>{const n=new SpeechSynthesisUtterance(e)
n.rate=t.rate||1,n.pitch=t.pitch||1,n.volume=t.volume||1,n.lang=t.lang||"en-US",speechSynthesis.speak(n)},t.getLocation=(e,t)=>{if(navigator.geolocation)navigator.geolocation.getCurrentPosition(t=>{e({latitude:t.coords.latitude,longitude:t.coords.longitude,accuracy:t.coords.accuracy})},t||(e=>{console.error("Geolocation error:",e)}))
else{const e=Error("Geolocation not supported")
t?t(e):console.error(e)}},t.paste=async()=>{try{return await navigator.clipboard.readText()}catch(e){return console.error("Failed to read clipboard:",e),null}},t.share=e=>{navigator.share?navigator.share(e).catch(e=>console.error("Share failed:",e)):console.warn("Share API not supported")},t.vibrate=(e=200)=>{navigator.vibrate&&navigator.vibrate(e)},t.battery=async e=>{if(navigator.getBattery){const t=await navigator.getBattery()
e({level:100*t.level,charging:t.charging,chargingTime:t.chargingTime,dischargingTime:t.dischargingTime})}},t.onlineStatus=t=>{t(navigator.onLine),e.addEventListener("online",()=>t(!0)),e.addEventListener("offline",()=>t(!1))},t.onVisibilityChange=e=>{document.addEventListener("visibilitychange",()=>{e(!document.hidden)})},t.measure=(e,t)=>{const n=performance.now(),o=t(),r=performance.now()
return console.log(`${e}: ${(r-n).toFixed(2)}ms`),o},t.component=function(e,n){const o=t._components=t._components||{}
return o[e]={template:n.template||"",data:n.data||{},methods:n.methods||{},mounted:n.mounted||(()=>{}),render(e={}){let t=this.template
const n={...this.data,...e}
return Object.keys(n).forEach(e=>{t=t.replace(RegExp(`\\{\\{${e}\\}\\}`,"g"),n[e])}),t}},o[e]},t.prototype.component=function(e,n){const o=t._components?.[e]
return o?this.each((e,t)=>{t.innerHTML=o.render(n),"function"==typeof o.mounted&&o.mounted.call(t)}):this},t.router=function(t){const n={routes:t,current:null,navigate(e){const t=this.routes[e]
t&&(this.current=e,history.pushState({path:e},"",e),t.component&&_(t.target||"#app").html(t.component()),t.handler&&t.handler())},init(){e.addEventListener("popstate",e=>{e.state?.path&&this.navigate(e.state.path)})
const t=e.location.pathname
this.routes[t]&&this.navigate(t)}}
return n.init(),n},t.websocket=(e,t={})=>{const n=new WebSocket(e),o={onOpen:t.onOpen||(()=>{}),onMessage:t.onMessage||(()=>{}),onError:t.onError||(()=>{}),onClose:t.onClose||(()=>{})},r=e=>o.onOpen(e),a=e=>{try{const t=JSON.parse(e.data)
o.onMessage(t)}catch(e){console.error("WebSocket: Failed to parse message as JSON:",e),o.onError(e)}},s=e=>o.onError(e),i=e=>o.onClose(e)
return n.addEventListener("open",r),n.addEventListener("message",a),n.addEventListener("error",s),n.addEventListener("close",i),{send:e=>n.send(JSON.stringify(e)),close:()=>n.close(),ws:n,cleanup(){n.removeEventListener("open",r),n.removeEventListener("message",a),n.removeEventListener("error",s),n.removeEventListener("close",i),n.readyState===WebSocket.OPEN&&n.close()}}},t.webrtc=async(e={})=>{try{const t=await navigator.mediaDevices.getUserMedia({video:!1!==e.video,audio:!1!==e.audio})
return{stream:t,attachTo(e){e.srcObject=t},stop(){t.getTracks().forEach(e=>e.stop())}}}catch(e){throw console.error("Error accessing media devices:",e),e}},t.prototype.canvas=function(){const e=this.elements[0]
if(!e||"CANVAS"!==e.tagName)return console.warn("canvas() requires a canvas element"),null
const t=e.getContext("2d")
return{ctx:t,clear:()=>t.clearRect(0,0,e.width,e.height),rect(e,n,o,r,a){t.fillStyle=a,t.fillRect(e,n,o,r)},circle(e,n,o,r){t.fillStyle=r,t.beginPath(),t.arc(e,n,o,0,2*Math.PI),t.fill()},line(e,n,o,r,a,s=1){t.strokeStyle=a,t.lineWidth=s,t.beginPath(),t.moveTo(e,n),t.lineTo(o,r),t.stroke()},text(e,n,o,r,a=16){t.fillStyle=r,t.font=a+"px Arial",t.fillText(e,n,o)},image(e,n,o,r,a){t.drawImage(e,n,o,r,a)}}},t.chart=function(e,t,n={}){const o=e.getContext("2d"),r=e.width,a=e.height,s=n.type||"bar",i=n.padding||{top:40,right:40,bottom:60,left:60},l=!1!==n.showGrid,c=!1!==n.showValues,d=n.colors||["#667eea","#764ba2","#f093fb","#4facfe","#43e97b","#fa709a"]
o.roundRect||(o.roundRect=function(e,t,n,o,r){const a=Array.isArray(r)?r:[r,r,r,r]
this.beginPath(),this.moveTo(e+a[0],t),this.lineTo(e+n-a[1],t),this.quadraticCurveTo(e+n,t,e+n,t+a[1]),this.lineTo(e+n,t+o-a[2]),this.quadraticCurveTo(e+n,t+o,e+n-a[2],t+o),this.lineTo(e+a[3],t+o),this.quadraticCurveTo(e,t+o,e,t+o-a[3]),this.lineTo(e,t+a[0]),this.quadraticCurveTo(e,t,e+a[0],t),this.closePath()}),o.clearRect(0,0,r,a)
const p=r-i.left-i.right,u=a-i.top-i.bottom
if("bar"===s){if(0===t.length)return
const e=Math.max(...t.map(e=>e.value))
if(0>=e)return
if(t.map(e=>e.value),l){o.strokeStyle="#e0e0e0",o.lineWidth=1,o.setLineDash([2,2])
for(let t=0;5>=t;t++){const n=i.top+u/5*t
o.beginPath(),o.moveTo(i.left,n),o.lineTo(r-i.right,n),o.stroke()
const a=Math.round(e-e/5*t)
o.fillStyle="#666",o.font="bold 12px Arial",o.textAlign="right",o.fillText(""+a,i.left-10,n+4)}o.setLineDash([])}o.strokeStyle="#333",o.lineWidth=2,o.beginPath(),o.moveTo(i.left,i.top),o.lineTo(i.left,a-i.bottom),o.lineTo(r-i.right,a-i.bottom),o.stroke()
const n=p/t.length,s=.2*n,h=n-s
t.forEach((t,r)=>{const l=t.value/e*u,p=i.left+r*n+s/2,m=a-i.bottom-l,y=o.createLinearGradient(p,m,p,a-i.bottom),f=t.color||d[r%d.length]
y.addColorStop(0,f),y.addColorStop(1,f+"80"),o.fillStyle=y,o.beginPath(),o.roundRect(p,m,h,l,[8,8,0,0]),o.fill(),o.shadowColor="rgba(0, 0, 0, 0.1)",o.shadowBlur=10,o.shadowOffsetY=5,o.fill(),o.shadowColor="transparent",c&&(o.fillStyle="#333",o.font="bold 14px Arial",o.textAlign="center",o.fillText(""+t.value,p+h/2,m-8)),o.fillStyle="#666",o.font="13px Arial",o.textAlign="center",o.save(),o.translate(p+h/2,a-i.bottom+15),t.label&&t.label.length>10&&o.rotate(-Math.PI/6),o.fillText(t.label||"",0,0),o.restore()})}else if("line"===s){if(2>t.length)return
const e=Math.max(...t.map(e=>e.value))
if(0>=e)return
if(t.map(e=>e.value),l){o.strokeStyle="#e0e0e0",o.lineWidth=1,o.setLineDash([2,2])
for(let t=0;5>=t;t++){const n=i.top+u/5*t
o.beginPath(),o.moveTo(i.left,n),o.lineTo(r-i.right,n),o.stroke()
const a=Math.round(e-e/5*t)
o.fillStyle="#666",o.font="bold 12px Arial",o.textAlign="right",o.fillText(""+a,i.left-10,n+4)}o.setLineDash([])}o.strokeStyle="#333",o.lineWidth=2,o.beginPath(),o.moveTo(i.left,i.top),o.lineTo(i.left,a-i.bottom),o.lineTo(r-i.right,a-i.bottom),o.stroke()
const s=p/(t.length-1),h=t.map((t,n)=>({x:i.left+n*s,y:a-i.bottom-t.value/e*u,value:t.value,label:t.label})),m=o.createLinearGradient(0,i.top,0,a-i.bottom),y=n.color||d[0]
m.addColorStop(0,y+"40"),m.addColorStop(1,y+"00"),o.fillStyle=m,o.beginPath(),o.moveTo(h[0].x,a-i.bottom),h.forEach(e=>o.lineTo(e.x,e.y)),o.lineTo(h[h.length-1].x,a-i.bottom),o.closePath(),o.fill(),o.strokeStyle=y,o.lineWidth=3,o.lineJoin="round",o.lineCap="round",o.beginPath(),h.forEach((e,t)=>{0===t?o.moveTo(e.x,e.y):o.lineTo(e.x,e.y)}),o.stroke(),h.forEach((e,t)=>{o.shadowColor="rgba(0, 0, 0, 0.2)",o.shadowBlur=8,o.shadowOffsetY=3,o.fillStyle="#fff",o.beginPath(),o.arc(e.x,e.y,6,0,2*Math.PI),o.fill(),o.fillStyle=y,o.beginPath(),o.arc(e.x,e.y,4,0,2*Math.PI),o.fill(),o.shadowColor="transparent",c&&(o.fillStyle="#333",o.font="bold 12px Arial",o.textAlign="center",o.fillText(""+e.value,e.x,e.y-15)),o.fillStyle="#666",o.font="12px Arial",o.textAlign="center",o.fillText(e.label||"",e.x,a-i.bottom+20)})}else if("pie"===s){if(0===t.length)return
const e=t.reduce((e,t)=>e+t.value,0)
if(0>=e)return
const s=r/2,i=a/2,l=Math.min(p,u)/2.5
let c=-Math.PI/2
if(t.forEach((t,n)=>{const r=t.value/e*Math.PI*2,a=t.color||d[n%d.length],p=o.createRadialGradient(s,i,0,s,i,l)
p.addColorStop(0,a),p.addColorStop(1,a+"cc"),o.fillStyle=p,o.beginPath(),o.moveTo(s,i),o.arc(s,i,l,c,c+r),o.closePath(),o.fill(),o.strokeStyle="#fff",o.lineWidth=3,o.stroke(),o.shadowColor="rgba(0, 0, 0, 0.15)",o.shadowBlur=10,o.shadowOffsetX=2,o.shadowOffsetY=2,o.fill(),o.stroke(),o.shadowColor="transparent"
const u=c+r/2,h=.7*l,m=s+Math.cos(u)*h,y=i+Math.sin(u)*h,f=(t.value/e*100).toFixed(1)
o.fillStyle="#fff",o.font="bold 14px Arial",o.textAlign="center",o.textBaseline="middle",o.fillText(f+"%",m,y),t.label&&(o.font="12px Arial",o.fillText(t.label,m,y+18)),c+=r}),n.donut){const t=.5*l
o.fillStyle="#fff",o.beginPath(),o.arc(s,i,t,0,2*Math.PI),o.fill(),n.showTotal&&(o.fillStyle="#333",o.font="bold 24px Arial",o.textAlign="center",o.textBaseline="middle",o.fillText(""+e,s,i),o.font="14px Arial",o.fillStyle="#666",o.fillText("Total",s,i+25))}}n.title&&(o.fillStyle="#333",o.font="bold 18px Arial",o.textAlign="center",o.fillText(n.title,r/2,20))},t.prototype.dataTable=function(e,t={}){return this.each((n,o)=>{if(!t.columns||!Array.isArray(t.columns))return void console.error("dataTable requires options.columns array")
let r=[...e],a=[]
const s=e=>{const t=document.createElement("div")
return t.textContent=e,t.innerHTML},i=()=>{a.forEach(({th:e,handler:t})=>{e.removeEventListener("click",t)}),a=[]
let e='<table style="width: 100%; border-collapse: collapse;">'
e+="<thead><tr>",t.columns.forEach(t=>{e+=`<th style="padding: 12px; background: #f5f5f5; cursor: pointer; border-bottom: 2px solid #ddd;" data-sort="${t.key}">${s(t.label)}</th>`}),e+="</tr></thead>",e+="<tbody>",r.forEach(n=>{e+="<tr>",t.columns.forEach(t=>{e+=`<td style="padding: 12px; border-bottom: 1px solid #eee;">${s((n[t.key]||"")+"")}</td>`}),e+="</tr>"}),e+="</tbody></table>",o.innerHTML=e,o.querySelectorAll("th[data-sort]").forEach(e=>{const t=()=>{const t=e.dataset.sort
r.sort((e,n)=>n[t]>e[t]?-1:e[t]>n[t]?1:0),i()}
e.addEventListener("click",t),a.push({th:e,handler:t})})}
i()})},t.prototype.autocomplete=function(e,t={}){return this.each((n,o)=>{if(!e||!Array.isArray(e))return void console.error("autocomplete requires a data array")
if(o._yaka_autocomplete)return
o._yaka_autocomplete=!0
const r=void 0!==t.minChars?t.minChars:1,a=void 0!==t.maxResults?t.maxResults:1/0,s=void 0!==t.noResults?t.noResults:""
let i=-1
const l=document.createElement("div")
l.style.cssText="\n                position: absolute;\n                background: white;\n                border: 1px solid #ddd;\n                border-radius: 8px;\n                max-height: 200px;\n                overflow-y: auto;\n                box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n                display: none;\n                z-index: 1000;\n                width: 100%;\n                box-sizing: border-box;\n            "
const c=e=>(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),d=()=>Array.from(l.querySelectorAll(".autocomplete-item")),p=e=>{d().forEach((t,n)=>{t.style.background=n===e?"#f0f0ff":""}),i=e},u=()=>{l.style.display="none",i=-1},h=e=>{o.value=e,u(),t.onSelect&&t.onSelect(e)}
o.parentNode.style.position="relative",o.parentNode.appendChild(l)
const m=()=>{const t=o.value,n=t.toLowerCase()
if(r>t.length)return void u()
let d=e.filter(e=>(e+"").toLowerCase().includes(n))
if(1/0>a&&(d=d.slice(0,a)),l.innerHTML="",i=-1,d.length>0)d.forEach(e=>{const n=document.createElement("div")
n.className="autocomplete-item",n.style.cssText="padding:10px;cursor:pointer;border-bottom:1px solid #f0f0f0;",n.innerHTML=((e,t)=>{const n=c(e),o=c(t)
if(!o)return n
const r=RegExp("("+o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi")
return n.replace(r,'<mark style="background:rgba(99,102,241,0.15);border-radius:2px;padding:0 1px;">$1</mark>')})(e+"",t),n.addEventListener("mousedown",t=>{t.preventDefault(),h(e+"")}),l.appendChild(n)}),l.style.display="block"
else if(s){const e=document.createElement("div")
e.style.cssText="padding:10px;color:#999;font-style:italic;",e.textContent=s,l.appendChild(e),l.style.display="block"}else u()},y=e=>{if("none"===l.style.display)return
const t=d()
"ArrowDown"===e.key?(e.preventDefault(),p(Math.min(i+1,t.length-1))):"ArrowUp"===e.key?(e.preventDefault(),p(Math.max(i-1,0))):"Enter"===e.key?i>=0&&t[i]&&(e.preventDefault(),h(t[i].textContent)):"Escape"===e.key&&u()},f=e=>{e.target===o||l.contains(e.target)||u()}
o.addEventListener("input",m),o.addEventListener("keydown",y),document.addEventListener("click",f),o._yaka_autocomplete_cleanup=()=>{o.removeEventListener("input",m),o.removeEventListener("keydown",y),document.removeEventListener("click",f),l.remove(),delete o._yaka_autocomplete,delete o._yaka_autocomplete_cleanup}})},t.prototype.colorPicker=function(e){return this.each((t,n)=>{if(n._yaka_colorpicker)return
n._yaka_colorpicker=!0
const o=document.createElement("input")
o.type="color",o.style.display="none",n.appendChild(o)
const r=()=>o.click(),a=()=>{e.call(n,o.value)}
n.addEventListener("click",r),o.addEventListener("change",a),n._yaka_colorpicker_cleanup=()=>{n.removeEventListener("click",r),o.removeEventListener("change",a),o.remove(),delete n._yaka_colorpicker,delete n._yaka_colorpicker_cleanup}})},t.prototype.datePicker=function(e){return this.each((t,n)=>{if(n._yaka_datepicker)return
n._yaka_datepicker=!0
const o=document.createElement("input")
o.type="date",o.style.cssText="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 8px;",n.appendChild(o)
const r=()=>{e.call(n,o.value)}
o.addEventListener("change",r),n._yaka_datepicker_cleanup=()=>{o.removeEventListener("change",r),o.remove(),delete n._yaka_datepicker,delete n._yaka_datepicker_cleanup}})},t.prototype.slider=function(e={}){return this.each((t,n)=>{if(n._yaka_slider)return
n._yaka_slider=!0
const o=e.min||0,r=e.max||100,a=e.step||1,s=e.value||50,i=!1!==e.showTooltip,l=!1!==e.showValue,c=document.createElement("div")
c.style.cssText="position: relative; padding: 20px 0;"
const d=document.createElement("input")
d.type="range",d.min=o,d.max=r,d.step=a,d.value=s,d.style.cssText=`\n                width: 100%;\n                height: 6px;\n                border-radius: 3px;\n                background: linear-gradient(to right, #4CAF50 0%, #4CAF50 ${(s-o)/(r-o)*100}%, #ddd ${(s-o)/(r-o)*100}%, #ddd 100%);\n                outline: none;\n                -webkit-appearance: none;\n            `
const p=document.createElement("div")
i&&(p.textContent=d.value,p.style.cssText=`\n                    position: absolute;\n                    top: -30px;\n                    left: ${(s-o)/(r-o)*100}%;\n                    transform: translateX(-50%);\n                    background: #333;\n                    color: white;\n                    padding: 4px 8px;\n                    border-radius: 4px;\n                    font-size: 12px;\n                    pointer-events: none;\n                    white-space: nowrap;\n                `,c.appendChild(p))
const u=document.createElement("div")
l&&(u.textContent=d.value,u.style.cssText="text-align: center; margin-top: 15px; font-weight: bold; font-size: 16px;"),c.appendChild(d),l&&c.appendChild(u),n.appendChild(c)
const h=()=>{const t=parseInt(d.value),n=(t-o)/(r-o)*100
d.style.background=`linear-gradient(to right, #4CAF50 0%, #4CAF50 ${n}%, #ddd ${n}%, #ddd 100%)`,i&&(p.textContent=t,p.style.left=n+"%"),l&&(u.textContent=t),e.onChange&&e.onChange(t)}
d.addEventListener("input",h),d.addEventListener("keydown",e=>{"ArrowLeft"===e.key||"ArrowDown"===e.key?(e.preventDefault(),d.value=Math.max(o,parseInt(d.value)-a),h()):"ArrowRight"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),d.value=Math.min(r,parseInt(d.value)+a),h())}),n._yaka_slider_cleanup=()=>{d.removeEventListener("input",h),c.remove(),delete n._yaka_slider,delete n._yaka_slider_cleanup}})},t.prototype.tabs=function(){return this.each((e,t)=>{if(t._yaka_tabs)return
t._yaka_tabs=!0
const n=t.querySelectorAll("[data-tab]"),o=t.querySelectorAll("[data-tab-content]"),r=[]
n.forEach(e=>{const a=()=>{const r=e.dataset.tab
n.forEach(e=>e.classList.remove("active")),o.forEach(e=>e.style.display="none"),e.classList.add("active")
const a=t.querySelector(`[data-tab-content="${r}"]`)
a&&(a.style.display="block")}
e.addEventListener("click",a),r.push({tab:e,handleClick:a})}),n[0]&&n[0].click(),t._yaka_tabs_cleanup=()=>{r.forEach(({tab:e,handleClick:t})=>{e.removeEventListener("click",t)}),delete t._yaka_tabs,delete t._yaka_tabs_cleanup}})},t.prototype.accordion=function(){return this.each((e,t)=>{if(t._yaka_accordion)return
t._yaka_accordion=!0
const n=t.querySelectorAll("[data-accordion-header]"),o=[]
n.forEach(e=>{e.style.cursor="pointer"
const t=e.nextElementSibling
t.style.display="none"
const n=()=>{t.style.display="block"===t.style.display?"none":"block"}
e.addEventListener("click",n),o.push({header:e,handleClick:n})}),t._yaka_accordion_cleanup=()=>{o.forEach(({header:e,handleClick:t})=>{e.removeEventListener("click",t)}),delete t._yaka_accordion,delete t._yaka_accordion_cleanup}})},t.prototype.carousel=function(e={}){return this.each((t,n)=>{n._yaka_carousel_cleanup&&n._yaka_carousel_cleanup(),n._yaka_carousel=!0
const o="0.5s",r="ease-in-out",a=Array.from(n.children)
let s=e.startIndex||0
const i=e.auto||!1,l=e.interval||3e3,c=!1!==e.showDots,d=!1!==e.showArrows,p=e.transition||"fade",u=!1!==e.touch
n.style.position="relative",n.style.overflow="hidden",a.forEach((e,t)=>{e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.opacity=t===s?"1":"0",e.style.transition="fade"===p?`opacity ${o} ${r}`:`transform ${o} ${r}`,e.style.display="block","slide"===p&&(e.style.transform=t===s?"translateX(0)":"translateX(100%)")})
const h=e=>{"fade"===p?(a[s].style.opacity="0",a[e].style.opacity="1"):"slide"===p&&(a[s].style.transform="translateX(-100%)",a[e].style.transform="translateX(0)"),s=e,c&&x&&x.forEach((e,t)=>{e.style.background=t===s?"#4CAF50":"#ddd"})},m=()=>{const t=(s+1)%a.length
h(t),e.onChange&&e.onChange(t)},y=()=>{const t=(s-1+a.length)%a.length
h(t),e.onChange&&e.onChange(t)},f=t=>{t>=0&&a.length>t&&(h(t),e.onChange&&e.onChange(t))}
let g,b,v,x
d&&(g=document.createElement("button"),g.innerHTML="‹",g.style.cssText="\n                    position: absolute;\n                    top: 50%;\n                    left: 10px;\n                    transform: translateY(-50%);\n                    background: rgba(0,0,0,0.5);\n                    color: white;\n                    border: none;\n                    border-radius: 50%;\n                    width: 40px;\n                    height: 40px;\n                    font-size: 24px;\n                    cursor: pointer;\n                    z-index: 10;\n                    transition: background 0.3s;\n                ",g.onmouseover=()=>g.style.background="rgba(0,0,0,0.8)",g.onmouseout=()=>g.style.background="rgba(0,0,0,0.5)",g.onclick=y,n.appendChild(g),b=document.createElement("button"),b.innerHTML="›",b.style.cssText=g.style.cssText.replace("left: 10px","right: 10px"),b.onmouseover=()=>b.style.background="rgba(0,0,0,0.8)",b.onmouseout=()=>b.style.background="rgba(0,0,0,0.5)",b.onclick=m,n.appendChild(b)),c&&(v=document.createElement("div"),v.style.cssText="\n                    position: absolute;\n                    bottom: 15px;\n                    left: 50%;\n                    transform: translateX(-50%);\n                    display: flex;\n                    gap: 8px;\n                    z-index: 10;\n                ",x=a.map((e,t)=>{const n=document.createElement("button")
return n.style.cssText=`\n                        width: 12px;\n                        height: 12px;\n                        border-radius: 50%;\n                        border: none;\n                        background: ${t===s?"#4CAF50":"#ddd"};\n                        cursor: pointer;\n                        transition: background 0.3s;\n                    `,n.onclick=()=>f(t),v.appendChild(n),n}),n.appendChild(v))
let k=0,_=0
const w=e=>{k=e.touches[0].clientX},E=e=>{_=e.touches[0].clientX},C=()=>{const e=k-_
Math.abs(e)>50&&(e>0?m():y())}
u&&(n.addEventListener("touchstart",w),n.addEventListener("touchmove",E),n.addEventListener("touchend",C))
let L=null
i&&(L=setInterval(m,l),n.addEventListener("mouseenter",()=>{L&&(clearInterval(L),L=null)}),n.addEventListener("mouseleave",()=>{L||(L=setInterval(m,l))})),n._carousel={next:m,prev:y,goTo:f,intervalId:L},n._yaka_carousel_cleanup=()=>{n._carousel&&n._carousel.intervalId&&clearInterval(n._carousel.intervalId),u&&(n.removeEventListener("touchstart",w),n.removeEventListener("touchmove",E),n.removeEventListener("touchend",C)),d&&(g.remove(),b.remove()),c&&v.remove(),delete n._carousel,delete n._yaka_carousel,delete n._yaka_carousel_cleanup}})},t.prototype.dropdown=function(e={}){return this.each((t,n)=>{if(n._yaka_dropdown)return
n._yaka_dropdown=!0
const o=e.items||[],r=e.multiSelect||!1,a=!1!==e.searchable,s=e.placeholder||"Select..."
n.style.position="relative"
const i=document.createElement("div")
i.style.cssText="\n                border: 1px solid #ddd;\n                border-radius: 4px;\n                padding: 8px 12px;\n                cursor: pointer;\n                background: white;\n                user-select: none;\n            ",i.textContent=s
const l=document.createElement("div")
l.style.cssText="\n                position: absolute;\n                top: 100%;\n                left: 0;\n                right: 0;\n                background: white;\n                border: 1px solid #ddd;\n                border-radius: 4px;\n                margin-top: 4px;\n                max-height: 300px;\n                overflow-y: auto;\n                z-index: 1000;\n                display: none;\n                box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n            "
const c=document.createElement("input")
a&&(c.style.cssText="\n                    width: 100%;\n                    padding: 8px;\n                    border: none;\n                    border-bottom: 1px solid #ddd;\n                    box-sizing: border-box;\n                    outline: none;\n                ",c.placeholder="Search...",l.appendChild(c))
const d=document.createElement("div")
l.appendChild(d)
const p=new Set,u=(t="")=>{d.innerHTML="",o.filter(e=>e.toLowerCase().includes(t.toLowerCase())).forEach(t=>{const n=document.createElement("div")
n.textContent=t,n.style.cssText=`\n                        padding: 8px 12px;\n                        cursor: pointer;\n                        ${p.has(t)?"background: #e3f2fd;":""}\n                    `,n.addEventListener("mouseenter",()=>{n.style.background="#f5f5f5"}),n.addEventListener("mouseleave",()=>{n.style.background=p.has(t)?"#e3f2fd":"white"}),n.addEventListener("click",n=>{n.stopPropagation(),r?(p.has(t)?p.delete(t):p.add(t),i.textContent=p.size?Array.from(p).join(", "):s,u(c.value)):(p.clear(),p.add(t),i.textContent=t,l.style.display="none"),e.onChange&&e.onChange(r?Array.from(p):t)}),d.appendChild(n)})}
i.addEventListener("click",()=>{l.style.display="none"===l.style.display?"block":"none",a&&"block"===l.style.display&&c.focus(),u()}),a&&c.addEventListener("input",e=>{u(e.target.value)}),document.addEventListener("click",e=>{n.contains(e.target)||(l.style.display="none")}),n.appendChild(i),n.appendChild(l),n._yaka_dropdown_cleanup=()=>{i.remove(),l.remove(),delete n._yaka_dropdown,delete n._yaka_dropdown_cleanup}})},t.prototype.breadcrumb=function(e=[],t={}){return this.each((n,o)=>{const r=t.separator||">"
o.style.cssText="\n                display: flex;\n                align-items: center;\n                gap: 8px;\n                flex-wrap: wrap;\n            ",e.forEach((t,n)=>{const a=document.createElement(t.href?"a":"span")
if(a.textContent=t.label||t,a.style.cssText=`\n                    ${t.href?"color: #2196F3; text-decoration: none; cursor: pointer;":"color: #666;"}\n                `,t.href&&(a.href=t.href,a.addEventListener("mouseenter",()=>{a.style.textDecoration="underline"}),a.addEventListener("mouseleave",()=>{a.style.textDecoration="none"})),o.appendChild(a),e.length-1>n){const e=document.createElement("span")
e.textContent=r,e.style.color="#999",o.appendChild(e)}})})},t.prototype.pagination=function(e={}){return this.each((t,n)=>{const o=e.currentPage||1,r=e.totalPages||10,a=e.maxVisible||7,s=e.onChange||(()=>{})
n.style.cssText="\n                display: flex;\n                align-items: center;\n                gap: 4px;\n                flex-wrap: wrap;\n            "
const i=(e,t,n=!1)=>{const r=document.createElement("button")
return r.textContent=e,r.disabled=n,r.style.cssText=`\n                    padding: 8px 12px;\n                    border: 1px solid ${t===o?"#2196F3":"#ddd"};\n                    background: ${t===o?"#2196F3":"white"};\n                    color: ${t===o?"white":"#333"};\n                    cursor: ${n?"not-allowed":"pointer"};\n                    border-radius: 4px;\n                    opacity: ${n?"0.5":"1"};\n                `,n||(r.addEventListener("click",()=>s(t)),r.addEventListener("mouseenter",()=>{t!==o&&(r.style.background="#f5f5f5")}),r.addEventListener("mouseleave",()=>{t!==o&&(r.style.background="white")})),r}
n.appendChild(i("«",o-1,1===o))
let l=Math.max(1,o-Math.floor(a/2)),c=Math.min(r,l+a-1)
if(a-1>c-l&&(l=Math.max(1,c-a+1)),l>1&&(n.appendChild(i("1",1)),l>2)){const e=document.createElement("span")
e.textContent="...",e.style.padding="8px",n.appendChild(e)}for(let e=l;c>=e;e++)n.appendChild(i(""+e,e))
if(r>c){if(r-1>c){const e=document.createElement("span")
e.textContent="...",e.style.padding="8px",n.appendChild(e)}n.appendChild(i(""+r,r))}n.appendChild(i("»",o+1,o===r))})},t.prototype.badge=function(e,t={}){return this.each((n,o)=>{const r=t.dismissible||!1,a=t.icon||"",s={primary:{bg:"#2196F3",color:"white"},success:{bg:"#4CAF50",color:"white"},warning:{bg:"#FF9800",color:"white"},danger:{bg:"#F44336",color:"white"},info:{bg:"#00BCD4",color:"white"},secondary:{bg:"#9E9E9E",color:"white"}},i=s[t.variant||"primary"]||s.primary,l=document.createElement("span")
if(l.style.cssText=`\n                display: inline-flex;\n                align-items: center;\n                gap: 6px;\n                padding: 4px 12px;\n                background: ${i.bg};\n                color: ${i.color};\n                border-radius: 16px;\n                font-size: 0.875em;\n                font-weight: 500;\n            `,a){const e=document.createElement("span")
e.textContent=a,l.appendChild(e)}const c=document.createElement("span")
if(c.textContent=e,l.appendChild(c),r){const e=document.createElement("span")
e.textContent="×",e.style.cssText="\n                    cursor: pointer;\n                    font-size: 1.2em;\n                    margin-left: 4px;\n                ",e.addEventListener("click",()=>{l.style.animation="fadeOut 0.3s",setTimeout(()=>l.remove(),300),t.onDismiss&&t.onDismiss()}),l.appendChild(e)}o.appendChild(l)})},t.prototype.popover=function(t,n={}){return this.each((o,r)=>{if(r._yaka_popover)return
r._yaka_popover=!0
const a=n.position||"top",s=n.trigger||"click",i=n.width||"auto",l=document.createElement("div")
l.innerHTML=t,l.style.cssText=`\n                position: absolute;\n                background: white;\n                border: 1px solid #ddd;\n                border-radius: 8px;\n                padding: 12px;\n                box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n                z-index: 1000;\n                width: ${i};\n                display: none;\n            `
const c=document.createElement("div")
c.style.cssText="\n                position: absolute;\n                width: 0;\n                height: 0;\n                border: 8px solid transparent;\n            ",l.appendChild(c)
const d=()=>{document.body.appendChild(l),l.style.display="block"
const t=r.getBoundingClientRect(),n=l.getBoundingClientRect()
let o,s
switch(a){case"top":o=t.top-n.height-12,s=t.left+t.width/2-n.width/2,c.style.cssText+="\n                            bottom: -16px;\n                            left: 50%;\n                            transform: translateX(-50%);\n                            border-top-color: white;\n                        "
break
case"bottom":o=t.bottom+12,s=t.left+t.width/2-n.width/2,c.style.cssText+="\n                            top: -16px;\n                            left: 50%;\n                            transform: translateX(-50%);\n                            border-bottom-color: white;\n                        "
break
case"left":o=t.top+t.height/2-n.height/2,s=t.left-n.width-12,c.style.cssText+="\n                            right: -16px;\n                            top: 50%;\n                            transform: translateY(-50%);\n                            border-left-color: white;\n                        "
break
case"right":o=t.top+t.height/2-n.height/2,s=t.right+12,c.style.cssText+="\n                            left: -16px;\n                            top: 50%;\n                            transform: translateY(-50%);\n                            border-right-color: white;\n                        "}l.style.top=o+e.scrollY+"px",l.style.left=s+e.scrollX+"px"},p=()=>{l.style.display="none",l.parentNode&&l.remove()}
"click"===s?(r.addEventListener("click",e=>{e.stopPropagation(),"none"===l.style.display?d():p()}),document.addEventListener("click",e=>{l.contains(e.target)||p()})):"hover"===s&&(r.addEventListener("mouseenter",d),r.addEventListener("mouseleave",p),l.addEventListener("mouseenter",d),l.addEventListener("mouseleave",p)),r._yaka_popover_cleanup=()=>{p(),delete r._yaka_popover,delete r._yaka_popover_cleanup}})},t.prototype.stepper=function(e={}){return this.each((t,n)=>{const o=e.steps||[]
let r=0
n.style.cssText="\n                display: flex;\n                flex-direction: column;\n                gap: 20px;\n            "
const a=document.createElement("div")
a.style.cssText="\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n                margin-bottom: 20px;\n            "
const s=[]
o.forEach((e,t)=>{const n=document.createElement("div")
n.style.cssText="\n                    display: flex;\n                    flex-direction: column;\n                    align-items: center;\n                    flex: 1;\n                    position: relative;\n                "
const i=document.createElement("div")
i.textContent=""+(t+1),i.style.cssText=`\n                    width: 36px;\n                    height: 36px;\n                    border-radius: 50%;\n                    background: ${t===r?"#2196F3":r>t?"#4CAF50":"#ddd"};\n                    color: white;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    font-weight: bold;\n                    z-index: 1;\n                `
const l=document.createElement("div")
if(l.textContent=e.label||"Step "+(t+1),l.style.cssText=`\n                    margin-top: 8px;\n                    font-size: 0.875em;\n                    color: ${t===r?"#2196F3":"#666"};\n                `,n.appendChild(i),n.appendChild(l),o.length-1>t){const e=document.createElement("div")
e.style.cssText=`\n                        position: absolute;\n                        top: 18px;\n                        left: 50%;\n                        width: 100%;\n                        height: 2px;\n                        background: ${r>t?"#4CAF50":"#ddd"};\n                        z-index: 0;\n                    `,n.appendChild(e)}s.push({circle:i,label:l}),a.appendChild(n)})
const i=document.createElement("div")
i.style.cssText="\n                min-height: 200px;\n                padding: 20px;\n                border: 1px solid #ddd;\n                border-radius: 4px;\n            "
const l=document.createElement("div")
l.style.cssText="\n                display: flex;\n                justify-content: space-between;\n                margin-top: 20px;\n            "
const c=document.createElement("button")
c.textContent="Previous",c.style.cssText="\n                padding: 10px 20px;\n                background: #9E9E9E;\n                color: white;\n                border: none;\n                border-radius: 4px;\n                cursor: pointer;\n            ",c.disabled=!0
const d=document.createElement("button")
d.textContent="Next",d.style.cssText="\n                padding: 10px 20px;\n                background: #2196F3;\n                color: white;\n                border: none;\n                border-radius: 4px;\n                cursor: pointer;\n            "
const p=()=>{s.forEach((e,t)=>{e.circle.style.background=t===r?"#2196F3":r>t?"#4CAF50":"#ddd",e.label.style.color=t===r?"#2196F3":"#666"}),o[r]&&o[r].content&&(i.innerHTML=o[r].content),c.disabled=0===r,c.style.opacity=0===r?"0.5":"1",c.style.cursor=0===r?"not-allowed":"pointer",d.textContent=r===o.length-1?"Finish":"Next",e.onStepChange&&e.onStepChange(r)}
c.addEventListener("click",()=>{r>0&&(r--,p())}),d.addEventListener("click",()=>{o.length-1>r?(r++,p()):e.onFinish&&e.onFinish()}),l.appendChild(c),l.appendChild(d),n.appendChild(a),n.appendChild(i),n.appendChild(l),p()})},t.prototype.parallax=function(t=.5){return this.each((n,o)=>{if(o._yaka_parallax)return
o._yaka_parallax=!0
const r=()=>{o.style.transform=`translateY(${e.pageYOffset*t}px)`}
e.addEventListener("scroll",r),o._yaka_parallax_cleanup=()=>{e.removeEventListener("scroll",r),delete o._yaka_parallax,delete o._yaka_parallax_cleanup}})},t.prototype.infiniteScroll=function(e){return this.each((t,n)=>{const o=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&e.call(n)})})
o.observe(n),n._yaka_scroll_observer=o,n._yaka_scroll_cleanup=()=>{n._yaka_scroll_observer&&(n._yaka_scroll_observer.disconnect(),delete n._yaka_scroll_observer,delete n._yaka_scroll_cleanup)}})},t.prototype.masonry=function(e=3){return this.each((t,n)=>{n.style.cssText=`\n                display: grid;\n                grid-template-columns: repeat(${e}, 1fr);\n                gap: 20px;\n                grid-auto-rows: 20px;\n            `,Array.from(n.children).forEach(e=>{e.style.gridRowEnd="span "+Math.ceil(e.offsetHeight/20)})})},t.prototype.filter=function(e){return this.each((t,n)=>{n.style.filter={grayscale:"grayscale(100%)",sepia:"sepia(100%)",blur:"blur(5px)",brightness:"brightness(150%)",contrast:"contrast(200%)",invert:"invert(100%)",saturate:"saturate(200%)",hueRotate:"hue-rotate(90deg)"}[e]||e})},t.qrcode=(e,t=200)=>`https://api.qrserver.com/v1/create-qr-code/?size=${t}x${t}&data=${encodeURIComponent(e)}`,t.barcode=e=>"https://bwipjs-api.metafloor.com/?bcid=code128&text="+encodeURIComponent(e),t.markdown=e=>e.replace(/^### (.*$)/gim,"<h3>$1</h3>").replace(/^## (.*$)/gim,"<h2>$1</h2>").replace(/^# (.*$)/gim,"<h1>$1</h1>").replace(/\*\*(.*)\*\*/gim,"<strong>$1</strong>").replace(/\*(.*)\*/gim,"<em>$1</em>").replace(/\n/gim,"<br>"),t.highlight=(e,t="javascript")=>{let n=e
return["const","let","var","function","if","else","return","for","while"].forEach(e=>{n=n.replace(RegExp(`\\b${e}\\b`,"g"),`<span style="color: #569cd6;">${e}</span>`)}),n=n.replace(/'([^']*)'/g,"<span style=\"color: #ce9178;\">'$1'</span>"),n=n.replace(/"([^"]*)"/g,'<span style="color: #ce9178;">"$1"</span>'),`<pre style="background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; overflow-x: auto;"><code>${n}</code></pre>`},t.db={open:async(e,t)=>new Promise((n,o)=>{const r=indexedDB.open(e,1)
r.onerror=()=>o(r.error),r.onsuccess=()=>n(r.result),r.onupgradeneeded=e=>{const n=e.target.result
n.objectStoreNames.contains(t)||n.createObjectStore(t,{keyPath:"id",autoIncrement:!0})}}),async add(e,t,n){const o=e.transaction(t,"readwrite").objectStore(t)
return new Promise((e,t)=>{const r=o.add(n)
r.onsuccess=()=>e(r.result),r.onerror=()=>t(r.error)})},async get(e,t,n){const o=e.transaction(t,"readonly").objectStore(t)
return new Promise(e=>{const t=o.get(n)
t.onsuccess=()=>e(t.result)})},async getAll(e,t){const n=e.transaction(t,"readonly").objectStore(t)
return new Promise(e=>{const t=n.getAll()
t.onsuccess=()=>e(t.result)})},async delete(e,t,n){const o=e.transaction(t,"readwrite").objectStore(t)
return new Promise((e,t)=>{const r=o.delete(n)
r.onsuccess=()=>e(r.result),r.onerror=()=>t(r.error)})}},t.serviceWorker=async e=>{if("serviceWorker"in navigator)try{const t=await navigator.serviceWorker.register(e)
return console.log("Service Worker registered:",t),t}catch(e){console.error("Service Worker registration failed:",e)}},t.pushNotification=async(t,n={})=>{"Notification"in e&&"granted"===await Notification.requestPermission()&&new Notification(t,n)},t.screenRecord=async()=>{try{const e=await navigator.mediaDevices.getDisplayMedia({video:!0}),t=new MediaRecorder(e),n=[]
return t.ondataavailable=e=>n.push(e.data),t.onstop=()=>{const e=new Blob(n,{type:"video/webm"}),t=URL.createObjectURL(e),o=document.createElement("a")
o.href=t,o.download="recording.webm",o.click()},{start:()=>t.start(),stop:()=>t.stop(),recorder:t}}catch(e){console.error("Screen recording failed:",e)}},t.vdom={create:(e,t={},n=[])=>({tag:e,props:t,children:n}),render(e){if("string"==typeof e)return document.createTextNode(e)
const t=document.createElement(e.tag)
return Object.keys(e.props||{}).forEach(n=>{n.startsWith("on")?t.addEventListener(n.substring(2).toLowerCase(),e.props[n]):t.setAttribute(n,e.props[n])}),(e.children||[]).forEach(e=>{t.appendChild(this.render(e))}),t},diff:(e,t)=>e?t?typeof e!=typeof t?{type:"REPLACE",newNode:t}:"string"==typeof e?e!==t?{type:"TEXT",newNode:t}:null:e.tag!==t.tag?{type:"REPLACE",newNode:t}:{type:"UPDATE",props:t.props,children:t.children}:{type:"REMOVE"}:{type:"CREATE",newNode:t}},t.template=(e,t)=>{let n=e
return n=n.replace(/\{\{([^}]+)\}\}/g,(e,n)=>{const o=n.trim().split(".")
let r=t
return o.forEach(e=>r=r?.[e]),void 0!==r?r:""}),n=n.replace(/\{\{#if\s+([^}]+)\}\}([\s\S]*?)\{\{\/if\}\}/g,(e,n,o)=>{const r=n.trim().split(".")
let a=t
return r.forEach(e=>a=a?.[e]),a?o:""}),n=n.replace(/\{\{#each\s+([^}]+)\}\}([\s\S]*?)\{\{\/each\}\}/g,(e,n,o)=>{const r=t[n.trim()]
return Array.isArray(r)?r.map(e=>o.replace(/\{\{this\.([^}]+)\}\}/g,(t,n)=>e[n]||"")).join(""):""}),n},t.http={interceptors:{request:[],response:[]},addRequestInterceptor(e){this.interceptors.request.push(e)},addResponseInterceptor(e){this.interceptors.response.push(e)},async fetch(e,t={}){let n={url:e,...t}
for(const e of this.interceptors.request)n=await e(n)
let o=await fetch(n.url,n)
for(const e of this.interceptors.response)o=await e(o)
return o}},t.plugins={},t.use=function(e,n={}){"function"==typeof e.install&&(e.install(t,n),this.plugins[e.name||"anonymous"]=e)},t.timeline=function(){return{animations:[],add(e,t,n,o=0){return this.animations.push({selector:e,props:t,duration:n,delay:o}),this},async play(){for(const e of this.animations)await new Promise(t=>{setTimeout(()=>{_(e.selector).animate(e.props,e.duration),setTimeout(t,e.duration)},e.delay)})},playAll(){this.animations.forEach(e=>{setTimeout(()=>{_(e.selector).animate(e.props,e.duration)},e.delay)})}}},t.prototype.position=function(t={}){return this.each((n,o)=>{const r=t.of||e,a=t.at||"center",s=t.collision||"flip",i=t.offset||{x:0,y:0},l=e=>{const t=e.split(" ")
return{x:t[0]||"center",y:t[1]||"center"}},c=l(t.my||"center"),d=l(a),p=r===e||r.nodeType?r:document.querySelector(r)
if(!p)return
const u=o.getBoundingClientRect()
let h
h=p===e?{left:0,top:0,width:e.innerWidth,height:e.innerHeight}:p.getBoundingClientRect()
let m=h.left,y=h.top
"left"===d.x?m=h.left:"center"===d.x?m=h.left+h.width/2:"right"===d.x&&(m=h.left+h.width),"center"===c.x?m-=u.width/2:"right"===c.x&&(m-=u.width),"top"===d.y?y=h.top:"center"===d.y?y=h.top+h.height/2:"bottom"===d.y&&(y=h.top+h.height),"center"===c.y?y-=u.height/2:"bottom"===c.y&&(y-=u.height),m+=i.x||0,y+=i.y||0,"flip"===s?(0>m?m=h.right:m+u.width>e.innerWidth&&(m=h.left-u.width),0>y?y=h.bottom:y+u.height>e.innerHeight&&(y=h.top-u.height)):"fit"===s&&(m=Math.max(0,Math.min(m,e.innerWidth-u.width)),y=Math.max(0,Math.min(y,e.innerHeight-u.height))),o.style.position="absolute",o.style.left=m+"px",o.style.top=y+"px"})},t.prototype.transform3d=function(e={}){return this.each((t,n)=>{const o=[]
e.rotateX&&o.push(`rotateX(${e.rotateX}deg)`),e.rotateY&&o.push(`rotateY(${e.rotateY}deg)`),e.rotateZ&&o.push(`rotateZ(${e.rotateZ}deg)`),e.translateX&&o.push(`translateX(${e.translateX}px)`),e.translateY&&o.push(`translateY(${e.translateY}px)`),e.translateZ&&o.push(`translateZ(${e.translateZ}px)`),e.scale&&o.push(`scale3d(${e.scale}, ${e.scale}, ${e.scale})`),n.style.transform=o.join(" "),n.style.transformStyle="preserve-3d"})},t.prototype.particles=function(e={}){return this.each((t,n)=>{const o=e.count||50,r=e.color||"#667eea",a=e.size||5,s=e.speed||2
n.style.position="relative",n.style.overflow="hidden"
for(let e=0;o>e;e++){const e=document.createElement("div")
e.style.cssText=`\n                    position: absolute;\n                    width: ${a}px;\n                    height: ${a}px;\n                    background: ${r};\n                    border-radius: 50%;\n                    left: ${100*Math.random()}%;\n                    top: ${100*Math.random()}%;\n                    opacity: ${Math.random()};\n                    animation: float ${s+3*Math.random()}s infinite;\n                `,n.appendChild(e)}})},t.audio={context:null,init(){return this.context||(this.context=new(e.AudioContext||e.webkitAudioContext)),this.context},play(e){const t=new Audio(e)
return t.play(),t},beep(e=440,t=200){const n=this.init(),o=n.createOscillator(),r=n.createGain()
o.connect(r),r.connect(n.destination),o.frequency.value=e,o.type="sine",r.gain.setValueAtTime(.3,n.currentTime),r.gain.exponentialRampToValueAtTime(.01,n.currentTime+t/1e3),o.start(n.currentTime),o.stop(n.currentTime+t/1e3)},async record(){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0}),t=new MediaRecorder(e),n=[]
return t.ondataavailable=e=>n.push(e.data),{start:()=>t.start(),stop:()=>new Promise(o=>{t.onstop=()=>{const e=new Blob(n,{type:"audio/webm"})
o(e)},t.stop(),e.getTracks().forEach(e=>e.stop())})}}catch(e){throw console.error("Error accessing microphone:",e),e}}},t.prototype.videoControls=function(e={}){return this.each((e,t)=>{"VIDEO"===t.tagName&&(t._controls={play:()=>t.play(),pause:()=>t.pause(),stop(){t.pause(),t.currentTime=0},seek:e=>t.currentTime=e,volume:e=>t.volume=e,speed:e=>t.playbackRate=e,fullscreen:()=>t.requestFullscreen(),screenshot(){const e=document.createElement("canvas")
return e.width=t.videoWidth,e.height=t.videoHeight,e.getContext("2d").drawImage(t,0,0),e.toDataURL("image/png")}})})},t.crypto={async hash(e,t="SHA-256"){const n=(new TextEncoder).encode(e),o=await crypto.subtle.digest(t,n)
return Array.from(new Uint8Array(o)).map(e=>e.toString(16).padStart(2,"0")).join("")},uuid:()=>crypto.randomUUID(),random(e=0,t=100){const n=new Uint32Array(1)
return crypto.getRandomValues(n),e+n[0]%(t-e+1)},encrypt:async(e,t)=>btoa(e+":"+t),async decrypt(e,t){const n=atob(e).split(":")
if(2>n.length)return null
const o=n.pop(),r=n.join(":")
return o===t?r:null}},t.device={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isTablet:/iPad|Android/i.test(navigator.userAgent)&&!/Mobile/i.test(navigator.userAgent),isDesktop:!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isIOS:/iPad|iPhone|iPod/.test(navigator.userAgent),isAndroid:/Android/.test(navigator.userAgent),info:()=>({userAgent:navigator.userAgent,platform:navigator.platform,language:navigator.language,cookieEnabled:navigator.cookieEnabled,onLine:navigator.onLine,screenWidth:screen.width,screenHeight:screen.height,windowWidth:e.innerWidth,windowHeight:e.innerHeight,devicePixelRatio:e.devicePixelRatio})},t.storage.quota=async()=>{if(navigator.storage&&navigator.storage.estimate){const e=await navigator.storage.estimate()
return{usage:e.usage,quota:e.quota,percentage:(e.usage/e.quota*100).toFixed(2),available:e.quota-e.usage}}return null},t.prototype.lazyLoadBlur=function(){return this.each((e,t)=>{const n=t.dataset.src
if(!n)return
t.style.filter="blur(20px)",t.style.transition="filter 0.3s"
const o=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const e=new Image
e.onload=()=>{t.src=n,t.style.filter="blur(0)"},e.src=n,o.unobserve(t)}})})
o.observe(t)})},t.prototype.scrollSpy=function(e){return this.each((t,n)=>{const o=new IntersectionObserver(t=>{t.forEach(t=>{e.call(n,t.isIntersecting,t.intersectionRatio)})},{threshold:[0,.25,.5,.75,1]})
o.observe(n),n._yaka_scrollspy_observer=o,n._yaka_scrollspy_cleanup=()=>{n._yaka_scrollspy_observer&&(n._yaka_scrollspy_observer.disconnect(),delete n._yaka_scrollspy_observer,delete n._yaka_scrollspy_cleanup)}})},t.prototype.sticky=function(t=0){return this.each((n,o)=>{if(o._yaka_sticky)return
o._yaka_sticky=!0
const r=o.offsetTop,a=()=>{r-t>e.pageYOffset?o.style.position="static":(o.style.position="fixed",o.style.top=t+"px")}
e.addEventListener("scroll",a),o._yaka_sticky_cleanup=()=>{e.removeEventListener("scroll",a),delete o._yaka_sticky,delete o._yaka_sticky_cleanup}})},t.prototype.ripple=function(e="rgba(255,255,255,0.6)"){return this.each((t,n)=>{n.style.position="relative",n.style.overflow="hidden",n.addEventListener("click",t=>{const o=document.createElement("span"),r=n.getBoundingClientRect(),a=Math.max(r.width,r.height)
o.style.cssText=`\n                    position: absolute;\n                    width: ${a}px;\n                    height: ${a}px;\n                    border-radius: 50%;\n                    background: ${e};\n                    left: ${t.clientX-r.left-a/2}px;\n                    top: ${t.clientY-r.top-a/2}px;\n                    transform: scale(0);\n                    animation: ripple-effect 0.6s ease-out;\n                    pointer-events: none;\n                `,n.appendChild(o),setTimeout(()=>o.remove(),600)})})},t.prototype.tilt=function(e={}){return this.each((t,n)=>{if(n._yaka_tilt)return
n._yaka_tilt=!0
const o=e.max||15,r=e=>{const t=n.getBoundingClientRect(),r=t.width/2,a=t.height/2
n.style.transform=`perspective(1000px) rotateX(${(e.clientY-t.top-a)/a*o}deg) rotateY(${-(e.clientX-t.left-r)/r*o}deg)`},a=()=>{n.style.transform="perspective(1000px) rotateX(0) rotateY(0)"}
n.addEventListener("mousemove",r),n.addEventListener("mouseleave",a),n._yaka_tilt_cleanup=()=>{n.removeEventListener("mousemove",r),n.removeEventListener("mouseleave",a),delete n._yaka_tilt,delete n._yaka_tilt_cleanup}})},t.prototype.magnetic=function(e=.3){return this.each((t,n)=>{if(n._yaka_magnetic)return
n._yaka_magnetic=!0
const o=t=>{const o=n.getBoundingClientRect()
n.style.transform=`translate(${(t.clientX-o.left-o.width/2)*e}px, ${(t.clientY-o.top-o.height/2)*e}px)`},r=()=>{n.style.transform="translate(0, 0)"}
n.addEventListener("mousemove",o),n.addEventListener("mouseleave",r),n._yaka_magnetic_cleanup=()=>{n.removeEventListener("mousemove",o),n.removeEventListener("mouseleave",r),delete n._yaka_magnetic,delete n._yaka_magnetic_cleanup}})},t.prototype.scramble=function(e,t=1e3){return this.each((n,o)=>{const r=e.length
let a=0
const s=t/50,i=setInterval(()=>{let t=""
for(let n=0;r>n;n++)t+=a/s>n/r?e[n]:"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"[Math.floor(44*Math.random())]
o.textContent=t,a++,s>a||(o.textContent=e,clearInterval(i))},50)})},t.prototype.glitch=function(e=2e3){return this.each((t,n)=>{const o=n.textContent
let r=!0
setTimeout(()=>r=!1,e)
const a=setInterval(()=>{if(!r)return n.textContent=o,void clearInterval(a)
const e=["█","▓","▒","░","▀","▄","▌","▐"]
let t=""
for(let n of o)t+=Math.random()>.7?e[Math.floor(8*Math.random())]:n
n.textContent=t},50)})},t.prototype.progress=function(e,t={}){return this.each((n,o)=>{const r=t.color||"#667eea",a=!1!==t.animated
o.style.cssText=`\n                width: 100%;\n                height: ${t.height||"20px"};\n                background: #e0e0e0;\n                border-radius: 10px;\n                overflow: hidden;\n            `
const s=document.createElement("div")
s.style.cssText=`\n                width: ${e}%;\n                height: 100%;\n                background: ${r};\n                transition: ${a?"width 0.5s ease":"none"};\n            `,o.innerHTML="",o.appendChild(s)})},t.spinner=(e={})=>{const t=e.size||50,n=e.color||"#667eea",o=e.container||document.body,r=document.createElement("div")
return r.style.cssText=`\n            position: fixed;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: ${t}px;\n            height: ${t}px;\n            border: 4px solid #f3f3f3;\n            border-top: 4px solid ${n};\n            border-radius: 50%;\n            animation: spin 1s linear infinite;\n            z-index: 10000;\n        `,o.appendChild(r),{remove:()=>r.remove()}},t.prototype.skeleton=function(e={}){return this.each((t,n)=>{const o=e.lines||3,r=e.height||"20px"
n.innerHTML=""
for(let e=0;o>e;e++){const e=document.createElement("div")
e.style.cssText=`\n                    height: ${r};\n                    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n                    background-size: 200% 100%;\n                    animation: skeleton-loading 1.5s infinite;\n                    margin-bottom: 10px;\n                    border-radius: 4px;\n                `,n.appendChild(e)}})},t.prototype.cleanup=function(){return this.each((e,t)=>{["_yaka_parallax_cleanup","_yaka_sticky_cleanup","_yaka_draggable_cleanup","_yaka_sortable_cleanup","_yaka_resizable_cleanup","_yaka_droppable_cleanup","_yaka_selectable_cleanup","_yaka_scroll_cleanup","_yaka_scrollspy_cleanup","_yaka_tilt_cleanup","_yaka_magnetic_cleanup","_yaka_tooltip_cleanup","_yaka_button_cleanup","_yaka_checkboxradio_cleanup","_yaka_controlgroup_cleanup","_yaka_menu_cleanup","_yaka_selectbox_cleanup","_yaka_timepicker_cleanup","_yaka_fullpage_cleanup","_yaka_colorpicker_cleanup","_yaka_datepicker_cleanup","_yaka_slider_cleanup","_yaka_tabs_cleanup","_yaka_accordion_cleanup","_yaka_carousel_cleanup","_yaka_confetti_cleanup","_yaka_autocomplete_cleanup"].forEach(e=>{"function"==typeof t[e]&&t[e]()})})},t.debug=!1,t._log=(e,n,o)=>{if(!t.debug)return
const r={info:"color: #3498db; font-weight: bold;",warn:"color: #f39c12; font-weight: bold;",error:"color: #e74c3c; font-weight: bold;",success:"color: #2ecc71; font-weight: bold;"},a=`[Yaka ${e.toUpperCase()}]`
console.log("%c"+a,r[e]||r.info,n,o||"")},t.prototype.safe=function(){return this.elements&&0!==this.elements.length?this:(t._log("warn","Safe mode: Operating on empty selector",{selector:this}),new Proxy(this,{get(e,n){return"function"==typeof t.prototype[n]?()=>(t._log("warn",`Safe mode: Skipping .${n}() on empty elements`),e):e[n]}}))},t.supports=n=>{const o={webrtc:()=>!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia),geolocation:()=>!!navigator.geolocation,bluetooth:()=>!!navigator.bluetooth,webworker:()=>"undefined"!=typeof Worker,serviceworker:()=>"serviceWorker"in navigator,indexeddb:()=>!!e.indexedDB,websocket:()=>"undefined"!=typeof WebSocket,"intersection-observer":()=>"undefined"!=typeof IntersectionObserver,"mutation-observer":()=>"undefined"!=typeof MutationObserver,"performance-observer":()=>"undefined"!=typeof PerformanceObserver,"view-transition":()=>!!document.startViewTransition,webnn:()=>!!navigator.ml,battery:()=>!!navigator.getBattery,share:()=>!!navigator.share,clipboard:()=>!!navigator.clipboard,vibrate:()=>!!navigator.vibrate,fullscreen:()=>!(!document.fullscreenEnabled&&!document.webkitFullscreenEnabled),webgl(){try{const e=document.createElement("canvas")
return!(!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}},webgl2(){try{return!!document.createElement("canvas").getContext("webgl2")}catch(e){return!1}}}[n.toLowerCase()]
if(!o)return t._log("warn","Unknown feature: "+n),!1
try{return o()}catch(e){return t._log("error",`Error detecting feature ${n}:`,e),!1}},t.prototype.observeVisibility=function(e,n={}){const o=n.threshold||.1,r=n.rootMargin||"0px",a=!1!==n.once,s=n.unobserveOnLeave||!1
return this.each((n,i)=>{if(!t.supports("intersection-observer"))return t._log("warn","IntersectionObserver not supported, calling callback immediately"),void e.call(i,i,!0)
const l=new IntersectionObserver(t=>{t.forEach(t=>{const n=t.isIntersecting
n&&a?(e.call(t.target,t.target,!0),l.unobserve(t.target)):!n&&s||(e.call(t.target,t.target,n),!n&&s&&l.unobserve(t.target))})},{threshold:o,rootMargin:r})
l.observe(i),i._yaka_visibility_cleanup=()=>{l.disconnect()}})},t.signal=e=>{let n=e
const o=new Set,r=()=>(t.signal._currentEffect&&o.add(t.signal._currentEffect),n)
return r.set=e=>{n!==e&&(n=e,t._log("info","Signal updated",{value:n}),o.forEach(e=>e()))},r.update=e=>{const r=e(n)
n!==r&&(n=r,t._log("info","Signal updated",{value:n}),o.forEach(e=>e()))},r},t.effect=e=>{const n=()=>{t.signal._currentEffect=n
try{e()}finally{t.signal._currentEffect=null}}
n()},t.computed=e=>{const n=t.signal(void 0)
return t.effect(()=>n.set(e())),n},t.detectLeaks=()=>{const e=[]
return document.querySelectorAll("*").forEach(t=>{let n=0
Object.keys(t).filter(e=>e.startsWith("_yaka_")).forEach(e=>{e.endsWith("_cleanup")&&n++}),n>5&&e.push({element:t,tagName:t.tagName,id:t.id,cleanupMethods:n})}),e.length>0?t._log("warn",`Potential memory leaks detected: ${e.length} elements`,e):t._log("success","No memory leaks detected"),e},t.pageTransition=(n,o={})=>t.supports("view-transition")?document.startViewTransition(async()=>{o.beforeTransition&&await o.beforeTransition()
const e=await fetch(n),t=await e.text(),r=(new DOMParser).parseFromString(t,"text/html"),a=o.target||"body",s=document.querySelector(a),i=r.querySelector(a)
s&&i&&(s.innerHTML=i.innerHTML),o.afterTransition&&await o.afterTransition()}).finished:(t._log("warn","View Transition API not supported, using regular navigation"),e.location.href=n,Promise.resolve()),t.prototype.mask=function(e,n={}){const o="string"==typeof e?{phone:{pattern:"(###) ###-####",placeholder:"_",filter:/[0-9]/},creditCard:{pattern:"#### #### #### ####",placeholder:"_",filter:/[0-9]/},date:{pattern:"##/##/####",placeholder:"_",filter:/[0-9]/},ssn:{pattern:"###-##-####",placeholder:"_",filter:/[0-9]/},zipcode:{pattern:"#####",placeholder:"_",filter:/[0-9]/}}[e]:e
return o?this.each((e,t)=>{if("INPUT"!==t.tagName)return
const n=e=>{const n=t.value,r=t.selectionStart,a=(e=>{const t=e.replace(/[^0-9]/g,"")
let n="",r=0
for(let e=0;o.pattern.length>e&&t.length>r;e++)"#"===o.pattern[e]?(n+=t[r],r++):n+=o.pattern[e]
return n})(t.value)
if(n===a)return
t.value=a
let s=r,i=0
for(let e=0;Math.min(r,n.length)>e;e++)/[0-9]/.test(n[e])&&i++
let l=0
for(let e=0;a.length>e;e++)if(/[0-9]/.test(a[e])&&(l++,l===i)){s=e+1
break}t.setSelectionRange(s,s)}
t.addEventListener("input",n),t._yaka_mask_cleanup=()=>{t.removeEventListener("input",n)}}):(t._log("error","Unknown mask type: "+e),this)},t.prototype.honeypot=function(e={}){return this.each((n,o)=>{if("FORM"!==o.tagName)return
const r=document.createElement("input")
r.type="text",r.name=e.name||"website",r.style.cssText="position: absolute; left: -9999px; width: 1px; height: 1px;",r.tabIndex=-1,r.autocomplete="off",r.setAttribute("aria-hidden","true"),o.appendChild(r)
const a=n=>{if(r.value)return n.preventDefault(),t._log("warn","Honeypot triggered - potential spam detected"),e.onSpam&&e.onSpam(n),!1}
o.addEventListener("submit",a),o._yaka_honeypot_cleanup=()=>{o.removeEventListener("submit",a),r.parentNode&&r.parentNode.removeChild(r)}})},t.hotkeys={},t.hotkey=(e,n,o={})=>{const r=e.toLowerCase().replace(/\s+/g,"").replace(/cmd/g,"ctrl").replace(/meta/g,"ctrl"),a=e=>{const t=[];(e.ctrlKey||e.metaKey)&&t.push("ctrl"),e.altKey&&t.push("alt"),e.shiftKey&&t.push("shift"),t.push(e.key.toLowerCase()),t.join("+")===r&&(!1!==o.preventDefault&&e.preventDefault(),n(e))}
return document.addEventListener("keydown",a),t.hotkeys[r]=a,t._log("info","Hotkey registered: "+e),{remove(){document.removeEventListener("keydown",a),delete t.hotkeys[r]}}},t.removeHotkey=e=>{const n=e.toLowerCase().replace(/\s+/g,"")
t.hotkeys[n]&&(document.removeEventListener("keydown",t.hotkeys[n]),delete t.hotkeys[n])},t.worker=(e,n)=>t.supports("webworker")?new Promise((t,o)=>{try{const r=`\n                    self.onmessage = function(e) {\n                        const fn = ${""+e};\n                        try {\n                            const result = fn(e.data);\n                            self.postMessage({ success: true, result });\n                        } catch (error) {\n                            self.postMessage({ success: false, error: error.message });\n                        }\n                    };\n                `,a=new Blob([r],{type:"application/javascript"}),s=new Worker(URL.createObjectURL(a))
s.onmessage=e=>{e.data.success?t(e.data.result):o(Error(e.data.error)),s.terminate()},s.onerror=e=>{o(e),s.terminate()},s.postMessage(n)}catch(e){o(e)}}):Promise.reject(Error("Web Workers not supported")),t.db&&(t.db.saveMany=async function(e,n){if(!t.supports("indexeddb"))return Promise.reject(Error("IndexedDB not supported"))
const o=(await this._open()).transaction(e,"readwrite").objectStore(e),r=n.map(e=>new Promise((t,n)=>{const r=o.add(e)
r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error)}))
return Promise.all(r)},t.db.query=async function(e,n){if(!t.supports("indexeddb"))return Promise.reject(Error("IndexedDB not supported"))
const o=(await this._open()).transaction(e,"readonly").objectStore(e)
return new Promise((e,t)=>{const r=o.getAll()
r.onsuccess=()=>{let t=r.result
n&&(t=t.filter(n)),e(t)},r.onerror=()=>t(r.error)})},t.db.count=async function(e){if(!t.supports("indexeddb"))return Promise.reject(Error("IndexedDB not supported"))
const n=(await this._open()).transaction(e,"readonly").objectStore(e)
return new Promise((e,t)=>{const o=n.count()
o.onsuccess=()=>e(o.result),o.onerror=()=>t(o.error)})}),t.ai={isAvailable:()=>t.supports("webnn")||!!e.ai,async summarize(n,o={}){if(!this.isAvailable())return Promise.reject(Error("AI capabilities not supported in this browser"))
try{if(e.ai&&e.ai.summarizer){const t=await e.ai.summarizer.create(o)
return await t.summarize(n)}throw Error("Summarization API not available")}catch(e){throw t._log("error","AI summarization failed:",e),e}},async analyzeSentiment(n){if(!this.isAvailable())return Promise.reject(Error("AI capabilities not supported in this browser"))
try{if(e.ai&&e.ai.languageModel){const t=await e.ai.languageModel.create(),o=`Analyze the sentiment of this text and return only "positive", "negative", or "neutral": "${n}"`
return(await t.prompt(o)).toLowerCase().trim()}throw Error("Language model API not available")}catch(e){throw t._log("error","Sentiment analysis failed:",e),e}},async translate(n,o){if(!this.isAvailable())return Promise.reject(Error("AI capabilities not supported in this browser"))
try{if(e.ai&&e.ai.translator){const t=await e.ai.translator.create({sourceLanguage:"en",targetLanguage:o})
return await t.translate(n)}throw Error("Translation API not available")}catch(e){throw t._log("error","Translation failed:",e),e}}},t.theme={_current:null,_listeners:[],_storageAvailable:!0,_initCurrent(){if(null===this._current)try{this._current=localStorage.getItem("yaka-theme")||"light"}catch(e){t._log("warn","localStorage not available, theme will not persist across sessions"),this._storageAvailable=!1,this._current="light"}},get current(){return this._initCurrent(),this._current},set(e){if(this._initCurrent(),"light"===e||"dark"===e){if(this._current=e,this._storageAvailable)try{localStorage.setItem("yaka-theme",e)}catch(e){t._log("warn","Failed to save theme to localStorage:",e.message)}document.documentElement.setAttribute("data-theme",e),Object.entries("dark"===e?{"--bg-color":"#1a1a1a","--text-color":"#ffffff","--primary-color":"#667eea","--secondary-color":"#764ba2","--border-color":"#333333","--card-bg":"#2a2a2a","--shadow":"0 2px 8px rgba(0,0,0,0.5)"}:{"--bg-color":"#ffffff","--text-color":"#333333","--primary-color":"#667eea","--secondary-color":"#764ba2","--border-color":"#e0e0e0","--card-bg":"#f9f9f9","--shadow":"0 2px 8px rgba(0,0,0,0.1)"}).forEach(([e,t])=>{document.documentElement.style.setProperty(e,t)}),this._listeners.forEach(t=>t(e)),t._log("info","Theme changed to: "+e)}else t._log("error",`Invalid theme: ${e}. Use 'light' or 'dark'`)},dark(){this.set("dark")},light(){this.set("light")},toggle(){this.set("dark"===this._current?"light":"dark")},onChange(e){this._listeners.push(e)},init(){this.set(this.current),e.matchMedia&&e.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{let t=!1
if(this._storageAvailable)try{t=null!==localStorage.getItem("yaka-theme")}catch(e){}t||this.set(e.matches?"dark":"light")})}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",()=>t.theme.init()):t.theme.init(),t.plugins={},t.use=(e,n)=>{if("function"==typeof n||"object"==typeof n)if(t.plugins[e])t._log("warn",`Plugin "${e}" is already registered`)
else try{"function"==typeof n?n(t):n.install?n.install(t):Object.assign(t,n),t.plugins[e]=n,t._log("success",`Plugin "${e}" registered successfully`)}catch(n){t._log("error",`Failed to register plugin "${e}":`,n)}else t._log("error","Plugin must be a function or object")},t.createPlugin=(e,t)=>({name:e,install(e){t.methods&&Object.assign(e.prototype,t.methods),t.statics&&Object.assign(e,t.statics),t.init&&t.init(e)}}),t.dev={profile(e,t){const n=performance.now(),o=t(),r=performance.now()
return console.log("%c[Yaka Profile] "+e,"color: #9b59b6; font-weight: bold;",(r-n).toFixed(2)+"ms"),o},memory(){if(performance.memory){const e=(performance.memory.usedJSHeapSize/1048576).toFixed(2),t=(performance.memory.totalJSHeapSize/1048576).toFixed(2)
return console.log("%c[Yaka Memory]","color: #e67e22; font-weight: bold;",`${e}MB / ${t}MB`),{used:e,total:t}}return console.warn("Performance.memory not available"),null},inspect(t){const n=document.querySelector(t)
if(!n)return void console.warn("Element not found: "+t)
const o={tagName:n.tagName,id:n.id,classes:Array.from(n.classList),attributes:{},styles:{},listeners:[],yakaFeatures:[]}
Array.from(n.attributes).forEach(e=>{o.attributes[e.name]=e.value})
const r=e.getComputedStyle(n)
return["display","position","width","height","margin","padding"].forEach(e=>{o.styles[e]=r[e]}),Object.keys(n).forEach(e=>{e.startsWith("_yaka_")&&o.yakaFeatures.push(e)}),console.log("%c[Yaka Inspector]","color: #3498db; font-weight: bold;",t,o),o},plugins:()=>(console.log("%c[Yaka Plugins]","color: #2ecc71; font-weight: bold;",Object.keys(t.plugins)),t.plugins),hotkeys:()=>(console.log("%c[Yaka Hotkeys]","color: #f39c12; font-weight: bold;",Object.keys(t.hotkeys)),t.hotkeys)},t.memoize=function(e,n={}){const o=new Map,r=n.keyFn||(e=>{try{if(e.every(e=>{const t=typeof e
return null===e||"undefined"===t||"boolean"===t||"number"===t||"string"===t||"bigint"===t}))return JSON.stringify(e)
if(0===e.length)return"complex_0_empty"
const t=typeof e[0]
try{const t=void 0!==e[0]?JSON.stringify(e[0]):"undefined"
return`complex_${e.length}_${t}`}catch(n){return`complex_${e.length}_${t}`}}catch(t){return`fallback_${e.length}_${e.length>0?typeof e[0]:"empty"}`}})
return function(...n){const a=r(n)
if(o.has(a))return t._log("info","Memoize: Cache hit",{key:a}),o.get(a)
const s=e.apply(this,n)
return o.set(a,s),t._log("info","Memoize: Cache miss, storing result",{key:a}),s}},t.router){const e=t.router
t.router=(n,o={})=>{const r=o.middleware||[],a=e(n),s=a.navigate
return a.navigate=async e=>{for(const n of r)if(!1===await n(e,a))return void t._log("info",`Navigation to ${e} blocked by middleware`)
s.call(a,e)},a}}t.prototype.lottie=function(e={}){return this.each((n,o)=>{if("undefined"==typeof lottie)return void t._log("error","Lottie library not loaded. Include it from: https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js")
const r=lottie.loadAnimation({container:o,renderer:e.renderer||"svg",loop:!1!==e.loop,autoplay:!1!==e.autoplay,path:e.path||e.animationData})
o._yaka_lottie=r,o._yaka_lottie_cleanup=()=>{r.destroy()}})},t.bluetooth={isAvailable:()=>t.supports("bluetooth"),async connect(e={}){if(!this.isAvailable())return Promise.reject(Error("Bluetooth not supported"))
try{const n=await navigator.bluetooth.requestDevice({filters:e.filters||[{services:["heart_rate"]}],optionalServices:e.optionalServices||[]})
t._log("info","Bluetooth device connected:",n.name)
const o=await n.gatt.connect()
return{device:n,server:o,getService:async e=>await o.getPrimaryService(e),disconnect(){o.disconnect(),t._log("info","Bluetooth device disconnected")}}}catch(e){throw t._log("error","Bluetooth connection failed:",e),e}},async heartRateMonitor(e){try{const t=await this.connect({filters:[{services:["heart_rate"]}]}),n=await t.getService("heart_rate"),o=await n.getCharacteristic("heart_rate_measurement")
return o.addEventListener("characteristicvaluechanged",t=>{const n=t.target.value.getUint8(1)
e(n)}),await o.startNotifications(),t}catch(e){throw t._log("error","Heart rate monitor failed:",e),e}}}
class o extends Error{constructor(e,t,n){super(e),this.name="YakaHttpError",this.status=t,this.response=n}}const r=async(e,n,r,a={})=>{const{timeout:s=3e4,retries:i=0,retryDelay:l=1e3,onError:c=null,validateStatus:d=e=>e>=200&&300>e,parseResponse:p=!0}=a
let u
const h=i+1
for(let i=0;h>i;i++)try{const l=new AbortController,c=setTimeout(()=>l.abort(),s),u={method:e,headers:{"Content-Type":"application/json",...a.headers||{}},signal:l.signal}
"GET"!==e&&"DELETE"!==e&&r&&(u.body=JSON.stringify(r))
const h="GET"===e&&r?n+"?"+new URLSearchParams(r):n,m=await fetch(h,u)
if(clearTimeout(c),!d(m.status)){const e=await m.text()
throw new o(`HTTP ${m.status}: ${m.statusText}`,m.status,e)}let y
if(p){const e=m.headers.get("content-type")
y=e&&e.includes("application/json")?await m.json():await m.text()}else y=m
return t._log("info",`HTTP ${e} ${n} succeeded`,{attempt:i+1}),y}catch(r){if(u=r,"AbortError"===r.name&&(u=new o(`Request timeout after ${s}ms`,0,null)),t._log("warn",`HTTP ${e} ${n} failed (attempt ${i+1}/${h})`,r.message),h-1>i){const e=l*Math.pow(2,i)
await new Promise(t=>setTimeout(t,e))}else c&&c(u)}throw u}
t.get=async(e,t,n)=>r("GET",e,t,n),t.post=async(e,t,n)=>r("POST",e,t,n),t.put=async(e,t,n)=>r("PUT",e,t,n),t.delete=async(e,t,n)=>r("DELETE",e,t,n),t.ajax=async e=>{const{url:t,method:n="GET",data:o,...a}=e
return r(n,t,o,a)},t.cache={_store:new Map,_ttl:new Map,set(e,n,o=3e5){this._store.set(e,n),this._ttl.set(e,Date.now()+o),t._log("info","Cache set: "+e,{ttl:o+"ms"})},get(e){return this.has(e)?this._store.get(e):null},has(e){if(!this._store.has(e))return!1
const t=this._ttl.get(e)
return Date.now()<=t||(this.delete(e),!1)},delete(e){this._store.delete(e),this._ttl.delete(e),t._log("info","Cache deleted: "+e)},clear(){this._store.clear(),this._ttl.clear(),t._log("info","Cache cleared")},async request(e,n={}){const o=`${n.method||"GET"}:${e}:${JSON.stringify(n.data||{})}`
if(!1!==n.cache&&this.has(o))return t._log("info","Cache hit: "+e),this.get(o)
const r=await t.ajax({url:e,...n})
return!1!==n.cache&&this.set(o,r,n.cacheTTL),r}},t.Router=class{constructor(e={}){this.routes=[],this.guards={before:[],after:[]},this.current=null,this.params={},this.query={},this.notFoundHandler=e.notFoundHandler||(()=>console.warn("404: Route not found")),this.baseUrl=e.baseUrl||""}addRoute(e,t){const{component:n,handler:o,children:r,beforeEnter:a,name:s,redirect:i}=t,l=[],c=e.replace(/[.+?^${}()|[\]\\]/g,"\\$&").replace(/:(\w+)/g,(e,t)=>(l.push(t),"([^\\/]+)")).replace(/\*/g,".*").replace(/\//g,"\\/")
return this.routes.push({path:e,pattern:RegExp(`^${c}$`),paramNames:l,component:n,handler:o,children:r||[],beforeEnter:a,name:s,redirect:i}),this}addRoutes(e){return Object.entries(e).forEach(([e,t])=>{this.addRoute(e,t)}),this}beforeEach(e){return this.guards.before.push(e),this}afterEach(e){return this.guards.after.push(e),this}match(e){for(const t of this.routes){const n=e.match(t.pattern)
if(n){const e={}
return t.paramNames.forEach((t,o)=>{e[t]=n[o+1]}),{route:t,params:e}}}return null}parseQuery(e){const t={}
return new URLSearchParams(e).forEach((e,n)=>{t[n]=e}),t}async navigate(n,o={}){const{replace:r=!1,state:a={}}=o,s=new URL(n,e.location.origin),i=s.pathname.replace(this.baseUrl,"")
this.query=this.parseQuery(s.search)
const l=this.match(i)
if(!l)return t._log("warn","Route not found: "+i),this.notFoundHandler(i),!1
const{route:c,params:d}=l
if(this.params=d,c.redirect){const e="function"==typeof c.redirect?c.redirect(d):c.redirect
return this.navigate(e,o)}for(const e of this.guards.before)if(!1===await e(c,this.current))return t._log("info","Navigation cancelled by guard"),!1
if(c.beforeEnter&&!1===await c.beforeEnter(c,this.current))return t._log("info","Navigation cancelled by route guard"),!1
const p=this.baseUrl+n
if(r?history.replaceState({...a,path:p},"",p):history.pushState({...a,path:p},"",p),c.component){const e=c.target||"#app",t="function"==typeof c.component?c.component(d,this.query):c.component
_(e).html(t)}c.handler&&c.handler(d,this.query)
const u=this.current
this.current=c
for(const e of this.guards.after)e(c,u)
return t._log("info","Navigated to: "+i,{params:d,query:this.query}),!0}navigateTo(e,n={},o={}){const r=this.routes.find(t=>t.name===e)
if(!r)return t._log("error","Route name not found: "+e),!1
let a=r.path
Object.entries(n).forEach(([e,t])=>{a=a.replace(":"+e,t)})
const s=""+new URLSearchParams(o)
return this.navigate(s?`${a}?${s}`:a)}back(){history.back()}forward(){history.forward()}init(){return e.addEventListener("popstate",t=>{this.navigate(t.state?.path?t.state.path:e.location.pathname+e.location.search,{replace:!0})}),this.navigate(e.location.pathname+e.location.search,{replace:!0}),this}},t.createRouter=e=>new t.Router(e),t.validator={rules:{required:e=>null!=e&&""!==e,email:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),url(e){try{return new URL(e),!0}catch{return!1}},number:e=>!isNaN(parseFloat(e))&&isFinite(e),integer:e=>Number.isInteger(+e),min:(e,t)=>+e>=t,max:(e,t)=>t>=+e,minLength:(e,t)=>(e+"").length>=t,maxLength:(e,t)=>t>=(e+"").length,pattern:(e,t)=>t.test(e),match:(e,t,n)=>e===n[t],alpha:e=>/^[a-zA-Z]+$/.test(e),alphanumeric:e=>/^[a-zA-Z0-9]+$/.test(e),phone:e=>/^[\d\s\-\+\(\)]+$/.test(e),creditCard(e){const t=e.replace(/\D/g,"")
if(13>t.length||t.length>19)return!1
let n=0,o=!1
for(let e=t.length-1;e>=0;e--){let r=parseInt(t[e])
o&&(r*=2,r>9&&(r-=9)),n+=r,o=!o}return n%10==0}},messages:{required:"This field is required",email:"Please enter a valid email address",url:"Please enter a valid URL",number:"Please enter a valid number",integer:"Please enter a valid integer",min:"Value must be at least {min}",max:"Value must be at most {max}",minLength:"Minimum length is {minLength} characters",maxLength:"Maximum length is {maxLength} characters",pattern:"Invalid format",match:"Fields do not match",alpha:"Only letters are allowed",alphanumeric:"Only letters and numbers are allowed",phone:"Please enter a valid phone number",creditCard:"Please enter a valid credit card number"},addRule(e,t,n){this.rules[e]=t,this.messages[e]=n},validate(e,n,o={}){const r=[]
for(const[a,s]of Object.entries(n)){const i=this.rules[a]
if(!i){t._log("warn","Unknown validation rule: "+a)
continue}let l
if(l="boolean"==typeof s&&s?i(e):"match"===a?i(e,s,o):i(e,s),!l){let e=n.message||this.messages[a]||"Invalid value"
e=e.replace(`{${a}}`,s),r.push(e)}}return r},async validateAsync(e,t){try{const n=await t(e)
return!0===n?[]:[n||"Validation failed"]}catch(e){return[e.message||"Validation error"]}}},t.prototype.validateForm=function(e,n={}){const{realTime:o=!1,showErrors:r=!0}=n,a=this.elements[0]
if(!a)return{valid:!0,errors:{}}
const s={}
let i=!0
const l={}
return a.querySelectorAll("[name]").forEach(e=>{l[e.name]=e.value}),Object.entries(e).forEach(([e,n])=>{const c=a.querySelector(`[name="${e}"]`)
if(!c)return
const d=t.validator.validate(c.value,n,l)
if(d.length>0){if(s[e]=d,i=!1,r){c.classList.add("yaka-error")
let e=c.parentElement.querySelector(".yaka-error-message")
e||(e=document.createElement("div"),e.className="yaka-error-message",c.parentElement.appendChild(e)),e.textContent=d[0]}}else if(r){c.classList.remove("yaka-error")
const e=c.parentElement.querySelector(".yaka-error-message")
e&&e.remove()}o&&!c._yakaValidationBound&&(c.addEventListener("blur",()=>{const e=t.validator.validate(c.value,n,l)
if(e.length>0&&r){c.classList.add("yaka-error")
let t=c.parentElement.querySelector(".yaka-error-message")
t||(t=document.createElement("div"),t.className="yaka-error-message",c.parentElement.appendChild(t)),t.textContent=e[0]}else if(r){c.classList.remove("yaka-error")
const e=c.parentElement.querySelector(".yaka-error-message")
e&&e.remove()}}),c._yakaValidationBound=!0)}),{valid:i,errors:s}},t.security={sanitizeHtml(e){const t=document.createElement("div")
return t.textContent=e,t.innerHTML},escapeHtml(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;","\\":"&#x5C;"}
return(e+"").replace(/[&<>"'/\\]/g,e=>t[e])},csrf:{_token:null,_headerName:"X-CSRF-Token",setToken(e){this._token=e
let n=document.querySelector('meta[name="csrf-token"]')
n||(n=document.createElement("meta"),n.name="csrf-token",document.head.appendChild(n)),n.content=e,t._log("info","CSRF token set")},getToken(){if(this._token)return this._token
const e=document.querySelector('meta[name="csrf-token"]')
return e&&(this._token=e.content),this._token},addToRequest(e){const t=this.getToken()
return t&&(e.headers=e.headers||{},e.headers[this._headerName]=t),e}},csp:{nonce:null,setNonce(e){this.nonce=e},getNonce(){if(this.nonce)return this.nonce
const e=document.querySelector("script[nonce]")
return e&&(this.nonce=e.getAttribute("nonce")),this.nonce}},sanitizeInput(e){return(e+"").replace(/['";\\]/g,"").trim()},sanitizeUrl(t){try{const n=new URL(t,e.location.origin)
return["http:","https:"].includes(n.protocol)?n.href:""}catch{return""}}},t.http.addRequestInterceptor(e=>t.security.csrf.addToRequest(e)),t.Store=class{constructor(e={}){this._state=e.state||{},this._getters=e.getters||{},this._mutations=e.mutations||{},this._actions=e.actions||{},this._subscribers=[],this._history=[],this._historyIndex=-1,this._maxHistory=e.maxHistory||50,this._plugins=e.plugins||[],this._makeReactive(),this._plugins.forEach(e=>e(this)),this._saveHistory()}_makeReactive(){const e=this
this.state=new Proxy(this._state,{set(t,n,o){const r=t[n]
return t[n]=o,e._notify({type:"state",key:n,value:o,oldValue:r}),!0},get(e,t){return e[t]}})}_notify(e){this._subscribers.forEach(t=>t(e,this.state))}_saveHistory(){this._history.length-1>this._historyIndex&&(this._history=this._history.slice(0,this._historyIndex+1)),this._history.push(JSON.parse(JSON.stringify(this._state))),this._history.length>this._maxHistory?this._history.shift():this._historyIndex++}get(e){const n=this._getters[e]
if(n)return n(this.state,this._getters)
t._log("warn","Getter not found: "+e)}commit(e,n){const o=this._mutations[e]
o?(t._log("info","Mutation: "+e,n),o(this._state,n),this._notify({type:"mutation",mutation:e,payload:n}),this._saveHistory()):t._log("error","Mutation not found: "+e)}async dispatch(e,n){const o=this._actions[e]
if(o)return t._log("info","Action: "+e,n),o({state:this.state,commit:this.commit.bind(this),dispatch:this.dispatch.bind(this),getters:this._getters},n)
t._log("error","Action not found: "+e)}subscribe(e){return this._subscribers.push(e),()=>{const t=this._subscribers.indexOf(e)
t>-1&&this._subscribers.splice(t,1)}}watch(e,t){return this.subscribe((n,o)=>{n.key===e&&t(o[e],n.oldValue)})}timeTravel(e){e>=0&&this._history.length>e?(this._historyIndex=e,this._state=JSON.parse(JSON.stringify(this._history[e])),this._makeReactive(),this._notify({type:"timeTravel",index:e}),t._log("info","Time traveled to state #"+e)):t._log("warn","Invalid history index")}undo(){this._historyIndex>0&&this.timeTravel(this._historyIndex-1)}redo(){this._history.length-1>this._historyIndex&&this.timeTravel(this._historyIndex+1)}persist(e="yaka-store"){try{localStorage.setItem(e,JSON.stringify(this._state)),t._log("info","State persisted")}catch(e){t._log("error","Failed to persist state:",e)}}restore(e="yaka-store"){try{const n=localStorage.getItem(e)
n&&(this._state=JSON.parse(n),this._makeReactive(),this._saveHistory(),t._log("info","State restored"))}catch(e){t._log("error","Failed to restore state:",e)}}},t.createStore=e=>new t.Store(e),t.performance={marks:{},measures:{},_observers:[],mark(e){this.marks[e]=performance.now(),performance.mark&&performance.mark(e)},measure(e,n,o){const r=this.marks[n],a=o?this.marks[o]:performance.now()
if(void 0===r)return t._log("warn","Start mark not found: "+n),null
const s=a-r
if(this.measures[e]=s,performance.measure)try{performance.measure(e,n,o)}catch(e){}return t._log("info","Performance: "+e,s.toFixed(2)+"ms"),s},getFPS(e,t=1e3){let n=0
const o=performance.now(),r=a=>{n++,t>a-o?requestAnimationFrame(r):e(Math.round(n/(t/1e3)))}
requestAnimationFrame(r)},observeLongTasks(n){if("PerformanceObserver"in e)try{const e=new PerformanceObserver(e=>{e.getEntries().forEach(e=>{n({name:e.name,duration:e.duration,startTime:e.startTime})})})
e.observe({entryTypes:["longtask"]}),this._observers.push(e)}catch(e){t._log("warn","Long task monitoring not supported")}},getReport(){const e={marks:this.marks,measures:this.measures,memory:null,navigation:null}
if(performance.memory&&(e.memory={usedJSHeapSize:(performance.memory.usedJSHeapSize/1048576).toFixed(2)+" MB",totalJSHeapSize:(performance.memory.totalJSHeapSize/1048576).toFixed(2)+" MB",limit:(performance.memory.jsHeapSizeLimit/1048576).toFixed(2)+" MB"}),performance.getEntriesByType){const t=performance.getEntriesByType("navigation")
if(t.length>0){const n=t[0]
e.navigation={domContentLoaded:n.domContentLoadedEventEnd-n.domContentLoadedEventStart,loadComplete:n.loadEventEnd-n.loadEventStart,domInteractive:n.domInteractive,totalTime:n.loadEventEnd-n.fetchStart}}}return e},clear(){this.marks={},this.measures={},performance.clearMarks&&performance.clearMarks(),performance.clearMeasures&&performance.clearMeasures()}},t.onOffline=t=>(e.addEventListener("offline",t),()=>e.removeEventListener("offline",t)),t.onOnline=t=>(e.addEventListener("online",t),()=>e.removeEventListener("online",t)),t.isOnline=()=>navigator.onLine,t.paste=async()=>{try{if(navigator.clipboard&&navigator.clipboard.readText)return await navigator.clipboard.readText()
throw Error("Clipboard API not available")}catch(e){return console.warn("Yaka.paste: Failed to read clipboard",e),null}},t.socket=function(e,n={}){const o=new WebSocket(e),r={},a={on(e,t){return r[e]||(r[e]=[]),r[e].push(t),"open"===e?o.addEventListener("open",t):"close"===e?o.addEventListener("close",t):"error"===e?o.addEventListener("error",t):"message"===e&&o.addEventListener("message",e=>{try{const o=!1!==n.json?JSON.parse(e.data):e.data
t(o,e)}catch{t(e.data,e)}}),this},send(e){return o.readyState===WebSocket.OPEN?o.send("object"==typeof e?JSON.stringify(e):e):console.warn("WebSocket not open. ReadyState:",o.readyState),this},close(e,t){return o.close(e,t),this},get readyState(){return o.readyState},get raw(){return o}}
if(n.autoReconnect){let r
o.addEventListener("close",()=>{clearTimeout(r),r=setTimeout(()=>{console.log("Reconnecting WebSocket..."),t.socket(e,n)},n.reconnectDelay||3e3)})}return a},t.prototype.loadingState=function(e,t={}){const n={loading:"Loading...",success:"Success!",error:"Error!",successDuration:2e3,errorDuration:3e3,...t}
return this.each((t,o)=>{const r=o.textContent,a=o.disabled
o.textContent=n.loading,o.disabled=!0,o.classList.add("yaka-loading"),e.then(e=>(o.textContent=n.success,o.classList.remove("yaka-loading"),o.classList.add("yaka-success"),setTimeout(()=>{o.textContent=r,o.disabled=a,o.classList.remove("yaka-success")},n.successDuration),e)).catch(e=>{throw o.textContent=n.error,o.classList.remove("yaka-loading"),o.classList.add("yaka-error"),setTimeout(()=>{o.textContent=r,o.disabled=a,o.classList.remove("yaka-error")},n.errorDuration),e})})},t.share=async(t={})=>{if(!navigator.share)return console.warn("Web Share API not supported"),!1
try{return await navigator.share({title:t.title||document.title,text:t.text||"",url:t.url||e.location.href}),!0}catch(e){return"AbortError"!==e.name&&console.warn("Share failed:",e),!1}},t.batch=e=>{requestAnimationFrame(()=>{e()})},t.preload=e=>{const t=[]
return(Array.isArray(e)?e:[e]).forEach(e=>{const n=e.split(".").pop().toLowerCase()
let o
o=["jpg","jpeg","png","gif","webp","svg"].includes(n)?new Promise((t,n)=>{const o=new Image
o.onload=()=>t(e),o.onerror=n,o.src=e}):["woff","woff2","ttf","otf"].includes(n)?new Promise((t,o)=>{const r=document.createElement("link")
r.rel="preload",r.as="font",r.type="font/"+n,r.crossOrigin="anonymous",r.href=e,r.onload=()=>t(e),r.onerror=o,document.head.appendChild(r)}):fetch(e).then(()=>e),t.push(o)}),Promise.all(t)},t.prototype.timeAgo=function(e={}){const t={live:!1,updateInterval:6e4,...e},n=e=>{const t=Math.floor((new Date-e)/1e3),n={year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,minute:60,second:1}
for(const[e,o]of Object.entries(n)){const n=Math.floor(t/o)
if(n>=1)return 1===n?`1 ${e} ago`:`${n} ${e}s ago`}return"just now"}
return this.each((e,o)=>{const r=o.getAttribute("data-timestamp")||o.getAttribute("datetime")
if(!r)return
const a=new Date(r)
if(o.textContent=n(a),t.live){const e=setInterval(()=>{o.textContent=n(a)},t.updateInterval)
o._yaka_timeago_interval=e}})},t.prototype.patch=function(e){return this.each((t,n)=>{const o=document.createElement("div")
o.innerHTML=e
const r=o.firstElementChild
if(!r)return void(n.innerHTML=e)
const a=(e,t)=>{if(3===e.nodeType&&3===t.nodeType)return void(e.textContent!==t.textContent&&(e.textContent=t.textContent))
if(1===e.nodeType&&1===t.nodeType){const n=e.attributes,o=t.attributes
for(let t of o)e.getAttribute(t.name)!==t.value&&e.setAttribute(t.name,t.value)
for(let o of n)t.hasAttribute(o.name)||e.removeAttribute(o.name)}const n=Array.from(e.childNodes),o=Array.from(t.childNodes),r=Math.max(n.length,o.length)
for(let t=0;r>t;t++){const r=n[t],s=o[t]
!r&&s?e.appendChild(s.cloneNode(!0)):r&&!s?e.removeChild(r):r&&s&&(r.nodeName!==s.nodeName?e.replaceChild(s.cloneNode(!0),r):a(r,s))}}
a(n,r)})},t.commandPalette=(e={})=>{const t={commands:[],placeholder:"Type a command...",hotkey:"k",hotkeyModifier:"ctrl",...e}
let n,o,r,a=!1
const s=e=>{r.innerHTML="",e.forEach((e,t)=>{const n=document.createElement("div")
n.className="yaka-command-item"+(0===t?" selected":""),n.textContent=e.name,n.addEventListener("click",()=>{e.action(),l()}),r.appendChild(n)})},i=()=>{n||(n=document.createElement("div"),n.className="yaka-command-palette-overlay",n.innerHTML=`\n                <div class="yaka-command-palette">\n                    <input type="text" class="yaka-command-input" placeholder="${t.placeholder}">\n                    <div class="yaka-command-results"></div>\n                </div>\n            `,document.body.appendChild(n),o=n.querySelector(".yaka-command-input"),r=n.querySelector(".yaka-command-results"),n.addEventListener("click",e=>{e.target===n&&l()}),o.addEventListener("keydown",e=>{if("Escape"===e.key&&l(),"Enter"===e.key){const e=r.querySelector(".yaka-command-item.selected")
e&&e.click()}"ArrowDown"===e.key&&(e.preventDefault(),(()=>{const e=r.querySelectorAll(".yaka-command-item"),t=r.querySelector(".selected"),n=e[Array.from(e).indexOf(t)+1]||e[0]
t.classList.remove("selected"),n.classList.add("selected"),n.scrollIntoView({block:"nearest"})})()),"ArrowUp"===e.key&&(e.preventDefault(),(()=>{const e=r.querySelectorAll(".yaka-command-item"),t=r.querySelector(".selected"),n=e[Array.from(e).indexOf(t)-1]||e[e.length-1]
t.classList.remove("selected"),n.classList.add("selected"),n.scrollIntoView({block:"nearest"})})())}),o.addEventListener("input",()=>{const e=o.value.toLowerCase(),n=t.commands.filter(t=>t.name.toLowerCase().includes(e))
s(n)}),s(t.commands)),n.style.display="flex",o.value="",o.focus(),s(t.commands),a=!0},l=()=>{n&&(n.style.display="none"),a=!1}
return document.addEventListener("keydown",e=>{("ctrl"===t.hotkeyModifier?e.ctrlKey:"meta"===t.hotkeyModifier?e.metaKey:"alt"===t.hotkeyModifier&&e.altKey)&&e.key.toLowerCase()===t.hotkey&&(e.preventDefault(),a?l():i())}),{open:i,close:l}},t.prototype.virtualScroll=function(e={}){const t={items:[],itemHeight:50,buffer:5,render:e=>`<div>${e}</div>`,...e}
return this.each((e,n)=>{const o=t.items.length*t.itemHeight,r=document.createElement("div")
r.style.cssText=`\n                height: ${n.clientHeight||400}px;\n                overflow-y: auto;\n                position: relative;\n            `
const a=document.createElement("div")
a.style.cssText=`\n                height: ${o}px;\n                position: relative;\n            `,r.appendChild(a),n.innerHTML="",n.appendChild(r)
const s=()=>{const e=r.scrollTop,n=r.clientHeight,o=Math.max(0,Math.floor(e/t.itemHeight)-t.buffer),s=Math.min(t.items.length,Math.ceil((e+n)/t.itemHeight)+t.buffer)
a.innerHTML=""
for(let e=o;s>e;e++){const n=document.createElement("div")
n.style.cssText=`\n                        position: absolute;\n                        top: ${e*t.itemHeight}px;\n                        width: 100%;\n                        height: ${t.itemHeight}px;\n                    `,n.innerHTML=t.render(t.items[e]),a.appendChild(n)}}
r.addEventListener("scroll",s),s()})},t.tour=(e=[])=>{let t,n,o=0
const r=s=>{if(s>=e.length)return void a()
o=s
const i=e[s],l=document.querySelector(i.element)
if(!l)return void console.warn("Tour: Element not found: "+i.element)
const c=l.getBoundingClientRect()
t.style.cssText=`\n                clip-path: polygon(\n                    0 0, 0 100%, \n                    ${c.left-5}px 100%, \n                    ${c.left-5}px ${c.top-5}px, \n                    ${c.right+5}px ${c.top-5}px, \n                    ${c.right+5}px ${c.bottom+5}px, \n                    ${c.left-5}px ${c.bottom+5}px, \n                    ${c.left-5}px 100%, \n                    100% 100%, 100% 0\n                );\n            `,n.innerHTML=`\n                <div class="yaka-tour-content">\n                    <div class="yaka-tour-text">${i.text}</div>\n                    <div class="yaka-tour-buttons">\n                        ${s>0?'<button class="yaka-tour-prev">Previous</button>':""}\n                        ${e.length-1>s?'<button class="yaka-tour-next">Next</button>':'<button class="yaka-tour-finish">Finish</button>'}\n                        <button class="yaka-tour-skip">Skip Tour</button>\n                    </div>\n                    <div class="yaka-tour-progress">${s+1} / ${e.length}</div>\n                </div>\n            `,n.style.cssText=`\n                top: ${c.bottom+15}px;\n                left: ${c.left}px;\n            `
const d=n.querySelector(".yaka-tour-next, .yaka-tour-finish"),p=n.querySelector(".yaka-tour-prev"),u=n.querySelector(".yaka-tour-skip")
d&&d.addEventListener("click",()=>r(o+1)),p&&p.addEventListener("click",()=>r(o-1)),u&&u.addEventListener("click",a)},a=()=>{t&&t.remove(),n&&n.remove()}
return t||(t=document.createElement("div"),t.className="yaka-tour-overlay",document.body.appendChild(t),n=document.createElement("div"),n.className="yaka-tour-tooltip",document.body.appendChild(n)),r(0),{next:()=>r(o+1),prev:()=>r(o-1),end:a}},t.prototype.blurLazyLoad=function(e={}){const t={placeholder:null,rootMargin:"50px",...e},n=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const t=e.target,o=t.getAttribute("data-src")
if(o){const e=new Image
e.onload=()=>{t.src=o,t.classList.add("yaka-lazy-loaded"),t.classList.remove("yaka-lazy-loading")},e.src=o,t.classList.add("yaka-lazy-loading")}n.unobserve(t)}})},{rootMargin:t.rootMargin})
return this.each((e,o)=>{t.placeholder&&(o.src=t.placeholder,o.classList.add("yaka-lazy-blur")),n.observe(o)})},t.pullToRefresh=(t={})=>{const n={...{threshold:60,async onRefresh(){},element:document.body},...t}
let o=0,r=0,a=!1
const s=document.createElement("div")
s.className="yaka-pull-refresh",s.textContent="Pull to refresh",n.element.insertBefore(s,n.element.firstChild),n.element.addEventListener("touchstart",t=>{0===e.scrollY&&(o=t.touches[0].pageY,a=!0)}),n.element.addEventListener("touchmove",e=>{if(!a)return
r=e.touches[0].pageY
const t=r-o
t>0&&(e.preventDefault(),s.style.height=Math.min(t,n.threshold)+"px",n.threshold>t?(s.textContent="Pull to refresh",s.classList.remove("ready")):(s.textContent="Release to refresh",s.classList.add("ready")))}),n.element.addEventListener("touchend",async()=>{a&&(n.threshold>r-o||(s.textContent="Refreshing...",s.classList.add("refreshing"),await n.onRefresh(),s.classList.remove("refreshing","ready")),s.style.height="0",a=!1)})},t.pwa={deferredPrompt:null,onInstallable(t){e.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.deferredPrompt=e,t(e)})},async install(){if(!this.deferredPrompt)return console.warn("PWA install prompt not available"),!1
this.deferredPrompt.prompt()
const e=await this.deferredPrompt.userChoice
return this.deferredPrompt=null,"accepted"===e.outcome},isInstalled(){return e.matchMedia("(display-mode: standalone)").matches||!0===e.navigator.standalone}},t.onShake=(t,n={})=>{const o={threshold:15,timeout:1e3,...n}
let r=Date.now(),a=0,s=0,i=0
const l=e=>{const n=Date.now()
o.timeout>n-r||((Math.abs(e.accelerationIncludingGravity.x-a)>o.threshold||Math.abs(e.accelerationIncludingGravity.y-s)>o.threshold||Math.abs(e.accelerationIncludingGravity.z-i)>o.threshold)&&(t(),r=n),a=e.accelerationIncludingGravity.x,s=e.accelerationIncludingGravity.y,i=e.accelerationIncludingGravity.z)}
return e.addEventListener("devicemotion",l),()=>e.removeEventListener("devicemotion",l)},t.voice={recognition:null,commands:{},isListening:!1,listen(t={}){"webkitSpeechRecognition"in e||"SpeechRecognition"in e?(this.recognition=new(e.SpeechRecognition||e.webkitSpeechRecognition),this.recognition.continuous=!0,this.recognition.interimResults=!1,this.commands=t,this.recognition.onresult=e=>{const t=e.results[e.results.length-1][0].transcript.toLowerCase().trim()
if(console.log("Voice command:",t),this.commands[t])this.commands[t]()
else for(const[e,n]of Object.entries(this.commands))if(t.includes(e.toLowerCase())){n()
break}},this.recognition.onerror=e=>{console.warn("Voice recognition error:",e.error)},this.start()):console.warn("Speech recognition not supported")},start(){this.recognition&&!this.isListening&&(this.recognition.start(),this.isListening=!0)},stop(){this.recognition&&this.isListening&&(this.recognition.stop(),this.isListening=!1)}},t.prototype.cropper=function(e={}){const t={...{ratio:1,onCrop(e){}},...e}
return this.each((e,n)=>{const o=document.createElement("div")
o.className="yaka-cropper-overlay",o.innerHTML=`\n                <div class="yaka-cropper-container">\n                    <img src="${n.src}" class="yaka-cropper-image">\n                    <div class="yaka-cropper-box"></div>\n                    <div class="yaka-cropper-controls">\n                        <button class="yaka-cropper-crop">Crop</button>\n                        <button class="yaka-cropper-cancel">Cancel</button>\n                    </div>\n                </div>\n            `,document.body.appendChild(o)
const r=o.querySelector(".yaka-cropper-image"),a=o.querySelector(".yaka-cropper-box"),s=o.querySelector(".yaka-cropper-crop"),i=o.querySelector(".yaka-cropper-cancel")
a.style.cssText=`\n                width: 200px;\n                height: ${200/t.ratio}px;\n                left: 50%;\n                top: 50%;\n                transform: translate(-50%, -50%);\n            `,s.addEventListener("click",()=>{const e=document.createElement("canvas"),n=e.getContext("2d"),s=a.getBoundingClientRect(),i=r.getBoundingClientRect()
e.width=s.width,e.height=s.height,n.drawImage(r,s.left-i.left,s.top-i.top,s.width,s.height,0,0,s.width,s.height),e.toBlob(t.onCrop),o.remove()}),i.addEventListener("click",()=>{o.remove()})})},t.prototype.richEditor=function(e={}){const t={toolbar:["bold","italic","underline","link","image"],...e}
return this.each((e,n)=>{const o=document.createElement("div")
o.className="yaka-rich-editor"
const r=document.createElement("div")
r.className="yaka-rich-toolbar"
const a=document.createElement("div")
a.className="yaka-rich-content",a.contentEditable=!0,a.innerHTML=n.value||n.innerHTML,t.toolbar.forEach(e=>{const t=document.createElement("button")
t.textContent=e,t.addEventListener("click",t=>{if(t.preventDefault(),"link"===e){const e=prompt("Enter URL:")
e&&document.execCommand("createLink",!1,e)}else if("image"===e){const e=prompt("Enter image URL:")
e&&document.execCommand("insertImage",!1,e)}else document.execCommand(e,!1,null)}),r.appendChild(t)}),o.appendChild(r),o.appendChild(a),n.style.display="none",n.parentNode.insertBefore(o,n),a.addEventListener("input",()=>{"TEXTAREA"===n.tagName||"INPUT"===n.tagName?n.value=a.innerHTML:n.innerHTML=a.innerHTML})})},t.inspect={enabled:!1,overlay:null,enable(){this.enabled||(this.enabled=!0,this.overlay=document.createElement("div"),this.overlay.className="yaka-inspect-overlay",document.body.appendChild(this.overlay),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("click",this.handleClick))},disable(){this.enabled&&(this.enabled=!1,this.overlay&&this.overlay.remove(),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("click",this.handleClick))},handleMouseMove(e){if(!t.inspect.enabled)return
const n=e.target.getBoundingClientRect()
t.inspect.overlay.style.cssText=`\n                top: ${n.top}px;\n                left: ${n.left}px;\n                width: ${n.width}px;\n                height: ${n.height}px;\n            `},handleClick(e){if(!t.inspect.enabled)return
e.preventDefault(),e.stopPropagation()
const n=e.target,o={tag:n.tagName,id:n.id,classes:Array.from(n.classList),attributes:Array.from(n.attributes).map(e=>({name:e.name,value:e.value})),yakaMethods:Object.keys(t.prototype).slice(0,10)}
console.group("🔍 Yaka Element Inspector"),console.log("Element:",n),console.log("Tag:",o.tag),console.log("ID:",o.id||"(none)"),console.log("Classes:",o.classes),console.log("Attributes:",o.attributes),console.log("Available Yaka methods:",o.yakaMethods.join(", "),"..."),console.groupEnd(),alert(`Element: ${o.tag}${o.id?"#"+o.id:""}\nClasses: ${o.classes.join(", ")}\n\nCheck console for more details.`)}},t.eyeTrack={tracking:!1,callback:null,async start(t){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return console.warn("getUserMedia not supported"),!1
try{const n=await navigator.mediaDevices.getUserMedia({video:!0})
this.tracking=!0,this.callback=t
const o=document.createElement("video")
o.srcObject=n,o.style.display="none",document.body.appendChild(o),o.play()
const r=()=>{if(!this.tracking)return n.getTracks().forEach(e=>e.stop()),void o.remove()
const t=Math.random()*e.innerWidth,a=Math.random()*e.innerHeight
this.callback&&this.callback(t,a),requestAnimationFrame(r)}
return r(),!0}catch(e){return console.warn("Eye tracking failed:",e),!1}},stop(){this.tracking=!1}}
const a=document.createElement("style")
a.textContent="\n        @keyframes shake {\n            0%, 100% { transform: translateX(0); }\n            10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }\n            20%, 40%, 60%, 80% { transform: translateX(10px); }\n        }\n        @keyframes fall {\n            to { transform: translateY(100vh) rotate(360deg); opacity: 0; }\n        }\n        @keyframes slideIn {\n            from { transform: translateX(100%); opacity: 0; }\n            to { transform: translateX(0); opacity: 1; }\n        }\n        @keyframes slideOut {\n            from { transform: translateX(0); opacity: 1; }\n            to { transform: translateX(100%); opacity: 0; }\n        }\n        @keyframes fadeIn {\n            from { opacity: 0; }\n            to { opacity: 1; }\n        }\n        @keyframes fadeOut {\n            from { opacity: 1; }\n            to { opacity: 0; }\n        }\n        @keyframes scaleIn {\n            from { transform: scale(0.7); opacity: 0; }\n            to { transform: scale(1); opacity: 1; }\n        }\n        @keyframes float {\n            0%, 100% { transform: translateY(0) translateX(0); }\n            50% { transform: translateY(-20px) translateX(10px); }\n        }\n        @keyframes ripple-effect {\n            to { transform: scale(2); opacity: 0; }\n        }\n        @keyframes spin {\n            to { transform: rotate(360deg); }\n        }\n        @keyframes skeleton-loading {\n            0% { background-position: 200% 0; }\n            100% { background-position: -200% 0; }\n        }\n        @keyframes bounce {\n            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }\n            40% { transform: translateY(-30px); }\n            60% { transform: translateY(-15px); }\n        }\n        @keyframes swing {\n            20% { transform: rotate(15deg); }\n            40% { transform: rotate(-10deg); }\n            60% { transform: rotate(5deg); }\n            80% { transform: rotate(-5deg); }\n            100% { transform: rotate(0deg); }\n        }\n        @keyframes rubberBand {\n            0% { transform: scale(1); }\n            30% { transform: scaleX(1.25) scaleY(0.75); }\n            40% { transform: scaleX(0.75) scaleY(1.25); }\n            50% { transform: scaleX(1.15) scaleY(0.85); }\n            65% { transform: scaleX(0.95) scaleY(1.05); }\n            75% { transform: scaleX(1.05) scaleY(0.95); }\n            100% { transform: scale(1); }\n        }\n        @keyframes toastSlideIn {\n            from { transform: translateX(100%); opacity: 0; }\n            to { transform: translateX(0); opacity: 1; }\n        }\n        @keyframes toastSlideOut {\n            from { transform: translateX(0); opacity: 1; }\n            to { transform: translateX(100%); opacity: 0; }\n        }\n        @keyframes toastProgress {\n            from { width: 100%; }\n            to { width: 0%; }\n        }\n        @keyframes iconPulse {\n            0%, 100% { transform: scale(1); }\n            50% { transform: scale(1.1); }\n        }\n        \n        /* Validation styles */\n        .yaka-error {\n            border-color: #e74c3c !important;\n            box-shadow: 0 0 0 2px rgba(231, 76, 60, 0.2) !important;\n        }\n        .yaka-error-message {\n            color: #e74c3c;\n            font-size: 0.875em;\n            margin-top: 0.25rem;\n        }\n        \n        /* Loading state styles */\n        .yaka-loading {\n            opacity: 0.6;\n            cursor: wait;\n            pointer-events: none;\n        }\n        .yaka-success {\n            background-color: #2ecc71 !important;\n            color: white !important;\n        }\n        .yaka-error {\n            background-color: #e74c3c !important;\n            color: white !important;\n        }\n        \n        /* Command Palette */\n        .yaka-command-palette-overlay {\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: rgba(0, 0, 0, 0.5);\n            display: none;\n            align-items: flex-start;\n            justify-content: center;\n            padding-top: 100px;\n            z-index: 10000;\n        }\n        .yaka-command-palette {\n            background: white;\n            border-radius: 8px;\n            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n            width: 600px;\n            max-width: 90%;\n            overflow: hidden;\n        }\n        .yaka-command-input {\n            width: 100%;\n            padding: 16px;\n            border: none;\n            font-size: 18px;\n            outline: none;\n            border-bottom: 1px solid #eee;\n        }\n        .yaka-command-results {\n            max-height: 400px;\n            overflow-y: auto;\n        }\n        .yaka-command-item {\n            padding: 12px 16px;\n            cursor: pointer;\n            transition: background 0.2s;\n        }\n        .yaka-command-item:hover,\n        .yaka-command-item.selected {\n            background: #f0f0f0;\n        }\n        \n        /* Tour styles */\n        .yaka-tour-overlay {\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: rgba(0, 0, 0, 0.7);\n            z-index: 9999;\n        }\n        .yaka-tour-tooltip {\n            position: fixed;\n            background: white;\n            padding: 20px;\n            border-radius: 8px;\n            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n            max-width: 350px;\n            z-index: 10000;\n        }\n        .yaka-tour-text {\n            margin-bottom: 15px;\n            font-size: 15px;\n            line-height: 1.5;\n        }\n        .yaka-tour-buttons {\n            display: flex;\n            gap: 8px;\n        }\n        .yaka-tour-buttons button {\n            flex: 1;\n            padding: 8px 16px;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            font-size: 14px;\n        }\n        .yaka-tour-next,\n        .yaka-tour-finish {\n            background: #3498db;\n            color: white;\n        }\n        .yaka-tour-prev,\n        .yaka-tour-skip {\n            background: #ecf0f1;\n            color: #34495e;\n        }\n        .yaka-tour-progress {\n            text-align: center;\n            margin-top: 10px;\n            font-size: 12px;\n            color: #7f8c8d;\n        }\n        \n        /* Lazy load blur effect */\n        .yaka-lazy-blur {\n            filter: blur(10px);\n            transition: filter 0.3s;\n        }\n        .yaka-lazy-loaded {\n            filter: blur(0);\n        }\n        .yaka-lazy-loading {\n            opacity: 0.7;\n        }\n        \n        /* Pull to refresh */\n        .yaka-pull-refresh {\n            height: 0;\n            overflow: hidden;\n            text-align: center;\n            padding: 10px;\n            background: #f0f0f0;\n            transition: height 0.3s;\n            font-size: 14px;\n        }\n        .yaka-pull-refresh.ready {\n            background: #3498db;\n            color: white;\n        }\n        .yaka-pull-refresh.refreshing {\n            background: #2ecc71;\n            color: white;\n        }\n        \n        /* Cropper styles */\n        .yaka-cropper-overlay {\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: rgba(0, 0, 0, 0.9);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            z-index: 10000;\n        }\n        .yaka-cropper-container {\n            position: relative;\n            max-width: 90%;\n            max-height: 90%;\n        }\n        .yaka-cropper-image {\n            max-width: 100%;\n            max-height: 80vh;\n        }\n        .yaka-cropper-box {\n            position: absolute;\n            border: 2px solid #3498db;\n            box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);\n            cursor: move;\n        }\n        .yaka-cropper-controls {\n            position: absolute;\n            bottom: -60px;\n            left: 50%;\n            transform: translateX(-50%);\n            display: flex;\n            gap: 10px;\n        }\n        .yaka-cropper-controls button {\n            padding: 10px 20px;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            font-size: 14px;\n        }\n        .yaka-cropper-crop {\n            background: #3498db;\n            color: white;\n        }\n        .yaka-cropper-cancel {\n            background: #ecf0f1;\n            color: #34495e;\n        }\n        \n        /* Rich text editor */\n        .yaka-rich-editor {\n            border: 1px solid #ddd;\n            border-radius: 4px;\n            overflow: hidden;\n        }\n        .yaka-rich-toolbar {\n            background: #f5f5f5;\n            padding: 8px;\n            border-bottom: 1px solid #ddd;\n            display: flex;\n            gap: 5px;\n        }\n        .yaka-rich-toolbar button {\n            padding: 6px 12px;\n            border: 1px solid #ddd;\n            background: white;\n            border-radius: 3px;\n            cursor: pointer;\n            font-size: 13px;\n        }\n        .yaka-rich-toolbar button:hover {\n            background: #e0e0e0;\n        }\n        .yaka-rich-content {\n            padding: 15px;\n            min-height: 200px;\n            outline: none;\n        }\n        \n        /* Element inspector */\n        .yaka-inspect-overlay {\n            position: fixed;\n            border: 2px solid #3498db;\n            background: rgba(52, 152, 219, 0.1);\n            pointer-events: none;\n            z-index: 9999;\n        }\n    ",document.head.appendChild(a),t.prototype.add=function(e,t){return console.warn("add() is deprecated. Use addClass() instead."),this.addClass(e,t)},t.prototype.remove=function(e,t){return e?(console.warn("remove() is deprecated. Use removeClass() to remove CSS classes."),this.removeClass(e,t)):(console.warn("remove() with no arguments is deprecated. Use detach() to remove element from DOM."),this.detach())},t.prototype.toggle=function(e,t){return console.warn("toggle() is deprecated. Use toggleClass() instead."),this.toggleClass(e,t)},t.prototype.has=function(e){return console.warn("has() is deprecated. Use hasClass() instead."),this.hasClass(e)},e.Yaka=t,e._=e._||t,"undefined"!=typeof module&&module.exports&&(module.exports=t,module.exports.default=t)}("undefined"!=typeof window?window:"undefined"!=typeof global?global:globalThis)
