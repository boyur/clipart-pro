'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    uncss = require('gulp-uncss'),
    rename = require("gulp-rename"),
    prefix = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('sass', function () {
    return gulp.src('./sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css'));

});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('mini-css', function() {
    return gulp.src('./css/*.css')
        .pipe(cleanCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function () {
    var files = [
        '*.html',
        'css/*.css'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});