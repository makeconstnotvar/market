ParameterFilterCtrl.$inject = ['$rootScope', '$scope', '$state', 'Filter'];

function ParameterFilterCtrl($rootScope, $scope, $state, Filter) {
    var filterName = $state.current.data.filterName,
        filter = Filter(filterName);

    $scope.filter = fromQuery(filter.query());

    $scope.search = function () {
        search();
    };

    $scope.query = function () {
        filter.query(toQuery($scope.filter));
        filter.data({page: 1});
        search();
    };

    $scope.clear = function () {
        filter.query(toQuery());
        filter.data({page: 1});
        $scope.filter.text = '';
        search();
    };

    function search() {
        $rootScope.$broadcast('filter:search');
    }


    function toQuery(filter) {
        filter = filter || {};
        var query = {};
        if (filter.text)
            query.$text = {$search: filter.text};
        else
            query.$text = {};
        return query;
    }

    function fromQuery(query) {
        query = query || {};
        var result = {};
        if (query && query.$text && query.$text.$search)
            result.text = query.$text.$search;
        else
            result.text = '';
        return result;
    }

}

angular.module('controller').controller('ParameterFilterCtrl', ParameterFilterCtrl);

