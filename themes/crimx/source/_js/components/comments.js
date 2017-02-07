'use strict'
/* global $ */

var $window = $(window)
var $comments = $('#comments')
if ($comments.length > 0) {
  // conmments tag exists
  var commentsTop = $comments.offset().top

  var scrollHandler = function scrollHandler () {
    var scrollBottom = $window.scrollTop() + $window.height() * 2.5

    if (scrollBottom >= commentsTop) {
      injectComments()
      window.removeEventListener('scroll', scrollHandler, window.passiveEvents)
    }
  }
  window.addEventListener('scroll', scrollHandler, window.passiveEvents)

  scrollHandler()
}

function injectComments () {
  // disqus first, duoshuo fallback
  var $disqus = $('#disqus_thread')
  var $duoshuo = $('.ds-thread')

  if ($disqus.length > 0) {
    window.disqus_config = function () {
      var permalink = $disqus.data('url')
      if (permalink) { this.page.url = permalink }
      this.page.identifier = $disqus.data('identifier')
    }
    $('<script>')
      .attr('src', $disqus.data('src'))
      .attr('async', '')
      .data('timestamp', new Date())
      .appendTo(document.body)
  }

  if ($duoshuo.length > 0) {
    window.duoshuoQuery = { short_name: $duoshuo.data('shortname') }
    $('<script>')
      .on('load', function () {
        $('.no-comments').empty()
        if ($disqus.find('iframe').length > 0) {
          // disqus is loaded
          $duoshuo.empty()
        }
      })
      .attr('src', '//static.duoshuo.com/embed.js')
      .attr('async', '')
      .attr('charset', 'UTF-8')
      .data('timestamp', new Date())
      .appendTo(document.body)
  }
}

