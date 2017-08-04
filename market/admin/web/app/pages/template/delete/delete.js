function TemplatesDeleteCtrl($scope, $stateParams, $state, Templates) {
    var toState = $state.current.data.toState,
        state = $state.previousState.name || toState.list;

    if ($stateParams.tid) {
        Templates.select({query:{_id:$stateParams.tid}}).then(function (response) {
            $scope.item = response.data;
        });
    }

    $scope.ok = function (id) {
        Templates.remove(id).then(function () {
            $state.go(state, {pid: $stateParams.pid});
        });
    };

    $scope.cancel = function () {
        $state.go(state, {pid: $stateParams.pid});
    };


}

TemplatesDeleteCtrl.$inject = ['$scope', '$stateParams', '$state', 'Templates'];

angular.module('controller').controller('TemplatesDeleteCtrl', TemplatesDeleteCtrl);
