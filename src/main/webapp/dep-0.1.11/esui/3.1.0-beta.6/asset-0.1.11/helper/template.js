define("esui/helper/template",["require","underscore"],function(require){var e=require("underscore"),t={id:function(e,t){return t.helper.getId(e)},"class":function(e,t){return t.helper.getPartClassName(e)},part:function(e,t,i){return i.helper.getPartHTML(e,t)}},i={};return i.setTemplateEngine=function(e){if(this.templateEngine=e,!e.esui)this.initializeTemplateEngineExtension()},i.initializeTemplateEngineExtension=function(){e.each(t,function(e,t){this.addFilter(t,e)},this.templateEngine)},i.renderTemplate=function(e,i){var n=this;i=i||{};var a={get:function(e){if("instance"===e)return n.control;if("function"==typeof i.get)return i.get(e);var a=e,o=null,r=e.lastIndexOf(".");if(r>0){a=e.substring(0,r);var s=e.substring(r+1);if(s&&t.hasOwnProperty(s))o=t[s]}var l=i.hasOwnProperty(a)?i[a]:a;if(o)l=o(l,n.control);return l}};if(!this.templateEngine)throw new Error("No template engine attached to this control");return this.templateEngine.render(e,a)},i});