---
head:
  - - meta
    - name: keywords
      content: ChatGPT QQ机器人插件，QChatGPT项目插件
title: 插件使用
icon: list
order: 1
author: Lazy
date: 2023-09-30
category:
  - 插件使用
---
:::info 目录
[[toc]]
:::
# QChatGPT 的插件使用

## 简介

`plugins`目录下的所有`.py`程序都将被加载，除了`__init__.py`之外的模块支持热加载

> 插件分为`行为插件`和`内容插件`两种，行为插件由主程序运行中的事件驱动，内容插件由GPT生成的内容驱动，请查看内容插件页  
> 已有插件列表：[QChatGPT 插件](https://github.com/stars/RockChinQ/lists/qchatgpt-%E6%8F%92%E4%BB%B6)

## 安装

### 储存库克隆(推荐)

在运行期间，使用管理员账号对机器人私聊发送`!plugin get <Git储存库地址>`即可自动获取源码并安装插件，程序会根据仓库中的`requirements.txt`文件自动安装依赖库  

例如安装`hello_plugin`插件
```
!plugin get https://github.com/RockChinQ/hello_plugin
```

安装完成后重启程序或使用管理员账号私聊机器人发送`!reload`进行热重载加载插件

### 手动安装

将获取到的插件程序放置到`plugins`目录下，具体使用方式请查看各插件文档或咨询其开发者。

## 管理

### !plugin 命令

```
!plugin                    列出所有已安装的插件
!plugin get <储存库地址>    从Git储存库安装插件(需要管理员权限)
!plugin update all         更新所有插件(需要管理员权限，仅支持从储存库安装的插件)
!plugin update <插件名>    更新指定插件
!plugin del <插件名>       删除插件(需要管理员权限)
!plugin on <插件名>        启用插件(需要管理员权限)
!plugin off <插件名>       禁用插件(需要管理员权限)

!func                      列出所有内容函数
```

### 控制插件执行顺序

可以通过修改`plugins/settings.json`中`order`字段中每个插件名称的前后顺序，以更改插件**初始化**和**事件执行**顺序

### 启用或关闭插件

无需卸载即可管理插件的开关  
编辑`plugins`目录下的`switch.json`文件，将相应的插件的`enabled`字段设置为`true/false(开/关)`，之后重启程序或执行热重载即可控制插件开关

### 控制全局内容函数开关

内容函数是基于[GPT的Function Calling能力](https://platform.openai.com/docs/guides/gpt/function-calling)实现的，这是一种嵌入对话中，由GPT自动调用的函数。  
每个插件可以自行注册内容函数，您可以在`plugins`目录下的`settings.json`中设置`functions`下的`enabled`为`true`或`false`控制这些内容函数的启用或禁用。

# > 说白了就是ChatGPT官方插件那种东西

内容函数是基于[GPT的Function Calling能力](https://platform.openai.com/docs/guides/gpt/function-calling)实现的，这是一种嵌入对话中，由GPT自动调用的函数。  

例如我们为GPT提供一个函数`access_the_web`，并提供其详细的描述以及其参数的描述，那么当我们在与GPT对话时涉及类似以下内容时：

```
Q: 请搜索一下github上有那些QQ机器人项目？
Q: 请为我搜索一些不错的云服务商网站？
Q：阅读并总结这篇文章：https://zhuanlan.zhihu.com/p/607570830
Q：搜一下清远今天天气如何
```

GPT将会回复一个对`access_the_web`的函数调用请求，QChatGPT将自动处理执行该调用，并返回结果给GPT使其生成新的回复。

当然，函数调用功能不止局限于网络访问，还可以实现图片处理、科学计算、行程规划等需要调用函数的功能，理论上我们可以通过内容函数实现与`ChatGPT Plugins`相同的功能。

- 您需要使用`v2.5.0`以上的版本才能加载包含内容函数的插件
- 您需要同时在`config.py`中的`completion_api_params`中设置`model`为支持函数调用的模型，推荐使用`gpt-3.5-turbo-16k`
- 使用此功能可能会造成难以预期的账号余额消耗，请关注
- [逆向库插件](https://github.com/RockChinQ/revLibs)现在也支持函数调用了..您可以在完全免费的情况下使用GPT-3.5进行函数调用，若您在主程序配置了内容函数并启用，逆向ChatGPT会自动使用这些函数

### ？QChatGPT有什么类型的插件？区别是什么？

QChatGPT具有`行为插件`和`内容函数`两种扩展方式，行为插件是完整的插件结构，是由运行期间的事件驱动的，内容函数被包含于一个完整的插件体中，由GPT接口驱动。

> 还是不理解？可以尝试根据插件开发页的步骤自行编写插件

## QChatGPT的一些不错的内容函数插件

- [WebwlkrPlugin](https://github.com/RockChinQ/WebwlkrPlugin) - 让机器人能联网！！
