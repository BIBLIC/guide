"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"Embedding gif",sidebar_position:5,slug:"/23e54a38-4440-456a-a27c-bb2001933e3c"},o=void 0,c={unversionedId:"Examples/Embedding-gif",id:"Examples/Embedding-gif",title:"Embedding gif",description:"If you embed a gif in notion, it should be embedded in Docusaurus",source:"@site/docs/Examples/Embedding-gif.md",sourceDirName:"Examples",slug:"/23e54a38-4440-456a-a27c-bb2001933e3c",permalink:"/docs/23e54a38-4440-456a-a27c-bb2001933e3c",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Examples/Embedding-gif.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Embedding gif",sidebar_position:5,slug:"/23e54a38-4440-456a-a27c-bb2001933e3c"},sidebar:"tutorialSidebar",previous:{title:"Embedding Video",permalink:"/docs/793f31fa-b6a0-4db6-8e89-37a802f2824c"},next:{title:"Embedding Bloom Books",permalink:"/docs/eab140ee-faac-42d4-84a0-405ef57b4f33"}},d={},l=[{value:"Imgur",id:"2483d202ecf040658708c46a35a61372",level:2},{value:"Giffy,",id:"b2700367aba242b98deb6cd2cbb6049e",level:2}],s={toc:l};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you embed a gif in notion, it should be embedded in Docusaurus"),(0,a.kt)("h2",{id:"2483d202ecf040658708c46a35a61372"},"Imgur"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8801).Z,width:"413",height:"331"})),(0,a.kt)("h2",{id:"b2700367aba242b98deb6cd2cbb6049e"},"Giffy,"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4786).Z,width:"384",height:"480"})),(0,a.kt)("p",null,"When it detects an embedded gif, docu-notion does the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adds a ",(0,a.kt)("inlineCode",{parentName:"li"},'import GifPlayer from "react-gif-player";')," to the markdown."),(0,a.kt)("li",{parentName:"ul"},"Inserts html like ",(0,a.kt)("inlineCode",{parentName:"li"},'<GifPlayer gif="https://media.giphy.com/media/VhiAuDYHkNPydiNnOs/giphy.gif" />'))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If your site is not based on ",(0,a.kt)("inlineCode",{parentName:"p"},"docu-notion-sample-site"),", you may need to add react-gif-player to your Docusaurus project:\n",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add react-gif-player")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i react-gif-player"))))}p.isMDXComponent=!0},8801:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1607379524-ccb843d869c0093acb6913b175b65b40.gif"},4786:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/705447076-389b214d9163b9abd56343bc5c3f6c98.gif"}}]);