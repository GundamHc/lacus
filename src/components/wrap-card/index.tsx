/*
 * @Description: 容器组件
 * @Author: 智慧能源事业部-阳昊宸
 */

import React from 'react';
import classNames from 'classnames';
import { Card, CardProps } from 'antd';
import { isDef, isString } from '../../utils/is';

interface WrapCardProps extends CardProps {
  /** 卡片底部区域 */
  footer?: React.ReactNode;
  /** 是否全屏 */
  fullscreen?: boolean;
}

const WrapCard: React.FC<WrapCardProps> = props => {
  let {
    title,
    tabList,
    extra,
    children,
    footer,
    className,
    fullscreen,
    size = 'small',
    ...rest
  } = props;

  const headProps = isDef(tabList)
    ? { tabList }
    : isString(title)
    ? { tabList: [{ key: '0', tab: title }] }
    : { title };

  const extraProps = isString(title) ? { tabBarExtraContent: extra } : { extra };

  const classes = classNames(className, {
    'wrap-card': true,
    'wrap-card-has-footer': !!footer,
    'wrap-card-fullscreen': fullscreen,
  });

  return (
    <Card
      tabProps={{ size: 'middle' }}
      className={classes}
      {...headProps}
      {...extraProps}
      {...rest}
    >
      {children}
      {footer && <div className="wrap-card-footer">{footer}</div>}
    </Card>
  );
};

export default WrapCard;
