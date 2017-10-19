States.$inject = ['$q'];

function States($q) {

    var deferred = $q.defer();

    var states = [
        {state: null, name: 'Выбрать'},
        {state: 'specials', name: 'Главная'},
        {state: 'contacts', name: 'Контакты'},
        {state: 'delivery', name: 'Доставка'},
        {state: 'stocks', name: 'Акции'},
        {state: 'notfound', name: '404'},
        {state: 'cart', name: 'Корзина'},
        {state: 'history', name: 'История покупок'}
    ];

    deferred.resolve({data: states});

    return {
        selectAll: function () {
            return deferred.promise;
        }
    };
}


angular.module('entity').service('States', States);