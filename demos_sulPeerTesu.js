(self["webpackChunklacus"]=self["webpackChunklacus"]||[]).push([[349],{6870:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(23369),a=n.n(r),c=n(71082);function l(e){var t=(0,r.useRef)(e);t.current=(0,r.useMemo)((function(){return e}),[e]);var n=(0,r.useRef)();return n.current||(n.current=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.current.apply(this,e)}),n.current}var o=l,i=n(3883);function u(e,t){var n=new Map((null!==t&&void 0!==t?t:[]).map((e=>[e,!0])));return(null!==e&&void 0!==e?e:[]).filter((e=>!n.has(e)))}function s(e){return Array.from(new Set(null!==e&&void 0!==e?e:[]))}var d=e=>{var t=e.checkable,n=e.highlightKeys,l=e.checkedKeys,d=e.checkRetain,h=e.onCheck,p=e.onSearch,f=(0,r.useState)(!1),v=(0,c.Z)(f,2),y=v[0],m=v[1],k=(0,r.useMemo)((()=>!u(n,l).length),[n,l]),b=o((e=>{p(e),m(Boolean(e))})),E=o((()=>{var e=k?u(l,n):d?s(n.concat(l)):n;null===h||void 0===h||h(e,{checked:!k})}));return a().createElement("div",{className:"tree-search-bar"},a().createElement(i.Z.Search,{onSearch:b,allowClear:!0,className:"tree-search-bar-input"}),a().createElement("div",{style:{display:y?"block":"none"}},a().createElement("div",{className:"tree-search-bar-result"},a().createElement("span",null,"\u5171",null===n||void 0===n?void 0:n.length,"\u6761\u7ed3\u679c"),t&&a().createElement("a",{onClick:E},k?"\u53d6\u6d88\u9009\u4e2d":"\u9009\u4e2d"," "))))},h=(0,r.memo)(d),p=n(43854),f=n(6300),v=n(36043);function y(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];null===e||void 0===e||e.forEach((e=>{e.parentKeys=n,e.children&&t(e.children,[...n,e.key])}))}return t(e),e||[]}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",n=[];return null===e||void 0===e||e.forEach((e=>{var r;n.push(e),null!==(r=e[t])&&void 0!==r&&r.length&&n.push(...m(e[t],t))})),n}function k(e){return Object.assign({},...m(e).map((e=>({[e.key]:e.parentKeys}))))}function b(e,t,n){var r,a=e;return n.forEach((e=>{var t,n;a=null!==(t=null===(n=a.find((t=>t.key===e)))||void 0===n?void 0:n.children)&&void 0!==t?t:[]})),null!==(r=a.find((e=>e.key===t)))&&void 0!==r?r:{}}function E(e,t,n){if((0,v.HD)(e)&&t){var r=e.indexOf(t);if(r>-1){null===n||void 0===n||n();var c=e.substring(0,r),l=e.slice(r+t.length);return a().createElement("span",null,c,a().createElement("span",{style:{color:"#ff463a"}},t),l)}}return e}function g(e,t){var n=[],r=[],a=e.map((e=>{var a,l=e.title,o=e.render,i=e.children,u=(0,f.Z)(e,["title","render","children"]);if(l=E(l,t,(()=>{n.push(...u.parentKeys||[]),r.push(u.key)})),l=null!==(a=null===o||void 0===o?void 0:o(l))&&void 0!==a?a:l,i){var s=g(i,t),d=(0,c.Z)(s,3),h=d[0],v=d[1],y=d[2];return n.push(...y),r.push(...v),(0,p.Z)((0,p.Z)({},u),{},{title:l,children:h})}return(0,p.Z)({title:l,render:o},u)}));return[a,r,s(n)]}function S(e){var t=e.treeData,n=e.searchable,l=e.checkable,i=e.checkRetain,d=e.checkStrictly,p=e.parentKeysMap,f=(0,r.useState)(),v=(0,c.Z)(f,2),y=v[0],m=v[1],k=(0,r.useState)([]),b=(0,c.Z)(k,2),E=b[0],S=b[1],K=(0,r.useState)([]),O=(0,c.Z)(K,2),Z=O[0],j=O[1],C=(0,r.useState)(),D=(0,c.Z)(C,2),w=D[0],N=D[1],P=(0,r.useState)([]),x=(0,c.Z)(P,2),B=x[0],M=x[1];if(!n)return{highlightTreeData:t,keyword:y,highlightKeys:Z,expandedKeys:E,checkedKeys:w,onExpand:S,onCheck:N,onSearch:()=>null,SearchBar:()=>null};var R=(0,r.useMemo)((()=>{var e;return w?d?null!==(e=w.checked)&&void 0!==e?e:[]:w:[]}),[w,d]),A=o(((e,n)=>{var r;e=null!==(r=e)&&void 0!==r?r:y,m(e);var a=g(t,e),l=(0,c.Z)(a,3),o=l[0],i=l[1],u=l[2];if(!n)if(e)S(u);else{var d=[];R.forEach((e=>{d.push(e,...p[e])})),S(s(d))}j(i),M(o)})),T=o(((e,t)=>{if(null!==t&&void 0!==t&&t.event||null!==t&&void 0!==t&&t.checked||!i)N(e);else{var n,r=Array.isArray(e)?e:null!==(n=null===e||void 0===e?void 0:e.checked)&&void 0!==n?n:[],a=u(R,r),c=s([].concat(...a.map((e=>p[e])))),l=u(r,c);N(l)}})),J=o((()=>a().createElement(h,{onCheck:T,onSearch:A,checkable:l,checkRetain:i,checkedKeys:R,highlightKeys:Z})));return(0,r.useEffect)((()=>{A(void 0,!0)}),[t]),{highlightTreeData:B,keyword:y,expandedKeys:E,highlightKeys:Z,checkedKeys:w,onSearch:A,onExpand:S,onCheck:T,SearchBar:J}}var K=n(22117),O=n(91285),Z=n(31099);function j(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}var C=e=>{var t=e.value,n=e.children,r=e.onAddChild,c=e.onAddBrother,l=e.onDelete,o=e.onEdit,i=e.onMove;return a().createElement("div",{className:"tree-action-bar"},n,a().createElement("div",{className:"tree-action-bar-extra",onClick:j},r&&a().createElement(O.Z,{title:"\u6dfb\u52a0\u5b50\u7ea7"},a().createElement("div",{className:"tree-action-bar-icon",onClick:()=>r(t)},a().createElement("i",{className:"iconfont icon-ziji"}))),[c,o,i,l].some(Boolean)&&a().createElement(Z.Z,{trigger:"click",overlayClassName:"tree-action-bar-popover",content:a().createElement("ul",{className:"tree-action-bar-menu"},o&&a().createElement("li",{onClick:()=>o(t)},a().createElement("i",{className:"iconfont icon-edit"}),a().createElement("span",null,"\u7f16\u8f91")),c&&a().createElement("li",{onClick:()=>c(t)},a().createElement("i",{className:"iconfont icon-tongji"}),a().createElement("span",null,"\u6dfb\u52a0\u540c\u7ea7")),i&&a().createElement("li",{onClick:()=>i(t)},a().createElement("i",{className:"iconfont icon-yidongdao"}),a().createElement("span",null,"\u79fb\u52a8\u5230")),l&&a().createElement("li",{onClick:()=>l(t)},a().createElement("i",{className:"iconfont icon-k-i-delete"}),a().createElement("span",null,"\u5220\u9664"))),placement:"bottomRight"},a().createElement("div",{className:"tree-action-bar-icon"},a().createElement("i",{className:"iconfont icon-add"})))))},D=(0,r.memo)(C);function w(e){var t=e.treeData,n=e.operable,l=e.parentKeysMap,i=e.actionBarProps,u=e.actionBarRender,s=(0,r.useState)([]),d=(0,c.Z)(s,2),h=d[0],p=d[1],f=(0,r.useState)([]),y=(0,c.Z)(f,2),m=y[0],k=y[1];if(!n)return{operableTreeData:t,selectedKeys:m,onSelect:e=>k(e)};var E=o(((e,n)=>{var r=n.node,c=n.selected;if(k(e),c){var o=JSON.parse(JSON.stringify(t)),s=b(o,r.key,l[r.key]);s.render=null!==u&&void 0!==u?u:e=>a().createElement(D,(0,K.Z)({value:s.key},i),e),p(o)}else p(t)}));return(0,r.useEffect)((()=>{(0,v.kJ)(t)&&p(t)}),[t]),{selectedKeys:m,operableTreeData:h,onSelect:E}}function N(e){var t=e.dataSource,n=e.searchable,a=e.operable,c=e.checkable,l=e.checkRetain,o=e.checkStrictly,i=e.actionBarProps,u=e.actionBarRender,s=(0,r.useMemo)((()=>y(t)),[t]),d=(0,r.useMemo)((()=>k(s)),[s]),h=w({treeData:null!==t&&void 0!==t?t:[],operable:a,parentKeysMap:d,actionBarProps:i,actionBarRender:u}),p=h.operableTreeData,f=h.selectedKeys,v=h.onSelect,m=S({treeData:p,searchable:n,parentKeysMap:d,checkable:c,checkRetain:l,checkStrictly:o}),b=m.highlightTreeData,E=m.expandedKeys,g=m.checkedKeys,K=m.onExpand,O=m.onCheck,Z=m.onSearch,j=m.SearchBar;return{treeData:b,expandedKeys:E,selectedKeys:f,checkedKeys:g,onExpand:K,onSelect:v,onCheck:O,onSearch:Z,SearchBar:j}}var P=n(66579),x=n(10010),B=[{key:"0",title:"1\u7ea7\u9009\u98791",children:[{key:"1-0",title:"2\u7ea7\u9009\u98791-1",parentKeys:["0"]},{key:"1-1",title:"2\u7ea7\u9009\u98791-2",parentKeys:["0"]}],parentKeys:[]},{key:"1",title:"1\u7ea7\u9009\u98792",children:[{key:"2-0",title:"2\u7ea7\u9009\u98792-1",parentKeys:["1"]},{key:"2-1",title:"2\u7ea7\u9009\u98792-2",parentKeys:["1"]}],parentKeys:[]}];function M(){var e=N({dataSource:B,searchable:!0,operable:!0,checkable:!0,checkRetain:!0,actionBarProps:{onAddChild:()=>null,onDelete:()=>null,onAddBrother:()=>null,onEdit:()=>null,onMove:()=>null}}),t=e.treeData,n=e.expandedKeys,c=e.checkedKeys,l=e.selectedKeys,o=e.SearchBar,i=e.onExpand,u=e.onCheck,s=e.onSelect;return a().createElement(r.Fragment,null,a().createElement(P.Z,{title:"\u641c\u7d22\u6811",style:{width:300},size:"small"},a().createElement(o,null),a().createElement(x.Z,{checkable:!0,onCheck:u,onSelect:s,onExpand:i,treeData:t,checkedKeys:c,expandedKeys:n,selectedKeys:l,showLine:{showLeafIcon:!1}})))}},36043:function(e,t,n){"use strict";function r(e,t){return Object.prototype.toString.call(e)==="[object ".concat(t,"]")}function a(e){return r(e,"String")}function c(e){return r(e,"Array")}function l(e){return"undefined"!==typeof e}n.d(t,{HD:function(){return a},kJ:function(){return c},Xq:function(){return l}})},43854:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,{Z:function(){return c}})},6300:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function a(e,t){if(null==e)return{};var n,a,c=r(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,{Z:function(){return a}})}}]);