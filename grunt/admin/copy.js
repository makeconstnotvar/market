module.exports = {
    'admin-debug': {
        files: [
            {expand: true, cwd: '<%= dirs.shared %>/libs/', src: ['**/*.js'], dest: '<%= dirs.adminWebTemp %>/libs'},
            {expand: true, cwd: '<%= dirs.shared %>/css/', src: ['*.css'], dest: '<%= dirs.adminWebTemp %>/css'},
            {expand: true, cwd: '<%= dirs.shared %>/', src: ['*.js'], dest: '<%= dirs.adminWebTemp %>'}
        ]
    },
    'admin-release': {
        files: [
            {
                expand: true,
                cwd: '<%= dirs.shared %>/libs/ace',
                src: ['worker-html.js'],
                dest: '<%= dirs.adminBuild %>/web/js'
            },
            {expand: true, cwd: '<%= dirs.adminWeb %>', src: ['*.js'], dest: '<%= dirs.adminBuild %>/web'},
            {
                expand: true,
                cwd: '<%= dirs.adminWeb %>/views',
                src: ['**/*.dot', '!layout.dot', '!source.dot'],
                dest: '<%= dirs.adminBuild %>/web/views'
            },
            {expand: true, cwd: 'market/', src: ['*.ico', '*.js', '*.json'], dest: '/build'},
            {expand: true, cwd: 'market/admin/', src: ['*.*'], dest: '<%= dirs.adminBuild %>'},
            //{expand: true, cwd: 'market/admin/api', src: ['**/*'], dest: '<%= dirs.adminBuild %>/api'},
            {expand: true, cwd: 'market/admin/router', src: ['**/*'], dest: '<%= dirs.adminBuild %>/router'}
        ]
    }
};