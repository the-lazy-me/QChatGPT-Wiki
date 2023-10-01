---
title: 安装器部署(Linux)
icon: linux
order: 2
author: Lazy
date: 2023-09-30
category:
  - 使用指南
---
:::info 目录
[[toc]]
:::

## 第一步：下载安装器文件

在根目录输入以下指令创建一个文件夹（bot 为文件夹的名字，随便起）

```terminal
mkdir bot
```

然后输入指令进入 bot 文件夹（bot 切换为你起的名字）

```terminal
cd bot
```

创建一个 screen 窗口，命名为 bot，可以随便

```terminal
screen -S bot
```

然后输入以下指令下载安装器文件

```terminal
wget https://github.com/RockChinQ/qcg-installer/releases/download/v0.13.2/qcg-installer-linux-amd64
```

## 第二步：运行安装器

依次执行以下命令

```terminal
sudo chmod -R 777 qcg-installer-linux-amd64
```

```terminal
./qcg-installer-linux-amd64
```

耐心等待，可能需要半个小时，直至如图界面

![图1](https://s2.loli.net/2023/08/11/j5DnQPVCYh1sJ78.jpg)

输入你的 api_key 并回车，然后输机器人 QQ 号再回车

## 第三步：配置签名服务器

打开这个网页，点击 release，点击下载 zip 压缩包

[https://github.com/MrXiaoM/qsign](https://github.com/MrXiaoM/qsign)

将下载好的压缩包解压后里面会有两个文件夹，其中 plugins 文件夹里面的 jar 包上传到 mirai 文件夹下的 plugins 文件夹

![图2](https://s2.loli.net/2023/08/11/KiJQozRlPDdtBUs.png)

txlib 文件夹上传到 mirai 文件夹下

![图3](https://s2.loli.net/2023/08/11/OD8C9Fa156BugcT.png)

## 第四步：登录

手机上打开这个网页

[https://github.com/KasukuSakura/mirai-login-solver-sakura](https://github.com/KasukuSakura/mirai-login-solver-sakura)

点击 release，点击下载 apk-release.apk 文件，然后安装

返回到 FinalShell，输入以下指令

```terminal
./run-mirai.sh
```

耐心等待，然后输入，其中 123456 是替换为你机器人的 QQ 号，67890 替换为你机器人 QQ 的密码

```terminal
login 12345 67890
```

回车后可以看到这些提示

![图4](https://s2.loli.net/2023/08/11/MymgAkDBQU4NpE9.jpg)

输入这个命令并回车

```terminal
TxCaptchaHelper
```

然后可以看到提示要在手机端输入请求码，这时打开刚才手机上安装的软件，输入请求码，点击下一步，验证完成后，可以在 FinalShell 上看到提示是否要发送验证码

![图5](https://s2.loli.net/2023/08/11/bI5jzOyGvCiUhTV.jpg)

输入指令并回车

```terminal
yes
```

稍后填入手机收到的验证码

这时可以看到就登录成功了

点击蓝色界面，然后按快捷键 CTRL+a+c（先按下 ctrl+a 不放，再按 c），可以看到新建了一个窗口，输入指令

```terminal
./run-bot.sh
```

然后会提示输入管理员 QQ

然后就可以成功与机器人对话了，私聊直接发信息，群聊需要@

## 第五步：反向代理

当然，目前使用仍然需要代理或要求你的服务器在国外，否则就会报超时错误，但是考虑到不一定有海外服务器或方便设置全局代理，我们可以通过设置反向代理来解决
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

## 补充：Linux部署时报错

### GLIBC 2.XX缺乏
通常此情况发送于基于Red Hat的系统，例如CentOS

这是由于glibc依赖版本不足导致的，此时并不建议去升级glibc。，glibc版本升级可能导致操作系统无法使用，所以请务必谨慎操作，先在同版本操作系统系统模拟测试，将glibc新版本所依赖的软件完成升级后再行升级。

这种情况下，建议使用手动部署
教程请看项目仓库，[点击跳转](https://github.com/RockChinQ/QChatGPT#--%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2)