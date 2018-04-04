ContractProductsCtrl.$inject = ['$rootScope', '$scope', '$stateParams', '$state', 'Product', 'Contract', 'Filter'];

function ContractProductsCtrl($rootScope, $scope, $stateParams, $state, Product, Contract, Filter) {
    var toState = $state.current.data.toState,
        filterName = $state.current.data.filterName,
        filter = Filter(filterName);

    Contract.select({query: {_id: $stateParams.id}}).then(function (response) {
        $scope.contract = response.data;
        getProducts();
        getCount();
    });


    $scope.$on('product:search', getProducts);

    $scope.$on('product:search', getCount);

    $scope.$on('page:change', getProducts);

    $scope.$on('page:change', transitionTo);

    $scope.$on('productAddList:add', add);

    $scope.$on('productAddList:remove', remove);

    $scope.remove = function (productId) {
        $rootScope.$broadcast('productAddList:remove', productId);
    };

    $scope.save = function () {
        Contract.update($scope.contract);
    };
    $scope.cancel = function () {
        $scope.back(toState.list);
    };

    $scope.plus = function (position) {
        position.count = position.count || 1;
        position.count++;
        position.product.price = position.product.price || 0;
        position.sum = position.product.price * position.count;
        setFinal($scope.contract.positions);
    };

    $scope.minus = function (position) {
        position.count = position.count || 1;
        if (position.count > 1) {
            position.count--;
            position.product.price = position.product.price || 0;
            position.sum = position.product.price * position.count;
            setFinal($scope.contract.positions);
        }
    };

    $scope.getCover = function (photo) {
        return photo.fileType == 'cover';
    };

    function setSelectedProduct(products, positions) {
        products.forEach(function (product) {
            product.selected = !!positions.find(function (position) {
                return product._id == position.product._id
            });
        });
    }

    function setFinal(positions) {
        var sum = 0;
        if (positions)
            positions.forEach(function (p) {
                if (p.sum) {
                    sum += parseFloat(p.sum);
                }
                else {
                    sum += parseFloat(p.product.price);
                }
            });
        $scope.contract.final = sum;
    }

    function getProducts() {
        var query = filter.query(),
            data = filter.data(),
            page = data.page,
            take = data.take,
            skip = (page - 1) * take;

        Product.selectAll({order: query.order, skip: skip, take: take, query: query}).then(function (response) {
            var products = response.data;
            products.forEach(product => {
                product.selected = !!$scope.contract.positions.find(function (position) {
                    return product._id == position.product._id
                });
            });
            $rootScope.$broadcast('productAddList:init', products);
        });
    }

    function getCount() {
        var query = filter.query();
        Product.count({query: query}).then(function (response) {
            $rootScope.$broadcast('page:init', response.data.count);
        });
    }

    function transitionTo(e, pageNum) {
        $state.transitionTo(toState.products, {page: pageNum, id: $stateParams.id}, {notify: false, reload: false});
    }

    function add(e, product) {
        product.selected = true;
        $scope.contract.positions = $scope.contract.positions || [];
        $scope.contract.positions.push({product: product, count: 1, sum: product.price});
        setFinal($scope.contract.positions);
    }

    function remove(e, productId) {
        $scope.contract.positions = $scope.contract.positions.filter(function (position) {
            return position.product._id != productId;
        });
        setFinal($scope.contract.positions);

    }
}


angular.module('controller').controller('ContractProductsCtrl', ContractProductsCtrl);
