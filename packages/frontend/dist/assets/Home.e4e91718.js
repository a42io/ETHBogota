import{j as e,C as s,P as l,a as i,B as o,u as d,b as u,r as m}from"./index.578b6ae6.js";function h(n){return e(s,{maxWidth:"sm",sx:{margin:"auto",minWidth:340,display:"flex",justifyContent:"center",flexDirection:"column"},children:n.children})}function C(n){return e(l,{title:"home",children:e(h,{children:i("div",{className:"App",children:[e("h1",{children:"Vite + React + mui"}),e("div",{className:"card",children:e(o,{onClick:()=>{n.onClickConnect("")},variant:"outlined",sx:{m:1},children:"WalletConnect"})}),i("div",{className:"card",children:[e(o,{onClick:()=>{n.onClickConnect("m")},sx:{m:1},variant:"outlined",children:"MetaMask"}),e("p",{children:n.address}),e("p",{children:window.ethereum?"window.ethereum injected":"window ethereum not injected"})]})]})})})}function f(){const{address:n}=d(),{connect:t,connectors:c}=u(),a=m.exports.useCallback(r=>{t(r==="m"?{connector:c[0]}:{connector:c[1]})},[t,c]);return e(C,{onClickConnect:a,address:n})}export{f as default};
