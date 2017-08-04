function Product($http, Base) {

    var item = {
        category: function (item) {
            return $http.post('/admin/api/product/category', item)
        },
        copy:function (item) {
            return $http.post('/admin/api/product/copy', item)
        }
    };

    Base.call(item, 'product');

    return item;
}

Product.$inject = ['$http', 'Base'];

angular.module('entity').factory('Product', Product);
