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
import { SortingService } from "../../services/sort";
let PageCatalog = class PageCatalog {
    constructor(productProvider, parametersService, parameterProvider, sortingService, route, router) {
        this.productProvider = productProvider;
        this.parametersService = parametersService;
        this.parameterProvider = parameterProvider;
        this.sortingService = sortingService;
        this.route = route;
        this.router = router;
        this.products = [];
        this.parameters = [];
    }
    changeFilter(parameter) {
        delete this.page;
        let filterData = this.parametersService.filterToUrl(parameter);
        this.navigate(filterData);
        this.fetchProducts();
    }
    clearFilter() {
        delete this.page;
        this.parametersService.clearFilterData();
        this.navigate();
        this.fetchParameters();
    }
    applyFilter() {
        this.navigate();
        this.fetchProducts();
    }
    changeSort() {
        this.navigate();
        this.fetchProducts();
    }
    changePage(page) {
        this.page = page;
        let filterData = this.parametersService.getFilterData();
        this.navigate(filterData);
        this.fetchProducts();
    }
    ngOnInit() {
        this.categoryName = this.route.snapshot.paramMap.params.categoryName;
        this.page = this.route.snapshot.queryParamMap.params.page;
        this.activeSort = this.route.snapshot.queryParamMap.params.sort;
        this.params = this.excludeParams(this.route.snapshot.queryParamMap.params);
        this.fetchParameters();
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
        this.parameterProvider.getList(this.categoryName).subscribe(response => {
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
        SortingService,
        ActivatedRoute,
        Router])
], PageCatalog);
export { PageCatalog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUtuRCxJQUFhLFdBQVcsR0FBeEI7SUFjSSxZQUFvQixlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLEtBQXFCLEVBQ3JCLE1BQWM7UUFMZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBZGxDLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFnQixFQUFFLENBQUM7SUFjN0IsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENB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Q0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQzdILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0osQ0FBQTtBQTFJOEI7SUFBMUIsU0FBUyxDQUFDLGNBQWMsQ0FBQzs7bURBQWdCO0FBQ1A7SUFBbEMsU0FBUyxDQUFDLHNCQUFzQixDQUFDOztrREFBZTtBQUh4QyxXQUFXO0lBSHZCLFNBQVMsQ0FBQztRQUNQLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7cUNBZXVDLGVBQWU7UUFDYixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ3BCLGNBQWM7UUFDdkIsY0FBYztRQUNiLE1BQU07R0FuQnpCLFdBQVcsQ0E0SXZCO1NBNUlZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiZW50aXRpZXMvcHJvZHVjdFwiO1xuaW1wb3J0IHtQcm9kdWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvcHJvZHVjdFwiO1xuXG5pbXBvcnQge1BhcmFtZXRlclByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL3BhcmFtZXRlclwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcImVudGl0aWVzL3BhcmFtZXRlclwiO1xuaW1wb3J0IHtQYXJhbWV0ZXJzU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL3BhcmFtZXRlcnNcIjtcbmltcG9ydCB7UGFnZXJDb21wb25lbnR9IGZyb20gXCJjb21wb25lbnRzL3BhZ2VyL3BhZ2VyXCI7XG5pbXBvcnQge0NvbXBvbmVudENhdGFsb2dGaWx0ZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlclwiO1xuaW1wb3J0IHtTb3J0aW5nU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NvcnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICdjYXRhbG9nLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VDYXRhbG9nIHtcblxuICAgIEBWaWV3Q2hpbGQoUGFnZXJDb21wb25lbnQpIHBhZ2VyQ29tcG9uZW50O1xuICAgIEBWaWV3Q2hpbGQoQ29tcG9uZW50Q2F0YWxvZ0ZpbHRlcikgY2F0YWxvZ0ZpbHRlcjtcblxuICAgIHByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXTtcbiAgICBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJbXSA9IFtdO1xuICAgIGNhdGVnb3J5SWQ6IHN0cmluZztcbiAgICBjYXRlZ29yeU5hbWU6IHN0cmluZztcbiAgICBwYXJhbXM6IGFueTtcbiAgICBwYWdlOiBudW1iZXI7XG4gICAgc29ydDogYW55O1xuICAgIGFjdGl2ZVNvcnQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdFByb3ZpZGVyOiBQcm9kdWN0UHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYXJhbWV0ZXJzU2VydmljZTogUGFyYW1ldGVyc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYXJhbWV0ZXJQcm92aWRlcjogUGFyYW1ldGVyUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBzb3J0aW5nU2VydmljZTogU29ydGluZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIGNoYW5nZUZpbHRlcihwYXJhbWV0ZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucGFnZTtcbiAgICAgICAgbGV0IGZpbHRlckRhdGEgPSB0aGlzLnBhcmFtZXRlcnNTZXJ2aWNlLmZpbHRlclRvVXJsKHBhcmFtZXRlcik7XG4gICAgICAgIHRoaXMubmF2aWdhdGUoZmlsdGVyRGF0YSk7XG4gICAgICAgIHRoaXMuZmV0Y2hQcm9kdWN0cygpO1xuICAgIH1cblxuXG4gICAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhZ2U7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyc1NlcnZpY2UuY2xlYXJGaWx0ZXJEYXRhKCk7XG5cbiAgICAgICAgdGhpcy5uYXZpZ2F0ZSgpO1xuICAgICAgICB0aGlzLmZldGNoUGFyYW1ldGVycygpO1xuICAgIH1cblxuICAgIGFwcGx5RmlsdGVyKCkge1xuXG4gICAgICAgIHRoaXMubmF2aWdhdGUoKTtcbiAgICAgICAgdGhpcy5mZXRjaFByb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlU29ydCgpIHtcblxuICAgICAgICB0aGlzLm5hdmlnYXRlKCk7XG4gICAgICAgIHRoaXMuZmV0Y2hQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIGNoYW5nZVBhZ2UocGFnZSkge1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICBsZXQgZmlsdGVyRGF0YSA9IHRoaXMucGFyYW1ldGVyc1NlcnZpY2UuZ2V0RmlsdGVyRGF0YSgpO1xuICAgICAgICB0aGlzLm5hdmlnYXRlKGZpbHRlckRhdGEpO1xuICAgICAgICB0aGlzLmZldGNoUHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeU5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLnBhcmFtcy5jYXRlZ29yeU5hbWU7XG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbU1hcC5wYXJhbXMucGFnZTtcbiAgICAgICAgdGhpcy5hY3RpdmVTb3J0ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtTWFwLnBhcmFtcy5zb3J0O1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHRoaXMuZXhjbHVkZVBhcmFtcyh0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1NYXAucGFyYW1zKTtcbiAgICAgICAgdGhpcy5mZXRjaFBhcmFtZXRlcnMoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZXhjbHVkZVBhcmFtcyhwYXJhbXMpIHtcbiAgICAgICAgbGV0IHAgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpO1xuICAgICAgICBkZWxldGUgcC5wYWdlO1xuICAgICAgICBkZWxldGUgcC5zb3J0O1xuICAgICAgICBkZWxldGUgcC5jYXRlZ29yeU5hbWU7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VsZWN0UGFyYW1ldGVycygpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLm1hcChwYXJhbWV0ZXIgPT4gdGhpcy5wYXJhbWV0ZXJzU2VydmljZS51cmxUb1BhcmFtZXRlcihwYXJhbWV0ZXIsIHRoaXMucGFyYW1zKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRBY3RpdmVQYXJhbWV0ZXJzKGFjdGl2ZVBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLmZvckVhY2gocGFyYW1ldGVyID0+IHtcbiAgICAgICAgICAgIHBhcmFtZXRlci52YWx1ZXMuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgICAgICB2LmFjdGl2ZSA9IGFjdGl2ZVBhcmFtZXRlcnMuaW5jbHVkZXModi5faWQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRQYXJhbWV0ZXJzKCkge1xuICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5wYXJhbWV0ZXJzLm1hcCh4ID0+IE9iamVjdC5hc3NpZ24oe30sIHgpKS5maWx0ZXIoKHA6IFBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gcC52YWx1ZXMuZmluZCh2ID0+IHYuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHAudG8gfHwgcC5mcm9tIHx8ICEhc2VsZWN0ZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJhbXMuZm9yRWFjaCgocDogUGFyYW1ldGVyLCBpLCBhcnJheSkgPT4ge1xuICAgICAgICAgICAgaWYgKHAudmFsdWVzKVxuICAgICAgICAgICAgICAgIHAudmFsdWVzID0gcC52YWx1ZXMuZmlsdGVyKHYgPT4gdi5zZWxlY3RlZCAmJiB2Lm5vbWF0dGVyICE9IHRydWUpO1xuICAgICAgICAgICAgaWYgKHAuYmVoYXZpb3IgIT0gJ2lucHV0JyAmJiBwLnZhbHVlcy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaEFjdGl2ZSgpIHtcbiAgICAgICAgbGV0IHF1ZXJ5ID0ge1xuICAgICAgICAgICAgcGFyYW1ldGVyczogdGhpcy5nZXRTZWxlY3RlZFBhcmFtZXRlcnMoKSxcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHRoaXMuY2F0ZWdvcnlJZFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBhcmFtZXRlclByb3ZpZGVyLmdldEFjdGl2ZShxdWVyeSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9C/0L7Qu9GD0YfQtdC90Ysg0LDQutGC0LjQstC90YvQtSDQv9Cw0YDQsNC80LXRgtGA0YsnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlUGFyYW1ldGVycyhyZXNwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGZldGNoUGFyYW1ldGVycygpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlclByb3ZpZGVyLmdldExpc3QodGhpcy5jYXRlZ29yeU5hbWUpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0L/QvtC70YPRh9C10L3RiyDQv9Cw0YDQsNC80LXRgtGA0YsnKTtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJZCA9IHJlc3BvbnNlLmNhdGlkO1xuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcmVzcG9uc2UucGFyYW1ldGVycztcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0UGFyYW1ldGVycygpO1xuICAgICAgICAgICAgdGhpcy5mZXRjaFByb2R1Y3RzKCk7XG4gICAgICAgICAgICB0aGlzLmZldGNoQWN0aXZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcml2YXRlIGZldGNoUHJvZHVjdHMoKSB7XG4gICAgICAgIGxldCBxdWVyeSA9IHtcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHRoaXMuZ2V0U2VsZWN0ZWRQYXJhbWV0ZXJzKCksXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnNvcnRpbmdTZXJ2aWNlLmdldFNlYXJjaCgpLFxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogdGhpcy5jYXRlZ29yeUlkLFxuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHJvZHVjdFByb3ZpZGVyLmxpc3QocXVlcnkpLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQv9C+0LvRg9GH0LXQvdGLINC/0YDQvtC00YPQutGC0YsnKTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSByZXNwLnByb2R1Y3RzO1xuICAgICAgICAgICAgdGhpcy5wYWdlckNvbXBvbmVudC5zZXR1cChyZXNwLmNvdW50LCB0aGlzLnBhZ2UpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgbmF2aWdhdGUoKSB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHtwYWdlOiB0aGlzLnBhZ2V9LCB0aGlzLnNvcnRpbmdTZXJ2aWNlLmdldFVybCgpLCB0aGlzLnBhcmFtZXRlcnNTZXJ2aWNlLmdldEZpbHRlckRhdGEoKSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNhdGVnb3J5TmFtZV0sIHtxdWVyeVBhcmFtc30pO1xuICAgIH1cbn1cblxuXG4iXX0=