"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[6190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(p,".").concat(u)]||m[u]||k[u]||i;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Next.js 13 + Kakao Map API \uc2dc CORS \ubb38\uc81c",last_update:{date:"10/27/2023",author:"kiwon kim"},authors:[{name:"kiwonkim"},{url:"https://github.com/milliwonkim"}]},l=void 0,o={unversionedId:"front-end-development/nextjs/2",id:"front-end-development/nextjs/2",title:"Next.js 13 + Kakao Map API \uc2dc CORS \ubb38\uc81c",description:"\ubb38\uc81c\uc0c1\ud669",source:"@site/docs/front-end-development/nextjs/2.md",sourceDirName:"front-end-development/nextjs",slug:"/front-end-development/nextjs/2",permalink:"/docs/front-end-development/nextjs/2",draft:!1,tags:[],version:"current",lastUpdatedBy:"kiwon kim",lastUpdatedAt:1698364800,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{title:"Next.js 13 + Kakao Map API \uc2dc CORS \ubb38\uc81c",last_update:{date:"10/27/2023",author:"kiwon kim"},authors:[{name:"kiwonkim"},{url:"https://github.com/milliwonkim"}]},sidebar:"developmentSidebar",previous:{title:"Will fallback of getStaticPaths in Next.js work on Static Sites like S3 or Github Pages?",permalink:"/docs/front-end-development/nextjs/18"},next:{title:"Next.js\uc758 \ub80c\ub354\ub9c1 \uacfc\uc815 \ud30c\uc545\ud558\uae30",permalink:"/docs/front-end-development/nextjs/3"}},p={},c=[{value:"\ubb38\uc81c\uc0c1\ud669",id:"\ubb38\uc81c\uc0c1\ud669",level:2},{value:"\uc77c\ubc18 script \ud0dc\uadf8\uc640 Next.js\uc758 \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\uc758 \ucc28\uc774\uac00 \ubb58\uae4c",id:"\uc77c\ubc18-script-\ud0dc\uadf8\uc640-nextjs\uc758-\uc2a4\ud06c\ub9bd\ud2b8-\ud0dc\uadf8\uc758-\ucc28\uc774\uac00-\ubb58\uae4c",level:2},{value:"\ud574\uacb0 \ubc29\ubc95",id:"\ud574\uacb0-\ubc29\ubc95",level:3},{value:"\uc65c \uc774\uac83 \ub54c\ubb38\uc5d0 CORS\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub098?",id:"\uc65c-\uc774\uac83-\ub54c\ubb38\uc5d0-cors\uc5d0\ub7ec\uac00-\ubc1c\uc0dd\ud560-\uc218-\uc788\ub098",level:2}],s={toc:c},m="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ubb38\uc81c\uc0c1\ud669"},"\ubb38\uc81c\uc0c1\ud669"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// pages/_document.tsx\n<Script\n  src={"dapi.kakao.com...apikey=SOMETHING"}\n  strategy="beforeInteractive"\n/>\n')),(0,a.kt)("p",null,"\uc774\ub807\uac8c \uac1c\ubc1c\ud558\uace0 \uc788\uc5c8\uace0, \uce74\uce74\uc624 api \ub97c \uc774\uc6a9\ud558\uae30 \uc704\ud55c \uac1c\ubc1c\uc790 \ud398\uc774\uc9c0\uc5d0\uc11c URL\uc744 \ub4f1\ub85d\ud558\uace0 \uc788\uc5c8\ub2e4"),(0,a.kt)("p",null,"\uadf8\ub7f0\ub300 CORS\uc5d0\ub7ec\ub97c \ub9cc\ub0ac\ub2e4."),(0,a.kt)("p",null,"\uc751\ub2f5\ucf54\ub4dc\ub3c4 200\uc73c\ub85c \ub5a8\uc5b4\uc9c0\uae34\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc2a4\ud06c\ub9bd\ud06c \ub85c\ub529 \ubb38\uc81c\uc77c \uc218\ub3c4 \uc788\uc5b4\uc11c \uc77c\ubc18 script \ud0dc\uadf8\ub85c \ubc14\uafe8\ub294\ub370 \ubb38\uc81c\uac00 \ud574\uacb0\ub418\uc5c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// pages/_document.tsx\n<script src={"dapi.kakao.com...apikey=SOMETHING"} type="text/javascript" />\n')),(0,a.kt)("h2",{id:"\uc77c\ubc18-script-\ud0dc\uadf8\uc640-nextjs\uc758-\uc2a4\ud06c\ub9bd\ud2b8-\ud0dc\uadf8\uc758-\ucc28\uc774\uac00-\ubb58\uae4c"},"\uc77c\ubc18 script \ud0dc\uadf8\uc640 Next.js\uc758 \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\uc758 \ucc28\uc774\uac00 \ubb58\uae4c"),(0,a.kt)("p",null,"Next.js\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"Script")," \ucef4\ud3ec\ub10c\ud2b8\uc640 \uc77c\ubc18\uc801\uc778 ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," \ud0dc\uadf8 \uc0ac\uc774\uc758 \ub3d9\uc791 \ucc28\uc774\ub85c \uc778\ud574 CORS \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubb38\uc81c\uc758 \uc8fc\uc694 \uc6d0\uc778\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\ub85c\ub529 \uc804\ub7b5\uc758 \ucc28\uc774"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Script")," \ucef4\ud3ec\ub10c\ud2b8\ub294 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"li"},'strategy="beforeInteractive"'),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub85c\ub4dc\ud569\ub2c8\ub2e4. \uc774\ub294 Next.js \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 JavaScript \ubc88\ub4e4\uc774 \ub85c\ub4dc\ub418\uae30 \uc804\uc5d0 \uc678\ubd80 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub85c\ub4dc\ud558\ub824\uace0 \uc2dc\ub3c4\ud569\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 \uc77c\ubd80 \uc678\ubd80 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294 \uc608\uc0c1\uce58 \ubabb\ud55c \ub3d9\uc791\uc774\ub098 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubc18\uba74, \uc77c\ubc18\uc801\uc778 ",(0,a.kt)("inlineCode",{parentName:"li"},"<script>")," \ud0dc\uadf8\ub294 \ubb38\uc11c\uc758 \ud30c\uc2f1\uacfc \ub3d9\uc2dc\uc5d0 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub85c\ub4dc\ud558\uace0 \uc2e4\ud589\ud569\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc2e4\ud589 \uc704\uce58"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Script")," \ucef4\ud3ec\ub10c\ud2b8\ub294 React \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub77c\uc774\ud504\uc0ac\uc774\ud074 \ub0b4\uc5d0\uc11c \ub3d9\uc791\ud558\ubbc0\ub85c, \uc2a4\ud06c\ub9bd\ud2b8\uc758 \ub85c\ub529\uacfc \uc2e4\ud589\uc774 \uc608\uc0c1\ud55c \uc704\uce58\uc5d0\uc11c \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<script>")," \ud0dc\uadf8\ub294 HTML \ubb38\uc11c \ub0b4\uc5d0\uc11c \uba85\uc2dc\uc801\uc73c\ub85c \uc704\uce58\uac00 \uc815\ud574\uc838 \uc788\uc73c\ubbc0\ub85c, \uc2a4\ud06c\ub9bd\ud2b8\uc758 \ub85c\ub529\uacfc \uc2e4\ud589 \uc704\uce58\uac00 \uba85\ud655\ud569\ub2c8\ub2e4."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"CORS \uc815\ucc45"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc77c\ubd80 \uc678\ubd80 \uc2a4\ud06c\ub9bd\ud2b8\ub294 \ub3d9\uc801\uc73c\ub85c \uc0dd\uc131\ub41c \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\uc5d0 \ub300\ud574 CORS \uc815\ucc45\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"li"},"Script")," \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c \ub3d9\uc801\uc73c\ub85c \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\ub97c \uc0dd\uc131\ud558\ubbc0\ub85c, \uc774\ub85c \uc778\ud574 CORS \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubc18\uba74, ",(0,a.kt)("inlineCode",{parentName:"li"},"<script>")," \ud0dc\uadf8\ub294 \uc815\uc801\uc73c\ub85c HTML \ubb38\uc11c\uc5d0 \ud3ec\ud568\ub418\ubbc0\ub85c, \uc774\ub7ec\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"\ud574\uacb0-\ubc29\ubc95"},"\ud574\uacb0 \ubc29\ubc95"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Script")," \ucef4\ud3ec\ub10c\ud2b8\uc758 ",(0,a.kt)("inlineCode",{parentName:"li"},"strategy")," \uc18d\uc131\uc744 ",(0,a.kt)("inlineCode",{parentName:"li"},"afterInteractive"),"\ub85c \uc124\uc815\ud558\uc5ec, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 JavaScript \ubc88\ub4e4\uc774 \ub85c\ub4dc\ub41c \ud6c4\uc5d0 \uc678\ubd80 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub85c\ub4dc\ud558\ub3c4\ub85d \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud544\uc694\ud55c \uacbd\uc6b0, ",(0,a.kt)("inlineCode",{parentName:"li"},"<script>")," \ud0dc\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubb38\uc81c\ub97c \ud68c\ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uacb0\ub860\uc801\uc73c\ub85c, Next.js\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"Script")," \ucef4\ud3ec\ub10c\ud2b8\uc640 \uc77c\ubc18\uc801\uc778 ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," \ud0dc\uadf8 \uc0ac\uc774\uc758 \ub3d9\uc791 \ucc28\uc774\ub85c \uc778\ud574 \uc77c\ubd80 \uc678\ubd80 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294 CORS \uc5d0\ub7ec\ub098 \ub2e4\ub978 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c, \uc678\ubd80 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub294 \ud574\ub2f9 \uc2a4\ud06c\ub9bd\ud2b8\uc758 \ub3d9\uc791 \ubc29\uc2dd\uacfc \ud638\ud658\uc131\uc744 \uace0\ub824\ud558\uc5ec \uc801\uc808\ud55c \ubc29\ubc95\uc744 \uc120\ud0dd\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\uc65c-\uc774\uac83-\ub54c\ubb38\uc5d0-cors\uc5d0\ub7ec\uac00-\ubc1c\uc0dd\ud560-\uc218-\uc788\ub098"},"\uc65c \uc774\uac83 \ub54c\ubb38\uc5d0 CORS\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub098?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"Script")," \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c \ub3d9\uc801\uc73c\ub85c \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\ub97c \uc0dd\uc131\ud558\ubbc0\ub85c, \uc774\ub85c \uc778\ud574 CORS \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"CORS(Cross-Origin Resource Sharing)\ub294 \uc6f9 \ud398\uc774\uc9c0\uc758 \uc694\uccad\ub41c \ucd9c\ucc98\uc640 \uc790\uc6d0\uc758 \ucd9c\ucc98\uac00 \ub2e4\ub97c \ub54c, \ud574\ub2f9 \uc790\uc6d0\uc5d0 \ub300\ud55c \uc811\uadfc \uad8c\ud55c\uc744 \ube0c\ub77c\uc6b0\uc800\uc5d0\uac8c \uc54c\ub824\uc8fc\ub294 \ubcf4\uc548 \ud45c\uc900\uc785\ub2c8\ub2e4. \uc6f9 \ud398\uc774\uc9c0\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ub3d9\uc77c \ucd9c\ucc98 \uc815\ucc45(Same-Origin Policy)\uc744 \ub530\ub974\uae30 \ub54c\ubb38\uc5d0, \ub2e4\ub978 \ucd9c\ucc98\uc758 \uc790\uc6d0\uc744 \uc694\uccad\ud560 \ub54c\ub294 \ud574\ub2f9 \uc790\uc6d0\uc758 \uc11c\ubc84\uac00 CORS \ud5e4\ub354\ub97c \ud3ec\ud568\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"Next.js\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"Script")," \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub3d9\uc801\uc73c\ub85c \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\ub97c \uc0dd\uc131\ud560 \ub54c CORS \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\ub294 \uc8fc\uc694 \uc774\uc720\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\ub3d9\uc801 \uc0dd\uc131\ub41c \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Script")," \ucef4\ud3ec\ub10c\ud2b8\ub294 React\uc758 \ub80c\ub354\ub9c1 \uacfc\uc815 \uc911\uc5d0 \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\ub97c \ub3d9\uc801\uc73c\ub85c DOM\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4. \uc774 \ub3d9\uc801\uc73c\ub85c \uc0dd\uc131\ub41c \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\ub294 \uae30\uc874\uc758 HTML \ubb38\uc11c\uc5d0 \uc815\uc801\uc73c\ub85c \ud3ec\ud568\ub41c ",(0,a.kt)("inlineCode",{parentName:"li"},"<script>")," \ud0dc\uadf8\uc640\ub294 \ub2e4\ub974\uac8c \ub3d9\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\ucd94\uac00\uc801\uc778 \uc694\uccad"),": \ub3d9\uc801\uc73c\ub85c \uc0dd\uc131\ub41c \uc2a4\ud06c\ub9bd\ud2b8\ub294 \ucd94\uac00\uc801\uc778 \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \ud1b5\ud574 \uc790\uc6d0\uc744 \uac00\uc838\uc635\ub2c8\ub2e4. \uc774 \ub54c, \ud574\ub2f9 \uc790\uc6d0\uc758 \uc11c\ubc84\uac00 CORS \ud5e4\ub354\ub97c \uc81c\uacf5\ud558\uc9c0 \uc54a\uac70\ub098, \uc694\uccad\ud55c \ucd9c\ucc98\ub97c \ud5c8\uc6a9\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0 CORS \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\ube0c\ub77c\uc6b0\uc800\uc758 \ubcf4\uc548 \uc815\ucc45"),": \ube0c\ub77c\uc6b0\uc800\ub294 \uc0ac\uc6a9\uc790\uc758 \ubcf4\uc548\uc744 \uc704\ud574 \ub3d9\uc77c \ucd9c\ucc98 \uc815\ucc45\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c, \ub2e4\ub978 \ucd9c\ucc98\uc758 \uc790\uc6d0\uc744 \uc694\uccad\ud560 \ub54c\ub294 \ud574\ub2f9 \uc790\uc6d0\uc758 \uc11c\ubc84\uc5d0\uc11c \uc801\uc808\ud55c CORS \ud5e4\ub354\ub97c \uc81c\uacf5\ud574\uc57c \ud569\ub2c8\ub2e4. \ub3d9\uc801\uc73c\ub85c \uc0dd\uc131\ub41c \uc2a4\ud06c\ub9bd\ud2b8 \ud0dc\uadf8\uac00 \uc774\ub7ec\ud55c \ud5e4\ub354 \uc5c6\uc774 \ub2e4\ub978 \ucd9c\ucc98\uc758 \uc790\uc6d0\uc744 \uc694\uccad\ud558\uba74, \ube0c\ub77c\uc6b0\uc800\ub294 \uc774\ub97c \ucc28\ub2e8\ud558\uace0 CORS \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ub530\ub77c\uc11c, ",(0,a.kt)("inlineCode",{parentName:"p"},"Script")," \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc678\ubd80 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub85c\ub4dc\ud560 \ub54c CORS \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4\uba74, \ud574\ub2f9 \uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc11c\ubc84 \uc124\uc815\uc744 \ud655\uc778\ud558\uac70\ub098, \ud544\uc694\ud55c \uacbd\uc6b0 \uc815\uc801 ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," \ud0dc\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubb38\uc81c\ub97c \ud68c\ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);