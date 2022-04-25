/**
 * @description 阻止事件冒泡函数
 * @param e 点击对象
 */
export function stopPropagation(e: React.SyntheticEvent<any>) {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
}
