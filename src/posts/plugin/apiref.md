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

暂时未设计独立 API 层，本页面讲解了一些常用的功能的调用方法。
以下提到的对象及访问方式均在前文有所提及，请先阅读插件开发教程。

## 消息处理

### 回复消息

切入方法：`pkg.platform.adapter.MessageSourceAdapter.reply_message`

由于程序中可能同时运行多个 消息平台适配器（MessageSourceAdapter），故在`query: pkg.core.entities.Query` 对象中包含了 `adapter` 对象，保存了此次请求对应的适配器，通过这个对象可以调用适配器的回复消息方法。

需要传入：
- `message_source`本次消息的来源事件，可以从`query`对象中获取。
- `message`回复的消息内容，YiriMirai 的 MessageChain对象
- `quote_origin: bool`是否引用原消息

### 发送主动消息

不推荐。

切入方法：`pkg.platform.adapter.MessageSourceAdapter.send_message`

需要自己找到一个适配器对象，然后调用此方法。
`ap: pkg.core.app.Application`的`platform_mgr: pkg.platform.manager.PlatformManager`对象中保存了所有适配器对象：`adapters`，从中取出一个即可调用`send_message`方法。

需要传入：

- `target_type`目标类型，可以是`group`或`person`
- `target_id`目标id
- `message`消息内容，YiriMirai 的 MessageChain对象
