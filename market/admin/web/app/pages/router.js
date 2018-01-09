RootRouter.$inject = ['$stateProvider', '$urlRouterProvider', 'config'];

function RootRouter($stateProvider, $urlRouterProvider, config) {
    //viewname@statename
    var baseCommon = config.path + 'common/',
        basePages = config.path + 'pages/login/';
    $urlRouterProvider.otherwise(config.path + 'products/list');

    $stateProvider
        .state('base', {
            url: '/admin',
            abstract: true,
            views: {
                'base': {
                    templateUrl: baseCommon + 'base/base.html',
                    controller: 'BaseCtrl'
                }
            }
        })
        .state('root', {
            url: '',
            resolve:{
                clientConfig:  ['Settings',function(Settings){
                    return Settings.config();
                }],
            },
            parent: 'base',
            abstract: true,
            views: {
                'navbar@': {
                    templateUrl: baseCommon + 'navbar/navbar.html',
                    controller: 'NavbarCtrl'
                },
                'progress@': {
                    templateUrl: baseCommon + 'progress/progress.html',
                    controller: 'ProgressCtrl'
                },
                'status@':{
                    templateUrl: baseCommon + 'status/status.html',
                    controller: 'StatusCtrl'
                }
            },
            data: {
                navs: [
                    {state: 'root.products.list', name: 'продукты'},
                    {state: 'root.categories.list', name: 'категории'},
                    {state: 'root.templates.list', name: 'шаблоны'},
                    {state: 'root.parameters.list', name: 'параметры'},
                    {state: 'root.contracts.list.placed', name: 'заказы'},
                    {state: 'root.settings.main', name: 'настройки'}
                ]
            }
        })
        .state('login', {
            url: '/admin/login?url',
            views: {
                'content': {
                    templateUrl: basePages + 'login.html',
                    controller: 'LoginCtrl'
                }
            }
        })
        .state('error', {
            url: '/admin/error',
            views: {
                'content': {
                    templateUrl: baseCommon + 'error/error.html',
                    controller: 'ErrorCtrl'
                }
            }
        });
}


angular.module('router').config(RootRouter);