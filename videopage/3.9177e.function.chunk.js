var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(window.webpackJsonpwebpackLogReporter=window.webpackJsonpwebpackLogReporter||[]).push([[3],{89:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(2)),a=o(r(26));function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))try{throw new TypeError("Cannot call a class as a function")}catch(e){}}(this,e),this.browser=i.default.myBrowser(),this.reportUrls=["//web.archive.org/web/20201122153124/https://api.bilibili.com/x/web-interface/cdn/report?from=report","//web.archive.org/web/20201122153124/https://i0.hdslb.com/bfs/test/ce1cf20203c303963e78c811b01100667c960bba.png"],this.headers={},this.reqFinished=0,this.collectUrlInfo()}var t,r,o;return t=e,(r=[{key:"getHeader",value:function(e,t){var r=e.getAllResponseHeaders();if(-1<r.indexOf(t.toLowerCase())){var o=new RegExp(t,"i"),n=r.match(o)[0];return e.getResponseHeader(n)}return""}},{key:"collectUrlInfo",value:function(){var n=this;this.reportUrls.forEach(function(e,r){var o=a.default.ajax({url:e,noCredentials:!0,success:function(){var e=n.getHeader(o,"x-cache-webcdn"),t=n.getHeader(o,"x-service-module");n.headers[r]={cdn:e,protocol:t},n.reqFinished++,n.reqFinished===n.reportUrls.length&&n.reportCdn(200)},fail:function(e){n.reqFinished++,n.reqFinished===n.reportUrls.length&&n.reportCdn(e)}})})}},{key:"getResourceList",value:function(){return window.performance&&"function"==typeof performance.getEntriesByType?performance.getEntriesByType("resource"):[]}},{key:"matchUrl",value:function(e){for(var t=0;t<this.reportUrls.length;t++)if(-1<e.indexOf(this.reportUrls[t]))return t;return-1}},{key:"reportCdn",value:function(r){var o=this;this.getResourceList().forEach(function(e){var t=o.matchUrl(e.name);-1<t&&o.todo({x_cache_webcdn:o.headers[t].cdn,protocol:o.headers[t].protocol||e.nextHopProtocol,uri:document.baseURI||window.location.href,request_uri:i.default.splitUrlArgs(e.name).path,referrer:document.referrer||"",dns_time:e.domainLookupEnd-e.domainLookupStart,connect_time:e.connectEnd-e.connectStart,request_time:e.responseStart-e.requestStart,response_time:e.responseEnd-e.responseStart,consumer_time:e.duration,request_args:i.default.splitUrlArgs(e.name).args,initiator_type:e.initiatorType,error:"",http_code:r},!0)})}},{key:"todo",value:function(e,t){var r=0<arguments.length&&void 0!==e?e:{},o=1<arguments.length?t:void 0,n={eventId:0<=r.request_uri.indexOf("i0")?"web.main.webimage":"web.main.net",appInfo:{appId:21,buvid:i.default.getCookie("buvid3")||""},mid:i.default.getCookie("DedeUserID")||"",eventCategory:5,ctime:Date.now(),runtimeInfo:{network:navigator.connection&&"wifi"===navigator.connection.effectiveType?"1":"2"},extendedFields:{business:"main",app_key:"web_main",real_request_url:r.uri,referer:r.referrer,ua:navigator.userAgent,browser:this.browser,x_cache_webcdn:r.x_cache_webcdn,command:r.request_uri||"",start_request_ts:(Math.floor(r.start_request_ts)||Date.parse(new Date)/1e3).toString(),dns_time:(Math.floor(r.dns_time)||"0").toString(),hit_cache:r.hit_cache||"",server_ip:r.cdn_hostname||"",idc:r.idc||"",connect_time:(Math.floor(r.connect_time)||"0").toString(),request_time:("0"|Math.floor(r.request_time)).toString(),response_time:(Math.floor(r.response_time)||"0").toString(),total_time:(Math.floor(r.consumer_time)||"0").toString(),request_args:encodeURI(r.request_args||""),initiator_type:String.prototype.toLocaleLowerCase.call(r.initiator_type||""),exception_msg:null==r.error?"error":r.error,http_code:r.http_code.toString(),href:window.location.href}};o&&(n.extendedFields.negotiated_protocol=r.protocol),a.default.post("//web.archive.org/web/20201122153124/https://api.bilibili.com/x/web-frontend/data/collector",JSON.stringify([n]))}}])&&n(t.prototype,r),o&&n(t,o),e}();t.default=s}}]);

}
/*
     FILE ARCHIVED ON 15:31:24 Nov 22, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:23:07 Sep 17, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 181.741
  exclusion.robots: 0.063
  exclusion.robots.policy: 0.056
  cdx.remote: 0.053
  esindex: 0.008
  LoadShardBlock: 93.641 (3)
  PetaboxLoader3.datanode: 490.597 (5)
  PetaboxLoader3.resolve: 191.645 (3)
  load_resource: 626.029 (2)
*/