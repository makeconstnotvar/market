module.exports = {
    'admin-templates': {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: [
            {
                expand: true,
                cwd: '<%= dirs.adminWeb %>/app/',
                src: ['**/*.html'],
                dest: '<%= dirs.adminBuildTemp %>/tmpl/'
            }
        ]
    },
    'admin-views': {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: [
            {
                expand: true,
                cwd: '<%= dirs.adminBuild %>/web/views',
                src: ['*.dot'],
                dest: '<%= dirs.adminBuild %>/web/views'
            }
        ]
    }
};