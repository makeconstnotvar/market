function Settings($http, Base) {
    var item = {
        upsert:function (item) {
            return $http.post('/admin/api/settings/upsert', item);
        }
    };

    Base.call(item, 'settings');

    return item;
}
Settings.$inject = ['$http', 'Base'];

angular.module('entity').factory('Settings', Settings);

