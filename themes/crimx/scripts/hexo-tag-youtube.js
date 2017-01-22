/* global hexo */

// {% youtube url/id [width] [height] %}
hexo.extend.tag.register('youtube', function ([url, width = 160, height = 90]) {
  if (!/http|youtube/i.test(url)) {
    // url is an id
    url = 'http://www.youtube.com/embed/' + url
  }
  return `<p><iframe width="${width}" height="${height}" style="width:100%;" src="" data-type="youtube" data-src="${url}" frameborder="0" allowfullscreen></iframe></p>`
})
