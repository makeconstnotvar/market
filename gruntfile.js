const gma = require('./grunt/admin'),

    gt = require('./grunt/tasks'),
    loader = require('load-grunt-tasks');

module.exports = function (grunt) {
    loader(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: gma.clean,
        concat: gma.concat,
        copy: gma.copy,
        cssmin: gma.cssmin,
        dirs: gma.dirs,
        html2js: gma.html2js,
        htmlmin: gma.htmlmin,
        imagemin: gma.imagemin,
        less: gma.less,
        injector: gma.injector,
        uglify: gma.uglify
    });

    grunt.registerTask('debug', gt.debug);
    grunt.registerTask('release', gt.release);
};