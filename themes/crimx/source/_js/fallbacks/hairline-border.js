'use strict'

/* ------------------------------------ *\
   Add `hairline` class name to html
   if the browser surports .5px
\* ------------------------------------ */
if (window.devicePixelRatio > 1) {
  var testEle = document.createElement('div')
  testEle.style.border = '.5px solid transparent'
  document.body.appendChild(testEle)
  if (testEle.offsetHeight === 1) {
    document.querySelector('html').classList.add('hairline')
  }
  document.body.removeChild(testEle)
}
