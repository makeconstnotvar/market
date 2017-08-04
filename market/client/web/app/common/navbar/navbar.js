NavbarCtrl.$inject = ['$scope', '$state', 'Contract'];

function NavbarCtrl($scope, $state, Contract) {

    Contract.getCartStatus().then(function (response) {
        $scope.cart = response.data
    });

    $scope.deliveryActive = $state.current.name.startsWith('delivery') ;
    $scope.cartActive = $state.current.name == 'cart';
    $scope.contactsActive = $state.current.name == 'contacts';

    $scope.$on('state:change', function (e, data) {
        $scope.deliveryActive = data.state.name.startsWith('delivery');
        $scope.cartActive = data.state.name == 'cart';
        $scope.contactsActive = data.state.name == 'contacts';
    });

    $scope.$on('contract:change', function (e, data) {
        $scope.cart = data;
    });
}

angular.module('controller').controller('NavbarCtrl', NavbarCtrl);

