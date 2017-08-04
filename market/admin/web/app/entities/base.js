function Base($http) {

    return function (entityName) {
        this.select = function (options) {
            return $http.post('/admin/api/' + entityName + '/select', options)
        };
        this.selectById = function (options) {
            return $http.post('/admin/api/' + entityName + '/selectById', options)
        };
        this.selectAll = function (options) {
            return $http.post('/admin/api/' + entityName + '/selectAll', options);
        };
        this.update = function (item) {
            return $http.post('/admin/api/' + entityName + '/update', item)
        };
        this.insert = function (item) {
            return $http.post('/admin/api/' + entityName + '/insert', item)
        };
        this.remove = function (id) {
            return $http.post('/admin/api/' + entityName + '/remove', {id:id})
        };
        this.count = function (query) {
            return $http.post('/admin/api/' + entityName + '/count', query)
        };
    };
}

Base.$inject = ['$http'];

angular.module('entity').factory('Base', Base);
