/*! 2015 Baidu Inc. All Rights Reserved */
define("common/ioc",["require","uioc","common/util"],function(require){function e(e,t){var i={},n=e+"Data",r=e+"RequestStrategy",a=e+"Schema",o=e+"EntityValidator";return i[n]={module:e+"/Data",properties:{requestStrategy:{$ref:e+"RequestStrategy"}}},i[r]={module:"common/RequestStrategy",args:[e,t]},i[a]={module:e+"/schema",scope:"static"},i[o]={module:"ub-ria/mvc/EntityValidator",properties:{schema:{$ref:a}}},i}function t(e){var t={};return n.each(["List","Form","Success","Read","Detail"],function(i){var n=e+i,r=n+"Model",a=n+"View";t[n]={module:e+"/"+i,args:[e],auto:!0,properties:{model:{$ref:r},view:{$ref:a}}};var o={data:{$ref:e+"Data"}};if("Form"===i)o.validator={$ref:e+"EntityValidator"};t[r]={module:e+"/"+i+"Model",auto:!0,properties:o},t[a]={module:e+"/"+i+"View",auto:!0}}),t}var i=require("uioc"),n=require("common/util"),r=new i,a={globalData:{module:"common/GlobalData",scope:"singleton",creator:"getInstance"},session:{module:"common/session",scope:"static"},redirectSubmitHanlder:{module:"ub-ria/mvc/handler/RedirectSubmitHandler",properties:{redirectOptions:{global:!0,force:!0,childFormSubmitRedirect:!1}}},submitHandler:{module:"ub-ria/mvc/handler/ToastSubmitHandler",properties:{nextSubmitHandler:{$ref:"redirectSubmitHanlder"}}},baseModel:{module:"ub-ria/mvc/BaseModel",auto:!0,properties:{data:{$ref:"requestStrategy"}}},requestStrategy:{module:"ub-ria/mvc/RequestManager"}};return r.addComponent(a),r.addComponentsByEntityName=function(i,a,o,s){var l=e(i,a),h=t(i);n.extend(h,l,o||{}),n.each(s,function(e){delete h[e]}),r.addComponent(h)},r});