function Category($http, Base) {
    var item = {
        changeTemplate: function (item) {
            return $http.post('/admin/api/category/template', item);
        }
    };

    Base.call(item, 'category');

    return item;
}

Category.$inject = ['$http', 'Base'];

angular.module('entity').factory('Category', Category);