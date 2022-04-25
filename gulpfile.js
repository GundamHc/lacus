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
          if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
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
 * 拷贝less
 */
function copyLess() {
  return gulp.src('src/**/*.less').pipe(gulp.dest('lib/')).pipe(gulp.dest('es/'));
}

/**
 * 生成组件 css文件
 */
function lessComponents() {
  return gulp
    .src('src/components/**/*.less')
    .pipe(less()) // 处理less文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
    .pipe(gulp.dest('lib/components/'))
    .pipe(gulp.dest('es/components/'));
}

/**
 *  生成 hooks css文件
 */
function lessHooks() {
  return gulp
    .src('src/hooks/**/*.less')
    .pipe(less()) // 处理less文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
    .pipe(gulp.dest('lib/hooks/'))
    .pipe(gulp.dest('es/hooks/'));
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

gulp.task('declaration', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

gulp.task('less', gulp.parallel(copyLess, lessComponents, lessHooks));

exports.default = gulp.series('clean', 'cjs', 'es', 'declaration', 'less');
