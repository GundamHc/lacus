---
nav:
  order: 1
  path: /guide
  title: '文档'
title: '快速上手'
order: 1
---

## 📦 安装

```bash | pure
npm install lacus --save
```

```bash
yarn add lacus
```

```bash
pnpm add lacus
```

## 🔨 示例

```tsx | pure
import { DotTitle } from 'lacus';

const App = () => <DotTitle>标题</DotTitle>;
```

#### 全局引入 antd 样式：

```jsx | pure
import 'lacus/lib/styles/antd.less';
```

#### 按需引入其他组件样式:

```ts | pure
// vite.cofig
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { StyleImportVite } from 'lacus/lib/utils/plugin';
import { createStyleImportPlugin } from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [StyleImportVite()],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
```

```ts | pure
// .babelrc
import { StyleImportBabel } from 'lacus/lib/utils/plugin';

{
  "plugins": [StyleImportBabel()],
}
```
