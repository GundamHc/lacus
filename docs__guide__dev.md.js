(self["webpackChunklacus"]=self["webpackChunklacus"]||[]).push([[964],{68160:function(){},43872:function(e,t,n){"use strict";var l=n(23369),a=n.n(l),r=n(66487),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},i=["children","className","style"];t["Z"]=e=>{var t=e.identifier,n=e.export,m=(0,r.useApiData)(t),o=(0,l.useContext)(r.context),u=o.locale,s=/^zh|cn$/i.test(u)?c["zh-CN"]:c["en-US"],d=m[n].filter((e=>{var t=e.identifier;return!i.includes(t)}));return a().createElement(a().Fragment,null,m&&a().createElement("table",{style:{marginTop:24}},a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",null,s.name),a().createElement("th",null,s.description),a().createElement("th",null,s.type),a().createElement("th",null,s.default))),a().createElement("tbody",null,d.map((e=>a().createElement("tr",{key:e.identifier},a().createElement("td",null,e.identifier),a().createElement("td",null,e.description||"-"),a().createElement("td",null,a().createElement("code",null,e.type)),a().createElement("td",null,a().createElement("code",null,e.default||e.required&&s.required||"-"))))))))}},53156:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var l=n(23369),a=n.n(l),r=n(66487);n(43872),n(68160);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}var i=function(e){return a().createElement("div",c({className:"__dumi-default-alert"},e))},m=n(31169),o=a().memo((e=>{e.demos;return a().createElement(a().Fragment,null,a().createElement("div",{className:"markdown"},a().createElement("h2",{id:"\u62c9\u53d6\u9879\u76ee"},a().createElement(r.AnchorLink,{to:"#\u62c9\u53d6\u9879\u76ee","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"\u62c9\u53d6\u9879\u76ee"),a().createElement(m.Z,{code:"git clone https://github.com/GundamHc/lacus.git",lang:"bash"}),a().createElement("p",null,a().createElement(i,{type:"info"},"\u5982\u679c\u7f51\u7edc\u8fde\u63a5\u8d85\u65f6\uff0c\u53ef\u4fee\u6539\u7cfb\u7edf host \u6587\u4ef6\uff0c\u4f7f\u7528 cdn \u52a0\u901f\uff0c\u6216\u8005\u4f7f\u7528\u4ee3\u7406\u3002")),a().createElement("ul",null,a().createElement("li",null,a().createElement(r.Link,{to:"https://zhuanlan.zhihu.com/p/75994966"},"https://zhuanlan.zhihu.com/p/75994966")),a().createElement("li",null,a().createElement(r.Link,{to:"https://zhuanlan.zhihu.com/p/148110705"},"https://zhuanlan.zhihu.com/p/148110705"))),a().createElement("h2",{id:"\u4f9d\u8d56\u7ba1\u7406"},a().createElement(r.AnchorLink,{to:"#\u4f9d\u8d56\u7ba1\u7406","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"\u4f9d\u8d56\u7ba1\u7406"),a().createElement("p",null,"\u63a8\u8350\u4f7f\u7528 ",a().createElement(r.Link,{to:"https://www.pnpm.cn/"},"pnpm")," \u7ba1\u7406\u4f9d\u8d56"),a().createElement(m.Z,{code:"pnpm i",lang:"bash"}),a().createElement("h2",{id:"\u5e38\u7528\u547d\u4ee4"},a().createElement(r.AnchorLink,{to:"#\u5e38\u7528\u547d\u4ee4","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"\u5e38\u7528\u547d\u4ee4"),a().createElement(m.Z,{code:"pnpm start  //\u542f\u52a8\u9879\u76ee",lang:"bash"}),a().createElement(m.Z,{code:"pnpm build  //\u6784\u5efa npm \u5305",lang:"bash"}),a().createElement(m.Z,{code:"pnpm deploy //\u6253\u5305\u6587\u6863\u5e76\u81ea\u52a8\u90e8\u7f72\u5230 Github",lang:"bash"}),a().createElement(m.Z,{code:"pnpm release  //\u53d1\u5e03 npm \u65b0\u7248\u672c",lang:"bash"}),a().createElement("h2",{id:"\u7ec4\u4ef6\u5f00\u53d1"},a().createElement(r.AnchorLink,{to:"#\u7ec4\u4ef6\u5f00\u53d1","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"\u7ec4\u4ef6\u5f00\u53d1"),a().createElement("p",null,"\u65b0\u589e\u7ec4\u4ef6\u63a8\u8350\u4f7f\u7528 ",a().createElement(r.Link,{to:"https://github.com/plopjs/plop"},"plop")," \u81ea\u52a8\u751f\u6210\u76ee\u5f55\u6587\u4ef6\uff0c\u7ec4\u4ef6\u540d\u79f0\u8f93\u5165\u771f\u5b9e\u540d\u79f0\uff0c\u5982 Button \u3001useRequest\u3002"),a().createElement(m.Z,{code:"pnpm new",lang:"bash"}),a().createElement("h2",{id:"\u6587\u6863\u5f00\u53d1"},a().createElement(r.AnchorLink,{to:"#\u6587\u6863\u5f00\u53d1","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"\u6587\u6863\u5f00\u53d1"),a().createElement("p",null,"\u672c\u9879\u76ee\u6587\u6863\u5de5\u5177\u4e3a ",a().createElement(r.Link,{to:"https://github.com/umijs/dumi"},"dumi"),"\uff0c\u8be6\u60c5\u89c1",a().createElement(r.Link,{to:"https://d.umijs.org/zh-CN/guide"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),a().createElement("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},a().createElement(r.AnchorLink,{to:"#\u6ce8\u610f\u4e8b\u9879","aria-hidden":"true",tabIndex:-1},a().createElement("span",{className:"icon icon-link"})),"\u6ce8\u610f\u4e8b\u9879"),a().createElement("ul",null,a().createElement("li",null,a().createElement("p",null,"\u5f00\u53d1 Hooks \u7ec4\u4ef6\u65f6\uff0c\u8bf7\u5168\u5c40\u5f15\u5165 React\uff0c\u56e0\u4e3a\u6253\u5305\u7f16\u8bd1 ts \u7c7b\u578b\u6587\u4ef6\u65f6\u53ef\u80fd\u4f1a\u9700\u8981\u7528\u5230 @types/react"),a().createElement(m.Z,{code:"import React from 'react';",lang:"ts"})))))})),u=e=>{var t=a().useContext(r.context),n=t.demos;return a().useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a().createElement(o,{demos:n})}}}]);