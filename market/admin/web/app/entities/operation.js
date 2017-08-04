
Operation.$inject = ['$http'];

function Operation($http) {
    return {
        getSeo: function (item) {
            return $http.post('/admin/api/operations/getSeo', item)
        },
        sitemap: function (item) {
            return $http.post('/admin/api/operations/sitemap', item)
        },
        prerender: function (item) {
            return $http.post('/admin/api/operations/prerender', item)
        },
        yml: function (item) {
            return $http.post('/admin/api/operations/yml', item)
        },
        urls: function (item) {
            return $http.post('/admin/api/operations/urls', item)
        },
        resizeAll: function () {
            return $http.post('/admin/api/operations/resizeAll');
        },
        test: function () {
            //return $websocket('ws://fastlight.debug/admin/api/operations/test');
        },
        makeUrls: function () {
            return $http.post('/admin/api/operations/makeUrls');
        }
    };

}

angular.module('entity').factory('Operation', Operation);

