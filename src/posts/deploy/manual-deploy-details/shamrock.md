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

暂时只支持私聊回复，群聊正在适配中...

## OpenShamrock简介

Mirai、go-cqhttp 之类的是模拟 QQ 的协议进行通信，而 Shamrock 使用的是 安卓的 Hook 来操作 QQ 模拟点击，稳定性较高。

官方文档：https://whitechi73.github.io/OpenShamrock/

可选平台(or设备)：

- 模拟器
- Linux服务器
- PVE
- 云手机
- 实体手机

## 步骤(模拟器)

### 环境配置

**注：建议使用[mumu模拟器](https://mumu.163.com/)**

参考[此文档](https://forum.libfekit.so/d/60-mumu12mo-ni-qi-an-zhuang-magiskhe-lsposed)安装Magisk和LSPosed

记得打开mumu模拟器的可写系统盘和root权限

<!--TODO: 这里配图错了-->
![img](https://cos.thelazy.cn/pictures/shamrock202401190836463.png)

### 安装OpenShamrock

从[OpenShamrock的Actions](https://github.com/whitechi73/OpenShamrock/actions)下载最新的OpenShamrock安装包，注意下载带有`all`字样的版本，如`Shamrock-v1.0.7.r253.81be383-all.zip`，解压，在mumu模拟器安装


#### 配置Shamrock

1. 在 Shamrock 的设置页面修改设置如图：

![image-20240119085141185](https://cos.thelazy.cn/pictures/shamrock202401190851209.png)

![image-20240119085203006](https://cos.thelazy.cn/pictures/shamrock202401190852028.png)

2. 并前往 LSPosed 的模块管理页面 启用模块 Shamrock

<!--TODO: 这里给个配图-->

### 安装QQ

参考[此页面](https://whitechi73.github.io/OpenShamrock/guide/faq.html#%E6%94%AF%E6%8C%81%E7%9A%84qq%E7%89%88%E6%9C%AC)给出的支持的QQ版本，选择最新即可

在[这里](https://qq.cn.uptodown.com/android/versions)选择对应的版本下载，在mumu模拟器安装即可

### 登录机器人QQ

1. 打开QQ，登录机器人QQ，关闭QQ，重启模拟器。
2. 启动 LSPosed，Shamrock 将会自动运行，启动 QQ。
3. 打开 Shamrock 页面，此时应显示 `已激活` 并可以查看到账号信息和相关消息日志。

### 端口转发

查看mumu模拟器的ADB调试端口，参考[此教程](https://mumu.163.com/help/20230214/35047_1073151.html)

在mumu模拟器安装目录，打开cmd，输入（替换16384为实际）

```bash
adb.exe -s 127.0.0.1:16384 forward tcp:5800 tcp:5800
adb.exe -s 127.0.0.1:16384 forward tcp:5700 tcp:5700
```

### 配置QChatGPT

修改 `config.py`中对应的设置。

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

### 回到刚刚的手动部署文档查看后续步骤

### 测试

稍等片刻，运行QChatGPT主程序，如图，运行成功

![image-20240119085405838](https://cos.thelazy.cn/pictures/shamrock202401190854875.png)
