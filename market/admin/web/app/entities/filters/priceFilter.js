function PriceFilter() {
    return function (price) {
        return 'Купить за ' + price + ' <i class="fa fa-rub"></i>';
    };
}

angular.module('entity').filter('PriceFilter', PriceFilter);