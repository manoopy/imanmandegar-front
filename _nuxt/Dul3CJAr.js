import{ao as ie,ai as ne,h as se,_ as T,e as R,o as m,i as k,x as N,y as A,ap as oe,aq as le,g as f,ar as q,J as Q,am as de,M as ce,G as z,p as ue,q as ge,m as fe,n as ye,as as be,w as L,v as C,P as $,r as he,a as pe,at as me,K as U,L as ve,ae as xe,af as O,Q as F,C as j,c as ke,t as we}from"./BDlV69Nx.js";import Be from"./DsGVK9Cf.js";import{_ as Se}from"./DMIqhTPN.js";const H=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function M(e,i){i?i={...H,...i}:i=H;const a=X(i);return a.dispatch(e),a.toString()}const _e=Object.freeze(["prototype","__proto__","constructor"]);function X(e){let i="",a=new Map;const r=t=>{i+=t};return{toString(){return i},getContext(){return a},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const n=Object.prototype.toString.call(t);let s="";const c=n.length;c<10?s="unknown:["+n+"]":s=n.slice(8,c-1),s=s.toLowerCase();let l=null;if((l=a.get(t))===void 0)a.set(t,a.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return r("buffer:"),r(t.toString("utf8"));if(s!=="object"&&s!=="function"&&s!=="asyncfunction")this[s]?this[s](t):e.ignoreUnknown||this.unkown(t,s);else{let d=Object.keys(t);e.unorderedObjects&&(d=d.sort());let u=[];e.respectType!==!1&&!K(t)&&(u=_e),e.excludeKeys&&(d=d.filter(o=>!e.excludeKeys(o)),u=u.filter(o=>!e.excludeKeys(o))),r("object:"+(d.length+u.length)+":");const g=o=>{this.dispatch(o),r(":"),e.excludeValues||this.dispatch(t[o]),r(",")};for(const o of d)g(o);for(const o of u)g(o)}},array(t,n){if(n=n===void 0?e.unorderedArrays!==!1:n,r("array:"+t.length+":"),!n||t.length<=1){for(const l of t)this.dispatch(l);return}const s=new Map,c=t.map(l=>{const d=X(e);d.dispatch(l);for(const[u,g]of d.getContext())s.set(u,g);return d.toString()});return a=s,c.sort(),this.array(c,!1)},date(t){return r("date:"+t.toJSON())},symbol(t){return r("symbol:"+t.toString())},unkown(t,n){if(r(n),!!t&&(r(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return r("error:"+t.toString())},boolean(t){return r("bool:"+t)},string(t){r("string:"+t.length+":"),r(t)},function(t){r("fn:"),K(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return r("number:"+t)},xml(t){return r("xml:"+t.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(t){return r("regex:"+t.toString())},uint8array(t){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return r("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return r("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return r("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return r("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return r("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return r("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return r("url:"+t.toString())},map(t){r("map:");const n=[...t];return this.array(n,e.unorderedSets!==!1)},set(t){r("set:");const n=[...t];return this.array(n,e.unorderedSets!==!1)},file(t){return r("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(t){return r("bigint:"+t.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const Y="[native code] }",ze=Y.length;function K(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-ze)===Y}var Ce=Object.defineProperty,Ie=(e,i,a)=>i in e?Ce(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,x=(e,i,a)=>(Ie(e,typeof i!="symbol"?i+"":i,a),a);class b{constructor(i,a){x(this,"words"),x(this,"sigBytes"),i=this.words=i||[],this.sigBytes=a===void 0?i.length*4:a}toString(i){return(i||$e).stringify(this)}concat(i){if(this.clamp(),this.sigBytes%4)for(let a=0;a<i.sigBytes;a++){const r=i.words[a>>>2]>>>24-a%4*8&255;this.words[this.sigBytes+a>>>2]|=r<<24-(this.sigBytes+a)%4*8}else for(let a=0;a<i.sigBytes;a+=4)this.words[this.sigBytes+a>>>2]=i.words[a>>>2];return this.sigBytes+=i.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new b([...this.words])}}const $e={stringify(e){const i=[];for(let a=0;a<e.sigBytes;a++){const r=e.words[a>>>2]>>>24-a%4*8&255;i.push((r>>>4).toString(16),(r&15).toString(16))}return i.join("")}},qe={stringify(e){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=[];for(let r=0;r<e.sigBytes;r+=3){const t=e.words[r>>>2]>>>24-r%4*8&255,n=e.words[r+1>>>2]>>>24-(r+1)%4*8&255,s=e.words[r+2>>>2]>>>24-(r+2)%4*8&255,c=t<<16|n<<8|s;for(let l=0;l<4&&r*8+l*6<e.sigBytes*8;l++)a.push(i.charAt(c>>>6*(3-l)&63))}return a.join("")}},Oe={parse(e){const i=e.length,a=[];for(let r=0;r<i;r++)a[r>>>2]|=(e.charCodeAt(r)&255)<<24-r%4*8;return new b(a,i)}},Fe={parse(e){return Oe.parse(unescape(encodeURIComponent(e)))}};class je{constructor(){x(this,"_data",new b),x(this,"_nDataBytes",0),x(this,"_minBufferSize",0),x(this,"blockSize",512/32)}reset(){this._data=new b,this._nDataBytes=0}_append(i){typeof i=="string"&&(i=Fe.parse(i)),this._data.concat(i),this._nDataBytes+=i.sigBytes}_doProcessBlock(i,a){}_process(i){let a,r=this._data.sigBytes/(this.blockSize*4);i?r=Math.ceil(r):r=Math.max((r|0)-this._minBufferSize,0);const t=r*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let s=0;s<t;s+=this.blockSize)this._doProcessBlock(this._data.words,s);a=this._data.words.splice(0,t),this._data.sigBytes-=n}return new b(a,n)}}class Ne extends je{update(i){return this._append(i),this._process(),this}finalize(i){i&&this._append(i)}}var Ae=Object.defineProperty,Le=(e,i,a)=>i in e?Ae(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,Ue=(e,i,a)=>(Le(e,i+"",a),a);const W=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Me=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],p=[];class Te extends Ne{constructor(){super(...arguments),Ue(this,"_hash",new b([...W]))}reset(){super.reset(),this._hash=new b([...W])}_doProcessBlock(i,a){const r=this._hash.words;let t=r[0],n=r[1],s=r[2],c=r[3],l=r[4],d=r[5],u=r[6],g=r[7];for(let o=0;o<64;o++){if(o<16)p[o]=i[a+o]|0;else{const S=p[o-15],re=(S<<25|S>>>7)^(S<<14|S>>>18)^S>>>3,_=p[o-2],ae=(_<<15|_>>>17)^(_<<13|_>>>19)^_>>>10;p[o]=re+p[o-7]+ae+p[o-16]}const v=l&d^~l&u,w=t&n^t&s^n&s,h=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),I=(l<<26|l>>>6)^(l<<21|l>>>11)^(l<<7|l>>>25),B=g+I+v+Me[o]+p[o],te=h+w;g=u,u=d,d=l,l=c+B|0,c=s,s=n,n=t,t=B+te|0}r[0]=r[0]+t|0,r[1]=r[1]+n|0,r[2]=r[2]+s|0,r[3]=r[3]+c|0,r[4]=r[4]+l|0,r[5]=r[5]+d|0,r[6]=r[6]+u|0,r[7]=r[7]+g|0}finalize(i){super.finalize(i);const a=this._nDataBytes*8,r=this._data.sigBytes*8;return this._data.words[r>>>5]|=128<<24-r%32,this._data.words[(r+64>>>9<<4)+14]=Math.floor(a/4294967296),this._data.words[(r+64>>>9<<4)+15]=a,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Re(e){return new Te().finalize(e).toString(qe)}function nt(e,i={}){const a=typeof e=="string"?e:M(e,i);return Re(a).slice(0,10)}function De(e,i,a={}){return e===i||M(e,a)===M(i,a)}function st(e){return ie()?(ne(e),!0):!1}function V(e){return typeof e=="function"?e():se(e)}const ot=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const J=()=>{};function He(e,i){function a(...r){return new Promise((t,n)=>{Promise.resolve(e(()=>i.apply(this,r),{fn:i,thisArg:this,args:r})).then(t).catch(n)})}return a}function Ke(e,i={}){let a,r,t=J;const n=c=>{clearTimeout(c),t(),t=J};return c=>{const l=V(e),d=V(i.maxWait);return a&&n(a),l<=0||d!==void 0&&d<=0?(r&&(n(r),r=null),Promise.resolve(c())):new Promise((u,g)=>{t=i.rejectOnCancel?g:u,d&&!r&&(r=setTimeout(()=>{a&&n(a),r=null,u(c())},d)),a=setTimeout(()=>{r&&n(r),r=null,u(c())},l)})}}function We(e,i=200,a={}){return He(Ke(i,a),e)}const D={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},Ve=e=>Object.keys(D).reduce((a,r)=>(e[r]!==void 0&&(a[r]=e[r]),a),{}),Je=R({props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1,default:null}}});function Ee(e,i,a,r,t,n){const s=Be;return m(),k(s,N(A(e.$props)),null,16)}const Z=T(Je,[["render",Ee]]),Qe=(e,i,a,r,t=!1)=>{const n=oe(),s=le(),c=f(()=>{var o;const d=q(i),u=q(a),g=q(r);return Q((d==null?void 0:d.strategy)||((o=s.ui)==null?void 0:o.strategy),g?{wrapper:g}:{},d||{},t?de(s.ui,e,{}):{},u||{})}),l=f(()=>ce(n,["class"]));return{ui:c,attrs:l}},Xe={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},P={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},G={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",form:"form-input",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",file:{base:"file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},E={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...P,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},lt={...G,form:"form-textarea",default:{size:"sm",color:"white",variant:"outline"}},dt={...G,form:"form-select",placeholder:"text-gray-400 dark:text-gray-500",default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"}},ct={...E,select:"inline-flex items-center text-left cursor-default",input:"block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",required:"absolute inset-0 w-px opacity-0 cursor-default",label:"block truncate",option:{...E.option,create:"block truncate"},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",clearSearchOnClose:!1,showCreateOptionWhen:"empty"},arrow:{...P,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},ut=(e,i,a=!0)=>{const r=z("form-events",void 0),t=z("form-group",void 0),n=z("form-inputs",void 0);t&&(!a||e!=null&&e.legend?t.inputId.value=void 0:e!=null&&e.id&&(t.inputId.value=e==null?void 0:e.id),n&&(n.value[t.name.value]=t.inputId.value));const s=ue(!1);function c(g,o){r&&r.emit({type:g,path:o})}function l(){c("blur",t==null?void 0:t.name.value),s.value=!0}function d(){c("change",t==null?void 0:t.name.value)}const u=We(()=>{(s.value||t!=null&&t.eagerValidation.value)&&c("input",t==null?void 0:t.name.value)},300);return{inputId:f(()=>(e==null?void 0:e.id)??(t==null?void 0:t.inputId.value)),name:f(()=>(e==null?void 0:e.name)??(t==null?void 0:t.name.value)),size:f(()=>{var o;const g=i.size[t==null?void 0:t.size.value]?t==null?void 0:t.size.value:null;return(e==null?void 0:e.size)??g??((o=i.default)==null?void 0:o.size)}),color:f(()=>{var g;return(g=t==null?void 0:t.error)!=null&&g.value?"red":e==null?void 0:e.color}),emitFormBlur:l,emitFormInput:u,emitFormChange:d}};function Ye({ui:e,props:i}){const a=be();if(ge("ButtonGroupContextConsumer",!0),z("ButtonGroupContextConsumer",!1))return{size:f(()=>i.size),rounded:f(()=>e.value.rounded)};let t=a.parent,n;for(;t&&!n;){if(t.type.name==="ButtonGroup"){n=z(`group-${t.uid}`);break}t=t.parent}const s=f(()=>n==null?void 0:n.value.children.indexOf(a));return fe(()=>{n==null||n.value.register(a)}),ye(()=>{n==null||n.value.unregister(a)}),{size:f(()=>n!=null&&n.value?(n==null?void 0:n.value.size)??e.value.default.size:i.size),rounded:f(()=>!n||s.value===-1?e.value.rounded:n.value.children.length===1?n.value.ui.rounded:s.value===0?n.value.rounded.start:s.value===n.value.children.length-1?n.value.rounded.end:"rounded-none")}}const Ze=R({inheritAttrs:!1,props:{...D,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function i(a,r,{isActive:t,isExactActive:n}){return e.exactQuery&&!De(a.query,r.query)||e.exactHash&&a.hash!==r.hash?e.inactiveClass:e.exact&&n||!e.exact&&t?e.activeClass:e.inactiveClass}return{resolveLinkClass:i}}}),Pe=["href","aria-disabled","role","rel","target","tabindex","onClick"];function Ge(e,i,a,r,t,n){const s=Se;return e.to?(m(),k(s,$({key:1},e.$props,{custom:""}),{default:L(({route:c,href:l,target:d,rel:u,navigate:g,isActive:o,isExactActive:v,isExternal:w})=>[pe("a",$(e.$attrs,{href:e.disabled?void 0:l,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:u,target:d,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(c,e._.provides[me]||e.$route,{isActive:o,isExactActive:v}),tabindex:e.disabled?-1:void 0,onClick:h=>!w&&!e.disabled&&g(h)}),[C(e.$slots,"default",N(A({isActive:e.active!==void 0?e.active:e.exact?v:o})))],16,Pe)]),_:3},16)):(m(),k(he(e.as),$({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:L(()=>[C(e.$slots,"default",N(A({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const ee=T(Ze,[["render",Ge]]),y=Q(U.ui.strategy,U.ui.button,Xe),et=R({components:{UIcon:Z,ULink:ee},inheritAttrs:!1,props:{...D,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>y.default.size,validator(e){return Object.keys(y.size).includes(e)}},color:{type:String,default:()=>y.default.color,validator(e){return[...U.ui.colors,...Object.keys(y.color)].includes(e)}},variant:{type:String,default:()=>y.default.variant,validator(e){return[...Object.keys(y.variant),...Object.values(y.color).flatMap(i=>Object.keys(i))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>y.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:i}){const{ui:a,attrs:r}=Qe("button",ve(e,"ui"),y),{size:t,rounded:n}=Ye({ui:a,props:e}),s=f(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),c=f(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),l=f(()=>e.square||!i.default&&!e.label),d=f(()=>{var I,B;const h=((B=(I=a.value.color)==null?void 0:I[e.color])==null?void 0:B[e.variant])||a.value.variant[e.variant];return xe(O(a.value.base,a.value.font,n.value,a.value.size[t.value],a.value.gap[t.value],e.padded&&a.value[l.value?"square":"padding"][t.value],h==null?void 0:h.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),u=f(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),g=f(()=>e.loading&&!s.value?e.loadingIcon:e.trailingIcon||e.icon),o=f(()=>O(a.value.icon.base,a.value.icon.size[t.value],e.loading&&a.value.icon.loading)),v=f(()=>O(a.value.icon.base,a.value.icon.size[t.value],e.loading&&!s.value&&a.value.icon.loading)),w=f(()=>Ve(e));return{ui:a,attrs:r,isLeading:s,isTrailing:c,isSquare:l,buttonClass:d,leadingIconName:u,trailingIconName:g,leadingIconClass:o,trailingIconClass:v,linkProps:w}}});function tt(e,i,a,r,t,n){const s=Z,c=ee;return m(),k(c,$({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:L(()=>[C(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(m(),k(s,{key:0,name:e.leadingIconName,class:F(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):j("",!0)]),C(e.$slots,"default",{},()=>[e.label?(m(),ke("span",{key:0,class:F([e.truncate?e.ui.truncate:""])},we(e.label),3)):j("",!0)]),C(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(m(),k(s,{key:0,name:e.trailingIconName,class:F(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):j("",!0)])]),_:3},16,["type","disabled","class"])}const gt=T(et,[["render",tt]]);export{gt as _,ee as a,Xe as b,Z as c,ct as d,Ye as e,ut as f,We as g,st as h,G as i,ot as j,lt as k,nt as l,De as m,J as n,dt as s,V as t,Qe as u};
