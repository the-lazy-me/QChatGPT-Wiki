---
head:
  - - meta
    - name: keywords
      content: system.json 配置文件
title: system.json 配置项
icon: config
order: 6
author: RockChinQ
date: 2024-02-18
category:
  - 配置文件
---

:::info 目录
[[toc]]
:::



`data/config/system.json` 中配置系统设置，如管理员、网络代理、是否上报遥测数据供开发者分析、日志等级、会话消息处理并发数、流水线消息处理并发数、帮助消息等

## 管理员会话 admin-sessions

```json
"admin-sessions": [],
```

`admin-sessions`：设置管理员会话，格式为 {type}_{id}，type 为 "group" 或 "person"，如：

```json
"admin-sessions": ["group_123456789", "person_123456789"],
```

## 网络代理 network-proxies

```json
"network-proxies": {
    "http": null,
    "https": null
},
```

`network-proxies`：设置网络代理，为正向代理，http和https都要填，例如

```json
"network-proxies": {
    "http": "http://127.0.0.1:7890",
    "https": "http://127.0.0.1:7890"
},
```

正向代理也可以用环境变量设置：http_proxy 和 https_proxy

## 上报遥测数据 report-usage

```json
"report-usage": true,
```

`report-usage`：是否上报遥测数据供开发者分析，不包含敏感信息

## 日志等级 logging-level

```json
"logging-level": "info",
```

`logging-level`：暂时没用，现在只能通过环境变量 DEBUG=true 来设置调试日志输出

## 会话消息处理并发数 session-concurrency

```json
"session-concurrency": {
    "default": 1
},
```

`session-concurrency`：会话消息处理并发数，粒度是每个会话，session格式为 {type}_{id}，未指定的session使用 default 配置

## 流水线消息处理并发数 pipeline-concurrency

```json
"pipeline-concurrency": 20,
```

`pipeline-concurrency`：流水线消息处理并发数，粒度是整个程序，目前使用 FCFS 算法调度各个请求。

## 帮助消息 help-message

```json
"help-message": "QChatGPT - 😎高稳定性、🧩支持插件、🌏实时联网的 ChatGPT QQ 机器人🤖\n链接：https://q.rkcn.top"
```

`help-message`：帮助消息，用户发送 !help 命令时的输出
