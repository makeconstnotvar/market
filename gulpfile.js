let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug');

let styles1 = [
        'market/client/web/styles/common.scss',
    ],
    styles2 = [
        'market/client/web/styles/loading.scss',
    ],
    injectJs = [
        'market/client/web/build/browser.js'
    ],
    injectCss = [
        'market/client/web/build/styles.css'
    ],
    pugs = [
        'market/client/web/views/browser.pug',
        'market/client/web/views/server.pug'
    ],
    destination = 'market/client/web/build';

gulp.task('styles1', function () {
    return gulp
        .src(styles1)
        //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(clean())
        .pipe(gulp.dest(destination))
});

gulp.task('styles2', function () {
    return gulp
        .src(styles2)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('loading.css'))
        .pipe(clean())
        .pipe(gulp.dest(destination))
});

gulp.task('inject', function () {
    const cssFiles = gulp.src(injectCss);
    const jsFiles = gulp.src(injectJs);
    return gulp.src(pugs)
        .pipe(inject(cssFiles, {ignorePath: 'market/client/web/build',addPrefix:'css'}))
        .pipe(inject(jsFiles, {ignorePath: 'market/client/web/build',addPrefix:'js'}))
        .pipe(pug())
        .pipe(gulp.dest('market/client/web/views'));
});

gulp.task('watch', ['styles1'], function () {
    return gulp.watch([
        'market/client/web/styles/**/*.scss',
        'market/client/web/app1/**/*.scss'
    ], ['default'])
});

gulp.task('default',['styles1','styles2','inject']);