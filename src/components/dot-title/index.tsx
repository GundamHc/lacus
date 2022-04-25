/*
 * @Description: 点标题
 * @Author: 智慧能源事业部-阳昊宸
 */

import React from 'react';
import classNames from 'classnames';

export interface DotTitleProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  /**
   * @description 字体大小
   * @default 16
   */
  size?: number;
  /** 右边的区域 */
  extra?: React.ReactNode;
}

const DotTitle: React.FC<DotTitleProps> = props => {
  const { children, size = 16, extra, className, ...rest } = props;

  const classes = classNames(className, 'dot-title');

  return children ? (
    <div className={classes} {...rest}>
      <div className="dot-title-content" style={{ fontSize: size }}>
        <span className="dot-title-dot"></span>
        {children}
      </div>
      {extra}
    </div>
  ) : null;
};

export default DotTitle;
