---
nav:
  order: 1
  path: /guide
  title: '文档'
title: 开发者指南
order: 2
---

## 项目管理

```bash | pure
git clone https://github.com/GundamHc/lacus.git
```

<Alert type="info">如果网络连接超时，可修改系统 host 文件，使用 cdn 加速，或者使用代理。</Alert>

- https://zhuanlan.zhihu.com/p/75994966
- https://zhuanlan.zhihu.com/p/148110705

## 依赖管理

推荐使用 [pnpm](https://www.pnpm.cn/) 管理依赖

```bash | pure
pnpm i
```

## 常用命令

```bash | pure
pnpm start  //启动项目
```

```bash | pure
pnpm build  //构建 npm 包
```

```bash | pure
pnpm deploy //打包文档并自动部署到 Github
```

```bash | pure
pnpm release  //发布 npm 新版本
```

## 组件开发

新增组件推荐使用 [plop](https://github.com/plopjs/plop) 自动生成目录文件，组件名称输入真实名称，如 Button 、useRequest。

```bash | pure
pnpm new
```

## 文档开发

本项目文档工具为 [dumi](https://github.com/umijs/dumi)，详情见[官方文档](https://d.umijs.org/zh-CN/guide)。

## 注意事项

- 开发 Hooks 组件时，请全局引入 React，因为打包编译 ts 类型文件时可能会需要用到 @types/react

  ```ts | pure
  import React from 'react';
  ```
