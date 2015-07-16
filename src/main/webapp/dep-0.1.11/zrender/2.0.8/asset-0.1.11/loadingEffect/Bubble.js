define("zrender/loadingEffect/Bubble",["require","./Base","../tool/util","../tool/color","../shape/Circle"],function(require){function e(e){t.call(this,e)}var t=require("./Base"),i=require("../tool/util"),n=require("../tool/color"),a=require("../shape/Circle");return i.inherits(e,t),e.prototype._start=function(e,t){for(var r=i.merge(this.options,{textStyle:{color:"#888"},backgroundColor:"rgba(250, 250, 250, 0.8)",effect:{n:50,lineWidth:2,brushType:"stroke",color:"random",timeInterval:100}}),o=this.createTextShape(r.textStyle),s=this.createBackgroundShape(r.backgroundColor),l=r.effect,h=l.n,d=l.brushType,u=l.lineWidth,c=[],p=this.canvasWidth,m=this.canvasHeight,f=0;h>f;f++){var g="random"==l.color?n.alpha(n.random(),.3):l.color;c[f]=new a({highlightStyle:{x:Math.ceil(Math.random()*p),y:Math.ceil(Math.random()*m),r:Math.ceil(40*Math.random()),brushType:d,color:g,strokeColor:g,lineWidth:u},animationY:Math.ceil(20*Math.random())})}return setInterval(function(){e(s);for(var i=0;h>i;i++){var n=c[i].highlightStyle;if(n.y-c[i].animationY+n.r<=0)c[i].highlightStyle.y=m+n.r,c[i].highlightStyle.x=Math.ceil(Math.random()*p);c[i].highlightStyle.y-=c[i].animationY,e(c[i])}e(o),t()},l.timeInterval)},e});