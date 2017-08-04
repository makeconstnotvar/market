function ContractMainCtrl($scope, $state) {

    $scope.title = $state.current.data.title;
    $scope.$on('updateActivate', function (e, args) {
        if (args.state.data)
            $scope.title = args.state.data.title;
    });
}

ContractMainCtrl.$inject = ['$scope', '$state'];

angular.module('controller').controller('ContractMainCtrl', ContractMainCtrl);
