'use strict';

var gulp  = require('gulp'),
    gutil = require('gulp-util');

// create a default task and confirm gulp runs
gulp.task('default', function() {
  return gutil.log('Gulp Runs!')
});
