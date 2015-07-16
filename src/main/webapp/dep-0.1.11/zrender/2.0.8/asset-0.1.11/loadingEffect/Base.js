define("zrender/loadingEffect/Base",["require","../tool/util","../shape/Text","../shape/Rectangle"],function(require){function e(e){this.setOptions(e)}var t=require("../tool/util"),i=require("../shape/Text"),n=require("../shape/Rectangle"),a="Loading...",r="normal 16px Arial";return e.prototype.createTextShape=function(e){return new i({highlightStyle:t.merge({x:this.canvasWidth/2,y:this.canvasHeight/2,text:a,textAlign:"center",textBaseline:"middle",textFont:r,color:"#333",brushType:"fill"},e,!0)})},e.prototype.createBackgroundShape=function(e){return new n({highlightStyle:{x:0,y:0,width:this.canvasWidth,height:this.canvasHeight,brushType:"fill",color:e}})},e.prototype.start=function(e){function t(t){e.storage.addHover(t)}function i(){e.refreshHover()}this.canvasWidth=e._width,this.canvasHeight=e._height,this.loadingTimer=this._start(t,i)},e.prototype._start=function(){return setInterval(function(){},1e4)},e.prototype.stop=function(){clearInterval(this.loadingTimer)},e.prototype.setOptions=function(e){this.options=e||{}},e.prototype.adjust=function(e,t){if(e<=t[0])e=t[0];else if(e>=t[1])e=t[1];return e},e.prototype.getLocation=function(e,t,i){var n=null!=e.x?e.x:"center";switch(n){case"center":n=Math.floor((this.canvasWidth-t)/2);break;case"left":n=0;break;case"right":n=this.canvasWidth-t}var a=null!=e.y?e.y:"center";switch(a){case"center":a=Math.floor((this.canvasHeight-i)/2);break;case"top":a=0;break;case"bottom":a=this.canvasHeight-i}return{x:n,y:a,width:t,height:i}},e});