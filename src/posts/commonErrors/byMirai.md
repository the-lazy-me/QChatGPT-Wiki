---
title: Mirai报错
icon: notice
order: 1
author: Lazy
date: 2023-09-30
category:
  - 常见报错
---
> 本人能力有限，报错收集将会逐步完善增补，望广大用户献计献策，众人拾柴火焰高，共同完善
:::info 目录
[[toc]]
:::
## code=45
![code=45](https://s2.loli.net/2023/08/16/CcJFZiXLw6oGNxI.png)
> **这个问题已经说过无数次了，要使用签名服务！！！**

不知道什么是签名服务，怎么用签名服务，直接看下面教程，完全看不懂的严格根据教程重来，看懂的直接翻到里面签名服务部分
* [点我查看Windows部署教程](http://lazyfree.top/2023/08/11/QChatGPT%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B-Win-mirai/)
* [点我查看Linux部署教程](http://lazyfree.top/2023/08/11/QChatGPT%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B-Linux-mirai/)

> 2023年9月13日发现最新问题，即使加载了签名服务，仍然报错code=45，以下博主发现的一个可能行得通的解决办法（2023年9月15日发现，所使用的[签名服务](https://github.com/MrXiaoM/qsign)版本是1.0.9，该解决方法可靠性未知）：
1. 删除mirai文件夹下的bots文件夹
2. 更新qsgin签名服务为最新版（当时最新为1.0.9），更新方法见`https://github.com/MrXiaoM/qsign#%E5%8D%87%E7%BA%A7%E6%8F%92%E4%BB%B6`
    - 替换mirai文件夹中的plugins文件夹里面的`qsign-x.x.x.mirai2.jar`为你下载到的最新版，当时最新的为`qsign-1.0.9.mirai2.jar`
    - 替换mirai文件夹中的txlib文件，换成你下载到的最新版
3. 修改config\top.mrxiaom.qsign的config.yml文件，修改`base-path: 'txlib/8.9.63'`为`base-path: 'txlib/8.9.73'`[之所以改为8.9.73，是因为mirai文件夹中txlib文件夹中最新的就是8.9.73，如果有更新的，请自行改成最新的]
4. 按照常规方式在mirai中进行登录你的机器人QQ

## code=16
![code=16](https://s2.loli.net/2023/08/17/8ONDlwVTbtAQa7H.png)
删除mirai下的bots文件夹，然后重新登录，按要求输入
## code=237
![code=237](https://s2.loli.net/2023/08/17/AW3g2swTJ1aVUfN.png)
打开mirai/config/Console文件夹，打开`AutoLogin.yml`文件
按照下图修改
![解决code_237.png](https://s2.loli.net/2023/08/17/dJ9tCHpiyQ8eusP.png)