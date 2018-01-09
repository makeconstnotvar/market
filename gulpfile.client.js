let gulp = require('gulp'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug');

let commonCss = [
        'market/client/web/styles/common.scss',
    ],
    loadingCss = [
        'market/client/web/styles/loading.scss',
    ],
    injectJs = [
        'common.js',
        'libs.js',
        'browser.js'
    ],
    injectCss = [
        'styles.css'
    ],
    pugs = [
        'market/client/web/views/browser.pug',
        'market/client/web/views/server.pug'
    ],
    destination = 'build/client';

function tildaResolver(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }
    return {file: url};
}

gulp.task('commonCss', function () {
    return gulp
        .src(commonCss)
        .pipe(sourcemaps.init())
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination))
});
gulp.task('loadingCss', function () {
    return gulp
        .src(loadingCss)
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(gulp.dest(destination))
});


gulp.task('inject', function () {
    const cssFiles = gulp.src(injectCss.map(css => path.join(destination, css)));
    const jsFiles = gulp.src(injectJs.map(js => path.join(destination, js)));
    return gulp.src(pugs)
        .pipe(inject(cssFiles, {ignorePath: destination, addPrefix: 'styles'}))
        .pipe(inject(jsFiles, {ignorePath: destination, addPrefix: 'scripts'}))
        .pipe(pug())
        .pipe(gulp.dest('market/client/web/views'));
});

gulp.task('watch', gulp.parallel('commonCss'), gulp.watch([
        'market/client/web/styles/**/*.scss',
        'market/client/web/app/**/*.scss'])
);

gulp.task('default', gulp.series('commonCss', 'loadingCss', 'inject'));