let gulp = require('gulp'),
    path = require('path'),
    ngHtml2Js = require("gulp-ng-html2js"),
    minifyHtml = require("gulp-minify-html"),
    sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean-css'),
    pug = require('gulp-pug');


let adminWeb = 'market/admin/web',
    destination = 'build/admin',
    shared = 'market/admin/shared';


gulp.task('templates', function () {
    return gulp.src(`${adminWeb}/app/**/*.html`)
        .pipe(minifyHtml({empty: true, spare: true, quotes: true}))
        .pipe(ngHtml2Js({moduleName: "admin-templates", prefix: "admin/"}))
        .pipe(concat("templates.js"))
        .pipe(gulp.dest(destination));

});
gulp.task('js', function () {
    return gulp
        .src([
            `${shared}/libs/angular.js`,
            `${shared}/libs/angular-router.js`,
            `${shared}/libs/*.js`,
            `${shared}/libs/ace/ace.js`,
            `${shared}/libs/ace/*.js`,
            `!${shared}/libs/ace/worker-html.js`,
            `${shared}/*.js`,
            `${adminWeb}/app/modules.js`,
            `${adminWeb}/app/index.js`,
            `${destination}/templates.js`,
            `${adminWeb}/app/**/*.js`
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination))
});
gulp.task('css', function () {
    return gulp
        .src([
            `${shared}/css/bootstrap.css`,
            `${shared}/css/*.css`,
            `${adminWeb}/css/*.css`,
            `${adminWeb}/app/**/*.css`
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination))
});
gulp.task('inject', function () {
    const cssFiles = gulp.src(`${destination}/styles.css`);
    const jsFiles = gulp.src(`${destination}/scripts.js`);
    return gulp.src([`${adminWeb}/views/index.pug`, `${adminWeb}/views/login.pug`])
        .pipe(inject(cssFiles, {ignorePath: destination, addPrefix: 'admin/styles'}))
        .pipe(inject(jsFiles, {ignorePath: destination, addPrefix: 'admin/scripts'}))
        .pipe(pug())
        .pipe(gulp.dest(`${adminWeb}/views`));
});
gulp.task('default', gulp.series('templates', 'js', 'css', 'inject'));