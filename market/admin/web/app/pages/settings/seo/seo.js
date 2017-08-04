SettingsSeoCtrl.$inject = ['$scope', '$rootScope', '$state', '$stateParams', '$timeout', 'Settings', 'States'];

function SettingsSeoCtrl($scope, $rootScope, $state, $stateParams, $timeout, Settings, States) {
    //var toState = $state.current.data.toState;

    Settings.select({projection: {'seoParams': 1}}).then(function (response) {
        $scope.settings = response.data;
    });

    States.selectAll().then(function (response) {
        $scope.states = response.data;
    });

    $scope.add = function () {
        $scope.settings.seoParams = $scope.settings.seoParams || [];
        $scope.settings.seoParams.push({state: null})
    };

    $scope.remove = function (idx) {
        $scope.settings.seoParams.splice(idx, 1);
        $scope.save();
    };

    $scope.save = function () {
        return Settings.upsert($scope.settings).then(function () {
            $rootScope.$broadcast('status:success', 'Настройки сохранены')
        },function (response) {
                $rootScope.$broadcast('status:error', 'Настройки не сохранены<br/>' + response)
            })
    };

}

angular.module('controller').controller('SettingsSeoCtrl', SettingsSeoCtrl);