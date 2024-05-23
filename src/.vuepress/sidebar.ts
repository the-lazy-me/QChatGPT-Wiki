import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "功能介绍",
      icon: "operate",
      link: "posts/feature",
    },
    {
      text: "部署教程",
      icon: "blog",
      collapsible: true,
      prefix: "posts/deploy/",
      link: "posts/deploy/",
      children: [
        {
          text: "部署QChatGPT",
          icon: "flow",
          prefix: "qchatgpt/",
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
          prefix: "platforms/",
          link: "platforms/",
          children: [
            {
              text: "yiri-mirai",
              icon: "support",
              link: "mirai",
            },
            {
              text: "nakuru",
              icon: "state",
              link: "gocq",
            },
            {
              text: "aiocqhttp",
              icon: "hot",
              collapsible: true,
              prefix: "aiocqhttp/",
              link: "aiocqhttp/",
              children: [
                {
                  text: "Shamrock",
                  icon: "mobile",
                  link: "shamrock",
                },
                {
                  text: "Lagrange",
                  icon: "support",
                  link: "lagrange",
                },
                {
                  text: "NapCat",
                  icon: "software",
                  link: "napcat",
                },
                {
                  text: "LLOneBot",
                  icon: "more",
                  link: "llonebot",
                },
              ],
            },
            {
              text: "QQ 官方 API",
              icon: "network",
              link: "official",
            },
          ],
        },
        {
          text: "填写配置信息",
          icon: "class",
          link: "config",
        },
      ],
    },
    {
      text: "命令用法",
      icon: "command",
      link: "posts/command",
    },
    {
      text: "配置详解",
      icon: "config",
      collapsible: true,
      prefix: "posts/config/",
      link: "posts/config/",
      children: [
        {
          text: "platform.json",
          icon: "config",
          link: "platform",
        },
        {
          text: "pipeline.json",
          icon: "config",
          link: "pipeline",
        },
        {
          text: "provider.json",
          icon: "config",
          link: "provider",
        },
        {
          text: "command.json",
          icon: "config",
          link: "command",
        },
        {
          text: "system.json",
          icon: "config",
          link: "system",
        },
      ],
    },
    {
      text: "元数据配置",
      icon: "enum",
      collapsible: true,
      prefix: "posts/metadata/",
      link: "posts/metadata/",
      children: [
        {
          text: "敏感词 sensitive-words.json",
          icon: "enum",
          link: "sensitive-words",
        },
        {
          text: "模型列表 llm-models.json",
          icon: "enum",
          link: "llm-models",
        },
        {
          text: "qq-botpy ID 映射 adapter-qq-botpy.json",
          icon: "enum",
          link: "adapter-qq-botpy",
        },
      ],
    },
    {
      text: "常见问题",
      icon: "info",
      collapsible: true,
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
      text: "规模使用和商用",
      icon: "app",
      collapsible: true,
      link: "posts/tob/",
      prefix: "posts/tob/",
      children: [
        {
          text: "消息平台稳定性",
          icon: "comment",
          link: "platform",
        },
        {
          text: "AI 内容合规性",
          icon: "warn",
          link: "provider",
        },
        {
          text: "咨询方式",
          icon: "profile",
          link: "contact",
        },
      ],
    },
    {
      text: "插件功能",
      icon: "plugin",
      collapsible: true,
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
        {
          text: "组件扩展",
          icon: "code",
          link: "extension",
        },
        {
          text: "API 参考",
          icon: "api",
          link: "apiref",
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
