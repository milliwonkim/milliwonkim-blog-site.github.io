"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[5393],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>b});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(l),m=a,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return l?n.createElement(b,o(o({ref:t},s),{},{components:l})):n.createElement(b,o({ref:t},s))}));function b(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=l[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},2720:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=l(7462),a=(l(7294),l(3905));const r={title:"The Problems of Global Variable, \u201clet, const\u201d keyword and block level scope"},o=void 0,i={unversionedId:"front-end-development/javascript/4",id:"front-end-development/javascript/4",title:"The Problems of Global Variable, \u201clet, const\u201d keyword and block level scope",description:"The Problems of Global variable",source:"@site/docs/front-end-development/javascript/4.md",sourceDirName:"front-end-development/javascript",slug:"/front-end-development/javascript/4",permalink:"/docs/front-end-development/javascript/4",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1700996348,formattedLastUpdatedAt:"Nov 26, 2023",frontMatter:{title:"The Problems of Global Variable, \u201clet, const\u201d keyword and block level scope"},sidebar:"developmentSidebar",previous:{title:"ReferenceError at console.log",permalink:"/docs/front-end-development/javascript/3"},next:{title:"\ubaa8\ub358 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 - 9(\ud0c0\uc785 \ubcc0\ud658, \ub2e8\ucd95 \ud3c9\uac00), 10(\uac1d\uccb4 \ub9ac\ud130\ub7f4), 11(\uc6d0\uc2dc\uac12\uacfc \uac1d\uccb4 \ube44\uad50)",permalink:"/docs/front-end-development/javascript/5"}},p={},c=[{value:"The Problems of Global variable",id:"the-problems-of-global-variable",level:3},{value:"let, const keyword and block level scope",id:"let-const-keyword-and-block-level-scope",level:3}],s={toc:c},d="wrapper";function u(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"the-problems-of-global-variable"},"The Problems of Global variable"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"global variable"),(0,a.kt)("th",{parentName:"tr",align:null},"local variable"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operation(or running)"),(0,a.kt)("td",{parentName:"tr",align:null},"run without explicit call"),(0,a.kt)("td",{parentName:"tr",align:null},"exists after function runs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scope"),(0,a.kt)("td",{parentName:"tr",align:null},"global scope"),(0,a.kt)("td",{parentName:"tr",align:null},"lexical scope(function)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Lifecycle"),(0,a.kt)("td",{parentName:"tr",align:null},"same as lifecycle of global object"),(0,a.kt)("td",{parentName:"tr",align:null},"alive until lexical scope removed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Problems"),(0,a.kt)("td",{parentName:"tr",align:null},"Implicit combinations"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"(all codes can reference and change global variables)"),(0,a.kt)("p",null,"Long lifecycles\n(and therefore memory resources are also consumed as time goes by)"),(0,a.kt)("p",null,"Presence at endpoints on the scope chain\n(the slowest search for global variables)"),(0,a.kt)("p",null,"Namespace contamination\n(variable name conflict) | \uc2a4\ucf54\ud504\ub294 \ud56d\uc0c1 \uc881\uc740\uac8c \ub0ab\ub2e4\n\ub530\ub77c\uc11c \uc804\uc5ed\ubcc0\uc218\ubcf4\ub2e4 \uad8c\uc7a5\ub41c\ub2e4.\nscope would be alway better to be narrow\nso it is prefered compared to global scope |"),(0,a.kt)("p",null,"How to surpress global variable"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"immediately-invoked function: all codes wrapped with bracket(\u201d(\u201d) \u21d2 all variables are local variable of immediately-invoked function"),(0,a.kt)("li",{parentName:"ul"},"Namespace variable")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'var MYAPP = { name: "KIM" }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ES6 module"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ES6 module provide independent module scope of file itself",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"variable with var keyword is not global variable, and not window")))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},'// if adding  type="module"\n// javascript file run as module\n<script type="module" src="lib.mjs"><\/script>\n\n')))),(0,a.kt)("h3",{id:"let-const-keyword-and-block-level-scope"},"let, const keyword and block level scope"),(0,a.kt)("p",null,"problem of variable declared as var keyword"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u201cduplicate declaration\u201d enabled")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"var x = 1;\nvar y = 1;\n\n// var \ud0a4\uc6cc\ub4dc\ub85c \uc120\uc5b8\ub41c \ubcc0\uc218\ub294 \uac19\uc740 \uc2a4\ucf54\ud504 \ub0b4\uc5d0\uc11c \uc911\ubcf5 \uc120\uc5b8\uc744 \ud5c8\uc6a9// \ucd08\uae30\ud654\ubb38\uc774 \uc788\ub294 \ubcc0\uc218 \uc120\uc5b8\ubb38\uc740 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc5d0 \uc758\ud574 var \ud0a4\uc6cc\ub4dc\uac00 \uc5c6\ub294 \uac83\ucc98\ub7fc \ub3d9\uc791var x = 100\n\n// \ucd08\uae30\ud654 \ubb38\uc774 \uc5c6\ub294 \ubcc0\uc218 \uc120\uc5b8\ubb38\uc740 \ubb34\uc2dc\ub428var y\n\nconsole.log(x); // 100console.log(y)// 1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"function-level scope")),(0,a.kt)("p",null,"\uc624\uc9c1 \ud568\uc218 \uc2a4\ucf54\ud504\ub9cc \uc9c0\uc5ed\uc2a4\ucf54\ud504\ub85c \uc778\uc815"),(0,a.kt)("p",null,"\ube14\ub85d\uc2a4\ucf54\ud504\ub294 \ubb34\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"var i = 10;\n\n// for\ubb38\uc5d0\uc11c \uc120\uc5b8\ud55c i\ub294 \uc804\uc5ed \ubcc0\uc218\ub2e4.// \uc774\ubbf8 \uc120\uc5b8\ub41c \uc804\uc5ed\ubcc0\uc218\uac00 i\uac00 \uc788\uc73c\ubbc0\ub85c \uc911\ubcf5\uc120\uc5b8\ub428for (var i = 0; i <5; i++) {\n    console.log(i);// 0 1 2 3 4\n}\n\nconsole.log(i);// 5\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubcc0\uc218 \ud638\uc774\uc2a4\ud305")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// \uc5d0\ub7ec\ub294 \ubc1c\uc0dd\uc548\ub428console.log(foo)// undefined// \ubcc0\uc218\uc5d0 \uac12\uc744 \ud560\ub2f9(3. \ud560\ub2f9 \ub2e8\uacc4)\nfoo = 123;\n\nconsole.log(foo); // 123// \ubcc0\uc218 \uc120\uc5b8\uc740 \ub7f0\ud0c0\uc784 \uc774\uc804\uc5d0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc5d0 \uc758\ud574 \uc554\ubb35\uc801 \uc2e4\ud589\ub428var foo;\n")))}u.isMDXComponent=!0}}]);