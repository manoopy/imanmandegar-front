import{_ as A}from"./4KDdcyIw.js";import{_ as w}from"./CoNOeRoT.js";import{_ as V}from"./Dul3CJAr.js";import{u as h,_ as C}from"./EL1MBtLP.js";import{p as y,e as U,Z as $,o as r,c as u,a as e,b as n,w as c,h as _,$ as z,F as N,B as G,d as i,t as p}from"./BDlV69Nx.js";import"./p_DT62--.js";import"./DsGVK9Cf.js";import"./DMIqhTPN.js";const m=y(),S=async()=>({ayatForBodyPart:m,getAyatForBodyPart:async o=>{const{data:l}=await h(`/api/BodyPart/GetAyatForBodyPart/${o}`);m.value=l.value}}),D={class:"flex flex-col gap-y-12"},E={class:"flex flex-col gap-4"},I={class:"mt-4"},L={class:"flex flex-col"},K=U({__name:"AyatForBody",async setup(v){let o,l;const{ayatForBodyPart:f,getAyatForBodyPart:x}=([o,l]=$(()=>S()),o=await o,l(),o),d=[{title:"مو",value:"hair"},{title:"سر",value:"head"},{title:"چشم",value:"eye"},{title:"بینی",value:"nose"},{title:"دهان",value:"mouth"},{title:"ریش",value:"beard"},{title:"شانه",value:"shoulder"},{title:"سینه",value:"breast"},{title:"پشت",value:"back"},{title:"شکم",value:"stomack"},{title:"زکار",value:"zakar"},{title:"پا",value:"foot"}],s=y(d[0].value),b=async()=>{await x(s.value)};return(M,t)=>{const B=A,F=w,g=V,P=C;return r(),u("div",D,[e("div",E,[n(F,{label:"متن دلخواه خود را وارد کنید.",size:"lg"},{default:c(()=>[n(B,{modelValue:_(s),"onUpdate:modelValue":t[0]||(t[0]=a=>z(s)?s.value=a:null),options:d,placeholder:"انتخاب کنید","option-attribute":"title","value-attribute":"value"},null,8,["modelValue"])]),_:1}),e("div",I,[n(g,{onClick:t[1]||(t[1]=a=>b()),label:"اجرا",size:"md",class:"px-8"})])]),n(P,null,{default:c(()=>[e("div",L,[(r(!0),u(N,null,G(_(f),(a,k)=>(r(),u("div",{key:k,class:"border-b pb-3 mb-3"},[e("p",null,[t[2]||(t[2]=e("span",{class:"font-bold"},"شماره سوره: ",-1)),i(" "+p(a.chapter),1)]),e("p",null,[t[3]||(t[3]=e("span",{class:"font-bold"},"آیه: ",-1)),i(" "+p(a.verse),1)]),e("p",null,[t[4]||(t[4]=e("span",{class:"font-bold"},"متن: ",-1)),i(" "+p(a.text),1)])]))),128))])]),_:1})])}}});export{K as default};