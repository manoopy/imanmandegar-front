import{_ as w}from"./DpOuNYRt.js";import{_ as S}from"./CoNOeRoT.js";import{_ as B}from"./4KDdcyIw.js";import{_ as F}from"./Dul3CJAr.js";import{_ as M}from"./EL1MBtLP.js";import{u as N}from"./DrmJcBG5.js";import{e as O,Z as $,p as _,o as b,c as V,a as l,b as t,w as i,h as a,$ as d,F as T,d as g,t as z,C as A}from"./BDlV69Nx.js";import"./p_DT62--.js";import"./DsGVK9Cf.js";import"./DMIqhTPN.js";const D={class:"flex flex-col gap-y-12"},E={class:"flex flex-col gap-4"},G={class:"mt-4"},Y=O({__name:"Index",async setup(I){let n,c;const{mezajOfString:r,getMezajOfString:y}=([n,c]=$(()=>N()),n=await n,c(),n),f=[{title:"کوکبی",value:"kokabi"},{title:"اونصوری",value:"onsori"}],v=[{title:"آتشی",value:1},{title:"آبی",value:2},{title:"خاکی",value:3},{title:"بادی",value:4}],s=_("علی"),u=_(f[0].value),m=_(v[0].value),U=async()=>{await y(s.value,m.value,u.value)};return(R,e)=>{const k=w,p=S,x=B,C=F,j=M;return b(),V("div",D,[l("div",E,[t(p,{label:"متن دلخواه خود را وارد کنید.",size:"lg"},{default:i(()=>[t(k,{modelValue:a(s),"onUpdate:modelValue":e[0]||(e[0]=o=>d(s)?s.value=o:null),placeholder:"متن قرآن"},null,8,["modelValue"])]),_:1}),t(p,{label:"انتخاب مبنا.",size:"lg"},{default:i(()=>[t(x,{modelValue:a(u),"onUpdate:modelValue":e[1]||(e[1]=o=>d(u)?u.value=o:null),options:f,placeholder:"انتخاب کنید","option-attribute":"title","value-attribute":"value"},null,8,["modelValue"])]),_:1}),t(p,{label:"انتخاب نوع.",size:"lg"},{default:i(()=>[t(x,{modelValue:a(m),"onUpdate:modelValue":e[2]||(e[2]=o=>d(m)?m.value=o:null),options:v,placeholder:"انتخاب کنید","option-attribute":"title","value-attribute":"value"},null,8,["modelValue"])]),_:1}),l("div",G,[t(C,{onClick:e[3]||(e[3]=o=>U()),label:"اجرا",size:"md",class:"px-8"})])]),t(j,null,{default:i(()=>[a(r)?(b(),V(T,{key:0},[l("p",null,[e[4]||(e[4]=l("span",{class:"font-bold"},"شماره: ",-1)),g(" "+z(a(r).number),1)]),l("p",null,[e[5]||(e[5]=l("span",{class:"font-bold"},"مزاج: ",-1)),g(" "+z(a(r).mezaj),1)])],64)):A("",!0)]),_:1})])}}});export{Y as default};