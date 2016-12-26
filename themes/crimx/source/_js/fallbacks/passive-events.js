'use strict'

// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
window.passiveEvents = false
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function () {
      window.passiveEvents = { passive: true }
    }
  })
  window.addEventListener('test', null, opts)
} catch (e) {}
