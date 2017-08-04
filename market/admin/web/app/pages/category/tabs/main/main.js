
CategoryMainCtrl.$inject = ['$scope',  '$state' ];

function CategoryMainCtrl($scope, $state) {
    var toState = $state.current.data.toState;


    $scope.showTemplates = function () {
        if ($scope.category._id) {
            $scope.save().then(function () {
                $state.go(toState.template, {cid: $scope.category._id});
            });
        }
    };

    $scope.showParents = function(){
        $scope.save().then(function () {
            $state.go(toState.parent, {cid: $scope.category._id});
        });
    };
    
    
}


angular.module('controller').controller('CategoryMainCtrl', CategoryMainCtrl);