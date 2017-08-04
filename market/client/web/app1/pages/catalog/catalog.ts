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
    Filter = {};
    Query = {};
    QueryEx = {};
    QueryUrl = {};
    categoryId: string;
    categoryName: string;

    filterChange(parameter) {
        let filterData = this.parametersService.filterToUrl(parameter);
        this.navigate(filterData);
    }

    sortChange(sorting) {
        console.log(sorting)
    }

    clearFilter() {
        console.log('очистка фильтра')
    }

    applyFilter(parameter) {

        //this.navigate();
    }

    pageChange(page) {
        this.QueryEx.page = page;
        this.navigate();
    }


    test(parameter) {

    }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.QueryEx.categoryName = paramMap.params.categoryName;

            this.route.queryParamMap.subscribe(queryParamMap => {
                this.QueryEx.page = queryParamMap.params.page;
                this.QueryEx.sort = queryParamMap.params.sort;
                this.QueryUrl = queryParamMap.params;
            });
            this.parameterProvider.getList(this.QueryEx.categoryName).subscribe(response => {
                this.QueryEx.categoryId = response.catid;
                this.parameters = response.parameters;
                this.setSelectedParameters();
                this.getProducts();
            });
        });




    }

    constructor(private productProvider: ProductProvider,
                private parametersService: ParametersService,
                private parameterProvider: ParameterProvider,
                private route: ActivatedRoute,
                private router: Router) {
    }

    private getFilter() {
    }

    private setFilter() {
    }

    private updateUrl() {
    }

    private getFromUrl() {

    }

    private setSelectedParameters() {
        this.parameters.map(parameter => {

            if (this.QueryUrl) {
                return this.parametersService.urlToParameter(parameter, this.QueryUrl);
            }
            return parameter;
        });
    }

    private getSelectedParameters() {
        let params = this.parameters.map(x => Object.assign({}, x)).filter((p: Parameter) => {
            let selected = p.values.find(v => v.selected);
            return p.to || p.from || selected;
        });
        params.forEach((p: Parameter, i, array) => {
            if (p.values)
                p.values = p.values.filter(v => v.selected && v.nomatter != true);
            if (p.values.length == 0)
                array.splice(i, 1);

        });
        return params;
    }

    private getProducts() {
        this.productProvider.list(Object.assign({parameters: this.getSelectedParameters()}, this.QueryEx)).subscribe(resp => {
            this.products = resp.products;
            this.pagerComponent.setup(resp.count, this.QueryEx.page);
        })
    }

    private navigate(filterData?) {
        let params = Object.assign({},{page:this.QueryEx.page},filterData);
        this.router.navigate([this.QueryEx.categoryName], {queryParams:params});
    }
}


