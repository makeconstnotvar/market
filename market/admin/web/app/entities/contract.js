function Contract($http, Base) {
    var item ={};
    Base.call(item, 'contract');

    return item;
}

Contract.$inject = ['$http', 'Base'];

angular.module('entity').service('Contract', Contract);
