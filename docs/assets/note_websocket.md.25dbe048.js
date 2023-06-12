/**
 * name: note-book
 * version: v1.0.9
 * description: 笔记本 📚  世界上只有10类人：一类是懂二进制的，一类是不懂的。
 * author: Alimales <only_tigerhu@163.com>
 * homepage: https://www.tigerzh.com
 */
import{_ as s,o as n,c as a,a as l}from"./app.a5d386c5.js";const p=JSON.parse('{"title":"websocket","description":"","frontmatter":{},"headers":[{"level":3,"title":"WebSocket 是什么？","slug":"websocket-是什么","link":"#websocket-是什么","children":[]},{"level":3,"title":"为什么需要 WebSocket？","slug":"为什么需要-websocket","link":"#为什么需要-websocket","children":[]}],"relativePath":"note/websocket.md"}'),o={name:"note/websocket.md"},e=[l('<h1 id="websocket" tabindex="-1">websocket <a class="header-anchor" href="#websocket" aria-hidden="true">#</a></h1><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/image-20191112122246655.png" alt="image-20191112122246655"></p><p>简单的群聊 websocket demo</p><p>服务端使用ws包而没有使用socket.io</p><p>原因是ws兼容性更好</p><h3 id="websocket-是什么" tabindex="-1">WebSocket 是什么？ <a class="header-anchor" href="#websocket-是什么" aria-hidden="true">#</a></h3><ol><li>建立在 TCP 协议之上的网络通信协议</li><li>全双工通信协议</li><li>没有同源限制</li><li>可以发送文本、二进制数据等</li></ol><h3 id="为什么需要-websocket" tabindex="-1">为什么需要 WebSocket？ <a class="header-anchor" href="#为什么需要-websocket" aria-hidden="true">#</a></h3><p>了解计算机网络协议的人，应该都知道：HTTP 协议是一种无状态的、无连接的、单向的应用层协议。它采用了请求/响应模型。通信请求只能由客户端发起，服务端对请求做出应答处理。</p><p>这种通信模型有一个弊端：HTTP 协议无法实现服务器主动向客户端发起消息。</p><p>因此，如果在客户端想实时监听服务器变化，必须使用 ajax 来进行轮询，效率低，浪费资源。</p><p>而 websocket 就可以使得<strong>前后端进行全双工通信（两方都可以向对方进行数据推送），是真正的平等对话</strong></p><p><strong>服务端代码</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> port </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8080</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ws </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ws</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> wss </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> ws</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Server</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> port </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * 向除了本身之外所有客户端发送消息，实现群聊功能</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">*</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#676E95;font-style:italic;"> 要发送的数据</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">*</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">ws</span><span style="color:#676E95;font-style:italic;"> 客户端连接对象</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>\n<span class="line"><span style="color:#A6ACCD;">wss</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">broadcastToElse</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">broadcast</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ws</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">wss</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clients</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">each</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">client</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">client</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ws</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">client</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">readyState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ws</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">OPEN</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">/* 客户端接入，触发 connection */</span></span>\n<span class="line"><span style="color:#A6ACCD;">wss</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">connection</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">connection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">ws</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ip</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">connection</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">remoteAddress</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 通过req对象可以获得客户端信息，比如：ip，headers等</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/* 客户端发送消息，触发 message */</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ws</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">incoming</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">message</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">ws</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 向客户端发送消息</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">wss</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">broadcastToElse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ws</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 向 其他的 客户端发送消息，实现群聊效果</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><p><strong>客户端代码</strong></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ie=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">html</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">send-box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">send-box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">val</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">发送</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> btn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.btn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.val</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    btn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mssage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">ws</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">周杰伦：</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">mssage</span><span style="color:#89DDFF;">}`</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ws </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">WebSocket</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ws://localhost:8080/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ws</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onopen</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ws</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onmessage</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">message_dom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createDocumentFragment</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">div</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">message_dom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">div</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">message_dom</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ws</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclose</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ws</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onerror</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div>',16)];const t=s(o,[["render",function(s,l,p,o,t,c){return n(),a("div",null,e)}]]);export{p as __pageData,t as default};
