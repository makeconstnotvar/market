CategoryWrapCtrl.$inject = ['$scope', '$state'];

function CategoryWrapCtrl($scope, $state) {
    var toState = $state.current.data.toState;

    $scope.back = function () {
        var state = $state.previousState.name || toState.list;
        var params = $state.previousParams || {};
        $state.go(state, params);
    };

    $scope.shift = function (cats) {
        var unTree = [];
        if (cats && cats.length)
            cats.forEach(function (cat) {
                var result = '';
                for (var i = 0; i < cat.level; i++) {
                    result += '-';
                }
                cat.name = result + cat.name;
                if (cat._id != $state.params.cid)
                    unTree.push(cat);
                if (cat.children)
                    $scope.shift(cat.children);
                delete cat.children;
            });
        return unTree;
    };

    
}

angular.module('controller').controller('CategoryWrapCtrl', CategoryWrapCtrl);
