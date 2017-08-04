ProductFilterCtrl.$inject = ['$rootScope', '$scope', '$state', 'Category', 'Filter'];

function ProductFilterCtrl($rootScope, $scope, $state, Category, Filter) {
    var filterName = $state.current.data.filterName,
        filter = Filter(filterName),
        source = {
            publishes: [{
                value: true,
                name: 'опубликовано'
            }, {
                value: false,
                name: 'скрыто'
            }],
            counts: [{
                value: true,
                name: 'в наличии'
            }, {
                value: false,
                name: 'отсутствует'
            }],
            specials: [{
                value: true,
                name: 'на главной'
            }, {
                value: false,
                name: 'обычный'
            }]
        };

    $scope.filter = fromQuery(filter.query());

    $scope.source = source;

    Category.selectAll().then(function (response) {
        $scope.source.categories = response.data;
    });

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
        $scope.filter = {};
        search();
    };

    function search() {
        $rootScope.$broadcast('product:search');
    }

    function toQuery(filter) {
        filter = filter || {};
        var query = {};

        if (filter.text) query.$text = {$search: filter.text};
        else query.$text = {};

        if (filter.count === true) query.count = {$gt: 0};
        else if (filter.count === false) query.count = 0;
        else query.count = {};

        if (filter.publish !== undefined) query.publish = filter.publish;
        else query.publish = {};

        if (filter.special !== undefined) query.special = filter.special;
        else query.special = {};

        if (filter.category !== undefined) query.category = filter.category;
        else query.category = {};

        return query;
    }

    function fromQuery(query) {
        var result = {};
        query = query || {};
        for (property in query) {
            if (property == '$text' && query[property].$search)
                result.text = query.$text.$search;
            else if (property == 'count')
                result[property] = !!query.count.$gt;
            else
                result[property] = query[property];
        }
        return result;
    }
}

angular.module('controller').controller('ProductFilterCtrl', ProductFilterCtrl);

