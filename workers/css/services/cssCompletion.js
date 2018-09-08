!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports","../parser/cssNodes","../parser/cssSymbolScope","./languageFacts","../utils/strings","vscode-languageserver-types","vscode-nls"],t)}(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var v=t("../parser/cssNodes"),o=t("../parser/cssSymbolScope"),x=t("./languageFacts"),P=t("../utils/strings"),F=t("vscode-languageserver-types"),l=t("vscode-nls").loadMessageBundle(),T=F.InsertTextFormat.Snippet,i=function(){function t(t){void 0===t&&(t=null),this.completionParticipants=[],this.valueTypes=[v.NodeType.Identifier,v.NodeType.Value,v.NodeType.StringLiteral,v.NodeType.URILiteral,v.NodeType.NumericValue,v.NodeType.HexColorValue,v.NodeType.VariableName,v.NodeType.Prio],this.variablePrefix=t}return t.prototype.getSymbolContext=function(){return this.symbolContext||(this.symbolContext=new o.Symbols(this.styleSheet)),this.symbolContext},t.prototype.setCompletionParticipants=function(t){this.completionParticipants=t||[]},t.prototype.doComplete=function(t,e,o){this.offset=t.offsetAt(e),this.position=e,this.currentWord=function(t,e){var o=e-1,i=t.getText();for(;0<=o&&-1===' \t\n\r":{[()]},*>+'.indexOf(i.charAt(o));)o--;return i.substring(o+1,e)}(t,this.offset),this.defaultReplaceRange=F.Range.create(F.Position.create(this.position.line,this.position.character-this.currentWord.length),this.position),this.textDocument=t,this.styleSheet=o;try{var i={isIncomplete:!1,items:[]};this.nodePath=v.getNodePath(this.styleSheet,this.offset);for(var n=this.nodePath.length-1;0<=n;n--){var r=this.nodePath[n];if(r instanceof v.Property)this.getCompletionsForDeclarationProperty(r.getParent(),i);else if(r instanceof v.Expression)this.getCompletionsForExpression(r,i);else if(r instanceof v.SimpleSelector){var s=r.findParent(v.NodeType.Ruleset);this.getCompletionsForSelector(s,s.isNested(),i)}else r instanceof v.FunctionArgument?this.getCompletionsForFunctionArgument(r,r.getParent(),i):r instanceof v.Declarations?this.getCompletionsForDeclarations(r,i):r instanceof v.VariableDeclaration?this.getCompletionsForVariableDeclaration(r,i):r instanceof v.RuleSet?this.getCompletionsForRuleSet(r,i):r instanceof v.Interpolation?this.getCompletionsForInterpolation(r,i):r instanceof v.FunctionDeclaration?this.getCompletionsForFunctionDeclaration(r,i):r instanceof v.MixinReference?this.getCompletionsForMixinReference(r,i):r instanceof v.Function?this.getCompletionsForFunctionArgument(null,r,i):r instanceof v.Supports?this.getCompletionsForSupports(r,i):r instanceof v.SupportsCondition&&this.getCompletionsForSupportsCondition(r,i);if(0<i.items.length)return this.finalize(i)}return this.getCompletionsForStylesheet(i),0===i.items.length&&this.variablePrefix&&0===this.currentWord.indexOf(this.variablePrefix)&&this.getVariableProposals(null,i),this.finalize(i)}finally{this.position=null,this.currentWord=null,this.textDocument=null,this.styleSheet=null,this.symbolContext=null,this.defaultReplaceRange=null,this.nodePath=null}},t.prototype.finalize=function(t){if(t.items.some(function(t){return!!t.sortText}))for(var e=0,o=t.items;e<o.length;e++){var i=o[e];i.sortText||(i.sortText="d")}return t},t.prototype.findInNodePath=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var o=this.nodePath.length-1;0<=o;o--){var i=this.nodePath[o];if(-1!==t.indexOf(i.type))return i}return null},t.prototype.getCompletionsForDeclarationProperty=function(t,e){return this.getPropertyProposals(t,e)},t.prototype.getPropertyProposals=function(t,e){var o=this,i=x.getProperties();for(var n in i)if(i.hasOwnProperty(n)){var r=i[n];if(r.browsers.onCodeComplete){var s=void 0,a=void 0;a=t?(s=this.getCompletionRange(t.getProperty()),r.name+(p(t.colonPosition)?"":": ")):(s=this.getCompletionRange(null),r.name+": ");var l={label:r.name,documentation:x.getEntryDescription(r),textEdit:F.TextEdit.replace(s,a),kind:F.CompletionItemKind.Property,command:{title:"Suggest",command:"editor.action.triggerSuggest"}};P.startsWith(r.name,"-")&&(l.sortText="x"),e.items.push(l)}}return this.completionParticipants.forEach(function(t){t.onCssProperty({propertyName:o.currentWord,range:o.defaultReplaceRange})}),e},t.prototype.getCompletionsForDeclarationValue=function(t,e){for(var o=this,i=t.getFullPropertyName(),n=x.getProperties()[i],r=t.getValue();r&&r.hasChildren();)r=r.findChildAtOffset(this.offset,!1);if(this.completionParticipants.forEach(function(t){t.onCssPropertyValue({propertyName:i,propertyValue:o.currentWord,range:o.getCompletionRange(r)})}),n){for(var s=0,a=n.restrictions;s<a.length;s++){switch(a[s]){case"color":this.getColorProposals(n,r,e);break;case"position":this.getPositionProposals(n,r,e);break;case"repeat":this.getRepeatStyleProposals(n,r,e);break;case"line-style":this.getLineStyleProposals(n,r,e);break;case"line-width":this.getLineWidthProposals(n,r,e);break;case"geometry-box":this.getGeometryBoxProposals(n,r,e);break;case"box":this.getBoxProposals(n,r,e);break;case"image":this.getImageProposals(n,r,e);break;case"timing-function":this.getTimingFunctionProposals(n,r,e);break;case"shape":this.getBasicShapeProposals(n,r,e)}}this.getValueEnumProposals(n,r,e),this.getCSSWideKeywordProposals(n,r,e),this.getUnitProposals(n,r,e)}else for(var l=0,p=function(t,i){var n=i.getFullPropertyName(),e=new c;function r(t){return(t instanceof v.Identifier||t instanceof v.NumericValue||t instanceof v.HexColorValue)&&e.add(t.getText()),!0}return t.accept(function(t){if(t instanceof v.Declaration&&t!==i&&(o=t.getFullPropertyName(),n===o)){var e=t.getValue();e&&e.accept(r)}var o;return!0}),e}(this.styleSheet,t).getEntries();l<p.length;l++){var u=p[l];e.items.push({label:u,textEdit:F.TextEdit.replace(this.getCompletionRange(r),u),kind:F.CompletionItemKind.Value})}return this.getVariableProposals(r,e),this.getTermProposals(n,r,e),e},t.prototype.getValueEnumProposals=function(t,e,o){if(t.values)for(var i=0,n=t.values;i<n.length;i++){var r=n[i];if(x.isCommonValue(r)){var s=r.name,a=void 0;if(P.endsWith(s,")")){var l=s.lastIndexOf("(");-1!==l&&(s=s.substr(0,l)+"($1)",a=T)}var p={label:r.name,documentation:x.getEntryDescription(r),textEdit:F.TextEdit.replace(this.getCompletionRange(e),s),kind:F.CompletionItemKind.Value,insertTextFormat:a};o.items.push(p)}}return o},t.prototype.getCSSWideKeywordProposals=function(t,e,o){for(var i in x.cssWideKeywords)o.items.push({label:i,documentation:x.cssWideKeywords[i],textEdit:F.TextEdit.replace(this.getCompletionRange(e),i),kind:F.CompletionItemKind.Value});return o},t.prototype.getCompletionsForInterpolation=function(t,e){return this.offset>=t.offset+2&&this.getVariableProposals(null,e),e},t.prototype.getVariableProposals=function(t,e){for(var o=0,i=this.getSymbolContext().findSymbolsAtOffset(this.offset,v.ReferenceType.Variable);o<i.length;o++){var n=i[o],r=P.startsWith(n.name,"--")?"var("+n.name+")":n.name,s={label:n.name,documentation:n.value?P.getLimitedString(n.value):n.value,textEdit:F.TextEdit.replace(this.getCompletionRange(t),r),kind:F.CompletionItemKind.Variable,sortText:"z"};if(n.node.type===v.NodeType.FunctionParameter){var a=n.node.getParent();a.type===v.NodeType.MixinDeclaration&&(s.detail=l("completion.argument","argument from '{0}'",a.getName()))}e.items.push(s)}return e},t.prototype.getVariableProposalsForCSSVarFunction=function(t){for(var e=this.getSymbolContext().findSymbolsAtOffset(this.offset,v.ReferenceType.Variable),o=0,i=e=e.filter(function(t){return P.startsWith(t.name,"--")});o<i.length;o++){var n=i[o];t.items.push({label:n.name,documentation:n.value?P.getLimitedString(n.value):n.value,textEdit:F.TextEdit.replace(this.getCompletionRange(null),n.name),kind:F.CompletionItemKind.Variable})}return t},t.prototype.getUnitProposals=function(t,e,o){var i="0";if(0<this.currentWord.length){var n=this.currentWord.match(/^-?\d[\.\d+]*/);n&&(i=n[0],o.isIncomplete=i.length===this.currentWord.length)}else 0===this.currentWord.length&&(o.isIncomplete=!0);e&&e.parent&&e.parent.type===v.NodeType.Term&&(e=e.getParent());for(var r=0,s=t.restrictions;r<s.length;r++){var a=s[r],l=x.units[a];if(l)for(var p=0,u=l;p<u.length;p++){var c=i+u[p];o.items.push({label:c,textEdit:F.TextEdit.replace(this.getCompletionRange(e),c),kind:F.CompletionItemKind.Unit})}}return o},t.prototype.getCompletionRange=function(t){if(t&&t.offset<=this.offset){var e=-1!==t.end?this.textDocument.positionAt(t.end):this.position;return F.Range.create(this.textDocument.positionAt(t.offset),e)}return this.defaultReplaceRange},t.prototype.getColorProposals=function(t,i,n){for(var e in x.colors)n.items.push({label:e,documentation:x.colors[e],textEdit:F.TextEdit.replace(this.getCompletionRange(i),e),kind:F.CompletionItemKind.Color});for(var e in x.colorKeywords)n.items.push({label:e,documentation:x.colorKeywords[e],textEdit:F.TextEdit.replace(this.getCompletionRange(i),e),kind:F.CompletionItemKind.Value});var o=new c;this.styleSheet.acceptVisitor(new f(o));for(var r=0,s=o.getEntries();r<s.length;r++){e=s[r];n.items.push({label:e,textEdit:F.TextEdit.replace(this.getCompletionRange(i),e),kind:F.CompletionItemKind.Color})}for(var a=function(t){var o=1,e=t.func.replace(/\[?\$(\w+)\]?/g,function(t,e){return"${"+o+++":"+e+"}"});n.items.push({label:t.func.substr(0,t.func.indexOf("(")),detail:t.func,documentation:t.desc,textEdit:F.TextEdit.replace(l.getCompletionRange(i),e),insertTextFormat:T,kind:F.CompletionItemKind.Function})},l=this,p=0,u=x.colorFunctions;p<u.length;p++){a(u[p])}return n},t.prototype.getPositionProposals=function(t,e,o){for(var i in x.positionKeywords)o.items.push({label:i,documentation:x.positionKeywords[i],textEdit:F.TextEdit.replace(this.getCompletionRange(e),i),kind:F.CompletionItemKind.Value});return o},t.prototype.getRepeatStyleProposals=function(t,e,o){for(var i in x.repeatStyleKeywords)o.items.push({label:i,documentation:x.repeatStyleKeywords[i],textEdit:F.TextEdit.replace(this.getCompletionRange(e),i),kind:F.CompletionItemKind.Value});return o},t.prototype.getLineStyleProposals=function(t,e,o){for(var i in x.lineStyleKeywords)o.items.push({label:i,documentation:x.lineStyleKeywords[i],textEdit:F.TextEdit.replace(this.getCompletionRange(e),i),kind:F.CompletionItemKind.Value});return o},t.prototype.getLineWidthProposals=function(t,e,o){for(var i=0,n=x.lineWidthKeywords;i<n.length;i++){var r=n[i];o.items.push({label:r,textEdit:F.TextEdit.replace(this.getCompletionRange(e),r),kind:F.CompletionItemKind.Value})}return o},t.prototype.getGeometryBoxProposals=function(t,e,o){for(var i in x.geometryBoxKeywords)o.items.push({label:i,documentation:x.geometryBoxKeywords[i],textEdit:F.TextEdit.replace(this.getCompletionRange(e),i),kind:F.CompletionItemKind.Value});return o},t.prototype.getBoxProposals=function(t,e,o){for(var i in x.boxKeywords)o.items.push({label:i,documentation:x.boxKeywords[i],textEdit:F.TextEdit.replace(this.getCompletionRange(e),i),kind:F.CompletionItemKind.Value});return o},t.prototype.getImageProposals=function(t,e,o){for(var i in x.imageFunctions){var n=b(i);o.items.push({label:i,documentation:x.imageFunctions[i],textEdit:F.TextEdit.replace(this.getCompletionRange(e),n),kind:F.CompletionItemKind.Function,insertTextFormat:i!==n?T:void 0})}return o},t.prototype.getTimingFunctionProposals=function(t,e,o){for(var i in x.transitionTimingFunctions){var n=b(i);o.items.push({label:i,documentation:x.transitionTimingFunctions[i],textEdit:F.TextEdit.replace(this.getCompletionRange(e),n),kind:F.CompletionItemKind.Function,insertTextFormat:i!==n?T:void 0})}return o},t.prototype.getBasicShapeProposals=function(t,e,o){for(var i in x.basicShapeFunctions){var n=b(i);o.items.push({label:i,documentation:x.basicShapeFunctions[i],textEdit:F.TextEdit.replace(this.getCompletionRange(e),n),kind:F.CompletionItemKind.Function,insertTextFormat:i!==n?T:void 0})}return o},t.prototype.getCompletionsForStylesheet=function(t){var e=this.styleSheet.findFirstChildBeforeOffset(this.offset);return e?e instanceof v.RuleSet?this.getCompletionsForRuleSet(e,t):e instanceof v.Supports?this.getCompletionsForSupports(e,t):t:this.getCompletionForTopLevel(t)},t.prototype.getCompletionForTopLevel=function(t){for(var e=0,o=x.getAtDirectives();e<o.length;e++){var i=o[e];0<i.browsers.count&&t.items.push({label:i.name,textEdit:F.TextEdit.replace(this.getCompletionRange(null),i.name),documentation:x.getEntryDescription(i),kind:F.CompletionItemKind.Keyword})}return this.getCompletionsForSelector(null,!1,t),t},t.prototype.getCompletionsForRuleSet=function(t,e){var o=t.getDeclarations();return o&&o.endsWith("}")&&this.offset>=o.end?this.getCompletionForTopLevel(e):!o||this.offset<=o.offset?this.getCompletionsForSelector(t,t.isNested(),e):(t.findParent(v.NodeType.Ruleset),this.getCompletionsForDeclarations(t.getDeclarations(),e))},t.prototype.getCompletionsForSelector=function(t,e,o){var i=this,n=this.findInNodePath(v.NodeType.PseudoSelector,v.NodeType.IdentifierSelector,v.NodeType.ClassSelector,v.NodeType.ElementNameSelector);!n&&0<this.offset-this.currentWord.length&&":"===this.textDocument.getText()[this.offset-this.currentWord.length-1]&&(this.currentWord=":"+this.currentWord,this.defaultReplaceRange=F.Range.create(F.Position.create(this.position.line,this.position.character-this.currentWord.length),this.position));for(var r=0,s=x.getPseudoClasses();r<s.length;r++){if((m=s[r]).browsers.onCodeComplete){var a=b(m.name),l={label:m.name,textEdit:F.TextEdit.replace(this.getCompletionRange(n),a),documentation:x.getEntryDescription(m),kind:F.CompletionItemKind.Function,insertTextFormat:m.name!==a?T:void 0};P.startsWith(m.name,":-")&&(l.sortText="x"),o.items.push(l)}}for(var p=0,u=x.getPseudoElements();p<u.length;p++){if((m=u[p]).browsers.onCodeComplete){a=b(m.name),l={label:m.name,textEdit:F.TextEdit.replace(this.getCompletionRange(n),a),documentation:x.getEntryDescription(m),kind:F.CompletionItemKind.Function,insertTextFormat:m.name!==a?T:void 0};P.startsWith(m.name,"::-")&&(l.sortText="x"),o.items.push(l)}}if(!e){for(var c=0,f=x.html5Tags;c<f.length;c++){var m=f[c];o.items.push({label:m,textEdit:F.TextEdit.replace(this.getCompletionRange(n),m),kind:F.CompletionItemKind.Keyword})}for(var d=0,h=x.svgElements;d<h.length;d++){m=h[d];o.items.push({label:m,textEdit:F.TextEdit.replace(this.getCompletionRange(n),m),kind:F.CompletionItemKind.Keyword})}}var g={};g[this.currentWord]=!0;var y=this.styleSheet.getTextProvider();if(this.styleSheet.accept(function(t){if(t.type===v.NodeType.SimpleSelector&&0<t.length){var e=y(t.offset,t.length);return"."!==e.charAt(0)||g[e]||(g[e]=!0,o.items.push({label:e,textEdit:F.TextEdit.replace(i.getCompletionRange(n),e),kind:F.CompletionItemKind.Keyword})),!1}return!0}),t&&t.isNested()){var C=t.getSelectors().findFirstChildBeforeOffset(this.offset);C&&0===t.getSelectors().getChildren().indexOf(C)&&this.getPropertyProposals(null,o)}return o},t.prototype.getCompletionsForDeclarations=function(t,e){if(!t||this.offset===t.offset)return e;var o=t.findFirstChildBeforeOffset(this.offset);if(!o)return this.getCompletionsForDeclarationProperty(null,e);if(o instanceof v.AbstractDeclaration){var i=o;if(!p(i.colonPosition||this.offset<=i.colonPosition))return this.getCompletionsForDeclarationProperty(i,e);if(p(i.semicolonPosition)&&i.semicolonPosition<this.offset)return this.offset===i.semicolonPosition+1?e:this.getCompletionsForDeclarationProperty(null,e);if(i instanceof v.Declaration)return this.getCompletionsForDeclarationValue(i,e)}return e},t.prototype.getCompletionsForVariableDeclaration=function(t,e){return this.offset>t.colonPosition&&this.getVariableProposals(t.getValue(),e),e},t.prototype.getCompletionsForExpression=function(t,e){if(t.getParent()instanceof v.FunctionArgument)return this.getCompletionsForFunctionArgument(t.getParent(),t.getParent().getParent(),e),e;var o=t.findParent(v.NodeType.Declaration);if(!o)return this.getTermProposals(null,null,e),e;var i=t.findChildAtOffset(this.offset,!0);return i?i instanceof v.NumericValue||i instanceof v.Identifier?this.getCompletionsForDeclarationValue(o,e):e:this.getCompletionsForDeclarationValue(o,e)},t.prototype.getCompletionsForFunctionArgument=function(t,e,o){return"var"===e.getIdentifier().getText()&&(e.getArguments().hasChildren()&&e.getArguments().getChild(0)!==t||this.getVariableProposalsForCSSVarFunction(o)),o},t.prototype.getCompletionsForFunctionDeclaration=function(t,e){var o=t.getDeclarations();return o&&this.offset>o.offset&&this.offset<o.end&&this.getTermProposals(null,null,e),e},t.prototype.getCompletionsForMixinReference=function(t,e){for(var o=0,i=this.getSymbolContext().findSymbolsAtOffset(this.offset,v.ReferenceType.Mixin);o<i.length;o++){var n=i[o];n.node instanceof v.MixinDeclaration&&e.items.push(this.makeTermProposal(n,n.node.getParameters(),null))}return e},t.prototype.getTermProposals=function(t,e,o){for(var i=0,n=this.getSymbolContext().findSymbolsAtOffset(this.offset,v.ReferenceType.Function);i<n.length;i++){var r=n[i];r.node instanceof v.FunctionDeclaration&&o.items.push(this.makeTermProposal(r,r.node.getParameters(),e))}return o},t.prototype.makeTermProposal=function(t,e,o){t.node;var i=e.getChildren().map(function(t){return t instanceof v.FunctionParameter?t.getName():t.getText()}),n=t.name+"("+i.map(function(t,e){return"${"+(e+1)+":"+t+"}"}).join(", ")+")";return{label:t.name,detail:t.name+"("+i.join(", ")+")",textEdit:F.TextEdit.replace(this.getCompletionRange(o),n),insertTextFormat:T,kind:F.CompletionItemKind.Function,sortText:"z"}},t.prototype.getCompletionsForSupportsCondition=function(t,e){var o=t.findFirstChildBeforeOffset(this.offset);if(o){if(o instanceof v.Declaration)return p(o.colonPosition||this.offset<=o.colonPosition)?this.getCompletionsForDeclarationValue(o,e):this.getCompletionsForDeclarationProperty(o,e);if(o instanceof v.SupportsCondition)return this.getCompletionsForSupportsCondition(o,e)}return p(t.lParent)&&this.offset>t.lParent&&(!p(t.rParent)||this.offset<=t.rParent)?this.getCompletionsForDeclarationProperty(null,e):e},t.prototype.getCompletionsForSupports=function(t,e){var o=t.getDeclarations();if(!o||this.offset<=o.offset){var i=t.findFirstChildBeforeOffset(this.offset);return i instanceof v.SupportsCondition?this.getCompletionsForSupportsCondition(i,e):e}return this.getCompletionForTopLevel(e)},t}();e.CSSCompletion=i;var c=function(){function t(){this.entries={}}return t.prototype.add=function(t){this.entries[t]=!0},t.prototype.getEntries=function(){return Object.keys(this.entries)},t}();function b(t){return t.replace(/\(\)$/,"($1)")}var f=function(){function t(t){this.entries=t}return t.prototype.visitNode=function(t){return(t instanceof v.HexColorValue||t instanceof v.Function&&x.isColorConstructor(t))&&this.entries.add(t.getText()),!0},t}();function p(t){return void 0!==t}});