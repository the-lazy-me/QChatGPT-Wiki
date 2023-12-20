---
head:
  - - meta
    - name: keywords
      content: ChatGPT QQ机器人教程，QChatGPT项目部署教程
title: 手动部署(推荐，可以在所有平台上使用)
icon: support
order: 3
author: Lazy.ikun.RockChinQ
date: 2023-10-29
category:
  - 部署教程
---
:::warning
请使用Python 3.9.x以上版本，没有Python的需自行安装，参考[此教程](./manual-deploy-details/python.md)
::: 

:::info 目录
[[toc]]
:::

## 配置QQ登录框架

目前支持mirai和go-cqhttp，配置任意一个即可

<details>
<summary>mirai</summary>

1. 按照[此教程](./manual-deploy-details/yirimirai.md)配置Mirai及mirai-api-http  
2. 启动mirai-console后，使用`login`命令登录QQ账号，保持mirai-console运行状态  
3. 在下一步配置主程序时请在config.py中将`msg_source_adapter`设为`yirimirai`

</details>

<details>
<summary>go-cqhttp</summary>

1. 按照[此文档](./manual-deploy-details/gocq.md)配置go-cqhttp
2. 启动go-cqhttp，确保登录成功，保持运行
3. 在下一步配置主程序时请在config.py中将`msg_source_adapter`设为`nakuru`

</details>

## 配置主程序

1. 克隆此项目（按照下方命令，需要安装 Git） 或 前往[Release](https://github.com/RockChinQ/QChatGPT/releases)页面下载最新版本的压缩包（推荐）并解压

```bash
git clone https://github.com/RockChinQ/QChatGPT
cd QChatGPT
```

2. 安装依赖

```bash
pip3 install requests -r requirements.txt
```

3. 运行一次主程序，生成配置文件

```bash
python3 main.py
```

4. 编辑配置文件`config.py`

按照文件内注释填写配置信息，或者阅读[此页面](../config-intro.md)来学习如何配置信息

> Tips: 大多数情况下，你只需关注qq小号，OpenAI Key的配置和管理员QQ号的配置

5. 运行主程序

```bash
python3 main.py
```

无报错信息即为运行成功

当你成功运行后，你需要开始阅读[此页面](../config-intro.md)
