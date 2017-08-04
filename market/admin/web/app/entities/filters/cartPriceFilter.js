
function CartPriceFilter() {
    return function (price) {
        return price + ' <i class="fa fa-rub"></i>';
    };
}

angular.module('entity').filter('CartPriceFilter', CartPriceFilter);