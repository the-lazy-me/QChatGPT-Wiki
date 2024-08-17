---
head:
  - - meta
    - name: keywords
      content: ChatGPT QQ机器人教程，QChatGPT项目部署教程
title: 消息平台部署教程
icon: merge
author: Lazy
date: 2023-02-17
index: false
---

:::info 目录
[[toc]]
:::

## 可选的平台适配器

QChatGPT 需要一个中间程序，处理 QQ 等 IM 的协议（大部分是逆向工程）。  
以下平台任选，也可以配置多个，QChatGPT支持同时接入一个或多个平台：

### 推荐

- aiocqhttp（QQ）：[aiocqhttp适配器教程](aiocqhttp/)
- QQ官方API（QQ群、QQ频道）：[QQ 官方 API 部署教程](official.md)

### 不推荐

以前流行的框架，现在长期不再维护或被腾讯严重围追堵截，不推荐使用：

- Mirai（QQ）：[Mirai部署教程](mirai.md) (使用旧版协议，风控严重)
- go-cqhttp（QQ）：[go-cqhttp部署教程（For nakuru）](nakuru.md)（使用旧版协议，[原开发者停止维护](https://github.com/Mrs4s/go-cqhttp?tab=readme-ov-file#%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF)）

