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
        console.log(sorting);
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
        this.productProvider.list({ parameters: this.getSelectedParameters(), sort: this.sort, categoryId: this.categoryId, page: this.page }).subscribe(resp => {
            console.log('получены продукты');
            this.products = resp.products;
            this.pagerComponent.setup(resp.count, this.page);
        });
    }
    navigate(filterData) {
        let queryParams = Object.assign({}, { page: this.page, sort: this.sort }, filterData);
        this.router.navigate([this.categoryName], { queryParams });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBS2xFLElBQWEsV0FBVyxHQUF4QjtJQWFJLFlBQW9CLGVBQWdDLEVBQ2hDLGlCQUFvQyxFQUNwQyxpQkFBb0MsRUFDcEMsS0FBcUIsRUFDckIsTUFBYztRQUpkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVpsQyxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBZ0IsRUFBRSxDQUFDO0lBWTdCLENBQUM7SUFFRCxZQUFZLENBQUMsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FB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QUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTyxRQUFRLENBQUMsVUFBVTtRQUN2QixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDSixDQUFBO0FBM0c4QjtJQUExQixTQUFTLENBQUMsY0FBYyxDQUFDOzttREFBZ0I7QUFDUDtJQUFsQyxTQUFTLENBQUMsc0JBQXNCLENBQUM7O2tEQUFlO0FBSHhDLFdBQVc7SUFIdkIsU0FBUyxDQUFDO1FBQ1AsV0FBVyxFQUFFLGNBQWM7S0FDOUIsQ0FBQztxQ0FjdUMsZUFBZTtRQUNiLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDN0IsY0FBYztRQUNiLE1BQU07R0FqQnpCLFdBQVcsQ0E2R3ZCO1NBN0dZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiZW50aXRpZXMvcHJvZHVjdFwiO1xuaW1wb3J0IHtQcm9kdWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvcHJvZHVjdFwiO1xuXG5pbXBvcnQge1BhcmFtZXRlclByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL3BhcmFtZXRlclwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcImVudGl0aWVzL3BhcmFtZXRlclwiO1xuaW1wb3J0IHtQYXJhbWV0ZXJzU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL3BhcmFtZXRlcnNcIjtcbmltcG9ydCB7UGFnZXJDb21wb25lbnR9IGZyb20gXCJjb21wb25lbnRzL3BhZ2VyL3BhZ2VyXCI7XG5pbXBvcnQge0NvbXBvbmVudENhdGFsb2dGaWx0ZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJ2NhdGFsb2cuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUNhdGFsb2cge1xuXG4gICAgQFZpZXdDaGlsZChQYWdlckNvbXBvbmVudCkgcGFnZXJDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZChDb21wb25lbnRDYXRhbG9nRmlsdGVyKSBjYXRhbG9nRmlsdGVyO1xuXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtdO1xuICAgIHBhcmFtZXRlcnM6IFBhcmFtZXRlcltdID0gW107XG4gICAgY2F0ZWdvcnlJZDogc3RyaW5nO1xuICAgIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xuICAgIHBhcmFtczogYW55O1xuICAgIHBhZ2U6IG51bWJlcjtcbiAgICBzb3J0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RQcm92aWRlcjogUHJvZHVjdFByb3ZpZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFyYW1ldGVyc1NlcnZpY2U6IFBhcmFtZXRlcnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFyYW1ldGVyUHJvdmlkZXI6IFBhcmFtZXRlclByb3ZpZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB9XG5cbiAgICBjaGFuZ2VGaWx0ZXIocGFyYW1ldGVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhZ2U7XG4gICAgICAgIGxldCBmaWx0ZXJEYXRhID0gdGhpcy5wYXJhbWV0ZXJzU2VydmljZS5maWx0ZXJUb1VybChwYXJhbWV0ZXIpO1xuICAgICAgICB0aGlzLm5hdmlnYXRlKGZpbHRlckRhdGEpO1xuICAgICAgICB0aGlzLmdldFByb2R1Y3RzKCk7XG4gICAgfVxuXG5cbiAgICBjbGVhckZpbHRlcigpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucGFnZTtcbiAgICAgICAgbGV0IGZpbHRlckRhdGEgPSB0aGlzLnBhcmFtZXRlcnNTZXJ2aWNlLmNsZWFyRmlsdGVyRGF0YSgpO1xuICAgICAgICB0aGlzLm5hdmlnYXRlKGZpbHRlckRhdGEpO1xuICAgICAgICB0aGlzLnNlbGVjdFBhcmFtZXRlcnMoKTtcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIGFwcGx5RmlsdGVyKCkge1xuICAgICAgICBsZXQgZmlsdGVyRGF0YSA9IHRoaXMucGFyYW1ldGVyc1NlcnZpY2UuZ2V0RmlsdGVyRGF0YSgpO1xuICAgICAgICB0aGlzLm5hdmlnYXRlKGZpbHRlckRhdGEpO1xuICAgICAgICB0aGlzLmdldFByb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlU29ydChzb3J0aW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvcnRpbmcpXG4gICAgfVxuXG4gICAgY2hhbmdlUGFnZShwYWdlKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIGxldCBmaWx0ZXJEYXRhID0gdGhpcy5wYXJhbWV0ZXJzU2VydmljZS5nZXRGaWx0ZXJEYXRhKCk7XG4gICAgICAgIHRoaXMubmF2aWdhdGUoZmlsdGVyRGF0YSk7XG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeU5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLnBhcmFtcy5jYXRlZ29yeU5hbWU7XG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbU1hcC5wYXJhbXMucGFnZTtcbiAgICAgICAgdGhpcy5zb3J0ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtTWFwLnBhcmFtcy5zb3J0O1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHRoaXMuZXhjbHVkZVBhcmFtcyh0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1NYXAucGFyYW1zKTtcblxuICAgICAgICB0aGlzLnBhcmFtZXRlclByb3ZpZGVyLmdldExpc3QodGhpcy5jYXRlZ29yeU5hbWUpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0L/QvtC70YPRh9C10L3RiyDQv9Cw0YDQsNC80LXRgtGA0YsnKTtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJZCA9IHJlc3BvbnNlLmNhdGlkO1xuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcmVzcG9uc2UucGFyYW1ldGVycztcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0UGFyYW1ldGVycygpO1xuICAgICAgICAgICAgdGhpcy5nZXRQcm9kdWN0cygpO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleGNsdWRlUGFyYW1zKHBhcmFtcykge1xuICAgICAgICBsZXQgcCA9IE9iamVjdC5hc3NpZ24oe30scGFyYW1zKTtcbiAgICAgICAgZGVsZXRlIHAucGFnZTtcbiAgICAgICAgZGVsZXRlIHAuc29ydDtcbiAgICAgICAgZGVsZXRlIHAuY2F0ZWdvcnlOYW1lO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdFBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5tYXAocGFyYW1ldGVyID0+IHRoaXMucGFyYW1ldGVyc1NlcnZpY2UudXJsVG9QYXJhbWV0ZXIocGFyYW1ldGVyLCB0aGlzLnBhcmFtcykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRQYXJhbWV0ZXJzKCkge1xuICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5wYXJhbWV0ZXJzLm1hcCh4ID0+IE9iamVjdC5hc3NpZ24oe30sIHgpKS5maWx0ZXIoKHA6IFBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gcC52YWx1ZXMuZmluZCh2ID0+IHYuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHAudG8gfHwgcC5mcm9tIHx8ICEhc2VsZWN0ZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJhbXMuZm9yRWFjaCgocDogUGFyYW1ldGVyLCBpLCBhcnJheSkgPT4ge1xuICAgICAgICAgICAgaWYgKHAudmFsdWVzKVxuICAgICAgICAgICAgICAgIHAudmFsdWVzID0gcC52YWx1ZXMuZmlsdGVyKHYgPT4gdi5zZWxlY3RlZCAmJiB2Lm5vbWF0dGVyICE9IHRydWUpO1xuICAgICAgICAgICAgaWYgKHAuYmVoYXZpb3IgIT0gJ2lucHV0JyAmJiBwLnZhbHVlcy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRQcm9kdWN0cygpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0UHJvdmlkZXIubGlzdCh7cGFyYW1ldGVyczogdGhpcy5nZXRTZWxlY3RlZFBhcmFtZXRlcnMoKSxzb3J0OnRoaXMuc29ydCxjYXRlZ29yeUlkOnRoaXMuY2F0ZWdvcnlJZCxwYWdlOnRoaXMucGFnZX0pLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQv9C+0LvRg9GH0LXQvdGLINC/0YDQvtC00YPQutGC0YsnKTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSByZXNwLnByb2R1Y3RzO1xuICAgICAgICAgICAgdGhpcy5wYWdlckNvbXBvbmVudC5zZXR1cChyZXNwLmNvdW50LCB0aGlzLnBhZ2UpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgbmF2aWdhdGUoZmlsdGVyRGF0YSkge1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCB7cGFnZTogdGhpcy5wYWdlLCBzb3J0OnRoaXMuc29ydH0sIGZpbHRlckRhdGEpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jYXRlZ29yeU5hbWVdLCB7cXVlcnlQYXJhbXN9KTtcbiAgICB9XG59XG5cblxuIl19