!function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define(["require","exports","../parser/htmlScanner","vscode-languageserver-types"],e)}(function(e,n){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";function t(e,n,t){var r=e.offsetAt(n),s=t.findNodeAt(r);if(!s.tag)return[];var d=[],c=a(i.TokenType.StartTag,e,s.start),f="number"==typeof s.endTagStart&&a(i.TokenType.EndTag,e,s.endTagStart);return(c&&o(c,n)||f&&o(f,n))&&(c&&d.push({kind:u.DocumentHighlightKind.Read,range:c}),f&&d.push({kind:u.DocumentHighlightKind.Read,range:f})),d}function r(e,n){return e.line<n.line||e.line===n.line&&e.character<=n.character}function o(e,n){return r(e.start,n)&&r(n,e.end)}function a(e,n,t){for(var r=i.createScanner(n.getText(),t),o=r.scan();o!==i.TokenType.EOS&&o!==e;)o=r.scan();return o!==i.TokenType.EOS?{start:n.positionAt(r.getTokenOffset()),end:n.positionAt(r.getTokenEnd())}:null}Object.defineProperty(n,"__esModule",{value:!0});var i=e("../parser/htmlScanner"),u=e("vscode-languageserver-types");n.findDocumentHighlights=t});