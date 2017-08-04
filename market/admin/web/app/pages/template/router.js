TemplatesRouter.$inject = ['$stateProvider', 'config','OnExitHandlerProvider'];

function TemplatesRouter($stateProvider, config,OnExitHandlerProvider) {
    var baseCommon = config.path + 'common/',
        basePages = config.path + 'pages/template/';
    $stateProvider
        .state('root.templates', {
            abstract: true,
            url: '/templates',
            views: {
                'menu@': {
                    templateUrl: baseCommon + 'menu/menu.html',
                    controller: 'MenuCtrl'
                }
            },
            data: {
                menus: [
                    {state: 'root.templates.new', name: 'Создать'},
                    {state: 'root.templates.list', name: 'Список'}
                ],
                toState: {
                    new: 'root.templates.new',
                    edit: 'root.templates.edit',
                    list: 'root.templates.list',
                    delete: 'root.templates.delete',
                    paramEdit: 'root.parameters.edit'
                },
                filterName: 'TemplateParametersList'
            }
        })
        .state('root.templates.new', {
            url: '/new?{page}',
            views: {
                'content@': {
                    templateUrl: basePages + 'edit/edit.html',
                    controller: 'TemplatesEditCtrl'
                },
                'header@base': {
                    template: '<h2>Создать шаблон</h2>'
                },
                'pager@': {
                    templateUrl: baseCommon + 'pager/pager.html',
                    controller: 'PagerCtrl'
                }
            }
        })
        .state('root.templates.edit', {
            url: '/edit/{tid}?{page}',
            views: {
                'content@': {
                    templateUrl: basePages + 'edit/edit.html',
                    controller: 'TemplatesEditCtrl'
                },
                'header@base': {
                    template: '<h2>Редактор шаблона</h2>'
                },
                'pager@': {
                    templateUrl: baseCommon + 'pager/pager.html',
                    controller: 'PagerCtrl'
                }
            },
            onExit: OnExitHandlerProvider.$get()
        })
        .state('root.templates.list', {
            url: '/list',//{cid}
            views: {
                'content@': {
                    templateUrl: basePages + 'list/list.html',
                    controller: 'TemplatesListCtrl'
                },
                'header@base': {
                    template: '<h2>Список шаблонов</h2>'
                }
            }
        })
        .state('root.templates.delete', {
            url: '/delete/{tid}/{сid}',
            views: {
                'content@': {
                    templateUrl: basePages + 'delete/delete.html',
                    controller: 'TemplatesDeleteCtrl'
                },
                'header@base': {
                    template: '<h2>Удаление шаблона</h2>'
                }
            }
        });
}


angular.module('router').config(TemplatesRouter);