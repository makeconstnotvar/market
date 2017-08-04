
TabsCtrl.$inject = ['$scope', '$state','$stateParams'];

function TabsCtrl($scope, $state, $stateParams) {
    $scope.tabs = $state.current.data.tabs;

    $scope.tabs.forEach(function (e, i) {
        e.active = e.state == $state.current.name;
    });

    $scope.toState = function (nextState) {
        $scope.tabs.forEach(function (e, i) {
            e.active = e.state == nextState;
        });
        $state.go(nextState, $state.params);
    }
}

angular.module('controller').controller('TabsCtrl', TabsCtrl);
