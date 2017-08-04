ViewCtrl.$inject = ['$scope', '$rootScope', '$state', '$stateParams', '$timeout', '$location', 'Product', 'Contract'];

function ViewCtrl($scope, $rootScope, $state, $stateParams, $timeout, $location, Product, Contract) {

    $scope.isBack = !!$state.previousState.name;

    $scope.soc = {url: $location.absUrl()};
    $scope.$on('error:not-found', function (e) {
        $state.go('error', {url:$location.url()})
    });
    Product.view($stateParams.pid).then(function (response) {
        var product = response.data;
        $scope.soc.desc = product.description + ' ' + product.price + 'руб.';
        $scope.soc.img = $location.protocol() + '://' + $location.host() + '/photos/' + product._id + '/l_' + product.images[0];
        $rootScope.$broadcast('head:change', {
            title: product.title,
            description: $scope.soc.desc,
            keywords: product.keywords,
            img: $scope.soc.img,
            url: $scope.soc.url
        });

        if (product.images) {
            $scope.selectedActive = 0;
            $scope.selectedImage = product.images[0];
        }
        $scope.product = product;

    });

    $scope.toBack = function () {
        $state.go($state.previousState.name, $state.previousParams)
    };

    $scope.getImage = function (photo) {
        return photo.type == 'image';
    };

    $scope.getCover = function (photo) {
        return photo.type == 'cover';
    };

    $scope.getDimension = function (photo) {
        return photo.type == 'dimension';
    };

    $scope.showImage = function (idx) {

        $scope.selectedActive = idx;
        $scope.selectedImage = $scope.product.images[idx];
    };

    $scope.showSelected = function (selected) {
        var vals = this.parameter.values, val = '';
        for (var i = 0; i < vals.length; i++) {
            if (vals[i].id == selected) {
                val = vals[i].value;
                break;
            }
        }
        return val;
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
    }
}


angular.module('controller').controller('ViewCtrl', ViewCtrl);

