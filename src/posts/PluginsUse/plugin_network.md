---
title: WebwlkrPlugin插件
icon: network
order: 2
author: Lazy
date: 2023-09-30
category:
  - 插件使用
---
> 本期教程操作需要网络使用魔法，请自行解决

前提：已经安装了QChatGPT和mirai，没有安装的请根据[部署教程](../deploymentTutorial/README.md)自行安装

打开这个网页

[https://github.com/RockChinQ/WebwlkrPlugin](https://github.com/RockChinQ/WebwlkrPlugin)

看到提示主程序版本高于要高于v2.5.0，所以发送（管理员向机器人QQ发送，管理员qq号是你自己设置的，在QChatGPT文件夹的config.py文件中可以看到）

```sh
!version
```

如果回复的当前版本符号要求，即可继续本教程，否则先要更新版本（发送`!update`或自行手动安装新版本）

向机器人发送（注意网络要使用魔法）

```sh
!plugin get https://github.com/RockChinQ/WebwlkrPlugin
```

然后安装成功后可以看到机器人回复

![图1.png](https://s2.loli.net/2023/08/12/zmZBc8yfV1NL3vg.png)

发送`!reload`即可成功使用