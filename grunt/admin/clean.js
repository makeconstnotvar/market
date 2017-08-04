module.exports = {
    'admin-debug': ['<%= dirs.adminWebTemp %>'],
    'admin-release': ['<%= dirs.adminBuild %>/**/*', '!<%= dirs.adminBuild %>/*.config'],
    'admin-temp': ['<%= dirs.adminBuildTemp %>']
};
