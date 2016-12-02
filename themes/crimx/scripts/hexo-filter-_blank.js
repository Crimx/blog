/* global hexo */

// add _blank to external links

var cheerio = require('cheerio')
var URL = require('url')

hexo.extend.filter.register('after_render:html', source => {
  var $ = cheerio.load(source, { decodeEntities: false })
  $('a').each((index, elem) => {
    var href = $(elem).attr('href')
    if (href && isExternal(href)) {
      $(elem).attr({ target: '_blank' })
    }
  })
  return $.html()
})

function isExternal (url) {
  var myhost = URL.parse(hexo.config.url).hostname
  var h = url.split('?')[0]
  return !/^\/\w/.test(h) || h.indexOf(myhost) !== -1
}
