function CategoryNewCtrl($scope, $stateParams, $state, Category, beautify, translit) {
    var toState = $state.current.data.toState;

    Category.selectAll({order: {order: 1}}).then(function (response) {
        $scope.cats = $scope.shift(response.data);
    });

    $scope.category = {};

    $scope.nameToUrl = function () {
        $scope.category.url = translit($scope.category.name)
    };
    
    $scope.save = function () {
        if (!$scope.category.name) {
            $scope.noNameError = true;
        }
        else {
            $scope.noNameError = false;
            if ($scope.selectedCategory) {
                $scope.category.parent = $scope.selectedCategory._id;
            }
            else {
                delete $scope.category.parent;
            }
            Category.insert($scope.category).then(function (response) {
                $state.go(toState.edit, {cid: response.data}, {reload: false})
            });
        }
    };

    $scope.btf = function (text) {
        $scope.category.details = beautify(text);
    };

    $scope.makeUrl = function () {
        $scope.category.url = translit($scope.category.name);
    };

}

CategoryNewCtrl.$inject = ['$scope', '$stateParams', '$state', 'Category', 'beautify', 'translit'];

angular.module('controller').controller('CategoryNewCtrl', CategoryNewCtrl);