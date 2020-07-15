(window.webpackJsonp=window.webpackJsonp||[]).push([[791],{1791:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),m=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=m(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=m(n),b=r,d=l["".concat(p,".").concat(b)]||l[b]||u[b]||a;return n?o.a.createElement(d,c({ref:t},s,{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var s=2;s<a;s++)p[s]=n[s];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},931:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return m}));var r=n(1),o=n(9),a=(n(0),n(1791)),p={title:"Map",sidebar_label:"Map"},c={id:"version-1.3.42/components/maps/map",title:"Map",description:"##### \u5730\u56fe",source:"@site/versioned_docs/version-1.3.42/components/maps/map.md",permalink:"/taro/docs/1.3.42/components/maps/map",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/components/maps/map.md",version:"1.3.42",sidebar_label:"Map",sidebar:"version-1.3.42/components",previous:{title:"Camera",permalink:"/taro/docs/1.3.42/components/media/camera"},next:{title:"Canvas",permalink:"/taro/docs/1.3.42/components/canvas/canvas"}},i=[],s={rightToc:i};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"\u5730\u56fe"},"\u5730\u56fe"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"<Map />")," \u7ec4\u4ef6\u7684 H5 \u4e0e RN \u7248\u672c\u5c1a\u672a\u5b9e\u73b0\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5c0f\u7a0b\u5e8f\u7aef\u53c2\u6570\u652f\u6301\u8be6\u89c1\u5404\u5c0f\u7a0b\u5e8f\u5b98\u7f51")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/map.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f Map"),"\u3002"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/map/#map"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f Map"),"\u3002"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.alipay.com/mini/component/map"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f Map"),"\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 map \u7ec4\u4ef6\nimport { Map } from '@tarojs/components'\n\nclass App extends Component {\n  onTap () {}\n  render () {\n    return (\n      <Map onClick={this.onTap} />\n    )\n  }\n}\n")))}m.isMDXComponent=!0}}]);