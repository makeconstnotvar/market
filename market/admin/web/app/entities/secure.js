function Secure($http) {
    return {
        login: function (passport) {
            return $http.post('/admin/login', passport)
        },
        logout: function () {
            return $http.post('/admin/api/auth/logout')
        }
    };
}
Secure.$inject = ['$http'];

angular.module('entity').factory('Secure', Secure);

