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
## Q:2.怎么切换模型？
在这个provider.json 配置项页脚如图所示，修改你想要的模型,比如你想用月之暗面的，那他支持的模型只有moonshot-v1-8k， moonshot-v1-32k， moonshot-v1-128k，你只能改为这三个

![image](/assets/image/2.png)

支持的模型有：
```[bot] 模型列表:

名称: default
请求器: openai-chat-completions

名称: gpt-3.5-turbo-0125
请求器: openai-chat-completions

名称: gpt-3.5-turbo
请求器: openai-chat-completions

名称: gpt-3.5-turbo-1106
请求器: openai-chat-completions

名称: gpt-4-turbo
请求器: openai-chat-completions

名称: gpt-4-turbo-2024-04-09
请求器: openai-chat-completions

名称: gpt-4-turbo-preview
请求器: openai-chat-completions

名称: gpt-4-0125-preview
请求器: openai-chat-completions

名称: gpt-4-1106-preview
请求器: openai-chat-completions

名称: gpt-4
请求器: openai-chat-completions

名称: gpt-4o
请求器: openai-chat-completions

名称: gpt-4-0613
请求器: openai-chat-completions

名称: gpt-4-32k
请求器: openai-chat-completions

名称: gpt-4-32k-0613
请求器: openai-chat-completions

名称: gpt-4o-mini
请求器: openai-chat-completions

名称: OneAPI/gemini-1.5-pro-latest
请求器: openai-chat-completions

名称: OneAPI/gemini-1.5-flash-latest
请求器: openai-chat-completions

名称: OneAPI/claude-3-opus-20240229
请求器: openai-chat-completions

名称: OneAPI/claude-3-sonnet-20240229
请求器: openai-chat-completions

名称: OneAPI/claude-3-haiku-20240307
请求器: openai-chat-completions

名称: OneAPI/claude-3-5-sonnet-20240620
请求器: openai-chat-completions

名称: OneAPI/moonshot-v1-8k
请求器: openai-chat-completions

名称: OneAPI/moonshot-v1-32k
请求器: openai-chat-completions

名称: OneAPI/moonshot-v1-128k
请求器: openai-chat-completions

名称: OneAPI/deepseek-chat
请求器: openai-chat-completions

名称: OneAPI/deepseek-coder
请求器: openai-chat-completions

名称: claude-3-opus-20240229
请求器: anthropic-messages

名称: claude-3-sonnet-20240229
请求器: anthropic-messages

名称: claude-3-haiku-20240307
请求器: anthropic-messages

名称: claude-3-5-sonnet-20240620
请求器: anthropic-messages

名称: moonshot-v1-8k
请求器: moonshot-chat-completions

名称: moonshot-v1-32k
请求器: moonshot-chat-completions

名称: moonshot-v1-128k
请求器: moonshot-chat-completions

名称: deepseek-chat
请求器: deepseek-chat-completions

名称: deepseek-coder
请求器: deepseek-chat-completions

名称: OneAPI/SparkDesk
请求器: openai-chat-completions

名称: OneAPI/gemini-pro
请求器: openai-chat-completions
```
### 指令切换
启动机器人后用指令修改如图

![image](/assets/image/3.png)

## Q3.官方机器人IP白名单怎么填？

打开[IP138](https://ip38.com/)  这个网址，填写这个IP如图

![image](/assets/image/4.png)
## 无效令牌如图所示：
![image](/assets/image/5.png)

你的模型api未填或者不正确亦或者没有额度，请确认无误
