module.exports = {
    'admin-debug-js': {
        options: {
            template: '<%= dirs.adminWeb %>/views/source.dot',
            addRootSlash: true,
            ignorePath: '<%= dirs.adminWeb %>',
            starttag: '<!-- injector:js_all -->',
            transform: function (filepath) {
                return '<script src="/admin'+filepath+'"></script>'
            }
        },
        files: {
            '<%= dirs.adminWeb %>/views/layout.dot': [
                '<%= dirs.adminWebTemp %>/libs/ace/ace.js',
                '<%= dirs.adminWebTemp %>/libs/ace/*.js',
                '<%= dirs.adminWebTemp %>/libs/angular.js',
                '<%= dirs.adminWebTemp %>/libs/angular-ace.js',
                '<%= dirs.adminWebTemp %>/libs/*.js',
                '<%= dirs.adminWebTemp %>/*.js',
                '<%= dirs.adminWeb %>/app/modules.js',
                '<%= dirs.adminWeb %>/app/index.js',
                '<%= dirs.adminWeb %>/app/*.js',
                '<%= dirs.adminWeb %>/app/**/*.js']
        }
    },
    'admin-debug-css': {
        options: {
            template: '<%= dirs.adminWeb %>/views/layout.dot',
            addRootSlash: true,
            //ignorePath: '<%= dirs.adminWeb %>/',
            ignorePath: '<%= dirs.adminWeb %>/',
            starttag: '<!-- injector:css_all -->',
            transform: function (filepath) {
                return '<link rel="stylesheet" href="/admin'+filepath+'">';

            }
        },
        files: {
            '<%= dirs.adminWeb %>/views/layout.dot': [
                '<%= dirs.adminWebTemp %>/css/bootstrap.css',
                '<%= dirs.adminWebTemp %>/css/*.css',
                '<%= dirs.adminWeb %>/css/bootstrap.custom.css',
                '<%= dirs.adminWeb %>/css/styles.css',
                '<%= dirs.adminWeb %>/css/*.css',

                '<%= dirs.adminWeb %>/app/**/*.css']
        }
    },
    'admin-release-js': {
        options: {
            template: '<%= dirs.adminWeb %>/views/source.dot',
            addRootSlash: '',
            ignorePath: '<%= dirs.adminBuild %>/web',
            starttag: '<!-- injector:js_all -->',
            transform: function (filepath) {
                return '<script src="/admin/'+filepath+'"></script>'
            }
        },
        files: {
            '<%= dirs.adminBuild %>/web/views/layout.dot': [
                '<%= dirs.adminBuild %>/web/js/*.js',
                //'!<%= dirs.adminBuild %>/web/js/worker-html.js'
            ]
        }
    },
    'admin-release-css': {
        options: {
            template: '<%= dirs.adminBuild %>/web/views/layout.dot',
            addRootSlash: '',
            ignorePath: '<%= dirs.adminBuild %>/web',
            starttag: '<!-- injector:css_all -->',
            transform: function (filepath) {
                return '<link rel="stylesheet" href="/admin/'+filepath+'">';

            }
        },
        files: {
            '<%= dirs.adminBuild %>/web/views/layout.dot': [
                '<%= dirs.adminBuild %>/web/css/*.css']
        }
    }
};