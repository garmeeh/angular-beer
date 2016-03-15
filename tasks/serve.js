'use strict';

/*
* Gulp Task: gulp serve
*/

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('serve', ['styles', 'scripts'], function(){
  browserSync({
    server: {
      baseDir: 'dist'
    },
    online: true,
    xip: true
  });
});
