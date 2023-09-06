import{_ as a,j as e,k as l,S as t}from"./chunks/framework.2ff57350.js";const o=JSON.parse('{"title":"CURL","description":"","frontmatter":{},"headers":[],"relativePath":"tools/curl.md","filePath":"tools/curl.md"}'),s={name:"tools/curl.md"},p=[t('<h1 id="curl" tabindex="-1">CURL <a class="header-anchor" href="#curl" aria-label="Permalink to &quot;CURL&quot;">​</a></h1><p>CURL是一个非常受欢迎的命令行工具，能够通过多种协议进行数据传输。它支持HTTP、FTP、SMTP等协议，是许多开发者和系统管理员的首选工具之一。本文将详细介绍CURL的使用方法，包括命令行参数、常用技巧和注意事项等内容。</p><h3 id="一、什么是curl" tabindex="-1">一、什么是CURL？ <a class="header-anchor" href="#一、什么是curl" aria-label="Permalink to &quot;一、什么是CURL？&quot;">​</a></h3><p>CURL（全称：Client URL）是一个基于命令行的数据传输工具，可以通过多种协议进行数据传输。它最初是由Daniel Stenberg开发的，并得到了广泛的应用和推广。CURL可以用来实现HTTP、FTP、SMTP等协议的数据传输，非常适合需要通过网络进行数据交互的开发任务。CURL程序的源代码是开放的，可以在多种操作系统上使用。</p><h3 id="二、curl的命令行参数" tabindex="-1">二、CURL的命令行参数 <a class="header-anchor" href="#二、curl的命令行参数" aria-label="Permalink to &quot;二、CURL的命令行参数&quot;">​</a></h3><p>CURL的命令行参数非常多，这里列出一些最常用的参数，供读者参考。</p><h5 id="_1、-i-head" tabindex="-1">1、-I/--head <a class="header-anchor" href="#_1、-i-head" aria-label="Permalink to &quot;1、-I/--head&quot;">​</a></h5><p>使用该参数可以只发送HTTP头信息，而不下载HTTP数据。比如：</p><p>$ curl -I www.example.com</p><p>这个命令只会显示HTTP头信息，不会下载网页源代码。</p><h5 id="_2、-l-location" tabindex="-1">2、-L/--location <a class="header-anchor" href="#_2、-l-location" aria-label="Permalink to &quot;2、-L/--location&quot;">​</a></h5><p>如果一个网页返回的是重定向信息，那么CURL默认是不会跟随重定向的。例如：</p><p>$ curl <a href="http://www.example.com" target="_blank" rel="noreferrer">http://www.example.com</a></p><p>如果该网页返回的是重定向信息，那么就会提示“301 Moved Permanently”，但不会跳转到新的地址。如果想要跟随重定向，就需要使用-L参数，例如：</p><p>$ curl -L <a href="http://www.example.com" target="_blank" rel="noreferrer">http://www.example.com</a></p><h5 id="_3、-o-output" tabindex="-1">3、-o/--output <a class="header-anchor" href="#_3、-o-output" aria-label="Permalink to &quot;3、-o/--output&quot;">​</a></h5><p>使用该参数可以将下载的内容保存在本地文件中。比如：</p><p>$ curl -o test.html <a href="http://www.example.com" target="_blank" rel="noreferrer">http://www.example.com</a></p><p>这个命令会将www.example.com的源代码保存在test.html文件中。</p><h5 id="_4、-o-remote-name" tabindex="-1">4、-O/--remote-name <a class="header-anchor" href="#_4、-o-remote-name" aria-label="Permalink to &quot;4、-O/--remote-name&quot;">​</a></h5><p>如果CURL下载的内容是一个文件，那么该文件会被保存在当前目录下，并使用与下载文件相同的名称。如果希望使用默认名称保存文件，可以使用-O参数，例如：</p><h5 id="curl-o-http-www-example-com-test-pdf" tabindex="-1">$ curl -O <a href="http://www.example.com/test.pdf" target="_blank" rel="noreferrer">http://www.example.com/test.pdf</a> <a class="header-anchor" href="#curl-o-http-www-example-com-test-pdf" aria-label="Permalink to &quot;$ curl -O http://www.example.com/test.pdf&quot;">​</a></h5><p>这个命令会下载www.example.com/test.pdf文件，并将其保存在当前目录下，文件名为test.pdf。</p><p>5、-v/--verbose</p><p>使用该参数可以显示CURL的详细处理过程，包括向服务器发送的请求、服务器响应、网络协议信息等。比如：</p><p>$ curl -v <a href="http://www.example.com" target="_blank" rel="noreferrer">http://www.example.com</a></p><p>这个命令会显示CURL向www.example.com发送的请求、服务器返回的响应、以及网络协议信息。</p><h5 id="_6、-a-user-agent" tabindex="-1">6、-A/--user-agent <a class="header-anchor" href="#_6、-a-user-agent" aria-label="Permalink to &quot;6、-A/--user-agent&quot;">​</a></h5><p>使用该参数可以指定CURL发送请求时使用的User-Agent。User-Agent是HTTP协议中的一个标识符，用于标识发送请求的浏览器类型。比如：</p><p>$ curl -A &#39;Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko&#39; <a href="http://www.example.com" target="_blank" rel="noreferrer">http://www.example.com</a></p><p>该命令会发送一个User-Agent为Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko的请求，类似于IE浏览器的请求。</p><h5 id="_7、-u-user" tabindex="-1">7、-u/--user <a class="header-anchor" href="#_7、-u-user" aria-label="Permalink to &quot;7、-u/--user&quot;">​</a></h5><p>使用该参数可以让CURL发送HTTP基本认证信息。HTTP基本认证是一种通过用户名和密码进行的简单认证方式。比如：</p><p>$ curl -u username:password <a href="http://www.example.com" target="_blank" rel="noreferrer">http://www.example.com</a></p><p>该命令会向www.example.com发送一个带有用户名和密码的认证请求。</p><h3 id="三、curl的常用技巧" tabindex="-1">三、CURL的常用技巧 <a class="header-anchor" href="#三、curl的常用技巧" aria-label="Permalink to &quot;三、CURL的常用技巧&quot;">​</a></h3><p>除了命令行参数，CURL还有一些常用的技巧，可以提高开发效率和数据传输质量。下面列出一些常用技巧，供读者参考。</p><h5 id="_1、使用cookie" tabindex="-1">1、使用Cookie <a class="header-anchor" href="#_1、使用cookie" aria-label="Permalink to &quot;1、使用Cookie&quot;">​</a></h5><p>HTTP协议中有一个Cookie机制，可以用来跟踪用户的会话状态。在CURL中，可以使用-cookie参数来处理Cookie。比如：</p><p>$ curl -b &#39;name=value&#39; <a href="http://www.example.com" target="_blank" rel="noreferrer">http://www.example.com</a></p><p>该命令会向www.example.com发送一个带有Cookie信息的请求。需要注意的是，如果Cookie信息中包含空格或其他特殊字符，需要使用双引号或单引号将其括起来。</p><h5 id="_2、处理post请求" tabindex="-1">2、处理POST请求 <a class="header-anchor" href="#_2、处理post请求" aria-label="Permalink to &quot;2、处理POST请求&quot;">​</a></h5><p>在HTTP协议中，POST请求是一种将数据提交到服务器的方式。在CURL中，可以使用-d参数来处理POST请求。比如：</p><p>$ curl -d &#39;name=value&#39; <a href="http://www.example.com" target="_blank" rel="noreferrer">http://www.example.com</a></p><p>该命令会向www.example.com发送一条POST请求，数据为name=value。如果要发送多个数据，可以使用多个-d参数，例如：</p><p>$ curl -d &#39;name=value1&#39; -d &#39;age=18&#39; <a href="http://www.example.com" target="_blank" rel="noreferrer">http://www.example.com</a></p><p>该命令会发送两条数据到www.example.com，分别为name=value1和age=18。</p><h5 id="_3、使用代理服务器" tabindex="-1">3、使用代理服务器 <a class="header-anchor" href="#_3、使用代理服务器" aria-label="Permalink to &quot;3、使用代理服务器&quot;">​</a></h5><p>如果需要在CURL中使用代理服务器，可以使用参数-x/--proxy。比如：</p><p>$ curl -x <a href="http://www.example.com:8080" target="_blank" rel="noreferrer">http://www.example.com:8080</a> <a href="http://www.baidu.com" target="_blank" rel="noreferrer">http://www.baidu.com</a></p><p>该命令会将www.baidu.com的请求发送到代理服务器www.example.com:8080，并由代理服务器转发给www.baidu.com。需要注意的是，如果代理服务器需要进行认证，可以使用参数--proxy-user和--proxy-password来指定代理服务器的用户名和密码。</p><h5 id="_4、下载文件并控制速度" tabindex="-1">4、下载文件并控制速度 <a class="header-anchor" href="#_4、下载文件并控制速度" aria-label="Permalink to &quot;4、下载文件并控制速度&quot;">​</a></h5><p>如果需要限制CURL下载数据的速度，可以使用参数--limit-rate。该参数可以控制CURL的下载速度，其单位为每秒字节数。比如：</p><p>$ curl --limit-rate 100K -O <a href="http://www.example.com/bigfile.zip" target="_blank" rel="noreferrer">http://www.example.com/bigfile.zip</a></p><p>该命令会限制CURL下载bigfile.zip文件的速度不超过100KB/s。</p><h5 id="_5、通过dns解析器访问网络" tabindex="-1">5、通过DNS解析器访问网络 <a class="header-anchor" href="#_5、通过dns解析器访问网络" aria-label="Permalink to &quot;5、通过DNS解析器访问网络&quot;">​</a></h5><p>如果需要使用自己指定的DNS解析器，可以使用参数--dns-servers。比如：</p><p>$ curl --dns-servers 8.8.8.8 <a href="http://www.example.com" target="_blank" rel="noreferrer">http://www.example.com</a></p><p>该命令会使用Google的DNS解析器8.8.8.8来解析www.example.com的IP地址。</p><h3 id="四、curl的注意事项" tabindex="-1">四、CURL的注意事项 <a class="header-anchor" href="#四、curl的注意事项" aria-label="Permalink to &quot;四、CURL的注意事项&quot;">​</a></h3><p>使用CURL需要注意以下一些事项。</p><h5 id="_1、安全性问题" tabindex="-1">1、安全性问题 <a class="header-anchor" href="#_1、安全性问题" aria-label="Permalink to &quot;1、安全性问题&quot;">​</a></h5><p>CURL的设计目标是方便和易用，但也存在一定的安全性问题。特别是，在通过CURL发送HTTP请求时需要慎重处理，避免被黑客利用进行攻击。如需要发送敏感信息，建议使用加密方式进行传输。</p><h5 id="_2、认证问题" tabindex="-1">2、认证问题 <a class="header-anchor" href="#_2、认证问题" aria-label="Permalink to &quot;2、认证问题&quot;">​</a></h5><p>当使用CURL发送HTTP请求时，如果需要进行认证，需要注意认证信息的保密性。为了保护用户的信息安全，建议使用加密方式进行传输，并且定期更新密码。</p><h5 id="_3、网络状况" tabindex="-1">3、网络状况 <a class="header-anchor" href="#_3、网络状况" aria-label="Permalink to &quot;3、网络状况&quot;">​</a></h5><p>CURL的性能和稳定性受网络状况的影响很大。在使用CURL时，需要注意网络状况是否稳定，避免网络故障导致数据传输失败。</p><h5 id="_4、命令行参数" tabindex="-1">4、命令行参数 <a class="header-anchor" href="#_4、命令行参数" aria-label="Permalink to &quot;4、命令行参数&quot;">​</a></h5><p>CURL的命令行参数非常多，具有一定的复杂性。在使用CURL时，需要详细了解每一个命令行参数的含义和用法，以免出现无法预料的问题。</p><h3 id="常用技巧" tabindex="-1">常用技巧 <a class="header-anchor" href="#常用技巧" aria-label="Permalink to &quot;常用技巧&quot;">​</a></h3><ol><li><h5 id="结合管道拷贝返回的数据到剪切板-适用于返回数据太大无法显示" tabindex="-1">结合管道拷贝返回的数据到剪切板（适用于返回数据太大无法显示） <a class="header-anchor" href="#结合管道拷贝返回的数据到剪切板-适用于返回数据太大无法显示" aria-label="Permalink to &quot;结合管道拷贝返回的数据到剪切板（适用于返回数据太大无法显示）&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl http://www.example.com | pbcopy</span></span></code></pre></div></li><li><h5 id="发送post请求" tabindex="-1">发送POST请求： <a class="header-anchor" href="#发送post请求" aria-label="Permalink to &quot;发送POST请求：&quot;">​</a></h5></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl -X POST -d &#39;{&quot;key1&quot;:&quot;value1&quot;, &quot;key2&quot;:&quot;value2&quot;}&#39; https://example.com/api/</span></span></code></pre></div><ol start="3"><li><h5 id="设置http头部" tabindex="-1">设置HTTP头部： <a class="header-anchor" href="#设置http头部" aria-label="Permalink to &quot;设置HTTP头部：&quot;">​</a></h5></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl -H &quot;Authorization: Bearer TOKEN&quot; https://example.com/api/</span></span></code></pre></div><ol start="4"><li><h5 id="下载文件" tabindex="-1">下载文件： <a class="header-anchor" href="#下载文件" aria-label="Permalink to &quot;下载文件：&quot;">​</a></h5></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl -O https://example.com/file.csv</span></span></code></pre></div><ol start="5"><li><h5 id="设置代理" tabindex="-1">设置代理： <a class="header-anchor" href="#设置代理" aria-label="Permalink to &quot;设置代理：&quot;">​</a></h5></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl --proxy http://proxy.example.com:8080 https://example.com/api/</span></span></code></pre></div><ol start="6"><li><h5 id="发送json数据" tabindex="-1">发送JSON数据： <a class="header-anchor" href="#发送json数据" aria-label="Permalink to &quot;发送JSON数据：&quot;">​</a></h5></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl -H &quot;Content-Type: application/json&quot; -d &#39;{&quot;key1&quot;:&quot;value1&quot;, &quot;key2&quot;:&quot;value2&quot;}&#39; https://example.com/api/</span></span></code></pre></div><ol start="7"><li><h5 id="设置超时时间" tabindex="-1">设置超时时间： <a class="header-anchor" href="#设置超时时间" aria-label="Permalink to &quot;设置超时时间：&quot;">​</a></h5></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl --connect-timeout 10 https://example.com/api/</span></span></code></pre></div><ol start="8"><li><h5 id="显示http响应头部" tabindex="-1">显示HTTP响应头部： <a class="header-anchor" href="#显示http响应头部" aria-label="Permalink to &quot;显示HTTP响应头部：&quot;">​</a></h5></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl --head https://example.com/api/</span></span></code></pre></div><ol start="9"><li><h5 id="显示http响应状态码" tabindex="-1">显示HTTP响应状态码： <a class="header-anchor" href="#显示http响应状态码" aria-label="Permalink to &quot;显示HTTP响应状态码：&quot;">​</a></h5></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl -o /dev/null -w &quot;%{http_code}&quot; https://example.com/api/</span></span></code></pre></div><ol start="10"><li><h5 id="发送formdata数据" tabindex="-1">发送FormData数据： <a class="header-anchor" href="#发送formdata数据" aria-label="Permalink to &quot;发送FormData数据：&quot;">​</a></h5></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl -F &#39;key1=value1&#39; -F &#39;key2=value2&#39; https://example.com/api/</span></span></code></pre></div><ol start="11"><li><h5 id="发送put请求" tabindex="-1">发送PUT请求： <a class="header-anchor" href="#发送put请求" aria-label="Permalink to &quot;发送PUT请求：&quot;">​</a></h5></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl -X PUT -d &#39;{&quot;key1&quot;:&quot;value1&quot;, &quot;key2&quot;:&quot;value2&quot;}&#39; https://example.com/api/</span></span></code></pre></div><ol start="12"><li><h5 id="配合chrome调试面板使用" tabindex="-1">配合chrome调试面板使用 <a class="header-anchor" href="#配合chrome调试面板使用" aria-label="Permalink to &quot;配合chrome调试面板使用&quot;">​</a></h5></li></ol><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/image-20230707181815328.png" alt="image-20230707181815328"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl &#39;https://www.google.com.hk/complete/search?q=curl%E7%9A%84%E7%94%A8%E6%B3%95&amp;cp=0&amp;client=desktop-gws-wiz-on-focus-serp&amp;xssi=t&amp;gs_pcrt=3&amp;hl=zh-CN&amp;authuser=0&amp;pq=curl%E7%9A%84%E7%94%A8%E6%B3%95&amp;psi=KuanZLupFtPbkPIP-eez8AI.1688725034734&amp;dpr=1&amp;ofp=EAEYlIPkhe718NByGLL7-47f35Ck9gEY89-jovPo1K6gARicj4z1hZf_vmkYr__a8OqR97npATKwAQoGCgRDdXJsCgwKCmN1cmzoj5zpuJ8KEQoPY3VybCBwb3N06K-35rGCChkKF2N1cmwgZ2V06K-35rGC5bim5Y-C5pWwChIKEGN1cmzoj5zpuJ_mlZnnqIsKDAoKY3VybOW3peWFtwoQCg5jdXJsIGdldOWPguaVsAoMCgpjdXJs5Zyo57q_ChIKEGN1cmzlkb3ku6Tor6bop6MKEgoQY3VybOayoeaciei_lOWbnhBH&amp;newwindow=1&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;authority: www.google.com.hk&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;accept: */*&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;accept-language: zh-CN,zh;q=0.9,en;q=0.8,de;q=0.7&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;cookie: OTZ=7078008_24_24__24_; ANID=AHWqTUmxJ7J54da9yPgt4rc2oKtR1dxnTIB7dYRA7OkFW2kXrbQJ-NYYykmpWyu3; 1P_JAR=2023-07-07-10; AEC=Ad49MVEbAr31Fc73qW_Ubv_06IrOw_DfKwRDJzWgaJYTHDpzyjGzR7fChw; NID=511=aDLzh4ITuKXbQCTvDUVSl07-_KI-cqzVPIxjA0qLxnmoVi36S3Q_omnDOERtOr9TlPGRaOl0mRqk1da7RLFLJSRwIFtC1x8_JeMhqtc-QstIYDM0CX369sfBtGihmhI9nPhBarZwVCvu2FWt_JOAqOn7tbgxL950KYhHPpH9Y1AxFaYyXzCGaDw8FCvsb3YoVcKghp59uA&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;referer: https://www.google.com.hk/&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-ch-ua: &quot;Not.A/Brand&quot;;v=&quot;8&quot;, &quot;Chromium&quot;;v=&quot;114&quot;, &quot;Google Chrome&quot;;v=&quot;114&quot;&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-ch-ua-arch: &quot;arm&quot;&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-ch-ua-bitness: &quot;64&quot;&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-ch-ua-full-version: &quot;114.0.5735.198&quot;&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-ch-ua-full-version-list: &quot;Not.A/Brand&quot;;v=&quot;8.0.0.0&quot;, &quot;Chromium&quot;;v=&quot;114.0.5735.198&quot;, &quot;Google Chrome&quot;;v=&quot;114.0.5735.198&quot;&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-ch-ua-mobile: ?0&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-ch-ua-model: &quot;&quot;&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-ch-ua-platform: &quot;macOS&quot;&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-ch-ua-platform-version: &quot;13.4.1&quot;&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-ch-ua-wow64: ?0&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-fetch-dest: empty&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-fetch-mode: cors&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;sec-fetch-site: same-origin&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  -H &#39;x-client-data: CJC2yQEIpLbJAQipncoBCPzkygEIlaHLAQiEk80BCIagzQEI5LDNAQjus80BCNq0zQEI3L3NAQi8vs0BCNe+zQEIpb/NAQi8v80BCP6/zQEY2J3NAQ==&#39; \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">  --compressed ｜</span></span></code></pre></div>',93)];const r=a(s,[["render",function(a,t,o,s,r,n){return e(),l("div",null,p)}]]);export{o as __pageData,r as default};
