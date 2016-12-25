'use strict'
/* global $ */

// replaces unicode emojis with images
$('span.github-emoji').each(function (i, emoji) {
  var $emoji = $(emoji)
  var codepoint = $emoji.html()
  $('<img height="20" width="20">')
    .on('error', function () {
      // image loading failed
      $emoji.html(codepoint)
    })
    .prop('alt', $emoji.attr('title'))
    .prop('src', $emoji.data('src'))
    .appendTo($emoji.empty())
})
