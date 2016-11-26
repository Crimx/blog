/* global hexo */
const data = require('../../../source/images/cover/_cover-positions.json')

hexo.extend.helper.register('get_cover_position', function (image) {
  return data[image] || 'center'
})
