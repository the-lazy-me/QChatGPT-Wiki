import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "QChatGPT",
  description: "QChatGPT项目的Wiki页",

  theme,
});
