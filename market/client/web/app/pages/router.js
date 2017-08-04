function RootRouter($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $urlRouterProvider.otherwise('/');
    $urlMatcherFactoryProvider.strictMode(false);
    var baseCommon = 'common/';
    var basePages = 'pages/';
    $stateProvider
        .state('root', {
            abstract: true,
            views: {
                'navbar': {
                    templateUrl: baseCommon + 'navbar/navbar.html',
                    controller: 'NavbarCtrl'
                },
                'jumbo': {
                    templateUrl: baseCommon + 'jumbo/jumbo.html',
                    controller: 'JumboCtrl'
                },
                'tabs': {
                    templateUrl: baseCommon + 'tabs/tabs.html',
                    controller: 'TabsCtrl'
                },
                'footer': {
                    templateUrl: baseCommon + 'footer/footer.html'
                }
            }
        })
        .state('error', {
            url: '/error?url',
            parent: 'root',
            views: {
                'jumbo@':{
                    templateUrl: basePages + 'error/jumbo/jumbo.html'
                },
                'tabs@':{
                    templateUrl: basePages + 'error/tabs/tabs.html'
                },
                'content@': {
                    templateUrl: basePages + 'error/404/404.html',
                    controller: 'ErrorCtrl'
                }
            }
        })
        .state('cart', {
            url: '/cart',
            parent: 'root',
            views: {
                'content@': {
                    templateUrl: basePages + 'cart/cart.html',
                    controller: 'CartCtrl'
                }
            }
        })
        .state('cart.history', {
            url: '/{cid}',
            views: {
                'content@': {
                    templateUrl: basePages + 'cart/history/history.html',
                    controller: 'HistoryCtrl'
                }
            }
        })
        .state('delivery', {
            url: '/delivery',
            parent: 'root',
            abstract: true,
            views: {
                'content@': {
                    templateUrl: basePages + 'delivery/delivery.html',
                    controller: 'DeliveryCtrl'
                }
            }
        })
        .state('delivery.manual', {
            url: '/manual',
            views: {
                'section@delivery': {
                    templateUrl: basePages + 'delivery/manual/manual.html',
                    controller: 'ManualCtrl'
                }
            }
        })
        .state('delivery.auto', {
            url: '/auto',
            views: {
                'section@delivery': {
                    templateUrl: basePages + 'delivery/auto/auto.html'
                }
            }
        })
        .state('delivery.guarantee', {
            url: '/guarantee',
            views: {
                'section@delivery': {
                    templateUrl: basePages + 'delivery/guarantee/guarantee.html'
                }
            }
        })
        .state('specials', {
            url: '/',
            parent: 'root',
            views: {
                'content@': {
                    templateUrl: basePages + 'specials/specials.html',
                    controller: 'SpecialsCtrl'
                }
            }
        })
        .state('base', {
            url: '',
            parent: 'root',
            abstract: true,
            views: {
                'content@': {
                    templateUrl: basePages + 'list/index.html',
                    controller: 'IndexListCtrl'
                }
            }
        })
        .state('list', {
            url: '/{catid}',
            parent: 'base',
            views: {
                'list@base': {
                    templateUrl: basePages + 'list/items/items.html',
                    controller: 'ListCtrl'
                },
                'menu@base': {
                    templateUrl: basePages + 'list/filter/filter.html',
                    controller: 'FilterCtrl'
                }
            }
        })
        .state('list.page', {
            url: '/page/{page}',
            views: {
                'list@base': {
                    templateUrl: basePages + 'list/items/items.html',
                    controller: 'ListCtrl'
                },
                'menu@base': {
                    templateUrl: basePages + 'list/filter/filter.html',
                    controller: 'FilterCtrl'
                }
            }
        })
        .state('list.page.query', {
            url: '/{query}',
            views: {
                'list@base': {
                    templateUrl: basePages + 'list/items/items.html',
                    controller: 'ListCtrl'
                },
                'menu@base': {
                    templateUrl: basePages + 'list/filter/filter.html',
                    controller: 'FilterCtrl'
                }
            }
        })
        .state('view', {
            url: '/{catid}/{pid}',
            parent: 'root',
            views: {
                'content@': {
                    templateUrl: basePages + 'view/view.html',
                    controller: 'ViewCtrl'
                }
            }
        });
}

RootRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider'];

angular.module('router').config(RootRouter);