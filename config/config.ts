import { defineConfig } from 'dumi';
import menus from './menus';
import { StyleImportBabel } from '../src/utils/plugin';

export default defineConfig({
  base: '/lacus',
  publicPath: '/lacus/',
  title: 'lacus',
  favicon: '/lacus/favicon.svg',
  logo: '/lacus/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/GundamHc/lacus',
    },
  ],
  menus,
  webpack5: {},
  exportStatic: {},
  dynamicImport: {},
  extraBabelPlugins: [...StyleImportBabel()],
});
