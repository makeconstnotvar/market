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
import { Product } from "models/product";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUMsY0FBYyxFQUFVLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUc5QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQU05QyxJQUFhLFFBQVEsR0FBckI7SUFpQ0ksWUFBb0IsZUFBZ0MsRUFDaEMsY0FBOEIsRUFDOUIsZ0JBQWtDLEVBQ2xDLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLE1BQWM7UUFOZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXRDbEMsWUFBTyxHQUFZLElBQUksT0FBTyxDQUFDO1FBdUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFjO1lBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUTtnQkFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDL0MsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDNUMsQ0FBQztJQTNDRCxXQUFXLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUVELFlBQVksQ0FBQyxPQUFnQjtRQUN6QixJQUFJLFFBQVEsR0FBdUI7WUFDL0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ3BCLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSztTQUVyQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ2xELFFBQVE7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQXVCSixDQUFBO0FBcERZLFFBQVE7SUFIcEIsU0FBUyxDQUFDO1FBQ1AsV0FBVyxFQUFFLFdBQVc7S0FDM0IsQ0FBQztxQ0FrQ3VDLGVBQWU7UUFDaEIsY0FBYztRQUNaLGdCQUFnQjtRQUNuQixhQUFhO1FBQ2IsYUFBYTtRQUNiLGFBQWE7UUFDcEIsTUFBTTtHQXZDekIsUUFBUSxDQW9EcEI7U0FwRFksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvZHVjdFByb3ZpZGVyfSBmcm9tIFwicHJvdmlkZXJzXCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIm1vZGVscy9wcm9kdWN0XCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSBcInNlcnZpY2VzL2NvbmZpZ1wiO1xyXG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIm1vZGVscy9jb25maWdcIjtcclxuaW1wb3J0IHtDb2xvcn0gZnJvbSBcIm1vZGVscy9jb2xvclwiO1xyXG5pbXBvcnQge0NvbnRyYWN0UHJvdmlkZXJ9IGZyb20gXCJwcm92aWRlcnNcIjtcclxuaW1wb3J0IHtOYXZiYXJTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvbmF2YmFyXCI7XHJcbmltcG9ydCB7UG9zaXRpb259IGZyb20gXCJtb2RlbHMvcG9zaXRpb25cIjtcclxuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvZ2xvYmFsXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXcuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFZpZXdQYWdlIHtcclxuICAgIHByb2R1Y3Q6IFByb2R1Y3QgPSBuZXcgUHJvZHVjdDtcclxuICAgIGlzQmFjazogYm9vbGVhbjtcclxuICAgIHNlbGVjdGVkSW1hZ2U6IHN0cmluZztcclxuICAgIHByb2R1Y3RJZDogc3RyaW5nO1xyXG4gICAgY2F0ZWdvcnlJZDogc3RyaW5nO1xyXG4gICAgY29uZmlnOiBDb25maWc7XHJcblxyXG4gICAgaW1hZ2VTZWxlY3QoaW1hZ2UpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW1hZ2UgPSBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5nbG9iYWxTZXJ2aWNlLnByZXZpb3VzU3RhdGUudXJsKVxyXG4gICAgfVxyXG5cclxuICAgIHBvc3RQb3NpdGlvbihwcm9kdWN0OiBQcm9kdWN0KSB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBQb3NpdGlvbiA9IDxQb3NpdGlvbj57XHJcbiAgICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QuX2lkLFxyXG4gICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXHJcbiAgICAgICAgICAgIHN1bTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgICAgICAgLy9jb2xvcjogbmV3IENvbG9yKCkgLy/Qv9C+0LrQsCDQt9Cw0YLRi9GH0LrQsFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb250cmFjdFByb3ZpZGVyLnBvc3RQb3NpdGlvbihwb3NpdGlvbikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmJhclNlcnZpY2UudXBkYXRlQ2FydERhdGEocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0UHJvdmlkZXI6IFByb2R1Y3RQcm92aWRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb250cmFjdFByb3ZpZGVyOiBDb250cmFjdFByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBwYXJhbXNbJ3Byb2R1Y3RJZCddO1xyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5SWQgPSBwYXJhbXNbJ2NhdGVnb3J5SWQnXTtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0UHJvdmlkZXIudmlldyh0aGlzLnByb2R1Y3RJZCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdCA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEltYWdlID0gdGhpcy5wcm9kdWN0LmltYWdlc1swXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2UuZXhpc3RQcmV2aW91c1N0YXRlLnN1YnNjcmliZShzdGF0ZSA9PiB0aGlzLmlzQmFjayA9IHRydWUpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZztcclxuICAgIH1cclxufSJdfQ==