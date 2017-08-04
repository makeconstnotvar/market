function CategoryParentCtrl($scope, $stateParams, $state, Category, $q) {
    var toState = $state.current.data.toState;

    Category.selectAll({order: {order: 1}}).then(function (response) {
        $scope.categories = response.data;
        $scope.category = getCategory($stateParams.cid, $scope.categories);
    });

    $scope.save = function () {
        Category.update($scope.category).then(function () {
            $state.go(toState.edit, {cid: $scope.category._id})
        })
    };

    function getCategory(id, categories) {
        if (categories)
            for (var i = 0; i < categories.length; i++) {
                if (categories[i]._id == id) {
                    return categories[i];
                }
                var selected = getCategory(id, categories[i].children);
                if (selected) return selected;
            }
    }
}

CategoryParentCtrl.$inject = ['$scope', '$stateParams', '$state', 'Category', '$q'];

angular.module('controller').controller('CategoryParentCtrl', CategoryParentCtrl);