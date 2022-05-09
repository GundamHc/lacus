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
  /** 高度 */
  height?: string | number;
  /** 上边距 */
  top?: string | number;
  /** 下边距 */
  bottom?: string | number;
  /** 内边距 */
  padding?: string | number;
  /** 字体颜色 */
  color?: React.CSSProperties['color'];
  /** 字体大小 */
  size?: string | number;
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
    height,
  } = props;

  ellipsis = Boolean(props.ellipsis || props.rows);

  const text = children || defaultValue;

  const classes = classNames(className, { 'text-ellipsis': ellipsis });

  const baseStyle: React.CSSProperties = {
    height,
    marginTop: top,
    marginBottom: bottom,
    padding,
    fontSize: size,
    color,
    ...style,
  };

  const ellipsisStyle: React.CSSProperties = ellipsis
    ? { lineClamp: rows, WebkitLineClamp: rows, ...baseStyle }
    : baseStyle;

  return (
    <p className={classes} style={ellipsisStyle}>
      {tooltip ? <Tooltip title={text}>{text}</Tooltip> : text}
    </p>
  );
};

export default Text;
