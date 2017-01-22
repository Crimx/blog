/* global hexo */

const url = require('url')
const querystring = require('querystring')

// {% youtube url/id [width] [height] %}
hexo.extend.tag.register('youtube', function ([link, width = 160, height = 90]) {
  let id = link
  let urlObj = url.parse(link)

  if (/youtube/i.test(urlObj.hostname)) {
    let embed = /\/embed\/(\S+)\/?/i.exec(urlObj.pathname)
    if (embed) {
      // embed link //www.youtube.com/embed/[id]
      id = embed[1]
    } else if (/\/watch/i.test(urlObj.pathname)) {
      // normal link //www.youtube.com/watch?v=[id]
      id = querystring.parse(urlObj.query).v
    }
  }

  return `<p><iframe width="${width}" height="${height}" style="width:100%;" src="" data-type="youtube" data-src="//www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe></p>`
})
