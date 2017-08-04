CategoryRouter.$inject = ['$stateProvider', 'config','OnExitHandlerProvider'];

function CategoryRouter($stateProvider, config,OnExitHandlerProvider) {
    var baseCommon = config.path + 'common/',
        basePages = config.path + 'pages/category/';
    $stateProvider
        .state('root.categories', {
            url: '/categories',
            abstract: true,
            views: {
                'menu@': {
                    templateUrl: baseCommon + 'menu/menu.html',
                    controller: 'MenuCtrl'
                },
                'content@': {
                    templateUrl: basePages + 'wrap.html',
                    controller: 'CategoryWrapCtrl'
                }
            },
            data: {
                menus: [
                    {state: 'root.categories.new', name: 'Создать'},
                    {state: 'root.categories.list', name: 'Список'}
                ],
                toState: {
                    new: 'root.categories.new',
                    list: 'root.categories.list',
                    delete: 'root.categories.delete',
                    edit: 'root.categories.tabs.main',
                    template: 'root.categories.template',
                    parent: 'root.categories.parent'
                }
            }
        })
        .state('root.categories.list', {
            url: '/list',
            views: {
                'wrap@root.categories': {
                    templateUrl: basePages + 'list/list.html',
                    controller: 'CategoryListCtrl'
                },
                'header@base': {
                    template: '<h2>Список категорий</h2>'
                }
            }
        })
        .state('root.categories.new', {
            url: '/new',
            views: {
                'wrap@root.categories': {
                    templateUrl: basePages + 'new/new.html',
                    controller: 'CategoryNewCtrl'
                },
                'header@base': {
                    template: '<h2>Создать новую категорию</h2>'
                }
            }
        })
        .state('root.categories.delete', {
            url: '/delete/{cid}',
            views: {
                'content@': {
                    templateUrl: basePages + 'delete/delete.html',
                    controller: 'CategoryDeleteCtrl'
                },
                'header@base': {
                    template: '<h2>Удалить категорию</h2>'
                }
            }
        })
        .state('root.categories.template', {
            url: '/template/{cid}',
            views: {
                'content@': {
                    templateUrl: basePages + 'template/template.html',
                    controller: 'CategoryTemplateCtrl'
                },
                'header@base': {
                    template: '<h2>Выбрать шаблон параметров для категории</h2>'
                }
            }
        })
        .state('root.categories.parent', {
            url: '/parent/{cid}',
            views: {
                'content@': {
                    templateUrl:basePages +  'parent/parent.html',
                    controller: 'CategoryParentCtrl'
                },
                'header@base': {
                    template: '<h2>Выбрать родительскую категорию</h2>'
                }
            }
        })
        .state('root.categories.tabs', {
            abstract: true,
            url: '/edit',
            views: {
                'tabs@base': {
                    templateUrl: baseCommon + 'tabs/tabs.html',
                    controller: 'TabsCtrl'
                },
                'wrap@root.categories': {
                    templateUrl: basePages + 'tabs/tabs.html',
                    controller: 'CategoryTabsCtrl'
                }
            },
            data: {
                tabs: [
                    {state: 'root.categories.tabs.main', name: 'Основные'},
                    {state: 'root.categories.tabs.info', name: 'Описание'},
                    {state: 'root.categories.tabs.photo', name: 'Фотографии'},
                    {state: 'root.categories.tabs.file', name: 'Файлы'}
                ]
            },
            onExit: OnExitHandlerProvider.$get()
        })
        .state('root.categories.tabs.main', {
            url: '/{cid}',
            views: {
                'editor@root.categories.tabs': {
                    templateUrl: basePages + 'tabs/main/main.html',
                    controller: 'CategoryMainCtrl'
                },
                'header@base': {
                    template: '<h2>Основные характеристики</h2>'
                }
            }
        })
        .state('root.categories.tabs.info', {
            url: '/info/{cid}',
            views: {
                'editor@root.categories.tabs': {
                    templateUrl: basePages + 'tabs/info/info.html',
                    controller: 'CategoryInfoCtrl'
                },
                'header@base': {
                    template: '<h2>Описание категории</h2>'
                }
            }
        })
        .state('root.categories.tabs.photo', {
            url: '/photo/{cid}',
            views: {
                'editor@root.categories.tabs': {
                    templateUrl: basePages + 'tabs/photo/photo.html',
                    controller: 'CategoryPhotoCtrl'
                },
                'header@base': {
                    template: '<h2>Фотографии категории</h2>'
                }
            }
        })
        .state('root.categories.tabs.file', {
            url: '/file/{cid}',
            views: {
                'editor@root.categories.tabs': {
                    templateUrl: basePages + 'tabs/file/file.html',
                    controller: 'CategoryFileCtrl'
                },
                'header@base': {
                    template: '<h2>Файлы категории</h2>'
                }
            }
        })
}


angular.module('router').config(CategoryRouter);