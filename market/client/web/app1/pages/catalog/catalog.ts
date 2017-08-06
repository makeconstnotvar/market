import {Component, ViewChild} from "@angular/core";
import {Product} from "entities/product";
import {ProductProvider} from "providers/product";

import {ParameterProvider} from "providers/parameter";
import {ActivatedRoute, Router} from "@angular/router";
import {Parameter} from "entities/parameter";
import {ParametersService} from "services/parameters";
import {PagerComponent} from "components/pager/pager";
import {ComponentCatalogFilter} from "./components/filter/filter";

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

    constructor(private productProvider: ProductProvider,
                private parametersService: ParametersService,
                private parameterProvider: ParameterProvider,
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

    changeSort(sorting) {
        console.log(sorting)
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
        this.sort = this.route.snapshot.queryParamMap.params.sort;
        this.params = this.excludeParams(this.route.snapshot.queryParamMap.params);

        this.parameterProvider.getList(this.categoryName).subscribe(response => {
            console.log('получены параметры');
            this.categoryId = response.catid;
            this.parameters = response.parameters;
            this.selectParameters();
            this.getProducts();
        });


    }

    private excludeParams(params) {
        let p = Object.assign({},params);
        delete p.page;
        delete p.sort;
        delete p.categoryName;
        return p;
    }

    private selectParameters() {
        this.parameters.map(parameter => this.parametersService.urlToParameter(parameter, this.params));
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

    private getProducts() {
        this.productProvider.list({parameters: this.getSelectedParameters(),sort:this.sort,categoryId:this.categoryId,page:this.page}).subscribe(resp => {
            console.log('получены продукты');
            this.products = resp.products;
            this.pagerComponent.setup(resp.count, this.page);
        })
    }

    private navigate(filterData) {
        let queryParams = Object.assign({}, {page: this.page, sort:this.sort}, filterData);
        this.router.navigate([this.categoryName], {queryParams});
    }
}


