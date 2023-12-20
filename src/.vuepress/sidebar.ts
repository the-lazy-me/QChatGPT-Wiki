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
          text: "手动部署(推荐，可以在所有平台上使用)",
          icon: "support",
          link: "manual",
        },
        {
          text: "安装器部署(Win)(不推荐，长时间未维护)",
          icon: "list",
          link: "auto-app-win",
        },
        {
          text: "Docker部署(仅推荐在Linux上使用)",
          icon: "list",
          link: "auto-docker",
        },
        {
          text: "安装器部署(Linux)(不推荐，已经长时间未维护)",
          icon: "list",
          link: "auto-app-linux",
        },
      ],
    },
    {
      text: "配置方法",
      icon: "context",
      link: "posts/config-intro"
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
