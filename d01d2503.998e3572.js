(window.webpackJsonp=window.webpackJsonp||[]).push([[1359],{1496:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(1791)),s={title:"CSS \u9884\u5904\u7406\u5668"},c={id:"version-2.2.8/styles-processor",title:"CSS \u9884\u5904\u7406\u5668",description:"\u81ea Taro 2.2.8 \u5f00\u59cb\uff0cTaro \u9ed8\u8ba4\u53ea\u80fd\u5904\u7406 CSS \u4e3a\u540e\u7f00\u7684\u6837\u5f0f\u6587\u4ef6\uff0c\u5f53\u7136\uff0cTaro \u4e5f\u63d0\u4f9b\u4e86\u4f7f\u7528 Sass\u3001Less \u7b49 CSS \u9884\u5904\u7406\u5668\u7684\u65b9\u5f0f\uff0c\u4f46\u662f\u9700\u8981\u7528\u6237\u989d\u5916\u5f15\u5165\u76f8\u5173\u63d2\u4ef6\u6216\u8005\u901a\u8fc7 Taro \u7684 webpackChain \u914d\u7f6e\u6765\u5b9e\u73b0\u5bf9\u8fd9\u4e9b CSS \u4e0e\u5904\u7406\u5668\u7684\u652f\u6301\u3002",source:"@site/versioned_docs/version-2.2.8/styles-processor.md",permalink:"/taro/docs/2.2.8/styles-processor",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.8/styles-processor.md",version:"2.2.8",sidebar:"version-2.2.8/docs",previous:{title:"\u63d2\u4ef6\u529f\u80fd",permalink:"/taro/docs/2.2.8/plugin"},next:{title:"JS \u4ee3\u7801\u538b\u7f29",permalink:"/taro/docs/2.2.8/script-compressor"}},i=[],p={rightToc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u81ea Taro 2.2.8 \u5f00\u59cb\uff0cTaro \u9ed8\u8ba4\u53ea\u80fd\u5904\u7406 CSS \u4e3a\u540e\u7f00\u7684\u6837\u5f0f\u6587\u4ef6\uff0c\u5f53\u7136\uff0cTaro \u4e5f\u63d0\u4f9b\u4e86\u4f7f\u7528 Sass\u3001Less \u7b49 CSS \u9884\u5904\u7406\u5668\u7684\u65b9\u5f0f\uff0c\u4f46\u662f\u9700\u8981\u7528\u6237\u989d\u5916\u5f15\u5165\u76f8\u5173\u63d2\u4ef6\u6216\u8005\u901a\u8fc7 Taro \u7684 webpackChain \u914d\u7f6e\u6765\u5b9e\u73b0\u5bf9\u8fd9\u4e9b CSS \u4e0e\u5904\u7406\u5668\u7684\u652f\u6301\u3002"),Object(o.b)("p",null,"Taro \u5b98\u65b9\u63d0\u4f9b\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/plugin-sass"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/plugin-less"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/plugin-stylus")," \u8fd9\u4e09\u4e2a\u63d2\u4ef6\uff0c\u6765\u5206\u522b\u5b9e\u73b0\u5bf9 Sass\u3001Less\u3001Stylus \u7684\u652f\u6301\uff0c\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u5f15\u5165\u3002"),Object(o.b)("p",null,"\u9996\u5148\u9700\u8981\u5b89\u88c5\u63d2\u4ef6\uff0c\u4ee5 sass \u5904\u7406\u63d2\u4ef6 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/plugin-sass")," \u4e3a\u4f8b"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ npm i --D @tarojs/plugin-sass\n")),Object(o.b)("p",null,"\u7136\u540e\uff0c\u5728\u9879\u76ee\u7684 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./config-detail/#plugins"}),Object(o.b)("inlineCode",{parentName:"a"},"plugins"))," \u914d\u7f6e\u4e2d\u5f15\u5165\u63d2\u4ef6"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// config/index\nconst config = {\n  plugins: [\n    '@tarojs/plugin-sass'\n  ]\n}\n")),Object(o.b)("p",null,"\u8fd9\u6837\uff0c\u5c31\u80fd\u987a\u5229\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 sass \u4e86\uff0c\u800c less/stylus \u652f\u6301\u4e5f\u540c\u7406\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5728 Taro 2.2.8 \u7248\u672c\u4e2d\u6211\u4eec\u5bf9 webpack \u7684\u9ed8\u8ba4\u914d\u7f6e\u8fdb\u884c\u4e86\u62c6\u5206\uff0c\u5c06 CSS \u9884\u5904\u7406\u5668\u7684\u652f\u6301\u62bd\u79bb\u51fa\u6765\u4e86\uff0c\u8fd9\u6837\u505a\u662f\u4e00\u4e3a\u4e86\u51cf\u5c0f\u7528\u6237\u9700\u8981\u5b89\u88c5\u7684\u4f9d\u8d56\u5305\u5927\u5c0f\uff0c\u56e0\u4e3a\u4e4b\u524d\u5bf9 sass/less/stylus \u7684\u914d\u7f6e\u90fd\u5199\u6b7b\u7684\u5728 webpack \u7684\u914d\u7f6e\u4e2d\uff0c\u8fd9\u6837\u7684\u8bdd\u7528\u6237\u65e0\u8bba\u5982\u4f55\u90fd\u4f1a\u5b89\u88c5\u8fd9\u4e09\u4e2a\u9884\u5904\u7406\u5668\uff0c\u5373\u4f7f\u9879\u76ee\u4e2d\u6839\u672c\u6ca1\u6709\u7528\u5230\uff1b\u4e8c\u662f\u4e3a\u4e86\u65b9\u4fbf\u6269\u5c55\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6309\u7167\u81ea\u5df1\u7684\u9700\u8981\u53bb\u81ea\u5b9a\u4e49\u66f4\u591a\u7684\u6837\u5f0f\u9884\u5904\u7406\u5668\uff0c\u540c\u65f6\u4e5f\u80fd\u5f00\u53d1\u81ea\u5df1\u7684\u63d2\u4ef6\u5207\u6362\u9884\u5904\u7406\u5668\u7684\u7f16\u8bd1\u5de5\u5177\uff0c\u4f8b\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/plugin-sass")," \u4e2d\u7684 sass \u5904\u7406\u7528\u7684\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"node-sass"),"\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u5df1\u5199\u4e00\u4e2a\u63d2\u4ef6\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"sass")," \u5305\uff0c\u6765\u4ee3\u66ff\u5b98\u65b9\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/plugin-sass")," \u63d2\u4ef6\u3002")))}l.isMDXComponent=!0},1791:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(f,c({ref:t},p,{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);