ProductTabsCtrl.$inject = ['$scope', '$rootScope', '$state', 'Product', 'translit'];

function ProductTabsCtrl($scope, $rootScope, $state, Product, translit) {
    var urlCanChange = false;

    Product.select({query: {_id: $state.params.pid}}).then(function (response) {
        $scope.product = response.data;
        urlCanChange = !$scope.product.url;
        $scope.product.photos = sortPhotos($scope.product.photos)
    });

    $scope.aceOptions = {
        mode: 'html',
        theme: 'chrome',
        workerPath: 'admin/worker/',
        useWrapMode: true,
        showGutter: true,
        behavioursEnabled: true,
        displayIndentGuides: true,
        showPrintMargin: false,
        onLoad: function (editor) {
            editor.setHighlightSelectedWord(false);
            editor.$blockScrolling = Infinity;
        },
        require: ['ace/ext/language_tools'],
        advanced: {
            enableSnippets: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: false
        }
    };

    $scope.$on('state:leave', save);

    $scope.save = function () {
        return save();
    };
        
    $scope.nameToUrl = function (force) {
        if (urlCanChange || force) {
            $scope.product.url = translit($scope.product.name);
            urlCanChange = true;
        }
    };

    $scope.getCover = function (photo) {
        return photo.fileType == 'cover';
    };

    function save() {
        if (!$scope.product.name)
            $rootScope.$broadcast('status:error', 'Требуется название продукта');
        else {
            urlCanChange = false;
            return Product.update($scope.product)
                .then(function () {
                    $rootScope.$broadcast('status:success', 'Продукт сохранен')
                },function (response) {
                    $rootScope.$broadcast('status:error', 'Продукт не сохранен<br/>' + response)
                })

        }
    }

    function sortPhotos(photos) {
        return _.sortBy(photos, function (item) {
            var rank = {
                "cover": 10,
                "list": 20,
                "image": 30
            };
            if (item.type == 'image') {
                item.order = item.order || 1;
                return rank[item.type] + item.order;
            }
            else {
                return rank[item.type];
            }
        })

    }

}


angular.module('controller').controller('ProductTabsCtrl', ProductTabsCtrl);
