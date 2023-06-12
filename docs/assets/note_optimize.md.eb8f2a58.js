/**
 * name: note-book
 * version: v1.0.9
 * description: 笔记本 📚  世界上只有10类人：一类是懂二进制的，一类是不懂的。
 * author: Alimales <only_tigerhu@163.com>
 * homepage: https://www.tigerzh.com
 */
import{_ as s,o as n,c as a,a as p}from"./app.a5d386c5.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"note/optimize.md"}'),o={name:"note/optimize.md"},e=[p('<h5 id="页面性能优化方案-web-application" tabindex="-1">页面性能优化方案（ <strong>Web Application</strong>） <a class="header-anchor" href="#页面性能优化方案-web-application" aria-hidden="true">#</a></h5><ul><li>客户端开启gzip打包</li><li>服务端配置gzipe</li></ul><p><strong>判断是否开启gziped</strong></p><ul><li>查看控制台network下请求的资源文件response-headers的content-encoding属性是否为gzip</li></ul><p><strong>Nginx开启配置</strong></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">代码片段</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">##</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># Gzip Settings</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">##</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">gzip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">gzip_disable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">msie6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">gzip_comp_level</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">gzip_min_length</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">256</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">gzip_vary</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">gzip_proxied</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">any</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># gzip_buffers 16 8k;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># gzip_http_version 1.1;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">gzip_types</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/atom+xml</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/javascript</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/x-javascript</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/json</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/ld+json</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/manifest+json</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/rss+xml</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/vnd.geo+json</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/vnd.ms-fontobject</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/x-font-ttf</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/x-web-app-manifest+json</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/xhtml+xml</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">application/xml</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">font/opentype</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">image/bmp</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">image/svg+xml</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">image/x-icon</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">text/cache-manifest</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">text/css</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">text/plain</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">text/vcard</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">text/vnd.rim.location.xloc</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">text/vtt</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">text/x-component</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">text/x-cross-domain-policy</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><p><strong>完整示例</strong></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#FFCB6B;">worker_processes</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#FFCB6B;">pid</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/run/nginx.pid</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFCB6B;">events</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">worker_connections</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># multi_accept on;</span></span>\n<span class="line"><span style="color:#A6ACCD;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">##</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># Basic Settings</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">##</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">sendfile</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">tcp_nopush</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">tcp_nodelay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">keepalive_timeout</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">types_hash_max_size</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2048</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># server_tokens off;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">client_max_body_size</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">100m</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">server_names_hash_bucket_size</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">128</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># server_name_in_redirect off;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/nginx/mime.types</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">default_type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">application/octet-stream</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">proxy_intercept_errors</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">##</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># Logging Settings</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">##</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">log_format</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">access</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$remote_addr - $remote_user [$time_local] &quot;$request&quot; </span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">&#39;</span><span style="color:#A6ACCD;">$status $body_bytes_sent </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$http_referer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#A6ACCD;">$http_user_agent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> $http_x_forwarded_for </span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">$http_host</span><span style="color:#C3E88D;">，</span><span style="color:#A6ACCD;"> $upstream_addr</span><span style="color:#C3E88D;">，</span><span style="color:#A6ACCD;">$upstream_response_time </span><span style="color:#C3E88D;">，</span><span style="color:#A6ACCD;">$request_time</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">  access_log /data/logs/nginx_access.log  access;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">  ##</span></span>\n<span class="line"><span style="color:#C3E88D;">  # Gzip Settings</span></span>\n<span class="line"><span style="color:#C3E88D;">  ##</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">  gzip on;</span></span>\n<span class="line"><span style="color:#C3E88D;">  gzip_disable &quot;msie6&quot;;</span></span>\n<span class="line"><span style="color:#C3E88D;">  gzip_comp_level 5;</span></span>\n<span class="line"><span style="color:#C3E88D;">  gzip_min_length 256;</span></span>\n<span class="line"><span style="color:#C3E88D;">  gzip_vary on;</span></span>\n<span class="line"><span style="color:#C3E88D;">  gzip_proxied any;</span></span>\n<span class="line"><span style="color:#C3E88D;">  # gzip_buffers 16 8k;</span></span>\n<span class="line"><span style="color:#C3E88D;">  # gzip_http_version 1.1;</span></span>\n<span class="line"><span style="color:#C3E88D;">  gzip_types</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/atom+xml</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/javascript</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/x-javascript</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/json</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/ld+json</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/manifest+json</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/rss+xml</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/vnd.geo+json</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/vnd.ms-fontobject</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/x-font-ttf</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/x-web-app-manifest+json</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/xhtml+xml</span></span>\n<span class="line"><span style="color:#C3E88D;">    application/xml</span></span>\n<span class="line"><span style="color:#C3E88D;">    font/opentype</span></span>\n<span class="line"><span style="color:#C3E88D;">    image/bmp</span></span>\n<span class="line"><span style="color:#C3E88D;">    image/svg+xml</span></span>\n<span class="line"><span style="color:#C3E88D;">    image/x-icon</span></span>\n<span class="line"><span style="color:#C3E88D;">    text/cache-manifest</span></span>\n<span class="line"><span style="color:#C3E88D;">    text/css</span></span>\n<span class="line"><span style="color:#C3E88D;">    text/plain</span></span>\n<span class="line"><span style="color:#C3E88D;">    text/vcard</span></span>\n<span class="line"><span style="color:#C3E88D;">    text/vnd.rim.location.xloc</span></span>\n<span class="line"><span style="color:#C3E88D;">    text/vtt</span></span>\n<span class="line"><span style="color:#C3E88D;">    text/x-component</span></span>\n<span class="line"><span style="color:#C3E88D;">    text/x-cross-domain-policy;</span></span>\n<span class="line"><span style="color:#C3E88D;"> # text/html is always compressed by gzip module</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">  ##</span></span>\n<span class="line"><span style="color:#C3E88D;">  # nginx-naxsi config</span></span>\n<span class="line"><span style="color:#C3E88D;">  ##</span></span>\n<span class="line"><span style="color:#C3E88D;">  # Uncomment it if you installed nginx-naxsi</span></span>\n<span class="line"><span style="color:#C3E88D;">  ##</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">  #include /etc/nginx/naxsi_core.rules;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">  ##</span></span>\n<span class="line"><span style="color:#C3E88D;">  # nginx-passenger config</span></span>\n<span class="line"><span style="color:#C3E88D;">  ##</span></span>\n<span class="line"><span style="color:#C3E88D;">  # Uncomment it if you installed nginx-passenger</span></span>\n<span class="line"><span style="color:#C3E88D;">  ##</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">  #passenger_root /usr;</span></span>\n<span class="line"><span style="color:#C3E88D;">  #passenger_ruby /usr/bin/ruby;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">  ##</span></span>\n<span class="line"><span style="color:#C3E88D;">  # Virtual Host Configs</span></span>\n<span class="line"><span style="color:#C3E88D;">  ##</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">  include /etc/nginx/conf.d/*.conf;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">  server {</span></span>\n<span class="line"><span style="color:#C3E88D;">    if ($host = qtflows.com) {</span></span>\n<span class="line"><span style="color:#C3E88D;">        set $domain $1;</span></span>\n<span class="line"><span style="color:#C3E88D;">        #rewrite ^(.*) https://$domain$1 break;</span></span>\n<span class="line"><span style="color:#C3E88D;">        rewrite ^ https://$http_host$request_uri? permanent;</span></span>\n<span class="line"><span style="color:#C3E88D;">    }</span></span>\n<span class="line"><span style="color:#C3E88D;">    if ($host = www.qtflows.com) {</span></span>\n<span class="line"><span style="color:#C3E88D;">        return 301 https://$host$request_uri;</span></span>\n<span class="line"><span style="color:#C3E88D;">    }</span></span>\n<span class="line"><span style="color:#C3E88D;">    </span></span>\n<span class="line"><span style="color:#C3E88D;">    listen 80;</span></span>\n<span class="line"><span style="color:#C3E88D;">    server_name qtflows.com www.qtflows.com;</span></span>\n<span class="line"><span style="color:#C3E88D;">    return 404;</span></span>\n<span class="line"><span style="color:#C3E88D;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">  upstream qcluster {</span></span>\n<span class="line"><span style="color:#C3E88D;">    ip_hash;</span></span>\n<span class="line"><span style="color:#C3E88D;">    server 127.0.0.1:81;</span></span>\n<span class="line"><span style="color:#C3E88D;">  }</span></span>\n<span class="line"><span style="color:#C3E88D;">  upstream backup {</span></span>\n<span class="line"><span style="color:#C3E88D;">    ip_hash;</span></span>\n<span class="line"><span style="color:#C3E88D;">    server 172.31.13.246:81;</span></span>\n<span class="line"><span style="color:#C3E88D;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">  server {</span></span>\n<span class="line"><span style="color:#C3E88D;">    listen 443 ssl;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">    ssl_certificate /etc/nginx/cert/www.qtflows.com.pem;</span></span>\n<span class="line"><span style="color:#C3E88D;">    ssl_certificate_key /etc/nginx/cert/www.qtflows.com.key;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;</span></span>\n<span class="line"><span style="color:#C3E88D;">    ssl_prefer_server_ciphers on;</span></span>\n<span class="line"><span style="color:#C3E88D;">    ssl_dhparam /etc/ssl/certs/dhparam.pem;</span></span>\n<span class="line"><span style="color:#C3E88D;">    ssl_ciphers </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">;</span></span>\n<span class="line"><span style="color:#C3E88D;">    ssl_session_timeout 1h;</span></span>\n<span class="line"><span style="color:#C3E88D;">    ssl_session_cache shared:SSL:50m;</span></span>\n<span class="line"><span style="color:#C3E88D;">    ssl_stapling on;</span></span>\n<span class="line"><span style="color:#C3E88D;">    ssl_stapling_verify on;</span></span>\n<span class="line"><span style="color:#C3E88D;">    # add_header Strict-Transport-Security max-age=15768000;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">    server_name qtflows.com www.qtflows.com;            # 站点名称</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C3E88D;">    location / {</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_pass http://qcluster;</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_set_header X-Real-IP $remote_addr;</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_set_header Host $host;</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_set_header Protocol-qutke $scheme;</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_http_version 1.1;</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_redirect ~^http://(.*?):\\d+(.*)$ https://$1$2;</span></span>\n<span class="line"><span style="color:#C3E88D;">      error_page 404 403 502 504 = @fallback;</span></span>\n<span class="line"><span style="color:#C3E88D;">    }</span></span>\n<span class="line"><span style="color:#C3E88D;">    location @fallback {</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_pass http://backup;</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_set_header X-Real-IP $remote_addr;</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_set_header Host $host;</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_set_header Protocol-qutke $scheme;</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>\n<span class="line"><span style="color:#C3E88D;">      proxy_http_version 1.1;</span></span>\n<span class="line"><span style="color:#C3E88D;">    }</span></span>\n<span class="line"><span style="color:#C3E88D;">  }</span></span>\n<span class="line"><span style="color:#C3E88D;">}</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div>',8)];const c=s(o,[["render",function(s,p,l,o,c,t){return n(),a("div",null,e)}]]);export{l as __pageData,c as default};
