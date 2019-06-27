/* eslint-env node */

'use strict';

// Load Gulp and other tools.

var gulp = require('gulp');
var sass = require('gulp-sass');
var stylelint = require('gulp-stylelint');

// Gulp tasks.

/**
 * Compiles Sass files.
 */
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

/**
 * Lints Sass files.
 */
gulp.task('lint', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(stylelint({
      failAfterError: false,
      reporters: [
        { formatter: 'string', console: true }
      ]
    }));
});

/**
 * Gulp default task.
 */
gulp.task('default', gulp.series('sass'));
