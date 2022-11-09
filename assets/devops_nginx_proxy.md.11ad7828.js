import{_ as s,c as n,o as a,a as p}from"./app.d0ab8007.js";const i=JSON.parse('{"title":"nginx \u4EE3\u7406","description":"","frontmatter":{"title":"nginx \u4EE3\u7406","date":"2019-07-15T13:00:28.000Z","sidebar":"auto","tags":["nginx","\u6280\u672F\u6F2B\u8C08"],"categories":["\u6280\u672F\u6F2B\u8C08"]},"headers":[],"relativePath":"devops/nginx/proxy.md","lastUpdated":1667967634000}'),l={name:"devops/nginx/proxy.md"},o=p(`<ul><li><code>X-Forwarded-For</code>: \u5B57\u9762\u610F\u601D\u662F\u201C\u4E3A\u8C01\u800C\u8F6C\u53D1\u201D\uFF0C\u8FFD\u52A0\u7684\u662F\u8BF7\u6C42\u65B9\u7684 IP \u5730\u5740\u3002</li><li><code>X-Real-IP</code>: \u53E6\u4E00\u79CD\u83B7\u53D6\u5BA2\u6237\u7AEF\u771F\u5B9E IP \u7684\u624B\u6BB5\uFF0C\u5B83\u7684\u4F5C\u7528\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u8BB0\u5F55\u5BA2\u6237\u7AEF IP \u5730\u5740\uFF0C\u6CA1\u6709\u4E2D\u95F4\u7684\u4EE3\u7406\u4FE1\u606F\uFF0C\u76F8\u5F53\u4E8E\u662F\u201CX-Forwarded-For\u201D\u7684\u7B80\u5316\u7248\u3002\u5982\u679C\u5BA2\u6237\u7AEF\u548C\u6E90\u670D\u52A1\u5668\u4E4B\u95F4\u53EA\u6709\u4E00\u4E2A\u4EE3\u7406\uFF0C\u90A3\u4E48\u8FD9\u4E24\u4E2A\u5B57\u6BB5\u7684\u503C\u5C31\u662F\u76F8\u540C\u7684\u3002</li><li><code>X-Forwarded-Proto</code>: \u5B83\u4F5C\u7528\u4E0E\u201CX-Real-IP\u201D\u7C7B\u4F3C\uFF0C\u53EA\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7684\u4FE1\u606F, \u8BB0\u5F55\u539F\u59CB\u534F\u8BAE\u540D</li><li><code>X-Forwarded-Host</code>: \u5B83\u4F5C\u7528\u4E0E\u201CX-Real-IP\u201D\u7C7B\u4F3C\uFF0C\u53EA\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7684\u4FE1\u606F, \u8BB0\u5F55\u539F\u59CB\u57DF\u540D\u3002</li></ul><p>demo:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen  1234</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  root /work/4003-test-react-blog/build</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  index index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  location /api </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Real-IP          </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr:</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_port</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u5BA2\u6237\u7AEF\u771F\u5B9E IP + PORT</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Forwarded-Host   </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_host</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u8BBF\u95EE\u7684\u670D\u52A1\u5668\u7684 IP + PORT</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Forwarded-Proto  </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">scheme</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u534F\u8BAE</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_set_header X-Forwarded-For    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://127.0.0.1:9000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6DFB\u52A0\u4E86 <code>proxy_set_header</code> \u670D\u52A1\u7AEF\u5728\u8BF7\u6C42\u5C31\u53EF\u4EE5\u901A\u8FC7\u8BF7\u6C42\u5934\u62FF\u5230\u8BBE\u7F6E\u7684\u4FE1\u606F\u3002 \u5982</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Koa </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">koa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Koa</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">====&gt; </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">headers</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ip</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">9000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://127.0.0.1:9000</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// &#39;x-real-ip&#39;: &#39;192.168.1.74:59999&#39;,</span></span>
<span class="line"><span style="color:#676E95;">// &#39;x-forwarded-host&#39;: &#39;192.168.1.117:1234&#39;,</span></span>
<span class="line"><span style="color:#676E95;">// &#39;x-forwarded-proto&#39;: &#39;http&#39;,</span></span>
<span class="line"><span style="color:#676E95;">// &#39;x-forwarded-for&#39;: &#39;192.168.1.74&#39;,</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function c(t,r,D,y,F,A){return a(),n("div",null,e)}const d=s(l,[["render",c]]);export{i as __pageData,d as default};
