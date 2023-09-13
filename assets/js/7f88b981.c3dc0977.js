"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,k=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9153:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="VMChecker TA Guide for Assignments",s={unversionedId:"events/vmchecker-workshop/vmchecker-hw-moodle-setup",id:"events/vmchecker-workshop/vmchecker-hw-moodle-setup",title:"VMChecker TA Guide for Assignments",description:"1. Introduction",source:"@site/docs/events/vmchecker-workshop/vmchecker-hw-moodle-setup.md",sourceDirName:"events/vmchecker-workshop",slug:"/events/vmchecker-workshop/vmchecker-hw-moodle-setup",permalink:"/docs/events/vmchecker-workshop/vmchecker-hw-moodle-setup",editUrl:"https://github.com/open-education-hub/open-education-hub-site/website/docs/events/vmchecker-workshop/vmchecker-hw-moodle-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Workshop: vmchecker: Automated Assignment Deployment, Checking and Grading",permalink:"/docs/events/workshop-2023-07-10"},next:{title:"vmchecker-hw-standalone-setup",permalink:"/docs/events/vmchecker-workshop/vmchecker-hw-standalone-setup"}},l=[{value:"1. Introduction",id:"1-introduction",children:[],level:2},{value:"2. Gitlab Setup",id:"2-gitlab-setup",children:[{value:"First Changes Needed",id:"first-changes-needed",children:[],level:4},{value:"2.1. Disable Merge Requests for the Public Repository",id:"21-disable-merge-requests-for-the-public-repository",children:[],level:3},{value:"2.2. Set up a CD Pipeline for the Checker Image",id:"22-set-up-a-cd-pipeline-for-the-checker-image",children:[{value:"2.2.1. Build the Checker Image Using Gitlab Pipelines",id:"221-build-the-checker-image-using-gitlab-pipelines",children:[],level:4},{value:"2.2.2. Build the Checker Image Manually",id:"222-build-the-checker-image-manually",children:[],level:4}],level:3},{value:"2.3. Find the Project ID",id:"23-find-the-project-id",children:[],level:3},{value:"2.4. Setup the Gitlab Runner",id:"24-setup-the-gitlab-runner",children:[],level:3}],level:2},{value:"3. Moodle Setup",id:"3-moodle-setup",children:[],level:2},{value:"4. Test Your Assignment",id:"4-test-your-assignment",children:[],level:2},{value:"5. Grading an Assignment",id:"5-grading-an-assignment",children:[{value:"5.1. Download All Submissions",id:"51-download-all-submissions",children:[],level:3},{value:"5.2. Download Grading Worksheet",id:"52-download-grading-worksheet",children:[],level:3},{value:"5.3. Check a Submission on Gitlab",id:"53-check-a-submission-on-gitlab",children:[],level:3},{value:"5.4. Import Grades",id:"54-import-grades",children:[],level:3}],level:2},{value:"6. VMChecker block",id:"6-vmchecker-block",children:[{value:"6.1. Recheck Submission for ...",id:"61-recheck-submission-for-",children:[],level:3},{value:"6.2. Recheck All",id:"62-recheck-all",children:[],level:3}],level:2}],c={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vmchecker-ta-guide-for-assignments"},"VMChecker TA Guide for Assignments"),(0,r.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,r.kt)("p",null,"VMchecker next is a new type of homework testing environment. It makes it so a student and a teacher can both use the same infrastructure in order to test homework with minimal input."),(0,r.kt)("p",null,"When you want to add a new assignment to VMchecker next you will need to have the following components ready:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a private assignment repository, based on which the homework will be tested. This repository will have to remain private, as assignments are tested by creating a new branch for each submission through Moodle;"),(0,r.kt)("li",{parentName:"ul"},"a public repository that is a mirror of the private repository which can be forked privately by students in order to test their homework using the same scripts and containers as on Moodle;"),(0,r.kt)("li",{parentName:"ul"},"a Moodle assignment where students will have to upload their homework;"),(0,r.kt)("li",{parentName:"ul"},"a Moodle VMchecker block where TAs can configure the plugin that controls homework checking.")),(0,r.kt)("h2",{id:"2-gitlab-setup"},"2. Gitlab Setup"),(0,r.kt)("p",null,"The private and public repositories must have the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 checker/\n\u2502 \xa0 \u251c\u2500\u2500 checker.sh\n\u2502 \xa0 \u251c\u2500\u2500 input/\n\u2502 \xa0 \u2502 \xa0 \u251c\u2500\u2500 test0\n\u2502 \xa0 \u2514\u2500\u2500 output/\n\u2502 \xa0 \xa0 \xa0 \u251c\u2500\u2500 test0.ref\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 .gitlab-ci.yml\n\u251c\u2500\u2500 local.sh\n\u2514\u2500\u2500 src/\n\xa0 \xa0 \u2514\u2500\u2500 skel.c\n")),(0,r.kt)("p",null,"It is recommended to fork ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.cs.pub.ro/vmchecker/vmchecker-next-assignment"},"https://gitlab.cs.pub.ro/vmchecker/vmchecker-next-assignment")," for a faster start."),(0,r.kt)("p",null,"If you are working on ",(0,r.kt)("strong",{parentName:"p"},"Gitlab.com")," you can import the repository by going from the main page ",(0,r.kt)("inlineCode",{parentName:"p"},"New Project > Import Project > Repository by URL")," and then filling in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Git repository URL")," with: ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.cs.pub.ro/vmchecker/vmchecker-next-assignment.git"},"https://gitlab.cs.pub.ro/vmchecker/vmchecker-next-assignment.git"),"."),(0,r.kt)("p",null,"The project also contains the solution under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/solution.c")," if you want to test your GitLab setup before porting your assignment."),(0,r.kt)("p",null,"A typical assignment will have the above structure with the following files and folders of interest to teaching assistants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"src/")," - Here the student will develop their solution according to the assignment's specification. Here, you can add a skeleton for the assignment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"local.sh")," - A utility script used to check the assignment locally. It simulates a Gitlab pipeline."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dockerfile")," - Used to build the docker image for the Gitlab pipeline. The following is an example that should satisfy most cases:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"FROM jokeswar/base-ctl\nCOPY ./checker ${CHECKER_DATA_DIRECTORY}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The ",(0,r.kt)("strong",{parentName:"p"},"base-ctl")," image is based on the ubuntu:20.04 image and has the following additional packages installed: build-essential and python3."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": When the image is built the entire checker is copied into the docker image, to prevent the user from changing tests."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},".gitlab-ci.yml")," - The definition of the pipeline. You ",(0,r.kt)("strong",{parentName:"li"},"must")," change the image used to the one you built;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"checker/")," - The checker directory;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"checker/checker.sh")," - The entry point of the checker. When execution is passed to this script, the ",(0,r.kt)("strong",{parentName:"li"},"current working directory")," is set to the ",(0,r.kt)("strong",{parentName:"li"},"checker/")," folder.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": In order for VMChecker Next to be able to grade the assignment it will look for the last string that matches the following regex: ",(0,r.kt)("inlineCode",{parentName:"p"},"Total:\\ *([0-9]+)")," (the grade must be an integer)."),(0,r.kt)("p",null,"Valid format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 Total:100/100\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 Total: \xa0 \xa00/100\nTotal:50/100\n")),(0,r.kt)("p",null,"Invalid format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 Total: 55.37/100 \xa0 \xa0 \xa0 # The grade will be set as 55, not 55.37 on Moodle\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": You will need to generate a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html#create-a-project-access-token"},"project access token")," that will allow VMChecker to access Gitlab's API. You will need to give the token access to ",(0,r.kt)("inlineCode",{parentName:"p"},"api"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"read_api"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"read_registry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"write_registry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"read_repository"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"write_repository")," and the role should be at least ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer"),". Also, the project ID for the private repository is needed."),(0,r.kt)("h4",{id:"first-changes-needed"},"First Changes Needed"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Change the ",(0,r.kt)("inlineCode",{parentName:"li"},"DEFAULT_IMAGE_NAME")," with the name of the public repository of your homework in the format ",(0,r.kt)("inlineCode",{parentName:"li"},"groupname/projectname"),". This variable is found in the ",(0,r.kt)("a",{parentName:"li",href:"https://gitlab.cs.pub.ro/vmchecker/vmchecker-next-assignment/-/blob/master/local.sh#L12"},(0,r.kt)("inlineCode",{parentName:"a"},"local.sh")," script")),(0,r.kt)("li",{parentName:"ol"},"Change the image used to the same name set as above in the ",(0,r.kt)("inlineCode",{parentName:"li"},".gitlab-ci.yml")," file on ",(0,r.kt)("a",{parentName:"li",href:"https://gitlab.cs.pub.ro/vmchecker/vmchecker-next-assignment/-/blob/master/.gitlab-ci.yml#L29"},"line 29"))),(0,r.kt)("h3",{id:"21-disable-merge-requests-for-the-public-repository"},"2.1. Disable Merge Requests for the Public Repository"),(0,r.kt)("p",null,"To avoid the possibility of students accidentally sharing their solution, ",(0,r.kt)("strong",{parentName:"p"},"Merge Requests")," for the public repository must be disabled. To do that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to your public project page"),(0,r.kt)("li",{parentName:"ol"},"On the left panel under ",(0,r.kt)("strong",{parentName:"li"},"Settings")," select ",(0,r.kt)("strong",{parentName:"li"},"General")),(0,r.kt)("li",{parentName:"ol"},"Under the ",(0,r.kt)("strong",{parentName:"li"},"Visibility, project features, permissions")," disable ",(0,r.kt)("strong",{parentName:"li"},"Merge Requests"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24795454/170046159-4a45db7a-1a52-48d1-905f-662d0287badf.png",alt:"mr_disable"})),(0,r.kt)("h3",{id:"22-set-up-a-cd-pipeline-for-the-checker-image"},"2.2. Set up a CD Pipeline for the Checker Image"),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},".gitlab-ci.yml")," set the image name for the ",(0,r.kt)("strong",{parentName:"p"},"checker")," step to ",(0,r.kt)("strong",{parentName:"p"},"registry.gitlab.com/\\<group-name",">","/\\<project-name",">",":\\<tag",">")," (e.g: registry.gitlab.com/ASC/Assignment-3-Public:latest)."),(0,r.kt)("h4",{id:"221-build-the-checker-image-using-gitlab-pipelines"},"2.2.1. Build the Checker Image Using Gitlab Pipelines"),(0,r.kt)("p",null,"Set up the ",(0,r.kt)("strong",{parentName:"p"},"BUILD_DOCKER_IMAGE")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/variables/#add-a-cicd-variable-to-a-project"},"pipeline environment variable")," to ",(0,r.kt)("strong",{parentName:"p"},"true")," for your public repository. Each time a new commit is made to the repository a new Docker image build will be triggered. The image will be uploaded to Gitlab's own Docker registry."),(0,r.kt)("h4",{id:"222-build-the-checker-image-manually"},"2.2.2. Build the Checker Image Manually"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./local.sh docker build\n./local.sh docker push --user "$GITLAB_USERNAME" --token "$GITLAB_ACCESS_TOKEN"\n')),(0,r.kt)("p",null,"To create a ",(0,r.kt)("strong",{parentName:"p"},"GITLAB_ACCESS_TOKEN")," access token follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/packages/container_registry/#authenticate-by-using-gitlab-cicd"},"documentation on Gitlab"),"."),(0,r.kt)("p",null,"For more information on ",(0,r.kt)("strong",{parentName:"p"},"local.sh")," run ",(0,r.kt)("inlineCode",{parentName:"p"},"./local.sh -h"),"."),(0,r.kt)("h3",{id:"23-find-the-project-id"},"2.3. Find the Project ID"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to your project page"),(0,r.kt)("li",{parentName:"ol"},"The ID is found under the project name")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24795454/163970448-e4e47e5e-7739-4d09-a60b-b621ed5a0e33.png",alt:"project_id"})),(0,r.kt)("h3",{id:"24-setup-the-gitlab-runner"},"2.4. Setup the Gitlab Runner"),(0,r.kt)("p",null,"Lastly, we need to register our Gitlab Runner, so that our assignment verification jobs get checked. To do that we go to our project and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings > CI/CD > Project Runners"),". While we are here make sure that the option ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable shared runners for this project")," is disabled!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Jokeswar/Investi/assets/24795454/c39f77d6-70b3-4129-8232-e1001f847e56",alt:"add-runner"})),(0,r.kt)("p",null,"Then you will have to select your Operating System and whether to use Docker or Kubernetes to host the runner. Currently, we will use the Docker engine to start and host the GitLab Runner. In this step, make sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"Run untagged jobs")," is checked."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Jokeswar/Investi/assets/24795454/36255270-4afe-4d99-bac4-a8843a0a695a",alt:"runner-config-1"})),(0,r.kt)("p",null,"The Docker runner container was already started as part of the docker-compose command. Finally, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Create runner")," found at the bottom of the page"),(0,r.kt)("p",null,"Now you will be presented with some instructions on how to register the runner instance on your machine with Gitlab. The official documentation is found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/runner/register/index.html#docker"},"here"),". In our case, the command to register the runner is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it vmchecker-test-runner-1 gitlab-runner register\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Jokeswar/Investi/assets/24795454/d3b3cbb3-1725-4c92-acc4-e7597cc334c9",alt:"runner-config-2"})),(0,r.kt)("h2",{id:"3-moodle-setup"},"3. Moodle Setup"),(0,r.kt)("p",null,"First, set up a Moodle ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/311/en/Assignment_activity"},"assignment")," with the following additional settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Submission types ","\u2192"," Submission types ","\u2192"," File submissions"),(0,r.kt)("li",{parentName:"ul"},"Submission types ","\u2192"," Maximum number of uploaded files ","\u2192"," 1"),(0,r.kt)("li",{parentName:"ul"},"Submission types ","\u2192"," Maximum submission size ","\u2192"," 50kb (The ",(0,r.kt)("strong",{parentName:"li"},"maximum")," submission size of VMChecker Next is ",(0,r.kt)("strong",{parentName:"li"},"10 MB"),")"),(0,r.kt)("li",{parentName:"ul"},"Submission types ","\u2192"," Accepted file types ","\u2192"," zip"),(0,r.kt)("li",{parentName:"ul"},"Feedback types ","\u2192"," Offline grading worksheet ","\u2192"," true (enables feedback download)")),(0,r.kt)("p",null,"Next, add a new VMChecker block on the current page by clicking on ",(0,r.kt)("strong",{parentName:"p"},"Add a block")," and selecting ",(0,r.kt)("strong",{parentName:"p"},"VMChecker block")," from the list."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24795454/164005615-a502d467-887a-40b9-8bd9-9a5a473a2f76.png",alt:"add_block"})),(0,r.kt)("p",null,"Click on the gear and select ",(0,r.kt)("strong",{parentName:"p"},"Configure VMChecker block"),". Here you must fill in a couple of options for the ",(0,r.kt)("strong",{parentName:"p"},"VMChecker settings")," header:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable auto-grading of submissions - If you want the assignment to be automatically graded with the mark from the checker"),(0,r.kt)("li",{parentName:"ul"},"Gitlab repository ID - The ",(0,r.kt)("a",{parentName:"li",href:"#21-find-the-project-id"},"project ID")," of your private repository"),(0,r.kt)("li",{parentName:"ul"},"Gitlab ",(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#create-a-personal-access-token"},"private token")," - The previously generated private access token"),(0,r.kt)("li",{parentName:"ul"},"Gitlab branch - The parent branch name from which student branches will have their changes merged and tested in the private repository"),(0,r.kt)("li",{parentName:"ul"},"Assignment - From the list select the assignment you want VMChecker to manage")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WARNING"),": There is a one-to-one relationship between an assignment and a VMChecker block. Make sure there is ",(0,r.kt)("strong",{parentName:"p"},"only one")," VMChecker block per assignment."),(0,r.kt)("p",null,"Save!"),(0,r.kt)("h2",{id:"4-test-your-assignment"},"4. Test Your Assignment"),(0,r.kt)("p",null,"After the setup is done, switch to the student test account and upload your submission. After a couple of minutes, your submission will run on the GitLab CI. You can check your ",(0,r.kt)("a",{parentName:"p",href:"#53-check-a-submission-on-gitlab"},"private repository"),". When the pipeline is finished the trace will be set as feedback for your assignment. If auto-grading is enabled, your submission will also be marked."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": On Moodle, the feedback string will be computed from the trace found on the Gitlab pipeline and will be the first 300 lines of the content between the start of the checker string mark (i.e. ",(0,r.kt)("strong",{parentName:"p"},"<VMCK_NEXT_BEGIN>"),") and the end string mark (i.e. ",(0,r.kt)("strong",{parentName:"p"},"<VMCK_NEXT_END>"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<Pipeline output>\n<VMCK_NEXT_BEGIN>\nTest 1....0              ---|\n.                           |\n.                           |\n.                           |   This will be the feedback for the student assignment.\nTest n...0                  |\n                            |\n    Total 0/100          ---|\n<VMCK_NEXT_END>\n<some more Pipeline output>\n")),(0,r.kt)("h2",{id:"5-grading-an-assignment"},"5. Grading an Assignment"),(0,r.kt)("h3",{id:"51-download-all-submissions"},"5.1. Download All Submissions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the course page on Moodle"),(0,r.kt)("li",{parentName:"ol"},"Click on the assignment"),(0,r.kt)("li",{parentName:"ol"},"Click on the gear and from the drop-down select ",(0,r.kt)("strong",{parentName:"li"},"Download all submissions"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24795454/165136031-2bfaa0b1-4cdd-46e8-bd72-45435235e2e2.png",alt:"download_all"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": If you do not have permission, the assignment page will show the upload form only."),(0,r.kt)("h3",{id:"52-download-grading-worksheet"},"5.2. Download Grading Worksheet"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the course page on Moodle"),(0,r.kt)("li",{parentName:"ol"},"Click on the assignment"),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"View all submissions")),(0,r.kt)("li",{parentName:"ol"},"From the grading action select ",(0,r.kt)("strong",{parentName:"li"},"Download grading worksheet"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24795454/165139873-eb8bc93f-9814-43a7-a926-83c1d0320ccb.png",alt:"download_worksheet"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": You can grade submissions and give feedback in the downloaded CSV."),(0,r.kt)("h3",{id:"53-check-a-submission-on-gitlab"},"5.3. Check a Submission on Gitlab"),(0,r.kt)("p",null,"To check the pipeline of a certain student, go to the assignment's private repository on GitLab. From the menu on the left select ",(0,r.kt)("strong",{parentName:"p"},"Repository")," ","\u2192"," ",(0,r.kt)("strong",{parentName:"p"},"Branches"),". Every student submission has a separate branch of the following format ",(0,r.kt)("inlineCode",{parentName:"p"},"${username}-${year}-${month}-${day}-${hour}-${minute}-${second}-${uuid}"),". Using the search bar, look for the desired submission."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24795454/165287222-68f7bd0d-1622-4b43-b268-e04a5cd3cd75.png",alt:"branches"})),(0,r.kt)("p",null,"To check the user code click on the branch name and check the ",(0,r.kt)("strong",{parentName:"p"},"src")," folder."),(0,r.kt)("p",null,"If you want to see the pipeline output, click on the pipeline status icon."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24795454/165287255-b50a7fef-b37d-4df8-9fd8-9cc73e8ea827.png",alt:"pipeline_select"})),(0,r.kt)("p",null,"Next, click on ",(0,r.kt)("strong",{parentName:"p"},"Jobs")," and select the first job ID."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24795454/165121389-9f554fb3-9e23-4923-87cc-5177f91295ec.png",alt:"jobs"})),(0,r.kt)("h3",{id:"54-import-grades"},"5.4. Import Grades"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the course page on Moodle"),(0,r.kt)("li",{parentName:"ol"},"Click on the assignment"),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"View all submissions")),(0,r.kt)("li",{parentName:"ol"},"From the grading action select ",(0,r.kt)("strong",{parentName:"li"},"Upload grading worksheet"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24795454/165139881-5fcc1496-1cf4-4fa7-bf32-4cf14d3108d6.png",alt:"upload_worksheet"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Upload the worksheet downloaded previously"),(0,r.kt)("li",{parentName:"ol"},"After you preview the changes click ",(0,r.kt)("strong",{parentName:"li"},"Confirm"))),(0,r.kt)("h2",{id:"6-vmchecker-block"},"6. VMChecker block"),(0,r.kt)("h3",{id:"61-recheck-submission-for-"},"6.1. Recheck Submission for ..."),(0,r.kt)("p",null,"In the VMChecker block for the desired assignment select ",(0,r.kt)("strong",{parentName:"p"},"Recheck submission for ..."),", as action. Search in the list for the student, you can use the search bar for a faster lookup. Finally press ",(0,r.kt)("strong",{parentName:"p"},"Run action"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": Only students who have submitted their assignments will be found on the list."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24795454/165276403-5577d4cd-9f96-4f06-88a9-92b0a203de01.png",alt:"recheck_for"})),(0,r.kt)("h3",{id:"62-recheck-all"},"6.2. Recheck All"),(0,r.kt)("p",null,"In the VMChecker block for the desired assignment select ",(0,r.kt)("strong",{parentName:"p"},"Recheck all submissions"),", as action, and press ",(0,r.kt)("strong",{parentName:"p"},"Run action"),". All students who have submitted their homework will have their last submission rechecked."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/24795454/165276413-04b24be0-f91e-4ad6-a668-f3e9bfdfa20d.png",alt:"recheck_all"})))}h.isMDXComponent=!0}}]);