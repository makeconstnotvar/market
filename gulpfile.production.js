let gulp = require('gulp'),
    path = require('path'),
    inject = require('gulp-inject'),
    hash = require('gulp-hash'),
    concat = require('gulp-concat'),
    del = require('del'),
    clean = require('gulp-clean-css'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin');

let favicons = ['market/favicon/**/*',],
    application = [
        'market/api/**/*',
        'market/start.js',
        'market/config.json',
        'market/client/*.js',
        'market/client/router/**/*',
        'market/client/web/fonts/**/*',
        'market/client/web/ftp/**/*',
        'market/client/web/views/*.html',
    ],
    commonCss = [
        'market/client/web/styles/common.scss',
    ],
    loadingCss = [
        'market/client/web/styles/loading.scss',
    ],
    json = ['data/package.json'],
    browserJs = [
        'ie.js',
        'browser.js'
    ],
    images = [
        'market/client/web/img/**/*'
    ],
    bowserCss = [
        'styles.css',

    ],
    loading = [
        'build/loading.css'

    ],
    serverJs = [
        'build/server.js'
    ],
    injectJs = [
        'build/client/web/scripts/ie-*.js',
        'build/client/web/scripts/browser-*.js'
    ],
    injectCss = [
        'build/client/web/styles/styles-*.css'
    ],
    pugs = [
        'market/client/web/views/browser.pug',
        'market/client/web/views/server.pug'
    ],
    destination = 'build/client/web',
    temp = 'build/temp';

gulp.task('application', function () {
    return gulp.src(application, {base: 'market'})
        .pipe(gulp.dest(temp));
});
gulp.task('favicons', function () {
    return gulp.src(favicons, {base: './market'})
        .pipe(gulp.dest(destination));
});
gulp.task('json', function () {
    return gulp.src(json)
        .pipe(gulp.dest(temp));
});
gulp.task('scripts', function () {
    return gulp.src(browserJs.map(js => path.join(temp,js)))
        .pipe(hash())
        .pipe(gulp.dest(`${destination}/scripts`));
});
gulp.task('loading', function () {
    return gulp.src(loading, {base: '.'})
        .pipe(clean())
        .pipe(gulp.dest(`${destination}/scripts`));
});
gulp.task('styles', function () {
    return gulp.src(bowserCss.map(css => path.join(temp,css)))
        .pipe(hash())
        .pipe(gulp.dest(`${destination}/styles`));
});
gulp.task('server', function () {
    return gulp.src(serverJs)
        .pipe(gulp.dest(`${destination}/scripts`));
});
gulp.task('images', function () {
    gulp.src(images)
        .pipe(imagemin())
        .pipe(gulp.dest(`${destination}/img`))
});
gulp.task('commonCss', function () {
    return gulp
        .src(commonCss)
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(clean())
        .pipe(hash())
        .pipe(gulp.dest(destination + '/styles'))
});
gulp.task('loadingCss', function () {
    return gulp
        .src(loadingCss)
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(gulp.dest(destination + '/styles'))
});
gulp.task('clean', function () {
    return del([
        'build/*',
        '!build/api',
        '!build/admin',
        '!build/client',
        '!build/start.js',
        '!build/config.json',
        '!build/package.json',
    ])
});

gulp.task('move-to-production', ['commonCss', 'loadingCss', 'application', 'favicons', 'json', 'scripts', 'loading', 'styles', 'server', 'images'], function () {
    const cssFiles = gulp.src(injectCss);
    const jsFiles = gulp.src(injectJs);
    return gulp.src(pugs)
        .pipe(inject(cssFiles, {ignorePath: 'build/client/web'}))
        .pipe(inject(jsFiles, {ignorePath: 'build/client/web'}))
        .pipe(pug())
        .pipe(gulp.dest(`${destination}/views`));
});

function tildaResolver(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }
    return {file: url};
}
