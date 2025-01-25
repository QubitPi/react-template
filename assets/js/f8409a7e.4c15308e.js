"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[206],{4354:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(5893),s=i(1151);function o(e){let{src:n}=e;return(0,t.jsx)("div",{style:{height:"0px",paddingBottom:"calc(56.8359% + 41px)",position:"relative",width:"100%"},children:(0,t.jsx)("iframe",{src:n,loading:"lazy",allowFullScreen:!0,allow:"fullscreen;",style:{colorScheme:"light",height:"100%",left:"0px",position:"absolute",top:"0px",width:"100%"}})})}const r={sidebar_position:1,title:"Getting Started"},a=void 0,l={id:"intro",title:"Getting Started",description:"FastUI is a methodology for creating monorepo React applications. It offers a modern build setup with no configuration.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/fast-ui/tree/master/docs/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"tutorialSidebar",next:{title:"Managing App States",permalink:"/docs/redux"}},c={},d=[{value:"Creating a Repository from GitHub Template",id:"creating-a-repository-from-github-template",level:2},{value:"After Creating the Repository",id:"after-creating-the-repository",level:2},{value:"Quick Start",id:"quick-start",level:3},{value:"Scripts",id:"scripts",level:3},{value:"<code>yarn start</code>",id:"yarn-start",level:4},{value:"<code>yarn test</code>",id:"yarn-test",level:4},{value:"<code>yarn cypress:open</code> and <code>yarn e2e</code>",id:"yarn-cypressopen-and-yarn-e2e",level:4},{value:"<code>yarn build</code>",id:"yarn-build",level:4},{value:"Enabling Automatic Deployment to GitHub Pages",id:"enabling-automatic-deployment-to-github-pages",level:3},{value:"Enabling Argos Visual Testing",id:"enabling-argos-visual-testing",level:3},{value:"Enabling sentry.io Application Monitoring",id:"enabling-sentryio-application-monitoring",level:3},{value:"Creating a Sentry Project",id:"creating-a-sentry-project",level:4},{value:"UI Walkthrough",id:"ui-walkthrough",level:5},{value:"Adding the Sentry SDK to Project",id:"adding-the-sentry-sdk-to-project",level:4},{value:"Uploading sourcemap",id:"uploading-sourcemap",level:4},{value:"Developing App",id:"developing-app",level:2},{value:"Automatically Formatting Codebase",id:"automatically-formatting-codebase",level:3},{value:"Importing SVG",id:"importing-svg",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"FastUI is a methodology for creating monorepo React applications. It offers a modern build setup with no configuration."}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-repository-from-github-template",children:"Creating a Repository from GitHub Template"}),"\n",(0,t.jsxs)(n.p,{children:["We can click on this link to generate a repository using the template:\n",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/fast-ui/generate",children:"Create a new repository"})," from QubitPi/fast-ui.\nAlternatively, we can visit the ",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/fast-ui",children:"fast-ui repository on GitHub"}),' and\nclick on the "Use this template" button on the top-right.']}),"\n",(0,t.jsx)(n.p,{children:"In both cases, the next steps are:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Enter a name for the new repository."}),"\n",(0,t.jsx)(n.li,{children:'Uncheck "Include all branches".'}),"\n",(0,t.jsx)(n.li,{children:'Click on "Create repository from template".'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more details on how to create repositories using template, read the article on the GitHub website:\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template",children:"Creating a repository from a template"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["If the repository is public, GitHub offers unlimited free build minutes. If it's a private repository, however,\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions#included-storage-and-minutes",children:"billing policy"}),"\napplies"]})}),"\n",(0,t.jsx)(n.h2,{id:"after-creating-the-repository",children:"After Creating the Repository"}),"\n",(0,t.jsxs)(n.p,{children:["At this point, A ReactJS project with just what we need to start quickly has been generated. Developer can now\nstart adding business value and ",(0,t.jsx)(n.strong,{children:"get work done much faster in a standard way"}),". The following sections of this\ndocumentation contain further details on how to proceed next."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The following steps apply to the newly created repository, not the QubitPi/fast-ui template repository."})}),"\n",(0,t.jsx)(n.h3,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"yarn\nyarn start\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then open ",(0,t.jsx)(n.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"})," to see the app. When we are ready to deploy to production, create a minified bundle\nwith"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"yarn build\n"})}),"\n",(0,t.jsx)(n.p,{children:"That's it. We don't need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that\nwe can focus on the code."}),"\n",(0,t.jsx)(n.h3,{id:"scripts",children:"Scripts"}),"\n",(0,t.jsx)(n.p,{children:"Inside the newly created project, we can run some built-in commands:"}),"\n",(0,t.jsx)(n.h4,{id:"yarn-start",children:(0,t.jsx)(n.code,{children:"yarn start"})}),"\n",(0,t.jsxs)(n.p,{children:["Runs the app in development mode. Open ",(0,t.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," to view it in the browser. The page automatically reloads\nif we make changes to the code. we will see the build errors and lint warnings in the console."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(2624).Z+"",width:"825",height:"595"})}),"\n",(0,t.jsx)(n.h4,{id:"yarn-test",children:(0,t.jsx)(n.code,{children:"yarn test"})}),"\n",(0,t.jsx)(n.p,{children:"Runs the unit tests"}),"\n",(0,t.jsxs)(n.h4,{id:"yarn-cypressopen-and-yarn-e2e",children:[(0,t.jsx)(n.code,{children:"yarn cypress:open"})," and ",(0,t.jsx)(n.code,{children:"yarn e2e"})]}),"\n",(0,t.jsx)(n.p,{children:"Opens Cypress End-to-End test console and runs the End-to-End tests, respectively"}),"\n",(0,t.jsx)(n.h4,{id:"yarn-build",children:(0,t.jsx)(n.code,{children:"yarn build"})}),"\n",(0,t.jsx)(n.p,{children:"Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build\nfor the best performance. The build is minified and the filenames include the hashes."}),"\n",(0,t.jsx)(n.p,{children:"Our app is ready to be deployed."}),"\n",(0,t.jsx)(n.h3,{id:"enabling-automatic-deployment-to-github-pages",children:"Enabling Automatic Deployment to GitHub Pages"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"- ```jsx {3}\n+ ```jsx {4}\n  function HighlightSomeText(highlight) {\n    if (highlight) {\n+     console.log('Highlighted text found');\n      return 'This text is highlighted!';\n    }\n\n    return 'Nothing highlighted';\n  }\n  ```\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"---\nname: CI/CD\n\n\"on\":\n  pull_request:\n  push:\n    branches:\n      - master\n\nenv:\n  USER: MyGitHubUsername\n  EMAIL: myemail@email.com\n  NODE_VERSION: 18\n\njobs:\n-  documentation-ci-cd:\n-    name: Test and Deploy Documentation to GitHub Pages\n-    needs: e2e-tests\n-    runs-on: ubuntu-latest\n-    defaults:\n-      run:\n-        working-directory: docs\n-    steps:\n-      - uses: actions/checkout@v3\n-      - uses: actions/setup-node@v3\n-        with:\n-          node-version: ${{ env.NODE_VERSION }}\n-      - name: Install nexusgraph dependencies so that TypeDoc process source files properly\n-        run: cd ../ && yarn install\n-        env:\n-          YARN_ENABLE_IMMUTABLE_INSTALLS: false\n-      - name: Install doc dependencies\n-        run: yarn install\n-        env:\n-          YARN_ENABLE_IMMUTABLE_INSTALLS: false\n-      - name: Build documentation\n-        run: yarn build\n-      - name: Load CNAME\n-        run: echo fastui.qubitpi.org > build/CNAME\n-      - name: Deploy to GitHub Pages\n-        if: github.ref == 'refs/heads/master'\n-        uses: peaceiris/actions-gh-pages@v3\n-        with:\n-          github_token: ${{ secrets.GITHUB_TOKEN }}\n-          publish_dir: ./docs/build\n-          enable_jekyll: false\n-          user_name: ${{ env.USER }}\n-          user_email: ${{ env.EMAIL }}\n+  deploy:\n+    name: Deploy to GitHub Pages\n+    needs: e2e-tests\n+    runs-on: ubuntu-latest\n+    steps:\n+      - uses: actions/checkout@v3\n+        with:\n+          fetch-depth: 0\n+      - name: Set node version to ${{ env.node_version }}\n+        uses: actions/setup-node@v3\n+        with:\n+          node-version: ${{ env.node_version }}\n+      - name: Install dependencies\n+        run: npm install -g yarn@1.22.19 && yarn\n+      - name: Test production build\n+        run: yarn build\n+      - name: Load CNAME\n+        run: cp CNAME dist\n+      - name: Deploy to GitHub Pages\n+        if: github.ref == 'refs/heads/master'\n+        uses: peaceiris/actions-gh-pages@v3\n+        with:\n+          github_token: ${{ secrets.GITHUB_TOKEN }}\n+          publish_dir: dist\n+          enable_jekyll: false\n+          user_name: ${{ env.USER }}\n+          user_email: ${{ env.EMAIL }}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Please replace ",(0,t.jsx)(n.code,{children:"MyGitHubUsername"})," and ",(0,t.jsx)(n.code,{children:"myemail@email.com"})," accordingly"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"enabling-argos-visual-testing",children:"Enabling Argos Visual Testing"}),"\n",(0,t.jsxs)(n.p,{children:["To enable the ",(0,t.jsx)(n.a,{href:"https://argos-ci.com/",children:"Argos"}),",\n",(0,t.jsx)(n.a,{href:"https://argos-ci.com/docs/github#import-a-github-repository-to-argos",children:"create an Argos project"})," first. To upload\nsnapshot to Argos CI, an ",(0,t.jsx)(n.code,{children:"ARGOS_TOKEN"})," is required and can be obtained after creating the Argos project."]}),"\n",(0,t.jsxs)(n.p,{children:["After getting the ",(0,t.jsx)(n.code,{children:"ARGOS_TOKEN"})," token, add it as a repository secret:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the newly created repository, select ",(0,t.jsx)(n.strong,{children:"Settings"})]}),"\n",(0,t.jsxs)(n.li,{children:["In the left sidebar, click ",(0,t.jsx)(n.strong,{children:"Secrets and variables"})," followed by ",(0,t.jsx)(n.strong,{children:"Actions"})]}),"\n",(0,t.jsxs)(n.li,{children:["Press the button ",(0,t.jsx)(n.strong,{children:"New repository secret"})]}),"\n",(0,t.jsxs)(n.li,{children:["Enter the name of the secret as ",(0,t.jsx)(n.code,{children:"ARGOS_TOKEN"})]}),"\n",(0,t.jsx)(n.li,{children:"Paste the token from the project on Argos CI"}),"\n",(0,t.jsx)(n.li,{children:"Be sure there are no spaces before or after the token and/or linebreaks after the token"}),"\n",(0,t.jsxs)(n.li,{children:["Save the secret by selecting ",(0,t.jsx)(n.strong,{children:"Add secret"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For more information on GitHub Secrets, please refer to the GitHub documentation:\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions",children:"Using secrets in GitHub Actions"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"enabling-sentryio-application-monitoring",children:"Enabling sentry.io Application Monitoring"}),"\n",(0,t.jsx)(n.h4,{id:"creating-a-sentry-project",children:"Creating a Sentry Project"}),"\n",(0,t.jsx)(n.p,{children:"In order to capture errors and other events, we need to have a project set up in Sentry. This section walks through how\nto create a new project in our Sentry account. We need to have a project set up in Sentry in order to capture errors and\nother events."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For more information, see sentry.io's documentation on\n",(0,t.jsx)(n.a,{href:"https://docs.sentry.io/organization/getting-started/#4-create-projects",children:"best practices for creating projects"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps below to create a new Sentry project for a our React application:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Log in to your ",(0,t.jsx)(n.a,{href:"https://sentry.io/",children:"Sentry organization"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Projects"})," from the left side navigation menu to display the list of all our projects."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create Project"})," and configure it as appropriate for our application:"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Choose your platform"}),": Select the language or framework for our project based on the code we wish to monitor.\nIn this case, choose ",(0,t.jsx)(n.strong,{children:"React"})," ",(0,t.jsx)(n.img,{src:i(93).Z+"",width:"66",height:"68"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Set your alert frequency"}),": For the purpose of our setup, select ",(0,t.jsx)(n.strong,{children:"I'll create my own alerts later"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Learn more about how to set up your alerts in ",(0,t.jsx)(n.a,{href:"https://docs.sentry.io/product/alerts/best-practices/",children:"Alerts Best Practices"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name your project and assign it a team"}),": Name the project in the ",(0,t.jsx)(n.strong,{children:"Project name"})," field and assign a team by\nselecting one in the ",(0,t.jsx)(n.strong,{children:"Team"})," dropdown (or click ",(0,t.jsx)(n.strong,{children:"+"})," to create a new team)."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create Project"}),". This takes us to the quick Configure React SDK guide, which provides an overview of how\nto configure the SDK. This section covers the SDK setup in more detail."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Copy the DSN key and keep it handy. Each project has a unique DSN (Data Source Name). The DSN tells the SDK where to\nsend events, so events are associated with the right project. We'll need to paste the DSN key into our source code\nlater so the errors generated in the React app go to our new project."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["We can also find a project's DSN anytime in ",(0,t.jsx)(n.strong,{children:"[Project]"})," > ",(0,t.jsx)(n.strong,{children:"Settings"})," > ",(0,t.jsx)(n.strong,{children:"Client Keys (DSN)"}),"."]}),"\n",(0,t.jsx)(n.h5,{id:"ui-walkthrough",children:"UI Walkthrough"}),"\n","\n","\n",(0,t.jsx)(o,{src:"https://demo.arcade.software/IUuJGLUBdRIa2yBFE35v?embed"}),"\n",(0,t.jsx)(n.h4,{id:"adding-the-sentry-sdk-to-project",children:"Adding the Sentry SDK to Project"}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/fast-ui/blob/master/packages/fast-ui-app/src/index.tsx",children:"src/index.tsx"})," and change the\nfollowing lines of code as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'  Sentry.init({\n-    dsn: "https://5e82dcf741091e63d616982f0cbcf0e5@o4505480921022464.ingest.us.sentry.io/4508702863589376",\n+    dsn: "<your_DSN_key>",\n'})}),"\n",(0,t.jsxs)(n.p,{children:["where ",(0,t.jsx)(n.code,{children:"<your_DSN_key>"})," is the DSN obtained in previous step."]}),"\n",(0,t.jsxs)(n.p,{children:["The template configuration enables Sentry's error monitoring feature, as well as its\n",(0,t.jsx)(n.a,{href:"https://docs.sentry.io/platforms/javascript/guides/react/performance/",children:"Performance"})," (tracing) and\n",(0,t.jsx)(n.a,{href:"https://docs.sentry.io/platforms/javascript/guides/react/session-replay/",children:"Session Replay"})," features."]}),"\n",(0,t.jsx)(n.h4,{id:"uploading-sourcemap",children:"Uploading sourcemap"}),"\n",(0,t.jsx)(n.p,{children:"Add"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"        env:\n          SENTRY_AUTH_TOKEN: ${{ secrets.SENTRY_AUTH_TOKEN }}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"developing-app",children:"Developing App"}),"\n",(0,t.jsx)(n.h3,{id:"automatically-formatting-codebase",children:"Automatically Formatting Codebase"}),"\n",(0,t.jsx)(n.p,{children:'When CI/CD complains about "Code style check" as the following:'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(2860).Z+"",width:"634",height:"196"})}),"\n",(0,t.jsx)(n.p,{children:"Simply run the following command at project root which will auto formatting the codebase using Prettier:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"yarn prettier --ignore-path .gitignore . --write\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["It's always a good practice to auto-formatting code whenever convenient ",(0,t.jsx)("img",{src:"https://github.com/QubitPi/QubitPi/blob/master/img/%E5%BF%83%E6%B5%B7.png?raw=true",width:"60px"})]})}),"\n",(0,t.jsx)(n.h3,{id:"importing-svg",children:"Importing SVG"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"live",live:!0,children:'import MySvg from "./example.svg"\n\nfunction MyComponent(): JSX.Element {\n  return (\n    <div className="svgIcon">\n      <img src={MySvg} alt="MySvg" />\n    </div>\n);\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},2860:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/cicd-code-style-check-error-example-8425a34d29ebea0bf295855b8aae7aa1.png"},2624:(e,n,i)=>{i.d(n,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODI1IiBoZWlnaHQ9IjU5NS4yNSI+PHJlY3Qgd2lkdGg9IjgyNSIgaGVpZ2h0PSI1OTUuMjUiIHJ4PSI1IiByeT0iNSIgY2xhc3M9ImEiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSI4LjUiIGZpbGw9IiNmZjVmNTgiLz48Y2lyY2xlIGN4PSI0NyIgY3k9IjIwIiByPSI4LjUiIGZpbGw9IiNmZmJkMmUiLz48Y2lyY2xlIGN4PSI3NCIgY3k9IjIwIiByPSI4LjUiIGZpbGw9IiMxOGMxMzIiLz48c3ZnIGhlaWdodD0iNTQyLjc1IiB2aWV3Qm94PSIwIDAgODAgNTQuMjc1IiB3aWR0aD0iODAwIiB4PSIxMi41IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSI0MCI+PHN0eWxlPi5he2ZpbGw6IzI4MmQzNX0uZ3tmaWxsOiNlODgzODh9Lmh7ZmlsbDojYjljMGNifS5pe2ZpbGw6IzZmNzc4M30ua3tmaWxsOiNlODgzODg7Zm9udC13ZWlnaHQ6NzAwfS5se2ZpbGw6I2RiYWI3OX0ubXtmaWxsOiNhOGNjOGN9PC9zdHlsZT48ZyBmb250LXNpemU9IjEuNjciIGZvbnQtZmFtaWx5PSJNb25hY28sQ29uc29sYXMsTWVubG8sJ0JpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubycsJ1Bvd2VybGluZSBTeW1ib2xzJyxtb25vc3BhY2UiPjxkZWZzPjxzeW1ib2wgaWQ9ImEiPjxwYXRoIGZpbGw9InRyYW5zcGFyZW50IiBkPSJNMCAwaDgwdjI1SDB6Ii8+PC9zeW1ib2w+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMCAwaDgwdjU0LjI3NUgweiIvPjxzdmcgd2lkdGg9IjgwIj48c3ZnPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48dGV4dCB5PSIxLjY3IiBjbGFzcz0iZyI+RmFpbGVkPC90ZXh0Pjx0ZXh0IHg9IjcuMDE0IiB5PSIxLjY3IiBjbGFzcz0iZyI+dG88L3RleHQ+PHRleHQgeD0iMTAuMDIiIHk9IjEuNjciIGNsYXNzPSJnIj5jb21waWxlLjwvdGV4dD48cGF0aCBjbGFzcz0iaCIgZD0iTTAgNC4zNDJoMTJ2Mi4xNzFIMHoiLz48dGV4dCB5PSI2LjAxMiIgY2xhc3M9ImEiPi4vc3JjL0FwcC5qczwvdGV4dD48dGV4dCB5PSI4LjE4MyIgY2xhc3M9ImgiPlN5bnRheDwvdGV4dD48dGV4dCB4PSI3LjAxNCIgeT0iOC4xODMiIGNsYXNzPSJoIj5lcnJvcjo8L3RleHQ+PHRleHQgeD0iMTQuMDI4IiB5PSI4LjE4MyIgY2xhc3M9ImgiPlVuZXhwZWN0ZWQ8L3RleHQ+PHRleHQgeD0iMjUuMDUiIHk9IjguMTgzIiBjbGFzcz0iaCI+dG9rZW48L3RleHQ+PHRleHQgeD0iMzEuMDYyIiB5PSI4LjE4MyIgY2xhc3M9ImgiPig4OjcpPC90ZXh0Pjx0ZXh0IHg9IjMuMDA2IiB5PSIxMi41MjUiIGNsYXNzPSJpIj42PC90ZXh0Pjx0ZXh0IHg9IjUuMDEiIHk9IjEyLjUyNSIgY2xhc3M9ImkiPnw8L3RleHQ+PHRleHQgeD0iOS4wMTgiIHk9IjEyLjUyNSIgY2xhc3M9ImgiPnJlbmRlcigpPC90ZXh0Pjx0ZXh0IHg9IjE4LjAzNiIgeT0iMTIuNTI1IiBjbGFzcz0iaCI+ezwvdGV4dD48dGV4dCB4PSIzLjAwNiIgeT0iMTQuNjk2IiBjbGFzcz0iaSI+NzwvdGV4dD48dGV4dCB4PSI1LjAxIiB5PSIxNC42OTYiIGNsYXNzPSJpIj58PC90ZXh0Pjx0ZXh0IHg9IjExLjAyMiIgeT0iMTQuNjk2IiBmaWxsPSIjNjZjMmNkIj5yZXR1cm48L3RleHQ+PHRleHQgeD0iMTguMDM2IiB5PSIxNC42OTYiIGNsYXNzPSJoIj4oPC90ZXh0Pjx0ZXh0IHk9IjE2Ljg2NyIgY2xhc3M9ImsiPiZndDs8L3RleHQ+PHRleHQgeD0iMy4wMDYiIHk9IjE2Ljg2NyIgY2xhc3M9ImkiPjg8L3RleHQ+PHRleHQgeD0iNS4wMSIgeT0iMTYuODY3IiBjbGFzcz0iaSI+fDwvdGV4dD48dGV4dCB4PSIxMy4wMjYiIHk9IjE2Ljg2NyIgY2xhc3M9ImwiPiZsdDsmbHQ7ZGl2PC90ZXh0Pjx0ZXh0IHg9IjE5LjAzOCIgeT0iMTYuODY3IiBjbGFzcz0iaCI+Y2xhc3NOYW1lPC90ZXh0Pjx0ZXh0IHg9IjI4LjA1NiIgeT0iMTYuODY3IiBjbGFzcz0ibCI+PTwvdGV4dD48dGV4dCB4PSIyOS4wNTgiIHk9IjE2Ljg2NyIgY2xhc3M9Im0iPiZxdW90O0FwcCZxdW90OzwvdGV4dD48dGV4dCB4PSIzNC4wNjgiIHk9IjE2Ljg2NyIgY2xhc3M9ImwiPiZndDs8L3RleHQ+PHRleHQgeD0iNS4wMSIgeT0iMTkuMDM4IiBjbGFzcz0iaSI+fDwvdGV4dD48dGV4dCB4PSIxNC4wMjgiIHk9IjE5LjAzOCIgY2xhc3M9ImsiPl48L3RleHQ+PHRleHQgeD0iMy4wMDYiIHk9IjIxLjIwOSIgY2xhc3M9ImkiPjk8L3RleHQ+PHRleHQgeD0iNS4wMSIgeT0iMjEuMjA5IiBjbGFzcz0iaSI+fDwvdGV4dD48dGV4dCB4PSIxNS4wMyIgeT0iMjEuMjA5IiBjbGFzcz0ibCI+Jmx0O2hlYWRlcjwvdGV4dD48dGV4dCB4PSIyMy4wNDYiIHk9IjIxLjIwOSIgY2xhc3M9ImgiPmNsYXNzTmFtZTwvdGV4dD48dGV4dCB4PSIzMi4wNjQiIHk9IjIxLjIwOSIgY2xhc3M9ImwiPj08L3RleHQ+PHRleHQgeD0iMzMuMDY2IiB5PSIyMS4yMDkiIGNsYXNzPSJtIj4mcXVvdDtBcHAtaGVhZGVyJnF1b3Q7PC90ZXh0Pjx0ZXh0IHg9IjQ1LjA5IiB5PSIyMS4yMDkiIGNsYXNzPSJsIj4mZ3Q7PC90ZXh0Pjx0ZXh0IHg9IjIuMDA0IiB5PSIyMy4zOCIgY2xhc3M9ImkiPjEwPC90ZXh0Pjx0ZXh0IHg9IjUuMDEiIHk9IjIzLjM4IiBjbGFzcz0iaSI+fDwvdGV4dD48dGV4dCB4PSIxNy4wMzQiIHk9IjIzLjM4IiBjbGFzcz0ibCI+Jmx0O2ltZzwvdGV4dD48dGV4dCB4PSIyMi4wNDQiIHk9IjIzLjM4IiBjbGFzcz0iaCI+c3JjPC90ZXh0Pjx0ZXh0IHg9IjI1LjA1IiB5PSIyMy4zOCIgY2xhc3M9ImwiPj08L3RleHQ+PHRleHQgeD0iMjYuMDUyIiB5PSIyMy4zOCIgY2xhc3M9ImgiPntsb2dvfTwvdGV4dD48dGV4dCB4PSIzMy4wNjYiIHk9IjIzLjM4IiBjbGFzcz0iaCI+Y2xhc3NOYW1lPC90ZXh0Pjx0ZXh0IHg9IjQyLjA4NCIgeT0iMjMuMzgiIGNsYXNzPSJsIj49PC90ZXh0Pjx0ZXh0IHg9IjQzLjA4NiIgeT0iMjMuMzgiIGNsYXNzPSJtIj4mcXVvdDtBcHAtbG9nbyZxdW90OzwvdGV4dD48dGV4dCB4PSI1NC4xMDgiIHk9IjIzLjM4IiBjbGFzcz0iaCI+YWx0PC90ZXh0Pjx0ZXh0IHg9IjU3LjExNCIgeT0iMjMuMzgiIGNsYXNzPSJsIj49PC90ZXh0Pjx0ZXh0IHg9IjU4LjExNiIgeT0iMjMuMzgiIGNsYXNzPSJtIj4mcXVvdDtsb2dvJnF1b3Q7PC90ZXh0Pjx0ZXh0IHg9IjY1LjEzIiB5PSIyMy4zOCIgY2xhc3M9ImwiPi8mZ3Q7PC90ZXh0Pjx0ZXh0IHg9IjIuMDA0IiB5PSIyNS41NTEiIGNsYXNzPSJpIj4xMTwvdGV4dD48dGV4dCB4PSI1LjAxIiB5PSIyNS41NTEiIGNsYXNzPSJpIj58PC90ZXh0Pjx0ZXh0IHg9IjE3LjAzNCIgeT0iMjUuNTUxIiBjbGFzcz0ibCI+Jmx0O2gxPC90ZXh0Pjx0ZXh0IHg9IjIxLjA0MiIgeT0iMjUuNTUxIiBjbGFzcz0iaCI+Y2xhc3NOYW1lPC90ZXh0Pjx0ZXh0IHg9IjMwLjA2IiB5PSIyNS41NTEiIGNsYXNzPSJsIj49PC90ZXh0Pjx0ZXh0IHg9IjMxLjA2MiIgeT0iMjUuNTUxIiBjbGFzcz0ibSI+JnF1b3Q7QXBwLXRpdGxlJnF1b3Q7PC90ZXh0Pjx0ZXh0IHg9IjQyLjA4NCIgeT0iMjUuNTUxIiBjbGFzcz0ibCI+Jmd0O1dlbGNvbWU8L3RleHQ+PHRleHQgeD0iNTEuMTAyIiB5PSIyNS41NTEiIGNsYXNzPSJoIj50bzwvdGV4dD48dGV4dCB4PSI1NC4xMDgiIHk9IjI1LjU1MSIgY2xhc3M9ImwiPlJlYWN0Jmx0Oy9oMSZndDs8L3RleHQ+PC9zdmc+PC9zdmc+PC9nPjwvc3ZnPjwvc3ZnPg=="},93:(e,n,i)=>{i.d(n,{Z:()=>t});const t="data:image/png;base64,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"},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(7294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);