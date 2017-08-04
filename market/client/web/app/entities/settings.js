function Settings($http) {
    return {

        meta: function (item) {
            return $http.post('/api/settings/meta', {state: item.state, url: item.url})
        }
    };
}
Settings.$inject = ['$http', '$stateParams'];

angular.module('entity').factory('Settings', Settings);

