---
head:
  - - meta
    - name: keywords
      content: OpenShamrock的部署教程
title: OpenShamrock的部署教程
icon: support
order: 3
author: ikun
date: 2023-12-21
category:
  - 部署教程
---

# OpenShamrock(未来可能的方向)

## OpenShamrock简介

官方文档：https://whitechi73.github.io/OpenShamrock/

可选平台(or设备)：

- 模拟器
- Linux服务器
- PVE
- 云手机
- 实体手机

总之，就是在模拟的或实际的安卓环境下，root过后安装Xposed框架，OpenShamrock将会基于Xposed框架实现 OneBot 标准

## 步骤(模拟器)

### 环境配置

**注：使用[mumu模拟器](https://mumu.163.com/)**

参考[此文档](https://forum.libfekit.so/d/60-mumu12mo-ni-qi-an-zhuang-magiskhe-lsposed)安装Magisk和LSPosed

记得打开mumu模拟器的可写系统盘和root权限

![img](https://cos.thelazy.cn/pictures/shamrock202401190836463.png)

### 下载OpenShamrock

从[OpenShamrock的Actions](https://github.com/whitechi73/OpenShamrock/actions)下载最新的OpenShamrock安装包，注意下载带有`all`字样的版本，如`Shamrock-v1.0.7.r253.81be383-all.zip`，解压，在mumu模拟器安装

### 安装QQ

参考[此页面](https://whitechi73.github.io/OpenShamrock/guide/faq.html#%E6%94%AF%E6%8C%81%E7%9A%84qq%E7%89%88%E6%9C%AC)给出的支持的QQ版本，选择最新即可

在[这里](https://qq.cn.uptodown.com/android/versions)选择对应的版本下载，在mumu模拟器安装即可

登录机器人QQ

此时应该可以看见框架已激活，且正确显示QQ头像和QQ号

> 若打开后框架未激活,请检查QQ后台是否存活,LSPosed,LSPatch等XPosed管理器是否勾选Shamrock。

### 配置Shamrock

![image-20240119085141185](https://cos.thelazy.cn/pictures/shamrock202401190851209.png)

![image-20240119085203006](https://cos.thelazy.cn/pictures/shamrock202401190852028.png)

### 配置QChatGPT

```python
msg_source_adapter = "nakuru"


# [必需(与mirai二选一，取决于msg_source_adapter)]
# 使用nakuru-project框架连接go-cqhttp的配置
nakuru_config = {
    "host": "localhost",  # go-cqhttp的地址
    "port": 5800,  # go-cqhttp的正向websocket端口
    "http_port": 5700,  # go-cqhttp的正向http端口
    "token": ""  # 若在go-cqhttp的config.yml设置了access_token, 则填写此处
}
```



### 端口转发

查看mumu模拟器的ADB调试端口，参考[此教程](https://mumu.163.com/help/20230214/35047_1073151.html)

在mumu模拟器安装目录，打开cmd，输入（替换16384为实际）

```bash
adb.exe -s 127.0.0.1:16384 forward tcp:5800 tcp:5800
adb.exe -s 127.0.0.1:16384 forward tcp:5700 tcp:5700
```



### 测试

稍等片刻，运行QChatGPT主程序，如图，运行成功

![image-20240119085405838](https://cos.thelazy.cn/pictures/shamrock202401190854875.png)