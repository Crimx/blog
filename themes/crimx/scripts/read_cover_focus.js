const fs = require('fs')

hexo.config.cover_position = JSON.parse(fs.readFileSync('./source/images/cover/_focus.json').toString())
