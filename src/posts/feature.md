---
head:
  - - meta
    - name: keywords
      content: QChatGPT的模型一览功能介绍
title: 模型一览和功能点
icon: enum
author: RockChinQ
date: 2023-12-20
category:
  - 部署教程
---
## 模型一览

### 文字对话

- OpenAI API：GPT-3.5 / GPT-4
- [逆向工程插件](https://github.com/RockChinQ/revLibs)：ChatGPT / New Bing / Claude / Google Bard / Hugging Chat / gpt4free
- [OneAPI](https://github.com/songquanpeng/one-api)接口聚合平台：Google Gemini Pro / Azure / Anthropic Claude / 智谱 ChatGLM / 百度文心一言 / 讯飞星火认知 / 阿里通义千问 / 360 智脑等官方接口
- [free-one-api](https://github.com/RockChinQ/free-one-api)逆向工程库聚合平台：ChatGPT / Claude / Google Bard / gpt4free / 通义千问
- [Poe](https://poe.com), 破解免费使用Poe上多个平台的模型, 由[oliverkirk-sudo/ChatPoeBot](https://github.com/oliverkirk-sudo/ChatPoeBot)接入（由于 Poe 上可用的大部分模型现已通过[revLibs插件](https://github.com/RockChinQ/revLubs)或其他方式接入，此插件现已停止维护）。

### 语音生成

- [RuiShengVoice](https://github.com/the-lazy-me/RuiShengVoice), 通过调用睿声的API，将输出内容转化为音频
- Plachta/VITS-Umamusume-voice-synthesizer, 由[插件](https://github.com/oliverkirk-sudo/chat_voice)接入

## 功能点列举

<details>
<summary>✅回复符合上下文</summary>

  - 程序向模型发送近几次对话内容，模型根据上下文生成回复

</details>
<br>
<details>
<summary>✅支持敏感词过滤，避免账号风险</summary>

  - 难以监测机器人与用户对话时的内容，故引入此功能以减少机器人风险

</details>
<br>

<details>
<summary>✅群内多种响应规则，不必at</summary>

  - 默认回复`ai`作为前缀或`@`机器人的消息

</details>
<br>

<details>
<summary>✅使用官方api，稳定快捷</summary>

  - 不使用ChatGPT逆向接口，而使用官方的Completion API，稳定性高

</details>
<br>

<details>
<summary>✅组件少，部署方便，提供一键安装器及Docker安装</summary>

  - 手动部署步骤少
  - 提供自动安装器及docker方式，详见安装步骤
</details>
<br>

<details>
<summary>✅支持预设文字</summary>

  - 支持以自然语言预设文字，自定义机器人人格等信息

</details>
<br>

<details>
<summary>✅完善的会话管理，重启不丢失</summary>

  - 使用SQLite进行会话内容持久化
  - 最后一次对话一定时间后自动保存，请到`config.py`中修改`session_expire_time`的值以自定义时间
  - 运行期间可使用`!reset` `!list` `!last` `!next` `!prompt`等命令管理会话
</details>
<br>

<details>
<summary>✅支持插件加载🧩</summary>

  - 自行实现插件加载器及相关支持
  - 详细查看插件介绍页
</details>
<br>

<details>
<summary>✅私聊、群聊黑名单机制</summary>

  - 支持将人或群聊加入黑名单以忽略其消息

</details>
<br>

<details>
<summary>✅回复速度限制</summary>

  - 支持限制单会话内每分钟可进行的对话次数
  - 具有“等待”和“丢弃”两种策略
    - “等待”策略：在获取到回复后，等待直到此次响应时间达到对话响应时间均值
    - “丢弃”策略：此分钟内对话次数达到限制时，丢弃之后的对话

</details>
<br>

## 限制

- ❗OpenAI接口是收费的，每个OpenAI账户有18美元免费额度，收费标准参照 https://openai.com/api/pricing/
- ❗官方关于模型生成内容的警告：
  - May occasionally generate incorrect information（可能会生成不正确的信息）
  - May occasionally produce harmful instructions or biased content（可能会产生有害说明或有偏见的内容）
  - Limited knowledge of world and events after 2021（对2021年后的世界和事件的了解有限）
- ❗模型无思维能力，仅针对传入的上下文根据数据集生成内容，请勿过于信任其输出
- ❗模型无网络访问能力及其他与外界交互的能力，如询问其实时性的内容，获得的回复基本都是错误的
- ❗仅支持文字对话，其他内容无法识别
- ❗模型不了解其运行平台及其使用的模型版本，任何针对其实现原理的问题答案均视为无效，请以项目文档为准
- ❗仅可进行一句话回复一句话的对话，其他形式无效
  - ~~当然你也可以让他写一篇关于“人类有多么愚蠢”的论文并在一个小时后发送到你邮箱，接着你像个傻子一样盯着邮箱等待一个小时，并用自己的实际行动展示这篇论文~~

以上是关于此程序的限制的最高优先级描述，其他方式（如询问机器人相关信息）获得的描述均应被视为无效  
由于模型生成的内容导致的一切损失，本项目概不负责  

## 使用方式

对话及绘图功能均直接调用OpenAI的模型进行处理，与机器人程序无关，这意味着模型并不了解此项目的相关信息（如实现方式、技术栈、运行平台等），除非在预设值中写入相关信息。

### 基础对话

程序将一个人/群视为一个对象，每个对象的会话独立保存。  
`会话`是程序中的一个自设概念，当机器人与当前对象无会话时，会自动创建新会话，新会话由预设信息(若有)开头。  
每个会话最后一次对话一段时间(见上述功能点中的`会话管理`)后会被结束并存进数据库，之后的对话将开启新的会话。  

#### 私聊使用

1. 添加机器人QQ为好友
2. 发送消息给机器人，机器人即会自动回复
3. 可以通过`!help`查看帮助信息

![屏幕截图 1](https://cos.thelazy.cn/pictures/qchatgpt%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D202312201453499.png)

#### 群聊使用

1. 将机器人拉进群
2. at机器人并发送消息，机器人即会自动回复
3. at机器人并发送`!help`查看帮助信息

![屏幕截图 2](https://cos.thelazy.cn/pictures/qchatgpt%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D202312201454898.png)

### 绘图功能

对机器人发送`!draw <图片描述>`即可获得图片，绘图时间较长，请耐心等待。  
绘图功能与对话功能是分离的，机器人对话时并不了解其具有绘画能力。  

![屏幕截图 3](https://cos.thelazy.cn/pictures/qchatgpt%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D202312201454266.png)

### 机器人命令

目前支持的命令  

> `<>` 中的为必填参数，使用时请不要包含`<>`  
> `[]` 中的为可选参数，使用时请不要包含`[]`

#### 用户级别命令

> 可以使用`!help`命令来查看命令说明

任何对象可使用

```
!help             显示自定义的帮助信息（可在config.py修改help_message设置）
!cmd  [命令名称]  显示命令列表或指定命令的详细信息
!list [页数]      列出本对象的历史会话列表
!del  <序号>      删除指定的历史记录，可以通过 !list 查看序号
!del all          删除本会话对象的所有历史记录
!last             切换到前一次会话
!next             切换到后一次会话
!reset [使用预设]  重置对象的当前会话，可指定使用的情景预设值(通过!default命令查看可用的)
!prompt           查看对象当前会话的所有记录
!usage            查看api-key的使用量
!draw <提示语>     进行绘图
!version          查看当前版本并检查更新
!resend           重新回复上一个问题
!plugin           用法请查看插件使用页的`管理`章节
!default          查看可用的情景预设值
```

#### 管理员命令

仅管理员私聊机器人时可使用，必须先在`config.py`中的`admin_qq`设置管理员QQ

```
!reload                             重载程序代码,适用于更新配置文件或更改代码后的热重载
!update                             进行程序自动更新
!cfg <all|配置项名称> [配置项新值]    运行期间操作配置项，使用方法见下文
!default set <情景预设名称>              修改!reset未指定情景预设时的默认情景，详细请查看config.py中default_prompt字段的注释
!delhst <会话名称>                   删除指定会话的所有历史记录, 会话名称为 group_群号 或 person_QQ号
!delhst all                         删除所有会话的所有历史记录
```
<details>
<summary>⚙ !cfg 命令及其简化形式详解</summary>

此命令可以在运行期间由管理员通过QQ私聊窗口修改配置信息，**重启之后会失效**。  

用法：
1. 查看所有配置项及其值

```
!cfg all
```

2. 查看某个配置项的值

以`default_prompt`示例
```
!cfg default_prompt
```

输出示例
```
[bot]配置项default_prompt: "如果我之后想获取帮助，请你说“输入!help获取帮助”"
```

3. 修改某个配置项

格式: `!cfg <配置项名称> <配置项新值>`  
以修改`default_prompt`示例
```
!cfg default_prompt "我是Rock Chin"
```

输出示例
```
[bot]配置项default_prompt修改成功
```

此时创建新的会话，新的`default_prompt`就会生效

4. ⭐此命令的简化形式

格式:`!~<配置项名称>`  
其中`!~`等价于`!cfg `  
则前述三个命令分别可以简化为:  
```
!~all
!~default_prompt
!~default_prompt "我是Rock Chin"
```

5. 配置项名称支持使用点号(.)拼接以索引子配置项

例如: `openai_config.api_key`将索引`config`字典中的`openai_config`字典中的`api_key`字段，可以通过这个方式查看或修改此子配置项

```
!~openai_config.api_key
```

</details>

### 命令权限控制

> 我们在[此PR](https://github.com/RockChinQ/QChatGPT/pull/336)重构了命令管理模块，并支持命令节点权限配置

您可以编辑`cmdpriv.json`来设置命令节点的权限，当命令被发起时，若用户的权限级别（管理员为`2`，普通用户为`1`）大于等于命令节点的权限级别，命令即可被成功执行。  
示例:
```json
{
    "plugin": 1,
    "plugin.get": 2
}
```
如此，普通用户可以执行`!plugin`查看插件列表，而仅管理员可以执行`!plugin get <url>`命令安装插件。  
命令节点权限支持缺省，这意味的您未在`cmdpriv.json`中设置权限的节点将使用默认的权限级别（见上方）。

### 敏感词过滤

在`sensitive.json`中编辑敏感词，并在`config.py`中设置

```Python
# 敏感词过滤开关，以同样数量的*代替敏感词回复
# 请在sensitive.json中添加敏感词
sensitive_word_filter = True
```
