TabsCtrl.$inject = ['$scope', '$state', 'Category'];

function TabsCtrl($scope, $state, Category) {
    $scope.isReady = false;
    Category.getTree({order: {order: 1}}).then(function (response) {
        $scope.categories = response.data;
        $scope.width = 100 / $scope.categories.length;
        setActive($state.params.catid);
        $scope.isReady = true;
    });

    $scope.$on('state:change', function (e, data) {
        if (data.state.name == 'list' && data.params.catid)
            setActive(data.params.catid);
        else {
            setActive();
        }
    });

    function setActive(url) {
        $scope.categories.forEach(function (cat) {
            cat.active = cat.url == url;
        })
    }
}

angular.module('controller').controller('TabsCtrl', TabsCtrl);