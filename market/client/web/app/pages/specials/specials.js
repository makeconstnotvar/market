SpecialsCtrl.$inject = ['$scope', '$rootScope', '$state', '$timeout', 'Product', 'Contract', 'Settings'];

function SpecialsCtrl($scope, $rootScope, $state, $timeout, Product, Contract, Settings) {

    Settings.meta({state: $state.current.name, url: $state.current.url}).then(function (response) {
        $rootScope.$broadcast('head:change', response.data);
    });

    Product.special().then(function (response) {
        $scope.products = response.data.products;
    });

    $scope.postPosition = function (product) {
        //одинаковый метод 3 раза повторяется
        if (product.available) {
            var position = {
                product: product._id,
                count: 1,
                sum: product.price
            };
            Contract.postPosition(position).then(function (response) {
                product.inCart = true;
                $rootScope.$broadcast('contract:change', response.data);
            })
        } else {
            product.blink = true;
            $timeout(function () {
                product.blink = false;
            }, 2000);
        }
    }
}

angular.module('controller').controller('SpecialsCtrl', SpecialsCtrl);

