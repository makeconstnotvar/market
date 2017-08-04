function Status($stateParams, $q) {
    var deferred = $q.defer();

    var statuses = [
        {id: 'new', name: 'временный'},
        {id: 'placed', name: 'новый'},
        {id: 'progress', name: 'исполняется'},
        {id: 'done', name: 'выполнен'},
        {id: 'cancel', name: 'отменен'},
        {id: 'delete', name: 'удален'}
    ];
    deferred.resolve({data:statuses});
    return {
        selectAll: function () {
            return deferred.promise;
        }
    };
}

Status.$inject = ['$stateParams','$q'];

angular.module('entity').service('Status', Status);