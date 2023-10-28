"use strict";(self.webpackChunkmilliwonkim_blog_site=self.webpackChunkmilliwonkim_blog_site||[]).push([[9734],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),i=l(t),k=o,u=i["".concat(s,".").concat(k)]||i[k]||m[k]||c;return t?r.createElement(u,a(a({ref:n},d),{},{components:t})):r.createElement(u,a({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=k;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[i]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const c={title:"React + Docker\ub97c \uc774\uc6a9\ud574\uc11c React\ub97c \uc2e4\ud589\ud558\uae30 (Feat. NginX)"},a="Docker\ub85c \ube4c\ub4dc\ud558\uae30",p={unversionedId:"front-end-development/reactjs/7",id:"front-end-development/reactjs/7",title:"React + Docker\ub97c \uc774\uc6a9\ud574\uc11c React\ub97c \uc2e4\ud589\ud558\uae30 (Feat. NginX)",description:"image",source:"@site/docs/front-end-development/reactjs/7.md",sourceDirName:"front-end-development/reactjs",slug:"/front-end-development/reactjs/7",permalink:"/milliwonkim/docs/front-end-development/reactjs/7",draft:!1,tags:[],version:"current",lastUpdatedBy:"milliwonkim",lastUpdatedAt:1698471004,formattedLastUpdatedAt:"Oct 28, 2023",frontMatter:{title:"React + Docker\ub97c \uc774\uc6a9\ud574\uc11c React\ub97c \uc2e4\ud589\ud558\uae30 (Feat. NginX)"},sidebar:"developmentSidebar",previous:{title:"React + Express(Node) + JWT\ub97c \uc774\uc6a9\ud55c \ub85c\uadf8\uc778, \ud68c\uc6d0\uac00\uc785 \uad6c\ud604\ud558\uae30",permalink:"/milliwonkim/docs/front-end-development/reactjs/6"},next:{title:"Jenkins + Github \uc5f0\ub3d9 \ubc29\ubc95",permalink:"/milliwonkim/docs/front-end-development/reactjs/8"}},s={},l=[],d={toc:l},i="wrapper";function m(e){let{components:n,...c}=e;return(0,o.kt)(i,(0,r.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker\ub85c-\ube4c\ub4dc\ud558\uae30"},"Docker\ub85c \ube4c\ub4dc\ud558\uae30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},'// Dockerfile// root\uc5d0 \ub9cc\ub4e4\uae30\n\nFROM node\n\n# \ub3c4\ucee4 \uc774\ubbf8\uc9c0 \ub0b4\uc5d0\uc11c \uc791\uc5c5 \ub514\ub809\ud1a0\ub9ac(WORKDIR)\ub97c /app\uc73c\ub85c \ud574\ub450\ub294 \uc124\uc815\uba85\ub839\nWORKDIR /app\n\n# \ub3c4\ucee4\uc5d0 \ubbf8\ub9ac package.json\uacfc \uc804\uccb4 \ub514\ub809\ud1a0\ub9ac \ud30c\uc77c\uc744 \uce74\ud53c\ud55c\ub2e4\n# \uadf8\ub9ac\uace0 \uc774\uac83\ub4e4\uc744 \uce90\uc2f1\ud574\uc11c\n# \ubc14\ub010\uac8c \uc788\ub294\uc9c0 \uac10\uc9c0\ud55c\ub2e4.\n# \ubc14\ub010\uac8c \uc788\uc744 \ub54c\ub9cc npm install\uc744 \ud55c\ub2e4\n\n# COPY <\uc18c\uc2a4 \uacbd\ub85c> <\ub300\uc0c1 \uacbd\ub85c>\nCOPY package.json .\nRUN npm install\n\n# \ub8e8\ud2b8 \uac83\uc744 \ud604\uc7ac \ub3c4\ucee4 \uc774\ubbf8\uc9c0\uc758 \ub8e8\ud2b8\ub85c \uac00\uc838\uc628\ub2e4\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// \ud2b9\uc815 \uc774\ubbf8\uc9c0\ub85c \ube4c\ub4dc \uc2e4\ud589\ud558\uae30\ndocker build -t react-test-1 .\n\n// \ud604\uc7ac \ub3c4\ucee4 \uc774\ubbf8\uc9c0\uac00 \ubb50\uac00 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uae30\ndocker image ls\n\n// \uacb0\uacfc\uac12// REPOSITORY             TAG          IMAGE ID       CREATED              SIZE// <none>                 <none>       7aea5541fc87   About a minute ago   1.61GB// \ud2b9\uc815 \ub3c4\ucee4 \uc774\ubbf8\uc9c0 \uc9c0\uc6b0\uae30\ndocker image rm 7aea5541fc87\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// .dockerignore// root\uc5d0 \uc800\uc7a5\n\nnode_modules;\nDockerfile.git.gitignore.dockerignore.env;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// .env// root\uc5d0 \ucd94\uac00\n\nCHOKIDAR_USEPOLLING = true;\nREACT_APP_NAME = kiwonkim;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// -------------- \uc5ec\ub7ec \ucee8\ud14c\uc774\ub108\ub97c \ud558\ub098\uc758 \uc571\uc73c\ub85c \ud1b5\ud569 ---------------------// \ud558\ub098\uc758 \ucee8\ud14c\uc774\ub108\ub9cc \uc874\uc7ac\ud560 \uacbd\uc6b0, \ud558\ub098\uc758 \ucee8\ud14c\uc774\ub108\ub9cc \uc2e4\ud589\ud55c \uac83 \ucc98\ub7fc \ubcf4\uc774\uc9c0\ub9cc \uc0ac\uc2e4\uc740 \uc571\uc744 \ub744\uc6b4\uac83// docker-compose.yml// root\uc5d0 \ucd94\uac00version: "3"\nservices:\n    react-app:\n      build: .\n      ports:\n        - "3000:3000"\n      volumes:\n        - ./src:/app/src\n      environment:\n        - REACT_APP_NAME=kiwonkim_compose\n        - CHOKIDAR_USEPOLLING=true\n      # env_file:\n      #   - ./.env\n\n// docker-compose.yml \ud30c\uc77c \uc0dd\uc131 \ud6c4 docker-compose \uc2e4\ud589\ndocker-compose up -d --build\n// docker-compose \uc0ad\uc81c\ndocker-compose down\n\n// ---------------- \ud558\ub098\uc758 \ucee8\ud14c\uc774\ub108 \uc2e4\ud589 --------------------\n// docker \uc774\ubbf8\uc9c0\ub97c \uae30\ubc18\uc73c\ub85c \ucee8\ud14c\uc774\ub108\ub97c \uc0dd\uc131\ndocker run -d -p 3000:3000 --name react-app react-test-1\n\n// docker \uc774\ubbf8\uc9c0\ub97c \uae30\ubc18\uc73c\ub85c \ucee8\ud14c\uc774\ub108\ub85c \uc0dd\uc131 + \uc2e4\uc2dc\uac04\uc73c\ub85c \ucf54\ub4dc \ubcc0\uacbd\uc0ac\ud56d\uc744 \ubc18\uc601\ud574\uc90c\n// + .env\ud30c\uc77c\uc744 \uc774\uc6a9\ud574\uc11c \ud658\uacbd\ubcc0\uc218\ub97c \uc801\uc6a9\ndocker run --env-file ./.env -v /Users/kiwonkim/Desktop/react-test-1/src:/app/src -d -p 3000:3000 --name react-app react-test-1\n\n// ---------------- \uae30\ud0c0 -----------------------------// docker \uc774\ubbf8\uc9c0 \uc0ad\uc81c\ndocker rm react-app -f\n\n// docker \ucee8\ud14c\uc774\ub108 \ud655\uc778\ndocker ps\n\n// docker \ucee8\ud14c\uc774\ub108 \uc9c0\uc6b0\uae30\ndocker rm react-app -f\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(2874).Z,width:"2000",height:"444"})),(0,o.kt)("p",null,"\ucee8\ud14c\uc774\ub108\ub97c \uc0dd\uc131\ud558\uace0 localhost:3000\uc5d0 \uc811\uc18d\ud558\uba74 App.js\uc5d0 \ubc18\uc601\ub41c \ucf54\ub4dc\ub4e4\uc774 \ub80c\ub354\ub9c1\ub41c\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(765).Z,width:"2000",height:"444"})),(0,o.kt)("p",null,"App.js\uc5d0 \uc788\ub294 \ucf54\ub4dc\ub97c \ubcc0\uacbd\ud558\uace0 \ubc18\uc601\ud558\ub824\uba74 \ub2e4\uc2dc \ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \uc0ad\uc81c\ud558\uace0 \ub2e4\uc2dc \uc774\ubbf8\uc9c0\uc640 \ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\ud574\uc57c\ud55c\ub2e4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"docker rm react-app -f\ndocker build -t react-test-1 .\ndocker run -d -p 3000:3000 --name react-app react-test-1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \ub0b4\ubd80\ub97c bash\ub85c \uc870\uc791\ud558\uae30\ndocker exec -it react-app bash\n\n// \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \uc548\uc5d0\uc11c \ud604\uc7ac \ud30c\uc77c\ub4e4 \ud655\uc778\ud558\uae30\nls\n\n// \uacb0\uacfc\uac12// Dockerfile  README.md  node_modules  package-lock.json  package.json  public  src// \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \ub098\uc62c \ub54c\nexit\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(8065).Z,width:"2000",height:"220"}),"\n",(0,o.kt)("img",{alt:"image",src:t(5694).Z,width:"2000",height:"254"})),(0,o.kt)("h1",{id:"docker-\ucee8\ud14c\uc774\ub108\uc5d0-nginx-\uc11c\ubc84\ub97c-\ub744\uc6b0\uae30"},"Docker \ucee8\ud14c\uc774\ub108\uc5d0 NginX \uc11c\ubc84\ub97c \ub744\uc6b0\uae30"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(9853).Z,width:"2000",height:"655"})),(0,o.kt)("p",null,"Docker \ucee8\ud14c\uc774\ub108\uc5d0\uc11c\uc758 \ub9ac\uc561\ud2b8 \uc2e4\ud589 \uad6c\uc870(2)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(9986).Z,width:"2000",height:"1035"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// docker-compose.dev.yml, docker-compose.prod.yml\ub85c \ub098\ub208\ub2e4\n\n// docker-compose.dev.yml\nversion: "3"\nservices:\n    react-app:\n      # stdin_open: true\n      # tty: true\n      build:\n        context: .\n        dockerfile: Dockerfile.dev\n      ports:\n        - "3000:3000"\n      volumes:\n        - ./src:/app/src\n      environment:\n        - REACT_APP_NAME=kiwonkim_compose-dev\n        - CHOKIDAR_USEPOLLING=true\n      # env_file:\n      #   - ./.env\n\n// docker-compose.prod.yml\nversion: "3"\nservices:\n    react-app:\n      # stdin_open: true\n      # tty: true\n      build:\n        context: .\n        dockerfile: Dockerfile.prod\n        args:\n          - REACT_APP_NAME=kiwonkim-compose-prod\n      ports:\n        - "8000:80"\n      environment:\n        - REACT_APP_NAME=kiwonkim_compose-prod\n        - CHOKIDAR_USEPOLLING=true\n      # env_file:\n      #   - ./.env\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// ------------- dev\uc6a9 \ub3c4\ucee4 \uc774\ubbf8\uc9c0 \ube4c\ub4dc ---------------// Dockerfile.dev\ndocker build -f Dockerfile.dev\n\n// dev\uc6a9 docker-compsoe\ndocker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build\n\n// ------------- prod\uc6a9 \ub3c4\ucee4 \uc774\ubbf8\uc9c0 ------------------// Dockerfile.prod\nFROM node as build\nWORKDIR /app\n# \ub3c4\ucee4\uc5d0 \ubbf8\ub9ac package.json\uacfc \uc804\uccb4 \ub514\ub809\ud1a0\ub9ac \ud30c\uc77c\uc744 \uce74\ud53c\ud55c\ub2e4\n# \uadf8\ub9ac\uace0 \uc774\uac83\ub4e4\uc744 \uce90\uc2f1\ud574\uc11c\n# \ubc14\ub010\uac8c \uc788\ub294\uc9c0 \uac10\uc9c0\ud55c\ub2e4.\n# \ubc14\ub010\uac8c \uc788\uc744 \ub54c\ub9cc npm install\uc744 \ud55c\ub2e4\nCOPY package.json .\nRUN npm install\nCOPY . .\nARG REACT_APP_NAME\nENV REACT_APP_NAME=${REACT_APP_NAME}\nRUN npm run build\n\nFROM nginx\nCOPY --from=build /app/build /usr/share/nginx/html\n\n// prod\uc6a9 docker-compose\ndocker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build\n\n// ----------------------------------------------// prod\uc6a9 \ub3c4\ucee4 \uc774\ubbf8\uc9c0 \ube4c\ub4dc\ndocker build -f Dockerfile.prod -t docker-image-prod .\n\n// \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \uc2e4\ud589\ndocker run --env-file ./.env -d -p 8000:80 --name react-app-prod docker-image-prod\n\n// ----------------------------------------------// \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \uc911\uc9c0\ndocker stop react-app-prod\n\n// \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \uc0ad\uc81c\ndocker rm react-app-prod\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(7119).Z,width:"2000",height:"1522"})),(0,o.kt)("p",null,"\ucc38\uace0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=3xDAU5cvi5E"},"https://www.youtube.com/watch?v=3xDAU5cvi5E")))}m.isMDXComponent=!0},2874:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1-9db1a236c5e22455113b435da1dcd2fd.png"},765:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/2-9db1a236c5e22455113b435da1dcd2fd.png"},8065:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/3-1-9edfe22ce7c9db2c45600a0144b43184.png"},5694:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/3-2-4bc6fae8c774b6ed6de255d797784b64.png"},9853:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/4-cdcee905f5dcb982c3849286f1556076.png"},9986:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/5-eac3be9afdb569da8b6c1cf5c1650acd.png"},7119:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/6-e2f31ef5e5e66ffb098904d55e3c2468.png"}}]);