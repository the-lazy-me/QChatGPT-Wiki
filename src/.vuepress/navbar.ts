import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "功能介绍",
    icon: "operate",
    link: "/posts/feature",
  },
  {
    text: "部署教程",
    icon: "blog",
    link: "/posts/deploy/",
  },
  // "/posts/deploy/",
  // "/posts/Features",
  {
    text: "配置方法",
    icon: "context",
    link: "/posts/config-intro",
  },
  {
    text: "疑难解答",
    icon: "discover",
    children: [
      {
        text: "常见问题",
        icon: "info",
        link: "/posts/error/",
      },
      {
        text: "问题解答",
        icon: "blog",
        link: "/posts/faq",
      },
    ],
  },
  {
    text: "项目仓库",
    icon: "github",
    link: "https://github.com/RockChinQ/QChatGPT",
  },
]);
