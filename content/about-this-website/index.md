+++
date = 2022-10-22T19:55:12Z
description = ""
draft = false
slug = "about-this-website"
title = "About this wesite"
[build]
  list = 'never'
  publishResources = true
  render = 'always'
+++
{{< article-stats >}}
之前的网站由于学校的教程是Asp，但无奈IIS系统漏洞太多经常被黑，脚本自身问题也特别多，后来自学Php，那时候几乎无人问津，毕竟这语言刚开始出来，国内反响没那么大，所以后来转换成B2，也就是现在的Wordpress，期间也一直在换不同的CMS，但最终在2024年迁移到Hugo的静态网站生成器。
当初的论坛也非常流行，比如在discuz之前的IPBOARD，我也经常做些翻译和发布小Mod。

到了2002年开始写日志，2014年有位本地大哥提供了免费的Windows & Linux主机给我，才开始正式寻上虚拟空间，合租等等。

之前网站是用Ghost来进行制作的，主题自行编辑，但代码还是有些问题，包括设计的样式，后来也成了无业游民，经费紧张而使用了Hugo，其实，这个程序我观察了很久，主要是我偏向NoSQL，而且不太喜欢依赖堆栈的动态网站，在有数据库的情况下备份也成了一种成本支出，何况数据库损坏也不是开玩笑。

为了提高性能，我开始转型以某种静态页面作为缓存，以便需要任何文章的流量高于预期，我的网站仍能够正常运行。何况我也不需要不断更新系统及CMS等各种安全补丁问题，最重要的是对服务器的门槛要求也非常的低。

最后，未来的几十年保持网站持续性，我把所有文章内容转变成了静态页面，这样也会方便很多，尤其是我想转移到另一个静态站点，这样文件迁移的时候不会像数据关系型那样头疼。

对于部署，我暂时用了Github Page的功能进行托管，现在转到了render<sup><a rel="footnote" href="#footnote-1" id="r1">1</a></sup>上，后续也可能转移到Netlify这样的运营商进行托管，何况有他们自己的CDN，使得整体迁移部署都会非常的简单。但对于我为何不用自己国内的，因为对于备案我十分困惑，何况05年的第一批的备案资料也不能找回（工信部数据整合过）。

后续，我可以专注于撰写高质量的文章。

<h4 id="Hugo" class="toc">Hugo</h4>
<p class="sublarge">My static site generator</p>
Hugo使用的是Go语言进行的构建，而且执行效率也非常高，不管在任何平台上，部署的方式也非常简单，何况他的脚本语意结构也非常简洁。
之前使用过太多的CMS程序，包括Ghost，用的是Ruby，但依赖的包及管理实在太多，每次执行的时候非常不便，在新机器上设置新环境总是一件痛苦的事情，有些 gem 总是不愿意安装，导致在解决之前需要谷歌搜索大约许多不同的问题，况且需要数据库支持，就像我之前提到的备份真的是件棘手的事。另外最早使用的b2，也就是现在的wordpress，转到Habari，Movable Type，Textpattern，TypePad，Typecho等等，都是关系型，每一次迁移都需要付出大量的技术和时间成本，相互的兼容也着实的让人头疼，加上随着年龄的增长，考虑无效化的因素，决定一切从简。而且从虚拟主机开始也转变为静态生成器，无疑是节省了比资金，毕竟虚拟主机费用不便宜。在转型寻找期间，我测试了Zola的程序，是由Rust脚本语言编写的，还是持观望状态，毕竟不想再花时间去学信的脚本语言，现在也顶多是爱好去玩玩而已。  

https://codepen.io/terrymun/pen/nexdRX

托管的网站是：render.com

<h4 id="tech" class="toc">How it's built</h4>
<p class="sublarge">What I wrote, what I use and how it all comes together</p>

<h5>Web Font</h5>
<ul><p><li><strong>Alibaba Health Font </a></strong>，网站使用的是阿里巴巴健康字体2.0版本，作为非商业体能使用</p></li>
</ul>

<h5>JS libraries</h5>
<ul>
<li><p><strong><a href="https://plyr.io">plyr.io</a></strong>，它是播放器</p></li>

<h5>Css Style</h5>
<ul>
    <li>https://ishadeed.com/article/custom-scrollbars-css/</li>
</ul>

<h5>Hosting</h5>
我在上述已经提到过，从早期的Bluehost，DreamHost，Linode，Amazon Cloud到最近用的Digital Ocean，每次的数据迁移总会造成一部分数据丢失，所以我开始剥离一些业务，将他们分开进行存储。目前我还在寻找可靠的。毕竟Git在跟踪存储库，哪些中大型在压缩文件时会变得非常缓慢，对我这种需要轻存储库的人来说不是很合理，所以我正在研究Domain sharding这种具有优势的性能策略优势，毕竟从不同源进行加载资源，可以绕过游览器对可发出的并发请求数量限制，这点已经在http/2上普及了，在最新的http/3 quic能快速的利用协议优势进行传输。不过重要的是，我还没有做好备份的存储。

<h4 id="svg" class="toc">SVG icons and animation</h4>
<p class="sublarge">Working with SVGs in my photosets</p>
https://www.svgrepo.com/
  
https://yqnn.github.io/svg-path-editor/

<h4 id="theme" class="toc">Can I have your theme?</h4>
<p class="sublarge">Why I don't open source or sell my site design</p>
目前这套主题是Hugo Paper，在这基础上做了一些样式修改，虽然不是很完美，但在业余的一些时间我会慢慢完善它。  
当然我并不打算开源它。

<h4 id="domain" class="toc">Domain</h4>
<p class="sublarge">域名解析</p>
最早是用GoDaddy作为域名解析，后来就一直用name服务商的域名解析，然后用Cloudflare进行管理，上面可以用到很多一些前瞻的技术，而相对国内的服务商还需要很多努力和突破。

2022年 使用了虚拟主机Digital Ocean，并用开源Ghost脚本服务，Name上购买域名并用Cloudflare进行域名管理和使用。为何不用国内的域名商注册，是因为备案嫌麻烦，上面的内容已经阐述过，所以我就一直沿用了name的服务商，只要不违反当地和自己国家法律就行了，在这点上还需要自己承担一些风险。

<h4 id="domain" class="toc">History</h4>
<p class="sublarge">曾经的一些互联网历史</p>

往年的一些网站设计页面图在此。[{预览链接}](/web-design)

站点使用到的技术：

Hugo: 
https://makewithhugo.com/add-avif-feature-image/


一些往年用过的域名：

```
http://spaces.msn.com/members/Brando/PersonalSpace.aspx 2004.12 MSN Spaces
http://xiaohunhun.yculblog.com/  # 小混混的浪漫 2005  歪酷
http://missyou.sh.cn  # 关不住的思念 2005.07 b2press - Wordpress / 沪ICP备 05059512号 
http://xxxholic.cc # [Brando’s blog] 2008 Wordpress - Movable Type (MT)
http://oopiz.cn  { 大 白 物 语 }  2008-2009 Wordpress
http://brandoishere.net 2009 Wordpress - Textpattern
http://brandoishere.net 2010 Jekyll 
https://www.koojiafeng.name 2010 -2019 TypePad - HabariProject - Typecho - Official Ghost
https://www.koojiafeng.com 2023 Ghost - Hugo
```
Access all areas

如果你喜欢这个网站的内容，也欢迎您进行[订阅](/subscribe/)。

<section name="footnotes" id="footnotes">
<h6 class="toc toc-hidden" id="fn">Footnotes</h6>
<p id="footnote-1"><a href="#r1">1</a>2024年初，转到了Render.com上进行托管</p>
</section>