"use strict";(self.webpackChunk_yincw_rework=self.webpackChunk_yincw_rework||[]).push([[356],{2900:function(e,n,r){r.r(n),r.d(n,{assets:function(){return _},contentTitle:function(){return V},default:function(){return S},frontMatter:function(){return N},metadata:function(){return A},toc:function(){return D}});var t=r(4848),a=r(8453),s=r(6540),l=r(4164),u=r(3104),o=r(6347),i=r(205),c=r(7485),d=r(1682),h=r(679);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function b(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const t=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=m(e),[l,u]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[o,c]=f({queryString:r,groupId:t}),[d,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,h.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),x=(()=>{const e=o??d;return b({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&u(x)}),[x]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),p(e)}),[c,p,a]),tabValues:a}}var j=r(2303),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.a_)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),t=o[r].value;t!==a&&(c(n),s(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:h,onClick:d,...s,className:(0,l.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function w(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=x(e);return(0,t.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,t.jsx)(g,{...n,...e}),(0,t.jsx)(w,{...n,...e})]})}function T(e){const n=(0,j.A)();return(0,t.jsx)(k,{...e,children:p(e.children)},String(n))}var y={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:r,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(y.tabItem,a),hidden:r,children:n})}var C=r(5192);const N={sidebar_position:2},V="MDX \u7ec4\u4ef6",A={id:"docusaurus/component",title:"MDX \u7ec4\u4ef6",description:"\u4f9d\u8d56",source:"@site/docs/docusaurus/02-component.mdx",sourceDirName:"docusaurus",slug:"/docusaurus/component",permalink:"/rework/docusaurus/component",draft:!1,unlisted:!1,editUrl:"https://github.com/yincw/rework/docs/docusaurus/02-component.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Markdown \u7279\u6027",permalink:"/rework/docusaurus/markdown"},next:{title:"Front Matter",permalink:"/rework/docusaurus/matter"}},_={},D=[{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u9009\u9879\u5361",id:"\u9009\u9879\u5361",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}];function E(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"mdx-\u7ec4\u4ef6",children:"MDX \u7ec4\u4ef6"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f9d\u8d56",children:"\u4f9d\u8d56"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["prod","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["@docusaurus/preset-classic","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@docusaurus/core"}),"\n",(0,t.jsx)(n.li,{children:"@docusaurus/plugin-content-docs"}),"\n",(0,t.jsx)(n.li,{children:"@mdx-js/react"}),"\n",(0,t.jsx)(n.li,{children:"clsx"}),"\n",(0,t.jsx)(n.li,{children:"prism-react-renderer"}),"\n",(0,t.jsx)(n.li,{children:"react"}),"\n",(0,t.jsx)(n.li,{children:"react-dom"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"@docusaurus/theme-live-codeblock"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["dev","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@docusaurus/tsconfig"}),"\n",(0,t.jsx)(n.li,{children:"@docusaurus/types"}),"\n",(0,t.jsx)(n.li,{children:"@docusaurus/module-type-aliases"}),"\n",(0,t.jsx)(n.li,{children:"@easyops-cn/docusaurus-search-local"}),"\n",(0,t.jsx)(n.li,{children:"typescript"}),"\n",(0,t.jsxs)(n.li,{children:["typedoc","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["typedoc-plugin-markdown","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"docusaurus-plugin-typedoc"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9009\u9879\u5361",children:"\u9009\u9879\u5361"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n// MDX\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n'})}),"\n","\n",(0,t.jsxs)(T,{children:[(0,t.jsx)(I,{value:"apple",label:"Apple",default:!0,children:(0,t.jsx)(n.p,{children:"This is an apple \ud83c\udf4e"})}),(0,t.jsx)(I,{value:"orange",label:"Orange",children:(0,t.jsx)(n.p,{children:"This is an orange \ud83c\udf4a"})}),(0,t.jsx)(I,{value:"banana",label:"Banana",children:(0,t.jsx)(n.p,{children:"This is a banana \ud83c\udf4c"})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docusaurus.io/zh-CN/docs/markdown-features/tabs",children:"https://docusaurus.io/zh-CN/docs/markdown-features/tabs"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import CodeBlock from '@theme/CodeBlock';\n\nexport default function MyReactPage() {\n  return (\n    <div>\n      <CodeBlock\n        language=\"jsx\"\n        title=\"/src/components/HelloCodeTitle.js\"\n        showLineNumbers\n        metastring='{1-2}'\n        >\n        {`function HelloCodeTitle(props) {\n          return <h1>Hello, {props.name}</h1>;\n        }`}\n      </CodeBlock>\n    </div>\n  );\n}\n"})}),"\n","\n",(0,t.jsx)(C.A,{language:"jsx",title:"/src/components/HelloCodeTitle.js",showLineNumbers:!0,metastring:"{1-2}",children:"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docusaurus.io/zh-CN/docs/markdown-features/code-blocks#usage-in-jsx",children:"https://docusaurus.io/zh-CN/docs/markdown-features/code-blocks#usage-in-jsx"})}),"\n"]})]})}function S(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(E,{...e})}):E(e)}}}]);