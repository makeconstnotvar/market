HeadCtrl.$inject = ['$scope'];

function HeadCtrl($scope) {
    $scope.$on('head:change', function (e, seo) {
        $scope.head = seo;
    })
}

angular.module('controller').controller('HeadCtrl', HeadCtrl);

