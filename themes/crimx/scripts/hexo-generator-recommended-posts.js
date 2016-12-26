// generate recommended posts json

/* global hexo */
var coverPositions = require('../../../source/images/cover/_cover-positions.json')
var thumbBase64 = require('../../../source/images/cover/thumbnails/_base64.json')

hexo.extend.generator.register('recommended-posts', function (locals) {
  var posts = locals.tags
    .findOne({name: 'Recommended'})
    .posts
    .sort('-date')
    .map(post => {
      return {
        title: post.title || '',
        url: '/' + post.path,
        cover: post.cover ? hexo.config.cover.path + post.cover : '',
        thumbnail: post.cover ? hexo.config.cover.thumbnailpath + post.cover : '',
        position: coverPositions[post.cover] || '',
        base64: thumbBase64[post.cover] || ''
      }
    })

  return {
    path: 'recommended-posts.json',
    data: JSON.stringify(posts)
  }
})

