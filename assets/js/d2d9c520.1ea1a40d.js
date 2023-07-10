"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[23],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9138:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o="Workshop: vmchecker: Automated Assignment Deployment, Checking and Grading",s={unversionedId:"events/workshop-2023-07-10",id:"events/workshop-2023-07-10",title:"Workshop: vmchecker: Automated Assignment Deployment, Checking and Grading",description:"Among the most difficult and time consuming activities in teaching / training are assignments, or evaluated practical items.",source:"@site/docs/events/workshop-2023-07-10.md",sourceDirName:"events",slug:"/events/workshop-2023-07-10",permalink:"/docs/events/workshop-2023-07-10",editUrl:"https://github.com/open-education-hub/open-education-hub-site/website/docs/events/workshop-2023-07-10.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Workshop: vmchecker: Main page",permalink:"/docs/events/vmchecker-workshop"},next:{title:"VMchecker TA guide for homeworks",permalink:"/docs/events/vmchecker-workshop/vmchecker-hw-setup"}},c=[{value:"Schedule",id:"schedule",children:[],level:2},{value:"Agenda",id:"agenda",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[{value:"Takeaways",id:"takeaways",children:[],level:3}],level:2}],l={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"workshop-vmchecker-automated-assignment-deployment-checking-and-grading"},"Workshop: vmchecker: Automated Assignment Deployment, Checking and Grading"),(0,i.kt)("p",null,"Among the most difficult and time consuming activities in teaching / training are assignments, or evaluated practical items.\nAn assignment consists of a statement and set of goals.\nTypically, assignments have a grading scale that ensures fair grading and also provides students / trainees with a set of steps for solving it.\nDeployment, checking and grading of assignments are candidates for automation.\nGiven the large number of submissions, having an automation engine taking care of this improves the work of teachers and also provides immediate feedback and direction to students."),(0,i.kt)("p",null,"At ",(0,i.kt)("a",{parentName:"p",href:"https://open-education-hub.github.io/"},"OpenEdu"),", we've developed and enhanced ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/systems-cs-pub-ro/vmchecker-next/wiki/Teaching-Assistant-Handbook"},"vmchecker"),", an engine to automate deployment, checking and grading of assignments.\nvmchecker uses modern solutions (GitLab, GitLab CI, Docker) to provide a scalable and efficient infrastructure for assignment automation.\nIt has been successfully used at the Faculty of Automatic Control and Computers, in University POLITEHNICA of Bucharest, during the last year, with close to 30,000 submissions being handled by June 2023.\nThe number of submissions is expected to grow as new classes adopt vmchecker."),(0,i.kt)("p",null,"It is currently integrated with the ",(0,i.kt)("a",{parentName:"p",href:"https://curs.upb.ro/"},"Moodle instance at UPB"),".\nA teaching assistant configures a Moodle assignment instance and connects it to a vmchecker assignment repository.\nA student can use Moodle to submit the assignment and view the resulting grade and test output.\nBehind the scenes, Moodle interacts with vmchecker to pass the assignment submission archive and to retrieve the results."),(0,i.kt)("p",null,"vmchecker is open source software, similar to other OpenEdu components.\nThis makes it available to everyone interested in automating assignments and other practical activities."),(0,i.kt)("p",null,"We aim to further develop vmchecker based on user feedback.\nOur planned items are adding virtual machine support (currently checking is done on containers only), using the same infrastructure for lab tasks (practical items during assisted sessions).\nAnd extending its use to other faculties, universities or interested parties."),(0,i.kt)("p",null,"As such, on ",(0,i.kt)("strong",{parentName:"p"},"Monday, July 10, 2023, starting from 15:00 EEST"),", we are organizing a ",(0,i.kt)("strong",{parentName:"p"},"hands-on online workshop")," to initiate interested parties in the installing, deployment and use of vmchecker.\nIt takes place on the ",(0,i.kt)("a",{parentName:"p",href:"https://bit.ly/OpenEduHub"},"OpenEdu Hub Discord server"),".\nThe aim is to have vmchecker included as an automation solution in universities and educational institutions in Romania starting with the next academic year (starting in October 2023)."),(0,i.kt)("p",null,"In this 2.5-hour online workshop, we welcome people with technical familiarity that have an educational / academic involvement and want to improve the teaching/training-related processes in their institution.\nIf you like to take a direct part in simplifying the grading of assignments in your class, this workshop is for you.\nWe will have a 1-hour tutorial / demo session (that we will also record and upload on ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/@OpenEduHub"},"the OpenEdu YouTube channel"),"), followed by another hour where you will do your own vmchecker setup, with assistance from our side."),(0,i.kt)("p",null,"If you plan to attend, please fill ",(0,i.kt)("a",{parentName:"p",href:"https://forms.gle/hCquwMwQqsq28r3x9"},"this form"),"."),(0,i.kt)("h2",{id:"schedule"},"Schedule"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Date: Monday, July 10, 2023"),(0,i.kt)("li",{parentName:"ul"},"Time: 15:00-17:30 EEST (Romania time)"),(0,i.kt)("li",{parentName:"ul"},"Place: online, ",(0,i.kt)("a",{parentName:"li",href:"https://bit.ly/OpenEduHub"},"OpenEdu Hub Discord server"))),(0,i.kt)("h2",{id:"agenda"},"Agenda"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"15:00-15:10: Welcome"),(0,i.kt)("li",{parentName:"ul"},"15:10-16:00: Demo / Tutorial on Using vmchecker"),(0,i.kt)("li",{parentName:"ul"},"16:00-17:15: Practical Session (in breakout groups)"),(0,i.kt)("li",{parentName:"ul"},"17:15-17:30: Conclusions, Final Thoughts")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"To be filled after the workshop"),(0,i.kt)("h3",{id:"takeaways"},"Takeaways"),(0,i.kt)("p",null,"To be filled after the workshop"))}p.isMDXComponent=!0}}]);