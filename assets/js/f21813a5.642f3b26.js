"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[7357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const o={title:"Jest + Testing Library +React\uc5d0\uc11c scrollTo is not a function \uc5d0\ub7ec\ub97c \ub9c8\uc8fc\ucce4\uc744 \ub54c?"},a=void 0,i={unversionedId:"front-end-development/reactjs/25",id:"front-end-development/reactjs/25",title:"Jest + Testing Library +React\uc5d0\uc11c scrollTo is not a function \uc5d0\ub7ec\ub97c \ub9c8\uc8fc\ucce4\uc744 \ub54c?",description:"\uacb0\ub860",source:"@site/docs/front-end-development/reactjs/25.md",sourceDirName:"front-end-development/reactjs",slug:"/front-end-development/reactjs/25",permalink:"/docs/front-end-development/reactjs/25",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1698473076,formattedLastUpdatedAt:"Oct 28, 2023",frontMatter:{title:"Jest + Testing Library +React\uc5d0\uc11c scrollTo is not a function \uc5d0\ub7ec\ub97c \ub9c8\uc8fc\ucce4\uc744 \ub54c?"},sidebar:"developmentSidebar",previous:{title:"Cypress vs Playwright - 2023\ub144\uc5d0\ub294 \uc5b4\ub5a4 \ub9ac\uc561\ud2b8 \ud14c\uc2a4\ud305 \ud234\uc744 \uc368\uc57c\ud560\uae4c? (Feat. Cypress vs Playwright - Which is best for E2E testing)",permalink:"/docs/front-end-development/reactjs/24"},next:{title:"react-hook-form + @testing-library/react + Jest \uc5b4\ub5bb\uac8c \ud14c\uc2a4\ud2b8 \ud558\uc9c0?",permalink:"/docs/front-end-development/reactjs/26"}},c={},s=[{value:"\uacb0\ub860",id:"\uacb0\ub860",level:3}],p={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,l.kt)(m,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,l.kt)("p",null,"Element\uc5d0 scroll\uc5d0 \ubaa8\ud0b9\ud55c \ud568\uc218\ub97c \ub123\ub294\ub2e4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"describe('\ubc84\ud2bc\uc744 \ud074\ub9ad\ud55c\ub2e4' () => {\n    Element.prototype.scroll = jest.fn();\n    render(<Button />)\n    expect(...).toBeTruthy()\n})\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"MDN\uc5d0\uc11c Element\uac00 \ubb54\uac00\ud558\ub2c8 \ucc3e\uc544\ubcf4\uc558\ub2e4."),(0,l.kt)("p",null,"Element\ub294\xa0\ubb38\uc11c\uc758 \ubaa8\ub4e0\xa0Element\xa0\uac1d\uccb4(\uc989, Element\ub97c \ub098\ud0c0\ub0b4\ub294 \uac1d\uccb4)\uac00 \uc0c1\uc18d\ub418\ub294 \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \uae30\ubcf8 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ubaa8\ub4e0 \uc885\ub958\uc758\xa0Element\uc5d0 \uacf5\ud1b5\ub41c \ubc29\ubc95\uacfc \uc18d\uc131\ub9cc \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ubcf4\ub2e4 \uad6c\uccb4\uc801\uc778 \ud074\ub798\uc2a4\uac00 Element\uc5d0\uc11c \uc0c1\uc18d\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, HTMLElement\uc758 \uae30\ubcf8 \uc778\ud130\ud398\uc774\uc2a4\ub294 HTMLElement\uc758 \uae30\ubcf8 \uc778\ud130\ud398\uc774\uc2a4\uc778 \ubc18\uba74,"),(0,l.kt)("p",null,"SVGElement\uc758 \uae30\ubcf8 \uc778\ud130\ud398\uc774\uc2a4\ub294 SVGElement\uc758 \uae30\ubcf8 \uc778\ud130\ud398\uc774\uc2a4\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uae30\ub2a5\uc740 \ud074\ub798\uc2a4 \uacc4\uce35 \uc544\ub798\uc5d0 \uc9c0\uc815\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(1911).Z,width:"2000",height:"364"})),(0,l.kt)("p",null,"\uc774\uac74 \ub610 \ubb54\uc18c\ub9ac\uc778\uac00.. \uc2f6\uc5b4\uc11c \ub9ac\uc561\ud2b8 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub610 \ubd24\ub2e4."),(0,l.kt)("p",null,"\ub9d0\ud558\uc790\uba74 \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 Element \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0c1\uc18d\ubc1b\ub294\uac8c HTMLElement, SVGElement\uc774\uace0,"),(0,l.kt)("p",null,"\ub098\uba38\uc9c0 Element\ub4e4\uc740 HTMLElement \ud639\uc740 SVGElement\uc744 \uc0c1\uc18d\ubc1b\ub294\ub2e4\ub77c\ub294 \ub73b\uc73c\ub85c \ubcf4\uc778\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(2739).Z,width:"2000",height:"1548"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(6116).Z,width:"2000",height:"1427"})),(0,l.kt)("p",null,"\uadf8\ub7fc \uadf8 Element\ub77c\ub294 \uac1d\uccb4\ub294 \ubb54\uac00 \ud558\ub2c8..."),(0,l.kt)("p",null,"Element\ub294 \ub178\ub4dc\uc758 \ud2b9\uc815 \ud0c0\uc785 \uc911\uc5d0 \ud558\ub098\uc774\ub2e4."),(0,l.kt)("p",null,"DOM\uc758 text node, comment node, document node \ub4f1\uc744 \uc758\ubbf8\ud558\ub294 \uac83\uc774\uc5c8\ub2e4."),(0,l.kt)("p",null,'JS\ub85c document.getElementById("test")\ub77c\ub294 \uac83\uc774 \uc788\ub2e4\uba74, \uc774 \uac83\uc740 \ud558\ub098\uc758 \ub178\ub4dc\uc774\uba74\uc11c, Element\uc774\ub2e4.'))}u.isMDXComponent=!0},1911:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1-1a98dd300d1b234e344e98234ca5b358.png"},2739:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2-f7d6a60b36ef970b79eb53ab9f86e4e6.png"},6116:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3-217954c15367155f5a1a4f97c5c3f130.png"}}]);