TemplatesEditCtrl.$inject = ['$rootScope', '$scope', '$stateParams', '$state', 'Templates', 'Parameter', 'Filter', '$q', '_'];

function TemplatesEditCtrl($rootScope, $scope, $stateParams, $state, Templates, Parameter, Filter, $q, _) {

    //console.log('Эдит')
    var toState = $state.current.data.toState,
        filterName = $state.current.data.filterName,
        filter = Filter(filterName);

    $scope.template = {parameters: []};
    $scope.selectedParameter = [];
    $scope.editable = false;
    $scope.noNameError = false;

    //$scope.$on('filter:search', getTemplate);

    //$scope.$on('filter:search', getCount);

    $scope.$on('page:change', getParameters);

    $scope.$on('page:change', transitionTo);

    getAll();
    getCount();

    $scope.append = function (parameter) {
        $scope.template.parameters.addUniqueParam({parameter: parameter._id}, 'parameter');
        parameter.selected = true;
    };

    $scope.dismiss = function (parameter) {
        $scope.template.parameters = $scope.template.parameters.filter(function (p) {
            return p.parameter != parameter._id;
        });
        parameter.selected = false;
    };

    $scope.changeOrder = function (parameter) {
        var templateParam = $scope.template.parameters.find(function (p) {
            return p.parameter == parameter._id;
        });
        if (templateParam)
            templateParam.order = parameter.order;
    };

    $scope.filter = function () {
        if ($scope.order) {
            getFiltered().then(sort);

        }
        else {
            filter.reset('query');
            filter.reset('data');
            getAll();
            getCount();
        }
    };

    $scope.$on('state:leave', function () {
        return save();
    });


    $scope.save = function () {
        //нужно подобрать ордер
        save();
    };

    function save() {
        if ($scope.template._id) {
            Templates.update($scope.template)
                .then(function () {
                    $rootScope.$broadcast('status:success', 'Шаблон сохранен')
                },function (response) {
                    $rootScope.$broadcast('status:error', 'Шаблон не сохранен<br/>' + response)
                })

        }
        else {
            Templates.insert($scope.template)
                .then(function (response) {
                    $rootScope.$broadcast('status:success', 'Шаблон создан');
                    $state.go(toState.edit, {tid: response.data}, {reload: false})
                },function (response) {
                    $rootScope.$broadcast('status:error', 'Шаблон не создан<br/>' + response)
                })
        }
    }

    $scope.sorting = function () {
        sort()
    };

    $scope.toEdit = function (paramId) {
        $state.go(toState.paramEdit, {id: paramId})
    };

    $scope.minus = function (p) {
        $scope.parameters = $scope.parameters.map(function (parameter) {
            if (parameter.order < p.order && parameter.order > 0) {
                parameter.order--;
            }
            return parameter;
        });
        if (p.order > 0)
            p.order--;
        $scope.parameters.forEach(function (parameter) {
            $scope.changeOrder(parameter);
        })
    };

    $scope.plus = function (p) {
        $scope.parameters = $scope.parameters.map(function (parameter) {
            if (parameter.order > p.order) {
                parameter.order++;
            }
            return parameter;
        });
        p.order++;
        $scope.parameters.forEach(function (parameter) {
            $scope.changeOrder(parameter);
        })
    };

    function setSelected() {
        console.log('setSelected')
        if ($scope.template.parameters) {
            $scope.template.parameters.forEach(function (p) {
                if ($scope.parameters) {
                    $scope.parameters.forEach(function (parameter) {
                        if (parameter._id == p.parameter) {
                            parameter.selected = true;
                            parameter.order = p.order;
                        }
                    })
                }
            })
        }
    }

    function getTemplate() {
        var promise = Templates.select({query: {_id: $stateParams.tid}}).then(function (response) {
            console.log('шаблон получили');
            $scope.template = response.data;

        });
        console.log(promise);
        return promise;
    }

    function getParameters() {
        var query = filter.query(),
            data = filter.data(),
            page = data.page,
            take = data.take,
            skip = (page - 1) * take;
        var promise = Parameter.selectAll({
            order: data.order,
            skip: skip,
            take: take,
            query: query
        }).then(function (response) {
            console.log('параметры получили');
            $scope.parameters = response.data;

            setSelected();
        });
        console.log(promise);
        return promise;
    }

    function getAll() {
        var promises = [];
        var p1 = getParameters();
        promises.push(p1);
        if ($stateParams.tid){
            var p2 = getTemplate();
            promises.push(p2);
        }
        $q.all(promises).then(setSelected);
    }

    function getFiltered() {
        filter.data({take: 0});
        filter.query({
            '_id': {
                $in: $scope.template.parameters.map(function (p) {
                    return p.parameter;
                })
            }
        });
        $rootScope.$broadcast('pager:hide');
        return getParameters();

    }

    function getCount() {
        var query = filter.query();
        Parameter.count({query: query}).then(function (response) {
            //тут какой-то адов косяк $rootScope.$broadcast('page:init', response.data.count);
        });
    }

    function transitionTo(e, pageNum) {
        $state.transitionTo($state.current.name, {page: pageNum, tid: $stateParams.tid}, {
            notify: false,
            reload: false
        });
    }

    function sort() {
        $scope.parameters.sort(function (a, b) {
            return (a.order || Infinity) - (b.order || Infinity);
        })
    }
}

angular.module('controller').controller('TemplatesEditCtrl', TemplatesEditCtrl);
