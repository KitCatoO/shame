const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const path = require('path');
const svgSprite = require('gulp-svg-sprite');
const concat = require('gulp-concat');


const bootstrapSCSS = './node_modules/bootstrap/scss/bootstrap.scss';

// HTML
gulp.task('html', function () {
  return gulp.src('src/pages/**/*.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(rename(function (path) {
      path.dirname = "";
    }))
    .pipe(gulp.dest('public'));
});

// SCSS
gulp.task('styles', function () {
  return gulp.src(['src/scss/main.scss'])
    .pipe(sass({ includePaths: ['node_modules'] }).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(rename('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

// JS
gulp.task('scripts', function() {
  gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('public/js'));
  return gulp.src('src/components/**/*.js')
    .pipe(gulp.dest('public/js/components'))
    .pipe(browserSync.stream());
});

// Assets: images/fonts
gulp.task('assets', function () {
  return gulp.src('src/assets/**/*')
    .pipe(gulp.dest('public/assets'));
});

gulp.task('sprite', function () {
  return gulp.src('src/assets/images/icons/*.svg')
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: '.',
          sprite: 'sprite.svg',
          example: true
        }
      },
      shape: {
        id: {
          generator: function(name) {
            return name.split('/').pop().replace('.svg', '');
          }
        }
      }
    }))
    .pipe(gulp.dest('public/assets'));
});

gulp.task('bootstrap-js', function () {
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
    .pipe(gulp.dest('public/js'));
});

// Server
gulp.task('serve', gulp.series('html', 'styles', 'bootstrap-js', 'sprite', 'scripts', 'assets', function () {
  browserSync.init({
    server: './public',
    startPath: '/index.html'
  });

  gulp.watch(['src/**/*.html'], gulp.series('html')).on('change', browserSync.reload);
  gulp.watch(['src/**/*.scss'], gulp.series('styles'));
  gulp.watch(['src/**/*.js'], gulp.series('scripts')).on('change', browserSync.reload);
  gulp.watch(['src/js/**/*.js'], gulp.series('scripts')).on('change', browserSync.reload);
  gulp.watch(['src/assets/**/*'], gulp.series('assets')).on('change', browserSync.reload);
  gulp.watch(['src/assets/**/*'], gulp.series('sprite')).on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));
