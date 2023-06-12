/**
 * name: note-book
 * version: v1.0.9
 * description: 笔记本 📚  世界上只有10类人：一类是懂二进制的，一类是不懂的。
 * author: Alimales <only_tigerhu@163.com>
 * homepage: https://www.tigerzh.com
 */
import{_ as t,o as e,c as o,a as n}from"./app.a5d386c5.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"回车和换行","slug":"回车和换行","link":"#回车和换行","children":[]}],"relativePath":"note/enter.md"}'),u={name:"note/enter.md"},a=[n('<h2 id="回车和换行" tabindex="-1">回车和换行 <a class="header-anchor" href="#回车和换行" aria-hidden="true">#</a></h2><p>&quot;回车&quot;（carriage return）</p><p>&quot;换行&quot;（line feed）</p><p>这两个概念的来历和区别。</p><p>有一种叫做电传打字机（Teletype Model 33），在计算机还没有出现之前，每秒钟打10个字符。但是它有一个问题，打完一行换行的时候，要花费0.2秒，0.2秒可以打两个字符。在这0.2秒里，有新的字符传过来，那么这个字符将丢失。</p><p>后来，研制人员提出一种解决议案。</p><p>在每行后面加两个表示结束的字符。</p><p>一个叫做&quot;回车&quot;，告诉打字机把打印头定位在左边界；</p><p>另一个叫做&quot;换行&quot;，告诉打字机把纸向下移一行。</p><p>这就是&quot;换行&quot;和&quot;回车&quot;的来历，从它们的英语名字上也可以看出一二。</p><p>后来，计算机发明了，这两个概念也就被般到了计算机上。那时，存储器很贵，一些科学家认为在每行结尾加两个字符太浪费了，加一个就可以。于是，就出现了分歧。</p><p>Unix系统里，每行结尾只有&quot;&lt;换行&gt;&quot;，即&quot;\\n&quot;；Windows系统里面，每行结尾是&quot;&lt;回车&gt;&lt;换行&gt;&quot;，即&quot;\\r\\n&quot;；Mac系统里，每行结尾是&quot;&lt;回车&gt;&quot;。一个直接后果是，Unix/Mac系统下的文件在Windows里打开的话，所有文字会变成一行；而Windows里的文件在Unix/Mac下打开的话，在每行的结尾可能会多出一个^M符号。</p>',12)];const r=t(u,[["render",function(t,n,p,u,r,i){return e(),o("div",null,a)}]]);export{p as __pageData,r as default};
