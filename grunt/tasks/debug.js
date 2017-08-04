module.exports = [
    'clean:admin-debug',
    'clean:client-debug',
    'clean:client-temp',

    'copy:admin-debug',
    'copy:client-debug',

    'less:client-debug',

    'injector:admin-debug-js',
    'injector:admin-debug-css',

    'injector:client-debug-js',
    'injector:client-debug-css'
];