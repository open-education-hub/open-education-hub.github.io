"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return n?r.createElement(k,a(a({ref:t},l),{},{components:n})):r.createElement(k,a({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},407:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a="Workshop: vmchecker: Main page",c={unversionedId:"events/vmchecker-workshop",id:"events/vmchecker-workshop",title:"Workshop: vmchecker: Main page",description:"Setting up the environment",source:"@site/docs/events/vmchecker-workshop.md",sourceDirName:"events",slug:"/events/vmchecker-workshop",permalink:"/docs/events/vmchecker-workshop",editUrl:"https://github.com/open-education-hub/open-education-hub-site/website/docs/events/vmchecker-workshop.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Workshop: Multiplier Event 3",permalink:"/docs/events/m3"},next:{title:"Workshop: vmchecker: Automated Assignment Deployment, Checking and Grading",permalink:"/docs/events/workshop-2023-07-10"}},s=[{value:"Setting up the environment",id:"setting-up-the-environment",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[{value:"Takeaways",id:"takeaways",children:[],level:3}],level:2}],p={toc:s},l="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workshop-vmchecker-main-page"},"Workshop: vmchecker: Main page"),(0,o.kt)("h2",{id:"setting-up-the-environment"},"Setting up the environment"),(0,o.kt)("p",null,"You will need to connect to the ",(0,o.kt)("a",{parentName:"p",href:"https://guacamole.grid.pub.ro"},"guacamole"),". From\nhere you will be able to connect to one of the 30 VMs that we will be using to\ntest the setup. Please select a virtual machine that is not being used by\nanother person. You can see this for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Currently in use by 1 user")," text on\nthe left side of the name."),(0,o.kt)("p",null,"To authenticate to the virtual machine, you will need to use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"workshop/vmchecker")," username/password combination."),(0,o.kt)("p",null,"Each machine has an Ubuntu 20.04 setup where you can work during this workshop.\nThe user you will connect to is ",(0,o.kt)("inlineCode",{parentName:"p"},"student"),". The password is ",(0,o.kt)("inlineCode",{parentName:"p"},"student")),(0,o.kt)("p",null,"We will be using two tracks for this workshop. The ",(0,o.kt)("a",{parentName:"p",href:"./vmchecker-workshop/vmchecker-hw-setup"},"first\ntrack")," is intended for\nTAs and UPB staff, who already have access to the production infrastructure for\nVMchecker deployed at UPB."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"./vmchecker-workshop/vmchecker-install"},"second track")," is intended for people from other institutions who want to\nexperiment with setting up VMchecker for their own institution."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"To be filled after the workshop"),(0,o.kt)("h3",{id:"takeaways"},"Takeaways"),(0,o.kt)("p",null,"To be filled after the workshop"))}u.isMDXComponent=!0}}]);