function Progress($rootScope, $timeout) {
    var loadingCount = 0;

    $rootScope.showCloakForElem = {};

    var progress = {
        show: function (elem) {
            loadingCount++;
            //console.log('показать прогресс: '+loadingCount);
            $rootScope.showCloak = true;
            $rootScope.showCloakForElem[elem] = true;
            $timeout(function () {
                if (loadingCount>0)
                    $rootScope.showProgress = true;
            }, 100);
        },
        hide: function (elem) {
            loadingCount--;
            //console.log('спрятать прогресс: '+loadingCount);
            $rootScope.showCloakForElem[elem] = false;
            if (loadingCount === 0) {
                $rootScope.showProgress = false;
                $rootScope.showCloak = false;
            }
        }
    };
    return progress;
}

Progress.$inject = ['$rootScope', '$timeout'];

angular.module('entity').factory('Progress', Progress);