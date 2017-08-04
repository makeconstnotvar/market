

function CartCountFilter() {
    return function (price) {
        return price + ' шт.';
    };
}

angular.module('entity').filter('CartCountFilter', CartCountFilter);