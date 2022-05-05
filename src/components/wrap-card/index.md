## WrapCard

```tsx
/**
 * title: 基础使用
 * iframe: 400
 */

import React from 'react';
import { Button, Table } from 'antd';
import { Gap, WrapCard } from 'lacus';

export default () => (
  <WrapCard
    title="卡片"
    fullscreen
    footer={
      <Gap justify="center">
        <Button>取消</Button>
        <Button type="primary">确定</Button>
      </Gap>
    }
  >
    <Table />
  </WrapCard>
);
```

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| footer | 卡片底部区域 | ReactNode | - |
| fullscreen | 是否全屏 | boolean | - |
| actions | 卡片操作组，位置在卡片底部 | Array&lt;ReactNode> | - |
| activeTabKey | 当前激活页签的 key | string | - |
| bodyStyle | 内容区域自定义样式 | CSSProperties | - |
| bordered | 是否有边框 | boolean | true |
| cover | 卡片封面 | ReactNode | - |
| defaultActiveTabKey | 初始化选中页签的 key，如果没有设置 activeTabKey | string | `第一个页签` |
| extra | 卡片右上角的操作区域 | ReactNode | - |
| headStyle | 自定义标题区域样式 | CSSProperties | - |
| hoverable | 鼠标移过时可浮起 | boolean | false |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| size | card 的尺寸 | `default` \| `small` | `default` |
| tabBarExtraContent | tab bar 上额外的元素 | ReactNode | - |
| tabList | 页签标题列表 | Array&lt;{key: string, tab: ReactNode}> | - |
| tabProps | 页签组件的 props | - | - |
| title | 卡片标题 | ReactNode | - |
| type | 卡片类型，可设置为 `inner` 或 不设置 | string | - |
| onTabChange | 页签切换的回调 | (key) => void | - |
