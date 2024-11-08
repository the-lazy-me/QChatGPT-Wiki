import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QChatGPT 文档",
  description:
    "😎高稳定性、🧩支持插件、🦄多模态的 LLM QQ / QQ频道 / OneBot 机器人 / Agent 平台",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/langbot-logo-0.5x.png",

    nav: [
      { text: "首页", link: "/" },
      { text: "概述", link: "/insight/guide" },
      { text: "部署", link: "/deploy/qchatgpt/manual" },
      { text: "开发", link: "/develop/plugin-intro" },
    ],

    sidebar: [
      {
        text: "概述",
        items: [
          { text: "新手指引（必看）", link: "/insight/guide" },
          { text: "项目介绍", link: "/insight/intro" },
        ],
      },
      {
        text: "部署",
        items: [
          {
            text: "部署 QChatGPT",
            collapsed: true,
            items: [
              { text: "手动部署", link: "/deploy/qchatgpt/manual" },
              { text: "Docker部署", link: "/deploy/qchatgpt/docker" },
              { text: "社区资源", link: "/deploy/qchatgpt/community" }
            ],
          },
          {
            text: "部署消息平台",
            collapsed: true,
            // link: "/deploy/platforms/",
            items: [
              {
                text: "aiocqhttp(推荐)",
                collapsed: true,
                // link: "/deploy/platforms/aiocqhttp/",
                items: [
                  {
                    text: "Lagrange",
                    link: "/deploy/platforms/aiocqhttp/lagrange",
                  },
                  {
                    text: "NapCat",
                    link: "/deploy/platforms/aiocqhttp/napcat",
                  },
                  {
                    text: "llonebot",
                    link: "/deploy/platforms/aiocqhttp/llonebot",
                  },
                  {
                    text: "shamrock",
                    link: "/deploy/platforms/aiocqhttp/shamrock",
                  },
                ],
              },
              {
                text: "mirai",
                link: "/deploy/platforms/mirai",
              },
              {
                text: "go-cqhttp",
                link: "/deploy/platforms/gocq",
              },
              {
                text: "QQ官方",
                link: "/deploy/platforms/official",
              },
            ],
          },
          { text: "填写配置信息", link: "/deploy/quick-config/config" },
        ],
      },
      {
        text: "使用",
        items: [
          { text: "命令用法", link: "/usage/command" },
          { text: "插件列表", link: "/usage/plugin-list" },
          { text: "常见问题", link: "/usage/faq" },
        ],
      },
      {
        text: "配置",
        items: [
          {
            text: "功能配置",
            collapsed: true,
            items: [
              { text: "platform.json", link: "/config/function/platform" },
              { text: "pipeline.json", link: "/config/function/pipeline" },
              { text: "provider.json", link: "/config/function/provider" },
              { text: "command.json", link: "/config/function/command" },
              { text: "system.json", link: "/config/function/system" },
            ],
          },
          {
            text: "元数据配置",
            collapsed: true,
            items: [
              {
                text: "敏感词sensitive-words.json",
                link: "/config/metadata/sensitive-words",
              },
              {
                text: "模型列表llm-models.json",
                link: "/config/metadata/llm-models",
              },
              {
                text: "qq-botpy ID 映射 adapter-qq-botpy.json",
                link: "/config/metadata/adapter-qq-botpy",
              },
            ],
          },
        ],
      },
      {
        text: "插件",
        // collapsed: true,
        items: [
          { text: "插件介绍", link: "/plugin/plugin-intro" },
          { text: "插件开发", link: "/plugin/plugin-dev" },
          { text: "组件拓展", link: "/plugin/extension" },
          { text: "API参考", link: "/plugin/api-ref" },
          { text: "技术信息", link: "/plugin/tech-info" },
        ],
      },
      // {
      //   text: "规模化和商用",
      //   // collapsed: true,
      //   // link: "/tob/",
      //   items: [
      //     { text: "消息平台误导性", link: "/tob/platform" },
      //     { text: "AI内容合规性", link: "/tob/provider" },
      //     { text: "咨询方式", link: "/tob/contact" },
      //   ],
      // },

      { text: "实践", items: [
          { text: "如何在 QChatGPT 上接入 Dify？", link: "/workshop/dify-integration" },
          { text: "如何接入 OneAPI、LinkAI 等第三方 OpenAI 格式接口？", link: "/workshop/one-api" },
        ]
      },
    ],

    // 编辑链接
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    },

    // 本地搜索
    search: {
      provider: 'local'
    },

    // 导航栏的社交图标
    socialLinks: [
      { icon: "github", link: "https://github.com/the-lazy-me/QChatGPT-Wiki" },
    ],
  },
  // 最后更新时间
  lastUpdated: true,
});
