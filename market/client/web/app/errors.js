function errorHandlerInterceptor($q, $injector, $window) {
    return {
        responseError: function (rejection) {
            if (rejection.status == 404){
               var $rootScope =  $injector.get('$rootScope');
                $rootScope.$broadcast('error:not-found')
            }
                //$window.location.href = '/admin/login';
            /*if (rejection.status == 500)
                $injector.get('$rootScope');*/
            return $q.reject(rejection);
        }
    };
}


errorHandlerInterceptor.$inject = ['$q', '$injector', '$window'];

angular.module('router').factory('errorHandlerInterceptor', errorHandlerInterceptor);