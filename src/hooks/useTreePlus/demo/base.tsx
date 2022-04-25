import React, { Fragment } from 'react';
import { Card, Tree } from 'antd';
import { useTreePlus } from 'lacus';

const mockTreeData = [
  {
    key: '0',
    title: '1级选项1',
    children: [
      {
        key: '1-0',
        title: '2级选项1-1',
        parentKeys: ['0'],
      },
      {
        key: '1-1',
        title: '2级选项1-2',
        parentKeys: ['0'],
      },
    ],
    parentKeys: [],
  },
  {
    key: '1',
    title: '1级选项2',
    children: [
      {
        key: '2-0',
        title: '2级选项2-1',
        parentKeys: ['1'],
      },
      {
        key: '2-1',
        title: '2级选项2-2',
        parentKeys: ['1'],
      },
    ],
    parentKeys: [],
  },
];

export default function () {
  const { treeData, expandedKeys, checkedKeys, SearchBar, onExpand, onCheck, onSelect } =
    useTreePlus({
      dataSource: mockTreeData,
      searchable: true,
      operable: true,
      checkable: true,
      checkRetain: true,
      actionBarProps: {
        onAddChild: () => null,
        onDelete: () => null,
        onAddBrother: () => null,
        onEdit: () => null,
        onMove: () => null,
      },
    });

  return (
    <Fragment>
      <Card title="搜索树" style={{ width: 300 }} size="small">
        <SearchBar />
        <Tree
          checkable
          onCheck={onCheck}
          onSelect={onSelect}
          onExpand={onExpand}
          treeData={treeData}
          checkedKeys={checkedKeys}
          expandedKeys={expandedKeys}
          showLine={{ showLeafIcon: false }}
        />
      </Card>
    </Fragment>
  );
}
