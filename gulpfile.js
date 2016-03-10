'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')();

var autoprefixer = require('autoprefixer');
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});
var del = require('del');


gulp.task('clean', function() {
  return del(['./themes/crimx/source/css/*']);
});


gulp.task('sass-debug', function () {
  return gulp.src('./themes/crimx/source/_scss/style.scss')
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({browsers: ['last 1 version']})
    ]))
    .pipe($.minifyCss())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('./themes/crimx/source/css/'))
    .pipe($.size({title: 'sass'}));
});


gulp.task('sass', function () {
  return gulp.src('./themes/crimx/source/_scss/style.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({browsers: ['last 1 version']})
    ]))
    .pipe($.minifyCss())
    .pipe(gulp.dest('./themes/crimx/source/css/'))
    .pipe($.size({title: 'sass'}));
});


gulp.task('watch', function() {
  gulp.watch(['./themes/crimx/source/_scss/**/*.scss'], ['sass-debug']);
});


gulp.task('default', function() {
  runSequence(
    'clean',
    'sass-debug',
    'watch'
  );

  hexo.init().then(function(){
    return hexo.call('generate', {watch: true});
  }).catch(function(err){
    console.log(err);
  });
});


gulp.task('g', function() {
  runSequence(
    'clean',
    'sass'
  );

  hexo.init().then(function(){
    return hexo.call('generate');
  }).catch(function(err){
    console.log(err);
  });
});
