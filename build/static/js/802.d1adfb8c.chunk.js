"use strict";(self.webpackChunkrepairtechlab=self.webpackChunkrepairtechlab||[]).push([[802],{802:(e,t,n)=>{n.r(t),n.d(t,{default:()=>le});var o=n(2791),r=n(697),i=n(3239),a=n(1614),s=n(890),d=n(7462),l=n(3366),c=n(3733),u=n(4419),p=n(6934),m=n(1402),x=n(5527),h=n(5878),f=n(1217);function Z(e){return(0,f.Z)("MuiCard",e)}(0,h.Z)("MuiCard",["root"]);var g=n(184);const v=["className","raised"],b=(0,p.ZP)(x.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),y=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiCard"}),{className:o,raised:r=!1}=n,i=(0,l.Z)(n,v),a=(0,d.Z)({},n,{raised:r}),s=(e=>{const{classes:t}=e;return(0,u.Z)({root:["root"]},Z,t)})(a);return(0,g.jsx)(b,(0,d.Z)({className:(0,c.Z)(s.root,o),elevation:r?8:void 0,ref:t,ownerState:a},i))}));function w(e){return(0,f.Z)("MuiCardContent",e)}(0,h.Z)("MuiCardContent",["root"]);const C=["className","component"],R=(0,p.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),j=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiCardContent"}),{className:o,component:r="div"}=n,i=(0,l.Z)(n,C),a=(0,d.Z)({},n,{component:r}),s=(e=>{const{classes:t}=e;return(0,u.Z)({root:["root"]},w,t)})(a);return(0,g.jsx)(R,(0,d.Z)({as:r,className:(0,c.Z)(s.root,o),ownerState:a,ref:t},i))}));n(7441);var M=n(6752),S=n(1314),E=n(4999),N=n(3967),A=n(2071);function I(e){return(0,f.Z)("MuiCollapse",e)}(0,h.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const k=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],z=(0,p.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((e=>{let{theme:t,ownerState:n}=e;return(0,d.Z)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&(0,d.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),G=(0,p.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((e=>{let{ownerState:t}=e;return(0,d.Z)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),P=(0,p.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((e=>{let{ownerState:t}=e;return(0,d.Z)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),D=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiCollapse"}),{addEndListener:r,children:i,className:a,collapsedSize:s="0px",component:p,easing:x,in:h,onEnter:f,onEntered:Z,onEntering:v,onExit:b,onExited:y,onExiting:w,orientation:C="vertical",style:R,timeout:j=S.x9.standard,TransitionComponent:D=M.ZP}=n,T=(0,l.Z)(n,k),W=(0,d.Z)({},n,{orientation:C,collapsedSize:s}),V=(e=>{const{orientation:t,classes:n}=e,o={root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]};return(0,u.Z)(o,I,n)})(W),q=(0,N.Z)(),B=o.useRef(),H=o.useRef(null),L=o.useRef(),F="number"===typeof s?"".concat(s,"px"):s,O="horizontal"===C,J=O?"width":"height";o.useEffect((()=>()=>{clearTimeout(B.current)}),[]);const K=o.useRef(null),Q=(0,A.Z)(t,K),U=e=>t=>{if(e){const n=K.current;void 0===t?e(n):e(n,t)}},X=()=>H.current?H.current[O?"clientWidth":"clientHeight"]:0,Y=U(((e,t)=>{H.current&&O&&(H.current.style.position="absolute"),e.style[J]=F,f&&f(e,t)})),$=U(((e,t)=>{const n=X();H.current&&O&&(H.current.style.position="");const{duration:o,easing:r}=(0,E.C)({style:R,timeout:j,easing:x},{mode:"enter"});if("auto"===j){const t=q.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(t,"ms"),L.current=t}else e.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");e.style[J]="".concat(n,"px"),e.style.transitionTimingFunction=r,v&&v(e,t)})),_=U(((e,t)=>{e.style[J]="auto",Z&&Z(e,t)})),ee=U((e=>{e.style[J]="".concat(X(),"px"),b&&b(e)})),te=U(y),ne=U((e=>{const t=X(),{duration:n,easing:o}=(0,E.C)({style:R,timeout:j,easing:x},{mode:"exit"});if("auto"===j){const n=q.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),L.current=n}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style[J]=F,e.style.transitionTimingFunction=o,w&&w(e)}));return(0,g.jsx)(D,(0,d.Z)({in:h,onEnter:Y,onEntered:_,onEntering:$,onExit:ee,onExited:te,onExiting:ne,addEndListener:e=>{"auto"===j&&(B.current=setTimeout(e,L.current||0)),r&&r(K.current,e)},nodeRef:K,timeout:"auto"===j?null:j},T,{children:(e,t)=>(0,g.jsx)(z,(0,d.Z)({as:p,className:(0,c.Z)(V.root,a,{entered:V.entered,exited:!h&&"0px"===F&&V.hidden}[e]),style:(0,d.Z)({[O?"minWidth":"minHeight"]:F},R),ownerState:(0,d.Z)({},W,{state:e}),ref:Q},t,{children:(0,g.jsx)(G,{ownerState:(0,d.Z)({},W,{state:e}),className:V.wrapper,ref:H,children:(0,g.jsx)(P,{ownerState:(0,d.Z)({},W,{state:e}),className:V.wrapperInner,children:i})})}))}))}));D.muiSupportAuto=!0;const T=D;const W=o.createContext({});var V=n(5158);function q(e){return(0,f.Z)("MuiAccordion",e)}const B=(0,h.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),H=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],L=(0,p.ZP)(x.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{["& .".concat(B.region)]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((e=>{let{theme:t}=e;const n={duration:t.transitions.duration.shortest};return{position:"relative",transition:t.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(t.vars||t).palette.divider,transition:t.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}},["&.".concat(B.expanded)]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},["&.".concat(B.disabled)]:{backgroundColor:(t.vars||t).palette.action.disabledBackground}}}),(e=>{let{theme:t,ownerState:n}=e;return(0,d.Z)({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&{["&.".concat(B.expanded)]:{margin:"16px 0"}})})),F=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiAccordion"}),{children:r,className:i,defaultExpanded:a=!1,disabled:s=!1,disableGutters:p=!1,expanded:x,onChange:h,square:f=!1,TransitionComponent:Z=T,TransitionProps:v}=n,b=(0,l.Z)(n,H),[y,w]=(0,V.Z)({controlled:x,default:a,name:"Accordion",state:"expanded"}),C=o.useCallback((e=>{w(!y),h&&h(e,!y)}),[y,h,w]),[R,...j]=o.Children.toArray(r),M=o.useMemo((()=>({expanded:y,disabled:s,disableGutters:p,toggle:C})),[y,s,p,C]),S=(0,d.Z)({},n,{square:f,disabled:s,disableGutters:p,expanded:y}),E=(e=>{const{classes:t,square:n,expanded:o,disabled:r,disableGutters:i}=e,a={root:["root",!n&&"rounded",o&&"expanded",r&&"disabled",!i&&"gutters"],region:["region"]};return(0,u.Z)(a,q,t)})(S);return(0,g.jsxs)(L,(0,d.Z)({className:(0,c.Z)(E.root,i),ref:t,ownerState:S,square:f},b,{children:[(0,g.jsx)(W.Provider,{value:M,children:R}),(0,g.jsx)(Z,(0,d.Z)({in:y,timeout:"auto"},v,{children:(0,g.jsx)("div",{"aria-labelledby":R.props.id,id:R.props["aria-controls"],role:"region",className:E.region,children:j})}))]}))}));var O=n(533);function J(e){return(0,f.Z)("MuiAccordionSummary",e)}const K=(0,h.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),Q=["children","className","expandIcon","focusVisibleClassName","onClick"],U=(0,p.ZP)(O.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t,ownerState:n}=e;const o={duration:t.transitions.duration.shortest};return(0,d.Z)({display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],o),["&.".concat(K.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(K.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["&:hover:not(.".concat(K.disabled,")")]:{cursor:"pointer"}},!n.disableGutters&&{["&.".concat(K.expanded)]:{minHeight:64}})})),X=(0,p.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((e=>{let{theme:t,ownerState:n}=e;return(0,d.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&{transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest}),["&.".concat(K.expanded)]:{margin:"20px 0"}})})),Y=(0,p.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((e=>{let{theme:t}=e;return{display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),["&.".concat(K.expanded)]:{transform:"rotate(180deg)"}}})),$=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiAccordionSummary"}),{children:r,className:i,expandIcon:a,focusVisibleClassName:s,onClick:p}=n,x=(0,l.Z)(n,Q),{disabled:h=!1,disableGutters:f,expanded:Z,toggle:v}=o.useContext(W),b=(0,d.Z)({},n,{expanded:Z,disabled:h,disableGutters:f}),y=(e=>{const{classes:t,expanded:n,disabled:o,disableGutters:r}=e,i={root:["root",n&&"expanded",o&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,u.Z)(i,J,t)})(b);return(0,g.jsxs)(U,(0,d.Z)({focusRipple:!1,disableRipple:!0,disabled:h,component:"div","aria-expanded":Z,className:(0,c.Z)(y.root,i),focusVisibleClassName:(0,c.Z)(y.focusVisible,s),onClick:e=>{v&&v(e),p&&p(e)},ref:t,ownerState:b},x,{children:[(0,g.jsx)(X,{className:y.content,ownerState:b,children:r}),a&&(0,g.jsx)(Y,{className:y.expandIconWrapper,ownerState:b,children:a})]}))}));function _(e){return(0,f.Z)("MuiAccordionDetails",e)}(0,h.Z)("MuiAccordionDetails",["root"]);const ee=["className"],te=(0,p.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t}=e;return{padding:t.spacing(1,2,2)}})),ne=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiAccordionDetails"}),{className:o}=n,r=(0,l.Z)(n,ee),i=n,a=(e=>{const{classes:t}=e;return(0,u.Z)({root:["root"]},_,t)})(i);return(0,g.jsx)(te,(0,d.Z)({className:(0,c.Z)(a.root,o),ref:t,ownerState:i},r))}));var oe=n(3400),re=n(7689),ie=n(5130),ae=n(1131),se=n(9434),de=n(8098);function le(){const e=(0,se.I0)(),t=(0,re.s0)(),{form:n,status:d}=(0,se.v9)((e=>e.form));(0,o.useEffect)((()=>{e((0,de.R3)())}),[e]);return"loading"===d?(0,g.jsx)(r.Z,{sx:{textAlign:"center",mt:8},children:(0,g.jsx)(i.Z,{color:"secondary"})}):"failed"===d?t("/profile"):"succeeded"===d&&n?(0,g.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",p:4},children:[(0,g.jsx)(s.Z,{color:"secondary",variant:"h1",sx:{pb:4,pt:4,fontSize:{xs:20,md:30}},children:"\u0410\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"}),(0,g.jsx)(r.Z,{sx:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:2},children:n&&n.length>0?n.map((t=>(0,g.jsx)(y,{variant:"outlined",sx:{width:"300px"},children:(0,g.jsxs)(j,{sx:{display:"flex",position:"relative",flexDirection:"column",pt:4,gap:2},children:[(0,g.jsxs)(s.Z,{level:"title-md",children:[(0,g.jsx)("b",{children:"\u0406\u043c\u02bc\u044f: "})," ",t.data.name]}),(0,g.jsxs)(s.Z,{level:"title-md",children:[(0,g.jsx)("b",{children:"\u041f\u043e\u0448\u0442\u0430: "})," ",t.data.email]}),(0,g.jsxs)(s.Z,{level:"title-md",children:[(0,g.jsx)("b",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: "})," ",t.data.phone]}),(0,g.jsxs)(F,{elevation:0,sx:{".MuiAccordionSummary-content.Mui-expanded":{margin:0},".MuiAccordionSummary-root.Mui-expanded":{minHeight:0}},children:[(0,g.jsx)($,{expandIcon:(0,g.jsx)(ae.Z,{}),"aria-controls":"text-content",sx:{p:0},children:(0,g.jsx)(s.Z,{children:"\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f"})}),(0,g.jsx)(ne,{children:(0,g.jsx)(s.Z,{children:t.data.textField})})]}),(0,g.jsx)(oe.Z,{onClick:()=>(async t=>{window.confirm("\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0446\u0435\u0439 \u0437\u0430\u043f\u0438\u0441?")&&e((0,de.dI)(t))})(t.id),disableRipple:!0,sx:{position:"absolute",top:0,right:0,p:1,cursor:"pointer"},children:(0,g.jsx)(ie.Z,{color:"error"})}),(0,g.jsx)(s.Z,{variant:"body1",color:"primary",sx:{position:"absolute",fontSize:"12px",p:1.6,left:0,top:0},children:(0,g.jsx)("i",{children:new Date(t.data.date).toLocaleString()})}),(0,g.jsxs)(r.Z,{sx:{display:"flex",alignItems:"center",position:"absolute",top:0,left:150,p:1},children:[(0,g.jsx)(s.Z,{level:"title-md",children:t.data.status?"\u0417\u0430\u043a\u0440\u0438\u0442\u043e":"\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u043e"}),(0,g.jsx)("input",{type:"checkbox",id:"orderStatus".concat(t.id),checked:t.data.status,onChange:()=>{return n=t.id,o={...t.data,status:!t.data.status},void e((0,de.xM)({id:n,data:o}));var n,o}})]})]})},t.id))):(0,g.jsx)(s.Z,{variant:"h6",children:"\u0414\u0430\u043d\u043d\u0438\u0445 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e."})})]}):void 0}},5130:(e,t,n)=>{var o=n(4836);t.Z=void 0;var r=o(n(5649)),i=n(184),a=(0,r.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=a},1131:(e,t,n)=>{var o=n(4836);t.Z=void 0;var r=o(n(5649)),i=n(184),a=(0,r.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=a}}]);
//# sourceMappingURL=802.d1adfb8c.chunk.js.map