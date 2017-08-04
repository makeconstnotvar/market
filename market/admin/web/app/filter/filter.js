function statusName(_, Status) {
    //фильтр с асинхронным вызовом внутри
    var statuses = null, serviceInvoked = false;

    function realFilter(input) {
        for (var i = 0; i < statuses.length; i++) {
            if (statuses[i].id == input)
                return statuses[i].name;
        }
    }

    filterStub.$stateful = true;

    function filterStub(input) {
        if (statuses === null) {
            if (!serviceInvoked) {
                serviceInvoked = true;
                Status.selectAll().then(function (resp) {
                    statuses = resp.data;
                });
            }
            return "-";
        }
        else return realFilter(input);
    }

    return filterStub;
}

statusName.$inject = ['_', 'Status'];

angular.module('controller').filter('statusName', statusName);
