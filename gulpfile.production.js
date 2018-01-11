let gulp = require('gulp'),
    path = require('path'),
    inject = require('gulp-inject'),
    ngHtml2Js = require("gulp-ng-html2js"),
    minifyHtml = require("gulp-minify-html"),
    hash = require('gulp-hash-filename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    clean = require('gulp-clean-css'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin');
// client path
let favicons = ['market/favicon/**/*',],
    application = [

        'market/admin/*.js',
        'market/admin/web/fonts/**/*',
        'market/admin/router/**/*',
        'market/api/**/*',
        'market/start.js',
        'market/config.json',
        'market/client/*.js',
        'market/client/router/**/*',
        'market/client/web/fonts/**/*'
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
        'loading.css'

    ],
    serverJs = [
        'server.js'
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
    production = 'build/production',
    clientDestination = 'build/production/client/web',
    clientTemp = 'build/client';

// admin path
let adminWeb = 'market/admin/web',
    adminDestination = 'build/production/admin/web',
    adminTemp = 'build/admin',
    shared = 'market/admin/shared',
    concatJs = [
        `${shared}/libs/angular.js`,
        `${shared}/libs/angular-router.js`,
        `${shared}/libs/*.js`,
        `${shared}/libs/ace/ace.js`,
        `${shared}/libs/ace/*.js`,
        `!${shared}/libs/ace/worker-html.js`,
        `${shared}/*.js`,
        `${adminWeb}/app/modules.js`,
        `${adminWeb}/app/index.js`,
        `${adminTemp}/templates.js`,
        `${adminWeb}/app/**/*.js`

    ],
    concatCss = [
        `${shared}/css/bootstrap.css`,
        `${shared}/css/*.css`,
        `${adminWeb}/css/*.css`,
        `${adminWeb}/app/**/*.css`
    ],
    adminPugs = [
        `${adminWeb}/views/index.pug`,
        `${adminWeb}/views/login.pug`
    ];

//copy files
gulp.task('application', function () {
    return gulp.src(application, {base: 'market'})
        .pipe(gulp.dest(production));
});
gulp.task('package', function () {
    return gulp.src('package.json')
        .pipe(gulp.dest(production));
});

//client tasks
gulp.task('favicons', function () {
    return gulp.src(favicons, {base: './market'})
        .pipe(gulp.dest(clientDestination));
});
gulp.task('json', function () {
    return gulp.src(json)
        .pipe(gulp.dest(clientTemp));
});
gulp.task('scripts', function () {
    return gulp.src(browserJs.map(js => path.join(clientTemp, js)))
        .pipe(hash())
        .pipe(gulp.dest(`${clientDestination}/scripts`));
});
gulp.task('styles', function () {
    return gulp.src(bowserCss.map(css => path.join(clientTemp, css)))
        .pipe(hash())
        .pipe(gulp.dest(`${clientDestination}/styles`));
});
gulp.task('server', function () {
    return gulp.src(serverJs.map(js => path.join(clientTemp, js)))
        .pipe(gulp.dest(`${clientDestination}/scripts`));
});
gulp.task('images', function () {
    return gulp.src(images)
        .pipe(imagemin())
        .pipe(gulp.dest(`${clientDestination}/img`))
});
gulp.task('commonCss', function () {
    return gulp.src(commonCss)
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(clean())
        .pipe(hash())
        .pipe(gulp.dest(clientDestination + '/styles'))
});
gulp.task('loadingCss', function () {
    return gulp.src(loadingCss)
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(gulp.dest(clientDestination + '/styles'))
});
gulp.task('clean', function () {
    return del('build/*')
});
gulp.task('injectClient', function () {
    const cssFiles = gulp.src(injectCss);
    const jsFiles = gulp.src(injectJs);
    return gulp.src(pugs)
        .pipe(inject(cssFiles, {ignorePath: 'build/client/web'}))
        .pipe(inject(jsFiles, {ignorePath: 'build/client/web'}))
        .pipe(pug())
        .pipe(gulp.dest(`${clientDestination}/views`));
});
//admin task
gulp.task('templates', function () {
    return gulp.src(`${adminWeb}/app/**/*.html`)
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: "admin-templates",
            prefix: "admin/"
        }))
        .pipe(concat("templates.js"))
        .pipe(gulp.dest(adminTemp));

});
gulp.task('js', function () {
    return gulp
        .src(concatJs)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(hash())
        .pipe(gulp.dest(`${adminDestination}/scripts`))
});
gulp.task('css', function () {
    return gulp
        .src(concatCss)
        .pipe(concat('styles.css'))
        .pipe(clean())
        .pipe(hash())
        .pipe(gulp.dest(`${adminDestination}/styles`))
});
gulp.task('injectAdmin', function () {
    const cssFiles = gulp.src(`${adminDestination}/styles/styles-*.css`);
    const jsFiles = gulp.src(`${adminDestination}/scripts/scripts-*.js`);
    return gulp.src(adminPugs)
        .pipe(inject(cssFiles, {ignorePath: adminDestination, addPrefix: 'admin/'}))
        .pipe(inject(jsFiles, {ignorePath: adminDestination, addPrefix: 'admin/'}))
        .pipe(pug())
        .pipe(gulp.dest(`${adminDestination}/views`));
});
//result
gulp.task('default', gulp.series('commonCss', 'loadingCss', 'package', 'application', 'favicons', 'json', 'scripts', 'server', 'images', 'templates', 'js', 'css', 'injectClient', 'injectAdmin'));

function tildaResolver(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }
    return {file: url};
}
