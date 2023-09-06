import{_ as a,j as s,k as l,S as e}from"./chunks/framework.2ff57350.js";const o=JSON.parse('{"title":"MYSQL入门指南","description":"","frontmatter":{},"headers":[],"relativePath":"note/mysql入门教程.md","filePath":"note/mysql入门教程.md"}'),n={name:"note/mysql入门教程.md"},t=[e('<h1 id="mysql入门指南" tabindex="-1">MYSQL入门指南 <a class="header-anchor" href="#mysql入门指南" aria-label="Permalink to &quot;MYSQL入门指南&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ol><li><h3 id="进入mysql官网-mysql-com" tabindex="-1">进入mysql官网（mysql.com） <a class="header-anchor" href="#进入mysql官网-mysql-com" aria-label="Permalink to &quot;进入mysql官网（mysql.com）&quot;">​</a></h3><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/image-20230617142101224.png" alt="image-20230617142101224"></p></li><li><h3 id="顶部点击downloads页面并滑动底部选择mysql-community-gpl-downloads-»" tabindex="-1">顶部点击downloads页面并滑动底部选择<a href="https://dev.mysql.com/downloads/" target="_blank" rel="noreferrer">MySQL Community (GPL) Downloads »</a> <a class="header-anchor" href="#顶部点击downloads页面并滑动底部选择mysql-community-gpl-downloads-»" aria-label="Permalink to &quot;顶部点击downloads页面并滑动底部选择[MySQL Community (GPL) Downloads »](https://dev.mysql.com/downloads/)&quot;">​</a></h3><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/image-20230617142137366.png" alt="image-20230617142137366"></p></li><li><h3 id="mysql-community-gpl-downloads-»选择页面中社区版本" tabindex="-1"><a href="https://dev.mysql.com/downloads/" target="_blank" rel="noreferrer">MySQL Community (GPL) Downloads »</a>选择页面中社区版本 <a class="header-anchor" href="#mysql-community-gpl-downloads-»选择页面中社区版本" aria-label="Permalink to &quot;[MySQL Community (GPL) Downloads »](https://dev.mysql.com/downloads/)选择页面中社区版本&quot;">​</a></h3><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/image-20230617142232559.png" alt="image-20230617142232559"></p></li><li><p>版本选择</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>进入后页面会默认给我们推荐最新版本，但是做过后端开发的人都知道一条不成文的规则</p><p><strong>不选最新的，只选最稳的</strong></p><p>所以这里我选择5.7.24版本</p></div><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/image-20230617142534276.png" alt="image-20230617142534276"></p></li><li><p>点击下载并解压，小白建议选择安装包</p><p><img src="https://c18e-1257416358.cos.accelerate.myqcloud.com/image-20230617143333461.png" alt="image-20230617143333461"></p></li></ol><h2 id="在-windows-操作系统上安装-mysql-的步骤" tabindex="-1">在 Windows 操作系统上安装 MySQL 的步骤： <a class="header-anchor" href="#在-windows-操作系统上安装-mysql-的步骤" aria-label="Permalink to &quot;在 Windows 操作系统上安装 MySQL 的步骤：&quot;">​</a></h2><ol><li><h3 id="按照上述步骤安装获取安装包-网站会根据不同的系统安装不同的版本" tabindex="-1">按照上述步骤安装获取安装包 网站会根据不同的系统安装不同的版本 <a class="header-anchor" href="#按照上述步骤安装获取安装包-网站会根据不同的系统安装不同的版本" aria-label="Permalink to &quot;按照上述步骤安装获取安装包 网站会根据不同的系统安装不同的版本&quot;">​</a></h3></li></ol><p>在上述官网下载适用于 Windows 的 MySQL 安装包。下载后的文件应该是以 .msi 或者 .zip 结尾的。</p><ol start="2"><li><h3 id="安装-mysql" tabindex="-1">安装 MySQL <a class="header-anchor" href="#安装-mysql" aria-label="Permalink to &quot;安装 MySQL&quot;">​</a></h3></li></ol><p>双击下载好的安装包，按照提示进行安装。在安装过程中，你将会被要求输入 root 用户的密码。请确保为 root 用户设置一个强密码，以保证 MySQL 数据库的安全。</p><ol start="3"><li><h3 id="配置-mysql" tabindex="-1">配置 MySQL <a class="header-anchor" href="#配置-mysql" aria-label="Permalink to &quot;配置 MySQL&quot;">​</a></h3></li></ol><p>安装完成后，你需要进行一些配置工作。首先，打开一个命令提示符窗口，转到 MySQL 安装文件的 bin 目录中。</p><p>接下来，输入以下命令以启动 MySQL：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql -u root -p</span></span></code></pre></div><p>此命令将使用 root 用户的凭据连接到 MySQL 服务器。当提示输入密码时，请输入您为 root 用户设置的密码。</p><ol start="4"><li><h3 id="创建和管理数据库" tabindex="-1">创建和管理数据库 <a class="header-anchor" href="#创建和管理数据库" aria-label="Permalink to &quot;创建和管理数据库&quot;">​</a></h3></li></ol><p>现在，你已经可以创建和管理数据库了。在 MySQL 命令提示符下，输入以下命令创建新的数据库：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CREATE DATABASE mydatabase;</span></span></code></pre></div><p>在上面的命令中，“mydatabase” 是你要创建的数据库名称。您可以将其更改为任何名称。</p><ol start="5"><li><h3 id="连接到数据库" tabindex="-1">连接到数据库 <a class="header-anchor" href="#连接到数据库" aria-label="Permalink to &quot;连接到数据库&quot;">​</a></h3></li></ol><p>要连接到已创建的数据库，输入以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">USE mydatabase;</span></span></code></pre></div><p>在上面的命令中，“mydatabase” 是您要连接的数据库名称。</p><p>现在，你已经成功的安装和使用了 MySQL 数据库。</p><h2 id="ubuntu-安装-mysql" tabindex="-1">Ubuntu 安装 MySQL： <a class="header-anchor" href="#ubuntu-安装-mysql" aria-label="Permalink to &quot;Ubuntu 安装 MySQL：&quot;">​</a></h2><ol><li><h3 id="打开终端-执行以下命令更新-apt-get" tabindex="-1">打开终端，执行以下命令更新 apt-get： <a class="header-anchor" href="#打开终端-执行以下命令更新-apt-get" aria-label="Permalink to &quot;打开终端，执行以下命令更新 apt-get：&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt-get update</span></span></code></pre></div></li><li><h3 id="执行以下命令安装-mysql" tabindex="-1">执行以下命令安装 MySQL： <a class="header-anchor" href="#执行以下命令安装-mysql" aria-label="Permalink to &quot;执行以下命令安装 MySQL：&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt-get install mysql-server</span></span></code></pre></div></li><li><h3 id="安装过程中会提示设置-root-账户的密码。" tabindex="-1">安装过程中会提示设置 root 账户的密码。 <a class="header-anchor" href="#安装过程中会提示设置-root-账户的密码。" aria-label="Permalink to &quot;安装过程中会提示设置 root 账户的密码。&quot;">​</a></h3></li><li><h3 id="安装完成后-可以检查-mysql-是否已经成功安装" tabindex="-1">安装完成后，可以检查 MySQL 是否已经成功安装： <a class="header-anchor" href="#安装完成后-可以检查-mysql-是否已经成功安装" aria-label="Permalink to &quot;安装完成后，可以检查 MySQL 是否已经成功安装：&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo systemctl status mysql</span></span></code></pre></div></li><li><h3 id="若显示-active-running-则说明-mysql-已经成功安装并在运行。" tabindex="-1">若显示 &quot;active (running)&quot;，则说明 MySQL 已经成功安装并在运行。 <a class="header-anchor" href="#若显示-active-running-则说明-mysql-已经成功安装并在运行。" aria-label="Permalink to &quot;若显示 &quot;active (running)&quot;，则说明 MySQL 已经成功安装并在运行。&quot;">​</a></h3><p>注：在 Ubuntu 18.04 中，MySQL 被 MariaDB 替代作为默认的数据库系统，在命令中只需将 &quot;mysql-server&quot; 改为 &quot;mariadb-server&quot; 即可安装 MariaDB。</p></li><li><h3 id="创建远程访问用户并授权" tabindex="-1">创建远程访问用户并授权： <a class="header-anchor" href="#创建远程访问用户并授权" aria-label="Permalink to &quot;创建远程访问用户并授权：&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GRANT ALL PRIVILEGES ON *.* TO &#39;你的用户名&#39;@&#39;%&#39; IDENTIFIED BY &#39;你的密码&#39; WITH GRANT OPTION;</span></span>\n<span class="line"><span style="color:#A6ACCD;">FLUSH PRIVILEGES;</span></span></code></pre></div><p>修改 MySQL 配置文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vi /etc/my.cnf</span></span></code></pre></div><p>在 <code>[mysqld]</code> 段中添加以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bind-address=0.0.0.0</span></span></code></pre></div><p>保存并退出。重启 MySQL：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">service mysqld restart</span></span></code></pre></div></li></ol><h2 id="使用-navicat-远程链接-mysql" tabindex="-1">使用 Navicat 远程链接 MySQL： <a class="header-anchor" href="#使用-navicat-远程链接-mysql" aria-label="Permalink to &quot;使用 Navicat 远程链接 MySQL：&quot;">​</a></h2><ol><li><h3 id="打开-navicat-点击-连接-。" tabindex="-1">打开 Navicat，点击“连接”。 <a class="header-anchor" href="#打开-navicat-点击-连接-。" aria-label="Permalink to &quot;打开 Navicat，点击“连接”。&quot;">​</a></h3></li><li><h3 id="在-新建连接-界面填写连接信息" tabindex="-1">在“新建连接”界面填写连接信息： <a class="header-anchor" href="#在-新建连接-界面填写连接信息" aria-label="Permalink to &quot;在“新建连接”界面填写连接信息：&quot;">​</a></h3><ul><li>连接名：随意命名</li><li>主机名/IP地址：输入 CentOS 的 IP 地址</li><li>端口：默认为 3306，如果修改了 MySQL 的端口，需要修改此处</li><li>用户名：刚才创建的远程访问用户的用户名</li><li>密码：刚才创建的远程访问用户的密码</li></ul></li><li><h3 id="点击-测试连接-按钮-测试连接是否成功。" tabindex="-1">点击“测试连接”按钮，测试连接是否成功。 <a class="header-anchor" href="#点击-测试连接-按钮-测试连接是否成功。" aria-label="Permalink to &quot;点击“测试连接”按钮，测试连接是否成功。&quot;">​</a></h3></li><li><h3 id="如果测试连接成功-点击-保存并连接-按钮-即可将连接保存并连接到数据库。" tabindex="-1">如果测试连接成功，点击“保存并连接”按钮，即可将连接保存并连接到数据库。 <a class="header-anchor" href="#如果测试连接成功-点击-保存并连接-按钮-即可将连接保存并连接到数据库。" aria-label="Permalink to &quot;如果测试连接成功，点击“保存并连接”按钮，即可将连接保存并连接到数据库。&quot;">​</a></h3></li></ol><h3 id="navicat-远程链接-mysql" tabindex="-1">Navicat 远程链接 MySQL： <a class="header-anchor" href="#navicat-远程链接-mysql" aria-label="Permalink to &quot;Navicat 远程链接 MySQL：&quot;">​</a></h3><ol><li><h3 id="打开-navicat-点击-连接-选择-mysql-。" tabindex="-1">打开 Navicat，点击 &quot;连接&quot;，选择 &quot;MySQL&quot;。 <a class="header-anchor" href="#打开-navicat-点击-连接-选择-mysql-。" aria-label="Permalink to &quot;打开 Navicat，点击 &quot;连接&quot;，选择 &quot;MySQL&quot;。&quot;">​</a></h3></li><li><h3 id="在-连接属性-中-输入以下信息" tabindex="-1">在 &quot;连接属性&quot; 中，输入以下信息： <a class="header-anchor" href="#在-连接属性-中-输入以下信息" aria-label="Permalink to &quot;在 &quot;连接属性&quot; 中，输入以下信息：&quot;">​</a></h3><ul><li>主机名或 IP: 要连接的 Linux 主机的 IP 地址</li><li>端口号: 默认为 3306</li><li>用户名: MySQL 的用户名</li><li>密码: MySQL 的密码</li></ul></li><li><h4 id="点击-测试连接-按钮-若出现-connection-successful-则说明连接成功-即可点击-连接-按钮开始使用。" tabindex="-1">点击 &quot;测试连接&quot; 按钮，若出现 &quot;Connection successful&quot;，则说明连接成功，即可点击 &quot;连接&quot; 按钮开始使用。 <a class="header-anchor" href="#点击-测试连接-按钮-若出现-connection-successful-则说明连接成功-即可点击-连接-按钮开始使用。" aria-label="Permalink to &quot;点击 &quot;测试连接&quot; 按钮，若出现 &quot;Connection successful&quot;，则说明连接成功，即可点击 &quot;连接&quot; 按钮开始使用。&quot;">​</a></h4></li></ol><p>注：在 Ubuntu 中，MySQL 默认只监听本地地址，不允许远程连接，需要更改 MySQL 的配置文件，将 &quot;bind-address&quot; 设置为 &quot;0.0.0.0&quot;，并开放 3306 端口，才能允许远程连接。若不需远程连接，可以跳过这一步。</p><h2 id="初始化-mysql-密码" tabindex="-1">初始化 MySQL 密码 <a class="header-anchor" href="#初始化-mysql-密码" aria-label="Permalink to &quot;初始化 MySQL 密码&quot;">​</a></h2><ol><li><h3 id="打开终端-并使用以下命令停止-mysql-服务" tabindex="-1">打开终端，并使用以下命令停止 MySQL 服务： <a class="header-anchor" href="#打开终端-并使用以下命令停止-mysql-服务" aria-label="Permalink to &quot;打开终端，并使用以下命令停止 MySQL 服务：&quot;">​</a></h3></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo /usr/local/mysql/support-files/mysql.server stop</span></span></code></pre></div><ol start="2"><li><h3 id="使用以下命令再次启动-mysql-服务-但是使用-skip-grant-tables-选项跳过授权表检查-这样就可以无需密码访问-mysql-服务器了" tabindex="-1">使用以下命令再次启动 MySQL 服务，但是使用 <code>--skip-grant-tables</code> 选项跳过授权表检查，这样就可以无需密码访问 MySQL 服务器了： <a class="header-anchor" href="#使用以下命令再次启动-mysql-服务-但是使用-skip-grant-tables-选项跳过授权表检查-这样就可以无需密码访问-mysql-服务器了" aria-label="Permalink to &quot;使用以下命令再次启动 MySQL 服务，但是使用 `--skip-grant-tables` 选项跳过授权表检查，这样就可以无需密码访问 MySQL 服务器了：&quot;">​</a></h3></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables &amp;</span></span></code></pre></div><p>注意：此时 MySQL 服务不会以守护进程方式运行，因此终端将锁定。</p><ol start="3"><li><h3 id="打开另一个终端窗口-使用以下命令连接到-mysql-服务器" tabindex="-1">打开另一个终端窗口，使用以下命令连接到 MySQL 服务器： <a class="header-anchor" href="#打开另一个终端窗口-使用以下命令连接到-mysql-服务器" aria-label="Permalink to &quot;打开另一个终端窗口，使用以下命令连接到 MySQL 服务器：&quot;">​</a></h3></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql -u root</span></span></code></pre></div><p>如果成功连接到服务器，会看到以下命令提示符：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql&gt;</span></span></code></pre></div><ol start="4"><li><h3 id="运行以下命令设置新的密码-例如-设置密码为-123456" tabindex="-1">运行以下命令设置新的密码，例如，设置密码为 <code>123456</code>： <a class="header-anchor" href="#运行以下命令设置新的密码-例如-设置密码为-123456" aria-label="Permalink to &quot;运行以下命令设置新的密码，例如，设置密码为 `123456`：&quot;">​</a></h3></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">UPDATE mysql.user SET authentication_string=PASSWORD(&#39;123456&#39;) WHERE User=&#39;root&#39;;</span></span></code></pre></div><ol start="5"><li><h3 id="运行以下命令-刷新-mysql-权限表" tabindex="-1">运行以下命令，刷新 MySQL 权限表： <a class="header-anchor" href="#运行以下命令-刷新-mysql-权限表" aria-label="Permalink to &quot;运行以下命令，刷新 MySQL 权限表：&quot;">​</a></h3></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">FLUSH PRIVILEGES;</span></span></code></pre></div><ol start="6"><li><h3 id="使用以下命令停止-mysql-服务" tabindex="-1">使用以下命令停止 MySQL 服务： <a class="header-anchor" href="#使用以下命令停止-mysql-服务" aria-label="Permalink to &quot;使用以下命令停止 MySQL 服务：&quot;">​</a></h3></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo /usr/local/mysql/support-files/mysql.server stop</span></span></code></pre></div><ol start="7"><li><h3 id="使用以下命令启动-mysql-服务-让新密码生效" tabindex="-1">使用以下命令启动 MySQL 服务，让新密码生效： <a class="header-anchor" href="#使用以下命令启动-mysql-服务-让新密码生效" aria-label="Permalink to &quot;使用以下命令启动 MySQL 服务，让新密码生效：&quot;">​</a></h3></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo /usr/local/mysql/support-files/mysql.server start</span></span></code></pre></div><p>现在，您可以使用 <code>root</code> 用户和新密码连接到 MySQL 服务器了。</p><h2 id="设置-mysql-的字符集" tabindex="-1">设置 MySQL 的字符集： <a class="header-anchor" href="#设置-mysql-的字符集" aria-label="Permalink to &quot;设置 MySQL 的字符集：&quot;">​</a></h2><ol><li><h3 id="打开终端-进入-mysql-安装目录" tabindex="-1">打开终端，进入 MySQL 安装目录： <a class="header-anchor" href="#打开终端-进入-mysql-安装目录" aria-label="Permalink to &quot;打开终端，进入 MySQL 安装目录：&quot;">​</a></h3></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd /usr/local/mysql/bin/</span></span></code></pre></div><ol start="2"><li><h3 id="启动-mysql-客户端" tabindex="-1">启动 MySQL 客户端： <a class="header-anchor" href="#启动-mysql-客户端" aria-label="Permalink to &quot;启动 MySQL 客户端：&quot;">​</a></h3></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">./mysql -u root -p</span></span></code></pre></div><ol start="3"><li><h3 id="输入-mysql-的-root-用户密码。" tabindex="-1">输入 MySQL 的 root 用户密码。 <a class="header-anchor" href="#输入-mysql-的-root-用户密码。" aria-label="Permalink to &quot;输入 MySQL 的 root 用户密码。&quot;">​</a></h3></li><li><h3 id="进入-mysql-命令行后-执行以下语句来设置-mysql-字符集" tabindex="-1">进入 MySQL 命令行后，执行以下语句来设置 MySQL 字符集： <a class="header-anchor" href="#进入-mysql-命令行后-执行以下语句来设置-mysql-字符集" aria-label="Permalink to &quot;进入 MySQL 命令行后，执行以下语句来设置 MySQL 字符集：&quot;">​</a></h3></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">set character_set_server=utf8mb4;</span></span>\n<span class="line"><span style="color:#A6ACCD;">set collation_server=utf8mb4_unicode_ci;</span></span></code></pre></div><ol start="5"><li><h3 id="执行完毕后-可以通过以下语句来查看是否设置成功" tabindex="-1">执行完毕后，可以通过以下语句来查看是否设置成功： <a class="header-anchor" href="#执行完毕后-可以通过以下语句来查看是否设置成功" aria-label="Permalink to &quot;执行完毕后，可以通过以下语句来查看是否设置成功：&quot;">​</a></h3></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">show variables like &#39;%character%&#39;;</span></span>\n<span class="line"><span style="color:#A6ACCD;">show variables like &#39;%collation%&#39;;</span></span></code></pre></div><p>如果查看结果中的 character_set_server 和 collation_server 的值为 utf8mb4 和 utf8mb4_unicode_ci，则说明设置成功。</p><h2 id="以下是-mysql-命令的一些常用操作-以及一些重要的参数。" tabindex="-1">以下是 MySQL 命令的一些常用操作，以及一些重要的参数。 <a class="header-anchor" href="#以下是-mysql-命令的一些常用操作-以及一些重要的参数。" aria-label="Permalink to &quot;以下是 MySQL 命令的一些常用操作，以及一些重要的参数。&quot;">​</a></h2><ol><li><h3 id="连接-mysql-服务器" tabindex="-1">连接 MySQL 服务器 <a class="header-anchor" href="#连接-mysql-服务器" aria-label="Permalink to &quot;连接 MySQL 服务器&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hostname</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">username</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span></span></code></pre></div><ol start="2"><li><h3 id="显示帮助信息" tabindex="-1">显示帮助信息 <a class="header-anchor" href="#显示帮助信息" aria-label="Permalink to &quot;显示帮助信息&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span></span></code></pre></div><ol start="3"><li><h3 id="退出-mysql" tabindex="-1">退出 MySQL <a class="header-anchor" href="#退出-mysql" aria-label="Permalink to &quot;退出 MySQL&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">exit</span></span></code></pre></div><ol start="4"><li><h3 id="创建数据库" tabindex="-1">创建数据库 <a class="header-anchor" href="#创建数据库" aria-label="Permalink to &quot;创建数据库&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database_name</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="5"><li><h3 id="删除数据库" tabindex="-1">删除数据库 <a class="header-anchor" href="#删除数据库" aria-label="Permalink to &quot;删除数据库&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database_name</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="6"><li><h3 id="显示数据库列表" tabindex="-1">显示数据库列表 <a class="header-anchor" href="#显示数据库列表" aria-label="Permalink to &quot;显示数据库列表&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">SHOW</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DATABASES</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="7"><li><h3 id="使用指定数据库" tabindex="-1">使用指定数据库 <a class="header-anchor" href="#使用指定数据库" aria-label="Permalink to &quot;使用指定数据库&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">USE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database_name</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="8"><li><h3 id="显示所有数据表" tabindex="-1">显示所有数据表 <a class="header-anchor" href="#显示所有数据表" aria-label="Permalink to &quot;显示所有数据表&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">SHOW</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TABLES</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="9"><li><h3 id="创建数据表" tabindex="-1">创建数据表 <a class="header-anchor" href="#创建数据表" aria-label="Permalink to &quot;创建数据表&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table_name</span><span style="color:#A6ACCD;"> (column1 </span><span style="color:#C3E88D;">datatype,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">column2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">datatype,....</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="10"><li><h3 id="删除数据表" tabindex="-1">删除数据表 <a class="header-anchor" href="#删除数据表" aria-label="Permalink to &quot;删除数据表&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table_name</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="11"><li><h3 id="插入数据" tabindex="-1">插入数据 <a class="header-anchor" href="#插入数据" aria-label="Permalink to &quot;插入数据&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">INSERT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INTO</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table_name</span><span style="color:#A6ACCD;"> (column1, </span><span style="color:#C3E88D;">column2,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">column3,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span><span style="color:#A6ACCD;">) VALUES </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value1,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">value2,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">value3,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">);</span></span></code></pre></div><ol start="12"><li><h3 id="更新数据" tabindex="-1">更新数据 <a class="header-anchor" href="#更新数据" aria-label="Permalink to &quot;更新数据&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">UPDATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">column1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">value1,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">column2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">value2,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WHERE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">condition</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="13"><li><h3 id="删除数据" tabindex="-1">删除数据 <a class="header-anchor" href="#删除数据" aria-label="Permalink to &quot;删除数据&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">DELETE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WHERE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">condition</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="14"><li><h3 id="查询数据" tabindex="-1">查询数据 <a class="header-anchor" href="#查询数据" aria-label="Permalink to &quot;查询数据&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">column1,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">column2,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WHERE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">condition</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="15"><li><h3 id="创建索引" tabindex="-1">创建索引 <a class="header-anchor" href="#创建索引" aria-label="Permalink to &quot;创建索引&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INDEX</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table_name</span><span style="color:#A6ACCD;"> (column1, </span><span style="color:#C3E88D;">column2,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="16"><li><h3 id="删除索引" tabindex="-1">删除索引 <a class="header-anchor" href="#删除索引" aria-label="Permalink to &quot;删除索引&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INDEX</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table_name</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ol start="17"><li><h3 id="显示-mysql-版本信息" tabindex="-1">显示 MySQL 版本信息 <a class="header-anchor" href="#显示-mysql-版本信息" aria-label="Permalink to &quot;显示 MySQL 版本信息&quot;">​</a></h3></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VERSION</span><span style="color:#89DDFF;">();</span></span></code></pre></div><h3 id="高级的-mysql-命令" tabindex="-1">高级的 MySQL 命令： <a class="header-anchor" href="#高级的-mysql-命令" aria-label="Permalink to &quot;高级的 MySQL 命令：&quot;">​</a></h3><ol><li><p>EXPLAIN命令：用于查看MySQL查询执行的详细信息，如表的连接类型、执行顺序、访问类型和索引使用情况等。</p></li><li><p>SHOW PROFILE命令：用于分析查询性能，可以查看MySQL服务器执行查询语句的各项性能指标，如CPU、内存、IO等。</p></li><li><p>SHOW ENGINE命令：用于查看MySQL存储引擎的详细信息。</p></li><li><p>SET命令：用于修改MySQL服务器的配置选项，如字符编码、缓存大小、查询缓存等。</p></li><li><p>HANDLER命令：用于查看或操作表处理器中的统计信息，如行数、索引值等。</p></li><li><p>CREATE FUNCTION命令：用于创建自定义的MySQL函数。</p></li><li><p>CREATE TRIGGER命令：用于创建触发器，以在执行INSERT、UPDATE、DELETE操作时自动执行一段SQL代码。</p></li><li><p>CREATE VIEW命令：用于创建虚拟表，以便于查询和管理数据。</p></li><li><p>CREATE INDEX命令：用于创建索引以加快MySQL数据库的查询速度。</p></li><li><p>LOAD DATA INFILE命令：用于将外部数据文件导入到MySQL数据库中。</p></li><li><p>OPTIMIZE TABLE命令：用于优化MySQL数据库中的表结构、数据和索引等，以提高查询性能和存储空间利用率。</p></li><li><p>LOCK TABLES和UNLOCK TABLES命令：用于在操作MySQL数据库时锁定或解锁一张表，以避免数据的并发访问导致的问题。</p></li><li><p>SHOW MASTER STATUS和SHOW SLAVE STATUS命令：用于在MySQL数据库中查看主从复制的状态和信息。</p></li><li><p>BACKUP和RESTORE命令：用于备份和恢复MySQL数据库，保证数据的可靠性和完整性。</p></li><li><p>CHECK命令：用于检查MySQL数据库的完整性和一致性，以保证数据的质量和正确性。</p></li><li><p>UNION/UNION ALL: 合并查询结果，UNION会去重，UNION ALL不会去重。</p></li><li><p>CROSS JOIN: 返回两个表的笛卡尔积。</p></li><li><p>INNER JOIN: 只返回两个表中都存在的数据（交集）。</p></li><li><p>LEFT JOIN: 返回左表中的所有数据和右表中匹配的数据。</p></li><li><p>RIGHT JOIN: 返回右表中的所有数据和左表中匹配的数据。</p></li><li><p>FULL OUTER JOIN: 返回左表和右表中所有的数据，不匹配的位置为NULL。</p></li><li><p>GROUP BY: 按照指定字段分组。</p></li><li><p>HAVING: 对分组后的结果进行筛选。</p></li><li><p>ORDER BY: 对结果进行排序。</p></li><li><p>LIMIT: 限制结果返回的行数。</p></li><li><p>IN/NOT IN: 在一个范围内查询数据。</p></li><li><p>EXISTS/NOT EXISTS: 判断子查询中是否存在数据。</p></li><li><p>LIKE: 模糊查询，常用通配符为%和_。</p></li><li><p>BETWEEN AND: 在一个范围内查询数据。</p></li><li><p>CASE WHEN: 在查询中根据条件返回不同的值。</p></li><li><p>WITH RECURSIVE: 递归查询。</p></li><li><p>INSERT INTO SELECT: 把查询出来的结果插入到一个新表中。</p></li><li><p>UPDATE JOIN: 根据另一个表的数据更新当前表中的数据。</p></li><li><p>DELETE JOIN: 根据另一个表的数据删除当前表中的数据。</p></li><li><p>CREATE VIEW: 创建视图。</p></li><li><p>TRUNCATE TABLE: 删除表中所有数据。</p></li><li><p>REPLACE INTO: 如果主键或唯一索引已经存在则替换掉原来的数据。</p></li><li><p>LOAD DATA INFILE: 从文件中导入数据。</p></li><li><p>UNION/UNION ALL: 合并查询结果。</p></li></ol><h3 id="注意事项" tabindex="-1">注意事项： <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项：&quot;">​</a></h3><ol><li>MySQL 命令需要使用管理员权限运行。</li><li>所有 SQL 语句都必须以分号结尾。</li><li>在 MySQL 中，表名和列名区分大小写，但是 SQL 语句不区分大小写。</li><li>如果你在命令行输入一个不完整的 SQL 语句，则命令行会等待你输入下一条语句，直到它看到一个完整的语句为止。你可以使用 <code>ctrl + c</code> 或 <code>quit</code> 命令退出语句构建模式。</li></ol>',97)];const p=a(n,[["render",function(a,e,o,n,p,i){return s(),l("div",null,t)}]]);export{o as __pageData,p as default};
