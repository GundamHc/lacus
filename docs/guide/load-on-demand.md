---
nav:
  order: 1
  path: /guide
  title: '文档'
title: 按需加载
order: 2
---

## js

lacus 默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 import { DotTitle } from 'lacus' 就会有按需加载的效果。

## css

lacus 是通过 less 覆盖的方式修改 antd 主题的，所以对于 antd 组件样式暂不支持按需引入。

#### 全量引入

```jsx | pure
import 'lacus/es/styles/index.css';
```

#### 按需加载

- 全量引入 antd 样式

```jsx | pure
// main.ts
import 'lacus/es/styles/base.css';
```

- 使用 [babel-plugin-import](https://github.com/umijs/babel-plugin-import) 按需加载 lacus 样式

```jsx | pure
// .babelrc
import { StyleImportBabel } from 'lacus/lib/utils/plugin';

{
  "plugins": [StyleImportBabel(true)],
}
```

- 使用 [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) 按需加载 lacus 样式

```jsx | pure
// vite.config
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import { StyleImportVite } from 'lacus/lib/utils/plugin';

export default {
  plugins: [
    createStyleImportPlugin({
      resolves: [StyleImportVite(true)],
    }),
  ],
};
```

## less

- 如果需要引入 less 文件方便覆盖，请将 `index.css`，`base.css` 替换为 `index.less`，`base.less`。需要开启 javascriptEnabled。
- 如果使用了 [postcss-import](https://github.com/postcss/postcss-import)（vite 默认启用）, 请将 `index.less`，`base.less` 替换为 `index-pure.less`，`base-pure.less`。
- 如果使用了按需加载，请关闭 css。`StyleImportBabel()`，`StyleImportVite()`
