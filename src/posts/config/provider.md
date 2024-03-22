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

## 模型接口密钥 keys

```json
"keys": {
    "openai": [
        "sk-1234567890"
    ],
    "anthropic": [
        "sk-1234567890"
    ],
    "moonshot": [
        "sk-1234567890"
    ]
},
```

`keys`：设置密钥组，以字典的形式设置若干个密钥组，每个密钥组的键为密钥组名称，值为密钥列表。模型与密钥组的对应关系，请查看元数据板块。

## 大模型请求器 requester

```json
"requester": {
        "openai-chat-completions": {
            "base-url": "https://api.openai.com/v1",
            "args": {},
            "timeout": 120
        },
        "anthropic-messages": {
            "base-url": "https://api.anthropic.com",
            "args": {
                "max_tokens": 1024
            },
            "timeout": 120
        },
        "moonshot-chat-completions": {
            "base-url": "https://api.moonshot.cn/v1",
            "args": {},
            "timeout": 120
        }
    },
```

`requester`：设置请求器，以字典的形式设置若干个请求器，每个请求器的键为请求器名称，值为请求器配置。模型与请求器的对应关系，请查看元数据板块。实现请求器的方式，请查看插件编写教程。

`base-url`：设置接口地址。

`args`：请求时除了model之外的其他参数，以字典的形式设置。

`timeout`：设置请求超时时间，以秒为单位，对于耗时较长的模型，建议设置较大值

## 使用的模型 model

```json
"model": "gpt-3.5-turbo",
```

`model`：设置要使用的模型名称。通常来说直接填写模型名称即可，但如果要使用原生接口不是 ChatCompletion 但以 ChatCompletion 接口格式接入的模型，请在模型名称前方加一个 `OneAPI/` 前缀以进行区分。
简单来说可以认为是：现阶段非 OpenAI 的模型接入都需要在模型名称前方加一个 `OneAPI/` 前缀。

例如：  
1. 通过 OneAPI 等中转服务接入了 OpenAI 的 `gpt-4` 模型，由于 `gpt-4` 也是使用 ChatCompletion 接口格式进行请求，则可以直接填入 `gpt-4`；  
2. 通过 OneAPI 等中转服务接入了 Google 的 `gemini-pro` 模型，由于 `gemini-pro` 原生接口格式并非 ChatCompletion，因此需要填入 `OneAPI/gemini-pro`。

具体支持的模型列表和各个模型对应的请求器和密钥组，请查看元数据板块。

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
