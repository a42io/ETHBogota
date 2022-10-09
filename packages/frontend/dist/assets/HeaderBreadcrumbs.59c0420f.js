import{g as N,j as t,s as u,h as _,_ as d,i as k,k as H,l as T,T as v,r as p,m as U,n as j,o as W,p as E,f as c,a as g,q as C,L as O}from"./index.578b6ae6.js";import"./EventNewEventForm.2108e9a1.js";const q=N(t("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),P=u(_)(({theme:e})=>d({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":d({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":d({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:k(e.palette.grey[200],.12)}:{backgroundColor:k(e.palette.grey[600],.12)})})),D=u(q)({width:24,height:16});function G(e){const r=e;return t("li",{children:t(P,d({focusRipple:!0},e,{ownerState:r,children:t(D,{ownerState:r})}))})}function V(e){return T("MuiBreadcrumbs",e)}const F=H("MuiBreadcrumbs",["root","ol","li","separator"]),J=F,K=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],Q=e=>{const{classes:r}=e;return E({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},V,r)},X=u(v,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${J.li}`]:r.li},r.root]})({}),Y=u("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),Z=u("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ee(e,r,o,s){return e.reduce((n,i,a)=>(a<e.length-1?n=n.concat(i,t(Z,{"aria-hidden":!0,className:r,ownerState:s,children:o},`separator-${a}`)):n.push(i),n),[])}const re=p.exports.forwardRef(function(r,o){const s=U({props:r,name:"MuiBreadcrumbs"}),{children:n,className:i,component:a="nav",expandText:w="Show path",itemsAfterCollapse:b=1,itemsBeforeCollapse:f=1,maxItems:x=8,separator:S="/"}=s,z=j(s,K),[R,A]=p.exports.useState(!1),m=d({},s,{component:a,expanded:R,expandText:w,itemsAfterCollapse:b,itemsBeforeCollapse:f,maxItems:x,separator:S}),h=Q(m),M=p.exports.useRef(null),L=l=>{const B=()=>{A(!0);const $=M.current.querySelector("a[href],button,[tabindex]");$&&$.focus()};return f+b>=l.length?l:[...l.slice(0,f),t(G,{"aria-label":w,onClick:B},"ellipsis"),...l.slice(l.length-b,l.length)]},y=p.exports.Children.toArray(n).filter(l=>p.exports.isValidElement(l)).map((l,B)=>t("li",{className:h.li,children:l},`child-${B}`));return t(X,d({ref:o,component:a,color:"text.secondary",className:W(h.root,i),ownerState:m},z,{children:t(Y,{className:h.ol,ref:M,ownerState:m,children:ee(R||x&&y.length<=x?y:L(y),h.separator,S,m)})}))}),te=re;function se({links:e,activeLast:r=!1,...o}){const s=e[e.length-1].name,n=e.map(a=>t(I,{link:a},a.name)),i=e.map(a=>t("div",{children:a.name!==s?t(I,{link:a}):t(v,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:s})},a.name));return t(te,{separator:t(c,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}}),...o,children:r?n:i})}function I({link:e}){const{href:r,name:o,icon:s}=e;return g(C,{variant:"body2",component:O,to:r||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&t(c,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),o]},o)}function ne({links:e,action:r,heading:o,moreLink:s=[],sx:n,...i}){return g(c,{sx:{mb:5,...n},children:[g(c,{sx:{display:"flex",alignItems:"center"},children:[g(c,{sx:{flexGrow:1},children:[t(v,{variant:"h4",gutterBottom:!0,children:o}),t(se,{links:e,...i})]}),r&&t(c,{sx:{flexShrink:0},children:r})]}),t(c,{sx:{mt:2},children:typeof s=="string"?t(C,{href:s,target:"_blank",rel:"noopener",variant:"body2",children:s}):s.map(a=>t(C,{noWrap:!0,href:a,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:a},a))})]})}export{ne as H};
