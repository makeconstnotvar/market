function ProductCategoryCtrl($scope, $stateParams, $state, Product, Category, $q, _) {
    var toState = $state.current.data.toState;
    Product.select({query:{_id:$stateParams.pid}}).then(function (response) {
        $scope.product = response.data;

        Category.selectAll({order: {order: 1}}).then(function (response) {
            $scope.categories = response.data;
        });
    });

     $scope.save = function () {
        Product.category($scope.product).then(function () {
            $state.go(toState.main, {pid: $scope.product._id})
        });
    };

    $scope.remove = function (id) {
        $state.go(toState.categoryDelete, {cid: id});
    };

    $scope.edit = function (id) {
        $state.go(toState.categoryEdit, {cid: id});
    };

}

ProductCategoryCtrl.$inject = ['$scope', '$stateParams', '$state', 'Product', 'Category', '$q', '_'];

angular.module('controller').controller('ProductCategoryCtrl', ProductCategoryCtrl);
