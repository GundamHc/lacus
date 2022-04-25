/*
 * @Description: Tree 控件增强
 * @Author: 智慧能源事业部-阳昊宸
 */

import { useMemo } from 'react';
import useTreeHighlight from './useTreeSearchable ';
import useTreeOperable from './useTreeOperable';
import { TreeActionBarProps } from '../../hooks/useTreePlus/components/tree-action-bar';
import { addParentKeysForTreeData, mapParentKeysToTreeNodeKey } from './utils';

export interface TreeNode {
  key: React.Key;
  title: React.ReactNode;
  children?: TreeNode[];
  parentKeys?: React.Key[];
  render?: (title: React.ReactNode) => React.ReactNode;
}

export interface TreePlusOptions {
  /** 树形数据 */
  dataSource: TreeNode[];
  /** 是否可搜索 */
  searchable?: boolean;
  /** 是否可操作 */
  operable?: boolean;
  /** 节点前是否添加 Checkbox 复选框 */
  checkable?: boolean;
  /** 父子节点选中状态是否关联 */
  checkStrictly?: boolean;
  /** 选中搜索结果时是否保留原来的选中状态 */
  checkRetain?: boolean;
  /** 自定义操作栏 */
  actionBarRender?: (title: React.ReactNode) => React.ReactNode;
  /** 默认操作栏 Props */
  actionBarProps?: Omit<TreeActionBarProps, 'value' | 'children'>;
}

export default function useTreePlus(options: TreePlusOptions) {
  const {
    dataSource,
    searchable,
    operable,
    checkable,
    checkRetain,
    checkStrictly,
    actionBarProps,
    actionBarRender,
  } = options;

  const treeDataByParent = useMemo(() => addParentKeysForTreeData(dataSource), [dataSource]);

  const parentKeysMap = useMemo(
    () => mapParentKeysToTreeNodeKey(treeDataByParent),
    [treeDataByParent],
  );

  const { operableTreeData, selectedKeys, onSelect } = useTreeOperable({
    treeData: dataSource ?? [],
    operable,
    parentKeysMap,
    actionBarProps,
    actionBarRender,
  });

  const { highlightTreeData, expandedKeys, checkedKeys, onExpand, onCheck, onSearch, SearchBar } =
    useTreeHighlight({
      treeData: operableTreeData,
      searchable,
      parentKeysMap,
      checkable,
      checkRetain,
      checkStrictly,
    });

  return {
    treeData: highlightTreeData,
    expandedKeys,
    selectedKeys,
    checkedKeys,
    onExpand,
    onSelect,
    onCheck,
    onSearch,
    SearchBar,
  };
}
