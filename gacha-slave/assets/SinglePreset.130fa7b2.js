var O=Object.defineProperty;var w=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var g=(s,u,e)=>u in s?O(s,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[u]=e,B=(s,u)=>{for(var e in u||(u={}))$.call(u,e)&&g(s,e,u[e]);if(w)for(var e of w(u))P.call(u,e)&&g(s,e,u[e]);return s};import{d as T,r as v,_ as q,$ as J,a0 as K,D as S,C as Z,I as j,J as z,K as G,o as m,q as C,f as t,w as l,e as E,L as H,F as h,a1 as k,s as x,g as r,h as d}from"./vendor.7622e4b8.js";import{U as M}from"./index.esm.min.c6bc6a12.js";import{c as F,a as Q}from"./artifact.56a90094.js";/* empty css                 */const R=r("ul",null,[r("li",null,[d(" \u672C\u7B97\u6CD5\u8BA1\u7B97\u7684\u662F\uFF1A\u968F\u673A\u7684\u4E00\u4E2A\u7ED9\u5B9A "),r("b",null,"\u7B49\u7EA7"),d(" \u548C "),r("b",null,"\u4E3B\u8BCD\u6761"),d(" \u7684\u5723\u9057\u7269\uFF0C\u5176 "),r("b",null,"\u8BCD\u6761\u6570"),d(" \u7684\u5206\u5E03\uFF08\u201C\u8BCD\u6761\u6570\u201D\u662F\u5404\u6709\u6548\u526F\u8BCD\u6761\u4E2A\u6570\u4E4B\u548C\uFF09 ")]),r("li",null,"\u672C\u7B97\u6CD5\u662F\u5E38\u6570\u65F6\u95F4\u786E\u5B9A\u6027\u7B97\u6CD5\uFF0C\u7ED3\u679C\u662F\u7CBE\u786E\u7684")],-1),W=d("\u8BA1\u7B97"),X=d("\u91CD\u7F6E"),Y=r("p",{class:"info"},"1\u8BCD\u6761\u4E3A\u5355\u6B21\u6700\u5927\u63D0\u5347\u91CF\uFF08\u4F8B\u5982\u66B4\u51FB\u73873.9%\uFF09",-1),oe=T({setup(s){const u={preset:"atkp,cd,cr",main:"db",lv:0},e=v(B({},u)),N=()=>{e.value=B({},u)},D=v(!1),A=v(""),p=v({tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},dataZoom:[{show:!0,start:0,end:100},{type:"inside",start:0,end:100}],xAxis:{type:"category",name:"\u8BCD\u6761\u6570",axisPointer:{type:"shadow"}},yAxis:{type:"value",name:"\u6982\u7387",min:0,interval:.1,axisLabel:{formatter:i=>`${(i*100).toFixed(0)}%`}},series:[{name:"\u8BCD\u6761\u6570\u6982\u7387",type:"bar",tooltip:{valueFormatter:i=>`${(i*100).toFixed(1)}%`}}]}),I=()=>{p.value.xAxis.data=[],p.value.series[0].data=[];let i=e.value.preset.split(","),a=Q(i,e.value.main,e.value.lv),c=0;for(let n=0;n<a.length;++n)p.value.xAxis.data.push(n/10),p.value.series[0].data.push(a[n]-c),c=a[n];A.value=F.preset[e.value.preset]+" / "+F.main[e.value.main]+" / "+e.value.lv+"\u7EA7",D.value=!0};return(i,a)=>{const c=q,n=J,b=K,_=S,L=Z,V=j,U=z,y=G;return m(),C(h,null,[t(c,{title:"\u8BF4\u660E",type:"info",closable:!1},{default:l(()=>[R]),_:1}),t(y,{header:"\u53C2\u6570"},{default:l(()=>[t(U,{model:e.value,"status-icon":"","label-width":"auto"},{default:l(()=>[t(_,{label:"\u6709\u6548\u8BCD\u6761",prop:"preset"},{default:l(()=>[t(b,{modelValue:e.value.preset,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value.preset=o),placeholder:"\u9009\u62E9"},{default:l(()=>[(m(!0),C(h,null,k(x(F).preset,(o,f)=>(m(),E(n,{label:o,value:f},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"\u4E3B\u8BCD\u6761",prop:"main"},{default:l(()=>[t(b,{modelValue:e.value.main,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value.main=o),placeholder:"\u9009\u62E9"},{default:l(()=>[(m(!0),C(h,null,k(x(F).main,(o,f)=>(m(),E(n,{label:o,value:f},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"\u7B49\u7EA7",prop:"lv"},{default:l(()=>[t(L,{modelValue:e.value.lv,"onUpdate:modelValue":a[2]||(a[2]=o=>e.value.lv=o),min:0,max:20},null,8,["modelValue"])]),_:1}),t(_,null,{default:l(()=>[t(V,{type:"primary",onClick:I},{default:l(()=>[W]),_:1}),t(V,{onClick:N},{default:l(()=>[X]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),D.value?(m(),E(y,{key:0,header:A.value},{default:l(()=>[t(x(M),{style:{height:"400px"},option:p.value},null,8,["option"]),Y]),_:1},8,["header"])):H("",!0)],64)}}});export{oe as default};
