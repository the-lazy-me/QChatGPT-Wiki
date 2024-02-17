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
    text: "代码仓库",
    icon: "github",
    link: "https://github.com/RockChinQ/QChatGPT",
  },
]);
