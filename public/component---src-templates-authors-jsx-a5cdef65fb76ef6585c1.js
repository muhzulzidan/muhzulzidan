(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+6XX":function(t,n,r){var e=r("y1pI");t.exports=function(t){return e(this.__data__,t)>-1}},"/9aa":function(t,n,r){var e=r("NykK"),o=r("ExA7");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==e(t)}},"2gN3":function(t,n,r){var e=r("Kz5y")["__core-js_shared__"];t.exports=e},"3Fdi":function(t,n,r){r("a1Th"),r("h7Nl"),r("Btvt");var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},"44Ds":function(t,n,r){var e=r("e4Nc");function o(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var r=function r(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,e);return r.cache=i.set(o,a)||i,a};return r.cache=new(o.Cache||e),r}o.Cache=e,t.exports=o},"4kuk":function(t,n,r){var e=r("SfRM"),o=r("Hvzi"),i=r("u8Dt"),a=r("ekgI"),u=r("JSQU");function c(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}c.prototype.clear=e,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},"4uTw":function(t,n,r){var e=r("Z0cm"),o=r("9ggG"),i=r("GNiM"),a=r("dt0z");t.exports=function(t,n){return e(t)?t:o(t,n)?[t]:i(a(t))}},"9Nap":function(t,n,r){var e=r("/9aa");t.exports=function(t){if("string"==typeof t||e(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},"9ggG":function(t,n,r){var e=r("Z0cm"),o=r("/9aa"),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,n){if(e(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||(a.test(t)||!i.test(t)||null!=n&&t in Object(n))}},AP2z:function(t,n,r){r("a1Th"),r("h7Nl"),r("Btvt");var e=r("nmnc"),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=e?e.toStringTag:void 0;t.exports=function(t){var n=i.call(t,u),r=t[u];try{t[u]=void 0;var e=!0}catch(c){}var o=a.call(t);return e&&(n?t[u]=r:delete t[u]),o}},Cwc5:function(t,n,r){var e=r("NKxu"),o=r("Npjl");t.exports=function(t,n){var r=o(t,n);return e(r)?r:void 0}},E2jh:function(t,n,r){r("rGqo"),r("yt8O"),r("Btvt");var e,o=r("2gN3"),i=(e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+e:"";t.exports=function(t){return!!i&&i in t}},EpBk:function(t,n){t.exports=function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}},ExA7:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},GNiM:function(t,n,r){r("pIFo");var e=r("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=e((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(o,(function(t,r,e,o){n.push(e?o.replace(i,"$1"):r||t)})),n}));t.exports=a},GoyQ:function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},H8j4:function(t,n,r){var e=r("QkVE");t.exports=function(t,n){var r=e(this,t),o=r.size;return r.set(t,n),this.size+=r.size==o?0:1,this}},Hvzi:function(t,n){t.exports=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}},I01J:function(t,n,r){var e=r("44Ds");t.exports=function(t){var n=e(t,(function(t){return 500===r.size&&r.clear(),t})),r=n.cache;return n}},JHgL:function(t,n,r){var e=r("QkVE");t.exports=function(t){return e(this,t).get(t)}},JSQU:function(t,n,r){var e=r("YESw");t.exports=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=e&&void 0===n?"__lodash_hash_undefined__":n,this}},KMkd:function(t,n){t.exports=function(){this.__data__=[],this.size=0}},KfNM:function(t,n,r){r("a1Th"),r("h7Nl"),r("Btvt");var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},Kz5y:function(t,n,r){var e=r("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,i=e||o||Function("return this")();t.exports=i},NKxu:function(t,n,r){r("pIFo"),r("Oyvg"),r("a1Th"),r("h7Nl"),r("Btvt");var e=r("lSCD"),o=r("E2jh"),i=r("GoyQ"),a=r("3Fdi"),u=/^\[object .+?Constructor\]$/,c=Function.prototype,p=Object.prototype,s=c.toString,f=p.hasOwnProperty,l=RegExp("^"+s.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(e(t)?l:u).test(a(t))}},Npjl:function(t,n){t.exports=function(t,n){return null==t?void 0:t[n]}},NykK:function(t,n,r){var e=r("nmnc"),o=r("AP2z"),i=r("KfNM"),a=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},QkVE:function(t,n,r){r("bWfx");var e=r("EpBk");t.exports=function(t,n){var r=t.__data__;return e(n)?r["string"==typeof n?"string":"hash"]:r.map}},SfRM:function(t,n,r){var e=r("YESw");t.exports=function(){this.__data__=e?e(null):{},this.size=0}},WFqU:function(t,n,r){(function(n){var r="object"==typeof n&&n&&n.Object===Object&&n;t.exports=r}).call(this,r("yLpj"))},Xi7e:function(t,n,r){var e=r("KMkd"),o=r("adU4"),i=r("tMB7"),a=r("+6XX"),u=r("Z8oC");function c(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}c.prototype.clear=e,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},YESw:function(t,n,r){var e=r("Cwc5")(Object,"create");t.exports=e},Z0cm:function(t,n,r){r("LK8F");var e=Array.isArray;t.exports=e},Z8oC:function(t,n,r){var e=r("y1pI");t.exports=function(t,n){var r=this.__data__,o=e(r,t);return o<0?(++this.size,r.push([t,n])):r[o][1]=n,this}},ZWtO:function(t,n,r){var e=r("4uTw"),o=r("9Nap");t.exports=function(t,n){for(var r=0,i=(n=e(n,t)).length;null!=t&&r<i;)t=t[o(n[r++])];return r&&r==i?t:void 0}},adU4:function(t,n,r){var e=r("y1pI"),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,r=e(n,t);return!(r<0)&&(r==n.length-1?n.pop():o.call(n,r,1),--this.size,!0)}},"bWC/":function(t,n,r){"use strict";r.r(n),r.d(n,"pageQuery",(function(){return s}));r("a1Th"),r("Btvt"),r("I5cv");var e=r("q1tI"),o=r.n(e),i=r("TJpk"),a=r.n(i),u=r("mwIZ"),c=r.n(u);var p=function(t){var n,r;r=t,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var e;e=i;function i(){return t.apply(this,arguments)||this}return i.prototype.render=function(){var t=c()(this.props,"data.cockpitAuthors"),n=c()(this.props,"data.site.siteMetadata.title");return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(a.a,{title:t.title.value+" | "+n}),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.authors.value}})))},i}(o.a.Component);n.default=p;var s="892353340"},dt0z:function(t,n,r){var e=r("zoYe");t.exports=function(t){return null==t?"":e(t)}},e4Nc:function(t,n,r){var e=r("fGT3"),o=r("k+1r"),i=r("JHgL"),a=r("pSRY"),u=r("H8j4");function c(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}c.prototype.clear=e,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=u,t.exports=c},eUgh:function(t,n){t.exports=function(t,n){for(var r=-1,e=null==t?0:t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o}},ebwN:function(t,n,r){var e=r("Cwc5")(r("Kz5y"),"Map");t.exports=e},ekgI:function(t,n,r){var e=r("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;return e?void 0!==n[t]:o.call(n,t)}},fGT3:function(t,n,r){var e=r("4kuk"),o=r("Xi7e"),i=r("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new e,map:new(i||o),string:new e}}},"k+1r":function(t,n,r){var e=r("QkVE");t.exports=function(t){var n=e(this,t).delete(t);return this.size-=n?1:0,n}},lSCD:function(t,n,r){var e=r("NykK"),o=r("GoyQ");t.exports=function(t){if(!o(t))return!1;var n=e(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},ljhN:function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},mwIZ:function(t,n,r){var e=r("ZWtO");t.exports=function(t,n,r){var o=null==t?void 0:e(t,n);return void 0===o?r:o}},nmnc:function(t,n,r){var e=r("Kz5y").Symbol;t.exports=e},pSRY:function(t,n,r){var e=r("QkVE");t.exports=function(t){return e(this,t).has(t)}},tMB7:function(t,n,r){var e=r("y1pI");t.exports=function(t){var n=this.__data__,r=e(n,t);return r<0?void 0:n[r][1]}},u8Dt:function(t,n,r){var e=r("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;if(e){var r=n[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(n,t)?n[t]:void 0}},y1pI:function(t,n,r){var e=r("ljhN");t.exports=function(t,n){for(var r=t.length;r--;)if(e(t[r][0],n))return r;return-1}},zoYe:function(t,n,r){r("a1Th"),r("h7Nl"),r("Btvt");var e=r("nmnc"),o=r("eUgh"),i=r("Z0cm"),a=r("/9aa"),u=e?e.prototype:void 0,c=u?u.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(i(n))return o(n,t)+"";if(a(n))return c?c.call(n):"";var r=n+"";return"0"==r&&1/n==-1/0?"-0":r}}}]);
//# sourceMappingURL=component---src-templates-authors-jsx-a5cdef65fb76ef6585c1.js.map