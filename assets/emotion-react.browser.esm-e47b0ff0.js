import{w as d,s as m,T as g,i as h}from"./emotion-styled-base.browser.esm-0d53d476.js";import{r as f}from"./index-76fb7be0.js";import{u as l}from"./extends-15b115a7.js";var p=d(function(o,e){var n=o.styles,s=m([n],void 0,f.useContext(g)),u=f.useRef();return l(function(){var r=e.key+"-global",t=new e.sheet.constructor({key:r,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),i=!1,a=document.querySelector('style[data-emotion="'+r+" "+s.name+'"]');return e.sheet.tags.length&&(t.before=e.sheet.tags[0]),a!==null&&(i=!0,a.setAttribute("data-emotion",r),t.hydrate([a])),u.current=[t,i],function(){t.flush()}},[e]),l(function(){var r=u.current,t=r[0],i=r[1];if(i){r[1]=!1;return}if(s.next!==void 0&&h(e,s.next,!0),t.tags.length){var a=t.tags[t.tags.length-1].nextElementSibling;t.before=a,t.flush()}e.insert("",s,t,!1)},[e,s.name]),null});function x(){for(var o=arguments.length,e=new Array(o),n=0;n<o;n++)e[n]=arguments[n];return m(e)}export{p as G,x as c};
//# sourceMappingURL=emotion-react.browser.esm-e47b0ff0.js.map
