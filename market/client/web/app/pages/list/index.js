IndexListCtrl.$inject = ['$scope'];

function IndexListCtrl($scope) {


    $scope.sorts = $scope.sorts || getSorts();

    function getSorts() {
        return [
            {
                name: 'по названию',
                field: 'name',
                asc: true,
                active: true
            },
            {
                name: 'по цене',
                field: 'price',
                asc: true,
                active: false
            }
        ];
    }


}

angular.module('controller').controller('IndexListCtrl', IndexListCtrl);

