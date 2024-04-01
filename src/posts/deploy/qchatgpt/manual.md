---
head:
  - - meta
    - name: keywords
      content: ChatGPT QQ机器人教程，QChatGPT项目部署教程
title: 手动部署(推荐，可以在所有平台上使用)
icon: support
order: 3
author: Lazy
date: 2023-02-17
---
:::warning
请使用Python 3.10.x及以上版本，没有Python的需自行安装，参考[此教程](./more-details/python.md)
::: 

:::info 目录
[[toc]]
:::



## 安装主程序

1. 克隆此项目（按照下方命令，需要安装 Git） 或 前往[Release](https://github.com/RockChinQ/QChatGPT/releases)页面下载最新版本的压缩包（推荐）并解压

```bash
git clone https://github.com/RockChinQ/QChatGPT
cd QChatGPT
```

2. 安装依赖

```bash
pip3 install -r requirements.txt
```

或者使用清华源

```bash
pip3 install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
```

3. 运行一次主程序，生成配置文件

```bash
python3 main.py
```

> 如果输入上面的指令无反应，并且你确认你已经装了python，则可以尝试使用`python main.py`，总之`python`是你启动的python的命令，可以使用 `python --version` 查看你的python版本。

提示如下信息

```

  ___   ___ _         _    ___ ___ _____
 / _ \ / __| |_  __ _| |_ / __| _ \_   _|
| (_) | (__| ' \/ _` |  _| (_ |  _/ | |
 \__\_\\___|_||_\__,_|\__|\___|_|   |_|

⭐️开源地址: https://github.com/RockChinQ/QChatGPT
📖文档地址: https://q.rkcn.top

以下文件不存在，已自动生成，请按需修改配置文件后重启：
- plugins/__init__.py
- plugins/plugins.json
- data/config/command.json
- data/config/pipeline.json
- data/config/platform.json
- data/config/provider.json
- data/config/system.json
- data/config/sensitive-words.json
- data/scenario/default.json
```

接下来请查看部署消息平台页。
