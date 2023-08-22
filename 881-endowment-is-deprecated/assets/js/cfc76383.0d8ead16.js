"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6754],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=s.createContext({}),l=function(e){var n=s.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return s.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return t?s.createElement(h,a(a({ref:n},m),{},{components:t})):s.createElement(h,a({ref:n},m))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var l=2;l<i;l++)a[l]=t[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(87462),r=(t(67294),t(3905));const i={description:"Snaps permissions reference",sidebar_position:4},a="Snaps permissions",o={unversionedId:"reference/permissions",id:"reference/permissions",title:"Snaps permissions",description:"Snaps permissions reference",source:"@site/snaps/reference/permissions.md",sourceDirName:"reference",slug:"/reference/permissions",permalink:"/881-endowment-is-deprecated/snaps/reference/permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/permissions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Snaps permissions reference",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Subcommands",permalink:"/881-endowment-is-deprecated/snaps/reference/cli/subcommands"}},p={},l=[{value:"RPC API permissions",id:"rpc-api-permissions",level:2},{value:"Endowments",id:"endowments",level:2},{value:"endowment:cronjob",id:"endowmentcronjob",level:3},{value:"endowment:ethereum-provider",id:"endowmentethereum-provider",level:3},{value:"endowment:long-running",id:"endowmentlong-running",level:3},{value:"endowment:network-access",id:"endowmentnetwork-access",level:3},{value:"Same-origin policy and CORS",id:"same-origin-policy-and-cors",level:4},{value:"endowment:rpc",id:"endowmentrpc",level:3},{value:"endowment:transaction-insight",id:"endowmenttransaction-insight",level:3},{value:"endowment:webassembly",id:"endowmentwebassembly",level:3}],m={toc:l},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,s.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-permissions"},"Snaps permissions"),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"/881-endowment-is-deprecated/snaps/how-to/request-permissions"},"request the following permissions")," in your snap manifest\nfile."),(0,r.kt)("h2",{id:"rpc-api-permissions"},"RPC API permissions"),(0,r.kt)("p",null,"You must request permission to use any\n",(0,r.kt)("a",{parentName:"p",href:"/881-endowment-is-deprecated/snaps/reference/rpc-api#restricted-methods"},"restricted JSON-RPC API methods"),"."),(0,r.kt)("p",null,"For example, to request to use ",(0,r.kt)("a",{parentName:"p",href:"/881-endowment-is-deprecated/snaps/reference/rpc-api#snap_dialog"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_dialog")),", add the following to the\nmanifest file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "snap_dialog": {}\n},\n')),(0,r.kt)("h2",{id:"endowments"},"Endowments"),(0,r.kt)("h3",{id:"endowmentcronjob"},"endowment:cronjob"),(0,r.kt)("p",null,"To run periodic actions for the user (cron jobs), a snap must request the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission.\nThis permission allows the snap to specify cron jobs that trigger the exported\n",(0,r.kt)("a",{parentName:"p",href:"/881-endowment-is-deprecated/snaps/reference/exports#oncronjob"},(0,r.kt)("inlineCode",{parentName:"a"},"onCronjob"))," method."),(0,r.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "endowment:cronjob": {\n      "jobs": [\n        {\n          "expression": {\n            "minute": "*",\n            "hour": "*",\n            "dayOfMonth": "*",\n            "month": "*",\n            "dayOfWeek": "*"\n          },\n          "request": {\n            "method": "exampleMethodOne",\n            "params": {\n              "param1": "foo"\n            }\n          }\n        },\n        {\n          "expression": "* * * * *",\n          "request": {\n            "method": "exampleMethodTwo",\n            "params": {\n              "param1": "bar"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"endowmentethereum-provider"},"endowment:ethereum-provider"),(0,r.kt)("p",null,"To communicate with a node using MetaMask, a snap must request the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:ethereum-provider")," permission.\nThis permission exposes the global API ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," to the snap execution environment.\nThis global is an EIP-1193 provider."),(0,r.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n},\n')),(0,r.kt)("h3",{id:"endowmentlong-running"},"endowment:long-running"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"endowment:long-running")," is deprecated.")),(0,r.kt)("p",null,"A snap that is computationally heavy and can't finish execution within the\n",(0,r.kt)("a",{parentName:"p",href:"/881-endowment-is-deprecated/snaps/concepts/lifecycle"},"snap lifecycle requirements")," must request the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:long-running")," permission.\nThis permission allows the snap to run indefinitely while processing RPC requests."),(0,r.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:long-running": {}\n},\n')),(0,r.kt)("h3",{id:"endowmentnetwork-access"},"endowment:network-access"),(0,r.kt)("p",null,"To access the internet, a snap must request the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:network-access")," permission.\nThis permission exposes the global ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API to the Snaps execution environment."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," isn't available in Snaps, and you should replace it with ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch"),".\nIf your dependencies use ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", you can\n",(0,r.kt)("a",{parentName:"p",href:"/881-endowment-is-deprecated/snaps/how-to/troubleshoot#patch-the-use-of-xmlhttprequest"},"patch it away"),".")),(0,r.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:network-access": {}\n},\n')),(0,r.kt)("h4",{id:"same-origin-policy-and-cors"},"Same-origin policy and CORS"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fetch()")," requests in a snap are bound by the browser's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#cross-origin_network_access"},"same-origin policy"),".\nSince snap code is executed in an iframe with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sandbox")," property, the browser sends an ",(0,r.kt)("inlineCode",{parentName:"p"},"Origin"),"\nheader with the value ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," with outgoing requests.\nFor the snap to be able to read the response, the server must send an\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},(0,r.kt)("inlineCode",{parentName:"a"},"Access-Control-Allow-Origin"))," CORS header\nwith the value ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," in the response."),(0,r.kt)("h3",{id:"endowmentrpc"},"endowment:rpc"),(0,r.kt)("p",null,"To handle arbitrary JSON-RPC requests, a snap must request the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:rpc")," permission.\nThis permission grants a snap access to JSON-RPC requests sent to the snap, using the exported\n",(0,r.kt)("a",{parentName:"p",href:"/881-endowment-is-deprecated/snaps/reference/exports#onrpcrequest"},(0,r.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," method."),(0,r.kt)("p",null,"This permission requires an object with a ",(0,r.kt)("inlineCode",{parentName:"p"},"snaps")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"dapps")," property (or both), to signal if the\nsnap can receive JSON-RPC requests from other snaps, or dapps, respectively.\nThe default for both properties is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initialPermissions": {\n    "endowment:rpc": {\n      "dapps": true,\n      "snaps": false\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"endowmenttransaction-insight"},"endowment:transaction-insight"),(0,r.kt)("p",null,"To provide transaction insights, a snap must request the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:transaction-insight")," permission.\nThis permission grants a snap read-only access to raw transaction payloads, before they're accepted\nfor signing by the user, by exporting the ",(0,r.kt)("a",{parentName:"p",href:"/881-endowment-is-deprecated/snaps/reference/exports#ontransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"onTransaction"))," method."),(0,r.kt)("p",null,"This permission requires an object with an ",(0,r.kt)("inlineCode",{parentName:"p"},"allowTransactionOrigin")," property to signal if the snap\nshould pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionOrigin")," property as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction")," parameters.\nThis property represents the transaction initiator origin.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:transaction-insight": {\n    "allowTransactionOrigin": true\n  }\n},\n')),(0,r.kt)("h3",{id:"endowmentwebassembly"},"endowment:webassembly"),(0,r.kt)("p",null,"To use WebAssembly, a snap must request the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:webassembly")," permission.\nThis permission exposes the global ",(0,r.kt)("inlineCode",{parentName:"p"},"WebAssembly")," API to the snap execution environment."),(0,r.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:webassembly": {}\n},\n')))}c.isMDXComponent=!0}}]);