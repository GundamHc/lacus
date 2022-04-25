import React from 'react';
import { isString } from '../../utils/is';
import { unique } from '../../utils/array';
import { TreeNode } from '.';

/**
 * @description 给树形数据的每个节点增加所有父元素的 key 值
 * @param treeData 树形数据
 */
export function addParentKeysForTreeData(treeData?: TreeNode[]): TreeNode[] {
  function addParent(treeData?: TreeNode[], parentKeys: React.Key[] = []) {
    treeData?.forEach(item => {
      item.parentKeys = parentKeys;
      if (item.children) {
        addParent(item.children, [...parentKeys, item.key]);
      }
    });
  }
  addParent(treeData);
  return treeData || [];
}

/**
 * @description 展开树形数据
 */
export function flattenTree<T extends TreeNode>(array: T[], key = 'children'): T[] {
  const result: T[] = [];
  array?.forEach((item: any) => {
    result.push(item);
    if (item[key]?.length) {
      result.push(...flattenTree<T>(item[key], key));
    }
  });
  return result;
}

/**
 * @description 生成树形数据 key 到 ParentKeys 的映射
 * @param treeData 带有 parentKeys 的树形数据
 */
export function mapParentKeysToTreeNodeKey(treeData: TreeNode[]): Record<string, React.Key[]> {
  return Object.assign({}, ...flattenTree(treeData).map(item => ({ [item.key]: item.parentKeys })));
}

/**
 * @description 通过父节点的key和节点的key获取节点
 * @param treeData 树形数据
 * @param key 节点的key
 * @param parentKeys 父节点的key
 */
export function getTreeNodeByParentKeys(
  treeData: TreeNode[],
  key: React.Key,
  parentKeys: React.Key[],
): TreeNode {
  let parent = treeData;
  parentKeys.forEach(parentKey => {
    parent = parent.find(item => item.key === parentKey)?.children ?? [];
  });
  return parent.find(item => item.key === key) ?? ({} as TreeNode);
}

/**
 * @description 高亮关键字
 * @param text 需要搜索的文本
 * @param keyword 搜索的关键字
 * @param color 高亮颜色
 */
export function highlighter(
  title: React.ReactNode,
  keyword?: string,
  onSuccess?: () => void,
): React.ReactNode {
  if (isString(title) && keyword) {
    const index = title.indexOf(keyword);
    if (index > -1) {
      onSuccess?.();
      const beforeStr = title.substring(0, index);
      const afterStr = title.slice(index + keyword.length);
      return (
        <span>
          {beforeStr}
          <span style={{ color: '#ff463a' }}>{keyword}</span>
          {afterStr}
        </span>
      );
    }
  }
  return title;
}

/**
 * @description 搜索树形数据内的关键词并高亮显示
 * @param treeData 树形数据
 * @param keyword 关键词
 */
export function highlightTree(
  treeData: TreeNode[],
  keyword?: string,
): [TreeNode[], React.Key[], React.Key[]] {
  const expandedKeys: React.Key[] = [];
  const highlightKeys: React.Key[] = [];
  const highlightTreeData = treeData.map(({ title, render, children, ...rest }) => {
    title = highlighter(title, keyword, () => {
      expandedKeys.push(...(rest.parentKeys || []));
      highlightKeys.push(rest.key);
    });
    title = render?.(title) ?? title;
    if (children) {
      const [highlightChildren, highlightChildrenKeys, expandedChildrenKeys] = highlightTree(
        children,
        keyword,
      );
      expandedKeys.push(...expandedChildrenKeys);
      highlightKeys.push(...highlightChildrenKeys);
      return {
        ...rest,
        title,
        children: highlightChildren,
      };
    }
    return { title, render, ...rest };
  });
  return [highlightTreeData, highlightKeys, unique(expandedKeys)];
}
