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
import { ParameterProvider, ProductProvider } from "providers";
import { ActivatedRoute, Router } from "@angular/router";
import { ParametersService, SortingService } from "services";
import { PagerControl } from "controls/pager/pager";
import { ComponentCatalogFilter } from "./components/filter/filter";
let CatalogPage = class CatalogPage {
    constructor(productProvider, parametersService, parameterProvider, sortingService, route, router) {
        this.productProvider = productProvider;
        this.parametersService = parametersService;
        this.parameterProvider = parameterProvider;
        this.sortingService = sortingService;
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
        this.navigate();
        this.fetchProducts();
    }
    clearFilter() {
        delete this.page;
        this.parametersService.clearFilterData();
        this.navigate();
        this.fetchParameters();
    }
    applyFilter() {
        this.xs = false;
        this.navigate();
        this.fetchProducts();
    }
    changeSort() {
        this.navigate();
        this.fetchProducts();
    }
    changePage(page) {
        this.page = page;
        this.navigate();
        this.fetchProducts();
    }
    ngOnInit() {
        let pm = this.route.snapshot.paramMap;
        let qpm = this.route.snapshot.queryParamMap;
        this.categoryName = pm.params.categoryName;
        this.page = qpm.params.page;
        this.activeSort = qpm.sort;
        this.params = this.excludeParams(qpm.params);
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
    ViewChild(PagerControl),
    __metadata("design:type", Object)
], CatalogPage.prototype, "pagerComponent", void 0);
__decorate([
    ViewChild(ComponentCatalogFilter),
    __metadata("design:type", Object)
], CatalogPage.prototype, "catalogFilter", void 0);
CatalogPage = __decorate([
    Component({
        selector: 'catalog',
        host: { 'class': 'container d-block' },
        templateUrl: 'catalog.html'
    }),
    __metadata("design:paramtypes", [ProductProvider,
        ParametersService,
        ParameterProvider,
        SortingService,
        ActivatedRoute,
        Router])
], CatalogPage);
export { CatalogPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFFLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxjQUFjLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDM0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBT2xFLElBQWEsV0FBVyxHQUF4QjtJQWVJLFlBQW9CLGVBQWdDLEVBQ2hDLGlCQUFvQyxFQUNwQyxpQkFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsS0FBcUIsRUFDckIsTUFBYztRQUxkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFmbEMsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQWdCLEVBQUUsQ0FBQztRQU83QixPQUFFLEdBQVksS0FBSyxDQUFDO0lBUXBCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUVqQixJQUFJLENB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QVksQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0osQ0FBQTtBQWpKNEI7SUFBeEIsU0FBUyxDQUFDLFlBQVksQ0FBQzs7bURBQWdCO0FBQ0w7SUFBbEMsU0FBUyxDQUFDLHNCQUFzQixDQUFDOztrREFBZTtBQUh4QyxXQUFXO0lBTHZCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLElBQUksRUFBQyxFQUFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQztRQUNsQyxXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDO3FDQWdCdUMsZUFBZTtRQUNiLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDcEIsY0FBYztRQUN2QixjQUFjO1FBQ2IsTUFBTTtHQXBCekIsV0FBVyxDQW1KdkI7U0FuSlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCJtb2RlbHMvcHJvZHVjdFwiO1xuaW1wb3J0IHtQYXJhbWV0ZXJQcm92aWRlciwgUHJvZHVjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UGFyYW1ldGVyfSBmcm9tIFwibW9kZWxzL3BhcmFtZXRlclwiO1xuaW1wb3J0IHtQYXJhbWV0ZXJzU2VydmljZSwgU29ydGluZ1NlcnZpY2V9IGZyb20gXCJzZXJ2aWNlc1wiO1xuaW1wb3J0IHtQYWdlckNvbnRyb2x9IGZyb20gXCJjb250cm9scy9wYWdlci9wYWdlclwiO1xuaW1wb3J0IHtDb21wb25lbnRDYXRhbG9nRmlsdGVyfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjYXRhbG9nJyxcbiAgICBob3N0OnsnY2xhc3MnOidjb250YWluZXIgZC1ibG9jayd9LFxuICAgIHRlbXBsYXRlVXJsOiAnY2F0YWxvZy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXRhbG9nUGFnZSB7XG5cbiAgICBAVmlld0NoaWxkKFBhZ2VyQ29udHJvbCkgcGFnZXJDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZChDb21wb25lbnRDYXRhbG9nRmlsdGVyKSBjYXRhbG9nRmlsdGVyO1xuXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtdO1xuICAgIHBhcmFtZXRlcnM6IFBhcmFtZXRlcltdID0gW107XG4gICAgY2F0ZWdvcnlJZDogc3RyaW5nO1xuICAgIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xuICAgIHBhcmFtczogYW55O1xuICAgIHBhZ2U6IG51bWJlcjtcbiAgICBzb3J0OiBhbnk7XG4gICAgYWN0aXZlU29ydDogc3RyaW5nO1xuICAgIHhzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RQcm92aWRlcjogUHJvZHVjdFByb3ZpZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFyYW1ldGVyc1NlcnZpY2U6IFBhcmFtZXRlcnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFyYW1ldGVyUHJvdmlkZXI6IFBhcmFtZXRlclByb3ZpZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgc29ydGluZ1NlcnZpY2U6IFNvcnRpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB9XG5cbiAgICB4c0NoYW5nZSgpIHtcbiAgICAgICAgdGhpcy54cyA9ICF0aGlzLnhzO1xuICAgIH1cblxuICAgIGNoYW5nZUZpbHRlcihwYXJhbWV0ZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucGFnZTtcblxuICAgICAgICB0aGlzLm5hdmlnYXRlKCk7XG4gICAgICAgIHRoaXMuZmV0Y2hQcm9kdWN0cygpO1xuICAgIH1cblxuXG4gICAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhZ2U7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyc1NlcnZpY2UuY2xlYXJGaWx0ZXJEYXRhKCk7XG5cbiAgICAgICAgdGhpcy5uYXZpZ2F0ZSgpO1xuICAgICAgICB0aGlzLmZldGNoUGFyYW1ldGVycygpO1xuICAgIH1cblxuICAgIGFwcGx5RmlsdGVyKCkge1xuICAgICAgICB0aGlzLnhzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmF2aWdhdGUoKTtcbiAgICAgICAgdGhpcy5mZXRjaFByb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlU29ydCgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZSgpO1xuICAgICAgICB0aGlzLmZldGNoUHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQYWdlKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcblxuICAgICAgICB0aGlzLm5hdmlnYXRlKCk7XG4gICAgICAgIHRoaXMuZmV0Y2hQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBsZXQgcG0gPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwIGFzIGFueTtcbiAgICAgICAgbGV0IHFwbSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbU1hcCBhcyBhbnk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlOYW1lID0gcG0ucGFyYW1zLmNhdGVnb3J5TmFtZTtcbiAgICAgICAgdGhpcy5wYWdlID0gcXBtLnBhcmFtcy5wYWdlO1xuICAgICAgICB0aGlzLmFjdGl2ZVNvcnQgPSBxcG0uc29ydDtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSB0aGlzLmV4Y2x1ZGVQYXJhbXMocXBtLnBhcmFtcyk7XG4gICAgICAgIHRoaXMuZmV0Y2hQYXJhbWV0ZXJzKCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGV4Y2x1ZGVQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgIGxldCBwID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTtcbiAgICAgICAgZGVsZXRlIHAucGFnZTtcbiAgICAgICAgZGVsZXRlIHAuc29ydDtcbiAgICAgICAgZGVsZXRlIHAuY2F0ZWdvcnlOYW1lO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdFBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5tYXAocGFyYW1ldGVyID0+IHRoaXMucGFyYW1ldGVyc1NlcnZpY2UudXJsVG9QYXJhbWV0ZXIocGFyYW1ldGVyLCB0aGlzLnBhcmFtcykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0QWN0aXZlUGFyYW1ldGVycyhhY3RpdmVQYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5mb3JFYWNoKHBhcmFtZXRlciA9PiB7XG4gICAgICAgICAgICBwYXJhbWV0ZXIudmFsdWVzLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICAgICAgdi5hY3RpdmUgPSBhY3RpdmVQYXJhbWV0ZXJzLmluY2x1ZGVzKHYuX2lkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkUGFyYW1ldGVycygpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoeCA9PiBPYmplY3QuYXNzaWduKHt9LCB4KSkuZmlsdGVyKChwOiBQYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IHAudmFsdWVzLmZpbmQodiA9PiB2LnNlbGVjdGVkKTtcbiAgICAgICAgICAgIHJldHVybiBwLnRvIHx8IHAuZnJvbSB8fCAhIXNlbGVjdGVkO1xuICAgICAgICB9KTtcbiAgICAgICAgcGFyYW1zLmZvckVhY2goKHA6IFBhcmFtZXRlciwgaSwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgIGlmIChwLnZhbHVlcylcbiAgICAgICAgICAgICAgICBwLnZhbHVlcyA9IHAudmFsdWVzLmZpbHRlcih2ID0+IHYuc2VsZWN0ZWQgJiYgdi5ub21hdHRlciAhPSB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwLmJlaGF2aW9yICE9ICdpbnB1dCcgJiYgcC52YWx1ZXMubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmV0Y2hBY3RpdmUoKSB7XG4gICAgICAgIGxldCBxdWVyeSA9IHtcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHRoaXMuZ2V0U2VsZWN0ZWRQYXJhbWV0ZXJzKCksXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiB0aGlzLmNhdGVnb3J5SWRcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJQcm92aWRlci5nZXRBY3RpdmUocXVlcnkpLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQv9C+0LvRg9GH0LXQvdGLINCw0LrRgtC40LLQvdGL0LUg0L/QsNGA0LDQvNC10YLRgNGLJyk7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVBhcmFtZXRlcnMocmVzcCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaFBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyUHJvdmlkZXIuZ2V0TGlzdCh0aGlzLmNhdGVnb3J5TmFtZSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQv9C+0LvRg9GH0LXQvdGLINC/0LDRgNCw0LzQtdGC0YDRiycpO1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeUlkID0gcmVzcG9uc2UuY2F0aWQ7XG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSByZXNwb25zZS5wYXJhbWV0ZXJzO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RQYXJhbWV0ZXJzKCk7XG4gICAgICAgICAgICB0aGlzLmZldGNoUHJvZHVjdHMoKTtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hBY3RpdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaFByb2R1Y3RzKCkge1xuICAgICAgICBsZXQgcXVlcnkgPSB7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiB0aGlzLmdldFNlbGVjdGVkUGFyYW1ldGVycygpLFxuICAgICAgICAgICAgc29ydDogdGhpcy5zb3J0aW5nU2VydmljZS5nZXRTZWFyY2goKSxcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHRoaXMuY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb2R1Y3RQcm92aWRlci5saXN0KHF1ZXJ5KS5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0L/QvtC70YPRh9C10L3RiyDQv9GA0L7QtNGD0LrRgtGLJyk7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcC5wcm9kdWN0cztcbiAgICAgICAgICAgIHRoaXMucGFnZXJDb21wb25lbnQuc2V0dXAocmVzcC5jb3VudCwgdGhpcy5wYWdlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIG5hdmlnYXRlKCkge1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCB7cGFnZTogdGhpcy5wYWdlfSwgdGhpcy5zb3J0aW5nU2VydmljZS5nZXRVcmwoKSwgdGhpcy5wYXJhbWV0ZXJzU2VydmljZS5nZXRGaWx0ZXJEYXRhKCkpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jYXRlZ29yeU5hbWVdLCB7cXVlcnlQYXJhbXN9KTtcbiAgICB9XG59XG5cblxuIl19