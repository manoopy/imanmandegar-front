import{_ as K}from"./DpOuNYRt.js";import{_ as w}from"./CoNOeRoT.js";import{_ as V}from"./Dul3CJAr.js";import{u as B,_ as F}from"./EL1MBtLP.js";import{p as d,e as C,Z as U,o as r,c as u,a as o,b as l,w as c,h as i,$ as N,F as $,B as z,d as _,t as p}from"./BDlV69Nx.js";import"./DsGVK9Cf.js";import"./DMIqhTPN.js";const m=d(),G=async()=>({kokabStatusOfString:m,getKokabStatusOfString:async s=>{const{data:a}=await B(`/api/Kokab/GetKokabStatusOfString/${s}`);m.value=a.value}}),T={class:"flex flex-col gap-y-12"},A={class:"flex flex-col gap-4"},D={class:"mt-4"},E={class:"flex flex-col"},J=C({__name:"Status",async setup(f){let s,a;const{kokabStatusOfString:b,getKokabStatusOfString:x}=([s,a]=U(()=>G()),s=await s,a(),s),n=d("علی"),g=async()=>{await x(n.value)};return(I,t)=>{const S=K,k=w,v=V,y=F;return r(),u("div",T,[o("div",A,[l(k,{label:"متن دلخواه خود را وارد کنید.",size:"lg"},{default:c(()=>[l(S,{modelValue:i(n),"onUpdate:modelValue":t[0]||(t[0]=e=>N(n)?n.value=e:null),placeholder:"متن قرآن"},null,8,["modelValue"])]),_:1}),o("div",D,[l(v,{onClick:t[1]||(t[1]=e=>g()),label:"اجرا",size:"md",class:"px-8"})])]),l(y,null,{default:c(()=>[o("div",E,[(r(!0),u($,null,z(i(b),(e,O)=>(r(),u("div",{key:O,class:"border-b pb-3 mb-3"},[o("p",null,[t[2]||(t[2]=o("span",{class:"font-bold"},"حرف: ",-1)),_(" "+p(e.letter),1)]),o("p",null,[t[3]||(t[3]=o("span",{class:"font-bold"},"تعداد: ",-1)),_(" "+p(e.count),1)]),o("p",null,[t[4]||(t[4]=o("span",{class:"font-bold"},"وضعیت: ",-1)),_(" "+p(e.status),1)])]))),128))])]),_:1})])}}});export{J as default};
