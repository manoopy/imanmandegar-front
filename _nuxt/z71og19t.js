import{_ as w}from"./DpOuNYRt.js";import{_ as V}from"./CoNOeRoT.js";import{_ as F}from"./Dul3CJAr.js";import{u as k,_ as C}from"./EL1MBtLP.js";import{p as i,e as U,Z as N,o as r,c as u,a as o,b as l,w as c,h as m,$,F as z,B as G,d as _,t as p}from"./BDlV69Nx.js";import"./DsGVK9Cf.js";import"./DMIqhTPN.js";const d=i(),T=async()=>({borjStatus:d,getBorjStatus:async s=>{const{data:n}=await k(`/api/Borj/GetBorjStatus/${s}`);d.value=n.value}}),A={class:"flex flex-col gap-y-12"},D={class:"flex flex-col gap-4"},E={class:"mt-4"},I={class:"flex flex-col"},K=U({__name:"Status",async setup(f){let s,n;const{borjStatus:x,getBorjStatus:b}=([s,n]=N(()=>T()),s=await s,n(),s),a=i("علی"),B=async()=>{await b(a.value)};return(L,t)=>{const v=w,g=V,j=F,S=C;return r(),u("div",A,[o("div",D,[l(g,{label:"متن دلخواه خود را وارد کنید.",size:"lg"},{default:c(()=>[l(v,{modelValue:m(a),"onUpdate:modelValue":t[0]||(t[0]=e=>$(a)?a.value=e:null),placeholder:"متن قرآن"},null,8,["modelValue"])]),_:1}),o("div",E,[l(j,{onClick:t[1]||(t[1]=e=>B()),label:"اجرا",size:"md",class:"px-8"})])]),l(S,null,{default:c(()=>[o("div",I,[(r(!0),u(z,null,G(m(x),(e,y)=>(r(),u("div",{key:y,class:"border-b pb-3 mb-3"},[o("p",null,[t[2]||(t[2]=o("span",{class:"font-bold"},"حرف: ",-1)),_(" "+p(e.letter),1)]),o("p",null,[t[3]||(t[3]=o("span",{class:"font-bold"},"تعداد: ",-1)),_(" "+p(e.count),1)]),o("p",null,[t[4]||(t[4]=o("span",{class:"font-bold"},"وضعیت: ",-1)),_(" "+p(e.status),1)])]))),128))])]),_:1})])}}});export{K as default};