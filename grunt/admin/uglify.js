module.exports = {
    'admin': {
        src: ['<%= dirs.adminBuildTemp %>/script.js'],
        dest: '<%= dirs.adminBuild %>/web/js/script.min.js'
    }
};