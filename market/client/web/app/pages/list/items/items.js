ListCtrl.$inject = ['$scope', '$rootScope', '$state', '$stateParams', '$cacheFactory', '$timeout', 'Product', 'Contract', 'Settings'];

function ListCtrl($scope, $rootScope, $state, $stateParams, $cacheFactory, $timeout, Product, Contract, Settings) {
    Settings.meta({state: $state.current.name, url: $stateParams.catid}).then(function (response) {
        $rootScope.$broadcast('head:change', response.data);
    });

    $scope.catid = $stateParams.catid;

    $scope.$on('filter:change', function (e, filter) {
        //Progress.show('list');
        getProducts(filter);
    });

    $scope.toPage = function (e, pageNum) {
        //e.preventDefault();
        setActivePage(pageNum);
        $stateParams.page = pageNum;
        $state.go('list.page.query', $stateParams, {notify: false, reload: false});
        $rootScope.$broadcast('page:change', pageNum)
    };

    $scope.doSort = function (idx) {
        for (var i = 0; i < $scope.sorts.length; i++) {

            if (i == idx && $scope.sorts[i].active) {

                $scope.sorts[i].asc = !$scope.sorts[i].asc;
            }
            $scope.sorts[i].active = i == idx;
        }
        $rootScope.$broadcast('sort:change', /*getSortFilter()*/$state.params.page);
    };

    $scope.clearFilter = function () {
        $rootScope.$broadcast('filter:clear');
    };

    $scope.postPosition = function (product) {
        if (product.available) {
            var position = {
                product: product._id,
                count: 1,
                sum: product.price
            };
            Contract.postPosition(position).then(function (response) {
                product.inCart = true;
                $rootScope.$broadcast('contract:change', response.data);
            })
        } else {
            product.blink = true;
            $timeout(function () {
                product.blink = false;
            }, 2000);
        }
    };

    function getProducts(data) {
        var filter = data.filter,
            catId = data.catId,
            page = data.page || 1;

        Product.list({order: getSortFilter(), page: page, parameters: filter, catId: catId})
            .then(function (response) {
                $scope.products = response.data.products;
                $scope.pages = getPages(response.data.count, data.page);
                if (filter) {
                    $stateParams.query = toQuery(filter);
                    $stateParams.page = page;
                    $state.go('list.page.query', $stateParams, {notify: false, reload: false})
                }
                //Progress.hide('list');
            });
    }

    function toQuery(params) {
        var result = "";
        var first = true;
        var and = '';
        if (params)
            params.forEach(function (param) {
                if (!first)
                    and = '&';
                result += `${and}${param.url}=${param.values.join()}`;
                first = false;
            });


        return result;
    }

    function getSortFilter() {

        var sortFilter = {};
        for (var i = 0; i < $scope.sorts.length; i++) {

            if ($scope.sorts[i].active)
                sortFilter[$scope.sorts[i].field] = $scope.sorts[i].asc ? 1 : -1;
        }
        return sortFilter;

    }

    function setActivePage(page) {
        $scope.pages.forEach(function (p) {
            p.active = page == p.n
        })
    }

    function getPages(count, page) {
        var pages = [], currentPage = page || $stateParams.page || 1;
        for (var i = 1; i <= Math.ceil(count / 5); i++) {
            pages.push({n: i, active: i == currentPage})
        }
        return pages;
    }


}

angular.module('controller').controller('ListCtrl', ListCtrl);

