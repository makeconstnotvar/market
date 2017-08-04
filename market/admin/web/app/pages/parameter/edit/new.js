ParameterNewCtrl.$inject = ['$scope', '$state', '$controller', 'Parameter', 'translit'];

function ParameterNewCtrl($scope, $state, $controller, Parameter, translit) {
    var toState = $state.current.data.toState;

    $controller('ParameterBaseEditCtrl', {$scope: $scope, $state: $state/*, translit: translit*/});

    $scope.nameToUrl = function () {
        $scope.parameter.url = translit($scope.parameter.name)
    };

    $scope.valToUrl = function () {
        $scope.selected.url = translit($scope.selected.val)
    };

    $scope.save = function () {
        Parameter.insert($scope.parameter).then(function (response) {
            $state.go(toState.edit, {id: response.data}, {reload: false})
        });
    };


}

angular.module('controller').controller('ParameterNewCtrl', ParameterNewCtrl);