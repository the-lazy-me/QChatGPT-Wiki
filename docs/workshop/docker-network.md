# 消息平台和 LangBot 连接

如果消息平台（NapCat/Lagrange）和 LangBot 均使用 Docker 启动，那么你需要配置 Docker 的网络连接。

新建一个网络：

```bash
docker network create langbot-network
```

在 LangBot 目录的 `docker-compose.yaml` 文件中添加网络配置(添加到 `services.langbot` 字段下，并在 `networks` 字段下添加 `langbot-network` 网络配置)：

```yaml
services:
  langbot:
    ...
    networks:
      - langbot-network
    ...

networks:
  langbot-network:
    driver: bridge
```

然后在消息平台的 `docker-compose.yaml` 文件中添加同样的网络配置（如果是直接 docker run 命令启动的，请在启动命令中添加 `--network langbot-network`）。接着在消息平台配置文件中，把 WS 反向连接地址中的 IP 地址修改为 `langbot`（例如：`ws://langbot:2280/ws`）。

重启两个容器。