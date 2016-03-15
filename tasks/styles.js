'use strict';

/*
* Gulp Task: Styles
*/
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var config = require('../config');

gulp.task('styles', function(){
  gulp.src(config.scss_entry_file)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest(config.css_dir))
    .pipe(reload({stream:true}))
    .pipe(notify('Sass Compiled ✔'));
});
