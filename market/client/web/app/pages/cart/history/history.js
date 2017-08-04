HistoryCtrl.$inject = ['$scope', '$rootScope', '$state', '$stateParams', 'Contract', 'Settings'];

function HistoryCtrl($scope, $rootScope, $state, $stateParams, Contract, Settings) {


    Settings.meta({state: $state.current.name}).then(function (response) {
        $rootScope.$broadcast('head:change', response.data);
    });

    Contract.getById($stateParams.cid).then(function (response) {
        var contract = response.data;
        contract.delivery = contract.delivery || 'auto';
        $scope.contract = contract;
        $scope.showEmpty = !!(!contract || !contract.positions || contract.positions.length == 0);
        $scope.contract.final = getFinal($scope.contract.positions);

        $rootScope.$broadcast('head:change', response.data.seo);
    });

    function getFinal(positions) {
        var sum = 0;
        if (positions)
            positions.forEach(function (p) {
                if (p.sum) {
                    sum += parseFloat(p.sum);
                }
                else {
                    sum += parseFloat(p.price);
                }
            });
        return sum;
    }
}


angular.module('controller').controller('HistoryCtrl', HistoryCtrl);
