!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).buffer=t()}}(function(){return function(){return function t(r,e,n){function i(f,u){if(!e[f]){if(!r[f]){var s="function"==typeof require&&require;if(!u&&s)return s(f,!0);if(o)return o(f,!0);var h=new Error("Cannot find module '"+f+"'");throw h.code="MODULE_NOT_FOUND",h}var a=e[f]={exports:{}};r[f][0].call(a.exports,function(t){return i(r[f][1][t]||t)},a,a.exports,t,r,e,n)}return e[f].exports}for(var o="function"==typeof require&&require,f=0;f<n.length;f++)i(n[f]);return i}}()({1:[function(t,r,e){(function(r){"use strict";var n=t("base64-js"),i=t("ieee754"),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=r,e.SlowBuffer=function(t){+t!=t&&(t=0);return r.alloc(+t)},e.INSPECT_MAX_BYTES=50;var f=2147483647;function u(t){if(t>f)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,r.prototype),e}function r(t,r,e){if("number"==typeof t){if("string"==typeof r)throw new TypeError('The "string" argument must be of type string. Received type number');return a(t)}return s(t,r,e)}function s(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!r.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var n=0|l(t,e),i=u(n),o=i.write(t,e);o!==n&&(i=i.slice(0,o));return i}(t,e);if(ArrayBuffer.isView(t))return p(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(z(t,ArrayBuffer)||t&&z(t.buffer,ArrayBuffer))return function(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');var i;i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n);return Object.setPrototypeOf(i,r.prototype),i}(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return r.from(i,e,n);var o=function(t){if(r.isBuffer(t)){var e=0|c(t.length),n=u(e);return 0===n.length?n:(t.copy(n,0,0,e),n)}if(void 0!==t.length)return"number"!=typeof t.length||D(t.length)?u(0):p(t);if("Buffer"===t.type&&Array.isArray(t.data))return p(t.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return r.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function a(t){return h(t),u(t<0?0:0|c(t))}function p(t){for(var r=t.length<0?0:0|c(t.length),e=u(r),n=0;n<r;n+=1)e[n]=255&t[n];return e}function c(t){if(t>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return 0|t}function l(t,e){if(r.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||z(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return P(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return j(t).length;default:if(o)return i?-1:P(t).length;e=(""+e).toLowerCase(),o=!0}}function y(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function g(t,e,n,i,o){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),D(n=+n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=r.from(e,i)),r.isBuffer(e))return 0===e.length?-1:w(t,e,n,i,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):w(t,[e],n,i,o);throw new TypeError("val must be string, number or Buffer")}function w(t,r,e,n,i){var o,f=1,u=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,u/=2,s/=2,e/=2}function h(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}if(i){var a=-1;for(o=e;o<u;o++)if(h(t,o)===h(r,-1===a?0:o-a)){if(-1===a&&(a=o),o-a+1===s)return a*f}else-1!==a&&(o-=o-a),a=-1}else for(e+s>u&&(e=u-s),o=e;o>=0;o--){for(var p=!0,c=0;c<s;c++)if(h(t,o+c)!==h(r,c)){p=!1;break}if(p)return o}return-1}function d(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;n>o/2&&(n=o/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(D(u))return f;t[e+f]=u}return f}function v(t,r,e,n){return N(P(r,t.length-e),t,e,n)}function b(t,r,e,n){return N(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function m(t,r,e,n){return b(t,r,e,n)}function E(t,r,e,n){return N(j(r),t,e,n)}function B(t,r,e,n){return N(function(t,r){for(var e,n,i,o=[],f=0;f<t.length&&!((r-=2)<0);++f)e=t.charCodeAt(f),n=e>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function A(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function U(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,f,u,s,h=t[i],a=null,p=h>239?4:h>223?3:h>191?2:1;if(i+p<=e)switch(p){case 1:h<128&&(a=h);break;case 2:128==(192&(o=t[i+1]))&&(s=(31&h)<<6|63&o)>127&&(a=s);break;case 3:o=t[i+1],f=t[i+2],128==(192&o)&&128==(192&f)&&(s=(15&h)<<12|(63&o)<<6|63&f)>2047&&(s<55296||s>57343)&&(a=s);break;case 4:o=t[i+1],f=t[i+2],u=t[i+3],128==(192&o)&&128==(192&f)&&128==(192&u)&&(s=(15&h)<<18|(63&o)<<12|(63&f)<<6|63&u)>65535&&s<1114112&&(a=s)}null===a?(a=65533,p=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=p}return function(t){var r=t.length;if(r<=T)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=T));return e}(n)}e.kMaxLength=f,r.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),42===t.foo()}catch(t){return!1}}(),r.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}}),"undefined"!=typeof Symbol&&null!=Symbol.species&&r[Symbol.species]===r&&Object.defineProperty(r,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),r.poolSize=8192,r.from=function(t,r,e){return s(t,r,e)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array),r.alloc=function(t,r,e){return function(t,r,e){return h(t),t<=0?u(t):void 0!==r?"string"==typeof e?u(t).fill(r,e):u(t).fill(r):u(t)}(t,r,e)},r.allocUnsafe=function(t){return a(t)},r.allocUnsafeSlow=function(t){return a(t)},r.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==r.prototype},r.compare=function(t,e){if(z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(t)||!r.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var n=t.length,i=e.length,o=0,f=Math.min(n,i);o<f;++o)if(t[o]!==e[o]){n=t[o],i=e[o];break}return n<i?-1:i<n?1:0},r.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return r.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var i=r.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var f=t[n];if(z(f,Uint8Array)&&(f=r.from(f)),!r.isBuffer(f))throw new TypeError('"list" argument must be an Array of Buffers');f.copy(i,o),o+=f.length}return i},r.byteLength=l,r.prototype._isBuffer=!0,r.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)y(this,r,r+1);return this},r.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)y(this,r,r+3),y(this,r+1,r+2);return this},r.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)y(this,r,r+7),y(this,r+1,r+6),y(this,r+2,r+5),y(this,r+3,r+4);return this},r.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?U(this,0,t):function(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return L(this,r,e);case"utf8":case"utf-8":return U(this,r,e);case"ascii":return I(this,r,e);case"latin1":case"binary":return S(this,r,e);case"base64":return A(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(t){if(!r.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===r.compare(this,t)},r.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},o&&(r.prototype[o]=r.prototype.inspect),r.prototype.compare=function(t,e,n,i,o){if(z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),e<0||n>t.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&e>=n)return 0;if(i>=o)return-1;if(e>=n)return 1;if(this===t)return 0;for(var f=(o>>>=0)-(i>>>=0),u=(n>>>=0)-(e>>>=0),s=Math.min(f,u),h=this.slice(i,o),a=t.slice(e,n),p=0;p<s;++p)if(h[p]!==a[p]){f=h[p],u=a[p];break}return f<u?-1:u<f?1:0},r.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},r.prototype.indexOf=function(t,r,e){return g(this,t,r,e,!0)},r.prototype.lastIndexOf=function(t,r,e){return g(this,t,r,e,!1)},r.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return d(this,t,r,e);case"utf8":case"utf-8":return v(this,t,r,e);case"ascii":return b(this,t,r,e);case"latin1":case"binary":return m(this,t,r,e);case"base64":return E(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var T=4096;function I(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function S(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function L(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=F[t[o]];return i}function R(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function C(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function O(t,e,n,i,o,f){if(!r.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<f)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function _(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function x(t,r,e,n,o){return r=+r,e>>>=0,o||_(t,0,e,4),i.write(t,r,e,n,23,4),e+4}function M(t,r,e,n,o){return r=+r,e>>>=0,o||_(t,0,e,8),i.write(t,r,e,n,52,8),e+8}r.prototype.slice=function(t,e){var n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);var i=this.subarray(t,e);return Object.setPrototypeOf(i,r.prototype),i},r.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||C(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},r.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||C(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},r.prototype.readUInt8=function(t,r){return t>>>=0,r||C(t,1,this.length),this[t]},r.prototype.readUInt16LE=function(t,r){return t>>>=0,r||C(t,2,this.length),this[t]|this[t+1]<<8},r.prototype.readUInt16BE=function(t,r){return t>>>=0,r||C(t,2,this.length),this[t]<<8|this[t+1]},r.prototype.readUInt32LE=function(t,r){return t>>>=0,r||C(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},r.prototype.readUInt32BE=function(t,r){return t>>>=0,r||C(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},r.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||C(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},r.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||C(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},r.prototype.readInt8=function(t,r){return t>>>=0,r||C(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},r.prototype.readInt16LE=function(t,r){t>>>=0,r||C(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},r.prototype.readInt16BE=function(t,r){t>>>=0,r||C(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},r.prototype.readInt32LE=function(t,r){return t>>>=0,r||C(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},r.prototype.readInt32BE=function(t,r){return t>>>=0,r||C(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},r.prototype.readFloatLE=function(t,r){return t>>>=0,r||C(t,4,this.length),i.read(this,t,!0,23,4)},r.prototype.readFloatBE=function(t,r){return t>>>=0,r||C(t,4,this.length),i.read(this,t,!1,23,4)},r.prototype.readDoubleLE=function(t,r){return t>>>=0,r||C(t,8,this.length),i.read(this,t,!0,52,8)},r.prototype.readDoubleBE=function(t,r){return t>>>=0,r||C(t,8,this.length),i.read(this,t,!1,52,8)},r.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||O(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},r.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||O(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},r.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,1,255,0),this[r]=255&t,r+1},r.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},r.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},r.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},r.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},r.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);O(this,t,r,e,i-1,-i)}var o=0,f=1,u=0;for(this[r]=255&t;++o<e&&(f*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},r.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);O(this,t,r,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[r+o]=255&t;--o>=0&&(f*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},r.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},r.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},r.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},r.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},r.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},r.prototype.writeFloatLE=function(t,r,e){return x(this,t,r,!0,e)},r.prototype.writeFloatBE=function(t,r,e){return x(this,t,r,!1,e)},r.prototype.writeDoubleLE=function(t,r,e){return M(this,t,r,!0,e)},r.prototype.writeDoubleBE=function(t,r,e){return M(this,t,r,!1,e)},r.prototype.copy=function(t,e,n,i){if(!r.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);var o=i-n;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,n,i);else if(this===t&&n<e&&e<i)for(var f=o-1;f>=0;--f)t[f+e]=this[f+n];else Uint8Array.prototype.set.call(t,this.subarray(n,i),e);return o},r.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!r.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){var o=t.charCodeAt(0);("utf8"===i&&o<128||"latin1"===i)&&(t=o)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var f;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(f=e;f<n;++f)this[f]=t;else{var u=r.isBuffer(t)?t:r.from(t,i),s=u.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(f=0;f<n-e;++f)this[f+e]=u[f%s]}return this};var k=/[^+\/0-9A-Za-z-_]/g;function P(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],f=0;f<n;++f){if((e=t.charCodeAt(f))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function j(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(k,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function N(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function z(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}function D(t){return t!=t}var F=function(){for(var t=new Array(256),r=0;r<16;++r)for(var e=16*r,n=0;n<16;++n)t[e+n]="0123456789abcdef"[r]+"0123456789abcdef"[n];return t}()}).call(this,t("buffer").Buffer)},{"base64-js":2,buffer:5,ieee754:3}],2:[function(t,r,e){"use strict";e.byteLength=function(t){var r=h(t),e=r[0],n=r[1];return 3*(e+n)/4-n},e.toByteArray=function(t){var r,e,n=h(t),f=n[0],u=n[1],s=new o(function(t,r,e){return 3*(r+e)/4-e}(0,f,u)),a=0,p=u>0?f-4:f;for(e=0;e<p;e+=4)r=i[t.charCodeAt(e)]<<18|i[t.charCodeAt(e+1)]<<12|i[t.charCodeAt(e+2)]<<6|i[t.charCodeAt(e+3)],s[a++]=r>>16&255,s[a++]=r>>8&255,s[a++]=255&r;2===u&&(r=i[t.charCodeAt(e)]<<2|i[t.charCodeAt(e+1)]>>4,s[a++]=255&r);1===u&&(r=i[t.charCodeAt(e)]<<10|i[t.charCodeAt(e+1)]<<4|i[t.charCodeAt(e+2)]>>2,s[a++]=r>>8&255,s[a++]=255&r);return s},e.fromByteArray=function(t){for(var r,e=t.length,i=e%3,o=[],f=0,u=e-i;f<u;f+=16383)o.push(a(t,f,f+16383>u?u:f+16383));1===i?(r=t[e-1],o.push(n[r>>2]+n[r<<4&63]+"==")):2===i&&(r=(t[e-2]<<8)+t[e-1],o.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,s=f.length;u<s;++u)n[u]=f[u],i[f.charCodeAt(u)]=u;function h(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function a(t,r,e){for(var i,o,f=[],u=r;u<e;u+=3)i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),f.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return f.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},{}],3:[function(t,r,e){e.read=function(t,r,e,n,i){var o,f,u=8*i-n-1,s=(1<<u)-1,h=s>>1,a=-7,p=e?i-1:0,c=e?-1:1,l=t[r+p];for(p+=c,o=l&(1<<-a)-1,l>>=-a,a+=u;a>0;o=256*o+t[r+p],p+=c,a-=8);for(f=o&(1<<-a)-1,o>>=-a,a+=n;a>0;f=256*f+t[r+p],p+=c,a-=8);if(0===o)o=1-h;else{if(o===s)return f?NaN:1/0*(l?-1:1);f+=Math.pow(2,n),o-=h}return(l?-1:1)*f*Math.pow(2,o-n)},e.write=function(t,r,e,n,i,o){var f,u,s,h=8*o-i-1,a=(1<<h)-1,p=a>>1,c=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:o-1,y=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=a):(f=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-f))<1&&(f--,s*=2),(r+=f+p>=1?c/s:c*Math.pow(2,1-p))*s>=2&&(f++,s/=2),f+p>=a?(u=0,f=a):f+p>=1?(u=(r*s-1)*Math.pow(2,i),f+=p):(u=r*Math.pow(2,p-1)*Math.pow(2,i),f=0));i>=8;t[e+l]=255&u,l+=y,u/=256,i-=8);for(f=f<<i|u,h+=i;h>0;t[e+l]=255&f,l+=y,f/=256,h-=8);t[e+l-y]|=128*g}},{}],4:[function(t,r,e){arguments[4][2][0].apply(e,arguments)},{dup:2}],5:[function(t,r,e){(function(r){"use strict";var n=t("base64-js"),i=t("ieee754");e.Buffer=r,e.SlowBuffer=function(t){+t!=t&&(t=0);return r.alloc(+t)},e.INSPECT_MAX_BYTES=50;var o=2147483647;function f(t){if(t>o)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return e.__proto__=r.prototype,e}function r(t,r,e){if("number"==typeof t){if("string"==typeof r)throw new TypeError('The "string" argument must be of type string. Received type number');return h(t)}return u(t,r,e)}function u(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!r.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var n=0|c(t,e),i=f(n),o=i.write(t,e);o!==n&&(i=i.slice(0,o));return i}(t,e);if(ArrayBuffer.isView(t))return a(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(z(t,ArrayBuffer)||t&&z(t.buffer,ArrayBuffer))return function(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');var i;i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n);return i.__proto__=r.prototype,i}(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return r.from(i,e,n);var o=function(t){if(r.isBuffer(t)){var e=0|p(t.length),n=f(e);return 0===n.length?n:(t.copy(n,0,0,e),n)}if(void 0!==t.length)return"number"!=typeof t.length||D(t.length)?f(0):a(t);if("Buffer"===t.type&&Array.isArray(t.data))return a(t.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return r.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function s(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return s(t),f(t<0?0:0|p(t))}function a(t){for(var r=t.length<0?0:0|p(t.length),e=f(r),n=0;n<r;n+=1)e[n]=255&t[n];return e}function p(t){if(t>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|t}function c(t,e){if(r.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||z(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return P(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return j(t).length;default:if(o)return i?-1:P(t).length;e=(""+e).toLowerCase(),o=!0}}function l(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function y(t,e,n,i,o){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),D(n=+n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=r.from(e,i)),r.isBuffer(e))return 0===e.length?-1:g(t,e,n,i,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):g(t,[e],n,i,o);throw new TypeError("val must be string, number or Buffer")}function g(t,r,e,n,i){var o,f=1,u=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,u/=2,s/=2,e/=2}function h(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}if(i){var a=-1;for(o=e;o<u;o++)if(h(t,o)===h(r,-1===a?0:o-a)){if(-1===a&&(a=o),o-a+1===s)return a*f}else-1!==a&&(o-=o-a),a=-1}else for(e+s>u&&(e=u-s),o=e;o>=0;o--){for(var p=!0,c=0;c<s;c++)if(h(t,o+c)!==h(r,c)){p=!1;break}if(p)return o}return-1}function w(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;n>o/2&&(n=o/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(D(u))return f;t[e+f]=u}return f}function d(t,r,e,n){return N(P(r,t.length-e),t,e,n)}function v(t,r,e,n){return N(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function b(t,r,e,n){return v(t,r,e,n)}function m(t,r,e,n){return N(j(r),t,e,n)}function E(t,r,e,n){return N(function(t,r){for(var e,n,i,o=[],f=0;f<t.length&&!((r-=2)<0);++f)e=t.charCodeAt(f),n=e>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function B(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function A(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,f,u,s,h=t[i],a=null,p=h>239?4:h>223?3:h>191?2:1;if(i+p<=e)switch(p){case 1:h<128&&(a=h);break;case 2:128==(192&(o=t[i+1]))&&(s=(31&h)<<6|63&o)>127&&(a=s);break;case 3:o=t[i+1],f=t[i+2],128==(192&o)&&128==(192&f)&&(s=(15&h)<<12|(63&o)<<6|63&f)>2047&&(s<55296||s>57343)&&(a=s);break;case 4:o=t[i+1],f=t[i+2],u=t[i+3],128==(192&o)&&128==(192&f)&&128==(192&u)&&(s=(15&h)<<18|(63&o)<<12|(63&f)<<6|63&u)>65535&&s<1114112&&(a=s)}null===a?(a=65533,p=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=p}return function(t){var r=t.length;if(r<=U)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=U));return e}(n)}e.kMaxLength=o,r.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}(),r.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}}),"undefined"!=typeof Symbol&&null!=Symbol.species&&r[Symbol.species]===r&&Object.defineProperty(r,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),r.poolSize=8192,r.from=function(t,r,e){return u(t,r,e)},r.prototype.__proto__=Uint8Array.prototype,r.__proto__=Uint8Array,r.alloc=function(t,r,e){return function(t,r,e){return s(t),t<=0?f(t):void 0!==r?"string"==typeof e?f(t).fill(r,e):f(t).fill(r):f(t)}(t,r,e)},r.allocUnsafe=function(t){return h(t)},r.allocUnsafeSlow=function(t){return h(t)},r.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==r.prototype},r.compare=function(t,e){if(z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),z(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(t)||!r.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var n=t.length,i=e.length,o=0,f=Math.min(n,i);o<f;++o)if(t[o]!==e[o]){n=t[o],i=e[o];break}return n<i?-1:i<n?1:0},r.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return r.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var i=r.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var f=t[n];if(z(f,Uint8Array)&&(f=r.from(f)),!r.isBuffer(f))throw new TypeError('"list" argument must be an Array of Buffers');f.copy(i,o),o+=f.length}return i},r.byteLength=c,r.prototype._isBuffer=!0,r.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)l(this,r,r+1);return this},r.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)l(this,r,r+3),l(this,r+1,r+2);return this},r.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)l(this,r,r+7),l(this,r+1,r+6),l(this,r+2,r+5),l(this,r+3,r+4);return this},r.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?A(this,0,t):function(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return S(this,r,e);case"utf8":case"utf-8":return A(this,r,e);case"ascii":return T(this,r,e);case"latin1":case"binary":return I(this,r,e);case"base64":return B(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(t){if(!r.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===r.compare(this,t)},r.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},r.prototype.compare=function(t,e,n,i,o){if(z(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),e<0||n>t.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&e>=n)return 0;if(i>=o)return-1;if(e>=n)return 1;if(this===t)return 0;for(var f=(o>>>=0)-(i>>>=0),u=(n>>>=0)-(e>>>=0),s=Math.min(f,u),h=this.slice(i,o),a=t.slice(e,n),p=0;p<s;++p)if(h[p]!==a[p]){f=h[p],u=a[p];break}return f<u?-1:u<f?1:0},r.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},r.prototype.indexOf=function(t,r,e){return y(this,t,r,e,!0)},r.prototype.lastIndexOf=function(t,r,e){return y(this,t,r,e,!1)},r.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return w(this,t,r,e);case"utf8":case"utf-8":return d(this,t,r,e);case"ascii":return v(this,t,r,e);case"latin1":case"binary":return b(this,t,r,e);case"base64":return m(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var U=4096;function T(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function I(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function S(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=k(t[o]);return i}function L(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function R(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function C(t,e,n,i,o,f){if(!r.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<f)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function O(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function _(t,r,e,n,o){return r=+r,e>>>=0,o||O(t,0,e,4),i.write(t,r,e,n,23,4),e+4}function x(t,r,e,n,o){return r=+r,e>>>=0,o||O(t,0,e,8),i.write(t,r,e,n,52,8),e+8}r.prototype.slice=function(t,e){var n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);var i=this.subarray(t,e);return i.__proto__=r.prototype,i},r.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||R(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},r.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||R(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},r.prototype.readUInt8=function(t,r){return t>>>=0,r||R(t,1,this.length),this[t]},r.prototype.readUInt16LE=function(t,r){return t>>>=0,r||R(t,2,this.length),this[t]|this[t+1]<<8},r.prototype.readUInt16BE=function(t,r){return t>>>=0,r||R(t,2,this.length),this[t]<<8|this[t+1]},r.prototype.readUInt32LE=function(t,r){return t>>>=0,r||R(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},r.prototype.readUInt32BE=function(t,r){return t>>>=0,r||R(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},r.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||R(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},r.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||R(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},r.prototype.readInt8=function(t,r){return t>>>=0,r||R(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},r.prototype.readInt16LE=function(t,r){t>>>=0,r||R(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},r.prototype.readInt16BE=function(t,r){t>>>=0,r||R(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},r.prototype.readInt32LE=function(t,r){return t>>>=0,r||R(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},r.prototype.readInt32BE=function(t,r){return t>>>=0,r||R(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},r.prototype.readFloatLE=function(t,r){return t>>>=0,r||R(t,4,this.length),i.read(this,t,!0,23,4)},r.prototype.readFloatBE=function(t,r){return t>>>=0,r||R(t,4,this.length),i.read(this,t,!1,23,4)},r.prototype.readDoubleLE=function(t,r){return t>>>=0,r||R(t,8,this.length),i.read(this,t,!0,52,8)},r.prototype.readDoubleBE=function(t,r){return t>>>=0,r||R(t,8,this.length),i.read(this,t,!1,52,8)},r.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||C(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},r.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||C(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},r.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,1,255,0),this[r]=255&t,r+1},r.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},r.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},r.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},r.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},r.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);C(this,t,r,e,i-1,-i)}var o=0,f=1,u=0;for(this[r]=255&t;++o<e&&(f*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},r.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);C(this,t,r,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[r+o]=255&t;--o>=0&&(f*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},r.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},r.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},r.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},r.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},r.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||C(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},r.prototype.writeFloatLE=function(t,r,e){return _(this,t,r,!0,e)},r.prototype.writeFloatBE=function(t,r,e){return _(this,t,r,!1,e)},r.prototype.writeDoubleLE=function(t,r,e){return x(this,t,r,!0,e)},r.prototype.writeDoubleBE=function(t,r,e){return x(this,t,r,!1,e)},r.prototype.copy=function(t,e,n,i){if(!r.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);var o=i-n;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,n,i);else if(this===t&&n<e&&e<i)for(var f=o-1;f>=0;--f)t[f+e]=this[f+n];else Uint8Array.prototype.set.call(t,this.subarray(n,i),e);return o},r.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!r.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){var o=t.charCodeAt(0);("utf8"===i&&o<128||"latin1"===i)&&(t=o)}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var f;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(f=e;f<n;++f)this[f]=t;else{var u=r.isBuffer(t)?t:r.from(t,i),s=u.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(f=0;f<n-e;++f)this[f+e]=u[f%s]}return this};var M=/[^+\/0-9A-Za-z-_]/g;function k(t){return t<16?"0"+t.toString(16):t.toString(16)}function P(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],f=0;f<n;++f){if((e=t.charCodeAt(f))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function j(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(M,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function N(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function z(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}function D(t){return t!=t}}).call(this,t("buffer").Buffer)},{"base64-js":4,buffer:5,ieee754:6}],6:[function(t,r,e){arguments[4][3][0].apply(e,arguments)},{dup:3}]},{},[1])(1)});
(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Dexie=t()})(this,function(){"use strict";var m=function(){return(m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},_=Object.keys,p=Array.isArray,h="undefined"!=typeof self?self:"undefined"!=typeof window?window:global;function s(t,n){return"object"!=typeof n||_(n).forEach(function(e){t[e]=n[e]}),t}"undefined"==typeof Promise||h.Promise||(h.Promise=Promise);var i=Object.getPrototypeOf,n={}.hasOwnProperty;function c(e,t){return n.call(e,t)}function r(t,n){"function"==typeof n&&(n=n(i(t))),_(n).forEach(function(e){u(t,e,n[e])})}var o=Object.defineProperty;function u(e,t,n,r){o(e,t,s(n&&c(n,"get")&&"function"==typeof n.get?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function a(t){return{from:function(e){return t.prototype=Object.create(e.prototype),u(t.prototype,"constructor",t),{extend:r.bind(null,t.prototype)}}}}var l=Object.getOwnPropertyDescriptor;var f=[].slice;function d(e,t,n){return f.call(e,t,n)}function y(e,t){return t(e)}function v(e){if(!e)throw new Error("Assertion Failed")}function g(e){h.setImmediate?setImmediate(e):setTimeout(e,0)}function b(e,i){return e.reduce(function(e,t,n){var r=i(t,n);return r&&(e[r[0]]=r[1]),e},{})}function w(e,t){if(c(e,t))return e[t];if(!t)return e;if("string"!=typeof t){for(var n=[],r=0,i=t.length;r<i;++r){var o=w(e,t[r]);n.push(o)}return n}var u=t.indexOf(".");if(-1!==u){var a=e[t.substr(0,u)];return void 0===a?void 0:w(a,t.substr(u+1))}}function x(e,t,n){if(e&&void 0!==t&&!("isFrozen"in Object&&Object.isFrozen(e)))if("string"!=typeof t&&"length"in t){v("string"!=typeof n&&"length"in n);for(var r=0,i=t.length;r<i;++r)x(e,t[r],n[r])}else{var o=t.indexOf(".");if(-1!==o){var u=t.substr(0,o),a=t.substr(o+1);if(""===a)void 0===n?p(e)&&!isNaN(parseInt(u))?e.splice(u,1):delete e[u]:e[u]=n;else{var s=e[u];s||(s=e[u]={}),x(s,a,n)}}else void 0===n?p(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function k(e){var t={};for(var n in e)c(e,n)&&(t[n]=e[n]);return t}var t=[].concat;function O(e){return t.apply([],e)}var e="Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set".split(",").concat(O([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(e){return e+t+"Array"})}))).filter(function(e){return h[e]}),P=e.map(function(e){return h[e]}),E=b(e,function(e){return[e,!0]});function j(e){if(!e||"object"!=typeof e)return e;var t;if(p(e)){t=[];for(var n=0,r=e.length;n<r;++n)t.push(j(e[n]))}else if(0<=P.indexOf(e.constructor))t=e;else for(var i in t=e.constructor?Object.create(e.constructor.prototype):{},e)c(e,i)&&(t[i]=j(e[i]));return t}var K={}.toString;function C(e){return K.call(e).slice(8,-1)}var A=function(e,t){return"Array"===t?""+e.map(function(e){return A(e,C(e))}):"ArrayBuffer"===t?""+new Uint8Array(e):"Date"===t?e.getTime():ArrayBuffer.isView(e)?""+new Uint8Array(e.buffer):e};function S(o,u,a,s){return a=a||{},s=s||"",_(o).forEach(function(e){if(c(u,e)){var t=o[e],n=u[e];if("object"==typeof t&&"object"==typeof n&&t&&n){var r=C(t),i=C(n);r===i?E[r]?A(t,r)!==A(n,i)&&(a[s+e]=u[e]):S(t,n,a,s+e+"."):a[s+e]=u[e]}else t!==n&&(a[s+e]=u[e])}else a[s+e]=void 0}),_(u).forEach(function(e){c(o,e)||(a[s+e]=u[e])}),a}var I="undefined"!=typeof Symbol&&Symbol.iterator,D=I?function(e){var t;return null!=e&&(t=e[I])&&t.apply(e)}:function(){return null},T={};function B(e){var t,n,r,i;if(1===arguments.length){if(p(e))return e.slice();if(this===T&&"string"==typeof e)return[e];if(i=D(e)){for(n=[];!(r=i.next()).done;)n.push(r.value);return n}if(null==e)return[e];if("number"!=typeof(t=e.length))return[e];for(n=new Array(t);t--;)n[t]=e[t];return n}for(t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return n}var R="undefined"!=typeof location&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function F(e,t){R=e,q=t}var q=function(){return!0},M=!new Error("").stack;function N(){if(M)try{throw new Error}catch(e){return e}return new Error}function U(e,t){var n=e.stack;return n?(t=t||0,0===n.indexOf(e.name)&&(t+=(e.name+e.message).split("\n").length),n.split("\n").slice(t).filter(q).map(function(e){return"\n"+e}).join("")):""}var V=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],W=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(V),z={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed"};function L(e,t){this._e=N(),this.name=e,this.message=t}function Y(e,t){return e+". Errors: "+Object.keys(t).map(function(e){return t[e].toString()}).filter(function(e,t,n){return n.indexOf(e)===t}).join("\n")}function G(e,t,n,r){this._e=N(),this.failures=t,this.failedKeys=r,this.successCount=n,this.message=Y(e,t)}function H(e,t){this._e=N(),this.name="BulkError",this.failures=t,this.message=Y(e,t)}a(L).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+U(this._e,2))}},toString:function(){return this.name+": "+this.message}}),a(G).from(L),a(H).from(L);var Q=W.reduce(function(e,t){return e[t]=t+"Error",e},{}),X=L,J=W.reduce(function(e,n){var r=n+"Error";function t(e,t){this._e=N(),this.name=r,e?"string"==typeof e?(this.message=e+(t?"\n "+t:""),this.inner=t||null):"object"==typeof e&&(this.message=e.name+" "+e.message,this.inner=e):(this.message=z[n]||r,this.inner=null)}return a(t).from(X),e[n]=t,e},{});J.Syntax=SyntaxError,J.Type=TypeError,J.Range=RangeError;var $=V.reduce(function(e,t){return e[t+"Error"]=J[t],e},{});var Z=W.reduce(function(e,t){return-1===["Syntax","Type","Range"].indexOf(t)&&(e[t+"Error"]=J[t]),e},{});function ee(){}function te(e){return e}function ne(t,n){return null==t||t===te?n:function(e){return n(t(e))}}function re(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function ie(i,o){return i===ee?o:function(){var e=i.apply(this,arguments);void 0!==e&&(arguments[0]=e);var t=this.onsuccess,n=this.onerror;this.onsuccess=null,this.onerror=null;var r=o.apply(this,arguments);return t&&(this.onsuccess=this.onsuccess?re(t,this.onsuccess):t),n&&(this.onerror=this.onerror?re(n,this.onerror):n),void 0!==r?r:e}}function oe(n,r){return n===ee?r:function(){n.apply(this,arguments);var e=this.onsuccess,t=this.onerror;this.onsuccess=this.onerror=null,r.apply(this,arguments),e&&(this.onsuccess=this.onsuccess?re(e,this.onsuccess):e),t&&(this.onerror=this.onerror?re(t,this.onerror):t)}}function ue(o,u){return o===ee?u:function(e){var t=o.apply(this,arguments);s(e,t);var n=this.onsuccess,r=this.onerror;this.onsuccess=null,this.onerror=null;var i=u.apply(this,arguments);return n&&(this.onsuccess=this.onsuccess?re(n,this.onsuccess):n),r&&(this.onerror=this.onerror?re(r,this.onerror):r),void 0===t?void 0===i?void 0:i:s(t,i)}}function ae(e,t){return e===ee?t:function(){return!1!==t.apply(this,arguments)&&e.apply(this,arguments)}}function se(i,o){return i===ee?o:function(){var e=i.apply(this,arguments);if(e&&"function"==typeof e.then){for(var t=this,n=arguments.length,r=new Array(n);n--;)r[n]=arguments[n];return e.then(function(){return o.apply(t,r)})}return o.apply(this,arguments)}}Z.ModifyError=G,Z.DexieError=L,Z.BulkError=H;var ce={},le=100,fe=100,he="undefined"==typeof Promise?[]:function(){var e=Promise.resolve();if("undefined"==typeof crypto||!crypto.subtle)return[e,e.__proto__,e];var t=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[t,t.__proto__,e]}(),pe=he[0],de=he[1],ye=he[2],ve=de&&de.then,me=pe&&pe.constructor,ge=!!ye,be=!1,_e=ye?function(){ye.then(Ue)}:h.setImmediate?setImmediate.bind(null,Ue):h.MutationObserver?function(){var e=document.createElement("div");new MutationObserver(function(){Ue(),e=null}).observe(e,{attributes:!0}),e.setAttribute("i","1")}:function(){setTimeout(Ue,0)},we=function(e,t){Ae.push([e,t]),ke&&(_e(),ke=!1)},xe=!0,ke=!0,Oe=[],Pe=[],Ee=null,je=te,Ke={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:lt,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(function(e){try{lt(e[0],e[1])}catch(e){}})}},Ce=Ke,Ae=[],Se=0,Ie=[];function De(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=ee,this._lib=!1;var t=this._PSD=Ce;if(R&&(this._stackHolder=N(),this._prev=null,this._numPrev=0),"function"!=typeof e){if(e!==ce)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(!1===this._state&&Re(this,this._value))}this._state=null,this._value=null,++t.ref,function t(r,e){try{e(function(n){if(null===r._state){if(n===r)throw new TypeError("A promise cannot be resolved with itself.");var e=r._lib&&Ve();n&&"function"==typeof n.then?t(r,function(e,t){n instanceof De?n._then(e,t):n.then(e,t)}):(r._state=!0,r._value=n,Fe(r)),e&&We()}},Re.bind(null,r))}catch(e){Re(r,e)}}(this,e)}var Te={get:function(){var u=Ce,t=Je;function e(n,r){var i=this,o=!u.global&&(u!==Ce||t!==Je);o&&tt();var e=new De(function(e,t){qe(i,new Be(at(n,u,o),at(r,u,o),e,t,u))});return R&&Ne(e,this),e}return e.prototype=ce,e},set:function(e){u(this,"then",e&&e.prototype===ce?Te:{get:function(){return e},set:Te.set})}};function Be(e,t,n,r,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r,this.psd=i}function Re(t,n){if(Pe.push(n),null===t._state){var e=t._lib&&Ve();n=je(n),t._state=!1,t._value=n,R&&null!==n&&"object"==typeof n&&!n._promise&&function(e,t,n){try{e.apply(null,n)}catch(e){t&&t(e)}}(function(){var e=function e(t,n){var r;return l(t,n)||(r=i(t))&&e(r,n)}(n,"stack");n._promise=t,u(n,"stack",{get:function(){return be?e&&(e.get?e.get.apply(n):e.value):t.stack}})}),function(t){Oe.some(function(e){return e._value===t._value})||Oe.push(t)}(t),Fe(t),e&&We()}}function Fe(e){var t=e._listeners;e._listeners=[];for(var n=0,r=t.length;n<r;++n)qe(e,t[n]);var i=e._PSD;--i.ref||i.finalize(),0===Se&&(++Se,we(function(){0==--Se&&ze()},[]))}function qe(e,t){if(null!==e._state){var n=e._state?t.onFulfilled:t.onRejected;if(null===n)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++Se,we(Me,[n,e,t])}else e._listeners.push(t)}function Me(e,t,n){try{var r,i=(Ee=t)._value;t._state?r=e(i):(Pe.length&&(Pe=[]),r=e(i),-1===Pe.indexOf(i)&&function(e){var t=Oe.length;for(;t;)if(Oe[--t]._value===e._value)return Oe.splice(t,1)}(t)),n.resolve(r)}catch(e){n.reject(e)}finally{Ee=null,0==--Se&&ze(),--n.psd.ref||n.psd.finalize()}}function Ne(e,t){var n=t?t._numPrev+1:0;n<le&&(e._prev=t,e._numPrev=n)}function Ue(){Ve()&&We()}function Ve(){var e=xe;return ke=xe=!1,e}function We(){var e,t,n;do{for(;0<Ae.length;)for(e=Ae,Ae=[],n=e.length,t=0;t<n;++t){var r=e[t];r[0].apply(null,r[1])}}while(0<Ae.length);ke=xe=!0}function ze(){var e=Oe;Oe=[],e.forEach(function(e){e._PSD.onunhandled.call(null,e._value,e)});for(var t=Ie.slice(0),n=t.length;n;)t[--n]()}function Le(e){return new De(ce,!1,e)}function Ye(n,r){var i=Ce;return function(){var e=Ve(),t=Ce;try{return it(i,!0),n.apply(this,arguments)}catch(e){r&&r(e)}finally{it(t,!1),e&&We()}}}r(De.prototype,{then:Te,_then:function(e,t){qe(this,new Be(null,null,e,t,Ce))},catch:function(e){if(1===arguments.length)return this.then(null,e);var t=e,n=arguments[1];return"function"==typeof t?this.then(null,function(e){return e instanceof t?n(e):Le(e)}):this.then(null,function(e){return e&&e.name===t?n(e):Le(e)})},finally:function(t){return this.then(function(e){return t(),e},function(e){return t(),Le(e)})},stack:{get:function(){if(this._stack)return this._stack;try{be=!0;var e=function e(t,n,r){if(n.length===r)return n;var i="";if(!1===t._state){var o,u,a=t._value;null!=a?(o=a.name||"Error",u=a.message||a,i=U(a,0)):(o=a,u=""),n.push(o+(u?": "+u:"")+i)}R&&((i=U(t._stackHolder,2))&&-1===n.indexOf(i)&&n.push(i),t._prev&&e(t._prev,n,r));return n}(this,[],20).join("\nFrom previous: ");return null!==this._state&&(this._stack=e),e}finally{be=!1}}},timeout:function(r,i){var o=this;return r<1/0?new De(function(e,t){var n=setTimeout(function(){return t(new J.Timeout(i))},r);o.then(e,t).finally(clearTimeout.bind(null,n))}):this}}),"undefined"!=typeof Symbol&&Symbol.toStringTag&&u(De.prototype,Symbol.toStringTag,"Dexie.Promise"),Ke.env=ot(),r(De,{all:function(){var o=B.apply(null,arguments).map(nt);return new De(function(n,r){0===o.length&&n([]);var i=o.length;o.forEach(function(e,t){return De.resolve(e).then(function(e){o[t]=e,--i||n(o)},r)})})},resolve:function(n){if(n instanceof De)return n;if(n&&"function"==typeof n.then)return new De(function(e,t){n.then(e,t)});var e=new De(ce,!0,n);return Ne(e,Ee),e},reject:Le,race:function(){var e=B.apply(null,arguments).map(nt);return new De(function(t,n){e.map(function(e){return De.resolve(e).then(t,n)})})},PSD:{get:function(){return Ce},set:function(e){return Ce=e}},newPSD:Ze,usePSD:ut,scheduler:{get:function(){return we},set:function(e){we=e}},rejectionMapper:{get:function(){return je},set:function(e){je=e}},follow:function(r,n){return new De(function(e,t){return Ze(function(t,n){var e=Ce;e.unhandleds=[],e.onunhandled=n,e.finalize=re(function(){var e=this;(function(t){Ie.push(function e(){t();Ie.splice(Ie.indexOf(e),1)}),++Se,we(function(){0==--Se&&ze()},[])})(function(){0===e.unhandleds.length?t():n(e.unhandleds[0])})},e.finalize),r()},n,e,t)})}});var Ge={awaits:0,echoes:0,id:0},He=0,Qe=[],Xe=0,Je=0,$e=0;function Ze(e,t,n,r){var i=Ce,o=Object.create(i);o.parent=i,o.ref=0,o.global=!1,o.id=++$e;var u=Ke.env;o.env=ge?{Promise:De,PromiseProp:{value:De,configurable:!0,writable:!0},all:De.all,race:De.race,resolve:De.resolve,reject:De.reject,nthen:st(u.nthen,o),gthen:st(u.gthen,o)}:{},t&&s(o,t),++i.ref,o.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=ut(o,e,n,r);return 0===o.ref&&o.finalize(),a}function et(){return Ge.id||(Ge.id=++He),++Ge.awaits,Ge.echoes+=fe,Ge.id}function tt(e){!Ge.awaits||e&&e!==Ge.id||(0==--Ge.awaits&&(Ge.id=0),Ge.echoes=Ge.awaits*fe)}function nt(e){return Ge.echoes&&e&&e.constructor===me?(et(),e.then(function(e){return tt(),e},function(e){return tt(),ft(e)})):e}function rt(){var e=Qe[Qe.length-1];Qe.pop(),it(e,!1)}function it(e,t){var n=Ce;if((t?!Ge.echoes||Xe++&&e===Ce:!Xe||--Xe&&e===Ce)||function(e){ve.call(pe,e)}(t?function(e){++Je,Ge.echoes&&0!=--Ge.echoes||(Ge.echoes=Ge.id=0),Qe.push(Ce),it(e,!0)}.bind(null,e):rt),e!==Ce&&(Ce=e,n===Ke&&(Ke.env=ot()),ge)){var r=Ke.env.Promise,i=e.env;de.then=i.nthen,r.prototype.then=i.gthen,(n.global||e.global)&&(Object.defineProperty(h,"Promise",i.PromiseProp),r.all=i.all,r.race=i.race,r.resolve=i.resolve,r.reject=i.reject)}}function ot(){var e=h.Promise;return ge?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(h,"Promise"),all:e.all,race:e.race,resolve:e.resolve,reject:e.reject,nthen:de.then,gthen:e.prototype.then}:{}}function ut(e,t,n,r,i){var o=Ce;try{return it(e,!0),t(n,r,i)}finally{it(o,!1)}}function at(t,n,r){return"function"!=typeof t?t:function(){var e=Ce;r&&et(),it(n,!0);try{return t.apply(this,arguments)}finally{it(e,!1)}}}function st(n,r){return function(e,t){return n.call(this,at(e,r,!1),at(t,r,!1))}}-1===(""+ve).indexOf("[native code]")&&(et=tt=ee);var ct="unhandledrejection";function lt(e,t){var n;try{n=t.onuncatched(e)}catch(e){}if(!1!==n)try{var r,i={promise:t,reason:e};if(h.document&&document.createEvent?((r=document.createEvent("Event")).initEvent(ct,!0,!0),s(r,i)):h.CustomEvent&&s(r=new CustomEvent(ct,{detail:i}),i),r&&h.dispatchEvent&&(dispatchEvent(r),!h.PromiseRejectionEvent&&h.onunhandledrejection))try{h.onunhandledrejection(r)}catch(e){}R&&r&&!r.defaultPrevented&&console.warn("Unhandled rejection: "+(e.stack||e))}catch(e){}}var ft=De.reject;function ht(e){return!/(dexie\.js|dexie\.min\.js)/.test(e)}var pt="3.0.0-beta.1",dt=String.fromCharCode(65535),yt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",vt="String expected.",mt=[],gt="undefined"!=typeof navigator&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),bt=gt,_t=gt,wt="__dbnames",xt="readonly",kt="readwrite";function Ot(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var Pt={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1},Et=function(){function e(){}return e.prototype._trans=function(e,r,t){var n=this._tx||Ce.trans,i=this.name;function o(e,t,n){if(!n.schema[i])throw new J.NotFound("Table "+i+" not part of transaction");return r(n.idbtrans,n)}var u=Ve();try{return n&&n.db===this.db?n===Ce.trans?n._promise(e,o,t):Ze(function(){return n._promise(e,o,t)},{trans:n,transless:Ce.transless||Ce}):function e(t,n,r,i){if(t._state.openComplete||Ce.letThrough){var o=t._createTransaction(n,r,t._dbSchema);try{o.create()}catch(e){return ft(e)}return o._promise(n,function(e,t){return Ze(function(){return Ce.trans=o,i(e,t,o)})}).then(function(e){return o._completion.then(function(){return e})})}if(!t._state.isBeingOpened){if(!t._options.autoOpen)return ft(new J.DatabaseClosed);t.open().catch(ee)}return t._state.dbReadyPromise.then(function(){return e(t,n,r,i)})}(this.db,e,[this.name],o)}finally{u&&We()}},e.prototype.get=function(t,e){var n=this;return t&&t.constructor===Object?this.where(t).first(e):this._trans("readonly",function(e){return n.core.get({trans:e,key:t}).then(function(e){return n.hook.reading.fire(e)})}).then(e)},e.prototype.where=function(u){if("string"==typeof u)return new this.db.WhereClause(this,u);if(p(u))return new this.db.WhereClause(this,"["+u.join("+")+"]");var n=_(u);if(1===n.length)return this.where(n[0]).equals(u[n[0]]);var e=this.schema.indexes.concat(this.schema.primKey).filter(function(t){return t.compound&&n.every(function(e){return 0<=t.keyPath.indexOf(e)})&&t.keyPath.every(function(e){return 0<=n.indexOf(e)})})[0];if(e&&this.db._maxKey!==dt)return this.where(e.name).equals(e.keyPath.map(function(e){return u[e]}));!e&&R&&console.warn("The query "+JSON.stringify(u)+" on "+this.name+" would benefit of a compound index ["+n.join("+")+"]");var a=this.schema.idxByName,r=this.db._deps.indexedDB;function s(e,t){try{return 0===r.cmp(e,t)}catch(e){return!1}}var t=n.reduce(function(e,n){var t=e[0],r=e[1],i=a[n],o=u[n];return[t||i,t||!i?Ot(r,i&&i.multi?function(e){var t=w(e,n);return p(t)&&t.some(function(e){return s(o,e)})}:function(e){return s(o,w(e,n))}):r]},[null,null]),i=t[0],o=t[1];return i?this.where(i.name).equals(u[i.keyPath]).filter(o):e?this.filter(o):this.where(n).equals("")},e.prototype.filter=function(e){return this.toCollection().and(e)},e.prototype.count=function(e){return this.toCollection().count(e)},e.prototype.offset=function(e){return this.toCollection().offset(e)},e.prototype.limit=function(e){return this.toCollection().limit(e)},e.prototype.each=function(e){return this.toCollection().each(e)},e.prototype.toArray=function(e){return this.toCollection().toArray(e)},e.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},e.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,p(e)?"["+e.join("+")+"]":e))},e.prototype.reverse=function(){return this.toCollection().reverse()},e.prototype.mapToClass=function(r){this.schema.mappedClass=r;function e(e){if(!e)return e;var t=Object.create(r.prototype);for(var n in e)if(c(e,n))try{t[n]=e[n]}catch(e){}return t}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=e,this.hook("reading",e),r},e.prototype.defineClass=function(){return this.mapToClass(function(e){s(this,e)})},e.prototype.add=function(t,n){var r=this;return this._trans("readwrite",function(e){return r.core.mutate({trans:e,type:"add",keys:null!=n?[n]:null,values:[t]})}).then(function(e){return e.numFailures?De.reject(e.failures[0]):e.lastResult}).then(function(e){if(!r.core.schema.primaryKey.outbound)try{x(t,r.core.schema.primaryKey.keyPath,e)}catch(e){}return e})},e.prototype.update=function(t,n){if("object"!=typeof n||p(n))throw new J.InvalidArgument("Modifications must be an object.");if("object"!=typeof t||p(t))return this.where(":id").equals(t).modify(n);_(n).forEach(function(e){x(t,e,n[e])});var e=w(t,this.schema.primKey.keyPath);return void 0===e?ft(new J.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(e).modify(n)},e.prototype.put=function(t,n){var r=this;return this._trans("readwrite",function(e){return r.core.mutate({trans:e,type:"put",values:[t],keys:null!=n?[n]:null})}).then(function(e){return e.numFailures?De.reject(e.failures[0]):e.lastResult}).then(function(e){if(!r.core.schema.primaryKey.outbound)try{x(t,r.core.schema.primaryKey.keyPath,e)}catch(e){}return e})},e.prototype.delete=function(t){var n=this;return this._trans("readwrite",function(e){return n.core.mutate({trans:e,type:"delete",keys:[t]})}).then(function(e){return e.numFailures?De.reject(e.failures[0]):void 0})},e.prototype.clear=function(){var t=this;return this._trans("readwrite",function(e){return t.core.mutate({trans:e,type:"deleteRange",range:Pt})}).then(function(e){return e.numFailures?De.reject(e.failures[0]):void 0})},e.prototype.bulkGet=function(t){var n=this;return this._trans("readonly",function(e){return n.core.getMany({keys:t,trans:e})})},e.prototype.bulkAdd=function(t,n){var o=this;return this._trans("readwrite",function(e){if(!o.core.schema.primaryKey.outbound&&n)throw new J.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(n&&n.length!==t.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");var i=t.length;return o.core.mutate({trans:e,type:"add",keys:n,values:t}).then(function(e){var t=e.numFailures,n=e.lastResult,r=e.failures;if(0===t)return n;throw new H(o.name+".bulkAdd(): "+t+" of "+i+" operations failed",Object.keys(r).map(function(e){return r[e]}))})})},e.prototype.bulkPut=function(t,n){var o=this;return this._trans("readwrite",function(e){if(!o.core.schema.primaryKey.outbound&&n)throw new J.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(n&&n.length!==t.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");var i=t.length;return o.core.mutate({trans:e,type:"put",keys:n,values:t}).then(function(e){var t=e.numFailures,n=e.lastResult,r=e.failures;if(0===t)return n;throw new H(o.name+".bulkPut(): "+t+" of "+i+" operations failed",Object.keys(r).map(function(e){return r[e]}))})})},e.prototype.bulkDelete=function(t){var i=this,o=t.length;return this._trans("readwrite",function(e){return i.core.mutate({trans:e,type:"delete",keys:t})}).then(function(e){var t=e.numFailures,n=e.lastResult,r=e.failures;if(0===t)return n;throw new H(i.name+".bulkDelete(): "+t+" of "+o+" operations failed",r)})},e}();function jt(i){var o={},t=function(e,t){if(t){for(var n=arguments.length,r=new Array(n-1);--n;)r[n-1]=arguments[n];return o[e].subscribe.apply(null,r),i}if("string"==typeof e)return o[e]};t.addEventType=u;for(var e=1,n=arguments.length;e<n;++e)u(arguments[e]);return t;function u(e,n,r){if("object"==typeof e)return function(r){_(r).forEach(function(e){var t=r[e];if(p(t))u(e,r[e][0],r[e][1]);else{if("asap"!==t)throw new J.InvalidArgument("Invalid event config");var n=u(e,te,function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];n.subscribers.forEach(function(e){g(function(){e.apply(null,t)})})})}})}(e);n||(n=ae),r||(r=ee);var i={subscribers:[],fire:r,subscribe:function(e){-1===i.subscribers.indexOf(e)&&(i.subscribers.push(e),i.fire=n(i.fire,e))},unsubscribe:function(t){i.subscribers=i.subscribers.filter(function(e){return e!==t}),i.fire=i.subscribers.reduce(n,r)}};return o[e]=t[e]=i,i}}function Kt(e,t){return a(t).from({prototype:e}),t}function Ct(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function At(e,t){e.filter=Ot(e.filter,t)}function St(e,t,n){var r=e.replayFilter;e.replayFilter=r?function(){return Ot(r(),t())}:t,e.justLimit=n&&!r}function It(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(!n)throw new J.Schema("KeyPath "+e.index+" on object store "+t.name+" is not indexed");return n}function Dt(e,t,n){var r=It(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:"prev"===e.dir,unique:!!e.unique,query:{index:r,range:e.range}})}function Tt(e,o,t,n){var u=e.replayFilter?Ot(e.filter,e.replayFilter()):e.filter;if(e.or){var a={},r=function(e,t,n){if(!u||u(t,n,function(e){return t.stop(e)},function(e){return t.fail(e)})){var r=t.primaryKey,i=""+r;"[object ArrayBuffer]"===i&&(i=""+new Uint8Array(r)),c(a,i)||(a[i]=!0,o(e,t,n))}};return Promise.all([e.or._iterate(r,t),Bt(Dt(e,n,t),e.algorithm,r,!e.keysOnly&&e.valueMapper)])}return Bt(Dt(e,n,t),Ot(e.algorithm,u),o,!e.keysOnly&&e.valueMapper)}function Bt(e,r,i,o){var u=Ye(o?function(e,t,n){return i(o(e),t,n)}:i);return e.then(function(n){if(n)return n.start(function(){var t=function(){return n.continue()};r&&!r(n,function(e){return t=e},function(e){n.stop(e),t=ee},function(e){n.fail(e),t=ee})||u(n.value,n,function(e){return t=e}),t()})})}var Rt=function(){function e(){}return e.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,ft.bind(null,n.error)):n.table._trans("readonly",e).then(t)},e.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,ft.bind(null,t.error)):t.table._trans("readwrite",e,"locked")},e.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=Ot(t.algorithm,e)},e.prototype._iterate=function(e,t){return Tt(this._ctx,e,t,this._ctx.table.core)},e.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&s(n,e),t._ctx=n,t},e.prototype.raw=function(){return this._ctx.valueMapper=null,this},e.prototype.each=function(t){var n=this._ctx;return this._read(function(e){return Tt(n,t,e,n.table.core)})},e.prototype.count=function(e){var i=this;return this._read(function(e){var t=i._ctx,n=t.table.core;if(Ct(t,!0))return n.count({trans:e,query:{index:It(t,n.schema),range:t.range}}).then(function(e){return Math.min(e,t.limit)});var r=0;return Tt(t,function(){return++r,!1},e,n).then(function(){return r})}).then(e)},e.prototype.sortBy=function(e,t){var n=e.split(".").reverse(),r=n[0],i=n.length-1;function o(e,t){return t?o(e[n[t]],t-1):e[r]}var u="next"===this._ctx.dir?1:-1;function a(e,t){var n=o(e,i),r=o(t,i);return n<r?-u:r<n?u:0}return this.toArray(function(e){return e.sort(a)}).then(t)},e.prototype.toArray=function(e){var o=this;return this._read(function(e){var t=o._ctx;if("next"===t.dir&&Ct(t,!0)&&0<t.limit){var n=t.valueMapper,r=It(t,t.table.core.schema);return t.table.core.query({trans:e,limit:t.limit,values:!0,query:{index:r,range:t.range}}).then(function(e){var t=e.result;return n?t.map(n):t})}var i=[];return Tt(t,function(e){return i.push(e)},e,t.table.core).then(function(){return i})},e)},e.prototype.offset=function(t){var e=this._ctx;return t<=0||(e.offset+=t,Ct(e)?St(e,function(){var n=t;return function(e,t){return 0===n||(1===n?--n:t(function(){e.advance(n),n=0}),!1)}}):St(e,function(){var e=t;return function(){return--e<0}})),this},e.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),St(this._ctx,function(){var r=e;return function(e,t,n){return--r<=0&&t(n),0<=r}},!0),this},e.prototype.until=function(r,i){return At(this._ctx,function(e,t,n){return!r(e.value)||(t(n),i)}),this},e.prototype.first=function(e){return this.limit(1).toArray(function(e){return e[0]}).then(e)},e.prototype.last=function(e){return this.reverse().first(e)},e.prototype.filter=function(t){return At(this._ctx,function(e){return t(e.value)}),function(e,t){e.isMatch=Ot(e.isMatch,t)}(this._ctx,t),this},e.prototype.and=function(e){return this.filter(e)},e.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},e.prototype.reverse=function(){return this._ctx.dir="prev"===this._ctx.dir?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},e.prototype.desc=function(){return this.reverse()},e.prototype.eachKey=function(n){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(e,t){n(t.key,t)})},e.prototype.eachUniqueKey=function(e){return this._ctx.unique="unique",this.eachKey(e)},e.prototype.eachPrimaryKey=function(n){var e=this._ctx;return e.keysOnly=!e.isMatch,this.each(function(e,t){n(t.primaryKey,t)})},e.prototype.keys=function(e){var t=this._ctx;t.keysOnly=!t.isMatch;var n=[];return this.each(function(e,t){n.push(t.key)}).then(function(){return n}).then(e)},e.prototype.primaryKeys=function(e){var n=this._ctx;if("next"===n.dir&&Ct(n,!0)&&0<n.limit)return this._read(function(e){var t=It(n,n.table.core.schema);return n.table.core.query({trans:e,values:!1,limit:n.limit,query:{index:t,range:n.range}})}).then(function(e){return e.result}).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(e,t){r.push(t.primaryKey)}).then(function(){return r}).then(e)},e.prototype.uniqueKeys=function(e){return this._ctx.unique="unique",this.keys(e)},e.prototype.firstKey=function(e){return this.limit(1).keys(function(e){return e[0]}).then(e)},e.prototype.lastKey=function(e){return this.reverse().firstKey(e)},e.prototype.distinct=function(){var e=this._ctx,t=e.index&&e.table.schema.idxByName[e.index];if(!t||!t.multi)return this;var r={};return At(this._ctx,function(e){var t=e.primaryKey.toString(),n=c(r,t);return r[t]=!0,!n}),this},e.prototype.modify=function(c){var n=this,r=this._ctx;return this._write(function(h){var p;if("function"==typeof c)p=c;else{var o=_(c),u=o.length;p=function(e){for(var t=!1,n=0;n<u;++n){var r=o[n],i=c[r];w(e,r)!==i&&(x(e,r,i),t=!0)}return t}}function d(e,t){var n=t.failures,r=t.numFailures;for(var i in s+=e-r,n)a.push(n[i])}var y=r.table.core,e=y.schema.primaryKey,v=e.outbound,m=e.extractKey,g="testmode"in On?1:2e3,b=n.db.core.cmp,a=[],s=0,t=[];return n.clone().primaryKeys().then(function(l){var f=function(s){var c=Math.min(g,l.length-s);return y.getMany({trans:h,keys:l.slice(s,s+c)}).then(function(e){for(var n=[],t=[],r=v?[]:null,i=[],o=0;o<c;++o){var u=e[o],a={value:j(u),primKey:l[s+o]};!1!==p.call(a,a.value,a)&&(null==a.value?i.push(l[s+o]):v||0===b(m(u),m(a.value))?(t.push(a.value),v&&r.push(l[s+o])):(i.push(l[s+o]),n.push(a.value)))}return Promise.resolve(0<n.length&&y.mutate({trans:h,type:"add",values:n}).then(function(e){for(var t in e.failures)i.splice(parseInt(t),1);d(n.length,e)})).then(function(e){return 0<t.length&&y.mutate({trans:h,type:"put",keys:r,values:t}).then(function(e){return d(t.length,e)})}).then(function(){return 0<i.length&&y.mutate({trans:h,type:"delete",keys:i}).then(function(e){return d(i.length,e)})}).then(function(){return l.length>s+c&&f(s+g)})})};return f(0).then(function(){if(0<a.length)throw new G("Error modifying one or more objects",a,s,t);return l.length})})})},e.prototype.delete=function(){var i=this._ctx,r=i.range;return Ct(i)&&(i.isPrimKey&&!_t||3===r.type)?this._write(function(e){var t=i.table.core.schema.primaryKey,n=r;return i.table.core.count({trans:e,query:{index:t,range:n}}).then(function(r){return i.table.core.mutate({trans:e,type:"deleteRange",range:n}).then(function(e){var t=e.failures,n=(e.lastResult,e.results,e.numFailures);if(n)throw new G("Could not delete some values",Object.keys(t).map(function(e){return t[e]}),r-n);return r-n})})}):this.modify(function(e,t){return t.value=null})},e}();function Ft(e,t){return e<t?-1:e===t?0:1}function qt(e,t){return t<e?-1:e===t?0:1}function Mt(e,t,n){var r=e instanceof Lt?new e.Collection(e):e;return r._ctx.error=n?new n(t):new TypeError(t),r}function Nt(e){return new e.Collection(e,function(){return zt("")}).limit(0)}function Ut(e,t,n,r,i,o){for(var u=Math.min(e.length,r.length),a=-1,s=0;s<u;++s){var c=t[s];if(c!==r[s])return i(e[s],n[s])<0?e.substr(0,s)+n[s]+n.substr(s+1):i(e[s],r[s])<0?e.substr(0,s)+r[s]+n.substr(s+1):0<=a?e.substr(0,a)+t[a]+n.substr(a+1):null;i(e[s],c)<0&&(a=s)}return u<r.length&&"next"===o?e+n.substr(e.length):u<e.length&&"prev"===o?e.substr(0,n.length):a<0?null:e.substr(0,a)+r[a]+n.substr(a+1)}function Vt(e,s,n,r){var i,c,l,f,h,p,d,y=n.length;if(!n.every(function(e){return"string"==typeof e}))return Mt(e,vt);function t(e){i=function(e){return"next"===e?function(e){return e.toUpperCase()}:function(e){return e.toLowerCase()}}(e),c=function(e){return"next"===e?function(e){return e.toLowerCase()}:function(e){return e.toUpperCase()}}(e),l="next"===e?Ft:qt;var t=n.map(function(e){return{lower:c(e),upper:i(e)}}).sort(function(e,t){return l(e.lower,t.lower)});f=t.map(function(e){return e.upper}),h=t.map(function(e){return e.lower}),d="next"===(p=e)?"":r}t("next");var o=new e.Collection(e,function(){return Wt(f[0],h[y-1]+r)});o._ondirectionchange=function(e){t(e)};var v=0;return o._addAlgorithm(function(e,t,n){var r=e.key;if("string"!=typeof r)return!1;var i=c(r);if(s(i,h,v))return!0;for(var o=null,u=v;u<y;++u){var a=Ut(r,i,f[u],h[u],l,p);null===a&&null===o?v=u+1:(null===o||0<l(o,a))&&(o=a)}return t(null!==o?function(){e.continue(o+d)}:n),!1}),o}function Wt(e,t,n,r){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:r}}function zt(e){return{type:1,lower:e,upper:e}}var Lt=function(){function e(){}return Object.defineProperty(e.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!0,configurable:!0}),e.prototype.between=function(e,t,n,r){n=!1!==n,r=!0===r;try{return 0<this._cmp(e,t)||0===this._cmp(e,t)&&(n||r)&&(!n||!r)?Nt(this):new this.Collection(this,function(){return Wt(e,t,!n,!r)})}catch(e){return Mt(this,yt)}},e.prototype.equals=function(e){return new this.Collection(this,function(){return zt(e)})},e.prototype.above=function(e){return null==e?Mt(this,yt):new this.Collection(this,function(){return Wt(e,void 0,!0)})},e.prototype.aboveOrEqual=function(e){return null==e?Mt(this,yt):new this.Collection(this,function(){return Wt(e,void 0,!1)})},e.prototype.below=function(e){return null==e?Mt(this,yt):new this.Collection(this,function(){return Wt(void 0,e,!1,!0)})},e.prototype.belowOrEqual=function(e){return null==e?Mt(this,yt):new this.Collection(this,function(){return Wt(void 0,e)})},e.prototype.startsWith=function(e){return"string"!=typeof e?Mt(this,vt):this.between(e,e+dt,!0,!0)},e.prototype.startsWithIgnoreCase=function(e){return""===e?this.startsWith(e):Vt(this,function(e,t){return 0===e.indexOf(t[0])},[e],dt)},e.prototype.equalsIgnoreCase=function(e){return Vt(this,function(e,t){return e===t[0]},[e],"")},e.prototype.anyOfIgnoreCase=function(){var e=B.apply(T,arguments);return 0===e.length?Nt(this):Vt(this,function(e,t){return-1!==t.indexOf(e)},e,"")},e.prototype.startsWithAnyOfIgnoreCase=function(){var e=B.apply(T,arguments);return 0===e.length?Nt(this):Vt(this,function(t,e){return e.some(function(e){return 0===t.indexOf(e)})},e,dt)},e.prototype.anyOf=function(){var t=this,i=B.apply(T,arguments),o=this._cmp;try{i.sort(o)}catch(e){return Mt(this,yt)}if(0===i.length)return Nt(this);var e=new this.Collection(this,function(){return Wt(i[0],i[i.length-1])});e._ondirectionchange=function(e){o="next"===e?t._ascending:t._descending,i.sort(o)};var u=0;return e._addAlgorithm(function(e,t,n){for(var r=e.key;0<o(r,i[u]);)if(++u===i.length)return t(n),!1;return 0===o(r,i[u])||(t(function(){e.continue(i[u])}),!1)}),e},e.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},e.prototype.noneOf=function(){var e=B.apply(T,arguments);if(0===e.length)return new this.Collection(this);try{e.sort(this._ascending)}catch(e){return Mt(this,yt)}var t=e.reduce(function(e,t){return e?e.concat([[e[e.length-1][1],t]]):[[-1/0,t]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},e.prototype.inAnyRange=function(e,t){var i=this,o=this._cmp,u=this._ascending,n=this._descending,a=this._min,s=this._max;if(0===e.length)return Nt(this);if(!e.every(function(e){return void 0!==e[0]&&void 0!==e[1]&&u(e[0],e[1])<=0}))return Mt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",J.InvalidArgument);var r=!t||!1!==t.includeLowers,c=t&&!0===t.includeUppers;var l,f=u;function h(e,t){return f(e[0],t[0])}try{(l=e.reduce(function(e,t){for(var n=0,r=e.length;n<r;++n){var i=e[n];if(o(t[0],i[1])<0&&0<o(t[1],i[0])){i[0]=a(i[0],t[0]),i[1]=s(i[1],t[1]);break}}return n===r&&e.push(t),e},[])).sort(h)}catch(e){return Mt(this,yt)}var p=0,d=c?function(e){return 0<u(e,l[p][1])}:function(e){return 0<=u(e,l[p][1])},y=r?function(e){return 0<n(e,l[p][0])}:function(e){return 0<=n(e,l[p][0])};var v=d,m=new this.Collection(this,function(){return Wt(l[0][0],l[l.length-1][1],!r,!c)});return m._ondirectionchange=function(e){f="next"===e?(v=d,u):(v=y,n),l.sort(h)},m._addAlgorithm(function(e,t,n){for(var r=e.key;v(r);)if(++p===l.length)return t(n),!1;return!!function(e){return!d(e)&&!y(e)}(r)||(0===i._cmp(r,l[p][1])||0===i._cmp(r,l[p][0])||t(function(){f===u?e.continue(l[p][0]):e.continue(l[p][1])}),!1)}),m},e.prototype.startsWithAnyOf=function(){var e=B.apply(T,arguments);return e.every(function(e){return"string"==typeof e})?0===e.length?Nt(this):this.inAnyRange(e.map(function(e){return[e,e+dt]})):Mt(this,"startsWithAnyOf() only works with strings")},e}();function Yt(e){return 1===e.length?e[0]:e}function Gt(e){try{return e.only([[]]),[[]]}catch(e){return dt}}function Ht(t){return Ye(function(e){return Qt(e),t(e.target.error),!1})}function Qt(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Xt=function(){function e(){}return e.prototype._lock=function(){return v(!Ce.global),++this._reculock,1!==this._reculock||Ce.global||(Ce.lockOwnerFor=this),this},e.prototype._unlock=function(){if(v(!Ce.global),0==--this._reculock)for(Ce.global||(Ce.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{ut(e[1],e[0])}catch(e){}}return this},e.prototype._locked=function(){return this._reculock&&Ce.lockOwnerFor!==this},e.prototype.create=function(t){var n=this;if(!this.mode)return this;var e=this.db.idbdb,r=this.db._state.dbOpenError;if(v(!this.idbtrans),!t&&!e)switch(r&&r.name){case"DatabaseClosedError":throw new J.DatabaseClosed(r);case"MissingAPIError":throw new J.MissingAPI(r.message,r);default:throw new J.OpenFailed(r)}if(!this.active)throw new J.TransactionInactive;return v(null===this._completion._state),(t=this.idbtrans=t||e.transaction(Yt(this.storeNames),this.mode)).onerror=Ye(function(e){Qt(e),n._reject(t.error)}),t.onabort=Ye(function(e){Qt(e),n.active&&n._reject(new J.Abort(t.error)),n.active=!1,n.on("abort").fire(e)}),t.oncomplete=Ye(function(){n.active=!1,n._resolve()}),this},e.prototype._promise=function(n,r,i){var o=this;if("readwrite"===n&&"readwrite"!==this.mode)return ft(new J.ReadOnly("Transaction is readonly"));if(!this.active)return ft(new J.TransactionInactive);if(this._locked())return new De(function(e,t){o._blockedFuncs.push([function(){o._promise(n,r,i).then(e,t)},Ce])});if(i)return Ze(function(){var e=new De(function(e,t){o._lock();var n=r(e,t,o);n&&n.then&&n.then(e,t)});return e.finally(function(){return o._unlock()}),e._lib=!0,e});var e=new De(function(e,t){var n=r(e,t,o);n&&n.then&&n.then(e,t)});return e._lib=!0,e},e.prototype._root=function(){return this.parent?this.parent._root():this},e.prototype.waitFor=function(e){var r=this._root(),i=De.resolve(e);if(r._waitingFor)r._waitingFor=r._waitingFor.then(function(){return i});else{r._waitingFor=i,r._waitingQueue=[];var t=r.idbtrans.objectStore(r.storeNames[0]);(function e(){for(++r._spinCount;r._waitingQueue.length;)r._waitingQueue.shift()();r._waitingFor&&(t.get(-1/0).onsuccess=e)})()}var o=r._waitingFor;return new De(function(t,n){i.then(function(e){return r._waitingQueue.push(Ye(t.bind(null,e)))},function(e){return r._waitingQueue.push(Ye(n.bind(null,e)))}).finally(function(){r._waitingFor===o&&(r._waitingFor=null)})})},e.prototype.abort=function(){this.active&&this._reject(new J.Abort),this.active=!1},e.prototype.table=function(e){var t=this._memoizedTables||(this._memoizedTables={});if(c(t,e))return t[e];var n=this.schema[e];if(!n)throw new J.NotFound("Table "+e+" not part of transaction");var r=new this.db.Table(e,n,this);return r.core=this.db.core.table(e),t[e]=r},e}();function Jt(e,t,n,r,i,o){return{name:e,keyPath:t,unique:n,multi:r,auto:i,compound:o,src:(n?"&":"")+(r?"*":"")+(i?"++":"")+$t(t)}}function $t(e){return"string"==typeof e?e:e?"["+[].join.call(e,"+")+"]":""}function Zt(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:b(n,function(e){return[e.name,e]})}}function en(t){return null==t?function(){}:"string"==typeof t?function(t){return 1===t.split(".").length?function(e){return e[t]}:function(e){return w(e,t)}}(t):function(e){return w(e,t)}}function tn(e,t){return"delete"===t.type?t.keys:t.keys||t.values.map(e.extractKey)}function nn(e){return[].slice.call(e)}var rn=0;function on(e){return null==e?":id":"string"==typeof e?e:"["+e.join("+")+"]"}function un(e,t,o,n){var r=t.cmp.bind(t);function P(e){if(3===e.type)return null;if(4===e.type)throw new Error("Cannot convert never type to IDBKeyRange");var t=e.lower,n=e.upper,r=e.lowerOpen,i=e.upperOpen;return void 0===t?void 0===n?null:o.upperBound(n,!!i):void 0===n?o.lowerBound(t,!!r):o.bound(t,n,!!r,!!i)}var i,u,a,s=(u=n,a=nn((i=e).objectStoreNames),{schema:{name:i.name,tables:a.map(function(e){return u.objectStore(e)}).map(function(t){var e=t.keyPath,n=t.autoIncrement,r=p(e),i=null==e,u={},o={name:t.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:i,compound:r,keyPath:e,autoIncrement:n,unique:!0,extractKey:en(e)},indexes:nn(t.indexNames).map(function(e){return t.index(e)}).map(function(e){var t=e.name,n=e.unique,r=e.multiEntry,i=e.keyPath,o={name:t,compound:p(i),keyPath:i,unique:n,multiEntry:r,extractKey:en(i)};return u[on(i)]=o}),getIndexByKeyPath:function(e){return u[on(e)]}};return u[":id"]=o.primaryKey,null!=e&&(u[on(e)]=o.primaryKey),o})},hasGetAll:0<a.length&&"getAll"in u.objectStore(a[0])&&!("undefined"!=typeof navigator&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),c=s.schema,l=s.hasGetAll,f=c.tables.map(function(e){return function(k){var m,O=k.name;return{name:O,schema:k,mutate:function(e){var m=e.trans,g=e.type,b=e.keys,_=e.values,w=e.range,x=e.wantResults;return new Promise(function(n,e){n=Ye(n);var t=m.objectStore(O),r=null==t.keyPath,i="put"===g||"add"===g;if(!i&&"delete"!==g&&"deleteRange"!==g)throw new Error("Invalid operation type: "+g);var o=(b||_||{length:1}).length;if(b&&_&&b.length!==_.length)throw new Error("Given keys array must have same length as given values array.");if(0===o)return n({numFailures:0,failures:{},results:[],lastResult:void 0});function u(e){++f,Qt(e),c&&(c[e.target._reqno]=void 0),l[e.target._reqno]=e.target.error}function a(e){var t=e.target;c[t._reqno]=t.result}var s,c=x&&(b||tn(k.primaryKey,{type:g,keys:b,values:_})).slice(),l=[],f=0;if("deleteRange"===g){if(4===w.type)return n({numFailures:f,failures:l,results:c,lastResult:void 0});s=3===w.type?t.clear():t.delete(P(w))}else{var h=i?r?[_,b]:[_,null]:[b,null],p=h[0],d=h[1];if(i)for(var y=0;y<o;++y)(s=d&&void 0!==d[y]?t[g](p[y],d[y]):t[g](p[y]))._reqno=y,c&&void 0===c[y]&&(s.onsuccess=a),s.onerror=u;else for(y=0;y<o;++y)(s=t[g](p[y]))._reqno=y,s.onerror=u}function v(e){var t=e.target.result;c&&(c[o-1]=t),n({numFailures:f,failures:l,results:c,lastResult:t})}s.onerror=function(e){u(e),v(e)},s.onsuccess=v})},getMany:function(e){var f=e.trans,h=e.keys;return new Promise(function(n,e){n=Ye(n);for(var t,r=f.objectStore(O),i=h.length,o=new Array(i),u=0,a=0,s=function(e){var t=e.target;o[t._pos]=t.result,++a===u&&n(o)},c=Ht(e),l=0;l<i;++l)null!=h[l]&&((t=r.get(h[l]))._pos=l,t.onsuccess=s,t.onerror=c,++u);0===u&&n(o)})},get:function(e){var r=e.trans,i=e.key;return new Promise(function(t,e){t=Ye(t);var n=r.objectStore(O).get(i);n.onsuccess=function(e){return t(e.target.result)},n.onerror=Ht(e)})},query:(m=l,function(v){return new Promise(function(n,e){n=Ye(n);var t=v.trans,r=v.values,i=v.limit,o=v.query,u=i===1/0?void 0:i,a=o.index,s=o.range,c=t.objectStore(O),l=a.isPrimaryKey?c:c.index(a.name),f=P(s);if(0===i)return n({result:[]});if(m){var h=r?l.getAll(f,u):l.getAllKeys(f,u);h.onsuccess=function(e){return n({result:e.target.result})},h.onerror=Ht(e)}else{var p=0,d=!r&&"openKeyCursor"in l?l.openKeyCursor(f):l.openCursor(f),y=[];d.onsuccess=function(e){var t=d.result;return t?(y.push(r?t.value:t.primaryKey),++p===i?n({result:y}):void t.continue()):n({result:y})},d.onerror=Ht(e)}})}),openCursor:function(e){var c=e.trans,a=e.values,l=e.query,f=e.reverse,h=e.unique;return new Promise(function(t,n){t=Ye(t);var e=l.index,r=l.range,i=c.objectStore(O),o=e.isPrimaryKey?i:i.index(e.name),u=f?h?"prevunique":"prev":h?"nextunique":"next",s=!a&&"openKeyCursor"in o?o.openKeyCursor(P(r),u):o.openCursor(P(r),u);s.onerror=Ht(n),s.onsuccess=Ye(function(e){var r=s.result;if(r){r.___id=++rn,r.done=!1;var i=r.continue.bind(r),o=r.continuePrimaryKey;o&&(o=o.bind(r));var u=r.advance.bind(r),a=function(){throw new Error("Cursor not stopped")};r.trans=c,r.stop=r.continue=r.continuePrimaryKey=r.advance=function(){throw new Error("Cursor not started")},r.fail=Ye(n),r.next=function(){var e=this,t=1;return this.start(function(){return t--?e.continue():e.stop()}).then(function(){return e})},r.start=function(e){function t(){if(s.result)try{e()}catch(e){r.fail(e)}else r.done=!0,r.start=function(){throw new Error("Cursor behind last entry")},r.stop()}var n=new Promise(function(t,e){t=Ye(t),s.onerror=Ht(e),r.fail=e,r.stop=function(e){r.stop=r.continue=r.continuePrimaryKey=r.advance=a,t(e)}});return s.onsuccess=Ye(function(e){(s.onsuccess=t)()}),r.continue=i,r.continuePrimaryKey=o,r.advance=u,t(),n},t(r)}else t(null)},n)})},count:function(e){var t=e.query,u=e.trans,a=t.index,s=t.range;return new Promise(function(t,e){var n=u.objectStore(O),r=a.isPrimaryKey?n:n.index(a.name),i=P(s),o=i?r.count(i):r.count();o.onsuccess=Ye(function(e){return t(e.target.result)}),o.onerror=Ht(e)})}}}(e)}),h={};return f.forEach(function(e){return h[e.name]=e}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(e){if(!h[e])throw new Error("Table '"+e+"' not found");return h[e]},cmp:r,MIN_KEY:-1/0,MAX_KEY:Gt(o),schema:c}}function an(e,t,n,r){var i=n.IDBKeyRange;return{dbcore:function(e,t){return t.reduce(function(e,t){var n=t.create;return m({},e,n(e))},e)}(un(t,n.indexedDB,i,r),e.dbcore)}}function sn(n,e){var t=e.db,r=an(n._middlewares,t,n._deps,e);n.core=r.dbcore,n.tables.forEach(function(e){var t=e.name;n.core.schema.tables.some(function(e){return e.name===t})&&(e.core=n.core.table(t),n[t]instanceof n.Table&&(n[t].core=e.core))})}function cn(r,e,t,i){t.forEach(function(t){var n=i[t];e.forEach(function(e){t in e||(e===r.Transaction.prototype||e instanceof r.Transaction?u(e,t,{get:function(){return this.table(t)}}):e[t]=new r.Table(t,n))})})}function ln(n,e){e.forEach(function(e){for(var t in e)e[t]instanceof n.Table&&delete e[t]})}function fn(e,t){return e._cfg.version-t._cfg.version}function hn(e,t,n,r){var i=e._dbSchema,o=e._createTransaction("readwrite",e._storeNames,i);o.create(n),o._completion.catch(r);var u=o._reject.bind(o),a=Ce.transless||Ce;Ze(function(){Ce.trans=o,Ce.transless=a,0===t?(_(i).forEach(function(e){pn(n,e,i[e].primKey,i[e].indexes)}),sn(e,n),De.follow(function(){return e.on.populate.fire(o)}).catch(u)):function(s,t,c,l){var n=[],e=s._versions,r=e.filter(function(e){return e._cfg.version===t})[0];if(!r)throw new J.Upgrade("Dexie specification of currently installed DB version is missing");var f=s._dbSchema=r._cfg.dbschema,h=!1;return e.filter(function(e){return e._cfg.version>t}).forEach(function(a){n.push(function(){var t=f,e=a._cfg.dbschema;yn(s,t,l),yn(s,e,l),f=s._dbSchema=e;var n=function(e,t){var n,r={del:[],add:[],change:[]};for(n in e)t[n]||r.del.push(n);for(n in t){var i=e[n],o=t[n];if(i){var u={name:n,def:o,recreate:!1,del:[],add:[],change:[]};if(i.primKey.src!==o.primKey.src)u.recreate=!0,r.change.push(u);else{var a=i.idxByName,s=o.idxByName,c=void 0;for(c in a)s[c]||u.del.push(c);for(c in s){var l=a[c],f=s[c];l?l.src!==f.src&&u.change.push(f):u.add.push(f)}(0<u.del.length||0<u.add.length||0<u.change.length)&&r.change.push(u)}}else r.add.push([n,o])}return r}(t,e);n.add.forEach(function(e){pn(l,e[0],e[1].primKey,e[1].indexes)}),n.change.forEach(function(e){if(e.recreate)throw new J.Upgrade("Not yet support for changing primary key");var t=l.objectStore(e.name);e.add.forEach(function(e){return dn(t,e)}),e.change.forEach(function(e){t.deleteIndex(e.name),dn(t,e)}),e.del.forEach(function(e){return t.deleteIndex(e)})});var r=a._cfg.contentUpgrade;if(r){sn(s,l),h=!0;var i,o=k(e);n.del.forEach(function(e){o[e]=t[e]}),ln(s,[s.Transaction.prototype]),cn(s,[s.Transaction.prototype],_(o),o),c.schema=o,et();var u=De.follow(function(){if(i=r(c))if(i.constructor===me){var e=tt.bind(null,null);i.then(e,e)}else tt();else tt()});return i&&"function"==typeof i.then?De.resolve(i):u.then(function(){return i})}}),n.push(function(e){h&&bt||function(e,t){for(var n=0;n<t.db.objectStoreNames.length;++n){var r=t.db.objectStoreNames[n];null==e[r]&&t.db.deleteObjectStore(r)}}(a._cfg.dbschema,e),ln(s,[s.Transaction.prototype]),cn(s,[s.Transaction.prototype],s._storeNames,s._dbSchema),c.schema=s._dbSchema})}),function e(){return n.length?De.resolve(n.shift()(c.idbtrans)).then(e):De.resolve()}().then(function(){(function(t,n){_(t).forEach(function(e){n.db.objectStoreNames.contains(e)||pn(n,e,t[e].primKey,t[e].indexes)})})(f,l)})}(e,t,o,n).catch(u)})}function pn(e,t,n,r){var i=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(function(e){return dn(i,e)}),i}function dn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function yn(e,t,n){for(var r=n.db.objectStoreNames,i=0;i<r.length;++i){var o=r[i],u=n.objectStore(o);e._hasGetAll="getAll"in u;for(var a=0;a<u.indexNames.length;++a){var s=u.indexNames[a],c=u.index(s).keyPath,l="string"==typeof c?c:"["+d(c).join("+")+"]";if(t[o]){var f=t[o].idxByName[l];f&&(f.name=s)}}}"undefined"!=typeof navigator&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&h.WorkerGlobalScope&&h instanceof h.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}var vn,mn=function(){function e(){}return e.prototype._parseStoresSpec=function(r,i){_(r).forEach(function(e){if(null!==r[e]){var t=function(e){var r=[];return e.split(",").forEach(function(e){var t=(e=e.trim()).replace(/([&*]|\+\+)/g,""),n=/^\[/.test(t)?t.match(/^\[(.*)\]$/)[1].split("+"):t;r.push(Jt(t,n||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),p(n)))}),r}(r[e]),n=t.shift();if(n.multi)throw new J.Schema("Primary key cannot be multi-valued");t.forEach(function(e){if(e.auto)throw new J.Schema("Only primary key can be marked as autoIncrement (++)");if(!e.keyPath)throw new J.Schema("Index must have a name and cannot be an empty string")}),i[e]=Zt(e,n,t)}})},e.prototype.stores=function(e){var t=this.db;this._cfg.storesSource=this._cfg.storesSource?s(this._cfg.storesSource,e):e;var n=t._versions,r={};n.forEach(function(e){s(r,e._cfg.storesSource)});var i=this._cfg.dbschema={};return this._parseStoresSpec(r,i),t._dbSchema=i,ln(t,[t._allTables,t,t.Transaction.prototype]),cn(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],_(i),i),t._storeNames=_(i),this},e.prototype.upgrade=function(e){return this._cfg.contentUpgrade=e,this},e}();function gn(e){return Ze(function(){return Ce.letThrough=!0,e()})}function bn(a){var s=a._state,c=a._deps.indexedDB;if(s.isBeingOpened||a.idbdb)return s.dbReadyPromise.then(function(){return s.dbOpenError?ft(s.dbOpenError):a});R&&(s.openCanceller._stackHolder=N()),s.isBeingOpened=!0,s.dbOpenError=null,s.openComplete=!1;var e=s.dbReadyResolve,l=null;return De.race([s.openCanceller,new De(function(r,i){if(!c)throw new J.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.");var o=a.name,u=s.autoSchema?c.open(o):c.open(o,Math.round(10*a.verno));if(!u)throw new J.MissingAPI("IndexedDB API not available");u.onerror=Ht(i),u.onblocked=Ye(a._fireOnBlocked),u.onupgradeneeded=Ye(function(e){if(l=u.transaction,s.autoSchema&&!a._options.allowEmptyDB){u.onerror=Qt,l.abort(),u.result.close();var t=c.deleteDatabase(o);t.onsuccess=t.onerror=Ye(function(){i(new J.NoSuchDatabase("Database "+o+" doesnt exist"))})}else{l.onerror=Ht(i);var n=e.oldVersion>Math.pow(2,62)?0:e.oldVersion;hn(a,n/10,l,i)}},i),u.onsuccess=Ye(function(){l=null;var e=a.idbdb=u.result,t=d(e.objectStoreNames);if(0<t.length)try{var n=e.transaction(Yt(t),"readonly");s.autoSchema?function(e,t,s){e.verno=t.version/10;var c=e._dbSchema={},n=e._storeNames=d(t.objectStoreNames,0);0!==n.length&&(n.forEach(function(e){for(var t=s.objectStore(e),n=t.keyPath,r=Jt($t(n),n||"",!1,!1,!!t.autoIncrement,n&&"string"!=typeof n),i=[],o=0;o<t.indexNames.length;++o){var u=t.index(t.indexNames[o]);n=u.keyPath;var a=Jt(u.name,n,!!u.unique,!!u.multiEntry,!1,n&&"string"!=typeof n);i.push(a)}c[e]=Zt(e,r,i)}),cn(e,[e._allTables],_(c),c))}(a,e,n):yn(a,a._dbSchema,n),sn(a,n)}catch(e){}mt.push(a),e.onversionchange=Ye(function(e){s.vcFired=!0,a.on("versionchange").fire(e)}),vn.add(o),r()},i)})]).then(function(){return s.onReadyBeingFired=[],De.resolve(gn(a.on.ready.fire)).then(function e(){if(0<s.onReadyBeingFired.length){var t=s.onReadyBeingFired.reduce(se,ee);return s.onReadyBeingFired=[],De.resolve(gn(t)).then(e)}})}).finally(function(){s.onReadyBeingFired=null}).then(function(){return s.isBeingOpened=!1,a}).catch(function(e){try{l&&l.abort()}catch(e){}return s.isBeingOpened=!1,a.close(),s.dbOpenError=e,ft(s.dbOpenError)}).finally(function(){s.openComplete=!0,e()})}function _n(t){function e(e){return t.next(e)}var i=n(e),o=n(function(e){return t.throw(e)});function n(r){return function(e){var t=r(e),n=t.value;return t.done?n:n&&"function"==typeof n.then?n.then(i,o):p(n)?Promise.all(n).then(i,o):i(n)}}return n(e)()}function wn(e,t,n){for(var r=p(e)?e.slice():[e],i=0;i<n;++i)r.push(t);return r}var xn={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(f){return m({},f,{table:function(e){var o=f.table(e),t=o.schema,s={},c=[];function l(e,t,n){var r=on(e),i=s[r]=s[r]||[],o=null==e?0:"string"==typeof e?1:e.length,u=0<t,a=m({},n,{isVirtual:u,isPrimaryKey:!u&&n.isPrimaryKey,keyTail:t,keyLength:o,extractKey:en(e),unique:!u&&n.unique});return i.push(a),a.isPrimaryKey||c.push(a),1<o&&l(2===o?e[0]:e.slice(0,o-1),t+1,n),i.sort(function(e,t){return e.keyTail-t.keyTail}),a}var n=l(t.primaryKey.keyPath,0,t.primaryKey);s[":id"]=[n];for(var r=0,i=t.indexes;r<i.length;r++){var u=i[r];l(u.keyPath,0,u)}function a(e){var t=e.query.index;return t.isVirtual?m({},e,{query:{index:t,range:function(e,t){return{type:1===e.type?2:e.type,lower:wn(e.lower,e.lowerOpen?f.MAX_KEY:f.MIN_KEY,t),lowerOpen:!0,upper:wn(e.upper,e.upperOpen?f.MIN_KEY:f.MAX_KEY,t),upperOpen:!0}}(e.query.range,t.keyTail)}}):e}return m({},o,{schema:m({},t,{primaryKey:n,indexes:c,getIndexByKeyPath:function(e){var t=s[on(e)];return t&&t[0]}}),count:function(e){return o.count(a(e))},query:function(e){return o.query(a(e))},openCursor:function(t){var e=t.query.index,r=e.keyTail,n=e.isVirtual,i=e.keyLength;return n?o.openCursor(a(t)).then(function(e){return e&&function(n){return Object.create(n,{continue:{value:function(e){null!=e?n.continue(wn(e,t.reverse?f.MAX_KEY:f.MIN_KEY,r)):t.unique?n.continue(wn(n.key,t.reverse?f.MIN_KEY:f.MAX_KEY,r)):n.continue()}},continuePrimaryKey:{value:function(e,t){n.continuePrimaryKey(wn(e,f.MAX_KEY,r),t)}},key:{get:function(){var e=n.key;return 1===i?e[0]:e.slice(0,i)}},value:{get:function(){return n.value}}})}(e)}):o.openCursor(t)}})}})}},kn={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return m({},e,{table:function(r){var a=e.table(r),v=a.schema.primaryKey;return m({},a,{mutate:function(e){var t=Ce.trans,n=t.table(r).hook,p=n.deleting,d=n.creating,y=n.updating;switch(e.type){case"add":if(d.fire===ee)break;return t._promise("readwrite",function(){return u(e)},!0);case"put":if(d.fire===ee&&y.fire===ee)break;return t._promise("readwrite",function(){return u(e)},!0);case"delete":if(p.fire===ee)break;return t._promise("readwrite",function(){return u(e)},!0);case"deleteRange":if(p.fire===ee)break;return t._promise("readwrite",function(){return function(e){return function n(r,i,o){return a.query({trans:r,values:!1,query:{index:v,range:i},limit:o}).then(function(e){var t=e.result;return u({type:"delete",keys:t,trans:r}).then(function(e){return 0<e.numFailures?Promise.reject(e.failures[0]):t.length<o?{failures:[],numFailures:0,lastResult:void 0}:n(r,m({},i,{lower:t[t.length-1],lowerOpen:!0}),o)})})}(e.trans,e.range,1e4)}(e)},!0)}return a.mutate(e);function u(l){var f=Ce.trans,h=l.keys||tn(v,l);if(!h)throw new Error("Keys missing");return"delete"!==(l="add"===l.type||"put"===l.type?m({},l,{keys:h,wantResults:!0}):m({},l)).type&&(l.values=l.values.slice()),l.keys&&(l.keys=l.keys.slice()),function(e,t,n){return"add"===t.type?Promise.resolve(new Array(t.values.length)):e.getMany({trans:t.trans,keys:n})}(a,l,h).then(function(s){var c=h.map(function(e,t){var n=s[t],r={onerror:null,onsuccess:null};if("delete"===l.type)p.fire.call(r,e,n,f);else if("add"===l.type||void 0===n){var i=d.fire.call(r,e,l.values[t],f);null==e&&null!=i&&(e=i,l.keys[t]=e,v.outbound||x(l.values[t],v.keyPath,e))}else{var o=S(n,l.values[t]),u=y.fire.call(r,o,e,n,f);if(u){var a=l.values[t];Object.keys(u).forEach(function(e){x(a,e,u[e])})}}return r});return a.mutate(l).then(function(e){for(var t=e.failures,n=e.results,r=e.numFailures,i=e.lastResult,o=0;o<h.length;++o){var u=n?n[o]:h[o],a=c[o];null==u?a.onerror&&a.onerror(t[o]):a.onsuccess&&a.onsuccess("put"===l.type&&s[o]?l.values[o]:u)}return{failures:t,results:n,numFailures:r,lastResult:i}}).catch(function(t){return c.forEach(function(e){return e.onerror&&e.onerror(t)}),Promise.reject(t)})})}}})}})}},On=function(){function u(e,t){var o=this;this._middlewares={},this.verno=0;var n=u.dependencies;this._options=t=m({addons:u.addons,autoOpen:!0,indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange};var r=t.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={};var i={dbOpenError:this.idbdb=null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ee,dbReadyPromise:null,cancelOpen:ee,openCanceller:null,autoSchema:!0};i.dbReadyPromise=new De(function(e){i.dbReadyResolve=e}),i.openCanceller=new De(function(e,t){i.cancelOpen=t}),this._state=i,this.name=e,this.on=jt(this,"populate","blocked","versionchange",{ready:[se,ee]}),this.on.ready.subscribe=y(this.on.ready.subscribe,function(i){return function(n,r){u.vip(function(){var e=o._state;if(e.openComplete)e.dbOpenError||De.resolve().then(n),r&&i(n);else if(e.onReadyBeingFired)e.onReadyBeingFired.push(n),r&&i(n);else{i(n);var t=o;r||i(function e(){t.on.ready.unsubscribe(n),t.on.ready.unsubscribe(e)})}})}}),this.Collection=function(a){return Kt(Rt.prototype,function(e,t){this.db=a;var n=Pt,r=null;if(t)try{n=t()}catch(e){r=e}var i=e._ctx,o=i.table,u=o.hook.reading.fire;this._ctx={table:o,index:i.index,isPrimKey:!i.index||o.schema.primKey.keyPath&&i.index===o.schema.primKey.name,range:n,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:r,or:i.or,valueMapper:u!==te?u:null}})}(this),this.Table=function(r){return Kt(Et.prototype,function(e,t,n){this.db=r,this._tx=n,this.name=e,this.schema=t,this.hook=r._allTables[e]?r._allTables[e].hook:jt(null,{creating:[ie,ee],reading:[ne,te],updating:[ue,ee],deleting:[oe,ee]})})}(this),this.Transaction=function(o){return Kt(Xt.prototype,function(e,t,n,r){var i=this;this.db=o,this.mode=e,this.storeNames=t,this.schema=n,this.idbtrans=null,this.on=jt(this,"complete","error","abort"),this.parent=r||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new De(function(e,t){i._resolve=e,i._reject=t}),this._completion.then(function(){i.active=!1,i.on.complete.fire()},function(e){var t=i.active;return i.active=!1,i.on.error.fire(e),i.parent?i.parent._reject(e):t&&i.idbtrans&&i.idbtrans.abort(),ft(e)})})}(this),this.Version=function(t){return Kt(mn.prototype,function(e){this.db=t,this._cfg={version:e,storesSource:null,dbschema:{},tables:{},contentUpgrade:null},this.stores({})})}(this),this.WhereClause=function(i){return Kt(Lt.prototype,function(e,t,n){this.db=i,this._ctx={table:e,index:":id"===t?null:t,or:n};var r=i._deps.indexedDB;if(!r)throw new J.MissingAPI("indexedDB API missing");this._cmp=this._ascending=r.cmp.bind(r),this._descending=function(e,t){return r.cmp(t,e)},this._max=function(e,t){return 0<r.cmp(e,t)?e:t},this._min=function(e,t){return r.cmp(e,t)<0?e:t},this._IDBKeyRange=i._deps.IDBKeyRange})}(this),this.on("versionchange",function(e){0<e.newVersion?console.warn("Another connection wants to upgrade database '"+o.name+"'. Closing db now to resume the upgrade."):console.warn("Another connection wants to delete database '"+o.name+"'. Closing db now to resume the delete request."),o.close()}),this.on("blocked",function(e){!e.newVersion||e.newVersion<e.oldVersion?console.warn("Dexie.delete('"+o.name+"') was blocked"):console.warn("Upgrade '"+o.name+"' blocked by other connection holding version "+e.oldVersion/10)}),this._maxKey=Gt(t.IDBKeyRange),this._createTransaction=function(e,t,n,r){return new o.Transaction(e,t,n,r)},this._fireOnBlocked=function(t){o.on("blocked").fire(t),mt.filter(function(e){return e.name===o.name&&e!==o&&!e._state.vcFired}).map(function(e){return e.on("versionchange").fire(t)})},this.use(xn),this.use(kn),r.forEach(function(e){return e(o)})}return u.prototype.version=function(t){if(t=Math.round(10*t)/10,this.idbdb||this._state.isBeingOpened)throw new J.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,t);var e=this._versions,n=e.filter(function(e){return e._cfg.version===t})[0];return n||(n=new this.Version(t),e.push(n),e.sort(fn),this._state.autoSchema=!1,n)},u.prototype._whenReady=function(e){var n=this;return this._state.openComplete||Ce.letThrough?e():new De(function(e,t){if(!n._state.isBeingOpened){if(!n._options.autoOpen)return void t(new J.DatabaseClosed);n.open().catch(ee)}n._state.dbReadyPromise.then(e,t)}).then(e)},u.prototype.use=function(e){var t=e.stack,n=e.create,r=e.level,i=e.name;i&&this.unuse({stack:t,name:i});var o=this._middlewares[t]||(this._middlewares[t]=[]);return o.push({stack:t,create:n,level:null==r?10:r,name:i}),o.sort(function(e,t){return e.level-t.level}),this},u.prototype.unuse=function(e){var t=e.stack,n=e.name,r=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(e){return r?e.create!==r:!!n&&e.name!==n})),this},u.prototype.open=function(){return bn(this)},u.prototype.close=function(){var e=mt.indexOf(this),n=this._state;if(0<=e&&mt.splice(e,1),this.idbdb){try{this.idbdb.close()}catch(e){}this.idbdb=null}this._options.autoOpen=!1,n.dbOpenError=new J.DatabaseClosed,n.isBeingOpened&&n.cancelOpen(n.dbOpenError),n.dbReadyPromise=new De(function(e){n.dbReadyResolve=e}),n.openCanceller=new De(function(e,t){n.cancelOpen=t})},u.prototype.delete=function(){var r=this,i=0<arguments.length,o=this._state;return new De(function(t,n){function e(){r.close();var e=r._deps.indexedDB.deleteDatabase(r.name);e.onsuccess=Ye(function(){vn.remove(r.name),t()}),e.onerror=Ht(n),e.onblocked=r._fireOnBlocked}if(i)throw new J.InvalidArgument("Arguments not allowed in db.delete()");o.isBeingOpened?o.dbReadyPromise.then(e):e()})},u.prototype.backendDB=function(){return this.idbdb},u.prototype.isOpen=function(){return null!==this.idbdb},u.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&"DatabaseClosed"===e.name},u.prototype.hasFailed=function(){return null!==this._state.dbOpenError},u.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(u.prototype,"tables",{get:function(){var t=this;return _(this._allTables).map(function(e){return t._allTables[e]})},enumerable:!0,configurable:!0}),u.prototype.transaction=function(){var e=function(e,t,n){var r=arguments.length;if(r<2)throw new J.InvalidArgument("Too few arguments");for(var i=new Array(r-1);--r;)i[r-1]=arguments[r];return n=i.pop(),[e,O(i),n]}.apply(this,arguments);return this._transaction.apply(this,e)},u.prototype._transaction=function(e,t,n){var r=this,i=Ce.trans;i&&i.db===this&&-1===e.indexOf("!")||(i=null);var o,u,a=-1!==e.indexOf("?");e=e.replace("!","").replace("?","");try{if(u=t.map(function(e){var t=e instanceof r.Table?e.name:e;if("string"!=typeof t)throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return t}),"r"==e||e===xt)o=xt;else{if("rw"!=e&&e!=kt)throw new J.InvalidArgument("Invalid transaction mode: "+e);o=kt}if(i){if(i.mode===xt&&o===kt){if(!a)throw new J.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");i=null}i&&u.forEach(function(e){if(i&&-1===i.storeNames.indexOf(e)){if(!a)throw new J.SubTransaction("Table "+e+" not included in parent transaction.");i=null}}),a&&i&&!i.active&&(i=null)}}catch(n){return i?i._promise(null,function(e,t){t(n)}):ft(n)}var s=function(o,u,a,s,c){return De.resolve().then(function(){var t,e=Ce.transless||Ce,n=o._createTransaction(u,a,o._dbSchema,s),r={trans:n,transless:e};s?n.idbtrans=s.idbtrans:n.create(),et();var i=De.follow(function(){if(t=c.call(n,n))if(t.constructor===me){var e=tt.bind(null,null);t.then(e,e)}else tt(),"function"==typeof t.next&&"function"==typeof t.throw&&(t=_n(t));else tt()},r);return(t&&"function"==typeof t.then?De.resolve(t).then(function(e){return n.active?e:ft(new J.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):i.then(function(){return t})).then(function(e){return s&&n._resolve(),n._completion.then(function(){return e})}).catch(function(e){return n._reject(e),ft(e)})})}.bind(null,this,o,u,i,n);return i?i._promise(o,s,"lock"):Ce.trans?ut(Ce.transless,function(){return r._whenReady(s)}):this._whenReady(s)},u.prototype.table=function(e){if(!c(this._allTables,e))throw new J.InvalidTable("Table "+e+" does not exist");return this._allTables[e]},u}(),Pn=On;return r(Pn,m({},Z,{delete:function(e){return new Pn(e).delete()},exists:function(e){return new Pn(e,{addons:[]}).open().then(function(e){return e.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){return vn?vn.getDatabaseNames().then(e):De.resolve([])},defineClass:function(){return function(e){s(this,e)}},ignoreTransaction:function(e){return Ce.trans?ut(Ce.transless,e):e()},vip:gn,async:function(t){return function(){try{var e=_n(t.apply(this,arguments));return e&&"function"==typeof e.then?e:De.resolve(e)}catch(e){return ft(e)}}},spawn:function(e,t,n){try{var r=_n(e.apply(n,t||[]));return r&&"function"==typeof r.then?r:De.resolve(r)}catch(e){return ft(e)}},currentTransaction:{get:function(){return Ce.trans||null}},waitFor:function(e,t){var n=De.resolve("function"==typeof e?Pn.ignoreTransaction(e):e).timeout(t||6e4);return Ce.trans?Ce.trans.waitFor(n):n},Promise:De,debug:{get:function(){return R},set:function(e){F(e,"dexie"===e?function(){return!0}:ht)}},derive:a,extend:s,props:r,override:y,Events:jt,getByKeyPath:w,setByKeyPath:x,delByKeyPath:function(t,e){"string"==typeof e?x(t,e,void 0):"length"in e&&[].map.call(e,function(e){x(t,e,void 0)})},shallowClone:k,deepClone:j,getObjectDiff:S,asap:g,minKey:-1/0,addons:[],connections:mt,errnames:Q,dependencies:function(){try{return{indexedDB:h.indexedDB||h.mozIndexedDB||h.webkitIndexedDB||h.msIndexedDB,IDBKeyRange:h.IDBKeyRange||h.webkitIDBKeyRange}}catch(e){return{indexedDB:null,IDBKeyRange:null}}}(),semVer:pt,version:pt.split(".").map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/Math.pow(10,2*n)}),default:Pn,Dexie:Pn})),Pn.maxKey=Gt(Pn.dependencies.IDBKeyRange),function(e){try{vn=function(r){var t,i=r&&(r.getDatabaseNames||r.webkitGetDatabaseNames);if(!i){var e=new On(wt,{addons:[]});e.version(1).stores({dbnames:"name"}),t=e.table("dbnames")}return{getDatabaseNames:function(){return i?new De(function(t,e){var n=i.call(r);n.onsuccess=function(e){return t(d(e.target.result,0))},n.onerror=Ht(e)}):t.toCollection().primaryKeys()},add:function(e){return!i&&e!==wt&&t.put({name:e}).catch(ee)},remove:function(e){return!i&&e!==wt&&t.delete(e).catch(ee)}}}(e)}catch(e){}}(On.dependencies.indexedDB),De.rejectionMapper=function(e,t){if(!e||e instanceof L||e instanceof TypeError||e instanceof SyntaxError||!e.name||!$[e.name])return e;var n=new $[e.name](t||e.message,e);return"stack"in e&&u(n,"stack",{get:function(){return this.inner.stack}}),n},F(R,ht),On});
/* exported IDB */
var IDB = createStore()

// Need to reference Buffer until export to globals is possible: https://github.com/browserify/browserify/issues/1073
var Buffer = buffer.Buffer

function createStore() {
  var _store = new Dexie('ProjectStore')
  _store.version(1).stores({
    projects: 'pid, name, hash, repo',
    files: 'id, &path, &fid, type, hash',
    folders: 'id, &path, hash',
    data: 'fid',
    libraries: 'url',
    sessions: 'pid',
    meta: 'key'
  })
  _store.version(2).stores({
    projects: 'pid',
    files: 'id, &path, &fid',
    folders: 'id, &path',
    data: 'fid',
    libraries: 'url',
    meta: 'key'
  }).upgrade (trans => {
    return Promise.all([
      trans.projects.filter(p => !p.dir).modify(project => {
        // Property to indicate a legacy project
        var olddir = project.ref ? `${project.pid}:${project.ref.split('/').pop()}` : project.pid
        project.olddir = olddir
        project.dir = `${olddir}/${project.name}`
      }),
      trans.folders.filter(f => f.deleted).delete(),
      trans.files.filter(f => f.deleted).delete(),
      trans.data.filter(d => d.encoding === 'base64').modify(d => {
        d.text = castAsReadableArrayBuffer(Buffer.from(d.text, 'base64'))
        d.encoding = 'binary'
      })
    ])
  })
  return _store
}

var GlobalErrorCodes = {
  ProjectNotFound: 'project:404',
  FileNotFound: 'file:404',
  FolderNotFound: 'folder:404',
  INodeNotFound: 'inode:404',
  LibraryNotFound: 'library:404',
  EditorSessionNotLinked: 'editor:404',
  GitOperationTimeout: 'git:408',
  AcquireLockFileFail: 'lock:500'
}

var $warn = console ? console.warn : (() => {})
var DFS = new AndroidFileSystemClass()
var GFS = new GitFileSystemClass(DFS)

if (!GFS) $warn('GFS not initialized.')

function ObservableClass() {
  var subscriptions = []
  Object.assign(this, {
    subscriptions,
    subscribe,
    run
  })

  /**
   * Subscribe to changes.
   */
  function subscribe(fn) {
    subscriptions.push(fn)
    return {
      unsubscribe: () => {
        if (subscriptions.includes(fn)) subscriptions.splice(subscriptions.indexOf(fn), 1)
      }
    }
  }

  /**
   * Run all subscriptions with the provided args.
   */
  function run(args) {
    return Promise.all(subscriptions.map(fn => fn(args)))
  }
}

function AndroidFileSystemClass() {
  var EMPTY_ARRAY = []
  var EMPTY_OBJECT = Object.create(null)

  // Does some checks to make sure Android interface matches expectations
  var AndroidRef
  try {
    AndroidRef = window.Android || self.Android
  } catch (e) {
    $warn(e.message)
  }

  if (!AndroidRef) {
    $warn('AndroidFileSystem is not operational: interface missing')
    this.supported = false
    return
  }

  // TODO: last version of IDB with webworkers as we know it
  this.supported = !!(AndroidRef.getDirectory && AndroidRef.mkdirp && AndroidRef.exists
    && AndroidRef.readFile && AndroidRef.remove && AndroidRef.readlink && AndroidRef.writelink
    && AndroidRef.write && AndroidRef.readdir && AndroidRef.readdirDeep && AndroidRef.lstat
    && AndroidRef.mv && AndroidRef.appVersion() >= 19)

  if (!this.supported) {
    $warn('AndroidFileSystem is not operational: interface mismatch')
    return
  }

  Object.assign(this, {
    getDirectory: () => AndroidRef.getDirectory(),
    readFile: (path, encoding) => promisifyStatus(AndroidRef.readFile(path, encoding)).then(({contents}) => {
      if (encoding === 'utf8') {
        return contents
      } else {
        return Buffer.from(contents, 'base64')
      }
    }),
    remove: path => promisifyStatus(AndroidRef.remove(path)),
    readlink: path => promisifyStatus(AndroidRef.readlink(path)).then(({contents}) => contents),
    writelink: (path, target) => promisifyStatus(AndroidRef.writelink(path, target)),
    write: (path, contents, base64) => promisifyStatus(AndroidRef.write(path, contents, !!base64)),
    exists: path => Promise.resolve(AndroidRef.exists(path)),
    mkdirp: path => promisifyStatus(AndroidRef.mkdirp(path)).then(({contents}) => contents),
    readdir: path => promisifyStatus(AndroidRef.readdir(path)).catch(() => null),
    readdirDeep: (path, files, folders) => promisifyStatus(AndroidRef.readdirDeep(path, files, folders)),
    lstat: function (path) {
      return promisifyStatus(AndroidRef.lstat(path))
        .then(stats => new Stats(stats), () => null)
    },
    mv: function (oldpath, path) {
      return promisifyStatus(AndroidRef.mv(oldpath, path)).then(({contents}) => contents)
    },
    writeExternal: function (uri, content, base64) {
      if (AndroidRef && AndroidRef.writeExternal) {
        return promisifyStatus(AndroidRef.writeExternal(uri, content, !!base64))
      }
    }
  })

  function promisifyStatus(json) {
    switch (json) {
      case '{}': {
        return Promise.resolve(EMPTY_OBJECT)
      }
      case '[]': {
        return Promise.resolve(EMPTY_ARRAY)
      }
      default: {
        var data = JSON.parse(json)
        return data.status ? Promise.reject(data) : Promise.resolve(data)
      }
    }
  }
}

/**
 * Creates a file system wrapper for Git
 * @param {AndroidFileSystemClass} fs
 */
function GitFileSystemClass(fs) {
  var ERROR_SOURCE = 'GitFileSystemClass'
  var _store = IDB,
      _inodes = new LFUCache(9000, 0),
      _readdirDeepCache = new LFUCache(50, 0.5),
      _readdirCache = new LFUCache(500, 0.5),
      _normPathCache = new LFUCache(800, 0.8),
      _lstatCache = new LFUCache(50, 0.5),
      observable = new ObservableClass()
  // Everything marked with * will be used by isomorphic git
  Object.assign(this, {
    read, //*
    readFile,
    rmdir, //*
    rm, //*
    readlink, //*
    readdir, //*
    readdirDeep, //*
    lstat, //*
    exists, //*
    writelink, //*
    write, //*
    mkdir, //*
    mv,
    migrate,
    inode,
    inodePath,
    dirname,
    basename,
    relativeTo,
    childOf,
    observable,
    isIDB,
    isBinaryContent,
    normalizePath,
    uuid4: _id
  })

  function isBinaryContent(content) {
    return Buffer.from(content.slice(0, 8000)).some(value => value === 0)
  }

  /**
   * Create an unique identifier for a file, that stays the same thru renames.
   */
  function inode(path, renew) {
    return Promise.resolve((!renew && _inodes.get(path)) || _inodes.set(path, _id()))
  }

  /**
   * Get path for an existing inode.
   */
  function inodePath(inode) {
    var result = _inodes.find(inode)
    return result ? Promise.resolve(result) : Promise.reject({
      source: ERROR_SOURCE,
      fn: 'inodePath',
      message: 'Could not find inode.',
      inode,
      code: GlobalErrorCodes.INodeNotFound
    })
  }

  /**
   * Return true if a file exists, false if it doesn't exist.
   * Rethrows errors that aren't related to file existence.
   */
  function exists(filepath) {
    filepath = normalizePath(filepath)
    if (fs.supported && !isIDB(filepath)) return Promise.resolve(fs.exists(filepath))
    return lookupFile(filepath).then(file => {
      if (file) {
        return true
      } else {
        return lookupFolder(filepath).then(folder => !!folder)
      }
    })
  }

  function lookupFolder(path) {
    return _store.folders.get({ path }).then(folder => {
      if (folder) {
        return folder
      } else {
        return readlink(path).then(target => {
          // If target = path then we have a infinite symlink
          if (target && target !== path) return lookupFolder(target)
        })
      }
    })
  }

  function lookupFile(path) {
    return _store.files.get({ path }).then(file => {
      if (file && file.target) {
        return lookupFile(file.target)
      } else {
        return file
      }
    })
  }

  /**
   * Move an existing file or folder.
   */
  function mv(oldpath, path) {
    oldpath = normalizePath(oldpath)
    path = normalizePath(path)
    if (oldpath === path) return Promise.resolve()
    _readdirDeepCache.clear()
    _readdirCache.del(oldpath)
    _readdirCache.del(dirname(oldpath))
    _lstatCache.del(oldpath)  // Tricky: cannot use a rename here as it does not modify mtimeMs
    var promise = (fs.supported && !isIDB(oldpath) ? fs.mv(oldpath, path) :
      lookupFile(oldpath).then(file => {
        if (file) {
          var mtimeMs = Date.now()
          return mkdir(dirname(path)).then(() => {
            return _store.files.update(file.id, { path, mtimeMs })
          }).then(() => 'file')
        } else {
          return lookupFolder(oldpath).then(folder => {
            if (folder) {
              var mtimeMs = Date.now()
              return Promise.all([
                mkdir(dirname(path)),
                _store.files.where('path').startsWith(oldpath + '/').modify(file => {
                  file.path = path + file.path.slice(oldpath.length)
                  file.mtimeMs = mtimeMs
                }),
                _store.folders.where('path').startsWith(oldpath + '/').modify(folder => {
                  folder.path = path + folder.path.slice(oldpath.length)
                  folder.mtimeMs = mtimeMs
                }),
                _store.folders.update(folder.id, { path, mtimeMs })
              ]).then(() => 'folder')
            }
          })
        }
      })
    )
    return promise
      .then(type => {
        if (type === 'file') {
          _inodes.rename(oldpath, path)
        } else if (type === 'folder') {
          var startPath = oldpath + '/'
          _inodes.keys()
            .filter(p => p.startsWith(startPath))
            .forEach(p => {
              _inodes.rename(p, p.replace(oldpath, path))
            })
        }
        if (type) {
          return observable.run({
            action: 'mv',
            oldpath,
            path,
            type
          }).then(() => ({
            oldpath,
            path,
            type
          }))
        }
      })
  }

  /**
   * Migrates an existing project from indexedDB to filesystem
   */
  function migrate(oldpath, path, progressCb) {
    oldpath = normalizePath(oldpath)
    path = normalizePath(path)
    // Migrate to filesystem
    return _store.files.where('path').startsWith(oldpath + '/').toArray().then(files => {
      var total = files.length
      var loaded = 0
      return PromisePool({
        data: files,
        promiseGenerator: function (file) {
          return _store.data.get(file.fid).then(data => {
            // Sometimes file is null? not sure how...
            if (file && file.path) {
              var filepath = file.path.replace(oldpath, path)
              return write(filepath, data.text)
                .then(() => {
                  loaded += 1
                  progressCb({loaded, total, phase: 'Migrating files'})
                })
            }
          })
        },
        maxConcurrency: 6,
        retryAttempts: 0,
        useRaf: true
      })
    })
  }

  /**
   * Return the contents of a file if it exists, otherwise returns null Promise.
   */
  function read(filepath, options = {}) {
    return readFile(filepath, options)
      .catch(() => null)
  }

  /**
   * Return the contents of a file if it exists, otherwise reject Promise.
   */
  function readFile(filepath, options = {}) {
    filepath = normalizePath(filepath)
    var encoding = options.encoding
    if (fs.supported && !isIDB(filepath)) return fs.readFile(filepath, encoding)
    return lookupFile(filepath).then(file => {
      if (file) {
        return _store.data.get(file.fid).then(data => {
          var text = (data && data.text) || ''
          var dataEncoding = (data && data.encoding) || ''
          if (dataEncoding) {
            if (encoding === 'utf8' && dataEncoding === 'utf8') {
              return text
            } else if (!encoding) {
              return Buffer.from(text, dataEncoding)
            } else {
              return Buffer.from(text, dataEncoding).toString(encoding)
            }
          } else {
            if (encoding === 'utf8') {
              return text
            } else if (encoding) {
              return Buffer.from(text).toString(encoding)
            } else {
              return Buffer.from(text)
            }
          }
        })
      } else {
        return Promise.reject({
          source: ERROR_SOURCE,
          fn: 'read',
          message: 'Could not find file.',
          filepath,
          code: GlobalErrorCodes.FileNotFound
        })
      }
    })
  }

  /**
   * Make a directory (or series of nested directories) without throwing an error if it already exists.
   */
  function mkdir(path) {
    path = normalizePath(path)
    var promise
    if (fs.supported && !isIDB(path)) {
      promise = fs.mkdirp(path)
    } else {
      var foldersToCreate = path.split('/').map((name, index, array) => {
        return array.slice(0, index + 1).join('/')
      })
      promise = _store.folders.where('path').anyOf(foldersToCreate).keys(existing => {
        var paths = foldersToCreate.filter(p => !existing.includes(p))
        if (paths.length > 0) return _mkdirs(paths)
        else return false
      })
    }
    return promise.then(created => {
      if (created) {
        _readdirDeepCache.clear()
        return observable.run({
          action: 'mkdir',
          path,
          type: 'folder'
        })
      }
    })
  }

  /**
   * Write a file (creating missing directories if need be) without throwing errors.
   */
  function write(path, contents, options) {
    path = normalizePath(path)
    contents = contents || ''
    var {mode, target} = options || {}
    return mkdir(dirname(path)).then(() => {
      _readdirDeepCache.clear()
      _readdirCache.del(dirname(path))
      _lstatCache.del(path)
      var binary = isArrayBuffer(contents)
      var promise = (fs.supported && !isIDB(path) ?
        fs.write(path, binary ? Buffer.from(contents).toString('base64') : contents, binary) :
        lookupFile(path).then(file => {
          var mtimeMs = Date.now()
          var fid = file ? file.id : _id()
          var ctimeMs = file ? file.ctimeMs : mtimeMs
          var newFile = {
            id: fid,
            fid,
            path,
            mode,
            target,
            ctimeMs,
            mtimeMs
          }
          return _store.files.put(newFile)
            .then(() => {
              var data = {
                fid,
                // Quite good support: https://html5test.com/compare/browser/ie-10/chrome-30/chrome-40/firefox-30/safari-10.0.html
                text: binary ? castAsReadableArrayBuffer(contents) : contents,
                encoding: binary ? 'binary' : 'utf8'
              }
              newFile.size = data.text.length
              return _store.data.put(data).then(() => newFile)
            })
        })
      )
      return promise
        .then(({mtimeMs, size, mode}) => {
          return observable.run({
            action: 'write',
            path,
            type: 'file'
          })
          .then(() => ({mode, mtimeMs, type: 'file', ino: 0, size}))
        })
    })
  }

  /**
   * Delete a file without throwing an error if it is already deleted.
   */
  function rm(path, temp) {
    path = normalizePath(path)
    if (temp) {
      // Use a unique id to prevent collisions
      return mv(path, `${temp}${path}~${_id()}`)
    } else {
      _readdirDeepCache.clear()
      return (fs.supported && !isIDB(path) ?
        fs.remove(path).then(removed => {
          _readdirCache.del(dirname(path))
          _readdirCache.del(path)
          _lstatCache.clear()  // TODO: naive way of invalidating cache
          return removed
        }) :
        _store.files.get({ path })  // Note, rm should not follow symlinks
          .then(file => {
            if (file) {
              _readdirCache.del(dirname(path))
              _lstatCache.del(path)
              return Promise.all([
                _store.files.delete(file.id),
                _store.data.delete(file.fid)
              ]).then(() => true)
            }
          })
      )
        .then(removed => {
          if (removed) {
            _inodes.del(path)
            var type = 'file'
            return observable.run({
              action: 'rm',
              oldpath: path,
              path: null,
              type
            })
            .then(() => rmEmptyParent(path, type))
            .then(() => ({
              oldpath: path,
              path: null,
              type
            }))
          }
          else {
            return rmdir(path)
          }
        })
    }
  }

  /**
   * Assume removing a directory.
   */
  function rmdir(path, temp) {
    path = normalizePath(path)
    var startPath = path + '/'
    _inodes.keys()
      .filter(path => path.startsWith(startPath))
      .forEach(path => _inodes.del(path))
    if (temp) {
      return mv(path, temp + path)
    }
    else {
      var promise = fs.supported && !isIDB(path) ? fs.remove(path) : Promise.all([
        _store.folders.where('path').equals(path).delete(),
        _store.files.where('path').startsWith(startPath).delete(),
        _store.folders.where('path').startsWith(startPath).delete()
      ])
      var type = 'folder'
      _readdirCache.del(path)
      _readdirCache.del(dirname(path))
      _readdirDeepCache.clear()
      _lstatCache.keys()
        .filter(path => path.startsWith(startPath))
        .forEach(path => _lstatCache.del(path))
      return promise.then(() => {
        return observable.run({
          action: 'rmdir',
          oldpath: path,
          path: null,
          type
        })
      }).then(() => rmEmptyParent(path, type))
    }
  }

  /**
   * Count number of files under a directory (including files in subdirectories).
   */
  function fileCount(dirname) {
    return _store.files.where('path').startsWith(normalizePath(dirname) + '/').count()
  }

  function rmEmptyParent(filepath, type) {
    // if parent is left empty (contains no descendent files), delete it
    var parent = dirname(filepath)
    if (parent === '.' || parent === '') return Promise.resolve({
      oldpath: filepath,
      path: null,
      type
    })
    if (fs.supported && !isIDB(filepath)) return fs.remove(parent)
    return fileCount(parent)
      .then(count => {
        if (count === 0) {
          // start recursion (delete parent's parent if that is left empty)
          return rmdir(parent)
        } else {
          return {
            oldpath: filepath,
            path: null,
            type
          }
        }
      })
  }

  /**
   * Read a directory without throwing an error is the directory doesn't exist
   */
  function readdir(path) {
    path = normalizePath(path)
    var cached = _readdirCache.get(path)
    if (cached !== undefined) return Promise.resolve(cached)
    if (fs.supported && !isIDB(path)) return _readdirCache.set(path, fs.readdir(path))
    return lookupFolder(path)
      .then(folder => {
        if (folder) {
          var startPath = folder.path + '/'
          var l = startPath.length
          return Promise.all([
            _store.folders.where('path').startsWith(startPath).filter(f => !f.path.slice(l).includes('/')).keys(),
            _store.files.where('path').startsWith(startPath).filter(f => !f.path.slice(l).includes('/')).keys(),
          ])
          .then(([folders, files]) => {
            var paths = folders.concat(files).map(p => p.slice(l))
            paths.sort(_compareStrings)
            return _readdirCache.set(path, paths)
          })
        } else {
          return _readdirCache.set(path, null)
        }
      })
  }

  /**
   * Return a flat list of all the files nested inside a directory
   */
  function readdirDeep(dirname, opts) {
    var {files=true, folders=false, relative=false} = opts || {}
    dirname = normalizePath(dirname)
    var startPath = dirname  + '/'
    var l = startPath.length
    var key = `readdirDeep(files=${files},folders=${folders},relative=${relative})`
    var cached = _readdirDeepCache.get(key)
    if (cached) return Promise.resolve(cached)
    return (fs.supported && !isIDB(dirname) ? fs.readdirDeep(dirname, files, folders) :
      Promise.all([
        !folders ? [] :
            _store.folders.where('path').startsWith(startPath).keys(),
        !files ? [] :
          _store.files.where('path').startsWith(startPath).keys(),
      ])
      .then(([folders, files]) => folders.concat(files))
      .then(paths => _readdirDeepCache.set(key, relative ? paths.map(p => p.slice(l)) : paths))
    )
  }

  /**
   * Return the Stats of a file/symlink if it exists, otherwise returns null.
   * Rethrows errors that aren't related to file existance.
   */
  function lstat(path) {
    path = normalizePath(path)
    var cached = _lstatCache.get(path)
    if (cached !== undefined) return Promise.resolve(cached)
    else if (fs.supported && !isIDB(path)) {
      return fs.lstat(path).then(stats => _lstatCache.set(path, stats))
    } else {
      return _store.files.get({ path }).then(file => {
        if (file) {
          if (file.target) {
            return _lstatCache.set(path, new Stats({
              size: 1,
              mode: FileTypeModes.SYMLINK,
              mtimeMs: file.mtimeMs,
              ctimeMs: file.ctimeMs
            }))
          } else {
            return _lstatCache.set(path, new Stats({
              size: 1,
              mode: FileTypeModes.FILE,
              mtimeMs: file.mtimeMs,
              ctimeMs: file.ctimeMs
            }))
          }
        }
        else {
          return _store.folders.get({ path }).then(folder => {
            if (folder) {
              return _lstatCache.set(path, new Stats({
                size: 0,
                mode: FileTypeModes.DIRECTORY,
                mtimeMs: folder.mtimeMs,
                ctimeMs: folder.ctimeMs
              }))
            } else {
              return _lstatCache.set(path, null)
            }
          })
        }
      })
    }
  }

  /**
   * Reads the contents of a symlink if it exists, otherwise returns null.
   * Rethrows errors that aren't related to file existance.
   */
  function readlink(path) {
    path = normalizePath(path)
    if (fs.supported && !isIDB(path)) return Promise.resolve(fs.readlink(path))
    return _store.files.get({ path }).then(f => (f && f.target) || null)
  }

  /**
   * Write the contents of buffer to a symlink.
   */
  function writelink(filepath, buffer) {
    filepath = normalizePath(filepath)
    var target = buffer.toString('utf8')
    _readdirDeepCache.clear()
    _readdirCache.del(dirname(filepath))
    _lstatCache.del(filepath)
    if (fs.supported && !isIDB(filepath)) return fs.writelink(filepath, target)
    return write(filepath, '', { target, mode: FileType.SYMLINK })
      .then(({mode, mtimeMs}) => ({
        mode,
        type: 'symlink',
        target,
        size: 0,
        mtimeMs
      }))
  }

  /**
   * Generates a random ID.
   */
  function _id() {
    // From http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      var r = Math.random() * 16 | 0
      var v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }

  function _compareStrings(a, b) {
    // https://stackoverflow.com/a/40355107/2168416
    return -(a < b) || +(a > b)
  }

  /**
   * Remove any '.' in the path. For example: 'Path/.' -> 'Path'
   * @param {string} path
   */
  function normalizePath(path) {
    var cached = _normPathCache.get(path)
    if (cached) return cached
    else {
      if (path.indexOf('\u0000') >= 0) {
        throw new Error('Path must be a string without null bytes.')
      } else if (path === '') {
        throw new Error('Path must not be empty.')
      }
      return _normPathCache.set(
        path,
        path.split('/')
          .filter((part, i) => (part !== '' || i === 0) && part !== '.')
          .join('/')
      )
    }
  }

  function dirname(path) {
    var last = path.lastIndexOf('/')
    if (last === -1) return '.'
    if (last === 0) return '/'
    return path.slice(0, last)
  }

  function relativeTo(path, base) {
    return base ? path.slice(base.length + 1) : path
  }

  function childOf(path, base) {
    path = normalizePath(path)
    base = normalizePath(base)
    return path.startsWith(base + '/') || path === base
  }

  function basename(path) {
    var last = path.lastIndexOf('/')
    if (last === -1) return path
    return path.slice(last + 1)
  }

  function isIDB(path) {
    return path.startsWith('idb/')
  }

  function _mkdirs(paths) {
    var time = Date.now()
    var folders = paths.map(path => ({
      id: _id(),
      path,
      mtimeMs: time,
      ctimeMs: time
    }))
    return _store.folders.bulkAdd(folders)
  }

  function isArrayBuffer(value) {
    return value instanceof ArrayBuffer || (value && value.buffer instanceof ArrayBuffer && value.byteLength !== undefined)
  }
}

/**
 * Indicates the type of the given file. Applied to 'mode'.
 */
var FileType = {
  FILE: 0o100000,
  DIRECTORY: 0o40000,
  SYMLINK: 0o120000
}
var FileTypeModes = {
  FILE: 0o100644,
  DIRECTORY: 0o40000,
  SYMLINK: 0o120000
}

/**
 * Provides information about a particular entry in the file system.
 * @param args
 * @param args.size Size of the item in bytes. For directories/symlinks,
 *   this is normally the size of the struct that represents the item.
 * @param args.mode Unix-style file mode (e.g. 0o644)
 * @param args.atimeMs time of last access, in milliseconds since epoch
 * @param args.mtimeMs time of last modification, in milliseconds since epoch
 * @param args.ctimeMs time of last time file status was changed, in milliseconds since epoch
 */
function Stats({
  size,
  mode,
  atimeMs = null,
  mtimeMs,
  ctimeMs
}) {
  var currentTime = 0
  if (typeof (atimeMs) !== 'number') {
    atimeMs = currentTime = Date.now()
  }
  if (typeof (mtimeMs) !== 'number') {
    mtimeMs = currentTime = currentTime || Date.now()
  }
  if (typeof (ctimeMs) !== 'number') {
    ctimeMs = currentTime = currentTime || Date.now()
  }

  var self = this
  Object.assign(self, {
    size,
    atimeMs,
    ctimeMs,
    mtimeMs,
    isFile,
    isDirectory,
    isSymbolicLink,
    chmod,
    toBuffer,
    uid: 0,
    gid: 0,
    ino: 0,
    mode: normalizeMode(mode)
  })

  Object.defineProperties(self, {
    atime: {
      get: () => {
        return new Date(self.atimeMs)
      }
    },
    mtime: {
      get: () => {
        return new Date(self.mtimeMs)
      }
    },
    ctime: {
      get: () => {
        return new Date(self.ctimeMs)
      }
    }
  })

  function toBuffer() {
    var buffer = Buffer.alloc(32)
    buffer.writeUInt32LE(self.size, 0)
    buffer.writeUInt32LE(self.mode, 4)
    buffer.writeDoubleLE(self.atime.getTime(), 8)
    buffer.writeDoubleLE(self.mtime.getTime(), 16)
    buffer.writeDoubleLE(self.ctime.getTime(), 24)
    return buffer
  }

  /**
   * @return [Boolean] True if this item is a file.
   */
  function isFile() {
    return (self.mode & 0xF000) === FileType.FILE
  }

  /**
   * @return [Boolean] True if this item is a directory.
   */
  function isDirectory() {
    return (self.mode & 0xF000) === FileType.DIRECTORY
  }

  /**
   * @return [Boolean] True if this item is a symbolic link (only valid through lstat)
   */
  function isSymbolicLink() {
    return (self.mode & 0xF000) === FileType.SYMLINK
  }

  /**
   * Change the mode of the file. We use this helper function to prevent messing
   * up the type of the file, which is encoded in mode.
   */
  function chmod(mode) {
    this.mode = (self.mode & 0xF000) | mode
  }

  /**
   * From https://github.com/git/git/blob/master/Documentation/technical/index-format.txt
   *
   * 32-bit mode, split into (high to low bits)
   *
   *  4-bit object type
   *    valid values in binary are 1000 (regular file), 1010 (symbolic link)
   *    and 1110 (gitlink)
   *
   *  3-bit unused
   *
   *  9-bit unix permission. Only 0755 and 0644 are valid for regular files.
   *  Symbolic links and gitlinks have value 0 in this field.
   */
  function normalizeMode(mode) {
    // Note: BrowserFS will use -1 for 'unknown'
    // I need to make it non-negative for these bitshifts to work.
    var type = mode > 0 ? mode >> 12 : 0
    // If it isn't valid, assume it as a 'regular file'
    // 0100 = directory
    // 1000 = regular file
    // 1010 = symlink
    // 1110 = gitlink
    if (
      type !== 4 &&
      type !== 8 &&
      type !== 10 &&
      type !== 14
    ) {
      type = 8
    }
    var permissions = mode & 511
    // Is the file executable? then 755. Else 644.
    if (permissions & 73) {
      permissions = 493
    } else {
      permissions = 420
    }
    // If it's not a regular file, scrub all permissions
    if (type !== 8) permissions = 0
    return (type << 12) + permissions
  }
}

/**
 * Converts any buffer interface to an ArrayBuffer pointing to the same memory.
 * @param {Buffer|Uint8Array|ArrayBuffer} buf
 */
function castAsReadableArrayBuffer(buf) {
  if (buf instanceof ArrayBuffer) {
    return buf
  } else if (buf instanceof Uint8Array) {
    // Check if is a subarray
    if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
      return buf.buffer
    } else {
      // Return a copy of subarray
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)
    }
  } else if (Buffer.isBuffer(buf)) {
    return buf.buffer
  } else {
    throw new Error('Argument type not recognized: ' + (typeof buf))
  }
}
