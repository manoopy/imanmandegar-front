import{J as T,K as m,_ as $,e as q,L as B,p as h,al as F,m as z,I as A,V as H,g as R,ae as x,af as D,o as J,c as P,a as E,P as G,v as K,Q as L,an as Q}from"./BDlV69Nx.js";import{k as U,u as W,f as X}from"./Dul3CJAr.js";const n=T(m.ui.strategy,m.ui.textarea,U),Y=q({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(n.size).includes(e)}},color:{type:String,default:()=>n.default.color,validator(e){return[...m.ui.colors,...Object.keys(n.color)].includes(e)}},variant:{type:String,default:()=>n.default.variant,validator(e){return[...Object.keys(n.variant),...Object.values(n.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:t}){const{ui:l,attrs:c}=W("textarea",B(e,"ui"),n,B(e,"class")),{emitFormBlur:p,emitFormInput:v,inputId:s,color:g,size:y,name:C}=X(e,n),r=h(F({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),o=h(null),w=()=>{var a;e.autofocus&&((a=o.value)==null||a.focus())},d=()=>{if(e.autoresize){if(!o.value)return;o.value.rows=e.rows;const a=o.value.style.overflow;o.value.style.overflow="hidden";const u=window.getComputedStyle(o.value),i=parseInt(u.paddingTop),O=parseInt(u.paddingBottom),M=i+O,V=parseInt(u.lineHeight),{scrollHeight:N}=o.value,f=(N-M)/V;f>e.rows&&(o.value.rows=e.maxrows?Math.min(f,e.maxrows):f),o.value.style.overflow=a}},b=a=>{r.value.trim&&(a=a.trim()),r.value.number&&(a=Q(a)),t("update:modelValue",a),v()},I=a=>{d(),r.value.lazy||b(a.target.value)},S=a=>{const u=a.target.value;t("change",u),r.value.lazy&&b(u),r.value.trim&&(a.target.value=u.trim())},j=a=>{t("blur",a),p()};z(()=>{setTimeout(()=>{w()},e.autofocusDelay)}),A(()=>e.modelValue,()=>{H(d)}),z(()=>{setTimeout(()=>{w(),d()},100)});const k=R(()=>{var u,i;const a=((i=(u=l.value.color)==null?void 0:u[g.value])==null?void 0:i[e.variant])||l.value.variant[e.variant];return x(D(l.value.base,l.value.form,l.value.rounded,l.value.placeholder,l.value.size[y.value],e.padded?l.value.padding[y.value]:"p-0",a==null?void 0:a.replaceAll("{color}",g.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:l,attrs:c,name:C,inputId:s,textarea:o,textareaClass:k,onInput:I,onChange:S,onBlur:j}}}),Z=["id","value","name","rows","required","disabled","placeholder"];function _(e,t,l,c,p,v){return J(),P("div",{class:L(e.ui.wrapper)},[E("textarea",G({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:t[0]||(t[0]=(...s)=>e.onInput&&e.onInput(...s)),onBlur:t[1]||(t[1]=(...s)=>e.onBlur&&e.onBlur(...s)),onChange:t[2]||(t[2]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,Z),K(e.$slots,"default")],2)}const te=$(Y,[["render",_]]);export{te as _};
