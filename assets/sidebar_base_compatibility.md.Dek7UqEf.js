import{_ as a,c as s,o as n,a3 as e}from"./chunks/framework.BRYRxafc.js";const m=JSON.parse('{"title":"小程序兼容问题总结","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/base/compatibility.md","filePath":"sidebar/base/compatibility.md"}'),p={name:"sidebar/base/compatibility.md"},i=e(`<h1 id="小程序兼容问题总结" tabindex="-1">小程序兼容问题总结 <a class="header-anchor" href="#小程序兼容问题总结" aria-label="Permalink to &quot;小程序兼容问题总结&quot;">​</a></h1><p>在微信小程序开发过程中，为了在ios和安卓上实现良好的兼容性，现总结一些兼容性问题。</p><h2 id="_1-ios日期时间格式不兼容" tabindex="-1">1. ios日期时间格式不兼容 <a class="header-anchor" href="#_1-ios日期时间格式不兼容" aria-label="Permalink to &quot;1. ios日期时间格式不兼容&quot;">​</a></h2><h4 id="_1-1-格式问题-yyyy-mm-dd或yyyy-mm-dd-用new-date-处理时-ios返回nan-安卓正常。" tabindex="-1">1.1 格式问题，YYYY-MM-DD或YYYY.MM.DD 用new Date()处理时，ios返回NaN，安卓正常。 <a class="header-anchor" href="#_1-1-格式问题-yyyy-mm-dd或yyyy-mm-dd-用new-date-处理时-ios返回nan-安卓正常。" aria-label="Permalink to &quot;1.1 格式问题，YYYY-MM-DD或YYYY.MM.DD 用new Date()处理时，ios返回NaN，安卓正常。&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 需转换为YYYY/MM/DD这种格式：</span></span>
<span class="line"><span>new Date(&#39;2023-10-17&#39;,replace(/-/g,&quot;/&quot;))</span></span></code></pre></div><h4 id="_1-2-临界值问题-对于00-00-00和24-00-00这两个时间临界值-ios会转成nan。" tabindex="-1">1.2 临界值问题，对于00:00:00和24:00:00这两个时间临界值, ios会转成NAN。 <a class="header-anchor" href="#_1-2-临界值问题-对于00-00-00和24-00-00这两个时间临界值-ios会转成nan。" aria-label="Permalink to &quot;1.2 临界值问题，对于00:00:00和24:00:00这两个时间临界值, ios会转成NAN。&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 比较粗糙的解决方式</span></span>
<span class="line"><span>let deadTime = new Date(&#39;2023/09/07 23:59:59&#39;);  // 少一秒IOS正常取值，否则为NaN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 比较精确的解决方式</span></span>
<span class="line"><span>let deadTime = new Date(&#39;2023/09/08 00:00:00&#39;) // 直接在日期+1天</span></span>
<span class="line"><span>let deadTime = new Date(&#39;2023/09/07 00:00:00&#39;).getTime() + 24 * 3600 * 1000;  //获取9月7日初始时间再+1天的时间戳，精确到毫秒</span></span></code></pre></div><h4 id="_1-3-时间不全问题-时间格式为yyyy-mm-用new-date-转化之后ios会变成nan。" tabindex="-1">1.3 时间不全问题，时间格式为YYYY/MM，用new Date()转化之后ios会变成NAN。 <a class="header-anchor" href="#_1-3-时间不全问题-时间格式为yyyy-mm-用new-date-转化之后ios会变成nan。" aria-label="Permalink to &quot;1.3 时间不全问题，时间格式为YYYY/MM，用new Date()转化之后ios会变成NAN。&quot;">​</a></h4><p>解决方案： 将日期补全后可成功</p><h2 id="_2-ios滚动卡顿问题" tabindex="-1">2. ios滚动卡顿问题 <a class="header-anchor" href="#_2-ios滚动卡顿问题" aria-label="Permalink to &quot;2. ios滚动卡顿问题&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-webkit-overflow-scrolling: touch;</span></span></code></pre></div><h2 id="_3-border-image-设置渐变-导致border-radius-不生效。" tabindex="-1">3. border-image 设置渐变，导致border-radius 不生效。 <a class="header-anchor" href="#_3-border-image-设置渐变-导致border-radius-不生效。" aria-label="Permalink to &quot;3. border-image 设置渐变，导致border-radius 不生效。&quot;">​</a></h2><p>解决方案： 建议使用背景图片代替</p><h2 id="_4-ios-底部安全距离" tabindex="-1">4. ios 底部安全距离 <a class="header-anchor" href="#_4-ios-底部安全距离" aria-label="Permalink to &quot;4. ios 底部安全距离&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS &lt; 11.2 */</span></span>
<span class="line"><span>padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS &gt;= 11.2 */</span></span></code></pre></div><h2 id="_5-小程序滚动穿透问题" tabindex="-1">5. 小程序滚动穿透问题 <a class="header-anchor" href="#_5-小程序滚动穿透问题" aria-label="Permalink to &quot;5. 小程序滚动穿透问题&quot;">​</a></h2><p>什么是滚动穿透？<br> 滚动穿透的定义：指我们滑动顶层的弹窗，但效果上却滑动了底层的内容。</p><p>方法一</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// wxml中给蒙层加入catchtouchmove</span></span>
<span class="line"><span>&lt;van-popup</span></span>
<span class="line"><span>  show=&quot;{{ visible }}&quot;</span></span>
<span class="line"><span>  round</span></span>
<span class="line"><span>  position=&quot;bottom&quot;</span></span>
<span class="line"><span>  bind:close=&quot;closeDataVisible&quot;</span></span>
<span class="line"><span>  catchtouchmove=&quot;emptyFunction&quot;</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&lt;/van-popup&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// js中定义空函数</span></span>
<span class="line"><span>emptyFunction() {}</span></span></code></pre></div><p>方法二</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// wxml主页面顶层加上样式</span></span>
<span class="line"><span>&lt;view class=&quot;container containerBg {{visible ? &#39;showPopup&#39; : &#39;hidePopup&#39;}}&quot;&gt;</span></span>
<span class="line"><span> content…</span></span>
<span class="line"><span>&lt;/view&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// wxss中样式</span></span>
<span class="line"><span>.showPopup {</span></span>
<span class="line"><span>    height: 100vh;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.hidePopup {</span></span>
<span class="line"><span>    height: auto;</span></span>
<span class="line"><span>    overflow: visible;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,21),t=[i];function o(l,c,d,r,h,u){return n(),s("div",null,t)}const g=a(p,[["render",o]]);export{m as __pageData,g as default};
