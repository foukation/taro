(window.webpackJsonp=window.webpackJsonp||[]).push([[711],{1791:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return r?n.a.createElement(m,i({ref:t},b,{components:r})):n.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=r[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},851:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(1),n=r(9),o=(r(0),r(1791)),c={title:"Taro.pauseVoice()",sidebar_label:"pauseVoice"},i={id:"version-1.3.42/apis/multimedia/audio/pauseVoice",title:"Taro.pauseVoice()",description:"\u6682\u505c\u6b63\u5728\u64ad\u653e\u7684\u8bed\u97f3\u3002\u518d\u6b21\u8c03\u7528 Taro.playVoice \u64ad\u653e\u540c\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u4f1a\u4ece\u6682\u505c\u5904\u5f00\u59cb\u64ad\u653e\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u64ad\u653e\uff0c\u9700\u8981\u5148\u8c03\u7528 Taro.stopVoice\u3002",source:"@site/versioned_docs/version-1.3.42/apis/multimedia/audio/pauseVoice.md",permalink:"/taro/docs/1.3.42/apis/multimedia/audio/pauseVoice",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/apis/multimedia/audio/pauseVoice.md",version:"1.3.42",sidebar_label:"pauseVoice",sidebar:"version-1.3.42/API",previous:{title:"Taro.playVoice(OBJECT)",permalink:"/taro/docs/1.3.42/apis/multimedia/audio/playVoice"},next:{title:"Taro.stopVoice()",permalink:"/taro/docs/1.3.42/apis/multimedia/audio/stopVoice"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],b={rightToc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u6682\u505c\u6b63\u5728\u64ad\u653e\u7684\u8bed\u97f3\u3002\u518d\u6b21\u8c03\u7528 Taro.playVoice \u64ad\u653e\u540c\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u4f1a\u4ece\u6682\u505c\u5904\u5f00\u59cb\u64ad\u653e\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u64ad\u653e\uff0c\u9700\u8981\u5148\u8c03\u7528 Taro.stopVoice\u3002"),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.startRecord(params)\n  .then(res => {\n    const filePath = res.tempFilePath\n    Taro.playVoice({ filePath })\n\n    setTimeout(Taro.pauseVoice, 5000)\n  })\n")),Object(o.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.pauseVoice"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0}}]);