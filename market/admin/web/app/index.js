angular.module('underscore')
    .factory('_', function () {
        return window._;
    });

angular.module('beautify')
    .factory('beautify', function () {
        return window.html_beautify;
    });

angular.module('translit')
    .factory('translit', function () {
        return function (str) {
            if (!str)
                return str;
            var tr = 'a b v g d e zh z i y k l m n o p r s t u f h c ch sh shch ~ y ~ e yu ya ~ e'.split(' ');
            var ww = '';
            str = str.toLowerCase().trim();
            for (var i = 0; i < str.length; ++i) {
                var cc = str.charCodeAt(i);
                var ch = (cc >= 1072 ? tr[cc - 1072] : str[i]);
                ww += ch;
            }
            return (ww.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-\s]/g, '').replace(/[-]{2,}/gim, '-').replace(/^\-+/g, '').replace(/\-+$/g, ''));
        };
    });

angular.module('router')
    .run(['$state', '$rootScope', '$timeout', function ($state, $rootScope, $timeout) {

        $rootScope.$on('$stateChangeSuccess', function (e, toState, toParams, fromState, fromParams) {
            $rootScope.$broadcast('updateActivate', {state: toState});
            $rootScope.$broadcast('state:change', {state: toState, params: toParams});
            $timeout(function () {
                $rootScope.showMagaz = true;
            });
            $state.previousState = fromState;
            $state.previousParams = fromParams;
        });

    }])
    .constant('config', {
        'path': 'admin/',
        'stockText': 'Акция! Товар продается со скидкой.'
    });
    




