parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"quup":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("react")),t=require("piral-docs-tools/components");function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(n=function(e){return e?o:t})(e)}function o(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=n(t);if(o&&o.has(e))return o.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=a?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,o&&o.set(e,r),r}var r=(0,t.getPageLayout)("blog"),a="https://github.com/AngleSharp/anglesharp.github.io/tree/main/docs/blog/2016-05-06-anglesharp-v96-released.md",i="\n<p>More than two months after the release of AngleSharp v0.9.5 the new version v0.9.6 has been published. Besides some bug fixes the version focused on starting some changes regarding the final API touches and modifications.</p>\n<p>The version may contain breaking changes to anyone using AngleSharp. Two of things that will potentially break builds are concerned with API renaming (e.g., <code>Submit</code> becomes <code>SubmitAsync</code>) and the removal of the <code>IEventAggregator</code>. While the former can be solved easily, the second one may actually require a little bit more time. Dropping the <code>IEventAggregator</code> was necessary to provide a uniform API that can also be exposed in JavaScript.</p>\n<p>Additionally, the usage of <code>new Configuration()</code> is highly <em>discouraged</em>. If you create plain new configurations <strong>no factories</strong> will be available to parser, requesters, ... - a lot of components. This will result in ill-behavior. I advise everyone to use <code>Configuration.Default</code> as the basis for any configuration adjustments.</p>\n<p>Finally, the scripting library (<code>AngleSharp.Scripting.JavaScript</code>) has been updated - supporting the latest version of the core AngleSharp library and bringing some fixes and improvements. Together with some changes in the core library the experience should be much more complete right now, but there is still some way to go.</p>\n<p>The samples, demo projects, and the <code>AngleSharp.Io</code> extension library have been updated accordingly. They all work seamlessly together and will be unified with the release of v1.0.0, planned later this year.</p>\n<p>Thanks to everyone for their contribution!</p>\n",s={title:"AngleSharp v0.9.6 released",date:"2016-05-06 13:27:00",categories:"news release",author:"Florian Rappl"},l=function(){return e.createElement(t.ContentPage,null,e.createElement(t.PageContent,{meta:s},e.createElement(r,{meta:s},e.createElement(t.Markdown,{content:i,link:a,editLabel:"Edit on GitHub"}))))};exports.default=l;
},{"react":"kvyv","piral-docs-tools/components":"Mdgd"}]},{},[], null)
//# sourceMappingURL=/blog-2016-05-06-anglesharp-v96-released.6a7fea10.js.map