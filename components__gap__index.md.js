(self["webpackChunklacus"]=self["webpackChunklacus"]||[]).push([[771],{86845:function(){},8036:function(){},78296:function(e,t,n){"use strict";var l=n(67294),r=n.n(l),a=n(96089),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},o=["children","className","style"];t["Z"]=e=>{var t=e.identifier,n=e.export,i=(0,a.useApiData)(t),u=(0,l.useContext)(a.context),d=u.locale,m=/^zh|cn$/i.test(d)?c["zh-CN"]:c["en-US"],s=i[n].filter((e=>{var t=e.identifier;return!o.includes(t)}));return r().createElement(r().Fragment,null,i&&r().createElement("table",{style:{marginTop:24}},r().createElement("thead",null,r().createElement("tr",null,r().createElement("th",null,m.name),r().createElement("th",null,m.description),r().createElement("th",null,m.type),r().createElement("th",null,m.default))),r().createElement("tbody",null,s.map((e=>r().createElement("tr",{key:e.identifier},r().createElement("td",null,e.identifier),r().createElement("td",null,e.description||"-"),r().createElement("td",null,r().createElement("code",null,e.type)),r().createElement("td",null,r().createElement("code",null,e.default||e.required&&m.required||"-"))))))))}},22231:function(e,t,n){"use strict";n.d(t,{m:function(){return l.m}});var l=n(9684);n(72255)},61821:function(e,t,n){"use strict";n.r(t);var l=n(67294),r=n.n(l),a=n(96089),c=(n(78296),n(32851)),o=n(4187),i=r().memo((e=>{var t=e.demos,n=t["gap-demo"].component;return r().createElement(r().Fragment,null,r().createElement(r().Fragment,null,r().createElement("div",{className:"markdown"},r().createElement("h2",{id:"gap"},r().createElement(a.AnchorLink,{to:"#gap","aria-hidden":"true",tabIndex:-1},r().createElement("span",{className:"icon icon-link"})),"Gap")),r().createElement(c.default,t["gap-demo"].previewerProps,r().createElement(n,null)),r().createElement("div",{className:"markdown"},r().createElement("h2",{id:"api"},r().createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r().createElement("span",{className:"icon icon-link"})),"Api"),r().createElement(o.Z,null,r().createElement("thead",null,r().createElement("tr",null,r().createElement("th",null,"\u5c5e\u6027\u540d"),r().createElement("th",null,"\u63cf\u8ff0"),r().createElement("th",null,"\u7c7b\u578b"),r().createElement("th",null,"\u9ed8\u8ba4\u503c"))),r().createElement("tbody",null,r().createElement("tr",null,r().createElement("td",null,"align"),r().createElement("td",null,"\u5bf9\u9f50\u65b9\u5f0f"),r().createElement("td",null,r().createElement("code",null,"start")," | ",r().createElement("code",null,"end")," |",r().createElement("code",null,"center")," |",r().createElement("code",null,"baseline")),r().createElement("td",null,"-")),r().createElement("tr",null,r().createElement("td",null,"justify"),r().createElement("td",null,"\u6c34\u5e73\u5bf9\u9f50\u65b9\u5f0f"),r().createElement("td",null,"JustifyContent"),r().createElement("td",null,"-")),r().createElement("tr",null,r().createElement("td",null,"direction"),r().createElement("td",null,"\u95f4\u8ddd\u65b9\u5411"),r().createElement("td",null,r().createElement("code",null,"vertical")," | ",r().createElement("code",null,"horizontal")),r().createElement("td",null,r().createElement("code",null,"horizontal"))),r().createElement("tr",null,r().createElement("td",null,"size"),r().createElement("td",null,"\u95f4\u8ddd\u5927\u5c0f"),r().createElement("td",null,r().createElement(a.AnchorLink,{to:"#Size"},"Size")," | ",r().createElement(a.AnchorLink,{to:"#Size"},"Size[]")),r().createElement("td",null,r().createElement("code",null,"small"))),r().createElement("tr",null,r().createElement("td",null,"bottom"),r().createElement("td",null,"\u4e0b\u8fb9\u8ddd"),r().createElement("td",null,"string | number"),r().createElement("td",null,"-")),r().createElement("tr",null,r().createElement("td",null,"split"),r().createElement("td",null,"\u8bbe\u7f6e\u62c6\u5206"),r().createElement("td",null,"ReactNode"),r().createElement("td",null,"-")),r().createElement("tr",null,r().createElement("td",null,"wrap"),r().createElement("td",null,"\u662f\u5426\u81ea\u52a8\u6362\u884c\uff0c\u4ec5\u5728 ",r().createElement("code",null,"horizontal")," \u65f6\u6709\u6548"),r().createElement("td",null,"boolean"),r().createElement("td",null,"false")))))))}));t["default"]=e=>{var t=r().useContext(a.context),n=t.demos;return r().useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r().createElement(i,{demos:n})}},32851:function(e,t,n){"use strict";n.r(t);var l=n(67294),r=n.n(l),a=n(42886),c=n(22231),o=n(96089),i=n(65659);n(86845);function u(e,t){return E(e)||f(e,t)||m(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function f(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(a.push(l.value),t&&a.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return a}}function E(e){if(Array.isArray(e))return e}function p(e,t){var n,l=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return l||(l=t.tsx?"tsx":"jsx"),l}var v=function(e){var t,n,d,m=(0,l.useRef)(),s=(0,l.useContext)(o.context),f=s.locale,E=(0,o.useLocaleProps)(f,e),v=(0,o.useDemoUrl)(E.identifier),h=E.demoUrl||v,y=(null===c.m||void 0===c.m?void 0:c.m.location.hash)==="#".concat(E.identifier),b=1===Object.keys(E.sources).length,_=(0,o.useCodeSandbox)((null===(t=E.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:E),g=(0,o.useRiddle)((null===(n=E.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:E),k=(0,o.useMotions)(E.motions||[],m.current),w=u(k,2),S=w[0],N=w[1],C=(0,o.useCopy)(),A=u(C,2),x=A[0],L=A[1],z=(0,l.useState)((function(){return E.sources._?"_":Object.keys(E.sources)[0]})),j=u(z,2),I=j[0],R=j[1],O=(0,l.useState)(p(I,E.sources[I])),T=u(O,2),U=T[0],M=T[1],D=(0,l.useState)(Boolean(E.defaultShowCode)),$=u(D,2),q=$[0],P=$[1],Z=(0,l.useState)(Math.random()),B=u(Z,2),F=B[0],J=B[1],G=E.sources[I][U]||E.sources[I].content,W=(0,o.useTSPlaygroundUrl)(f,G),X=(0,l.useRef)(),H=(0,o.usePrefersColor)(),K=u(H,1),Q=K[0],V=E.actionBarRender,Y=void 0===V?function(e){return e}:V;function ee(e){R(e),M(p(e,E.sources[e]))}return(0,l.useEffect)((function(){J(Math.random())}),[Q]),r().createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",y?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&r().createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r().createElement("div",{ref:m,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?r().createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:F,src:h,ref:X}):E.children),r().createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&r().createElement(o.AnchorLink,{to:"#".concat(E.identifier)},E.title),E.description&&r().createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),r().createElement("div",{className:"__dumi-default-previewer-actions"},Y(r().createElement(r().Fragment,null,_&&r().createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),g&&r().createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),E.motions&&r().createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:N,onClick:function(){return S()}}),E.iframe&&r().createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return J(Math.random())}}),!(null===(d=E.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&r().createElement(o.Link,{target:"_blank",to:h},r().createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r().createElement("span",null),r().createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":L,onClick:function(){return x(G)}}),"tsx"===U&&q&&r().createElement(o.Link,{target:"_blank",to:W},r().createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r().createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(q?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return P(!q)}})))),q&&r().createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!b&&r().createElement(a.Z,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:ee},Object.keys(E.sources).map((function(e){return r().createElement(a.J,{tab:"_"===e?"index.".concat(p(e,E.sources[e])):e,key:e})}))),r().createElement("div",{className:"__dumi-default-previewer-source"},r().createElement(i.Z,{code:G,lang:U,showCopy:!1}))))};t["default"]=v},4187:function(e,t,n){"use strict";var l=n(67294),r=n.n(l),a=n(97397),c=n.n(a);n(8036);function o(e,t){return s(e)||m(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(a.push(l.value),t&&a.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return a}}function s(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=(0,l.useRef)(),a=(0,l.useState)(!1),i=o(a,2),u=i[0],d=i[1],m=(0,l.useState)(!1),s=o(m,2),f=s[0],E=s[1];return(0,l.useEffect)((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r().createElement("div",{className:"__dumi-default-table"},r().createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r().createElement("table",null,t)))};t["Z"]=f}}]);