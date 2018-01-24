ProductListCtrl.$inject = ['$rootScope', '$scope', '$state', 'Product', 'Filter'];

function ProductListCtrl($rootScope, $scope, $state, Product, Filter) {
    $scope.current = $state.href($state.current.name);

    var toState = $state.current.data.toState,
        filterName = $state.current.data.filterName,
        filter = Filter(filterName);

    getProducts();

    getCount();

    $scope.$on('product:search', getProducts);

    $scope.$on('product:search', getCount);

    $scope.$on('page:change', getProducts);

    $scope.$on('page:change', transitionTo);

    $scope.edit = function (id) {
        $state.go(toState.main, {pid: id});
    };

    $scope.toPhoto = function (id) {
        $state.go(toState.photo, {pid: id});
    };
    $scope.toInfo = function (id) {
        $state.go(toState.info, {pid: id});
    };


    $scope.newProduct = function () {
        $state.go(toState.new);
    };

    $scope.delete = function (id) {
        $state.go(toState.delete, {pid: id});
    };

    $scope.getCover = function (photo) {
        return photo.fileType == 'cover';
    };


    $scope.plus = function (product) {
        if (!product.count) {
            product.count = 1;
        }
        else {
            product.count++;
        }
        save(product);
    };

    $scope.minus = function (product) {
        if (!product.count || product.count <= 1) {
            product.count = 0;
        }
        else {
            product.count--;
        }
        save(product);
    };

    $scope.invert = function (product, field) {
        product[field] = !product[field];
        save(product);
    };

    $scope.save = function (product) {
        save(product);
    };

    $scope.copy = function (product) {
        
        Product.copy(product).then(function (response) {
            $state.go(toState.main, {pid: response.data})

        })
    };

    function save(product) {
        Product.update(product);
    }

    function getProducts() {
        var query = filter.query(),
            data = filter.data(),
            page = data.page,
            take = data.take,
            skip = (page - 1) * take;

        Product.selectAll({order: query.order, skip: skip, take: take, query: query}).then(function (response) {
            $scope.products = response.data;
            $state.go(toState.list, {page:page},{notify:false});
            $scope.products.forEach(function (product) {
                if (product.photos) {
                    var images = product.photos.filter(function (photo) {
                        return photo.fileType == 'image';
                    });
                    if (images) {
                        product.imageCount = images.length;
                    }
                    var cover = product.photos.filter(function (photo) {
                        return photo.fileType == 'cover';
                    });
                    if (cover) {
                        product.coverCount = cover.length;
                    }
                }
            })

        });
    }

    function getCount() {
        var query = filter.query();
        Product.count({query: query}).then(function (response) {
            $rootScope.$broadcast('page:init', response.data.count);
        });
    }

    function transitionTo(e, pageNum) {
        $state.transitionTo(toState.list, {page: pageNum}, {notify: false, reload: false});
    }

}

angular.module('controller').controller('ProductListCtrl', ProductListCtrl);
