'use strict'
/* global $ */

var $window = $(window)
// all the iframes that are supposed to defer
var $iframeDefers = $('iframe[data-src]')

function scrollHandler () {
  if ($iframeDefers.length > 0) {
    var scrollBottom = $window.scrollTop() + $window.height()
    $iframeDefers = $iframeDefers.filter(function () {
      var $iframe = $(this)
      if (scrollBottom >= $iframe.offset().top) {
        $iframe.prop('src', $iframe.data('src'))
        return false // removed once added
      }
      return true
    })
  } else {
    // all added, detached listener
    $window.off('scroll', scrollHandler)
  }
}

$window.scroll(scrollHandler)
