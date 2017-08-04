const gma = require('./grunt/admin'),
    gmc = require('./grunt/client'),
    gt = require('./grunt/tasks'),
    loader = require('load-grunt-tasks');

module.exports = function (grunt) {
    loader(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: Object.assign(gma.clean, gmc.clean),
        concat: Object.assign(gma.concat, gmc.concat),
        copy: Object.assign(gma.copy, gmc.copy),
        cssmin: Object.assign(gma.cssmin, gmc.cssmin),
        dirs: Object.assign(gma.dirs, gmc.dirs),
        html2js: Object.assign(gma.html2js, gmc.html2js),
        htmlmin: Object.assign(gma.htmlmin, gmc.htmlmin),
        imagemin: Object.assign(gma.imagemin, gmc.imagemin),
        less: Object.assign(gma.less, gmc.less),
        injector: Object.assign(gma.injector, gmc.injector),
        uglify: Object.assign(gma.uglify, gmc.uglify)
    });

    grunt.registerTask('debug', gt.debug);
    grunt.registerTask('release', gt.release);
};