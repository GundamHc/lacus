/*
 * @Description: Tree 组件搜索栏
 * @Author: 智慧能源事业部-阳昊宸
 */

import { useMemoizedFn } from 'ahooks';
import React, { Key, useMemo, useState, useEffect } from 'react';
import TreeSearchBar from './components/tree-search-bar';
import { difference, unique } from '../../utils/array';
import { highlightTree } from './utils';
import { TreeNode } from '.';

export type CheckedKeys =
  | Key[]
  | {
      checked: Key[];
      halfChecked: Key[];
    };

export interface UseTreeSearchableOptions {
  /** 数据源 */
  treeData: TreeNode[];
  /** 是否开启关键词高亮 */
  searchable?: boolean;
  /** 节点前添加是否 Checkbox 复选框 */
  checkable?: boolean;
  /** 父子节点选中状态是否关联 */
  checkStrictly?: boolean;
  /** 点击选中时是否保留原来的选中状态 */
  checkRetain?: boolean;
  /** treeData key 到 parentKeys的映射 */
  parentKeysMap: Record<Key, Key[]>;
}

export default function useTreeSearchable(options: UseTreeSearchableOptions) {
  const { treeData, searchable, checkable, checkRetain, checkStrictly, parentKeysMap } = options;

  const [keyword, setKeyword] = useState<string>();

  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);

  const [highlightKeys, sethighlightKeys] = useState<Key[]>([]);

  const [checkedKeys, setCheckedKeys] = useState<CheckedKeys>();

  const [highlightTreeData, setHighlightTreeData] = useState<TreeNode[]>([]);

  if (!searchable) {
    return {
      highlightTreeData: treeData,
      keyword,
      highlightKeys,
      expandedKeys,
      checkedKeys,
      onExpand: setExpandedKeys,
      onCheck: setCheckedKeys,
      onSearch: () => null,
      SearchBar: () => null,
    };
  }

  const checkedKeyArray = useMemo(
    () =>
      checkedKeys
        ? checkStrictly
          ? (checkedKeys as { checked: Key[]; halfChecked: Key[] }).checked ?? []
          : (checkedKeys as Key[])
        : [],
    [checkedKeys, checkStrictly],
  );

  const onSearch = useMemoizedFn((value?: string, effect?: boolean) => {
    value = value ?? keyword;
    setKeyword(value);
    const [highlightTreeData, highlightKeys, highlightExpandedKeys] = highlightTree(
      treeData,
      value,
    );
    // 如果是通过副作用刷新，不更新 expandedKeys
    if (!effect) {
      if (value) {
        // 如果关键词不为空，展开高亮节点及父节点
        setExpandedKeys(highlightExpandedKeys);
      } else {
        // 如果关键词为空，展开已选中节点及父节点
        const expandedKeys: Key[] = [];
        checkedKeyArray.forEach(key => {
          expandedKeys.push(key, ...parentKeysMap[key]);
        });
        setExpandedKeys(unique(expandedKeys));
      }
    }
    sethighlightKeys(highlightKeys);
    setHighlightTreeData(highlightTreeData);
  });

  const onCheck = useMemoizedFn((keys: CheckedKeys, info) => {
    if (info?.event || info?.checked || !checkRetain) {
      // 如果存在 event， 说明是由于点击 Checkbox 复选框触发的，该事件已经更新过父节点的选中状态。
      // 如果是点击搜索栏选中，父节点的选中状态会自动更新。
      // 如果父子节点选中状态不关联，则不需要更新父节点的选中状态。
      setCheckedKeys(keys);
    } else {
      // 如果是点击搜索栏取消勾选，则需要取消勾选父节点
      const checkedKeys = Array.isArray(keys) ? keys : keys?.checked ?? [];
      const delectedKeys = difference(checkedKeyArray, checkedKeys);
      const delectedParentKeys = unique(
        ([] as Key[]).concat(...delectedKeys.map(key => parentKeysMap[key])),
      );
      const pureKeys = difference(checkedKeys, delectedParentKeys);
      setCheckedKeys(pureKeys);
    }
  });

  const SearchBar = useMemoizedFn(() => (
    <TreeSearchBar
      onCheck={onCheck}
      onSearch={onSearch}
      checkable={checkable}
      checkRetain={checkRetain}
      checkedKeys={checkedKeyArray}
      highlightKeys={highlightKeys}
    />
  ));

  useEffect(() => {
    onSearch(undefined, true);
  }, [treeData]);

  return {
    highlightTreeData,
    keyword,
    expandedKeys,
    highlightKeys,
    checkedKeys,
    onSearch: onSearch,
    onExpand: setExpandedKeys,
    onCheck,
    SearchBar,
  };
}
