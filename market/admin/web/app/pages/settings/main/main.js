SettingsMainCtrl.$inject = ['$scope','$rootScope', '$state', '$stateParams', '$timeout', 'Settings'];

function SettingsMainCtrl($scope,$rootScope, $state, $stateParams, $timeout, Settings) {
    var toState = $state.current.data.toState;


    Settings.select({projection:{'mainParams':1}}).then(function (response) {
        $scope.settings = response.data;
    });


    $scope.save = function () {
        Settings.upsert($scope.settings).then(function () {
            $rootScope.$broadcast('status:success', 'Настройки сохранены')
        },function (response) {
                $rootScope.$broadcast('status:error', 'Настройки не сохранены<br/>' + response)
            })
    };


}

angular.module('controller').controller('SettingsMainCtrl', SettingsMainCtrl);