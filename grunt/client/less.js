module.exports = {
    'client-debug': {
        options: {
            ieCompat: false
        },
        files: [
            {expand: true, cwd: '<%= dirs.clientWeb %>/app/', src: ['**/*.less'], dest: '<%= dirs.clientWebTemp %>/css/app', ext: '.css'},
            {expand: true, cwd: '<%= dirs.clientWeb %>/css/', src: ['*.less'], dest: '<%= dirs.clientWebTemp %>/css', ext: '.css'}
        ]
    },
    'client-release': {
        options: {
            ieCompat: false
        },
        files: [
            {expand: true, cwd: '<%= dirs.clientWeb %>/css/', src: ['*.less'], dest: '<%= dirs.clientBuildTemp %>/css', ext: '.css'},
            {expand: true, cwd: '<%= dirs.clientWeb %>/app/', src: ['**/*.less'], dest: '<%= dirs.clientBuildTemp %>/css/app', ext: '.css'}
            
        ]
    }
};