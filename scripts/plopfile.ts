const path = require('path');

exports['default'] = function (plop) {
  plop.setGenerator('component', {
    description: '创建一个新组件',
    prompts: [
      { type: 'list', name: 'type', message: '请选择组件类型', choices: ['hooks', 'components'] },
      { type: 'input', name: 'name', message: '请输入组件名称(真实名称)' },
    ],
    actions: function ({ type, name }) {
      const fileName =
        type === 'hooks'
          ? name
          : name
              .replace(/^\S/, s => s.toLowerCase())
              .replace(/([A-Z])/g, '-$1')
              .toLowerCase();

      return [
        {
          type: 'add',
          path: path.resolve(__dirname, `../src/{{type}}/${fileName}/index.tsx`),
          templateFile: path.resolve(__dirname, '../templates/index.hbs'),
        },
        {
          type: 'add',
          path: path.resolve(__dirname, `../src/{{type}}/${fileName}/style/index.less`),
          templateFile: path.resolve(__dirname, '../templates/style/style.hbs'),
        },
        {
          type: 'add',
          path: path.resolve(__dirname, `../src/{{type}}/${fileName}/style/index.ts`),
          templateFile: path.resolve(__dirname, '../templates/style/index.hbs'),
        },
        {
          type: 'add',
          path: path.resolve(__dirname, `../src/{{type}}/${fileName}/index.md`),
          templateFile: path.resolve(__dirname, '../templates/index.md.hbs'),
        },
        {
          type: 'add',
          path: path.resolve(__dirname, `../src/{{type}}/${fileName}/demo/basic.tsx`),
          templateFile: path.resolve(__dirname, '../templates/demo/basic.hbs'),
        },
        {
          type: 'append',
          path: path.resolve(__dirname, '../src/index.ts'),
          pattern: '/* PLOP_INJECT_EXPORT */',
          template: `export { default as {{name}} } from './{{type}}/${fileName}';`,
        },
      ];
    },
  });
};
