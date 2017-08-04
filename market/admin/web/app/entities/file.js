function Files($http) {
    return {
        insert: function (item, dataType) {
            return $http.post('/admin/api/file/insert?dataType=' + dataType, item, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
        },
        convert: function (productId, fileId) {
            return $http.post('/admin/api/file/convert', {
                pid: productId,
                fid: fileId
            })
        },
        resize: function (folderId, fileId, dataType) {
            return $http.post('/admin/api/file/resize', {
                folderId: folderId,
                fileId: fileId,
                type: dataType
            });
        },
        remove: function (folderId, fileId) {
            return $http.post('/admin/api/file/remove', {
                folderId: folderId,
                fileId: fileId
            });
        }
    };
}

Files.$inject = ['$http'];

angular.module('entity').factory('Files', Files);