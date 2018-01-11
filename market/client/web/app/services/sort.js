import { Sort, SortingMode } from "../models/sort";
var SortingService = (function () {
    function SortingService() {
        this.sorts = [
            {
                name: 'по умолчанию',
                field: 'default',
                mode: 0,
                active: true
            },
            {
                name: 'по названию',
                field: 'name',
                mode: SortingMode.Asc,
                active: false
            },
            {
                name: 'по цене',
                field: 'price',
                mode: SortingMode.Desc,
                active: false
            }
        ];
    }
    SortingService.prototype.getSorts = function () {
        return this.sorts;
    };
    SortingService.prototype.getActive = function () {
        var actives = this.sorts.filter(function (s) { return s.active; });
        if (actives && actives.length)
            return actives[0];
        else {
            this.reset();
            return this.getActive();
        }
    };
    SortingService.prototype.filterDefault = function (sort) {
        if (sort.field != 'default')
            return sort;
    };
    SortingService.prototype.getUrl = function () {
        return this.toUrl(this.filterDefault(this.getActive()));
    };
    SortingService.prototype.getSearch = function () {
        var s = this.filterDefault(this.getActive());
        if (s) {
            var fake = {};
            fake[s.field] = s.mode;
            return fake;
        }
        return {};
    };
    SortingService.prototype.change = function (activeSort) {
        if (!activeSort)
            this.reset();
        var sort = this.fromUrl(activeSort);
        this.sorts.forEach(function (s) {
            if (s.field == sort.field) {
                s.active = true;
                s.mode = +sort.mode;
            }
            else {
                s.active = false;
            }
        });
        return this.sorts;
    };
    SortingService.prototype.doSort = function (sort, mode) {
        this.sorts.forEach(function (s) {
            if (s.field == sort.field) {
                s.active = true;
                s.mode = mode;
            }
            else
                s.active = false;
        });
        return this.sorts;
    };
    SortingService.prototype.reset = function () {
        this.sorts.forEach(function (s) { return s.active = s.field == 'default'; });
    };
    SortingService.prototype.toUrl = function (sort) {
        if (sort)
            return { sort: sort.field + "_" + sort.mode };
    };
    SortingService.prototype.fromUrl = function (queryParam) {
        var sort = new Sort();
        var regexp = new RegExp(/(\w+)_(-?\d+)/), match = regexp.exec(queryParam);
        if (match) {
            sort.field = match[1];
            sort.mode = +match[2];
        }
        return sort;
    };
    return SortingService;
}());
export { SortingService };
