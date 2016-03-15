'use strict';

  /*
  * Gulp Config Files
  */

  var config = {
      // Watch html files
      workfiles_watch: '**/*.html',

      js_entry_file: 'app/js/app.js',
      js_dir: 'dist/js/',
      // Define files to trigger task
      js_watch: ['app/js/**/*.js', 'app/js/app.js'],
      js_es2015: true,

      scss_entry_file: 'app/scss/main.scss',
      // Define scss to watch to trigger task
      scss_watch: 'app/scss/**/*.scss',
      css_dir: 'dist/css',
      css_entry_file: 'dist/css/main.css'
  };

module.exports = config;
