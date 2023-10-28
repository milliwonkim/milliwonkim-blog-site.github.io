"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[845],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={title:"TypeScript \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785"},a=void 0,l={unversionedId:"front-end-development/typescript/1",id:"front-end-development/typescript/1",title:"TypeScript \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",description:"\uc81c\ub124\ub9ad \ud0c0\uc785\uc774\ub77c\uace0\ub3c4 \ubd88\ub9bd\ub2c8\ub2e4.",source:"@site/docs/front-end-development/typescript/1.md",sourceDirName:"front-end-development/typescript",slug:"/front-end-development/typescript/1",permalink:"/docs/front-end-development/typescript/1",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1698471235,formattedLastUpdatedAt:"Oct 28, 2023",frontMatter:{title:"TypeScript \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785"},sidebar:"developmentSidebar",previous:{title:"TypeScript",permalink:"/docs/category/typescript"},next:{title:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294 \ubb38\uc7a5(function ...() {...})\ubcf4\ub2e4\ub294 \ud568\uc218\ud45c\ud604\uc2dd(const ... () => {})\uc744 \uc4f0\uc790!",permalink:"/docs/front-end-development/typescript/2"}},s={},p=[],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc81c\ub124\ub9ad \ud0c0\uc785\uc774\ub77c\uace0\ub3c4 \ubd88\ub9bd\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ucd1d 3\uac00\uc9c0\uc785\ub2c8\ub2e4."),(0,o.kt)("h1",{id:"1-partial"},"1. Partial"),(0,o.kt)("p",null,"Person \ud0c0\uc785 \uc911\uc5d0\uc11c \ubd80\ubd84\uc9d1\ud569 \ud0c0\uc785\uc73c\ub85c \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("p",null,"\ud558\ub098\ub9cc \ub9cc\uc871\ud574\ub3c4 \ub428"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Person {\n    name: string;\n    age: number;\n    hasGirlFriend?: boolean;\n}\n\ntype MyInfo = Partial<Person>;\n\n// \uac00\ub2a5const kiwon: MyInfo = {}\n\n// \uac00\ub2a5const kiwon: MyInfo = {\n    name: 'kiwon kim',\n    age: 29,\n}\n\n// \uac00\ub2a5const kiwon: MyInfo = {\n    name: 'kiwon kim',\n    age: 29,\n    hasGirlFriend: true,\n}\n\n// \ubd88\uac00\ub2a5const kiwon: MyInfo = {\n    name: 'kiwon',\n    email: 'address@adress.com'\n}\n/*\nType '{ name: string; email: string; }' is not assignable to type 'Partial<Person>'.\n  Object literal may only specify known properties,\n  and 'email' does not exist in type 'Partial<Person>'.(2322)\n*/\n")),(0,o.kt)("h1",{id:"2-pick"},"2. Pick"),(0,o.kt)("p",null,"Person \ud0c0\uc785\uc5d0\uc11c \ud2b9\uc815 \ud0c0\uc785 \ud558\ub098 \uc774\uc0c1\uc744 \uac00\uc838\uc62c \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Person {\n    name: string;\n    age: number;\n    hasGirlFriend?: boolean;\n}\n\n// \uac00\ub2a5const kiwon: Pick<Person, 'name'> = {\n    name: 'kiwon kim'\n}\n\n// \uac00\ub2a5const kiwon: Pick<Person, 'name' | 'age'> = {\n    name: 'kiwon kim',\n    age: 29,\n}\n\n// \uac00\ub2a5const kiwon: Pick<Person, 'name' | 'age' | 'hasGirlFriend'> = {\n    name: 'kiwon kim',\n    age: 29,\n    hasGirlFriend: true,\n}\n\n// \ubd88\uac00\ub2a5const kiwon: Pick<Person, 'age' | 'hasGirlFriend'> = {\n    name: 'kiwon kim',\n    age: 29,\n    hasGirlFriend: true,\n}\n\n// \ubd88\uac00\ub2a5const kiwon: Pick<Person, 'name' | \"birth\"> = {\n    name: 'kiwon',\n}\n\n/*\nProperty 'birth' is missing in type '{ name: string; }'\nbut required in type 'Pick<Person, \"name\" | \"birth\">'.(2741)\n*/\n")),(0,o.kt)("h1",{id:"3-omit"},"3. Omit"),(0,o.kt)("p",null,"Person \ud0c0\uc785\uc5d0\uc11c \ud2b9\uc815 \ud558\ub098 \uc774\uc0c1\uc758 \ud0c0\uc785\uc744 \uc81c\uac70\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("p",null,"Omit\uc73c\ub85c \uc120\ud0dd\ud55c props\uc758 \ud0c0\uc785 \ub300\uc2e0\uc5d0 \ub2e4\ub978 \ud0c0\uc785\uc744 \uc9d1\uc5b4\ub123\uc744 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Person {\n    name: string;\n    age: number;\n    hasGirlFriend?: boolean;\n}\n\n// \uac00\ub2a5const kiwon: Omit<Person, 'name'> = {\n    age: 29,\n    name: 59\n}\n")))}u.isMDXComponent=!0}}]);