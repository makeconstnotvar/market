function Product($http) {
    return {
        list: function (filter) {
            return $http.post('/api/product.ts/list', {filter:filter});
        },
        view: function (id) {
            return $http.post('/api/product.ts/view', {id:id});
        },
        special: function () {
            return $http.post('/api/product.ts/special');
        }
    };
}

Product.$inject = ['$http'];

angular.module('entity').factory('Product', Product);
