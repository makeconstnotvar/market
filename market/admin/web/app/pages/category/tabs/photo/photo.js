function CategoryPhotoCtrl($scope, $stateParams, Category, Files) {

    $scope.resize = function (dataType) {
        Files.resize($stateParams.cid, this.photo.fileId, dataType);
    };

    $scope.remove = function (fileId) {
        $scope.category.photos = $scope.category.photos.filter(function (photo) {
            return photo.fileId != fileId;
        });
        Files.remove($stateParams.cid, fileId).then(function () {
            Category.update($scope.category);
        });
    };


    $scope.onFileSelect = function (files) {
        var formData = new FormData();
        files.forEach(function (file) {
            formData.append($scope.category._id, file);
        });
        Files.insert(formData, 'photo').then(function (response) {
            $scope.category.photos = $scope.category.photos || [];
            $scope.category.photos = $scope.category.photos.concat(response.data);
            $scope.save();
        })
    };

}
CategoryPhotoCtrl.$inject = ['$scope', '$stateParams', 'Category', 'Files'];

angular.module('controller').controller('CategoryPhotoCtrl', CategoryPhotoCtrl);
