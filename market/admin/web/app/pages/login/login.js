LoginCtrl.$inject = ['$scope', '$location', '$stateParams', 'Secure', '$window'];

function LoginCtrl($scope, $location, $stateParams, Secure, $window) {
    $scope.login = function () {
        Secure.login($scope.passport).then(function (response) {
            var url = '/admin';
            if ($stateParams.url)
                url += $stateParams.url;
            //$location.path(url);
            $window.location.href = url;

        }, function (err) {
            if (err)
                $scope.error = err.data;
        });

    };

}

angular.module('controller').controller('LoginCtrl', LoginCtrl);

