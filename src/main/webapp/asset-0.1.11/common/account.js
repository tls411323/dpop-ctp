/*! 2015 Baidu Inc. All Rights Reserved */
define("common/account",["require","er/permission","./GlobalData"],function(require){function e(){var e=require("./GlobalData").getInstance(),n=e.getUser();if(n.then(t),!i.isAllow("outerAuditRole")&&!i.isAllow("outerMarkerRole"))document.getElementById("password").parentNode.style.display="none"}function t(e){var t=e.userName,i=document.getElementById("username");i.innerHTML=t}var i=require("er/permission");return{init:e}});