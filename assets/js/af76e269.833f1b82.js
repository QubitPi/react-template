"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[722],{7639:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"d3-with-react","metadata":{"permalink":"/react-template/blog/d3-with-react","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-04-23-d3-with-react.md","source":"@site/blog/2023-04-23-d3-with-react.md","title":"D3 with React","description":"Looking into data visualization it seems clear that the library with the greatest capability and flexibility is","date":"2023-04-23T00:00:00.000Z","formattedDate":"April 23, 2023","tags":[{"label":"React","permalink":"/react-template/blog/tags/react"},{"label":"D3","permalink":"/react-template/blog/tags/d-3"}],"readingTime":12.07,"hasTruncateMarker":false,"authors":[{"name":"Jiaqi Liu","title":"Maintainer of react-template","url":"https://github.com/QubitPi","imageURL":"https://avatars.githubusercontent.com/u/16126939?v=4","key":"jiaqi"}],"frontMatter":{"slug":"d3-with-react","title":"D3 with React","authors":"jiaqi","tags":["React","D3"]},"unlisted":false},"content":"Looking into data visualization it seems clear that the library with the greatest capability and flexibility is\\n[D3][D3], which has over a thousand methods. It goes down to such base components that it does not even consider itself\\nto be a data visualization library, but instead provides \\"efficient manipulation of documents based on data\\". Basically\\nit binds data to DOM objects and gives us lots of ways to manipulate them, which is used by a lot of people to\\nmanipulate SVG graphics, and thus data visualization. It appears to have a bit of a learning curve but we are up for\\nit. I would rather learn something new than get bottle-necked later using a prebuilt library.\\n\\nCompatibility with React\\n------------------------\\n\\nThere is a fundamental compatibility issue between React and D3. Because React creates a\\n[Virtual DOM][Virtual DOM], and D3 works by creating and manipulating objects in the actual DOM, we have to find a way\\nto get D3 working inside the Virtual DOM. This problem has been solved a number of different ways\\n\\nWe would think that there would just be a package that would handle this. There is a package called\\n[react-d3-library][react-d3-library] that purported to let us use stock D3 code in React with just a few adjustments.\\nHowever this package is no longer maintained and the last commit was 4 years ago. So this does not seem like the route\\nto go down.\\n\\nHere are some of the other methods that people have written about.\\n\\nAmelia Wattenberger has written an excellent article [React + D3][React + D3] where she basically advocates that we\\nshouldn\'t be using the D3 methods that render the SVG graphics, but to render them all manually using JSX and only use\\nD3 methods that do math like calculating scale. On the one hand she may have a point here, but on the other hand she is\\nbasically throwing away the majority of the D3 methods and recreating them which is a huge duplication of effort. It\'s\\nalmost as if her answer to the question of how to use D3 with React is \\"You don\'t\\".\\n\\nThe other sources that I have found seem to be on more of a similar page. They advocate a combination of `useRef` to\\ndirect D3 to an SVG and `useEffect` to manipulate it.\\n\\n- [griddynamics: Using D3.js with React.js: An 8-step comprehensive manual](https://blog.griddynamics.com/using-d3-js-with-react-js-an-8-step-comprehensive-manual/)\\n- [Pluralsight: Using D3.js Inside a React App](https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app)\\n- [LogRocket: Using D3.js v6 with React](https://blog.logrocket.com/using-d3-js-v6-with-react/)\\n\\nConfigurable D3 Graph\\n---------------------\\n\\n:::tip\\n\\n### D3 with React Hooks\\n\\n**React Function Components** with Hooks gives us a nice way to integrate D3 with React. There are many related articles\\nthat describe this already but they get in the weeds and complicated quickly. This discussion is just the basics on\\nwhere to put things to get started correctly. We can expand from there.\\n\\nIn the past it was confusing to find the correct places to put D3 code, especially for someone new to D3 still getting\\ntheir head wrapped around D3\'s way of doing things. Optimization to minimize re-rendering was an advanced task when it\\nshould be easy.\\n\\nFunction Components with Hooks cleans this up quite a bit. There is one place to put D3, one way to connect it to\\nReact\'s DOM, and re-render logic is mostly built in.\\n\\n### useRef Hook\\n\\nWe\'re building a function not a class. There are no class member variables so we need a way to hold onto an object\\nacross multiple rendering passes.\\n\\n**useRef()** creates a variable that does just that. The variable acts a lot like a class member variable without the\\nclass. We utilize `useRef()` to hold onto the DOM element containing our D3 content. A ref is \\"get\\" and \\"set\\" via its\\n`.current` property.\\n\\n### useEffect Hook\\n\\n**useEffect()** gives us a place to put side effects such as our D3 code. It\'s a side effect because it adds content to\\nthe DOM outside of React\'s virtual DOM mechanism.\\n\\n::::::info\\n\\n`useEffect()` is like `componentDidMount()` and `componentWillReceiveProps()` combined, with change detection as a\\nfirst-class feature.\\n\\n::::::\\n\\n:::\\n\\nHere is the part of code that reflects the usage of `useRef` and `useEffect` as well as how Messier-61 components\\nhandles drawing knowledge graph in D3\\n\\n```typescript\\nimport React, { useEffect, useRef } from \\"react\\";\\nimport * as d3 from \\"d3\\";\\nimport styles from \\"./D3Graph.module.css\\";\\nimport type { Node, Link, GraphConfig } from \\"../GraphConfig\\";\\n\\nexport function D3Graph(graphConfig: GraphConfig): JSX.Element {\\n  const svgRef = useRef(null);\\n\\n  const width = graphConfig.canvasConfig.width;\\n  const height = graphConfig.canvasConfig.height;\\n\\n  const nodes: any[] = initializeNodes(graphConfig.graphData.nodes);\\n  let links: any[] = initializeLinks(graphConfig.graphData.links);\\n\\n  useEffect(() => {\\n    ... // graph rendering and listener logics\\n  }, [nodes, links, svgRef.current]);\\n\\n  const stylesName = [styles.g, styles.node, styles.line, styles.link, styles.newLine];\\n  return <svg ref={svgRef} width={width} height={height} className={stylesName.join(\\" \\")}></>;\\n}\\n\\n```\\n\\nHere is what the code above is doing:\\n\\nCall `useRef()` to create a variable (`svgRef`) to hold the SVG element. Initialize it as `null`. React will set it the\\nfirst time the page is rendered.\\n\\n:::tip Why not just use `d3.select()` to get the SVG element, or insert the SVG element using pure D3?\\n\\nBy using a ref variable we can use it as a **dependency** in our `useEffect()` block to detect when the element has\\nactually been rendered and available.\\n\\n:::\\n\\nCall `useEffect()` to execute our D3 code which draws graph on canvas. `useEffect()` takes two arguments\\n\\n1. a function to run, and\\n2. an array of dependency variables\\n\\n`useEffect()` will run every time one of the dependency variables changes. Because we listed graph `nodes` and `links`\\nas dependencies, `useEffect()` will run again whenever graph data changes. We don\'t need to write code to compare old\\nand new data for changes anymore!\\n\\nThe Function Component returns an SVG element, and its ref attribute is set to `svgRef` - the ref variable we declared\\nat the top of the function.\\n\\nReact will run our D3 code when the DOM is ready and when the data changes.\\n\\n### Generating Force Graph Simulation\\n\\n**Due to changes in namespace from v3 to v4**. The force layout `d3.layout.force` has been\\n[renamed](https://github.com/d3/d3/blob/master/CHANGES.md#forces-d3-force) to [`d3.forceSimulation`][d3-force][^1]. _It\\nis, therefore, strongly recommended to read [`d3.forceSimulation` documentation][d3-force] thoroughly in order to\\nunderstand what the following discussion is talking about_. After that, we will discuss how the code snipped can be\\nchanged to the following v4+ version:\\n\\n```javascript\\nfunction initializeSimulation(nodes: any[], links: any[], width: number, height: number): any {\\n  return d3\\n    .forceSimulation(nodes)\\n    .force(\\"charge\\", d3.forceManyBody().strength(DEFAULT_FORCE_STRENGTH))\\n    .force(\\n      \\"link\\",\\n      d3\\n        .forceLink()\\n        .distance(DEFAULT_LINK_DISTANCE)\\n        .id(function (d: any) {\\n          return d.id;\\n        })\\n        .links(links)\\n    )\\n    .force(\\"center\\", d3.forceCenter(width / 2, height / 2));\\n}\\n```\\n\\nThe method above creates a new simulation with the specified array of nodes and forces. If nodes is not specified, it\\ndefaults to the empty array. The simulator starts automatically.\\n\\nEach node must be an _object_. The following properties are assigned by the simulation:\\n\\n- **index** - the node\'s zero-based index\\n- **x** - the node\'s current x-position\\n- **y** - the node\'s current y-position\\n- **vx** - the node\'s current x-velocity\\n- **vy** - the node\'s current y-velocity\\n\\nThe position $(x, y)$ and velocity $(v_x, v_y)$ may be subsequently modified by [forces][forces] and by the simulation.\\nIf either `vx` or `vy` is `NaN`, the velocity is initialized to $(0, 0)$. If either `x` or `y` is `NaN`, the position is\\ninitialized in a [phyllotaxis arrangement] (shown below), so chosen to ensure a deterministic, uniform distribution.\\n\\n![Error loading phyllotaxis-arrangement.png](img/phyllotaxis-arrangement.png)\\n\\nTo fix a node in a given position, we may specify two additional properties:\\n\\n1. **fx** - the node\'s fixed x-position\\n2. **fy** - the node\'s fixed y-position\\n\\nAt the end of each tick (explained below), after the application of any forces, a node with a defined _node_.fx has\\n_node_.x reset to this value and _node_.vx set to zero; likewise, a node with a defined _node_.fy has _node_.y reset to\\nthis value and _node_.vy set to zero. To unfix a node that was previously fixed, set _node_.fx and _node_.fy to null, or\\ndelete these properties.\\n\\nIf the specified array of _nodes_ is modified, such as when nodes are added to or removed from the simulation, this\\nmethod must be called again with the new (or changed) array to notify the simulation and bound forces of the change; the\\nsimulation does not make a defensive copy of the specified array.\\n\\n:::tip `simulation.tick([iterations])`\\n\\nManually steps the simulation by the specified number of _iterations_, and returns the simulation. If _iterations_ is\\nnot specified, it defaults to 1 (single step).\\n\\n:::\\n\\nThe `charge` and `link` have been changed to its new API versions which are\\n[forceManyBody](https://www.d3indepth.com/force-layout/#forcemanybody) and\\n[forceLink](https://www.d3indepth.com/force-layout/#forcelink), respectively.\\n\\nThe only effect that the old force layout.size had was to set the attraction point for the \\"gravity\\" force to be\\n[width / 2, height / 2]. This has been replaced by the positioning forces **d3.forceX** and **d3.forceY**[^2]\\n\\nWe are done with the graph setup. Next we will define its behavior\\n\\n### Grouping Nodes and Links for Batch Operations\\n\\nWe prepare this grouping so that we can apply certain operations on each node/link, such as re-loading every existing\\nnode onto canvas during a graph redraw.\\n\\nWe achieve that using the following lines of codes:\\n\\n```javascript\\nconst linesg = svg.append(\\"g\\");\\nconst circlesg = svg.append(\\"g\\");\\n```\\n\\nThe `<g>` SVG element is a container used to group other SVG elements, i.e. nodes and links. D3 operations applied to\\nthe `<g>` element are performed on its child elements of links and nodes, and its attributes are inherited by its\\nchildren. See [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g) for more details.javascript\\n\\n### Defining the Graph Re-Drawing\\n\\n```javascript\\nconst link = linesg\\n  .selectAll(\\"line.link\\")\\n  .data(links)\\n  .attr(\\"x1\\", function (d: any) {\\n    return d.source.x;\\n  })\\n  .attr(\\"y1\\", function (d: any) {\\n    return d.source.y;\\n  })\\n  .attr(\\"x2\\", function (d: any) {\\n    return d.target.x;\\n  })\\n  .attr(\\"y2\\", function (d: any) {\\n    return d.target.y;\\n  })\\n  .classed(\\"selected\\", function (d: any) {\\n    return d === selectedLink;\\n  });\\n\\n// load all existing links\\nlink.enter().append(\\"line\\").attr(\\"class\\", \\"link\\").attr(\\"marker-end\\", \\"url(#child)\\").on(\\"mousedown\\", linkMousedown);\\n\\n// off-load obsolete links due to node removal\\nlink.exit().remove();\\n```\\n\\nAlmost everyone learning about D3 is confused about the `selectAll` above: `const link = linesg.selectAll(\\"line.link\\")`.\\nWhy can we select things that don\'t exist yet? In order to fully comprehend that, we need to first discuss **enter()**\\nand **exit**\\n\\n#### Understanding enter() and exit()\\n\\nLet\'s consider yet another example:\\n\\n```html\\n<body>\\n  <div>\\n    <p class=\\"x\\"></p>\\n  </div>\\n  <script>\\n    d3.select(\\"div\\")\\n      .selectAll(\\"p\\")\\n      .data([3, 4])\\n      /**\\n       * if I uncomment this it works\\n       * but I don\'t want to call the\\n       * same function twice\\n       */\\n      // .text(d => d + \'\')\\n      .enter()\\n      .append(\\"p\\")\\n      .text((d) => d + \\"\\");\\n  <\/script>\\n</body>\\n```\\n\\nWhen we do this:\\n\\n```javascript\\nd3.select(\\"div\\").selectAll(\\"p\\");\\n```\\n\\nWe\'re selecting all `<p>` elements inside the selected `div`. We have only one div (that doesn\'t matter, because\\n`select` selects the first one it gets anyway...) and only one `<p>` element inside it.\\n\\nThen, we bind the data:\\n\\n```javascript\\n.data([3, 4])\\n```\\n\\nThus, so far, we have:\\n\\n- 1 element in the selection\\n- 2 data points in the data\\n\\nNow comes the important part regarding the \\"enter\\" selection: we already have one `<p>` element in our selection. That\\n`<p>` element gets the first datum, `3`. The remaining datum is appended to a newly created `p` element, which is `4`.\\n\\nOur \\"enter\\" selection contains all data points without a corresponding element. As we can see, since we have 1 element\\nin the selection and 2 data points, your \\"enter\\" selection has only 1 element. Let\'s show it:\\n\\n![Error loading enter-example-1.png](img/enter-example-1.png)\\n\\nIn a nutshell, we have to compare the selection with the data: if we have more data than elements, the extra data will\\nbe bound to elements belonging to the \\"enter\\" selection. If we have more elements than data, the extra elements without\\ncorresponding data belong to the \\"exit\\" selection. In our case, the \\"exit\\" selection is empty.\\n\\nFinally, if we want to update the text of our existing `<p>` element, we have to use an \\"update\\" selection. It can be a\\nbit more verbose, like this:\\n\\n![Error loading enter-example-2.png](img/enter-example-2.png)\\n\\nOr we can merge the enter selection and the update one, in a slightly smaller code:\\n\\n![Error loading enter-example-3.png](img/enter-example-3.png)\\n\\nIn both examples the update selection is named `p`.\\n\\n#### Understanding `linesg.selectAll(\\"line.link\\")`\\n\\nAlways keep in mind, that D3 is all about _binding data to some DOM structure and providing the means of keeping the\\ndata and the document in sync_.\\n\\n- Select all `line` elements having class `link` . This may very well return an empty selection when we have no graph\\n  links on canvas, but it will still be a d3.selection.\\n- Bind data to this selection. Based on the above mentioned selection this will, on a per-element basis, compute a join\\n  checking if the new data is\\n\\n    - not yet bound to this selection, or\\n    - has been bound before, or\\n    - was bound before but is not included in the new data any more.\\n\\n  Depending on the result of this check the selection will be divided into an **enter**, an **update**, or an **exit**\\n  selection, respectively.\\n\\n- Because our selection was empty in the first place. All data will end up in the **enter** selection and nothing\\n  happens in the following executions\\n\\n  ```javascript\\n  .attr(\\"x1\\", function (d: any) { return d.source.x; })\\n  .attr(\\"y1\\", function (d: any) { return d.source.y; })\\n  .attr(\\"x2\\", function (d: any) { return d.target.x; })\\n  .attr(\\"y2\\", function (d: any) { return d.target.y; })\\n  .classed(\\"selected\\", function (d: any) { return d === selectedLink; })\\n  ```\\n\\n- The **enter** selection is then retrieved by calling `selection.enter()` or `link.enter()`\\n- We append the new `line` elements corresponding to the newly bound data by calling `selection.append(\\"line\\")` on the\\n  enter selection.\\n\\n### Defining Behavior\\n\\nThe remaining defines the behavior:\\n\\n- [Element: mousedown event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event)\\n\\n    - `linkMousedown`\\n    - `nodeMousedown`\\n    - `mousedown`\\n\\n- [Element: mouseout event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event)\\n\\n    - `nodeMouseout`\\n\\n- [Element: mouseover event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event)\\n\\n    - `nodeMouseover`\\n\\n- [Element: keydown event](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)\\n\\n    - `windowKeydown`\\n\\n- [Element: mousemove event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event)\\n\\n    - `windowMousemove`\\n\\n- [Element: mouseup event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event)\\n\\n    - `windowMouseup`\\n    - Note that is we would like to implement the behavior of not drawing the link when either of the link endpoints\\n      contains a node, we would have something like the following:\\n\\n      ```javascript\\n      if (selectedSourceNode != null && selectedTargetNode != null) {\\n        links.push({ source: selectedSourceNode, target: d });\\n        update();\\n      } else {\\n        newLine.remove();\\n        newLine = null;\\n      }\\n      ```\\n\\n      The `newLine = null` makes sure the same behavior can repeat.\\n\\nReference\\n---------\\n\\n- [D3 with React](https://ncoughlin.com/posts/d3-react/)\\n- [Simple D3 with React Hooks](https://medium.com/@jeffbutsch/using-d3-in-react-with-hooks-4a6c61f1d102)\\n- [Understanding enter() and exit()](https://stackoverflow.com/a/43357028)\\n- [Basic d3: why can you select things that don\'t exist yet?](https://stackoverflow.com/a/33401494)\\n\\n[D3]: https://d3js.org/\\n[d3-force]: https://github.com/d3/d3-force\\n[forces]: https://github.com/d3/d3-force#simulation_force\\n[phyllotaxis arrangement]: https://observablehq.com/@d3/force-layout-phyllotaxis\\n[react-d3-library]: https://github.com/react-d3-library/react-d3-library\\n[React + D3]: https://wattenberger.com/blog/react-and-d3\\n[Virtual DOM]: https://reactjs.org/docs/faq-internals.html\\n\\n[^1]: https://stackoverflow.com/questions/49441793/d3-difference-between-layout-force-forcesimulation-to-build-network-graph#comment85885511_49441793\\n[^2]: https://stackoverflow.com/a/62563459"}]}')}}]);