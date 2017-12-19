let gulp = require('gulp'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug');

let commonCss = [
        'market/client/web/styles/common.scss',
    ],
    loadingCss = [
        'market/client/web/styles/loading.scss',
    ],
    injectJs = [
        'build/browser.js'
    ],
    injectCss = [
        'build/styles.css'
    ],
    pugs = [
        'market/client/web/views/browser.pug',
        'market/client/web/views/server.pug'
    ],
    destination = 'build';

function tildaResolver(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }
    return { file: url };
}

gulp.task('commonCss', function () {
    return gulp
        .src(commonCss)
        //.pipe(sourcemaps.init())
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        //.pipe(clean())
        .pipe(gulp.dest(destination))
});
gulp.task('loadingCss', function () {
    return gulp
        .src(loadingCss)
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(gulp.dest(destination))
});


gulp.task('inject', function () {
    const cssFiles = gulp.src(injectCss);
    const jsFiles = gulp.src(injectJs);
    return gulp.src(pugs)
        .pipe(inject(cssFiles, {ignorePath: 'build',addPrefix:'styles'}))
        .pipe(inject(jsFiles, {ignorePath: 'build',addPrefix:'scripts'}))
        .pipe(pug())
        .pipe(gulp.dest('market/client/web/views'));
});

gulp.task('watch', ['commonCss'], function () {
    return gulp.watch([
        'market/client/web/styles/**/*.scss',
        'market/client/web/app/**/*.scss'
    ], ['default'])
});

gulp.task('default',['commonCss','loadingCss','inject']);