module.exports = {
    'client-debug-js': {
        options: {
            template: '<%= dirs.clientWeb %>/views/source.dot',
            addRootSlash: '',
            ignorePath: '<%= dirs.clientWeb %>',
            starttag: '<!-- injector:js_all -->'
        },
        files: {
            '<%= dirs.clientWeb %>/views/layout.dot': [
                '<%= dirs.clientWebTemp %>/libs/angular.js',
                '<%= dirs.clientWebTemp %>/libs/*.js',
                '!<%= dirs.clientWebTemp %>/libs/angular-ace.js',
                '!<%= dirs.clientWebTemp %>/libs/ace/',
                '<%= dirs.clientWebTemp %>/*.js',
                '<%= dirs.clientWeb %>/app/modules.js',
                '<%= dirs.clientWeb %>/app/index.js',
                '<%= dirs.clientWeb %>/app/progress.js',
                '<%= dirs.clientWeb %>/app/entities/**/*.js',
                '<%= dirs.clientWeb %>/app/*.js',
                '<%= dirs.clientWeb %>/app/**/*.js',
                '!<%= dirs.clientWeb %>/app/seo/*.js']
        }
    },
    'client-debug-css': {
        options: {
            template: '<%= dirs.clientWeb %>/views/layout.dot',
            addRootSlash: '',
            ignorePath: '<%= dirs.clientWeb %>/',
            starttag: '<!-- injector:css_all -->'
        },
        files: {
            '<%= dirs.clientWeb %>/views/layout.dot': [
                '<%= dirs.clientWebTemp %>/css/libs/bootstrap.css',
                '<%= dirs.clientWebTemp %>/css/libs/**/*.css',
                '<%= dirs.clientWebTemp %>/css/*.css',
                '<%= dirs.clientWebTemp %>/css/app/**/*.css'
            ]
        }
    },
    'client-release-js': {
        options: {
            template: '<%= dirs.clientWeb %>/views/source.dot',
            addRootSlash: '',
            ignorePath: '<%= dirs.clientBuild %>/web',
            starttag: '<!-- injector:js_all -->'
        },
        files: {
            '<%= dirs.clientBuild %>/web/views/layout.dot': ['<%= dirs.clientBuild %>/web/js/*.js']
        }
    },
    'client-release-css': {
        options: {
            template: '<%= dirs.clientBuild %>/web/views/layout.dot',
            addRootSlash: '',
            ignorePath: '<%= dirs.clientBuild %>/web',
            starttag: '<!-- injector:css_all -->'
        },
        files: {
            '<%= dirs.clientBuild %>/web/views/layout.dot': [
                '<%= dirs.clientBuild %>/web/css/*.css']
        }
    }
};