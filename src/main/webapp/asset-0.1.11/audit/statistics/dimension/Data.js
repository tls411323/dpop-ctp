/*! 2015 Baidu Inc. All Rights Reserved */
define("audit/statistics/dimension/Data",["require","common/util","common/BaseData","eoo","ub-ria/mvc/RequestManager"],function(require){var e=require("common/util"),t=require("common/BaseData"),exports={};exports.getReviewTaskAccuracy=function(e){return this.request("auditDimension/getReviewTaskAccuracy",e,{method:"GET",url:"/getReviewTaskAccuracy.do",urlPrefix:"ctp/review"})},exports.getReviewTagAccuracy=function(e){return this.request("auditDimension/getReviewTagAccuracy",e,{method:"GET",url:"/getReviewTagAccuracy.do",urlPrefix:"ctp/review"})};var i=require("eoo").create(t,exports),n={getReviewTaskAccuracy:{name:"auditDimension/getReviewTaskAccuracy",scope:"instance",policy:"auto"},getReviewTagAccuracy:{name:"auditDimension/getReviewTagAccuracy",scope:"instance",policy:"auto"}},r=require("ub-ria/mvc/RequestManager");return e.each(n,function(e){r.register(i,e.name,e)}),i});