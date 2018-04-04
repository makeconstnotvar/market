
ContractRouter.$inject = ['$stateProvider','config','OnExitHandlerProvider'];

function ContractRouter($stateProvider,config,OnExitHandlerProvider) {
    var baseCommon = config.path +'common/',
        basePages = config.path +'pages/contract/';
    $stateProvider
        .state('root.contracts', {
            abstract: true,
            url: '/contracts',
            views: {
                'menu@': {
                    templateUrl: baseCommon+'menu/menu.html',
                    controller: 'MenuCtrl'
                }
            },
            data: {
                menus: [
                    {state: 'root.contracts.new', name: 'Создать'},
                    {state: 'root.contracts.list.placed', name: 'Список'}
                ],
                toState: {
                    status: 'root.contracts.status',
                    list: 'root.contracts.list.placed',
                    edit: 'root.contracts.edit',
                    delete: 'root.contracts.delete',
                    new: 'root.contracts.new',
                    products:'root.contracts.edit.products.template'
                }
            }
        })
        .state('root.contracts.new', {
            url: '/new',
            views: {
                'content@': {
                    templateUrl: basePages+'edit/edit.html',
                    controller: 'ContractNewCtrl'
                },
                'header@base': {
                    template: '<h2>Новый заказ</h2>'
                }
            }
        })
        .state('root.contracts.edit', {
            url: '/edit/{id}',
            views: {
                'tabs@base': {
                    templateUrl: baseCommon+'tabs/tabs.html',
                    controller: 'TabsCtrl'
                },
                'content@': {
                    templateUrl: basePages+'edit/edit.html',
                    controller: 'ContractEditCtrl'
                },
                'header@base': {
                    template: '<h2>Редактор заказа</h2>'
                }
            },
            data: {
                tabs: [
                    {state: 'root.contracts.edit', name: 'Контракт'},
                    {state: 'root.contracts.edit.products.template', name: 'Продукты'}
                ]
            },
            onExit: OnExitHandlerProvider.$get()
        })
        .state('root.contracts.edit.products', {
            url: '',
            abstract:true,
            views: {
                'content@': {
                    templateUrl: basePages+'products/products.html',
                    controller: 'ContractProductsCtrl'
                },
                'header@base': {
                    template: '<h2>Добавить продукт в заказ</h2>'
                }
            }
        })
        .state('root.contracts.edit.products.template', {
            url: '/products?{page}',
            views: {
                'products@root.contracts.edit.products': {
                    templateUrl: baseCommon+'product/list.html',
                    controller: 'ProductAddListCtrl'
                },
                'pager@':{
                    templateUrl: baseCommon + 'pager/pager.html',
                    controller: 'PagerCtrl'
                },
                'filter@root.contracts.edit.products': {
                    templateUrl: config.path +'pages/product/filter/filter.html',
                    controller: 'ProductFilterCtrl'
                }
            },
            data: {
                filterName:'contractProducts'
            }
        })
        .state('root.contracts.status', {
            url: '/status/{id}/{status}',
            views: {
                'content@': {
                    templateUrl: basePages+'status/status.html',
                    controller: 'ContractStatusCtrl'
                },
                'header@base': {
                    template: '<h2>Изменить статус заказа</h2>'
                }
            }
        })
        .state('root.contracts.delete', {
            url: '/delete/{id}',
            views: {
                'content@': {
                    templateUrl: basePages+'delete/delete.html',
                    controller: 'ContractDeleteCtrl'
                },
                'header@base': {
                    template: '<h2>Удалить заказ</h2>'
                }
            }
        })
        .state('root.contracts.list', {
            abstract: true,
            url:'/list',
            views: {
                'tabs@base': {
                    templateUrl: baseCommon+'tabs/tabs.html',
                    controller: 'TabsCtrl'
                },
                'content@': {
                    templateUrl: basePages+'list/list.html',
                    controller: 'ContractCtrl'
                }

            },
            data: {
                status: 'placed',
                tabs: [
                    {state: 'root.contracts.list.placed', name: 'Новые'},
                    {state: 'root.contracts.list.progress', name: 'Исполняются'},
                    {state: 'root.contracts.list.done', name: 'Выполнены'},
                    {state: 'root.contracts.list.cancel', name: 'Отменены'},
                    {state: 'root.contracts.list.delete', name: 'Удалены'},
                    {state: 'root.contracts.list.temp', name: 'Временные'}
                ]

            }
        })
        .state('root.contracts.list.placed', {
            url: '/placed',
            data: {
                status: 'placed'
                
            }

        })
        .state('root.contracts.list.progress', {
            url: '/progress',
            data: {
                status: 'progress',
                emptyMessage:'Отсутствуют контракты в статусе "Исполняются"'
            }
        })
        .state('root.contracts.list.done', {
            url: '/done',
            data: {
                status: 'done',
                emptyMessage:'Отсутствуют контракты в статусе "Выполнены"'
            }
        })
        .state('root.contracts.list.cancel', {
            url: '/cancel',
            data: {
                status: 'cancel',
                emptyMessage:'Отсутствуют контракты в статусе "Отменены"'
            }
        })
        .state('root.contracts.list.temp', {
            url: '/temp',
            data: {
                status: 'temp',
                emptyMessage:'Отсутствуют контракты в статусе "Временный"'
            }
        })
        .state('root.contracts.list.delete', {
            url: '/delete',
            data: {
                status: 'delete',
                emptyMessage:'Отсутствуют контракты в статусе "Удалены"'
            }
        })

}

angular.module('router').config(ContractRouter);