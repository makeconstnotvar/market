let gulp = require('gulp'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

function tildaResolver(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }
    return {file: url};
}

let temp = 'build/static';

gulp.task('css', function () {
    return gulp.src('market/static/styles/common.scss')
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(temp))
});
gulp.task('scripts', function () {
    return gulp.src([
        'market/static/scripts/jquery.js',
        'market/static/scripts/sneak.js',
        'market/static/scripts/flipclock.js',
        'market/static/scripts/*.js'
    ])
    .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(temp))
});

gulp.task('inject', function () {
    const cssFiles = gulp.src(`${temp}/styles.css`);
    const jsFiles = gulp.src(`${temp}/scripts.js`);
    return gulp.src('market/static/views/index.pug')
        .pipe(inject(cssFiles, {ignorePath: temp, addPrefix: 'styles'}))
        .pipe(inject(jsFiles, {ignorePath: temp, addPrefix: 'scripts'}))
        .pipe(gulp.dest('market/static/views'));
});

gulp.task('watch', gulp.series('css', function watch() {
    return gulp.watch('market/static/styles/**/*.scss', gulp.series('css'))
}));

gulp.task('default', gulp.series('css', 'scripts', 'inject'));