define("echarts/chart/gauge",["require","./base","../util/shape/GaugePointer","zrender/shape/Text","zrender/shape/Line","zrender/shape/Rectangle","zrender/shape/Circle","zrender/shape/Sector","../config","../util/ecData","../util/accMath","zrender/tool/util","../chart"],function(require){function e(e,i,a,r,s){t.call(this,e,i,a,r,s),this.refresh(r)}var t=require("./base"),i=require("../util/shape/GaugePointer"),a=require("zrender/shape/Text"),r=require("zrender/shape/Line"),s=require("zrender/shape/Rectangle"),o=require("zrender/shape/Circle"),l=require("zrender/shape/Sector"),n=require("../config");n.gauge={zlevel:0,z:2,center:["50%","50%"],clickable:!0,legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,min:0,max:100,splitNumber:10,axisLine:{show:!0,lineStyle:{color:[[.2,"#228b22"],[.8,"#48b"],[1,"#ff4500"]],width:30}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{color:"#eee",width:1,type:"solid"}},axisLabel:{show:!0,textStyle:{color:"auto"}},splitLine:{show:!0,length:30,lineStyle:{color:"#eee",width:2,type:"solid"}},pointer:{show:!0,length:"80%",width:8,color:"auto"},title:{show:!0,offsetCenter:[0,"-40%"],textStyle:{color:"#333",fontSize:15}},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:40,offsetCenter:[0,"40%"],textStyle:{color:"auto",fontSize:30}}};var h=require("../util/ecData"),d=require("../util/accMath"),p=require("zrender/tool/util");return e.prototype={type:n.CHART_TYPE_GAUGE,_buildShape:function(){var e=this.series;this._paramsMap={};for(var t=0,i=e.length;i>t;t++)if(e[t].type===n.CHART_TYPE_GAUGE)e[t]=this.reformOption(e[t]),this.legendHoverLink=e[t].legendHoverLink||this.legendHoverLink,this._buildSingleGauge(t),this.buildMark(t);this.addShapeList()},_buildSingleGauge:function(e){var t=this.series[e];this._paramsMap[e]={center:this.parseCenter(this.zr,t.center),radius:this.parseRadius(this.zr,t.radius),startAngle:t.startAngle.toFixed(2)-0,endAngle:t.endAngle.toFixed(2)-0},this._paramsMap[e].totalAngle=this._paramsMap[e].startAngle-this._paramsMap[e].endAngle,this._colorMap(e),this._buildAxisLine(e),this._buildSplitLine(e),this._buildAxisTick(e),this._buildAxisLabel(e),this._buildPointer(e),this._buildTitle(e),this._buildDetail(e)},_buildAxisLine:function(e){var t=this.series[e];if(t.axisLine.show)for(var i,a,r=t.min,s=t.max-r,o=this._paramsMap[e],l=o.center,n=o.startAngle,d=o.totalAngle,p=o.colorArray,c=t.axisLine.lineStyle,u=this.parsePercent(c.width,o.radius[1]),g=o.radius[1],f=g-u,y=n,m=0,b=p.length;b>m;m++)a=n-d*(p[m][0]-r)/s,i=this._getSector(l,f,g,a,y,p[m][1],c),y=a,i._animationAdd="r",h.set(i,"seriesIndex",e),h.set(i,"dataIndex",m),this.shapeList.push(i)},_buildSplitLine:function(e){var t=this.series[e];if(t.splitLine.show)for(var i,a,s,o=this._paramsMap[e],l=t.splitNumber,n=t.min,h=t.max-n,d=t.splitLine,p=this.parsePercent(d.length,o.radius[1]),c=d.lineStyle,u=c.color,g=o.center,f=o.startAngle*Math.PI/180,y=o.totalAngle*Math.PI/180,m=o.radius[1],b=m-p,v=0;l>=v;v++)i=f-y/l*v,a=Math.sin(i),s=Math.cos(i),this.shapeList.push(new r({zlevel:this.getZlevelBase(),z:this.getZBase()+1,hoverable:!1,style:{xStart:g[0]+s*m,yStart:g[1]-a*m,xEnd:g[0]+s*b,yEnd:g[1]-a*b,strokeColor:"auto"===u?this._getColor(e,n+h/l*v):u,lineType:c.type,lineWidth:c.width,shadowColor:c.shadowColor,shadowBlur:c.shadowBlur,shadowOffsetX:c.shadowOffsetX,shadowOffsetY:c.shadowOffsetY}}))},_buildAxisTick:function(e){var t=this.series[e];if(t.axisTick.show)for(var i,a,s,o=this._paramsMap[e],l=t.splitNumber,n=t.min,h=t.max-n,d=t.axisTick,p=d.splitNumber,c=this.parsePercent(d.length,o.radius[1]),u=d.lineStyle,g=u.color,f=o.center,y=o.startAngle*Math.PI/180,m=o.totalAngle*Math.PI/180,b=o.radius[1],v=b-c,x=0,_=l*p;_>=x;x++)if(x%p!==0)i=y-m/_*x,a=Math.sin(i),s=Math.cos(i),this.shapeList.push(new r({zlevel:this.getZlevelBase(),z:this.getZBase()+1,hoverable:!1,style:{xStart:f[0]+s*b,yStart:f[1]-a*b,xEnd:f[0]+s*v,yEnd:f[1]-a*v,strokeColor:"auto"===g?this._getColor(e,n+h/_*x):g,lineType:u.type,lineWidth:u.width,shadowColor:u.shadowColor,shadowBlur:u.shadowBlur,shadowOffsetX:u.shadowOffsetX,shadowOffsetY:u.shadowOffsetY}}));else;},_buildAxisLabel:function(e){var t=this.series[e];if(t.axisLabel.show)for(var i,r,s,o,l=t.splitNumber,n=t.min,h=t.max-n,p=t.axisLabel.textStyle,c=this.getFont(p),u=p.color,g=this._paramsMap[e],f=g.center,y=g.startAngle,m=g.totalAngle,b=g.radius[1]-this.parsePercent(t.splitLine.length,g.radius[1])-5,v=0;l>=v;v++)o=d.accAdd(n,d.accMul(d.accDiv(h,l),v)),i=y-m/l*v,r=Math.sin(i*Math.PI/180),s=Math.cos(i*Math.PI/180),i=(i+360)%360,this.shapeList.push(new a({zlevel:this.getZlevelBase(),z:this.getZBase()+1,hoverable:!1,style:{x:f[0]+s*b,y:f[1]-r*b,color:"auto"===u?this._getColor(e,o):u,text:this._getLabelText(t.axisLabel.formatter,o),textAlign:i>=110&&250>=i?"left":70>=i||i>=290?"right":"center",textBaseline:i>=10&&170>=i?"top":i>=190&&350>=i?"bottom":"middle",textFont:c,shadowColor:p.shadowColor,shadowBlur:p.shadowBlur,shadowOffsetX:p.shadowOffsetX,shadowOffsetY:p.shadowOffsetY}}))},_buildPointer:function(e){var t=this.series[e];if(t.pointer.show){var a=t.max-t.min,r=t.pointer,s=this._paramsMap[e],l=this.parsePercent(r.length,s.radius[1]),n=this.parsePercent(r.width,s.radius[1]),d=s.center,p=this._getValue(e);p=p<t.max?p:t.max;var c=(s.startAngle-s.totalAngle/a*(p-t.min))*Math.PI/180,u="auto"===r.color?this._getColor(e,p):r.color,g=new i({zlevel:this.getZlevelBase(),z:this.getZBase()+1,clickable:this.query(t,"clickable"),style:{x:d[0],y:d[1],r:l,startAngle:s.startAngle*Math.PI/180,angle:c,color:u,width:n,shadowColor:r.shadowColor,shadowBlur:r.shadowBlur,shadowOffsetX:r.shadowOffsetX,shadowOffsetY:r.shadowOffsetY},highlightStyle:{brushType:"fill",width:n>2?2:n/2,color:"#fff"}});h.pack(g,this.series[e],e,this.series[e].data[0],0,this.series[e].data[0].name,p),this.shapeList.push(g),this.shapeList.push(new o({zlevel:this.getZlevelBase(),z:this.getZBase()+2,hoverable:!1,style:{x:d[0],y:d[1],r:r.width/2.5,color:"#fff"}}))}},_buildTitle:function(e){var t=this.series[e];if(t.title.show){var i=t.data[0],r=null!=i.name?i.name:"";if(""!==r){var s=t.title,o=s.offsetCenter,l=s.textStyle,n=l.color,h=this._paramsMap[e],d=h.center[0]+this.parsePercent(o[0],h.radius[1]),p=h.center[1]+this.parsePercent(o[1],h.radius[1]);this.shapeList.push(new a({zlevel:this.getZlevelBase(),z:this.getZBase()+(Math.abs(d-h.center[0])+Math.abs(p-h.center[1])<2*l.fontSize?2:1),hoverable:!1,style:{x:d,y:p,color:"auto"===n?this._getColor(e):n,text:r,textAlign:"center",textFont:this.getFont(l),shadowColor:l.shadowColor,shadowBlur:l.shadowBlur,shadowOffsetX:l.shadowOffsetX,shadowOffsetY:l.shadowOffsetY}}))}}},_buildDetail:function(e){var t=this.series[e];if(t.detail.show){var i=t.detail,a=i.offsetCenter,r=i.backgroundColor,o=i.textStyle,l=o.color,n=this._paramsMap[e],h=this._getValue(e),d=n.center[0]-i.width/2+this.parsePercent(a[0],n.radius[1]),p=n.center[1]+this.parsePercent(a[1],n.radius[1]);this.shapeList.push(new s({zlevel:this.getZlevelBase(),z:this.getZBase()+(Math.abs(d+i.width/2-n.center[0])+Math.abs(p+i.height/2-n.center[1])<o.fontSize?2:1),hoverable:!1,style:{x:d,y:p,width:i.width,height:i.height,brushType:"both",color:"auto"===r?this._getColor(e,h):r,lineWidth:i.borderWidth,strokeColor:i.borderColor,shadowColor:i.shadowColor,shadowBlur:i.shadowBlur,shadowOffsetX:i.shadowOffsetX,shadowOffsetY:i.shadowOffsetY,text:this._getLabelText(i.formatter,h),textFont:this.getFont(o),textPosition:"inside",textColor:"auto"===l?this._getColor(e,h):l}}))}},_getValue:function(e){return this.getDataFromOption(this.series[e].data[0])},_colorMap:function(e){var t=this.series[e],i=t.min,a=t.max-i,r=t.axisLine.lineStyle.color;if(!(r instanceof Array))r=[[1,r]];for(var s=[],o=0,l=r.length;l>o;o++)s.push([r[o][0]*a+i,r[o][1]]);this._paramsMap[e].colorArray=s},_getColor:function(e,t){if(null==t)t=this._getValue(e);for(var i=this._paramsMap[e].colorArray,a=0,r=i.length;r>a;a++)if(i[a][0]>=t)return i[a][1];return i[i.length-1][1]},_getSector:function(e,t,i,a,r,s,o){return new l({zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:e[0],y:e[1],r0:t,r:i,startAngle:a,endAngle:r,brushType:"fill",color:s,shadowColor:o.shadowColor,shadowBlur:o.shadowBlur,shadowOffsetX:o.shadowOffsetX,shadowOffsetY:o.shadowOffsetY}})},_getLabelText:function(e,t){if(e)if("function"==typeof e)return e.call(this.myChart,t);else if("string"==typeof e)return e.replace("{value}",t);return t},refresh:function(e){if(e)this.option=e,this.series=e.series;this.backupShapeList(),this._buildShape()}},p.inherits(e,t),require("../chart").define("gauge",e),e});