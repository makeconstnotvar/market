ParameterBaseEditCtrl.$inject = ['$scope', '$state', '$window', 'translit'];

function ParameterBaseEditCtrl($scope, $state, $window, translit) {
    var editedIdx;

    $scope.editable = false;
    $scope.isBack = !!$state.previousState.name;
    $scope.parameter = {values: []};
    $scope.selected = {valCanChange: true};

    $scope.behaviors = [
        {behavior: 'onecheck', name: 'один флажок'},
        {behavior: 'checklist', name: 'список с флажками'},
        {behavior: 'radiolist', name: 'список с переключателями'},
        {behavior: 'input', name: 'значения от до'}
    ];

    $scope.parameter.behavior = $scope.behaviors[0].behavior;

    $scope.parameter.values = addDefaultParams($scope.parameter.values, $scope.parameter.behavior);

    $scope.behaviorChange = function (behavior) {
        $scope.parameter.values = addDefaultParams($scope.parameter.values, behavior)
    };

    $scope.modify = function () {
        if ($scope.editable)
            update();
        else
            add();
        sort();
    };
    $scope.back = function () {
        if ($state.previousState.name)
            $window.history.back();
    };
    $scope.remove = function (idx) {
        if (editedIdx && $scope.parameter.values[editedIdx].value == $scope.selected.val) {
            delete $scope.selected.val;
            delete $scope.selected.url;
        }
        $scope.parameter.values.splice(idx, 1);
    };

    $scope.edit = function (v, idx) {
        $scope.selected.valCanChange = false;
        $scope.selected.val = v.value;
        $scope.selected.url = v.url;
        $scope.editable = true;
        editedIdx = idx;
    };

    function add() {
        if ($scope.selected.val) {
            $scope.parameter.values.addUniqueParam({
                value: $scope.selected.val,
                url: translit($scope.selected.val)
            }, 'value');
            //$scope.parameter.values.push();
            clearSelected()
        }
    }

    function update() {
        //переделать это говно

        $scope.parameter.values[editedIdx].value = $scope.selected.val;
        if (!$scope.selected.url)
            $scope.parameter.values[editedIdx].url = translit($scope.selected.val);
        else
            $scope.parameter.values[editedIdx].url = $scope.selected.url;
        clearSelected();

    }

    function sort() {
        $scope.parameter.values.sort(function (a, b) {
            if (!isNaN(Number(a.value)) && !isNaN(Number(b.value)))
                return a.value - b.value;
            else return a.value.localeCompare(b.value);
        })
    }

    function clearSelected() {
        $scope.editable = false;
        $scope.selected.valCanChange = true;
        delete $scope.selected.val;
        delete $scope.selected.url;
    }

    function getDefault(behavior) {
        switch (behavior) {
            case 'onecheck':
                return [
                    {value: 'Да', _default: true, url: 'da'}
                ];
            case 'radiolist':
                return [
                    {value: 'не важно', selected:true, _default: true, url: 'ne-vazhno'}
                ];
            default:
                return [];
        }
    }

    function addDefaultParams(sourceValues, behavior) {
        if (needToDefault(sourceValues)) {
            sourceValues = getDefault(behavior);
        }
        return sourceValues;
    }

    function needToDefault(values) {
        var needToDefault = true;
        values.forEach(function (value) {
            if (!value._default) {
                needToDefault = false;
            }
        });

        return needToDefault;
    }

}

angular.module('controller').controller('ParameterBaseEditCtrl', ParameterBaseEditCtrl);