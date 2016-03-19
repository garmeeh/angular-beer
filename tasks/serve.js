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
      baseDir: './dist',
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    },
    online: true,
    xip: true
  });
});
