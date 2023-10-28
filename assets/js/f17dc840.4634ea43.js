"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[8035],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),i=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(a.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(t),m=o,f=s["".concat(a,".").concat(m)]||s[m]||d[m]||l;return t?r.createElement(f,u(u({ref:n},p),{},{components:t})):r.createElement(f,u({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,u=new Array(l);u[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[s]="string"==typeof e?e:o,u[1]=c;for(var i=2;i<l;i++)u[i]=t[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const l={title:"React Hooks\ub294 \ud074\ub85c\uc800\ub97c \uc0ac\uc6a9\ud558\ub294\uac00?"},u=void 0,c={unversionedId:"front-end-development/reactjs/31",id:"front-end-development/reactjs/31",title:"React Hooks\ub294 \ud074\ub85c\uc800\ub97c \uc0ac\uc6a9\ud558\ub294\uac00?",description:"\ub9ac\uc561\ud2b8 \ud6c5\uc740 \ud074\ub85c\uc800 \uac1c\ub150\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",source:"@site/docs/front-end-development/reactjs/31.md",sourceDirName:"front-end-development/reactjs",slug:"/front-end-development/reactjs/31",permalink:"/milliwonkim/docs/front-end-development/reactjs/31",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1698471004,formattedLastUpdatedAt:"Oct 28, 2023",frontMatter:{title:"React Hooks\ub294 \ud074\ub85c\uc800\ub97c \uc0ac\uc6a9\ud558\ub294\uac00?"},sidebar:"developmentSidebar",previous:{title:"\ub9ac\uc561\ud2b8\uc5d0\uc11c \uba87 \ucd08 \uac04\uaca9\uc73c\ub85c Polling \ud558\ub294 \ub85c\uc9c1\uc744 \ub9cc\ub4e4 \ub54c \uc720\uc758\ud560 \uc810(Feat. \ud0c0\uc774\uba38)",permalink:"/milliwonkim/docs/front-end-development/reactjs/30"},next:{title:"React\uc5d0\uc11c Dropdown\uc744 \ub9cc\ub4e4 \ub54c, Dropdown \ub80c\ub354\ub9c1\uc744 display:none\uc774 \uc88b\uc744\uae4c? visibility: hidden\uc774 \uc88b\uc744\uae4c?",permalink:"/milliwonkim/docs/front-end-development/reactjs/32"}},a={},i=[{value:"1. \ud074\ub85c\uc800\uac00 \uae30\uc5b5\ud574\uc57c\ud560 \ubcc0\uc218, \uac1d\uccb4\ub97c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc774 \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744\ub54c\uae4c\uc9c0 \uba54\ubaa8\ub9ac\uc5d0 \uc720\uc9c0\ud569\ub2c8\ub2e4",id:"1-\ud074\ub85c\uc800\uac00-\uae30\uc5b5\ud574\uc57c\ud560-\ubcc0\uc218-\uac1d\uccb4\ub97c-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8-\uc5d4\uc9c4\uc774-\ub354-\uc774\uc0c1-\uc0ac\uc6a9\ud558\uc9c0-\uc54a\uc744\ub54c\uae4c\uc9c0-\uba54\ubaa8\ub9ac\uc5d0-\uc720\uc9c0\ud569\ub2c8\ub2e4",level:2},{value:"2. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \ud074\ub85c\uc800\uac00 \uae30\uc5b5\ud560 \ubcc0\uc218, \uac1d\uccb4\ub97c \ubcf5\uc0ac\ud558\uc5ec \uc800\uc7a5\ud569\ub2c8\ub2e4.",id:"2-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8-\uc5d4\uc9c4\uc740-\ud074\ub85c\uc800\uac00-\uae30\uc5b5\ud560-\ubcc0\uc218-\uac1d\uccb4\ub97c-\ubcf5\uc0ac\ud558\uc5ec-\uc800\uc7a5\ud569\ub2c8\ub2e4",level:2}],p={toc:i},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ub9ac\uc561\ud2b8 \ud6c5\uc740 \ud074\ub85c\uc800 \uac1c\ub150\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud074\ub85c\uc800\ub294 \ud568\uc218\uac00 \uc18d\ud55c \ub809\uc2dc\uceec \uc2a4\ucf54\ud504\uc5d0\uc11c \uc120\uc5b8\ub41c \ubcc0\uc218\uc5d0 \ub300\ud55c \ucc38\uc870\ub97c \uc720\uc9c0\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub809\uc2dc\uceec \uc2a4\ucf54\ud504\ub780 \ubcc0\uc218\uc758 \uc720\ud6a8\ubc94\uc704\ub97c \uacb0\uc815\ud558\ub294\ub370 \uc0ac\uc6a9\ub418\ub294 \uc2a4\ucf54\ud504\uc758 \uc885\ub958 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud568\uc218\ub97c \uc5b4\ub514\uc5d0 \uc815\uc758\ud588\ub294\uc9c0\uc5d0 \ub530\ub77c \ud574\ub2f9 \ud568\uc218\uc758 \ubcc0\uc218 \uc2a4\ucf54\ud504\uac00 \uacb0\uc815\ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// \ub809\uc2dc\uceec \uc2a4\ucf54\ud504 \ub54c\ubb38\uc5d0 innerFunction \uc548\uc5d0\uc11c\ub294 outerVariable\uc5d0 \uc811\uadfc \uac00\ub2a5\ud569\ub2c8\ub2e4.// innerFunction \ud568\uc218\uac00 outerFunction \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c \uc815\uc758\ub410\uc73c\ubbc0\ub85c// outerFunction\uc758 \ud568\uc218 \uc2a4\ucf54\ud504\uc5d0 \uc811\uadfc \uac00\ub2a5\ud569\ub2c8\ub2e4.function outerFunction() {\n  const outerVariable = "outer";\n\n  function innerFunction() {\n    console.log(outerVariable);// "outer"\n  }\n\n  innerFunction();\n}\n\nouterFunction();\n')),(0,o.kt)("p",null,"\uc774\ub97c \ub9ac\uc561\ud2b8\ub85c \uac00\uc838\uc640\ubd05\uc2dc\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nfunction Counter() {\n/*\n\uc704 \ucf54\ub4dc\uc5d0\uc11c useState \ud6c5\uc740 \ub0b4\ubd80\uc801\uc73c\ub85c \ud074\ub85c\uc800\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\nuseState \ud6c5\uc740 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ucc98\uc74c\uc73c\ub85c \ub80c\ub354\ub9c1\ub420 \ub54c\n\ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c \uc120\uc5b8\ud55c state \ubcc0\uc218\uc640 setState \ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\n\n\uc774\ud6c4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub2e4\uc2dc \ub80c\ub354\ub9c1\ub418\uc5b4\ub3c4 \uac19\uc740 state \ubcc0\uc218\uc640 setState \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\ub294\ub370,\n\uc774\ub294 \ud074\ub85c\uc800\uc5d0 \uc758\ud574 \uac00\ub2a5\ud574\uc9d1\ub2c8\ub2e4.\n\n\uc704 \ucf54\ub4dc\uc5d0\uc11c count \ubcc0\uc218\uc640 setCount \ud568\uc218\ub294 useState(0) \ud568\uc218\uac00 \ud638\ucd9c\ub420 \ub54c \uc0dd\uc131\ub418\uba70,\n\uc774\ud6c4 increment \ud568\uc218\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\nincrement \ud568\uc218\ub294 \uc678\ubd80 \ubcc0\uc218 count\uc640 setCount\uc5d0 \uc811\uadfc\ud558\uc5ec \uac12\uc744 \ubcc0\uacbd\ud558\ub294\ub370,\n\uc774\ub54c \ud074\ub85c\uc800\uc5d0 \uc758\ud574 \ub0b4\ubd80 \ud568\uc218\uc778 increment\uac00 \uc678\ubd80 \ubcc0\uc218\ub97c \ucc38\uc870\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4.\n\n\ub530\ub77c\uc11c increment \ud568\uc218\ub294 count \ubcc0\uc218\uc758 \uac12\uc744 \uc99d\uac00\uc2dc\ud0a4\ub294\ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\n*/const [count, setCount] = useState(0);\n\n//const increment = () => {\n    setCount(count + 1);\n  };\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={increment}>Click me</button>\n    </div>\n  );\n}\n\nexport default Counter;\n")),(0,o.kt)("p",null,"\uc774\ub807\uac8c \ubcf4\ub2c8"),(0,o.kt)("p",null,"\ud074\ub85c\uc800\ub294 \uc5b4\ub5bb\uac8c \ub0b4\ubd80\uc758 \uac12\uc744 \uae30\uc5b5\ud558\ub294\uc9c0 \ub108\ubb34 \uad81\uae08\ud574\uc84c\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \ud074\ub85c\uc800\ub294 \ud568\uc218\uac00 \uc120\uc5b8\ub420 \ub54c\uc758 \ub809\uc2dc\uceec \uc2a4\ucf54\ud504\uc5d0 \ub300\ud55c \ucc38\uc870\ub97c \uc720\uc9c0\ud558\uba74\uc11c,"),(0,o.kt)("p",null,"\ud568\uc218\uac00 \uc2e4\ud589\ub420 \ub54c, \ud574\ub2f9 \uc2a4\ucf54\ud504\uc758 \ubcc0\uc218\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \ub54c \ud074\ub85c\uc800\ub294 \ub0b4\ubd80\uc758 \uac12\uc744 \uae30\uc5b5\ud558\uae30 \uc704\ud574 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc774 \ub0b4\ubd80\uc801\uc73c\ub85c \ud65c\uc6a9\ud558\ub294 \ub450 \uac00\uc9c0 \uba54\ucee4\ub2c8\uc998\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"1-\ud074\ub85c\uc800\uac00-\uae30\uc5b5\ud574\uc57c\ud560-\ubcc0\uc218-\uac1d\uccb4\ub97c-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8-\uc5d4\uc9c4\uc774-\ub354-\uc774\uc0c1-\uc0ac\uc6a9\ud558\uc9c0-\uc54a\uc744\ub54c\uae4c\uc9c0-\uba54\ubaa8\ub9ac\uc5d0-\uc720\uc9c0\ud569\ub2c8\ub2e4"},"1. \ud074\ub85c\uc800\uac00 \uae30\uc5b5\ud574\uc57c\ud560 \ubcc0\uc218, \uac1d\uccb4\ub97c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc774 \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744\ub54c\uae4c\uc9c0 \uba54\ubaa8\ub9ac\uc5d0 \uc720\uc9c0\ud569\ub2c8\ub2e4"),(0,o.kt)("p",null,"=> \uc774\ub807\uac8c \ud558\uba74 \ud074\ub85c\uc800\uac00 \uae30\uc5b5\ud558\ub294 \ubcc0\uc218, \uac1d\uccb4\uc758 \uac12\uc774 \ubcc0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"createCounter \ud568\uc218\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c count \ubcc0\uc218\ub97c \uc0dd\uc131\ud558\uace0, \uc774 \ubcc0\uc218\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \ud074\ub85c\uc800\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc5ec\uae30\uc11c \ud074\ub85c\uc800\ub294 \ub9ac\ud134\ub418\ub294 \ud568\uc218\uc785\ub2c8\ub2e4"),(0,o.kt)("p",null,"\ub9ac\ud134\uc774 \ub420 \ub54c \ud074\ub85c\uc800\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"return function () {};\n")),(0,o.kt)("p",null,"count \ubcc0\uc218\ub294 \ud074\ub85c\uc800\uc5d0 \uc758\ud574 \ucc38\uc870\ub418\ubbc0\ub85c"),(0,o.kt)("p",null,"\ud074\ub85c\uc800\uac00 \uae30\uc5b5\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub530\ub77c\uc11c counter \ud568\uc218\uac00 \uc2e4\ud589\ub420 \ub54c \ub9c8\ub2e4, counter \ud568\uc218\uc758 count \ubcc0\uc218 \uac12\uc744 \uc720\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function createCounter() {\n  let count = 0;\n  return function () {\n    return ++count;\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter()); // 1console.log(counter());// 2\n")),(0,o.kt)("h2",{id:"2-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8-\uc5d4\uc9c4\uc740-\ud074\ub85c\uc800\uac00-\uae30\uc5b5\ud560-\ubcc0\uc218-\uac1d\uccb4\ub97c-\ubcf5\uc0ac\ud558\uc5ec-\uc800\uc7a5\ud569\ub2c8\ub2e4"},"2. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \ud074\ub85c\uc800\uac00 \uae30\uc5b5\ud560 \ubcc0\uc218, \uac1d\uccb4\ub97c \ubcf5\uc0ac\ud558\uc5ec \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \ub54c \ubcf5\uc0ac\ub41c \uac12\uc740 \ud074\ub85c\uc800\uac00 \uc0dd\uc131\ub41c \uc2dc\uc810\uc758 \uac12\uc73c\ub85c \uc720\uc9c0\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"double \ud568\uc218\uac00 \uc2e4\ud589\ub420 \ub54c\ub9c8\ub2e4, number ","*"," factor \uacc4\uc0b0\uc744 \uc218\ud589\ud558\ub294\ub370"),(0,o.kt)("p",null,"\uc774 \ub54c factor \ubcc0\uc218\uc758 \uac12\uc740 \ud074\ub85c\uc800\uc5d0 \uc758\ud574 \ucc38\uc870\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 factor \ubcc0\uc218\uc758 \uac12\uc744 \ubcc0\uacbd\ud574\ub3c4"),(0,o.kt)("p",null,"double \ud568\uc218\uac00 \ubc18\ud658\ud55c \ud074\ub85c\uc800\ub294 \uc5ec\uc804\ud788 \uae30\uc874\uc758 factor \uac12\uc744 \ucc38\uc870\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function createMultiplier(factor) {\n  return function (number) {\n    return number * factor;\n  };\n}\n\nconst double = createMultiplier(2);\nconsole.log(double(3)); // 6console.log(double(4));// 8\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\ub9ac\uc561\ud2b8\uc5d0\uc11c\ub294 JSX\ub97c \ub9ac\ud134\ud560 \ub54c\uc640 useState\ub97c \uc0ac\uc6a9\ud560 \ub54c \ubaa8\ub450 \ud074\ub85c\uc800\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"JSX\ub97c\xa0\ubc18\ud658\ud560\xa0\ub54c\xa0\ud074\ub85c\uc800\uac00\xa0\uc0dd\uc131\ub418\ub294\xa0\uc774\uc720\ub294\xa0JSX\xa0\ucf54\ub4dc\xa0\ub0b4\uc5d0\uc11c\xa0\uc678\ubd80\xa0\ubcc0\uc218\ub098\xa0\uc0c1\ud0dc\ub97c\xa0\ucc38\uc870\ud560\xa0\uc218\xa0\uc788\uae30\xa0\ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub807\uac8c\xa0\ucc38\uc870\ub41c\xa0\uc678\ubd80\xa0\ubcc0\uc218\ub098\xa0\uc0c1\ud0dc\ub294\xa0\ud574\ub2f9\xa0\ucef4\ud3ec\ub10c\ud2b8\uc758\xa0\ub80c\ub354\ub9c1\uc774\xa0\uc644\ub8cc\ub41c\xa0\ud6c4\uc5d0\ub3c4\xa0\uba54\ubaa8\ub9ac\uc5d0\xa0\uc720\uc9c0\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub97c\xa0\uac00\ub2a5\ud558\uac8c\xa0\ud558\ub294\xa0\uac83\uc774\xa0\ud074\ub85c\uc800\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub610\ud55c\xa0useState\ub97c\xa0\uc0ac\uc6a9\ud560\xa0\ub54c\uc5d0\ub3c4\xa0\ud074\ub85c\uc800\uac00\xa0\uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"useState\ub294\xa0\ud568\uc218\ud615\xa0\ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\xa0\uc0c1\ud0dc\ub97c\xa0\uad00\ub9ac\ud558\uae30\xa0\uc704\ud55c\xa0Hook\uc774\uba70,"),(0,o.kt)("p",null,"\uc774\xa0Hook\uc744\xa0\ud638\ucd9c\ud558\uba74\xa0\uc0c1\ud0dc\ub97c\xa0\uc800\uc7a5\ud558\uae30\xa0\uc704\ud55c\xa0\uba54\ubaa8\ub9ac\xa0\uacf5\uac04\uacfc\xa0\uc774\xa0\uc0c1\ud0dc\ub97c\xa0\ubcc0\uacbd\ud558\ub294\xa0\ud568\uc218\uac00\xa0\uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\xa0\ub54c\xa0\uc0dd\uc131\ub41c\xa0\ud568\uc218\ub294\xa0\ud574\ub2f9\xa0\ucef4\ud3ec\ub10c\ud2b8\xa0\ub0b4\uc5d0\uc11c\ub9cc\xa0\ud638\ucd9c\ub418\uae30\xa0\ub54c\ubb38\uc5d0,\xa0\ud574\ub2f9\xa0\ud568\uc218\uac00\xa0\ucc38\uc870\ud558\ub294\xa0\uc0c1\ud0dc\uac12\uc740\xa0\ud074\ub85c\uc800\ub97c\xa0\ud1b5\ud574\xa0\uc720\uc9c0\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub530\ub77c\uc11c\xa0JSX\ub97c\xa0\ubc18\ud658\ud560\xa0\ub54c\uc640\xa0useState\ub97c\xa0\uc0ac\uc6a9\ud560\xa0\ub54c\xa0\ubaa8\ub450\xa0\ud074\ub85c\uc800\uac00\xa0\uc0dd\uc131\ub418\uba70,\xa0\uc774\ub97c\xa0\ud1b5\ud574\xa0\uc678\ubd80\xa0\ubcc0\uc218\ub098\xa0\uc0c1\ud0dc\ub97c\xa0\uc720\uc9c0\ud560\xa0\uc218\xa0\uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);