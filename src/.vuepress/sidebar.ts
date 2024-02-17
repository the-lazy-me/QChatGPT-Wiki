import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "功能介绍",
      icon: "operate",
      prefix: "posts/feature",
      link: "posts/feature",
      children: "structure",
    },
    {
      text: "部署教程",
      icon: "blog",
      prefix: "posts/deploy/",
      link: "posts/deploy/",
      children: [
        {
          text: "部署QChatGPT",
          icon: "flow",
          prefix:"qchatgpt/",
          link: "qchatgpt/",
          children: [
            {
              text: "手动部署",
              icon: "support",
              link: "manual",
            },
            {
              text: "Docker部署",
              icon: "stack",
              link: "docker",
            },
          ],
        },
        {
          text: "部署消息平台",
          icon: "merge",
          prefix:"platforms/",
          link: "platforms/",
          children: [
            {
              text: "Mirai",
              icon: "support",
              link: "mirai",
            },
            {
              text: "go-cqhttp",
              icon: "state",
              link: "gocq",
            },
            {
              text: "OpenShamrock",
              icon: "mobile",
              link: "shamrock",
            },
            {
              text: "QQ 官方 API",
              icon: "network",
              link: "official",
            }
          ],
        },
      ],
    },
    {
      text: "命令用法",
      icon: "command",
      link: "posts/command",
    },
    {
      text: "配置方法",
      icon: "context",
      link: "posts/config-intro",
    },
    {
      text: "常见问题",
      icon: "info",
      link: "posts/error/",
      prefix: "posts/error/",
      children: [
        {
          text: "Mirai常见报错",
          icon: "notice",
          link: "mirai",
        },
        {
          text: "go-cqhttp常见报错",
          icon: "list",
          link: "gocq",
        },
        {
          text: "问题解答",
          icon: "blog",
          link: "qchatgpt",
        },
      ],
    },
    {
      text: "插件功能",
      icon: "plugin",
      prefix: "posts/plugin/",
      link: "posts/plugin/intro",
      // collapsible: true,
      children: [
        {
          text: "插件介绍",
          icon: "info",
          link: "intro",
        },
        {
          text: "插件列表",
          icon: "list",
          link: "list",
        },
        {
          text: "插件开发",
          icon: "code",
          link: "develop",
        },
      ],
    },
    {
      text: "技术信息",
      icon: "blog",
      link: "posts/develop/technology-info",
    },
  ],
});
