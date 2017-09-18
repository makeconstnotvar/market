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
import { ProductProvider } from "providers";
import { Product } from "models";
import { ActivatedRoute, Router } from "@angular/router";
import { ConfigService } from "services/config";
import { ContractProvider } from "providers";
import { NavbarService } from "services/navbar";
import { GlobalService } from "services/global";
let ViewPage = class ViewPage {
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
ViewPage = __decorate([
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
], ViewPage);
export { ViewPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxPQUFPLEVBQXVCLE1BQU0sUUFBUSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQVUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBTTlDLElBQWEsUUFBUSxHQUFyQjtJQWlDSSxZQUFvQixlQUFnQyxFQUNoQyxjQUE4QixFQUM5QixnQkFBa0MsRUFDbEMsYUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsTUFBYztRQU5kLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBdENsQyxZQUFPLEdBQVksSUFBSSxPQUFPLENBQUM7UUF1QzNCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQWM7WUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRO2dCQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUMvQyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDO0lBM0NELFdBQVcsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNuRSxDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWdCO1FBQ3pCLElBQUksUUFBUSxHQUF1QjtZQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDcEIsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1NBRXJCLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDbEQsUUFBUTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0NBdUJKLENBQUE7QUFwRFksUUFBUTtJQUhwQixTQUFTLENBQUM7UUFDUCxXQUFXLEVBQUUsV0FBVztLQUMzQixDQUFDO3FDQWtDdUMsZUFBZTtRQUNoQixjQUFjO1FBQ1osZ0JBQWdCO1FBQ25CLGFBQWE7UUFDYixhQUFhO1FBQ2IsYUFBYTtRQUNwQixNQUFNO0dBdkN6QixRQUFRLENBb0RwQjtTQXBEWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQcm9kdWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnNcIjtcclxuaW1wb3J0IHtQcm9kdWN0LENvbmZpZyxDb2xvcixQb3NpdGlvbn0gZnJvbSBcIm1vZGVsc1wiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9jb25maWdcIjtcclxuaW1wb3J0IHtDb250cmFjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XHJcbmltcG9ydCB7TmF2YmFyU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL25hdmJhclwiO1xyXG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gXCJzZXJ2aWNlcy9nbG9iYWxcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAndmlldy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlld1BhZ2Uge1xyXG4gICAgcHJvZHVjdDogUHJvZHVjdCA9IG5ldyBQcm9kdWN0O1xyXG4gICAgaXNCYWNrOiBib29sZWFuO1xyXG4gICAgc2VsZWN0ZWRJbWFnZTogc3RyaW5nO1xyXG4gICAgcHJvZHVjdElkOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeUlkOiBzdHJpbmc7XHJcbiAgICBjb25maWc6IENvbmZpZztcclxuXHJcbiAgICBpbWFnZVNlbGVjdChpbWFnZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbWFnZSA9IGltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLmdsb2JhbFNlcnZpY2UucHJldmlvdXNTdGF0ZS51cmwpXHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFBvc2l0aW9uKHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgICAgICBsZXQgcG9zaXRpb246IFBvc2l0aW9uID0gPFBvc2l0aW9uPntcclxuICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdC5faWQsXHJcbiAgICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgICAgICAgc3VtOiBwcm9kdWN0LnByaWNlLFxyXG4gICAgICAgICAgICAvL2NvbG9yOiBuZXcgQ29sb3IoKSAvL9C/0L7QutCwINC30LDRgtGL0YfQutCwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbnRyYWN0UHJvdmlkZXIucG9zdFBvc2l0aW9uKHBvc2l0aW9uKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2YmFyU2VydmljZS51cGRhdGVDYXJ0RGF0YShyZXNwb25zZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RQcm92aWRlcjogUHJvZHVjdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbnRyYWN0UHJvdmlkZXI6IENvbnRyYWN0UHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RJZCA9IHBhcmFtc1sncHJvZHVjdElkJ107XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJZCA9IHBhcmFtc1snY2F0ZWdvcnlJZCddO1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RQcm92aWRlci52aWV3KHRoaXMucHJvZHVjdElkKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW1hZ2UgPSB0aGlzLnByb2R1Y3QuaW1hZ2VzWzBdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5leGlzdFByZXZpb3VzU3RhdGUuc3Vic2NyaWJlKHN0YXRlID0+IHRoaXMuaXNCYWNrID0gdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnO1xyXG4gICAgfVxyXG59Il19