define("er/util",[],function(){var e=+new Date,t={};t.guid=function(){return"er"+e++},t.mix=function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];if(i){for(var n in i)if(i.hasOwnProperty(n))e[n]=i[n]}else;}return e};var i=Function.prototype.bind;t.bind=i?function(e){return i.apply(e,[].slice.call(arguments,1))}:function(e,t){var i=[].slice.call(arguments,2);return function(){var n=i.concat([].slice.call(arguments));return e.apply(t,n)}},t.noop=function(){};var n=!{toString:1}.propertyIsEnumerable("toString");t.inherits=function(e,t){var i=function(){};i.prototype=t.prototype;var a=new i,o=e.prototype;e.prototype=a;for(var r in o)a[r]=o[r];if(n){if(o.hasOwnProperty("toString"))a.toString=o.toString;if(o.hasOwnProperty("valueOf"))a.valueOf=o.valueOf}return e.prototype.constructor=e,e},t.parseJSON=function(e){if(!e)return void 0;if(window.JSON&&"function"==typeof JSON.parse)return JSON.parse(e);else return new Function("return ("+e+");")()};var a=/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g;return t.trim=function(e){return e.replace(a,"")},t.encodeHTML=function(e){return e+="",e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},t.getElement=function(e){if("string"==typeof e)e=document.getElementById(e);return e},t});