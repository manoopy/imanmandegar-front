import{u as n}from"./EL1MBtLP.js";import{p as e}from"./BDlV69Nx.js";const i=e(),o=e(),f=e(),S=async()=>({tarafoOfString:i,tanazolOfString:o,azireOfString:f,getTarafoOfString:async(a,t)=>{const{data:r}=await n(`/api/Nazire/GetTarafoOfString/${a}/${t}`);i.value=r.value},getTanazolOfString:async(a,t)=>{const{data:r}=await n(`/api/Nazire/GetTanazolOfString/${a}/${t}`);o.value=r.value},getazireOfString:async(a,t)=>{const{data:r}=await n(`/api/Nazire/GetazireOfString/${a}/${t}`);f.value=r.value}});export{S as u};
