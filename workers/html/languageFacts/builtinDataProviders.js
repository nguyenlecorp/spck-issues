!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","./data/html5"],e)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("./data/html5");t.builtinDataProviders=[o.getHTML5DataProvider()];var r=[];t.getAllDataProviders=function(){return t.builtinDataProviders.concat(r)},t.handleCustomDataProviders=function(e){e.forEach((function(e){r.push(e)}))}}));