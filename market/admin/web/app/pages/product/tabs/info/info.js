ProductInfoCtrl.$inject = ['$scope', '$state', 'beautify', 'translit'];

function ProductInfoCtrl($scope,  $state, beautify, translit) {
    $scope.utils = $scope.utils || {};

    $scope.makeUrl = function () {
        $scope.product.url = translit($scope.product.name);
    };

    $scope.btf = function (field, text) {
        $scope.product[field] = beautify(text);
    };

    $scope.hideUrlError = function () {
        $scope.noUrlError = false;
    };

    $scope.showCategories = function () {
        if ($scope.product._id) {
            $scope.save().then(function () {
                $state.go('root.categories.add', {pid: $scope.product._id});
            });
        }
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



angular.module('controller').controller('ProductInfoCtrl', ProductInfoCtrl);
