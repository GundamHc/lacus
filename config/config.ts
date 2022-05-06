import { defineConfig } from 'dumi';
import menus from './menus';
import { DevStyleImportBabel } from '../src/utils/plugin';

export default defineConfig({
  base: '/lacus',
  mfsu: {},
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
  styles: [
    `
      a { text-decoration: none };
      body { padding: 12px };
      .__dumi-default-layout { min-height: auto !important; }
      .__dumi-default-previewer-browser-nav { display: none; };
      .__dumi-default-previewer-demo { margin-bottom: 12px; };
    `,
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
  extraBabelPlugins: [DevStyleImportBabel()],
});
