---
head:
  - - meta
    - name: keywords
      content: QChatGPT API 参考
title: API 参考
icon: code
order: 5
author: RockChinQ
date: 2024-03-22
category:
  - 插件介绍
index: false
---

以下 API 仅针对 事件插件 可用，组件扩展形式请自行阅读源码。

## 消息处理

### 回复消息

ctx.reply(message_chain: mirai.MessageChain)

回复此次事件的发起会话。

- `message_chain`：[YiriMirai 的 MessageChain 对象](https://yiri-mirai.wybxc.cc/docs/basic/message-chain)，若用户使用的不是 YiriMirai 适配器，程序也能自动转换为目标消息链

### 发送主动消息

> 由于 QQ 官方 API 对主动消息的支持性很差，故若用户使用的是 QQ 官方 API，发送主动消息可能会失败

ctx.send_message(target_type: str, target_id: str, message_chain: mirai.MessageChain)

发送主动消息给目标。

- `target_type`：目标类型，可选值：`"person"`、`"group"`
- `target_id`：目标 ID（QQ 号或群号）
- `message_chain`：[YiriMirai 的 MessageChain 对象](https://yiri-mirai.wybxc.cc/docs/basic/message-chain)，若用户使用的不是 YiriMirai 适配器，程序也能自动转换为目标消息链
