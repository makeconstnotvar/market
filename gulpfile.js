let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean-css'),
    sass = require('gulp-sass');

let styles = [
        'market/client/web/styles/common.scss',
    ],
    libs = [
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/zone.js/dist/zone.js',
    ],
    destination = 'market/client/web/build';

gulp.task('libs', function () {
    return gulp.src(libs)
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destination))
});

gulp.task('default', function () {
    return gulp
        .src(styles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(clean())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination))
});

gulp.task('watch', ['default'], function () {
    return gulp.watch([
        'market/client/web/styles/**/*.scss',
        'market/client/web/app1/**/*.scss'
    ], ['default'])
});
