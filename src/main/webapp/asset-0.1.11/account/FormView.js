/*! 2015 Baidu Inc. All Rights Reserved */
define("account/FormView",["require","tpl!b1c6f6b6.tpl.html","common/FormView","eoo"],function(require){require("tpl!b1c6f6b6.tpl.html");var exports={};exports.template="accountForm",exports.getEntity=function(){var e=this.$super(arguments);return e},exports.enterDocument=function(){this.$super(arguments),this.get("userName").setText(this.model.get("user").userName)};var e=require("common/FormView"),t=require("eoo").create(e,exports);return t});