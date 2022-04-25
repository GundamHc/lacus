(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"0H/f":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},i=["children","className","style"];t["a"]=e=>{var t=e.identifier,a=e.export,o=Object(r["useApiData"])(t),m=Object(n["useContext"])(r["context"]),s=m.locale,d=/^zh|cn$/i.test(s)?c["zh-CN"]:c["en-US"],u=o[a].filter((e=>{var t=e.identifier;return!i.includes(t)}));return l.a.createElement(l.a.Fragment,null,o&&l.a.createElement("table",{style:{marginTop:24}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,d.name),l.a.createElement("th",null,d.description),l.a.createElement("th",null,d.type),l.a.createElement("th",null,d.default))),l.a.createElement("tbody",null,u.map((e=>l.a.createElement("tr",{key:e.identifier},l.a.createElement("td",null,e.identifier),l.a.createElement("td",null,e.description||"-"),l.a.createElement("td",null,l.a.createElement("code",null,e.type)),l.a.createElement("td",null,l.a.createElement("code",null,e.default||e.required&&d.required||"-"))))))))}},gql7:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=(a("0H/f"),a("H1Ra")),i=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("p",{align:"center"},l.a.createElement("img",{width:100,src:"https://pic.imgdb.cn/item/6266a572239250f7c5ebfa06.png"})),l.a.createElement("h1",{align:"center",id:"lacus"},l.a.createElement(r["AnchorLink"],{to:"#lacus","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"lacus"),l.a.createElement("h2",{id:"-\u5b89\u88c5"},l.a.createElement(r["AnchorLink"],{to:"#-\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\udce6 \u5b89\u88c5"),l.a.createElement(c["a"],{code:"npm install lacus --save",lang:"bash"}),l.a.createElement(c["a"],{code:"yarn add lacus",lang:"bash"}),l.a.createElement(c["a"],{code:"pnpm add lacus",lang:"bash"}),l.a.createElement("h2",{id:"-\u793a\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#-\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\udd28 \u793a\u4f8b"),l.a.createElement(c["a"],{code:"import { DotTitle } from 'lacus';\n\nconst App = () => <DotTitle>\u6807\u9898</DotTitle>;",lang:"tsx"}),l.a.createElement("h4",{id:"\u5168\u5c40\u5f15\u5165-antd-\u6837\u5f0f"},l.a.createElement(r["AnchorLink"],{to:"#\u5168\u5c40\u5f15\u5165-antd-\u6837\u5f0f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5168\u5c40\u5f15\u5165 antd \u6837\u5f0f\uff1a"),l.a.createElement(c["a"],{code:"import 'lacus/lib/styles/antd.less';",lang:"jsx"}),l.a.createElement("h4",{id:"\u6309\u9700\u5f15\u5165\u5176\u4ed6\u7ec4\u4ef6\u6837\u5f0f"},l.a.createElement(r["AnchorLink"],{to:"#\u6309\u9700\u5f15\u5165\u5176\u4ed6\u7ec4\u4ef6\u6837\u5f0f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6309\u9700\u5f15\u5165\u5176\u4ed6\u7ec4\u4ef6\u6837\u5f0f:"),l.a.createElement(c["a"],{code:"// vite.cofig\nimport { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nimport { StyleImportVite } from 'lacus/lib/utils/plugin';\nimport { createStyleImportPlugin } from 'vite-plugin-style-import';\n\nexport default defineConfig({\n  plugins: [\n    react(),\n    createStyleImportPlugin({\n      resolves: [StyleImportVite()],\n    }),\n  ],\n  css: {\n    preprocessorOptions: {\n      less: {\n        javascriptEnabled: true,\n      },\n    },\n  },\n});",lang:"ts"}),l.a.createElement(c["a"],{code:"// .babelrc\nimport { StyleImportBabel } from 'lacus/lib/utils/plugin';\n\n{\n  \"plugins\": [StyleImportBabel()],\n}",lang:"ts"}),l.a.createElement("h2",{id:"-todo"},l.a.createElement(r["AnchorLink"],{to:"#-todo","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\ude80 TODO"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u589e\u52a0\u5168\u5c40\u6837\u5f0f\u5f15\u5165\u65b9\u5f0f"),l.a.createElement("li",null,"\u589e\u52a0 UMD \u6253\u5305\u4ea7\u7269"))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}}}]);