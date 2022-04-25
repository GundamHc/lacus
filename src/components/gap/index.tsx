/*
 * @Description: 间隔
 * @Author: 智慧能源事业部-阳昊宸
 */

import React from 'react';
import { Space, SpaceProps } from 'antd';

interface GapProps extends SpaceProps {
  /** 水平对齐方向 */
  justify?: React.CSSProperties['justifyContent'];
  /** 下边距 */
  bottom?: string | number;
}

const Gap: React.FC<GapProps> = props => {
  const { style, justify, bottom } = props;

  const mergeStyle: React.CSSProperties = {
    width: '100%',
    marginBottom: bottom,
    justifyContent: justify,
    ...style,
  };

  return <Space {...props} style={mergeStyle} />;
};

export default Gap;
