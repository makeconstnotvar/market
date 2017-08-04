function errorHandlerInterceptor($q, $injector, $window) {
    return {
        responseError: function (rejection) {
            /*if (rejection.status == 401)
                $window.location.href = '/admin/login';*/
            if (rejection.status == 500)
                $injector.get('$rootScope');
            return $q.reject(rejection);
        }
    };
}


errorHandlerInterceptor.$inject = ['$q', '$injector', '$window'];

angular.module('router').factory('errorHandlerInterceptor', errorHandlerInterceptor);