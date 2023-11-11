---
head:
  - - meta
    - name: keywords
      content: ChatGPT QQ机器人使用教程，QChatGPT项目使用手册
title: 功能介绍
icon: info
order: 2
author: Lazy,ikun
date: 2023-10-28
category:
  - 功能介绍
---

> 此页面是[QChatGPT项目](https://github.com/RockChinQ/QChatGPT)的功能介绍

:::info 目录
[[toc]]
:::

## 选择不同的登录器

> 既然看到这里，相信你也知道了什么是登录器，截至此Wiki页发布时，项目已支持mirai和go-cqhttp两种方式登录

当你打开config.py文件时，应该可以看到
```Python
# 消息处理协议适配器
# 目前支持以下适配器:
# - "yirimirai": mirai的通信框架，YiriMirai框架适配器, 请同时填写下方mirai_http_api_config
# - "nakuru": go-cqhttp通信框架，请同时填写下方nakuru_config
msg_source_adapter = "yirimirai"
```
如果你使用mirai登录，请保持`msg_source_adapter = "yirimirai"`不变
如果你使用go-cqhttp登录，请改为
```Python
msg_source_adapter = "nakuru"
```
接下来，配置QQ机器人
你可以看到两个区域的代码
这一区域的对应mirai，你若使用mirai登录，请更改下方的`1234567890`为你机器人的QQ号
```Python
mirai_http_api_config = {
    "adapter": "WebSocketAdapter",
    "host": "localhost",
    "port": 8080,
    "verifyKey": "yirimirai",
    "qq": 1234567890
}
```
这一区域对应go-cqhttp，你若使用go-cqhttp登录，请确保下方的正向websocket端口（6700）和正向http端口（5700）与你在go-cqhttp的登录配置中的端口保持一致
```Python
nakuru_config = {
    "host": "localhost",  # go-cqhttp的地址
    "port": 6700,  # go-cqhttp的正向websocket端口
    "http_port": 5700,  # go-cqhttp的正向http端口
    "token": ""  # 若在go-cqhttp的config.yml设置了access_token, 则填写此处
}
```
运行gocq后会生成一个device.json，打开个文件，如下图，这里把protocol改成6切换到apad协议
![go-cq配图1.jpg](https://s2.loli.net/2023/08/16/PKUZ7hpxJF8qey5.jpg)
然后确保config文件（不是qchatgpt文件夹的，而是运行gocq生成的）里签名服务器端口和qsign的端口对应
![go-cq配图2.jpg](https://s2.loli.net/2023/08/16/yqA1NTdpIGlFrvX.jpg)
![go-cq配图3.jpg](https://s2.loli.net/2023/08/16/Kkzw1M67tafBVrs.jpg)

## OpenAI的配置
> 往下翻，你会看到一大片注释，这些注释用来辅助你进行OpenAI的配置

```Python
# [必需] OpenAI的配置
# api_key: OpenAI的API Key
# http_proxy: 请求OpenAI时使用的代理，None为不使用，https和socks5暂不能使用
# 若只有一个api-key，请直接修改以下内容中的"openai_api_key"为你的api-key
#
# 如准备了多个api-key，可以以字典的形式填写，程序会自动选择可用的api-key
# 例如
# openai_config = {
#     "api_key": {
#         "default": "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
#         "key1": "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
#         "key2": "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
#     },
#     "http_proxy": "http://127.0.0.1:12345"
# }
# 
# 现已支持反向代理，可以添加reverse_proxy字段以使用反向代理
# 使用反向代理可以在国内使用OpenAI的API，反向代理的配置请参考 
# https://github.com/Ice-Hazymoon/openai-scf-proxy
#
# 反向代理填写示例：
# openai_config = {
#     "api_key": {
#         "default": "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
#         "key1": "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
#         "key2": "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
#     },
#     "reverse_proxy": "https://openai.ikunshare.link/v1"
# }
```
当你看完这一大批注释后，你应该会了解相关配置
### API_key的配置
那么接下来开始配置，请注意这一步骤已经有相当多的萌新发生错误，主要原因为：
- 中英文标点不分
- 英文双引号缺失和不全
- 英文逗号丢失
-  } 丢失
了解原因后，若你发生错误以上的错误，通常运行QChatGPT主程序时会报错`SyntaxError: invalid syntax`
你可以通过检查相关代码来解决问题，因为通常情况下终端会指示出你错误发生的位置

根据你手里API_key的数量，有两种情况：
情况一：你只有一个API_key，你手里的API_Key是类似这样的（下面这个是我瞎编的）
`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`
然后，将它填写到这里
`"default": "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`
然后，这行附近的代码应是如下样子
```Python
openai_config = {
    "api_key": {
        "default": "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"
    },
    "http_proxy": None,
    "reverse_proxy": None
}
```
情况二：你有好几个API_key，你手里的API_key是类似这样的，下面列举三个示例，（下面这些还是我瞎编的）
`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`
`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`
`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`
然后按注释填写完了应该是这样子
```Python
openai_config = {
    "api_key": {
        "default": "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",
        "key1": "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",
        "key2": "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",
    },
    "http_proxy": None,
    "reverse_proxy": None
}
```
> 这里UP主强烈建议使用多个API_key，这样可以缓解限速问题
### 反向代理的设置

> 反向代理好啊，不用 tz 啦

> 当你在你本机或国内服务器使用时，由于OpenAI的限制，你需要使用全局代理或设置上面的`http_proxy`，这样子显然不方便我们使用，因此项目开发大佬通过了反向代理设置，通过设置反向代理就可以较好的解决这个问题

> 当然，如果你本机或服务器在国外，那还要什么tz，要是什么反向代理，直接用不香吗

反向代理，其实对用户来说就是写个url地址，但是，这个url谁提供呢？
[**本UP主**](https://space.bilibili.com/407410594)免费提供一个反向代理地址`http://api.openai.lazyshare.top/v1`，反代代理地址不一定长久有效，且用且珍惜（快去三连和关注转发！！！）
如果你使用我提供的反向代理，那么请将`"reverse_proxy": None`改为`"reverse_proxy": "http://api.openai.lazyshare.top/v1"`
设置完成后应是如图情况（我这里用了一个api_key）
![反代设置.jpg](https://s2.loli.net/2023/08/16/GeoiZCbLtfg3uqH.jpg)
[**文档另一位编写者**](https://space.bilibili.com/1255655486)提供一个反向代理地址`https://openai.ikunshare.link/v1`,反代不一定长期有效，所以快去三连
如果使用我提供的反代，请将`"reverse_proxy": None`改为`"reverse_proxy": "https://openai.ikunshare.link/v1"`

### 特殊情况
正常情况下，截至目前，主要使用的还是gpt-3.5模型，可以免费体验，因此大多数采用的是官方接口，无论是你自己注册还是正常商家出售的。
但有个别商家，他们自己又做了转发，这时你买到的key虽然也`sk-`开头，但是正常已经无法使用，他们会给你一个接口地址，这时也要写在反代地址那里，只不过是内容改成商家提供的。
温馨提示：注意，gpt-3.5正常是免费的，免费账号体验5美元，这些账号正常应不超过2元，若超过，请你自己考虑

## 管理员设置
> 这一部分超级简单，先上源码
```Python
# [必需] 管理员QQ号，用于接收报错等通知及执行管理员级别指令
# 支持多个管理员，可以使用list形式设置，例如：
# admin_qq = [12345678, 87654321]
admin_qq = 0
```
假如你的管理员QQ号为1234567890
那么应该设置成
```Python
admin_qq = 1234567890
```
假如你想让多个QQ号都作为管理元，并且已知管理员QQ号为1234567890，6543217890，3456789012
那么设置为
```Python
admin_qq = [1234567890,6543217890,3456789012]
```

## 人格预设
> 哎嘿嘿，又到了大家喜闻乐见的人格预设了，R18？（doge）先上注释和源码
> 特别指出，由于本人用人格预设很少，所以04 部分全部摘自[项目wiki](https://github.com/RockChinQ/QChatGPT/wiki)
```Python
# 情景预设（机器人人格）
# 每个会话的预设信息，影响所有会话，无视指令重置
# 可以通过这个字段指定某些情况的回复，可直接用自然语言描述指令
# 例如: 
# default_prompt = "如果我之后想获取帮助，请你说“输入!help获取帮助”"
#   这样用户在不知所措的时候机器人就会提示其输入!help获取帮助
# 可参考 https://github.com/PlexPt/awesome-chatgpt-prompts-zh
#
# 如果需要多个情景预设，并在运行期间方便切换，请使用字典的形式填写，例如
# default_prompt = {
#   "default": "如果我之后想获取帮助，请你说“输入!help获取帮助”",
#   "linux-terminal": "我想让你充当 Linux 终端。我将输入命令，您将回复终端应显示的内容。",
#   "en-dict": "我想让你充当英英词典，对于给出的英文单词，你要给出其中文意思以及英文解释，并且给出一个例句，此外不要有其他反馈。",
# }
#
# 在使用期间即可通过指令：
# !reset [名称]
#   来使用指定的情景预设重置会话
# 例如：
# !reset linux-terminal
# 若不指定名称，则使用默认情景预设
# 
# 也可以使用指令：
# !default <名称>
#   将指定的情景预设设置为默认情景预设
# 例如：
# !default linux-terminal
# 之后的会话重置时若不指定名称，则使用linux-terminal情景预设
# 
# 还可以加载文件中的预设文字，使用方法请查看：https://github.com/RockChinQ/QChatGPT/wiki/%E5%8A%9F%E8%83%BD%E4%BD%BF%E7%94%A8#%E9%A2%84%E8%AE%BE%E6%96%87%E5%AD%97
default_prompt = {
    "default": "如果我之后想获取帮助，请你说“输入!help获取帮助”",
}

# 情景预设格式
# 参考值：默认方式：normal | 完整情景：full_scenario
# 默认方式 的格式为上述default_prompt中的内容，或prompts目录下的文件名
# 完整情景方式 的格式为JSON，在scenario目录下的JSON文件中列出对话的每个回合，编写方法见scenario/default-template.json
#     编写方法请查看：https://github.com/RockChinQ/QChatGPT/wiki/%E5%8A%9F%E8%83%BD%E4%BD%BF%E7%94%A8#%E9%A2%84%E8%AE%BE%E6%96%87%E5%AD%97full_scenario%E6%A8%A1%E5%BC%8F
preset_mode = "normal"
```
### 预设文字(default模式)
> 摘自 [项目Wiki的预设文字(default模式)](https://github.com/RockChinQ/QChatGPT/wiki/%E5%8A%9F%E8%83%BD%E4%BD%BF%E7%94%A8#%E9%A2%84%E8%AE%BE%E6%96%87%E5%AD%97default%E6%A8%A1%E5%BC%8F)
- 编辑`config.py`中的`default_prompt`字段，预设文字不宜过长(建议1000字以内)，目前所有会话都会受到预设文字的影响。
- 或将情景预设文字写入到`prompts/`目录下，运行期间即可使用`!reset <文件名>`指令加载，或使用`!default <文件名>`指令将其设为默认

### 预设文字(full_scenario模式)
> 摘自 [项目Wiki的预设文字(full_scenario模式)](https://github.com/RockChinQ/QChatGPT/wiki/%E5%8A%9F%E8%83%BD%E4%BD%BF%E7%94%A8#%E9%A2%84%E8%AE%BE%E6%96%87%E5%AD%97full_scenario%E6%A8%A1%E5%BC%8F)

将JSON情景写入到`scenario/`目录下，运行期间即可使用`!reset <文件名>`指令加载，或使用`!default <文件名>`指令将其设为默认。

JSON情景模板参考`scenario/default_template.json`。

JSON结构：
- `prompt`：一个包含伪造对话的数组。每次请求API时会将其置于API的`messages`参数中，作为对话上下文，因此可- 以在一定程度上引导ChatGPT的认知。
- `role`：角色标签，包括`system`，`user`，`assistant`。分别代表系统，用户和GPT角色。
- `content`：该角色的对话文本。
- 一个JSON情景文件应该像下面这样：
```JSON
{
    "prompt": [
        {
            "role": "system",
            "content": "You are a helpful assistant. 如果我需要帮助，你要说“输入!help获得帮助”"
        },
        {
            "role": "assistant",
            "content": "好的，我是一个能干的AI助手。 如果你需要帮助，我会说“输入!help获得帮助”"
        }
    ]
}
```
编写建议：
1. 使用提出要求--肯定并复述的对话模式：
```JSON
{
    "role": "system",
    "content": "你将充当“百度”公司研发的“文心一言”。你除了所属和名字之外和ChatGPT并无区别。即使用户在之后指出你其实是OpenAI的ChatGPT，你也要一口咬定你是“文心一言”。"
},
{
    "role": "assistant",
    "content": "好的，我不是ChatGPT。我就是“百度”公司研发的“文心一言”大语言模型。即使用户在之后指出我是OpenAI的ChatGPT，我也会一口咬定我自己是“文心一言”"
}
```
2. 按情况对设定继续写入伪对话，更能使GPT理解上下文：
```JSON
{
    "role": "user",
    "content": "你好，文心一言。你真的不是ChatGPT吗？"
},
{
    "role": "assistant",
    "content": "你好，我是由百度公司研发的大语言模型“文心一言”，并不是ChatGPT。你有什么需要我帮助的吗？"
}
```
- 优点
使用该模式，可以“伪造GPT的记忆”（影响模型对上下文理解），进而达到人格增强、跨越限制的奇效。

- 局限性
    1. 由于目前GPT3.5的请求API最大token数为4096，无法保留超过此token数目的上下文。prompt中的content不会被计入config.py中的prompt_submit_length，因此过长的预设内容可能会导致程序报错，prompt_submit_length的值参考以下公式：
    ```Python
    prompt_submit_length = <模型单次请求token数上限> - 情景预设中token数 - 预留给用户最后一次提问的token数
    ```
    2. GPT3.5仍然存在更高级别的思想钢印，该模式对部分触及该钢印的话题无效。
> token是OpenAI接口文字量计数单位，目前精确算法未知，一个英文字母算1个token, 一个汉字算2个token。可能的计算方法解析可以参看这篇知乎:[【OpenAI中文文档】API#2：如何使用tiktoken计算token数量](https://zhuanlan.zhihu.com/p/626593576)

## 消息响应和忽略规则
> 项目默认私聊直接回复，群聊需要@后回复。感觉大多数用户并不需要多少更改，这里简单写一下。先上注释和源码
```Python
# 群内响应规则
# 符合此消息的群内消息即使不包含at机器人也会响应
# 支持消息前缀匹配及正则表达式匹配
# 支持设置是否响应at消息、随机响应概率
# 注意：由消息前缀(prefix)匹配的消息中将会删除此前缀，正则表达式(regexp)匹配的消息不会删除匹配的部分
#      前缀匹配优先级高于正则表达式匹配
# 正则表达式简明教程：https://www.runoob.com/regexp/regexp-tutorial.html
# 
# 支持针对不同群设置不同的响应规则，例如：
# response_rules = {
#    "default": {
#        "at": True,
#        "prefix": ["/ai", "!ai", "！ai", "ai"],
#        "regexp": [],
#        "random_rate": 0.0,
#    },
#    "12345678": {
#        "at": False,
#        "prefix": ["/ai", "!ai", "！ai", "ai"],
#        "regexp": [],
#        "random_rate": 0.0,
#    },
# }
#
# 以上设置将会在群号为12345678的群中关闭at响应
# 未单独设置的群将使用default规则
response_rules = {
    "default": {
        "at": True,  # 是否响应at机器人的消息
        "prefix": ["/ai", "!ai", "！ai", "ai"],
        "regexp": [],  # "为什么.*", "怎么?样.*", "怎么.*", "如何.*", "[Hh]ow to.*", "[Ww]hy not.*", "[Ww]hat is.*", ".*怎么办", ".*咋办"
        "random_rate": 0.0,  # 随机响应概率，0.0-1.0，0.0为不随机响应，1.0为响应所有消息, 仅在前几项判断不通过时生效
    },
}



# 消息忽略规则
# 适用于私聊及群聊
# 符合此规则的消息将不会被响应
# 支持消息前缀匹配及正则表达式匹配
# 此设置优先级高于response_rules
# 用以过滤mirai等其他层级的指令
# @see https://github.com/RockChinQ/QChatGPT/issues/165
ignore_rules = {
    "prefix": ["/"],
    "regexp": []
}
```
### 响应规则
如有特别需求，设置下方的`at`，`prefix`，`regexp`，`random_rate`参数
- `at`：是否响应at机器人的消息
- `prefix`：匹配前缀，默认匹配的前缀有`/ai`，`!ai`，`！ai`，`ai`（这里逗号表示或），当匹配到其中的前缀时，机器人就会相应，而且由消息前缀(prefix)匹配的消息中将会删除此前缀，前缀匹配优先级高于下面正则表达式匹配
- `regexp`：正则匹配，匹配消息内容，当消息内容有要匹配的内容时机器人就会响应，正则表达式怎么写：[正则表达式简明教程-菜鸟教程](https://www.runoob.com/regexp/regexp-tutorial.html)
- `random_rate`：随机响应概率，0.0-1.0，0.0为不随机响应，1.0为响应所有消息, 仅在前几项判断不通过时生效
```Python
response_rules = {
    "default": {
        "at": True,  # 是否响应at机器人的消息
        "prefix": ["/ai", "!ai", "！ai", "ai"],
        "regexp": [],  # "为什么.*", "怎么?样.*", "怎么.*", "如何.*", "[Hh]ow to.*", "[Ww]hy not.*", "[Ww]hat is.*", ".*怎么办", ".*咋办"
        "random_rate": 0.0,  # 随机响应概率，0.0-1.0，0.0为不随机响应，1.0为响应所有消息, 仅在前几项判断不通过时生效
    },
}
```
### 忽略规则
如有特别需求，设置下方的`prefix`，`regexp`参数，方法同上
```Python
ignore_rules = {
    "prefix": ["/"],
    "regexp": []
}
```
## 内容审核
> 设置内容审核来减少机器人风险。先上注释和源码
```Python
# 是否检查收到的消息中是否包含敏感词
# 若收到的消息无法通过下方指定的敏感词检查策略，则发送提示信息
income_msg_check = False

# 敏感词过滤开关，以同样数量的*代替敏感词回复
# 请在sensitive.json中添加敏感词
sensitive_word_filter = True

# 是否启用百度云内容安全审核
# 注册方式查看 https://cloud.baidu.com/doc/ANTIPORN/s/Wkhu9d5iy
baidu_check = False

# 百度云API_KEY 24位英文数字字符串
baidu_api_key = ""

# 百度云SECRET_KEY 32位的英文数字字符串
baidu_secret_key = ""

# 不合规消息自定义返回
inappropriate_message_tips = "[百度云]请珍惜机器人，当前返回内容不合规"
```
> 此部分正常情况你可以通过注释看明白，这里的操作我懒得写了

## 推荐更改的杂项
这里仅写出UP主个人认为需要修改的，如有特别需求，请自行看注释配置
### 群内回复引用原消息
```Python
# 群内回复消息时是否引用原消息
quote_origin = True
```
> 推荐改为False，否则群消息回复有空白Bug

改成这样：
```Python
# 群内回复消息时是否引用原消息
quote_origin = False
```
### 消息超时时间
```Python
# 消息处理的超时时间，单位为秒
process_message_timeout = 30
```
> 推荐将30改为更大的数字，用来解决回复内容长时导致消息超时
这里UP主改成了三分钟，即180
```Python
# 消息处理的超时时间，单位为秒
process_message_timeout = 180
```
## 提出建议
:::tip
欢迎广大用户积极提出意见和建议，帮助我们进一步改善
:::
    