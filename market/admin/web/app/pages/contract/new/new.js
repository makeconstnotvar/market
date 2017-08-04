function ContractNewCtrl($scope, $state, Contract) {
    var toState = $state.current.data.toState;

    $scope.contract = {
        delivery: 'auto',
        sendSms: true,
        status:'placed'
    };

    $scope.save = function () {
        Contract.insert($scope.contract).then(function (response) {
            $state.go(toState.edit, {id: response.data}, {reload: false})
        });
    };
}

ContractNewCtrl.$inject = ['$scope', '$state', 'Contract'];

angular.module('controller').controller('ContractNewCtrl', ContractNewCtrl);
