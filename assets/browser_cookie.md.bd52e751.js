import{_ as s,c as o,o as n,a}from"./app.d0ab8007.js";const A=JSON.parse('{"title":"Cookie","description":"","frontmatter":{"title":"Cookie","date":"2020-06-10T16:01:15.000Z","sidebar":"auto","tags":["\u6D4F\u89C8\u5668","cookie"],"categories":["\u6D4F\u89C8\u5668"]},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F\u540C\u7AD9\uFF08\u8DE8\u7AD9\uFF09\uFF0C\u7B2C\u4E09\u65B9 cookie","slug":"\u4EC0\u4E48\u662F\u540C\u7AD9\uFF08\u8DE8\u7AD9\uFF09\uFF0C\u7B2C\u4E09\u65B9-cookie","link":"#\u4EC0\u4E48\u662F\u540C\u7AD9\uFF08\u8DE8\u7AD9\uFF09\uFF0C\u7B2C\u4E09\u65B9-cookie","children":[]},{"level":2,"title":"Cookie \u8FFD\u8E2A\u7528\u6237\u884C\u4E3A\uFF0C\u4EE3\u7801\u793A\u4F8B","slug":"cookie-\u8FFD\u8E2A\u7528\u6237\u884C\u4E3A\uFF0C\u4EE3\u7801\u793A\u4F8B","link":"#cookie-\u8FFD\u8E2A\u7528\u6237\u884C\u4E3A\uFF0C\u4EE3\u7801\u793A\u4F8B","children":[]},{"level":2,"title":"Cookie \u76F8\u5173\u5C5E\u6027","slug":"cookie-\u76F8\u5173\u5C5E\u6027","link":"#cookie-\u76F8\u5173\u5C5E\u6027","children":[]},{"level":2,"title":"Cookie \u4E00\u4E9B\u6982\u5FF5 & Session","slug":"cookie-\u4E00\u4E9B\u6982\u5FF5-session","link":"#cookie-\u4E00\u4E9B\u6982\u5FF5-session","children":[]}],"relativePath":"browser/cookie.md","lastUpdated":1667967634000}'),l={name:"browser/cookie.md"},p=a(`<ul><li><a href="https://juejin.cn/post/6844904115080790023" target="_blank" rel="noreferrer">\u770B\u5B8C\u8FD9\u7BC7 Session\u3001Cookie\u3001Token\uFF0C\u548C\u9762\u8BD5\u5B98\u626F\u76AE\u5C31\u6CA1\u95EE\u9898\u4E86</a></li><li><a href="https://cloud.tencent.com/developer/article/1751237" target="_blank" rel="noreferrer">\u6982\u5FF5\u533A\u5206\uFF0C\u4EC0\u4E48\u662F\u8DE8\u7AD9\uFF0C\u4EC0\u4E48\u662F\u8DE8\u57DF</a></li><li><a href="https://juejin.cn/post/6844904095271288840" target="_blank" rel="noreferrer">\u5F53 CORS \u9047\u5230 SameSite</a></li><li><a href="https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html" target="_blank" rel="noreferrer">\u962E\u4E00\u5CF0\uFF1ACookie \u7684 SameSite \u5C5E\u6027</a></li><li><a href="https://juejin.cn/post/6844904128557105166" target="_blank" rel="noreferrer">\u2728 \u5F53\u6D4F\u89C8\u5668\u5168\u9762\u7981\u7528\u4E09\u65B9 Cookie</a></li><li><a href="https://www.youtube.com/watch?v=lrNwwcA9SKs" target="_blank" rel="noreferrer">\u2728 Chrome 80+\u4EE5\u5F8C\u7684\u7B2C\u4E09\u65B9 cookie \u653F\u7B56</a></li></ul><h2 id="\u4EC0\u4E48\u662F\u540C\u7AD9\uFF08\u8DE8\u7AD9\uFF09\uFF0C\u7B2C\u4E09\u65B9-cookie" tabindex="-1">\u4EC0\u4E48\u662F\u540C\u7AD9\uFF08\u8DE8\u7AD9\uFF09\uFF0C\u7B2C\u4E09\u65B9 cookie <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u540C\u7AD9\uFF08\u8DE8\u7AD9\uFF09\uFF0C\u7B2C\u4E09\u65B9-cookie" aria-hidden="true">#</a></h2><ul><li>\u8DE8\u57DF cross-orgin\uFF1A\u8001\u751F\u5E38\u8C08\uFF0C\u534F\u8BAE\u3001\u57DF\u540D\u3001\u7AEF\u53E3\u6709\u4E00\u4E2A\u4E0D\u4E00\u6837\u5C31\u8DE8\u57DF\u4E86</li><li>\u540C\u7AD9 cross-site\uFF1ACookie \u4E0E\u6B64\u606F\u606F\u76F8\u5173\uFF0CCookie \u5B9E\u9645\u4E0A\u9075\u5B88\u7684\u662F\u201C\u540C\u7AD9\u201D\u7B56\u7565\uFF0C\u540C\u7AD9\u7684 <code>cookie</code> \u53EF\u4EE5\u5171\u4EAB.</li></ul><blockquote><p><strong>\u53EA\u8981\u4E24\u4E2A URL \u7684 eTLD+1 \u76F8\u540C\u5373\u662F\u540C\u7AD9, \u4E5F\u5373\u6709\u6548\u9876\u7EA7\u57DF\u540D+\u4E8C\u7EA7\u57DF\u540D</strong></p></blockquote><ul><li><code>eTLD</code>: \u5373 <code>effective top-level domain</code> (\u6709\u6548\u9876\u7EA7\u57DF)\u3002</li><li>\u516C\u5171\u540E\u7F00\u5217\u8868: <a href="https://publicsuffix.org/" target="_blank" rel="noreferrer">Public Suffix List\uFF08PSL\uFF09</a></li></ul><table><thead><tr><th>URL</th><th>\u662F\u5426\u540C\u7AD9</th><th>\u7406\u7531</th></tr></thead><tbody><tr><td>sugarat.top</td><td>\u2705</td><td>eTLD+1 \u4E00\u81F4</td></tr><tr><td>ep.sugarat.top</td><td>\u2705</td><td>eTLD+1 \u4E00\u81F4</td></tr><tr><td>ep.sugarat.top:8080</td><td>\u2705</td><td>eTLD+1 \u4E00\u81F4</td></tr><tr><td><a href="http://baidu.com" target="_blank" rel="noreferrer">baidu.com</a></td><td>\u274C</td><td>eTLD \u4E0D\u4E00\u81F4</td></tr></tbody></table><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A<code>web.alvin.com</code> \u4E0E <code>service.alvin.com</code> \u5177\u6709\u76F8\u540C\u7684\u4E8C\u7EA7\u57DF\u540D\uFF0C\u53EF\u4EE5\u770B\u4F5C\u662F\u540C\u7AD9\u4E0D\u540C\u6E90(same-site, cross-origin)\u3002\u4F46\uFF0C<code>web.github.io</code> \u4E0E <code>service.github.io</code> \u5219\u662F\u4E0D\u540C\u7684\u7AD9\u70B9\u4E0D\u540C\u7684\u6E90(cross-site, cross-origin)\uFF0C\u56E0\u4E3A <a href="http://github.io" target="_blank" rel="noreferrer">github.io</a> \u5C5E\u4E8E\u516C\u5171\u540E\u7F00\uFF08<a href="https://github.com/publicsuffix/list" target="_blank" rel="noreferrer">Public Suffix</a>\uFF09\u3002</p><p>\u7B2C\u4E09\u65B9 cookie \u7684\u6982\u5FF5\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u4E2A\u4EBA\u7406\u89E3\uFF1A\u540C\u7AD9\u5185\u5171\u4EAB\u7684 cookie \uFF0C\u90FD\u662F\u7B2C\u4E00\u65B9\u3001\u5176\u4ED6\u4F8B\u5982\u8DE8\u57DF\u7B49\u4EA7\u751F\u7684 cookie \u5C5E\u4E8E\u7B2C\u4E09\u65B9 cookie\u3002</p><p>chrome 80+ \u7248\u672C\u540E\u9ED8\u8BA4 sameSite \u4E3A <code>lax</code>, \u4E5F\u5C31\u662F\u9ED8\u8BA4\u5927\u90E8\u5206\u7B2C\u4E09\u65B9 cookie \u65E0\u6CD5\u88AB\u4F7F\u7528\u5566\u3002</p><h2 id="cookie-\u8FFD\u8E2A\u7528\u6237\u884C\u4E3A\uFF0C\u4EE3\u7801\u793A\u4F8B" tabindex="-1">Cookie \u8FFD\u8E2A\u7528\u6237\u884C\u4E3A\uFF0C\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#cookie-\u8FFD\u8E2A\u7528\u6237\u884C\u4E3A\uFF0C\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u4E86\u89E3 cookie \u7684\u4E00\u4E2A\u91CD\u8981\u7684\u7528\u6CD5\uFF0C\u6BD4\u5982\u6211\u5728\u767E\u5EA6\u641C\u7D22\u4E86\u559C\u6B22\u7684\u6C34\u679C\u82F9\u679C\uFF0C\u90A3\u4E48\u5728\u6C34\u679C\u8D2D\u4E70\u7F51\u7AD9\u901A\u8FC7 cookie \u62FF\u5230\u7528\u6237\u559C\u597D\uFF0C\u81EA\u52A8\u63A8\u8350\u82F9\u679C\u7684\u76F8\u5173\u94FE\u63A5\u3002</p><p>\u6F14\u793A\u7248\u672C chrome 80+\uFF0C\u6240\u4EE5\u8981\u7981\u7528 samesite \u5C5E\u6027\u624D\u884C\uFF0C\u5426\u5219\u7B2C\u4E09\u65B9 cookie \u65E0\u6CD5\u88AB\u643A\u5E26\uFF01</p><p><strong>index.html</strong></p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4F60\u7684\u559C\u597D</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">sendFav</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">apple</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">apple</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">sendFav</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">banana</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">banana</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sendFav</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">xhr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">XMLHttpRequest</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">http://localhost:3000/api?fav=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">withCredentials</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>server.js</strong></p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> express </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">express</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">express</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> express</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Router</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> port </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">hello world!, cookie: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">headers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cookie</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/api</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">header</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Access-Control-Allow-Origin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">headers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">origin</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">header</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Access-Control-Allow-Credentials</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cookie</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fav</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fav</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    secure</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//</span></span>
<span class="line"><span style="color:#F07178;">    sameSite</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ok</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> router)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(port</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Example app listening at http://localhost:</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">port</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u6709\u51E0\u4E2A\u6CE8\u610F\u70B9\uFF0C</p><ol><li>xhr \u643A\u5E26 cookie\uFF0C\u9700\u8981\u8BBE\u7F6E <code>withCredentials = true</code>, \u670D\u52A1\u7AEF <code>Access-Control-Allow-Origin</code> \u4E0D\u80FD\u4E3A <code>*</code></li><li>\u7981\u7528 <code>samesite</code>\uFF0C\u4F7F\u5F97\u7B2C\u4E09\u65B9 <code>cookie</code> \u5F97\u4EE5\u4F7F\u7528\uFF0C\u9700\u8981\u8BBE\u7F6E <code>secure = true</code></li></ol><p><img src="https://alvin-cdn.oss-cn-shenzhen.aliyuncs.com/images/samesite.png" alt=""></p><h2 id="cookie-\u76F8\u5173\u5C5E\u6027" tabindex="-1">Cookie \u76F8\u5173\u5C5E\u6027 <a class="header-anchor" href="#cookie-\u76F8\u5173\u5C5E\u6027" aria-hidden="true">#</a></h2><p><img src="https://alvin-cdn.oss-cn-shenzhen.aliyuncs.com/images/cookie3.png" alt=""></p><p>\u91CD\u70B9\u8BB2\u4E00\u4E0B\uFF1A</p><ul><li><code>httpOnly</code>: boolean\uFF0C\u4E0D\u80FD\u901A\u8FC7 document.cookie \u8BBF\u95EE\u5230 cookie\uFF0C\u6709\u6548\u9632\u6B62 xss \u653B\u51FB</li><li><code>secure</code>: true, cookie \u53EA\u4F1A\u5728 https \u548C ssl \u7B49\u5B89\u5168\u534F\u8BAE\u4E0B\u4F20\u8F93</li><li><code>samesite</code>\uFF1A\u7B2C\u4E09\u65B9 cookie \u7684\u4E00\u4E9B\u7B56\u7565\uFF0C\u540E\u9762\u8BB2\u5230\u3002</li><li><code>path</code>: \u9650\u5236 cookie \u7684\u8DEF\u7531\u5339\u914D\uFF0C\u6BD4\u5982 <code>/test</code> <code>/test/aa</code>, \u524D\u8005\u5305\u5BB9\u540E\u8005\uFF0C\u9ED8\u8BA4\u662F <code>/</code>\u3002</li><li><code>domain</code>: cookie \u7684 domain\uFF0C\u6BD4\u5982 <code>.baidu.com</code>, \u90A3\u4E48 <code>a.baidu.com</code>\u3001<code>b.baidu.com</code> \u53EF\u4EE5\u5171\u4EAB\u3002</li><li><code>expires/max-age</code>: \u8FC7\u671F\u65F6\u95F4\u3002</li></ul><p><strong>sameSite \u5C5E\u6027</strong></p><ul><li><code>Strict</code>\uFF1A\u5B8C\u5168\u7981\u6B62\u7B2C\u4E09\u65B9 Cookie\uFF0C\u8DE8\u7AD9\u70B9\u65F6\uFF0C\u4EFB\u4F55\u60C5\u51B5\u4E0B\u90FD\u4E0D\u4F1A\u53D1\u9001 Cookie\u3002</li><li><code>Lax</code>: <img src="https://alvin-cdn.oss-cn-shenzhen.aliyuncs.com/images/samesite-lax.png" alt=""></li><li><code>None</code>\uFF1A\u663E\u5F0F\u5173\u95ED <code>SameSite</code> \u5C5E\u6027\uFF0C\u4E0D\u8FC7\uFF0C\u524D\u63D0\u662F\u5FC5\u987B\u540C\u65F6\u8BBE\u7F6E <code>Secure</code> \u5C5E\u6027</li></ul><h2 id="cookie-\u4E00\u4E9B\u6982\u5FF5-session" tabindex="-1">Cookie \u4E00\u4E9B\u6982\u5FF5 &amp; Session <a class="header-anchor" href="#cookie-\u4E00\u4E9B\u6982\u5FF5-session" aria-hidden="true">#</a></h2><p>\u53EF\u80FD\u9762\u8BD5\u5E38\u95EE\uFF0C\u8FD9\u91CC\u7B80\u5355\u5217\u4E00\u4E0B\u3002</p><p><strong>1. \u4EC0\u4E48\u662F Cookie\uFF1F</strong></p><p>HTTP \u662F\u65E0\u72B6\u6001\u7684\u534F\u8BAE\uFF08\u5BF9\u4E8E\u4E8B\u52A1\u5904\u7406\u6CA1\u6709\u8BB0\u5FC6\u80FD\u529B\uFF0C\u6BCF\u6B21\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4F1A\u8BDD\u5B8C\u6210\u65F6\uFF0C\u670D\u52A1\u7AEF\u4E0D\u4F1A\u4FDD\u5B58\u4EFB\u4F55\u4F1A\u8BDD\u4FE1\u606F\uFF09\uFF1A\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u662F\u5B8C\u5168\u72EC\u7ACB\u7684\uFF0C\u670D\u52A1\u7AEF\u65E0\u6CD5\u786E\u8BA4\u5F53\u524D\u8BBF\u95EE\u8005\u7684\u8EAB\u4EFD\u4FE1\u606F\uFF0C\u65E0\u6CD5\u5206\u8FA8\u4E0A\u4E00\u6B21\u7684\u8BF7\u6C42\u53D1\u9001\u8005\u548C\u8FD9\u4E00\u6B21\u7684\u53D1\u9001\u8005\u662F\u4E0D\u662F\u540C\u4E00\u4E2A\u4EBA\u3002\u6240\u4EE5\u670D\u52A1\u5668\u4E0E\u6D4F\u89C8\u5668\u4E3A\u4E86\u8FDB\u884C\u4F1A\u8BDD\u8DDF\u8E2A\uFF08\u77E5\u9053\u662F\u8C01\u5728\u8BBF\u95EE\u6211\uFF09\uFF0C\u5C31\u5FC5\u987B\u4E3B\u52A8\u7684\u53BB\u7EF4\u62A4\u4E00\u4E2A\u72B6\u6001\uFF0C\u8FD9\u4E2A\u72B6\u6001\u7528\u4E8E\u544A\u77E5\u670D\u52A1\u7AEF\u524D\u540E\u4E24\u4E2A\u8BF7\u6C42\u662F\u5426\u6765\u81EA\u540C\u4E00\u6D4F\u89C8\u5668\u3002\u800C\u8FD9\u4E2A\u72B6\u6001\u9700\u8981\u901A\u8FC7 cookie \u6216\u8005 session \u53BB\u5B9E\u73B0\u3002</p><p><strong>2. Cookie \u8BBE\u7F6E\u7684\u8FC7\u7A0B\u3002</strong></p><p>\u5BA2\u6237\u7AEF\u53D1\u9001\u8BF7\u6C42 -&gt; \u670D\u52A1\u7AEF\u8BBE\u7F6E <code>Cookie</code> -&gt; \u6D4F\u89C8\u5668\u4FDD\u5B58 <code>Cookie</code>, \u4EE5\u540E\u6BCF\u6B21\u8BF7\u6C42\u90FD\u5E26\u4E0A\u3002</p><p><strong>3. Cookie \u7684\u4F5C\u7528\u3002</strong></p><ul><li>\u4F1A\u8BDD\u72B6\u6001\u7BA1\u7406\uFF08\u5982\u7528\u6237\u767B\u5F55\u72B6\u6001\u3001\u8D2D\u7269\u8F66\u3001\u6E38\u620F\u5206\u6570\u6216\u5176\u5B83\u9700\u8981\u8BB0\u5F55\u7684\u4FE1\u606F\uFF09</li><li>\u4E2A\u6027\u5316\u8BBE\u7F6E\uFF08\u5982\u7528\u6237\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u3001\u4E3B\u9898\u7B49\uFF09</li><li>\u6D4F\u89C8\u5668\u884C\u4E3A\u8DDF\u8E2A\uFF08\u5982\u8DDF\u8E2A\u5206\u6790\u7528\u6237\u884C\u4E3A\u7B49\uFF09</li></ul><p><strong>4. \u4E0E Session \u7684\u533A\u522B\u3002</strong></p><p>\u9996\u5148\u6CE8\u610F\u3002Session \u662F\u4F9D\u8D56\u4E8E Cookie \u7684\uFF0C\u5982\u679C Cookie \u88AB\u7981\u7528\u4E86\uFF0CSession \u4E5F\u7528\u4E0D\u4E86\u3002</p><p>\u5BA2\u6237\u7AEF\u53D1\u9001\u8BF7\u6C42 -&gt; \u670D\u52A1\u7AEF\u8BBE\u7F6E <code>Cookie</code>\uFF0C\u91CC\u9762\u53EF\u80FD\u53EA\u6709 sessionId -&gt; \u6D4F\u89C8\u5668\u4FDD\u5B58 <code>Cookie</code>, \u4EE5\u540E\u6BCF\u6B21\u8BF7\u6C42\u90FD\u5E26\u4E0A\u3002</p><p>\u6700\u5927\u533A\u522B\u83AB\u8FC7\u4E8E\u4E00\u4E2A\u662F\u5B58\u50A8\u5728\u6D4F\u89C8\u5668\u7AEF\uFF0C\u663E\u800C\u6613\u89C1\u4E0D\u5B89\u5168\u3001\u800C Session \u4FDD\u5B58\u5728\u670D\u52A1\u7AEF\uFF0C\u76F8\u5BF9\u5B89\u5168\u3002\u57FA\u4E8E\u8FD9\u4E00\u70B9\uFF0C\u53EF\u89C1\uFF1A</p><p>\u9AD8\u5E76\u53D1\u7684\u65F6\u5019 Session \u7531\u4E8E\u662F\u5728\u670D\u52A1\u7AEF\u7684\uFF0C\u6240\u4EE5\u538B\u529B\u5927\uFF0C\u6240\u4EE5\u7B80\u5355\u7684\u6765\u8BF4 session \u4E00\u822C\u8BBE\u7F6E\u5931\u6548\u65F6\u95F4\u8F83\u77ED\u3002</p>`,38),e=[p];function t(c,r,F,D,y,i){return n(),o("div",null,e)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};
