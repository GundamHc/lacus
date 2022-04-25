import { defineConfig } from 'dumi';
import menus from './menus';
import { StyleImportBabel } from '../src/utils/plugin';

export default defineConfig({
  base: '/lacus',
  publicPath: '/lacus/',
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
  webpack5: {},
  exportStatic: {},
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
