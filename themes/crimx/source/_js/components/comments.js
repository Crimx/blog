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
  // disqus first, cloud tie fallback
  var $disqus = $('#disqus_thread')
  var $cloudTie = $('#cloud-tie-wrapper')

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

  if ($cloudTie.length > 0) {
    $('<script>')
      .on('load', function () {
        $('.no-comments').empty()
        if ($disqus.find('iframe').length > 0) {
          // disqus is loaded
          $cloudTie.empty()
        }
      })
      .attr('src', 'https://img1.cache.netease.com/f2e/tie/yun/sdk/loader.js')
      .attr('async', '')
      .appendTo(document.body)
  }
}

