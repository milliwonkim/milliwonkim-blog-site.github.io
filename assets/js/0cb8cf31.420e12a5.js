"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[3745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"react-query\uc5d0\uc11c useMutation\uc740 \ubb50\ud558\ub294 \uc560\uc77c\uae4c(feat. useQuery)"},i=void 0,l={unversionedId:"front-end-development/reactjs/36",id:"front-end-development/reactjs/36",title:"react-query\uc5d0\uc11c useMutation\uc740 \ubb50\ud558\ub294 \uc560\uc77c\uae4c(feat. useQuery)",description:"- useMutation\uc740 API\uc5d0\uac8c POST, PUT, DELETE \uc2dc \uc0ac\uc6a9",source:"@site/docs/front-end-development/reactjs/36.md",sourceDirName:"front-end-development/reactjs",slug:"/front-end-development/reactjs/36",permalink:"/milliwonkim/docs/front-end-development/reactjs/36",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1698471004,formattedLastUpdatedAt:"Oct 28, 2023",frontMatter:{title:"react-query\uc5d0\uc11c useMutation\uc740 \ubb50\ud558\ub294 \uc560\uc77c\uae4c(feat. useQuery)"},sidebar:"developmentSidebar",previous:{title:"\ub9ac\uc561\ud2b8\uc5d0\uc11c useState\uac00 \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud558\ub294 \ubc29\ubc95",permalink:"/milliwonkim/docs/front-end-development/reactjs/35"},next:{title:"React\ub85c Animation UI\ub97c \uc81c\ub300\ub85c \uadf8\ub9ac\ub294 \ubc29\ubc95(Feat. requestAnimationFrame API)",permalink:"/milliwonkim/docs/front-end-development/reactjs/37"}},c={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"useMutation\uc740 API\uc5d0\uac8c POST, PUT, DELETE \uc2dc \uc0ac\uc6a9")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// App.tsx\n\nconst client = new QueryClient({});\n\nreturn (\n    <QueryClientProvider client={client}>\n        <HomePage />\n    <QueryClientProvider>\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// HomePage.tsx\n\nconst { mutate } = useMutation(async (param: any) => {\n  const res = await axios.post("/some-url");\n  return res.data;\n});\n\nreturn (\n  <div>\n    <button\n      onClick={() =>\n        mutate(\n          { title: "TEST" },\n          {\n            onSuccess: (resp) => console.log(resp),\n            onError: (err) => console.log(err),\n          }\n        )\n      }\n    >\n      \ud074\ub9ad\n    </button>\n  </div>\n);\n')))}m.isMDXComponent=!0}}]);