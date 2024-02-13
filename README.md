# [QChatGPT](https://github.com/RockChinQ/QChatGPT) 官方文档

> 此分支是 QChatGPT 3.0 的文档

> [QChatGPT 代码仓库](https://github.com/RockChinQ/QChatGPT/tree/feat/asyncio)
> [本文档地址](https://github.com/the-lazy-me/QChatGPT-Wiki/tree/doc/v3)

## 参与编写

文档基于 VuePress 生成，本地编写需要安装 Node 和 VuePress

### NodeJS

自行安装

### VuePress 

Clone 本仓库，在目录下执行以下命令安装依赖：

```bash
pnpm install
```

完成后即可修改文档，修改完后使用以下命令本地启动：

```bash
pnpm docs:dev
```

### 一些规范化标准

- 文件夹和文件的命名：**一律使用全小写，单词直接`-`隔开，如**`config-intro.md`
- 子文件（夹）的命名，**不加前缀**（即文件夹的名称），如：`plugin`文件夹下的，插件列表（文件）称之为`list.md`，文件夹`some-plugin-deploy`
- 由于这是有关于文档的规范化命名，所以任何文件的名称都可以以教程的角度来理解，如`plugin`是有关插件的教程

