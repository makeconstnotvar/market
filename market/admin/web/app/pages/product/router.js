ProductsRouter.$inject = ['$stateProvider', 'config', 'OnExitHandlerProvider'];


function ProductsRouter($stateProvider, config, OnExitHandlerProvider) {
    var baseCommon = config.path + 'common/',
        basePages = config.path + 'pages/product/';
    $stateProvider
        .state('root.products', {
            url: '/products',
            abstract: true,
            views: {
                'menu@': {
                    templateUrl: baseCommon + 'menu/menu.html',
                    controller: 'MenuCtrl'
                }
            },
            data: {
                menus: [
                    {state: 'root.products.new', name: 'Создать'},
                    {state: 'root.products.list', name: 'Список'}
                ],
                toState: {
                    category: 'root.products.category',
                    categoryEdit: 'root.categories.tabs.main',
                    categoryDelete: 'root.categories.delete',
                    main: 'root.products.tabs.main',
                    photo: 'root.products.tabs.photo',
                    info: 'root.products.tabs.info',
                    new: 'root.products.new',
                    delete: 'root.products.delete',
                    list: 'root.products.list'
                }
            }
        })
        .state('root.products.list', {
            url: '/list?{page}',
            views: {
                'content@': {
                    templateUrl: basePages + 'list/list.html',
                    controller: 'ProductListCtrl'
                },
                'header@base': {
                    template: '<h2>Список продуктов</h2>'
                },
                'pager@': {
                    templateUrl: baseCommon + 'pager/pager.html',
                    controller: 'PagerCtrl'
                },
                'filter@base': {
                    templateUrl: basePages + 'filter/filter.html',
                    controller: 'ProductFilterCtrl'
                }
            },
            data: {
                filterName: 'ProductsList'
            }
        })
        .state('root.products.delete', {
            url: '/delete/{pid}',
            views: {
                'content@': {
                    templateUrl: basePages + 'delete/delete.html',
                    controller: 'ProductDeleteCtrl'
                },
                'header@base': {
                    template: '<h2>Удалить продукт</h2>'
                }
            }
        })
        .state('root.products.new', {
            url: '/new',
            views: {
                'content@': {
                    templateUrl: basePages + 'new/new.html',
                    controller: 'ProductsNewCtrl'
                },
                'header@base': {
                    template: '<h2>Создать новый продукт</h2>'
                }
            }
        })
        .state('root.products.category', {
            url: '/category/{pid}',
            views: {
                'content@': {
                    templateUrl: basePages + 'category/category.html',
                    controller: 'ProductCategoryCtrl'
                },
                'header@base': {
                    template: '<h2>Указать категорию продукта</h2>'
                }
            }
        })
        .state('root.products.tabs', {
            abstract: true,
            views: {
                'tabs@base': {
                    templateUrl: baseCommon + 'tabs/tabs.html',
                    controller: 'TabsCtrl'
                },
                'content@': {
                    templateUrl: basePages + 'tabs/tabs.html',
                    controller: 'ProductTabsCtrl'
                }
            },
            data: {
                tabs: [
                    {state: 'root.products.tabs.main', name: 'Основные'},
                    {state: 'root.products.tabs.info', name: 'Описание'},
                    {state: 'root.products.tabs.photo', name: 'Фотографии'},
                    {state: 'root.products.tabs.video', name: 'Видео'},
                    {state: 'root.products.tabs.file', name: 'Файлы'},
                    {state: 'root.products.tabs.convert', name: 'Текст из файла'}
                ]
            },
            onExit: OnExitHandlerProvider.$get()
        })
        .state('root.products.tabs.main', {
            url: '/main/{pid}',
            views: {
                'editor@root.products.tabs': {
                    templateUrl: basePages + 'tabs/main/main.html',
                    controller: 'ProductMainCtrl'
                },
                'header@base': {
                    template: '<h2>Основные характеристики</h2>'
                }
            }
        })
        .state('root.products.tabs.info', {
            url: '/info/{pid}',
            views: {
                'editor@root.products.tabs': {
                    templateUrl: basePages + 'tabs/info/info.html',
                    controller: 'ProductInfoCtrl'
                },
                'header@base': {
                    template: '<h2>Описание продукта</h2>'
                }
            }
        })
        .state('root.products.tabs.photo', {
            url: '/photo/{pid}',
            views: {
                'editor@root.products.tabs': {
                    templateUrl: basePages + 'tabs/photo/photo.html',
                    controller: 'ProductPhotoCtrl'
                },
                'header@base': {
                    template: '<h2>Фотографии продукта</h2>'
                }
            }
        })
        .state('root.products.tabs.video', {
            url: '/video/{pid}',
            views: {
                'editor@root.products.tabs': {
                    templateUrl: basePages + 'tabs/video/video.html',
                    controller: 'ProductVideoCtrl'
                },
                'header@base': {
                    template: '<h2>Видео продукта</h2>'
                }
            }
        })
        .state('root.products.tabs.file', {
            url: '/file/{pid}',
            views: {
                'editor@root.products.tabs': {
                    templateUrl: basePages + 'tabs/file/file.html',
                    controller: 'ProductFileCtrl'
                },
                'header@base': {
                    template: '<h2>Файлы продукта</h2>'
                }
            }
        })
        .state('root.products.tabs.convert', {
            url: '/convert/{pid}',
            views: {
                'editor@root.products.tabs': {
                    templateUrl: basePages + 'tabs/convert/convert.html',
                    controller: 'СonvertCtrl'
                },
                'header@base': {
                    template: '<h2>Текст из файла</h2>'
                }
            }
        });
}


angular.module('router').config(ProductsRouter);