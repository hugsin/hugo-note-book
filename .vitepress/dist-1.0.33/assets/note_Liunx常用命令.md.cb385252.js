import{_ as s,j as a,k as n,S as l}from"./chunks/framework.2ff57350.js";const p=JSON.parse('{"title":"Liunx 常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"note/Liunx常用命令.md","filePath":"note/Liunx常用命令.md"}'),o={name:"note/Liunx常用命令.md"},e=[l('<h1 id="liunx-常用命令" tabindex="-1">Liunx 常用命令 <a class="header-anchor" href="#liunx-常用命令" aria-label="Permalink to &quot;Liunx 常用命令&quot;">​</a></h1><p>Linux是一种常见的操作系统，它是一个开源软件，可以免费获得，并且可以自由修改和分发。 Linux被广泛用于服务器、个人计算机、移动设备和嵌入式系统。它是一个<strong>高度可定制且安全的操作系统</strong>，</p><h5 id="优点" tabindex="-1">优点： <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点：&quot;">​</a></h5><p>1.安全性： Linux操作系统非常安全，因为它开发了一个强大的安全系统，可以有效地保护系统免受恶意软件和黑客攻击。</p><p>2.稳定性： Linux平台是非常稳定的，这使得它成为服务器和高可用性系统的首选操作系统。</p><p>3.开放性： Linux是一种开放的操作系统，任何人都可以参与开发和改进这个操作系统。</p><p>4.免费性： Linux是免费的，因此它比其他操作系统更具成本效益。</p><p>5.移植性： Linux操作系统可以在不同的硬件平台上运行，包括PC、MAC、嵌入式设备等。</p><h5 id="实用性" tabindex="-1">实用性： <a class="header-anchor" href="#实用性" aria-label="Permalink to &quot;实用性：&quot;">​</a></h5><p>1.服务器应用：Linux是一个出色的服务器平台。它具有高性能、稳定性和可靠性，非常适合用于企业级的Web服务器、邮件服务器和档案管理服务器。</p><p>2.开发应用：Linux具有各种编程语言和开发工具，例如GCC编译器，Eclipse集成开发环境等。</p><p>3.安全应用：Linux被广泛用于安全应用程序和安全审计工具。例如，破解工具如kali Linux可以用来评估网络的安全程度。</p><p>4.嵌入式系统：Linux被广泛应用于嵌入式系统和智能设备。因为它可以运行在不同的硬件平台上，并提供了丰富的服务，例如连接、多线程处理和多媒体处理等。</p><h2 id="vim命令" tabindex="-1">vim命令 <a class="header-anchor" href="#vim命令" aria-label="Permalink to &quot;vim命令&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file1</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 默认进入普通模式，可以移动光标，删除文本等等</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 连续两次dd删除当前行</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 进入编辑模式：按”a”（append／追加）键或者”i”（insert／插入）</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 模式切换：ESC 键回到普通模式</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 退出保存: 按ESC键, :wq</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFCB6B;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">——</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">插入模式，这个模式让你你可以像记事本一样的输入文本，如果已经输入完了，按ESC返回Normal模式。</span></span>\n<span class="line"><span style="color:#FFCB6B;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">——</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">删除当前光标所在处的字符</span></span>\n<span class="line"><span style="color:#FFCB6B;">:w</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">——</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">存盘</span></span>\n<span class="line"><span style="color:#FFCB6B;">:q</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">——</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">退出，你可以使用</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:wq来同时进行这两个操作</span></span>\n<span class="line"><span style="color:#FFCB6B;">dd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">——</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">剪切当前行</span></span>\n<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">——</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">粘贴</span></span>\n<span class="line"><span style="color:#FFCB6B;">hjkl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">——</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">效果等同于←↓↑→，用于移动光标</span></span>\n<span class="line"><span style="color:#FFCB6B;">:help&lt;command&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">——</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示相关命令的帮助</span></span></code></pre></div><h2 id="文件和目录操作" tabindex="-1">文件和目录操作 <a class="header-anchor" href="#文件和目录操作" aria-label="Permalink to &quot;文件和目录操作&quot;">​</a></h2><h2 id="切换工作目录" tabindex="-1">切换工作目录 <a class="header-anchor" href="#切换工作目录" aria-label="Permalink to &quot;切换工作目录&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">进入/home目录</span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">..</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">返回上一级目录</span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">../..</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">返回上两级目录</span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~user1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">进入user1的主目录</span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">返回上次所在的目录</span></span>\n<span class="line"><span style="color:#82AAFF;">pwd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示当前工作目录</span></span></code></pre></div><h2 id="查看文件及目录" tabindex="-1">查看文件及目录 <a class="header-anchor" href="#查看文件及目录" aria-label="Permalink to &quot;查看文件及目录&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看目录中的文件</span></span>\n<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看目录中的文件</span></span>\n<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示文件和目录的详细资料</span></span>\n<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示隐藏文件</span></span>\n<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">［0-9］</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示包含数字的文件名和目录名</span></span>\n<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看文件内容</span></span>\n<span class="line"><span style="color:#FFCB6B;">more、less</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">分页显示文本文件内容</span></span>\n<span class="line"><span style="color:#FFCB6B;">head、tail</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">显示文件头、尾内容</span></span>\n<span class="line"><span style="color:#FFCB6B;">basename</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示文件名或目录名</span></span>\n<span class="line"><span style="color:#FFCB6B;">dirname</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示文件或目录路径。</span></span>\n<span class="line"><span style="color:#FFCB6B;">tree</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示文件和目录由根目录开始的树形结构</span></span></code></pre></div><h2 id="文件及目录的创建与删除" tabindex="-1">文件及目录的创建与删除 <a class="header-anchor" href="#文件及目录的创建与删除" aria-label="Permalink to &quot;文件及目录的创建与删除&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">创建空文件</span></span>\n<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">创建带有内容的文件</span></span>\n<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dir1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">创建dir1目录</span></span>\n<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dir1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dir2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">同时创建两个目录</span></span>\n<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp/dir1/dir2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">逐级创建多个目录</span></span>\n<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">删除file1文件，-f强制删除</span></span>\n<span class="line"><span style="color:#FFCB6B;">rmdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dir1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">删除dir1空目录</span></span>\n<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dir1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">强制删除dir1目录及其子目录及文件，-r表示递归删除</span></span></code></pre></div><h2 id="文件与目录的移动及复制" tabindex="-1">文件与目录的移动及复制 <a class="header-anchor" href="#文件与目录的移动及复制" aria-label="Permalink to &quot;文件与目录的移动及复制&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dir1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new_dir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">重命名/移动一个目录</span></span>\n<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">复制一个文件</span></span>\n<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dir/</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">复制一个目录下的所有文件到当前工作目录</span></span>\n<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp/dir1.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">复制一个目录到当前工作目录,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a表示所有</span></span>\n<span class="line"><span style="color:#FFCB6B;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lnk1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">创建一个指向文件或目录的软链接</span></span>\n<span class="line"><span style="color:#FFCB6B;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lnk1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">创建一个指向文件或目录的物理链接</span></span></code></pre></div><h2 id="文件查找与统计" tabindex="-1">文件查找与统计 <a class="header-anchor" href="#文件查找与统计" aria-label="Permalink to &quot;文件查找与统计&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在/下搜索名为file1的文件和目录</span></span>\n<span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file1</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 在/下搜索属于用户user1的文件和目录</span></span>\n<span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-user</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user1</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 在目录/home/user1中搜索带有.bin结尾的文件</span></span>\n<span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/user1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#A6ACCD;"> \\*</span><span style="color:#C3E88D;">.bin</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 搜索在过去100天内未被使用过的执行文件</span></span>\n<span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-atime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+100</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 搜索在10天内被创建或者修改过的文件</span></span>\n<span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-mtime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-10</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 搜索以.rpm结尾的文件并定义其权限</span></span>\n<span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#A6ACCD;"> \\*</span><span style="color:#C3E88D;">.rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">755</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">‘{}’</span><span style="color:#A6ACCD;"> \\; </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 在所有txt文件中查找包含有python的文件。-l表示以列表显示</span></span>\n<span class="line"><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">python</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">.txt</span><span style="color:#A6ACCD;">  </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 查找etc及子目录包含python的文件，-i表示不区分大小写，-R表示递归</span></span>\n<span class="line"><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-iR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">python</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 寻找以.ps结尾的文件 </span></span>\n<span class="line"><span style="color:#FFCB6B;">locate</span><span style="color:#A6ACCD;"> \\*</span><span style="color:#C3E88D;">.ps</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 显示一个二进制文件、源码或man的位置,比如bash命令</span></span>\n<span class="line"><span style="color:#FFCB6B;">whereis</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 显示一个二进制文件或可执行文件(比如bash)的完整路径</span></span>\n<span class="line"><span style="color:#82AAFF;">which</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 统计text.txt中行数、字数、字符数</span></span>\n<span class="line"><span style="color:#FFCB6B;">wc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.txt</span></span></code></pre></div><h2 id="用户、群组和权限" tabindex="-1">用户、群组和权限 <a class="header-anchor" href="#用户、群组和权限" aria-label="Permalink to &quot;用户、群组和权限&quot;">​</a></h2><h2 id="群组的创建与删除" tabindex="-1">群组的创建与删除 <a class="header-anchor" href="#群组的创建与删除" aria-label="Permalink to &quot;群组的创建与删除&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">groupadd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">group_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">创建一个新用户组</span></span>\n<span class="line"><span style="color:#FFCB6B;">groupdel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">group_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">删除一个用户组</span></span>\n<span class="line"><span style="color:#FFCB6B;">groupmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new_group</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">old_group</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">重命名一个用户组</span></span>\n<span class="line"><span style="color:#FFCB6B;">newgrp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">group_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">登陆进一个新的群组以改变新创建文件的预设群组</span></span></code></pre></div><h2 id="用户的管理" tabindex="-1">用户的管理 <a class="header-anchor" href="#用户的管理" aria-label="Permalink to &quot;用户的管理&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">useradd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">创建一个新用户，可结合如下选项使用：</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">指定用户的UID</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">指定用户所属的群组</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">指定用户的home目录</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">指定用户的备注信息</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">指定用户所用的shell</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 修改用户属性</span></span>\n<span class="line"><span style="color:#FFCB6B;">usermod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">“FTP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">User”</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">system</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/ftp/user1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/bin/nologin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user1</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 删除一个用户</span></span>\n<span class="line"><span style="color:#FFCB6B;">userdel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user1</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 密码管理</span></span>\n<span class="line"><span style="color:#FFCB6B;">passwd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">修改口令</span></span>\n<span class="line"><span style="color:#FFCB6B;">passwd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">修改一个用户的口令</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">（只允许root执行）</span></span>\n<span class="line"><span style="color:#FFCB6B;">change</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-E</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2020</span><span style="color:#C3E88D;">-12-31</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">设置用户口令的失效期限</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 用户切换</span></span>\n<span class="line"><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看用户的uid,gid及归属的用户组。</span></span>\n<span class="line"><span style="color:#FFCB6B;">su</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">切换用户身份。</span></span>\n<span class="line"><span style="color:#FFCB6B;">visudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">编辑/etc/sudoers文件的专属命令。</span></span>\n<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">以另外一个用户身份（默认root用户）执行事先在sudoers文件允许的命令。</span></span></code></pre></div><h2 id="权限的分配" tabindex="-1">权限的分配 <a class="header-anchor" href="#权限的分配" aria-label="Permalink to &quot;权限的分配&quot;">​</a></h2><p>主要有两个命令：<code>chmod</code>是用来设置文件夹和文件权限，<code>chown</code>是用来设置用户组。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 显示权限</span></span>\n<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-lh</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 增加目录的所有人（u）、群组（g）以及其他人（o）读、写和执行的权限</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># r, w, x分别代表读、写和执行</span></span>\n<span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ugo+rwx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">directory1</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 删除群组（g）与其他人（o）对目录的读写执行权限，</span></span>\n<span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">go-rwx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">directory1</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 给文件aaa.sh可执行权限,+ 代表增加权限，-代表移除权限</span></span>\n<span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aaa.sh</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 给文件file1设置可读、可写和可执行的权限(r=4,w=2,x=1)</span></span>\n<span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">777</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file1</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 改变一个文件的所有人属性</span></span>\n<span class="line"><span style="color:#FFCB6B;">chown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file1</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 改变一个目录的所有人属性并同时改变改目录下所有文件的属性</span></span>\n<span class="line"><span style="color:#FFCB6B;">chown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">directory1</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 改变文件的群组</span></span>\n<span class="line"><span style="color:#FFCB6B;">chgrp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">group1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file1</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 改变一个文件的所有人和群组属性</span></span>\n<span class="line"><span style="color:#FFCB6B;">chown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user1:group1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file1</span></span></code></pre></div><h2 id="系统管理命令" tabindex="-1">系统管理命令 <a class="header-anchor" href="#系统管理命令" aria-label="Permalink to &quot;系统管理命令&quot;">​</a></h2><p>系统管理命令中最重要的是服务器性能监控命令和进程管理命令，尤其是监控CPU和当前负载信息的<code>uptime</code>, 监控内存使用情况的 <code>free</code>, 监控磁盘使用情况的 <code>df</code>, 以管理进程的<code>top</code>, <code>ps</code>和 <code>kill</code>命令。</p><h2 id="基础命令" tabindex="-1">基础命令 <a class="header-anchor" href="#基础命令" aria-label="Permalink to &quot;基础命令&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">who</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">显示在线登陆用户</span></span>\n<span class="line"><span style="color:#FFCB6B;">whoami</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">显示当前操作用户</span></span>\n<span class="line"><span style="color:#FFCB6B;">hostname</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">显示主机名</span></span>\n<span class="line"><span style="color:#FFCB6B;">uname</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">显示系统信息</span></span>\n<span class="line"><span style="color:#FFCB6B;">clear</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">清屏</span></span>\n<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">对命令重命名</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">如：alias</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">showmeit=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ps -aux</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">，另外解除使用unaliax</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">showmeit</span></span>\n<span class="line"><span style="color:#FFCB6B;">ifconfig</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看网络情况</span></span>\n<span class="line"><span style="color:#FFCB6B;">ping</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">测试网络连通</span></span></code></pre></div><h2 id="性能监控" tabindex="-1">性能监控 <a class="header-anchor" href="#性能监控" aria-label="Permalink to &quot;性能监控&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chkconfig</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">管理Linux系统开机启动项</span></span>\n<span class="line"><span style="color:#FFCB6B;">uptime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">获取CPU运行时间和查询Linux系统负载等信息</span></span>\n<span class="line"><span style="color:#FFCB6B;">free</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">监控内存及交换分区的使用</span></span>\n<span class="line"><span style="color:#FFCB6B;">sar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">全面地获取系统的CPU、运行队列、磁盘</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">I/O、内存和网络等性能数据。</span></span>\n<span class="line"><span style="color:#FFCB6B;">df</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看磁盘使用情况</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">df</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">带有单位显示磁盘信息</span></span>\n<span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示网络状态信息，netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t可查看tcp连接</span></span>\n<span class="line"><span style="color:#FFCB6B;">vmstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">虚拟内存统计</span></span>\n<span class="line"><span style="color:#FFCB6B;">mpstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示各个可用CPU的状态统计</span></span>\n<span class="line"><span style="color:#FFCB6B;">du</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">查看目录大小</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">du</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home带有单位显示目录信息</span></span>\n<span class="line"><span style="color:#FFCB6B;">iostat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">统计系统IO</span></span></code></pre></div><h2 id="进程管理" tabindex="-1">进程管理 <a class="header-anchor" href="#进程管理" aria-label="Permalink to &quot;进程管理&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">top</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">动态显示当前耗费资源最多进程信息</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">P:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CPU</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">占用率大小的顺序排列进程列表</span><span style="color:#A6ACCD;">  </span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">M:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">以内存占用率大小的顺序排列进程列表</span><span style="color:#A6ACCD;">  </span></span>\n<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">显示瞬间进程状态</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-aux</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">全格式显示进程信息,BSD风格</span></span>\n<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ef</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">全格式显示进程信息,System</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">V风格</span></span>\n<span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">杀死进程，可以先用ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">或</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">top命令查看进程的id，然后再用kill命令杀死进程。</span></span>\n<span class="line"><span style="color:#FFCB6B;">killall</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">通过进程名终止进程</span></span></code></pre></div><h2 id="开机、关机与注销" tabindex="-1">开机、关机与注销 <a class="header-anchor" href="#开机、关机与注销" aria-label="Permalink to &quot;开机、关机与注销&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">shutdown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hours:minutes</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">按预定时间关闭系统</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#FFCB6B;">shutdown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">取消按预定时间关闭系统</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#FFCB6B;">shutdown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">now</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">重启</span></span>\n<span class="line"><span style="color:#FFCB6B;">reboot</span><span style="color:#A6ACCD;">\t</span><span style="color:#C3E88D;">重启</span></span>\n<span class="line"><span style="color:#FFCB6B;">poweroff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">关闭电源。</span></span>\n<span class="line"><span style="color:#A6ACCD;">logout 注销。</span></span></code></pre></div>',44)];const c=s(o,[["render",function(s,l,p,o,c,t){return a(),n("div",null,e)}]]);export{p as __pageData,c as default};
