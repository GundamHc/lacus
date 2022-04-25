/*
 * @Description: Tree 组件操作栏
 * @Author: 智慧能源事业部-阳昊宸
 */

import { isArray } from '../../utils/is';
import { useMemoizedFn } from 'ahooks';
import React, { useEffect, useState } from 'react';
import TreeActionBar, { TreeActionBarProps } from './components/tree-action-bar';
import { getTreeNodeByParentKeys } from './utils';
import { TreeNode } from '.';

interface UseTreeOperableOptions {
  /** 数据源 */
  treeData: TreeNode[];
  /** 是否可操作节点 */
  operable?: boolean;
  /** 使用默认操作栏时的 props */
  actionBarProps?: Omit<TreeActionBarProps, 'value' | 'children'>;
  /** treeData key 到 parentKeys的映射 */
  parentKeysMap: Record<React.Key, React.Key[]>;
  /** 操作栏 */
  actionBarRender?: (title: React.ReactNode) => React.ReactNode;
}

export default function useTreeOperable(options: UseTreeOperableOptions) {
  const { treeData, operable, parentKeysMap, actionBarProps, actionBarRender } = options;

  const [operableTreeData, setOperableTreeData] = useState<TreeNode[]>([]);

  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);

  if (!operable) {
    return {
      operableTreeData: treeData,
      selectedKeys,
      onSelect: (selectedKeys: React.Key[]) => setSelectedKeys(selectedKeys),
    };
  }

  const onSelect = useMemoizedFn((selectedKeys, { node, selected }) => {
    setSelectedKeys(selectedKeys);
    if (selected) {
      const treeDataClone = JSON.parse(JSON.stringify(treeData));
      const currenNode = getTreeNodeByParentKeys(treeDataClone, node.key, parentKeysMap[node.key]);
      currenNode.render =
        actionBarRender ??
        (title => (
          <TreeActionBar value={currenNode.key} {...actionBarProps}>
            {title}
          </TreeActionBar>
        ));
      setOperableTreeData(treeDataClone);
    } else {
      setOperableTreeData(treeData);
    }
  });

  useEffect(() => {
    isArray(treeData) && setOperableTreeData(treeData);
  }, [treeData]);

  return { selectedKeys, operableTreeData, onSelect };
}
