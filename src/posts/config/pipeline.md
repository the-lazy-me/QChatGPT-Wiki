---
head:
  - - meta
    - name: keywords
      content: pipeline.json 配置文件
title: pipeline.json 配置项
icon: config
order: 2
author: RockChinQ
date: 2024-02-18
category:
  - 配置文件
---

:::info 目录
[[toc]]
:::

`data/config/pipeline.json` 配置程序处理一个请求的过程中的操作流程，平台适配器获取到消息事件之后，发送给pipeline排队进行处理。可以设置黑白名单、群响应规则、是否检查传入消息、传入消息忽略规则、是否检查敏感词、百度云内容审核配置、传入消息长度设置、限速配置等功能。


## 访问控制 access-control

```json
"access-control":{
    "mode": "blacklist",
    "blacklist": [],
    "whitelist": []
},
```

`mode`：设置模式白名单 `whitelist`（仅处理`whitelist`列表中的会话的消息）或黑名单 `blacklist`（忽略`blacklist`列表中的会话的消息）

`blacklist`：格式`{type}_{id}`，示例：`"blacklist": [group_12345678，person_12341234],`

`whitelist`：格式`{type}_{id}`，示例：`"whitelist": [group_12345678，person_12341234]`


## 群消息响应规则 respond-rules

仅处理`access-control`通过的会话的消息，其中可含有多个key，若要对特定群设置响应规则，则以群号作为键。未特指的群，将使用 default 中的响应规则

```json
"respond-rules": {
    "default": {
        "at": true,
        "prefix": [
            "/ai", "!ai", "！ai", "ai"
        ],
        "regexp": [],
        "random": 0.0
    }
},
```

`at`：`true`或`false`，设置@响应

`prefix`：设置响应前缀

`regexp`：正则匹配

`random`：随机匹配，为1时所有消息都响应

你可以为单个群聊设置特定的响应规则，例如

```json
"respond-rules": {
    "default": {
        "at": true,
        "prefix": [
            "/ai", "!ai", "！ai", "ai"
        ],
        "regexp": [],
        "random": 0.0
    },
    "123456":{
        "at": true,
        "prefix": [
            "/ai", "!ai", "！ai", "ai"
        ],
        "regexp": [],
        "random": 0.0
    },
    "789012":{
        "at": true,
        "prefix": [
            "/ai", "!ai", "！ai", "ai"
        ],
        "regexp": [],
        "random": 0.0
    }
},
```

## 检查传入消息内容开关 income-msg-check

```json
"income-msg-check": true,
```

`income-msg-check`：是否检查传入的消息

## 传入消息忽略规则 ignore-rules

```json
"ignore-rules": {
    "prefix": ["/"],
    "regexp": []
},
```

符合规则的传入消息将被忽略，仅`income-msg-check`为`true`时生效

`prefix`：前缀为`/`的忽略

`regexp`：正则匹配的忽略

## 本地敏感词检查 check-sensitive-words

```json
"check-sensitive-words": true,
```

`check-sensitive-words`：是否检查敏感词，敏感词词库为`data/config/sensitive-words.json`里面的

## 百度云内容审核配置 baidu-cloud-examine

```json
"baidu-cloud-examine": {
    "enable": false,
    "api-key": "",
    "api-secret": ""
},
```

`baidu-cloud-examine`：控制是否使用是否进行百度云内容审核

`enable`：enable=true时启用，一定会检查AI响应结果，仅`income-msg-check`为true时检查传入消息

`api-key`：百度AI开放平台的`API_KEY`

`api-secret`：百度AI开放平台的`SECRET_KEY`

*`API_KEY`与`SECRET_KEY`是在创建完毕应用后，系统分配给用户的，均为字符串，用于标识用户，为访问做签名验证，可在AI服务控制台中的**应用列表**中查看*

## 传入消息长度设置 submit-messages-tokens

```json
"submit-messages-tokens": 3072,
```

`submit-messages-tokens`：传给模型的消息长度限制，不同模型有不同的token数限制，QChatGPT 内部会保存各个模型的（约）最大token数限制

   与此值取最小值，在传给模型API之前对当前会话的历史消息进行截断

## 请求限速规则 rate-limit

```json
"rate-limit": {
    "strategy": "drop",
    "algo": "fixwin",
    "fixwin": {
        "default": 60
    }
}
```

`strategy`：会话中的请求速率超过限制时的处理策略，`drop`为丢弃新请求，`wait`为等待请求速率降到限制以下

`algo`： 使用的算法，目前仅支持 `fixwin` （固定窗口），即一分钟内最多处理多少个请求

`fixwin`：具体速率设置，一分钟内最多处理多少个请求， 支持对特定session指定限速，格式为 {type}_{id}，示例：group_12345678，person_12341234