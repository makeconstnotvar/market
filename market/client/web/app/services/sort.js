import { Sort, SortingMode } from "../models/sort";
export class SortingService {
    constructor() {
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
    getSorts() {
        return this.sorts;
    }
    getActive() {
        let actives = this.sorts.filter(s => s.active);
        if (actives && actives.length)
            return actives[0];
        else {
            this.reset();
            return this.getActive();
        }
    }
    filterDefault(sort) {
        if (sort.field != 'default')
            return sort;
    }
    getUrl() {
        return this.toUrl(this.filterDefault(this.getActive()));
    }
    getSearch() {
        let s = this.filterDefault(this.getActive());
        if (s) {
            let fake = {};
            fake[s.field] = s.mode;
            return fake;
        }
        return {};
    }
    change(activeSort) {
        if (!activeSort)
            this.reset();
        let sort = this.fromUrl(activeSort);
        this.sorts.forEach(s => {
            if (s.field == sort.field) {
                s.active = true;
                s.mode = +sort.mode;
            }
            else {
                s.active = false;
            }
        });
        return this.sorts;
    }
    doSort(sort, mode) {
        this.sorts.forEach(s => {
            if (s.field == sort.field) {
                s.active = true;
                s.mode = mode;
            }
            else
                s.active = false;
        });
        return this.sorts;
    }
    reset() {
        this.sorts.forEach(s => s.active = s.field == 'default');
    }
    toUrl(sort) {
        if (sort)
            return { sort: `${sort.field}_${sort.mode}` };
    }
    fromUrl(queryParam) {
        let sort = new Sort();
        let regexp = new RegExp(/(\w+)_(-?\d+)/), match = regexp.exec(queryParam);
        if (match) {
            sort.field = match[1];
            sort.mode = +match[2];
        }
        return sort;
    }
}
//# sourceMappingURL=sort.js.map