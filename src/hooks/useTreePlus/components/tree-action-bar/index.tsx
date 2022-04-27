/*
 * @Description: 树形控件操作栏
 * @Author: 智慧能源事业部-阳昊宸
 */

import { Popover, Tooltip } from 'antd';
import React, { memo } from 'react';
import { stopPropagation } from '../../../../utils/event';

export interface TreeActionBarProps {
  value: React.Key;
  children: React.ReactNode;
  onAddChild?: (key: React.Key) => void;
  onAddBrother?: (key: React.Key) => void;
  onEdit?: (key: React.Key) => void;
  onMove?: (key: React.Key) => void;
  onDelete?: (key: React.Key) => void;
}

const TreeActionBar: React.FC<TreeActionBarProps> = props => {
  const { value, children, onAddChild, onAddBrother, onDelete, onEdit, onMove } = props;

  return (
    <div className="tree-action-bar">
      {children}
      <div className="tree-action-bar-extra" onClick={stopPropagation}>
        {onAddChild && (
          <Tooltip title="添加子级">
            <div className="tree-action-bar-icon" onClick={() => onAddChild(value)}>
              <i className="iconfont icon-ziji"></i>
            </div>
          </Tooltip>
        )}
        {[onAddBrother, onEdit, onMove, onDelete].some(Boolean) && (
          <Popover
            trigger="click"
            overlayClassName="tree-action-bar-popover"
            content={
              <ul className="tree-action-bar-menu">
                {onEdit && (
                  <li onClick={() => onEdit(value)}>
                    <i className="iconfont icon-edit"></i>
                    <span>编辑</span>
                  </li>
                )}
                {onAddBrother && (
                  <li onClick={() => onAddBrother(value)}>
                    <i className="iconfont icon-tongji"></i>
                    <span>添加同级</span>
                  </li>
                )}
                {onMove && (
                  <li onClick={() => onMove(value)}>
                    <i className="iconfont icon-yidongdao"></i>
                    <span>移动到</span>
                  </li>
                )}
                {onDelete && (
                  <li onClick={() => onDelete(value)}>
                    <i className="iconfont icon-k-i-delete"></i>
                    <span>删除</span>
                  </li>
                )}
              </ul>
            }
            placement="bottomRight"
          >
            <div className="tree-action-bar-icon">
              <i className="iconfont icon-add"></i>
            </div>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default memo(TreeActionBar);
