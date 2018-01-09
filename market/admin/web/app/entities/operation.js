
Operation.$inject = ['$http'];

function Operation($http) {
    return {
        getSeo: function (item) {
            return $http.post('/admin/api/operations/getSeo', item)
        },
        sitemap: function (item) {
            return $http.post('/admin/api/operations/sitemap', item)
        },
        yml: function (item) {
            return $http.post('/admin/api/operations/yml', item)
        },
        resizeAll: function () {
            return $http.post('/admin/api/operations/resizeAll');
        }
    };

}

angular.module('entity').factory('Operation', Operation);

