function ParameterDeleteCtrl($scope, $stateParams, $state, Parameter) {
    var toState = $state.current.data.toState;
    Parameter.select({query:{_id: $stateParams.id}}).then(function (response) {
        $scope.parameter = response.data;
    });

    $scope.ok = function (id) {
        Parameter.remove(id).then(function () {
            $state.go(toState.list);
        });
    };

    $scope.cancel = function () {
        $state.go(toState.list);
    };
}

ParameterDeleteCtrl.$inject = ['$scope', '$stateParams', '$state', 'Parameter'];

angular.module('controller').controller('ParameterDeleteCtrl', ParameterDeleteCtrl);
