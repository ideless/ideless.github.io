var k=Object.defineProperty;var G=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var y=(i,r,e)=>r in i?k(i,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[r]=e,_=(i,r)=>{for(var e in r||(r={}))P.call(r,e)&&y(i,e,r[e]);if(G)for(var e of G(r))W.call(r,e)&&y(i,e,r[e]);return i};import{d as T,r as p,C as $,D as I,I as N,J as O,K as S,o as x,q as R,f as n,w as d,e as F,L as U,F as z,s as b,h as w}from"./vendor.7622e4b8.js";import{U as D}from"./index.esm.min.c6bc6a12.js";import{a as g}from"./wish.bbfca896.js";const M=w("\u8BA1\u7B97"),q=w("\u91CD\u7F6E"),H=T({setup(i){const r={nTotalWishes:999,nGolds:16,nUpGolds:10},e=p(_({},r)),A=()=>{e.value=_({},r)},f=p(0),E=p(0),C=p(0),t=p({tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["n\u91D1\u6982\u7387","\u2264n\u91D1\u6982\u7387"],left:0},xAxis:[{type:"category",data:[1,2],axisPointer:{type:"shadow"}}],yAxis:[{type:"value"}],grid:{bottom:"50%"},series:[{name:"n\u91D1\u6982\u7387",type:"bar",tooltip:{valueFormatter:u=>u>.001?`${(u*100).toFixed(1)}%`:u},data:[.1,.8]},{name:"\u2264n\u91D1\u6982\u7387",type:"line",tooltip:{valueFormatter:u=>u<.999?`${(u*100).toFixed(1)}%`:u},data:[.1,.9]},{name:"\u6B27\u975E\u8BC4\u4EF7",type:"pie",itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},radius:"32%",center:["50%","78%"],z:100,label:{formatter:"{b} ({d}%)",overflow:"breakAll"},data:[{name:"\u91D1\u6570\u66F4\u5C11",value:0},{name:"\u91D1\u6570\u76F8\u540C",value:0},{name:"\u91D1\u6570\u66F4\u591A",value:1}]}]}),s=p({tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["n\u4E2AUP\u91D1\u6982\u7387","\u2264n\u4E2AUP\u91D1\u6982\u7387"],left:0},xAxis:[{type:"category",data:[1,2],axisPointer:{type:"shadow"}}],yAxis:[{type:"value"}],grid:{bottom:"50%"},series:[{name:"n\u4E2AUP\u91D1\u6982\u7387",type:"bar",tooltip:{valueFormatter:u=>u>.001?`${(u*100).toFixed(1)}%`:u},data:[.1,.8]},{name:"\u2264n\u4E2AUP\u91D1\u6982\u7387",type:"line",tooltip:{valueFormatter:u=>u<.999?`${(u*100).toFixed(1)}%`:u},data:[.1,.9]},{name:"\u6B27\u975E\u8BC4\u4EF7",type:"pie",itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},radius:"32%",center:["50%","78%"],z:100,label:{formatter:"{b} ({d}%)",overflow:"breakAll"},data:[{name:"UP\u91D1\u6570\u66F4\u5C11",value:0},{name:"UP\u91D1\u6570\u76F8\u540C",value:0},{name:"UP\u91D1\u6570\u66F4\u591A",value:1}]}]}),h=p(!1),B=()=>{e.value.nGolds=Math.min(e.value.nGolds,e.value.nTotalWishes),e.value.nUpGolds=Math.min(e.value.nUpGolds,e.value.nGolds),t.value.xAxis[0].data=[],t.value.series[0].data=[],t.value.series[1].data=[],t.value.series[2].data[0].value=0,t.value.series[2].data[1].value=0,t.value.series[2].data[2].value=1;let u=g("character_5",e.value.nTotalWishes,0,"0",(a,l)=>a>=.999&&l>=e.value.nGolds),o=0;for(let a=0;a<u.length;++a){let l=u[a];o+=l,l>0&&(t.value.xAxis[0].data.push(a),t.value.series[1].data.push(o),a==e.value.nGolds?t.value.series[0].data.push({value:l,itemStyle:{color:"orange"}}):t.value.series[0].data.push(l)),a==e.value.nGolds&&(t.value.series[2].data[0].value=o-l,t.value.series[2].data[1].value=l,t.value.series[2].data[2].value=1-o)}u.length-1<e.value.nGolds&&(t.value.series[2].data[0].value=1,t.value.series[2].data[1].value=0,t.value.series[2].data[2].value=0),s.value.xAxis[0].data=[],s.value.series[0].data=[],s.value.series[1].data=[],s.value.series[2].data[0].value=0,s.value.series[2].data[1].value=0,s.value.series[2].data[2].value=1;let v=g("character_5_up",e.value.nTotalWishes,0,"0",(a,l)=>a>=.999&&l>=e.value.nUpGolds*2);o=0;for(let a=0;a<v.length;++a){let l=v[a];o+=l,l>0&&(s.value.xAxis[0].data.push(a),s.value.series[1].data.push(o),a==e.value.nUpGolds?s.value.series[0].data.push({value:l,itemStyle:{color:"orange"}}):s.value.series[0].data.push(l)),a==e.value.nUpGolds&&(s.value.series[2].data[0].value=o-l,s.value.series[2].data[1].value=l,s.value.series[2].data[2].value=1-o)}v.length-1<e.value.nUpGolds&&(s.value.series[2].data[0].value=1,s.value.series[2].data[1].value=0,s.value.series[2].data[2].value=0),f.value=e.value.nTotalWishes,E.value=e.value.nGolds,C.value=e.value.nUpGolds,h.value=!0};return(u,o)=>{const v=$,a=I,l=N,V=O,c=S;return x(),R(z,null,[n(c,{header:"\u53C2\u6570"},{default:d(()=>[n(V,{ref:"ruleFormRef",model:e.value,"status-icon":"","label-width":"auto",class:"demo-ruleForm"},{default:d(()=>[n(a,{label:"\u603B\u62BD\u6570",prop:"nTotalWishes"},{default:d(()=>[n(v,{modelValue:e.value.nTotalWishes,"onUpdate:modelValue":o[0]||(o[0]=m=>e.value.nTotalWishes=m),min:1},null,8,["modelValue"])]),_:1}),n(a,{label:"\u4E94\u661F\u6570",prop:"nGolds"},{default:d(()=>[n(v,{modelValue:e.value.nGolds,"onUpdate:modelValue":o[1]||(o[1]=m=>e.value.nGolds=m),min:0},null,8,["modelValue"])]),_:1}),n(a,{label:"UP\u4E94\u661F\u6570",prop:"nUpGolds"},{default:d(()=>[n(v,{modelValue:e.value.nUpGolds,"onUpdate:modelValue":o[2]||(o[2]=m=>e.value.nUpGolds=m),min:0},null,8,["modelValue"])]),_:1}),n(a,null,{default:d(()=>[n(l,{type:"primary",onClick:B},{default:d(()=>[M]),_:1}),n(l,{onClick:A},{default:d(()=>[q]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),h.value?(x(),F(c,{key:0,header:`${f.value}\u62BD\u65F6\u91D1\u6570\u7684\u5206\u5E03`},{default:d(()=>[n(b(D),{style:{height:"500px"},option:t.value},null,8,["option"])]),_:1},8,["header"])):U("",!0),h.value?(x(),F(c,{key:1,header:`${f.value}\u62BD\u65F6UP\u91D1\u6570\u7684\u5206\u5E03`},{default:d(()=>[n(b(D),{style:{height:"500px"},option:s.value},null,8,["option"])]),_:1},8,["header"])):U("",!0)],64)}}});export{H as default};