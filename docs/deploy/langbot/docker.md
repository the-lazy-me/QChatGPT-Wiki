# Docker部署(仅推荐在Linux上使用)

:::warning 
要使用 Docker 部署，请**确保**您具有以下能力：  
 - 了解 `Docker` 和 `Docker Compose` 的使用  
 - 了解容器间网络通信配置方式  
 - 了解容器文件挂载机制
 - 动手能力强、资料查找能力强

 **不建议**您在除 Linux 之外的系统上使用 Docker 进行部署。
::: 

:::info
请先确保 Docker 和 Docker Compose 已安装
:::

以下是推荐的`docker-compose.yaml`模板，您可以根据自己的需求进行修改。

```yaml
version: "3"

services:
  langbot:
    image: rockchin/langbot:latest
    volumes:
      - ./data:/app/data
      - ./plugins:/app/plugins
    restart: on-failure
    ports:
      - 5300:5300  # 供 WebUI 使用
      - 2280-2290:2280-2290  # 供消息平台适配器方向连接
    # 根据具体环境配置网络
```

保存到一个目录的`docker-compose.yaml`，运行命令:

```bash
docker compose up
```

无报错即为启动成功，请查看`部署消息平台`部分以配置消息平台框架。

## 注意

- 安装的插件都会保存在`plugins`(映射到本目录`plugins`)，安装插件时可能会自动安装相应的依赖，此时若`重新创建`容器，已安装的插件将被加载，但所需的增量依赖并未安装，会导致引入问题。您可以删除插件目录后重启，再次安装插件，以便程序可以自动安装插件所需依赖。