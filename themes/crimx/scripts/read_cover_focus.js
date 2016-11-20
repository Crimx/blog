/* global hexo */
const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./source/images/cover/_focus.json').toString())

hexo.extend.helper.register('get_cover_position', function (image) {
  return data[image] || 'center'
})
