function ContractCtrl($scope, $state, Contract) {
    var toState = $state.current.data.toState;


    search($state.current.data);

    $scope.toStatus = function () {
        $state.go(toState.status, {id: this.contract._id, status: $state.current.data.status});
    };

    $scope.edit = function () {
        $state.go(toState.edit, {id: this.contract._id});
    };

    $scope.savePhone = function (contract) {
        Contract.put(contract);
    };

    $scope.toDelete = function () {
        $state.go(toState.delete, {id: this.contract._id});
    };

    $scope.$on('updateActivate', function (e, args) {
        if (args.state.data)
            search(args.state.data);
    });

    $scope.newContract = function () {
        $state.go(toState.new);
    };
    $scope.getCover = function (photo) {
        return photo.fileType == 'cover';
    };
    function search(data) {

        Contract.selectAll({query: {status: data.status}, order: {date: -1}}).then(function (response) {
            $scope.emptyMessage = data.emptyMessage;
            $scope.showEmptyMessage = !!data.emptyMessage && !response.data.length > 0;
            $scope.showEmptyPlaced = !data.emptyMessage && !response.data.length > 0;
            $scope.showList = response.data.length > 0;
            $scope.contracts = response.data;

        });
    }
}

ContractCtrl.$inject = ['$scope', '$state', 'Contract'];

angular.module('controller').controller('ContractCtrl', ContractCtrl);