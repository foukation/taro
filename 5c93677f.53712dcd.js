(window.webpackJsonp=window.webpackJsonp||[]).push([[634],{1791:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,O=u["".concat(c,".").concat(s)]||u[s]||d[s]||o;return n?a.a.createElement(O,i({ref:t},l,{components:n})):a.a.createElement(O,i({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},774:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(1791)),c={title:"\u73af\u5883\u5224\u65ad"},i={id:"apis/about/env",title:"\u73af\u5883\u5224\u65ad",description:"## Taro.ENV_TYPE\r",source:"@site/docs/apis/about/env.md",permalink:"/taro/docs/next/apis/about/env",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/about/env.md",version:"next",sidebar:"API",previous:{title:"API \u8bf4\u660e",permalink:"/taro/docs/next/apis/about/desc"},next:{title:"\u6d88\u606f\u673a\u5236",permalink:"/taro/docs/next/apis/about/events"}},p=[{value:"Taro.ENV_TYPE",id:"taroenv_type",children:[]},{value:"Taro.getEnv()",id:"tarogetenv",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"taroenv_type"},"Taro.ENV_TYPE"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ENV_TYPE.WEAPP")," \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u73af\u5883"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ENV_TYPE.SWAN")," \u767e\u5ea6\u5c0f\u7a0b\u5e8f\u73af\u5883"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ENV_TYPE.ALIPAY")," \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u73af\u5883"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ENV_TYPE.TT")," \u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u73af\u5883"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ENV_TYPE.WEB")," WEB(H5)\u73af\u5883"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ENV_TYPE.RN")," ReactNative \u73af\u5883"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ENV_TYPE.QUICKAPP")," \u5feb\u5e94\u7528\u73af\u5883"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ENV_TYPE.QQ")," QQ\u5c0f\u7a0b\u5e8f \u73af\u5883"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ENV_TYPE.JD")," \u4eac\u4e1c\u5c0f\u7a0b\u5e8f \u73af\u5883"),Object(o.b)("h2",{id:"tarogetenv"},"Taro.getEnv()"),Object(o.b)("p",null,"\u83b7\u53d6\u5f53\u524d\u73af\u5883\u503c\uff0c\u5177\u4f53\u503c\u5982\u4e0a ",Object(o.b)("inlineCode",{parentName:"p"},"Taro.ENV_TYPE")))}b.isMDXComponent=!0}}]);