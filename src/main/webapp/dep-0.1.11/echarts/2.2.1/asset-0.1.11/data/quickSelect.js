define("echarts/data/quickSelect",["require"],function(){function t(t,e){return t-e}function e(t,e,i){var s=t[e];t[e]=t[i],t[i]=s}function i(t,i,s,a,o){for(var r=i;s>i;){var r=Math.round((s+i)/2),n=t[r];e(t,r,s),r=i;for(var h=i;s-1>=h;h++)if(o(n,t[h])>=0)e(t,h,r),r++;if(e(t,s,r),r===a)return r;else if(a>r)i=r+1;else s=r-1}return i}function s(e,s,a,o,r){if(arguments.length<=3){if(o=s,2==arguments.length)r=t;else r=a;s=0,a=e.length-1}return i(e,s,a,o,r)}return s});