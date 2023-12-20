---
head:
  - - meta
    - name: keywords
      content: Mirai报错
title: Mirai报错
icon: notice
order: 1
author: Lazy,ikun
date: 2023-10-28
category:
  - 常见问题
---
> 本人能力有限，报错收集将会逐步完善增补，望广大用户献计献策，众人拾柴火焰高，共同完善
:::info 目录
[[toc]]
:::
> 现在被风控是正常的事情，你懂的
## code=45
![code=45](https://s2.loli.net/2023/08/16/CcJFZiXLw6oGNxI.png)
> **目前由于tx对机器人协议端的打压，所有新号都会登录报错45**
[公共签名服务器](https://qsign.ikunshare.link),密钥114514
解决方案:无
## code=16
![code=16](https://s2.loli.net/2023/08/17/8ONDlwVTbtAQa7H.png)
删除mirai下的bots文件夹，然后重新登录，按要求输入
## code=237
![code=237](https://s2.loli.net/2023/08/17/AW3g2swTJ1aVUfN.png)
打开mirai/config/Console文件夹，打开`AutoLogin.yml`文件
按照下图修改
![解决code_237.png](https://s2.loli.net/2023/08/17/dJ9tCHpiyQ8eusP.png)