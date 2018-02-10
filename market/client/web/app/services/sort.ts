import {Sort, SortingMode} from "../models/sort";

export class SortingService {
    private sorts: Sort[] = [
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

    getSorts(): Sort[] {
        return this.sorts
    }


    getActive(): Sort {
        let actives = this.sorts.filter(s => s.active);
        if (actives && actives.length)
            return actives[0];
        else {
            this.reset();
            return this.getActive()
        }
    }

    private filterDefault(sort: Sort) {
        if (sort.field != 'default')
            return sort;
    }

    getUrl(): object {
        return this.toUrl(this.filterDefault(this.getActive()))
    }

    getSearch() {
        let s = this.filterDefault(this.getActive());
        if (s) {
            let fake = {};
            fake[s.field] = s.mode;
            return fake;
        }


    }

    change(activeSort): Sort[] {
        if (!activeSort)
            this.reset();
        else {
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
        }
        return this.sorts;
    }

    doSort(sort: Sort, mode: SortingMode): Sort[] {
        this.sorts.forEach(s => {
            if (s.field == sort.field) {
                s.active = true;
                s.mode = mode;
            }
            else
                s.active = false
        });
        return this.sorts;
    }

    private reset() {
        this.sorts.forEach(s => s.active = s.field == 'default')
    }

    private toUrl(sort: Sort): object {
        if (sort)
            return {sort: `${sort.field}_${sort.mode}`};
    }

    private fromUrl(queryParam): Sort {
        let sort = new Sort();

        let regexp = new RegExp(/(\w+)_(-?\d+)/),
            match = regexp.exec(queryParam);

        if (match) {
            sort.field = match[1];
            sort.mode = +match[2];
        }

        return sort;
    }
}