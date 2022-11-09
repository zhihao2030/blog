import{_ as s,c as n,o as a,a as l}from"./app.d0ab8007.js";const i=JSON.parse('{"title":"setState \u662F\u540C\u6B65\u8FD8\u662F\u5F02\u6B65\u7684\uFF1F","description":"","frontmatter":{"title":"setState \u662F\u540C\u6B65\u8FD8\u662F\u5F02\u6B65\u7684\uFF1F","date":"2021-06-29T10:54:23.000Z","sidebar":"auto","tags":["React"],"categories":"React"},"headers":[{"level":2,"title":"\u5206\u6790","slug":"\u5206\u6790","link":"#\u5206\u6790","children":[]},{"level":2,"title":"\u7ED3\u8BBA","slug":"\u7ED3\u8BBA","link":"#\u7ED3\u8BBA","children":[]},{"level":2,"title":"\u6279\u5904\u7406","slug":"\u6279\u5904\u7406","link":"#\u6279\u5904\u7406","children":[]},{"level":2,"title":"\u7ED9\u5F20\u56FE","slug":"\u7ED9\u5F20\u56FE","link":"#\u7ED9\u5F20\u56FE","children":[]}],"relativePath":"react/setState.md","lastUpdated":1667967634000}'),p={name:"react/setState.md"},o=l(`<div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#82AAFF;">trigger</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">isBatchedUpdate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">runSetState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">isBatchedUpdate</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">runSetState</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">runSetState</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">trigger</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">\u89E6\u53D1\u5408\u6210\u4E8B\u4EF6</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">trigger</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">\u89E6\u53D1 setTimeout \u4E8B\u4EF6</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u53D1\u73B0\u4E24\u4E2A\u6267\u884C\u7684\u65F6\u673A\u4E0D\u4E00\u6837\uFF0C<code>console.log</code> \u7684\u7ED3\u679C\u4E5F\u4E0D\u4E00\u6837\u3002\u4E00\u4E2A\u662F\u540C\u6B65\uFF0C\u4E00\u4E2A\u5219\u662F\u5F02\u6B65\u3002</p><h2 id="\u5206\u6790" tabindex="-1">\u5206\u6790 <a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u6765\u770B\u770B react \u90E8\u5206\u6E90\u7801</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scheduleUpdateOnFiber</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fiber</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">lane</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">eventTime</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">lane</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">SyncLane</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u540C\u6B65\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">ensureRootIsScheduled</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">eventTime</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5224\u65AD\u5F53\u524D\u662F\u5426\u8FD8\u5728 React \u4E8B\u4EF6\u6D41\u4E2D</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5982\u679C\u4E0D\u5728\uFF0C\u76F4\u63A5\u8C03\u7528 flushSyncCallbackQueue \u66F4\u65B0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">executionContext</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">NoContext</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">flushSyncCallbackQueue</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5F02\u6B65\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u4EE3\u7801\u53EF\u4EE5\u7B80\u5355\u63CF\u8FF0\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u4E3B\u8981\u662F\u5224\u65AD\u4E86 <code>executionContext</code> \u662F\u5426\u7B49\u4E8E <code>NoContext</code> \u6765\u786E\u5B9A\u5F53\u524D\u66F4\u65B0\u6D41\u7A0B\u662F\u5426\u5728 React \u4E8B\u4EF6\u6D41\u4E2D\u3002</p><p>\u6240\u6709\u7684\u4E8B\u4EF6\u5728\u89E6\u53D1\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u5148\u8C03\u7528 <code>batchedEventUpdates$1</code> \u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u5728\u8FD9\u91CC\u5C31\u4F1A\u4FEE\u6539 <code>executionContext</code> \u7684\u503C\uFF0CReact \u5C31\u77E5\u9053\u6B64\u65F6\u7684 <code>setState</code> \u5728\u81EA\u5DF1\u7684\u638C\u63A7\u4E2D\u3002</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// executionContext \u7684\u9ED8\u8BA4\u72B6\u6001</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> executionContext </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> NoContext</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">batchedEventUpdates$1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prevExecutionContext</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">executionContext</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">executionContext</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">EventContext</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u4FEE\u6539\u72B6\u6001</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">try</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">finally</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">executionContext</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prevExecutionContext</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u8C03\u7528\u7ED3\u675F\u540E\uFF0C\u8C03\u7528 flushSyncCallbackQueue</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">executionContext</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">NoContext</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">flushSyncCallbackQueue</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><img src="https://alvin-cdn.oss-cn-shenzhen.aliyuncs.com/images/setState.png" alt=""></p><p>\u6240\u4EE5\uFF0C\u4E0D\u7BA1\u662F\u76F4\u63A5\u8C03\u7528 flushSyncCallbackQueue \uFF0C\u8FD8\u662F\u63A8\u8FDF\u8C03\u7528\uFF0C\u8FD9\u91CC\u672C\u8D28\u4E0A\u90FD\u662F\u540C\u6B65\u7684\uFF0C\u53EA\u662F\u6709\u4E2A\u5148\u540E\u987A\u5E8F\u7684\u95EE\u9898\u3002</p><h2 id="\u7ED3\u8BBA" tabindex="-1">\u7ED3\u8BBA <a class="header-anchor" href="#\u7ED3\u8BBA" aria-hidden="true">#</a></h2><p><strong>\u540C\u6B65\u60C5\u51B5</strong></p><ol><li>\u5F53\u524D\u662F <code>Legacy \u6A21\u5F0F</code></li><li>\u5728\u975E\u5408\u6210\u4E8B\u4EF6\u4E2D\u6267\u884C <code>setState</code>\uFF0C\u6BD4\u5982 <code>setTimeout</code>, <code>Promise</code>, <code>MessageChannel</code> \u7B49</li></ol><p><strong>\u5F02\u6B65\u60C5\u51B5</strong></p><ol><li>\u5982\u679C\u662F\u5408\u6210\u4E8B\u4EF6\u4E2D\u7684\u56DE\u8C03, <code>executionContext |= EventContext</code>, \u6240\u4EE5\u4E0D\u4F1A\u8FDB\u5165, \u6700\u7EC8\u8868\u73B0\u51FA\u5F02\u6B65</li><li>concurrent \u6A21\u5F0F\u4E0B\u90FD\u4E3A\u5F02\u6B65</li></ol><h2 id="\u6279\u5904\u7406" tabindex="-1">\u6279\u5904\u7406 <a class="header-anchor" href="#\u6279\u5904\u7406" aria-hidden="true">#</a></h2><p>\u5728<strong>React \u5408\u6210\u4E8B\u4EF6</strong>\u4E2D\u6267\u884C\u591A\u6B21 setState \u540E\uFF0Creact \u4F1A\u5408\u5E76\u8FDB\u884C\u4E00\u6B21\u66F4\u65B0\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\uFF0C\u8FD9\u5C31\u662F<strong>\u6279\u5904\u7406</strong>\u7684\u6982\u5FF5\u3002</p><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#82AAFF;">trigger</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">isBatchedUpdate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">runSetState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> age</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">isBatchedUpdate</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">runSetState</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// render \u4E00\u6B21</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">runSetState</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// render \u4E24\u6B21</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>\u5373\u4F7F\u662F async \u51FD\u6570\uFF0CisBatchedUpdate \u4E3A false\uFF0C\u90A3\u591A\u6B21 setState \u5B9E\u9645\u4E0A\u4E5F\u4F1A render \u591A\u6B21\u3002\uFF5E\uFF5E</p><h2 id="\u7ED9\u5F20\u56FE" tabindex="-1">\u7ED9\u5F20\u56FE <a class="header-anchor" href="#\u7ED9\u5F20\u56FE" aria-hidden="true">#</a></h2><p><img src="https://alvin-cdn.oss-cn-shenzhen.aliyuncs.com/images/setState-async.png" alt=""></p>`,21),e=[o];function t(c,r,F,y,D,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
