/*! 2015 Baidu Inc. All Rights Reserved */
define("audit/statistics/dimension/Dimension",["require","common/util","ub-ria/mvc/BaseAction","eoo"],function(require){function e(e){this.model.refreshDimension(e).then(t.bind(function(){this.refreshChart(e.targetChart,e.toType)},this))}var t=require("common/util"),exports={};exports.entityDescription="",exports.initBehavior=function(){this.$super(arguments),this.view.on("dimensionChange",e)};var i=require("ub-ria/mvc/BaseAction"),n=require("eoo").create(i,exports);return n});