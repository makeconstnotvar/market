const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

const libs = [
        'market/client/web/styles/bootstrap.scss',
        'market/client/web/styles/awesome.scss',
        'market/client/web/styles/roboto.scss'
    ],
    styles = [
        'market/client/web/styles/sticky.scss',
        'market/client/web/styles/roboto.scss',
        'market/client/web/app1/**/*.scss'
    ];


gulp.task('libs', function () {
    return gulp
        .src(libs)
        .pipe(sass())
        .pipe(concat('libs.css'))
        .pipe(gulp.dest('market/client/web/build'))
});
gulp.task('styles', function () {
    return gulp
        .src(styles)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('market/client/web/build'))
});

gulp.task('watch', function () {
    return gulp.watch(styles, ['styles'])
});

gulp.task('default', ['libs', 'styles']);