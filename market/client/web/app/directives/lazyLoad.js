lazyLoad.$inject  = ['Map'];

function lazyLoad(Map) {
    return {
        restrict: 'E',
        //template: '<div  class="me-map" ></div>',
        compile: function (scope, element, attrs) {
            if (!Map.isReady()) Map.load().then(Map.show);
            else Map.show()
        }
    };
}



angular.module('router').directive('lazyLoad', lazyLoad);
