!function(e){if("function"==typeof define&&define.amd)define("moment/lang/sk",["moment"],e);else if("object"==typeof exports)module.exports=e(require("../moment"));else e(window.moment)}(function(e){function t(e){return e>1&&5>e}function i(e,i,n,a){var r=e+" ";switch(n){case"s":return i||a?"pár sekúnd":"pár sekundami";case"m":return i?"minúta":a?"minútu":"minútou";case"mm":if(i||a)return r+(t(e)?"minúty":"minút");else return r+"minútami";case"h":return i?"hodina":a?"hodinu":"hodinou";case"hh":if(i||a)return r+(t(e)?"hodiny":"hodín");else return r+"hodinami";case"d":return i||a?"deň":"dňom";case"dd":if(i||a)return r+(t(e)?"dni":"dní");else return r+"dňami";case"M":return i||a?"mesiac":"mesiacom";case"MM":if(i||a)return r+(t(e)?"mesiace":"mesiacov");else return r+"mesiacmi";case"y":return i||a?"rok":"rokom";case"yy":if(i||a)return r+(t(e)?"roky":"rokov");else return r+"rokmi"}}var n="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),a="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");return e.lang("sk",{months:n,monthsShort:a,monthsParse:function(e,t){var i,n=[];for(i=0;12>i;i++)n[i]=new RegExp("^"+e[i]+"$|^"+t[i]+"$","i");return n}(n,a),weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i},ordinal:"%d.",week:{dow:1,doy:4}})});