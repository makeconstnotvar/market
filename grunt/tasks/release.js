module.exports = [
    'clean:admin-release',
    'htmlmin:admin-templates',
    'html2js:admin',
    'concat:admin-js',
    'concat:admin-css',
    'uglify:admin',
    'cssmin:admin',
    'copy:admin-release',
    'injector:admin-release-js',
    'injector:admin-release-css',
    'htmlmin:admin-views',
    'clean:admin-temp',
];