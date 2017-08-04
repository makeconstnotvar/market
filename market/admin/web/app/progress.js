function progressInterceptor($rootScope, $q) {
    var loadingCount = 0;

    return {
        request: function (config) {
            if (++loadingCount === 1 && config.url.startsWith('/api'))
                $rootScope.$broadcast('loading:progress');
            return config || $q.when(config);
        },

        response: function (response) {
            if (--loadingCount === 0 && response.config.url.startsWith('/api'))
                $rootScope.$broadcast('loading:finish');
            return response || $q.when(response);
        },

        responseError: function (response) {
            if (--loadingCount === 0 && response.config.url.startsWith('/api'))
                $rootScope.$broadcast('loading:finish');
            return $q.reject(response);
        }
    };
}

progressInterceptor.$inject = ['$rootScope', '$q'];

angular.module('router').factory('progressInterceptor', progressInterceptor);

