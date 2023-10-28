"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[7065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"\ub9ac\uc561\ud2b8\uc5d0\uc11c useState\uac00 \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud558\ub294 \ubc29\ubc95"},c=void 0,i={unversionedId:"front-end-development/reactjs/35",id:"front-end-development/reactjs/35",title:"\ub9ac\uc561\ud2b8\uc5d0\uc11c useState\uac00 \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud558\ub294 \ubc29\ubc95",description:"\ubc11\uc758 \ucf54\ub4dc\ub294 useState \uc18c\uc2a4\ucf54\ub4dc\ub97c \uac04\uc18c\ud654\ud574\uc11c useState\uc758 \uc6d0\ub9ac\ub97c \uc124\uba85\ud558\ub294 \ucf54\ub4dc\uc785\ub2c8\ub2e4.",source:"@site/docs/front-end-development/reactjs/35.md",sourceDirName:"front-end-development/reactjs",slug:"/front-end-development/reactjs/35",permalink:"/docs/front-end-development/reactjs/35",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1698471235,formattedLastUpdatedAt:"Oct 28, 2023",frontMatter:{title:"\ub9ac\uc561\ud2b8\uc5d0\uc11c useState\uac00 \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud558\ub294 \ubc29\ubc95"},sidebar:"developmentSidebar",previous:{title:"\ub9ac\uc561\ud2b8\uc5d0\uc11c \ubd88\ubcc0\uc131\uc774 \ud544\uc694\ud55c \uc774\uc720",permalink:"/docs/front-end-development/reactjs/34"},next:{title:"react-query\uc5d0\uc11c useMutation\uc740 \ubb50\ud558\ub294 \uc560\uc77c\uae4c(feat. useQuery)",permalink:"/docs/front-end-development/reactjs/36"}},l={},s=[],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ubc11\uc758 \ucf54\ub4dc\ub294 useState \uc18c\uc2a4\ucf54\ub4dc\ub97c \uac04\uc18c\ud654\ud574\uc11c useState\uc758 \uc6d0\ub9ac\ub97c \uc124\uba85\ud558\ub294 \ucf54\ub4dc\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"Object.assign\uc744 \uc774\uc6a9\ud574\uc11c \uc0c8 \uac1d\uccb4\ub97c \uc0dd\uc131\ud574\uc11c state\uc5d0 \ud560\ub2f9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub530\ub77c\uc11c state\uc758 \ubd88\ubcc0\uc131\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"let currentState; // current state valuefunction useState(initialState) {\n// set current state to the initial state if it hasn't been set yet\nif (!currentState) {\n  currentState = initialState;\n}\n\nfunction setState(newState) {\n  // create a new state object by merging the current state with the new state\n  currentState = Object.assign({}, currentState, newState);\n\n  // trigger a re-render of the component\n  renderComponent();\n}\n\n// return the current state value and the setState function\nreturn [currentState, setState];\n")))}f.isMDXComponent=!0}}]);