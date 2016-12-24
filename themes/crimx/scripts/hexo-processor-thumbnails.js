'use strict'
/* global hexo */

const path = require('path')
const fs = require('fs')
// GraphicsMagick
const gm = require('gm')

if (!fs.existsSync('./source/images/cover/thumbnails')) {
  fs.mkdirSync('./source/images/cover/thumbnails')
}

hexo.extend.processor.register(/^images\/cover\/.+\.(gif|jpg|jpeg|png)$/i, function (data, callback) {
  if (data.type === 'skip') { return callback() }

  var coverAbsPath = data.source
  var coverAbsPathObj = path.parse(coverAbsPath)

  if (!/cover$/.test(coverAbsPathObj.dir)) { return callback() }

  var thumbnailAbsPath = path.posix.format({
    dir: path.join(coverAbsPathObj.dir, 'thumbnails'),
    base: coverAbsPathObj.base
  })

  // delet thumbnail
  if (data.type === 'delete') {
    if (fs.existsSync(thumbnailAbsPath)) {
      fs.unlinkSync(thumbnailAbsPath)
      return callback()
    }
  }

  var resizeWidth = 30
  var resizeHeight = null
  if (/-portrait$/.test(coverAbsPathObj.name)) {
    resizeWidth = null
    resizeHeight = 30
  }

  gm(coverAbsPath)
    .resize(resizeWidth, resizeHeight)
    .noProfile()
    .write(thumbnailAbsPath, function (err) {
      if (err) { console.warn(err) }
      addAsset()
      return callback()
    })

  function addAsset () {
    var coverPath = path.posix.join('source', data.path)
    var coverPathObj = path.posix.parse(coverPath)

    var thumbnailPath = path.posix.format({
      dir: path.posix.join(coverPathObj.dir, 'thumbnails'),
      base: coverAbsPathObj.base
    })

    var Asset = hexo.model('Asset')
    // var imageDoc = Asset.findById(coverPath)
    // var thumbnailDoc = Asset.findById(thumbnailPath)

    // if (data.type === 'delete') {
    //   imageDoc && imageDoc.remove()
    //   thumbnailDoc && thumbnailDoc.remove()
    //   return
    // }

    // Asset.save({
    //   _id: coverPath,
    //   path: coverPath.replace(/^source\//, ''),
    //   modified: data.type !== 'skip',
    //   renderable: false
    // })

    Asset.save({
      _id: thumbnailPath,
      path: thumbnailPath.replace(/^source\//, ''),
      modified: data.type !== 'skip',
      renderable: false
    })
  }
})
