"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[2628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,u=d["".concat(s,".").concat(f)]||d[f]||m[f]||a;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"|\uc640 &\uc758 \ucc28\uc774"},i=void 0,p={unversionedId:"front-end-development/typescript/5",id:"front-end-development/typescript/5",title:"|\uc640 &\uc758 \ucc28\uc774",description:"| => javascript\uc758 || \ub290\ub08c (or)",source:"@site/docs/front-end-development/typescript/5.md",sourceDirName:"front-end-development/typescript",slug:"/front-end-development/typescript/5",permalink:"/milliwonkim/docs/front-end-development/typescript/5",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1698471004,formattedLastUpdatedAt:"Oct 28, 2023",frontMatter:{title:"|\uc640 &\uc758 \ucc28\uc774"},sidebar:"developmentSidebar",previous:{title:"keyof \uc0ac\uc6a9\ubc95",permalink:"/milliwonkim/docs/front-end-development/typescript/4"},next:{title:"\ud0c0\uc785\uc744 \uc9d1\ud569\uc73c\ub85c \uc774\ud574\ud558\uae30",permalink:"/milliwonkim/docs/front-end-development/typescript/6"}},s={},l=[],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"| => javascript\uc758 || \ub290\ub08c (or)"),(0,o.kt)("p",null,"& => javascript\uc758 && \ub290\ub08c (and)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Person {\n  name: string;\n}\n\ninterface Liftspan {\n  birth: Date;\n  death?: Date;\n}\n\ntype PersonSpan = Person & Liftspan;\n\nconst spans: PersonSpan = {\n  name: \"kiwon\",\n  // birth: new Date('2022-06-09'),\n  // death: new Date('2122-06-09')\n};\n\n/**\nType '{ name: string; death: Date; }' is not assignable to type 'PersonSpan'.\nProperty 'birth' is missing in type '{ name: string; death: Date; }' \nbut required in type 'Liftspan'.(2322) input.tsx(6, 5): 'birth' is declared here.\n*/\ntype PersonSpan = Person | Liftspan;\n\nconst spans: PersonSpan = {\n  name: \"kiwon\",\n  // birth: new Date('2022-06-09'),\n  // death: new Date('2122-06-09')\n};\n\n/*\n\uc815\uc0c1 \uc791\ub3d9\n*/\n")))}m.isMDXComponent=!0}}]);