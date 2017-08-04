function ContractDeleteCtrl($scope, $stateParams, $state, Contract) {
    var toState = $state.current.data.toState;
    if ($stateParams.id && $stateParams.id != 0) {
        Contract.select({query:{_id:$stateParams.id}}).then(function (response) {
            $scope.contract = response.data;
            $scope.isPermanent = $scope.contract.status == 'delete'
        });
    }

    $scope.ok = function () {
        if ($scope.contract.status = 'delete') {
            Contract.remove($scope.contract).then(function () {
                $state.go($state.previousState.name, $state.previousParams);
            });
        } else {
            $scope.contract.status = 'delete';
            Contract.update($scope.contract).then(function () {
                $state.go($state.previousState.name, $state.previousParams);
            });
        }
    };

    $scope.cancel = function () {
        $scope.back(toState.list);
    };


}

ContractDeleteCtrl.$inject = ['$scope', '$stateParams', '$state', 'Contract'];

angular.module('controller').controller('ContractDeleteCtrl', ContractDeleteCtrl);
