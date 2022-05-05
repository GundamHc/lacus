## Gap

```tsx
/**
 * title: 基础使用
 * iframe: 80
 */

import React from 'react';
import { Gap } from 'lacus';
import { Button } from 'antd';

export default () => (
  <Gap justify="center">
    <Button>取消</Button>
    <Button type="primary">确定</Button>
  </Gap>
);
```

## Api

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 对齐方式 | `start` \| `end` \|`center` \|`baseline` | - |
| justify | 水平对齐方式 | JustifyContent | - |
| direction | 间距方向 | `vertical` \| `horizontal` | `horizontal` |
| size | 间距大小 | [Size](#Size) \| [Size\[\]](#Size) | `small` |
| bottom | 下边距 | string \| number | - |
| split | 设置拆分 | ReactNode | - |
| wrap | 是否自动换行，仅在 `horizontal` 时有效 | boolean | false |
