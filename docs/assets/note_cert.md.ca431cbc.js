/**
 * name: note-book
 * version: v1.0.9
 * description: 笔记本 📚  世界上只有10类人：一类是懂二进制的，一类是不懂的。
 * author: Alimales <only_tigerhu@163.com>
 * homepage: https://www.tigerzh.com
 */
import{_ as e,o as s,c as n,a as l}from"./app.a5d386c5.js";const o=JSON.parse('{"title":"HTTPS 配置示例","description":"","frontmatter":{},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"1. 进入阿里云后台 进入管理控制台>域名","slug":"_1-进入阿里云后台-进入管理控制台-域名","link":"#_1-进入阿里云后台-进入管理控制台-域名","children":[]},{"level":2,"title":"2. 点击蓝色域名进入下面页面","slug":"_2-点击蓝色域名进入下面页面","link":"#_2-点击蓝色域名进入下面页面","children":[]},{"level":2,"title":"3. 免费开启SSL证书>选择证书>填写要申请的前缀(例如: api 证书:api.XXX.com)","slug":"_3-免费开启ssl证书-选择证书-填写要申请的前缀-例如-api-证书-api-xxx-com","link":"#_3-免费开启ssl证书-选择证书-填写要申请的前缀-例如-api-证书-api-xxx-com","children":[]},{"level":2,"title":"4. 下载证书","slug":"_4-下载证书","link":"#_4-下载证书","children":[]},{"level":2,"title":"测试配置是否可用","slug":"测试配置是否可用","link":"#测试配置是否可用","children":[]},{"level":2,"title":"防火墙配置","slug":"防火墙配置","link":"#防火墙配置","children":[]},{"level":2,"title":"命令含义：","slug":"命令含义","link":"#命令含义","children":[]},{"level":2,"title":"重启防火墙","slug":"重启防火墙","link":"#重启防火墙","children":[]}],"relativePath":"note/cert.md"}'),a={name:"note/cert.md"},t=[l('<h1 id="https-配置示例" tabindex="-1">HTTPS 配置示例 <a class="header-anchor" href="#https-配置示例" aria-hidden="true">#</a></h1><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-hidden="true">#</a></h2><p><strong>环境: CentOS Linux release 7.5.1804 (Core)</strong><strong>阿里云 服务器</strong></p><ul><li>按照本文的配置能够服务器添加ssl证书</li><li>开启关闭防火墙</li><li>根据设置开启防火墙白名单</li></ul><h2 id="_1-进入阿里云后台-进入管理控制台-域名" tabindex="-1">1. <strong>进入阿里云后台 进入<code>管理控制台</code>&gt;<code>域名</code></strong> <a class="header-anchor" href="#_1-进入阿里云后台-进入管理控制台-域名" aria-hidden="true">#</a></h2><h2 id="_2-点击蓝色域名进入下面页面" tabindex="-1">2. <strong>点击<code>蓝色域名</code>进入下面页面</strong> <a class="header-anchor" href="#_2-点击蓝色域名进入下面页面" aria-hidden="true">#</a></h2><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/20190415095220405.png" alt="在这里插入图片描述"></p><h2 id="_3-免费开启ssl证书-选择证书-填写要申请的前缀-例如-api-证书-api-xxx-com" tabindex="-1">3. <strong><code>免费开启SSL证书</code>&gt;<code>选择证书</code>&gt;填写要申请的前缀(例如: api 证书:api.XXX.com)</strong> <a class="header-anchor" href="#_3-免费开启ssl证书-选择证书-填写要申请的前缀-例如-api-证书-api-xxx-com" aria-hidden="true">#</a></h2><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/20190415095926933.png" alt="在这里插入图片描述"><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/20190415100205440.png" alt="在这里插入图片描述"></p><h2 id="_4-下载证书" tabindex="-1">4. <strong>下载证书</strong> <a class="header-anchor" href="#_4-下载证书" aria-hidden="true">#</a></h2><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/20190415100326713.png" alt="在这里插入图片描述"><strong>选择服务器类型下载完是zip文件 文件名的三段代表 <code>id_域名_服务器 重命名文件和文件夹为方便记忆的</code></strong></p><blockquote><p><strong>有很多方式可以把证书放入服务器 LZ选择的是放在项目中 通过github的方式上传至服务器</strong></p></blockquote><ul><li><strong>把证书文件夹 放入<code>/etc/nginx</code> (默认配置文件夹)</strong></li><li><code>cp -rf 证书文件夹 /etc/nginx </code></li><li><strong>打开nginx位置文件<code>/etc/nginx/nginx.conf</code> (默认配置文件夹)</strong></li><li><strong><code> vim /etc/nginx/nginx.conf</code></strong></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  server {</span></span>\n<span class="line"><span style="color:#A6ACCD;">    listen 443;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    server_name www.abc.com;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ssl on;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    root /usr/share/nginx/html;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ssl_certificate  cert/www.abc.com.pem;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ssl_certificate_key cert/www.abc.com.key;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ssl_session_timeout 5m;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ssl_prefer_server_ciphers on;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>\n<span class="line"><span style="color:#A6ACCD;">         try_files $uri $uri/ /index.html;</span></span>\n<span class="line"><span style="color:#A6ACCD;">         access_log  /var/log/nginx/blog.log  main;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      }</span></span>\n<span class="line"><span style="color:#A6ACCD;">    }</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>配置完成保存退出</strong></p><h2 id="测试配置是否可用" tabindex="-1"><strong>测试配置是否可用</strong> <a class="header-anchor" href="#测试配置是否可用" aria-hidden="true">#</a></h2><blockquote><p><strong><code>nginx -t</code></strong></p></blockquote><blockquote><p><strong>如果出现下面的字样说明配置可用</strong><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/uPic/20190415102446978.png" alt="在这里插入图片描述"></p></blockquote><ul><li><strong>重载配置(重启nginx)</strong></li></ul><blockquote><p><strong><code>nginx -s reload</code></strong></p></blockquote><h2 id="防火墙配置" tabindex="-1">防火墙配置 <a class="header-anchor" href="#防火墙配置" aria-hidden="true">#</a></h2><p><strong>因为安全问题打开服务器防火墙</strong></p><pre><code>启动一个服务：systemctl start firewalld.service\n关闭一个服务：systemctl stop firewalld.service\n重启一个服务：systemctl restart firewalld.service\n显示一个服务的状态：systemctl status firewalld.service\n在开机时启用一个服务：systemctl enable firewalld.service\n在开机时禁用一个服务：systemctl disable firewalld.service\n查看服务是否开机启动：systemctl is-enabled firewalld.service;echo $?\n查看已启动的服务列表：systemctl list-unit-files|grep enabled\n</code></pre><p><strong>因为项目中使用到数据库有关工具 所以打开防火墙 导致网站端口无法访问</strong></p><ul><li><strong>解决方法:添加端口80 443过滤</strong></li></ul><blockquote><p><strong><code> firewall-cmd --zone=public --add-port=80/tcp --permanent</code></strong></p></blockquote><blockquote><p><strong><code>iptables -I INPUT -p tcp --dport 80 -j ACCEPT</code></strong></p></blockquote><blockquote><p><strong><code> firewall-cmd --zone=public --add-port=443/tcp --permanent</code></strong></p></blockquote><blockquote><p><strong><code>iptables -I INPUT -p tcp --dport 443 -j ACCEPT</code></strong></p></blockquote><p><strong>重新启动nginx大功告成</strong></p><p><strong>关于防火墙</strong></p><blockquote><p><strong><code>firewall-cmd --list-ports</code></strong></p></blockquote><p><strong>开启端口</strong></p><blockquote><p><strong><code>firewall-cmd --zone=public --add-port=80/tcp --permanent</code></strong></p></blockquote><p><strong>命令含义</strong></p><blockquote><p><strong><code>firewall-cmd --zone=public --add-port=80/tcp --permanent</code></strong></p></blockquote><h2 id="命令含义" tabindex="-1">命令含义： <a class="header-anchor" href="#命令含义" aria-hidden="true">#</a></h2><p><code>–zone</code> #作用域</p><p><code>–add-port=80/tcp</code> #添加端口，格式为：端口/通讯协议</p><p><code>–permanent</code> #永久生效，没有此参数重启后失效</p><h2 id="重启防火墙" tabindex="-1">重启防火墙 <a class="header-anchor" href="#重启防火墙" aria-hidden="true">#</a></h2><p><code>firewall-cmd --reload</code> #重启firewall <code>systemctl stop firewalld.service</code> #停止firewall <code>systemctl disable firewalld.service</code> #禁止firewall开机启动 <code>firewall-cmd --state</code> #查看默认防火墙状态（关闭》notrunning，开启》running</p>',42)];const c=e(a,[["render",function(e,l,o,a,c,r){return s(),n("div",null,t)}]]);export{o as __pageData,c as default};
