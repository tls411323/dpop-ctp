define("ub-ria/mvc/checker/enumChecker",["require"],function(){function e(e,t){if(!e&&0!==e)return!0;var n=t[2].datasource,i=n.fromValue(e);return!!i}var t={name:"enum",errorMessage:"${title}的值不合法",priority:20,check:e};return t});