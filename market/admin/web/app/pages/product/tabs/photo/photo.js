ProductPhotoCtrl.$inject = ['$scope', '$stateParams', 'Files'];

function ProductPhotoCtrl($scope, $stateParams, Files) {

    $scope.resize = function (dataType) {
        Files.resize($stateParams.pid, this.photo.fileId, dataType);
    };

    $scope.remove = function (fileId) {
        $scope.product.photos = $scope.product.photos.filter(function (photo) {
            return photo.fileId != fileId;
        });
        Files.remove($stateParams.pid, fileId).then(function () {
            $scope.save();
        });
    };

    $scope.onFileSelect = function (files) {
        var formData = new FormData();
        files.forEach(function (file) {
            formData.append($scope.product._id, file);
        });
        Files.insert(formData, 'photo').then(function (response) {
            $scope.product.photos = $scope.product.photos || [];
            $scope.product.photos = $scope.product.photos.concat(response.data);
            setDefaultFileType();
            $scope.save();
        })
    };

    $scope.refresh = function () {
        $scope.product.photos.forEach(function (photo) {
            Files.resize($stateParams.pid, photo.fileId, photo.fileType);
        })
    };

    $scope.getClass = function (type) {
        switch (type) {
            case 'cover':
                return 'mm-cover';
            case 'list':
                return 'mm-list';
            case 'image':
                return 'mm-image';
        }

    };

    function setDefaultFileType() {
        $scope.product.photos.forEach(function (photo) {
            photo.fileType = photo.fileType || 'image';
        })
    }
}

angular.module('controller').controller('ProductPhotoCtrl', ProductPhotoCtrl);
