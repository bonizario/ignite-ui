import{j as e}from"./jsx-runtime-ffb262ed.js";function n({hasRemValue:r=!1,tokens:d}){return e.jsxs("table",{className:"tokens-grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),r&&e.jsx("th",{children:"Pixels"})]})}),e.jsx("tbody",{children:Object.entries(d).map(([s,t])=>e.jsxs("tr",{children:[e.jsx("td",{children:s}),e.jsx("td",{children:t}),r&&e.jsxs("td",{children:[Number(t.replace("rem",""))*16,"px"]})]},s))})]})}try{n.displayName="TokensGrid",n.__docgenInfo={description:"",displayName:"TokensGrid",props:{hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}},tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}}}}}catch{}export{n as T};