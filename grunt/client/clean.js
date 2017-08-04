module.exports = {
    'client-debug': ['<%= dirs.clientWebTemp %>'],
    'client-release': ['<%= dirs.clientBuild %>/**/*', 'build/*'],
    'client-temp': ['<%= dirs.clientBuildTemp %>']
};
