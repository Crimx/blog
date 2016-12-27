/* global hexo */

const posSite = require('../../../source/images/cover/_cover-positions.json')
const posPost = require('../../../source/images/post/cover/_cover-positions.json')

const base64Site = require('../../../source/images/cover/thumbnails/_base64.json')
const base64Post = require('../../../source/images/post/cover/thumbnails/_base64.json')

hexo.extend.helper.register('get_cover_info', function (imgName) {
  if (posSite[imgName]) {
    return {
      path_to_cover: hexo.config.imgpath + 'cover/' + imgName,
      path_to_thumbnail: hexo.config.imgpath + 'cover/thumbnails' + imgName,
      cover_position: posSite[imgName],
      thumbnail_base64: base64Site[imgName]
    }
  } else if (posPost[imgName]) {
    return {
      path_to_cover: hexo.config.imgpath + 'post/cover/' + imgName,
      path_to_thumbnail: hexo.config.imgpath + 'post/cover/thumbnails' + imgName,
      cover_position: posPost[imgName],
      thumbnail_base64: base64Post[imgName]
    }
  } else {
    return {
      path_to_cover: '',
      path_to_thumbnail: '',
      cover_position: 'center',
      thumbnail_base64: ''
    }
  }
})
