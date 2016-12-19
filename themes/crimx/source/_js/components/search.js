'use strict'
/* global $ */

var $searchSubmit = $('.search-submit')

if ($searchSubmit.length > 0) {
  var $searchInput = $('.search-input')

  $searchSubmit.on('tap click', function () {
    if ($searchInput.val().length > 0) {
      window.open('//www.google.com/search?q=' + $searchInput.val() + ' site:' + window.location.hostname)
    }
  })
}
