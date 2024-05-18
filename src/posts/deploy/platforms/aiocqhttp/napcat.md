---
head:
  - - meta
    - name: keywords
      content: NapCat的部署教程
title: 部署消息平台NapCat的教程
icon: software
order: 5
author: Lazy
date: 2024-05-13
---

## NapCat介绍

Lagrange 是一个 QQNT 协议逆向工程框架，比 Shamrock 或 Mirai 更加轻便，而且不需要图形环境，在Linux表现优异，与现有Hook框架有着本质区别，在性能与内存占用方面远远优于基于Hook的框架，现在目前也较为稳定。通过 OneBot 11 协议接入，需选择使用`aiocqhttp`作为适配器，填写配置时可参考 Shamrock 的方式。

可选平台：

- Windows
- Linux Docker
- Linux 非 Docker

## NapCat安装教程

https://napneko.github.io/zh-CN/guide/getting-started

运行后扫码登录

## NapCat配置教程

通过 OneBot 11 协议接入，需选择使用`aiocqhttp`作为适配器，填写配置时可参考 Shamrock 和 Lagrange 的方式。

![image-20240514230850243](https://cos.thelazy.cn/pictures/202405142308393.png)

登录后，可以在config文件夹中，找到并修改文件（数字对应机器人QQ号）：![image-20240514231529613](https://cos.thelazy.cn/pictures/image-20240514231529613.png)

参考下图红框修改内容：

![image-20240514231932514](https://cos.thelazy.cn/pictures/202405142319592.png)

然后重新运行登录即可，看到提示：

![image-20240514232647329](https://cos.thelazy.cn/pictures/202405142326384.png)