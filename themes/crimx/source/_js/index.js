'use strict'

/* ------------------------------------ *\
   GLOBALs
\* ------------------------------------ */
/* global $ */require('./vendors/zepto.min')

/* ------------------------------------ *\
   POLYFILLs & WORKAROUNDs
\* ------------------------------------ */
require('./fallbacks/requestAnimationFrame')
require('./fallbacks/hairline-border')
require('./fallbacks/passive-events')

$(document).ready(function () {
  /* ------------------------------------ *\
     TOOLs
  \* ------------------------------------ */
  require('./tools/iframe-defer')
  require('./tools/progressive-background-image')()

  /* ------------------------------------ *\
     COMPONENTs
  \* ------------------------------------ */
  require('./components/emojis')
  require('./components/search')
  require('./components/menu')
  require('./components/toc')
  require('./components/footer')

  /* ------------------------------------ *\
     POLYFILLs
  \* ------------------------------------ */
  require('svgxuse')
})
