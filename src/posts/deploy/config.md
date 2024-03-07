---
head:
  - - meta
    - name: keywords
      content: ChatGPT QQ机器人教程，QChatGPT项目部署教程
title: 填写配置信息
icon: class
author: Lazy
date: 2024-02-18
---

修改以下配置文件即可启用 QChatGPT 的基本功能，更多的配置项详解请查看[配置详解](../config/)。

- `data/config/platform.json`
- `data/config/provider.json`

## platform.json

修改此配置文件以指定需要连接的消息平台，只需要关注`platform-adapters`字段。
目前支持 `mirai`、`go-cqhttp`、`aiocqhttp`、`qq-botpy` 四种消息平台适配器，也可以同时启用多个同种类或不同种类的平台适配器

### YiriMirai 适配器

用于接入 Mirai。

```json
{
    "adapter": "yiri-mirai",
    "enable": false,
    "host": "127.0.0.1",
    "port": 8080,
    "verifyKey": "yirimirai",
    "qq": 123456789
},
```

`"adapter": "yiri-mirai"`，无需动，表明是接入`mirai`的配置

`enable`：是否启用，配置完成后请将其设为`true`

`host`：运行 mirai 的主机地址，一般不改动

`port`：设置端口，默认8080，与`mirai-api-http`里面设置的保持一致

`verifyKey`：密钥，默认yirimirai，与`mirai-api-http`里面设置的保持一致

`qq`：设置机器人QQ号，与当前mirai登录的机器人的QQ号保持一致

### Nakuru 适配器

用于接入 go-cqhttp。

```json
{
    "adapter": "nakuru",
    "enable": false,
    "host": "127.0.0.1",
    "ws_port": 8080,
    "http_port": 5700,
    "token": ""
},
```

`"adapter": "nakuru"`，无需动，表明是接入`go-cqhttp`的配置

`enable`：是否启用，配置完成后请将其设为`true`

`host`：运行 go-cqhttp 的主机地址，一般不改动

`ws_port`：正向WS服务器监听地址，与`go-cqhttp`的`config.yml`里面的保持一致

`http_port`：http服务器监听地址，与`go-cqhttp`的`config.yml`里面的保持一致

`token`：验证密钥，，与`go-cqhttp`的`config.yml`里面的保持一致

### aiocqhttp 适配器

用于接入 Shamrock 等兼容 OneBot 协议的机器人框架（仅支持反向ws）。

```json
{
    "adapter": "aiocqhttp",
    "enable": false,
    "host": "127.0.0.1",
    "port": 8080
},
```

`"adapter": "aiocqhttp"`，无需动，表示是接入`shamrock等onebot协议实现的机器人框架`的配置

`enable`：是否启用，配置完成后请将其设为`true`

`host`：监听的 IP 地址，使用 aiocqhttp 时，QChatGPT 作为服务端被动等待框架连接，请在 Shamrock 等框架中设置`被动 ws 地址`或者`反向 ws 地址`（具体视框架而定）为 QChatGPT 监听的地址，且路径为`/ws`，例如：`ws://127.0.0.1:8080/ws`。

`port`：设置监听的端口，默认8080，需在 Shamrock 等框架中设置为与此处一致的端口

### qq-botpy 适配器

用于接入 QQ 官方机器人 API。

```json
{
    "adapter": "qq-botpy",
    "enable": false,
    "appid": "",
    "secret": "",
    "intents": [
        "public_guild_messages",
        "direct_message"
    ]
}
```

`"adapter": "qq-botpy"`，无需动，表明是接入`QQ官方机器人`的配置

`enable`：是否启用，配置完成后请将其设为`true`

`appid`：申请到的QQ官方机器人的appid

`secret`：申请到的QQ官方机器人的secret

`intents`：控制监听的事件类型：`public_guild_messages` 频道消息`direct_message` 频道私聊消息  `public_messages` Q群消息（需要权限）

## provider.json

修改此配置文件以设置所连接的 AI 提供商的相关信息，仅讲解必要的配置项，更多的配置项详解请查看[配置详解](../config/)。

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

`api-keys`：支持以列表的形式设置若干个api key，例如：

```json
"api-keys": [
    "sk-1234567890",
    "sk-23452354253",
    "sk-2352453674"
],
```

`base_url`：设置接口地址，如果你从第三方购买了key，或者需要使用反向代理时才需要修改这个参数，后面一定要加`/v1`

`model`：填写要使用的模型名称。通常来说直接填写模型名称即可，但如果要使用原生接口不是 ChatCompletion 但以 ChatCompletion 接口格式接入的模型，请在模型名称前方加一个 `OneAPI/` 前缀以进行区分。
简单来说可以认为是：现阶段非 OpenAI 的模型接入都需要在模型名称前方加一个 `OneAPI/` 前缀。  

例如：  
1. 通过 OneAPI 等中转服务接入了 OpenAI 的 `gpt-4` 模型，由于 `gpt-4` 也是使用 ChatCompletion 接口格式进行请求，则可以直接填入 `gpt-4`；  
2. 通过 OneAPI 等中转服务接入了 Google 的 `gemini-pro` 模型，由于 `gemini-pro` 原生接口格式并非 ChatCompletion，因此需要填入 `OneAPI/gemini-pro`。

`request-timeout`：设置请求超时时间，以秒为单位，对于耗时较长的模型(如GPT4)，建议设置较大值