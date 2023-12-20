---
head:
  - - meta
    - name: keywords
      content: ChatGPT QQ机器人，实时联网，支持插件，高稳定性，采用mirai或gocq框架
home: true
icon: home
title: 项目主页
heroImage: /logo.png
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: QChatGPT
tagline: 😎高稳定性、🧩支持插件、🌏实时联网的 ChatGPT QQ 机器人🤖 | 支持 Claude、Google Bard、gpt4free、One API 的 QQ 机器人平台
actions:
  - text: 🚀 快速上手
    link: ./posts/deploymentTutorial/
    type: primary

  - text: 查看项目
    link: https://github.com/RockChinQ/QChatGPT

highlights:
  - header: 亮点一览
    image: /assets/image/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: 高稳定性、支持插件、实时联网的 ChatGPT QQ 机器人。
      - title: 支持 Claude、Google Bard、gpt4free、One API 的 QQ 机器人平台。
      - title: 提供文字对话，模型聚会平台，故事续写，图片绘制，语音生成，自定义插件等多种功能。
      - title: 多平台、多方式部署和使用。

  - header: 模型一览和功能点
    description: 提供文字对话，模型聚会平台，故事续写，图片绘制，语音生成，自定义插件等多种功能
    image: /assets/image/markdown.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 文字对话
        icon: community
        details: OpenAI API,ChatGPT逆向,New Bing,Claude等多模型支持
        link: https://github.com/RockChinQ/QChatGPT#%E6%96%87%E5%AD%97%E5%AF%B9%E8%AF%9D

      - title: 模型聚合平台支持
        icon: network
        details: 支持One API等模型聚合平台
        link: https://github.com/RockChinQ/QChatGPT#%E6%A8%A1%E5%9E%8B%E8%81%9A%E5%90%88%E5%B9%B3%E5%8F%B0

      - title: 敏感词过滤
        icon: safe
        details: 自定义敏感词库或百度云审核
        link: 

      - title: 多种响应规则
        icon: setting
        details: 默认回复前缀ai的或@机器人的消息
        link: 

      - title: 负载均衡
        icon: storage
        details: 可配置多个Key，多种策略
        link: 

      - title: 人格预设
        icon:  write
        details: 自定义机器人人格和预设情景
        link: 

      - title: 热重载 热更新
        icon: update
        details: 运行期间发送指令实现重载和更新
        link:

      - title: 黑名单功能
        icon: lock
        details: 支持将人或群聊加入黑名单以忽略其消息
        link: 

      - title: 可控速率
        icon: operate
        details: 支持限制单会话内每分钟可进行的对话次数，具有“等待”和“丢弃”两种策略
        link: 

      - title: 网络代理
        icon: proxy
        details: 目前已支持HTTP代理和反向代理访问接口
        link: 

      - title: 自定义提示
        icon: question
        details: 允许用户自定义报错、帮助等提示信息
        link: 
      
      - title: 更多功能
        icon: search
        details: 点击这里查看更多功能
        link: /posts/Features.md

  - header: 插件生态
    image: /assets/image/features.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
    features:
      - title: 联网回复
        icon: network
        details: 基于GPT的Function Calling功能实现的类似ChatGPT的WebPilot插件的功能
        link: /posts/PluginsUse/plugin_network

      - title: 逆向工程 LLM
        icon: tree
        details: 可以接入ChatGPT网页版,New Bing,Claude,Bard…
        link: https://github.com/RockChinQ/revLibs

      - title: 对话模型切换
        icon: flow
        details: 支持通过命令在聊天环境中切换使用的模型
        link: https://github.com/RockChinQ/Switcher

      - title: 故事叙述和绘图
        icon: copy
        details: 基于Holara的ai绘图插件
        link: https://github.com/oliverkirk-sudo/QChatAIPaint

      - title: 语音合成
        icon: write
        details: 文字转语音输出，支持HuggingFace的VITS模型,Azure语音合成,本地vits语音合成,sovits语音合成
        link: /posts/PluginsUse/plugin_voice

      - title: 点击查看更多插件
        icon: search
        details: 点此查看所有插件列表
        link: /posts/PluginsUse/pluginsList

  - header: 致谢
    description: 向QChatGPT项目开发者及其插件开发者致以诚挚的敬意
    image: /assets/image/blog.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: 项目作者
        icon: github
        details: QChatGPT项目的开发者
        link: https://github.com/RockChinQ

      - title: 项目仓库
        icon: home
        details: QChatGPT的仓库页
        link: https://github.com/RockChinQ/QChatGPT

      - title: 插件贡献者
        icon: group
        details: QChatGPT的仓库页
        link: https://github.com/RockChinQ/QChatGPT/graphs/contributors

copyright: false
footer: <a href="https://github.com/RockChinQ/QChatGPT" target="_blank">QChatGPT</a> 项目的Wiki页&nbsp;&nbsp;|&nbsp;&nbsp;MIT 协议, 版权所有 © 2023-present Lazy
