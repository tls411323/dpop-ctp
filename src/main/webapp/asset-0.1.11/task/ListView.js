/*! 2015 Baidu Inc. All Rights Reserved */
define("task/ListView",["require","common/util","tpl!b1c6f6b6.tpl.html","etpl","esui/Toast","er/events","./enum","common/ListView","eoo"],function(require){function e(){if(this.viewContext)if(document.body.scrollTop>=200)this.scrollToTop.show();else this.scrollToTop.hide()}function t(e){e.preventDefault(),document.body.scrollTop=0}function i(e){var t="/task/detail~id="+e.id+"&dataType="+e.dataType,i=this.getSafetyControl(e.id+"-tagCtr");this.model.setDetailData(i.getAllNeedData());var n={url:t,title:"创意物料预览"};this.popDrawerAction(n).show()}function n(e){var t={content:"离开此页将放弃该题，是否确定？",title:"提示",callBack:c.bind(this.giveUpGroup,this,{url:e.url})};this.showDialog(t),e.preventDefault()}function r(e){var t=e.value.id;this.getSafetyControl(t+"-tagCtr").setTagDatasource(e.value.datasource),this.getSafetyControl(t+"-tagCtr").setRawValue({tag:e.value.value,comment:e.value.comment,tradeId:e.value.tradeId,third:e.value.third,sample:e.value.sample})}function a(e){var t=e.target.main,i=t.parentNode;t.classList.toggle("history-toggle-show"),i.classList.toggle("operation-bar-show")}function o(e){var t=this.table.viewContext.getGroup("headerInfo"),i=this.getSafetyControl("operationBar");if(c.hasClass(i.main,"operation-zero-bar"))i.main.classList.remove("operation-zero-bar"),e.target.setContent("收起头部信息");else i.main.classList.add("operation-zero-bar"),e.target.setContent("展开头部信息");c.each(t,function(e){e.toggle()})}function s(){var e={value:this.getSafetyControl("batch-tagCtr").getRawValue(),datasource:this.getSafetyControl("batch-tagCtr").getTagDatasource()};this.setBatchTableData(e)}function l(){var e={content:"当前题目还未完成，若进行下一题，当前答题内容将不会保存",title:"提示",callBack:function(){this.fire("gotToLastGroup")}};this.showDialog(e)}function h(e){var t=this.collectAnswers();if(0===t.noFinishItems.length)e.target.disable(),this.fire("commitAnswer",{answers:t.results,button:e.target});else{this.table.setAllRowSelected(!1),this.table.setRowSelected(t.noFinishItems,!0);var i=p.success("尚有题目未答完，请答完后点击提交！");i.show()}}function u(){var e={content:"当前题目还未完成，若进行下一题，当前答题内容将不会保存",title:"提示",callBack:function(){this.fire("gotToNextGroup")}};this.showDialog(e)}function d(e){if(e=parseInt(e,10),0===e)return"未标注";else if(e>0){if(5===(e+"").length)e="0"+e;return y.fromValue(e).text}}var c=require("common/util");require("tpl!b1c6f6b6.tpl.html");var f=require("etpl"),p=require("esui/Toast"),m=require("er/events"),g=require("./enum").WuliaoType,y=require("./enum").ThirdTrade,exports={};exports.template="taskList",exports.currentTradeId=null,exports.tableFields=[{title:"物料信息",field:"taskInfo",sortable:!1,resizable:!0,width:400,stable:!1,content:function(e){var t="",i=g.getAliasFromValue(e.wuliaoType);if(g.fromValue(e.wuliaoType))t=g.fromValue(e.wuliaoType).text;return f.render("taskInfo",{id:e.id,adId:e.adId,wuliaoType:t,wuliaoTypeAlias:i,showUrl:e.showUrl,targetUrl:e.targetUrl,adTradeNameLevel2:e.adTradeNameLevel2,imgUrl:e.imgUrl,flash:e.flash,title:e.title,description1:e.description1,description2:e.description2,dataTypeAlias:e.dataTypeAlias})}},{title:"标签标注",field:"operation",sortable:!1,resizable:!0,width:750,stable:!1,content:function(e){var t=!1,i=d(e.tagInfo.adTradeIdLevel3||e.tagedTagInfo&&e.tagedTagInfo.adTradeIdLevel3),n=null;if(e.tagedTagInfo)t=!0,n=d(e.tagedTagInfo.adTradeIdLevel3);var r={isAudit:t,id:e.id,third:i,tagedThird:n,comment:e.tagInfo.comment,tradeId:e.tagInfo.adTradeIdLevel3||e.tagedTagInfo&&e.tagedTagInfo.adTradeIdLevel3,attachTagGroup:e.tagInfo.boxData,sample:e.tagInfo.sample};return f.render("operationZone",r)}}],exports.uiEvents={"table:command":"commandHandler","previous:click":l,"next:click":u,"historyToggle:click":a,"headerToggle:click":o,"batchModifySubmit:click":s,"end-cancel:click":"backToList","backToAuditDetail:click":"backToDetail","end-submit:click":h,"scroll-to-top:click":t,"crumb:click":"backToList"},exports.enterDocument=function(t){if(this.$super(arguments),t){var i=this;i.allLoaded=!1,i.loadIndex=0;var n=this.model.getDataAdIds();if(n.forEach(function(e){var t=i.get(e+"-showDetail");if(t)t.helper.delegateDOMEvent(t.main,"click")}),window.onscroll=c.bind(e,i),window.onbeforeunload=c.bind(i.giveUpGroup,i,{close:!0}),this.model.get("hasResult")===!0){var r=this.alert("题目已全部分配完","提示");r.on("ok",function(){i.fire("redirectToStatistics")})}else if(this.model.getDefaultTrade()&&this.model.getDefaultTrade().defaultTradeId){var a=this.model.getDefaultTrade().defaultTradeId+"",o=y.getTextFromAlias(a);this.getSafetyControl("batch-tagCtr").setRawValue({tradeId:a,third:o})}setTimeout(function(){i.loadAllLeftContent()},100),this.table.setAllRowSelected(!0),c.each(this.table.viewContext.getGroup("headerInfo"),function(e){e.hide()})}},exports.dispose=function(){this.$super(arguments),m.un("navigatorChange",n,this),m.un("detailSubmit",r,this),window.onscroll=null,window.onbeforeunload=null,window.onclick=null},exports.initBehave=function(){var e=this.model.getDataAdIds();this.bindListEvents(e),this.scrollToTop.hide(),this.viewContext.disposePool(),m.on("navigatorChange",n,this),m.on("detailSubmit",r,this),window.onclick=function(e){if("修改"!==e.target.innerHTML)this.hideAllTradePanel()}.bind(this)},exports.commandHandler=function(e){this.$super(arguments);var t=e.name,n=JSON.parse(e.args),r=this.model.getItemById(n).dataType;if("showDetail"===t)i.call(this,{id:n,dataType:r})},exports.getSafetyControl=function(e){return this.get(e)||this.table.viewContext.get(e)},exports.bindListEvents=function(e){c.each(e,function(e){this.uiEvents[e+"-tagCtr:toggleTradePanel"]=this.toggleTradeList,this.uiEvents[e+"-tagCtr:changeTrade"]=this.changeTrade},this);var t=this.getSafetyControl("batch-tagCtr");if(t)t.on("toggleTradePanel",function(e){this.toggleTradeList(e)},this),t.on("changeTrade",function(e){this.changeTrade(e)},this)},exports.toggleTradeList=function(e){var t=e.clickButton.getBoundingClientRect(),i=e.tradePanel.main;this.hideAllTradePanel(e.tradePanel),i.style.top=t.bottom+document.body.scrollTop-60+"px",i.style.left=t.left-300+"px"},exports.hideAllTradePanel=function(e){var t=this.model.getDataAdIds();if(t.length)t.push("batch");c.each(t,function(t){var i=this.getSafetyControl(t+"-tagCtr").childrenIndex.tradePanel;if(!e||e.id!==i.id)this.getSafetyControl(t+"-tagCtr").hideTradePanel()},this)},exports.loadAllLeftContent=function(){var e=this.model.get("imgUrlList"),t=this.model.get("flashAdList");if(e&&e.length)this.fire("loadBatchFlashAndImg",{loadItems:e,batchItems:e.slice(0,20),loadIndex:0});if(t&&t.length)this.fire("loadFlashClass",{loadItems:t,loadIndex:0})},exports.loadFlashAndImgs=function(e){c.each(e,function(e,t){var i=this;setTimeout(function(){i.loadSingleFlashAndImg(e)},500*t)},this)},exports.loadSingleFlashAndImg=function(e){if(e&&e.type){var t=g.fromValue(e.type).alias,i="",n=null;if("flash"===t){if(i=e.id+"-flashContainerPanel",n=document.getElementById(i))window.swfobject.embedSWF(e.imgUrl,n,"100%",150,10)}else if("picture"===t||"picText"===t){i=e.id+"-imgContainerPanel";var r=new Image;if(r.src=e.imgUrl,r.alt="图片",n=document.getElementById(i))n.innerHTML=r.outerHTML}}},exports.setFlashContent=function(e){var t=document.getElementById(e.id+"-flashClass");if(t)t.innerText=e.info},exports.collectAnswers=function(){var e=this.model.getDataAdIds(),t=[],i=[];return c.each(e,function(e,n){var r=this.get(e+"-tagCtr").getRawValue(),a={},o=r.tag;c.each(c.keys(o),function(e){c.each(c.keys(o[e]),function(t){a[t]=o[e][t]})});var s=r.comment,l=r.tradeId;if(""!==l){var h=this.model.getItemById(e),u={id:h.tagInfo.id,refId:h.tagInfo.refId,adTradeIdLevel3:l,comment:s,tag:a,sample:r.sample};t.push(u)}else i.push(n)},this),{results:t,noFinishItems:i}},exports.setBatchTableData=function(e){var t=this.table.getSelectedItems(),i=this;t.forEach(function(t){var n=parseInt(t.id,10);i.get(n+"-tagCtr").setTagDatasource(e.datasource),i.get(n+"-tagCtr").setRawValue(e.value)})},exports.showDialog=function(e){var t=this,i=this.confirm(e.content,e.title);i.on("ok",function(){e.callBack.call(t)})},exports.backToDetail=function(){var e={content:"返回详情页该题内容不会保存，是否继续？",title:"提示",callBack:c.bind(this.giveUpGroup,this,{args:this.model.get("data").task.id})};this.showDialog(e)},exports.backToList=function(e){if(!e.item||e.item.href){e.preventDefault();var t={content:"退出后答题内容不会保存，是否取消答题？",title:"提示",callBack:this.giveUpGroup};this.showDialog(t)}},exports.giveUpGroup=function(e){if(e&&e.args)this.fire("giveUpGroup",{args:e.args});else if(e&&e.url)this.fire("giveUpGroup",{url:e.url});else if(e&&e.close)this.fire("giveUpGroup",{close:e.close});else this.fire("giveUpGroup")},exports.noHistoryShow=function(){this.alert("没有上一题可供分配","提示")},exports.changeTrade=function(e){var t=e.id;this.fire("tradeChange",{adTradeId:e.tradeId,id:t,taskType:this.model.get("data").task.taskType,callback:function(){this.getSafetyControl(t+"-tagCtr").setTagDatasource(this.model.get(t+"-attachDatasource")),this.getSafetyControl(t+"-tagCtr").setRawValue({tag:this.model.get(t+"-attachValue")})}.bind(this)})};var v=require("common/ListView"),b=require("eoo").create(v,exports);return b});