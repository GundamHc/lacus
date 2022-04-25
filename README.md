<p align="center">
    <img width="100" src="https://pic.imgdb.cn/item/6266a572239250f7c5ebfa06.png">
</p>

<h1 align="center">lacus</h1>

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

## 🚀 TODO

- 增加全局样式引入方式
- 增加 UMD 打包产物
