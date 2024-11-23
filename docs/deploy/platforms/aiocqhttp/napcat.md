# 部署消息平台 NapCat

## NapCat安装教程

按照 [NapCat 官方文档安装](https://napcat.napneko.icu/guide/start-install)

运行后扫码登录

## NapCat配置教程

登录后，在控制台或Bash上可以查看日志 , 找到 `[NapCat] [WebUi] WebUi Publish Panel Url: http://x.x.x.x:6099/webui?token=xxxxx ` 

复制Url到浏览器或者 Windows11 按照Ctrl点击Url即可 扫码登录后即可进入网络配置一页

点击添加网络配置 WebSocket客户端 点击启用 然后在Url一栏填入 `ws://127.0.0.1:8080/ws`  并保存即可

::: info
参考 NapCat [官方文档](https://napcat.napneko.icu/)  

必须使用 反向WS 连接 LangBot，注意根据实际情况修改 IP 地址和端口，后缀必须为`/ws`
:::

![image-20240514231932514](/assets/image/napcat_cfg_2.png)

然后重新运行登录即可，看到提示：

![image-20240514232647329](/assets/image/napcat_cfg_3.png)

接下来请阅读[填写配置信息](/deploy/quick-config/config)。
