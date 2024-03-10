+++
publishDate = 1244751213
lastmod = 1349792809
description = ""
draft = true
slug = "ibus-pinyin-installed-on-ubuntu"
title = "Ubuntu安装iBus-PinYin"
+++

<b>先确认您的版本是ubuntu 9.04的，jaunty版本</b>

编辑源（编辑的方式有多种）
1. 终端下输入：
<pre class="block"><code>sudo gedit /etc/apt/sources.list</code></pre>
2. 在最后行输入：
<pre class="block"><code>deb http://ppa.launchpad.net/ibus-dev/ppa/ubuntu jaunty main</code></pre>
关闭

终端下继续输入：
1.下载公钥：
<pre class="block"><code>gpg --keyserver wwwkeys.pgp.net --recv-keys 21C022AA985E0E11</code></pre>
如果不输入，它会提示没有公钥，下列签名无法进行验证。（注：“21C022AA985E0E11”是根据相应机器报出的修改，你也可以直接用此命令copy输入）
2.转化：
<pre class="block"><code>gpg --export -a 21C022AA985E0E11 &gt; /tmp/key</code></pre>
3.通知apt-get：
<pre class="block"><code>sudo apt-key add /tmp/key</code></pre>
4.完成，更新下源
<pre class="block"><code>sudo apt-get update</code></pre>
5.安装IBus拼音输入法，iBus-gtk和iBus-qt4是一定要安装的，否则不能进行设置
<pre class="block"><code>sudo aptitude install ibus ibus-pinyin ibus-table
sudo apt-get install ibus-pinyin ibus-gtk ibus-qt4
</code></pre>

如果不喜欢一山容二虎，可以把其他或者默认的输入法都给注释掉，这种做法对你系统是很有利的，推荐做这步
<pre class="block"><code>gedit ~/.profile</code></pre>
把原来fcitx的部分注释掉，换成ibus的，如果是其他输入法也按此步骤做：
<pre class="block"><code># ibus
export GTK_IM_MODULE="ibus"
export XMODIFIERS="@im=ibus"
export QT_IM_MODULE="ibus"</code></pre>
当然选择更绝的可以直接删除其他输入法：
<pre class="block"><code>sudo apt-get remove scim &amp;&amp; sudo apt-get autoremove</code></pre>
然后切换系统的默认输入法（终端输入）：
<pre class="block"><code>sudo im-switch -c</code></pre>

全部完成，Ctrl+Alt+←，重启界面。

官方网站：http://code.google.com/p/ibus/
