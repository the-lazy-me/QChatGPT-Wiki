---
head:
  - - meta
    - name: keywords
      content: ChatGPT QQ机器人教程，QChatGPT项目部署教程
title: 部署教程
icon: info
author: Lazy
date: 2023-09-30
category:
  - 部署教程
index: false
---
:::info 目录
[[toc]]
## 本项目官方交流群
[Lazy的交流群二](https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=T8rXTa9K4Iypw7pKzLqshQ9Yaumey0lz&authKey=yKfFqnoWk2diU73tEqLnKeqhR0%2BKzB9rOVa0dIjUqm6SOlJvZWNp3XmkkPENmw9m&noverify=0&group_code=738382634)
[项目作者提问群(请先确认issue和本文档内无解决方案)](https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=cSekvWmyezfCE4O8gXS7lSjkmPinjzpP&authKey=G4jHfz2%2BtQawxCRhn1ZRrQiI8bTvlepQubZL6F9fymFuz8jqZZ4FkYh6lhKLMCd9&noverify=0&group_code=195992197)
:::
## 自动化部署
:::tip
Windows首选[安装器](#windows)，Linux首选[Docker](#docker)
:::
### 安装器（不推荐）
> 部署过程最简单，但有一定失败概率

安装器可在Windows和Linux平台下使用
- [<HopeIcon icon="windows" size="1.2em"/> 点击查看Windows的具体操作](auto_app_win.md)

- [<HopeIcon icon="linux" size="1.2em"/> 点击查看Linux的具体操作](auto_app_linux.md)
### Docker（Linux推荐）
> docker方式较为复杂，若您不熟悉docker的操作及相关知识，强烈建议您使用其他方式部署，我们不会且难以解决您主机上多个容器的连接问题。
- [<HopeIcon icon="warn" size="1.2em"/> 点击查看Docker部署的具体操作](auto_docker.md)

## 手动部署（推荐）
> 全平台通用，可以避免安装器部署失败的问题
- [<HopeIcon icon="support" size="1.2em"/> 点击查看手动部署的具体操作](manual.md)