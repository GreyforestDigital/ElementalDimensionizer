function ElementalDimensionizer(e,i){1==i&&($("#element-logs").length||$("<div id='element-logs' style='font-family:Courier New, monospace;font-size:10px;text-transform:uppercase;position:fixed;top:0;left:0;z-index:99999;background:#000;color:#fff;padding:1em;font-size:10px;'></div>").appendTo("body")),$("#element-frame").length||$("<div id='element-frame' style='position:fixed;top:0;left:0;width:100%;height:100%;display:block;z-index:-1000'></div>").appendTo("body");var t="ontouchstart"in window||navigator.msMaxTouchPoints>0;$(document).on("mousemove touchmove",function(n){if(1==t)var o=n.changedTouches[0].pageX,a=n.changedTouches[0].pageY;else if("undefined"===t||!t||!1===t)o=n.pageX,a=n.pageY;var d=parseFloat(o/$("#element-frame").width()*100-50).toFixed(0),r=parseFloat(a/$("#element-frame").height()*100-50).toFixed(0);1==i&&$("#element-logs").html("pageX: "+d+"%, pageY: "+r+"%<br>pageX: "+o+", pageY: "+a),$(e+" .element-dimension").each(function(){if(void 0===(e=$(this).data("dimension-x-sensitivity"))||!e)var e=-1;if(void 0===(i=$(this).data("dimension-y-sensitivity"))||!i)var i=-1;if(void 0===(t=$(this).data("dimension-x-inverse"))||!t)var t=!1;if(void 0===(n=$(this).data("dimension-y-inverse"))||!n)var n=!1;xdegree=!0===n?e*d*-1:e*d*1,ydegree=!0===t?i*r*-1:i*r*1,$(this).css({transform:"rotateY("+xdegree+"deg) rotateX("+ydegree+"deg)","-webkit-transform":"rotateY("+xdegree+"deg) rotateX("+ydegree+"deg)","transform-origin":"center","-webkit-transform-origin":"center",transition:".000001s","-webkit-transition":".000001s"})})})}
