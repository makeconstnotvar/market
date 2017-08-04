ContractEditCtrl.$inject = ['$scope', '$stateParams', '$state', 'Contract'];

function ContractEditCtrl($scope, $stateParams, $state, Contract) {
    var toState = $state.current.data.toState;

    $scope.$on('state:leave', function () {
        return save();
    });

    Contract.select({query: {_id: $stateParams.id}}).then(function (response) {
        $scope.contract = response.data;
    });

    $scope.save = function () {
        save();
    };

    $scope.toStatus = function () {
        $state.go(toState.status, $stateParams)
    };

    $scope.cancel = function () {
        $scope.back(toState.list);
    };

    function save() {
        return Contract.update($scope.contract).then(function () {
            $rootScope.$broadcast('status:success', 'Контракт сохранен')
        }, function (response) {
            $rootScope.$broadcast('status:error', 'Контракт не сохранен<br/>' + response)
        })
    }
}

angular.module('controller').controller('ContractEditCtrl', ContractEditCtrl);
