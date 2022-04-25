import fs from 'fs';

// 隐藏的组件
const HIDDEN_FILES = [];

// 字符串转换成大驼峰
function toCamel(str: string): string {
  return str
    .replace(/-(\w)/g, (_, letter) => letter.toUpperCase())
    .replace(/^\w/, c => c.toUpperCase());
}

// 小驼峰转为 - 分割的字符串
function toDash(str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

// 生成 hooks 菜单
const hooksMenu = fs
  .readdirSync('./src/hooks')
  .filter(fileName => !HIDDEN_FILES.includes(fileName))
  .map(fileName => ({
    title: fileName,
    path: `/hooks/${toDash(fileName)}`,
  }));

// 生成组件菜单
const componentsMenu = fs
  .readdirSync('./src/components')
  .filter(fileName => !HIDDEN_FILES.includes(fileName))
  .map(fileName => ({
    title: toCamel(fileName),
    path: `/components/${fileName}`,
  }));

export default {
  '/hooks': hooksMenu,
  '/components': componentsMenu,
};
