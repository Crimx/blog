// generate recent posts json

/* global hexo */
var coverPositions = require('../../../source/images/cover/_cover-positions.json')

hexo.extend.generator.register('recent-posts', function (locals) {
  var posts = locals.posts.sort('-date').map((post, i) => {
    if (i >= 10) { return false }
    return {
      title: post.title,
      url: '/' + post.path,
      cover: post.cover ? hexo.config.cover.path + post.cover : '',
      position: coverPositions[post.cover] || ''
    }
  })

  return {
    path: 'recent-posts.json',
    data: JSON.stringify(posts)
  }
})
