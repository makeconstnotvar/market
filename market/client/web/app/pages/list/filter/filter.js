FilterCtrl.$inject = ['$scope', '$rootScope', '$state', '$stateParams', '$cacheFactory', 'Parameters'];

function FilterCtrl($scope, $rootScope, $state, $stateParams, $cacheFactory, Parameters) {
    //Progress.show('filter');
    getParameters();

    selectFromCache();

    var catId;

    $rootScope.showButtons = true;

    $rootScope.hideList = false;

    $scope.toFilter = function () {
        $rootScope.showButtons = false;
        $rootScope.hideList = true;

    };

    $scope.applyFilter = function () {
        selectToCache();
        applyFilter(1);
    };

    $scope.$on('sort:change', function (e, pageNumber) {
        applyFilter(pageNumber);
    });

    $scope.$on('params:active', function (e, valuesIds) {
        if ($scope.parameters)
            $scope.parameters.forEach(function (parameter) {
                if (parameter.values)
                    parameter.values.forEach(function (value) {
                        value.active = valuesIds.contains(value.id);
                    })
            })
    });

    $scope.$on('page:change', function (e, pageNumber) {
        applyFilter(pageNumber);
    });

    $scope.clearFilter = function () {
        restoreInitSelect();
        applyFilter(1);
    };

    $scope.clearFrom = function (parameter) {
        delete parameter.from;
        selectToCache();
        applyFilter(1);
    };

    $scope.clearTo = function (parameter) {
        delete parameter.to;
        selectToCache();
        applyFilter(1);
    };

    $scope.$on('filter:clear', $scope.clearFilter);

    function getParameters() {
        Parameters.getList($state.params.catid).then(function (response) {
            $scope.parameters = response.data.parameters;
            catId = response.data.catid;
            init();
            applyFilter();
        });
    }

    function saveInitSelect() {
        selectToCache('init_' + catId);
    }

    function restoreInitSelect() {
        selectFromCache('init_' + catId);
    }

    function getSelectedParameters() {
        var cache = $cacheFactory.get('filter') || $cacheFactory('filter');
        return cache.get(catId);
    }

    function activateParameters() {
        Parameters.fetchActive({
            catId: catId,
            all: $scope.parameters.map(function (p) {
                return {_id: p._id, values: p.values}
            }),
            parameters: getSelectedParameters()
        }).then(function (response) {
            var actives = response.data;
            if ($scope.parameters)
                $scope.parameters.forEach(function (parameter) {
                    if (parameter.values) {
                        parameter.values.forEach(function (val) {
                            if (parameter.field) {
                                val.active = true;
                            }
                            else {
                                val.active = !!actives.contains(val._id);
                            }
                        })
                    }
                })
        });
    }

    function applyFilter(page) {
        $rootScope.showButtons = true;
        $rootScope.hideList = false;
        activateParameters();
        search(page);
    }

    function search(page) {
        $rootScope.$broadcast('filter:change', {
            filter: getSelectedParameters(),
            catId: catId,
            page: page || $stateParams.page
        })
    }

    function init() {
        saveInitSelect();
        if (!selectFromCache())
            selectToCache()
    }

    function selectToCache(cacheName) {
        cacheName = cacheName || catId;
        var parameters = $scope.parameters;
        var cache = $cacheFactory.get('filter') || $cacheFactory('filter');
        var selected = [];
        parameters.forEach(function (parameter) {
            if (parameter.from || parameter.to) {
                var result = {
                    url: parameter.url,
                    //parameterId: parameter._id, //пробуем заменить _id на url
                    behavior: parameter.behavior,
                    field: parameter.field,
                    from: parameter.from,
                    to: parameter.to
                };
                selected.push(result)
            }
            else {

                var selectedValues = [];
                parameter.values.forEach(function (value) {
                    if (value.selected)
                        selectedValues.push(value.url);
                        //selectedValues.push(value._id) //пробуем заменить _id на url
                });
                if (selectedValues.length) {
                    var result = {
                        //parameterId: parameter._id,//пробуем заменить _id на url
                        url: parameter.url,
                        behavior: parameter.behavior,
                        values: selectedValues,
                        field: parameter.field
                    };

                    selected.push(result)
                }
            }

        });
        cache.put(cacheName, selected);
        //console.log(cacheName);
        //console.dir(selected);
    }

    function selectFromCache(cacheName) {
        cacheName = cacheName || catId;
        var cache = $cacheFactory.get('filter') || $cacheFactory('filter');
        var selected = cache.get(cacheName);
        if (!selected)
            return false;
        $scope.parameters.forEach(function (parameter) {
            var foundParameter = selected.find(function (s) {
                //return s.parameterId == parameter._id;
                return s.url == parameter.url;
            });
            if (foundParameter && (foundParameter.from || foundParameter.to)) {
                parameter.from = foundParameter.from;
                parameter.to = foundParameter.to;

            }
            else {
                parameter.values.forEach(function (value) {
                    if (foundParameter) {
                        var foundValue = foundParameter.values.find(function (v) {
                            return value._id == v;
                        });
                        if (foundValue) {
                            value.selected = true;
                        }
                    }
                    else {
                        value.selected = false;
                    }
                })
            }
        });
        return true;


    }
}

angular.module('controller').controller('FilterCtrl', FilterCtrl);

