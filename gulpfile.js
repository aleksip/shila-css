/* eslint-env node */

'use strict';

// Load Gulp and other tools.

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');

// Gulp tasks.

/**
 * Compiles Sass files.
 */
gulp.task('sass', function () {
    return gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
    ;
});

/**
 * Lints Sass files.
 */
gulp.task('lint', function () {
    return gulp.src('./*.scss')
        .pipe(sassLint())
        .pipe(sassLint.format())
    ;
});

/**
 * Gulp default task.
 */
gulp.task('default', ['sass']);
