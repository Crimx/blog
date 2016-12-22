'use strict'
/* global $ */

// replaces unicode emojis with images
$('span.github-emoji').each(function (i, emoji) {
  var $emoji = $(emoji)
  var codepoint = $emoji.html()
  $('<img height="20" width="20">')
    .prop('src', $emoji.data('src'))
    .prop('alt', $emoji.attr('title'))
    .on('error', function () {
      // image loading failed
      $emoji.html(codepoint)
    })
    .appendTo($emoji.empty())
})
