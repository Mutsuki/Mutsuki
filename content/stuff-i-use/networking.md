---
title: "网络"
slug: networking
#date: 2024-02-15T10:47:00Z
draft: false
description: '家庭网络连接设备'
categories:
  - network
tags:
  - network
keywords:
  - network
author: "koojiafeng"
layout: 'stuff'
---
事实上，我是拥有思科证书的网络工程师，随后升级成网络安全工程师，但往后的工作我却从该行业退役了，实际上我有自己的打算。不过它并没有让我荒废技能。  
最初，我是一直选择Cisco的设备，但早先的Cisco设备价格非常昂贵，即使是二手的也是一样，后来因为工作关系，接触到了各种国外大品牌的设备，西门子，诺基亚的核心网络，但也见证了他们慢慢开始退出了中国的舞台。
当然我不否认国内的产品，因为他们也是很好的选择，比如大名鼎鼎的华为，虽然价格偏贵，但售后的服务确实不错，至于其他品牌我不在展开介绍。

下面我介绍下我自己用的设备，首先我的家并不大，也就100平方不到，但由于基建，也就是网线在布局的时候并没有布置，毕竟我那时候还没有正式工作。随着时间的变化，家里需要网络连接的设备太多，以至于我只能不断去了解更多适合自己的一些设备。

最终还是选择了UniFi家的产品，主要是设计，硬件参数和最重要的是，它不用像其他品牌，需要授权，所以家里的Cisco 2600系列路由器换成了AmpliFi路由器，另外它支持Mesh方式，所以我不在为布线而担忧，随着NAS的用量增长，原有的WiFi覆盖率问题，发现MESH在吞吐量上的数据很有限，而且，抗干扰并没有那么理想，多少还是受空间变化的一些影响，说技术点的就是MESH并不像AP，没有专用的无线回程频段给路由，所以直接换代到了下一代wifi6的设备U6 LR型号的AP，这样一来，也不得不重新布局网络架构，毕竟QNAP存储设备还是千兆。  

其他的产品推荐：[eero](https://eero.com/)

<div class="clearfix gear-float gear">
        <div class="gear-item clearfix">
        <div class="img-wrap"><img src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F9310ab00-4fe7-46cb-872a-5077ffdd3d0d%2Fabeee5d5-0627-49e4-bbaf-3522d6ae058c.png&q=75&w=256" alt="Ubiquiti"></div>
        <div class="desc">
            <p>Ubiquiti CloudKey Plus</p>
            <p class="specs">Compact UniFi Console with full UniFi application support and a pre-installed 1TB HDD for NVR storage.</p>
            <p class="links"><a title="AmpliFi Alien Router and MeshPoint" href="https://store.ui.com/us/en/pro/category/all-cloud-keys-gateways/products/unifi-cloudkey-plus">Unifi Store</a></p>
        </div>
        </div>
        <div class="gear-item clearfix">
        <div class="img-wrap"><img src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F1b6fcc08-a6b8-4496-a831-6125a47c412f%2F2794bdc2-2d4a-4996-9194-2e3436d38edd.png&q=75&w=728" alt="Ubiquiti Dream Machine Special Edition"></div>
        <div class="desc">
            <p>UniFi Dream Machine Special Edition</p>
            <p class="specs">Enterprise-grade, rack-mount UniFi Cloud Gateway with full UniFi application support, 10 Gbps performance, and an integrated PoE switch.</p>
            <p class="links"><a title="Ubiquiti USW-Flex-Mini UniFi Switch Compact Gigabit 5-Port 802.3af/at PoE" href="https://store.ui.com/us/en/pro/category/all-unifi-cloud-gateways/products/udm-se">Unifi Store</a></p>
        </div>
        </div>
        <div class="gear-item clearfix">
        <div class="img-wrap"><img src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2Fab04370e-f45d-4651-828c-b290de8df45b%2F0a115833-79cf-45e6-8b9d-89ece81c355a.png&q=75&w=256" alt="UniFi Standard 16 PoE"></div>
        <div class="desc">
            <p>UniFi Standard 16 PoE</p>
            <p class="specs">A 16-port, Layer 2 PoE switch with a silent, fanless cooling system.</p>
            <p class="links"><a title="The USW-Lite-8-PoE is a fully managed Layer 2 switch with eight Gigabit Ethernet ports for your RJ45 Ethernet devices" href="https://store.ui.com/collections/unifi-network-routing-switching/products/unifi-switch-lite-8-poe">Unifi Store</a></p>
        </div>
        </div>
        <div class="gear-item clearfix">
        <div class="img-wrap"><img src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2Fd8fee47d-b53e-4a86-a5cb-cf2f6ab1c5ef%2F4f1f5856-05c2-4989-970e-6751e6af7eb9.png&q=75&w=256" height="110" alt="#"></div>
        <div class="desc">
            <p>UniFi U6 Long-Range</p>
            <p class="specs">Ceiling-mounted WiFi 6 AP with 8 spatial streams and extended signal range.</p>
            <p class="links"><a href="https://store.ui.com/us/en/pro/category/all-wifi/products/u6-lr" title="#">Unifi Store</a></p>
        </div>
        </div>
        <div class="gear-item clearfix">
        <div class="img-wrap"><img src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F12f6ef8d-1787-4dd6-bd95-6f113965bda0%2F1c65f6ab-cb7f-4ed4-9678-3477c0f909ca.png&q=75&w=256" height="110" alt="#"></div>
        <div class="desc">
            <p>UniFi Toolless Mini Rack</p>
            <p class="specs">6U-sized device rack with a 24-port blank patch panel that can be assembled without tools.</p>
            <p class="links"><a href="https://store.ui.com/us/en/pro/category/accessories-rack-mount/products/toolless-mini-rack" title="#">Unifi Store</a></p>
        </div>
        </div>
    </div>