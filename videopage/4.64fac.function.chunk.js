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

(window.webpackJsonpwebpackLogReporter=window.webpackJsonpwebpackLogReporter||[]).push([[4],{85:function(r,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(e(10));o(e(2));function o(r){return r&&r.__esModule?r:{default:r}}function i(r,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}var n=function(){function t(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(r,t){if(!(r instanceof t))try{throw new TypeError("Cannot call a class as a function")}catch(r){}}(this,t),this.initConfig(),this.setIgnoredPattern(r.ignoredErrorPattern),this.doCollectorWinError(),this.doCollectorResourceError(),s.default.reportErrorSelfDef=this.handleErrorSelfDefReport.bind(this)}var r,e,o;return r=t,(e=[{key:"initConfig",value:function(){this.scriptErrorLimit=5,this.scriptErrorCount=0,this.imgErrorLimit=5,this.imgErrorCount=0,this.ERROR_RUNTIME=1,this.ERROR_SCRIPT=2,this.ERROR_STYLE=3,this.ERROR_IMAGE=4,this.ERROR_AUDIO=5,this.ERROR_VIDEO=6,this.ERROR_CONSOLE=7,this.ERROR_TRY_CATHC=8,this.LOAD_ERROR_TYPE={SCRIPT:this.ERROR_SCRIPT,LINK:this.ERROR_STYLE,IMG:this.ERROR_IMAGE,AUDIO:this.ERROR_AUDIO,VIDEO:this.ERROR_VIDEO}}},{key:"setIgnoredPattern",value:function(r){var t;r&&(t=[],t=r instanceof Array?r.map(function(r){return r.toString()}):[r.toString()],this.ignoredPatterns=t.map(function(r){return new RegExp(r)}))}},{key:"handleErrorSelfDefReport",value:function(r,t){"tryCatchError"===r&&this.todo("trycatch",this.ERROR_TRY_CATHC,t)}},{key:"doCollectorResourceError",value:function(){var o=this;window.addEventListener("error",function(r){var t,e=r.target;e!==window&&e.nodeName&&o.LOAD_ERROR_TYPE[e.nodeName.toUpperCase()]&&((t=o.LOAD_ERROR_TYPE[e.nodeName.toUpperCase()])===o.ERROR_IMAGE&&!e.getAttribute("src")||o.todo("resource",t,{url:e.baseURI||document.baseURI||window.location.href,errorMsg:e.outerHTML||e.href}))},!0)}},{key:"doCollectorWinError",value:function(){var r=null;"function"==typeof window.onerror&&(r=window.onerror);var s=this;window.onerror=function(t,e,o,i,n){return r&&r.apply(window,arguments),e?"Script error."===t||"Script error"===t?setTimeout(function(){var r={};r.url=e,r.pageUrl=window.location.href||document.baseURI,r.errorMsg="Script error.",s.scriptErrorCount<s.scriptErrorLimit&&(s.scriptErrorCount+=1,s.todo("runtime",s.ERROR_RUNTIME,r))},0):setTimeout(function(){var r={};i=i||window.event&&window.event.errorCharacter||0,r.url=e,r.pageUrl=window.location.href||document.baseURI,r.line=o,r.col=i,r.errorMsg=t,n&&n.stack&&(r.errorMsg=n.stack.toString()),s.todo("runtime",1,r)},0):setTimeout(function(){var r={};r.url=document.baseURI,"Script error."!==(r.errorMsg=t)&&"Script error"!==t||s.scriptErrorCount<s.scriptErrorLimit&&(s.scriptErrorCount+=1),s.todo("runtime",s.ERROR_RUNTIME,r)},0),!1}}},{key:"todo",value:function(r,t,e){var o={time:(new Date).toISOString(),level:"ERROR",app_id:"main.frontend.bilibili-log-report-seed",instance_id:r,errorType:t,userAgent:navigator.userAgent,url:document.baseURI||window.location.href,referrer:document.referrer};if(e instanceof Object?o.errorMsg=JSON.stringify(e):o.errorMsg=e,this.ignoredPatterns&&o.errorMsg)for(var i=0;i<this.ignoredPatterns.length;i++)if(this.ignoredPatterns[i].test(o.errorMsg))return;if(t===this.ERROR_IMAGE){if(this.imgErrorCount>=this.imgErrorLimit)return;this.imgErrorCount++}var n={type:"errorLog",obj:o};s.default.receiveGroupMsg(n)}}])&&i(r.prototype,e),o&&i(r,o),t}();t.default=n}}]);

}
/*
     FILE ARCHIVED ON 16:25:46 Nov 22, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:23:06 Sep 17, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 168.442
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.063
  cdx.remote: 0.044
  esindex: 0.006
  LoadShardBlock: 50.409 (3)
  PetaboxLoader3.datanode: 76.296 (5)
  load_resource: 317.506 (2)
  PetaboxLoader3.resolve: 246.173 (2)
*/