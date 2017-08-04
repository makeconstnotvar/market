
Config.$inject =['$locationProvider', '$httpProvider'];

function Config ($locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);

    $httpProvider.interceptors.push('errorHandlerInterceptor');

    $httpProvider.interceptors.push('progressInterceptor');
}


angular.module('router').config(Config);