/*! 2015 Baidu Inc. All Rights Reserved */
define("static/Index",["require"],function(){function e(){var e="",n="";if(t(["error-username","error-password","error-verify"]),""===this["username-login"].value)e="用户名为空",n="error-username";else if(""===this["password-login"].value)e="密码为空",n="error-password";else if(""===this["verify-login"].value)e="验证码为空",n="error-verify";if(e)return i(e,n),!1;else return void 0}function t(e){e.forEach(function(e){document.getElementById(e).style.display="none"})}function i(e,t){var i=document.getElementById(t);i.innerHTML=e,i.style.display="block"}function n(e){var t="";switch(e){case"error01":t="参数为空";break;case"error02":t="用户名不存在";break;case"error03":t="密码错误";break;case"error04":t="系统错误";break;case"error05":t="验证码错误";break;case"error06":t="密码输入错误次数太多，账号已被冻结";break;case"":t=""}i(t,"error-login")}function r(){var t=location.hash,i=t.slice(1);n(i),a.addEventListener("click",function(t){if(t.target===o)this["userType-login"].value=0;else if(t.target===s)this["userType-login"].value=1,a.onsubmit=e},!1),l.addEventListener("click",function(e){e.target.src="kaptcha.do?"+Math.floor(100*Math.random())},!1)}var a=document.getElementById("login"),o=document.getElementById("innerSubmit"),s=document.getElementById("outerSubmit"),l=document.getElementById("kaptchaImage");return{enter:r}});