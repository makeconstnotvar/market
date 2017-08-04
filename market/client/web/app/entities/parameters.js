function Parameters($http) {
    return {
        getList: function (catUrl) {
            return $http.post('/api/parameters/list', {catUrl: catUrl})
        },
        getActive: function (filter) {
            return $http.post('/api/parameters/active', filter)
        }
    };
}

Parameters.$inject = ['$http'];

angular.module('entity').factory('Parameters', Parameters);