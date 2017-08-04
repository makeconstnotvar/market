function NavbarCtrl($scope, $state) {
    $scope.navs = $state.current.data.navs;

    setActive($state.current);

    $scope.toState = function (state) {
        $state.go(state, $state.params);
    };

    $scope.$on('updateActivate', function (e, args) {
        setActive(args.state);
    });

    function setActive(state) {
        var pattern = /(root\.\w+).*/;
        for (var i = 0; i < $scope.navs.length; i++) {
            var match1, match2, current, nav;
            match1 = state.name.match(pattern);
            if (match1 && match1.length > 0)
                current = match1[1];
            match2 = $scope.navs[i].state.match(pattern);
            if (match2 && match2.length > 0)
                nav = match2[1];
            $scope.navs[i].active = (nav && nav == current);
        }
    }
}

NavbarCtrl.$inject = ['$scope', '$state'];

angular.module('controller').controller('NavbarCtrl', NavbarCtrl);

