parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wMHb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("react")),t=require("piral-docs-tools/components");function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(n=function(e){return e?o:t})(e)}function o(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=n(t);if(o&&o.has(e))return o.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(i,r,l):i[r]=e[r]}return i.default=e,o&&o.set(e,i),i}var i=(0,t.getPageLayout)("blog"),a="https://github.com/AngleSharp/anglesharp.github.io/tree/main/docs/blog/2019-05-02-dotnet-foundation.md",r="\n<p>Today version v0.12 of AngleSharp has been published. Like v0.11 this is only an intermediate release before becoming officially stable with v1.0. Obviously, I could now write a bit on the bugfixes, enhancements, and additions that come with this release. However, there is a bigger organizational change that has finally happend with the release of v0.12 ...</p>\n<p>... with this release AngleSharp is a member of the .NET Foundation. We will be supported with everything we need to sustain development on this project, bringing it to the next level and provide first-class web tooling to any .NET project. The vision of AngleSharp is now officially supported by the .NET Foundation!</p>\n<blockquote>\n<p>The long term vision for AngleSharp is provide all the building blocks for downloading, inspecting, running, and rendering standard web assets within .NET applications.</p>\n</blockquote>\n<p>AngleSharp is a .NET Browser Engine Core, which represents the basis for modern web tooling available to .NET applications in form of a .NET Standard library. This implies not only development time spent on AngleSharp itself, but also on related libraries and tools, e.g., Jint or Esprima.NET.</p>\n<p>The hope that comes with this organizational change is a bit of momentum to enhance the AngleSharp community. The vision is too large to be fulfilled by a few people - we need a strong community that desires and believes in strong web tooling for .NET.</p>\n<p>Thanks to the .NET Foundation for their support. Let's follow the journey towards outstanding web tooling in .NET together!</p>\n",l={title:"Joining the .NET Foundation",date:"2019-05-02 15:00:00",categories:"news organization release",author:"Florian Rappl"},s=function(){return e.createElement(t.ContentPage,null,e.createElement(t.PageContent,{meta:l},e.createElement(i,{meta:l},e.createElement(t.Markdown,{content:r,link:a,editLabel:"Edit on GitHub"}))))};exports.default=s;
},{"react":"kvyv","piral-docs-tools/components":"Mdgd"}]},{},[], null)
//# sourceMappingURL=/blog-2019-05-02-dotnet-foundation.5c244743.js.map