ProductsNewCtrl.$inject = ['$scope', '$state', 'Product', 'translit'];

function ProductsNewCtrl($scope, $state, Product, translit) {
    var toState = $state.current.data.toState;

    $scope.product = {};

    $scope.nameToUrl = function () {
        $scope.product.url = translit($scope.product.name);
    };

    $scope.save = function () {
        if (!$scope.product.name) {
            $rootScope.$broadcast('status:error', 'Требуется название продукта');
        }
        else {
            Product.insert($scope.product)
                .then(function (response) {
                    $rootScope.$broadcast('status:success', 'Продукт создан');
                    $state.go(toState.main, {pid: response.data}, {reload: false})
                },function (response) {
                    $rootScope.$broadcast('status:error', 'Продукт не создан<br/>' + response)
                })

        }
    };
}
angular.module('controller').controller('ProductsNewCtrl', ProductsNewCtrl);
