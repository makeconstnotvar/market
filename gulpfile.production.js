"use strict";

let gulp = require('gulp'),
    inject = require('gulp-inject'),
    hash = require('gulp-hash'),
    del = require('del'),
    clean = require('gulp-clean-css'),
    pug = require('gulp-pug'),
    imagemin = require('gulp-imagemin');

let injectList = [
        'build/production/client/scripts/ie-*.js',
        'build/production/client/scripts/browser-*.js',
        'build/production/client/styles/styles-*.css'
    ],
    application = [
        'start.js',
        'start-static.js',
        'root.js',

        'server/**/*',
        'config/web.config',
        'config/robots.txt',
        'config/sitemap.xml',
        'client/*.js',
        'client/config.json',
        'client/favicon/**/*',
        'client/fonts/**/*',
        'client/files/**/*',

        'client/resources/**/*',
        'client/scripts/**/*',
        'client/videos/**/*',
    ],
    browserJs = [
        'build/ie.js',
        'build/browser.js'
    ],
    styles = [
        'build/styles.css'
    ],
    serverJs = [
        'build/server.js'
    ],
    loadingCss = [
        'market/client/web/styles/loading.scss',
    ],
    pugs = [
        'market/client/web/views/browser.pug',
        'market/client/web/views/server.pug'
    ],
    destination = 'build/client';


gulp.task('application', function () {
    return gulp.src(application, {"base": "."})
        .pipe(gulp.dest(destination));
});

gulp.task('json', function () {
    return gulp.src('config/package.json')
        .pipe(gulp.dest(destination));
});

gulp.task('scripts', function () {
    return gulp.src(scripts).pipe(hash())
        .pipe(gulp.dest(`${destination}/client/scripts`));
});

gulp.task('styles', function () {
    return gulp.src(styles).pipe(hash())
        .pipe(gulp.dest(`${destination}/client/styles`));
});
gulp.task('server', function () {
    return gulp.src(server).pipe(gulp.dest(`${destination}/client/scripts`));
});
gulp.task('progress', function () {
    return gulp.src(progress)
        .pipe(clean())
        .pipe(gulp.dest(`${destination}/client/styles`));
});

gulp.task('images',function () {
    gulp.src('client/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(`${destination}/client/images`))
});

gulp.task('move-to-production', ['application', 'json', 'scripts', 'styles', 'server', 'progress','images'], function () {
    const files = gulp.src(injectList);
    return gulp.src(pugs)
        .pipe(inject(files, {ignorePath: 'build/production/client'}))
        .pipe(pug())
        .pipe(gulp.dest(`${destination}/client/views`));
});

