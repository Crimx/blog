'use strict'
/* global $ requestAnimationFrame */

var $tocWrapper = $('.toc-wrapper')
if ($tocWrapper.length > 0) {
  /* ------------------------------------ *\
     TOC SHOWS & HIDES
  \* ------------------------------------ */
  var $window = $(window)
  var mainContentTop = $('.article--post').offset().top

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

  $('.highlight').swipeLeft(function (evt) {
    return false
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
}

function smoothScroll (endPoint, $newActive) {
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
