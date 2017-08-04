DeliveryCtrl.$inject = ['$scope', '$rootScope', '$state', 'Settings', '$window'];

function DeliveryCtrl($scope, $rootScope, $state, Settings, $window) {
    seo($state.current.name);

    $scope.isAuto = $state.current.name == 'delivery.auto';
    $scope.isManual = $state.current.name == 'delivery.manual';
    $scope.isGuarantee = $state.current.name == 'delivery.guarantee';

    $scope.$on('state:change', function (e, data) {
        seo(data.state.name);
        $scope.isAuto = data.state.name == 'delivery.auto';
        $scope.isManual = data.state.name == 'delivery.manual';
        $scope.isGuarantee = data.state.name == 'delivery.guarantee';
    });

    $scope.toSdekList = function () {
        $window.open('http://www.edostavka.ru/contacts/city-list.html');
    };

    function seo(state) {
        Settings.meta({state: state}).then(function (response) {
            $rootScope.$broadcast('head:change', response.data);
        });
    }
}


angular.module('controller').controller('DeliveryCtrl', DeliveryCtrl);