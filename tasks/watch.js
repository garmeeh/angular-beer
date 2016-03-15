'use strict';

/*
* Gulp Task: gulp watch
*/

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = require('../config');

gulp.task('watch', ['serve'], function(){
  gulp.watch([config.workfiles_watch], reload);
  gulp.watch(config.scss_watch, ['styles']);
  gulp.watch(config.js_watch, ['scripts']);
});
