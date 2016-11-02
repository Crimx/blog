/*!
 * SCRIPT
 */

$(document).ready(function () {
  var $window = $(window)
  var mainContentTop = $('.main-content').offset().top

  /*------------------------------------*\
    MENU ICON SHOWS & HIDES
  \*------------------------------------*/
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

  /*------------------------------------*\
    LOGO FITS IN
  \*------------------------------------*/

  var $logo = $('#cover-logo')
  var logoOffset = $logo.offset()
  var logoFavHeight = $('.site-cover').offset().height - $('.title-wrapper').offset().height
  var logoCss = {
    // shrink logo if necessery
    height: (logoOffset.height >= logoFavHeight ? logoFavHeight * .8 : logoOffset.height) + 'px'
  }
  // center logo within the remain space
  logoCss.top = (logoFavHeight - logoCss.height) * .4 + 'px'
  $logo.css(logoCss)
})
