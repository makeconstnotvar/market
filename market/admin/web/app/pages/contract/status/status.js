ContractStatusCtrl.$inject = ['$scope', '$stateParams', '$state', '$timeout', 'Contract', 'Status'];

function ContractStatusCtrl($scope, $stateParams, $state, $timeout, Contract, Status) {
    var toState = $state.current.data.toState;

    Status.selectAll().then(function (response) {
        $scope.statuses = response.data;

        switch ($stateParams.status) {
            case 'placed':
                $scope.status = $scope.statuses.find(function (status) {
                    return status.id == 'progress'
                });
                break;
            case 'progress':
                $scope.status = $scope.statuses.find(function (status) {
                    return status.id == 'done'
                });
                break;
            default:
                $scope.status = $scope.statuses.find(function (status) {
                    return status.id == 'placed'
                });
        }
        if ($stateParams.id) {
            Contract.select({query:{_id:$stateParams.id}}).then(function (response) {
                $scope.contract = response.data;
                $scope.contract.notifyClient = $stateParams.status == 'placed' && $scope.contract.sendSms;
            });
        }
    });

    $scope.addAcceptText = function () {
        var buffer = $scope.contract.smsText || '';
        $scope.contract.smsText = 'Заказ ' + $scope.contract.number + ' принят. ' + buffer;
    };

    $scope.toEdit = function(){
        $state.go(toState.edit, $stateParams);
    };

    $scope.ok = function () {
        if (!$scope.contract.correctPhone) {
            $scope.showPhoneError = true;
        }
        else if ($scope.contract.sendSms && !$scope.contract.smsText && $scope.contract.notifyClient) {
            $scope.showSmsError = true;
        }
        else {
            $scope.showPhoneError = false;
            $scope.showSmsError = false;
            $scope.contract.status = $scope.status.id;
            Contract.update($scope.contract).then(function (data, status, headers, config) {
                $scope.showSuccess = true;
                $scope.message = data.message;
                $timeout(function () {
                    $scope.showSuccess = false;

                }, 5000);
            },function (data, status, headers, config) {
                $scope.showError = true;
                $scope.message = data.message;
            })
        }

    };

    $scope.cancel = function () {
        $scope.back(toState.list);
    };


}


angular.module('controller').controller('ContractStatusCtrl', ContractStatusCtrl);
