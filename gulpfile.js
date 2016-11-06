'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')();

var autoprefixer = require('autoprefixer');
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});
var del = require('del');
var browserSync = require('browser-sync').create();


gulp.task('clean', function() {
  return del(['./themes/crimx/source/css/*', './themes/crimx/source/js/*']);
});


gulp.task('sass-debug', function () {
  return gulp.src('./themes/crimx/source/_scss/style.scss')
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.sass({
      includePaths: [
        './node_modules/breakpoint-sass/stylesheets',
        './node_modules/susy/sass' //required for sass
      ]
    }).on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({browsers: [
        'Android 2.3',
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24',
        'Explorer >= 8',
        'iOS >= 6',
        'Opera >= 12',
        'Safari >= 6'
      ]})
    ]))
    // .pipe($.minifyCss())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('./themes/crimx/source/css/'))
    .pipe($.size({title: 'sass'}));
});


gulp.task('sass', function () {
  return gulp.src('./themes/crimx/source/_scss/style.scss')
    .pipe($.sass({
      includePaths: [
        './node_modules/breakpoint-sass/stylesheets',
        './node_modules/susy/sass' //required for sass
      ]
    }).on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({browsers: ['last 1 version']})
    ]))
    .pipe($.cleanCSS())
    .pipe(gulp.dest('./themes/crimx/source/css/'))
    .pipe($.size({title: 'sass'}));
});

gulp.task('js-debug', function () {
  return gulp.src([
    './themes/crimx/source/_js/lib/*.js',
    '!./themes/crimx/source/_js/lib/*.min.js',
    './themes/crimx/source/_js/*.js',
    ])
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.concat('script.js'))
    .pipe($.uglify({
      // preserveComments: 'license',
      mangle: true
    }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('./themes/crimx/source/js/'))
    .pipe($.size({title: 'js'}));
});

gulp.task('js', function () {
  return gulp.src([
    './themes/crimx/source/_js/lib/*.min.js',
    './themes/crimx/source/_js/*.js',
    ])
    .pipe($.concat('script.js'))
    .pipe($.uglify({
      // preserveComments: 'license',
      mangle: true
    }))
    .pipe(gulp.dest('./themes/crimx/source/js/'))
    .pipe($.size({title: 'js'}));
});


gulp.task('watch', function() {
  gulp.watch(['./themes/crimx/source/_scss/**/*.scss'], ['sass-debug']);
  gulp.watch(['./themes/crimx/source/_js/**/*.js'], ['js-debug']);
  gulp.watch([
    './themes/**/*',
    './source/**/*',
    '!./themes/crimx/source/_scss/**/*',
    '!./themes/crimx/source/_js/**/*']).on('change', browserSync.reload);
});


gulp.task('default', function() {
  hexo.init().then(function(){
    return hexo.call('clean').then(function(){
      return hexo.call('generate', {watch: true});
    });
  }).catch(function(err){
    console.log(err);
  }).then(function() {
    browserSync.init({
      server: './public',
      reloadDelay: 2000
    });

    runSequence(
      'clean',
      'sass-debug',
      'js-debug',
      'watch'
    );
  });

});


gulp.task('g-clean', function() {
  hexo.init().then(function(){
    return hexo.call('clean').then(function(){
      return hexo.call('generate');
    });
  }).catch(function(err){
    console.log(err);
  }).then(function() {
    runSequence(
      'clean',
      'sass',
      'js'
    );
  });
});

gulp.task('g', function() {
  return hexo.call('generate')
});
