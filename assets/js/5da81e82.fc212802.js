"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[5333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Error - Hydration failed because the initial UI does not match what was renderes on the server\ub97c \ud574\uacb0\ud574\ubcf4\uc790"},i=void 0,l={unversionedId:"front-end-development/nextjs/6",id:"front-end-development/nextjs/6",title:"Error - Hydration failed because the initial UI does not match what was renderes on the server\ub97c \ud574\uacb0\ud574\ubcf4\uc790",description:"Next.js \uacf5\uc2dd\ubb38\uc11c\uc5d0 \ub530\ub974\uba74 \uc774\ub7f4 \ub54c \uc774 \uc5d0\ub7ec\uac00 \ub09c\ub2e4\uace0 \ud55c\ub2e4",source:"@site/docs/front-end-development/nextjs/6.md",sourceDirName:"front-end-development/nextjs",slug:"/front-end-development/nextjs/6",permalink:"/docs/front-end-development/nextjs/6",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1698471235,formattedLastUpdatedAt:"Oct 28, 2023",frontMatter:{title:"Error - Hydration failed because the initial UI does not match what was renderes on the server\ub97c \ud574\uacb0\ud574\ubcf4\uc790"},sidebar:"developmentSidebar",previous:{title:"Next.js\uc5d0\uc11c \u201cminified react error",permalink:"/docs/front-end-development/nextjs/5"},next:{title:"next-redux-wrapper\ub97c \uc774\uc6a9\ud574\uc11c Server\uc640 Client \uac04\uc758 Redux \uacf5\uc720\ud558\uae30",permalink:"/docs/front-end-development/nextjs/7"}},s={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Next.js \uacf5\uc2dd\ubb38\uc11c\uc5d0 \ub530\ub974\uba74 \uc774\ub7f4 \ub54c \uc774 \uc5d0\ub7ec\uac00 \ub09c\ub2e4\uace0 \ud55c\ub2e4"),(0,o.kt)("p",null,"Hydration errors can occur from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Incorrect nesting of HTML tags",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<p>"),"\xa0nested in another\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"<p>"),"\xa0tag"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),"\xa0nested in a\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"<p>"),"\xa0tag"))),(0,o.kt)("li",{parentName:"ul"},"Using checks like\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"typeof window !== 'undefined'"),"\xa0in your rendering logic"),(0,o.kt)("li",{parentName:"ul"},"Using browser-only APIs like\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"window"),"\xa0or\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"localStorage"),"\xa0in your rendering logic"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/react/issues/24430"},"Browser extensions"),"\xa0modifying the HTML"),(0,o.kt)("li",{parentName:"ul"},"Incorrectly configured\xa0",(0,o.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/app/building-your-application/styling/css-in-js"},"CSS-in-JS libraries"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ensure your code is following\xa0",(0,o.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples"},"our official examples")))),(0,o.kt)("li",{parentName:"ul"},"Incorrectly configured Edge/CDN that attempts to modify the html response, such as Cloudflare\xa0",(0,o.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/speed/optimization/content/auto-minify/"},"Auto Minify"))),(0,o.kt)("p",null,"\ud574\uacb0\ubc29\ubc95"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React\uac00 \ub80c\ub354\ub9c1 \ub418\uba74 \uadf8 \ub54c UI\ub3c4 \ub80c\ub354\ub9c1\uc744 \ubcf4\uc7a5\ud558\ub294 \ubc29\uc2dd")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState, useEffect } from "react";\n\nexport default function App() {\n  const [isClient, setIsClient] = useState(false);\n\n  useEffect(() => {\n    setIsClient(true);\n  }, []);\n\n  return <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1>;\n}\n')))}u.isMDXComponent=!0}}]);