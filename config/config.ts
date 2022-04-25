import { defineConfig } from 'dumi';
import menus from './menus';
import { StyleImportBabel } from '../src/utils/plugin';

export default defineConfig({
  title: 'lacus',
  favicon: '/favicon.svg',
  logo: '/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  menus,
  alias: {
    'lacus/hooks': 'lacus/hooks',
  },
  dynamicImport: {},
  extraBabelPlugins: [
    StyleImportBabel(),
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
