function Progress($rootScope, $timeout) {
    var loadingCount = 0;

    $rootScope.$on('loading:begin', function (e, count) {
        loadingCount = count;

        $timeout(function () {
            if (loadingCount > 0 && !$rootScope.showProgress) {
                $rootScope.showCloak = true;
                $rootScope.showProgress = true;
                console.log('показать прогресс ' + loadingCount)
            }
        }, 100);
    });

    $rootScope.$on('loading:finish', function (e, count) {
        loadingCount = count;
        if (loadingCount === 0 && ($rootScope.showProgress || $rootScope.showCloak)) {
            $rootScope.showProgress = false;
            $rootScope.showCloak = false;
            console.log('спрятать прогресс ' + loadingCount);
        }
    });

    $rootScope.showCloakForElem = {};

    var progress = {
        show: function (elem) {
            /* loadingCount++;
             $rootScope.showCloak = true;
             $rootScope.showCloakForElem[elem] = true;
             $timeout(function () {
             if (loadingCount > 0)
             $rootScope.showProgress = true;
             }, 100);*/
        },
        hide: function (elem) {
            /*loadingCount--;

             $rootScope.showCloakForElem[elem] = false;
             if (loadingCount === 0) {
             $rootScope.showProgress = false;
             $rootScope.showCloak = false;
             }*/
        }
    };
    return progress;
}

Progress.$inject = ['$rootScope', '$timeout'];

angular.module('entity').factory('Progress', Progress);