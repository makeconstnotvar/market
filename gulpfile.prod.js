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

function tildaResolver(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }
    return {file: url};
}

// client path
let production = 'build/production',
    productionClientWeb = 'build/production/client/web',
    productionAdminWeb = 'build/production/admin/web',
    productionStaticWeb = 'build/production/static',
    clientTemp = 'build/client',
    adminTemp = 'build/admin',
    sourceAdminWeb = 'market/admin/web',
    shared = 'market/admin/shared',
    static = 'market/static';

//copy files
gulp.task('files', function () {
    return gulp.src([
        'market/admin/*.js',
        'market/admin/web/fonts/**/*',
        'market/admin/router/**/*',
        'market/api/**/*',
        'market/start.js',
        'market/start-static.js',
        'market/client/*.js',
        'market/client/router/**/*',
        'market/client/web/scripts/*',
        'market/client/web/fonts/*',
        `${static}/files/*`,
        `${static}/fonts/*`,
        `${static}/handlers/*`,
        `${static}/img/*`,
        `${static}/views/**/*`,
        `${static}/*`,
    ], {base: 'market'})
        .pipe(gulp.dest(production));
});
gulp.task('config:test', function () {
    return gulp.src('data/config.json', {base: 'data'})
        .pipe(gulp.dest(production));
});
gulp.task('config:prod', function () {
    return gulp.src('market/config.json', {base: 'data'})
        .pipe(gulp.dest(production));
});
gulp.task('package', function () {
    return gulp.src('package.json')
        .pipe(gulp.dest(production));
});
gulp.task('worker', function () {
    return gulp.src(`${shared}/libs/ace/worker-html.js`)
        .pipe(gulp.dest(`${productionAdminWeb}/scripts`));
});
gulp.task('favicons', function () {
    return gulp.src('market/favicon/**/*', {base: './market'})
        .pipe(gulp.dest(productionClientWeb));
});
gulp.task('json', function () {
    return gulp.src('data/package.json')
        .pipe(gulp.dest(clientTemp));
});

gulp.task('images', function () {
    return gulp.src('market/client/web/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(`${productionClientWeb}/img`))
});
//client tasks
gulp.task('hash:js', function () {
    return gulp.src([`${clientTemp}/ie.js`, `${clientTemp}/browser.js`], {base: clientTemp})
        .pipe(hash())
        .pipe(gulp.dest(`${productionClientWeb}/scripts`));
});
gulp.task('hash:css', function () {
    return gulp.src(path.join(clientTemp, 'styles.css'))
        .pipe(hash())
        .pipe(gulp.dest(`${productionClientWeb}/styles`));
});
gulp.task('server', function () {
    return gulp.src(`${clientTemp}/server.js`, {base: clientTemp})
        .pipe(gulp.dest(`${productionClientWeb}/scripts`));
});
gulp.task('client:css', function () {
    return gulp.src('market/client/web/styles/common.scss')
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(clean())
        .pipe(hash())
        .pipe(gulp.dest(productionClientWeb + '/styles'))
});
gulp.task('loading', function () {
    return gulp.src('market/client/web/styles/loading.scss')
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(gulp.dest(productionClientWeb + '/styles'))
});
gulp.task('inject:client', function () {
    const cssFiles = gulp.src('build/production/client/web/styles/styles-*.css');
    const jsFiles = gulp.src([
        'build/production/client/web/scripts/ie-*.js',
        'build/production/client/web/scripts/browser-*.js'
    ]);
    return gulp.src([
        'market/client/web/views/browser.pug',
        'market/client/web/views/server.pug'
    ])
        .pipe(inject(cssFiles, {ignorePath: '/build/production/client/web/'}))
        .pipe(inject(jsFiles, {ignorePath: '/build/production/client/web/'}))
        .pipe(pug())
        .pipe(gulp.dest(`${productionClientWeb}/views`));
});

//admin tasks
gulp.task('templates', function () {
    return gulp.src(`${sourceAdminWeb}/app/**/*.html`)
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
gulp.task('admin:js', function () {
    return gulp
        .src([
            `${shared}/libs/angular.js`,
            `${shared}/libs/angular-router.js`,
            `${shared}/libs/*.js`,
            `${shared}/libs/ace/ace.js`,
            `${shared}/libs/ace/*.js`,
            `!${shared}/libs/ace/worker-html.js`,
            `${shared}/*.js`,
            `${sourceAdminWeb}/app/modules.js`,
            `${sourceAdminWeb}/app/index.js`,
            `${adminTemp}/templates.js`,
            `${sourceAdminWeb}/app/**/*.js`
        ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(hash())
        .pipe(gulp.dest(`${productionAdminWeb}/scripts`))
});
gulp.task('admin:css', function () {
    return gulp
        .src([
            `${shared}/css/bootstrap.css`,
            `${shared}/css/*.css`,
            `${sourceAdminWeb}/css/*.css`,
            `${sourceAdminWeb}/app/**/*.css`
        ])
        .pipe(concat('styles.css'))
        .pipe(clean())
        .pipe(hash())
        .pipe(gulp.dest(`${productionAdminWeb}/styles`))
});
gulp.task('inject:admin', function () {
    const cssFiles = gulp.src(`${productionAdminWeb}/styles/styles-*.css`);
    const jsFiles = gulp.src(`${productionAdminWeb}/scripts/scripts-*.js`);
    return gulp.src([
        `${sourceAdminWeb}/views/index.pug`,
        `${sourceAdminWeb}/views/login.pug`
    ])
        .pipe(inject(cssFiles, {ignorePath: productionAdminWeb, addPrefix: 'admin'}))
        .pipe(inject(jsFiles, {ignorePath: productionAdminWeb, addPrefix: 'admin'}))
        .pipe(pug())
        .pipe(gulp.dest(`${productionAdminWeb}/views`));
});

//static tasks
gulp.task('static:css', function () {
    return gulp.src('market/static/styles/common.scss')
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(clean())
        .pipe(hash())
        .pipe(gulp.dest(`${productionStaticWeb}/styles`))
});
gulp.task('static:js', function () {
    return gulp.src([
        'market/static/scripts/jquery.js',
        'market/static/scripts/sneak.js',
        'market/static/scripts/flipclock.js',
        'market/static/scripts/*.js'
    ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(hash())
        .pipe(gulp.dest(`${productionStaticWeb}/scripts`))
});

gulp.task('static:inject', function () {
    const cssFiles = gulp.src(`${productionStaticWeb}/styles/styles-*.css`);
    const jsFiles = gulp.src(`${productionStaticWeb}/scripts/scripts-*.js`);
    return gulp.src(`${productionStaticWeb}/views/index.pug`)
        .pipe(inject(cssFiles, {ignorePath: productionStaticWeb}))
        .pipe(inject(jsFiles, {ignorePath: productionStaticWeb}))
        .pipe(gulp.dest(`${productionStaticWeb}/views`));
});

//result
gulp.task('build:prod', gulp.series('client:css', 'loading', 'package', 'worker', 'files', 'config:prod', 'favicons', 'json', 'hash:js', 'hash:css', 'server', 'images', 'templates', 'admin:js', 'admin:css', 'inject:client', 'inject:admin'));
gulp.task('build:test', gulp.series('client:css', 'loading', 'package', 'worker', 'files', 'config:test', 'favicons', 'json', 'hash:js', 'hash:css', 'server', 'images', 'templates', 'admin:js', 'admin:css', 'inject:client', 'inject:admin'));


gulp.task('clean:prod', function () {
    return del('build/production')
});
gulp.task('clean:files', function () {
    return del([
        'market/client/web/app/**/*.js',
        'market/client/web/app/**/*.map',
        'market/client/web/app/**/*.json',
    ])
});