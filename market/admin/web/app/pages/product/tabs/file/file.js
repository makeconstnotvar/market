function ProductFileCtrl($scope, $stateParams, Product, Files, beautify, translit) {

    $scope.remove = function (fileId) {
        $scope.product.files = $scope.product.files.filter(function (file) {
            return file.fileId != fileId;
        });
        Files.remove($stateParams.cid, fileId).then(function () {
            Product.update($scope.product);
        });

    };
    $scope.convert = function(pid,fid){
        Files.convert(pid,fid)
    };
    $scope.makeUrl = function () {
        this.file.url = translit(this.file.name);
    };
    $scope.onFileSelect = function onFileSelect($files) {
        var formData = new FormData();
        for (var i = 0; i < $files.length; i++) {
            formData.append($scope.product._id, $files[i]);
        }
        Files.insert(formData, 'file').then(function (response) {
            $scope.product.files = $scope.product.files || [];
            $scope.product.files = $scope.product.files.concat(response.data);
        })
    };
    $scope.btf = function (details) {
        this.file.details = beautify(details);
    };

}
ProductFileCtrl.$inject = ['$scope', '$stateParams', 'Product', 'Files', 'beautify', 'translit'];

angular.module('controller').controller('ProductFileCtrl', ProductFileCtrl);