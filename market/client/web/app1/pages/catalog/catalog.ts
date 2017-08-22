import {Component, ViewChild} from "@angular/core";
import {Product} from "entities/product";
import {ProductProvider} from "providers/product";

import {ParameterProvider} from "providers/parameter";
import {ActivatedRoute, Router} from "@angular/router";
import {Parameter} from "entities/parameter";
import {ParametersService} from "services/parameters";
import {PagerComponent} from "components/pager/pager";
import {ComponentCatalogFilter} from "./components/filter/filter";
import {SortingService} from "../../services/sort";

@Component({
    templateUrl: 'catalog.html'
})
export class PageCatalog {

    @ViewChild(PagerComponent) pagerComponent;
    @ViewChild(ComponentCatalogFilter) catalogFilter;

    products: Product[] = [];
    parameters: Parameter[] = [];
    categoryId: string;
    categoryName: string;
    params: any;
    page: number;
    sort: any;
    activeSort: string;

    constructor(private productProvider: ProductProvider,
                private parametersService: ParametersService,
                private parameterProvider: ParameterProvider,
                private sortingService: SortingService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    changeFilter(parameter) {
        delete this.page;
        let filterData = this.parametersService.filterToUrl(parameter);
        this.navigate(filterData);
        this.getProducts();
    }


    clearFilter() {
        delete this.page;
        let filterData = this.parametersService.clearFilterData();
        this.navigate(filterData);
        this.selectParameters();
        this.getProducts();
    }

    applyFilter() {
        let filterData = this.parametersService.getFilterData();
        this.navigate(filterData);
        this.getProducts();
    }

    changeSort() {
        let filterData = this.parametersService.getFilterData();
        this.navigate(filterData);
        this.getProducts();
    }

    changePage(page) {
        this.page = page;
        let filterData = this.parametersService.getFilterData();
        this.navigate(filterData);
        this.getProducts();
    }

    ngOnInit() {
        this.categoryName = this.route.snapshot.paramMap.params.categoryName;
        this.page = this.route.snapshot.queryParamMap.params.page;
        this.activeSort = this.route.snapshot.queryParamMap.params.sort;
        this.params = this.excludeParams(this.route.snapshot.queryParamMap.params);
        this.parameterProvider.getList(this.categoryName).subscribe(response => {
            console.log('получены параметры');
            this.categoryId = response.catid;
            this.parameters = response.parameters;
            this.selectParameters();
            this.getProducts();
            this.getActive();
        });

    }

    private excludeParams(params) {
        let p = Object.assign({}, params);
        delete p.page;
        delete p.sort;
        delete p.categoryName;
        return p;
    }

    private selectParameters() {
        this.parameters.map(parameter => this.parametersService.urlToParameter(parameter, this.params));
    }

    private setActiveParameters(activeParameters) {
        this.parameters.forEach(parameter => {
            parameter.values.forEach(v => {
                v.active = activeParameters.includes(v._id)
            })
        })
    }

    private getSelectedParameters() {
        let params = this.parameters.map(x => Object.assign({}, x)).filter((p: Parameter) => {
            let selected = p.values.find(v => v.selected);
            return p.to || p.from || !!selected;
        });
        params.forEach((p: Parameter, i, array) => {
            if (p.values)
                p.values = p.values.filter(v => v.selected && v.nomatter != true);
            if (p.behavior != 'input' && p.values.length == 0)
                array.splice(i, 1);

        });
        return params;
    }

    private getActive() {
        let query = {
            parameters: this.getSelectedParameters(),
            categoryId: this.categoryId
        };
        this.parameterProvider.getActive(query).subscribe(resp => {
            this.setActiveParameters(resp);

        })
    }

    private getProducts() {
        let query = {
            parameters: this.getSelectedParameters(),
            sort: this.sortingService.getSearch(),
            categoryId: this.categoryId,
            page: this.page
        };
        this.productProvider.list(query).subscribe(resp => {
            console.log('получены продукты');
            this.products = resp.products;
            this.pagerComponent.setup(resp.count, this.page);
        })
    }

    private navigate(filterData) {
        let queryParams = Object.assign({}, {page: this.page}, this.sortingService.getUrl(), filterData);
        this.router.navigate([this.categoryName], {queryParams});
    }
}


