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
        let filterData = this.parametersService.filterToUrlFactory(parameter);
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
        return this.parameters.map(parameter => {
            if (this.QueryUrl) {
                let urlToFilter = this.parametersService.urlToFilterFactory(parameter.behavior);
                parameter = urlToFilter(parameter, this.QueryUrl);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBS2xFLElBQWEsV0FBVyxHQUF4QjtJQWdFSSxZQUFvQixlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsaUJBQW9DLEVBQ3BDLEtBQXFCLEVBQ3JCLE1BQWM7UUFKZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUEvRGxDLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFDN0IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQTJEZCxDQUFDO0lBdkRELFlBQVksQ0FBQyxTQUFTO1FBQ2xCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0Is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Q0FBQyxDQUFDO0lBQzVFLENBQUM7Q0FDSixDQUFBO0FBeEg4QjtJQUExQixTQUFTLENBQUMsY0FBYyxDQUFDOzttREFBZ0I7QUFDUDtJQUFsQyxTQUFTLENBQUMsc0JBQXNCLENBQUM7O2tEQUFlO0FBSHhDLFdBQVc7SUFIdkIsU0FBUyxDQUFDO1FBQ1AsV0FBVyxFQUFFLGNBQWM7S0FDOUIsQ0FBQztxQ0FpRXVDLGVBQWU7UUFDYixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQzdCLGNBQWM7UUFDYixNQUFNO0dBcEV6QixXQUFXLENBMEh2QjtTQTFIWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcImVudGl0aWVzL3Byb2R1Y3RcIjtcbmltcG9ydCB7UHJvZHVjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL3Byb2R1Y3RcIjtcblxuaW1wb3J0IHtQYXJhbWV0ZXJQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVycy9wYXJhbWV0ZXJcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQYXJhbWV0ZXJ9IGZyb20gXCJlbnRpdGllcy9wYXJhbWV0ZXJcIjtcbmltcG9ydCB7UGFyYW1ldGVyc1NlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9wYXJhbWV0ZXJzXCI7XG5pbXBvcnQge1BhZ2VyQ29tcG9uZW50fSBmcm9tIFwiY29tcG9uZW50cy9wYWdlci9wYWdlclwiO1xuaW1wb3J0IHtDb21wb25lbnRDYXRhbG9nRmlsdGVyfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICdjYXRhbG9nLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VDYXRhbG9nIHtcblxuICAgIEBWaWV3Q2hpbGQoUGFnZXJDb21wb25lbnQpIHBhZ2VyQ29tcG9uZW50O1xuICAgIEBWaWV3Q2hpbGQoQ29tcG9uZW50Q2F0YWxvZ0ZpbHRlcikgY2F0YWxvZ0ZpbHRlcjtcblxuICAgIHByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXTtcbiAgICBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJbXSA9IFtdO1xuICAgIEZpbHRlciA9IHt9O1xuICAgIFF1ZXJ5ID0ge307XG4gICAgUXVlcnlFeCA9IHt9O1xuICAgIFF1ZXJ5VXJsID0ge307XG4gICAgY2F0ZWdvcnlJZDogc3RyaW5nO1xuICAgIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xuXG4gICAgZmlsdGVyQ2hhbmdlKHBhcmFtZXRlcikge1xuICAgICAgICBsZXQgZmlsdGVyRGF0YSA9IHRoaXMucGFyYW1ldGVyc1NlcnZpY2UuZmlsdGVyVG9VcmxGYWN0b3J5KHBhcmFtZXRlcik7XG4gICAgICAgIHRoaXMubmF2aWdhdGUoZmlsdGVyRGF0YSk7XG4gICAgfVxuXG4gICAgc29ydENoYW5nZShzb3J0aW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvcnRpbmcpXG4gICAgfVxuXG4gICAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfQvtGH0LjRgdGC0LrQsCDRhNC40LvRjNGC0YDQsCcpXG4gICAgfVxuXG4gICAgYXBwbHlGaWx0ZXIocGFyYW1ldGVyKSB7XG5cbiAgICAgICAgLy90aGlzLm5hdmlnYXRlKCk7XG4gICAgfVxuXG4gICAgcGFnZUNoYW5nZShwYWdlKSB7XG4gICAgICAgIHRoaXMuUXVlcnlFeC5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZSgpO1xuICAgIH1cblxuXG4gICAgdGVzdChwYXJhbWV0ZXIpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZShwYXJhbU1hcCA9PiB7XG4gICAgICAgICAgICB0aGlzLlF1ZXJ5RXguY2F0ZWdvcnlOYW1lID0gcGFyYW1NYXAucGFyYW1zLmNhdGVnb3J5TmFtZTtcblxuICAgICAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtTWFwLnN1YnNjcmliZShxdWVyeVBhcmFtTWFwID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLlF1ZXJ5RXgucGFnZSA9IHF1ZXJ5UGFyYW1NYXAucGFyYW1zLnBhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy5RdWVyeUV4LnNvcnQgPSBxdWVyeVBhcmFtTWFwLnBhcmFtcy5zb3J0O1xuICAgICAgICAgICAgICAgIHRoaXMuUXVlcnlVcmwgPSBxdWVyeVBhcmFtTWFwLnBhcmFtcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJQcm92aWRlci5nZXRMaXN0KHRoaXMuUXVlcnlFeC5jYXRlZ29yeU5hbWUpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5RdWVyeUV4LmNhdGVnb3J5SWQgPSByZXNwb25zZS5jYXRpZDtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSByZXNwb25zZS5wYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5zZXRTZWxlY3RlZFBhcmFtZXRlcnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuXG5cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RQcm92aWRlcjogUHJvZHVjdFByb3ZpZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFyYW1ldGVyc1NlcnZpY2U6IFBhcmFtZXRlcnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFyYW1ldGVyUHJvdmlkZXI6IFBhcmFtZXRlclByb3ZpZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZpbHRlcigpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZpbHRlcigpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVVybCgpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZyb21VcmwoKSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFNlbGVjdGVkUGFyYW1ldGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5tYXAocGFyYW1ldGVyID0+IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuUXVlcnlVcmwpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXJsVG9GaWx0ZXIgPSB0aGlzLnBhcmFtZXRlcnNTZXJ2aWNlLnVybFRvRmlsdGVyRmFjdG9yeShwYXJhbWV0ZXIuYmVoYXZpb3IpO1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlciA9IHVybFRvRmlsdGVyKHBhcmFtZXRlciwgdGhpcy5RdWVyeVVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkUGFyYW1ldGVycygpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoeCA9PiBPYmplY3QuYXNzaWduKHt9LCB4KSkuZmlsdGVyKChwOiBQYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IHAudmFsdWVzLmZpbmQodiA9PiB2LnNlbGVjdGVkKTtcbiAgICAgICAgICAgIHJldHVybiBwLnRvIHx8IHAuZnJvbSB8fCBzZWxlY3RlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHBhcmFtcy5mb3JFYWNoKChwOiBQYXJhbWV0ZXIsIGksIGFycmF5KSA9PiB7XG4gICAgICAgICAgICBpZiAocC52YWx1ZXMpXG4gICAgICAgICAgICAgICAgcC52YWx1ZXMgPSBwLnZhbHVlcy5maWx0ZXIodiA9PiB2LnNlbGVjdGVkICYmIHYubm9tYXR0ZXIgIT0gdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocC52YWx1ZXMubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UHJvZHVjdHMoKSB7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UHJvdmlkZXIubGlzdChPYmplY3QuYXNzaWduKHtwYXJhbWV0ZXJzOiB0aGlzLmdldFNlbGVjdGVkUGFyYW1ldGVycygpfSwgdGhpcy5RdWVyeUV4KSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc3AucHJvZHVjdHM7XG4gICAgICAgICAgICB0aGlzLnBhZ2VyQ29tcG9uZW50LnNldHVwKHJlc3AuY291bnQsIHRoaXMuUXVlcnlFeC5wYWdlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIG5hdmlnYXRlKGZpbHRlckRhdGEpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30se3BhZ2U6dGhpcy5RdWVyeUV4LnBhZ2V9LGZpbHRlckRhdGEpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5RdWVyeUV4LmNhdGVnb3J5TmFtZV0sIHtxdWVyeVBhcmFtczpwYXJhbXN9KTtcbiAgICB9XG59XG5cblxuIl19