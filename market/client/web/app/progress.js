function progressInterceptor($rootScope, $q) {
    var loadingCount = 0;

    return {
        request: function (config) {
            if (config.url.startsWith('/api')) {
                loadingCount++;
                $rootScope.$broadcast('loading:begin', loadingCount);
            }
            return config || $q.when(config);
        },

        response: function (response) {
            if (response.config.url.startsWith('/api')) {
                loadingCount--;
                $rootScope.$broadcast('loading:finish', loadingCount);
            }
            return response || $q.when(response);
        },

        responseError: function (response) {
            if (response.config.url.startsWith('/api')) {
                loadingCount--;
                $rootScope.$broadcast('loading:finish', loadingCount);
            }
            return $q.reject(response);
        }
    };
}

progressInterceptor.$inject = ['$rootScope', '$q'];

angular.module('router').factory('progressInterceptor', progressInterceptor);

