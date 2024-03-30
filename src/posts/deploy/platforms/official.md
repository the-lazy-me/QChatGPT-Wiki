---
head:
  - - meta
    - name: keywords
      content: QQ 官方机器人 API 使用教程
title: 使用 QQ 官方机器人 API 的教程
icon: support
order: 5
author: RockChinQ
date: 2024-02-17
category:
  - 部署教程
---

QQ 官方 API 可以将机器人接入 QQ 频道 和 QQ 群。  
QQ 频道所有人都可以申请，Q 群 API 权限仅以下情况有资格（[参考](https://bot.q.qq.com/wiki/#_7-%E5%BC%80%E5%8F%91%E5%9C%BA%E6%99%AF%E9%80%89%E6%8B%A9)）：

- 企业资质的 QQ 开放平台账号
- 23年底参加过 QQ 机器人大赛的开发者

## 注册 QQ 机器人

前往[QQ开放平台](https://q.qq.com/#/)，找到下方的 QQ 机器人文档，按照指引注册 QQ 频道机器人。

## 获取凭证

注册完成后，前往机器人控制台，找到 开发设置，获取 `AppId(机器人ID)` 和 `AppSecret(机器人密钥)`，接下来进入填写配置信息步骤。