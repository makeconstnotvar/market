function ManualCtrl($scope, Map) {

    $scope.$on('$stateChangeStart', function (e) {
        Map.close();
    })
}
ManualCtrl.$inject = ['$scope', 'Map'];

angular.module('controller').controller('ManualCtrl', ManualCtrl);