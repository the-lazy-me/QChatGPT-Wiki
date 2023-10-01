import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/posts/",
  // {
  //   text: "插件相关",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "插件使用",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: [
  //         { text: "简介", icon: "", link: "" },
  //         { text: "安装", icon: "ellipsis", link: "" },
  //         { text: "管理", icon: "ellipsis", link: "" },
  //         { text: "内容函数", icon: "ellipsis", link: "" },
  //     ],
  //     },
  //     {
  //       text: "插件开发",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
  {
    text: "插件相关",
    icon: "operate",
    children: [
      {
        text: "插件使用",
        icon: "shell",
        link: "/doc/PluginsUse",
      },
      {
        text: "插件开发",
        icon: "config",
        link: "/doc/PluginsDevelop",
      },
    ],
  },
  {
    text: "项目仓库",
    icon: "github",
    link: "https://github.com/RockChinQ/QChatGPT",
  },
]);
