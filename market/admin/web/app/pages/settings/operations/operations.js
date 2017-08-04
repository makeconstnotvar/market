OperationsCtrl.$inject = ['$scope', '$rootScope', '$state', 'Operation', 'Settings'];

function OperationsCtrl($scope, $rootScope, $state, Operation, Settings) {

    Settings.select({projection: {'ymlParams': 1}}).then(function (response) {
        $scope.ymlParams = response.data.ymlParams;
    });

    //var socket = io.connect("http://127.0.0.1:3001");
    /*var socket = io.connect("http://fastlight.debug");

     socket.on("tweet", function (msg) {
     $scope.tweet = msg;
     });
     socket.on("broad", function (msg) {
     $scope.broad = msg;
     });
     socket.on("other", function (msg) {
     $scope.other = msg;
     });*/

    $scope.sitemap = function () {
        Operation.sitemap().then(function (response) {
            $rootScope.$broadcast('status:success', 'Sitemap.xml создан');
            logTxt(response.data.xml);
        },function (response) {
            $rootScope.$broadcast('status:error', 'Ошибка создания sitemap.xml');
            logTxt(response.data);
        })
    };

    $scope.prerender = function () {//socket log
        Operation.prerender({all: true})
            .success(function (response) {
                logJson(response.data);
            })
            .error(function (response) {
                logTxt(response.data);
            })
    };

    $scope.prerenderSrv = function () {
        Operation.prerender({special: true})//socket log
            .success(function (response) {
                logJson(response.data);
            })
            .error(function (response) {
                logTxt(response.data);
            })
    };

    $scope.yml = function () {
        Settings.upsert({ymlParams: $scope.ymlParams})
            .success(function () {
                $rootScope.$broadcast('status:success', 'Настройки сохранены');
                Operation.yml($scope.ymlParams)
                    .success(function (response) {
                        $rootScope.$broadcast('status:success', 'Прайс лист YML создан');
                        logTxt(response.data);
                    })
                    .error(function (response) {
                        $rootScope.$broadcast('status:error', 'Ошибка создания прайс листа YML');
                        logTxt(response.data);
                    })
            })
            .error(function (response) {
                $rootScope.$broadcast('status:error', 'Настройки не сохранены');
                logTxt(response.data);
            })
    };

    $scope.resizeAll = function () {
        Operation.resizeAll() //socket log
            .success(function (response) {
                logJson(response.data);
            })
            .error(function (response) {
                logTxt(response.data);
            })
    };

    $scope.makeUrls = function () {
        Operation.makeUrls()
            .success(function (response) {
                $rootScope.$broadcast('status:success', 'Urls созданы');
                logJson(response.data);
            })
            .error(function (response) {
                $rootScope.$broadcast('status:error', 'Ошибка создания Urls');
                logJson(response.data);
            })
    };

    /* $scope.test = function () {
     socket.emit("tweet", "Заебись");
     }*/

    function logTxt(txt) {
        $scope.log = txt;
    }

    function logJson(json) {
        $scope.log = JSON.stringify(json, null, '\t');
    }
}

angular.module('controller').controller('OperationsCtrl', OperationsCtrl);
