function ProgressCtrl($rootScope, $scope, $timeout) {
    var needProgress = false;
    $rootScope.$on('loading:progress', function () {
        needProgress = true;
        $timeout(function () {
            if (needProgress)
                $scope.isVisible = true;
        }, 50);
    });

    $rootScope.$on('loading:finish', function () {
        if (needProgress)
            $timeout(function () {
                $scope.isVisible = false;
            }, 100);
        needProgress = false;
    });
}

ProgressCtrl.$inject = ['$rootScope', '$scope', '$timeout'];

angular.module('controller').controller('ProgressCtrl', ProgressCtrl);

