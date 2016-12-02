'use strict'
/* global $ */

/* ------------------------------------ *\
   HELPERS
\* ------------------------------------ */
var block = require('../helpers/block-event')

/* ------------------------------------ *\
   MENU SHOWS & HIDES
\* ------------------------------------ */
var $siteMenu = $('.site-menu')
var $siteMenuMask = $('.site-menu-mask')

// disables scrolling when menu shows up
$siteMenu.on('touchmove doubleTap', function (evt) {
  block(evt)
})

$siteMenuMask.on('touchmove', function (evt) {
  block(evt)
})
.on('tap click', function (evt) {
  block(evt)
  if (evt.target === evt.currentTarget) {
    $siteMenuMask.removeClass('site-menu-mask--show')
    $siteMenu.removeClass('site-menu--show')
  }
})

var showMenu = function showMenu (evt) {
  block(evt)
  $siteMenuMask.addClass('site-menu-mask--show')
  $siteMenu.addClass('site-menu--show')
}

// swip right on cover
$('.js-no-wrap-menu').swipeRight(block)
$(window).swipeRight(showMenu)

var $menuIcon = $('.menu-icon')
if ($menuIcon.length > 0) {
  /* ------------------------------------ *\
     MENU ICON SHOWS & HIDES
  \* ------------------------------------ */
  var $window = $(window)
  var mainContentTop = $('.main-content').offset().top
  var isMenuSemiShow = false

  $window.scroll(function () {
    // main content shows
    if ($window.scrollTop() >= mainContentTop) {
      if (!isMenuSemiShow) {
        isMenuSemiShow = true
        $menuIcon.addClass('menu-icon--show menu-icon--semi-show')
        window.setTimeout(function () {
          $menuIcon.removeClass('menu-icon--show')
        }, 500)
      }
    } else { // cover shows
      if (isMenuSemiShow) {
        $menuIcon.removeClass('menu-icon--semi-show')
        isMenuSemiShow = false
      }
    }
  })

  $menuIcon.on('tap click', showMenu)
}
