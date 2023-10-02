---
title: 手动部署
icon: support
order: 3
author: Lazy
date: 2023-09-30
category:
  - 使用指南
---
:::warning
请使用Python 3.9.x以上版本 
::: 

:::info 目录
[[toc]]
:::

## 配置QQ登录框架

目前支持mirai和go-cqhttp，配置任意一个即可

<details>
<summary>mirai</summary>

1. 按照[此教程](https://yiri-mirai.wybxc.cc/tutorials/01/configuration)配置Mirai及mirai-api-http  
2. 启动mirai-console后，使用`login`命令登录QQ账号，保持mirai-console运行状态  
3. 在下一步配置主程序时请在config.py中将`msg_source_adapter`设为`yirimirai`

</details>

<details>
<summary>go-cqhttp</summary>

1. 按照[此文档](https://github.com/RockChinQ/QChatGPT/wiki/9-go-cqhttp%E9%85%8D%E7%BD%AE)配置go-cqhttp
2. 启动go-cqhttp，确保登录成功，保持运行
3. 在下一步配置主程序时请在config.py中将`msg_source_adapter`设为`nakuru`

</details>

## 配置主程序

1. 克隆此项目

```bash
git clone https://github.com/RockChinQ/QChatGPT
cd QChatGPT
```

2. 安装依赖

```bash
pip3 install requests yiri-mirai openai colorlog func_timeout dulwich Pillow nakuru-project-idk CallingGPT tiktoken
```

3. 运行一次主程序，生成配置文件

```bash
python3 main.py
```

4. 编辑配置文件`config.py`

按照文件内注释填写配置信息

5. 运行主程序

```bash
python3 main.py
```

无报错信息即为运行成功


    