module.exports = {
    'admin-js': {
        src: [
            '<%= dirs.shared %>/libs/angular.js',
            '<%= dirs.shared %>/libs/angular.router.js',
            '<%= dirs.shared %>/libs/*.js',
            '<%= dirs.shared %>/libs/ace/ace.js',
            '<%= dirs.shared %>/libs/ace/*.js',
            '!<%= dirs.shared %>/libs/ace/worker-html.js',
            '<%= dirs.shared %>/*.js',
            '<%= dirs.adminWeb %>/app/modules.js',
            '<%= dirs.adminWeb %>/app/index.js',
            '<%= dirs.adminBuildTemp %>/templates.js',
            '<%= dirs.adminWeb %>/app/**/*.js'
        ],
        dest: '<%= dirs.adminBuildTemp %>/script.js'
    },
    'admin-css': {
        src: [
            '<%= dirs.shared %>/css/bootstrap.css',
            '<%= dirs.shared %>/css/*.css',
            '<%= dirs.adminWeb %>/css/*.css',
            //'<%= dirs.adminWeb %>/css/mods.css',
            '<%= dirs.adminWeb %>/app/**/*.css'
        ],
        dest: '<%= dirs.adminBuildTemp %>/styles.css'
    }
};