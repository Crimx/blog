'use strict'
/* global $ */

var progressiveBg = require('../tools/progressive-background-image')

/* ------------------------------------ *\
     Get 4 random recommended posts
\* ------------------------------------ */
var $recommendedPost = $('.recommended-post')
if ($recommendedPost.length > 0) {
  var $window = $(window)
  var siteFooterTop = $('.site-footer').offset().top

  var scrollHandler = function scrollHandler () {
    var scrollBottom = $window.scrollTop() + $window.height()

    if (scrollBottom >= siteFooterTop) {
      updateDom()
      window.removeEventListener('scroll', scrollHandler, window.passiveEvents)
    }
  }
  window.addEventListener('scroll', scrollHandler, window.passiveEvents)
}

function updateDom () {
  var itemList = $('.recommended-post__item').map(function (i, item) {
    var $item = $(item)
    return {
      $link: $item.find('.recommended-post__link'),
      $cover: $item.find('.recommended-post__cover'),
      $thumb: $item.find('.recommended-post__thumbnail'),
      $title: $item.find('.recommended-post__title')
    }
  })

  $.getJSON('/recommended-posts.json', function (posts) {
    if (!$.isArray(posts)) { return }

    itemList.forEach(function (item) {
      var i = Math.floor(Math.random() * posts.length)
      var p = posts[i]
      posts.splice(i, 1)

      item.$link.prop('href', p.url)
      if (p.cover) {
        item.$cover.css({
          'background-image': 'url(' + p.cover + ')',
          'background-position': p.position,
          'background-size': 'cover'
        })
      } else {
        item.$cover.css('background-image', 'url()')
      }
      item.$thumb.removeClass('progressive-bg-thumbnail--hide')
      if (p.base64) {
        item.$thumb.css({
          'background-image': 'url(' + p.base64 + ')',
          'background-position': p.position,
          'background-size': 'cover'
        })
      } else {
        item.$thumb.css('background-image', 'url()')
      }
      item.$title.html(p.title)
    })
    progressiveBg('.recommended-post')

    $recommendedPost.addClass('recommended-post--added')
  })
}
