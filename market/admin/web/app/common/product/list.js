ProductAddListCtrl.$inject = ['$rootScope', '$scope'];

function ProductAddListCtrl($rootScope, $scope) {

    $scope.$on('productAddList:init', getProducts);

    $scope.$on('productAddList:add', add);

    $scope.$on('productAddList:remove', remove);

    $scope.add = function (product) {
        $rootScope.$broadcast('productAddList:add', product);
    };

    $scope.remove = function (product) {
        $rootScope.$broadcast('productAddList:remove', product._id);
    };

    $scope.getCover = function (photo) {
        return photo.fileType == 'cover';
    };

    function getProducts(e, products) {
        $scope.products = products;
    }

    function remove(e, productId) {
        var product = $scope.products.find(function (product) {
            return product._id == productId;
        });
        product.selected = false;
    }

    function add(e, product) {
        product.selected = true;
    }
}

angular.module('controller').controller('ProductAddListCtrl', ProductAddListCtrl);
