function Parameter($http, Base) {
    var item = {
        
    };
    Base.call(item, 'parameter');

    return item;
}

Parameter.$inject = ['$http', 'Base'];

angular.module('entity').factory('Parameter', Parameter);