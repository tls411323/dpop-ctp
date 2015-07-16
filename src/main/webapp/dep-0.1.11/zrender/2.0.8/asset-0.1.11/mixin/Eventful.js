define("zrender/mixin/Eventful",["require"],function(){var e=function(){this._handlers={}};return e.prototype.one=function(e,t,i){var n=this._handlers;if(!t||!e)return this;if(!n[e])n[e]=[];return n[e].push({h:t,one:!0,ctx:i||this}),this},e.prototype.bind=function(e,t,i){var n=this._handlers;if(!t||!e)return this;if(!n[e])n[e]=[];return n[e].push({h:t,one:!1,ctx:i||this}),this},e.prototype.unbind=function(e,t){var i=this._handlers;if(!e)return this._handlers={},this;if(t){if(i[e]){for(var n=[],a=0,r=i[e].length;r>a;a++)if(i[e][a].h!=t)n.push(i[e][a]);i[e]=n}if(i[e]&&0===i[e].length)delete i[e]}else delete i[e];return this},e.prototype.dispatch=function(e){if(this._handlers[e]){var t=arguments,i=t.length;if(i>3)t=Array.prototype.slice.call(t,1);for(var n=this._handlers[e],a=n.length,r=0;a>r;){switch(i){case 1:n[r].h.call(n[r].ctx);break;case 2:n[r].h.call(n[r].ctx,t[1]);break;case 3:n[r].h.call(n[r].ctx,t[1],t[2]);break;default:n[r].h.apply(n[r].ctx,t)}if(n[r].one)n.splice(r,1),a--;else r++}}return this},e.prototype.dispatchWithContext=function(e){if(this._handlers[e]){var t=arguments,i=t.length;if(i>4)t=Array.prototype.slice.call(t,1,t.length-1);for(var n=t[t.length-1],a=this._handlers[e],r=a.length,o=0;r>o;){switch(i){case 1:a[o].h.call(n);break;case 2:a[o].h.call(n,t[1]);break;case 3:a[o].h.call(n,t[1],t[2]);break;default:a[o].h.apply(n,t)}if(a[o].one)a.splice(o,1),r--;else o++}}return this},e});