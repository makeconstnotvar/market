function ProductDeleteCtrl($scope, $stateParams, $state, Product, _) {
    var toState = $state.current.data.toState;
    Product.select({query:{_id:$stateParams.pid}}).then(function (response) {
        $scope.product = response.data;
    });

    $scope.ok = function (id) {
        Product.remove(id).then(function () {
            $state.go(toState.list);
        });
    };

    $scope.cancel = function () {
        $state.go(toState.list);
    };
}

ProductDeleteCtrl.$inject = ['$scope', '$stateParams', '$state', 'Product', '_'];

angular.module('controller').controller('ProductDeleteCtrl', ProductDeleteCtrl);
