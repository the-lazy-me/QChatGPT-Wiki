---
head:
  - - meta
    - name: keywords
      content: Lagrange的部署教程
title: aiocqhttp适配器系列教程
icon: mobile
order: 4
author: RockChinQ，ikun0014
date: 2024-05-05
---

## OneBot 11 协议

**OneBot：统一的聊天机器人应用接口标准**

onebot介绍：[https://onebot.dev/](https://onebot.dev/)

以下消息框架可以通过 OneBot 11 协议接入，需选择使用`aiocqhttp`作为适配器，修改data下的platform.json文件

![data/platform.json](https://cos.thelazy.cn/pictures/202405292250017.jpeg)

当前可用的OneBot 11标准消息平台，你可以选择下方任意

- [shamrock的教程](shamrock.md)
- [Lagrange.OneBot的教程](lagrange.md)
- [LiteLoaderQQNT的教程](llonebot.md)
- [NapCat的教程](napcat.md)