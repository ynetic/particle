import{j as u,a as t,c as r}from"./emotion-styled-base.browser.esm-0d53d476.js";import{E as p}from"./constants-e08cb710.js";import{m as d}from"./motion-88cdba5f.js";const i=24,m={small:i-4,medium:i,large:i+4},g=r("div",{target:"e18vlnke3"})({name:"1vcob1d",styles:"display:flex;justify-content:center;align-items:center"}),f=r(d.div,{target:"e18vlnke2"})("background:",({isOn:e,theme:n,color:a})=>e?a?n.colors[a]:`linear-gradient(250deg, ${n.colors.primary}, ${n.colors.secondary})`:"#949a9d",";background-repeat:no-repeat;display:flex;justify-content:center;align-items:center;box-sizing:border-box;width:",({height:e})=>e*2,"px;height:",({height:e})=>e,"px;border-radius:",({height:e})=>e/2,"px;margin:8px;"),h=r("div",{target:"e18vlnke1"})("width:100%;height:100%;display:flex;justify-content:",({isOn:e})=>e?"flex-end":"flex-start",";padding:2px;cursor:pointer;align-items:center;"),v=r(d.div,{target:"e18vlnke0"})("width:",({height:e})=>e-4,"px;height:",({height:e})=>e-4,"px;background-color:white;border-radius:",({height:e})=>(e-4)/2,"px;");function s({label:e,size:n,color:a,checked:l=!1,onToggle:c}){const o=n?m[n]:i;return u(g,{children:[t(f,{isOn:l,height:o,color:a,whileHover:p,children:t(h,{isOn:l,onClick:c,children:t(v,{height:o,layout:!0,transition:y})})}),e&&t("span",{children:e})]})}const y={type:"spring",stiffness:700,damping:30};try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"(() => void)"}}}}}catch{}export{s as S};
//# sourceMappingURL=Switch-010e4272.js.map
