function MenuCtrl($scope, $state) {
    $scope.menus = $state.current.data.menus;

    $scope.toSubnav = function (state) {
        $state.go(state, $state.params);
    };

    setActive($state.current);

    $scope.$on('updateActivate', function (e, args) {
        setActive(args.state);
    });

    function setActive(state) {
        for (var i = 0; i < $scope.menus.length; i++) {
            $scope.menus[i].active = $scope.menus[i].state == state.name;
        }
    }
}

MenuCtrl.$inject = ['$scope', '$state'];

angular.module('controller').controller('MenuCtrl', MenuCtrl);