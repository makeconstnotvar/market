TemplatesListCtrl.$inject = ['$scope', '$state', 'Templates', 'Filter'];

function TemplatesListCtrl($scope, $state, Templates, Filter) {
    var toState = $state.current.data.toState,
        filterName = $state.current.data.filterName,
        filter = Filter(filterName);
    Templates.selectAll().then(function (response) {
        $scope.templates = response.data;
    });

    $scope.toNew = function () {
        $state.go(toState.edit);
    };

    $scope.toEdit = function (id) {
        filter.data({page: 1});
        $state.go(toState.edit, {tid: id});
    };

    $scope.toRemove = function (id) {
        $state.go(toState.delete, {tid: id});
    };


}

angular.module('controller').controller('TemplatesListCtrl', TemplatesListCtrl);
