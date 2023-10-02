---
title: 问题解答
icon: blog
author: Lazy
date: 2023-09-30
category:
  - 问题解答
---
> 之所以有问题解答这一页面，是因为很多人并不仔细阅读[功能介绍](./functionIntroduction.md)，以至于产生了一系列问题，为此又增设此页面来提供解决方案

:::info 目录
[[toc]]
:::
## 项目配置文件如config.py文件双击打不开
:::tip 解答
config.py文件是一个python文件，需要相应的编辑器才能打开，很多情况下我们可以使用记事本打开
但是，我们**强烈建议下载一个代码编辑器**，这样能够极大地方便你对配置文件的修改
这里以VS Code为例，[下载地址](https://code.visualstudio.com/)
如果你还是不知道，可以网上搜一下，这里提供一个[B站视频](https://www.bilibili.com/video/BV1bK411P767/?spm_id_from=333.337.search-card.all.click&vd_source=b09c71fce8dcc714b307c12de388d2f4)
:::
## [bot]err:调用API失败，请重试或联系管理员，或等待修复
:::tip 解答
通常是由于你的API key没有正确填写，打开`QChatGPT\config.py`文件（使用记事本或代码编辑器），找到这一片代码，将你的API Key按照示例填写到对应地方
```python
openai_config = {
    "api_key": {
        "default": "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    "http_proxy": None,
    "reverse_proxy": None
}
```
> 本问题可见于[功能介绍的api-key的配置](./functionIntroduction.md/#api-key的配置)
:::
## [bot]person_ xxxxxxx会话调用API失败:Error communicating with OpenAI您的网络无法访问OpenAI接口或网络代理不正常
:::tip 解答
通常是由于你的网络环境所致，你需要使用全局代理或设置反代（推荐）
全局代理因你使用的代理软件而异，你应该了解的
设置反代，打开`QChatGPT\config.py`文件，按图配置：
` "reverse_proxy": "http://api.openai.lazyshare.top/v1"`
![反代设置.jpg](https://s2.loli.net/2023/08/16/GeoiZCbLtfg3uqH.jpg)
> 本问题可见于[功能介绍的反向代理的设置](./functionIntroduction.md/#反向代理的设置)
:::

