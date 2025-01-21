"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[487],{892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(5893),s=t(1151);const o={slug:"d3-with-react",title:"D3 with React",authors:"jiaqi",tags:["React","D3"]},a=void 0,r={permalink:"/blog/d3-with-react",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-04-23-d3-with-react.md",source:"@site/blog/2023-04-23-d3-with-react.md",title:"D3 with React",description:"Looking into data visualization it seems clear that the library with the greatest capability and flexibility is",date:"2023-04-23T00:00:00.000Z",formattedDate:"April 23, 2023",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"D3",permalink:"/blog/tags/d-3"}],readingTime:11.355,hasTruncateMarker:!1,authors:[{name:"Jiaqi Liu",title:"Maintainer of fast-ui",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"d3-with-react",title:"D3 with React",authors:"jiaqi",tags:["React","D3"]},unlisted:!1},l={authorsImageUrls:[void 0]},d=[{value:"Compatibility with React",id:"compatibility-with-react",level:2},{value:"Configurable D3 Graph",id:"configurable-d3-graph",level:2},{value:"D3 with React Hooks",id:"d3-with-react-hooks",level:3},{value:"useRef Hook",id:"useref-hook",level:3},{value:"useEffect Hook",id:"useeffect-hook",level:3},{value:"Generating Force Graph Simulation",id:"generating-force-graph-simulation",level:3},{value:"Grouping Nodes and Links for Batch Operations",id:"grouping-nodes-and-links-for-batch-operations",level:3},{value:"Defining the Graph Re-Drawing",id:"defining-the-graph-re-drawing",level:3},{value:"Understanding enter() and exit()",id:"understanding-enter-and-exit",level:4},{value:"Understanding <code>linesg.selectAll(&quot;line.link&quot;)</code>",id:"understanding-linesgselectalllinelink",level:4},{value:"Defining Behavior",id:"defining-behavior",level:3},{value:"Reference",id:"reference",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Looking into data visualization it seems clear that the library with the greatest capability and flexibility is\n",(0,i.jsx)(n.a,{href:"https://d3js.org/",children:"D3"}),', which has over a thousand methods. It goes down to such base components that it does not even consider itself\nto be a data visualization library, but instead provides "efficient manipulation of documents based on data". Basically\nit binds data to DOM objects and gives us lots of ways to manipulate them, which is used by a lot of people to\nmanipulate SVG graphics, and thus data visualization. It appears to have a bit of a learning curve but we are up for\nit. I would rather learn something new than get bottle-necked later using a prebuilt library.']}),"\n",(0,i.jsx)(n.h2,{id:"compatibility-with-react",children:"Compatibility with React"}),"\n",(0,i.jsxs)(n.p,{children:["There is a fundamental compatibility issue between React and D3. Because React creates a\n",(0,i.jsx)(n.a,{href:"https://reactjs.org/docs/faq-internals.html",children:"Virtual DOM"}),", and D3 works by creating and manipulating objects in the actual DOM, we have to find a way\nto get D3 working inside the Virtual DOM. This problem has been solved a number of different ways"]}),"\n",(0,i.jsxs)(n.p,{children:["We would think that there would just be a package that would handle this. There is a package called\n",(0,i.jsx)(n.a,{href:"https://github.com/react-d3-library/react-d3-library",children:"react-d3-library"})," that purported to let us use stock D3 code in React with just a few adjustments.\nHowever this package is no longer maintained and the last commit was 4 years ago. So this does not seem like the route\nto go down."]}),"\n",(0,i.jsxs)(n.p,{children:["Some advocate a combination of ",(0,i.jsx)(n.code,{children:"useRef"})," to direct D3 to an SVG and ",(0,i.jsx)(n.code,{children:"useEffect"})," to manipulate it."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://blog.griddynamics.com/using-d3-js-with-react-js-an-8-step-comprehensive-manual/",children:"griddynamics: Using D3.js with React.js: An 8-step comprehensive manual"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://blog.logrocket.com/using-d3-js-v6-with-react/",children:"LogRocket: Using D3.js v6 with React"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configurable-d3-graph",children:"Configurable D3 Graph"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.h3,{id:"d3-with-react-hooks",children:"D3 with React Hooks"}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"React Function Components"})," with Hooks gives us a nice way to integrate D3 with React. There are many related articles\nthat describe this already but they get in the weeds and complicated quickly. This discussion is just the basics on\nwhere to put things to get started correctly. We can expand from there."]}),(0,i.jsx)(n.p,{children:"In the past it was confusing to find the correct places to put D3 code, especially for someone new to D3 still getting\ntheir head wrapped around D3's way of doing things. Optimization to minimize re-rendering was an advanced task when it\nshould be easy."}),(0,i.jsx)(n.p,{children:"Function Components with Hooks cleans this up quite a bit. There is one place to put D3, one way to connect it to\nReact's DOM, and re-render logic is mostly built in."}),(0,i.jsx)(n.h3,{id:"useref-hook",children:"useRef Hook"}),(0,i.jsx)(n.p,{children:"We're building a function not a class. There are no class member variables so we need a way to hold onto an object\nacross multiple rendering passes."}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"useRef()"})," creates a variable that does just that. The variable acts a lot like a class member variable without the\nclass. We utilize ",(0,i.jsx)(n.code,{children:"useRef()"}),' to hold onto the DOM element containing our D3 content. A ref is "get" and "set" via its\n',(0,i.jsx)(n.code,{children:".current"})," property."]}),(0,i.jsx)(n.h3,{id:"useeffect-hook",children:"useEffect Hook"}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"useEffect()"})," gives us a place to put side effects such as our D3 code. It's a side effect because it adds content to\nthe DOM outside of React's virtual DOM mechanism."]}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useEffect()"})," is like ",(0,i.jsx)(n.code,{children:"componentDidMount()"})," and ",(0,i.jsx)(n.code,{children:"componentWillReceiveProps()"})," combined, with change detection as a\nfirst-class feature."]})})]}),"\n",(0,i.jsx)(n.p,{children:":::"}),"\n",(0,i.jsxs)(n.p,{children:["Here is the part of code that reflects the usage of ",(0,i.jsx)(n.code,{children:"useRef"})," and ",(0,i.jsx)(n.code,{children:"useEffect"})," as well as how Messier-61 components\nhandles drawing knowledge graph in D3"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import React, { useEffect, useRef } from "react";\nimport * as d3 from "d3";\nimport styles from "./D3Graph.module.css";\nimport type { Node, Link, GraphConfig } from "../GraphConfig";\n\nexport function D3Graph(graphConfig: GraphConfig): JSX.Element {\n  const svgRef = useRef(null);\n\n  const width = graphConfig.canvasConfig.width;\n  const height = graphConfig.canvasConfig.height;\n\n  const nodes: any[] = initializeNodes(graphConfig.graphData.nodes);\n  let links: any[] = initializeLinks(graphConfig.graphData.links);\n\n  useEffect(() => {\n    ... // graph rendering and listener logics\n  }, [nodes, links, svgRef.current]);\n\n  const stylesName = [styles.g, styles.node, styles.line, styles.link, styles.newLine];\n  return <svg ref={svgRef} width={width} height={height} className={stylesName.join(" ")}></>;\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"Here is what the code above is doing:"}),"\n",(0,i.jsxs)(n.p,{children:["Call ",(0,i.jsx)(n.code,{children:"useRef()"})," to create a variable (",(0,i.jsx)(n.code,{children:"svgRef"}),") to hold the SVG element. Initialize it as ",(0,i.jsx)(n.code,{children:"null"}),". React will set it the\nfirst time the page is rendered."]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["Why not just use ",(0,i.jsx)(n.code,{children:"d3.select()"})," to get the SVG element, or insert the SVG element using pure D3?"]}),(0,i.jsxs)(n.p,{children:["By using a ref variable we can use it as a ",(0,i.jsx)(n.strong,{children:"dependency"})," in our ",(0,i.jsx)(n.code,{children:"useEffect()"})," block to detect when the element has\nactually been rendered and available."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Call ",(0,i.jsx)(n.code,{children:"useEffect()"})," to execute our D3 code which draws graph on canvas. ",(0,i.jsx)(n.code,{children:"useEffect()"})," takes two arguments"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"a function to run, and"}),"\n",(0,i.jsx)(n.li,{children:"an array of dependency variables"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useEffect()"})," will run every time one of the dependency variables changes. Because we listed graph ",(0,i.jsx)(n.code,{children:"nodes"})," and ",(0,i.jsx)(n.code,{children:"links"}),"\nas dependencies, ",(0,i.jsx)(n.code,{children:"useEffect()"})," will run again whenever graph data changes. We don't need to write code to compare old\nand new data for changes anymore!"]}),"\n",(0,i.jsxs)(n.p,{children:["The Function Component returns an SVG element, and its ref attribute is set to ",(0,i.jsx)(n.code,{children:"svgRef"})," - the ref variable we declared\nat the top of the function."]}),"\n",(0,i.jsx)(n.p,{children:"React will run our D3 code when the DOM is ready and when the data changes."}),"\n",(0,i.jsx)(n.h3,{id:"generating-force-graph-simulation",children:"Generating Force Graph Simulation"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Due to changes in namespace from v3 to v4"}),". The force layout ",(0,i.jsx)(n.code,{children:"d3.layout.force"})," has been\n",(0,i.jsx)(n.a,{href:"https://github.com/d3/d3/blob/master/CHANGES.md#forces-d3-force",children:"renamed"})," to ",(0,i.jsx)(n.a,{href:"https://github.com/d3/d3-force",children:(0,i.jsx)(n.code,{children:"d3.forceSimulation"})}),(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1-e99c49",id:"user-content-fnref-1-e99c49","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),". ",(0,i.jsxs)(n.em,{children:["It\nis, therefore, strongly recommended to read ",(0,i.jsxs)(n.a,{href:"https://github.com/d3/d3-force",children:[(0,i.jsx)(n.code,{children:"d3.forceSimulation"})," documentation"]})," thoroughly in order to\nunderstand what the following discussion is talking about"]}),". After that, we will discuss how the code snipped can be\nchanged to the following v4+ version:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'function initializeSimulation(nodes: any[], links: any[], width: number, height: number): any {\n  return d3\n    .forceSimulation(nodes)\n    .force("charge", d3.forceManyBody().strength(DEFAULT_FORCE_STRENGTH))\n    .force(\n      "link",\n      d3\n        .forceLink()\n        .distance(DEFAULT_LINK_DISTANCE)\n        .id(function (d: any) {\n          return d.id;\n        })\n        .links(links)\n    )\n    .force("center", d3.forceCenter(width / 2, height / 2));\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The method above creates a new simulation with the specified array of nodes and forces. If nodes is not specified, it\ndefaults to the empty array. The simulator starts automatically."}),"\n",(0,i.jsxs)(n.p,{children:["Each node must be an ",(0,i.jsx)(n.em,{children:"object"}),". The following properties are assigned by the simulation:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"index"})," - the node's zero-based index"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"x"})," - the node's current x-position"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"y"})," - the node's current y-position"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"vx"})," - the node's current x-velocity"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"vy"})," - the node's current y-velocity"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The position $(x, y)$ and velocity $(v_x, v_y)$ may be subsequently modified by ",(0,i.jsx)(n.a,{href:"https://github.com/d3/d3-force#simulation_force",children:"forces"})," and by the simulation.\nIf either ",(0,i.jsx)(n.code,{children:"vx"})," or ",(0,i.jsx)(n.code,{children:"vy"})," is ",(0,i.jsx)(n.code,{children:"NaN"}),", the velocity is initialized to $(0, 0)$. If either ",(0,i.jsx)(n.code,{children:"x"})," or ",(0,i.jsx)(n.code,{children:"y"})," is ",(0,i.jsx)(n.code,{children:"NaN"}),", the position is\ninitialized in a ",(0,i.jsx)(n.a,{href:"https://observablehq.com/@d3/force-layout-phyllotaxis",children:"phyllotaxis arrangement"})," (shown below), so chosen to ensure a deterministic, uniform distribution."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Error loading phyllotaxis-arrangement.png",src:t(6879).Z+"",width:"1298",height:"1126"})}),"\n",(0,i.jsx)(n.p,{children:"To fix a node in a given position, we may specify two additional properties:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"fx"})," - the node's fixed x-position"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"fy"})," - the node's fixed y-position"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["At the end of each tick (explained below), after the application of any forces, a node with a defined ",(0,i.jsx)(n.em,{children:"node"}),".fx has\n",(0,i.jsx)(n.em,{children:"node"}),".x reset to this value and ",(0,i.jsx)(n.em,{children:"node"}),".vx set to zero; likewise, a node with a defined ",(0,i.jsx)(n.em,{children:"node"}),".fy has ",(0,i.jsx)(n.em,{children:"node"}),".y reset to\nthis value and ",(0,i.jsx)(n.em,{children:"node"}),".vy set to zero. To unfix a node that was previously fixed, set ",(0,i.jsx)(n.em,{children:"node"}),".fx and ",(0,i.jsx)(n.em,{children:"node"}),".fy to null, or\ndelete these properties."]}),"\n",(0,i.jsxs)(n.p,{children:["If the specified array of ",(0,i.jsx)(n.em,{children:"nodes"})," is modified, such as when nodes are added to or removed from the simulation, this\nmethod must be called again with the new (or changed) array to notify the simulation and bound forces of the change; the\nsimulation does not make a defensive copy of the specified array."]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"simulation.tick([iterations])"})}),(0,i.jsxs)(n.p,{children:["Manually steps the simulation by the specified number of ",(0,i.jsx)(n.em,{children:"iterations"}),", and returns the simulation. If ",(0,i.jsx)(n.em,{children:"iterations"})," is\nnot specified, it defaults to 1 (single step)."]})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"charge"})," and ",(0,i.jsx)(n.code,{children:"link"})," have been changed to its new API versions which are\n",(0,i.jsx)(n.a,{href:"https://www.d3indepth.com/force-layout/#forcemanybody",children:"forceManyBody"})," and\n",(0,i.jsx)(n.a,{href:"https://www.d3indepth.com/force-layout/#forcelink",children:"forceLink"}),", respectively."]}),"\n",(0,i.jsxs)(n.p,{children:['The only effect that the old force layout.size had was to set the attraction point for the "gravity" force to be\n[width / 2, height / 2]. This has been replaced by the positioning forces ',(0,i.jsx)(n.strong,{children:"d3.forceX"})," and ",(0,i.jsx)(n.strong,{children:"d3.forceY"}),(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-2-e99c49",id:"user-content-fnref-2-e99c49","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),"\n",(0,i.jsx)(n.p,{children:"We are done with the graph setup. Next we will define its behavior"}),"\n",(0,i.jsx)(n.h3,{id:"grouping-nodes-and-links-for-batch-operations",children:"Grouping Nodes and Links for Batch Operations"}),"\n",(0,i.jsx)(n.p,{children:"We prepare this grouping so that we can apply certain operations on each node/link, such as re-loading every existing\nnode onto canvas during a graph redraw."}),"\n",(0,i.jsx)(n.p,{children:"We achieve that using the following lines of codes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const linesg = svg.append("g");\nconst circlesg = svg.append("g");\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"<g>"})," SVG element is a container used to group other SVG elements, i.e. nodes and links. D3 operations applied to\nthe ",(0,i.jsx)(n.code,{children:"<g>"})," element are performed on its child elements of links and nodes, and its attributes are inherited by its\nchildren. See ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g",children:"MDN Web Docs"})," for more details.javascript"]}),"\n",(0,i.jsx)(n.h3,{id:"defining-the-graph-re-drawing",children:"Defining the Graph Re-Drawing"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const link = linesg\n  .selectAll("line.link")\n  .data(links)\n  .attr("x1", function (d: any) {\n    return d.source.x;\n  })\n  .attr("y1", function (d: any) {\n    return d.source.y;\n  })\n  .attr("x2", function (d: any) {\n    return d.target.x;\n  })\n  .attr("y2", function (d: any) {\n    return d.target.y;\n  })\n  .classed("selected", function (d: any) {\n    return d === selectedLink;\n  });\n\n// load all existing links\nlink.enter().append("line").attr("class", "link").attr("marker-end", "url(#child)").on("mousedown", linkMousedown);\n\n// off-load obsolete links due to node removal\nlink.exit().remove();\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Almost everyone learning about D3 is confused about the ",(0,i.jsx)(n.code,{children:"selectAll"})," above: ",(0,i.jsx)(n.code,{children:'const link = linesg.selectAll("line.link")'}),".\nWhy can we select things that don't exist yet? In order to fully comprehend that, we need to first discuss ",(0,i.jsx)(n.strong,{children:"enter()"}),"\nand ",(0,i.jsx)(n.strong,{children:"exit"})]}),"\n",(0,i.jsx)(n.h4,{id:"understanding-enter-and-exit",children:"Understanding enter() and exit()"}),"\n",(0,i.jsx)(n.p,{children:"Let's consider yet another example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<body>\n  <div>\n    <p class="x"></p>\n  </div>\n  <script>\n    d3.select("div")\n      .selectAll("p")\n      .data([3, 4])\n      /**\n       * if I uncomment this it works\n       * but I don\'t want to call the\n       * same function twice\n       */\n      // .text(d => d + \'\')\n      .enter()\n      .append("p")\n      .text((d) => d + "");\n  <\/script>\n</body>\n'})}),"\n",(0,i.jsx)(n.p,{children:"When we do this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'d3.select("div").selectAll("p");\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We're selecting all ",(0,i.jsx)(n.code,{children:"<p>"})," elements inside the selected ",(0,i.jsx)(n.code,{children:"div"}),". We have only one div (that doesn't matter, because\n",(0,i.jsx)(n.code,{children:"select"})," selects the first one it gets anyway...) and only one ",(0,i.jsx)(n.code,{children:"<p>"})," element inside it."]}),"\n",(0,i.jsx)(n.p,{children:"Then, we bind the data:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:".data([3, 4])\n"})}),"\n",(0,i.jsx)(n.p,{children:"Thus, so far, we have:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"1 element in the selection"}),"\n",(0,i.jsx)(n.li,{children:"2 data points in the data"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:['Now comes the important part regarding the "enter" selection: we already have one ',(0,i.jsx)(n.code,{children:"<p>"})," element in our selection. That\n",(0,i.jsx)(n.code,{children:"<p>"})," element gets the first datum, ",(0,i.jsx)(n.code,{children:"3"}),". The remaining datum is appended to a newly created ",(0,i.jsx)(n.code,{children:"p"})," element, which is ",(0,i.jsx)(n.code,{children:"4"}),"."]}),"\n",(0,i.jsx)(n.p,{children:'Our "enter" selection contains all data points without a corresponding element. As we can see, since we have 1 element\nin the selection and 2 data points, your "enter" selection has only 1 element. Let\'s show it:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Error loading enter-example-1.png",src:t(4585).Z+"",width:"1346",height:"1194"})}),"\n",(0,i.jsx)(n.p,{children:'In a nutshell, we have to compare the selection with the data: if we have more data than elements, the extra data will\nbe bound to elements belonging to the "enter" selection. If we have more elements than data, the extra elements without\ncorresponding data belong to the "exit" selection. In our case, the "exit" selection is empty.'}),"\n",(0,i.jsxs)(n.p,{children:["Finally, if we want to update the text of our existing ",(0,i.jsx)(n.code,{children:"<p>"}),' element, we have to use an "update" selection. It can be a\nbit more verbose, like this:']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Error loading enter-example-2.png",src:t(2452).Z+"",width:"1346",height:"1210"})}),"\n",(0,i.jsx)(n.p,{children:"Or we can merge the enter selection and the update one, in a slightly smaller code:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Error loading enter-example-3.png",src:t(4042).Z+"",width:"1348",height:"1182"})}),"\n",(0,i.jsxs)(n.p,{children:["In both examples the update selection is named ",(0,i.jsx)(n.code,{children:"p"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"understanding-linesgselectalllinelink",children:["Understanding ",(0,i.jsx)(n.code,{children:'linesg.selectAll("line.link")'})]}),"\n",(0,i.jsxs)(n.p,{children:["Always keep in mind, that D3 is all about ",(0,i.jsx)(n.em,{children:"binding data to some DOM structure and providing the means of keeping the\ndata and the document in sync"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select all ",(0,i.jsx)(n.code,{children:"line"})," elements having class ",(0,i.jsx)(n.code,{children:"link"})," . This may very well return an empty selection when we have no graph\nlinks on canvas, but it will still be a d3.selection."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Bind data to this selection. Based on the above mentioned selection this will, on a per-element basis, compute a join\nchecking if the new data is"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"not yet bound to this selection, or"}),"\n",(0,i.jsx)(n.li,{children:"has been bound before, or"}),"\n",(0,i.jsx)(n.li,{children:"was bound before but is not included in the new data any more."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Depending on the result of this check the selection will be divided into an ",(0,i.jsx)(n.strong,{children:"enter"}),", an ",(0,i.jsx)(n.strong,{children:"update"}),", or an ",(0,i.jsx)(n.strong,{children:"exit"}),"\nselection, respectively."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Because our selection was empty in the first place. All data will end up in the ",(0,i.jsx)(n.strong,{children:"enter"})," selection and nothing\nhappens in the following executions"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'.attr("x1", function (d: any) { return d.source.x; })\n.attr("y1", function (d: any) { return d.source.y; })\n.attr("x2", function (d: any) { return d.target.x; })\n.attr("y2", function (d: any) { return d.target.y; })\n.classed("selected", function (d: any) { return d === selectedLink; })\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"enter"})," selection is then retrieved by calling ",(0,i.jsx)(n.code,{children:"selection.enter()"})," or ",(0,i.jsx)(n.code,{children:"link.enter()"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["We append the new ",(0,i.jsx)(n.code,{children:"line"})," elements corresponding to the newly bound data by calling ",(0,i.jsx)(n.code,{children:'selection.append("line")'})," on the\nenter selection."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"defining-behavior",children:"Defining Behavior"}),"\n",(0,i.jsx)(n.p,{children:"The remaining defines the behavior:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event",children:"Element: mousedown event"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"linkMousedown"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"nodeMousedown"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"mousedown"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event",children:"Element: mouseout event"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"nodeMouseout"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event",children:"Element: mouseover event"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"nodeMouseover"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event",children:"Element: keydown event"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"windowKeydown"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event",children:"Element: mousemove event"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"windowMousemove"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event",children:"Element: mouseup event"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"windowMouseup"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Note that is we would like to implement the behavior of not drawing the link when either of the link endpoints\ncontains a node, we would have something like the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"if (selectedSourceNode != null && selectedTargetNode != null) {\n  links.push({ source: selectedSourceNode, target: d });\n  update();\n} else {\n  newLine.remove();\n  newLine = null;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"newLine = null"})," makes sure the same behavior can repeat."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://ncoughlin.com/posts/d3-react/",children:"D3 with React"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://medium.com/@jeffbutsch/using-d3-in-react-with-hooks-4a6c61f1d102",children:"Simple D3 with React Hooks"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://stackoverflow.com/a/43357028",children:"Understanding enter() and exit()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://stackoverflow.com/a/33401494",children:"Basic d3: why can you select things that don't exist yet?"})}),"\n"]}),"\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1-e99c49",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/49441793/d3-difference-between-layout-force-forcesimulation-to-build-network-graph#comment85885511_49441793",children:"https://stackoverflow.com/questions/49441793/d3-difference-between-layout-force-forcesimulation-to-build-network-graph#comment85885511_49441793"})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1-e99c49","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-2-e99c49",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://stackoverflow.com/a/62563459",children:"https://stackoverflow.com/a/62563459"})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-2-e99c49","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4585:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/enter-example-1-8cdc73943cf800b0baf2f82dd416fcc2.png"},2452:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/enter-example-2-03e58508c568ebd35fee6627a7b4f694.png"},4042:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/enter-example-3-fb9a8d40a35c0de2cc992f9f90042718.png"},6879:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/phyllotaxis-arrangement-d215fab72d3a627a018434e52a692292.png"}}]);