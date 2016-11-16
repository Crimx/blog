/*!
 * SCRIPT
 */

/* global $ */

// Detect request animation frame
var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  // IE Fallback, you can even fallback to onscroll
  function (callback) { window.setTimeout(callback, 1000 / 60) }

$(document).ready(function () {
  var $window = $(window)
  var mainContentTop = $('.main-content').offset().top

/* ------------------------------------ *\
   MENU ICON SHOWS & HIDES
\* ------------------------------------ */
  var $menuIcon = $('.menu-icon')

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

/* ------------------------------------ *\
   MENU SHOWS & HIDES
\* ------------------------------------ */
  var $siteMenu = $('.site-menu')
  var $siteMenuMask = $('.site-menu-mask')

  // disables scrolling when menu shows up
  $siteMenu.on('touchmove doubleTap', function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
  })

  $siteMenuMask.on('touchmove', function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
  })
  .on('tap', function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
    if (evt.target === evt.currentTarget) {
      $siteMenuMask.removeClass('site-menu-mask--show')
      $siteMenu.removeClass('site-menu--show')
    }
  })

  $menuIcon.on('tap click swipeRight', function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
    $siteMenuMask.addClass('site-menu-mask--show')
    $siteMenu.addClass('site-menu--show')
  })

/* ------------------------------------ *\
   TOC SHOWS & HIDES
\* ------------------------------------ */
  var $tocWrapper = $('.toc-wrapper')

  var isTocShowCase = false
  $window.scroll(function () {
    // main content shows
    if ($window.scrollTop() >= mainContentTop) {
      if (!isTocShowCase) {
        isTocShowCase = true
        $tocWrapper.addClass('toc--semi-show')
        window.setTimeout(function () {
          $tocWrapper.removeClass('toc--semi-show')
        }, 500)
      }
    } else {
      isTocShowCase = false
    }
  })

  var isTocShow = false
  $window.on('tap click swipeLeft', function (evt) {
    isTocShow = true
    $tocWrapper.addClass('toc--show')
  })

  $window.on('tap click', function (evt) {
    if (isTocShow === true && evt.target !== $tocWrapper[0]) {
      isTocShow = false
      $tocWrapper.removeClass('toc--show')
    }
  })

/* ------------------------------------ *\
   TOC SCROLLING
\* ------------------------------------ */
  var $tocLink = $('.toc-link')

  var changeActiveTocLink = (function () {
    var $currentActive = $()
    return function changeActiveTocLink ($newActive) {
      if ($newActive[0] !== $currentActive[0]) {
        $currentActive.removeClass('toc-link--current')
        $newActive.addClass('toc-link--current')
        $currentActive = $newActive
      }
    }
  }())

  function smoothScroll (endPoint, $newActive) {
    var $window = $(window)
    var scrollTop = $window.scrollTop()
    var direction = endPoint < scrollTop ? -1 : 1
    var distance = Math.abs(endPoint - scrollTop)
    var distancePerTick = distance < 200 ? 40 : 80

    if (distance < 40) {
      $window.scrollTop(scrollTop + direction * distance)
      changeActiveTocLink($newActive)
    } else {
      $window.scrollTop(scrollTop + direction * distancePerTick)
      requestAnimationFrame(function () {
        smoothScroll(endPoint, $newActive)
      })
    }
  }

  $tocLink.on('tap click', function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
    var $newActive = $(evt.currentTarget)
    smoothScroll($($newActive.attr('href')).offset().top, $newActive)
  })

  // listen to scrolling
  var $tocTitles = $tocLink.map(function (titleList, linkItem) {
    return $($(linkItem).attr('href'))
  })

  $window.scroll(function () {
    var scrollTop = $window.scrollTop()
    $tocTitles.each(function (index, item) {
      var $title = $(item)
      if ($title.position().top <= scrollTop &&
          $title.position().top + $title.height() > scrollTop) {
        changeActiveTocLink($($tocLink[index]))
        return false
      }
    })
  })
})
