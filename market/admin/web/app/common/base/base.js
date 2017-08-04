BaseCtrl.$inject = ['$rootScope', '$stateParams', '$state'];

function BaseCtrl($rootScope, $stateParams, $state) {
    $rootScope.back = function (stateName) {
        if ($state.previousState.name)
            $state.go($state.previousState.name, $state.previousParams);
        else
            $state.go(stateName, $state.current.params);
    }
}

angular.module('controller').controller('BaseCtrl', BaseCtrl);
