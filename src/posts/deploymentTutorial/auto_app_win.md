---
title: 安装器部署(Win)
icon: windows
order: 1
author: Lazy
date: 2023-09-30
category:
  - 使用指南
---
:::info 目录
[[toc]]
:::

:::tip 建议配合视频使用
<BiliBili bvid="BV14h4y1w7TC" />
:::


## 第一步：下载一键安装器

打开这个网页

[https://github.com/RockChinQ/qcg-installer](https://github.com/RockChinQ/qcg-installer)

点击 release，点击下载 exe 文件，保存到一个合适位置

双击刚才的 exe 文件，程序即可自动加载

如果速度过慢，可以关闭该窗口，删除多出来的 python 文件夹，在文件夹空白处右击，在终端中打开，输入以下指令

```terminal
.\qcg-installer-windows-amd64.exe -p http://localhost:7890
```

耐心等待，程序将自动运行至提示输入OpenAI api_key，这时输入你的 api_key 并回车，获取 api_key 链接在这里

[https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

然后输入你机器人的 QQ 号并回车

## 第二步：配置签名服务器

打开这个网页，点击 release，点击下载 zip 压缩包

[https://github.com/MrXiaoM/qsign](https://github.com/MrXiaoM/qsign)

将下载好的压缩包解压后里面会有两个文件夹，其中 plugins 文件夹里面的 jar 包放到到 mirai 文件夹下的 plugins 文件夹，txlib 文件夹移动到 mirai 文件夹，如图所示

![图1](https://s2.loli.net/2023/08/11/vH4u7jlYCt1iKEG.png)

![图2](https://s2.loli.net/2023/08/11/bC2ZapYwjMAErq4.png)

## 第三步：登录

手机上打开这个网页

[https://github.com/KasukuSakura/mirai-login-solver-sakura](https://github.com/KasukuSakura/mirai-login-solver-sakura)

点击 release，下载 apk-release.apk 文件，然后安装

双击 run-mirai.bat，耐心等待，然后输入，其中 123456 是替换为你机器人的 QQ 号，67890 替换为你机器人 QQ 的密码

```terminal
login 12345 67890
```

然后输入

```terminal
TxCaptchaHelper
```

回车后可以看到弹窗提示，点击第二个，弹出二维码，打开手机刚才下载的软件，点击扫描二维码，验证完成后，可以看到电脑提示验证，选择短信验证，然后输入收到的验证码，点击确定即可成功登录
如果没有弹窗提示，可以看到终端提示要在手机端输入识别码，打开手机刚才下载的软件，输入，验证通过后，可以看到电脑提示要发送短信验证码，输入` yes `后回车，然后输入手机收到的短信验证码，回车后就可以看到登录成功了

然后点击 run-bot.bat，可以看到提示登录成功了，这时就可以给你的机器人发送消息了，私聊直接发送，群聊需要@
## 第四步：反向代理

当然，目前使用仍然需要全局代理，但考虑到总是全局代理不方便，我们可以通过设置反向代理来解决
具体操作：打开QChatGPT文件夹下的config.py文件（可以用记事本或VScode等任何代码编辑器）
找到这一行，在你填写API_Key的附近
```
"reverse_proxy": None
```
将这行代码改为
```
"reverse_proxy": "双引号里面写你的反代地址"
```
若使用[**本UP主**](https://space.bilibili.com/407410594)免费提供的反代地址请输入为`"reverse_proxy": "http://api.openai.lazyshare.top/v1"`，反代地址不一定长久有效，且用且珍惜
设置完成后应是如图情况
![反代设置.jpg](https://s2.loli.net/2023/08/16/GeoiZCbLtfg3uqH.jpg)
然后记得保存，并重新运行run-bot


    