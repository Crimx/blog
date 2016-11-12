/*!
 * SCRIPT
 */

/* global $ */

$(document).ready(function () {
  var $window = $(window)
  var mainContentTop = $('.main-content').offset().top

/* ------------------------------------ *\
   MENU ICON SHOWS & HIDES
\* ------------------------------------ */
  var $menuIcon = $('.menu-icon')

  var isMenuSemiShow = false

  $menuIcon.on('tap swipeRight', function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
    $menuIcon.removeClass('menu-icon--hide menu-icon--disappear')
  })

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
})
