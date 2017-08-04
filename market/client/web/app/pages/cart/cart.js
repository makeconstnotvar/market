CartCtrl.$inject = ['$scope', '$rootScope', '$state', 'Contract',  'Settings'];

function CartCtrl($scope, $rootScope, $state, Contract,  Settings) {

    $scope.showSuccess = false;
    $scope.showError = false;
    $scope.showHistory = false;

    Contract.getCart().then(function (response) {
        var current = response.data.current;
        $scope.history = response.data.history;
        current.delivery = current.delivery || 'auto';
        $scope.contract = current;
        $scope.showEmpty = !!(!current || !current.positions || current.positions.length == 0);
        $scope.contract.final = getFinal($scope.contract.positions);
        $scope.contract.sendSms = true;
    });

    Settings.meta({state: $state.current.name}).then(function (response) {
        $rootScope.$broadcast('head:change', response.data);
    });

    $scope.switchHistoryList = function () {
        $scope.showHistory = !$scope.showHistory;
    };

    $scope.place = function () {
        if ($scope.contract.phone) {
            Contract.placeContract($scope.contract).then(function (response) {
                $scope.showSuccess = true;
                $scope.history.unshift(response.data);
                $rootScope.$broadcast('contract:change', {sum: 0, count: 0});
            });
        }
        else {
            $scope.showError = true;
        }
    };

    $scope.plus = function (idx) {
        $scope.contract.positions[idx].count++;
        $scope.contract.positions[idx].sum = $scope.contract.positions[idx].product.price * $scope.contract.positions[idx].count;
        $scope.contract.final = getFinal($scope.contract.positions);
        Contract.put($scope.contract).then(function (response) {
            $rootScope.$broadcast('contract:change', response.data);
        });

    };

    $scope.minus = function (idx) {
        if ($scope.contract.positions[idx].count > 1) {
            $scope.contract.positions[idx].count--;
            $scope.contract.positions[idx].sum = $scope.contract.positions[idx].product.price * $scope.contract.positions[idx].count;
            $scope.contract.final = getFinal($scope.contract.positions);
            Contract.put($scope.contract).then(function (response) {
                $rootScope.$broadcast('contract:change', response.data);
            });
        }
    };

    $scope.del = function (idx) {
        $scope.contract.positions.splice(idx, 1);
        if ($scope.contract.positions.length == 0) {
            $scope.showEmpty = true;
        }
        $scope.contract.final = getFinal($scope.contract.positions);
        Contract.put($scope.contract).then(function (response) {
            $rootScope.$broadcast('contract:change', response.data);
        });
    };

    function getFinal(positions) {
        var sum = 0;
        if (positions)
            positions.forEach(function (p) {
                sum += parseFloat(p.sum * p.count);
            });
        return sum;
    }
}

angular.module('controller').controller('CartCtrl', CartCtrl);
