// ==UserScript==
// @name         test_in_HTML
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    var document_index =`
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>哔哩哔哩 (゜-゜)つロ 干杯~-bilibili</title>
    <meta content="bilibili是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。"
          name="description">
    <meta content="bilibili,哔哩哔哩,哔哩哔哩动画,哔哩哔哩弹幕网,弹幕视频,B站,弹幕,字幕,AMV,MAD,MTV,ANIME,动漫,动漫音乐,游戏,游戏解说,二次元,游戏视频,ACG,galgame,动画,番组,新番,初音,洛天依,vocaloid,日本动漫,国产动漫,手机游戏,网络游戏,电子竞技,ACG燃曲,ACG神曲,追新番,新番动漫,新番吐槽,巡音,镜音双子,千本樱,初音MIKU,舞蹈MMD,MIKUMIKUDANCE,洛天依原创曲,洛天依翻唱曲,洛天依投食歌,洛天依MMD,vocaloid家族,OST,BGM,动漫歌曲,日本动漫音乐,宫崎骏动漫音乐,动漫音乐推荐,燃系mad,治愈系mad,MAD MOVIE,MAD高燃"
          name="keywords">
    <meta content="webkit" name="renderer">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="333.851" name="spm_prefix">
    <meta content="no-referrer-when-downgrade" name="referrer">
    <meta content="code-qkzzf7NQkQ" name="baidu-site-verification">
    <meta content="pc" name="applicable-device">
    <meta content="no-transform" http-equiv="Cache-Control">
    <meta content="no-siteapp" http-equiv="Cache-Control">

    <link href="https://www.bilibili.com/" rel="canonical">
    <link href="https://m.bilibili.com" media="only screen and(max-width: 640px)" rel="alternate">
    <link href="//s1.hdslb.com" rel="dns-prefetch">
    <link href="//static.hdslb.com/mobile/img/512.png" rel="apple-touch-icon">
    <link href="/favicon.ico?v=1" rel="shortcut icon">
    <script type="text/javascript">function getIEVersion() {
        var e = 99;
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var t = navigator.userAgent;
            null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(t) && (e = parseFloat(RegExp.$1))
        }
        return e
    }

    function isMSIE() {
        var e = navigator.userAgent.toLowerCase();
        return (/msie/.test(e) || /trident/.test(e)) && !/opera/.test(e)
    }

    (getIEVersion() < 11 || isMSIE()) && (window.location.href = "https://www.bilibili.com/blackboard/fe/activity-CjJbuaD7Xw.html")</script>
    <script type="text/javascript">!function () {
        var i = window.navigator.userAgent, n = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"], o = !0;
        if (!/\\sVR\\s/g.test(i)) {
            for (var e = 0, r = n.length; e < r; e++) if (0 < i.indexOf(n[e])) {
                o = !1;
                break
            }
            if (!o) {
                var a = window.location.href.replace("www", "m");
                window.location.href = a
            }
        }
    }()</script>
    <script type="text/javascript">function getCookie(e) {
        var o = new RegExp("(^| )" + e + "=([^;]*)(;|$)"), n = document.cookie.match(o);
        return n ? unescape(n[2]) : null
    }

    function reportfs() {
        window.performance && window.performance.timing && (window.performance.timing.firstscreenfinish = (new Date).getTime())
    }

    window.spmReportData = {}, window.reportConfig = {
        sample: 1,
        scrollTracker: !0,
        msgObjects: "spmReportData",
        errorTracker: !0
    }, window.abtest || (window.abtest = {}), window.abtest.b_ut = getCookie("b_ut"), window.abtest.i_wanna_go_back = getCookie("i-wanna-go-back"), window.page_load_time = Date.now()</script>
    <link as="script" href="//s1.hdslb.com/bfs/static/player/main/video.js?v=2023831" rel="prefetch">
    <script src="//s1.hdslb.com/bfs/seed/jinkela/short/config/biliconfig.js" type="text/javascript"></script>
    <script src="//www.bilibili.com/gentleman/polyfill.js?features=Promise%2CObject.assign%2CString.prototype.includes%2CNumber.isNaN"
            type="text/javascript"></script>
    <script src="//s1.hdslb.com/bfs/static/jinkela/long/js/sentry/sentry-5.7.1.min.js" type="text/javascript"></script>
    <script src="//s1.hdslb.com/bfs/static/jinkela/long/js/sentry/sentry-5.7.1.vue.min.js"
            type="text/javascript"></script>
    <script crossorigin src="//s1.hdslb.com/bfs/seed/log/report/log-reporter.js" type="text/javascript"></script>
    <link href="//s1.hdslb.com/bfs/static/jinkela/international-home/css/international-home.1.35f93148beeeeb86f21bdb6d57a0aadc9e8366b8.css"
          rel="stylesheet">
    <link href="//s1.hdslb.com/bfs/static/jinkela/international-home/css/international-home.0.35f93148beeeeb86f21bdb6d57a0aadc9e8366b8.css"
          rel="stylesheet">
</head>
<body>
<div id="international-home-app"></div>
<div id="biliMainFooter"></div>
<script src="//s1.hdslb.com/bfs/cm/cm-sdk/static/js/pc.js" type="text/javascript"></script>
<div style="display:none"><a href="https://www.bilibili.com/v/game/match/">赛事库</a> <a
        href="https://www.bilibili.com/cheese/">课堂</a> <a href="https://www.bilibili.com/festival/2021bnj">2021拜年纪</a>
</div>
<script src="//s1.hdslb.com/bfs/static/jinkela/international-home/1.international-home.35f93148beeeeb86f21bdb6d57a0aadc9e8366b8.js"
        type="text/javascript"></script>
<script src="//s1.hdslb.com/bfs/static/jinkela/international-home/international-home.35f93148beeeeb86f21bdb6d57a0aadc9e8366b8.js"
        type="text/javascript"></script>
</body>
</html>
    `;
document.documentElement.remove();
document.open()
document.write(document_index);
document.close()
})();