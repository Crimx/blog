'use strict'

/* ------------------------------------ *\
   GLOBALs
\* ------------------------------------ */
/* global $ */require('./vendors/zepto.min')

/* ------------------------------------ *\
   POLYFILLs & WORKAROUNDs
\* ------------------------------------ */
try { require('./fallbacks/requestAnimationFrame') } catch (err) { console.warn(err) }
try { require('./fallbacks/hairline-border') } catch (err) { console.warn(err) }
try { require('./fallbacks/passive-events') } catch (err) { console.warn(err) }

$(document).ready(function () {
  /* ------------------------------------ *\
     TOOLs
  \* ------------------------------------ */
  try { require('./tools/iframe-defer') } catch (err) { console.warn(err) }
  try { require('./tools/progressive-background-image')() } catch (err) { console.warn(err) }

  /* ------------------------------------ *\
     COMPONENTs
  \* ------------------------------------ */
  try { require('./components/emojis') } catch (err) { console.warn(err) }
  try { require('./components/search') } catch (err) { console.warn(err) }
  try { require('./components/menu') } catch (err) { console.warn(err) }
  try { require('./components/toc') } catch (err) { console.warn(err) }
  try { require('./components/comments') } catch (err) { console.warn(err) }
  try { require('./components/footer') } catch (err) { console.warn(err) }

  /* ------------------------------------ *\
     POLYFILLs
  \* ------------------------------------ */
  try { require('svgxuse') } catch (err) { console.warn(err) }
})
