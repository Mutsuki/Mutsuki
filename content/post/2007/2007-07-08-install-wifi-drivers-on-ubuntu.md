+++
date = 2007-07-08T23:24:08Z
description = ""
draft = true
slug = "install-wifi-drivers-on-ubuntu"
title = "在ubuntu上安装tp-link驱动"
+++
主要资料参考
<a href="https://help.ubuntu.com/community/WifiDocs/Driver/Ndiswrapper">https://help.ubuntu.com/community/WifiDocs/Driver/Ndiswrapper</a>
对usb也有效，我的是tp-link tl-wn220m usb无线接收器。

有一个步骤需要：
<code>sudo ndiswrapper -i ~/drivers/<em>drivername</em>.inf</code>
把斜体字部分改成你的inf名字就可以了，驱动我这里已经准备好了，或者自己去寻找。
<a href="http://www.box.net/shared/bf8vqax9sx">http://www.box.net/shared/bf8vqax9sx</a>

这里有成功后的截图：
<a href="http://www.yupoo.com/photos/view?id=ff80808113958b9b0113a8193a340f37" title="来YUPOO看我的照片"><img src="http://photo6.yupoo.com/20070709/071030_1652309111_m.jpg" alt="ubuntu无线usb驱动成功" width="240" height="144" border="0" /></a>
有一个地方我没法截图，用yupoo的标注解释了下。