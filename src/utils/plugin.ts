import fs from 'fs';
import path from 'path';

/** 过滤不包含 style 的文件 */
const filterStyledFile = (folder: string) => {
  return fs
    .readdirSync(folder)
    .filter(fileName => fs.readdirSync(`${folder}/${fileName}`).includes('style'));
};

/** 小驼峰转为 - 分割的字符串 */
const toDash = (str: string) => {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
};

// 字符串转换成小驼峰
const toCamel = (str: string) => {
  return str.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
};

/** 所有组件 */
const components = fs.readdirSync(path.resolve(__dirname, '../components'));
/** 包含 style 的组件 */
const styledComponents = filterStyledFile(path.resolve(__dirname, '../components'));
/** 所有 antd 组件 */
const antdComponents = fs.readdirSync(path.resolve(__dirname, '../styles/antd'));
/** 所有 hooks */
const hooks = fs.readdirSync(path.resolve(__dirname, '../hooks'));
/** 包含 style 的 hooks */
const styledHooks = filterStyledFile(path.resolve(__dirname, '../hooks'));
/** 包含样式的组件或 hooks */
const styled = [...styledComponents, ...styledHooks];

// 判断是否是组件文件夹

/** babel-plugin-import 配置 */
export function StyleImportBabel(): any[] {
  return [
    [
      'import',
      {
        libraryName: 'lacus',
        customName(name: string) {
          if (components.includes(name)) {
            return `lacus/es/components/${name}`;
          } else if (hooks.includes(toCamel(name))) {
            return `lacus/es/hooks/${toCamel(name)}`;
          }
          return 'lacus/es/styles/safety';
        },
        style(name: string) {
          const fileName = name.split('/')[name.split('/').length - 1];
          if (styled.includes(fileName)) {
            return `${name}/style`;
          }
          return false;
        },
      },
      'lacus',
    ],
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        customStyleName(name: string) {
          if (antdComponents.includes(name)) {
            return `lacus/es/styles/antd//${name}`;
          } else {
            return `antd/es/${name}`;
          }
        },
      },
      'antd',
    ],
  ];
}

/** vite-plugin-style-import 配置 */
export function StyleImportVite(): any[] {
  return [
    {
      libraryName: 'lacus',
      esModule: true,
      libraryNameChangeCase: 'camelCase',
      resolveStyle: (name: string) => {
        if (styledHooks.includes(name)) {
          return `lacus/es/hooks/${name}/style`;
        } else if (styledComponents.includes(toDash(name))) {
          return `lacus/es/components/${toDash(name)}/style`;
        }
        return '';
      },
    },
    {
      libraryName: 'antd',
      esModule: true,
      resolveStyle: (name: string) => {
        if (antdComponents.includes(name)) {
          return `lacus/es/styles/antd//${name}`;
        } else {
          return `antd/es/${name}`;
        }
      },
    },
  ];
}
