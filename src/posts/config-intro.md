---
title: QChatGPT的详细配置解读
icon: context
# 这是侧边栏的顺序
order: 4
# 设置作者
author: Lazy
# 设置写作时间
date: 2024-02-13
category:
  - 使用指南
tag:
  - 配置方法
  - 使用指南
---



:::info 目录
[[toc]]
:::

## 配置文件

### 配置文件是什么？

当你下载好本项目后，会发现有一个`templates`文件夹，内部存放的就是即将生成的配置文件的模板

配置文件有以下这些：

- `command.json`：用于存放有关QChatGPT项目命令的
- `pipeline.json`：QChatGPT 3.0新引入的概念，平台适配器获取到消息事件之后，发送给pipeline排队进行处理
- `platform.json`：与消息平台有关的配置
- `plugin-settings.json`：用于配置插件
- `provider.json`：控制AI功能，设置与OpenAI交互的参数，key，模型，反代地址，简单的人格预设等
- `scenario-template.json`：配置人格预设的模板，实现更高级的人格预设
- `sensitive-words.json`：设置敏感词，防止出现不当言论
- `system.json`：设置一些系统信息，如管理员，代理，日志管理，并发数，持续渠道提示信息

以下是对各个配置文件的详细解读


## plugin-settings.json

这个文件会被复制到`plugins/`目录下

以前插件设置分为 metadata.json switch.json settions.json 

现在统一到这里管理

每次启动时，会同步这里的设置和实际加载的插件设置

**这个文件内容是由程序自动生成的，不要手动添加或删除项目，仅可修改优先级和启用状态**

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
