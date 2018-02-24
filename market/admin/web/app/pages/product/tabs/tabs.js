ProductTabsCtrl.$inject = ['$scope', '$rootScope', '$state', 'Product', 'Filter', 'translit'];

function ProductTabsCtrl($scope, $rootScope, $state, Product, Filter, translit) {
    var urlCanChange = false,
        filterName = $state.current.data.filterName,
        filter = Filter(filterName);


    getProduct($state.params.pid);

    getProducts();

    function getProduct(pid) {
        Product.select({query: {_id: pid}}).then(function (response) {
            $scope.product = response.data;
            urlCanChange = !$scope.product.url;
            $scope.product.charge = $scope.product.price - $scope.product.purchase;
            $scope.product.photos = sortPhotos($scope.product.photos)
        });
    }

    function getProducts() {
        var query = filter.query(),
            data = filter.data(),
            page = data.page,
            take = data.take,
            skip = (page - 1) * take;

        Product.selectAll({order: query.order, skip: skip, take: take, query: query}).then(function (response) {

            $scope.products = response.data.map(function (p) {
                var product = {
                    _id: p._id,
                    tooltip: p.name,
                    url: $state.current.url

                };
                if (p.photos) {
                    var cover = p.photos.find(function (photo) {
                        if (photo.fileType === 'cover')
                            return photo.fileId;
                    });
                    if (cover)
                        product.cover = cover.fileId;
                }
                return product;
            })
        });
    }

    $scope.aceOptions = {
        //mode: 'html',
        //theme: 'chrome',
        workerPath: 'admin/worker/',
        useWrapMode: true,
        showGutter: true,
        behavioursEnabled: true,
        displayIndentGuides: true,
        showPrintMargin: false,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        onLoad: function (editor) {
            editor.setHighlightSelectedWord(false);
            editor.$blockScrolling = Infinity;
            editor.setTheme("ace/theme/chrome");
            editor.getSession().setMode("ace/mode/html");
        },
        //require: ['ace/ext/language_tools'],
        /*advanced: {
            enableSnippets: true,


        }*/
    };

    $scope.toState = function (pid) {
        save().then(function () {
            $state.go($state.current.name, {pid: pid});
            getProduct(pid)
        });
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
                }, function (response) {
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
