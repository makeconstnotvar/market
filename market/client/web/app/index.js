angular.module('router')
    .run(['$state', '$rootScope', '$timeout', function ($state, $rootScope, $timeout) {
        $timeout(function () {
            $rootScope.showUI = true;
        });
        $rootScope.$on('$stateChangeSuccess', function (e, toState, toParams, fromState, fromParams) {
            $rootScope.$broadcast('state:change', {state: toState, params: toParams});
            $state.previousState = fromState;
            $state.previousParams = fromParams;
        });

    }]);





