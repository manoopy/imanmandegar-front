import{_ as V}from"./DpOuNYRt.js";import{_ as E}from"./CoNOeRoT.js";import{_ as O}from"./4KDdcyIw.js";import{_ as y}from"./Dul3CJAr.js";import{u as h,_ as k}from"./EL1MBtLP.js";import{p as i,e as U,Z as z,o as $,c as B,a as p,b as a,w as r,h as _,$ as f,d as F,t as N}from"./BDlV69Nx.js";import"./p_DT62--.js";import"./DsGVK9Cf.js";import"./DMIqhTPN.js";const d=i(),G=async()=>({eerabCountOfString:d,getEerabCountOfString:async(t,o)=>{const{data:u}=await h(`/api/Eerab/GetEerabCountOfString/${t}/${o}`);d.value=u.value}}),T={class:"flex flex-col gap-y-12"},q={class:"flex flex-col gap-4"},A={class:"mt-4"},P=U({__name:"Count",async setup(v){let t,o;const{eerabCountOfString:u,getEerabCountOfString:x}=([t,o]=z(()=>G()),t=await t,o(),t),c=[{title:"تنوین فتحه",value:"tanween_fatha"},{title:"تنوین ضمه",value:"tanween_zamma"},{title:"تنوین کسره",value:"tanween_kasra"},{title:"فتحه",value:"fatha"},{title:"ضمه",value:"zamma"},{title:"کسره",value:"kasra"},{title:"سکون",value:"sokun"},{title:"الف مقصوره",value:"alif_maqsura"},{title:"همه",value:"all"}],n=i("علی"),l=i(c[0].value),b=async()=>{await x(n.value,l.value)};return(D,e)=>{const g=V,m=E,C=O,w=y,S=k;return $(),B("div",T,[p("div",q,[a(m,{label:"متن دلخواه خود را وارد کنید.",size:"lg"},{default:r(()=>[a(g,{modelValue:_(n),"onUpdate:modelValue":e[0]||(e[0]=s=>f(n)?n.value=s:null),placeholder:"متن قرآن"},null,8,["modelValue"])]),_:1}),a(m,{label:"اعراب",size:"lg"},{default:r(()=>[a(C,{modelValue:_(l),"onUpdate:modelValue":e[1]||(e[1]=s=>f(l)?l.value=s:null),options:c,placeholder:"انتخاب کنید","option-attribute":"title","value-attribute":"value"},null,8,["modelValue"])]),_:1}),p("div",A,[a(w,{onClick:e[2]||(e[2]=s=>b()),label:"اجرا",size:"md",class:"px-8"})])]),a(S,null,{default:r(()=>[F(N(_(u)),1)]),_:1})])}}});export{P as default};