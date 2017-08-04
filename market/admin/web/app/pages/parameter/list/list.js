ParameterListCtrl.$inject = ['$rootScope', '$scope', '$state', 'Parameter', 'Filter'];

function ParameterListCtrl($rootScope, $scope, $state, Parameter, Filter) {
    var toState = $state.current.data.toState,
        filterName = $state.current.data.filterName,
        filter = Filter(filterName);

    getParameters();

    getCount();

    $scope.$on('filter:search', getParameters);

    $scope.$on('filter:search', getCount);

    $scope.$on('page:change', getParameters);

    $scope.$on('page:change', transitionTo);


    $scope.toNew = function () {
        $state.go(toState.new);
    };

    $scope.toEdit = function (id) {
        $state.go(toState.edit, {id: id});
    };

    $scope.toRemove = function (id) {
        $state.go(toState.delete, {id: id});
    };

    function getParameters() {
        var query = filter.query(),
            data = filter.data(),
            page = data.page,
            take = data.take,
            skip = (page - 1) * take;
        
        console.dir({data: data, query: query});

        Parameter.selectAll({order: query.order, skip: skip, take: take, query: query}).then(function (response) {
            $scope.parameters = response.data;
        });
    }

    function getCount() {
        var query = filter.query();
        Parameter.count({query: query}).then(function (response) {
            $rootScope.$broadcast('page:init', response.data.count);
        });
    }

    function transitionTo(e, pageNum) {
        $state.transitionTo(toState.list, {page: pageNum}, {notify: false, reload: false});
    }
}

angular.module('controller').controller('ParameterListCtrl', ParameterListCtrl);