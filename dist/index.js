!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("arrayIA",[],t):"object"==typeof exports?exports.arrayIA=t():e.arrayIA=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t,r){"use strict";r.r(t),r.d(t,"array_includes_any",(function(){return u}));var n=r(0),o=r.n(n);function u(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"any";if("equal"===r)return l(e,t);if(i(e,t))return!0;if("object"!==o()(e)||null===e||"object"!==o()(t)||null===t)return!1;for(var n={},u=0,f=e.length;u<f;u++)n[e[u]]=void 0;for(var c=0,a=t.length;c<a;c++)if(n.hasOwnProperty(t[c]))return!0;return!1}var f=Object.prototype.hasOwnProperty;function i(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function l(e,t){if(i(e,t))return!0;if("object"!==o()(e)||null===e||"object"!==o()(t)||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var u=0;u<r.length;u++)if(!f.call(t,r[u])||!i(e[r[u]],t[r[u]]))return!1;return!0}t.default=u}])}));