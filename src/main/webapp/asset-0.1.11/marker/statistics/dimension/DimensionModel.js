/*! 2015 Baidu Inc. All Rights Reserved */
define("marker/statistics/dimension/DimensionModel",["require","common/util","ub-ria/mvc/BaseModel","eoo"],function(require){function e(e){var n=[];return i.each(e,function(e,i){if(i%3===0)n.push([]);n[n.length-1].push({name:e.name,text:e.text,color:t(i)})}),n}function t(e){var t=["#38b1e0,#65c3f9,#8ed9ff","#ffb03f,#ffc86b,#ffdeb5","#ff7546,#ffad97,#ffeeee","#1a428a,#385dae,#94a8cb","#426ba9,#4e86db,#a4c8fa","#6950a1,#9477d3,#c6b1f2","#973d3f,#ba505c,#f0a9b1","#87481f,#f9a755,#fcd1a6","#fdaf17,#ffcb65,#ffe4af","#cac547,#efeb70,#f7f4b1","#155b7d,#01a6ac,#78cdd0"];return t[e%11]}var exports={},i=require("common/util"),n={dimensionInfo:function(e){var t=e.getQuery(),i=e.data().getDimention(t).then(function(e){return e});return i}};exports.constructor=function(){this.$super(arguments),this.putDatasource(n)},exports.getQuery=function(){return{taskId:this.get("taskId")||""}},exports.prepare=function(){this.$super(arguments);var t=this.get("dimensionInfo"),n=this.get("dimensionInfo").data,r=parseInt(this.get("index")||1),a=n[r-1];t.index=r,t.showData={name:a.name,text:a.text,data:e(a.data)},i.each(a.data,function(e){t[e.name]={legend:i.map(e.data,function(e){return e.text}),data:[i.map(e.data,function(e){return{value:e.data,name:e.text}})]}}),t.taskId=this.get("taskId"),t.tabData=i.map(n,function(e,t){return{text:e.text,value:t+1}})};var r=require("ub-ria/mvc/BaseModel"),a=require("eoo").create(r,exports);return a});