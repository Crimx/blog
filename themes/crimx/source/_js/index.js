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

$(document).ready(function () {
  require('./components/menu')
  require('./components/toc')
  require('./components/footer')
  require('./components/search')

  /* ------------------------------------ *\
     TOOLs
  \* ------------------------------------ */
  require('./tools/iframe-defer')

  /* ------------------------------------ *\
     POLYFILLs
  \* ------------------------------------ */
  require('svgxuse')
})
