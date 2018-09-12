var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../parser/cssNodes","../parser/cssScanner"],e)}(function(e,t){"use strict";function r(e,t){for(var r=new l,i=0,o=e.getChildren();i<o.length;i++){var s=o[i];switch(s.type){case a.NodeType.SelectorCombinator:if(t){var c=s.getText().split("&");if(1===c.length){r.addAttr("name",c[0]);break}r=t.cloneWithParent(),c[0]&&r.findRoot().prepend(c[0]);for(var h=1;h<c.length;h++){if(h>1){var d=t.cloneWithParent();r.addChild(d.findRoot()),r=d}r.append(c[h])}}break;case a.NodeType.SelectorPlaceholder:if("@at-root"===s.getText())return r;case a.NodeType.ElementNameSelector:var p=s.getText();r.addAttr("name","*"===p?"element":n(p));break;case a.NodeType.ClassSelector:r.addAttr("class",n(s.getText().substring(1)));break;case a.NodeType.IdentifierSelector:r.addAttr("id",n(s.getText().substring(1)));break;case a.NodeType.MixinDeclaration:r.addAttr("class",s.getName());break;case a.NodeType.PseudoSelector:r.addAttr(n(s.getText()),"");break;case a.NodeType.AttributeSelector:var f=s.getExpression();if(f){var v=void 0;if(f.getRight())switch(n(f.getOperator().getText())){case"|=":v=u.remove(n(f.getRight().getText()))+"-…";break;case"^=":v=u.remove(n(f.getRight().getText()))+"…";break;case"$=":v="…"+u.remove(n(f.getRight().getText()));break;case"~=":v=" … "+u.remove(n(f.getRight().getText()))+" … ";break;case"*=":v="…"+u.remove(n(f.getRight().getText()))+"…";break;default:v=u.remove(n(f.getRight().getText()))}r.addAttr(n(f.getLeft().getText()),v)}}}return r}function n(e){var t=new s.Scanner;t.setSource(e);var r=t.scanUnquotedString();return r?r.text:e}function i(e){switch(e.type){case a.NodeType.MixinDeclaration:case a.NodeType.Stylesheet:return!0}return!1}function o(e){if(e.matches("@at-root"))return null;var t=new c,r=[];if(e.getParent()instanceof a.RuleSet)for(var n=e.getParent().getParent();n&&!i(n);){if(n instanceof a.RuleSet){if(n.getSelectors().matches("@at-root"))break;r.push(n)}n=n.getParent()}for(var o=new p(t),s=r.length-1;s>=0;s--){var l=r[s].getSelectors().getChild(0);l&&o.processSelector(l)}return o.processSelector(e),t}Object.defineProperty(t,"__esModule",{value:!0});var a=e("../parser/cssNodes"),s=e("../parser/cssScanner"),l=function(){function e(){}return e.prototype.findAttribute=function(e){if(this.attributes)for(var t=0,r=this.attributes;t<r.length;t++){var n=r[t];if(n.name===e)return n.value}return null},e.prototype.addChild=function(t){t instanceof e&&(t.parent=this),this.children||(this.children=[]),this.children.push(t)},e.prototype.append=function(e){if(this.attributes){var t=this.attributes[this.attributes.length-1];t.value=t.value+e}},e.prototype.prepend=function(e){if(this.attributes){var t=this.attributes[0];t.value=e+t.value}},e.prototype.findRoot=function(){for(var e=this;e.parent&&!(e.parent instanceof c);)e=e.parent;return e},e.prototype.removeChild=function(e){if(this.children){var t=this.children.indexOf(e);if(-1!==t)return this.children.splice(t,1),!0}return!1},e.prototype.addAttr=function(e,t){this.attributes||(this.attributes=[]);for(var r=0,n=this.attributes;r<n.length;r++){var i=n[r];if(i.name===e)return void(i.value+=" "+t)}this.attributes.push({name:e,value:t})},e.prototype.clone=function(t){void 0===t&&(t=!0);var r=new e;if(this.attributes){r.attributes=[];for(var n=0,i=this.attributes;n<i.length;n++){var o=i[n];r.addAttr(o.name,o.value)}}if(t&&this.children){r.children=[];for(var a=0;a<this.children.length;a++)r.addChild(this.children[a].clone())}return r},e.prototype.cloneWithParent=function(){var e=this.clone(!1);return!this.parent||this.parent instanceof c||this.parent.cloneWithParent().addChild(e),e},e}();t.Element=l;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}(l);t.RootElement=c;var h=function(e){function t(t){var r=e.call(this)||this;return r.addAttr("name",t),r}return __extends(t,e),t}(l);t.LabelElement=h;var u,d=function(){function e(e){this.quote=e}return e.prototype.print=function(e){return this.result=[],e instanceof c?this.doPrint(e.children,0):this.doPrint([e],0),[{language:"html",value:this.result.join("\n")}]},e.prototype.doPrint=function(e,t){for(var r=0,n=e;r<n.length;r++){var i=n[r];this.doPrintElement(i,t),i.children&&this.doPrint(i.children,t+1)}},e.prototype.writeLine=function(e,t){var r=new Array(e+1).join("  ");this.result.push(r+t)},e.prototype.doPrintElement=function(e,t){var r=e.findAttribute("name");if(e instanceof h||"…"===r)this.writeLine(t,r);else{var n=["<"];if(r?n.push(r):n.push("element"),e.attributes)for(var i=0,o=e.attributes;i<o.length;i++){var a=o[i];if("name"!==a.name){n.push(" "),n.push(a.name);var s=a.value;s&&(n.push("="),n.push(u.ensure(s,this.quote)))}}n.push(">"),this.writeLine(t,n.join(""))}},e}();!function(e){function t(e){var t=e.match(/^['"](.*)["']$/);return t?t[1]:e}e.ensure=function(e,r){return r+t(e)+r},e.remove=t}(u||(u={})),t.toElement=r,t.selectorToMarkedString=function(e){var t=o(e);return new d('"').print(t)},t.simpleSelectorToMarkedString=function(e){var t=r(e);return new d('"').print(t)};var p=function(){function e(e){this.prev=null,this.element=e}return e.prototype.processSelector=function(e){var t=null;if(!(this.element instanceof c)&&e.getChildren().some(function(e){return e.hasChildren()&&e.getChild(0).type===a.NodeType.SelectorCombinator})){var n=this.element.findRoot();n.parent instanceof c&&(t=this.element,this.element=n.parent,this.element.removeChild(n),this.prev=null)}for(var i=0,o=e.getChildren();i<o.length;i++){var s=o[i];if(s instanceof a.SimpleSelector){if(this.prev instanceof a.SimpleSelector){var l=new h("…");this.element.addChild(l),this.element=l}else this.prev&&(this.prev.matches("+")||this.prev.matches("~"))&&(this.element=this.element.parent);this.prev&&this.prev.matches("~")&&(this.element.addChild(r(s)),this.element.addChild(new h("⋮")));var u=r(s,t),d=u.findRoot();this.element.addChild(d),this.element=u}(s instanceof a.SimpleSelector||s.type===a.NodeType.SelectorCombinatorParent||s.type===a.NodeType.SelectorCombinatorShadowPiercingDescendant||s.type===a.NodeType.SelectorCombinatorSibling||s.type===a.NodeType.SelectorCombinatorAllSiblings)&&(this.prev=s)}},e}();t.selectorToElement=o});