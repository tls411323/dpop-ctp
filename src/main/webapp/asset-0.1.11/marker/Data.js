/*! 2015 Baidu Inc. All Rights Reserved */
define("marker/Data",["require","common/util","common/BaseData","eoo","ub-ria/mvc/RequestManager"],function(require){var e=require("common/util"),t=require("common/BaseData"),exports={};exports.search=function(e){return this.request("marker/search",e,{method:"POST",url:"/getPagedTasks.do",urlPrefix:"ctp/task"})},exports.updateStatus=function(e,t){return this.request("marker/updateStatus",{status:e,tasks:t},{method:"POST",url:"/changeTaskStatus.do",urlPrefix:"ctp/task"})},exports.getUsers=function(e){return this.request("marker/getUsers",{name:e},{method:"GET",url:"/getUserByNameLike.do",urlPrefix:"ctp/user"})};var i=require("eoo").create(t,exports),n={search:{name:"marker/search",scope:"instance",policy:"auto"},updateStatus:{name:"marker/updateStatus",scope:"instance",policy:"auto"},getUsers:{name:"marker/getUsers",scope:"instance",policy:"auto"}},r=require("ub-ria/mvc/RequestManager");return e.each(n,function(e){r.register(i,e.name,e)}),i});