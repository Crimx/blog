'use strict'
/* global $ */

// parent selector is optional
function progressiveImg (parentSelector) {
  if (parentSelector) {
    parentSelector = parentSelector + ' '
  } else {
    parentSelector = ''
  }
  $(parentSelector + '.js-progressive-bg-container').forEach(function (container) {
    var $container = $(container)
    var bigBgSrc = $container.css('background-image').replace(/^url\(['"]?(.*?)['"]?\)$/i, '$1')
    $('<img>')
      .on('load', function () {
        $container.find('.js-progressive-bg-thumbnail')
          .addClass('progressive-bg-thumbnail--hide')
      })
      .prop('src', bigBgSrc)
  })
}

module.exports = progressiveImg
