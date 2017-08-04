var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from "@angular/core";
import { ProductProvider } from "providers/product";
import { ParameterProvider } from "providers/parameter";
import { ActivatedRoute, Router } from "@angular/router";
import { ParametersService } from "services/parameters";
import { PagerComponent } from "components/pager/pager";
import { ComponentCatalogFilter } from "./components/filter/filter";
let PageCatalog = class PageCatalog {
    constructor(productProvider, parametersService, parameterProvider, route, router) {
        this.productProvider = productProvider;
        this.parametersService = parametersService;
        this.parameterProvider = parameterProvider;
        this.route = route;
        this.router = router;
        this.products = [];
        this.parameters = [];
        this.Filter = {};
        this.Query = {};
        this.QueryEx = {};
        this.QueryUrl = {};
    }
    filterChange(parameter) {
        let filterData = this.parametersService.filterToUrl(parameter);
        this.navigate(filterData);
    }
    sortChange(sorting) {
        console.log(sorting);
    }
    clearFilter() {
        console.log('очистка фильтра');
    }
    applyFilter(parameter) {
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
    getFilter() {
    }
    setFilter() {
    }
    updateUrl() {
    }
    getFromUrl() {
    }
    setSelectedParameters() {
        this.parameters.map(parameter => {
            if (this.QueryUrl) {
                return this.parametersService.urlToParameter(parameter, this.QueryUrl);
            }
            return parameter;
        });
    }
    getSelectedParameters() {
        let params = this.parameters.map(x => Object.assign({}, x)).filter((p) => {
            let selected = p.values.find(v => v.selected);
            return p.to || p.from || selected;
        });
        params.forEach((p, i, array) => {
            if (p.values)
                p.values = p.values.filter(v => v.selected && v.nomatter != true);
            if (p.values.length == 0)
                array.splice(i, 1);
        });
        return params;
    }
    getProducts() {
        this.productProvider.list(Object.assign({ parameters: this.getSelectedParameters() }, this.QueryEx)).subscribe(resp => {
            this.products = resp.products;
            this.pagerComponent.setup(resp.count, this.QueryEx.page);
        });
    }
    navigate(filterData) {
        let params = Object.assign({}, { page: this.QueryEx.page }, filterData);
        this.router.navigate([this.QueryEx.categoryName], { queryParams: params });
    }
};
__decorate([
    ViewChild(PagerComponent),
    __metadata("design:type", Object)
], PageCatalog.prototype, "pagerComponent", void 0);
__decorate([
    ViewChild(ComponentCatalogFilter),
    __metadata("design:type", Object)
], PageCatalog.prototype, "catalogFilter", void 0);
PageCatalog = __decorate([
    Component({
        templateUrl: 'catalog.html'
    }),
    __metadata("design:paramtypes", [ProductProvider,
        ParametersService,
        ParameterProvider,
        ActivatedRoute,
        Router])
], PageCatalog);
export { PageCatalog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBS2xFLElBQWEsV0FBVyxHQUF4QjtJQWdFSSxZQUFvQixlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsaUJBQW9DLEVBQ3BDLEtBQXFCLEVBQ3JCLE1BQWM7UUFKZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUEvRGxDLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFDN0IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQTJEZCxDQUFDO0lBdkRELFlBQVksQ0FBQyxTQUFTO1FBQ2xCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENB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O0lBQTFCLFNBQVMsQ0FBQyxjQUFjLENBQUM7O21EQUFnQjtBQUNQO0lBQWxDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQzs7a0RBQWU7QUFIeEMsV0FBVztJQUh2QixTQUFTLENBQUM7UUFDUCxXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDO3FDQWlFdUMsZUFBZTtRQUNiLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDN0IsY0FBYztRQUNiLE1BQU07R0FwRXpCLFdBQVcsQ0F3SHZCO1NBeEhZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiZW50aXRpZXMvcHJvZHVjdFwiO1xuaW1wb3J0IHtQcm9kdWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvcHJvZHVjdFwiO1xuXG5pbXBvcnQge1BhcmFtZXRlclByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL3BhcmFtZXRlclwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcImVudGl0aWVzL3BhcmFtZXRlclwiO1xuaW1wb3J0IHtQYXJhbWV0ZXJzU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL3BhcmFtZXRlcnNcIjtcbmltcG9ydCB7UGFnZXJDb21wb25lbnR9IGZyb20gXCJjb21wb25lbnRzL3BhZ2VyL3BhZ2VyXCI7XG5pbXBvcnQge0NvbXBvbmVudENhdGFsb2dGaWx0ZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJ2NhdGFsb2cuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUNhdGFsb2cge1xuXG4gICAgQFZpZXdDaGlsZChQYWdlckNvbXBvbmVudCkgcGFnZXJDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZChDb21wb25lbnRDYXRhbG9nRmlsdGVyKSBjYXRhbG9nRmlsdGVyO1xuXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtdO1xuICAgIHBhcmFtZXRlcnM6IFBhcmFtZXRlcltdID0gW107XG4gICAgRmlsdGVyID0ge307XG4gICAgUXVlcnkgPSB7fTtcbiAgICBRdWVyeUV4ID0ge307XG4gICAgUXVlcnlVcmwgPSB7fTtcbiAgICBjYXRlZ29yeUlkOiBzdHJpbmc7XG4gICAgY2F0ZWdvcnlOYW1lOiBzdHJpbmc7XG5cbiAgICBmaWx0ZXJDaGFuZ2UocGFyYW1ldGVyKSB7XG4gICAgICAgIGxldCBmaWx0ZXJEYXRhID0gdGhpcy5wYXJhbWV0ZXJzU2VydmljZS5maWx0ZXJUb1VybChwYXJhbWV0ZXIpO1xuICAgICAgICB0aGlzLm5hdmlnYXRlKGZpbHRlckRhdGEpO1xuICAgIH1cblxuICAgIHNvcnRDaGFuZ2Uoc29ydGluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhzb3J0aW5nKVxuICAgIH1cblxuICAgIGNsZWFyRmlsdGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygn0L7Rh9C40YHRgtC60LAg0YTQuNC70YzRgtGA0LAnKVxuICAgIH1cblxuICAgIGFwcGx5RmlsdGVyKHBhcmFtZXRlcikge1xuXG4gICAgICAgIC8vdGhpcy5uYXZpZ2F0ZSgpO1xuICAgIH1cblxuICAgIHBhZ2VDaGFuZ2UocGFnZSkge1xuICAgICAgICB0aGlzLlF1ZXJ5RXgucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMubmF2aWdhdGUoKTtcbiAgICB9XG5cblxuICAgIHRlc3QocGFyYW1ldGVyKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUocGFyYW1NYXAgPT4ge1xuICAgICAgICAgICAgdGhpcy5RdWVyeUV4LmNhdGVnb3J5TmFtZSA9IHBhcmFtTWFwLnBhcmFtcy5jYXRlZ29yeU5hbWU7XG5cbiAgICAgICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbU1hcC5zdWJzY3JpYmUocXVlcnlQYXJhbU1hcCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5RdWVyeUV4LnBhZ2UgPSBxdWVyeVBhcmFtTWFwLnBhcmFtcy5wYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMuUXVlcnlFeC5zb3J0ID0gcXVlcnlQYXJhbU1hcC5wYXJhbXMuc29ydDtcbiAgICAgICAgICAgICAgICB0aGlzLlF1ZXJ5VXJsID0gcXVlcnlQYXJhbU1hcC5wYXJhbXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVyUHJvdmlkZXIuZ2V0TGlzdCh0aGlzLlF1ZXJ5RXguY2F0ZWdvcnlOYW1lKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuUXVlcnlFeC5jYXRlZ29yeUlkID0gcmVzcG9uc2UuY2F0aWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcmVzcG9uc2UucGFyYW1ldGVycztcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkUGFyYW1ldGVycygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG5cblxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdFByb3ZpZGVyOiBQcm9kdWN0UHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYXJhbWV0ZXJzU2VydmljZTogUGFyYW1ldGVyc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYXJhbWV0ZXJQcm92aWRlcjogUGFyYW1ldGVyUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RmlsdGVyKCkge1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RmlsdGVyKCkge1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVXJsKCkge1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RnJvbVVybCgpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U2VsZWN0ZWRQYXJhbWV0ZXJzKCkge1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMubWFwKHBhcmFtZXRlciA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLlF1ZXJ5VXJsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVyc1NlcnZpY2UudXJsVG9QYXJhbWV0ZXIocGFyYW1ldGVyLCB0aGlzLlF1ZXJ5VXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRQYXJhbWV0ZXJzKCkge1xuICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5wYXJhbWV0ZXJzLm1hcCh4ID0+IE9iamVjdC5hc3NpZ24oe30sIHgpKS5maWx0ZXIoKHA6IFBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gcC52YWx1ZXMuZmluZCh2ID0+IHYuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHAudG8gfHwgcC5mcm9tIHx8IHNlbGVjdGVkO1xuICAgICAgICB9KTtcbiAgICAgICAgcGFyYW1zLmZvckVhY2goKHA6IFBhcmFtZXRlciwgaSwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgIGlmIChwLnZhbHVlcylcbiAgICAgICAgICAgICAgICBwLnZhbHVlcyA9IHAudmFsdWVzLmZpbHRlcih2ID0+IHYuc2VsZWN0ZWQgJiYgdi5ub21hdHRlciAhPSB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwLnZhbHVlcy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRQcm9kdWN0cygpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0UHJvdmlkZXIubGlzdChPYmplY3QuYXNzaWduKHtwYXJhbWV0ZXJzOiB0aGlzLmdldFNlbGVjdGVkUGFyYW1ldGVycygpfSwgdGhpcy5RdWVyeUV4KSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc3AucHJvZHVjdHM7XG4gICAgICAgICAgICB0aGlzLnBhZ2VyQ29tcG9uZW50LnNldHVwKHJlc3AuY291bnQsIHRoaXMuUXVlcnlFeC5wYWdlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIG5hdmlnYXRlKGZpbHRlckRhdGE/KSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LHtwYWdlOnRoaXMuUXVlcnlFeC5wYWdlfSxmaWx0ZXJEYXRhKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuUXVlcnlFeC5jYXRlZ29yeU5hbWVdLCB7cXVlcnlQYXJhbXM6cGFyYW1zfSk7XG4gICAgfVxufVxuXG5cbiJdfQ==