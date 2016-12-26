'use strict'
/* global $ */

/* ------------------------------------ *\
   MENU SHOWS & HIDES
\* ------------------------------------ */
var $siteMenu = $('.site-menu')
var $siteMenuMask = $('.site-menu-mask')

// disables scrolling when menu shows up
$siteMenu.on('touchmove doubleTap', function (evt) {
  return false
})

$siteMenuMask.on('touchmove', function (evt) {
  return false
})
.on('touchstart click', function (evt) {
  if (evt.target === evt.currentTarget) {
    $siteMenuMask.removeClass('site-menu-mask--show')
    $siteMenu.removeClass('site-menu--show')
  }
  return false
})

var showMenu = function showMenu (evt) {
  $siteMenuMask.addClass('site-menu-mask--show')
  $siteMenu.addClass('site-menu--show')
  return false
}

// swip right on cover
$('.js-no-wrap-menu').swipeRight(function (evt) {
  return false
})
$(window).swipeRight(showMenu)

var $menuIcon = $('.menu-icon')
if ($menuIcon.length > 0) {
  /* ------------------------------------ *\
     MENU ICON SHOWS & HIDES
  \* ------------------------------------ */
  var $window = $(window)
  var mainContentTop = $('.article--post').offset().top
  var isMenuSemiShow = false

  window.addEventListener('scroll', function () {
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
  }, window.passiveEvents)

  $menuIcon.on('tap click', showMenu)
}
