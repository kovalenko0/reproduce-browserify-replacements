const browserify = require('browserify')
const fs = require('fs')
const path = require('path')

const bundler = browserify('project/index.js')

bundler.require(path.resolve('./project/node_modules/another_module'), {
  expose: 'another_module'
})

bundler
  .bundle()
  .pipe(fs.createWriteStream('project/bundle.js'))

