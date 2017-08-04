module.exports = {
    'admin': {
        files: [{
            expand: true,
            cwd: '<%= dirs.adminBuildTemp %>',
            src: ['*.css'],
            dest: '<%= dirs.adminBuild %>/web/css/',
            ext: '.min.css'
        }],
        options: {
            shorthandCompacting: false,
            roundingPrecision: -1,
            keepSpecialComments: 0
        }
    }
};