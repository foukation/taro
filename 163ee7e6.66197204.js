(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1791:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),d=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},i=function(e){var t=d(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),i=d(n),j=r,s=i["".concat(c,".").concat(j)]||i[j]||O[j]||l;return n?a.a.createElement(s,b({ref:t},o,{components:n})):a.a.createElement(s,b({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=j;var b={};for(var u in t)hasOwnProperty.call(t,u)&&(b[u]=t[u]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var o=2;o<l;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},299:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(9),l=(n(0),n(1791)),c={title:"Taro.getBackgroundAudioPlayerState(option)",sidebar_label:"getBackgroundAudioPlayerState"},b={id:"apis/media/background-audio/getBackgroundAudioPlayerState",title:"Taro.getBackgroundAudioPlayerState(option)",description:"\u83b7\u53d6\u540e\u53f0\u97f3\u4e50\u64ad\u653e\u72b6\u6001\u3002",source:"@site/docs/apis/media/background-audio/getBackgroundAudioPlayerState.md",permalink:"/taro/docs/next/apis/media/background-audio/getBackgroundAudioPlayerState",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/background-audio/getBackgroundAudioPlayerState.md",version:"next",sidebar_label:"getBackgroundAudioPlayerState",sidebar:"API",previous:{title:"Taro.onBackgroundAudioPause(callback)",permalink:"/taro/docs/next/apis/media/background-audio/onBackgroundAudioPause"},next:{title:"Taro.getBackgroundAudioManager()",permalink:"/taro/docs/next/apis/media/background-audio/getBackgroundAudioManager"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"status",id:"status",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u83b7\u53d6\u540e\u53f0\u97f3\u4e50\u64ad\u653e\u72b6\u6001\u3002\n",Object(l.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a1.2.0 \u7248\u672c\u5f00\u59cb\uff0c\u672c\u63a5\u53e3\u4e0d\u518d\u7ef4\u62a4\u3002\u5efa\u8bae\u4f7f\u7528\u80fd\u529b\u66f4\u5f3a\u7684 ",Object(l.b)("a",Object(r.a)({parentName:"strong"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html"}),"Taro.getBackgroundAudioManager")," \u63a5\u53e3")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioPlayerState.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"currentPosition"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u9009\u5b9a\u97f3\u9891\u7684\u64ad\u653e\u4f4d\u7f6e\uff08\u5355\u4f4d\uff1as\uff09\uff0c\u53ea\u6709\u5728\u97f3\u4e50\u64ad\u653e\u4e2d\u65f6\u8fd4\u56de")),Object(l.b)("tr",null,Object(l.b)("td",null,"dataUrl"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u6b4c\u66f2\u6570\u636e\u94fe\u63a5\uff0c\u53ea\u6709\u5728\u97f3\u4e50\u64ad\u653e\u4e2d\u65f6\u8fd4\u56de")),Object(l.b)("tr",null,Object(l.b)("td",null,"downloadPercent"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u97f3\u9891\u7684\u4e0b\u8f7d\u8fdb\u5ea6\u767e\u5206\u6bd4\uff0c\u53ea\u6709\u5728\u97f3\u4e50\u64ad\u653e\u4e2d\u65f6\u8fd4\u56de")),Object(l.b)("tr",null,Object(l.b)("td",null,"duration"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u9009\u5b9a\u97f3\u9891\u7684\u957f\u5ea6\uff08\u5355\u4f4d\uff1as\uff09\uff0c\u53ea\u6709\u5728\u97f3\u4e50\u64ad\u653e\u4e2d\u65f6\u8fd4\u56de")),Object(l.b)("tr",null,Object(l.b)("td",null,"status"),Object(l.b)("td",null,Object(l.b)("code",null,"0 | 1 | 2")),Object(l.b)("td",null,"\u64ad\u653e\u72b6\u6001")),Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(l.b)("h3",{id:"status"},"status"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"0"),Object(l.b)("td",null,"\u6682\u505c\u4e2d")),Object(l.b)("tr",null,Object(l.b)("td",null,"1"),Object(l.b)("td",null,"\u64ad\u653e\u4e2d")),Object(l.b)("tr",null,Object(l.b)("td",null,"2"),Object(l.b)("td",null,"\u6ca1\u6709\u97f3\u4e50\u64ad\u653e")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getBackgroundAudioPlayerState({\n  success: function (res) {\n    var status = res.status\n    var dataUrl = res.dataUrl\n    var currentPosition = res.currentPosition\n    var duration = res.duration\n    var downloadPercent = res.downloadPercent\n  }\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.getBackgroundAudioPlayerState"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);