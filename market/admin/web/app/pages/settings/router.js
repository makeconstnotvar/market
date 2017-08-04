SettingsRouter.$inject = ['$stateProvider', 'config', 'OnExitHandlerProvider'];

function SettingsRouter($stateProvider, config, OnExitHandlerProvider) {
    var baseCommon = config.path + 'common/',
        basePages = config.path + 'pages/settings/';
    $stateProvider
        .state('root.settings', {
            abstract: true,
            url: '/settings',
            views: {
                'tabs@base': {
                    templateUrl: baseCommon + 'tabs/tabs.html',
                    controller: 'TabsCtrl'
                },
                'header@base': {
                    template: '<h2>Настройки</h2>'
                }
            },
            data: {
                toState: {
                    main: 'root.settings.main',
                    seo: 'root.settings.seo',
                    operations: 'root.settings.operations'
                },
                tabs: [
                    {state: 'root.settings.main', name: 'Основные'},
                    {state: 'root.settings.seo', name: 'Поисковые'},
                    {state: 'root.settings.operations', name: 'Служебные'}
                ]
            },
            onExit: OnExitHandlerProvider.$get()
        })

        .state('root.settings.main', {
            url: '/main',
            views: {
                'content@': {
                    templateUrl: basePages + 'main/main.html',
                    controller: 'SettingsMainCtrl'
                },
                'header@base': {
                    template: '<h2>Основные настройки</h2>'
                }

            }
        })
        .state('root.settings.seo', {
            url: '/seo',
            views: {
                'content@': {
                    templateUrl: basePages + 'seo/seo.html',
                    controller: 'SettingsSeoCtrl'
                },
                'header@base': {
                    template: '<h2>Поисковые настройки</h2>'
                }

            }
        })
        .state('root.settings.operations', {
            url: '/operations',
            views: {
                'content@': {
                    templateUrl: basePages + 'operations/operations.html',
                    controller: 'OperationsCtrl'
                },
                'header@base': {
                    template: '<h2>Служебные настройки</h2>'
                }

            }
        })
}

angular.module('router').config(SettingsRouter);