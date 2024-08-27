# aiocqhttp适配器系列教程

## OneBot 11 协议

OneBot 是用于接入多种消息平台的标准化协议，详细介绍：[https://onebot.dev/](https://onebot.dev/)

以下消息框架可以通过 OneBot 11 协议接入，需选择使用`aiocqhttp`作为适配器，修改`data/platform.json`配置文件，在`platform-adapters`字段中添加以下内容（如果已经有aiocqhttp的适配器，可以直接将其enable改为true）：

```json
{
    "adapter": "aiocqhttp",
    "enable": true,
    "host": "0.0.0.0",
    "port": 8080,
    "access-token": ""
}
```

![data/platform.json](https://cos.thelazy.cn/pictures/202405292250017.jpeg)

当前可用的OneBot 11标准消息平台，你可以选择下方任意

- [Lagrange.OneBot的教程](./lagrange)
- [NapCat的教程](./napcat)
- [LiteLoaderQQNT的教程](./llonebot)
- [shamrock的教程](./shamrock)