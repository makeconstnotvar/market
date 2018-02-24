ProductMainCtrl.$inject = ['$scope', '$state', 'beautify', 'config'];

function ProductMainCtrl($scope, $state, beautify, config) {
    var toState = $state.current.data.toState;

    $scope.utils = $scope.utils || {};

    $scope.btf = function (field, text) {
        $scope.product[field] = beautify(text);
    };

    $scope.hideUrlError = function () {
        $scope.noUrlError = false;
    };

    $scope.showCategories = function () {
        $scope.save().then(function () {
            $state.go(toState.category, {pid: $scope.product._id});
        });
    };

    $scope.addStockText = function (force) {
        if (!force || !$scope.product.stockText)
            $scope.product.stockText = config.stockText;
    };

    $scope.plus = function () {
        if (!$scope.product.count) {
            $scope.product.count = 1;
        }
        else {
            $scope.product.count++;
        }
    };

    $scope.minus = function () {
        if (!$scope.product.count || $scope.product.count <= 1) {
            $scope.product.count = 0;
        }
        else {
            $scope.product.count--;
        }
    };


}


angular.module('controller').controller('ProductMainCtrl', ProductMainCtrl);
