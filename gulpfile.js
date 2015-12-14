/*jshint node: true */
/*jshint esnext: true */
"use strict";

var gulp = require('gulp'),
    path = require('path'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    changed = require('gulp-changed');

gulp.task('sass', () => {
    gulp.src('./app/assets/scss/**/*.scss')
        .pipe(changed('./app/public/css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/public/css'))
        .pipe(livereload());
});

gulp.task('babel', () => {
    gulp.src('./app/assets/es6/**/*.es6')
        .pipe(changed('./app/public/js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./app/public/js'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./app/assets/scss/**/*', ['sass']);
    gulp.watch('./app/assets/es6/**/*', ['babel']);
});

gulp.task('default', ['sass', 'babel']);
