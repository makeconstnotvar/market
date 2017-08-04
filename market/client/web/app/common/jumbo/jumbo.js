JumboCtrl.$inject = ['$scope', '$timeout'];

function JumboCtrl($scope, $timeout) {
    $scope.sVisible = 1;
    change();
    function change() {
        $timeout(function () {
            if ($scope.sVisible < 3) {
                $scope.sVisible += 1;
            }
            else {
                $scope.sVisible = 1;
            }
            change();
        }, 6000);
    }
}

angular.module('controller').controller('JumboCtrl', JumboCtrl);

