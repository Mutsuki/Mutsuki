
+++
publishDate = 1354781968
lastmod = 1354810183
description = ""
draft = true
slug = "cisco-simple-to-use-the-nat"
title = "[Cisco]简单的NAT使用方式"
+++
这组图是在家庭办公室使用的一种方式，用的是市场已经停产的cisco 2621xm路由器来做实验。  实验里只有1台PC，你必须在之后添加N台主机，而且N台主机必须能够同时上网。

![network](/nat&static.png)   

<pre rel="CISCO ROUTE 2621xm"><code>
Router#sh run
Building configuration...
Current configuration : 2335 bytes
!
version 12.2
service timestamps debug uptime
service timestamps log uptime
service password-encryption
!hostname Router
!
!
ip subnet-zero
!
!
interface FastEthernet0/0   //外部接口
ip address 192.168.1.2 255.255.255.252
ip nat outside
duplex auto
speed auto
!
!
interface FastEthernet0/1   //内部接口 
ip address 172.16.1.1 255.255.255.248
ip nat inside
duplex auto
speed auto
!
ip nat inside source list 1 interface FastEthernet0/0 overload   //将我的外部本地地址用作内部全局地址，并重载他，当然还必须创建ACL1,并制定内部和外部接口
ip classless
ip route 0.0.0.0 0.0.0.0 192.168.1.1
ip route 172.16.1.0 255.255.255.0 192.168.1.1
no ip http server
ip pim bidir-enable
!
!
access-list 1 permit 172.16.1.0 0.0.0.255   //策略允许 该网段通过
!
line con 0
line aux 0
line vty 0 4
login
!
!
end
Router#
</code>
</pre>


你可以看到有一句命令是
<pre>ip nat inside source list 1 interface FastEthernet0/0 overload</pre>
这就是PAT，也就是NAT重载的典型方式。  
**PAT 则是把内部地址映射到外部网络的IP 地址的不同端口上,从而可以实现对一的映
射。PAT 对于节省IP 地址是最为有效的。**  
