module.exports = {
    'admin': {
        options: {
            base: '<%= dirs.adminBuildTemp %>/tmpl',
            rename:function (moduleName) {
                return 'admin/' + moduleName;
            },
            module: 'admin-templates'
        },
        src: ['<%= dirs.adminBuildTemp %>/tmpl/**/*.html'],
        dest: '<%= dirs.adminBuildTemp %>/templates.js'
    }
};