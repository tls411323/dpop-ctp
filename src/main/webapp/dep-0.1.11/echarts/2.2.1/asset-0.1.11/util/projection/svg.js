define("echarts/util/projection/svg",["require","zrender/shape/Path"],function(require){function e(e){return parseFloat(e||0)}function t(t){for(var i=t.firstChild;"svg"!=i.nodeName.toLowerCase()||1!=i.nodeType;)i=i.nextSibling;var n=e(i.getAttribute("x")),a=e(i.getAttribute("y")),o=e(i.getAttribute("width")),s=e(i.getAttribute("height"));return{left:n,top:a,width:o,height:s}}function i(e,t){function i(e){var t=e.tagName;if(h[t]){var o=h[t](e,n);if(o)o.scale=n,o.properties={name:e.getAttribute("name")||""},o.id=e.id,s(o,e),a.push(o)}for(var l=e.childNodes,r=0,V=l.length;V>r;r++)i(l[r])}var n=[t.scale.x,t.scale.y],a=[];return i(e),a}function n(e,t){var i=t instanceof Array?[1*t[0],1*t[1]]:[1*t.x,1*t.y];return[i[0]/e.scale.x,i[1]/e.scale.y]}function a(e,t){var i=t instanceof Array?[1*t[0],1*t[1]]:[1*t.x,1*t.y];return[i[0]*e.scale.x,i[1]*e.scale.y]}function o(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function s(e,t){var i=t.getAttribute("fill"),n=t.getAttribute("stroke"),a=t.getAttribute("stroke-width"),o=t.getAttribute("opacity");if(i&&"none"!=i)if(e.color=i,n)e.brushType="both",e.strokeColor=n;else e.brushType="fill";else if(n&&"none"!=n)e.strokeColor=n,e.brushType="stroke";if(a&&"none"!=a)e.lineWidth=parseFloat(a);if(o&&"none"!=o)e.opacity=parseFloat(o)}function l(e){for(var t=o(e).replace(/,/g," ").split(/\s+/),i=[],n=0;n<t.length;){var a=parseFloat(t[n++]),s=parseFloat(t[n++]);i.push([a,s])}return i}var r=require("zrender/shape/Path"),h={path:function(e,t){var i=e.getAttribute("d"),n=r.prototype.getRect({path:i});return{shapeType:"path",path:i,cp:[(n.x+n.width/2)*t[0],(n.y+n.height/2)*t[1]]}},rect:function(t,i){var n=e(t.getAttribute("x")),a=e(t.getAttribute("y")),o=e(t.getAttribute("width")),s=e(t.getAttribute("height"));return{shapeType:"rectangle",x:n,y:a,width:o,height:s,cp:[(n+o/2)*i[0],(a+s/2)*i[1]]}},line:function(t,i){var n=e(t.getAttribute("x1")),a=e(t.getAttribute("y1")),o=e(t.getAttribute("x2")),s=e(t.getAttribute("y2"));return{shapeType:"line",xStart:n,yStart:a,xEnd:o,yEnd:s,cp:[.5*(n+o)*i[0],.5*(a+s)*i[1]]}},circle:function(t,i){var n=e(t.getAttribute("cx")),a=e(t.getAttribute("cy")),o=e(t.getAttribute("r"));return{shapeType:"circle",x:n,y:a,r:o,cp:[n*i[0],a*i[1]]}},ellipse:function(e,t){var i=parseFloat(e.getAttribute("cx")||0),n=parseFloat(e.getAttribute("cy")||0),a=parseFloat(e.getAttribute("rx")||0),o=parseFloat(e.getAttribute("ry")||0);return{shapeType:"ellipse",x:i,y:n,a:a,b:o,cp:[i*t[0],n*t[1]]}},polygon:function(e,t){var i=e.getAttribute("points"),n=[1/0,1/0],a=[-1/0,-1/0];if(i){i=l(i);for(var o=0;o<i.length;o++){var s=i[o];n[0]=Math.min(s[0],n[0]),n[1]=Math.min(s[1],n[1]),a[0]=Math.max(s[0],a[0]),a[1]=Math.max(s[1],a[1])}return{shapeType:"polygon",pointList:i,cp:[(n[0]+a[0])/2*t[0],(n[1]+a[1])/2*t[0]]}}},polyline:function(e,t){var i=h.polygon(e,t);return i}};return{getBbox:t,geoJson2Path:i,pos2geo:n,geo2pos:a}});