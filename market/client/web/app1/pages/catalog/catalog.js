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
import { ProductProvider } from "providers";
import { ParameterProvider } from "providers";
import { ActivatedRoute, Router } from "@angular/router";
import { ParametersService } from "services/parameters";
import { PagerControl } from "controls/pager/pager";
import { ComponentCatalogFilter } from "./components/filter/filter";
import { SortingService } from "../../services/sort";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUUxQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDNUMsT0FBTyxFQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBS25ELElBQWEsV0FBVyxHQUF4QjtJQWNJLFlBQW9CLGVBQWdDLEVBQ2hDLGlCQUFvQyxFQUNwQyxpQkFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsS0FBcUIsRUFDckIsTUFBYztRQUxkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFkbEMsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQWdCLEVBQUUsQ0FBQztJQWM3QixDQUFDO0lBRUQsWUFBWSxDQUFDLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENB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QUF4QixTQUFTLENBQUMsWUFBWSxDQUFDOzttREFBZ0I7QUFDTDtJQUFsQyxTQUFTLENBQUMsc0JBQXNCLENBQUM7O2tEQUFlO0FBSHhDLFdBQVc7SUFIdkIsU0FBUyxDQUFDO1FBQ1AsV0FBVyxFQUFFLGNBQWM7S0FDOUIsQ0FBQztxQ0FldUMsZUFBZTtRQUNiLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDcEIsY0FBYztRQUN2QixjQUFjO1FBQ2IsTUFBTTtHQW5CekIsV0FBVyxDQThJdkI7U0E5SVksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIm1vZGVscy9wcm9kdWN0XCI7XHJcbmltcG9ydCB7UHJvZHVjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XHJcblxyXG5pbXBvcnQge1BhcmFtZXRlclByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcIm1vZGVscy9wYXJhbWV0ZXJcIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJzU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL3BhcmFtZXRlcnNcIjtcclxuaW1wb3J0IHtQYWdlckNvbnRyb2x9IGZyb20gXCJjb250cm9scy9wYWdlci9wYWdlclwiO1xyXG5pbXBvcnQge0NvbXBvbmVudENhdGFsb2dGaWx0ZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlclwiO1xyXG5pbXBvcnQge1NvcnRpbmdTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc29ydFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NhdGFsb2cuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhdGFsb2dQYWdlIHtcclxuXHJcbiAgICBAVmlld0NoaWxkKFBhZ2VyQ29udHJvbCkgcGFnZXJDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKENvbXBvbmVudENhdGFsb2dGaWx0ZXIpIGNhdGFsb2dGaWx0ZXI7XHJcblxyXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtdO1xyXG4gICAgcGFyYW1ldGVyczogUGFyYW1ldGVyW10gPSBbXTtcclxuICAgIGNhdGVnb3J5SWQ6IHN0cmluZztcclxuICAgIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xyXG4gICAgcGFyYW1zOiBhbnk7XHJcbiAgICBwYWdlOiBudW1iZXI7XHJcbiAgICBzb3J0OiBhbnk7XHJcbiAgICBhY3RpdmVTb3J0OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0UHJvdmlkZXI6IFByb2R1Y3RQcm92aWRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFyYW1ldGVyc1NlcnZpY2U6IFBhcmFtZXRlcnNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYXJhbWV0ZXJQcm92aWRlcjogUGFyYW1ldGVyUHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHNvcnRpbmdTZXJ2aWNlOiBTb3J0aW5nU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUZpbHRlcihwYXJhbWV0ZXIpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5wYWdlO1xyXG5cclxuICAgICAgICB0aGlzLm5hdmlnYXRlKCk7XHJcbiAgICAgICAgdGhpcy5mZXRjaFByb2R1Y3RzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsZWFyRmlsdGVyKCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzU2VydmljZS5jbGVhckZpbHRlckRhdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZSgpO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hQYXJhbWV0ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlGaWx0ZXIoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubmF2aWdhdGUoKTtcclxuICAgICAgICB0aGlzLmZldGNoUHJvZHVjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTb3J0KCkge1xyXG5cclxuICAgICAgICB0aGlzLm5hdmlnYXRlKCk7XHJcbiAgICAgICAgdGhpcy5mZXRjaFByb2R1Y3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGFnZShwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZSgpO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hQcm9kdWN0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGxldCBwbSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAgYXMgYW55O1xyXG4gICAgICAgIGxldCBxcG0gPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1NYXAgYXMgYW55O1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlOYW1lID0gcG0ucGFyYW1zLmNhdGVnb3J5TmFtZTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBxcG0ucGFyYW1zLnBhZ2U7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVTb3J0ID0gcXBtLnNvcnQ7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMgPSB0aGlzLmV4Y2x1ZGVQYXJhbXMocXBtLnBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5mZXRjaFBhcmFtZXRlcnMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleGNsdWRlUGFyYW1zKHBhcmFtcykge1xyXG4gICAgICAgIGxldCBwID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTtcclxuICAgICAgICBkZWxldGUgcC5wYWdlO1xyXG4gICAgICAgIGRlbGV0ZSBwLnNvcnQ7XHJcbiAgICAgICAgZGVsZXRlIHAuY2F0ZWdvcnlOYW1lO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0UGFyYW1ldGVycygpIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMubWFwKHBhcmFtZXRlciA9PiB0aGlzLnBhcmFtZXRlcnNTZXJ2aWNlLnVybFRvUGFyYW1ldGVyKHBhcmFtZXRlciwgdGhpcy5wYXJhbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEFjdGl2ZVBhcmFtZXRlcnMoYWN0aXZlUGFyYW1ldGVycykge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5mb3JFYWNoKHBhcmFtZXRlciA9PiB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlci52YWx1ZXMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgICAgIHYuYWN0aXZlID0gYWN0aXZlUGFyYW1ldGVycy5pbmNsdWRlcyh2Ll9pZClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRQYXJhbWV0ZXJzKCkge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLnBhcmFtZXRlcnMubWFwKHggPT4gT2JqZWN0LmFzc2lnbih7fSwgeCkpLmZpbHRlcigocDogUGFyYW1ldGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IHAudmFsdWVzLmZpbmQodiA9PiB2LnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHAudG8gfHwgcC5mcm9tIHx8ICEhc2VsZWN0ZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFyYW1zLmZvckVhY2goKHA6IFBhcmFtZXRlciwgaSwgYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHAudmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgcC52YWx1ZXMgPSBwLnZhbHVlcy5maWx0ZXIodiA9PiB2LnNlbGVjdGVkICYmIHYubm9tYXR0ZXIgIT0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmIChwLmJlaGF2aW9yICE9ICdpbnB1dCcgJiYgcC52YWx1ZXMubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmZXRjaEFjdGl2ZSgpIHtcclxuICAgICAgICBsZXQgcXVlcnkgPSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHRoaXMuZ2V0U2VsZWN0ZWRQYXJhbWV0ZXJzKCksXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHRoaXMuY2F0ZWdvcnlJZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJQcm92aWRlci5nZXRBY3RpdmUocXVlcnkpLnN1YnNjcmliZShyZXNwID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9C/0L7Qu9GD0YfQtdC90Ysg0LDQutGC0LjQstC90YvQtSDQv9Cw0YDQsNC80LXRgtGA0YsnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVQYXJhbWV0ZXJzKHJlc3ApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmZXRjaFBhcmFtZXRlcnMoKXtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlclByb3ZpZGVyLmdldExpc3QodGhpcy5jYXRlZ29yeU5hbWUpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQv9C+0LvRg9GH0LXQvdGLINC/0LDRgNCw0LzQtdGC0YDRiycpO1xyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5SWQgPSByZXNwb25zZS5jYXRpZDtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcmVzcG9uc2UucGFyYW1ldGVycztcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RQYXJhbWV0ZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoQWN0aXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZldGNoUHJvZHVjdHMoKSB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiB0aGlzLmdldFNlbGVjdGVkUGFyYW1ldGVycygpLFxyXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnNvcnRpbmdTZXJ2aWNlLmdldFNlYXJjaCgpLFxyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiB0aGlzLmNhdGVnb3J5SWQsXHJcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0UHJvdmlkZXIubGlzdChxdWVyeSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0L/QvtC70YPRh9C10L3RiyDQv9GA0L7QtNGD0LrRgtGLJyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSByZXNwLnByb2R1Y3RzO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VyQ29tcG9uZW50LnNldHVwKHJlc3AuY291bnQsIHRoaXMucGFnZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5hdmlnYXRlKCkge1xyXG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHtwYWdlOiB0aGlzLnBhZ2V9LCB0aGlzLnNvcnRpbmdTZXJ2aWNlLmdldFVybCgpLCB0aGlzLnBhcmFtZXRlcnNTZXJ2aWNlLmdldEZpbHRlckRhdGEoKSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuY2F0ZWdvcnlOYW1lXSwge3F1ZXJ5UGFyYW1zfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=