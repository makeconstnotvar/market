function ProductVideoCtrl($scope,   $sce, _) {
        $scope.trustSrc = function trustSrc(src) {
        return $sce.trustAsResourceUrl(src);
    };

    $scope.addVideo = function addVideo() {
        $scope.product.videos = $scope.product.videos || [];
        $scope.product.videos.push({path: $scope.uploadvideo});
        delete $scope.uploadvideo;
    };

    $scope.deleteVideo = function deleteVideo() {
        var currentVideo = this.video;

        $scope.product.videos = _.filter($scope.product.videos, function (video) {
            return video.$$hashKey != currentVideo.$$hashKey;
        });
    };
}

ProductVideoCtrl.$inject = ['$scope', '$sce', '_'];

angular.module('controller').controller('ProductVideoCtrl', ProductVideoCtrl);
