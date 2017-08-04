ErrorCtrl.$inject = ['$scope', '$stateParams', '$location', 'Category'];

function ErrorCtrl($scope, $stateParams, $location, Category) {
    Category.getTree({order: {order: 1}}).then(function (response) {
        $scope.categories = response.data;
    });
    $scope.requestUrl = $location.protocol()+'://'+$location.host()+$stateParams.url;

}

angular.module('controller').controller('ErrorCtrl', ErrorCtrl);