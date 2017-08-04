function CategoryFileCtrl($scope, $stateParams, Category, Files, beautify, translit) {

    $scope.remove = function (fileId) {
        $scope.category.files = $scope.category.files.filter(function (file) {
            return file.fileId != fileId;
        });
        Files.remove($stateParams.cid, fileId).then(function () {
            Category.update($scope.category);
        });

    };

    $scope.makeUrl = function () {
        this.file.url = translit(this.file.name);
    };

    $scope.onFileSelect = function onFileSelect($files) {
        var formData = new FormData();
        for (var i = 0; i < $files.length; i++) {
            formData.append($scope.category._id, $files[i]);
        }
        Files.insert(formData, 'file').then(function (response) {
            $scope.category.files = $scope.category.files || [];
            $scope.category.files = $scope.category.files.concat(response.data);
        })
    };

    $scope.btf = function (details) {
        this.file.details = beautify(details);
    };

}
CategoryFileCtrl.$inject = ['$scope', '$stateParams', 'Category', 'Files', 'beautify', 'translit'];

angular.module('controller').controller('CategoryFileCtrl', CategoryFileCtrl);