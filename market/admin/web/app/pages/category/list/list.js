function CategoryListCtrl($scope, $state, $cacheFactory, Category) {
    var toState = $state.current.data.toState;
    var cache = $cacheFactory.get('cats') || $cacheFactory('cats');

    Category.selectAll({order: {order: 1}}).then(function (response) {
        $scope.categories = response.data;
        //$scope.cats = $scope.shift(response.data);
    });

    collapse($scope.categories);

    $scope.newCatagory = function () {
        $state.go(toState.new);
    };

    $scope.edit = function (id) {
        $state.go(toState.edit, {cid: id});
    };

    $scope.delete = function (id) {
        $state.go(toState.delete, {cid: id});
    };

    $scope.addChild = function (parent) {
        var newOrder = 0;
        if (parent.children && parent.children.length > 0) {
            var maxOrderChild = _.max(parent.children, function (child) {
                return child.order;
            });
            if (maxOrderChild)
                newOrder = maxOrderChild.order;
        }
        var newCat = {
            name: parent.childName,
            level: parent.level + 1,
            parent: parent._id,
            order: newOrder + 1
        };
        delete parent.childName;
        Category.insert(newCat).then(function (response) {
            parent.children = parent.children || [];
            parent.children.push(response.data);
        });

    };

    $scope.hideChilds = function (category) {
        if (!category.children) return;
        cache.put(category._id, true);
        category.collapse = true;
    };

    $scope.showChilds = function (category) {
        cache.remove(category._id);
        delete category.collapse;
    };

    $scope.getCover = function (photo) {
        return photo.type == 'icon';
    };

    function collapse(cats) {
        if (cats && cats.length)
            cats.forEach(function (cat) {
                cat.collapse = cache.get(cat._id);
                if (cat.children) {
                    collapse(cat.children)
                }
            });

    }
}

CategoryListCtrl.$inject = ['$scope', '$state', '$cacheFactory', 'Category'];

angular.module('controller').controller('CategoryListCtrl', CategoryListCtrl);
