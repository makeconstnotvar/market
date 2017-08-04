PagerCtrl.$inject = ['$rootScope', '$scope', '$state', 'Filter'];

function PagerCtrl($rootScope, $scope, $state, Filter) {
    var filterName = $state.current.data.filterName,
        filter = Filter(filterName);

    $scope.toPage = function (pageNum) {
        setActivePage(pageNum);
        $rootScope.$broadcast('page:change', pageNum);
    };

    $scope.$on('page:init', function (e, total) {
        $scope.pages = getPages(total);
        setActivePage(filter.data().page);
        $scope.show = true;
    });
    
    $scope.$on('pager:hide', function () {
        $scope.show = false;
    });
    
    $scope.$on('pager:show', function () {
        $scope.show = show;
    });
    
    function setActivePage(page) {
        filter.data('page', page);
        $scope.pages.forEach(function (p) {
            p.active = page == p.n
        })
    }

    function getPages(total) {
        var pages = [];
        for (var i = 1; i <= Math.ceil(total / filter.data().take); i++) {
            pages.push({n: i})
        }
        return pages;
    }
}

angular.module('controller').controller('PagerCtrl', PagerCtrl);

