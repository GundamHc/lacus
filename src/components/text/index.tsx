/*
 * @Description: 文字
 * @Author: 智慧能源事业部-阳昊宸
 */

import React from 'react';
import classNames from 'classnames';
import { Tooltip } from 'antd';

export interface TextProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  /** 上边距 */
  top?: number;
  /** 下边距 */
  bottom?: number;
  /** 内边距 */
  padding?: number;
  /** 字体颜色 */
  color?: React.CSSProperties['color'];
  /** 字体大小 */
  size?: number;
  /** 是否支持溢出省略 */
  ellipsis?: boolean;
  /** 是否支持悬浮显示 */
  tooltip?: boolean;
  /**
   * @description 行数
   * @default 1
   */
  rows?: number;
  /**
   * @description 默认值
   * @default -
   */
  defaultValue?: string;
}

const Text: React.FC<TextProps> = props => {
  let {
    rows = 1,
    tooltip,
    ellipsis,
    defaultValue = '-',
    top,
    bottom,
    padding,
    size,
    color,
    className,
    style,
    children,
  } = props;

  ellipsis = Boolean(props.ellipsis || props.rows);

  const text = children || defaultValue;

  const classes = classNames(className, { 'text-ellipsis': ellipsis });

  const marginStyle: React.CSSProperties = {
    marginTop: top,
    marginBottom: bottom,
    padding,
    fontSize: size,
    color,
    ...style,
  };

  const ellipsisStyle: React.CSSProperties = ellipsis
    ? { lineClamp: rows, WebkitLineClamp: rows, ...marginStyle }
    : marginStyle;

  return (
    <span className={classes} style={ellipsisStyle}>
      {tooltip ? <Tooltip title={text}>{text}</Tooltip> : text}
    </span>
  );
};

export default Text;
