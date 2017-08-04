ParameterRouter.$inject = ['$stateProvider', 'config','OnExitHandlerProvider'];

function ParameterRouter($stateProvider, config,OnExitHandlerProvider) {
    var baseCommon = config.path + 'common/',
        basePages = config.path + 'pages/parameter/';
    $stateProvider
        .state('root.parameters', {
            abstract: true,
            url: '/parameters',
            views: {
                'menu@': {
                    templateUrl: baseCommon + 'menu/menu.html',
                    controller: 'MenuCtrl'
                }
            },
            data: {
                menus: [
                    {state: 'root.parameters.new', name: 'Создать'},
                    {state: 'root.parameters.list', name: 'Список'}
                ],
                toState: {
                    new: 'root.parameters.new',
                    edit: 'root.parameters.edit',
                    list: 'root.parameters.list',
                    delete: 'root.parameters.delete'
                }
            }
        })
        .state('root.parameters.new', {
            url: '/new',
            views: {
                'content@': {
                    templateUrl: basePages + 'edit/edit.html',
                    controller: 'ParameterNewCtrl'
                },
                'header@base': {
                    template: '<h2>Создать параметр</h2>'
                }
            }
        })
        .state('root.parameters.edit', {
            url: '/edit/{id}',
            views: {
                'content@': {
                    templateUrl: basePages + 'edit/edit.html',
                    controller: 'ParameterEditCtrl'
                },
                'header@base': {
                    template: '<h2>Редактор параметра</h2>'
                }
            },
            onExit: OnExitHandlerProvider.$get()
        })
        .state('root.parameters.list', {
            url: '/list',/*/{id}*/
            views: {
                'content@': {
                    templateUrl: basePages + 'list/list.html',
                    controller: 'ParameterListCtrl'
                },
                'header@base': {
                    template: '<h2>Список параметров</h2>'
                },
                'pager@': {
                    templateUrl: baseCommon + 'pager/pager.html',
                    controller: 'PagerCtrl'
                },
                'filter@base': {
                    templateUrl: basePages + 'filter/filter.html',
                    controller: 'ParameterFilterCtrl'
                }
            },
            data: {
                filterName: 'ParametersList'
            }
        })
        .state('root.parameters.add', {
            url: '/add/{id}',
            views: {
                'content@': {
                    templateUrl: basePages + 'add/add.html',
                    controller: 'ParameterAddCtrl'
                },
                'header@base': {
                    template: '<h2>Фильтры параметров для продукта</h2>'
                }
            }
        })
        .state('root.parameters.delete', {
            url: '/delete/{id}',
            views: {
                'content@': {
                    templateUrl: basePages + 'delete/delete.html',
                    controller: 'ParameterDeleteCtrl'
                },
                'header@base': {
                    template: '<h2>Удаление параметра</h2>'
                }
            }
        });
}


angular.module('router').config(ParameterRouter);