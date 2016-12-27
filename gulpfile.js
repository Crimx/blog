'use strict'

var gulp = require('gulp')
var runSequence = require('run-sequence')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var assign = require('lodash.assign')
var $ = require('gulp-load-plugins')()

var autoprefixer = require('autoprefixer')
var Hexo = require('hexo')
var hexo = new Hexo(process.cwd(), {})
var del = require('del')
var browserSync = require('browser-sync').create()
var watchify = require('watchify')
var browserify = require('browserify')

gulp.task('clean', function () {
  return del(['./themes/crimx/source/static/*'])
})

gulp.task('sass-debug', function () {
  return gulp.src('./themes/crimx/source/_scss/style.scss')
    .pipe($.sourcemaps.init({loadMaps: true}))
      .pipe($.sass({
        includePaths: [
          './node_modules' // required for sass
        ]
      }).on('error', $.sass.logError))
      // .pipe($.cleanCss())
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
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('./themes/crimx/source/static/'))
    .pipe($.size({title: 'sass'}))
})

;(function () {
  // add custom browserify options here
  var customOpts = {
    entries: ['./themes/crimx/source/_js/index.js'],
    debug: true
  }
  var opts = assign({}, watchify.args, customOpts)
  var b = watchify(browserify(opts))

  // add transformations here
  // i.e. b.transform(coffeeify)

  gulp.task('js-debug', bundle) // so you can run `gulp js` to build the file
  b.on('update', bundle) // on any dep update, runs the bundler
  b.on('log', $.util.log) // output build logs to terminal

  function bundle () {
    return b.bundle()
      // log errors if they happen
      .on('error', $.util.log.bind($.util, 'Browserify Error'))
      .pipe(source('bundle.js'))
      // optional, remove if you don't need to buffer file contents
      .pipe(buffer())
      // optional, remove if you dont want sourcemaps
      .pipe($.sourcemaps.init({loadMaps: true})) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        .pipe($.uglify())
        .on('error', $.util.log)
      .pipe($.sourcemaps.write('./')) // writes .map file
      .pipe(gulp.dest('./themes/crimx/source/static/'))
  }
}())

var path = require('path')
var fs = require('fs')
// GraphicsMagick
var gm = require('gm')
gulp.task('thumbnails', function (done) {
  var coverDir = path.join(__dirname, 'source/images/post/cover/')
  var thumbDir = path.join(coverDir, 'thumbnails/')

  if (!fs.existsSync(thumbDir)) {
    fs.mkdirSync(thumbDir)
  }

  var base64Path = path.join(thumbDir, '_base64.json')
  var base64 = {}
  if (fs.existsSync(base64Path)) {
    base64 = require(base64Path)
  }

  var coverList = fs.readdirSync(coverDir)
    .filter(name => /\.(gif|jpg|jpeg|png)$/i.test(name))

  var thumbSet = new Set(
    fs.readdirSync(thumbDir)
      .filter(name => /\.(gif|jpg|jpeg|png)$/i.test(name))
  )

  var base64OperateCount = 0
  var writeFileOperateCount = 0
  coverList.forEach(imgName => {
    if (thumbSet.has(imgName)) { return }

    // 2 operations a time, writing thumbnail file + base64
    base64OperateCount += 1
    writeFileOperateCount += 1

    var coverPath = path.join(coverDir, imgName)
    var thumbPath = path.join(thumbDir, imgName)

    var thumbPathObj = path.parse(thumbPath)
    var ext = /jpeg|jpg/i.test(thumbPathObj.ext) ? 'jpeg'
        : /png/i.test(thumbPathObj.ext) ? 'png' : 'gif'

    var gmCover = gm(coverPath)
    gmCover.size(function (err, size) {
      if (err) { console.warn(err) }

      var resizeWidth = 30
      var resizeHeight = null
      if (size.width < size.height) {
        resizeWidth = null
        resizeHeight = 30
      }

      // write base64
      gmCover
        .resize(resizeWidth, resizeHeight)
        .blur(5)
        .noProfile()
        .toBuffer(function (err, buffer) {
          if (err) { console.warn(err) }
          base64[imgName] = `data:image/${ext};base64,${buffer.toString('base64')}`
          if (--base64OperateCount === 0) {
            // write base64 file
            fs.writeFile(base64Path, JSON.stringify(base64, null, '\t'))
            if (writeFileOperateCount === 0) {
              return done()
            }
          }
        })

      // write file
      gmCover
        .resize(resizeWidth, resizeHeight)
        .blur(5)
        .noProfile()
        .write(thumbPath, function (err) {
          if (err) { console.warn(err) }
          if (--writeFileOperateCount === 0 && base64OperateCount === 0) {
            return done()
          }
        })
    })
  })

  // no operation, straight exit
  if (writeFileOperateCount === 0 && base64OperateCount === 0) {
    return done()
  }
})

gulp.task('watch', function () {
  gulp.watch(['./themes/crimx/source/_scss/**/*.scss'], ['sass-debug'])
  // gulp.watch(['./themes/crimx/source/_js/**/*.js'], ['js-debug'])
  gulp.watch([
    './themes/**/*',
    './source/**/*',
    '!./themes/crimx/source/_scss/**/*',
    '!./themes/crimx/source/_js/**/*']).on('change', browserSync.reload)
})

gulp.task('default', function () {
  runSequence(
    'clean',
    ['thumbnails', 'sass-debug', 'js-debug'],
    function () {
      hexo.init().then(function () {
        return hexo.call('clean').then(function () {
          return hexo.call('generate', {watch: true})
        })
      }).catch(function (err) {
        console.log(err)
      }).then(function () {
        browserSync.init({
          server: './public',
          reloadDelay: 2000
        })

        runSequence('watch')
      })
    }
  )
})

gulp.task('g-clean', function () {
  hexo.init().then(function () {
    return hexo.call('clean').then(function () {
      return hexo.call('generate')
    })
  }).catch(function (err) {
    console.log(err)
  }).then(function () {
    runSequence(
      'clean',
      'sass',
      'js'
    )
  })
})

gulp.task('g', function () {
  return hexo.call('generate')
})
