var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ProductProvider } from "providers/product";
import { Product } from "entities/product";
import { ActivatedRoute, Router } from "@angular/router";
import { ConfigService } from "services/config";
import { ContractProvider } from "providers/contract";
import { NavbarService } from "services/navbar";
import { GlobalService } from "services/global";
let PageView = class PageView {
    constructor(productProvider, activatedRoute, contractProvider, navbarService, configService, globalService, router) {
        this.productProvider = productProvider;
        this.activatedRoute = activatedRoute;
        this.contractProvider = contractProvider;
        this.navbarService = navbarService;
        this.configService = configService;
        this.globalService = globalService;
        this.router = router;
        this.product = new Product;
        this.activatedRoute.params.subscribe((params) => {
            this.productId = params['productId'];
            this.categoryId = params['categoryId'];
            this.productProvider.view(this.productId).subscribe(response => {
                this.product = response;
                this.selectedImage = this.product.images[0];
            });
        });
        this.globalService.existPreviousState.subscribe(state => this.isBack = true);
        this.config = this.configService.config;
    }
    imageSelect(image) {
        this.selectedImage = image;
    }
    back() {
        this.router.navigateByUrl(this.globalService.previousState.url);
    }
    postPosition(product) {
        let position = {
            product: product._id,
            count: 1,
            price: product.price,
            sum: product.price,
        };
        this.contractProvider.postPosition(position).subscribe(response => {
            console.log(response);
            this.navbarService.updateCartData(response);
        });
    }
};
PageView = __decorate([
    Component({
        templateUrl: 'view.html'
    }),
    __metadata("design:paramtypes", [ProductProvider,
        ActivatedRoute,
        ContractProvider,
        NavbarService,
        ConfigService,
        GlobalService,
        Router])
], PageView);
export { PageView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxjQUFjLEVBQVUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRzlDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFNOUMsSUFBYSxRQUFRLEdBQXJCO0lBaUNJLFlBQW9CLGVBQWdDLEVBQ2hDLGNBQThCLEVBQzlCLGdCQUFrQyxFQUNsQyxhQUE0QixFQUM1QixhQUE0QixFQUM1QixhQUE0QixFQUM1QixNQUFjO1FBTmQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUF0Q2xDLFlBQU8sR0FBWSxJQUFJLE9BQU8sQ0FBQztRQXVDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBYztZQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVE7Z0JBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO2dCQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQy9DLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUM7SUEzQ0QsV0FBVyxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFFRCxZQUFZLENBQUMsT0FBZ0I7UUFDekIsSUFBSSxRQUFRLEdBQXVCO1lBQy9CLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRztZQUNwQixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUs7U0FFckIsQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNsRCxRQUFRO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7Q0F1QkosQ0FBQTtBQXBEWSxRQUFRO0lBSHBCLFNBQVMsQ0FBQztRQUNQLFdBQVcsRUFBRSxXQUFXO0tBQzNCLENBQUM7cUNBa0N1QyxlQUFlO1FBQ2hCLGNBQWM7UUFDWixnQkFBZ0I7UUFDbkIsYUFBYTtRQUNiLGFBQWE7UUFDYixhQUFhO1FBQ3BCLE1BQU07R0F2Q3pCLFFBQVEsQ0FvRHBCO1NBcERZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Byb2R1Y3RQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVycy9wcm9kdWN0XCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcImVudGl0aWVzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvY29uZmlnXCI7XHJcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiZW50aXRpZXMvY29uZmlnXCI7XHJcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJlbnRpdGllcy9jb2xvclwiO1xyXG5pbXBvcnQge0NvbnRyYWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnMvY29udHJhY3RcIjtcclxuaW1wb3J0IHtOYXZiYXJTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvbmF2YmFyXCI7XHJcbmltcG9ydCB7UG9zaXRpb259IGZyb20gXCJlbnRpdGllcy9wb3NpdGlvblwiO1xyXG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9nbG9iYWxcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAndmlldy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZVZpZXcge1xyXG4gICAgcHJvZHVjdDogUHJvZHVjdCA9IG5ldyBQcm9kdWN0O1xyXG4gICAgaXNCYWNrOiBib29sZWFuO1xyXG4gICAgc2VsZWN0ZWRJbWFnZTogc3RyaW5nO1xyXG4gICAgcHJvZHVjdElkOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeUlkOiBzdHJpbmc7XHJcbiAgICBjb25maWc6IENvbmZpZztcclxuXHJcbiAgICBpbWFnZVNlbGVjdChpbWFnZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbWFnZSA9IGltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLmdsb2JhbFNlcnZpY2UucHJldmlvdXNTdGF0ZS51cmwpXHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFBvc2l0aW9uKHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgICAgICBsZXQgcG9zaXRpb246IFBvc2l0aW9uID0gPFBvc2l0aW9uPntcclxuICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdC5faWQsXHJcbiAgICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgICAgICAgc3VtOiBwcm9kdWN0LnByaWNlLFxyXG4gICAgICAgICAgICAvL2NvbG9yOiBuZXcgQ29sb3IoKSAvL9C/0L7QutCwINC30LDRgtGL0YfQutCwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbnRyYWN0UHJvdmlkZXIucG9zdFBvc2l0aW9uKHBvc2l0aW9uKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2YmFyU2VydmljZS51cGRhdGVDYXJ0RGF0YShyZXNwb25zZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RQcm92aWRlcjogUHJvZHVjdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbnRyYWN0UHJvdmlkZXI6IENvbnRyYWN0UHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RJZCA9IHBhcmFtc1sncHJvZHVjdElkJ107XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJZCA9IHBhcmFtc1snY2F0ZWdvcnlJZCddO1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RQcm92aWRlci52aWV3KHRoaXMucHJvZHVjdElkKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW1hZ2UgPSB0aGlzLnByb2R1Y3QuaW1hZ2VzWzBdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5leGlzdFByZXZpb3VzU3RhdGUuc3Vic2NyaWJlKHN0YXRlID0+IHRoaXMuaXNCYWNrID0gdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnO1xyXG4gICAgfVxyXG59Il19