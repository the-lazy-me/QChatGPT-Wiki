---
head:
  - - meta
    - name: keywords
      content: provider.json 配置文件
title: provider.json 配置项
icon: config
order: 3
author: RockChinQ
date: 2024-02-18
category:
  - 配置文件
---


:::info 目录
[[toc]]
:::

`data/config/provider.json` 中配置AI接口提供商相关的配置项。

## 启用聊天功能 enable-chat

```json
"enable-chat": true,
```

`enable-chat`：是否开启AI聊天功能

## OpenAI 接口配置 openai-config

```json
"openai-config": {
    "api-keys": [
        "sk-1234567890"
    ],
    "base_url": "https://api.openai.com/v1",
    "chat-completions-params": {
        "model": "gpt-3.5-turbo"
    },
    "request-timeout": 120
},
```

`api-keys`：以列表的形式设置若干个api key

`base_url`：设置接口地址，后面一定要加`/v1`

`model`：填写要使用的模型名称。通常来说直接填写模型名称即可，但如果要使用原生接口不是 ChatCompletion 但以 ChatCompletion 接口格式接入的模型，请在模型名称前方加一个 `OneAPI/` 前缀以进行区分。
简单来说可以认为是：现阶段非 OpenAI 的模型接入都需要在模型名称前方加一个 `OneAPI/` 前缀。  

例如：  
1. 通过 OneAPI 等中转服务接入了 OpenAI 的 `gpt-4` 模型，由于 `gpt-4` 也是使用 ChatCompletion 接口格式进行请求，则可以直接填入 `gpt-4`；  
2. 通过 OneAPI 等中转服务接入了 Google 的 `gemini-pro` 模型，由于 `gemini-pro` 原生接口格式并非 ChatCompletion，因此需要填入 `OneAPI/gemini-pro`。


`request-timeout`：设置请求超时时间，以秒为单位，对于耗时较长的模型，建议设置较大值

## 情景预设（人格） prompt

```json
"prompt-mode": "normal",
"prompt": {
    "default": "如果用户之后想获取帮助，请你说”输入!help获取帮助“。" 
}
```

`prompt-mode`：设置情景预设模式，值为`normal`（单预设模式）和`full-scenario`（完整历史对话模式）

`normal`时，使用下面的`prompt`，可设置多个

```json
"prompt": {
    "default": "如果用户之后想获取帮助，请你说”输入!help获取帮助“。",
    "help": "如果用户之后想获取帮助，请你说”输入!help获取帮助“。"
}
```

`normal` 模式也支持读取`data/prompts`目录下的文件内容作为单个 System Prompt，文件名即为`prompt`的名称。

在使用中通过`!default <预设名>`指令将其设为默认

### full-scenario模式配置方法

把完整的历史对话以文件形式添加到`data/scenario/`目录下，参考`data/scenario/default.json`

```json
{
    "prompt": [
        {
            "role": "system",
            "content": "You are a helpful assistant. 如果我需要帮助，你要说“输入!help获得帮助”"
        },
        {
            "role": "assistant",
            "content": "好的，我是一个能干的AI助手。 如果你需要帮助，我会说“输入!help获得帮助”"
        }
    ]
}
```

`role` 为消息的角色，可以是`user`（用户）、`assistant`（AI）、`system`（系统）
`content` 为字符串，表示消息内容。  
在使用中通过`!default <文件名>`指令将其设为默认
