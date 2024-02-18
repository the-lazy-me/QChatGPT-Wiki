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



为了快速上手，你需要重点关注以下文件：

- `data/config/platform.json`
- `data/config/provider.json`

## 配置消息平台platform.json

配置data/config/platform.json

```json
{
    "adapter": "yiri-mirai",
    "enable": false,
    "host": "127.0.0.1",
    "port": 8080,
    "verifyKey": "yirimirai",
    "qq": 123456789
},
{
    "adapter": "nakuru",
    "enable": false,
    "host": "127.0.0.1",
    "ws_port": 8080,
    "http_port": 5700,
    "token": ""
},
{
    "adapter": "aiocqhttp",
    "enable": false,
    "host": "127.0.0.1",
    "port": 8080
},
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

截至2024年2月13日，目前支持`mirai`、`go-cqhttp`、`aiocqhttp`、`QQ官方机器人`，支持同时开启多个消息适配器，甚至四个全开

#### 接入mirai

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

`enable`：是否启用，`true`开启

`host`：主机地址，一般不动

`port`：设置端口，默认8080，与`mirai-api-http`里面设置的保持一致

`verifyKey`：密钥，默认yirimirai，与`mirai-api-http`里面设置的保持一致

`qq`：设置机器人QQ号，与当前mirai登录的机器人的QQ号保持一致

#### 接入go-cqhttp

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

`"adapter": "nakuru",`，无需动，表明是接入`go-cqhttp`的配置

`enable`：是否启用，`true`开启

`host`：主机地址，一般不动

`ws_port`：正向WS服务器监听地址，与`go-cqhttp`的`config.yml`里面的保持一致

`http_port`：http服务器监听地址，与`go-cqhttp`的`config.yml`里面的保持一致

`token`：验证密钥，，与`go-cqhttp`的`config.yml`里面的保持一致

#### 接入shamrock等onebot协议实现的机器人框架

```json
{
    "adapter": "aiocqhttp",
    "enable": false,
    "host": "127.0.0.1",
    "port": 8080
},
```

`"adapter": "aiocqhttp",`，无需动，表示是接入`shamrock等onebot协议实现的机器人框架`的配置

`enable`：是否启用，`true`开启

`host`：主机地址，一般不动

`port`：设置端口，默认8080，与对应框架里面设置的保持一致

#### 接入QQ官方机器人

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

`"adapter": "qq-botpy",`，无需动，表明是接入`QQ官方机器人`的配置

`enable`：是否启用，`true`开启

`appid`：申请到的QQ官方机器人的appid

`secret`：申请到的QQ官方机器人的secret

`intents`：控制监听的事件类型，`public_guild_messages` 频道消息`direct_message` 频道私聊消息  `public_messages` Q群消息（需要权限）

## 配置 AI 模型provider.json

配置data/config/provider.json

配置提供AI聊天接口的信息

```json
"enable-chat": true,
```

`enable-chat`：是否开启AI聊天功能

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

`api-keys`：以列表的形式设置若干个api key，例如：

```json
"api-keys": [
	"sk-1234567890",
    "sk-23452354253",
    "sk-2352453674"
],
```

`base_url`：设置接口地址，后面一定要加`/v1`

`model`：选择模型

`request-timeout`：设置请求超时时间，以秒为单位，对于耗时较长的模型(如GPT4)，建议设置较大值