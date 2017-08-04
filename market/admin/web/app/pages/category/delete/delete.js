function CategoryDeleteCtrl($scope, $stateParams, $state, Category) {
    var toState = $state.current.data.toState;
    Category.select({query:{_id:$stateParams.cid}}).then(function (response) {
        $scope.category = response.data;
    });

    $scope.ok = function (id) {
        Category.remove(id).then(function () {
            $state.go(toState.list);
        });
    };

    $scope.cancel = function () {
        $state.go(toState.list);
    };
}

CategoryDeleteCtrl.$inject = ['$scope', '$stateParams', '$state', 'Category'];

angular.module('controller').controller('CategoryDeleteCtrl', CategoryDeleteCtrl);
