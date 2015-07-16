define("echarts/util/ecEffect",["require","../util/ecData","zrender/shape/Circle","zrender/shape/Image","zrender/tool/curve","../util/shape/Icon","../util/shape/Symbol","zrender/shape/ShapeBundle","zrender/shape/Polyline","zrender/tool/vector","zrender/tool/env"],function(require){function t(t,e,i,s){var a,r=i.effect,l=r.color||i.style.strokeColor||i.style.color,d=r.shadowColor||l,p=r.scaleSize,c=r.bounceDistance,u="undefined"!=typeof r.shadowBlur?r.shadowBlur:p;if("image"!==i.type){if(a=new h({zlevel:s,style:{brushType:"stroke",iconType:"droplet"!=i.style.iconType?i.style.iconType:"circle",x:u+1,y:u+1,n:i.style.n,width:i.style._width*p,height:i.style._height*p,lineWidth:1,strokeColor:l,shadowColor:d,shadowBlur:u},draggable:!1,hoverable:!1}),"pin"==i.style.iconType)a.style.y+=a.style.height/2*1.5;if(g)a.style.image=t.shapeToImage(a,a.style.width+2*u+2,a.style.height+2*u+2).style.image,a=new n({zlevel:a.zlevel,style:a.style,draggable:!1,hoverable:!1})}else a=new n({zlevel:s,style:i.style,draggable:!1,hoverable:!1});o.clone(i,a),a.position=i.position,e.push(a),t.addShape(a);var f="image"!==i.type?window.devicePixelRatio||1:1,m=(a.style.width/f-i.style._width)/2;if(a.style.x=i.style._x-m,a.style.y=i.style._y-m,"pin"==i.style.iconType)a.style.y-=i.style.height/2*1.5;var _=100*(r.period+10*Math.random());t.modShape(i.id,{invisible:!0});var y=a.style.x+a.style.width/2/f,x=a.style.y+a.style.height/2/f;if("scale"===r.type)t.modShape(a.id,{scale:[.1,.1,y,x]}),t.animate(a.id,"",r.loop).when(_,{scale:[1,1,y,x]}).done(function(){i.effect.show=!1,t.delShape(a.id)}).start();else t.animate(a.id,"style",r.loop).when(_,{y:a.style.y-c}).when(2*_,{y:a.style.y}).done(function(){i.effect.show=!1,t.delShape(a.id)}).start()}function e(t,e,i,s){var o=i.effect,a=o.color||i.style.strokeColor||i.style.color,n=o.scaleSize,r=o.shadowColor||a,h="undefined"!=typeof o.shadowBlur?o.shadowBlur:2*n,d=window.devicePixelRatio||1,p=new l({zlevel:s,position:i.position,scale:i.scale,style:{pointList:i.style.pointList,iconType:i.style.iconType,color:a,strokeColor:a,shadowColor:r,shadowBlur:h*d,random:!0,brushType:"fill",lineWidth:1,size:i.style.size},draggable:!1,hoverable:!1});e.push(p),t.addShape(p),t.modShape(i.id,{invisible:!0});for(var c=Math.round(100*o.period),g={},u={},f=0;20>f;f++)p.style["randomMap"+f]=0,g={},g["randomMap"+f]=100,u={},u["randomMap"+f]=0,p.style["randomMap"+f]=100*Math.random(),t.animate(p.id,"style",!0).when(c,g).when(2*c,u).when(3*c,g).when(4*c,g).delay(Math.random()*c*f).start()}function i(t,e,i,s,n){var h=i.effect,l=i.style,d=h.color||l.strokeColor||l.color,u=h.shadowColor||l.strokeColor||d,f=l.lineWidth*h.scaleSize,m="undefined"!=typeof h.shadowBlur?h.shadowBlur:f,_=new a({zlevel:s,style:{x:m,y:m,r:f,color:d,shadowColor:u,shadowBlur:m},hoverable:!1}),y=0;if(g&&!n){var s=_.zlevel;_=t.shapeToImage(_,2*(f+m),2*(f+m)),_.zlevel=s,_.hoverable=!1,y=m}if(!n)o.clone(i,_),_.position=i.position,e.push(_),t.addShape(_);var x=function(){if(!n)i.effect.show=!1,t.delShape(_.id);_.effectAnimator=null};if(i instanceof p){for(var v=[0],b=0,S=l.pointList,z=l.controlPointList,T=1;T<S.length;T++){if(z){var C=z[2*(T-1)],L=z[2*(T-1)+1];b+=c.dist(S[T-1],C)+c.dist(C,L)+c.dist(L,S[T])}else b+=c.dist(S[T-1],S[T]);v.push(b)}for(var w={p:0},M=t.animation.animate(w,{loop:h.loop}),T=0;T<v.length;T++)M.when(v[T]*h.period,{p:T});M.during(function(){var e,i,s=Math.floor(w.p);if(s==S.length-1)e=S[s][0],i=S[s][1];else{var o=w.p-s,a=S[s],h=S[s+1];if(z){var l=z[2*s],d=z[2*s+1];e=r.cubicAt(a[0],l[0],d[0],h[0],o),i=r.cubicAt(a[1],l[1],d[1],h[1],o)}else e=(h[0]-a[0])*o+a[0],i=(h[1]-a[1])*o+a[1]}if(_.style.x=e,_.style.y=i,!n)t.modShape(_)}).done(x).start(),M.duration=b*h.period,_.effectAnimator=M}else{var A=l.xStart-y,E=l.yStart-y,k=l.xEnd-y,O=l.yEnd-y;_.style.x=A,_.style.y=E;var I=(k-A)*(k-A)+(O-E)*(O-E),R=Math.round(Math.sqrt(Math.round(I*h.period*h.period)));if(i.style.curveness>0){var P=l.cpX1-y,N=l.cpY1-y;_.effectAnimator=t.animation.animate(_,{loop:h.loop}).when(R,{p:1}).during(function(e,i){if(_.style.x=r.quadraticAt(A,P,k,i),_.style.y=r.quadraticAt(E,N,O,i),!n)t.modShape(_)}).done(x).start()}else _.effectAnimator=t.animation.animate(_.style,{loop:h.loop}).when(R,{x:k,y:O}).during(function(){if(!n)t.modShape(_)}).done(x).start();_.effectAnimator.duration=R}return _}function s(t,e,s,o){var a=new d({style:{shapeList:[]},zlevel:o,hoverable:!1}),n=s.style.shapeList,r=s.effect;a.position=s.position;for(var h=0,l=[],p=0;p<n.length;p++){n[p].effect=r;var c=i(t,null,n[p],o,!0),g=c.effectAnimator;if(a.style.shapeList.push(c),g.duration>h)h=g.duration;if(0===p)a.style.color=c.style.color,a.style.shadowBlur=c.style.shadowBlur,a.style.shadowColor=c.style.shadowColor;l.push(g)}e.push(a),t.addShape(a);var u=function(){for(var t=0;t<l.length;t++)l[t].stop()};if(h){a.__dummy=0;var f=t.animate(a.id,"",r.loop).when(h,{__dummy:1}).during(function(){t.modShape(a)}).done(function(){s.effect.show=!1,t.delShape(a.id)}).start(),m=f.stop;f.stop=function(){u(),m.call(this)}}}var o=require("../util/ecData"),a=require("zrender/shape/Circle"),n=require("zrender/shape/Image"),r=require("zrender/tool/curve"),h=require("../util/shape/Icon"),l=require("../util/shape/Symbol"),d=require("zrender/shape/ShapeBundle"),p=require("zrender/shape/Polyline"),c=require("zrender/tool/vector"),g=require("zrender/tool/env").canvasSupported;return{point:t,largePoint:e,line:i,largeLine:s}});