---
head:
  - - meta
    - name: keywords
      content: ChatGPT QQ机器人插件，QChatGPT项目插件
title: 插件介绍
icon: blog
order: 1
date: 2023-09-30
category:
  - 插件介绍
index: false
---

:::info 目录
[[toc]]
:::

## 插件分类

**插件**，是QChatGPT的扩展模块，其中包含**事件监听器**和**内容函数**两种可执行内容。事件监听器由主程序运行中的事件驱动，而内容函数由GPT生成的内容驱动。这两种驱动方式都统一包装在插件类中。

### 事件监听器

插件监听 QChatGPT 运行期间的各种事件，QChatGPT 在事件发生时，携带事件相关信息调用插件注册的监听器。插件可以通过注册监听器以在指定情况下被触发。

### 内容函数

内容函数不同于 通过事件触发插件，而是在对话期间，当对话内容符合内容函数的描述时，由 GPT 指定要调用的函数，并由 QChatGPT 进行调用。
这是基于 [GPT的Function Calling能力](https://platform.openai.com/docs/guides/gpt/function-calling) 实现的，这是一种嵌入对话中，由GPT自动调用的函数。

> 就是 ChatGPT官方插件 那种东西

例如我们为GPT提供一个函数`access_the_web`，并提供其详细的描述以及其参数的描述，那么当我们在与GPT对话时涉及类似以下内容时：

```
Q: 请搜索一下github上有那些QQ机器人项目？
Q: 请为我搜索一些不错的云服务商网站？
Q：阅读并总结这篇文章：https://zhuanlan.zhihu.com/p/607570830
Q：搜一下清远今天天气如何
```

GPT将会回复一个对`access_the_web`的函数调用请求，QChatGPT将调用插件提供的内容函数，并返回调用结果给GPT使其生成新的回复。  
当然，函数调用功能不止局限于网络访问，还可以实现图片处理、科学计算、行程规划等需要调用函数的功能，理论上我们可以通过内容函数实现与`ChatGPT Plugins`相同的功能。

## 插件用法

### 安装

> 这里只是给出了插件的基本安装方法，详细需查看各插件文档或咨询其开发者

#### 储存库克隆(推荐)

在运行期间，使用管理员账号对机器人私聊发送`!plugin get <GitHub储存库地址>`即可自动获取源码并安装插件，程序会根据仓库中的`requirements.txt`文件自动安装依赖库  

例如安装`hello_plugin`插件
```
!plugin get https://github.com/RockChinQ/hello_plugin
```

安装完成后重启程序。

#### 手动安装

将获取到的插件程序放置到`plugins`目录下，具体使用方式请查看各插件文档或咨询其开发者。

### 管理

#### !plugin 命令

```
!plugin                    列出所有已安装的插件
!plugin get <储存库地址>    从GitHub储存库地址安装插件(需要管理员权限)
!plugin update all         更新所有插件(需要管理员权限，仅支持从储存库安装的插件)
!plugin update <插件名>    更新指定插件
!plugin del <插件名>       删除插件(需要管理员权限)
!plugin on <插件名>        启用插件(需要管理员权限)
!plugin off <插件名>       禁用插件(需要管理员权限)

!func                      列出所有内容函数
```

#### plugins/plugins.json 配置文件

程序启动时，会同步这里的设置和实际加载的插件设置。

**这个文件内容是由程序自动生成的，不要手动添加或删除项目，仅可修改优先级和启用状态**，修改后需重启。

示例：

```json
"plugins": [
    {
        "name": "Nahida",
        "description": "Hello Nahida",
        "version": "0.1",
        "author": "RockChinQ",
        "source": "",   
        "main_file": "plugins/Nahida/main.py",
        "pkg_path": "plugins/Nahida/",
        "priority": 0,  
        "enabled": true   
    }
]
```

`source`：源码地址，若无内容，则表示这个插件不支持程序自动更新

`priority`： 插件运行优先级，在初始化、事件调用时，高优先级的插件将优先被处理

`enabled`：设置为false时，不会初始化，也不会被调用
