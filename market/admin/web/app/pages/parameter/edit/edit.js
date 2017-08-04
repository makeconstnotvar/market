ParameterEditCtrl.$inject = ['$scope', '$state', '$stateParams', '$controller', 'Parameter', 'translit'];

function ParameterEditCtrl($scope, $state, $stateParams, $controller, Parameter, translit) {
    var urlCanChange = false;

    $controller('ParameterBaseEditCtrl', {$scope: $scope, $state: $state/*, translit: translit*/});
    
    
    
    Parameter.select({query:{_id:$stateParams.id}}).then(function (response) {
        $scope.parameter = response.data;
        urlCanChange = !$scope.parameter.url;
    });

    $scope.save = function () {
        urlCanChange = false;
        return Parameter.update($scope.parameter).then(function () {
            $rootScope.$broadcast('status:success', 'Параметр сохранен')
        },function (response) {
                $rootScope.$broadcast('status:error', 'Параметр не сохранен<br/>' + response)
            })
    };

    $scope.nameToUrl = function (force) {
        if (urlCanChange || force) {
            $scope.parameter.url = translit($scope.parameter.name);
            urlCanChange = true;
        }
    };

    $scope.valToUrl = function (force) {
        if ($scope.selected.valCanChange || force) {
            $scope.selected.url = translit($scope.selected.val);
            $scope.selected.valCanChange = true;
        }
    };
}


angular.module('controller').controller('ParameterEditCtrl', ParameterEditCtrl);