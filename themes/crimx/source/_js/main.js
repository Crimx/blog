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

  var isMenuDisappear = true
  var isMenuHide = false

  $menuIcon.on('tap swipeRight', function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
    $menuIcon.removeClass('menu-icon--hide menu-icon--disappear')
    isMenuDisappear = isMenuHide = false
  })

  $window.scroll(function () {
    // main content shows
    if ($window.scrollTop() >= mainContentTop) {
      if (isMenuDisappear) {
        isMenuDisappear = false
        $menuIcon.removeClass('menu-icon--disappear')
        isMenuHide = true
        setTimeout(function () {
          $menuIcon.addClass('menu-icon--hide')
        }, 700)
      } else if (!isMenuHide) {
        isMenuHide = true
        $menuIcon.addClass('menu-icon--hide')
      }
    } else { // on top of main content
      if (!isMenuDisappear) {
        isMenuDisappear = true
        $menuIcon.addClass('menu-icon--disappear')
      }
      if (isMenuHide) {
        isMenuHide = false
        $menuIcon.removeClass('menu-icon--hide')
      }
    }
  })
})
