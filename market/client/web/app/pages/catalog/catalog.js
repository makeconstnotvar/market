import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryProvider, ContractProvider, ParameterProvider, ProductProvider } from "../../providers";
import { Category } from "../../models";
import { GlobalService, NavbarService, ParametersService, SeoService, SortingService } from "../../services";
import { PagerControl } from "../../controls/module";
import { ComponentCatalogFilter } from "./components/module";
var CatalogPage = (function () {
    function CatalogPage(productProvider, parametersService, categoryProvider, parameterProvider, contractProvider, sortingService, navbarService, route, router, globalService, seoService) {
        this.productProvider = productProvider;
        this.parametersService = parametersService;
        this.categoryProvider = categoryProvider;
        this.parameterProvider = parameterProvider;
        this.contractProvider = contractProvider;
        this.sortingService = sortingService;
        this.navbarService = navbarService;
        this.route = route;
        this.router = router;
        this.globalService = globalService;
        this.seoService = seoService;
        this.products = [];
        this.parameters = [];
        this.category = new Category();
        this.xs = false;
    }
    CatalogPage.prototype.scrollToMenu = function () {
        this.globalService.onScrollToEl.emit('market-menu');
    };
    CatalogPage.prototype.xsChange = function () {
        this.xs = !this.xs;
    };
    CatalogPage.prototype.changeFilter = function (parameter) {
        delete this.page;
        this.parametersService.filterToUrl(parameter);
        this.navigate();
        this.fetchProducts();
        this.fetchActive();
    };
    CatalogPage.prototype.clearFilter = function () {
        this.xs = false;
        delete this.page;
        this.parametersService.clearFilterData();
        this.navigate();
        this.fetchParameters();
        this.fetchActive();
    };
    CatalogPage.prototype.applyFilter = function () {
        this.xs = false;
        this.navigate();
        this.fetchProducts();
        this.fetchActive();
    };
    CatalogPage.prototype.changeSort = function (e) {
        this.navigate();
        this.fetchProducts();
    };
    CatalogPage.prototype.changePage = function (page) {
        this.page = page;
        this.navigate();
        this.fetchProducts();
        this.scrollToMenu();
    };
    CatalogPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.switchMap(function (pm) {
            _this.categoryName = pm.params.categoryName;
            return _this.parameterProvider.getList(pm.params.categoryName);
        }).subscribe(function (response) {
            _this.categoryId = response.catid;
            _this.parameters = response.parameters;
            _this.selectCategory();
            _this.selectParameters();
            _this.fetchProducts();
            _this.fetchActive();
        });
        this.route.queryParamMap.subscribe(function (qpm) {
            _this.activeSort = qpm.params.sort;
            _this.page = qpm.params.page;
            _this.params = _this.excludeParams(qpm.params);
            _this.sortingService.change(_this.activeSort);
        });
    };
    CatalogPage.prototype.postPosition = function (product) {
        var _this = this;
        var position = {
            product: product._id,
            count: 1,
            price: product.price,
            sum: product.price,
        };
        this.contractProvider.postPosition(position).subscribe(function (response) {
            _this.navbarService.updateCartData(response);
        });
    };
    CatalogPage.prototype.excludeParams = function (params) {
        var p = Object.assign({}, params);
        delete p.page;
        delete p.sort;
        delete p.categoryName;
        return p;
    };
    CatalogPage.prototype.selectParameters = function () {
        var _this = this;
        this.parameters.map(function (parameter) { return _this.parametersService.urlToParameter(parameter, _this.params); });
    };
    CatalogPage.prototype.selectCategory = function () {
        var _this = this;
        this.categoryProvider.getTree().subscribe(function (response) {
            _this.category = response.find(function (cat) { return cat.url == _this.categoryName; });
            _this.seoService.setMeta({
                title: _this.category.title,
                description: "" + _this.category.description,
                image: "/photos/" + _this.category._id + "/" + _this.category.cover,
            });
        });
    };
    CatalogPage.prototype.setActiveParameters = function (activeParameters) {
        this.parameters.forEach(function (parameter) {
            parameter.values.forEach(function (v) {
                v.active = activeParameters.includes(v._id);
            });
        });
    };
    CatalogPage.prototype.getSelectedParameters = function () {
        var params = this.parameters.map(function (x) { return Object.assign({}, x); }).filter(function (p) {
            var selected = p.values.find(function (v) { return v.selected; });
            return p.to || p.from || !!selected;
        });
        params.forEach(function (p, i, array) {
            if (p.values)
                p.values = p.values.filter(function (v) { return v.selected && v.nomatter != true; });
            if (p.behavior != 'input' && p.values.length == 0)
                array.splice(i, 1);
        });
        return params;
    };
    CatalogPage.prototype.fetchActive = function () {
        var _this = this;
        var query = {
            parameters: this.getSelectedParameters(),
            categoryId: this.categoryId
        };
        this.parameterProvider.getActive(query).subscribe(function (resp) {
            _this.setActiveParameters(resp);
        });
    };
    CatalogPage.prototype.fetchParameters = function () {
        var _this = this;
        this.parameterProvider.getList(this.categoryName).subscribe(function (response) {
            _this.categoryId = response.catid;
            _this.parameters = response.parameters;
            _this.selectParameters();
            _this.fetchProducts();
            _this.fetchActive();
        });
    };
    CatalogPage.prototype.fetchProducts = function () {
        var _this = this;
        var query = {
            parameters: this.getSelectedParameters(),
            sort: this.sortingService.getSearch(),
            categoryId: this.categoryId,
            page: this.page
        };
        this.productProvider.list(query).subscribe(function (resp) {
            _this.products = resp.products;
            _this.pagerComponent.setup(resp.count, _this.page);
        });
    };
    CatalogPage.prototype.navigate = function () {
        var queryParams = Object.assign({}, { page: this.page }, this.sortingService.getUrl(), this.parametersService.getFilterData());
        this.router.navigate([this.categoryName], { queryParams: queryParams });
    };
    CatalogPage.decorators = [
        { type: Component, args: [{
                    selector: 'catalog',
                    host: { 'class': 'container d-block' },
                    templateUrl: 'catalog.html'
                },] },
    ];
    CatalogPage.ctorParameters = function () { return [
        { type: ProductProvider, },
        { type: ParametersService, },
        { type: CategoryProvider, },
        { type: ParameterProvider, },
        { type: ContractProvider, },
        { type: SortingService, },
        { type: NavbarService, },
        { type: ActivatedRoute, },
        { type: Router, },
        { type: GlobalService, },
        { type: SeoService, },
    ]; };
    CatalogPage.propDecorators = {
        "pagerComponent": [{ type: ViewChild, args: [PagerControl,] },],
        "catalogFilter": [{ type: ViewChild, args: [ComponentCatalogFilter,] },],
    };
    return CatalogPage;
}());
export { CatalogPage };
