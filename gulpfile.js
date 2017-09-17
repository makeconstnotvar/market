let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

let styles = [

    'market/client/web/styles/common.scss',
    //'market/client/web/app1/**/*.scss'
];



gulp.task('default', function () {
    return gulp
        .src(styles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('market/client/web/build'))
});

gulp.task('watch',['default'], function () {
    return gulp.watch([
        'market/client/web/styles/**/*.scss',
        'market/client/web/app1/**/*.scss'
    ], ['default'])
});
