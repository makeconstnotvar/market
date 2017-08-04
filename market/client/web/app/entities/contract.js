function Contract($http, $stateParams) {
    return {
        getById: function (id) {
            return $http.post('/api/contract/select', {id: id})
        },

        placeContract: function (item) {
            return $http.post('/api/contract/place', item);
        },
        postPosition: function (position) {
            return $http.post('/api/contract/position', position);
        },
        put: function (item) {
            return $http.post('/api/contract/update', item);
        },
        getCartStatus: function () {
            return $http.post('/api/contract/status');
        },
        getCart: function () {
            return $http.post('/api/contract/cart');
        }
    };
}

Contract.$inject = ['$http', '$stateParams'];

angular.module('entity').service('Contract', Contract);
