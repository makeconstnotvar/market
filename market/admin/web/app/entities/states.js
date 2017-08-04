States.$inject = ['$stateParams', '$q', 'Category'];

function States($stateParams, $q, Category) {

    var deferred = $q.defer();

    var states = [
        {state: null, name: 'Выбрать'},
        {state: 'cart', name: 'Корзина'},
        {state: 'delivery.manual', name: 'Самовывоз'},
        {state: 'delivery.auto', name: 'Доставка'},
        {state: 'delivery.guarantee', name: 'Гарантии'},
        {state: 'specials', name: 'Главная'}
    ];

    deferred.resolve({data: states});

    return {
        selectAll: function () {
            return deferred.promise;
        }
    };
}


angular.module('entity').service('States', States);