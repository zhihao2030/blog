import{_ as s,c as n,o as a,a as l}from"./app.d0ab8007.js";const i=JSON.parse('{"title":"\u6700\u957F\u4E0D\u542B\u91CD\u590D\u5B57\u7B26\u7684\u5B50\u4E32","description":"","frontmatter":{"title":"\u6700\u957F\u4E0D\u542B\u91CD\u590D\u5B57\u7B26\u7684\u5B50\u4E32","date":"2022-03-31T20:46:00.000Z","sidebar":"auto","tags":["\u5B57\u7B26\u4E32"],"categories":["leetcode"]},"headers":[{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF","link":"#\u601D\u8DEF","children":[]},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801","link":"#\u4EE3\u7801","children":[]}],"relativePath":"algorithm/\u5B57\u7B26\u4E32/\u6700\u957F\u4E0D\u542B\u91CD\u590D\u5B57\u7B26\u7684\u5B50\u5B57\u7B26\u4E32.md","lastUpdated":1667967634000}'),p={name:"algorithm/\u5B57\u7B26\u4E32/\u6700\u957F\u4E0D\u542B\u91CD\u590D\u5B57\u7B26\u7684\u5B50\u5B57\u7B26\u4E32.md"},o=l(`<div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFCB6B;">\u8F93\u5165</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abcabcbb</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">\u8F93\u51FA</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#FFCB6B;">\u89E3\u91CA</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">\u8F93\u5165</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bbbbb</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">\u8F93\u51FA</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#FFCB6B;">\u89E3\u91CA</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">\u8F93\u5165</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pwwkew</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">\u8F93\u51FA</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#FFCB6B;">\u89E3\u91CA</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F\xA0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wke</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0    \u8BF7\u6CE8\u610F\uFF0C\u4F60\u7684\u7B54\u6848\u5FC5\u987B\u662F \u5B50\u4E32 \u7684\u957F\u5EA6\uFF0C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pwke</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\xA0\u662F\u4E00\u4E2A\u5B50\u5E8F\u5217\uFF0C\u4E0D\u662F\u5B50\u4E32\u3002</span></span>
<span class="line"></span></code></pre></div><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><ol><li>\u8FD9\u91CC\u7528\u54C8\u5E0C + \u53CC\u6307\u9488\u3002end++\uFF0C\u8BB0\u5F55\u6BCF\u6B21\u5B57\u7B26\u51FA\u73B0\u7684\u4F4D\u7F6E</li><li>\u5982\u679C\u53D1\u73B0\u5B57\u7B26\u5728 map \u91CC\u9762\uFF0C\u8868\u793A\u5F53\u524D\u91CD\u590D\u4E86\uFF0C\u90A3\u4E48\u9700\u8981\u66F4\u65B0 start \u6307\u9488</li></ol><h2 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> lengthOfLongestSubstring </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">start</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">map</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;">])) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u66F4\u65B0\u5DE6\u6307\u9488</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u56E0\u4E3A\u4E0A\u6B21 char \u7684\u8BB0\u5F55 \u53EF\u80FD\u672A\u66F4\u65B0\uFF0C\u6240\u4EE5\u5224\u65AD l \u6307\u9488\u6BCF\u6B21\u90FD\u662F\u5411\u524D\u7684\uFF01</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">start</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">start</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">start</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(c,r,F,y,D,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
