# 配置go-cqhttp用于登录QQ

> 若您是从旧版本升级到此版本以使用go-cqhttp的用户，请您按照`config-template.py`的内容修改`config.py`，添加`msg_source_adapter`配置项并将其设为`nakuru`，同时添加`nakuru_config`字段按照说明配置。

## 步骤

### 下载go-cqhttp

从[go-cqhttp的Release](https://github.com/Mrs4s/go-cqhttp/releases/latest)下载最新的go-cqhttp可执行文件（建议直接下载可执行文件压缩包，而不是安装器）

![image-20231220210632911](https://cos.thelazy.cn/pictures/qchatgpt%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2202312202106952.png)

## 运行并配置go-cqhttp

解压并运行，首次运行会询问需要开放的网络协议，**请填入`02`并回车，必须输入`02`❗❗❗❗❗❗❗**

```
C:\Softwares\go-cqhttp.old> .\go-cqhttp.exe
未找到配置文件，正在为您生成配置文件中！
请选择你需要的通信方式:
> 0: HTTP通信
> 1: 云函数服务
> 2: 正向 Websocket 通信
> 3: 反向 Websocket 通信
请输入你需要的编号(0-9)，可输入多个，同一编号也可输入多个(如: 233)
您的选择是:02
```

提示已生成`config.yml`文件，关闭go-cqhttp。

打开go-cqhttp同目录的`config.yml`

1. 编辑账号登录信息

只需要修改下方`uin`和`password`为你要登录的机器人账号的QQ号和密码即可。  

```yaml
account: # 账号相关
    uin: 1233456 # QQ账号
    password: '' # 密码为空时使用扫码登录
    encrypt: false  # 是否开启密码加密
    status: 0      # 在线状态 请参考 https://docs.go-cqhttp.org/guide/config.html#在线状态
    relogin: # 重连设置
        delay: 3   # 首次重连延迟, 单位秒
        interval: 3   # 重连间隔
        max-times: 0  # 最大重连次数, 0为无限制
```

2. 修改websocket端口

在`config.yml`下方找到以下内容

```yaml
  - ws:
    # 正向WS服务器监听地址
    address: 0.0.0.0:8080
    middlewares:
        <<: *default # 引用默认中间件
```

**将`0.0.0.0:8080`改为`0.0.0.0:6700`**，保存并关闭`config.yml`。

3. 配置签名服务器

按照如下填写，

```yam
 sign-servers: 
    - url: 'https://qsign.ikunshare.link'  # 主签名服务器地址， 必填
      key: '114514'  # 签名服务器所需要的apikey, 如果签名服务器的版本在1.1.0及以下则此项无效
      authorization: '-'   # authorization 内容, 依服务端设置，如 'Bearer xxxx'
     - url: '-'  # 备用
       key: '114514'  
       authorization: '-' 
```

4. 若您的服务器位于公网，强烈建议您填写`access-token` (可选)

```yaml
# 默认中间件锚点
default-middlewares: &default
    # 访问密钥, 强烈推荐在公网的服务器设置
    access-token: ''
```

5. 配置完成，重新启动go-cqhttp

## 登录

双击登录脚本，一段时间后，可以看到提示

![image-20231220211135776](https://cos.thelazy.cn/pictures/qchatgpt%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2202312202111807.png)

把`Captcha link: `后边的链接复制下来，用Chrome或者Edge浏览器打开，按F12打开开发者工具

点开 `Network`

![img5](https://docs.mirai.mamoe.net/assets/img5.9c53babb.png)

在浏览器中完成验证, 在 `Network` 中找到名为 `cap_union_new_verify` 的请求, 在最下面

![img6](https://docs.mirai.mamoe.net/assets/img6.2c4cf2d2.png)

ticket 后那一坨就是要输入回 mirai 的内容，但不包括首尾的双引号

**注意**

- 复制的时候记得删掉引号(`"`, 前后都有一个), 那个不是ticket内容
- 速度要快
- 注意不要漏字符(没复制完, 后面还有很长)

把复制下来的东西，粘贴到运行go-cq的终端中

![image-20231220211712572](https://cos.thelazy.cn/pictures/qchatgpt%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2202312202117600.png)

> 若启动后登录不成功，请尝试根据[此文档](https://docs.go-cqhttp.org/guide/config.html#%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF)修改`device.json`的协议编号。