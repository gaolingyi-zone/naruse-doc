import{c as n}from"./app.0cb37c8e.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1><p><code>Naruse</code> \u7684 API \u5305\u62EC <code>Naurse</code> \u5185\u7F6E\u63D0\u4F9B\u7684 API \u4EE5\u53CA\u5BF9\u5C0F\u7A0B\u5E8F\u7684\u7AEF\u80FD\u529B API \u7684\u5C01\u88C5\uFF0C\u540C\u65F6\u5927\u90E8\u5206\u7684\u6807\u51C6\u4E0E\u5C01\u88C5\u65B9\u5F0F\u4E0E <code>Taro</code> \u4FDD\u6301\u7EDF\u4E00\u3002</p><p>\u5176\u4E2D\u5BF9\u5C0F\u7A0B\u5E8F\u7684\u7AEF\u80FD\u529B API \u7684\u5C01\u88C5\uFF0C\u4E3B\u8981\u4F1A\u57FA\u4E8E\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u7684 API \u89C4\u8303\uFF0C\u5BF9\u4E8E\u5176\u4ED6\u5C0F\u7A0B\u5E8F\u7C7B\u4F3C\u7684 API\uFF0C\u4F1A\u5728 Naruse \u4E2D\u9002\u914D\u4E3A\u5C0F\u7A0B\u5E8F API \u7684\u89C4\u8303\u683C\u5F0F\uFF0C\u5E76\u4E14\u90FD\u6302\u8F7D\u5728 Naruse \u547D\u540D\u7A7A\u95F4\u4E0B\u3002</p><p>\u5BF9\u4E8E\u5C0F\u7A0B\u5E8F\u5E73\u53F0\u7279\u6709\u7684 API\uFF0C\u53EF\u4EE5\u5148\u5C1D\u8BD5\u7528 Naruse. + API \u540D\u79F0\u6765\u8FDB\u884C\u8C03\u7528\uFF0C\u5982\u679C\u51FA\u73B0\u672A\u5B9A\u4E49\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u5BF9\u5E94\u5C0F\u7A0B\u5E8F\u5E73\u53F0\u7684\u547D\u540D\u7A7A\u95F4\uFF08\u5982 my\u3001wx \u7B49\uFF09\u6765\u8FDB\u884C\u8C03\u7528\uFF0C\u5E76\u53CD\u9988\u7ED9\u6211\u3002</p><p>\u5F53\u7136\uFF0C\u7531\u4E8E\u5404\u4E2A\u5E73\u53F0\u7684\u5DEE\u5F02\u8FC7\u591A\uFF0C\u4E2A\u4EBA\u7CBE\u529B\u6709\u9650\uFF0C\u4EC5\u7EDF\u4E00\u4E86\u90E8\u5206\u5E73\u53F0API\uFF0C \u6240\u4EE5\u96BE\u514D\u6709\u4E9B API \u6CA1\u6709\u52A0\u5165 Naruse \u7684\u9002\u914D\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u63D0 PR \u6216\u8005 issue\uFF0C\u6765\u83B7\u5F97\u5E2E\u52A9\u3002</p><p>\u672C\u7AE0\u4E3B\u8981\u4ECB\u7ECD\u5DF2\u7ECF\u88AB\u7EDF\u4E00\u7684\u5E73\u53F0 API</p><p>\u540C\u65F6\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u4EE3\u7801\u4E66\u5199\uFF0CNaruse \u9ED8\u8BA4\u5BF9\u5C0F\u7A0B\u5E8F\u7684\u5F02\u6B65 API \u8FDB\u884C\u4E86 promisify \u5316\uFF0C\u4F60\u53EF\u4EE5\u50CF\u4F7F\u7528 Promise \u90A3\u6837\u8FDB\u884C\u8C03\u7528\uFF0C\u4F8B\u5982</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Naruse <span class="token keyword">from</span> <span class="token string">&#39;Naruse&#39;</span>

Naruse<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Storage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;Naruse&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Storage<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,9);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};