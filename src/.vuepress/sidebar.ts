import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "部署教程",
      icon: "blog",
      prefix: "posts/deploymentTutorial/",
      link: "posts/deploymentTutorial/",
      children: "structure",
    },
    {
      text: "功能介绍",
      icon: "operate",
      prefix: "posts/functionIntroduction",
      link: "posts/functionIntroduction",
      children: "structure",
    },
    {
      text: "插件使用",
      icon: "plugin",
      prefix: "posts/PluginsUse/",
      link: "posts/PluginsUse/",
      children: "structure",
    },
    {
      text: "常见报错",
      icon: "info",
      link: "posts/commonErrors/",
      prefix: "posts/commonErrors/",
      children: "structure",
    },
    {
      text: "问题解答",
      icon: "blog",
      link: "posts/Q&A",
      prefix: "posts/Q&A",
      children: "structure",
    },
    {
      text: "插件开发",
      icon: "code",
      link: "posts/PluginsDevelop",
      prefix: "posts/PluginsDevelop",   
      children: "structure",
    },
  ],
});
