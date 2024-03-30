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
    "port": 8080,
    "access-token": ""
},
```

`"adapter": "aiocqhttp"`，无需动，表示是接入`shamrock等onebot协议实现的机器人框架`的配置

`enable`：是否启用，配置完成后请将其设为`true`

`host`：监听的 IP 地址，使用 aiocqhttp 时，QChatGPT 作为服务端被动等待框架连接，请在 Shamrock 等框架中设置`被动 ws 地址`或者`反向 ws 地址`（具体视框架而定）为 QChatGPT 监听的地址，且路径为`/ws`，例如：`ws://127.0.0.1:8080/ws`。

`port`：设置监听的端口，默认8080，需在 Shamrock 等框架中设置为与此处一致的端口

`access-token`：设置访问密钥，与 Shamrock 等框架中设置的保持一致

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

`intents`：控制监听的事件类型，需要填写才能接收到对应消息，目前支持的事件类型有：

- `public_guild_messages` QQ 频道消息
- `direct_message` QQ 频道私聊消息
- `public_messages` Q群消息（需要权限，具体请查看[QQ官方机器人API文档](https://q.qq.com/)）

## provider.json

修改此配置文件以设置所连接的 AI 提供商的相关信息，仅讲解必要的配置项，更多的配置项详解请查看[配置详解](../config/)。

需要修改 `keys`, `requester`, `model` 字段，目前支持 `openai(GPT)`, `anthropic(claude)`, `moonshot(月之暗面)` 三种接口及对应模型。

例如需要使用 OpenAI 的模型，则 将 OpenAI 的 api key 填写到 `keys.openai` 下，支持多个key。并修改 `model` 为需要使用的模型名称。若您使用了中转站，或者需要使用反向代理，则设置 `requester.openai-chat-completions` 下的 `base-url` 配置。

具体设置方法请查看 配置详解模块的`provider.json` 页。