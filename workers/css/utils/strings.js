!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports"],e)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.startsWith=function(e,t){if(e.length<t.length)return!1;for(var n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0},t.endsWith=function(e,t){var n=e.length-t.length;return n>0?e.lastIndexOf(t)===n:0===n&&e===t},t.difference=function(e,t,n){void 0===n&&(n=4);var r=Math.abs(e.length-t.length);if(r>n)return 0;var o,i,f=[],u=[];for(o=0;o<t.length+1;++o)u.push(0);for(o=0;o<e.length+1;++o)f.push(u);for(o=1;o<e.length+1;++o)for(i=1;i<t.length+1;++i)e[o-1]===t[i-1]?f[o][i]=f[o-1][i-1]+1:f[o][i]=Math.max(f[o-1][i],f[o][i-1]);return f[e.length][t.length]-Math.sqrt(r)},t.getLimitedString=function(e,t){return void 0===t&&(t=!0),e?e.length<140?e:e.slice(0,140)+(t?"…":""):""}});