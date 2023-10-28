"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[5254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"\ub9ac\uc561\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1 - 13. Layout Shift"},l=void 0,i={unversionedId:"front-end-development/reactjs/23",id:"front-end-development/reactjs/23",title:"\ub9ac\uc561\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1 - 13. Layout Shift",description:"Layout Shift",source:"@site/docs/front-end-development/reactjs/23.md",sourceDirName:"front-end-development/reactjs",slug:"/front-end-development/reactjs/23",permalink:"/milliwonkim/docs/front-end-development/reactjs/23",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1698471004,formattedLastUpdatedAt:"Oct 28, 2023",frontMatter:{title:"\ub9ac\uc561\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1 - 13. Layout Shift"},sidebar:"developmentSidebar",previous:{title:"\ub9ac\uc561\ud2b8 \uc131\ub2a5 \ud5a5\uc0c1 - 12. \ubd88\ud544\uc694\ud55c CSS \uc81c\uac70",permalink:"/milliwonkim/docs/front-end-development/reactjs/22"},next:{title:"Cypress vs Playwright - 2023\ub144\uc5d0\ub294 \uc5b4\ub5a4 \ub9ac\uc561\ud2b8 \ud14c\uc2a4\ud305 \ud234\uc744 \uc368\uc57c\ud560\uae4c? (Feat. Cypress vs Playwright - Which is best for E2E testing)",permalink:"/milliwonkim/docs/front-end-development/reactjs/24"}},p={},s=[{value:"Layout Shift",id:"layout-shift",level:3},{value:"Layout Shift\uac00 \ubc1c\uc0dd\ud558\ub294 \uc6d0\uc778",id:"layout-shift\uac00-\ubc1c\uc0dd\ud558\ub294-\uc6d0\uc778",level:3},{value:"Layout Shift\ub97c \ub9c9\ub294 \ubc29\ubc95",id:"layout-shift\ub97c-\ub9c9\ub294-\ubc29\ubc95",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"layout-shift"},"Layout Shift"),(0,a.kt)("p",null,"\ub124\ud2b8\uc6cc\ud06c\ub85c \uc774\ubbf8\uc9c0\ub97c \ubd88\ub7ec\uc62c \ub54c, \ud3f0\ud2b8 \ubcf4\ub2e4 \ub2a6\uac8c \ub72c \ud6c4, \uc774\ubbf8\uc9c0\uac00 \ucc28\uc9c0\ud558\ub294 \uacf5\uac04\ub9cc\ud07c \ub808\uc774\uc544\uc6c3\uc774 \ubc00\ub824\ub0a0 \ub54c \ub098\ud0c0\ub098\ub294 \ud604\uc0c1"),(0,a.kt)("h3",{id:"layout-shift\uac00-\ubc1c\uc0dd\ud558\ub294-\uc6d0\uc778"},"Layout Shift\uac00 \ubc1c\uc0dd\ud558\ub294 \uc6d0\uc778"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ud06c\uae30\uac00 \uc815\ud574\uc9c0\uc9c0 \uc54a\uc740 \uc774\ubbf8\uc9c0, \uad11\uace0, \uc784\ubca0\ub4dc \ubc0f iframe")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ub3d9\uc801\uc778 \ucee8\ud150\uce20")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"FOIT/FOUT\uc744 \uc720\ubc1c\ud558\ub294 \uc6f9 \ud3f0\ud2b8")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"DOM \uc5c5\ub370\uc774\ud2b8 \uc804\uc5d0 \ub124\ud2b8\uc6cc\ud06c \uc751\ub2f5 \ub300\uae30 \uc791\uc5c5"))),(0,a.kt)("h3",{id:"layout-shift\ub97c-\ub9c9\ub294-\ubc29\ubc95"},"Layout Shift\ub97c \ub9c9\ub294 \ubc29\ubc95"),(0,a.kt)("p",null,"\ub808\uc774\uc544\uc6c3 \uc774\ub3d9\uc740 \uc694\uc18c\uc758 \uc0ac\uc774\uc988\ub97c \ubbf8\ub9ac \uc815\ud558\uc9c0 \uc54a\uc544\uc11c \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub530\ub77c\uc11c \ub808\uc774\uc544\uc6c3 \uc774\ub3d9\uc744 \uc720\ubc1c\ud558\ub294 \uc694\uc18c\uc758 \uc0ac\uc774\uc988\ub97c \uc815\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ubbf8\uc9c0 \uc0ac\uc774\uc988\ub294 \ube0c\ub77c\uc6b0\uc800\uc758 \uac00\ub85c \uc0ac\uc774\uc988\uc5d0 \ub530\ub77c \ubcc0\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub530\ub77c\uc11c \ub2e8\uc21c\ud788 \ub108\ube44\uc640 \ub192\uc774\ub97c \uace0\uc815\ud558\ub294 \uac83\uc774 \uc544\ub2cc"),(0,a.kt)("p",null,"\uc774\ubbf8\uc9c0\uc758 \ub108\ube44, \ub192\uc774 \ube44\uc728\ub85c \uacf5\uac04\uc744 \uc7a1\uc544\ub450\uba74 \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(7243).Z,width:"2000",height:"1469"})),(0,a.kt)("p",null,"\ud06c\ub86c\uc5d0\uc11c \ubcf4\uba74 \uac1c\ubc1c\uc790\ub3c4\uad6c\ub97c \ud1b5\ud574 \uc774\ubbf8\uc9c0\uc758 \ube44\uc728\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c \uc0ac\uc6a9\ud558\ub294 \uc774\ubbf8\uc9c0\uc758 \ube44\uc728\uc740 2:3 \uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ubbf8\uc9c0 \ud06c\uae30\ub97c \ube44\uc728\ub85c \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \ud06c\uac8c 2\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"padding\uc73c\ub85c \ubc15\uc2a4\ub97c \ub9cc\ub4e4\uace0, \uadf8 \uc548\uc5d0 \uc774\ubbf8\uc9c0\ub97c absolute\ub85c \ub744\uc6b0\ub294 \ubc29\uc2dd")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport styled from "styled-components";\n\nconst App = () => {\n  return (\n    <Wrapper>\n      <img class="image" src="..." />\n    </Wrapper>\n  );\n};\n\nconst Wrapper = styled.div`\n  position: relative;\n  width: 160px;\n  padding-top: 66.66% /* 2:3 \ube44\uc728 */ .image {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n  }\n`;\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"CSS\uc758 aspect-radio \uc18d\uc131 \uc774\uc6a9")),(0,a.kt)("p",null,"\uc774 \uc18d\uc131\uc740 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7f4 \uacbd\uc6b0 1\ubc88\uc744 \uc774\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport styled from "styled-components";\n\nconst App = () => {\n  return (\n    <Wrapper>\n      <img class="image" src="..." />\n    </Wrapper>\n  );\n};\n\nconst Wrapper = styled.div`\n  width: 100%;\n  aspect-ratio: 16 / 9;\n\n  .image {\n    width: 100%;\n    height: 100%;\n  }\n`;\n')))}m.isMDXComponent=!0},7243:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1-681d23b959b713b559aea54a07970fdd.png"}}]);