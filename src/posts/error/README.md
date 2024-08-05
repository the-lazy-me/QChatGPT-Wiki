---
head:
  - - meta
    - name: keywords
      content: QChatGPT的常见问题
title: QChatGPT的常见问题
icon: info
author: Lazy
date: 2024-06-10
---

## Q1：如何接入 OneAPI、LinkAI 等第三方 OpenAI 格式接口？

文章：[📖 QChatGPT 实践：接入 OneAPI、LinkAI、中转站 等第三方 OpenAI 格式接口以使用 Gemini、Qwen 等模型](https://rockchin.top/?p=295)
## Q2：怎么切换模型？
[每个模型的区别](https://thelazy.cn/2024/06/27/AIGC/)  点击查看

在这个provider.json 配置项页脚如图所示，修改你想要的模型,比如你想用月之暗面的，那他支持的模型只有moonshot-v1-8k， moonshot-v1-32k， moonshot-v1-128k，你只能改为这三个

![image](/assets/image/error_question_2.png)

支持的模型有：

具体可以去 llm-models.json 查看具体支持的模型
```[bot] 模型列表:

名称: default
请求器: openai-chat-completions

名称: gpt-3.5-turbo-0125
请求器: openai-chat-completions

名称: gpt-3.5-turbo
请求器: openai-chat-completions

名称: gpt-3.5-turbo-1106
请求器: openai-chat-completions
 
```
### 指令切换
启动机器人后用指令修改如图

![image](/assets/image/error_question_3.png)

## Q3：官方机器人IP白名单怎么填？

打开[IP138](https://ip38.com/)  这个网址，填写这个IP如图

![image](/assets/image/error_question_4.png)
## Q4：无效令牌如图所示：
![image](/assets/image/error_question_5.png)

你的模型api未填或者不正确亦或者没有额度，请确认无误

## Q5：请求失败如图所示
![image](/assets/image/error_question_6.png)

是因为你没有额度了，请充值

## Q6：插件安装失败

#### 请打开梯子试试！