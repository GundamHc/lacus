/*
 * @Description: 树形控件搜索栏
 * @Author: 智慧能源事业部-阳昊宸
 */

import { Input } from 'antd';
import { useMemoizedFn } from 'ahooks';
import React, { FC, Key, memo, useMemo, useState } from 'react';
import { difference, unique } from '../../../../utils/array';

export interface TreeSearchBarProps {
  /** 节点前添加是否 Checkbox 复选框 */
  checkable?: boolean;
  /** 点击选中时是否保留原来的选中状态 */
  checkRetain?: boolean;
  /** 搜索结果 key */
  highlightKeys: Key[];
  /** 已勾选 key */
  checkedKeys: Key[];
  /** 选中和取消选中时调用 */
  onCheck?: (checkedKeys: Key[], info: { checked: boolean }) => void;
  /** 搜索和清空时调用 */
  onSearch: (keyword: string) => void;
}

const TreeSearchBar: FC<TreeSearchBarProps> = props => {
  const { checkable, highlightKeys, checkedKeys, checkRetain, onCheck, onSearch } = props;

  const [showResult, setShowResult] = useState(false);

  /** 搜索结果是否已经全部勾选 */
  const isHighlightChecked = useMemo(() => {
    return !difference(highlightKeys, checkedKeys).length;
  }, [highlightKeys, checkedKeys]);

  const handleSearch = useMemoizedFn(val => {
    onSearch(val);
    setShowResult(Boolean(val));
  });

  const handleSelect = useMemoizedFn(() => {
    const keys = isHighlightChecked
      ? difference(checkedKeys, highlightKeys)
      : checkRetain
      ? unique(highlightKeys.concat(checkedKeys))
      : highlightKeys;

    onCheck?.(keys, { checked: !isHighlightChecked });
  });

  return (
    <div className="tree-search-bar">
      <Input.Search onSearch={handleSearch} allowClear className="tree-search-bar-input" />
      <div style={{ display: showResult ? 'block' : 'none' }}>
        <div className="tree-search-bar-result">
          <span>共{highlightKeys?.length}条结果</span>
          {checkable && <a onClick={handleSelect}>{isHighlightChecked ? '取消选中' : '选中'} </a>}
        </div>
      </div>
    </div>
  );
};

export default memo(TreeSearchBar);
