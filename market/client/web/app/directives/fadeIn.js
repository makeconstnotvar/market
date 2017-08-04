angular.module('router').directive('fadeIn', [function () {
    return {
        restrict: 'A',
        link: function ($scope, $element, attrs) {

            $element.addClass("ng-hide-remove");
            $element.on('load', function () {

                $element.addClass("ng-hide-add");
            });
        }

    }
}]);