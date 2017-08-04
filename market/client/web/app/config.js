Config.$inject = ['$locationProvider', '$httpProvider'];

function Config($locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    
    $httpProvider.interceptors.push('progressInterceptor');
    $httpProvider.interceptors.push('errorHandlerInterceptor');
}

angular.module('router').config(Config);