"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[8077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,u=d["".concat(l,".").concat(f)]||d[f]||m[f]||a;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"\ub514\uc790\uc778 \uc2dc\uc2a4\ud15c\uc744 \uc704\ud574\uc11c style-system\uc744 \uc774\uc6a9\ud558\ub294 \ubc29\ubc95"},i=void 0,s={unversionedId:"front-end-development/reactjs/3",id:"front-end-development/reactjs/3",title:"\ub514\uc790\uc778 \uc2dc\uc2a4\ud15c\uc744 \uc704\ud574\uc11c style-system\uc744 \uc774\uc6a9\ud558\ub294 \ubc29\ubc95",description:"",source:"@site/docs/front-end-development/reactjs/3.md",sourceDirName:"front-end-development/reactjs",slug:"/front-end-development/reactjs/3",permalink:"/docs/front-end-development/reactjs/3",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1698471235,formattedLastUpdatedAt:"Oct 28, 2023",frontMatter:{title:"\ub514\uc790\uc778 \uc2dc\uc2a4\ud15c\uc744 \uc704\ud574\uc11c style-system\uc744 \uc774\uc6a9\ud558\ub294 \ubc29\ubc95"},sidebar:"developmentSidebar",previous:{title:"React\uc758 StrictMode\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9ac\ub80c\ub354\ub9c1\ud558\uac8c \ub9cc\ub4dc\ub294\uac74\uac00?",permalink:"/docs/front-end-development/reactjs/29"},next:{title:"\ub9ac\uc561\ud2b8\uc5d0\uc11c \uba87 \ucd08 \uac04\uaca9\uc73c\ub85c Polling \ud558\ub294 \ub85c\uc9c1\uc744 \ub9cc\ub4e4 \ub54c \uc720\uc758\ud560 \uc810(Feat. \ud0c0\uc774\uba38)",permalink:"/docs/front-end-development/reactjs/30"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { system, border } from "styled-system";\nimport { ThemeProvider, styled } from "styled-components";\n\nconst theme = {\n  colors: {\n    primary: "#007bff",\n    secondary: "#6c757d",\n    success: "#28a745",\n    error: "#dc3545",\n    warning: "#ffc107",\n  },\n  fontSizes: {\n    small: "12px",\n    medium: "16px",\n    large: "20px",\n  },\n};\n\nconst HomePage = () => {\n  const [active, setActive] = useState(false);\n\n  return (\n    <ThemeProvider theme={theme}>\n      <button onClick={() => setActive((prev) => !prev)}>\ubc84\ud2bc</button>\n      <Div active={active}>\n        {["fidsoa", "fdsioajfdsa", "fdsijoafioa"].map((el) => {\n          return (\n            <Text fontSize="large" key={el}>\n              {el}\n            </Text>\n          );\n        })}\n      </Div>\n    </ThemeProvider>\n  );\n};\n\nconst Text = styled("div")<{ fontSize: number | string }>(\n  system({\n    fontSize: {\n      property: "fontSize",\n      scale: "fontSizes",\n      defaultScale: [12, 14, 16, 20, 24, 32, 48],\n    },\n  })\n);\n\nconst Div = styled("div")<{ active: boolean }>`\n  width: 100px;\n\n  visibility: visible;\n  border: 1px solid black;\n  overflow: hidden;\n\n  ${(props) => {\n    if (!props.active) {\n      return `\n        height: 100px;\n        transition: all .5s ease-in-out;\n      `;\n    }\n\n    return `\n        height: 0;\n        transition: all .5s ease-in-out;\n    `;\n  }}\n`;\n\nexport default HomePage;\n')))}m.isMDXComponent=!0}}]);