function StatusCtrl($scope, $timeout) {
    var gap = 5000; //ms
    $scope.status = {
        show: false,
        text: 'Сохранено'
    };
    
    $scope.$on('status:success', function (e, text) {
        
        $scope.status.text = text;
        $scope.status.success = true;
        showOn();
        $timeout(showOff, gap)
    });
    
    $scope.$on('status:error', function (e, text) {
        
        $scope.status.text = text;
        $scope.status.success = false;
        showOn();
        $timeout(showOff, gap)
    });

    $scope.showOff = function () {
        showOff()
    };

    function showOn() {
        $scope.status.show = true;
    }

    function showOff() {
        $scope.status.show = false;
    }
}

StatusCtrl.$inject = ['$scope', '$timeout'];

angular.module('controller').controller('StatusCtrl', StatusCtrl);
