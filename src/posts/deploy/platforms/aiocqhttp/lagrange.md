---
head:
  - - meta
    - name: keywords
      content: Lagrange的部署教程
title: 部署消息平台Lagrange的教程
icon: support
order: 1
author: RockChinQ，ikun0014
date: 2024-05-05
---

## Lagrange介绍

Lagrange 是一个 QQNT 协议逆向工程框架，比 Shamrock 或 Mirai 更加轻便，在目前也较为稳定。通过 OneBot 11 协议接入，需选择使用`aiocqhttp`作为适配器，填写配置时可参考 Shamrock 的方式。

可选平台（需要.NET 8 or 7支持）：

- Mac OS 也可使用
- Linux Ubuntu 22.04，Debian 12应该都可以
- Windows 10,11,Server2019及以上



## 部署步骤

以下仅提供 Windows 上的大致步骤，详细步骤或其他平台请参考 [Lagrange官方文档](https://lagrangedev.github.io/Lagrange.Doc/Lagrange.OneBot/)

### 环境配置

安装.NET 8运行时，[点击直达微软官网下载](https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-desktop-8.0.4-windows-x64-installer)

### 从Github Actions下载最新的build

需要登录Github后才能下载，如果你不需要部分特性，可以在Release下载，看图片3

[Github Actions](https://github.com/KonataDev/Lagrange.Core/actions)  

看图进行下载:

![图片1](/assets/image/dl_lgr_1.png)

![图片2](/assets/image/dl_lgr_2.png)

![图片3](/assets/image/dl_lgr_3.png)

### 尾声

解压你所下载的zip，打开到有Lagrange.OneBot.exe的目录，在此目录下打开cmd命令提示符，输入

```bash
.\Lagrange.OneBot
```

运行一次，如果输出了一个二维码，即可直接用机器人号扫码登录（若二维码显示不清楚，可以到lagrange的data目录下寻找图片文件）。  

若无法登录，请检查是否正常填写了lagrange配置文件appsettings.json中的签名地址 SignServerUrl ，签名地址请到lagrange文档中寻找。  

## 修改配置

需要配置 Lagrange 以让其连接上 QChatGPT，请编辑 Lagrange 的配置文件 appsettings.json，确保 Implementations 中的连接配置符合下图内容：

![配置连接](/assets/image/config_lgr.png)

其中 Type 必须为 `ReverseWebSocket`;  
Host 为 QChatGPT 运行的主机 IP，若在同一主机上，可以写 `127.0.0.1`;  
Suffix 必须为 `/ws`