parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d9mW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("react")),t=require("piral-docs-tools/components");function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(n=function(e){return e?o:t})(e)}function o(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=n(t);if(o&&o.has(e))return o.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,o&&o.set(e,r),r}var r=(0,t.getPageLayout)("blog"),a="https://github.com/AngleSharp/anglesharp.github.io/tree/main/docs/blog/2015-10-12-anglesharp-v093-released.md",i="\n<p>AngleSharp v0.9.3 is another round of minor updates. Besides a few bug fixes the <code>CompareDocumentPosition</code> method has been improved. It now passes all tests and works reliably.</p>\n<p>The most interesting new feature is the ability to define custom handling of entities. This can be done via the <code>IEntityService</code>. The <code>GetSymbol</code> is usually called with an entity like <code>gt</code> for XML or <code>gt;</code> for HTML. The difference between XML and HTML lies in the way that HTML handles entity errors. HTML has the possibility to use non-semicolon-terminated entities.</p>\n<p>The simplest way would be to use, e.g., <code>XmlEntityService.Resolver</code>, in a custom implementation. That way the common entities would be resolved by the already available service.</p>\n<p>The next release will most probably be a feature release again. Hopefully features such as the CSSOM improvements, factory extensions, or a virtual file system, will be integrated.</p>\n",l={title:"AngleSharp v0.9.3 released",date:"2015-10-12 11:44:00",categories:"news release",author:"Florian Rappl"},s=function(){return e.createElement(t.ContentPage,null,e.createElement(t.PageContent,{meta:l},e.createElement(r,{meta:l},e.createElement(t.Markdown,{content:i,link:a,editLabel:"Edit on GitHub"}))))};exports.default=s;
},{"react":"kvyv","piral-docs-tools/components":"Mdgd"}]},{},[], null)
//# sourceMappingURL=/blog-2015-10-12-anglesharp-v093-released.d681d40f.js.map