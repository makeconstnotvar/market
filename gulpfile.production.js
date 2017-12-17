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

let injectList = [
        'build/client/scripts/ie-*.js',
        'build/client/scripts/browser-*.js',
        'build/client/styles/styles-*.css'
    ],

    favicons = ['market/favicon/**/*',],
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
        'build/ie.js',
        'build/browser.js'
    ],
    images = [
        'market/client/web/img/**/*'
    ],
    styles = [
        'build/styles.css',

    ],
    loading = [
        'build/loading.css'

    ],
    serverJs = [
        'build/server.js'
    ],
    pugs = [
        'market/client/web/views/browser.pug',
        'market/client/web/views/server.pug'
    ],
    destination = 'build/client/web';

gulp.task('application', function () {
    return gulp.src(application, {base: 'market'})
        .pipe(gulp.dest('build'));
});
gulp.task('favicons', function () {
    return gulp.src(favicons, {base: './market'})
        .pipe(gulp.dest(destination));
});
gulp.task('json', function () {
    return gulp.src(json)
        .pipe(gulp.dest('build'));
});
gulp.task('scripts', function () {
    return gulp.src(browserJs)
        .pipe(hash())
        .pipe(gulp.dest(`${destination}/scripts`));
});
gulp.task('loading', function () {
    return gulp.src(loading, {base: '.'})
        .pipe(clean())
        .pipe(gulp.dest(`${destination}/scripts`));
});
gulp.task('styles', function () {
    return gulp.src(styles)
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
        .pipe(gulp.dest(destination+'/styles'))
});
gulp.task('loadingCss', function () {
    return gulp
        .src(loadingCss)
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(gulp.dest(destination+'/styles'))
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

gulp.task('move-to-production', ['commonCss','loadingCss','application', 'favicons', 'json', 'scripts', 'loading', 'styles', 'server', 'images'], function () {
    const files = gulp.src(injectList);
    return gulp.src(pugs)
        .pipe(inject(files, {ignorePath: 'build/client'}))
        .pipe(pug())
        .pipe(gulp.dest(`${destination}/views`));
});

function tildaResolver(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }
    return { file: url };
}
