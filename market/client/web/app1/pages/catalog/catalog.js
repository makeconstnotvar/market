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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFFLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxjQUFjLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDM0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBTWxFLElBQWEsV0FBVyxHQUF4QjtJQWVJLFlBQW9CLGVBQWdDLEVBQ2hDLGlCQUFvQyxFQUNwQyxpQkFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsS0FBcUIsRUFDckIsTUFBYztRQUxkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFmbEMsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQWdCLEVBQUUsQ0FBQztRQU83QixPQUFFLEdBQVksS0FBSyxDQUFDO0lBUXBCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHRCxXQUFXO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsVUFBVTtRQUVOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQWUsQ0FBQztRQUM3QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFvQixDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFFM0IsQ0FBQztJQUVPLGFBQWEsQ0FBQyxNQUFNO1FBQ3hCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNkLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNkLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUN0QixNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVPLGdCQUFnQjtRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVPLG1CQUFtQixDQUFDLGdCQUFnQjtRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1lBQzdCLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMvQyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVPLHFCQUFxQjtRQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFZO1lBQzVFLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVksRUFBRSxDQUFDLEVBQUUsS0FBSztZQUNsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNULENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUN0RSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQzlDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU8sV0FBVztRQUNmLElBQUksS0FBSyxHQUFHO1lBQ1IsVUFBVSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUN4QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDOUIsQ0FBQztRQUNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTyxlQUFlO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sYUFBYTtRQUNqQixJQUFJLEtBQUssR0FBRztZQUNSLFVBQVUsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDeEMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDbEIsQ0FBQztRQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU8sUUFBUTtRQUNaLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQzdILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0osQ0FBQTtBQWxKNEI7SUFBeEIsU0FBUyxDQUFDLFlBQVksQ0FBQzs7bURBQWdCO0FBQ0w7SUFBbEMsU0FBUyxDQUFDLHNCQUFzQixDQUFDOztrREFBZTtBQUh4QyxXQUFXO0lBSnZCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7cUNBZ0J1QyxlQUFlO1FBQ2IsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNwQixjQUFjO1FBQ3ZCLGNBQWM7UUFDYixNQUFNO0dBcEJ6QixXQUFXLENBb0p2QjtTQXBKWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwibW9kZWxzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJQcm92aWRlciwgUHJvZHVjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcIm1vZGVscy9wYXJhbWV0ZXJcIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJzU2VydmljZSwgU29ydGluZ1NlcnZpY2V9IGZyb20gXCJzZXJ2aWNlc1wiO1xyXG5pbXBvcnQge1BhZ2VyQ29udHJvbH0gZnJvbSBcImNvbnRyb2xzL3BhZ2VyL3BhZ2VyXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50Q2F0YWxvZ0ZpbHRlcn0gZnJvbSBcIi4vY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2F0YWxvZycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NhdGFsb2cuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhdGFsb2dQYWdlIHtcclxuXHJcbiAgICBAVmlld0NoaWxkKFBhZ2VyQ29udHJvbCkgcGFnZXJDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKENvbXBvbmVudENhdGFsb2dGaWx0ZXIpIGNhdGFsb2dGaWx0ZXI7XHJcblxyXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtdO1xyXG4gICAgcGFyYW1ldGVyczogUGFyYW1ldGVyW10gPSBbXTtcclxuICAgIGNhdGVnb3J5SWQ6IHN0cmluZztcclxuICAgIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xyXG4gICAgcGFyYW1zOiBhbnk7XHJcbiAgICBwYWdlOiBudW1iZXI7XHJcbiAgICBzb3J0OiBhbnk7XHJcbiAgICBhY3RpdmVTb3J0OiBzdHJpbmc7XHJcbiAgICB4czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdFByb3ZpZGVyOiBQcm9kdWN0UHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhcmFtZXRlcnNTZXJ2aWNlOiBQYXJhbWV0ZXJzU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFyYW1ldGVyUHJvdmlkZXI6IFBhcmFtZXRlclByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBzb3J0aW5nU2VydmljZTogU29ydGluZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICB4c0NoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLnhzID0gIXRoaXMueHM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRmlsdGVyKHBhcmFtZXRlcikge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMubmF2aWdhdGUoKTtcclxuICAgICAgICB0aGlzLmZldGNoUHJvZHVjdHMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xlYXJGaWx0ZXIoKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMucGFnZTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnNTZXJ2aWNlLmNsZWFyRmlsdGVyRGF0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLm5hdmlnYXRlKCk7XHJcbiAgICAgICAgdGhpcy5mZXRjaFBhcmFtZXRlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseUZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLnhzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZSgpO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hQcm9kdWN0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNvcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubmF2aWdhdGUoKTtcclxuICAgICAgICB0aGlzLmZldGNoUHJvZHVjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQYWdlKHBhZ2UpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG5cclxuICAgICAgICB0aGlzLm5hdmlnYXRlKCk7XHJcbiAgICAgICAgdGhpcy5mZXRjaFByb2R1Y3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgbGV0IHBtID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcCBhcyBhbnk7XHJcbiAgICAgICAgbGV0IHFwbSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbU1hcCBhcyBhbnk7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeU5hbWUgPSBwbS5wYXJhbXMuY2F0ZWdvcnlOYW1lO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHFwbS5wYXJhbXMucGFnZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVNvcnQgPSBxcG0uc29ydDtcclxuICAgICAgICB0aGlzLnBhcmFtcyA9IHRoaXMuZXhjbHVkZVBhcmFtcyhxcG0ucGFyYW1zKTtcclxuICAgICAgICB0aGlzLmZldGNoUGFyYW1ldGVycygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4Y2x1ZGVQYXJhbXMocGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IHAgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpO1xyXG4gICAgICAgIGRlbGV0ZSBwLnBhZ2U7XHJcbiAgICAgICAgZGVsZXRlIHAuc29ydDtcclxuICAgICAgICBkZWxldGUgcC5jYXRlZ29yeU5hbWU7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3RQYXJhbWV0ZXJzKCkge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5tYXAocGFyYW1ldGVyID0+IHRoaXMucGFyYW1ldGVyc1NlcnZpY2UudXJsVG9QYXJhbWV0ZXIocGFyYW1ldGVyLCB0aGlzLnBhcmFtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QWN0aXZlUGFyYW1ldGVycyhhY3RpdmVQYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLmZvckVhY2gocGFyYW1ldGVyID0+IHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyLnZhbHVlcy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgdi5hY3RpdmUgPSBhY3RpdmVQYXJhbWV0ZXJzLmluY2x1ZGVzKHYuX2lkKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZFBhcmFtZXRlcnMoKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMucGFyYW1ldGVycy5tYXAoeCA9PiBPYmplY3QuYXNzaWduKHt9LCB4KSkuZmlsdGVyKChwOiBQYXJhbWV0ZXIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gcC52YWx1ZXMuZmluZCh2ID0+IHYuc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcC50byB8fCBwLmZyb20gfHwgISFzZWxlY3RlZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwYXJhbXMuZm9yRWFjaCgocDogUGFyYW1ldGVyLCBpLCBhcnJheSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocC52YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICBwLnZhbHVlcyA9IHAudmFsdWVzLmZpbHRlcih2ID0+IHYuc2VsZWN0ZWQgJiYgdi5ub21hdHRlciAhPSB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHAuYmVoYXZpb3IgIT0gJ2lucHV0JyAmJiBwLnZhbHVlcy5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpLCAxKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZldGNoQWN0aXZlKCkge1xyXG4gICAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyczogdGhpcy5nZXRTZWxlY3RlZFBhcmFtZXRlcnMoKSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogdGhpcy5jYXRlZ29yeUlkXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlclByb3ZpZGVyLmdldEFjdGl2ZShxdWVyeSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0L/QvtC70YPRh9C10L3RiyDQsNC60YLQuNCy0L3Ri9C1INC/0LDRgNCw0LzQtdGC0YDRiycpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVBhcmFtZXRlcnMocmVzcCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZldGNoUGFyYW1ldGVycygpIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlclByb3ZpZGVyLmdldExpc3QodGhpcy5jYXRlZ29yeU5hbWUpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQv9C+0LvRg9GH0LXQvdGLINC/0LDRgNCw0LzQtdGC0YDRiycpO1xyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5SWQgPSByZXNwb25zZS5jYXRpZDtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcmVzcG9uc2UucGFyYW1ldGVycztcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RQYXJhbWV0ZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoQWN0aXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmZXRjaFByb2R1Y3RzKCkge1xyXG4gICAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyczogdGhpcy5nZXRTZWxlY3RlZFBhcmFtZXRlcnMoKSxcclxuICAgICAgICAgICAgc29ydDogdGhpcy5zb3J0aW5nU2VydmljZS5nZXRTZWFyY2goKSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogdGhpcy5jYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucHJvZHVjdFByb3ZpZGVyLmxpc3QocXVlcnkpLnN1YnNjcmliZShyZXNwID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9C/0L7Qu9GD0YfQtdC90Ysg0L/RgNC+0LTRg9C60YLRiycpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcC5wcm9kdWN0cztcclxuICAgICAgICAgICAgdGhpcy5wYWdlckNvbXBvbmVudC5zZXR1cChyZXNwLmNvdW50LCB0aGlzLnBhZ2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZSgpIHtcclxuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCB7cGFnZTogdGhpcy5wYWdlfSwgdGhpcy5zb3J0aW5nU2VydmljZS5nZXRVcmwoKSwgdGhpcy5wYXJhbWV0ZXJzU2VydmljZS5nZXRGaWx0ZXJEYXRhKCkpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNhdGVnb3J5TmFtZV0sIHtxdWVyeVBhcmFtc30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19