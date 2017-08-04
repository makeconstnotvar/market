function Templates($http, Base) {
    var item = {};
    Base.call(item, 'template');

    return item;
}

Templates.$inject = ['$http', 'Base'];

angular.module('entity').factory('Templates', Templates);