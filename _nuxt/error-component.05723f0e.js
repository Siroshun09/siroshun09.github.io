import{u as v,d as a,a as x,r as B,o as S,c as f,b as _,e as s,w as c,f as g,g as l,t as m,_ as N,h as A,p as P,i as k,j as E}from"./entry.dd42b8b6.js";function w(t,e){return v()._useHead(t,e)}const C=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),p=(t,e)=>(o,r)=>(w(()=>t({...C(o),...r.attrs},r)),()=>{var i,n;return e?(n=(i=r.slots).default)==null?void 0:n.call(i):null}),d={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String};a({name:"NoScript",inheritAttrs:!1,props:{...d,title:String,body:Boolean,renderPriority:[String,Number]},setup:p((t,{slots:e})=>{var i;const o={...t},r=(((i=e.default)==null?void 0:i.call(e))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return r&&(o.children=r),{noscript:[o]}})});a({name:"Link",inheritAttrs:!1,props:{...d,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:p(t=>({link:[t]}))});a({name:"Base",inheritAttrs:!1,props:{...d,href:String,target:String},setup:p(t=>({base:t}))});const H=a({name:"Title",inheritAttrs:!1,setup:p((t,{slots:e})=>{var r,i,n;return{title:((n=(i=(r=e.default)==null?void 0:r.call(e))==null?void 0:i[0])==null?void 0:n.children)||null}})});a({name:"Meta",inheritAttrs:!1,props:{...d,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:p(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})});a({name:"Style",inheritAttrs:!1,props:{...d,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:p((t,{slots:e})=>{var i,n,u;const o={...t},r=(u=(n=(i=e.default)==null?void 0:i.call(e))==null?void 0:n[0])==null?void 0:u.children;return r&&(o.children=r),{style:[o]}})});const q=a({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,r;return(r=(o=e.slots).default)==null?void 0:r.call(o)}});a({name:"Html",inheritAttrs:!1,props:{...d,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:p(t=>({htmlAttrs:t}),!0)});a({name:"Body",inheritAttrs:!1,props:{...d,renderPriority:[String,Number]},setup:p(t=>({bodyAttrs:t}),!0)});const h=t=>(P("data-v-f0b5bde8"),t=t(),k(),t),T={class:"error-occurred"},j={key:0,class:"error"},I=h(()=>l("span",null,"Page Not found",-1)),z={key:1,class:"error"},M=h(()=>l("span",null,"An error occurred!",-1)),O=a({__name:"error",setup(t){const e=x();return(o,r)=>{const i=H,n=q,u=B("font-awesome-icon"),y=N,b=A;return S(),f("section",T,[_(e).statusCode==="404"?(S(),f("div",j,[s(n,null,{default:c(()=>[s(i,null,{default:c(()=>[g("Page Not Found")]),_:1})]),_:1}),l("h1",null,[s(u,{icon:["fa","exclamation-circle"],"fixed-width":""}),I]),l("p",null,"The page "+m(_(e).url)+" is not found.",1),l("p",null,[s(y,{to:"/"},{default:c(()=>[g("Return to the profile page")]),_:1})])])):(S(),f("div",z,[s(n,null,{default:c(()=>[s(i,null,{default:c(()=>[g("An Error Occurred")]),_:1})]),_:1}),l("h1",null,[s(u,{icon:["fa","exclamation-circle"],"fixed-width":""}),M]),l("p",null,"Message: "+m(_(e).message),1),l("p",null,[s(b,{to:"/"},{default:c(()=>[g("Return to the profile page")]),_:1})])]))])}}});const F=E(O,[["__scopeId","data-v-f0b5bde8"]]);export{F as default};
