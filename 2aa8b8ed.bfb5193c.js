(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1791:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),o=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},j=function(e){var t=o(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),j=o(a),s=n,d=j["".concat(c,".").concat(s)]||j[s]||p[s]||b;return a?r.a.createElement(d,l({ref:t},O,{components:a})):r.a.createElement(d,l({ref:t},O))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var O=2;O<b;O++)c[O]=a[O];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},449:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(1),r=a(9),b=(a(0),a(1791)),c={title:"Stats",sidebar_label:"Stats"},l={id:"apis/files/Stats",title:"Stats",description:"\u63cf\u8ff0\u6587\u4ef6\u72b6\u6001\u7684\u5bf9\u8c61",source:"@site/docs/apis/files/Stats.md",permalink:"/taro/docs/next/apis/files/Stats",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/files/Stats.md",version:"next",sidebar_label:"Stats",sidebar:"API",previous:{title:"FileSystemManager",permalink:"/taro/docs/next/apis/files/FileSystemManager"},next:{title:"Taro.login(option)",permalink:"/taro/docs/next/apis/open-api/login/login"}},i=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"isDirectory",id:"isdirectory",children:[]},{value:"isFile",id:"isfile",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-2",children:[]}],O={rightToc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u63cf\u8ff0\u6587\u4ef6\u72b6\u6001\u7684\u5bf9\u8c61"),Object(b.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"lastAccessedTime"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",null,"\u6587\u4ef6\u6700\u8fd1\u4e00\u6b21\u88ab\u5b58\u53d6\u6216\u88ab\u6267\u884c\u7684\u65f6\u95f4\uff0cUNIX \u65f6\u95f4\u6233\uff0c\u5bf9\u5e94 POSIX stat.st_atime")),Object(b.b)("tr",null,Object(b.b)("td",null,"lastModifiedTime"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",null,"\u6587\u4ef6\u6700\u540e\u4e00\u6b21\u88ab\u4fee\u6539\u7684\u65f6\u95f4\uff0cUNIX \u65f6\u95f4\u6233\uff0c\u5bf9\u5e94 POSIX stat.st_mtime")),Object(b.b)("tr",null,Object(b.b)("td",null,"mode"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u6587\u4ef6\u7684\u7c7b\u578b\u548c\u5b58\u53d6\u7684\u6743\u9650\uff0c\u5bf9\u5e94 POSIX stat.st_mode")),Object(b.b)("tr",null,Object(b.b)("td",null,"size"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",null,"\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d\uff1aB\uff0c\u5bf9\u5e94 POSIX stat.st_size")))),Object(b.b)("h3",{id:"isdirectory"},"isDirectory"),Object(b.b)("p",null,"\u5224\u65ad\u5f53\u524d\u6587\u4ef6\u662f\u5426\u4e00\u4e2a\u76ee\u5f55"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.isDirectory.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"() => boolean\n")),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Stats.isDirectory"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h3",{id:"isfile"},"isFile"),Object(b.b)("p",null,"\u5224\u65ad\u5f53\u524d\u6587\u4ef6\u662f\u5426\u4e00\u4e2a\u666e\u901a\u6587\u4ef6"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.isFile.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"() => boolean\n")),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Stats.isFile"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Stats.isDirectory"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Stats.isFile"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}o.isMDXComponent=!0}}]);