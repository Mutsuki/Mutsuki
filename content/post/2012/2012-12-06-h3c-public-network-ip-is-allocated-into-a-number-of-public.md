+++
publishDate = 1354781968
lastmod = 1354810183
description = ""
draft = true
slug = "h3c-public-network-ip-is-allocated-into-a-number-of-public"
title = "[H3C]1个公网IP分配成若干公网IP的设置"
+++
运营商给一个公网IP，然后通过路由NAT分成5个，或若干个公网IP地址，假设这里的图是分配给了5个IP地址。  
其中这里的5个IP是对外可见的，还一个单独的IP地址是不可见的。 
運營商給的地址：  

單獨的ip  
<pre>
ip:101.52.31.6
gateway: 101.52.31.5
</pre>
5個公網的ip 
<pre>
ip: 202.111.51.10
ip: 202.111.51.11
ip: 202.111.51.12
ip: 202.111.51.13
ip: 202.111.51.14 
gateway: 202.111.51.9
</pre>

![network](/network1206.png)  

<pre rel="H3C MSR ROUTE"><code>
#  
interface Ethernet 0/0  
port link-mode route  
ip address 101.52.31.6 255.255.255.252  
#  
interface Ethernet 0/1  
port link-mode route  
ip address 202.111.51.9 255.255.255.248  
#  
ip route-static 0.0.0.0 0.0.0.0 101.52.31.5
</code></pre>

<pre rel="H3C Sec F100m"><code>
#  
interface Ethernet 0/0   
ip address 202.111.51.10 255.255.255.248
ip address 202.111.51.11 255.255.255.248
ip address 202.111.51.12 255.255.255.248
ip address 202.111.51.13 255.255.255.248
ip address 202.111.51.14 255.255.255.248
nat outbound 2000
#  
interface Ethernet 0/1  
#
ip address 192.168.1.254 255.255.255.0
interface Ethernet 0/2  
#
ip route-static 0.0.0.0 0.0.0.0 202.111.51.9 preference 60
ip route-static 192.168.2.0 255.255.255.0 192.168.1.1
</code></pre>

有人會問我防火牆裏的nat outbound 2000，這個2000是什麼意思，明白的人一看就知道2000是acl策略，至於其他的，如核心交換機及其他一些設備設置，包括之間的詳細配置此處就省略了。