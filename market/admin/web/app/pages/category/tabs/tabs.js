CategoryTabsCtrl.$inject = ['$scope', '$rootScope', '$state', 'Category', 'translit'];

function CategoryTabsCtrl($scope, $rootScope, $state, Category, translit) {
    var urlCanChange = false;

    $scope.$on('state:leave', save);

    Category.selectById({id: $state.params.cid}).then(function (response) {
        $scope.category = response.data;
        urlCanChange = !$scope.category.url;
    });

    $scope.nameToUrl = function (force) {
        if (urlCanChange || force) {
            $scope.category.url = translit($scope.category.name);
            urlCanChange = true;
        }
    };

    $scope.save = function () {
        return save();
    };

    function save() {
        urlCanChange = false;
        return Category.update($scope.category).then(function () {
            $rootScope.$broadcast('status:success', 'Категория сохранена')
        }, function (response) {
            $rootScope.$broadcast('status:error', 'Категория не сохранена<br/>' + response)
        })

    }

    $scope.aceOptions = {
        mode: 'html',
        theme: 'chrome',
        workerPath: 'js/',
        //workerPath: 'temp/libs/ace/',
        useWrapMode: true,
        showGutter: true,
        behavioursEnabled: true,
        displayIndentGuides: true,
        showPrintMargin: false,
        onLoad: function (editor) {
            editor.setHighlightSelectedWord(false);
            editor.$blockScrolling = Infinity;
        },
        require: ['ace/ext/language_tools'],
        //rquire: ['ace/ext-language_tools.js'],
        advanced: {
            enableSnippets: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: false
        }
    };
}

angular.module('controller').controller('CategoryTabsCtrl', CategoryTabsCtrl);
