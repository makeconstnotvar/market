OnExitHandler.$inject = ['$rootScope'];

function OnExitHandler($rootScope) {
    return function () {
        $rootScope.$broadcast('state:leave');
    };
}

angular.module('router').factory('OnExitHandler', OnExitHandler);


