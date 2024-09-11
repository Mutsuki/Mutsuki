+++
publishDate = 2013-01-15T15:41:59Z
lastmod = 2013-01-15T16:06:55Z
description = ""
draft = true
slug = "cisco-ip-route"
title = "[Cisco]IP Route 实验"
tags = ["Network","Cisco"]
+++
这次是为了了解(静态)路由的功能，参考官方资料而做出的LAB。

目的是了解ip route，不但要理解里面的codes含义[CCNA（V7 640-802）第八章 269页]  
ip classless 默认在ios 11.3（包括）以上enable，也要知道路由是干什么的，包括他的next hoop，网关等等；当然也要了解并熟悉运用这些协议，如静态路由，Rip1和Rip2，之间有什么区别[CCNA（V7 640-802）第八章 302页] ；也特别要注意的是管理距离数值以及试验中的AD值为何是150的值（rip实验请在试验中自己添加静态路由） ，这个默认的管理距离是要背出，考试和试验中都会使用到；最后也要学会使用debug 命令来查看ip 协议的问题。

另对于OSFP和EIGIP的实验模拟我暂未放置，从实验上，也就是敲几行命令，是的，它很简单，但关键在于他们的术语和原理上的理解有一点难以理解，但如果你理解了之后，你会发现他们的优势到底体现在哪，会是一目了然。  
也要注意：Cisco Packet Tracer的有些命令是不支持的。


![network](/images/ip_route.jpg)  

无路由版 [附件1]  
路由版 [附件2]  
RIP1  [附件3]  
RIP2  [附件4]  

特权密码：todd  
登陆密码：console  

[OSPF单区域配置](http://bbs.clnchina.com.cn/thread-33964-1-1.html)

[附件1]:  /my_labs-no_route.pkt
[附件2]:  /my_labs-route.pkt
[附件3]:  /my_labs-route_rip1.pkt
[附件4]:  /my_labs-route_rip2.pkt