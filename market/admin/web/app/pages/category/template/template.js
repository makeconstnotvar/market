function CategoryTemplateCtrl($scope, $stateParams, $state, $q, Category, Templates) {
    var toState = $state.current.data.toState;
    var chains = [], category;

    var chain1 = Category.select({query:{_id:$stateParams.cid}}).then(function (response) {
        category = response.data;
        $scope.categoryName = category.name;
    });
    chains.push(chain1);


    var chain2 = Templates.selectAll().then(function (response) {
        $scope.templates = response.data;
    });

    chains.push(chain2);

    if (chains.length == 2) {
        $q.all(chains).then(function () {
            $scope.templates.forEach(function (template) {
                if (category.template && template._id == category.template._id) {
                    template.selected = true;
                }
            });
        });
    }

    $scope.newTemplate = function () {
        $state.go(toState.new, $stateParams);
    };

    $scope.new = function () {
        //$state.go(toState.edit, $stateParams);
    };

    $scope.edit = function (id) {
        //$state.go('root.template.edit', {cid: category._id, tid: id});
    };

    $scope.remove = function (id) {
        //$state.go('root.template.delete', {cid: category._id, tid: id});
    };

    $scope.add = function (template) {
        if (category._id && template) {
            category.template = template._id;
            Category.changeTemplate(category).then(function () {
                $state.go(toState.edit, {cid: category._id});
            });
        }
    };

    function merge(oldSpecs, newSpecs) {
        var merged = [];
        if (oldSpecs && oldSpecs.length > 0) {
            newSpecs.forEach(function (newSpec) {
                oldSpecs.forEach(function (oldSpec) {
                    if ((newSpec.id == oldSpec.id || newSpec.name == oldSpec.name) && oldSpec.value) {
                        newSpec.value = oldSpec.value;
                    }
                });
                merged.push(newSpec)
            });
        }
        else {
            return newSpecs;
        }
        return merged;
    }

}

CategoryTemplateCtrl.$inject = ['$scope', '$stateParams', '$state', '$q', 'Category', 'Templates'];

angular.module('controller').controller('CategoryTemplateCtrl', CategoryTemplateCtrl);
