define("esui/extension/Command",["require","underscore","../lib","../Extension","mini-event","../main"],function(require){function e(e){if(e=e||{},!e.events)e.events=["click"];else e.events=i.splitTokenList(e.events);n.apply(this,arguments)}var t=require("underscore"),i=require("../lib"),n=require("../Extension");return e.prototype.type="Command",e.prototype.handleCommand=function(e){for(var t=e.target,i=this.main&&this.main.parentNode;t&&t!==i;){if(1===t.nodeType&&(t.disabled!==!0||"click"!==e.type)){var n=t.getAttribute("data-command");if(n){var a=t.getAttribute("data-command-args"),o=require("mini-event").fromDOMEvent(e,"command",{name:n,triggerType:e.type,args:a});if(o=this.fire("command",o),o.isPropagationStopped())return}}t=t.parentNode}},e.prototype.activate=function(){for(var e=0;e<this.events.length;e++)this.target.helper.addDOMEvent(this.target.main,this.events[e],this.handleCommand);n.prototype.activate.apply(this,arguments)},e.prototype.inactivate=function(){for(var e=0;e<this.events.length;e++)this.target.helper.removeDOMEvent(this.target.main,this.events[e],this.handleCommand);n.prototype.inactivate.apply(this,arguments)},e.createDispatcher=function(e){var n=e;if(t.isArray(e)){n={};for(var a=0;a<e.length;a++){var o=e[a],r=o.triggerType?o.triggerType+":"+o.name:o.name;n[r]=o.handler}}return function(e){var t=n[e.triggerType+":"+e.name];if(!t)t=n[e.name];if(!t){var a="execute"+i.pascalize(e.name)+i.pascalize(e.triggerType);t=this[a]}if("function"!=typeof t){var a="execute"+i.pascalize(e.name);t=this[a]}if("function"!=typeof t)t=n[e.triggerType+":*"];if(!t)t=n["*"];if("function"==typeof t)t.apply(this,arguments)}},i.inherits(e,n),require("../main").registerExtension(e),e});