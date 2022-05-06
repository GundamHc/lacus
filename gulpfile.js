const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const through2 = require('through2');
const del = require('del');
const ts = require('gulp-typescript');

/**
 * 当前组件样式 import './index.less' => import './index.css'
 * 依赖的其他组件样式 import '../test-comp/style' => import '../test-comp/style/css.js'
 * 依赖的其他组件样式 import '../test-comp/style/index.js' => import '../test-comp/style/css.js'
 */
function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.less/g, '.css');
}

/**
 *  生成js文件
 */
function compileScriptsTask(module, destDir) {
  const tsProject = ts.createProject('tsconfig.json', { module });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(babel())
    .pipe(
      through2.obj(function (file, encoding, next) {
        // 忽略 types 类型文件
        if (file.path.match(/(\/|\\)(types|type)(\/|\\)?(.*)\.js/)) {
          next();
        } else {
          // 处理 style/index.js
          if (file.path.match(/(\/|\\)(style|styles)(\/|\\)index\.js/)) {
            this.push(file.clone());
            const content = file.contents.toString(encoding);
            file.contents = Buffer.from(cssInjection(content)); // 处理文件内容
            file.path = file.path.replace(/index\.js/, 'css.js'); // 文件重命名
          }
          this.push(file);
          next();
        }
      }),
    )
    .pipe(gulp.dest(destDir));
}

/**
 * less 转换成 css
 */
function lessToCss(folder) {
  return function () {
    return gulp
      .src(`src/${folder}/**/*.less`)
      .pipe(less())
      .pipe(autoprefixer())
      .pipe(cssnano({ zindex: false, reduceIdents: false }))
      .pipe(gulp.dest(`lib/${folder}/`))
      .pipe(gulp.dest(`es/${folder}/`));
  };
}

/**
 * 打包 css文件
 */
function packageLess() {
  return gulp
    .src('src/styles/index.less')
    .pipe(
      through2.obj(function (file, encoding, next) {
        const content = file.contents.toString(encoding);
        file.contents = Buffer.from(content.replace(/~/g, ''));
        this.push(file);
        next();
      }),
    )
    .pipe(less({ javascriptEnabled: true }))
    .pipe(
      through2.obj(function (file, encoding, next) {
        const content = file.contents.toString(encoding);
        file.contents = Buffer.from(content.replace('../../assets', '../assets'));
        this.push(file);
        next();
      }),
    )
    .pipe(autoprefixer())
    .pipe(cssnano({ zindex: false, reduceIdents: false }))
    .pipe(gulp.dest(`lib/styles/`))
    .pipe(gulp.dest(`es/styles/`));
}

gulp.task('clean', async function () {
  await del('lib/**');
  await del('es/**');
  await del('dist/**');
});

gulp.task('cjs', function () {
  return compileScriptsTask('CommonJS', 'lib/');
});

gulp.task('es', function () {
  return compileScriptsTask('ESNext', 'es/');
});

gulp.task('copyAssets', function () {
  return gulp.src('src/assets/**').pipe(gulp.dest('lib/assets')).pipe(gulp.dest('es/assets'));
});

gulp.task('copyLess', function () {
  return gulp.src('src/**/*.less').pipe(gulp.dest('lib/')).pipe(gulp.dest('es/'));
});

gulp.task('declaration', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

gulp.task(
  'less',
  gulp.parallel(packageLess, lessToCss('hooks'), lessToCss('components'), lessToCss('styles/core')),
);

exports.default = gulp.series(
  'clean',
  'cjs',
  'es',
  'copyAssets',
  'copyLess',
  'declaration',
  'less',
);
