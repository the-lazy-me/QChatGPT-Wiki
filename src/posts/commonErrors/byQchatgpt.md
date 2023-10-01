---
title: QChatGPT报错
icon: type
order: 2
author: Lazy
date: 2023-09-30
category:
  - 常见报错
---
:::info 目录
[[toc]]
:::

## 运行run-bot.bat闪退，检查发现目录下无QChatGPT目录 
![Q8_3.png](https://s2.loli.net/2023/08/16/HzTR5dAivUOKNMP.png)
[点击跳转issue页查看解决办法](https://github.com/RockChinQ/qcg-installer/issues/2)

## 启动run-bot.bat闪退，命令行运行报错: No module named 'colorlog'
![Q8_2.png](https://s2.loli.net/2023/08/16/PUXj6mxustQicvH.png)
[点击跳转issue页查看解决办法](https://github.com/RockChinQ/qcg-installer/issues/15)

## 启动主程序后卡住，发送消息不回复
[点击跳转issue页查看解决办法](https://github.com/RockChinQ/QChatGPT/issues/37)

## 运行run-bot.bat，报错ModuleNotFoundError: No module named 'pkg'
[点击跳转issue页查看解决办法](https://github.com/RockChinQ/qcg-installer/issues/40)

## 运行run-bot.bat，报错：捕捉到未知异常
[点击跳转issue页查看解决办法](https://github.com/RockChinQ/qcg-installer/issues/31)

## Websockets版本过低：As of 3.10, the *loop* parameter was removed from Lock() since it is no longer necessary
解决方法：
- 由自动安装器进行部署的，到安装器目录执行以下指令（即run-bot所在目录）
    - Windows平台
    ```python
    python\Scripts\pip3 install websockets --upgrade
    ```
    - Linux平台
    ```python
    python/bin/pip install websockets --upgrade
    ```
- 手动部署的：
    ```python
    pip3 install websockets --upgrade
    ```

想要查看更多有关Q8_7 问题的，请点击下方：
[点击跳转issue页查看解决办法](https://github.com/RockChinQ/QChatGPT/issues/5)