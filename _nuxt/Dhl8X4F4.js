import{u as r}from"./EL1MBtLP.js";import{p as n}from"./BDlV69Nx.js";const a=n(),u=n(),f=async()=>({numberOfString:a,letterOfNumber:u,getNumberOfString:async(e,t)=>{const{data:m}=await r(`/api/Number/GetNumberOfString/${e}/${t}`);a.value=m.value},getLetterOfNumber:async e=>{const{data:t}=await r(`/api/Number/GetLetterOfNumber/${e}`);u.value=t.value}});export{f as u};
