/* global hexo */
const pos = require('../../../source/images/cover/_cover-positions.json')
const base64 = require('../../../source/images/cover/thumbnails/_base64.json')

hexo.extend.helper.register('get_cover_position', function (image) {
  return pos[image] || 'center'
})

hexo.extend.helper.register('get_thumb_base64', function (image) {
  return base64[image] || ''
})
