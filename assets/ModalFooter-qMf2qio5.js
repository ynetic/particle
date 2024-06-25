import{a as o,j as f}from"./emotion-react-jsx-runtime.browser.esm-KjBcCTgX.js";import{c as p}from"./emotion-styled-base.browser.esm-CI5WbkaJ.js";import{r as y,R as u}from"./index-BwDkhjyp.js";import{u as m,H as w}from"./HeaderCloseButton-BwObO3PA.js";import{u as I,F as $,a as q,l as F}from"./floating-ui.react-BF3UZOJf.js";import{Z as L}from"./constants-IjE9pQe9.js";import{I as N}from"./Icon-DpkAdYOh.js";import{o as V}from"./index-C_eOKtFu.js";import{B as x}from"./Box-BvxFQC2G.js";import{B as _}from"./Button-C2nAR6C_.js";const z=p(F,{target:"e4ugt9q1"})("background:rgba(0, 0, 0, 0.8);display:flex;justify-content:center;align-items:center;place-items:center;z-index:",L.Modal,";overflow-y:hidden;"),R={extraSmall:"320px",small:"500px",medium:"640px",large:"720px",extraLarge:"1024px"},j=p("div",{target:"e4ugt9q0"})("margin:1rem;border-radius:0.3125rem;background:",({theme:e})=>e.colors.neutral[0],";box-shadow:",({theme:e})=>e.shadow.main,";display:flex;flex-direction:column;gap:0.625rem;width:",({size:e})=>e?R[e]:"auto",";min-height:220px;max-width:calc(100vw - 24px);max-height:calc(100vh - 24px);overflow-y:hidden;outline:none;"),v=y.forwardRef(function(r,a){const{context:t,...n}=m(),l=I([n.refs.setFloating,a]);if(!t.open)return null;const{size:i,children:d,id:s="modal-content",...c}=r;return o(q,{children:o(z,{lockScroll:!0,id:`${s}-overlay`,"data-testid":`${s}-overlay`,children:o($,{context:t,children:o(j,{ref:l,"aria-labelledby":n.labelId,"aria-describedby":n.descriptionId,size:i,id:s,"data-testid":s,...n.getFloatingProps(c),children:d})})})})});try{v.displayName="ModalContent",v.__docgenInfo={description:"",displayName:"ModalContent",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraSmall"'},{value:'"extraLarge"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const g=u.forwardRef(function(r,a){const{setOpen:t}=m();return o(w,{type:"button",...r,ref:a,onClick:()=>t(!1),children:o(N,{icon:V})})});try{g.displayName="ModalClose",g.__docgenInfo={description:"",displayName:"ModalClose",props:{}}}catch{}const k=p("div",{target:"e1m7kv6t0"})("display:flex;padding:12px;gap:24px;justify-content:space-between;align-items:center;border-bottom:",({theme:e})=>`1px solid ${e.colors.grey[200]}`,";"),b=u.forwardRef(function({children:r,id:a="modal-heading",disabled:t,footer:n},l){const{setLabelId:i}=m();return y.useLayoutEffect(()=>(i(a),()=>i(void 0)),[a,i]),f(k,{id:`${a}-container`,children:[f(x,{display:"flex",flexDirection:"column",justifyContent:"flex-start",children:[o(x,{fontWeight:700,fontSize:20,id:`${a}-title`,children:r}),n]}),o(g,{disabled:t,id:`${a}-close-action`,"aria-label":"Close modal"})]})});try{b.displayName="ModalHeading",b.__docgenInfo={description:"",displayName:"ModalHeading",props:{footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}}}catch{}const D=p("div",{target:"exn52zv0"})({name:"jwr75m",styles:"overflow-y:auto;padding:16px"}),h=u.forwardRef(function({children:r,id:a="modal-description",...t},n){const{setDescriptionId:l}=m();return u.useLayoutEffect(()=>(l(a),()=>l(void 0)),[a,l]),o(D,{...t,ref:n,id:`${a}-container`,children:r})});try{h.displayName="ModalDescription",h.__docgenInfo={description:"",displayName:"ModalDescription",props:{}}}catch{}const S=p("div",{target:"e13luk710"})({name:"1lt1r8p",styles:"display:flex;justify-content:flex-end;gap:16px;padding:16px"}),M=y.forwardRef(function(r,a){const{onAction:t,onCancel:n,cancelLabel:l,actionLabel:i,id:d="modal-footer",size:s="medium",loading:c,...C}=r;return f(S,{id:d,"data-testid":d,...C,ref:a,children:[o(_,{variant:"outlined",onClick:n,id:`${d}-cancel-button`,"data-testid":`${d}-cancel-button`,size:s,disabled:c,children:l||"Cancel"}),t&&o(_,{onClick:t,id:`${d}-action-button`,"data-testid":`${d}-action-button`,size:s,variant:c?"outlined":"filled",loading:c,children:i||"Submit"})]})});try{M.displayName="ModalFooter",M.__docgenInfo={description:"",displayName:"ModalFooter",props:{onAction:{defaultValue:null,description:"",name:"onAction",required:!1,type:{name:"(() => void)"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}},cancelLabel:{defaultValue:null,description:"",name:"cancelLabel",required:!1,type:{name:"string"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}export{b as M,h as a,M as b,v as c};
