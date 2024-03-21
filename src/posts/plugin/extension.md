---
head:
  - - meta
    - name: keywords
      content: QChatGPT 组件扩展教程
title: 组件扩展
icon: code
order: 4
author: RockChinQ
date: 2024-03-21
category:
  - 插件介绍
index: false
---

> 请先阅读[插件介绍页](../plugin/intro.md)  

:::info 目录
[[toc]]
:::

普通的以 `BasePlugin` 子类包装的插件只能监听预定事件，而组件扩展则可以替换整个组件，实现更强大的功能扩展。

- 组件扩展不需要包装在 `BasePlugin` 子类中
- 扩展的组件不受插件开关控制
- 扩展的组件通常由配置文件中的选项选用

## 可扩展的组件

### 命令

- 基类：`pkg.command.operator.CommandOperator`
- 装饰器：`pkg.command.operator.operator_class(name: str, help: str="", usage: str=None, alias: list[str]=[], privilege: int=1, parent_class: typing.Type[CommandOperator] = None)`
- 参考类：`pkg.command.operators/`