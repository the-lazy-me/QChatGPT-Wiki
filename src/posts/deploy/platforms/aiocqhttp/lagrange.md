---
head:
  - - meta
    - name: keywords
      content: Lagrange的部署教程
title: 部署消息平台Lagrange的教程
icon: support
order: 4
author: RockChinQ，ikun0014
date: 2024-05-05
---

## Lagrange介绍

Lagrange 是一个 QQNT 协议逆向工程框架，比 Shamrock 或 Mirai 更加轻便，在目前也较为稳定。通过 OneBot 11 协议接入，需选择使用`aiocqhttp`作为适配器，填写配置时可参考 Shamrock 的方式。

可选平台（需要.NET 8 or 7支持）：

- Mac OS 也可使用
- Linux Ubuntu 22.04，Debian 12应该都可以
- Windows 10,11,Server2019及以上

## 步骤（Windows）

### 环境配置

安装.NET 8运行时，[点击直达微软官网下载](https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-desktop-8.0.4-windows-x64-installer)

### 从Github Actions下载最新的build

需要登录Github后才能下载，如果你不需要部分特性，可以在Release下载，看图片3

[Github Actions](https://github.com/KonataDev/Lagrange.Core/actions)  

看图进行下载:

![图片1](https://cos.thelazy.cn/pictures/202405051146016.png)

![图片2](https://cos.thelazy.cn/pictures/202405051146016.png)

![图片3](https://cos.thelazy.cn/pictures/202405051151432.png)

### 尾声

解压你所下载的zip，打开到有Lagrange.OneBot.exe的目录，在此目录下打开cmd命令提示符，输入
```bash
.\Lagrange.OneBot
```
此时如果你的环境已配置好，应该会出现填写配置文件后按任意键进入Qrcode登录，否则按输出的文字重新安装.NET 8

配置文件填写示例：

![img](https://cos.thelazy.cn/pictures/202405292250017.jpeg)

![Lagrange.OneBot](https://cos.thelazy.cn/pictures/202405030020679.png)
