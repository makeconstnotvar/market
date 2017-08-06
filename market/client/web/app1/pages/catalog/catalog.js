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
        let filterData = this.parametersService.getFilterData();
        this.navigate(filterData);
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
        if (this.QueryUrl) {
            let selectedParams = this.parameters.map(parameter => this.parametersService.urlToParameter(parameter, this.QueryUrl));
            console.log(selectedParams);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBS2xFLElBQWEsV0FBVyxHQUF4QjtJQStESSxZQUFvQixlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsaUJBQW9DLEVBQ3BDLEtBQXFCLEVBQ3JCLE1BQWM7UUFKZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUE5RGxDLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFDN0IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQTBEZCxDQUFDO0lBdERELFlBQVksQ0FBQyxTQUFTO1FBQ2xCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENB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QUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztDQUNKLENBQUE7QUFsSDhCO0lBQTFCLFNBQVMsQ0FBQyxjQUFjLENBQUM7O21EQUFnQjtBQUNQO0lBQWxDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQzs7a0RBQWU7QUFIeEMsV0FBVztJQUh2QixTQUFTLENBQUM7UUFDUCxXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDO3FDQWdFdUMsZUFBZTtRQUNiLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDN0IsY0FBYztRQUNiLE1BQU07R0FuRXpCLFdBQVcsQ0FvSHZCO1NBcEhZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiZW50aXRpZXMvcHJvZHVjdFwiO1xuaW1wb3J0IHtQcm9kdWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvcHJvZHVjdFwiO1xuXG5pbXBvcnQge1BhcmFtZXRlclByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL3BhcmFtZXRlclwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcImVudGl0aWVzL3BhcmFtZXRlclwiO1xuaW1wb3J0IHtQYXJhbWV0ZXJzU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL3BhcmFtZXRlcnNcIjtcbmltcG9ydCB7UGFnZXJDb21wb25lbnR9IGZyb20gXCJjb21wb25lbnRzL3BhZ2VyL3BhZ2VyXCI7XG5pbXBvcnQge0NvbXBvbmVudENhdGFsb2dGaWx0ZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJ2NhdGFsb2cuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUNhdGFsb2cge1xuXG4gICAgQFZpZXdDaGlsZChQYWdlckNvbXBvbmVudCkgcGFnZXJDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZChDb21wb25lbnRDYXRhbG9nRmlsdGVyKSBjYXRhbG9nRmlsdGVyO1xuXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtdO1xuICAgIHBhcmFtZXRlcnM6IFBhcmFtZXRlcltdID0gW107XG4gICAgRmlsdGVyID0ge307XG4gICAgUXVlcnkgPSB7fTtcbiAgICBRdWVyeUV4ID0ge307XG4gICAgUXVlcnlVcmwgPSB7fTtcbiAgICBjYXRlZ29yeUlkOiBzdHJpbmc7XG4gICAgY2F0ZWdvcnlOYW1lOiBzdHJpbmc7XG5cbiAgICBmaWx0ZXJDaGFuZ2UocGFyYW1ldGVyKSB7XG4gICAgICAgIGxldCBmaWx0ZXJEYXRhID0gdGhpcy5wYXJhbWV0ZXJzU2VydmljZS5maWx0ZXJUb1VybChwYXJhbWV0ZXIpO1xuICAgICAgICB0aGlzLm5hdmlnYXRlKGZpbHRlckRhdGEpO1xuICAgIH1cblxuICAgIHNvcnRDaGFuZ2Uoc29ydGluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhzb3J0aW5nKVxuICAgIH1cblxuICAgIGNsZWFyRmlsdGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygn0L7Rh9C40YHRgtC60LAg0YTQuNC70YzRgtGA0LAnKVxuICAgIH1cblxuICAgIGFwcGx5RmlsdGVyKHBhcmFtZXRlcikge1xuXG4gICAgICAgIC8vdGhpcy5uYXZpZ2F0ZSgpO1xuICAgIH1cblxuICAgIHBhZ2VDaGFuZ2UocGFnZSkge1xuICAgICAgICB0aGlzLlF1ZXJ5RXgucGFnZSA9IHBhZ2U7XG4gICAgICAgIGxldCBmaWx0ZXJEYXRhID0gdGhpcy5wYXJhbWV0ZXJzU2VydmljZS5nZXRGaWx0ZXJEYXRhKCk7XG4gICAgICAgIHRoaXMubmF2aWdhdGUoZmlsdGVyRGF0YSk7XG4gICAgfVxuXG5cbiAgICB0ZXN0KHBhcmFtZXRlcikge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtTWFwID0+IHtcbiAgICAgICAgICAgIHRoaXMuUXVlcnlFeC5jYXRlZ29yeU5hbWUgPSBwYXJhbU1hcC5wYXJhbXMuY2F0ZWdvcnlOYW1lO1xuXG4gICAgICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1NYXAuc3Vic2NyaWJlKHF1ZXJ5UGFyYW1NYXAgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuUXVlcnlFeC5wYWdlID0gcXVlcnlQYXJhbU1hcC5wYXJhbXMucGFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLlF1ZXJ5RXguc29ydCA9IHF1ZXJ5UGFyYW1NYXAucGFyYW1zLnNvcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5RdWVyeVVybCA9IHF1ZXJ5UGFyYW1NYXAucGFyYW1zO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlclByb3ZpZGVyLmdldExpc3QodGhpcy5RdWVyeUV4LmNhdGVnb3J5TmFtZSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLlF1ZXJ5RXguY2F0ZWdvcnlJZCA9IHJlc3BvbnNlLmNhdGlkO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHJlc3BvbnNlLnBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFBhcmFtZXRlcnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdFByb3ZpZGVyOiBQcm9kdWN0UHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYXJhbWV0ZXJzU2VydmljZTogUGFyYW1ldGVyc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYXJhbWV0ZXJQcm92aWRlcjogUGFyYW1ldGVyUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RmlsdGVyKCkge1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RmlsdGVyKCkge1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVXJsKCkge1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RnJvbVVybCgpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U2VsZWN0ZWRQYXJhbWV0ZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5RdWVyeVVybCkge1xuICAgICAgICAgIGxldCBzZWxlY3RlZFBhcmFtcyA9ICB0aGlzLnBhcmFtZXRlcnMubWFwKHBhcmFtZXRlciA9PiB0aGlzLnBhcmFtZXRlcnNTZXJ2aWNlLnVybFRvUGFyYW1ldGVyKHBhcmFtZXRlciwgdGhpcy5RdWVyeVVybCkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUGFyYW1zKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZFBhcmFtZXRlcnMoKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLnBhcmFtZXRlcnMubWFwKHggPT4gT2JqZWN0LmFzc2lnbih7fSwgeCkpLmZpbHRlcigocDogUGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBwLnZhbHVlcy5maW5kKHYgPT4gdi5zZWxlY3RlZCk7XG4gICAgICAgICAgICByZXR1cm4gcC50byB8fCBwLmZyb20gfHwgISFzZWxlY3RlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHBhcmFtcy5mb3JFYWNoKChwOiBQYXJhbWV0ZXIsIGksIGFycmF5KSA9PiB7XG4gICAgICAgICAgICBpZiAocC52YWx1ZXMpXG4gICAgICAgICAgICAgICAgcC52YWx1ZXMgPSBwLnZhbHVlcy5maWx0ZXIodiA9PiB2LnNlbGVjdGVkICYmIHYubm9tYXR0ZXIgIT0gdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocC5iZWhhdmlvciAhPSAnaW5wdXQnICYmIHAudmFsdWVzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpLCAxKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFByb2R1Y3RzKCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RQcm92aWRlci5saXN0KE9iamVjdC5hc3NpZ24oe3BhcmFtZXRlcnM6IHRoaXMuZ2V0U2VsZWN0ZWRQYXJhbWV0ZXJzKCl9LCB0aGlzLlF1ZXJ5RXgpKS5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcC5wcm9kdWN0cztcbiAgICAgICAgICAgIHRoaXMucGFnZXJDb21wb25lbnQuc2V0dXAocmVzcC5jb3VudCwgdGhpcy5RdWVyeUV4LnBhZ2UpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgbmF2aWdhdGUoZmlsdGVyRGF0YSkge1xuICAgICAgICBsZXQgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwge3BhZ2U6IHRoaXMuUXVlcnlFeC5wYWdlfSwgZmlsdGVyRGF0YSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLlF1ZXJ5RXguY2F0ZWdvcnlOYW1lXSwge3F1ZXJ5UGFyYW1zOiBwYXJhbXN9KTtcbiAgICB9XG59XG5cblxuIl19