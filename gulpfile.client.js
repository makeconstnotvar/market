let gulp = require('gulp'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug');

function tildaResolver(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }
    return {file: url};
}

let clientTemp = 'build/client';

gulp.task('css', function () {
    return gulp.src('market/client/web/styles/common.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(clientTemp))
});
gulp.task('loading', function () {
    return gulp.src('market/client/web/styles/loading.scss')
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(gulp.dest(clientTemp))
});
gulp.task('inject', function () {
    const cssFiles = gulp.src(`${clientTemp}/browser.js`);
    const jsFiles = gulp.src(`${clientTemp}/styles.css`);
    return gulp.src(['market/client/web/views/browser.pug', 'market/client/web/views/server.pug'])
        .pipe(inject(cssFiles, {ignorePath: clientTemp, addPrefix: 'styles'}))
        .pipe(inject(jsFiles, {ignorePath: clientTemp, addPrefix: 'scripts'}))
        .pipe(pug())
        .pipe(gulp.dest('market/client/web/views'));
});

gulp.task('watch', gulp.series('css', function watch() {
    return gulp.watch([
        'market/client/web/styles/**/*.scss',
        'market/client/web/app/**/*.scss'], gulp.series('css'))
}));

gulp.task('default', gulp.series('css', 'loading', 'inject'));