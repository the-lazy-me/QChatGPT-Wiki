import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "使用方法",
      icon: "blog",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
    {
      text: "插件相关",
      icon: "operate",
      prefix: "doc/",
      link: "doc/",
      children: "structure",
    },
  ],
});
