function ContractTabsCtrl($scope, $state) {
    $scope.tabs = $state.current.data.tabs;

    $scope.tabs.forEach(function (e, i) {
        e.isActive = e.state == $state.current.name;
    });

    $scope.toState = function (tab) {
        var nextState = this.tab.state;
        $scope.tabs.forEach(function (e, i) {
            e.isActive = e.state == nextState;
        });
        $state.go(this.tab.state, {id: $state.params.id});
    }

}

ContractTabsCtrl.$inject = ['$scope', '$state'];

angular.module('controller').controller('ContractTabsCtrl', ContractTabsCtrl);