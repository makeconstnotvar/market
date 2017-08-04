function AddurlCtrl($scope, $stateParams, Product, _, list, item, modalName) {
    if ($stateParams.id && $stateParams.id != 0) {
        Product.getById($stateParams.id).then(function (response) {
            $scope.product = response.data;
        });
    }
    $scope.list = list;
    $scope.item = item;
    $scope.modalName = modalName;
    $scope.edit = function (editItem) {
        _.each($scope.product[list], function (item) {
            delete item.edit;
        });
        editItem.edit = true;
        $scope.editItem = editItem;
    };

    $scope.update = function () {
        _.each($scope.product[list], function (item) {
            delete item.edit;
        });
        delete $scope.editItem;
    };

    $scope.remove = function (idx) {
        $scope.product[list].splice(idx, 1);
    };

    $scope.save = function () {
        if ($scope.editItem && $scope.editItem.edit)
            delete $scope.editItem;

        if ($scope.editItem) {
            $scope.product[list] = $scope.product[list] || [];
            delete $scope.editItem.edit;
            $scope.product[list].push($scope.editItem);
            delete $scope.editItem;
        }

        _.each($scope.product[list], function (item) {
            delete item.edit;
        });

        Product.put($scope.product)

    };

    $scope.$watch('product[list]', function (newVal, oldVal) {
       // if (!_.isEqual(newVal , oldVal))
        //    console.log('changed\n newVal = "' + JSON.stringify(newVal) + '"\n oldVal = "' + JSON.stringify(oldVal) + '"');
    }, true);
}

AddurlCtrl.$inject = ['$scope', '$stateParams', 'Product', '_', 'list', 'item','modalName'];

angular.module('controller').controller('AddurlCtrl', AddurlCtrl);
