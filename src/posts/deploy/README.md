---
head:
  - - meta
    - name: keywords
      content: ChatGPT QQ机器人教程，QChatGPT项目部署教程
title: 部署教程
icon: blog
author: Lazy
date: 2024-02-18
index: false
---

## 部署教程

请按照以下步骤部署 QChatGPT 项目：

- 第一步: [部署QChatGPT](qchatgpt/)
- 第二步: [部署消息平台](platforms/)
- 第三步: [填写配置信息](config.md)

完成以上三个步骤后，你接下来应该仔细阅读左栏中的[配置详解](../config/README.md)和[元数据配置](../metadata/README.md)，实现更多样化的配置需求

## 社区资源

### 视频教程

 [QChatGPT+NewChatVoice语音插件整合包(20240730)](https://www.bilibili.com/video/BV1iLvyePE8x/?share_source=copy_web&vd_source=596e7910a78045e2636e7b25e3618120)

### 人格预设合集

一个人格预设集合(测试版，不保证完全可用性和效果)，内含1000+预设

<details>
<summary>展开查看详细使用</summary>

下载链接： [https://drive.lazyshare.top/s/kzNzEyO](https://drive.lazyshare.top/s/kzNzEyO)

密码：6Vc5lojxAozX10Ub

使用方式： 

1. 下载解压，将里面你想要的人格预设文件，记得先解压，解压后里面的1000多个json文件，复制放入data/scenario文件夹，一个json文件就是一个预设(比如说：理塘丁真.json就是一个预设)

2. 修改配置文件：

   - 修改`pipeline.json`将`income-msg-check`和`[check-sensitive-words`字段设为`false`
   - 修改`provider.json`将`prompt-mode`字段设为`full-scenario`，`model`字段要特别设置一下，参考下面或这篇教程[https://thelazy.cn/2024/06/27/AIGC/](https://thelazy.cn/2024/06/27/AIGC/)

3. 对话中发送：!default set <预设名>`指令将其设为默认（将<预设名>整体替换为文件名）
   例如：!default set 理塘丁真

   然后再发送：
   !reset

注意：
1. 内含大量 NSFW 内容，请注意使用环境  
2. model应该使用claude系列或Gemini系列

最好的：claude-3-opus-20240229

一般的：claude-3-sonnet-20240229，gemini-1.5-pro-latest，gemini-1.5-flash-latest

如何使用相关模型：[https://thelazy.cn/2024/06/27/AIGC/](https://thelazy.cn/2024/06/27/AIGC/)

</details>


## 本项目交流 QQ 群

### 社区群

> 遇到问题请先认真阅读文档，如无法解决再加群提问

Lazy的交流群一：891448839（已满）

Lazy的交流群二：738382634（已满）

Lazy的交流群三：248432104（已满）

Lazy的交流群四：619154800 ([链接](https://qm.qq.com/q/1K9GjQuza))

### 官方群

> 官方群不解答部署问题

四群：195992197 [链接](https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=cSekvWmyezfCE4O8gXS7lSjkmPinjzpP&authKey=G4jHfz2%2BtQawxCRhn1ZRrQiI8bTvlepQubZL6F9fymFuz8jqZZ4FkYh6lhKLMCd9&noverify=0&group_code=195992197)
