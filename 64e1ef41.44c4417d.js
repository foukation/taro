(window.webpackJsonp=window.webpackJsonp||[]).push([[698],{1791:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=o,d=u["".concat(c,".").concat(b)]||u[b]||v[b]||i;return r?n.a.createElement(d,a({ref:t},p,{components:r})):n.a.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},838:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var o=r(1),n=r(9),i=(r(0),r(1791)),c={title:"Taro.stopBluetoothDevicesDiscovery(OBJECT)",sidebar_label:"stopBluetoothDevicesDiscovery"},a={id:"version-1.3.42/apis/device/bluetooth/stopBluetoothDevicesDiscovery",title:"Taro.stopBluetoothDevicesDiscovery(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.stopBluetoothDevicesDiscovery`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopBluetoothDevicesDiscovery.html)\uff0c\u652f\u6301 `Promise` \u5316\u4f7f\u7528\u3002\r",source:"@site/versioned_docs/version-1.3.42/apis/device/bluetooth/stopBluetoothDevicesDiscovery.md",permalink:"/taro/docs/1.3.42/apis/device/bluetooth/stopBluetoothDevicesDiscovery",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/apis/device/bluetooth/stopBluetoothDevicesDiscovery.md",version:"1.3.42",sidebar_label:"stopBluetoothDevicesDiscovery",sidebar:"version-1.3.42/API",previous:{title:"Taro.startBluetoothDevicesDiscovery(OBJECT)",permalink:"/taro/docs/1.3.42/apis/device/bluetooth/startBluetoothDevicesDiscovery"},next:{title:"Taro.closeBLEConnection(OBJECT)",permalink:"/taro/docs/1.3.42/apis/device/ble/closeBLEConnection"}},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopBluetoothDevicesDiscovery.html"}),Object(i.b)("inlineCode",{parentName:"a"},"wx.stopBluetoothDevicesDiscovery")),"\uff0c\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.stopBluetoothDevicesDiscovery(params).then(...)\n")))}l.isMDXComponent=!0}}]);