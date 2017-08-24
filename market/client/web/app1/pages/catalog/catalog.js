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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUtuRCxJQUFhLFdBQVcsR0FBeEI7SUFjSSxZQUFvQixlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLEtBQXFCLEVBQ3JCLE1BQWM7UUFMZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBZGxDLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFnQixFQUFFLENBQUM7SUFjN0IsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENB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Q0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQzdILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0osQ0FBQTtBQTFJOEI7SUFBMUIsU0FBUyxDQUFDLGNBQWMsQ0FBQzs7bURBQWdCO0FBQ1A7SUFBbEMsU0FBUyxDQUFDLHNCQUFzQixDQUFDOztrREFBZTtBQUh4QyxXQUFXO0lBSHZCLFNBQVMsQ0FBQztRQUNQLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7cUNBZXVDLGVBQWU7UUFDYixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ3BCLGNBQWM7UUFDdkIsY0FBYztRQUNiLE1BQU07R0FuQnpCLFdBQVcsQ0E0SXZCO1NBNUlZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCJlbnRpdGllcy9wcm9kdWN0XCI7XHJcbmltcG9ydCB7UHJvZHVjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzL3Byb2R1Y3RcIjtcclxuXHJcbmltcG9ydCB7UGFyYW1ldGVyUHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvcGFyYW1ldGVyXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcImVudGl0aWVzL3BhcmFtZXRlclwiO1xyXG5pbXBvcnQge1BhcmFtZXRlcnNTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvcGFyYW1ldGVyc1wiO1xyXG5pbXBvcnQge1BhZ2VyQ29tcG9uZW50fSBmcm9tIFwiY29tcG9uZW50cy9wYWdlci9wYWdlclwiO1xyXG5pbXBvcnQge0NvbXBvbmVudENhdGFsb2dGaWx0ZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlclwiO1xyXG5pbXBvcnQge1NvcnRpbmdTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc29ydFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NhdGFsb2cuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VDYXRhbG9nIHtcclxuXHJcbiAgICBAVmlld0NoaWxkKFBhZ2VyQ29tcG9uZW50KSBwYWdlckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoQ29tcG9uZW50Q2F0YWxvZ0ZpbHRlcikgY2F0YWxvZ0ZpbHRlcjtcclxuXHJcbiAgICBwcm9kdWN0czogUHJvZHVjdFtdID0gW107XHJcbiAgICBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJbXSA9IFtdO1xyXG4gICAgY2F0ZWdvcnlJZDogc3RyaW5nO1xyXG4gICAgY2F0ZWdvcnlOYW1lOiBzdHJpbmc7XHJcbiAgICBwYXJhbXM6IGFueTtcclxuICAgIHBhZ2U6IG51bWJlcjtcclxuICAgIHNvcnQ6IGFueTtcclxuICAgIGFjdGl2ZVNvcnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RQcm92aWRlcjogUHJvZHVjdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYXJhbWV0ZXJzU2VydmljZTogUGFyYW1ldGVyc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhcmFtZXRlclByb3ZpZGVyOiBQYXJhbWV0ZXJQcm92aWRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgc29ydGluZ1NlcnZpY2U6IFNvcnRpbmdTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRmlsdGVyKHBhcmFtZXRlcikge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhZ2U7XHJcbiAgICAgICAgbGV0IGZpbHRlckRhdGEgPSB0aGlzLnBhcmFtZXRlcnNTZXJ2aWNlLmZpbHRlclRvVXJsKHBhcmFtZXRlcik7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZShmaWx0ZXJEYXRhKTtcclxuICAgICAgICB0aGlzLmZldGNoUHJvZHVjdHMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xlYXJGaWx0ZXIoKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMucGFnZTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnNTZXJ2aWNlLmNsZWFyRmlsdGVyRGF0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLm5hdmlnYXRlKCk7XHJcbiAgICAgICAgdGhpcy5mZXRjaFBhcmFtZXRlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseUZpbHRlcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZSgpO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hQcm9kdWN0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNvcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubmF2aWdhdGUoKTtcclxuICAgICAgICB0aGlzLmZldGNoUHJvZHVjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQYWdlKHBhZ2UpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIGxldCBmaWx0ZXJEYXRhID0gdGhpcy5wYXJhbWV0ZXJzU2VydmljZS5nZXRGaWx0ZXJEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZShmaWx0ZXJEYXRhKTtcclxuICAgICAgICB0aGlzLmZldGNoUHJvZHVjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5TmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAucGFyYW1zLmNhdGVnb3J5TmFtZTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1NYXAucGFyYW1zLnBhZ2U7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVTb3J0ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtTWFwLnBhcmFtcy5zb3J0O1xyXG4gICAgICAgIHRoaXMucGFyYW1zID0gdGhpcy5leGNsdWRlUGFyYW1zKHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbU1hcC5wYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hQYXJhbWV0ZXJzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhjbHVkZVBhcmFtcyhwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcCA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk7XHJcbiAgICAgICAgZGVsZXRlIHAucGFnZTtcclxuICAgICAgICBkZWxldGUgcC5zb3J0O1xyXG4gICAgICAgIGRlbGV0ZSBwLmNhdGVnb3J5TmFtZTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdFBhcmFtZXRlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLm1hcChwYXJhbWV0ZXIgPT4gdGhpcy5wYXJhbWV0ZXJzU2VydmljZS51cmxUb1BhcmFtZXRlcihwYXJhbWV0ZXIsIHRoaXMucGFyYW1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRBY3RpdmVQYXJhbWV0ZXJzKGFjdGl2ZVBhcmFtZXRlcnMpIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuZm9yRWFjaChwYXJhbWV0ZXIgPT4ge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXIudmFsdWVzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgICAgICB2LmFjdGl2ZSA9IGFjdGl2ZVBhcmFtZXRlcnMuaW5jbHVkZXModi5faWQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNlbGVjdGVkUGFyYW1ldGVycygpIHtcclxuICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5wYXJhbWV0ZXJzLm1hcCh4ID0+IE9iamVjdC5hc3NpZ24oe30sIHgpKS5maWx0ZXIoKHA6IFBhcmFtZXRlcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBwLnZhbHVlcy5maW5kKHYgPT4gdi5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwLnRvIHx8IHAuZnJvbSB8fCAhIXNlbGVjdGVkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBhcmFtcy5mb3JFYWNoKChwOiBQYXJhbWV0ZXIsIGksIGFycmF5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwLnZhbHVlcylcclxuICAgICAgICAgICAgICAgIHAudmFsdWVzID0gcC52YWx1ZXMuZmlsdGVyKHYgPT4gdi5zZWxlY3RlZCAmJiB2Lm5vbWF0dGVyICE9IHRydWUpO1xyXG4gICAgICAgICAgICBpZiAocC5iZWhhdmlvciAhPSAnaW5wdXQnICYmIHAudmFsdWVzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmV0Y2hBY3RpdmUoKSB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiB0aGlzLmdldFNlbGVjdGVkUGFyYW1ldGVycygpLFxyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiB0aGlzLmNhdGVnb3J5SWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVyUHJvdmlkZXIuZ2V0QWN0aXZlKHF1ZXJ5KS5zdWJzY3JpYmUocmVzcCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQv9C+0LvRg9GH0LXQvdGLINCw0LrRgtC40LLQvdGL0LUg0L/QsNGA0LDQvNC10YLRgNGLJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlUGFyYW1ldGVycyhyZXNwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmV0Y2hQYXJhbWV0ZXJzKCl7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJQcm92aWRlci5nZXRMaXN0KHRoaXMuY2F0ZWdvcnlOYW1lKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0L/QvtC70YPRh9C10L3RiyDQv9Cw0YDQsNC80LXRgtGA0YsnKTtcclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeUlkID0gcmVzcG9uc2UuY2F0aWQ7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHJlc3BvbnNlLnBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0UGFyYW1ldGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoUHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgdGhpcy5mZXRjaEFjdGl2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmZXRjaFByb2R1Y3RzKCkge1xyXG4gICAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyczogdGhpcy5nZXRTZWxlY3RlZFBhcmFtZXRlcnMoKSxcclxuICAgICAgICAgICAgc29ydDogdGhpcy5zb3J0aW5nU2VydmljZS5nZXRTZWFyY2goKSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogdGhpcy5jYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucHJvZHVjdFByb3ZpZGVyLmxpc3QocXVlcnkpLnN1YnNjcmliZShyZXNwID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9C/0L7Qu9GD0YfQtdC90Ysg0L/RgNC+0LTRg9C60YLRiycpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcC5wcm9kdWN0cztcclxuICAgICAgICAgICAgdGhpcy5wYWdlckNvbXBvbmVudC5zZXR1cChyZXNwLmNvdW50LCB0aGlzLnBhZ2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZSgpIHtcclxuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCB7cGFnZTogdGhpcy5wYWdlfSwgdGhpcy5zb3J0aW5nU2VydmljZS5nZXRVcmwoKSwgdGhpcy5wYXJhbWV0ZXJzU2VydmljZS5nZXRGaWx0ZXJEYXRhKCkpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNhdGVnb3J5TmFtZV0sIHtxdWVyeVBhcmFtc30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19