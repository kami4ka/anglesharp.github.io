parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QMYn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("react")),t=require("piral-docs-tools/components");function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}function n(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=o?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(a,l,s):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}var a=(0,t.getPageLayout)("blog"),o="https://github.com/AngleSharp/anglesharp.github.io/tree/main/docs/blog/2019-05-15-anglesharp-v0121.md",l="\n<p>Yesterday a small hotfix release for AngleSharp v0.12 was released. With AngleSharp v0.12.1 also all the major libraries have been updated to v0.12.1 as well:</p>\n<ul>\n<li>AngleSharp.Xml</li>\n<li>AngleSharp.Io</li>\n<li>AngleSharp.Css</li>\n<li>AngleSharp.Js</li>\n</ul>\n<p>The hotfix corrected the assembly version of AngleSharp, which was still delivered at 0.11. An update to the build script should prevent such issues in the future.</p>\n<p>We used the hotfix to also deliver some smaller enhancements, such as additions to the <code>Accessors</code> flags or an improvement to the <code>TaskEventLoop</code>.</p>\n<p>In AngleSharp.Css we could add some missing attributes. In AngleSharp.Xml we fixed the namespace for the <code>WithXml</code> from <code>AngleSharp.Xml</code> to <code>AngleSharp</code>.</p>\n<p>We also updated most of the sample repositories. In the next release we will revamp the documentation.</p>\n",s={title:"AngleSharp v0.12.1",date:"2019-05-15 12:52:00",categories:"news release",author:"Florian Rappl"},i=function(){return e.createElement(t.ContentPage,null,e.createElement(t.PageContent,{meta:s},e.createElement(a,{meta:s},e.createElement(t.Markdown,{content:l,link:o,editLabel:"Edit on GitHub"}))))};exports.default=i;
},{"react":"kvyv","piral-docs-tools/components":"Mdgd"}]},{},[], null)
//# sourceMappingURL=/blog-2019-05-15-anglesharp-v0121.e9e5530b.js.map