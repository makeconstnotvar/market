import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ContractProvider, ParameterProvider, ProductProvider } from "providers/index";
import { NavbarService, ParametersService, SortingService } from "services/index";
import { PagerControl } from "controls/pager/pager";
import { ComponentCatalogFilter } from "./components/filter/filter";
export class CatalogPage {
    constructor(productProvider, parametersService, parameterProvider, contractProvider, sortingService, navbarService, route, router) {
        this.productProvider = productProvider;
        this.parametersService = parametersService;
        this.parameterProvider = parameterProvider;
        this.contractProvider = contractProvider;
        this.sortingService = sortingService;
        this.navbarService = navbarService;
        this.route = route;
        this.router = router;
        this.products = [];
        this.parameters = [];
        this.xs = false;
    }
    xsChange() {
        this.xs = !this.xs;
    }
    changeFilter(parameter) {
        delete this.page;
        this.parametersService.filterToUrl(parameter);
        this.navigate();
        this.fetchProducts();
        this.fetchActive();
    }
    clearFilter() {
        delete this.page;
        this.parametersService.clearFilterData();
        this.navigate();
        this.fetchParameters();
        this.fetchActive();
    }
    applyFilter() {
        this.xs = false;
        this.navigate();
        this.fetchProducts();
        this.fetchActive();
    }
    changeSort(e) {
        this.navigate();
        this.fetchProducts();
    }
    changePage(page) {
        this.page = page;
        this.navigate();
        this.fetchProducts();
    }
    ngOnInit() {
        console.log('инит каталога');
        this.route.paramMap.switchMap((pm) => {
            this.categoryName = pm.params.categoryName;
            return this.parameterProvider.getList(pm.params.categoryName);
        }).subscribe((response) => {
            console.log('получены параметры');
            this.categoryId = response.catid;
            this.parameters = response.parameters;
            this.selectParameters();
            this.fetchProducts();
            this.fetchActive();
        });
        this.route.queryParamMap.subscribe((qpm) => {
            console.log('qpm');
            this.activeSort = qpm.params.sort;
            this.page = qpm.params.page;
            this.params = this.excludeParams(qpm.params);
            this.sortingService.change(this.activeSort);
        });
    }
    postPosition(product) {
        let position = {
            product: product._id,
            count: 1,
            price: product.price,
            sum: product.price,
        };
        this.contractProvider.postPosition(position).subscribe(response => {
            console.log(response);
            this.navbarService.updateCartData(response);
        });
    }
    excludeParams(params) {
        let p = Object.assign({}, params);
        delete p.page;
        delete p.sort;
        delete p.categoryName;
        return p;
    }
    selectParameters() {
        this.parameters.map(parameter => this.parametersService.urlToParameter(parameter, this.params));
    }
    setActiveParameters(activeParameters) {
        this.parameters.forEach(parameter => {
            parameter.values.forEach(v => {
                v.active = activeParameters.includes(v._id);
            });
        });
    }
    getSelectedParameters() {
        let params = this.parameters.map(x => Object.assign({}, x)).filter((p) => {
            let selected = p.values.find(v => v.selected);
            return p.to || p.from || !!selected;
        });
        params.forEach((p, i, array) => {
            if (p.values)
                p.values = p.values.filter(v => v.selected && v.nomatter != true);
            if (p.behavior != 'input' && p.values.length == 0)
                array.splice(i, 1);
        });
        return params;
    }
    fetchActive() {
        let query = {
            parameters: this.getSelectedParameters(),
            categoryId: this.categoryId
        };
        this.parameterProvider.getActive(query).subscribe(resp => {
            console.log('получены активные параметры');
            this.setActiveParameters(resp);
        });
    }
    fetchParameters() {
        this.parameterProvider.getList(this.categoryName).subscribe((response) => {
            console.log('получены параметры');
            this.categoryId = response.catid;
            this.parameters = response.parameters;
            this.selectParameters();
            this.fetchProducts();
            this.fetchActive();
        });
    }
    fetchProducts() {
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
        });
    }
    navigate() {
        let queryParams = Object.assign({}, { page: this.page }, this.sortingService.getUrl(), this.parametersService.getFilterData());
        this.router.navigate([this.categoryName], { queryParams });
    }
}
CatalogPage.decorators = [
    { type: Component, args: [{
                selector: 'catalog',
                host: { 'class': 'container d-block' },
                templateUrl: 'catalog.html'
            },] },
];
CatalogPage.ctorParameters = () => [
    { type: ProductProvider, },
    { type: ParametersService, },
    { type: ParameterProvider, },
    { type: ContractProvider, },
    { type: SortingService, },
    { type: NavbarService, },
    { type: ActivatedRoute, },
    { type: Router, },
];
CatalogPage.propDecorators = {
    "pagerComponent": [{ type: ViewChild, args: [PagerControl,] },],
    "catalogFilter": [{ type: ViewChild, args: [ComponentCatalogFilter,] },],
};
//# sourceMappingURL=catalog.js.map