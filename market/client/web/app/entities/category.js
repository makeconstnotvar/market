function Category($http) {
    return {
        getTree: function () {
            return $http.post('/api/category/list');
        }
    };
}

Category.$inject = ['$http'];

angular.module('entity').factory('Category', Category);