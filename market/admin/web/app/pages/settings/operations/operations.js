OperationsCtrl.$inject = ['$scope', '$rootScope', '$state', 'Operation', 'Settings', 'clientConfig'];

function OperationsCtrl($scope, $rootScope, $state, Operation, Settings, clientConfig) {

    $scope.host = clientConfig.data.host;

    Settings.select({projection: {'ymlParams': 1}}).then(function (response) {
        $scope.ymlParams = response.data.ymlParams;
    });

    $scope.sitemap = function () {
        Operation.sitemap().then(function (response) {
            $rootScope.$broadcast('status:success', 'Sitemap.xml создан');
            logTxt(response.data.xml);
        }, function (response) {
            $rootScope.$broadcast('status:error', 'Ошибка создания sitemap.xml');
            logTxt(response.data);
        })
    };

    $scope.yml = function () {
        Settings.upsert({ymlParams: $scope.ymlParams})
            .then(function () {
                $rootScope.$broadcast('status:success', 'Настройки сохранены');
                Operation.yml($scope.ymlParams)
                    .then(function (response) {
                        $rootScope.$broadcast('status:success', 'Прайс лист YML создан');
                        logTxt(response.data);
                    }, function (response) {
                        $rootScope.$broadcast('status:error', 'Ошибка создания прайс листа YML');
                        logTxt(response.data);
                    })
            }, function (response) {
                $rootScope.$broadcast('status:error', 'Настройки не сохранены');
                logTxt(response.data);
            })
    };

    $scope.resizeAll = function () {
        Operation.resizeAll() //socket log
            .then(function (response) {
                logJson(response.data);
            }, function (response) {
                logTxt(response.data);
            })
    };

    function logTxt(txt) {
        $scope.log = txt;
    }

    function logJson(json) {
        $scope.log = JSON.stringify(json, null, '\t');
    }
}

angular.module('controller').controller('OperationsCtrl', OperationsCtrl);
