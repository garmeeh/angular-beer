'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var gutil = require('gulp-util');
var watchify = require('watchify');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var assign = require('lodash.assign');
var config = require('../config');

var projectOptions = {
  entries: config.js_entry_file,
  debug: true
}

var options = assign({}, watchify.args, projectOptions);
var b = watchify(browserify(options));

if(config.js_es2015){
  b.transform(babelify);
}

function bundle(){
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.bundle.js'))
    .pipe(gulp.dest(config.js_dir))
    .pipe(reload({stream:true}))
    .pipe(notify('JS Compiled ✔'));
}

//Indepentaly run 'gulp scripts' to build js
gulp.task('scripts', bundle);
//Output build logs to terminal
b.on('log', gutil.log);
